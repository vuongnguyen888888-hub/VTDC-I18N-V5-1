#!/usr/bin/env python3
"""Independent DS style-only smoke using locally installed Chromium; NOT Next e2e."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json
import os

root=Path(__file__).resolve().parent.parent
import base64
import re

def inline_css():
    source=(root/'src/index.css').read_text()
    def expand(match):
        filename=match.group(1)
        if filename=='tailwindcss': return '/* Tailwind requires a Next build; omitted from static fixture */'
        return (root/'src'/filename).read_text()
    css=re.sub(r'@import\s+"([^"\n]+)";', expand, source)
    # Embed ONLY the specific user font in browser memory; no font binaries are written to reports.
    face=root/'public/fonts/vidc/FS-PFBEAUSANSPRO-SEMIBOLD.ttf'
    assert face.exists()
    uri='data:font/ttf;base64,'+base64.b64encode(face.read_bytes()).decode()
    css=css.replace('url("/fonts/vidc/FS-PFBEAUSANSPRO-SEMIBOLD.ttf")',f'url("{uri}")')
    return css
css=inline_css()
html=f'''<!DOCTYPE html><html lang="vi-VN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<style>{css}</style>
<style>body{{margin:0;background:var(--vidc-surface-canvas);color:var(--vidc-text-primary)}}
.shell{{max-width:1100px;margin:auto;padding:32px 24px}}
.top{{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #EAECF0;gap:16px;flex-wrap:wrap}}
.pill{{display:inline-block;padding:5px 10px;background:var(--vidc-colors-brand-50);color:var(--vidc-colors-brand-600);border-radius:999px}}
.cards{{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}}
.card{{border:1px solid var(--vidc-border-default);border-radius:12px;background:var(--vidc-surface-default);padding:20px}}
.buttonrow{{display:flex;flex-wrap:wrap;gap:12px;margin:20px 0}}
.font-extrabold{{font-weight:800}}
@media(max-width:767px){{.shell{{padding:22px 14px}}}}</style></head>
<body><div id="root"><header class="top shell"><strong>VIETTEL IDC</strong><span class="pill">Figma DS V2 · Browser Test</span></header>
<main class="shell"><div class="pill">Cloud & Data Center</div>
<h1 class="font-extrabold">Hạ tầng số vững chắc cho doanh nghiệp</h1>
<p>Kiểm tra font BeauSans thực tế, màu thương hiệu, button và kích thước responsive.</p>
<div class="buttonrow">''' + ''.join(f'<button class="vidc-btn vidc-btn--primary" data-size="{size}">{size.upper()}</button>' for size in ('sm','md','lg','xl','2xl'))+ '''</div>
<div class="buttonrow">''' + ''.join(f'<button class="vidc-btn vidc-btn--{variant}" data-size="md">{variant}</button>' for variant in ('secondary','tertiary','ghost','link','warning','destructive')) + '''</div>
<div class="cards"><div class="card"><h2>Trung tâm Dữ liệu</h2><p>Thiết kế responsive theo tokens.</p></div>
<div class="card"><h3>Cloud Services</h3><p>Màu sắc lấy từ các biến Figma gốc.</p></div></div>
</main></div></body></html>'''
out=root/'docs';results={}
try:
    with sync_playwright() as p:
        browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
        for width in (375,768,1440):
            page=browser.new_page(viewport={'width':width,'height':900})
            page.set_content(html,wait_until='load')
            page.evaluate('document.fonts.load(\'600 48px "FS PF BeauSans Pro"\',"Tiếng Việt")')
            d=page.evaluate('''() => { const h=document.querySelector('h1');const c=getComputedStyle(h);
              const btn=[...document.querySelectorAll('.vidc-btn')].map(x=>({s:x.dataset.size||'md',radius:getComputedStyle(x).borderRadius,bg:getComputedStyle(x).backgroundColor}));
              return {font:c.fontFamily,weight:c.fontWeight,size:c.fontSize,
              faceLoaded:[...document.fonts].some(f=>f.family.includes('FS PF BeauSans Pro')&&f.weight==='600'&&f.status==='loaded'),
              scrollWidth:document.documentElement.scrollWidth,buttons:btn};}''')
            assert d['faceLoaded'],f'BeauSans did not load: {width}'
            assert d['weight']=='600',f'Figma H1 should be 600, got {d["weight"]}'
            assert d['size']==('36px' if width<=767 else '48px'),(width,d['size'])
            assert d['buttons'][0]['radius']=='8px 8px 8px 2px',d['buttons'][0]
            assert d['buttons'][0]['bg']=='rgb(238, 0, 51)',d['buttons'][0]
            assert d['scrollWidth']<=width+1,(width,d['scrollWidth'])
            page.screenshot(path=str(out/f'DS_V2_CHROMIUM_{width}.png'),full_page=True)
            results[str(width)]=d
            page.close()
        browser.close()
finally:pass
(out/'DS_V2_CHROMIUM_RUNTIME.json').write_text(json.dumps({'kind':'Independent CSS+HTML DS fixture; NOT actual Next website', 'results':results},ensure_ascii=False,indent=2)+'\n')
print('PASS: Independent DS browser fixture at',','.join(results),'BeauSans loaded, Figma H1 and buttons correct')
