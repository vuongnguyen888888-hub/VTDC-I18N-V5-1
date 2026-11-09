#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const LOCK_FILE_PATH = path.resolve(process.cwd(), 'docs/architecture/architecture-lock.json');

console.warn('\n==================================================');
console.warn('UPDATING ARCHITECTURE BASELINE');
console.warn('This action changes the frozen architecture baseline.');
console.warn('==================================================\n');

if (!fs.existsSync(LOCK_FILE_PATH)) {
  console.error('❌ ERROR: Architecture lock manifest not found at ' + LOCK_FILE_PATH);
  process.exit(1);
}

const lockData = JSON.parse(fs.readFileSync(LOCK_FILE_PATH, 'utf-8'));
const lockedFiles = lockData.lockedFiles || {};

for (const [filePath, fileMeta] of Object.entries(lockedFiles)) {
  const fullPath = path.resolve(process.cwd(), filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ ERROR: Locked file does not exist: ${filePath}`);
    process.exit(1);
  }
  const content = fs.readFileSync(fullPath);
  const newHash = crypto.createHash('sha256').update(content).digest('hex');
  lockedFiles[filePath].sha256 = newHash;
  console.log(`Updated ${filePath} -> ${newHash}`);
}

lockData.lastUpdated = new Date().toISOString();
fs.writeFileSync(LOCK_FILE_PATH, JSON.stringify(lockData, null, 2) + '\n', 'utf-8');

console.log('\n✅ Successfully updated architecture baseline hashes in docs/architecture/architecture-lock.json\n');
