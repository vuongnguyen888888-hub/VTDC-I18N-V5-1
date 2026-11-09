import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'design-system/HANDOFF_MANIFEST.json'), 'utf8'));
const byPath = new Map(manifest.files.map(entry => [entry.path, entry]));
const base = 'source/design-system/figma/';
for (const filename of ['vidc.figma.ready.css', 'vidc.figma.resolved.json', 'vidc.figma.raw.json']) {
  const expected = byPath.get(base + filename);
  assert.ok(expected, `Missing source declaration for ${filename}`);
  const content = fs.readFileSync(path.join(root, 'design-system/figma', filename));
  assert.equal(crypto.createHash('sha256').update(content).digest('hex'), expected.sha256, filename);
}
const css = fs.readFileSync('src/tokens/vidc-handoff.css', 'utf8');
for (const expected of ['.vidc-btn--primary', '.vidc-btn--secondary', '.vidc-btn--warning', '--vidc-action-primary-hover']) {
  assert.ok(css.includes(expected), `Missing button token/class ${expected}`);
}
assert.ok(!css.includes('@import "tailwindcss"'), 'Duplicate Tailwind import');
assert.ok(fs.existsSync('src/components/ui/InputField.tsx'), 'Missing InputField');
assert.ok(fs.existsSync('src/components/ui/OtpInput.tsx'), 'Missing OtpInput');
assert.ok(fs.existsSync('src/components/ui/TextareaField.tsx'), 'Missing TextareaField');
console.log('PASS: Figma export SHA-256 (3/3) and DS component/source contract.');
