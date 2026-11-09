#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const LOCK_FILE_PATH = path.resolve(process.cwd(), 'docs/architecture/architecture-lock.json');

if (!fs.existsSync(LOCK_FILE_PATH)) {
  console.error('\n❌ ERROR: Architecture lock manifest not found at ' + LOCK_FILE_PATH);
  process.exit(1);
}

let lockData;
try {
  lockData = JSON.parse(fs.readFileSync(LOCK_FILE_PATH, 'utf-8'));
} catch (err) {
  console.error('\n❌ ERROR: Failed to parse architecture lock manifest:', err.message);
  process.exit(1);
}

const lockedFiles = lockData.lockedFiles || {};
const violations = [];
let checkedCount = 0;

for (const [filePath, fileMeta] of Object.entries(lockedFiles)) {
  const fullPath = path.resolve(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    violations.push({
      filePath,
      reason: 'FILE_MISSING',
      expectedHash: fileMeta.sha256,
      currentHash: null
    });
    continue;
  }

  const content = fs.readFileSync(fullPath);
  const currentHash = crypto.createHash('sha256').update(content).digest('hex');
  checkedCount++;

  if (currentHash !== fileMeta.sha256) {
    violations.push({
      filePath,
      reason: 'HASH_MISMATCH',
      expectedHash: fileMeta.sha256,
      currentHash
    });
  }
}

if (violations.length > 0) {
  console.error('\n==================================================');
  console.error('ARCHITECTURE LOCK VIOLATION');
  console.error('==================================================\n');
  for (const v of violations) {
    console.error(`Locked architecture file changed:\n${v.filePath}`);
    if (v.reason === 'HASH_MISMATCH') {
      console.error(`  Expected SHA-256: ${v.expectedHash}`);
      console.error(`  Current SHA-256:  ${v.currentHash}\n`);
    } else {
      console.error(`  Reason: ${v.reason}\n`);
    }
  }
  console.error('Explicit architecture change approval is required.');
  console.error('==================================================\n');
  process.exit(1);
}

console.log(`\n✅ ARCHITECTURE LOCK VERIFIED: ${checkedCount}/${checkedCount} locked architecture files matched baseline hashes.`);
process.exit(0);
