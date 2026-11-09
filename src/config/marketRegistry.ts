/**
 * Market Registry — Viettel IDC Commercial & Geographic Markets
 * Single Source of Truth (SSOT) for Commercial Market Configurations.
 * Conforms strictly to VIDC_Architecture_Baseline_2026_v1.0_LOCKED
 */

export interface MarketConfig {
  marketCode: string;
  nameVi: string;
  nameEn: string;
  defaultDomain: string;
  defaultLocale: string;
  supportedLocales: string[];
  currency: string;
  secondaryCurrency?: string;
  status: 'active' | 'planned' | 'business-gated' | 'disabled';
  commercialModel: 'domestic' | 'international' | 'partner_reseller';
}

export const MARKET_REGISTRY: Record<string, MarketConfig> = {
  vn: {
    marketCode: 'vn',
    nameVi: 'Việt Nam',
    nameEn: 'Vietnam',
    defaultDomain: 'viettelidc.com.vn',
    defaultLocale: 'vi-VN',
    supportedLocales: ['vi-VN', 'en-VN'],
    currency: 'VND',
    status: 'active',
    commercialModel: 'domestic',
  },
  int: {
    marketCode: 'int',
    nameVi: 'Quốc tế (Global)',
    nameEn: 'Global International',
    defaultDomain: 'viettelidc.com',
    defaultLocale: 'en',
    supportedLocales: ['en'],
    currency: 'USD',
    status: 'active',
    commercialModel: 'international',
  },
  la: {
    marketCode: 'la',
    nameVi: 'Lào',
    nameEn: 'Laos',
    defaultDomain: 'viettelidc.com',
    defaultLocale: 'lo-LA',
    supportedLocales: ['lo-LA', 'en-LA'],
    currency: 'LAK',
    secondaryCurrency: 'USD',
    status: 'planned',
    commercialModel: 'partner_reseller',
  },
  ph: {
    marketCode: 'ph',
    nameVi: 'Philippines',
    nameEn: 'Philippines',
    defaultDomain: 'viettelidc.com',
    defaultLocale: 'en-PH',
    supportedLocales: ['fil-PH', 'en-PH'],
    currency: 'PHP',
    secondaryCurrency: 'USD',
    status: 'planned',
    commercialModel: 'partner_reseller',
  },
  mm: {
    marketCode: 'mm',
    nameVi: 'Myanmar',
    nameEn: 'Myanmar',
    defaultDomain: 'viettelidc.com',
    defaultLocale: 'my-MM',
    supportedLocales: ['my-MM', 'en-MM'],
    currency: 'MMK',
    secondaryCurrency: 'USD',
    status: 'planned',
    commercialModel: 'partner_reseller',
  },
  kh: {
    marketCode: 'kh',
    nameVi: 'Campuchia',
    nameEn: 'Cambodia',
    defaultDomain: 'viettelidc.com',
    defaultLocale: 'km-KH',
    supportedLocales: ['km-KH', 'en-KH'],
    currency: 'USD',
    status: 'planned',
    commercialModel: 'partner_reseller',
  },
};

export function getMarketConfig(marketCode: string): MarketConfig {
  return MARKET_REGISTRY[marketCode] || MARKET_REGISTRY['vn'];
}
