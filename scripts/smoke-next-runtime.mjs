#!/usr/bin/env node
/** Fail-closed runtime smoke for the actual production Next.js server.
 * Invoked only AFTER `npm run build`; no production secrets or Firebase writes.
 */
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';

const port=Number(process.env.VIDC_SMOKE_PORT || 43177);
const origin=`http://127.0.0.1:${port}`;
const next='node_modules/next/dist/bin/next';
if(!existsSync(next) || !existsSync('.next/BUILD_ID')){
  console.error('BLOCKED: Next.js dependencies/build output absent. Run npm ci && npm run build in a network-enabled environment.');
  process.exit(2);
}
let output='';
const child=spawn(process.execPath,[next,'start','-H','127.0.0.1','-p',String(port)],{
  cwd:process.cwd(), env:{...process.env,NODE_ENV:'production',PORT:String(port)},stdio:['ignore','pipe','pipe'],
});
for(const s of [child.stdout,child.stderr]) s.on('data',b=>{output=(output+b.toString()).slice(-15000)});
let failed=false;
async function request(path){
  const res=await fetch(origin+path,{redirect:'manual',signal:AbortSignal.timeout(14000)});
  return res;
}
async function check(path,expectedLang){
  const res=await request(path);
  if(res.status!==200) throw new Error(`Expected 200 ${path}; got ${res.status}`);
  const body=await res.text();
  if(!/<!doctype html/i.test(body))throw new Error(`Missing HTML ${path}`);
  if(!new RegExp(`<html[^>]+lang=["']${expectedLang}["']`,'i').test(body)){
    throw new Error(`Wrong SSR lang on ${path}; wanted ${expectedLang}`);
  }
  if(!body.includes('id="main-content"'))throw new Error(`Main content landmark missing ${path}`);
  console.log(`PASS: Next production ${path} = 200; SSR lang=${expectedLang}; main landmark`);
}
try {
  let ready=false;
  for(let i=0;i<75;i++){
    if(child.exitCode!==null)throw new Error(`Next server exited (${child.exitCode})`);
    try {const r=await fetch(origin+'/',{signal:AbortSignal.timeout(1800)});if(r.status<500){ready=true;break;}}catch{}
    await sleep(1000);
  }
  if(!ready)throw new Error('Production server did not become ready');
  await check('/','vi-VN');
  await check('/en-vn/','en-VN');
  await check('/en/','en');
  if (process.argv.includes('--routes-only')) { console.log('SOURCE TEST: skipping licensed font HTTP check; not a release UI acceptance.'); } else {
  const font='/fonts/vidc/FS-PFBEAUSANSPRO-SEMIBOLD.ttf';
  const response=await request(font);
  const bytes=new Uint8Array(await response.arrayBuffer());
  if(response.status!==200||bytes.length<100000||!(bytes[0]===0&&bytes[1]===1&&bytes[2]===0&&bytes[3]===0)){
    throw new Error(`Font not served as valid TrueType: ${font} status=${response.status}, bytes=${bytes.length}`);
  }
  console.log(`PASS: Owner-provided BeauSans SemiBold served over HTTP (${bytes.length} bytes)`);
  }
  const r=await request('/not-a-real-vidc-route-qa-2026/');
  if(r.status!==404)throw new Error(`Invalid route expected 404, got ${r.status}`);
  console.log('PASS: Invalid route returns 404');
  console.log(process.argv.includes('--routes-only')?'PASS: Next.js production route smoke (NOT typography acceptance)':'PASS: Next.js production HTTP smoke including licensed font');
} catch(err){failed=true;console.error('FAIL:',err.message);console.error('SERVER LOG TAIL:\n'+output)}
finally{child.kill('SIGTERM');await sleep(300);if(child.exitCode===null)child.kill('SIGKILL');}
if(failed)process.exitCode=1;
