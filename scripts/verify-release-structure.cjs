#!/usr/bin/env node
/** Git/AI Studio upload safety gate (no network or browser required). */
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const read=(f)=>fs.readFileSync(path.join(root,f),'utf8');
const exists=f=>fs.existsSync(path.join(root,f));
const pkg=JSON.parse(read('package.json'));
assert.equal(pkg.private,true,'The project must not be published accidentally to npm');
assert.match(pkg.dependencies.next,/^15\./,'Next.js App Router 15 must be preserved');
assert.match(pkg.dependencies.react,/19/,'React 19 must be preserved');
assert.equal(pkg.type,'module');
assert.match(pkg.scripts.dev,/run-next\.mjs dev/);
assert.match(pkg.scripts.build,/run-next\.mjs build/);
assert.ok(read('scripts/run-next.mjs').includes('env.PORT'),'Dev server must honor dynamic PORT');
assert.ok(read('scripts/run-next.mjs').includes('start'),'Production server launcher missing');
assert.ok(!exists('vite.config.ts') && !exists('vite.config.js'),'Vite configs must not be introduced');
assert.ok(!exists('bun.lock') && !exists('yarn.lock') && !exists('pnpm-lock.yaml'),'npm is the only package manager');
assert.ok(exists('package-lock.json'));
assert.ok(exists('src/app/layout.tsx') && exists('src/app/not-found.tsx') && exists('src/middleware.ts'));
for(const p of [
  'design-system/figma/vidc.figma.ready.css',
  'src/tokens/vidc-local-fonts.css',
  'src/tokens/vidc-handoff.css',
  'src/tokens/figma-source.css',
  'src/tokens/vidc-semantic-bridge.css',
  'src/tokens/vidc-legacy-palette.css',
  'src/components/ui/VIDCButton.tsx',
  'src/components/ui/VIDCNativeControls.tsx',
  'src/config/localeRegistry.ts',
  'docs/BEAUSANS_FONT_MANIFEST.json',
  'docs/RELEASE_STATUS.md',
  'AI_STUDIO_HANDOFF.md'
])assert.ok(exists(p),'Required Git/AI Studio source missing: '+p);
assert.match(read('src/app/globals.css'),/@import "\.\.\/index\.css"/);
assert.match(read('src/index.css'),/@import "\.\/tokens\/vidc-local-fonts\.css"/);
assert.match(read('src/index.css'),/@import "\.\/tokens\/vidc-semantic-bridge\.css"/);
assert.match(read('src/index.css'),/@import "\.\/tokens\/vidc-controls\.css"/);
assert.match(read('src/tokens/vidc-semantic-bridge.css'),/--font-roboto:\s*"Roboto"/);
// Source code cannot carry private env files or platform scratch files.
for(const name of fs.readdirSync(root)){
  assert.ok(!/^\.env\.(?!example$)/.test(name),'Private env file in release: '+name);
}
assert.ok(!exists('.aistudio/artifacts'),'Generated AI Studio scratch files should not ship');
// Source checks do NOT claim licensed binaries are bundled. Release checks must verify them separately.
const manifest=JSON.parse(read('docs/BEAUSANS_FONT_MANIFEST.json'));
assert.ok(exists('.nvmrc'),'Node version hint missing');
assert.equal(read('.nvmrc').trim(),'22');
assert.equal(manifest.source_variants.length,12);
assert.equal(manifest.binary_assets_in_source_archive,false,'Never claim font binaries were shipped when they were not');
assert.ok(pkg.scripts['fonts:verify'].includes('--assets'),'Strict font SHA-256 verification must remain available');
assert.match(read('.github/workflows/release-ui.yml'),/npm run fonts:verify/,'Release acceptance must gate on licensed binaries');
console.log('PASS: npm-only Next.js 15/React 19 App Router structure, DS/i18n paths and AI Studio handoff.');
console.log('SOURCE CHECK ONLY: licensed font binaries and live UI are release-only acceptance gates.');
