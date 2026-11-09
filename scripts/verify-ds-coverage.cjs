#!/usr/bin/env node
/** Static UI coverage gate. Run on every PR after npm ci. */
const fs=require('node:fs'),path=require('node:path'),ts=require('typescript');
const root=path.resolve(__dirname,'../src');
const skip=new Set(['VIDCButton.tsx','VIDCNativeControls.tsx','VIDCAnchor.tsx']);
const primitiveTags=new Set(['button','input','textarea','select','a']);
const dsTags=new Set(['VIDCNativeButton','VIDCNativeInput','VIDCNativeTextarea','VIDCNativeSelect','VIDCAnchor']);
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):/\.tsx?$/.test(e.name)?[path.join(d,e.name)]:[]);
const stats={files:0,rawNativeElements:0,rawHexUtilities:0,dsInstances:{},colorsTokenized:0,importIssues:[],jsxSyntaxIssues:[],paletteMissing:[],rawStyleHex:0};
const paletteFile=fs.readFileSync(path.join(root,'tokens/vidc-legacy-palette.css'),'utf8');
const paletteTokens=new Set([...paletteFile.matchAll(/(--vidc-legacy-hex-[0-9a-f]{3,8})\s*:/g)].map(m=>m[1]));
for(const file of walk(root)){
 const text=fs.readFileSync(file,'utf8');stats.files++;
 const parser=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true,file.endsWith('.tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);
 for(const e of parser.parseDiagnostics)stats.jsxSyntaxIssues.push(`${path.relative(root,file)}: ${ts.flattenDiagnosticMessageText(e.messageText,' ')}`);
 if(file.endsWith('.tsx')){
   const scan=n=>{
     if(ts.isJsxOpeningElement(n)||ts.isJsxSelfClosingElement(n)){
       const tag=n.tagName.getText(parser);
       if(dsTags.has(tag))stats.dsInstances[tag]=(stats.dsInstances[tag]||0)+1;
       if(!skip.has(path.basename(file))&&primitiveTags.has(tag))stats.rawNativeElements++;
     }
     ts.forEachChild(n,scan)
   };scan(parser);
 }
 stats.rawHexUtilities+=(text.match(/\b(?:bg|text|border|ring|from|via|to|fill|stroke|outline|decoration|caret|divide|shadow)-\[#[0-9a-fA-F]{3,8}\]/g)||[]).length;
 for(const m of text.matchAll(/var\((--vidc-legacy-hex-[0-9a-f]{3,8})\)/g)) {
   stats.colorsTokenized++;
   if(!paletteTokens.has(m[1]))stats.paletteMissing.push(`${path.relative(root,file)} -> ${m[1]}`);
 }
 for(const m of text.matchAll(/(?:import|export)\s+(?:[\s\S]*?from\s+)?['"](\.{1,2}\/[^'"]+)['"]/g)){
   const base=path.resolve(path.dirname(file),m[1]);
   if(!['','.ts','.tsx','.js','.mjs','.json','.css','/index.ts','/index.tsx'].some(ext=>fs.existsSync(base+ext)))stats.importIssues.push(`${path.relative(root,file)} => ${m[1]}`)
 }
}
const fail=stats.rawNativeElements||stats.rawHexUtilities||stats.paletteMissing.length||stats.jsxSyntaxIssues.length||stats.importIssues.length;
console.log(JSON.stringify(stats,null,2));
if(fail)process.exitCode=1;
