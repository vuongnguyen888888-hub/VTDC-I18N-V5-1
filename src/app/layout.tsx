import React, { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import { headers } from 'next/headers';
import Script from 'next/script';
import { SiteClientWrapper } from '@/components/layout/SiteClientWrapper';
import { resolveMarketContext } from '@/lib/context/resolveMarketContext';
import { buildAnalyticsContext, isAnalyticsEnabled } from '@/lib/analytics';
import { AnalyticsTracker } from '@/components/analytics/AnalyticsTracker';
import './globals.css';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Viettel IDC Website',
  description:
    'Viettel IDC Portal - Data Center & Cloud Services in Vietnam and Southeast Asia, featuring Cloud Server, Colocation, Object Storage, and Enterprise Solutions',
  openGraph: {
    title: 'Viettel IDC Website',
    description:
      'Viettel IDC Portal - Data Center & Cloud Services in Vietnam and Southeast Asia, featuring Cloud Server, Colocation, Object Storage, and Enterprise Solutions',
  },
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? '';
const GTM_ACTIVE =
  Boolean(GTM_ID) &&
  GTM_ID !== 'GTM-XXXXXXX' &&
  !GTM_ID.startsWith('VITE_') &&
  !GTM_ID.startsWith('NEXT_');

// Production GA4 Authority: Delivery is strictly managed by GTM.
// Direct gtag.js fallback is explicitly DISABLED in production (Batch 7.2).

const CLARITY_ID =
  (process.env.NEXT_PUBLIC_CLARITY_ID || process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID) ?? '';
const CLARITY_VALID =
  Boolean(CLARITY_ID) &&
  CLARITY_ID !== 'XXXXX' &&
  !CLARITY_ID.startsWith('NEXT_');

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let host = 'viettelidc.com.vn';
  let pathname = '/';
  try {
    const headersList = await headers();
    host = headersList.get('host') || 'viettelidc.com.vn';
    pathname = headersList.get('x-vidc-pathname') || '/';
  } catch {
    // Fallback for static prerender
  }

  const marketContext = resolveMarketContext(host, pathname);
  const analyticsContext = buildAnalyticsContext(marketContext, pathname);
  const analyticsEnabled = isAnalyticsEnabled(analyticsContext, pathname);

  // JSON safely embedded in a script: avoid raw path/host characters breaking JavaScript literals.
  const contextBootstrap = {
    ...analyticsContext,
    vidc_market: analyticsContext.market_code,
    vidc_locale: marketContext.languageCode,
    vidc_currency: analyticsContext.currency,
    vidc_pricing_region: analyticsContext.site_group,
    vidc_content_scope: analyticsContext.market_code,
    vidc_pure_slug: pathname,
    vidc_domain: analyticsContext.canonical_host,
  };
  const safeContextJson = JSON.stringify(contextBootstrap).replace(/</g, '\\u003c').replace(/>/g, '\\u003e');
  const safeGtmId = JSON.stringify(GTM_ID).replace(/</g, '\\u003c');
  const safeClarityId = JSON.stringify(CLARITY_ID).replace(/</g, '\\u003c');

  return (
    <html lang={marketContext.htmlLang} data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@300;400;500;700&family=Noto+Sans+Lao:wght@300;400;500;700&family=Noto+Sans+Myanmar:wght@300;400;500;700&family=Roboto+Mono:wght@400;500;700&family=Roboto:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <VIDCAnchor href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:p-3 focus:text-black">Skip to main content</VIDCAnchor>
        {/* 1. Global dataLayer & gtag abstraction shim (beforeInteractive) */}
        <Script id="vidc-gtag-shim" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.__vidc_gtag = gtag;
          `}
        </Script>

        {/* 2. Global context & authoritative market_context_ready bootstrap (beforeInteractive) */}
        <Script id="vidc-market-context-bootstrap" strategy="beforeInteractive">
          {`(function() {
            window.__VIDC_CTX__ = ${safeContextJson};
            window.vidc_currency = window.__VIDC_CTX__.currency;
            ${analyticsEnabled ? `window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'market_context_ready',
                site_group: window.__VIDC_CTX__.site_group,
                market_code: window.__VIDC_CTX__.market_code,
                locale: window.__VIDC_CTX__.locale,
                currency: window.__VIDC_CTX__.currency,
                entity_id: window.__VIDC_CTX__.entity_id,
                route_id: window.__VIDC_CTX__.route_id,
                page_type: window.__VIDC_CTX__.page_type,
                environment: window.__VIDC_CTX__.environment,
                canonical_host: window.__VIDC_CTX__.canonical_host,
                market_source: 'server_resolved',
                event_timestamp: new Date().toISOString()
              });` : ''}
            try {
              var p = new URLSearchParams(window.location.search);
              if (p.has('utm_source')) {
                sessionStorage.setItem('vidc_utm_context', JSON.stringify({
                  source: p.get('utm_source') || '', medium: p.get('utm_medium') || '',
                  campaign: p.get('utm_campaign') || '', term: p.get('utm_term') || '',
                  content: p.get('utm_content') || ''
                }));
              }
            } catch(e) {}
          })();`}
        </Script>

        {/* 3. Google Tag Manager — Single authoritative delivery pipeline in production (afterInteractive) */}
        {GTM_ACTIVE && analyticsEnabled && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer',${safeGtmId});
            `}
          </Script>
        )}

        {/* 4. Microsoft Clarity Integration (afterInteractive, production public only) */}
        {CLARITY_VALID && analyticsEnabled && (
          <Script id="microsoft-clarity-init" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", ${safeClarityId});
              if (typeof window.clarity === 'function') {
                window.clarity('event', 'market_context_ready');
                window.clarity('set', 'site_group', '${analyticsContext.site_group}');
                window.clarity('set', 'market_code', '${analyticsContext.market_code}');
                window.clarity('set', 'locale', '${analyticsContext.locale}');
                window.clarity('set', 'environment', '${analyticsContext.environment}');
                window.clarity('set', 'page_type', '${analyticsContext.page_type}');
              }
            `}
          </Script>
        )}

        {GTM_ACTIVE && analyticsEnabled && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
        <div id="root">
          <SiteClientWrapper initialMarketContext={marketContext}>{children}</SiteClientWrapper>
        </div>
      </body>
    </html>
  );
}
