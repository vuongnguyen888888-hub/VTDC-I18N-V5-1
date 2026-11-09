import { REDIRECT_MANIFEST } from '../src/data/redirectManifest';

const BASE_URL = 'http://127.0.0.1:3000';

interface Result {
  source: string;
  target: string;
  status: number;
  location: string | null;
  finalStatus: number;
  hops: number;
  duplicate200: boolean;
  pass: boolean;
  reason?: string;
}

async function testRedirect(entry: { sourcePath: string; targetPath: string }) {
  const url = `${BASE_URL}${entry.sourcePath}`;
  try {
    const res1 = await fetch(url, { redirect: 'manual' });
    const status1 = res1.status;
    const location = res1.headers.get('location');

    if (status1 === 200) {
      return {
        source: entry.sourcePath,
        target: entry.targetPath,
        status: status1,
        location: null,
        finalStatus: 200,
        hops: 0,
        duplicate200: true,
        pass: false,
        reason: 'Returned 200 directly instead of redirect',
      };
    }

    if (![301, 302, 307, 308].includes(status1) || !location) {
      return {
        source: entry.sourcePath,
        target: entry.targetPath,
        status: status1,
        location: location || null,
        finalStatus: status1,
        hops: 0,
        duplicate200: false,
        pass: false,
        reason: `Unexpected status ${status1}`,
      };
    }

    // Check location target
    const targetUrl = location.startsWith('http') ? location : `${BASE_URL}${location}`;
    const res2 = await fetch(targetUrl, { redirect: 'manual' });
    const status2 = res2.status;

    let hops = 1;
    let finalStatus = status2;

    if ([301, 302, 307, 308].includes(status2)) {
      hops = 2;
      const loc2 = res2.headers.get('location');
      const target2 = loc2?.startsWith('http') ? loc2 : `${BASE_URL}${loc2}`;
      const res3 = await fetch(target2, { redirect: 'manual' });
      finalStatus = res3.status;
    }

    const normTarget = entry.targetPath.toLowerCase().replace(/\/+$/, '') || '/';
    const normLoc = location.split('?')[0].toLowerCase().replace(/\/+$/, '') || '/';

    const matchTarget = normTarget === normLoc;
    const pass = hops === 1 && [301, 308].includes(status1) && finalStatus === 200 && matchTarget;

    return {
      source: entry.sourcePath,
      target: entry.targetPath,
      status: status1,
      location,
      finalStatus,
      hops,
      duplicate200: false,
      pass,
      reason: !pass
        ? `hops=${hops}, status=${status1}, final=${finalStatus}, loc=${location}, expectedTarget=${entry.targetPath}`
        : undefined,
    };
  } catch (err: any) {
    return {
      source: entry.sourcePath,
      target: entry.targetPath,
      status: 500,
      location: null,
      finalStatus: 500,
      hops: 0,
      duplicate200: false,
      pass: false,
      reason: err.message,
    };
  }
}

async function run() {
  console.log(`Testing ${REDIRECT_MANIFEST.length} entries from REDIRECT_MANIFEST...`);

  const results: Result[] = [];
  // Run with concurrency of 8 to maintain low memory
  const concurrency = 8;
  for (let i = 0; i < REDIRECT_MANIFEST.length; i += concurrency) {
    const chunk = REDIRECT_MANIFEST.slice(i, i + concurrency);
    const chunkResults = await Promise.all(chunk.map(testRedirect));
    results.push(...chunkResults);
  }

  const passed = results.filter((r) => r.pass).length;
  const failed = results.filter((r) => !r.pass);
  const chains = results.filter((r) => r.hops > 1).length;
  const duplicate200 = results.filter((r) => r.duplicate200).length;

  console.log('LEGACY_REDIRECT_TEST');
  console.log(`Expected: ${REDIRECT_MANIFEST.length}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed.length}`);
  console.log(`Chains detected: ${chains}`);

  if (failed.length > 0) {
    console.log('Failed entries (sample):');
    failed.slice(0, 15).forEach((f) => {
      console.log(` - ${f.source} -> ${f.reason}`);
    });
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
    const r = results.find((res) => res.source === s) || (await testRedirect({ sourcePath: s, targetPath: '' }));
    console.log(`${s} => status: ${r.status}, location: ${r.location}, hops: ${r.hops}, duplicate200: ${r.duplicate200}`);
  }
}

run();
