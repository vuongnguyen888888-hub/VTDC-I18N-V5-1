import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { MASTER_ROUTE_MANIFEST } from '@/data/masterRouteManifest';
import { ALL_LOCALES, isRouteIndexable, buildCanonicalUrl } from '@/utils/seoMetadata';
import { resolveMarketContext } from '@/lib/context/resolveMarketContext';
import { resolveDomainConfig } from '@/config/domainRegistry';
import { REDIRECT_MANIFEST } from '@/data/redirectManifest';

export const dynamic = 'force-dynamic';

interface SitemapRoute {
  path: string;
}

// Prepare redirect source paths for fast lookup
const REDIRECT_SOURCES = new Set(
  REDIRECT_MANIFEST.map((r) => r.sourcePath.toLowerCase().replace(/\/+$/, ''))
);

/**
 * Checks if a path is excluded from sitemap (redirects, private, or explicitly forbidden patterns).
 */
export function isExcludedFromSitemap(path: string): boolean {
  const clean = path.toLowerCase().replace(/\/+$/, '');

  // 1. Exclude if path is a source in REDIRECT_MANIFEST
  if (REDIRECT_SOURCES.has(clean)) {
    return true;
  }

  // 2. Exclude explicit forbidden and private patterns
  if (
    clean.startsWith('/dich-vu') ||
    clean.startsWith('/admin') ||
    clean.startsWith('/api') ||
    clean.startsWith('/auth') ||
    clean === '/services/cloud-server' ||
    clean === '/bang-gia'
  ) {
    return true;
  }

  return false;
}

/**
 * Gathers all candidate sitemap routes from the Master Route Manifest.
 */
export function getCandidateRoutes(): SitemapRoute[] {
  const routes: SitemapRoute[] = [];
  const seen = new Set<string>();

  const addRoute = (path: string) => {
    let norm = path.toLowerCase().replace(/\/+$/, '') || '/';
    if (norm !== '/') {
      norm = norm + '/';
    }
    
    if (isExcludedFromSitemap(norm)) {
      return;
    }

    if (!seen.has(norm)) {
      seen.add(norm);
      routes.push({ path: norm });
    }
  };

  // 1. Bespoke pages
  for (const r of MASTER_ROUTE_MANIFEST.bespoke) {
    if (r.indexable) {
      addRoute(r.canonicalPath);
    }
  }

  // 2. Canonical services
  for (const s of MASTER_ROUTE_MANIFEST.services) {
    if (s.indexable) {
      addRoute(s.canonicalPath);
    }
  }

  // 3. Solutions
  for (const sol of MASTER_ROUTE_MANIFEST.solutions) {
    addRoute(sol.canonicalPath);
  }

  return routes;
}

/**
 * Generates sitemap entries for a target domain.
 */
export function buildSitemapForDomain(targetDomain: string): MetadataRoute.Sitemap {
  const routes = getCandidateRoutes();
  const indexableLocales = ALL_LOCALES.filter(
    (l) => l.robotsIndex && l.domain === targetDomain
  );

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of indexableLocales) {
    for (const route of routes) {
      const context = resolveMarketContext(targetDomain, `${locale.prefix}${route.path}`);
      
      if (isRouteIndexable(context, route.path)) {
        const url = buildCanonicalUrl(locale.prefix, targetDomain, route.path);
        
        entries.push({
          url,
        });
      }
    }
  }

  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let targetDomain = 'viettelidc.com.vn';

  try {
    const headerList = await headers();
    const host = headerList.get('host') || headerList.get('x-forwarded-host') || '';
    const domainCfg = resolveDomainConfig(host);
    
    // Staging and non-production environments must NOT generate sitemaps
    if (domainCfg.environment !== 'production' || domainCfg.noIndex) {
      return [];
    }

    targetDomain = domainCfg.domain;
  } catch {
    // Fallback to default VN domain during static generation or headerless calls
  }

  return buildSitemapForDomain(targetDomain);
}
