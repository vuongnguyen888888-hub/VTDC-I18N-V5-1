import http from 'http';
import fs from 'fs';

const REDIRECT_MANIFEST = JSON.parse(
  fs.readFileSync(new URL('../src/data/redirectManifest.json', import.meta.url), 'utf8')
);

const agent = new http.Agent({ keepAlive: true, maxSockets: 1 });

function checkPath(path) {
  return new Promise((resolve) => {
    const req = http.request(
      `http://127.0.0.1:3000${path}`,
      {
        method: 'HEAD',
        agent,
        headers: { Connection: 'keep-alive' },
      },
      (res) => {
        const status = res.statusCode;
        const location = res.headers.location || null;
        res.resume(); // consume response body
        resolve({ path, status, location });
      }
    );

    req.on('error', (err) => {
      resolve({ path, status: 500, error: err.message });
    });

    req.setTimeout(4000, () => {
      req.destroy();
      resolve({ path, status: 408, error: 'Timeout' });
    });

    req.end();
  });
}

async function run() {
  console.log(`Testing ${REDIRECT_MANIFEST.length} entries...`);

  let passed = 0;
  let failed = 0;
  let chains = 0;
  let duplicate200 = 0;
  const failedList = [];

  for (const entry of REDIRECT_MANIFEST) {
    const r1 = await checkPath(entry.sourcePath);

    if (r1.status === 200) {
      duplicate200++;
      failed++;
      failedList.push(`${entry.sourcePath} returned 200 directly`);
      continue;
    }

    if (![301, 308].includes(r1.status) || !r1.location) {
      failed++;
      failedList.push(`${entry.sourcePath} returned status ${r1.status} (expected 301/308)`);
      continue;
    }

    // Check if target is 200 or another redirect
    const r2 = await checkPath(r1.location);
    if ([301, 308].includes(r2.status)) {
      chains++;
      failed++;
      failedList.push(`${entry.sourcePath} has redirect chain: -> ${r1.location} -> ${r2.location}`);
      continue;
    }

    if (r2.status !== 200) {
      failed++;
      failedList.push(`${entry.sourcePath} final target ${r1.location} returned ${r2.status}`);
      continue;
    }

    // Verify location matches canonical target
    const normTarget = entry.targetPath.toLowerCase().replace(/\/+$/, '') || '/';
    const normLoc = r1.location.split('?')[0].toLowerCase().replace(/\/+$/, '') || '/';
    if (normTarget !== normLoc) {
      failed++;
      failedList.push(`${entry.sourcePath} location ${r1.location} does not match target ${entry.targetPath}`);
      continue;
    }

    passed++;
  }

  console.log('\nLEGACY_REDIRECT_TEST');
  console.log(`Expected: ${REDIRECT_MANIFEST.length}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Chains detected: ${chains}`);

  if (failedList.length > 0) {
    console.log('Failures (first 10):', failedList.slice(0, 10));
  }

  console.log('\nDUPLICATE_200_TEST');
  console.log(`DUPLICATE_200_COUNT = ${duplicate200}`);

  // Special checks
  console.log('\n--- Special Checks ---');
  const special = [
    '/services/cloud-server/',
    '/services/cloud-object-storage/',
    '/services/cloud-gpu/',
    '/services/colocation/',
    '/services/virtual-soc/',
    '/bang-gia',
    '/khuyen-mai',
    '/tai-nguyen',
    '/gioi-thieu',
    '/doi-tac',
  ];
  for (const s of special) {
    const r = await checkPath(s);
    console.log(`${s} => status: ${r.status}, location: ${r.location}`);
  }
}

run();
