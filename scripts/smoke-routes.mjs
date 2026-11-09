#!/usr/bin/env node
/** HTTP smoke check for a running Next.js instance: BASE_URL=http://localhost:3000 npm run smoke */
import fs from 'node:fs';
const base = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
const csv = fs.readFileSync('docs/ROUTE_INVENTORY.csv','utf8');
const urls = csv.split(/\r?\n/).slice(1).map(line => /^(?:"[^"]*",){2}"([^"]+)"/.exec(line)?.[1]).filter(Boolean);
const localeHomes = ['/en','/en-vn','/la','/la-en','/ph','/ph-en','/mm','/mm-en','/kh','/kh-en'];
const tests = [...new Set([...urls, ...localeHomes])];
const failures=[];
for(const path of tests){
  try {
    const res=await fetch(base+path,{redirect:'follow',signal:AbortSignal.timeout(12000)});
    if(res.status!==200 || !(res.headers.get('content-type')||'').includes('text/html'))failures.push(`${path}: HTTP ${res.status} / ${res.headers.get('content-type')}`);
  } catch(err){failures.push(`${path}: ${err.message}`)}
}
console.log(`Smoke: ${tests.length-failures.length}/${tests.length} routes HTTP 200 with HTML.`);
if(failures.length){console.error(failures.slice(0,40).join('\n'));process.exitCode=1}
