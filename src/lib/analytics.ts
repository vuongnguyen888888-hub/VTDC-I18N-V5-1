/**
 * Viettel IDC Hub — Authoritative Analytics Event Layer (GA4 + GTM + Clarity Baseline 2026)
 * Single source of truth (SSOT) for dataLayer event taxonomy and multi-market measurement.
 * 
 * CONSTRAINTS:
 * - Zero-PII: Never push email, phone, personal names, account IDs, tokens, or raw IP to dataLayer/Clarity
 * - Authoritative Context: Consumes resolveMarketContext, masterRouteManifest, domainRegistry, marketRegistry, localeRegistry
 * - Canonical Event: market_context_ready is the authoritative initialization signal
 * - Virtual Page View: 1 navigation = 1 intended page_view for Next.js 15 App Router
 */

import { resolveMarketContext, type MarketContext } from './context/resolveMarketContext';
import { parseLocalePrefixFromPath } from '../config/localeRegistry';
import { CANONICAL_SERVICES, SOLUTION_ROUTES, BESPOKE_ROUTES } from '../data/masterRouteManifest';

// ============================================================
// 1. EVENT TAXONOMY — Strictly Controlled
// ============================================================
export const ALLOWED_EVENTS = [
  // === CONTEXT EVENTS ===
  'market_context_ready',    // Canonical market context bootstrap event (Spec v1.0)
  'context_updated',         // Market context changed during session

  // === NAVIGATION & VIEW EVENTS ===
  'page_view',               // Virtual pageview for Next.js App Router
  'view_service',            // Service detail page view
  'view_pricing',            // Pricing / calculator view
  'market_selector_open',    // Market selector dropdown opened

  // === ACTION EVENTS ===
  'select_cta',              // CTA click (categorized by cta_type)
  'select_pricing_plan',     // Pricing plan selection
  'market_change',           // User-confirmed market change
  'navigation_click',        // Mega menu / breadcrumb / footer link click

  // === CONVERSION EVENTS ===
  'begin_checkout',          // F1 handover to vConsole
  'generate_lead',           // Lead generation form submission
  'sign_up',                 // Account / trial registration completed
  'login',                   // Login action
  'purchase',                // Online purchase (future)

  // === FORM EVENTS ===
  'form_start',              // First field interaction
  'form_submit',             // Form submit (including quote modals)

  // === ENGAGEMENT EVENTS ===
  'search',                  // On-site search
  'scroll_depth',            // Scroll milestone (25%, 50%, 75%, 100%)
  'file_download',           // Document / whitepaper download

  // === CONSENT ===
  'consent_update',          // Cookie consent mode update
] as const;

export type VidcEvent = typeof ALLOWED_EVENTS[number];

// ============================================================
// 2. PAGE_TYPE TAXONOMY — Strictly Controlled Enum
// ============================================================
export type PageType = 
  | 'home'
  | 'service_hub'
  | 'service_detail'
  | 'solution_hub'
  | 'solution_detail'
  | 'pricing'
  | 'resource_hub'
  | 'resource_detail'
  | 'about'
  | 'partners'
  | 'promotions'
  | 'supportive_bespoke'
  | 'admin'
  | 'not_found';

// ============================================================
// 3. AUTHORITATIVE CONTEXT CONTRACT
// ============================================================
export interface AuthoritativeAnalyticsContext {
  site_group: 'VN' | 'INT';
  market_code: string;
  locale: string;
  currency: string;
  entity_id: string;
  route_id: string;
  page_type: PageType;
  environment: 'production' | 'staging' | 'development' | 'legacy_external' | 'isolated';
  canonical_host: string;
}

export interface RouteResolutionResult {
  page_type: PageType;
  entity_id: string;
  route_id: string;
  pure_path: string;
}

export interface PageContext {
  page_type: PageType;
  page_path: string;
  site_group: 'VN' | 'INT';
  market_source: 'user' | 'url' | 'account' | 'cookie' | 'geoip' | 'default';
  service_code?: string;
  service_name?: string;
  service_group?: string;
  site_locale?: string;
  lead_type?: string;
  site_layer?: 'hub' | 'spoke';
}

export const APPROVED_PRODUCTION_DOMAINS = ['viettelidc.com.vn', 'viettelidc.com'] as const;

/**
 * Central analytics enablement gatekeeper (Spec v1.0 / Batch 7.2)
 * Marketing analytics delivery is enabled ONLY when:
 * 1. environment === "production"
 * 2. host is an approved production domain (viettelidc.com.vn, viettelidc.com)
 * 3. route is not private/admin (!pathname.startsWith('/admin'))
 */
export function isAnalyticsEnabled(
  context:
    | MarketContext
    | AuthoritativeAnalyticsContext
    | { environment?: string; canonicalHost?: string; canonical_host?: string },
  pathname?: string
): boolean {
  const env = 'environment' in context ? context.environment : '';
  if (env !== 'production') {
    return false;
  }

  const host =
    ('canonicalHost' in context
      ? context.canonicalHost
      : 'canonical_host' in context
        ? context.canonical_host
        : '') || '';
  const cleanHost = host.replace(/:\d+$/, '').toLowerCase();
  if (!APPROVED_PRODUCTION_DOMAINS.includes(cleanHost as any)) {
    return false;
  }

  const path =
    pathname ||
    ('purePath' in context ? (context as MarketContext).purePath : '') ||
    '/';
  if (path.startsWith('/admin')) {
    return false;
  }

  return true;
}

// ============================================================
// 4. ROUTE ATTRIBUTION RESOLVER (Manifest SSOT)
// ============================================================
/**
 * Resolves stable page_type, entity_id, and route_id from any raw pathname.
 * Handles trailing slashes, locale prefixes, canonical vs legacy paths.
 */
export function resolveAnalyticsRouteContext(rawPath: string): RouteResolutionResult {
  const { pureSlug } = parseLocalePrefixFromPath(rawPath || '/');
  const clean = (pureSlug.split('?')[0].split('#')[0] || '/').toLowerCase();
  
  // Normalize locale shortcuts /en or /vi at root
  let normalized = clean.endsWith('/') && clean.length > 1 ? clean.slice(0, -1) : clean;
  if (normalized === '/en' || normalized === '/vi') {
    normalized = '/';
  }
  const withTrailing = normalized === '/' ? '/' : `${normalized}/`;

  // 1. Home
  if (normalized === '' || normalized === '/') {
    return { page_type: 'home', entity_id: 'home', route_id: 'home', pure_path: '/' };
  }

  // 2. Admin
  if (normalized.startsWith('/admin')) {
    return { page_type: 'admin', entity_id: 'admin_feedback', route_id: 'admin_feedback', pure_path: normalized };
  }

  // 3. Pricing
  if (normalized === '/pricing' || normalized === '/bang-gia' || withTrailing === '/pricing/') {
    return { page_type: 'pricing', entity_id: 'pricing', route_id: 'pricing', pure_path: '/pricing/' };
  }

  // 4. Resources
  if (normalized === '/resources' || normalized === '/tai-nguyen' || withTrailing === '/resources/') {
    return { page_type: 'resource_hub', entity_id: 'resources', route_id: 'resources', pure_path: '/resources/' };
  }
  if (normalized.startsWith('/resources/')) {
    const slug = normalized.replace('/resources/', '');
    return { page_type: 'resource_detail', entity_id: slug, route_id: slug, pure_path: normalized };
  }

  // 5. About
  if (normalized === '/about' || normalized === '/gioi-thieu' || withTrailing === '/about/') {
    return { page_type: 'about', entity_id: 'about', route_id: 'about', pure_path: '/about/' };
  }

  // 6. Partners
  if (normalized === '/partners' || normalized === '/doi-tac' || withTrailing === '/partners/') {
    return { page_type: 'partners', entity_id: 'partners', route_id: 'partners', pure_path: '/partners/' };
  }

  // 7. Promotions
  if (normalized === '/promotions' || normalized === '/khuyen-mai' || withTrailing === '/promotions/') {
    return { page_type: 'promotions', entity_id: 'promotions', route_id: 'promotions', pure_path: '/promotions/' };
  }

  // 8. Services Hub
  if (normalized === '/services' || normalized === '/dich-vu' || withTrailing === '/services/') {
    return { page_type: 'service_hub', entity_id: 'services', route_id: 'service_hub', pure_path: '/services/' };
  }

  // 9. Services Detail (59 Canonical Core Services from Manifest)
  if (normalized.startsWith('/services/') || normalized.startsWith('/dich-vu/')) {
    const matchedService = CANONICAL_SERVICES.find((s) => {
      const canonNorm = s.canonicalPath.endsWith('/') ? s.canonicalPath.slice(0, -1) : s.canonicalPath;
      const viNorm = s.viPath.endsWith('/') ? s.viPath.slice(0, -1) : s.viPath;
      const enNorm = s.enPath.endsWith('/') ? s.enPath.slice(0, -1) : s.enPath;
      return normalized === canonNorm || normalized === viNorm || normalized === enNorm || withTrailing === s.canonicalPath;
    });

    if (matchedService) {
      return {
        page_type: 'service_detail',
        entity_id: matchedService.routeId,
        route_id: matchedService.routeId,
        pure_path: matchedService.canonicalPath,
      };
    }

    const segments = normalized.split('/').filter(Boolean);
    const lastSlug = segments[segments.length - 1] || 'service';
    return {
      page_type: 'service_detail',
      entity_id: lastSlug,
      route_id: lastSlug,
      pure_path: normalized,
    };
  }

  // 10. Solutions Hub
  if (normalized === '/solutions' || withTrailing === '/solutions/') {
    return { page_type: 'solution_hub', entity_id: 'solutions', route_id: 'solution_hub', pure_path: '/solutions/' };
  }

  // 11. Solutions Detail (16 Industry Solutions from Manifest)
  if (normalized.startsWith('/solutions/')) {
    const matchedSolution = SOLUTION_ROUTES.find((s) => {
      const canonNorm = s.canonicalPath.endsWith('/') ? s.canonicalPath.slice(0, -1) : s.canonicalPath;
      return normalized === canonNorm || withTrailing === s.canonicalPath || normalized.endsWith(`/${s.id}`);
    });

    if (matchedSolution) {
      return {
        page_type: 'solution_detail',
        entity_id: matchedSolution.id,
        route_id: `solution-${matchedSolution.id}`,
        pure_path: matchedSolution.canonicalPath,
      };
    }

    const slug = normalized.replace('/solutions/', '');
    return {
      page_type: 'solution_detail',
      entity_id: slug,
      route_id: `solution-${slug}`,
      pure_path: normalized,
    };
  }

  // 12. Supportive Bespoke Routes
  const bespokeList = ['/contact', '/terms', '/privacy', '/security', '/compliance', '/dieu-khoan'];
  if (bespokeList.includes(normalized)) {
    const key = normalized.replace('/', '');
    return { page_type: 'supportive_bespoke', entity_id: key, route_id: key, pure_path: normalized };
  }

  // 13. Fallback / Not Found
  return { page_type: 'not_found', entity_id: 'not_found', route_id: 'not_found', pure_path: normalized };
}

// ============================================================
// 5. BUILD & SYNC ANALYTICS CONTEXT
// ============================================================
/**
 * Assembles authoritative analytics payload combining server MarketContext and Route Manifest.
 */
export function buildAnalyticsContext(marketContext: MarketContext, pathname?: string): AuthoritativeAnalyticsContext {
  const routeCtx = resolveAnalyticsRouteContext(pathname || marketContext.purePath || '/');

  return {
    site_group: marketContext.siteGroup,
    market_code: marketContext.marketCode,
    locale: marketContext.locale,
    currency: marketContext.currency,
    entity_id: routeCtx.entity_id,
    route_id: routeCtx.route_id,
    page_type: routeCtx.page_type,
    environment: marketContext.environment,
    canonical_host: marketContext.canonicalHost,
  };
}

/**
 * Synchronizes client-side analytics context upon route change.
 */
export function syncAnalyticsContextFromRoute(pathname: string, host?: string): AuthoritativeAnalyticsContext {
  const activeHost = host || (typeof window !== 'undefined' ? window.location.host : 'viettelidc.com.vn');
  const marketCtx = resolveMarketContext(activeHost, pathname);
  const authCtx = buildAnalyticsContext(marketCtx, pathname);

  if (typeof window !== 'undefined') {
    window.__VIDC_CTX__ = {
      site_group: authCtx.site_group,
      market_code: authCtx.market_code,
      locale: authCtx.locale,
      currency: authCtx.currency,
      environment: authCtx.environment,
      canonical_host: authCtx.canonical_host,
      entity_id: authCtx.entity_id,
      route_id: authCtx.route_id,
      page_type: authCtx.page_type,
      vidc_market: authCtx.market_code,
      vidc_locale: marketCtx.languageCode,
      vidc_currency: authCtx.currency,
      vidc_pricing_region: authCtx.site_group,
      vidc_content_scope: authCtx.market_code,
      vidc_pure_slug: pathname,
      vidc_domain: authCtx.canonical_host,
    };

    // Forward safe non-PII tags to Microsoft Clarity if active
    if (typeof (window as any).clarity === 'function') {
      (window as any).clarity('set', 'site_group', authCtx.site_group);
      (window as any).clarity('set', 'market_code', authCtx.market_code);
      (window as any).clarity('set', 'locale', authCtx.locale);
      (window as any).clarity('set', 'environment', authCtx.environment);
      (window as any).clarity('set', 'page_type', authCtx.page_type);
    }
  }

  return authCtx;
}

// ============================================================
// 6. ZERO-PII CORE PUSH
// ============================================================
let _currentPageContext: PageContext = {
  page_type: 'home',
  page_path: '/',
  site_group: 'VN',
  market_source: 'default',
  site_layer: 'hub',
};

export function setPageContext(ctx: PageContext): void {
  _currentPageContext = { ...ctx };
}

export function getPageContext(): PageContext {
  return { ..._currentPageContext };
}

export const PII_FIELDS = [
  'email',
  'phone',
  'name',
  'full_name',
  'user_name',
  'user_email',
  'user_phone',
  'sdt',
  'ho_ten',
  'so_dien_thoai',
  'ip',
  'ip_address',
  'token',
  'password',
  'access_token',
  'id_token',
  'firebase_uid',
  'uid',
  'auth_token',
  'account_id',
  'ticket_content',
  'feedback_text',
];

/**
 * Pushes validated event into dataLayer with enriched authoritative context.
 */
export function pushEvent(eventName: VidcEvent, params: Record<string, any> = {}): void {
  if (typeof window === 'undefined') return;

  if (!ALLOWED_EVENTS.includes(eventName)) {
    console.warn(`[VIDC Analytics] Rejected unapproved event: ${eventName}`);
    return;
  }

  const currentPath = _currentPageContext.page_path || window.location.pathname || '/';
  const vidcCtx = window.__VIDC_CTX__;
  const canonicalHost = vidcCtx?.canonical_host || window.location.hostname || '';
  const environment = vidcCtx?.environment || 'isolated';

  // Strict enablement check: staging, isolated hosts, and admin paths are disabled
  if (!isAnalyticsEnabled({ environment, canonical_host: canonicalHost }, currentPath)) {
    return;
  }

  // Zero-PII sanitization (exact & normalized case-insensitive match)
  const sanitized = { ...params };
  const piiLowerSet = new Set(PII_FIELDS.map((f) => f.toLowerCase()));
  for (const key of Object.keys(sanitized)) {
    if (piiLowerSet.has(key.toLowerCase())) {
      delete sanitized[key];
    }
  }

  const routeCtx = resolveAnalyticsRouteContext(currentPath);

  const siteGroup: 'VN' | 'INT' = vidcCtx?.site_group || (_currentPageContext.site_group === 'INT' ? 'INT' : 'VN');
  const marketCode: string = vidcCtx?.market_code || vidcCtx?.vidc_market || 'vn';
  const locale: string = vidcCtx?.locale || 'vi-VN';
  const currency: string = vidcCtx?.currency || vidcCtx?.vidc_currency || 'VND';
  const entityId: string = routeCtx.entity_id;
  const routeId: string = routeCtx.route_id;
  const pageType: PageType = routeCtx.page_type;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,

    // --- Authoritative Context (Spec Locked Contract) ---
    site_group: siteGroup,
    market_code: marketCode,
    locale: locale,
    currency: currency,
    entity_id: entityId,
    route_id: routeId,
    page_type: pageType,
    environment: environment,
    canonical_host: canonicalHost,

    // --- Page Context ---
    page_path: currentPath,
    market_source: _currentPageContext.market_source,
    site_layer: _currentPageContext.site_layer ?? 'hub',

    // --- Service Context (strictly isolated to service_detail pages) ---
    ...(routeCtx.page_type === 'service_detail'
      ? {
          service_code: routeCtx.entity_id,
          service_name: _currentPageContext.service_name || routeCtx.entity_id,
          service_group: _currentPageContext.service_group,
        }
      : {}),

    // --- Sanitized Custom Parameters ---
    ...sanitized,

    // --- Deterministic Timestamp ---
    event_timestamp: new Date().toISOString(),
  });

  // Microsoft Clarity named event bridge
  if (typeof (window as any).clarity === 'function') {
    if (eventName === 'market_context_ready') {
      (window as any).clarity('event', 'market_context_ready');
    }
  }
}

// ============================================================
// 7. CONVENIENCE TRACKING FUNCTIONS
// ============================================================

/** Virtual pageview for SPA / Next.js App Router */
export function trackPageView(pageContext?: Partial<PageContext>): void {
  const currentPath = pageContext?.page_path || (typeof window !== 'undefined' ? window.location.pathname : '/');
  const routeCtx = resolveAnalyticsRouteContext(currentPath);

  const fullCtx: PageContext = {
    page_type: pageContext?.page_type || routeCtx.page_type,
    page_path: currentPath,
    site_group: pageContext?.site_group || (typeof window !== 'undefined' && window.__VIDC_CTX__?.site_group === 'INT' ? 'INT' : 'VN'),
    market_source: pageContext?.market_source || 'url',
    site_layer: 'hub',
    service_code: pageContext?.service_code || (routeCtx.page_type === 'service_detail' ? routeCtx.entity_id : undefined),
    service_name: pageContext?.service_name,
    service_group: pageContext?.service_group,
  };

  setPageContext(fullCtx);

  pushEvent('page_view', {
    page_title: typeof document !== 'undefined' ? document.title : '',
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    page_path: currentPath,
    entity_id: routeCtx.entity_id,
    route_id: routeCtx.route_id,
  });
}

/** Service detail page view — view_service */
export function trackViewService(serviceCode: string, serviceName: string, serviceGroup: string): void {
  pushEvent('view_service', {
    service_code: serviceCode,
    service_name: serviceName,
    service_group: serviceGroup,
    entity_id: serviceCode,
  });
}

/** Pricing page/calculator view — view_pricing */
export function trackViewPricing(serviceCode?: string): void {
  pushEvent('view_pricing', {
    ...(serviceCode ? { service_code: serviceCode, entity_id: serviceCode } : {}),
  });
}

/** CTA click — select_cta */
export function trackSelectCta(
  ctaType: 'trial' | 'contact_sales' | 'pricing' | 'docs' | 'register' | 'other',
  serviceCode?: string,
  ctaLocation?: string
): void {
  pushEvent('select_cta', {
    cta_type: ctaType,
    ...(serviceCode ? { service_code: serviceCode, entity_id: serviceCode } : {}),
    ...(ctaLocation ? { cta_location: ctaLocation } : {}),
  });
}

/** Pricing plan selected — select_pricing_plan */
export function trackSelectPricingPlan(serviceCode: string, planName: string, planPrice?: string): void {
  pushEvent('select_pricing_plan', {
    service_code: serviceCode,
    entity_id: serviceCode,
    plan_name: planName,
    ...(planPrice ? { plan_price: planPrice } : {}),
  });
}

/** Market selector opened — market_selector_open */
export function trackMarketSelectorOpen(): void {
  pushEvent('market_selector_open', {});
}

/** Market changed — market_change */
export function trackMarketChange(fromMarket: string, toMarket: string): void {
  pushEvent('market_change', {
    market_from: fromMarket.toLowerCase(),
    market_to: toMarket.toLowerCase(),
    market_source: 'user',
  });
}

/** Generate lead — generate_lead */
export function trackGenerateLead(
  leadType: 'smb' | 'enterprise' | 'technical' | 'partner',
  serviceCode?: string,
  formName?: string
): void {
  pushEvent('generate_lead', {
    lead_type: leadType,
    ...(serviceCode ? { service_code: serviceCode, entity_id: serviceCode } : {}),
    ...(formName ? { form_name: formName } : {}),
  });
}

/** Sign up / Trial registration — sign_up */
export function trackSignUp(method?: string, serviceCode?: string): void {
  pushEvent('sign_up', {
    ...(method ? { method } : {}),
    ...(serviceCode ? { service_code: serviceCode, entity_id: serviceCode } : {}),
  });
}

/** Login — login */
export function trackLogin(method?: string): void {
  pushEvent('login', {
    ...(method ? { method } : {}),
  });
}

/** Checkout handover — begin_checkout */
export function trackBeginCheckout(skuId: string, planId?: string): void {
  pushEvent('begin_checkout', {
    sku_id: skuId,
    ...(planId ? { plan_id: planId } : {}),
  });
}

/** Form started — form_start */
export function trackFormStart(formName: string, formLocation: string): void {
  pushEvent('form_start', {
    form_name: formName,
    form_location: formLocation,
  });
}

/** Form submitted — form_submit */
export function trackFormSubmit(formName: string, formLocation: string): void {
  pushEvent('form_submit', {
    form_name: formName,
    form_location: formLocation,
  });
}

/** Navigation click — navigation_click */
export function trackNavigationClick(navElement: string, navLocation: string, destination: string): void {
  pushEvent('navigation_click', {
    nav_element: navElement,
    nav_location: navLocation,
    nav_destination: destination,
  });
}

/** Search — search */
export function trackSearch(searchTerm: string, resultCount?: number): void {
  pushEvent('search', {
    search_term: searchTerm,
    ...(resultCount !== undefined ? { search_result_count: resultCount } : {}),
  });
}

/** Scroll depth milestone — scroll_depth */
export function trackScrollDepth(percent: 25 | 50 | 75 | 100): void {
  pushEvent('scroll_depth', {
    scroll_percent: percent,
  });
}

/** File download — file_download */
export function trackFileDownload(fileName: string, fileType?: string): void {
  pushEvent('file_download', {
    file_name: fileName,
    ...(fileType ? { file_type: fileType } : {}),
  });
}
