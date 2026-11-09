import { CANONICAL_SERVICES, SOLUTION_ROUTES } from '../src/data/masterRouteManifest';
import { REDIRECT_MANIFEST } from '../src/data/redirectManifest';

const BASE_URL = 'http://127.0.0.1:3000';

async function fastCheck(path: string) {
  try {
    const res = await fetch(`${BASE_URL}${path}`, { redirect: 'manual' });
    const location = res.headers.get('location');
    return { path, status: res.status, location };
  } catch (err: any) {
    return { path, status: 500, error: err.message };
  }
}

async function run() {
  console.log('--- Canonical Checkpoints ---');
  const checkpoints = [
    '/services/compute/cloud-server/',
    '/services/cloud-server/',
    '/services/storage/object-storage/',
    '/services/cloud-object-storage/',
    '/services/data-center/colocation/',
    '/services/colocation/',
    '/pricing/',
    '/bang-gia/',
    '/bang-gia',
  ];
  for (const cp of checkpoints) {
    const r = await fastCheck(cp);
    console.log(`${r.path} => ${r.status}${r.location ? ` -> ${r.location}` : ''}${r.error ? ` [Error: ${r.error}]` : ''}`);
  }

  console.log('\n--- Unknown 404 Routes ---');
  const unknown = [
    '/services/compute/not-a-service/',
    '/solutions/not-a-solution/',
    '/route-that-does-not-exist/',
  ];
  for (const u of unknown) {
    const r = await fastCheck(u);
    console.log(`${r.path} => ${r.status}${r.error ? ` [Error: ${r.error}]` : ''}`);
  }

  console.log('\n--- Hub Regression Routes ---');
  const regression = [
    '/',
    '/services/',
    '/solutions/',
    '/pricing/',
    '/resources/',
    '/partners/',
    '/about/',
    '/admin/feedback/',
  ];
  for (const reg of regression) {
    const r = await fastCheck(reg);
    console.log(`${r.path} => ${r.status}${r.error ? ` [Error: ${r.error}]` : ''}`);
  }
}

run();
