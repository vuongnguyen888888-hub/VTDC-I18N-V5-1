'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView, syncAnalyticsContextFromRoute, isAnalyticsEnabled } from '../../lib/analytics';

/**
 * AnalyticsTracker — Virtual pageview & route attribution for Next.js 15 App Router.
 * 
 * Enforces:
 * - 1 client navigation = 1 intended page_view
 * - Deduplication against repeated renders and hash links
 * - Authoritative context sync on every route change
 * - Zero PII in event payloads
 * - Central enablement policy (production public domains only)
 */
export function AnalyticsTracker() {
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();
  const lastTrackedUrlRef = useRef<string | null>(null);

  useEffect(() => {
    const searchString = searchParams?.toString();
    const fullUrl = searchString ? `${pathname}?${searchString}` : pathname;

    // Deduplication guard: do not re-emit if URL has not changed
    if (lastTrackedUrlRef.current === fullUrl) {
      return;
    }
    lastTrackedUrlRef.current = fullUrl;

    // Synchronize client-side context from authoritative route manifest
    const host = typeof window !== 'undefined' ? window.location.host : '';
    const updatedCtx = syncAnalyticsContextFromRoute(pathname, host);

    // Central enablement policy: skip if staging, isolated, or admin route
    if (!isAnalyticsEnabled(updatedCtx, pathname)) {
      return;
    }

    // Emit single virtual page_view
    trackPageView({
      page_type: updatedCtx.page_type,
      page_path: pathname,
      site_group: updatedCtx.site_group,
      market_source: 'url',
      service_code: updatedCtx.page_type === 'service_detail' ? updatedCtx.entity_id : undefined,
      service_name: typeof document !== 'undefined' ? document.title : undefined,
    });
  }, [pathname, searchParams]);

  return null;
}
