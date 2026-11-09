/**
 * Viettel IDC Hub Core Type Definitions
 */

export type MarketCode = 'vn' | 'global' | 'mm' | 'la' | 'vcloudia' | 'vn-fdi' | 'ph';

export type LocaleCode = 
  | 'vi-VN'    // Vietnam - Vietnamese
  | 'en-VN'    // Vietnam - English (domestic)
  | 'en'       // Global English
  | 'en-MM'    // Myanmar - English (production-gated)
  | 'my-MM'    // Myanmar - Burmese (BLK: chưa có bản dịch)
  | 'en-LA'    // Laos - English (business-gated)
  | 'lo-LA'    // Laos - Lao (business-gated)
  | 'en-PH'    // Philippines - English (business-gated)
  | 'fil-PH';  // Philippines - Filipino (business-gated)

export type CurrencyCode = 'VND' | 'USD' | 'MMK' | 'LAK' | 'LKR' | 'MYR' | 'PHP' | 'JPY';

export type TemplateId =
  | 'T01'     // Homepage
  | 'T02'     // Listing/Hub
  | 'T03-V3'  // Service Detail (10 sections)
  | 'T04'     // Solution Detail
  | 'T05'     // Pricing Hub
  | 'T06'     // Resource Hub
  | 'T07'     // Resource Detail
  | 'T08'     // Campaign/Landing
  | 'T09'     // About/Corporate
  | 'T10'     // Data Center Detail
  | 'T11'     // Partner Program
  | 'T12'     // Support/Contact
  | 'T13'     // Search Results
  | 'T14'     // Legal/Policy
  | 'T15';    // System/Error/Utility

export type ServiceCategoryId =
  | 'cloud-compute'
  | 'container-kubernetes'
  | 'data-center'
  | 'storage'
  | 'data-platform'
  | 'networking'
  | 'security'
  | 'cloud-operations'
  | 'digital-services'
  | 'managed-services'
  | 'hosting';

export interface MarketConfig {
  marketId: MarketCode;
  countryCode: string;
  marketName: string;
  domain: string;
  routePrefix: string;
  defaultLocale: LocaleCode;
  supportedLocales: {
    code: LocaleCode;
    label: string;
    pathPrefix: string;
    flag: string;
  }[];
  currencies: {
    primary: CurrencyCode;
    fallback: CurrencyCode;
  };
  billingTaxStatus: string;
  launchStatus: 'approved' | 'planned' | 'staging' | 'draft';
  verificationStatus: 'verified' | 'unverified' | 'conflicted';
}

export interface ServiceRecord {
  serviceId: string;
  code: string;
  name: string;
  category: ServiceCategoryId;
  canonicalPath: string;
  tagline: string;
  description: string;
  iconName: string;
  badgeText?: string;
  pricingEnabled: boolean;
  fulfillment: 'self-service' | 'assisted' | 'quote-only' | 'tbd';
  availability: MarketCode[];
  specHighlights: { label: string; value: string }[];
  featured: boolean;
  verificationStatus: 'verified' | 'unverified' | 'conflicted';
  publishStatus: 'published' | 'approved' | 'review' | 'draft';
}

export interface SolutionRecord {
  solutionId: string;
  slug: string;
  title: string;
  subtitle: string;
  categoryType: 'by-use-case' | 'by-industry' | 'by-business-size';
  targetAudience: string;
  summary: string;
  keyBenefits: string[];
  mappedServiceIds: string[];
  iconName: string;
  publishStatus: 'published' | 'approved' | 'draft';
}

export interface RouteRecord {
  routeId: string;
  marketId: MarketCode;
  locale: LocaleCode;
  path: string;
  canonicalUrl: string;
  title: string;
  metaDescription: string;
  templateId: TemplateId;
  robots: 'index,follow' | 'noindex,follow' | 'noindex,nofollow';
  sitemapEligible: boolean;
  hreflangGroupId?: string;
  publishStatus: 'published' | 'approved' | 'review' | 'draft';
}

export interface ClaimRecord {
  claimId: string;
  exactText: string;
  value: string;
  unit: string;
  marketScope: MarketCode[];
  sourceEvidence: string;
  evidenceDate: string;
  approvalStatus: 'approved' | 'under-review' | 'expired';
  validFrom: string;
  validTo: string | null;
}

export interface PricingPlan {
  planId: string;
  name: string;
  tierTag?: string;
  isPopular?: boolean;
  cpu: string;
  ram: string;
  disk: string;
  bandwidth: string;
  monthlyPriceVND: number;
  monthlyPriceUSD: number;
  monthlyPriceMMK: number;
  hourlyPriceVND?: number;
  features: string[];
  ctaLabel: string;
}

export interface LeadSubmission {
  marketId: MarketCode;
  locale: LocaleCode;
  serviceId?: string;
  fullName: string;
  emailOrPhone: string;
  companyName: string;
  needDescription: string;
  consentNoticeVersion: string;
  marketingOptIn: boolean;
  submittedAt: string;
}

export interface SearchItem {
  id: string;
  title: string;
  type: 'Service' | 'Solution' | 'Data Center' | 'Resource' | 'Legal' | 'Page';
  snippet: string;
  path: string;
  category?: string;
}


