/**
 * Viettel IDC — Content Repository & Adapter Boundary (Batch 8)
 * Clean abstraction decoupling Next.js App Router renderers from physical content sources.
 *
 * Architecture:
 * App Router -> Master Route Manifest -> MarketContext -> ContentRepository -> LocalContentAdapter -> (Future CMS Adapter)
 */

import { MASTER_ROUTE_MANIFEST, CANONICAL_SERVICES, SOLUTION_ROUTES } from '../../data/masterRouteManifest';
import { loadStandardServiceConfig, resolveServiceIdFromPath } from '../../data/serviceManifest';
import { ServiceDetailConfig } from '../../types/serviceDetail';
import {
  MarketCode,
  LocaleCode,
  CmsContentDocument,
  ServiceCmsContentRecord,
  SolutionCmsContentRecord,
  HubCmsContentRecord,
  StructuredFaqItem,
} from './contentModel';
import { validateCmsContentDocument } from './contentValidation';

export interface ContentQuery {
  entityId: string;
  marketCode: MarketCode;
  locale: LocaleCode;
  preview?: boolean;
}

export interface HubContentQuery {
  pageId: 'home' | 'services' | 'solutions' | 'pricing' | 'resources' | 'partners' | 'about' | 'promotions';
  marketCode: MarketCode;
  locale: LocaleCode;
  preview?: boolean;
}

export interface IContentRepository {
  getServiceContent(query: ContentQuery): Promise<ServiceCmsContentRecord | null>;
  getSolutionContent(query: ContentQuery): Promise<SolutionCmsContentRecord | null>;
  getHubContent(query: HubContentQuery): Promise<HubCmsContentRecord | null>;
  isContentPublished(entityId: string, marketCode: MarketCode, locale: LocaleCode): boolean;
  getFaqs(query: ContentQuery): Promise<StructuredFaqItem[]>;
}

/**
 * Local Content Adapter implementation of IContentRepository.
 * Bridges existing TypeScript data modules into the typed CMS content model.
 */
export class LocalContentRepository implements IContentRepository {
  /**
   * Evaluates explicit publication criteria:
   * 1. Route exists in Master Route Manifest
   * 2. Market is active/enabled for the entity
   * 3. Locale is supported for the market
   */
  isContentPublished(entityId: string, marketCode: MarketCode, locale: LocaleCode): boolean {
    const service = CANONICAL_SERVICES.find(
      (s) => s.routeId === entityId || s.routeId === `viettel-${entityId}` || s.canonicalPath.includes(`/${entityId}`)
    );
    if (service) {
      if (!service.publishedMarkets.includes(marketCode)) {
        return false;
      }
      // Explicit locale support validation
      if (marketCode === 'vn' && !['vi-VN', 'en-VN', 'vi', 'en'].includes(locale)) {
        return false;
      }
      if (marketCode === 'int' && !['en', 'en-VN'].includes(locale)) {
        return false;
      }
      return true;
    }

    const solution = SOLUTION_ROUTES.find((s) => s.id === entityId);
    if (solution) {
      return solution.publishedMarkets.includes(marketCode);
    }

    const bespoke = MASTER_ROUTE_MANIFEST.bespoke.find((b) => b.routeId === entityId);
    if (bespoke) {
      return bespoke.publishedMarkets.includes(marketCode);
    }

    return false;
  }

  /**
   * Retrieves structured service content.
   */
  async getServiceContent(query: ContentQuery): Promise<ServiceCmsContentRecord | null> {
    const { entityId, marketCode, locale, preview = false } = query;

    // Check publication if not preview mode
    if (!preview && !this.isContentPublished(entityId, marketCode, locale)) {
      return null;
    }

    // Resolve service metadata from manifest
    const manifestService = CANONICAL_SERVICES.find(
      (s) => s.routeId === entityId || s.routeId === `viettel-${entityId}` || s.canonicalPath.includes(`/${entityId}`)
    );

    const isEn = locale.startsWith('en');
    const serviceId = resolveServiceIdFromPath(entityId) || entityId;
    const rawConfig: ServiceDetailConfig | null = await loadStandardServiceConfig(serviceId);

    const titleVi = rawConfig?.pageTitle || manifestService?.titleVi || entityId;
    const titleEn = rawConfig?.pageTitle || manifestService?.titleEn || entityId;

    const faqs: StructuredFaqItem[] = (rawConfig?.faq?.items || []).map((f, idx) => ({
      id: `${entityId}-faq-${idx + 1}`,
      question: f.question,
      answer: f.answer,
      order: idx + 1,
      enabled: true,
    }));

    const record: ServiceCmsContentRecord = {
      entityId,
      routeId: manifestService?.routeId || entityId,
      pillarId: manifestService?.pillarId || rawConfig?.pillar || 'compute',
      sku: rawConfig?.sku || `SVC-${entityId.toUpperCase()}`,
      pageTitle: isEn ? titleEn : titleVi,
      marketCode,
      locale,
      editorial: {
        createdAt: '2026-01-01T00:00:00Z',
        updatedAt: '2026-09-22T00:00:00Z',
        version: 1,
        revisionId: `rev-${entityId}-v1`,
        status: 'published',
      },
      seoMetadata: {
        metaTitle: isEn ? `${titleEn} | Viettel IDC` : `${titleVi} | Viettel IDC`,
        metaDescription: isEn
          ? `Enterprise ${titleEn} services on Tier 3 standard infrastructure by Viettel IDC.`
          : `Dịch vụ ${titleVi} chuẩn quốc tế Rated 3 của Viettel IDC.`,
      },
      hero: {
        eyebrow: rawConfig?.hero?.eyebrow || 'Viettel IDC Cloud',
        headline: rawConfig?.hero?.headline || (isEn ? titleEn : titleVi),
        subheading: rawConfig?.hero?.subheading || '',
        primaryCta: {
          id: `${entityId}-cta-primary`,
          label: rawConfig?.hero?.primaryCta?.text || (isEn ? 'Get Started' : 'Đăng ký tư vấn'),
          actionType: (rawConfig?.hero?.primaryCta?.action as any) || 'quote',
          targetUrl: rawConfig?.hero?.primaryCta?.link || '/contact',
          variant: 'primary',
        },
        stats: rawConfig?.hero?.statRow?.map((s) => ({
          number: s.number,
          label: s.label,
          desc: s.desc,
        })),
      },
      faqs,
      sections: [],
      rawContent: rawConfig,
    };

    return record;
  }

  /**
   * Retrieves structured solution content.
   */
  async getSolutionContent(query: ContentQuery): Promise<SolutionCmsContentRecord | null> {
    const { entityId, marketCode, locale, preview = false } = query;

    if (!preview && !this.isContentPublished(entityId, marketCode, locale)) {
      return null;
    }

    const manifestSolution = SOLUTION_ROUTES.find((s) => s.id === entityId);
    const isEn = locale.startsWith('en');
    const titleVi = manifestSolution?.titleVi || entityId;
    const titleEn = manifestSolution?.titleEn || entityId;

    const record: SolutionCmsContentRecord = {
      entityId,
      routeId: `solution-${entityId}`,
      category: manifestSolution?.category || 'industry',
      pageTitle: isEn ? titleEn : titleVi,
      marketCode,
      locale,
      editorial: {
        createdAt: '2026-01-01T00:00:00Z',
        updatedAt: '2026-09-22T00:00:00Z',
        version: 1,
        revisionId: `rev-sol-${entityId}-v1`,
        status: 'published',
      },
      seoMetadata: {
        metaTitle: isEn ? `${titleEn} Solutions | Viettel IDC` : `Giải pháp ${titleVi} | Viettel IDC`,
        metaDescription: isEn
          ? `Comprehensive ${titleEn} technology solutions for enterprises.`
          : `Bộ giải pháp ${titleVi} toàn diện cho doanh nghiệp.`,
      },
      hero: {
        eyebrow: 'Viettel IDC Solutions',
        headline: isEn ? titleEn : titleVi,
        subheading: '',
        primaryCta: {
          id: `${entityId}-sol-cta`,
          label: isEn ? 'Contact Expert' : 'Liên hệ chuyên gia',
          actionType: 'consultation',
          targetUrl: '/contact',
          variant: 'primary',
        },
      },
      faqs: [],
      sections: [],
    };

    return record;
  }

  /**
   * Retrieves structured hub page content.
   */
  async getHubContent(query: HubContentQuery): Promise<HubCmsContentRecord | null> {
    const { pageId, marketCode, locale } = query;
    const isEn = locale.startsWith('en');

    const hubTitles: Record<string, { vi: string; en: string }> = {
      home: { vi: 'Hệ sinh thái Đám mây & Trung tâm dữ liệu số 1 Việt Nam', en: 'Vietnam No.1 Cloud & Data Center Ecosystem' },
      services: { vi: 'Danh mục Dịch vụ Công nghệ số', en: 'Digital Technology Services Catalog' },
      solutions: { vi: 'Giải pháp Công nghệ theo ngành', en: 'Industry & Technology Solutions' },
      pricing: { vi: 'Bảng giá Dịch vụ Viettel IDC', en: 'Viettel IDC Service Pricing' },
      resources: { vi: 'Tài nguyên & Tri thức Số', en: 'Resources & Digital Knowledge' },
      partners: { vi: 'Hệ sinh thái Đối tác Công nghệ', en: 'Technology Partner Ecosystem' },
      about: { vi: 'Về Viettel IDC', en: 'About Viettel IDC' },
      promotions: { vi: 'Chương trình Ưu đãi & Khuyến mại', en: 'Special Offers & Promotions' },
    };

    const title = hubTitles[pageId] || { vi: pageId, en: pageId };

    const record: HubCmsContentRecord = {
      entityId: pageId,
      routeId: pageId,
      pageId,
      pageTitle: isEn ? title.en : title.vi,
      marketCode,
      locale,
      editorial: {
        createdAt: '2026-01-01T00:00:00Z',
        updatedAt: '2026-09-22T00:00:00Z',
        version: 1,
        revisionId: `rev-hub-${pageId}-v1`,
        status: 'published',
      },
      hero: {
        headline: isEn ? title.en : title.vi,
        subheading: '',
        primaryCta: {
          id: `${pageId}-hub-cta`,
          label: isEn ? 'Explore Now' : 'Khám phá ngay',
          actionType: 'link',
          targetUrl: '/services',
          variant: 'primary',
        },
      },
      sections: [],
    };

    return record;
  }

  /**
   * Retrieves visible FAQs (used directly by UI & Structured Data).
   */
  async getFaqs(query: ContentQuery): Promise<StructuredFaqItem[]> {
    const serviceContent = await this.getServiceContent(query);
    return serviceContent?.faqs || [];
  }
}

// Global Singleton Repository instance
export const contentRepository: IContentRepository = new LocalContentRepository();
