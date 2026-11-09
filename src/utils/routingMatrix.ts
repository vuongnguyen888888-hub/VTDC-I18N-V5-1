/**
 * Route/locale adapter: LOCALE_REGISTRY is the source of truth for prefix parsing.
 * The UI uses legacy language aliases (vn/la/ph/mm/kh) and vcloudia market name;
 * keep these compatibility aliases without making them BCP-47 locale identifiers.
 */
import { LOCALE_REGISTRY } from '../config/localeRegistry';

export interface ParsedRoute {
  marketCode: string;
  languageCode: string;
  pureSlug: string;
  domain: string;
  routePrefix: string;
}

const DOMAIN_BY_MARKET: Record<string, string> = {
  vn: 'viettelidc.com.vn', global: 'viettelidc.com',
  la: 'viettelidc.com', ph: 'viettelidc.com', mm: 'viettelidc.com',
  vcloudia: 'vcloudia.com',
};
const legacyMarket = (market: string): string => market === 'int' ? 'global' : market === 'kh' ? 'vcloudia' : market;
const legacyLanguage = (locale: string, code: string): string => {
  if (locale === 'vi-VN') return 'vn';
  if (locale === 'lo-LA') return 'la';
  if (locale === 'fil-PH') return 'ph';
  if (locale === 'my-MM') return 'mm';
  if (locale === 'km-KH') return 'kh';
  return code;
};

export const KNOWN_ROUTE_PREFIXES = Object.values(LOCALE_REGISTRY)
  .filter((entry) => Boolean(entry.routePrefix))
  .map((entry) => ({
    prefix: entry.routePrefix,
    marketCode: legacyMarket(entry.marketCode),
    languageCode: legacyLanguage(entry.locale, entry.languageCode),
    domain: DOMAIN_BY_MARKET[legacyMarket(entry.marketCode)],
  }))
  .sort((a, b) => b.prefix.length - a.prefix.length);

/** Strip a known locale prefix and canonicalize a pathname without changing other segments. */
export function getPureSlug(path: string): string {
  const clean = (path || '/').split('?')[0].split('#')[0];
  const normalized = (`/${clean.replace(/^\/+/, '')}`).replace(/\/+$/, '') || '/';
  const lower = normalized.toLowerCase();
  for (const entry of KNOWN_ROUTE_PREFIXES) {
    if (lower === entry.prefix) return '/';
    if (lower.startsWith(`${entry.prefix}/`)) return normalized.slice(entry.prefix.length) || '/';
  }
  return normalized;
}

/** Maps UI language and market aliases to an exact locale prefix. */
export function getRoutePrefix(marketCode: string, languageCode = 'vn'): string {
  const m = marketCode.toLowerCase();
  const l = languageCode.toLowerCase();
  const market = m === 'vcloudia' ? 'kh' : m === 'global' ? 'int' : m === 'vn-fdi' ? 'vn' : m;
  if (l === 'vn' || l === 'vi' || l === 'vi-vn') return '';
  if (market === 'int') return '/en';
  const localCodes: Record<string, string[]> = {
    vn: ['vi'], int: ['en'], la: ['lo', 'la'],
    ph: ['fil', 'ph'], mm: ['my', 'mm'], kh: ['km', 'kh'],
  };
  const isNative = (localCodes[market] || []).includes(l);
  const result = Object.values(LOCALE_REGISTRY).find((entry) =>
    entry.marketCode === market && (isNative ? entry.languageCode !== 'en' : entry.languageCode === 'en')
  );
  return result?.routePrefix ?? '';
}

export function buildLocalizedPath(pureSlug: string, marketCode: string, languageCode: string): string {
  const path = getPureSlug(pureSlug);
  const prefix = getRoutePrefix(marketCode, languageCode);
  return prefix ? (path === '/' ? prefix : `${prefix}${path}`) : path;
}

export function parsePathToMarketAndLanguage(path: string): ParsedRoute {
  const clean = (path || '/').split('?')[0].split('#')[0];
  const normalized = (`/${clean.replace(/^\/+/, '')}`).replace(/\/+$/, '') || '/';
  const lower = normalized.toLowerCase();
  for (const entry of KNOWN_ROUTE_PREFIXES) {
    if (lower === entry.prefix || lower.startsWith(`${entry.prefix}/`)) {
      return {
        marketCode: entry.marketCode,
        languageCode: entry.languageCode,
        pureSlug: lower === entry.prefix ? '/' : normalized.slice(entry.prefix.length),
        domain: entry.domain,
        routePrefix: entry.prefix,
      };
    }
  }
  return { marketCode: 'vn', languageCode: 'vn', pureSlug: normalized, domain: DOMAIN_BY_MARKET.vn, routePrefix: '' };
}

export function getMarketDomain(marketCode: string): string {
  return DOMAIN_BY_MARKET[marketCode === 'vn-fdi' ? 'vn' : marketCode] || DOMAIN_BY_MARKET.global;
}

/** Preserve localized prefixes when redirecting a legacy alias. */
export function buildLocalizedRedirectPath(originalPath: string, targetPath: string): string {
  const source = parsePathToMarketAndLanguage(originalPath);
  const normalizedTarget = getPureSlug(targetPath);
  return source.routePrefix
    ? normalizedTarget === '/' ? source.routePrefix : `${source.routePrefix}${normalizedTarget}`
    : normalizedTarget;
}

/**
 * Localize only navigational URLs. External links, asset URLs and special schemes
 * remain untouched. Keep query strings, fragments and trailing slashes intact.
 */
export function buildLocalizedHref(href: string, marketCode: string, languageCode: string): string {
  if (!href || !href.startsWith('/') || href.startsWith('//')) return href;
  const match = /^([^?#]*)(.*)$/.exec(href);
  if (!match) return href;
  const pathname = match[1] || '/';
  const suffix = match[2] || '';
  // File paths, Next internal routes and API endpoints do not use market prefixes.
  if (/^\/(?:api|_next)(?:\/|$)/i.test(pathname) || /\.[a-z0-9]{2,8}$/i.test(pathname)) return href;
  const trailing = pathname.length > 1 && pathname.endsWith('/');
  const localized = buildLocalizedPath(pathname, marketCode, languageCode);
  return (trailing && !localized.endsWith('/') ? localized + '/' : localized) + suffix;
}
