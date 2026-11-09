/**
 * Viettel IDC — Spoke Registry & Canonical Ecosystem Endpoints (Batch 9)
 * Centralized mapping for ecosystem spokes: Auth, Console, Docs, Support, Status.
 */

export type MarketCode = 'vn' | 'int' | string;

export interface SpokeEndpoints {
  auth: string;
  console: string;
  docs: string;
  support: string;
  status: string;
}

export const SPOKE_REGISTRY: Record<MarketCode, SpokeEndpoints> = {
  vn: {
    auth: 'https://auth.viettelidc.com.vn',
    console: 'https://vconsole.viettelidc.com.vn',
    docs: 'https://docs.viettelidc.com.vn',
    support: 'https://support.viettelidc.com.vn',
    status: 'https://status.viettelidc.com.vn',
  },
  int: {
    auth: 'https://auth.viettelidc.com',
    console: 'https://console.viettelidc.com',
    docs: 'https://docs.viettelidc.com',
    support: 'https://support.viettelidc.com',
    status: 'https://status.viettelidc.com',
  },
};

/**
 * Builds safe spoke URLs without leaking PII, session tokens, or internal Firebase IDs.
 */
export function buildSpokeUrl(
  spoke: keyof SpokeEndpoints,
  marketCode: MarketCode,
  path: string = '',
  allowedParams?: { locale?: string; ref?: string; service?: string }
): string {
  const base = SPOKE_REGISTRY[marketCode]?.[spoke] || SPOKE_REGISTRY.vn[spoke];
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const url = new URL(cleanPath, base);

  if (allowedParams) {
    if (allowedParams.locale) url.searchParams.set('locale', allowedParams.locale);
    if (allowedParams.ref) url.searchParams.set('ref', allowedParams.ref);
    if (allowedParams.service) url.searchParams.set('service', allowedParams.service);
  }

  return url.toString();
}
