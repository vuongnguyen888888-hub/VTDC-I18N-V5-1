import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export interface NPUSectionNavItem {
  id: string;
  label: string;
  href: string;
  sectionId: string;
  order: number;
  enabled: boolean;
}

export const DEFAULT_NPU_NAV_ITEMS: NPUSectionNavItem[] = [
  { id: 'overview', label: 'Tổng quan', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
  { id: 'pricing', label: 'Bảng giá', href: '#pricing', sectionId: 'pricing', order: 2, enabled: true },
  { id: 'benefits', label: 'Lợi ích & Ưu thế', href: '#benefits', sectionId: 'benefits', order: 3, enabled: true },
  { id: 'specs', label: 'Thông số kỹ thuật', href: '#specs', sectionId: 'specs', order: 4, enabled: true },
  { id: 'usecases', label: 'Ứng dụng & Mô hình', href: '#usecases', sectionId: 'usecases', order: 5, enabled: true },
  { id: 'faq', label: 'Hỏi đáp FAQ', href: '#faq', sectionId: 'faq', order: 6, enabled: true },
  { id: 'docs', label: 'Tài liệu hỗ trợ', href: '#docs', sectionId: 'docs', order: 7, enabled: true },
];

export interface CloudNPUStickyNavProps {
  currentMarket: SEAMarket;
  onOpenQuote?: () => void;
  brandLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const CloudNPUStickyNav: React.FC<CloudNPUStickyNavProps> = ({
  currentMarket,
  onOpenQuote,
  brandLabel,
  ctaLabel,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const defaultBrandLabel = 'Viettel Cloud NPU';
  const displayBrandLabel = brandLabel !== undefined ? brandLabel : defaultBrandLabel;

  const defaultCtaLabel = isLaos ? 'Trial / Quote' : 'Dùng thử / Báo giá';
  const displayCtaLabel = ctaLabel !== undefined ? ctaLabel : defaultCtaLabel;

  const resolvedItems = isLaos ? [
    { id: 'overview', label: 'Overview', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
    { id: 'pricing', label: 'Pricing', href: '#pricing', sectionId: 'pricing', order: 2, enabled: true },
    { id: 'benefits', label: 'Benefits & Advantages', href: '#benefits', sectionId: 'benefits', order: 3, enabled: true },
    { id: 'specs', label: 'Specifications', href: '#specs', sectionId: 'specs', order: 4, enabled: true },
    { id: 'usecases', label: 'Applications', href: '#usecases', sectionId: 'usecases', order: 5, enabled: true },
    { id: 'faq', label: 'FAQ', href: '#faq', sectionId: 'faq', order: 6, enabled: true },
    { id: 'docs', label: 'Docs & Support', href: '#docs', sectionId: 'docs', order: 7, enabled: true },
  ] : DEFAULT_NPU_NAV_ITEMS;

  const enabledItems = resolvedItems
    .filter((item) => item.enabled)
    .sort((a, b) => a.order - b.order);

  const [currentActive, setCurrentActive] = useState<string>('overview');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close mobile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ScrollSpy observer sync & scroll state
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const isMobile = window.innerWidth < 768;
      const stickyHeaderHeight = isMobile ? 124 : 164;
      const scrollPos = window.scrollY + stickyHeaderHeight + 10;
      
      for (let i = enabledItems.length - 1; i >= 0; i--) {
        const item = enabledItems[i];
        const sec = document.getElementById(item.sectionId);
        if (sec && sec.offsetTop <= scrollPos) {
          setCurrentActive(item.sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabledItems]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setCurrentActive(sectionId);
    setMobileMenuOpen(false);

    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isMobile = window.innerWidth < 768;
      const navOffset = isMobile ? 124 : 164;
      const topOffset = targetEl.getBoundingClientRect().top + window.scrollY - navOffset;

      window.scrollTo({
        top: topOffset,
        behavior: isReducedMotion ? 'auto' : 'smooth',
      });

      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', `#${sectionId}`);
      }
    }
  };

  const handleCtaClick = () => {
    setMobileMenuOpen(false);
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      const pricingEl = document.getElementById('pricing');
      if (pricingEl) {
        const isMobile = window.innerWidth < 768;
        const navOffset = isMobile ? 124 : 164;
        const topOffset = pricingEl.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
    }
  };

  const activeItemObj = enabledItems.find((item) => item.sectionId === currentActive) || enabledItems[0];

  return (
    <nav
      ref={navRef}
      className={`vidc-vcs-section-nav ${isScrolled ? 'vidc-vcs-section-nav--scrolled' : ''}`}
      data-component="vcnpu-section-navigation"
      aria-label="Điều hướng nội dung Viettel Cloud NPU"
    >
      <div className="vidc-container">
        
        {/* Mobile Dropdown Card Style */}
        <div className="md:hidden pointer-events-auto">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/10 overflow-hidden transition-all duration-200">
            {/* Header Trigger */}
            <VIDCNativeButton
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full px-5 py-3.5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vidc-color-brand-red)] cursor-pointer"
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex items-center gap-2.5">
                <span className="font-extrabold text-slate-900 text-sm tracking-tight">{displayBrandLabel}</span>
                <span className="text-slate-300 text-xs">•</span>
                <span className="text-xs font-bold text-[var(--vidc-color-brand-red)] bg-red-50/80 px-2.5 py-0.5 rounded-full border border-red-100">
                  {activeItemObj?.label || 'Tổng quan'}
                </span>
              </div>
              <div className="p-1 rounded-lg bg-slate-100 text-slate-600">
                {mobileMenuOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </VIDCNativeButton>

            {/* Expandable Menu Items */}
            {mobileMenuOpen && (
              <div className="border-t border-slate-100 bg-slate-50/70 p-3 space-y-1">
                {enabledItems.map((item) => {
                  const isActive = currentActive === item.sectionId;
                  return (
                    <VIDCAnchor
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.sectionId)}
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-md shadow-red-500/20'
                          : 'text-slate-700 hover:bg-white hover:text-slate-900'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                    </VIDCAnchor>
                  );
                })}

                <div className="pt-2 border-t border-slate-200/60 mt-2">
                  <VIDCNativeButton
                    type="button"
                    onClick={handleCtaClick}
                    className="flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] text-white font-extrabold text-xs shadow-md shadow-red-500/20 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{displayCtaLabel}</span>
                  </VIDCNativeButton>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation Layout */}
        <div className="hidden md:block">
          <div className="vidc-vcs-section-nav__card">
            <div className="vidc-vcs-section-nav__left">
              <div className="vidc-vcs-section-nav__brand">
                {displayBrandLabel}
              </div>

              <div className="vidc-vcs-section-nav__divider" aria-hidden="true" />

              <ul className="vidc-vcs-section-nav__list">
                {enabledItems.map((item) => {
                  const isActive = currentActive === item.sectionId;
                  return (
                    <li key={item.id} className="vidc-vcs-section-nav__item">
                      <VIDCAnchor
                        href={item.href}
                        aria-current={isActive ? 'location' : undefined}
                        onClick={(e) => handleNavClick(e, item.sectionId)}
                        className="vidc-vcs-section-nav__link cursor-pointer"
                      >
                        {item.label}
                      </VIDCAnchor>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* CTA Button: Dùng thử / Báo giá */}
            <VIDCNativeButton
              type="button"
              onClick={handleCtaClick}
              className="vidc-vcs-section-nav__cta cursor-pointer bg-[var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] text-white border-transparent shadow-sm hover:shadow-md"
            >
              <span>{displayCtaLabel}</span>
            </VIDCNativeButton>
          </div>
        </div>

      </div>
    </nav>
  );
};
