/**
 * Centralized Structured Data (JSON-LD) SSOT Layer
 * Architecture Baseline 2026 for Viettel IDC
 * 
 * Complies with Schema.org standards, Google Search Central recommendations,
 * and AI search / answer engine discoverability principles.
 */

import { MarketContext } from '@/lib/context/resolveMarketContext';
import { buildCanonicalUrl, isRouteIndexable } from '@/utils/seoMetadata';
import { CANONICAL_SERVICES, SOLUTION_ROUTES, SERVICE_PILLARS } from '@/data/masterRouteManifest';
import { resolveServiceIdFromPath } from '@/data/serviceManifest';
import { contentRepository } from '@/lib/content/contentRepository';
import { RESOURCES_DATA } from '@/data/resourcesData';

// Single authoritative Organization @id across all domains/markets
export const AUTHORITATIVE_ORG_ID = 'https://viettelidc.com.vn/#organization';

// Verified Organization Data (Strictly verified official assets & profiles)
export const VIDC_ORG_CONSTANTS = {
  nameVi: 'Công ty Cổ phần Viettel - CHT (Viettel IDC)',
  nameEn: 'Viettel IDC',
  shortName: 'Viettel IDC',
  logoUrl: 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1782053913/logo-IDC_2_up2gqp.svg',
  sameAs: [
    'https://facebook.com/viettelidc',
    'https://linkedin.com/company/viettelidc',
    'https://youtube.com/viettelidc',
  ],
};

/**
 * Builds the canonical Organization entity schema.
 * Stable single @id: https://viettelidc.com.vn/#organization
 */
export function buildOrganizationEntity(context: MarketContext) {
  const isEn = context.languageCode === 'en';

  return {
    '@type': 'Organization',
    '@id': AUTHORITATIVE_ORG_ID,
    name: isEn ? VIDC_ORG_CONSTANTS.nameEn : VIDC_ORG_CONSTANTS.nameVi,
    alternateName: VIDC_ORG_CONSTANTS.shortName,
    url: 'https://viettelidc.com.vn/',
    logo: {
      '@type': 'ImageObject',
      url: VIDC_ORG_CONSTANTS.logoUrl,
    },
    sameAs: VIDC_ORG_CONSTANTS.sameAs,
  };
}

/**
 * Builds the canonical WebSite entity schema.
 * Stable @id: https://<domain>/#website
 */
export function buildWebSiteEntity(context: MarketContext) {
  const isEn = context.languageCode === 'en';
  const siteId = `https://${context.canonicalHost}/#website`;

  return {
    '@type': 'WebSite',
    '@id': siteId,
    url: `https://${context.canonicalHost}/`,
    name: 'Viettel IDC',
    description: isEn
      ? 'Viettel IDC - Leading Data Center & Cloud Services in Vietnam and Southeast Asia'
      : 'Viettel IDC - Nhà cung cấp dịch vụ Trung tâm Dữ liệu và Điện toán đám mây hàng đầu Việt Nam',
    publisher: {
      '@id': AUTHORITATIVE_ORG_ID,
    },
    inLanguage: context.htmlLang,
  };
}

/**
 * Builds a BreadcrumbList entity schema from an ordered list of crumbs.
 * Stable @id: <canonicalUrl>#breadcrumb
 */
export function buildBreadcrumbEntity(canonicalUrl: string, crumbs: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: crumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Builds a WebPage entity schema.
 * Stable @id: <canonicalUrl>#webpage
 */
export function buildWebPageEntity(
  canonicalUrl: string,
  name: string,
  description: string,
  context: MarketContext
) {
  const siteId = `https://${context.canonicalHost}/#website`;

  return {
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name,
    description,
    isPartOf: {
      '@id': siteId,
    },
    breadcrumb: {
      '@id': `${canonicalUrl}#breadcrumb`,
    },
    inLanguage: context.htmlLang,
  };
}

/**
 * Builds FAQPage entity schema if real questions and answers exist.
 */
export function buildFaqPageEntity(
  canonicalUrl: string,
  faqItems: { question: string; answer: string }[]
) {
  if (!faqItems || faqItems.length === 0) return null;

  return {
    '@type': 'FAQPage',
    '@id': `${canonicalUrl}#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Builds a Schema.org @graph wrapper for structured data blocks.
 */
export function buildStructuredDataGraph(nodes: (object | null | undefined)[]) {
  const validNodes = nodes.filter(Boolean);
  if (validNodes.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@graph': validNodes,
  };
}

/**
 * Homepage Schema Builder
 * Emits Organization, WebSite, and WebPage entities.
 */
export function buildHomePageSchema(context: MarketContext) {
  if (!isRouteIndexable(context, '/')) {
    return null;
  }

  const canonicalUrl = buildCanonicalUrl(context.routePrefix, context.canonicalHost, '/');
  const isEn = context.languageCode === 'en';

  const title = isEn
    ? 'Viettel IDC | Leading Cloud & Data Center Services'
    : 'Viettel IDC | Trung tâm Dữ liệu & Dịch vụ Cloud hàng đầu Việt Nam';

  const description = isEn
    ? 'Viettel IDC is the leading provider of Cloud Server, Colocation, and Data Center services in Vietnam.'
    : 'Viettel IDC - Nhà cung cấp dịch vụ Trung tâm Dữ liệu, Cloud Server, Colocation và Lưu trữ Đối tượng hàng đầu tại Việt Nam và Đông Nam Á.';

  const orgEntity = buildOrganizationEntity(context);
  const siteEntity = buildWebSiteEntity(context);
  const pageEntity = buildWebPageEntity(canonicalUrl, title, description, context);

  return buildStructuredDataGraph([orgEntity, siteEntity, pageEntity]);
}

/**
 * Canonical Service Page Schema Builder
 * Emits WebPage, BreadcrumbList, Service entity, and optional FAQPage / Offer.
 */
export async function buildServicePageSchema(
  context: MarketContext,
  pillar: string,
  serviceSlug: string
) {
  const targetPath = `/services/${pillar}/${serviceSlug}/`;
  const pureSlug = `/services/${pillar}/${serviceSlug}`;

  if (!isRouteIndexable(context, pureSlug)) {
    return null;
  }

  const canonicalUrl = buildCanonicalUrl(context.routePrefix, context.canonicalHost, pureSlug);
  const isEn = context.languageCode === 'en';

  // Find in CANONICAL_SERVICES
  const manifestService = CANONICAL_SERVICES.find(
    (s) =>
      s.canonicalPath === targetPath ||
      s.canonicalPath === pureSlug ||
      s.canonicalPath === `/services/${pillar}/${serviceSlug}/` ||
      s.routeId === serviceSlug ||
      s.routeId === `viettel-${serviceSlug}` ||
      s.routeId === `viettel-virtual-${serviceSlug}` ||
      s.canonicalPath.endsWith(`/${serviceSlug}/`)
  );

  const serviceName = isEn
    ? (manifestService?.titleEn || serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()))
    : (manifestService?.titleVi || serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()));

  const serviceDesc = isEn
    ? `Enterprise-grade ${serviceName} services on international Tier 3 standard infrastructure by Viettel IDC.`
    : `Dịch vụ ${serviceName} chất lượng cao, hạ tầng trung tâm dữ liệu chuẩn quốc tế Rated 3 của Viettel IDC.`;

  const foundPillar = SERVICE_PILLARS.find((p) => p.id === pillar);
  const pillarName = foundPillar 
    ? (isEn ? foundPillar.menuLabelEn : foundPillar.menuLabelVi) 
    : (pillar.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()));

  // 1. Breadcrumbs
  const homeUrl = buildCanonicalUrl(context.routePrefix, context.canonicalHost, '/');
  const servicesHubUrl = buildCanonicalUrl(context.routePrefix, context.canonicalHost, '/services');
  
  const crumbs = [
    { name: isEn ? 'Home' : 'Trang chủ', url: homeUrl },
    { name: isEn ? 'Services' : 'Dịch vụ', url: servicesHubUrl },
    { name: pillarName, url: servicesHubUrl },
    { name: serviceName, url: canonicalUrl },
  ];
  const breadcrumbEntity = buildBreadcrumbEntity(canonicalUrl, crumbs);

  // 2. WebPage entity
  const pageEntity = buildWebPageEntity(canonicalUrl, `${serviceName} | Viettel IDC`, serviceDesc, context);

  // 3. Service entity
  const serviceId = `${canonicalUrl}#service`;

  const serviceEntity: Record<string, any> = {
    '@type': 'Service',
    '@id': serviceId,
    name: serviceName,
    description: serviceDesc,
    url: canonicalUrl,
    provider: {
      '@id': AUTHORITATIVE_ORG_ID,
    },
    serviceType: pillarName,
  };

  // Area served only for verified market
  if (context.marketCode === 'vn') {
    serviceEntity.areaServed = {
      '@type': 'Country',
      name: 'Vietnam',
    };
  }

  // Check for visible FAQs and Pricing via ContentRepository SSOT boundary
  const resolvedServiceId = resolveServiceIdFromPath(pureSlug) || resolveServiceIdFromPath(serviceSlug);
  let faqEntity = null;

  if (resolvedServiceId) {
    try {
      const serviceContent = await contentRepository.getServiceContent({
        entityId: resolvedServiceId,
        marketCode: context.marketCode as any,
        locale: context.locale as any,
      });

      if (serviceContent?.faqs && serviceContent.faqs.length > 0) {
        const rawFaqs = serviceContent.faqs.map((item) => ({
          question: item.question,
          answer: Array.isArray(item.answer) ? item.answer.join(' ') : item.answer,
        }));
        faqEntity = buildFaqPageEntity(canonicalUrl, rawFaqs);
      }

      // Check for Offer from pricing table/cards if numeric price exists
      const standardConfig = serviceContent?.rawContent;
      if (context.marketCode === 'vn' && standardConfig?.pricing?.cards && standardConfig.pricing.cards.length > 0) {
        const primaryCard = standardConfig.pricing.cards[0];
        if (primaryCard?.priceMonthly && /^\d+/.test(primaryCard.priceMonthly.replace(/\./g, ''))) {
          const numericPrice = primaryCard.priceMonthly.replace(/[^\d]/g, '');
          if (numericPrice && Number(numericPrice) > 0) {
            serviceEntity.offers = {
              '@type': 'Offer',
              price: numericPrice,
              priceCurrency: 'VND',
              availability: 'https://schema.org/InStock',
              url: canonicalUrl,
            };
          }
        }
      }
    } catch {
      // Graceful fallback
    }
  }

  // Bespoke Cloud Server FAQ fallback matching CloudServerFaq.tsx visible items
  if (serviceSlug === 'cloud-server' && !faqEntity) {
    const cloudServerFaqs = [
      {
        question: isEn ? 'What is Viettel Cloud Server?' : 'Viettel Cloud Server là gì?',
        answer: isEn
          ? 'Viettel Cloud Server is a virtual private server service built on international standardized OpenStack open-source cloud computing platform, offering flexible compute resources (vCPU, RAM, Storage), high availability, and 99.99% SLA commitment.'
          : 'Viettel Cloud Server là dịch vụ máy chủ ảo trên nền tảng điện toán đám mây mã nguồn mở OpenStack, cung cấp tài nguyên tính toán (vCPU, RAM, Storage) co giãn linh hoạt, tính sẵn sàng cao và cam kết SLA lên tới 99.99%.',
      },
      {
        question: isEn ? 'What is the difference between Pay-as-you-go and Monthly subscription?' : 'Khác biệt giữa gói Pay-as-you-go và gói Đăng ký theo tháng?',
        answer: isEn
          ? 'Pay-as-you-go bills you detailed by actual hours used (ideal for short-term testing or projects). Monthly subscriptions help optimize costs for systems requiring stable, long-term operation.'
          : 'Gói Pay-as-you-go tính tiền chi tiết theo từng giờ sử dụng thực tế (phù hợp thử nghiệm hoặc dự án ngắn hạn). Gói đăng ký theo tháng giúp tối ưu chi phí hơn cho các hệ thống hoạt động ổn định lâu dài.',
      },
      {
        question: isEn ? 'Is my data automatically backed up?' : 'Dữ liệu của tôi có được sao lưu (Backup) tự động không?',
        answer: isEn
          ? 'Yes, the system supports Auto Snapshot and scheduled daily/weekly Backups to ensure comprehensive data safety for your virtual server.'
          : 'Có, hệ thống hỗ trợ tính năng Auto Snapshot và Backup định kỳ hàng ngày/hàng tuần giúp đảm bảo an toàn dữ liệu toàn diện cho máy chủ của bạn.',
      },
      {
        question: isEn ? 'Can I upgrade my server configuration (Scale Up) when needed?' : 'Tôi có thể nâng cấp cấu hình máy chủ (Scale Up) khi có nhu cầu không?',
        answer: isEn
          ? 'Absolutely. You just need to increase vCPU, RAM, or Enterprise SSD storage directly on the automated admin Portal without affecting your existing data.'
          : 'Hoàn toàn có thể. Bạn chỉ cần thao tác tăng vCPU, RAM hay dung lượng SSD Enterprise trực tiếp trên Portal quản trị tự động mà không làm ảnh hưởng đến dữ liệu hiện có.',
      },
      {
        question: isEn ? 'Which Operating Systems (OS) are supported?' : 'Viettel Cloud Server hỗ trợ những Hệ điều hành (OS) nào?',
        answer: isEn
          ? 'The service supports most popular operating systems including Linux distributions (Ubuntu, CentOS, Debian, AlmaLinux, Rocky Linux) and licensed versions of Windows Server.'
          : 'Dịch vụ hỗ trợ hầu hết các hệ điều hành phổ biến gồm các bản phân phối Linux (Ubuntu, CentOS, Debian, AlmaLinux, Rocky Linux) và Windows Server các phiên bản bản quyền.',
      },
      {
        question: isEn ? 'How is virtual server security guaranteed?' : 'Làm thế nào để đảm bảo an toàn bảo mật cho máy chủ ảo?',
        answer: isEn
          ? 'Viettel Cloud Server is pre-equipped with Firewall/Security Group, VPC private virtual networks, Anti-DDoS protection, and certified under PCI-DSS, ISO 27001, and ISO 27017 international security standards.'
          : 'Viettel Cloud Server trang bị sẵn hệ thống Firewall/Security Group, mạng ảo riêng VPC, chống tấn công DDoS và đạt chứng nhận an toàn thông tin quốc tế PCI-DSS, ISO 27001, ISO 27017.',
      },
      {
        question: isEn ? 'Can I get help migrating data from another provider?' : 'Tôi có được hỗ trợ chuyển đổi dữ liệu từ nhà cung cấp khác sang Viettel Cloud không?',
        answer: isEn
          ? 'Yes. Viettel IDC experts provide fully free consulting and Data Migration assistance from your old premises, on-premise infrastructure, or global public clouds (AWS, Azure, GCP).'
          : 'Có. Chuyên gia Viettel IDC hỗ trợ tư vấn và chuyển đổi dữ liệu (Data Migration) hoàn toàn miễn phí từ hạ tầng cũ, on-premise hoặc các nền tảng cloud quốc tế (AWS, Azure, GCP).',
      },
    ];
    faqEntity = buildFaqPageEntity(canonicalUrl, cloudServerFaqs);
  }

  return buildStructuredDataGraph([pageEntity, breadcrumbEntity, serviceEntity, faqEntity]);
}

/**
 * Solution Page Schema Builder
 * Emits WebPage, BreadcrumbList.
 */
export function buildSolutionPageSchema(context: MarketContext, slug: string) {
  const targetPath = `/solutions/${slug}/`;
  const pureSlug = `/solutions/${slug}`;

  if (!isRouteIndexable(context, pureSlug)) {
    return null;
  }

  const canonicalUrl = buildCanonicalUrl(context.routePrefix, context.canonicalHost, pureSlug);
  const isEn = context.languageCode === 'en';

  const foundSolution = SOLUTION_ROUTES.find(
    (s) => s.id === slug || s.canonicalPath === targetPath || s.canonicalPath === pureSlug
  );

  const titleName = isEn
    ? (foundSolution?.titleEn || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()))
    : (foundSolution?.titleVi || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()));

  const pageTitle = isEn ? `${titleName} Solutions | Viettel IDC` : `Giải pháp ${titleName} | Viettel IDC`;
  const pageDesc = isEn
    ? `Comprehensive ${titleName} technology solutions optimized for enterprise digital transformation by Viettel IDC.`
    : `Bộ giải pháp ${titleName} tối ưu cho doanh nghiệp trên nền tảng hạ tầng số toàn diện của Viettel IDC.`;

  const homeUrl = buildCanonicalUrl(context.routePrefix, context.canonicalHost, '/');
  const solutionsHubUrl = buildCanonicalUrl(context.routePrefix, context.canonicalHost, '/solutions');

  const crumbs = [
    { name: isEn ? 'Home' : 'Trang chủ', url: homeUrl },
    { name: isEn ? 'Solutions' : 'Giải pháp', url: solutionsHubUrl },
    { name: titleName, url: canonicalUrl },
  ];

  const breadcrumbEntity = buildBreadcrumbEntity(canonicalUrl, crumbs);
  const pageEntity = buildWebPageEntity(canonicalUrl, pageTitle, pageDesc, context);

  return buildStructuredDataGraph([pageEntity, breadcrumbEntity]);
}

/**
 * Hub & Bespoke Page Schema Builder (About, Pricing, Resources, Partners, Promotions, Hubs)
 */
export function buildBespokePageSchema(
  context: MarketContext,
  routeKey: 'about' | 'pricing' | 'resources' | 'partners' | 'promotions' | 'services' | 'solutions'
) {
  const pureSlug = `/${routeKey}`;

  if (!isRouteIndexable(context, pureSlug)) {
    return null;
  }

  const canonicalUrl = buildCanonicalUrl(context.routePrefix, context.canonicalHost, pureSlug);
  const isEn = context.languageCode === 'en';

  let title = 'Viettel IDC';
  let desc = 'Viettel IDC Portal';
  let crumbLabel = routeKey.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  switch (routeKey) {
    case 'about':
      title = isEn ? 'About Viettel IDC | Leading Cloud & Data Center Provider' : 'Giới thiệu về Viettel IDC | Nhà cung cấp dịch vụ Trung tâm dữ liệu & Cloud hàng đầu';
      desc = isEn ? 'Learn about Viettel IDC, our mission, Tier 3 - TIA 942 international data center infrastructure, and commitment to sustainable digital transformation.' : 'Tìm hiểu về Viettel IDC, sứ mệnh, hạ tầng trung tâm dữ liệu tiêu chuẩn quốc tế Rated 3 - TIA 942 và cam kết phát triển bền vững.';
      crumbLabel = isEn ? 'About Us' : 'Giới thiệu';
      break;
    case 'pricing':
      title = isEn ? 'Service Pricing & Cost Calculator | Viettel IDC' : 'Bảng giá dịch vụ & Công cụ tính giá | Viettel IDC';
      desc = isEn ? 'Explore transparent pricing and calculate costs for Viettel IDC cloud servers, colocation, storage, and cybersecurity services online.' : 'Tra cứu bảng giá và ước tính chi phí các dịch vụ Cloud, Data Center, Bảo mật của Viettel IDC trực tuyến.';
      crumbLabel = isEn ? 'Pricing' : 'Bảng giá';
      break;
    case 'resources':
      title = isEn ? 'Resources & Technical Knowledge Center | Viettel IDC' : 'Tài nguyên & Tài liệu kỹ thuật | Viettel IDC';
      desc = isEn ? 'Technical whitepapers, case studies, industry reports, and cloud transformation documentation by Viettel IDC.' : 'Trung tâm tài nguyên, whitepapers, case studies và tài liệu hướng dẫn kỹ thuật điện toán đám mây Viettel IDC.';
      crumbLabel = isEn ? 'Resources' : 'Tài nguyên';
      break;
    case 'partners':
      title = isEn ? 'Partnership Ecosystem | Viettel IDC' : 'Hệ sinh thái Đối tác chiến lược | Viettel IDC';
      desc = isEn ? 'Global technology partners and certified solution providers of Viettel IDC.' : 'Hệ sinh thái đối tác công nghệ toàn cầu và mạng lưới đối tác giải pháp của Viettel IDC.';
      crumbLabel = isEn ? 'Partners' : 'Đối tác';
      break;
    case 'promotions':
      title = isEn ? 'Special Promotions & Offers | Viettel IDC' : 'Chương trình Khuyến mại & Ưu đãi đặc biệt | Viettel IDC';
      desc = isEn ? 'Exclusive promotional programs and business incentives for cloud and data center services at Viettel IDC.' : 'Các chương trình ưu đãi đặc quyền và khuyến mại dịch vụ điện toán đám mây tại Viettel IDC.';
      crumbLabel = isEn ? 'Promotions' : 'Khuyến mại';
      break;
    case 'services':
      title = isEn ? 'Cloud & Data Center Service Catalog | Viettel IDC' : 'Danh mục Dịch vụ Cloud & Data Center | Viettel IDC';
      desc = isEn ? 'Explore our catalog of cloud computing, colocation, storage, networking, and cybersecurity services.' : 'Hệ sinh thái 59+ dịch vụ điện toán đám mây, trung tâm dữ liệu, lưu trữ, mạng và bảo mật an toàn thông tin của Viettel IDC.';
      crumbLabel = isEn ? 'Services' : 'Dịch vụ';
      break;
    case 'solutions':
      title = isEn ? 'Industry Technology Solutions Ecosystem | Viettel IDC' : 'Hệ sinh thái Giải pháp công nghệ | Viettel IDC';
      desc = isEn ? 'Explore comprehensive digital transformation and enterprise IT solutions designed for finance, healthcare, education, retail, and manufacturing.' : 'Khám phá 16 giải pháp chuyển đổi số toàn diện theo từng ngành nghề từ Viettel IDC.';
      crumbLabel = isEn ? 'Solutions' : 'Giải pháp';
      break;
  }

  const homeUrl = buildCanonicalUrl(context.routePrefix, context.canonicalHost, '/');
  const crumbs = [
    { name: isEn ? 'Home' : 'Trang chủ', url: homeUrl },
    { name: crumbLabel, url: canonicalUrl },
  ];

  const breadcrumbEntity = buildBreadcrumbEntity(canonicalUrl, crumbs);
  const pageEntity = buildWebPageEntity(canonicalUrl, title, desc, context);

  // Optional: For resources page, if articles exist, emit Article list summary
  const extraNodes: any[] = [];
  if (routeKey === 'resources' && RESOURCES_DATA && RESOURCES_DATA.length > 0) {
    // Take top 3 verified editorial resources
    const topArticles = RESOURCES_DATA.slice(0, 3).map((res) => ({
      '@type': 'Article',
      '@id': `${canonicalUrl}#article-${res.id}`,
      headline: res.title,
      description: res.description,
      image: res.bannerImage,
      author: {
        '@type': 'Organization',
        name: res.author,
      },
      publisher: {
        '@id': AUTHORITATIVE_ORG_ID,
      },
    }));
    extraNodes.push(...topArticles);
  }

  return buildStructuredDataGraph([pageEntity, breadcrumbEntity, ...extraNodes]);
}
