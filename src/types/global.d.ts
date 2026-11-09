declare global {
  interface Window {
    __VIDC_CTX__?: {
      site_group: 'VN' | 'INT';
      market_code: string;
      locale: string;
      currency: string;
      environment: string;
      canonical_host: string;
      entity_id: string;
      route_id: string;
      page_type: string;
      vidc_market: string;
      vidc_locale: string;
      vidc_currency: string;
      vidc_pricing_region: string;
      vidc_content_scope: string;
      vidc_pure_slug?: string;
      vidc_domain?: string;
    };
    vidc_currency?: string;
    dataLayer: Record<string, any>[];
    handleF1Handover?: (skuId: string, planId: string) => void;
    __vidc_gtag?: (...args: any[]) => void;
    clarity?: (action: string, ...args: any[]) => void;
  }
}
export {};
