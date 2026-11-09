#!/usr/bin/env node
/** Tokenize inline Tailwind hex arbitrary values and JSX style color strings.
 * Leaves product illustrations, flag SVG artwork and non-CSS data values alone. */
const fs=require('node:fs'),path=require('node:path'),ts=require('typescript');
const root=path.resolve(__dirname,'../src');
const files=[];
const walk=d=>{for(const e of fs.readdirSync(d,{withFileTypes:true})){const f=path.join(d,e.name);if(e.isDirectory())walk(f);else if(/\.(tsx|ts)$/.test(e.name)) files.push(f)}};walk(root);
const semantic={
  'ee0033':'--vidc-action-primary-default','d6002e':'--vidc-action-primary-hover','be0029':'--vidc-action-primary-pressed',
  'c5002a':'--vidc-text-brand','ffffff':'--vidc-surface-default','f9fafb':'--vidc-surface-elevated',
  '101828':'--vidc-text-primary','344054':'--vidc-text-secondary','667085':'--vidc-text-tertiary',
  '98a2b3':'--vidc-text-muted','eaecf0':'--vidc-border-default','d0d5dd':'--vidc-border-strong',
  'f2f4f7':'--vidc-surface-subtle','fff1f4':'--vidc-color-brand-subtle','ff6482':'--vidc-color-brand-pink',
  '0b0e17':'--vidc-colors-gray-light-mode-950','f04438':'--vidc-colors-error-500',
  'd92d20':'--vidc-colors-error-600','17b26a':'--vidc-colors-success-500',
};
const palette=new Map();
// A second invocation must NEVER erase palette definitions created by the first.
const palettePath=path.join(root,'tokens/vidc-legacy-palette.css');
if(fs.existsSync(palettePath)) {
  for(const match of fs.readFileSync(palettePath,'utf8').matchAll(/(--vidc-legacy-hex-[0-9a-f]{3,8}):\s*(#[0-9a-fA-F]{3,8})\s*;/g)) {
    palette.set(match[1],match[2]);
  }
}
const norm=h=>h.length===3?h.split('').map(x=>x+x).join(''):h.toLowerCase();
const getVariable=raw=>{
 const hex=norm(raw.toLowerCase());if(semantic[hex])return semantic[hex];
 const name=`--vidc-legacy-hex-${hex}`;palette.set(name,`#${hex.toUpperCase()}`);return name;
};
const stats={files:0,classes:0,inlineStyleColors:0,semanticTokensUsed:{},paletteTokens:0};
for(const file of files) {
 let text=fs.readFileSync(file,'utf8');let changes=0;
 // All Tailwind arbitrary hex literals, including hover:/dark:/responsive modifiers.
 text=text.replace(/\b(bg|text|border|ring|from|via|to|fill|stroke|outline|decoration|caret|divide|shadow)-\[#([0-9a-fA-F]{3,8})\]/g,(full,prefix,hex)=>{
   const v=getVariable(hex);stats.semanticTokensUsed[v]=(stats.semanticTokensUsed[v]||0)+1;
   changes++;stats.classes++;return `${prefix}-[var(${v})]`;
 });
 const source=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true,file.endsWith('tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS),edits=[];
 const rgba=/#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g;
 function visit(n){
   if(ts.isJsxAttribute(n)&&n.name.getText(source)==='style'&&n.initializer&&ts.isJsxExpression(n.initializer)) {
     const obj=n.initializer.expression;
     if(obj){
       function scan(j){
         if(ts.isStringLiteral(j)&&rgba.test(j.text)){
           // Inline SVG/DOM CSS style strings only. JS math/data formats remain untouched.
           const before=j.text,after=before.replace(rgba,h=>`var(${getVariable(h.slice(1))})`);
           if(after!==before){edits.push({start:j.getStart(source),end:j.getEnd(),text:JSON.stringify(after)});stats.inlineStyleColors++}
         }
         rgba.lastIndex=0;ts.forEachChild(j,scan);
       }
       scan(obj);
     }
   }
   ts.forEachChild(n,visit);
 }
 if(file.endsWith('.tsx'))visit(source);
 for(const e of edits.sort((a,b)=>b.start-a.start))text=text.slice(0,e.start)+e.text+text.slice(e.end);
 if(changes||edits.length){fs.writeFileSync(file,text);stats.files++}
}
stats.paletteTokens=palette.size;
const css=['/* Automatically generated compatibility palette for bespoke UI.',' * All values preserve original visuals; review and migrate to canonical semantic DS tokens',' * when each product design owner approves. Do not edit Figma primitives here. */',':root {',...Array.from(palette.entries()).sort((a,b)=>a[0].localeCompare(b[0])).map(([k,v])=>`  ${k}: ${v};`),'}',''].join('\n');
fs.writeFileSync(palettePath,css);
fs.writeFileSync(path.join(root,'../docs/DS_COLOR_MIGRATION_LAST_RUN.json'),JSON.stringify(stats,null,2)+'\n');
console.log(JSON.stringify({files:stats.files,classes:stats.classes,inlineStyleColors:stats.inlineStyleColors,paletteTokens:stats.paletteTokens},null,2));
