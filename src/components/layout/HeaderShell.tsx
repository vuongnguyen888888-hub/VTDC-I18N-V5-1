import React, { useState } from 'react';
import { UtilityBar, SEAMarket } from './UtilityBar';
import { MainNavigation } from './MainNavigation';
import { MobileNavigationDrawer } from './MobileNavigationDrawer';
import { getRoutePrefix } from '../../utils/routingMatrix';

interface HeaderShellProps {
  currentMarketCode: string;
  currentLanguageCode?: string;
  onMarketChange: (market: SEAMarket) => void;
  onLanguageChange?: (languageCode: string) => void;
}

export const HeaderShell: React.FC<HeaderShellProps> = ({
  currentMarketCode,
  currentLanguageCode,
  onMarketChange,
  onLanguageChange,
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activePrefix = getRoutePrefix(currentMarketCode, currentLanguageCode || 'vn');

  return (
    <>
    <header 
      id="main-header" 
      className={`sticky top-0 z-[var(--vidc-z-header)] w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-xl backdrop-saturate-150 shadow-md border-b border-slate-200/80' 
          : 'bg-white shadow-sm'
      }`}
    >
      {/* Tier 1: Utility Bar (40px) */}
      <UtilityBar
        currentMarketCode={currentMarketCode}
        currentLanguageCode={currentLanguageCode}
        onMarketChange={onMarketChange}
        onLanguageChange={onLanguageChange}
      />

      {/* Tier 2 & Tier 3: Main Navigation (80px) & Mega Dropdown Overlay */}
      <MainNavigation
        currentMarketPath={activePrefix}
        isMobileDrawerOpen={mobileDrawerOpen}
        onToggleMobileDrawer={() => setMobileDrawerOpen(!mobileDrawerOpen)}
      />
    </header>

    {/* Mobile Drawer */}
    {mobileDrawerOpen && (
      <MobileNavigationDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        currentMarketCode={currentMarketCode}
        currentLanguageCode={currentLanguageCode}
        onMarketChange={onMarketChange}
        onLanguageChange={onLanguageChange}
      />
    )}
    </>
  );
};

