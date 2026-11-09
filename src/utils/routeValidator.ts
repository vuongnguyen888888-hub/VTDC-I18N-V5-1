import { parsePathToMarketAndLanguage, KNOWN_ROUTE_PREFIXES } from './routingMatrix';
import { resolveServiceIdFromPath } from '../data/serviceManifest';
import { 
  MASTER_ROUTE_MANIFEST, 
  CANONICAL_SERVICES, 
  SOLUTION_ROUTES, 
  BESPOKE_ROUTES,
  resolveRouteFromManifest 
} from '../data/masterRouteManifest';
import { getRedirectTarget } from '../data/redirectManifest';

const BESPOKE_PREFIXES = [
  '/pricing',
  '/bang-gia',
  '/pricing-calculator',
  '/tinh-gia',
  '/about',
  '/gioi-thieu',
  '/partners',
  '/doi-tac',
  '/promotions',
  '/khuyen-mai',
  '/resources',
  '/tai-nguyen',
  '/services',
  '/dich-vu',
  '/solutions',
  '/giai-phap',
];

// Pre-computed set of known service category pillars
export const SERVICE_PILLARS = new Set<string>([
  '/services',
  '/dich-vu',
  '/services/compute',
  '/services/data-center',
  '/services/storage',
  '/services/database',
  '/services/containers',
  '/services/networking',
  '/services/security',
  '/services/cloud-operations',
  '/services/digital-services',
  '/services/digital-workplace',
  '/services/managed-services',
  '/dich-vu/compute',
  '/dich-vu/data-center',
  '/dich-vu/storage',
  '/dich-vu/database',
  '/dich-vu/containers',
  '/dich-vu/networking',
  '/dich-vu/security',
  '/dich-vu/cloud-operations',
  '/dich-vu/digital-services',
  '/dich-vu/managed-services',
]);

// Pre-computed set of all canonical paths (normalized without trailing slashes)
const CANONICAL_PATH_SET = new Set<string>([
  '/',
  '/pricing',
  '/resources',
  '/promotions',
  '/partners',
  '/about',
  '/services',
  '/solutions',
  '/admin/feedback',
  ...SERVICE_PILLARS,
  ...CANONICAL_SERVICES.map((s) => s.canonicalPath.toLowerCase().replace(/\/+$/, '')),
  ...CANONICAL_SERVICES.map((s) => s.viPath.toLowerCase().replace(/\/+$/, '')),
  ...CANONICAL_SERVICES.map((s) => s.enPath.toLowerCase().replace(/\/+$/, '')),
  ...SOLUTION_ROUTES.map((s) => s.canonicalPath.toLowerCase().replace(/\/+$/, '')),
  ...BESPOKE_ROUTES.map((b) => b.canonicalPath.toLowerCase().replace(/\/+$/, '')),
]);

/**
 * Validates whether a fullPath corresponds to a known route on the site.
 * Used by [...slug]/page.tsx to trigger native notFound() (HTTP 404) for unrecognized URLs.
 */
export function isValidAppRoute(fullPath: string): boolean {
  if (!fullPath || fullPath === '/') return true;

  const parsed = parsePathToMarketAndLanguage(fullPath);
  const pureSlug = parsed.pureSlug.toLowerCase().replace(/\/+$/, '') || '/';

  // 1. Check if prefix is valid when present
  if (parsed.routePrefix) {
    const normalizedPrefix = parsed.routePrefix.startsWith('/') ? parsed.routePrefix : `/${parsed.routePrefix}`;
    const isValidPrefix = KNOWN_ROUTE_PREFIXES.some(p => p.prefix === normalizedPrefix);
    if (!isValidPrefix) {
      return false;
    }
  }

  // 2. Root / Market Home
  if (pureSlug === '/' || pureSlug === '') {
    return true;
  }

  // 3. Exact Canonical Match (O(1) Set Lookup)
  if (CANONICAL_PATH_SET.has(pureSlug)) {
    return true;
  }

  // 4. Check Redirect Manifest (Legacy Aliases)
  if (getRedirectTarget(pureSlug) || getRedirectTarget(fullPath)) {
    return true;
  }

  // 5. Check Master Route Manifest
  if (resolveRouteFromManifest(pureSlug)) {
    return true;
  }

  // 6. Check Standard / Dynamic Service Manifest
  if (resolveServiceIdFromPath(pureSlug)) {
    return true;
  }

  // 7. Check Solution Routes
  if (SOLUTION_ROUTES.some(s => s.canonicalPath.toLowerCase().replace(/\/+$/, '') === pureSlug)) {
    return true;
  }

  // 8. Check Bespoke sub-routes (e.g. /about/..., /partners/..., /admin/...)
  for (const prefix of BESPOKE_PREFIXES) {
    if (pureSlug === prefix || pureSlug.startsWith(`${prefix}/`)) {
      // For /services or /dich-vu or /solutions, if it's not a known service/solution or hub, don't allow arbitrary garbage
      if (prefix === '/services' || prefix === '/dich-vu' || prefix === '/solutions' || prefix === '/giai-phap') {
        if (pureSlug === prefix) return true;
        if (SERVICE_PILLARS.has(pureSlug)) return true;
        if (resolveServiceIdFromPath(pureSlug)) return true;
        if (SOLUTION_ROUTES.some(s => s.canonicalPath.toLowerCase().replace(/\/+$/, '') === pureSlug)) return true;
        if (getRedirectTarget(pureSlug)) return true;
        return false;
      }
      return true;
    }
  }

  return false;
}
