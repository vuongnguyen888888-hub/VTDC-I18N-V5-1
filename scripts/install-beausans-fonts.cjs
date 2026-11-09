#!/usr/bin/env node
/** Install user-owned licensed TTFs locally. The distributed ZIP never contains font binaries. */
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const manifest=require('../docs/BEAUSANS_FONT_MANIFEST.json');
const sourceDir=process.argv[2];
if(!sourceDir){console.error('Usage: npm run fonts:install -- /path/to/12-TTF-files');process.exit(2);}
const out=path.resolve(__dirname,'../public/fonts/vidc');
const source=path.resolve(sourceDir);
const files=[];
for(const face of manifest.source_variants){
  const input=path.resolve(source,face.source_filename);
  if(!fs.existsSync(input)){console.error('Missing: '+input);process.exitCode=1;continue;}
  const bytes=fs.readFileSync(input);
  const magic=bytes.subarray(0,4).toString('hex');
  if(!['00010000','4f54544f','74727565'].includes(magic)){console.error('Not a supported TrueType/OpenType font: '+input);process.exitCode=1;continue;}
  const digest=crypto.createHash('sha256').update(bytes).digest('hex');
  if(digest!==face.sha256){console.error('Font digest differs from uploaded source: '+input);process.exitCode=1;continue;}
  files.push([face.target_filename,bytes]);
}
if(process.exitCode){console.error('No assets installed. Resolve the missing/mismatched files.');process.exit(process.exitCode);}
fs.mkdirSync(out,{recursive:true});
for(const [filename,bytes] of files)fs.writeFileSync(path.join(out,filename),bytes,{flag:'w'});
console.log('Installed '+files.length+' licensed font faces at '+out);
