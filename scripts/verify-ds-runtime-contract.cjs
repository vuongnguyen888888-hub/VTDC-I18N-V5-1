#!/usr/bin/env node
/** Strict non-browser VIDC CSS integration gate: actual Figma values, five button geometries,
 *  seven variants, semantic token references, cascade order and reduced-motion scope.
 *  Deliberately does not claim to replace computed-style tests in a browser.
 */
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const css = read('src/index.css');
const figma = read('src/tokens/figma-source.css');
const handoff = read('src/tokens/vidc-handoff.css');
const bridge = read('src/tokens/vidc-semantic-bridge.css');
const controls = read('src/tokens/vidc-controls.css');
const btn = read('src/components/ui/VIDCButton.tsx');
const fonts = read('src/tokens/vidc-local-fonts.css');
const palette = read('src/tokens/vidc-tailwind-figma-palette.css');
const paletteInventory = JSON.parse(read('docs/DS_V2_TAILWIND_FIGMA_MIGRATION.json'));


const imports = [...css.matchAll(/@import\s+"([^"\n]+)"/g)].map(m=>m[1]);
assert.ok(imports.includes('./tokens/vidc-tailwind-figma-palette.css'),'Figma Tailwind mapping must be loaded into real app CSS');
assert.match(palette, /@theme inline\s*\{/,'Tailwind v4 @theme mapping is required');
assert.match(palette, /--color-red-500:\s*var\(--vidc-colors-brand-500\)/,'Brand red Tailwind must map to Figma #EE0033');
assert.match(palette, /--color-slate-900:\s*var\(--vidc-colors-gray-light-mode-900\)/,'Legacy slate must map to Figma gray');
assert.equal(paletteInventory.legacyPreservedDueToMissingFigmaShade && Object.keys(paletteInventory.legacyPreservedDueToMissingFigmaShade).length,0,'Live Tailwind palette variants must have Figma mappings');
assert.equal(paletteInventory.figmaCoveredUses, paletteInventory.legacyTailwindPaletteUses,'Every scanned Tailwind color instance must map to Figma primitive');
assert.match(css, /main#main-content h1, main#main-content h2, main#main-content h3\s*\{[^}]*font-weight:\s*600 !important/s,'H1-H3 utility font overrides must not bypass Figma SemiBold');

const mandatory = [
  'tailwindcss', './tokens/figma-source.css', './tokens/vidc-local-fonts.css',
  './tokens/viettel-idc.tokens.css', './tokens/viettel-idc.tokens.v8.css',
  './tokens/vidc-handoff.css', './tokens/vidc-legacy-palette.css',
  './tokens/vidc-semantic-bridge.css', './tokens/vidc-controls.css'
];
for(const i of mandatory) assert.equal(imports.filter(x=>x===i).length,1,`Missing/duplicate or incorrect CSS import ${i}`);
const at=(s)=>imports.indexOf(s);
assert.ok(at('./tokens/figma-source.css') < at('./tokens/viettel-idc.tokens.css'));
assert.ok(at('./tokens/viettel-idc.tokens.v8.css') < at('./tokens/vidc-handoff.css'));
assert.ok(at('./tokens/vidc-handoff.css') < at('./tokens/vidc-semantic-bridge.css'));
assert.ok(at('./tokens/vidc-semantic-bridge.css') < at('./tokens/vidc-controls.css'));
assert.match(css, /h1, h2, h3\s*\{[^}]*font-family:\s*var\(--vidc-font-display\)/s);
assert.match(handoff,/--vidc-font-display:\s*"FS PF BeauSans Pro"/);
assert.match(handoff,/--vidc-font-body:\s*var\(--font-roboto\)/);
assert.match(bridge,/--font-roboto:\s*"Roboto"/);
assert.match(fonts,/\/fonts\/vidc\//);
assert.match(figma,/--vidc-vidc-radius-button-bottom-left:\s*2px;/);
const outer={'sm':8,'md':10,'lg':14,'xl':10,'2xl':14};
for(const [size,pixels] of Object.entries(outer)) {
  assert.match(figma,new RegExp(`--vidc-vidc-radius-button-outer-${pixels}:\\s*${pixels}px;`),`Figma radius ${pixels}px missing`);
  const match=handoff.match(new RegExp(`\\.vidc-btn\\[data-size="${size}"\\]\\s*\\{([^}]*)\\}`));
  assert.ok(match,`No Figma geometry for button ${size}`);
  const r=match[1].match(/border-radius:\s*([^;]+);/);
  assert.ok(r,`No radius for button ${size}`);
  const corners=r[1].match(/var\([^)]*\)/g)||[];
  assert.equal(corners.length,4,`Four asymmetric corners required for button ${size}`);
  for(let n=0;n<3;n++) assert.ok(corners[n].includes(`--vidc-radius-button-outer-${pixels}`),`Unexpected corner #${n+1} in button ${size}`);
  assert.ok(corners[3].includes('--vidc-radius-button-bottom-left'),`Bottom-left radius token missing for ${size}`);
}
for(const variant of ['primary','secondary','tertiary','ghost','link','warning','destructive']) {
  assert.ok(btn.includes(`'${variant}'`),`Public button variant type missing ${variant}`);
  assert.ok(handoff.includes(`.vidc-btn--${variant}`),`No CSS for public button variant ${variant}`);
}
for(const state of ['hover:not(:disabled)',':active:not(:disabled)',':focus-visible',':disabled','[data-loading="true"]'])
  assert.ok(handoff.includes(state),`Missing button interaction state: ${state}`);
assert.match(handoff,/--vidc-action-primary-default:\s*#EE0033;/i);
assert.match(handoff,/--vidc-action-primary-hover:\s*#D6002E;/i);
assert.match(handoff,/--vidc-action-primary-pressed:\s*#BE0029;/i);
assert.match(handoff,/\.vidc-btn--destructive\s*\{[^}]*var\(--vidc-action-destructive-default\)/s);
assert.match(handoff,/@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{[\s\S]*?animation-duration:\s*0\.01ms !important/);
// A universal forced short animation must NOT be inside a mobile-only media query.
const mobile = handoff.match(/@media\s*\(max-width:\s*767px\)\s*\{([\s\S]*?)\n\}/);
assert.ok(mobile,'Mobile typography scaling missing');
assert.ok(!/animation-duration:\s*0\.01ms\s*!important/.test(mobile[1]),'Mobile animation wrongly forced off for all users');
assert.match(controls,/\.vidc-native-control:focus-visible/);
console.log('PASS: Figma primary colors, 5 asymmetric button sizes, 7 variants, states, font cascade and mobile/reduced-motion separation.');
