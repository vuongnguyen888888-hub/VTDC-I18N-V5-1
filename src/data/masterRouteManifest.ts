/**
 * Master Route Manifest — Single Source of Truth (SSOT)
 * Architecture Baseline 2026 for Viettel IDC Route Discovery & Validation.
 */

import { SERVICE_CATEGORIES, ALL_SERVICES, SOLUTION_CATEGORIES } from './sitemapData';

export interface RouteManifestEntry {
  routeId: string;
  type: 'home' | 'bespoke' | 'pillar' | 'service' | 'solution';
  canonicalPath: string;
  viPath: string;
  enPath: string;
  titleVi: string;
  titleEn: string;
  pillarId?: string;
  indexable: boolean;
  publishedMarkets: string[];
}

export interface ServicePillarEntry {
  id: string;
  menuLabelVi: string;
  menuLabelEn: string;
  canonicalPath: string;
}

export interface SolutionRouteEntry {
  id: string;
  titleVi: string;
  titleEn: string;
  canonicalPath: string;
  category: string;
  publishedMarkets: string[];
}

// 11 Canonical Service Pillars
export const SERVICE_PILLARS: ServicePillarEntry[] = SERVICE_CATEGORIES.map((cat) => ({
  id: cat.id,
  menuLabelVi: cat.menuLabel,
  menuLabelEn: cat.id.replace(/-/g, ' ').toUpperCase(),
  canonicalPath: `/services#${cat.id}`,
}));

// 59 Canonical Core Services
export const CANONICAL_SERVICES: RouteManifestEntry[] = ALL_SERVICES.slice(0, 59).map((svc) => {
  const isGlobalPublished = [
    'vks', 'vcr', 'vmks', 'vdbs', 'domain', 'web-hosting', 'email-hosting', 'ssl',
    'microsoft-365', 'license-leasing', 'drive', 'cloud-pc', 'cloud-desktop', 'vapig',
    'cloudwatch', 'vkqs', 'vse', 'vcas', 'workspace',
    'viettel-cloud-server', 'viettel-cloud-object-storage', 'viettel-cloud-gpu',
    'viettel-data-center-colocation', 'viettel-virtual-soc'
  ].includes(svc.id);

  return {
    routeId: svc.id,
    type: 'service',
    canonicalPath: svc.canonicalPath,
    viPath: svc.canonicalPath.startsWith('/dich-vu') ? svc.canonicalPath : `/dich-vu/${svc.id}`,
    enPath: svc.canonicalPath.startsWith('/services') ? svc.canonicalPath : `/services/${svc.id}`,
    titleVi: svc.name,
    titleEn: svc.name,
    pillarId: svc.category,
    indexable: svc.publishStatus === 'approved',
    publishedMarkets: isGlobalPublished ? ['vn', 'int'] : ['vn'],
  };
});

// 16 Industry & Tech Solutions
export const SOLUTION_ROUTES: SolutionRouteEntry[] = SOLUTION_CATEGORIES.flatMap((cat) =>
  (cat.items || []).map((item) => ({
    id: item.id,
    titleVi: item.title,
    titleEn: item.title,
    canonicalPath: item.path,
    category: cat.id,
    publishedMarkets: ['vn', 'int'],
  }))
);

// Core Bespoke Hub Pages
export const BESPOKE_ROUTES: RouteManifestEntry[] = [
  { routeId: 'home', type: 'home', canonicalPath: '/', viPath: '/', enPath: '/en', titleVi: 'Trang chủ', titleEn: 'Home', indexable: true, publishedMarkets: ['vn', 'int'] },
  { routeId: 'pricing', type: 'bespoke', canonicalPath: '/pricing', viPath: '/bang-gia', enPath: '/pricing', titleVi: 'Bảng giá', titleEn: 'Pricing', indexable: true, publishedMarkets: ['vn', 'int'] },
  { routeId: 'resources', type: 'bespoke', canonicalPath: '/resources', viPath: '/tai-nguyen', enPath: '/resources', titleVi: 'Tài nguyên', titleEn: 'Resources', indexable: true, publishedMarkets: ['vn', 'int'] },
  { routeId: 'promotions', type: 'bespoke', canonicalPath: '/promotions', viPath: '/khuyen-mai', enPath: '/promotions', titleVi: 'Khuyến mại', titleEn: 'Promotions', indexable: true, publishedMarkets: ['vn', 'int'] },
  { routeId: 'partners', type: 'bespoke', canonicalPath: '/partners', viPath: '/doi-tac', enPath: '/partners', titleVi: 'Đối tác', titleEn: 'Partners', indexable: true, publishedMarkets: ['vn', 'int'] },
  { routeId: 'about', type: 'bespoke', canonicalPath: '/about', viPath: '/gioi-thieu', enPath: '/about', titleVi: 'Giới thiệu', titleEn: 'About Us', indexable: true, publishedMarkets: ['vn', 'int'] },
];

export const MASTER_ROUTE_MANIFEST = {
  version: '2026.1.0',
  pillars: SERVICE_PILLARS,
  services: CANONICAL_SERVICES,
  solutions: SOLUTION_ROUTES,
  bespoke: BESPOKE_ROUTES,
};

export interface LegacyAliasEntry {
  legacyPath: string;
  canonicalPath: string;
  temporaryLegacyAlias: true;
  status: 'active_legacy_alias';
  notes: string;
}

export const LEGACY_SERVICE_ALIASES: LegacyAliasEntry[] = [
  {
    legacyPath: '/services/cloud-server',
    canonicalPath: '/services/compute/cloud-server/',
    temporaryLegacyAlias: true,
    status: 'active_legacy_alias',
    notes: 'Legacy alias — P0 301/308 redirect migration deferred to Batch 4',
  },
  {
    legacyPath: '/services/cloud-object-storage',
    canonicalPath: '/services/storage/object-storage/',
    temporaryLegacyAlias: true,
    status: 'active_legacy_alias',
    notes: 'Legacy alias — P0 301/308 redirect migration deferred to Batch 4',
  },
  {
    legacyPath: '/services/colocation',
    canonicalPath: '/services/data-center/colocation/',
    temporaryLegacyAlias: true,
    status: 'active_legacy_alias',
    notes: 'Legacy alias — P0 301/308 redirect migration deferred to Batch 4',
  },
];

/**
 * Validates the Master Route Manifest against baseline rules.
 * Must return [] (0 errors).
 */
export function validateMasterRouteManifest(): string[] {
  const errors: string[] = [];

  if (MASTER_ROUTE_MANIFEST.pillars.length !== 11) {
    errors.push(`Expected 11 service pillars, found ${MASTER_ROUTE_MANIFEST.pillars.length}`);
  }

  if (MASTER_ROUTE_MANIFEST.services.length !== 59) {
    errors.push(`Expected 59 canonical services, found ${MASTER_ROUTE_MANIFEST.services.length}`);
  }

  if (MASTER_ROUTE_MANIFEST.solutions.length !== 16) {
    errors.push(`Expected 16 solution routes, found ${MASTER_ROUTE_MANIFEST.solutions.length}`);
  }

  // Check unique route IDs in services
  const svcIds = new Set<string>();
  for (const svc of MASTER_ROUTE_MANIFEST.services) {
    if (svcIds.has(svc.routeId)) {
      errors.push(`Duplicate service routeId in manifest: ${svc.routeId}`);
    }
    svcIds.add(svc.routeId);
  }

  // Verify key canonical paths
  const cloudServerSvc = MASTER_ROUTE_MANIFEST.services.find((s) => s.routeId === 'viettel-cloud-server');
  if (!cloudServerSvc || !cloudServerSvc.canonicalPath.includes('/services/compute/cloud-server')) {
    errors.push(`Cloud Server canonical path mismatch: ${cloudServerSvc?.canonicalPath}`);
  }

  const objectStorageSvc = MASTER_ROUTE_MANIFEST.services.find((s) => s.routeId === 'viettel-cloud-object-storage');
  if (!objectStorageSvc || !objectStorageSvc.canonicalPath.includes('/services/storage/object-storage')) {
    errors.push(`Object Storage canonical path mismatch: ${objectStorageSvc?.canonicalPath}`);
  }

  const colocationSvc = MASTER_ROUTE_MANIFEST.services.find((s) => s.routeId === 'viettel-data-center-colocation');
  if (!colocationSvc || !colocationSvc.canonicalPath.includes('/services/data-center/colocation')) {
    errors.push(`Colocation canonical path mismatch: ${colocationSvc?.canonicalPath}`);
  }

  // Ensure legacy alias /services/cloud-server is NOT in canonical services list
  const legacyAliasFound = MASTER_ROUTE_MANIFEST.services.some(
    (s) => s.canonicalPath === '/services/cloud-server' || s.canonicalPath === '/services/cloud-server/'
  );
  if (legacyAliasFound) {
    errors.push(`Legacy alias /services/cloud-server MUST NOT be present in canonical services list.`);
  }

  return errors;
}

/**
 * Resolves a route from the Master Route Manifest by pure path string.
 */
export function resolveRouteFromManifest(purePath: string): RouteManifestEntry | null {
  const clean = (purePath.split('?')[0].split('#')[0] || '/').toLowerCase().replace(/\/+$/, '') || '/';
  const matches = (candidate: string) => (candidate.toLowerCase().replace(/\/+$/, '') || '/') === clean;
  const bespoke = BESPOKE_ROUTES.find((entry) =>
    matches(entry.canonicalPath) || matches(entry.viPath) || matches(entry.enPath)
  );
  if (bespoke) return bespoke;
  const service = CANONICAL_SERVICES.find((entry) =>
    matches(entry.canonicalPath) || matches(entry.viPath) || matches(entry.enPath)
  );
  return service ?? null;
}
