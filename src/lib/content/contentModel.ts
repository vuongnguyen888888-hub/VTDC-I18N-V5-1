/**
 * Viettel IDC — CMS Content Model & Architecture (Batch 8)
 * Single Source of Truth for CMS-manageable typed content records, section models,
 * publication states, and entity relationships.
 */

export type MarketCode = 'vn' | 'int' | string;
export type LocaleCode = 'vi-VN' | 'en-VN' | 'en' | string;

export type ContentPublicationStatus = 'draft' | 'review' | 'published' | 'archived';

export type CtaActionType =
  | 'consultation'
  | 'trial'
  | 'pricing'
  | 'console'
  | 'contact'
  | 'download'
  | 'quote'
  | 'link';

export interface EditorialMetadata {
  createdAt: string;
  updatedAt: string;
  updatedBy?: string; // Kept internal, never exposed publicly
  version: number;
  revisionId: string;
  status: ContentPublicationStatus;
}

export interface StructuredMedia {
  assetUrl: string;
  altText: string;
  caption?: string;
  width?: number;
  height?: number;
  isDecorative?: boolean;
}

export interface StructuredCta {
  id: string;
  label: string;
  subtext?: string;
  actionType: CtaActionType;
  targetUrl?: string; // Controlled URL/path
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  trackingEventName?: string;
}

export interface StructuredFaqItem {
  id: string;
  question: string;
  answer: string | string[];
  order: number;
  enabled: boolean;
  category?: string;
}

export interface StructuredTableColumn {
  header: string;
  key: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  isPrice?: boolean;
  isAction?: boolean;
}

export interface StructuredTableRow {
  id: string;
  cells: Record<string, string | number | boolean | null | undefined>;
  highlight?: boolean;
  order: number;
}

export interface StructuredTableGroup {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  columns: StructuredTableColumn[];
  rows: StructuredTableRow[];
  order: number;
  enabled: boolean;
}

export interface StructuredContentSection<T = any> {
  id: string;
  type:
    | 'hero'
    | 'overview'
    | 'features'
    | 'benefits'
    | 'useCases'
    | 'technicalSpecifications'
    | 'pricingPresentation'
    | 'faq'
    | 'ctaSections'
    | 'docsSupport'
    | 'relatedServices'
    | 'custom';
  order: number;
  enabled: boolean;
  title?: string;
  eyebrow?: string;
  data: T;
}

/**
 * Composite Content Record Key
 * Unique identifier for localized market content.
 */
export interface ContentRecordKey {
  entityId: string;
  marketCode: MarketCode;
  locale: LocaleCode;
}

/**
 * Base CMS Content Document
 */
export interface CmsContentDocument<T = any> {
  entityId: string;
  routeId: string;
  marketCode: MarketCode;
  locale: LocaleCode;
  editorial: EditorialMetadata;
  seoMetadata?: {
    metaTitle?: string;
    metaDescription?: string;
    socialImage?: string;
    keywords?: string[];
  };
  sections: StructuredContentSection[];
  rawContent?: T;
}

/**
 * Service Page Specific CMS Content Record
 */
export interface ServiceCmsContentRecord extends CmsContentDocument {
  pillarId: string;
  sku: string;
  pageTitle: string;
  hero: {
    eyebrow: string;
    headline: string;
    subheading: string;
    primaryCta: StructuredCta;
    secondaryCta?: StructuredCta;
    stats?: { number: string; label: string; desc?: string }[];
    media?: StructuredMedia;
  };
  faqs: StructuredFaqItem[];
  pricingTables?: StructuredTableGroup[];
}

/**
 * Solution Page Specific CMS Content Record
 */
export interface SolutionCmsContentRecord extends CmsContentDocument {
  category: string;
  pageTitle: string;
  hero: {
    eyebrow?: string;
    headline: string;
    subheading: string;
    primaryCta: StructuredCta;
    media?: StructuredMedia;
  };
  faqs: StructuredFaqItem[];
}

/**
 * Hub Page Specific CMS Content Record
 */
export interface HubCmsContentRecord extends CmsContentDocument {
  pageId: 'home' | 'services' | 'solutions' | 'pricing' | 'resources' | 'partners' | 'about' | 'promotions';
  pageTitle: string;
  hero: {
    headline: string;
    subheading: string;
    primaryCta?: StructuredCta;
    media?: StructuredMedia;
  };
}
