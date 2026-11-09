import { CANONICAL_SERVICES, SOLUTION_ROUTES } from '../src/data/masterRouteManifest';
import { REDIRECT_MANIFEST } from '../src/data/redirectManifest';

const BASE_URL = 'http://localhost:3000';

interface FetchResult {
  url: string;
  status: number;
  redirectUrl?: string;
  hopCount: number;
  finalStatus?: number;
}

async function checkUrl(path: string, retries = 2): Promise<FetchResult> {
  const url = `${BASE_URL}${path}`;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { redirect: 'manual' });
      const location = res.headers.get('location') || undefined;

      let hopCount = 0;
      let finalStatus: number | undefined;

      if ([301, 302, 307, 308].includes(res.status) && location) {
        hopCount = 1;
        const targetUrl = location.startsWith('http') ? location : `${BASE_URL}${location}`;
        const secondRes = await fetch(targetUrl, { redirect: 'manual' });
        finalStatus = secondRes.status;

        if ([301, 302, 307, 308].includes(secondRes.status)) {
          hopCount = 2;
        }
      } else {
        finalStatus = res.status;
      }

      return {
        url: path,
        status: res.status,
        redirectUrl: location,
        hopCount,
        finalStatus,
      };
    } catch (err: any) {
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, 500));
      } else {
        return {
          url: path,
          status: 500,
          hopCount: 0,
          finalStatus: 500,
        };
      }
    }
  }
  return {
    url: path,
    status: 500,
    hopCount: 0,
    finalStatus: 500,
  };
}

async function runTests() {
  console.log('=== STARTING BATCH 4.1 CONFORMANCE VERIFICATION ===\n');

  // 1. TEST ALL CANONICAL SERVICE ROUTES (59)
  console.log('--- 1. TESTING 59 CANONICAL SERVICE ROUTES ---');
  let servicePassed = 0;
  let serviceFailed = 0;
  const failedServices: string[] = [];

  for (const svc of CANONICAL_SERVICES) {
    const res = await checkUrl(svc.canonicalPath);
    if (res.status === 200) {
      servicePassed++;
    } else {
      serviceFailed++;
      failedServices.push(`${svc.canonicalPath} (Status: ${res.status})`);
    }
  }
  console.log(`SERVICE_ROUTE_TEST: Expected: ${CANONICAL_SERVICES.length}, Passed: ${servicePassed}, Failed: ${serviceFailed}`);
  if (failedServices.length > 0) {
    console.log('Failed Services:', failedServices);
  }

  // 2. TEST ALL CANONICAL SOLUTION ROUTES (16)
  console.log('\n--- 2. TESTING 16 CANONICAL SOLUTION ROUTES ---');
  let solutionPassed = 0;
  let solutionFailed = 0;
  const failedSolutions: string[] = [];

  for (const sol of SOLUTION_ROUTES) {
    const res = await checkUrl(sol.canonicalPath);
    if (res.status === 200) {
      solutionPassed++;
    } else {
      solutionFailed++;
      failedSolutions.push(`${sol.canonicalPath} (Status: ${res.status})`);
    }
  }
  console.log(`SOLUTION_ROUTE_TEST: Expected: ${SOLUTION_ROUTES.length}, Passed: ${solutionPassed}, Failed: ${solutionFailed}`);
  if (failedSolutions.length > 0) {
    console.log('Failed Solutions:', failedSolutions);
  }

  // 3. TEST LEGACY REDIRECT MANIFEST
  console.log('\n--- 3. TESTING LEGACY REDIRECT MANIFEST ---');
  let redirectPassed = 0;
  let redirectFailed = 0;
  let chainsDetected = 0;
  const failedRedirects: string[] = [];

  for (const entry of REDIRECT_MANIFEST) {
    const res = await checkUrl(entry.sourcePath);
    const isRedirect = [301, 302, 307, 308].includes(res.status);
    const isTarget200 = res.finalStatus === 200;
    const isMaxOneHop = res.hopCount <= 1;

    if (res.hopCount > 1) {
      chainsDetected++;
    }

    if (isRedirect && isTarget200 && isMaxOneHop) {
      redirectPassed++;
    } else {
      redirectFailed++;
      failedRedirects.push(`${entry.sourcePath} -> status: ${res.status}, location: ${res.redirectUrl}, finalStatus: ${res.finalStatus}, hops: ${res.hopCount}`);
    }
  }
  console.log(`LEGACY_REDIRECT_TEST: Expected: ${REDIRECT_MANIFEST.length}, Passed: ${redirectPassed}, Failed: ${redirectFailed}, Chains detected: ${chainsDetected}`);
  if (failedRedirects.length > 0) {
    console.log('Failed Redirects (sample 10):', failedRedirects.slice(0, 10));
  }

  // 4. DUPLICATE HTTP 200 TEST
  console.log('\n--- 4. TESTING DUPLICATE HTTP 200 ---');
  let duplicate200Count = 0;
  const duplicate200Urls: string[] = [];

  for (const entry of REDIRECT_MANIFEST) {
    const res = await checkUrl(entry.sourcePath);
    if (res.status === 200) {
      duplicate200Count++;
      duplicate200Urls.push(entry.sourcePath);
    }
  }
  console.log(`DUPLICATE_200_COUNT = ${duplicate200Count}`);
  if (duplicate200Urls.length > 0) {
    console.log('Duplicate 200 URLs:', duplicate200Urls);
  }

  // 5. CANONICAL CHECKPOINTS
  console.log('\n--- 5. TESTING CANONICAL CHECKPOINTS ---');
  const checkpoints = [
    { path: '/services/compute/cloud-server/', expectedStatus: 200 },
    { path: '/services/cloud-server/', expectedStatus: [301, 308, 307], expectedTarget: '/services/compute/cloud-server/' },
    { path: '/services/storage/object-storage/', expectedStatus: 200 },
    { path: '/services/cloud-object-storage/', expectedStatus: [301, 308, 307], expectedTarget: '/services/storage/object-storage/' },
    { path: '/services/data-center/colocation/', expectedStatus: 200 },
    { path: '/services/colocation/', expectedStatus: [301, 308, 307], expectedTarget: '/services/data-center/colocation/' },
    { path: '/pricing/', expectedStatus: 200 },
    { path: '/pricing', expectedStatus: 200 },
    { path: '/bang-gia', expectedStatus: [301, 308, 307], expectedTarget: '/pricing' },
  ];

  for (const cp of checkpoints) {
    const res = await checkUrl(cp.path);
    console.log(`Checkpoint ${cp.path}: status=${res.status}, location=${res.redirectUrl || 'none'}, final=${res.finalStatus}`);
  }

  // 6. 404 INTEGRITY
  console.log('\n--- 6. TESTING 404 INTEGRITY ---');
  const unknownRoutes = [
    '/services/compute/not-a-service/',
    '/solutions/not-a-solution/',
    '/route-that-does-not-exist/',
    '/random-xyz-abc-test',
  ];

  for (const ur of unknownRoutes) {
    const res = await checkUrl(ur);
    console.log(`Unknown route ${ur}: status=${res.status}`);
  }

  // 7. REGRESSION ROUTES
  console.log('\n--- 7. TESTING REGRESSION ROUTES ---');
  const regressionRoutes = [
    '/',
    '/services/',
    '/solutions/',
    '/pricing/',
    '/resources/',
    '/partners/',
    '/about/',
    '/admin/feedback/',
  ];

  for (const reg of regressionRoutes) {
    const res = await checkUrl(reg);
    console.log(`Regression route ${reg}: status=${res.status}`);
  }
}

runTests().catch(console.error);
