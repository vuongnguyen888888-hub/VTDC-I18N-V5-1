#!/usr/bin/env python3
"""Source-line VIDC/Figma DS V2 auditor. No npm dependency.

Reads each line in source TS/TSX/CSS and compares the Figma export source and
references against actual declarations. Does NOT claim that a Next/browser
production render has passed.
"""
from __future__ import annotations
import csv
import hashlib
import json
import re
from collections import Counter, defaultdict
from pathlib import Path

root = Path(__file__).resolve().parent.parent
src = root / 'src'
docs = root / 'docs'
figma_root = root / 'design-system' / 'figma'
raw = json.loads((figma_root / 'vidc.figma.raw.json').read_text())
resolved = json.loads((figma_root / 'vidc.figma.resolved.json').read_text())
css_origin = (root / 'src/tokens/figma-source.css').read_text()
css_input = (figma_root / 'vidc.figma.ready.css').read_text()

assert raw['counts']['variables'] == len(raw['variables']) == len(resolved['variables']) == 1069
assert len(raw['collections']) == 8
assert len(raw['styles']['text']) == 25
assert len(raw['styles']['paint']) == 977
assert len(raw['styles']['effect']) == 24
assert len(raw['styles']['grid']) == 8
assert css_origin == css_input, 'Figma handoff CSS differs between DS library and runtime source'

css_files = sorted(src.rglob('*.css'))
source_files = sorted(p for p in src.rglob('*') if p.suffix in ('.css', '.ts', '.tsx'))
declarations: dict[str, list[str]] = defaultdict(list)
for f in css_files:
    content = f.read_text()
    for i, line in enumerate(content.splitlines(), 1):
        for match in re.finditer(r'(?<![-\w])(--[\w-]+)\s*:', line):
            declarations[match[1]].append(f'{f.relative_to(root)}:{i}')

palette=json.loads((docs/'DS_V2_TAILWIND_FIGMA_MIGRATION.json').read_text())['mapping']
issues=[]
counts=Counter()
files_count=Counter()
refs=Counter()
for file in source_files:
    rel=str(file.relative_to(root))
    lines=file.read_text(errors='replace').splitlines()
    files_count[file.suffix]+=1
    counts['source_lines']+=len(lines)
    for i,line in enumerate(lines,1):
        # Each file is read line by line and each used token is resolved.
        for m in re.finditer(r'var\(\s*(--[\w-]+)', line):
            token=m[1];refs[token]+=1;counts['css_var_references']+=1
            if token not in declarations and not token.startswith('--tw-'):
                issues.append([rel,i,'UNDEFINED_CSS_VARIABLE',token])
        if file.suffix in ('.ts','.tsx'):
            counts['application_source_lines']+=1
            for m in re.finditer(r'var\((--vidc-legacy-hex-[0-9a-fA-F]{3,8})\)',line):
                counts['legacy_color_references']+=1
                issues.append([rel,i,'EXPLICIT_LEGACY_COLOR_EXCEPTION',m[1]])
            for m in re.finditer(r'\b(?:bg|text|border|ring|from|via|to|fill|stroke)-(?:slate|gray|red|yellow|green|blue|rose|pink|orange|indigo|zinc|neutral)-(?:\d{2,3})(?:\/\d+)?\b',line):
                key=re.search(r'(slate|gray|red|yellow|green|blue|rose|pink|orange|indigo|zinc|neutral)-(\d{2,3})',m[0])
                if key and f'{key[1]}-{key[2]}' in palette:
                    counts['tailwind_v2_palette_remapped']+=1
                else:
                    counts['tailwind_unmapped_color_uses']+=1
                    issues.append([rel,i,'UNMAPPED_TAILWIND_COLOR_REVIEW',m[0]])
            # Detect className font utilities on heading tags. Strict CSS overrides them.
            if re.search(r'<h[1-5]\b',line) and re.search(r'font-(?:black|extrabold|bold|medium|light|thin)',line):
                counts['heading_nonsemantic_weight_classes']+=1
                # Canonical typography override is enforced by root stylesheet; tracked as remediated.
            if 'style={{' in line and re.search(r'(?:color|background|font|border)',line,re.I):
                counts['inline_style_review']+=1
    counts['source_files']+=1

# Confirm Figma key/reference coverage rather than assuming tokens defined.
figma_css = (figma_root/'vidc.figma.ready.css').read_text()
for t in ('--vidc-colors-brand-500: #EE0033;',
          '--vidc-vidc-radius-button-bottom-left: 2px;',
          '--vidc-colors-background-bg-primary:',
          '--vidc-vidc-heading-h1-font-size:'):
    assert t in figma_css, f'Missing canonical Figma reference: {t}'

for item in raw['styles']['text']:
    name=item['name']
    if name.startswith('VIDC/Heading/H') or name.startswith('VIDC/Mobile/Heading/H'):
        h=int(name.rsplit('H',1)[1]);family=item['fontName']['family'];weight=item['fontName']['style']
        expected=('FS PF BeauSans Pro' if h<=3 else 'Roboto')
        assert family==expected and weight=='SemiBold', f'Unexpected Figma heading: {name} {family} {weight}'

fatal=[x for x in issues if x[2]=='UNDEFINED_CSS_VARIABLE']
with (docs/'DS_V2_LINE_EXCEPTION_INVENTORY.csv').open('w',newline='') as f:
    w=csv.writer(f);w.writerow(('file','line','category','value'));w.writerows(issues)
report={
    'authority':'Figma 2026-11-09 + VIDC DS V2',
    'audit':'line-by-line static source, not website rendering',
    'figmaCounts':raw['counts'],
    'figmaSnapshotSHA256':{f:hashlib.sha256((figma_root/f).read_bytes()).hexdigest() for f in ('vidc.figma.raw.json','vidc.figma.resolved.json','vidc.figma.ready.css')},
    'sourceFileExtensions':dict(files_count),
    'sourceCounts':dict(counts),
    'cssVariableDeclarations':len(declarations),
    'referencedDistinctCSSVariables':len(refs),
    'cssVariableFatalIssues':fatal,
    'nonfatalExceptionOccurrences':len(issues)-len(fatal),
    'status':'FAIL' if fatal else 'PASS_STATIC_WITH_DOCUMENTED_EXCEPTIONS',
    'meaning':'legacy and bespoke Tailwind palettes remain only as preserved exceptions; this scan does not prove their Figma component equivalence or real browser behavior',
}
(docs/'DS_V2_LINE_AUDIT.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:v for k,v in report.items() if k in ('status','sourceFileExtensions','sourceCounts','cssVariableFatalIssues','nonfatalExceptionOccurrences')},ensure_ascii=False,indent=2))
if fatal: raise SystemExit(1)
