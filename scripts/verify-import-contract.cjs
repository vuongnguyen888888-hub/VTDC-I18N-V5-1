#!/usr/bin/env node
/** TypeScript AST import resolver for all local static + dynamic imports, including '@/'.
 * Complements tsc while preserving the existing alias/path architecture.
 */
const fs=require('node:fs'),path=require('node:path'),ts=require('typescript');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),src=path.join(root,'src');
const walk=(d)=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):/\.(ts|tsx|js|jsx|mjs)$/.test(e.name)?[path.join(d,e.name)]:[]);
const files=walk(src),errors=[];
const counts={files:0,localImports:0,aliasImports:0,relativeImports:0};
for(const filename of files){
  counts.files++;
  const text=fs.readFileSync(filename,'utf8');
  const sf=ts.createSourceFile(filename,text,ts.ScriptTarget.Latest,true,/\.(tsx|jsx)$/.test(filename)?ts.ScriptKind.TSX:ts.ScriptKind.TS);
  for(const issue of sf.parseDiagnostics)errors.push(`${path.relative(root,filename)}: ${ts.flattenDiagnosticMessageText(issue.messageText,' ')}`);
  const resolve=(name)=>{
    if(!name.startsWith('@/')&&!name.startsWith('.'))return;
    counts.localImports++;
    const isAlias=name.startsWith('@/');
    if(isAlias)counts.aliasImports++;else counts.relativeImports++;
    const base=isAlias?path.resolve(src,name.slice(2)):path.resolve(path.dirname(filename),name);
    const candidates=[base,base+'.ts',base+'.tsx',base+'.js',base+'.jsx',base+'.mjs',base+'.json',base+'.css',path.join(base,'index.ts'),path.join(base,'index.tsx')];
    if(!candidates.some(candidate=>fs.existsSync(candidate)&&fs.statSync(candidate).isFile())) errors.push(`${path.relative(root,filename)} => ${name}`);
  };
  const scan=(n)=>{
    if((ts.isImportDeclaration(n)||ts.isExportDeclaration(n))&&n.moduleSpecifier&&ts.isStringLiteral(n.moduleSpecifier))resolve(n.moduleSpecifier.text);
    if(ts.isCallExpression(n)&&n.expression.kind===ts.SyntaxKind.ImportKeyword&&n.arguments[0]&&ts.isStringLiteral(n.arguments[0]))resolve(n.arguments[0].text);
    ts.forEachChild(n,scan);
  };
  scan(sf);
}
console.log(JSON.stringify({...counts,errors:errors.slice(0,25)},null,2));
assert.equal(errors.length,0,`Parser or local path issues: ${errors.length}`);
console.log('PASS: TypeScript AST imports including aliases and dynamic imports.');
