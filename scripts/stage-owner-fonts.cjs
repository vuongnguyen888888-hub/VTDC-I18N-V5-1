#!/usr/bin/env node
/** Opt-in provisioning of owner-provided fonts, with exact SHA matching and no network. */
const fs=require('node:fs');
const path=require('node:path');
const {spawnSync}=require('node:child_process');
const manifest=require('../docs/BEAUSANS_FONT_MANIFEST.json');
const root=path.resolve(__dirname,'..');
const knownDirs=[process.env.VIDC_FONT_SOURCE_DIR, process.argv[2],process.cwd(),
  process.env.USERPROFILE && path.join(process.env.USERPROFILE,'Downloads'),
  process.env.HOME && path.join(process.env.HOME,'Downloads'),
  process.env.USERPROFILE && path.join(process.env.USERPROFILE,'Desktop')
].filter(Boolean);
const dirs=[];
for(const dir of knownDirs){
  if(!fs.existsSync(dir) || !fs.statSync(dir).isDirectory())continue;
  dirs.push(dir);
  // Search one level of extracted/downloaded font folders without traversing user filesystem.
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
    if(entry.isDirectory() && !entry.name.startsWith('.')) dirs.push(path.join(dir,entry.name));
  }
}
const source=dirs.find(d=>manifest.source_variants.every(face=>fs.existsSync(path.join(d,face.source_filename))));
if(!source){
  console.error('RELEASE BLOCKED: 12 owner-provided BeauSans TTFs were not found in configured local paths.');
  console.error('This source package does not redistribute font binaries. Set VIDC_FONT_SOURCE_DIR to the directory with the uploaded 12 files.');
  process.exit(2);
}
const result=spawnSync(process.execPath,[path.join(root,'scripts/install-beausans-fonts.cjs'),source],{stdio:'inherit'});
if(result.status!==0)process.exit(result.status ?? 1);
console.log('Owner font staging completed and verified.');
