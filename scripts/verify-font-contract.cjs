#!/usr/bin/env node
/** Static DS font contract; strict asset check only with --assets. */
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
const css=fs.readFileSync(path.join(root,'src/tokens/vidc-local-fonts.css'),'utf8');
const appCss=fs.readFileSync(path.join(root,'src/index.css'),'utf8');
const handoff=fs.readFileSync(path.join(root,'src/tokens/vidc-handoff.css'),'utf8');
const bridge=fs.readFileSync(path.join(root,'src/tokens/vidc-semantic-bridge.css'),'utf8');
const manifest=require('../docs/BEAUSANS_FONT_MANIFEST.json');
assert.equal(manifest.source_variants.length,12);
assert.ok(appCss.includes('@import "./tokens/vidc-local-fonts.css";'));
assert.match(appCss,/h1, h2, h3\s*\{\s*font-family:\s*var\(--vidc-font-display\)/);
assert.match(handoff,/--vidc-font-display:\s*"FS PF BeauSans Pro"/);
assert.match(handoff,/--vidc-font-body:\s*var\(--font-roboto\)/);
assert.match(bridge,/--font-roboto:\s*\"Roboto\"/,'--font-roboto must resolve or both display and body font-family declarations become invalid');
assert.match(appCss,/h1, h2, h3\s*\{[^}]*font-weight:\s*600/,'Figma heading weight must be SemiBold');
assert.match(appCss,/main#main-content h1, main#main-content h2, main#main-content h3\s*\{[^}]*font-weight:\s*600 !important/s, 'BeauSans typography MUST target the real Next.js DOM, not retired #root');
const bundleDir=path.join(root,'public/fonts/vidc');
const existingFaces=manifest.source_variants.filter(face=>fs.existsSync(path.join(bundleDir,face.target_filename)));
const validateAssets=process.argv.includes('--assets') || existingFaces.length>0;
if(existingFaces.length>0 && existingFaces.length!==12){
  throw new Error('Incomplete BeauSans bundle: '+existingFaces.length+'/12. Never silently render a partial font family.');
}
for(const face of manifest.source_variants){
  const block=css.split('@font-face').slice(1).find(b=>b.includes('/'+face.target_filename+'"'));
  assert.ok(block,'Missing @font-face: '+face.target_filename);
  assert.ok(block.includes('font-weight: '+face.weight+';'), 'Wrong weight: '+face.target_filename);
  assert.ok(block.includes('font-style: '+face.style+';'), 'Wrong style: '+face.target_filename);
  if(validateAssets){
    const file=path.join(root,'public/fonts/vidc',face.target_filename);
    assert.ok(fs.existsSync(file),'Missing licensed asset: '+file);
    const hash=crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
    assert.equal(hash,face.sha256,'Font digest mismatch: '+face.target_filename);
  }
}
for(const s of ['sm','md','lg']){
  const pattern=new RegExp('\\.vidc-btn\\[data-size="'+s+'"\\][\\s\\S]*?border-radius:[^;]+var\\(--vidc-radius-button-bottom-left, 2px\\)');
  assert.match(handoff,pattern,'Button three-corner contract missing: '+s);
}
console.log('PASS: 12 BeauSans faces, heading/Roboto mapping, 3-corner button contract'+(validateAssets?' and SHA-256 validated licensed font binaries':' (source-only, binaries not certified)'));
