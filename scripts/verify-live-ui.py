#!/usr/bin/env python3
"""Real production Next.js UI acceptance gate using Chromium (not a mock).

Runs after npm ci / npm run build. Serves `next start`, loads browser pages,
verifies BeauSans is ACTUALLY loaded and computed on H1-H3, verifies live DOM,
interactive controls and breakpoint screenshots. Fails closed on regressions.
"""
import json
import os
import subprocess
import sys
import time
import urllib.request
from pathlib import Path

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    raise SystemExit('BLOCKED: Playwright Python is required for real-browser acceptance; no false PASS.');

root=Path(__file__).resolve().parent.parent
if not (root/'.next/BUILD_ID').is_file():
    raise SystemExit('BLOCKED: .next/BUILD_ID missing. Production build has not passed.')
if not (root/'node_modules/next/dist/bin/next').is_file():
    raise SystemExit('BLOCKED: Next runtime dependencies missing.')
port=int(os.environ.get('VIDC_BROWSER_PORT','43187'))
base=f'http://127.0.0.1:{port}'
results=[]
errors=[]
out=root/'browser-acceptance'
out.mkdir(exist_ok=True)
server=subprocess.Popen(['node', 'node_modules/next/dist/bin/next', 'start','-H','127.0.0.1','-p',str(port)],cwd=root,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,env={**os.environ,'NODE_ENV':'production','PORT':str(port)})

def check(condition, message):
    if not condition: errors.append(message)

def wait_server():
    for _ in range(90):
        if server.poll() is not None: return False
        try:
            with urllib.request.urlopen(base+'/', timeout=2) as r:
                if r.status<500:return True
        except Exception: pass
        time.sleep(1)
    return False

try:
    if not wait_server(): raise RuntimeError('Production server did not start')
    with sync_playwright() as p:
        browser=p.chromium.launch(headless=True,args=['--no-sandbox'])
        try:
            for width in (375,768,1440):
                context=browser.new_context(viewport={'width':width,'height':900},device_scale_factor=1,locale='vi-VN')
                page=context.new_page()
                console=[]
                page.on('pageerror',lambda error: console.append(str(error)))
                for path,expected_lang in [('/','vi-VN'),('/en-vn/','en-VN'),('/en/','en'),('/services/','vi-VN'),('/solutions/','vi-VN')]:
                    item={'width':width,'path':path}
                    try:
                        resp=page.goto(base+path,wait_until='domcontentloaded',timeout=45000)
                        page.locator('main#main-content').wait_for(state='attached',timeout=20000)
                        page.wait_for_timeout(400)
                        item['httpStatus']=resp.status if resp else None
                        item['htmlLang']=page.locator('html').get_attribute('lang')
                        item['title']=page.title()
                        item['mainTextLength']=page.locator('main#main-content').inner_text(timeout=5000).__len__()
                        item['bodyScrollWidth']=page.evaluate('document.documentElement.scrollWidth')
                        item['visibleHeadingCount']=page.locator('h1,h2,h3').count()
                        check(item['httpStatus']==200,f'{path} width={width}: expected HTTP 200, got {item["httpStatus"]}')
                        check(item['htmlLang']==expected_lang,f'{path} width={width}: html lang={item["htmlLang"]} expected {expected_lang}')
                        check(item['mainTextLength']>50,f'{path} width={width}: main content appears empty')
                        check(item['bodyScrollWidth']<=width+3,f'{path} width={width}: unexpected horizontal overflow {item["bodyScrollWidth"]}')
                        if path=='/':
                            h=page.locator('h1').first
                            check(h.count()>0,'Home page has no H1')
                            if h.count()>0:
                                # Verify actual binary load, not merely CSS family text.
                                sample='Điện toán đám mây tiếng Việt'
                                fonts=page.evaluate('''async sample => {
                                  await document.fonts.load('600 36px "FS PF BeauSans Pro"',sample);
                                  const h=document.querySelector('h1');
                                  const css=h?getComputedStyle(h):null;
                                  const matching=[...document.fonts].filter(f=>f.family.includes('FS PF BeauSans Pro') && f.weight==='600');
                                  return {fontFamily:css?.fontFamily,fontWeight:css?.fontWeight,fontSize:css?.fontSize,
                                    fontFaceLoaded:matching.some(f=>f.status==='loaded'),fontFaces:matching.length,
                                    fontCheck:document.fonts.check('600 36px "FS PF BeauSans Pro"',sample)};
                                }''',sample)
                                item['headingFont']=fonts
                                check(fonts['fontFaceLoaded'],f'Home width={width}: BeauSans 600 not loaded from bundled TTF')
                                check(fonts['fontFamily'] and 'FS PF BeauSans Pro' in fonts['fontFamily'],f'Home width={width}: wrong H1 computed font')
                                check(fonts['fontWeight']=='600',f'Home width={width}: wrong H1 weight {fonts["fontWeight"]}')
                                expected_size='36px' if width<=767 else '48px'
                                check(fonts['fontSize']==expected_size,f'Home width={width}: wrong H1 font-size {fonts["fontSize"]}, need {expected_size}')
                            # Validate the REAL homepage primary CTA rendered with the shared DS V2 primitive.
                            button=page.locator('.vidc-btn.vidc-btn--primary[data-size="lg"]').first
                            check(button.count()>0,f'Home width={width}: no VIDCButton primary/lg on live page')
                            if button.count():
                                cta=button.evaluate('''el => {
                                  const s=getComputedStyle(el);
                                  return {background:s.backgroundColor, tl:s.borderTopLeftRadius,
                                    tr:s.borderTopRightRadius, br:s.borderBottomRightRadius,
                                    bl:s.borderBottomLeftRadius};
                                }''')
                                item['primaryButton']=cta
                                check(cta['background']=='rgb(238, 0, 51)',f'Home width={width}: wrong DS primary CTA background: {cta}')
                                check(cta['tl']==cta['tr']==cta['br']=='14px' and cta['bl']=='2px',
                                    f'Home width={width}: button asymmetry not DS V2: {cta}')
                        # Full-page screenshots of actual Next UI; not an isolated DS fixture.
                        filename=path.strip('/').replace('/','_') or 'home'
                        screen=f'{filename}_{width}.png'
                        page.screenshot(path=str(out/screen),full_page=True,animations='disabled',timeout=30000)
                        item['screenshot']=screen
                    except Exception as e:
                        item['exception']=str(e)
                        errors.append(f'{path} width={width}: {e}')
                    results.append(item)
                if console:errors.append(f'Browser JavaScript exceptions at width={width}: {console[:6]}')
                context.close()
        finally: browser.close()
finally:
    server.terminate()
    try:server.wait(timeout=4)
    except subprocess.TimeoutExpired:server.kill()

report={'kind':'ACTUAL_NEXT_PRODUCTION_BROWSER_TEST','browser':'Chromium / Playwright',
        'passed':not errors,'failures':errors,'runs':results,'runtimeVersion':'Next.js 15'}
(out/'results.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'passed':report['passed'],'screenshots':len([x for x in results if 'screenshot' in x]),'errors':errors[:12]},ensure_ascii=False,indent=2))
if errors:sys.exit(1)
