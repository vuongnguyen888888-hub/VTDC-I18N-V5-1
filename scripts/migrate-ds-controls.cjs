#!/usr/bin/env node
/** One-time TypeScript-AST migration. Idempotent; preserves JSX attributes and ref semantics. */
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..', 'src');
const mapping = {button:'VIDCNativeButton', input:'VIDCNativeInput', textarea:'VIDCNativeTextarea', select:'VIDCNativeSelect', a:'VIDCAnchor'};
const skip = new Set(['VIDCNativeControls.tsx', 'VIDCButton.tsx', 'VIDCAnchor.tsx']);
const walk = d => fs.readdirSync(d,{withFileTypes:true}).flatMap(e => e.isDirectory()? walk(path.join(d,e.name)):e.name.endsWith('.tsx')?[path.join(d,e.name)]:[]);
const stats = { files: 0, tags: {button:0, input:0, textarea:0, select:0, a:0}, byFile: {} };
for(const file of walk(root)) {
  if(skip.has(path.basename(file)))continue;
  const original=fs.readFileSync(file,'utf8');
  const source=ts.createSourceFile(file, original, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits=[], used=new Set(); let count=0;
  function visit(node) {
    if(ts.isJsxOpeningElement(node)||ts.isJsxSelfClosingElement(node)||ts.isJsxClosingElement(node)) {
      const tag=node.tagName.getText(source);
      if(Object.prototype.hasOwnProperty.call(mapping,tag)) {
        edits.push({start:node.tagName.getStart(source),end:node.tagName.getEnd(),text:mapping[tag]});
        used.add(mapping[tag]);stats.tags[tag]++;count++;
      }
    }
    ts.forEachChild(node,visit);
  }
  visit(source);
  if (!used.size)continue;
  const existing=new Set();for(const imp of source.statements)if(ts.isImportDeclaration(imp)){
    const cl=imp.importClause;
    if(cl?.namedBindings && ts.isNamedImports(cl.namedBindings)){
      for(const element of cl.namedBindings.elements)existing.add(element.name.text);
    }
  }
  const need=[...used].filter(k=>!existing.has(k));
  if(need.length){
    const imps=source.statements.filter(ts.isImportDeclaration);
    const directives=source.statements.filter(s=>ts.isExpressionStatement(s)&&ts.isStringLiteral(s.expression));
    const last=imps.length?imps[imps.length-1]:directives.length?directives[directives.length-1]:null;
    const at=last?last.end:0;
    const anchor=need.includes('VIDCAnchor');
    const controls=need.filter(n=>n!=='VIDCAnchor');
    const imports=(controls.length ? `\nimport { ${controls.sort().join(', ')} } from '@/components/ui/VIDCNativeControls';` : '')
      + (anchor ? `\nimport { VIDCAnchor } from '@/components/ui/VIDCAnchor';` : '') + '\n';
    edits.push({start:at,end:at,text:imports});
  }
  let out=original;for(const edit of edits.sort((a,b)=>b.start-a.start))out=out.slice(0,edit.start)+edit.text+out.slice(edit.end);
  fs.writeFileSync(file,out);stats.files++;stats.byFile[path.relative(root,file)]=count;
}
const report=path.resolve(root,'../docs/DS_CONTROL_MIGRATION_LAST_RUN.json');
fs.writeFileSync(report,JSON.stringify(stats,null,2)+'\n');
console.log(JSON.stringify({files:stats.files,tags:stats.tags,report:path.relative(path.dirname(root),report)},null,2));
