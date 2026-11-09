import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { createPortal } from 'react-dom';

import { ServicesMegaMenu } from './megamenu/ServicesMegaMenu';
import { SolutionsMegaMenu } from './megamenu/SolutionsMegaMenu';
import { PricingMegaMenu } from './megamenu/PricingMegaMenu';
import { ResourcesMegaMenu } from './megamenu/ResourcesMegaMenu';
import { PartnersMegaMenu } from './megamenu/PartnersMegaMenu';
import { AboutMegaMenu } from './megamenu/AboutMegaMenu';
import { PromotionsMegaMenu } from './megamenu/PromotionsMegaMenu';

const GlobalSearchModal = lazy(() => import('./megamenu/GlobalSearchModal').then(m => ({ default: m.GlobalSearchModal })));

import { 
  Search, 
  Menu, 
  X, 
  Gift 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { VcloudiaLogo } from '../common/VcloudiaLogo';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface MainNavigationProps {
  currentMarketPath: string;
  isMobileDrawerOpen: boolean;
  onToggleMobileDrawer: () => void;
}

export const MainNavigation: React.FC<MainNavigationProps> = ({
  currentMarketPath,
  isMobileDrawerOpen,
  onToggleMobileDrawer,
}) => {
  const { t, currentMarket, getFullPath } = useLanguage();
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterItem = (menuKey: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMegaMenu(menuKey);
  };

  const handleMouseLeaveNav = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  const handleMouseEnterNavContent = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleCloseMegaMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMegaMenu(null);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Prevent body scrolling when Mega Menu or Search Modal is active
  useEffect(() => {
    if (activeMegaMenu || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeMegaMenu, isSearchOpen]);

  // Keyboard shortcuts (Ctrl+K or / to open search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === 'Escape') {
        handleCloseMegaMenu();
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside to close Mega Menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        handleCloseMegaMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMegaMenu = (menuKey: string) => {
    if (activeMegaMenu === menuKey) {
      handleCloseMegaMenu();
    } else {
      handleMouseEnterItem(menuKey);
    }
  };

  return (
    <nav 
      ref={navRef}
      data-component="main-navigation"
      className="vidc-main-nav relative w-full h-[72px] bg-transparent border-none z-[var(--vidc-z-sticky)] transition-shadow duration-200"
      onMouseLeave={handleMouseLeaveNav}
      onMouseEnter={handleMouseEnterNavContent}
    >
      <div className="vidc-container h-full mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        
        {/* Brand Logo & Navigation Menu Items */}
        <div className="flex items-center gap-3 xl:gap-5">
          {/* Brand Logo Area matching official Viettel IDC / vCloudia visual branding */}
          <VIDCAnchor 
            href={getFullPath('/')} 
            onMouseEnter={handleCloseMegaMenu}
            className="flex items-center outline-none focus:outline-none focus:ring-0 focus-visible:outline-none rounded-md py-1 shrink-0 select-none cursor-pointer group"
            aria-label={currentMarket.code === 'vcloudia' ? "vCloudia Homepage" : "Viettel IDC Homepage"}
          >
            {currentMarket.code === 'vcloudia' ? (
              <VcloudiaLogo className="h-8 xl:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" />
            ) : (
              <img alt="Viettel IDC Logo" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1782053913/logo-IDC_2_up2gqp.svg" className="h-8 xl:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" referrerPolicy="no-referrer" />
            )}
          </VIDCAnchor>

          {/* Desktop Primary Nav Menu Items matching screenshot order */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 ml-1 xl:ml-2 shrink-0">
            
            {/* Dịch vụ */}
            <VIDCAnchor
              href={getFullPath('/services')}
              onClick={(e) => {
                if (window.innerWidth < 1024) {
                  e.preventDefault();
                  toggleMegaMenu('services');
                }
              }}
              onMouseEnter={() => handleMouseEnterItem('services')}
              aria-expanded={activeMegaMenu === 'services'}
              aria-controls="mega-menu-services"
              className={`px-2.5 py-1.5 rounded-xl text-sm font-semibold transition-all focus:outline-none whitespace-nowrap cursor-pointer ${
                activeMegaMenu === 'services'
                  ? 'bg-[var(--vidc-color-brand-pink-subtle)] text-[var(--vidc-color-brand-red)] font-bold'
                  : 'text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-pink-subtle)]'
              }`}
            >
              {t.nav.services}
            </VIDCAnchor>

            {/* Giải pháp */}
            <VIDCAnchor
              href={getFullPath('/solutions')}
              onClick={(e) => {
                if (window.innerWidth < 1024) {
                  e.preventDefault();
                  toggleMegaMenu('solutions');
                }
              }}
              onMouseEnter={() => handleMouseEnterItem('solutions')}
              aria-expanded={activeMegaMenu === 'solutions'}
              aria-controls="mega-menu-solutions"
              className={`px-2.5 py-1.5 rounded-xl text-sm font-semibold transition-all focus:outline-none whitespace-nowrap cursor-pointer ${
                activeMegaMenu === 'solutions'
                  ? 'bg-[var(--vidc-color-brand-pink-subtle)] text-[var(--vidc-color-brand-red)] font-bold'
                  : 'text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-pink-subtle)]'
              }`}
            >
              {t.nav.solutions}
            </VIDCAnchor>

            {/* 3. Bảng giá */}
            <VIDCAnchor
              href={getFullPath('/pricing')}
              onClick={(e) => {
                if (window.innerWidth < 1024) {
                  e.preventDefault();
                  toggleMegaMenu('pricing');
                }
              }}
              onMouseEnter={() => handleMouseEnterItem('pricing')}
              aria-expanded={activeMegaMenu === 'pricing'}
              aria-controls="mega-menu-pricing"
              className={`px-2.5 py-1.5 rounded-xl text-sm font-semibold transition-all focus:outline-none whitespace-nowrap cursor-pointer ${
                activeMegaMenu === 'pricing'
                  ? 'bg-[var(--vidc-color-brand-pink-subtle)] text-[var(--vidc-color-brand-red)] font-bold'
                  : 'text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-pink-subtle)]'
              }`}
            >
              {t.nav.pricing}
            </VIDCAnchor>

            {/* 4. Tài nguyên */}
            <VIDCAnchor
              href={getFullPath('/resources')}
              onClick={(e) => {
                if (window.innerWidth < 1024) {
                  e.preventDefault();
                  toggleMegaMenu('resources');
                }
              }}
              onMouseEnter={() => handleMouseEnterItem('resources')}
              aria-expanded={activeMegaMenu === 'resources'}
              aria-controls="mega-menu-resources"
              className={`px-2.5 py-1.5 rounded-xl text-sm font-semibold transition-all focus:outline-none whitespace-nowrap cursor-pointer ${
                activeMegaMenu === 'resources'
                  ? 'bg-[var(--vidc-color-brand-pink-subtle)] text-[var(--vidc-color-brand-red)] font-bold'
                  : 'text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-pink-subtle)]'
              }`}
            >
              {t.nav.resources}
            </VIDCAnchor>

            {/* 5. Đối tác */}
            <VIDCAnchor
              href={getFullPath('/partners')}
              onClick={(e) => {
                if (window.innerWidth < 1024) {
                  e.preventDefault();
                  toggleMegaMenu('partners');
                }
              }}
              onMouseEnter={() => handleMouseEnterItem('partners')}
              aria-expanded={activeMegaMenu === 'partners'}
              aria-controls="mega-menu-partners"
              className={`px-2.5 py-1.5 rounded-xl text-sm font-semibold transition-all focus:outline-none whitespace-nowrap cursor-pointer ${
                activeMegaMenu === 'partners'
                  ? 'bg-[var(--vidc-color-brand-pink-subtle)] text-[var(--vidc-color-brand-red)] font-bold'
                  : 'text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-pink-subtle)]'
              }`}
            >
              {t.nav.partners}
            </VIDCAnchor>

            {/* 6. Về Viettel IDC */}
            <VIDCAnchor
              href={getFullPath('/about')}
              onClick={(e) => {
                if (window.innerWidth < 1024) {
                  e.preventDefault();
                  toggleMegaMenu('about');
                }
              }}
              onMouseEnter={() => handleMouseEnterItem('about')}
              aria-expanded={activeMegaMenu === 'about'}
              aria-controls="mega-menu-about"
              className={`px-2.5 py-1.5 rounded-xl text-sm font-semibold transition-all focus:outline-none whitespace-nowrap cursor-pointer ${
                activeMegaMenu === 'about'
                  ? 'bg-[var(--vidc-color-brand-pink-subtle)] text-[var(--vidc-color-brand-red)] font-bold'
                  : 'text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-pink-subtle)]'
              }`}
            >
              {t.nav.about}
            </VIDCAnchor>

            {/* 7. Khuyến mại (with Gift Icon) */}
            <VIDCNativeButton
              onClick={() => toggleMegaMenu('promotions')}
              onMouseEnter={() => handleMouseEnterItem('promotions')}
              aria-expanded={activeMegaMenu === 'promotions'}
              aria-controls="mega-menu-promotions"
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-sm font-semibold transition-all focus:outline-none whitespace-nowrap cursor-pointer ${
                activeMegaMenu === 'promotions'
                  ? 'bg-[var(--vidc-color-brand-pink-subtle)] text-[var(--vidc-color-brand-red)] font-bold'
                  : 'text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-pink-subtle)]'
              }`}
            >
              <span>{t.nav.promotions}</span>
              <Gift className="w-4 h-4 text-[var(--vidc-color-brand-red)] vidc-gift-shake-icon shrink-0" />
            </VIDCNativeButton>
          </div>
        </div>

        {/* Right Action Group matching screenshot */}
        <div className="flex items-center gap-3 xl:gap-4 shrink-0">
          {/* Global Search Icon Button */}
          <VIDCNativeButton
            onClick={() => setIsSearchOpen(true)}
            onMouseEnter={handleCloseMegaMenu}
            aria-label={t.nav.searchPlaceholder}
            className="p-2.5 rounded-xl text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-slate-100 active:bg-slate-200 active:text-[var(--vidc-color-brand-red)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] shrink-0"
            title={`${t.nav.searchPlaceholder} (Ctrl+K)`}
          >
            <Search className="w-5 h-5 shrink-0" />
          </VIDCNativeButton>

          {/* vConsole Button */}
          <VIDCAnchor
            href="https://auth.vtidc-test.com/?redirect_uri=https://vconsole.vtidc-test.com/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleCloseMegaMenu}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 h-10 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-[var(--vidc-color-text-primary)] text-sm font-semibold transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] shrink-0 shadow-2xs"
          >
            vConsole
          </VIDCAnchor>

          {/* Đăng ký tài khoản CTA Button */}
          <VIDCNativeButton
            type="button"
            onClick={() => {
              handleCloseMegaMenu();
              window.dispatchEvent(new CustomEvent('open-register-modal'));
            }}
            onMouseEnter={handleCloseMegaMenu}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 h-10 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-sm font-bold transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] active:bg-[var(--vidc-button-primary-background-active)] shrink-0 shadow-sm cursor-pointer"
          >
            {t.nav.register}
          </VIDCNativeButton>

          {/* Mobile Navigation Drawer Toggle */}
          <VIDCNativeButton
            onClick={onToggleMobileDrawer}
            onMouseEnter={handleCloseMegaMenu}
            aria-expanded={isMobileDrawerOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-slate-100 active:bg-slate-200 active:text-[var(--vidc-color-brand-red)] focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] transition-all"
          >
            {isMobileDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </VIDCNativeButton>
        </div>
      </div>

      {/* Dark Backdrop Overlay when Mega Menu is Active */}
      {activeMegaMenu && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 top-[72px] md:top-[112px] bg-black/50 backdrop-blur-xs z-40 transition-opacity animate-in fade-in duration-150 cursor-pointer"
          onClick={handleCloseMegaMenu}
          aria-hidden="true"
        />,
        document.body
      )}

      {/* Mega Dropdown Active Container Overlay */}
      {activeMegaMenu && (
        <div 
          className="absolute top-full left-0 right-0 w-full z-50 pointer-events-none animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {/* Invisible Hover Bridge spanning gap between navbar and mega menu */}
          <div 
            className="w-full h-3 pointer-events-auto bg-transparent"
            onMouseEnter={handleMouseEnterNavContent}
            onMouseLeave={handleMouseLeaveNav}
          />
          <div className="pb-2">
            <div 
              className="vidc-container mx-auto pointer-events-auto"
              onMouseEnter={handleMouseEnterNavContent}
              onMouseLeave={handleMouseLeaveNav}
            >
              {activeMegaMenu === 'services' && (
                <ServicesMegaMenu 
                  onClose={handleCloseMegaMenu} 
                  currentMarketPath={currentMarketPath} 
                />
              )}
              {activeMegaMenu === 'solutions' && (
                <SolutionsMegaMenu 
                  onClose={handleCloseMegaMenu} 
                  currentMarketPath={currentMarketPath} 
                />
              )}
              {activeMegaMenu === 'pricing' && (
                <PricingMegaMenu 
                  onClose={handleCloseMegaMenu} 
                  currentMarketPath={currentMarketPath} 
                />
              )}
              {activeMegaMenu === 'resources' && (
                <ResourcesMegaMenu 
                  onClose={handleCloseMegaMenu} 
                  currentMarketPath={currentMarketPath} 
                />
              )}
              {activeMegaMenu === 'partners' && (
                <PartnersMegaMenu 
                  onClose={handleCloseMegaMenu} 
                  currentMarketPath={currentMarketPath} 
                />
              )}
              {activeMegaMenu === 'about' && (
                <AboutMegaMenu 
                  onClose={handleCloseMegaMenu} 
                  currentMarketPath={currentMarketPath} 
                />
              )}
              {activeMegaMenu === 'promotions' && (
                <PromotionsMegaMenu 
                  onClose={handleCloseMegaMenu} 
                  currentMarketPath={currentMarketPath} 
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Global Search Modal Command Palette */}
      {isSearchOpen && (
        <Suspense fallback={null}>
          <GlobalSearchModal 
            isOpen={isSearchOpen} 
            onClose={() => setIsSearchOpen(false)} 
            currentMarketPath={currentMarketPath} 
          />
        </Suspense>
      )}
    </nav>
  );
};
