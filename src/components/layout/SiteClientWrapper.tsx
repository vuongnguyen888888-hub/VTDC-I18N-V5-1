'use client';

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { HeaderShell } from './HeaderShell';
import { Footer } from './Footer';
import { SEAMarket, SEA_MARKETS, MARKET_LANGUAGES } from './UtilityBar';
import { parsePathToMarketAndLanguage, buildLocalizedPath } from '../../utils/routingMatrix';
import { parseLocalePrefixFromPath } from '../../config/localeRegistry';
import { LanguageProvider } from '../../context/LanguageContext';
import type { QuoteModalDetails } from '../common/EnterpriseQuoteModal';

const EnterpriseQuoteModal = lazy(() =>
  import('../common/EnterpriseQuoteModal').then((m) => ({ default: m.EnterpriseQuoteModal }))
);
const RegisterModal = lazy(() =>
  import('../auth/RegisterModal').then((m) => ({ default: m.RegisterModal }))
);
const DualModeChatWidget = lazy(() =>
  import('../chat/DualModeChatWidget').then((m) => ({ default: m.DualModeChatWidget }))
);
const GlobalFeedback = lazy(() =>
  import('../feedback/GlobalFeedback').then((m) => ({ default: m.GlobalFeedback }))
);

import type { MarketContext } from '../../lib/context/resolveMarketContext';

interface SiteClientWrapperProps {
  children: React.ReactNode;
  initialMarketContext?: MarketContext;
}

export function SiteClientWrapper({ children, initialMarketContext }: SiteClientWrapperProps) {
  const router = useRouter();
  const pathname = usePathname() || '/';

  const initialParsed = parsePathToMarketAndLanguage(pathname);
  const serverMarketCode = initialMarketContext?.marketCode === 'int'
    ? 'global'
    : initialMarketContext?.marketCode === 'kh'
    ? 'vcloudia'
    : (initialMarketContext?.marketCode || 'vn');
  const preferredMarketCode = initialParsed.routePrefix ? initialParsed.marketCode : serverMarketCode;
  const initialMarket = SEA_MARKETS.find((m) => m.code === preferredMarketCode) || SEA_MARKETS[0];

  const [currentMarket, setCurrentMarket] = useState<SEAMarket>(initialMarket);
  const [currentLanguage, setCurrentLanguage] = useState<string>(initialParsed.routePrefix ? initialParsed.languageCode : (initialMarketContext?.languageCode === 'vi' ? 'vn' : initialMarketContext?.languageCode || 'vn'));
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteModalDetails, setQuoteModalDetails] = useState<QuoteModalDetails | null>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // App Router client navigation does not re-render RootLayout. Keep html[lang]
  // and the locale marker in sync with the actual route and configured domain.
  useEffect(() => {
    const explicit = parseLocalePrefixFromPath(pathname).locale;
    const locale = explicit?.locale || initialMarketContext?.locale || 'vi-VN';
    document.documentElement.lang = explicit?.htmlLang || initialMarketContext?.htmlLang || 'vi-VN';
    document.documentElement.dir = 'ltr';
    document.documentElement.dataset.locale = locale;
  }, [pathname, initialMarketContext?.locale, initialMarketContext?.htmlLang]);

  // Sync route, market and language on pathname changes
  useEffect(() => {
    const parsed = parsePathToMarketAndLanguage(pathname);
    const marketCode = parsed.routePrefix ? parsed.marketCode : serverMarketCode;
    const matchedMarket = SEA_MARKETS.find((m) => m.code === marketCode) || SEA_MARKETS[0];
    setCurrentMarket(matchedMarket);
    setCurrentLanguage(parsed.routePrefix ? parsed.languageCode : (serverMarketCode === 'global' ? 'en' : 'vn'));
  }, [pathname, serverMarketCode]);

  const navigateMarket = (path: string, market: SEAMarket) => {
    const officialHosts = ['viettelidc.com', 'viettelidc.com.vn', 'vcloudia.com'];
    if (officialHosts.includes(window.location.hostname) && market.domain !== window.location.hostname) {
      window.location.assign(`https://${market.domain}${path}`);
    } else if (path !== pathname) {
      router.push(path);
    }
  };

  const handleMarketChange = (newMarket: SEAMarket) => {
    const options = MARKET_LANGUAGES[newMarket.code] || MARKET_LANGUAGES.vn;
    const newLang = options[0]?.code || (newMarket.code === 'global' ? 'en' : 'vn');
    setCurrentMarket(newMarket);
    setCurrentLanguage(newLang);
    const newPath = buildLocalizedPath(pathname, newMarket.code, newLang);
    navigateMarket(newPath, newMarket);
  };

  const handleLanguageChange = (newLang: string) => {
    let targetMarket = currentMarket;
    if ((newLang === 'vn' || newLang === 'vi') && currentMarket.code !== 'vn') {
      const vnMarket = SEA_MARKETS.find((m) => m.code === 'vn') || SEA_MARKETS[0];
      targetMarket = vnMarket;
      setCurrentMarket(vnMarket);
    }
    setCurrentLanguage(newLang);
    const newPath = buildLocalizedPath(pathname, targetMarket.code, newLang);
    navigateMarket(newPath, targetMarket);
  };

  // Listen for custom modal open events
  useEffect(() => {
    const handleOpenQuoteModal = (e: Event) => {
      const customEvent = e as CustomEvent<QuoteModalDetails>;
      if (customEvent.detail) {
        setQuoteModalDetails(customEvent.detail);
      }
      setIsQuoteModalOpen(true);
    };

    const handleOpenRegisterModal = () => {
      setIsRegisterModalOpen(true);
    };

    window.addEventListener('open-quote-modal', handleOpenQuoteModal);
    window.addEventListener('open-register-modal', handleOpenRegisterModal);
    return () => {
      window.removeEventListener('open-quote-modal', handleOpenQuoteModal);
      window.removeEventListener('open-register-modal', handleOpenRegisterModal);
    };
  }, []);

  // Only intercept the quote-modal action; leave ordinary anchors to the browser/Next.js.
  // This preserves middle-click, Cmd/Ctrl-click, target=_blank, downloads and browser history.
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a[href]');
      if (!anchor || anchor.hasAttribute('download') || (anchor.getAttribute('target') && anchor.getAttribute('target') !== '_self')) return;
      const href = anchor.getAttribute('href') || '';
      const url = new URL(href, window.location.href);
      if (url.origin === window.location.origin && url.pathname.includes('/contact/request-quote')) {
        event.preventDefault();
        setIsQuoteModalOpen(true);
      }
    };
    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <LanguageProvider
      currentLanguage={currentLanguage}
      currentMarket={currentMarket}
      onLanguageChange={handleLanguageChange}
      onMarketChange={handleMarketChange}
    >
      <div className="min-h-screen flex flex-col bg-[var(--vidc-surface-canvas)] text-[var(--vidc-text-primary)] selection:bg-[var(--vidc-action-primary-default)] selection:text-white font-sans antialiased">
        <HeaderShell
          currentMarketCode={currentMarket.code}
          currentLanguageCode={currentLanguage}
          onMarketChange={handleMarketChange}
          onLanguageChange={handleLanguageChange}
        />
        <main className="flex-1 w-full" id="main-content">
          {children}
        </main>
        <Footer currentMarket={currentMarket} />

        {isQuoteModalOpen && (
          <Suspense fallback={null}>
            <EnterpriseQuoteModal
              isOpen={isQuoteModalOpen}
              onClose={() => {
                setIsQuoteModalOpen(false);
                setQuoteModalDetails(null);
              }}
              initialDetails={quoteModalDetails}
              currentMarket={currentMarket}
            />
          </Suspense>
        )}

        {isRegisterModalOpen && (
          <Suspense fallback={null}>
            <RegisterModal
              isOpen={isRegisterModalOpen}
              onClose={() => setIsRegisterModalOpen(false)}
            />
          </Suspense>
        )}

        {isMounted && (
          <>
            <Suspense fallback={null}>
              <DualModeChatWidget />
            </Suspense>

            <Suspense fallback={null}>
              <GlobalFeedback />
            </Suspense>
          </>
        )}
      </div>
    </LanguageProvider>
  );
}
