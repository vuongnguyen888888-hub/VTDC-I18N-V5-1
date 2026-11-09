/**
 * SEO Metadata Utilities — Canonical URLs & Hreflang Matrix
 * Viettel IDC Hub–Spoke Multi-Market Architecture
 */

import { resolveRouteFromManifest, CANONICAL_SERVICES, SOLUTION_ROUTES } from '@/data/masterRouteManifest';
import { LOCALE_REGISTRY } from '@/config/localeRegistry';
import { MarketContext } from '@/lib/context/resolveMarketContext';
import { getRedirectTarget } from '@/data/redirectManifest';
import { isValidAppRoute } from './routeValidator';

export interface LocaleEntry {
  prefix: string;
  marketCode: string;
  languageCode: string;
  domain: string;
  hreflang: string;
  robotsIndex: boolean;
}

const SEO_DOMAINS: Record<string, string> = {
  vn: 'viettelidc.com.vn', int: 'viettelidc.com',
  la: 'viettelidc.com', ph: 'viettelidc.com', mm: 'viettelidc.com',
  kh: 'vcloudia.com',
};

// One locale source for routing, <html lang>, canonical and hreflang.
export const ALL_LOCALES: LocaleEntry[] = Object.values(LOCALE_REGISTRY).map((locale) => ({
  prefix: locale.routePrefix,
  marketCode: locale.marketCode,
  languageCode: locale.languageCode,
  domain: SEO_DOMAINS[locale.marketCode],
  hreflang: locale.htmlLang,
  robotsIndex: locale.robotsIndex,
}));

export const DYNAMIC_LOCALE_PREFIXES = ALL_LOCALES
  .map((entry) => entry.prefix)
  .filter(Boolean)
  .sort((a, b) => b.length - a.length);

export function getLocaleByPrefix(prefix: string): LocaleEntry {
  const VN_DEFAULT = ALL_LOCALES[0];
  return ALL_LOCALES.find((l) => l.prefix === prefix) ?? VN_DEFAULT;
}

/**
 * Builds an absolute canonical URL with strict normalization.
 * - Enforces lowercase path
 * - Strips query parameters
 * - Enforces a trailing slash policy (except root /)
 * - Removes the /en prefix for international (viettelidc.com) canonical URL
 */
export function buildCanonicalUrl(prefix: string, domain: string, pureSlug: string): string {
  const normDomain = domain.toLowerCase().split(':')[0].trim();
  
  let normPrefix = prefix;
  if (normDomain === 'viettelidc.com' && normPrefix === '/en') {
    normPrefix = '';
  }

  let cleanSlug = pureSlug.split('?')[0].split('#')[0].toLowerCase();
  
  if (cleanSlug && !cleanSlug.startsWith('/')) {
    cleanSlug = '/' + cleanSlug;
  }

  if (cleanSlug === '/' || cleanSlug === '') {
    cleanSlug = '/';
  } else {
    cleanSlug = cleanSlug.replace(/\/+$/, '') + '/';
  }

  let path = `${normPrefix}${cleanSlug}`;
  path = path.replace(/\/+/g, '/');
  
  if (!path.endsWith('/')) {
    path = path + '/';
  }

  return `https://${normDomain}${path}`;
}

/**
 * Checks if a specific route is active and published for a market context.
 */
export function isRoutePublishedForMarket(marketCode: string, pureSlug: string): boolean {
  const slug = pureSlug.split('?')[0].split('#')[0].toLowerCase().replace(/\/+$/, '') || '/';
  
  if (marketCode === 'vn') {
    return true; // All VN routes are active
  }

  // 1. Resolve via master route manifest (Bespoke or Service)
  const route = resolveRouteFromManifest(slug);
  if (route) {
    return route.publishedMarkets.includes(marketCode);
  }

  // 2. Check solutions
  if (slug.startsWith('/solutions/')) {
    const solutionId = slug.split('/').filter(Boolean).pop();
    const solution = SOLUTION_ROUTES.find(
      (s) => s.id === solutionId || s.canonicalPath === slug || s.canonicalPath === `${slug}/`
    );
    if (solution) {
      return solution.publishedMarkets.includes(marketCode);
    }
    return true; // General solutions paths are active
  }

  // 3. Fallback for custom /services/ or /dich-vu/ aliases
  if (slug.startsWith('/services/') || slug.startsWith('/dich-vu/')) {
    const serviceId = slug.split('/').filter(Boolean).pop();
    if (serviceId) {
      const canonicalSvc = CANONICAL_SERVICES.find(
        (s) => s.routeId === serviceId || s.routeId === `viettel-${serviceId}`
      );
      if (canonicalSvc) {
        return canonicalSvc.publishedMarkets.includes(marketCode);
      }
    }
  }

  return false;
}

/**
 * Evaluates whether a route is indexable under the current market context.
 */
export function isRouteIndexable(context: MarketContext, pureSlug?: string): boolean {
  // 1. Environment and Domain validation
  if (context.environment === 'staging' || context.environment === 'isolated' || context.environment === 'legacy_external') {
    return false;
  }
  if (context.domainConfig.noIndex) {
    return false;
  }

  // 2. Market status validation
  if (context.marketConfig.status !== 'active') {
    return false;
  }

  // 3. Locale publication status
  if (!context.localeConfig.robotsIndex) {
    return false;
  }

  // Target path to check
  const targetSlug = pureSlug || context.purePath || '/';

  // 4. Private / Admin patterns
  const EXCLUDED_PATTERNS = ['/admin', '/api', '/auth', '/preview', '/test'];
  if (EXCLUDED_PATTERNS.some((pat) => targetSlug.startsWith(pat))) {
    return false;
  }

  // 5. Market-specific publication check
  if (!isRoutePublishedForMarket(context.marketCode, targetSlug)) {
    return false;
  }

  // 6. Redirect source routes are not indexable
  if (getRedirectTarget(targetSlug)) {
    return false;
  }

  // 7. Invalid/Unknown routes are not indexable
  if (!isValidAppRoute(targetSlug)) {
    return false;
  }

  // 8. Manifest indexable check
  const route = resolveRouteFromManifest(targetSlug);
  if (route) {
    if (route.indexable === false) {
      return false;
    }
  }

  return true;
}

/**
 * Builds reciprocal hreflang alternate maps for published, indexable equivalent variants.
 * Section G: x-default is disabled (NOT ENABLED / REQUIRES ADR).
 */
export function buildHreflangAlternates(pureSlug: string, currentContext?: MarketContext): Record<string, string> {
  const alternates: Record<string, string> = {};
  const slug = pureSlug === '/' ? '' : (pureSlug.split('?')[0].split('#')[0].toLowerCase().replace(/\/+$/, '') + '/');

  // Filter to active, production indexable locales
  const indexableLocales = ALL_LOCALES.filter((l) => {
    if (['la', 'ph', 'mm', 'kh'].includes(l.marketCode)) {
      return false;
    }
    return l.robotsIndex;
  });

  for (const locale of indexableLocales) {
    // Check if the route is published on this locale's market
    if (!isRoutePublishedForMarket(locale.marketCode, slug)) {
      continue;
    }

    const targetDomain = locale.domain;
    let prefix = locale.prefix;
    if (targetDomain === 'viettelidc.com' && prefix === '/en') {
      prefix = '';
    }

    let cleanPath = slug;
    if (cleanPath && cleanPath !== '/') {
      cleanPath = '/' + cleanPath.replace(/^\/+/, '').replace(/\/+$/, '') + '/';
    } else {
      cleanPath = '/';
    }

    let urlPath = `${prefix}${cleanPath}`;
    urlPath = urlPath.replace(/\/+/g, '/');
    if (!urlPath.endsWith('/')) {
      urlPath += '/';
    }

    alternates[locale.hreflang] = `https://${targetDomain}${urlPath}`;
  }

  // Section G: x-default is NOT ENABLED

  return alternates;
}

/**
 * Formats BCP 47 locale strings for telemetry/GA4 tracking compatibility.
 */
export function getSiteLocale(marketCode: string, languageCode: string): string {
  const byMarketLang: Record<string, string> = {
    'vn|vn': 'vi-VN',
    'vn|en': 'en-VN',
    'global|en': 'en',
    'int|en': 'en',
    'la|la': 'lo-LA',
    'la|en': 'en-LA',
    'ph|ph': 'fil-PH',
    'ph|en': 'en-PH',
    'mm|mm': 'my-MM',
    'mm|en': 'en-MM',
    'vcloudia|kh': 'km-KH',
    'vcloudia|en': 'en-KH',
  };
  return byMarketLang[`${marketCode}|${languageCode}`] ?? 'vi-VN';
}
