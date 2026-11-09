#!/usr/bin/env node
/** Source-level i18n extraction report. No inference that untranslated copy is translated. */
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),ts=require('typescript');
const root=path.resolve(__dirname,'../src');const out=path.resolve(__dirname,'../docs');
const files=[];const walk=d=>{for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(/\.tsx?$/.test(p))files.push(p)}};walk(root);
const outRows=[],byFile={},byKey=new Map();
// Dictionaries already contain alternate language values; they are not a backlog of hard-coded public copy.
const localizedSources=new Set(['utils/translations.ts','utils/quoteLocale.ts','data/multilingualServiceData.ts','data/serviceEnglishTranslations.ts']);
const humanAttr=new Set(['alt','title','placeholder','aria-label','aria-description','label','description','heading','subtitle','eyebrow','buttontext','helptext','tooltip','caption','question','answer','ctatext','headingtext','emptytext','errormessage','hint']);
const humanProp=new Set(['alt','title','label','description','heading','subtitle','eyebrow','buttontext','helptext','tooltip','caption','question','answer','text','ctatext','headingtext','emptytext','errormessage','hint','tagline']);
const literalPattern=/[A-Za-zÀ-Ỵà-ỹ\u0E80-\u0EFF\u1000-\u109F\u1780-\u17FF]/u;
const likelyUI=s=>{
  if(!literalPattern.test(s)||s.trim().length<2)return false;
  if(/^(?:https?:|mailto:|tel:|\/|#|data:|var\(|rgb|hsl)/i.test(s.trim()))return false;
  if(s.length<65&&/^[a-z0-9_-]+(?:\s+[a-z0-9_:/.\[\]%-]+){2,}$/i.test(s.trim())&&/\b(?:bg-|text-|flex|grid|px-|py-|rounded-|hover:|border-|font-|opacity-)/.test(s))return false;
  if(/^\s*\{/.test(s)&&/\}\s*$/.test(s))return false;
  return true;
};
for(const file of files) {
 const src=fs.readFileSync(file,'utf8'),f=path.relative(root,file);if(localizedSources.has(f))continue;
 const tree=ts.createSourceFile(file,src,ts.ScriptTarget.Latest,true,file.endsWith('tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);
 function record(text,node,kind) {
   const clean=text.replace(/\s+/g,' ').trim();if(!likelyUI(clean))return;
   const key=crypto.createHash('sha1').update(clean).digest('hex').slice(0,12),line=tree.getLineAndCharacterOfPosition(node.getStart(tree)).line+1;
   const entry={key,file:f,line,kind,source:clean};outRows.push(entry);
   byFile[f]=(byFile[f]||0)+1;
   const item=byKey.get(key)||{source:clean,occurrences:0,files:new Set(),kinds:new Set()};item.occurrences++;item.files.add(f);item.kinds.add(kind);byKey.set(key,item);
 }
 function visit(node){
   if(ts.isJsxText(node))record(node.text,node,'jsxText');
   if(ts.isJsxAttribute(node)&&node.initializer&&ts.isStringLiteral(node.initializer)&&humanAttr.has(node.name.text.toLowerCase()))record(node.initializer.text,node,'jsxAttribute:'+node.name.text);
   if(ts.isPropertyAssignment(node)&&ts.isIdentifier(node.name)&&humanProp.has(node.name.text.toLowerCase())&&ts.isStringLiteral(node.initializer))record(node.initializer.text,node,'dataProperty:'+node.name.text);
   ts.forEachChild(node,visit);
 }visit(tree);
}
const q=s=>'"'+String(s).replace(/"/g,'""')+'"';
const csv='key,file,line,kind,source\n'+outRows.map(e=>[q(e.key),q(e.file),e.line,q(e.kind),q(e.source)].join(',')).join('\n')+'\n';
fs.writeFileSync(path.join(out,'I18N_COPY_INVENTORY.csv'),csv);
const catalog=Object.fromEntries([...byKey].sort((a,b)=>a[0].localeCompare(b[0])).map(([key,v])=>[key,{source:v.source,occurrences:v.occurrences,files:[...v.files],kinds:[...v.kinds],translationsPending:['en','lo','fil','my','km']} ]));
fs.writeFileSync(path.join(out,'I18N_COPY_CATALOG.json'),JSON.stringify({schema:'2026.11',purpose:'Human linguistic QA and translation backlog; not a translated message bundle',catalog},null,2)+'\n');
const summary={filesScanned:files.length-localizedSources.size,occurrences:outRows.length,uniqueStrings:byKey.size,filesWithCandidateCopy:Object.keys(byFile).length,topFiles:Object.entries(byFile).sort((a,b)=>b[1]-a[1]).slice(0,20),note:'These are candidate source strings, NOT a verified count of untranslated content. Known VI/EN/SEA dictionaries are excluded. Conditional/dynamic/CMS copy needs separate linguistic QA.'};
fs.writeFileSync(path.join(out,'I18N_COPY_SUMMARY.json'),JSON.stringify(summary,null,2)+'\n');
console.log(JSON.stringify(summary,null,2));
