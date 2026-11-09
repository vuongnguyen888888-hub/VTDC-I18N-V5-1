#!/usr/bin/env node
/** Contract checks on actual TypeScript routing logic; does not require Next runtime. */
const fs=require('node:fs'),path=require('node:path'),ts=require('typescript'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'../src');const cache=new Map();
function load(file){
  let p=path.resolve(file);if(!p.endsWith('.ts'))p+='.ts';if(cache.has(p))return cache.get(p).exports;
  const mod={exports:{}};cache.set(p,mod);
  const js=ts.transpileModule(fs.readFileSync(p,'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS}}).outputText;
  const req=name=>name.startsWith('.')?load(path.resolve(path.dirname(p),name)):require(name);
  const fn=vm.runInThisContext(`(function(require,module,exports){${js}\n})`,{filename:p});fn(req,mod,mod.exports);return mod.exports;
}
const locale=load(path.join(root,'config/localeRegistry.ts'));
const routes=load(path.join(root,'utils/routingMatrix.ts'));
const configs=Object.values(locale.LOCALE_REGISTRY);assert.equal(configs.length,11);
const prefixes=new Set(configs.map(x=>x.routePrefix));assert.equal(prefixes.size,11);
const cases={
 'vi-VN':'/', 'en-VN':'/en-vn',en:'/en','lo-LA':'/la','en-LA':'/la-en',
 'fil-PH':'/ph','en-PH':'/ph-en','my-MM':'/mm','en-MM':'/mm-en',
 'km-KH':'/kh','en-KH':'/kh-en'
};
for(const [code,pathPrefix] of Object.entries(cases)){
 const cfg=locale.LOCALE_REGISTRY[code];assert.ok(cfg);assert.equal(pathPrefix,cfg.routePrefix||'/');
 const href=(cfg.routePrefix||'')+'/services/cloud-server?utm_source=test#overview';
 const parsed=locale.parseLocalePrefixFromPath(href);if(cfg.routePrefix)assert.equal(parsed.locale.locale,code);
 assert.equal(routes.getPureSlug(href),'/services/cloud-server');
 assert.equal(routes.buildLocalizedHref('/services/cloud-server?utm_source=test#overview',cfg.marketCode==='int'?'global':cfg.marketCode==='kh'?'vcloudia':cfg.marketCode,cfg.languageCode==='vi'?'vn':cfg.languageCode),href);
}
assert.equal(routes.buildLocalizedHref('https://example.com/example?a=1','la','en'),'https://example.com/example?a=1');
assert.equal(routes.buildLocalizedHref('mailto:hello@example.com','vn','vn'),'mailto:hello@example.com');
assert.equal(routes.buildLocalizedHref('/assets/file.pdf','la','la'),'/assets/file.pdf');
assert.equal(routes.buildLocalizedHref('/api/health','la','la'),'/api/health');
assert.equal(routes.buildLocalizedHref('#pricing','la','la'),'#pricing');
assert.equal(routes.buildLocalizedHref('/services/','vn','en'),'/en-vn/services/');
assert.equal(routes.buildLocalizedRedirectPath('/kh-en/dich-vu/cloud-server','/services/cloud-server'),'/kh-en/services/cloud-server');
console.log(`PASS: ${configs.length} BCP-47 locale configurations, ${prefixes.size-1} prefixed variants, URL suffix/external/asset preservation and redirect locale contracts.`);
