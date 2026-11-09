/** Runtime regression checks for manifest, 10 locale prefixes, domain boundaries and redirects. */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ts = require('typescript');
const Module = require('node:module');
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function (request, parent, ...rest) {
  if (request.startsWith('.') && !path.extname(request) && parent?.filename) {
    const resolved = path.resolve(path.dirname(parent.filename), request);
    if (fs.existsSync(resolved + '.ts')) request = resolved + '.ts';
  }
  return originalResolve.call(this, request, parent, ...rest);
};
require.extensions['.ts'] = (mod, filename) => {
  const source = fs.readFileSync(filename, 'utf8');
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } });
  mod._compile(output.outputText, filename);
};
const core = require(path.join(process.cwd(), 'src/utils/routingMatrix.ts'));
const { LOCALE_REGISTRY } = require(path.join(process.cwd(), 'src/config/localeRegistry.ts'));
const { MASTER_ROUTE_MANIFEST, validateMasterRouteManifest, resolveRouteFromManifest } = require(path.join(process.cwd(), 'src/data/masterRouteManifest.ts'));
const { REDIRECT_MANIFEST, getRedirectTarget } = require(path.join(process.cwd(), 'src/data/redirectManifest.ts'));
const { isValidAppRoute } = require(path.join(process.cwd(), 'src/utils/routeValidator.ts'));
const { TRANSLATIONS } = require(path.join(process.cwd(), 'src/utils/translations.ts'));
const { resolveMarketContext } = require(path.join(process.cwd(), 'src/lib/context/resolveMarketContext.ts'));
const locales = Object.values(LOCALE_REGISTRY);
assert.equal(locales.length, 11, '11 BCP-47 locale definitions including Cambodian English');
const prefixes = locales.map(l => l.routePrefix).filter(Boolean);
assert.equal(new Set(prefixes).size, 10, 'No locale prefix collisions');
for (const locale of locales) {
  const market = locale.marketCode === 'int' ? 'global' : locale.marketCode === 'kh' ? 'vcloudia' : locale.marketCode;
  const lang = locale.languageCode;
  const url = core.buildLocalizedPath('/services/compute/cloud-server/', market, lang);
  assert.equal(core.getPureSlug(url), '/services/compute/cloud-server', `Pure slug for ${locale.locale}`);
  assert.equal(core.parsePathToMarketAndLanguage(url).routePrefix, locale.routePrefix, `Prefix for ${locale.locale}`);
  assert.equal(core.parsePathToMarketAndLanguage(url).pureSlug, '/services/compute/cloud-server');
}
assert.equal(core.buildLocalizedRedirectPath('/la-en/services/cloud-server', '/services/compute/cloud-server/'), '/la-en/services/compute/cloud-server');
assert.equal(core.buildLocalizedRedirectPath('/en/services/cloud-server/', '/services/compute/cloud-server'), '/en/services/compute/cloud-server');
assert.equal(core.buildLocalizedRedirectPath('/services/cloud-server', '/services/compute/cloud-server'), '/services/compute/cloud-server');
assert.deepEqual(validateMasterRouteManifest(), []);
assert.equal(MASTER_ROUTE_MANIFEST.services.length, 59);
assert.equal(MASTER_ROUTE_MANIFEST.solutions.length, 16);
const canon = MASTER_ROUTE_MANIFEST.services.map(s => s.canonicalPath.replace(/\/+$/, '').toLowerCase());
assert.equal(canon.length, new Set(canon).size, 'Every canonical service has a unique URL');
assert.ok(resolveRouteFromManifest('/services/containers/dedicated-kubernetes-service'));
assert.ok(resolveRouteFromManifest('/services/containers/kubernetes-service/'));
assert.equal(resolveMarketContext('localhost:3000', '/en/services').htmlLang, 'en');
assert.equal(resolveMarketContext('localhost:3000', '/kh-en/services').htmlLang, 'en-KH');
assert.equal(resolveMarketContext('viettelidc.com', '/la/services').noIndex, true);
assert.equal(resolveMarketContext('fakeviettelidc.com', '/services').environment, 'isolated');
assert.equal(REDIRECT_MANIFEST.length, 264, 'Retain all 264 legacy redirect records');
for (const entry of REDIRECT_MANIFEST) {
  const source = entry.sourcePath.replace(/\/+$/, '') || '/';
  const target = entry.targetPath.replace(/\/+$/, '') || '/';
  assert.notEqual(source, target, `Self-redirect at ${source}`);
  assert.equal(getRedirectTarget(target), null, `Redirect chain at ${source}`);
  assert.ok(isValidAppRoute(target), `Unknown redirect target ${target}`);
}
assert.equal(isValidAppRoute('/admin/arbitrary'), false);
const flatten = (value, prefix = '') => Object.entries(value).flatMap(([key, child]) =>
  typeof child === 'string' ? [prefix + key] : flatten(child, prefix + key + '.')
);
const languageKeys = Object.keys(TRANSLATIONS);
assert.deepEqual(languageKeys.sort(), ['en', 'kh', 'la', 'mm', 'ph', 'vn']);
const reference = flatten(TRANSLATIONS.vn).sort();
assert.equal(reference.length, 138, 'Dictionary baseline size');
for (const key of languageKeys) assert.deepEqual(flatten(TRANSLATIONS[key]).sort(), reference, `Translation coverage: ${key}`);
console.log(`PASS: ${locales.length} locales, ${prefixes.length} prefixes, 59 unique services, 16 solutions, 264 redirects, 6 complete interface dictionaries and domain protections.`);
