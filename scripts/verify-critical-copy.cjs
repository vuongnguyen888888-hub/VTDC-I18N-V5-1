#!/usr/bin/env node
/** Locale copy acceptance for the quote form and not-found CTA (public conversion path). */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),ts=require('typescript');
const root=path.resolve(__dirname,'../src');
const source=fs.readFileSync(path.join(root,'utils/quoteLocale.ts'),'utf8');
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const mod={exports:{}};vm.runInThisContext(`(function(exports,module){${js}\n})`,{filename:'quoteLocale.ts'})(mod.exports,mod);
const q=mod.exports;const en=q.QUOTE_COPY.en,vi=q.QUOTE_COPY.vn;
assert.deepEqual(Object.keys(en).sort(),Object.keys(vi).sort(),'Public quote copy must have exact VI/EN key parity');
for(const [key,value] of Object.entries(en)){
 assert.ok(value.length>0,`Missing EN value for ${key}`);
 assert.doesNotMatch(value,/[À-ỹ]/u,`Untranslated Vietnamese value in EN copy ${key}`);
}
assert.equal(q.getQuoteLocale('en'),'en');assert.equal(q.getQuoteLocale('vi-VN'),'vn');
for(const k of ['cloud_server','gpu_ai','colocation_rack','cloud_backup','cloud_waf','cloud_migration']){
 assert.doesNotMatch(q.localizeQuoteService(k,'Viettel '+k+' (Máy chủ)', 'en'),/[À-ỹ]/u,`Untranslated service ${k}`);
}
const modal=fs.readFileSync(path.join(root,'components/common/EnterpriseQuoteModal.tsx'),'utf8');
assert.match(modal,/getQuoteLocale\(currentLanguage\)/);
assert.match(modal,/lang=\{quoteLocale/);
assert.match(modal,/filteredServices = useMemo/);
const notFound=fs.readFileSync(path.join(root,'components/common/ServiceNotFound.tsx'),'utf8');
assert.match(notFound,/getFullPath\("\/services\/"\)/);
assert.match(notFound,/Service not found/);
console.log(`PASS: public quote + service-not-found VI/EN locale copy (${Object.keys(en).length} keyed fields, service options and localized navigation). Planned SEA languages currently have English fallback.`);
