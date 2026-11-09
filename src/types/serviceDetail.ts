export interface ServiceHighlight {
  title: string;
  description: string;
}

export interface PricingControlOption {
  id: string;
  label: string;
}

export interface PricingControl {
  id: string;
  label: string;
  options: PricingControlOption[];
  defaultSelected: string;
}

export interface PricingTableRow {
  [key: string]: any;
}

export interface PricingTableColumn {
  header: string;
  key: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  isPrice?: boolean;
  isAction?: boolean;
}

export interface PricingTableGroup {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  columns: PricingTableColumn[];
  rows: PricingTableRow[];
  applicableCondition?: { [controlId: string]: string };
}

export interface PricingCard {
  id: string;
  name: string;
  tagline?: string;
  badge?: string;
  recommended?: boolean;
  specs: { label: string; value: string }[];
  priceMonthly?: string;
  priceHourly?: string;
  priceYearly?: string;
  actionText?: string;
}

export interface TechnicalSpecItem {
  category: string;
  details: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface BenefitPillar {
  number?: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  criteria: string;
  option1: string;
  option2: string;
  viettelService: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  context?: string; // Bối cảnh / Bài toán
  solution?: string; // Giải pháp
  outcome?: string; // Kết quả / Thách thức
  tags?: string[];
}

export interface FaqItem {
  question: string;
  answer: string | string[];
}

export interface RelatedProductItem {
  title: string;
  description: string;
  path: string;
  sku?: string;
}

export interface ServiceDetailConfig {
  id: string; // e.g. 'vks', 'vcr', 'vdbs', 'domain', 'web-hosting', 'workspace'
  sku: string; // e.g. 'SVC-VKS-01', 'SVC-019', 'SVC-WS-01'
  pillar: string; // e.g. 'paas-containers', 'database', 'domain-hosting', 'digital-workplace'
  pageTitle: string;
  navItems?: { id: string; label: string; href: string; sectionId: string; order: number; enabled: boolean }[];
  
  // SECTION 0: HERO
  hero: {
    breadcrumb: { name: string; path?: string }[];
    eyebrow: string;
    headline: string;
    subheading: string;
    primaryCta: { text: string; action?: 'quote' | 'trial' | 'link'; link?: string };
    secondaryCta: { text: string; action?: 'pricing' | 'quote' | 'link' | 'features'; link?: string };
    statRow?: { number: string; label: string; desc: string }[];
    hasDomainSearch?: boolean;
  };

  // SECTION 1: OVERVIEW
  overview: {
    eyebrow?: string;
    headline: string;
    leftDescription: string[];
    diagramNote?: string;
    architectureAscii?: string;
    highlights: ServiceHighlight[];
    videoUrl?: string;
  };

  // SECTION 2: PRICING (Optional for services without direct pricing tables)
  pricing?: {
    eyebrow?: string;
    headline: string;
    controls?: PricingControl[];
    note?: string;
    tables?: PricingTableGroup[];
    cards?: PricingCard[];
    comparisonTable?: {
      title: string;
      columns: [string, string, string, string];
      rows: ComparisonRow[];
    };
    customCta?: {
      text: string;
      buttonText: string;
      notesPlaceholder?: string;
    };
  };

  // SECTION 3: FEATURES & SPECS
  features: {
    eyebrow?: string;
    headline: string;
    cards: FeatureCard[];
    specTableTitle?: string;
    specs: TechnicalSpecItem[];
    processSteps?: { step: number; title: string; desc: string }[];
  };

  // SECTION 4: BENEFITS
  benefits: {
    eyebrow?: string;
    headline: string;
    pillars: BenefitPillar[];
  };

  // SECTION 5: USE CASES
  useCases: {
    eyebrow?: string;
    headline: string;
    items: UseCaseItem[];
  };

  // SECTION 6: FAQ
  faq: {
    eyebrow?: string;
    headline: string;
    items: FaqItem[];
  };

  // SECTION 7: FOOTER CTA
  footerCta: {
    headline: string;
    subtext: string;
    hotline: string;
    email: string;
    website: string;
    buttonText: string;
  };

  // SECTION 8: DOCS & SUPPORT
  docsSupport: {
    eyebrow?: string;
    headline: string;
    documentation: {
      title: string;
      desc: string;
      linkText: string;
    };
    supportCenter: {
      title: string;
      desc: string;
      linkText: string;
    };
  };

  // SECTION 9: RELATED PRODUCTS
  relatedProducts: {
    eyebrow?: string;
    headline: string;
    items: RelatedProductItem[];
  };
}
