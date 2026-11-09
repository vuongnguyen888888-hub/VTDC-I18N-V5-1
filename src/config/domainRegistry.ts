/**
 * Domain Registry — Viettel IDC Multi-Domain Baseline
 * Single Source of Truth (SSOT) for Domain-to-Market mappings.
 * Conforms strictly to VIDC_Architecture_Baseline_2026_v1.0_LOCKED
 */

export interface DomainConfig {
  domain: string;
  marketCode: string;
  defaultLocale: string;
  supportedLocales: string[];
  environment: 'production' | 'staging' | 'development' | 'legacy_external' | 'isolated';
  noIndex: boolean;
  notes?: string;
}

export const DOMAIN_REGISTRY: Record<string, DomainConfig> = {
  'viettelidc.com.vn': {
    domain: 'viettelidc.com.vn',
    marketCode: 'vn',
    defaultLocale: 'vi-VN',
    supportedLocales: ['vi-VN', 'en-VN'],
    environment: 'production',
    noIndex: false,
    notes: 'Primary Vietnam domestic domain',
  },
  'viettelidc.com': {
    domain: 'viettelidc.com',
    marketCode: 'int',
    defaultLocale: 'en',
    supportedLocales: ['en'],
    environment: 'production',
    noIndex: false,
    notes: 'Primary International domain',
  },
  'vtidc-test.com': {
    domain: 'vtidc-test.com',
    marketCode: 'vn',
    defaultLocale: 'vi-VN',
    supportedLocales: ['vi-VN', 'en-VN'],
    environment: 'staging',
    noIndex: true,
    notes: 'Staging environment — noindex enforced',
  },
};

/**
 * Resolves a DomainConfig from a raw HTTP host string.
 * Fails safely for unknown hosts without silently defaulting to Vietnam production context.
 */
export function resolveDomainConfig(host: string): DomainConfig {
  const normalizedHost = (host || '').toLowerCase().split(':')[0].trim();

  if (DOMAIN_REGISTRY[normalizedHost]) {
    return DOMAIN_REGISTRY[normalizedHost];
  }

  // Exact suffix matches for approved production domains
  if (normalizedHost.endsWith('.viettelidc.com.vn')) {
    return DOMAIN_REGISTRY['viettelidc.com.vn'];
  }

  if (normalizedHost.endsWith('.viettelidc.com')) {
    return DOMAIN_REGISTRY['viettelidc.com'];
  }

  // Staging, Cloud Run, Localhost fallbacks
  if (
    normalizedHost.includes('vtidc-test') ||
    normalizedHost.includes('localhost') ||
    normalizedHost.includes('127.0.0.1') ||
    normalizedHost.includes('run.app')
  ) {
    return {
      domain: normalizedHost || 'localhost',
      marketCode: 'vn',
      defaultLocale: 'vi-VN',
      supportedLocales: ['vi-VN', 'en-VN'],
      environment: normalizedHost.includes('vtidc-test') ? 'staging' : 'development',
      noIndex: true,
      notes: 'Preview / Development environment',
    };
  }

  // Legacy external domain (e.g. vcloudia.com)
  if (normalizedHost.includes('vcloudia.com')) {
    return {
      domain: 'vcloudia.com',
      marketCode: 'external',
      defaultLocale: 'en',
      supportedLocales: ['en'],
      environment: 'legacy_external',
      noIndex: true,
      notes: 'Legacy external domain — not a canonical primary market domain',
    };
  }

  // Unknown host: Fail safely, do NOT default to Vietnam production context
  return {
    domain: normalizedHost || 'unknown',
    marketCode: 'unknown',
    defaultLocale: 'en',
    supportedLocales: ['en'],
    environment: 'isolated',
    noIndex: true,
    notes: 'Unknown host — isolated safe fallback context',
  };
}
