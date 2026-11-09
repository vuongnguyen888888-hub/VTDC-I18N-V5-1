/**
 * Server-Side Market Context Resolver
 * Architecture Baseline 2026 for Viettel IDC.
 */

import { resolveDomainConfig, DomainConfig } from '../../config/domainRegistry';
import { getMarketConfig, MarketConfig } from '../../config/marketRegistry';
import { parseLocalePrefixFromPath, LOCALE_REGISTRY, LocaleConfig } from '../../config/localeRegistry';
import { resolveRouteFromManifest, RouteManifestEntry } from '../../data/masterRouteManifest';

export interface MarketContext {
  siteGroup: 'VN' | 'INT';
  environment: 'production' | 'staging' | 'development' | 'legacy_external' | 'isolated';
  marketCode: string;
  locale: string;
  languageCode: string;
  currency: string;
  secondaryCurrency?: string;
  canonicalHost: string;
  routePrefix: string;
  htmlLang: string;
  noIndex: boolean;
  routeId?: string;
  purePath: string;
  domainConfig: DomainConfig;
  marketConfig: MarketConfig;
  localeConfig: LocaleConfig;
  routeEntry?: RouteManifestEntry | null;
}

/**
 * Server-side Market Context Resolver.
 * Pure function executing resolution order 1 through 8.
 */
export function resolveMarketContext(host: string, pathname: string): MarketContext {
  // 1. Normalize Host
  const rawHost = (host || '').toLowerCase().split(':')[0].trim();

  // 2. Lookup Domain Registry
  const domainCfg = resolveDomainConfig(rawHost);

  // 3. Resolve Primary Market
  const domainMarketCfg = getMarketConfig(domainCfg.marketCode);

  // 4. Parse explicit locale prefix from pathname
  const { locale: parsedLocale, pureSlug } = parseLocalePrefixFromPath(pathname);

  // 5. Check if parsed locale is supported by current domain; fallback if not or if null
  let finalLocaleCfg: LocaleConfig;
  const preview = domainCfg.environment === 'development' || domainCfg.environment === 'staging' || domainCfg.environment === 'isolated';
  const belongsToPublicHost = parsedLocale && (
    (domainCfg.domain === 'viettelidc.com' && ['int', 'la', 'ph', 'mm'].includes(parsedLocale.marketCode)) ||
    (domainCfg.domain === 'vcloudia.com' && parsedLocale.marketCode === 'kh')
  );
  if (parsedLocale && (domainCfg.supportedLocales.includes(parsedLocale.locale) || belongsToPublicHost || preview)) {
    finalLocaleCfg = parsedLocale;
  } else {
    const fallbackKey = domainCfg.defaultLocale || domainMarketCfg.defaultLocale || 'vi-VN';
    finalLocaleCfg = LOCALE_REGISTRY[fallbackKey] || LOCALE_REGISTRY['vi-VN'];
  }

  // Explicit path locales select their market configuration on preview and international hosts.
  const marketCfg = getMarketConfig(finalLocaleCfg.marketCode);
  const siteGroup: 'VN' | 'INT' = finalLocaleCfg.marketCode === 'vn' ? 'VN' : 'INT';
  const environment = domainCfg.environment;

  // 7. Resolve Route from Master Route Manifest if matching
  const routeEntry = resolveRouteFromManifest(pureSlug);

  // 8. Assemble & Return Normalized Context
  return {
    siteGroup,
    environment,
    marketCode: domainCfg.marketCode === 'unknown' && !parsedLocale ? 'unknown' : marketCfg.marketCode,
    locale: finalLocaleCfg.locale,
    languageCode: finalLocaleCfg.languageCode,
    currency: marketCfg.currency,
    secondaryCurrency: marketCfg.secondaryCurrency,
    canonicalHost: domainCfg.domain,
    routePrefix: finalLocaleCfg.routePrefix,
    htmlLang: finalLocaleCfg.htmlLang,
    noIndex: domainCfg.noIndex || !finalLocaleCfg.robotsIndex || marketCfg.status !== 'active',
    routeId: routeEntry?.routeId,
    purePath: pureSlug,
    domainConfig: domainCfg,
    marketConfig: marketCfg,
    localeConfig: finalLocaleCfg,
    routeEntry,
  };
}
