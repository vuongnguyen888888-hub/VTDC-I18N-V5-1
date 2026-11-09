import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export interface ColocationSectionNavItem {
  id: string;
  label: string;
  href: string;
  sectionId: string;
  order: number;
  enabled: boolean;
}

export const DEFAULT_COLO_NAV_ITEMS: ColocationSectionNavItem[] = [
  { id: 'overview', label: 'Tổng quan', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
  { id: 'pricing', label: 'Bảng giá', href: '#pricing', sectionId: 'pricing', order: 2, enabled: true },
  { id: 'features', label: 'Tính năng', href: '#features', sectionId: 'features', order: 3, enabled: true },
  { id: 'benefits', label: 'Lợi ích', href: '#benefits', sectionId: 'benefits', order: 4, enabled: true },
  { id: 'use-cases', label: 'Ứng dụng', href: '#use-cases', sectionId: 'use-cases', order: 5, enabled: true },
  { id: 'faq', label: 'Hỏi đáp', href: '#faq', sectionId: 'faq', order: 6, enabled: true },
  { id: 'docs-support', label: 'Tài liệu & Hỗ trợ', href: '#docs-support', sectionId: 'docs-support', order: 7, enabled: true },
];

export interface ColocationStickyNavProps {
  activeSection?: string;
  items?: ColocationSectionNavItem[];
  brandLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
  currentMarket?: SEAMarket;
  onOpenQuote?: () => void;
}

export const ColocationStickyNav: React.FC<ColocationStickyNavProps> = ({
  activeSection = 'overview',
  items = DEFAULT_COLO_NAV_ITEMS,
  brandLabel,
  ctaLabel,
  ctaHref = 'https://docs.vtidc-test.com/',
  currentMarket,
  onOpenQuote,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const defaultBrandLabel = isLaos ? 'Viettel Colocation' : 'Viettel Colocation';
  const displayBrandLabel = brandLabel !== undefined ? brandLabel : defaultBrandLabel;

  const defaultCtaLabel = isLaos ? 'Technical Documents' : 'Tài liệu kỹ thuật';
  const displayCtaLabel = ctaLabel !== undefined ? ctaLabel : defaultCtaLabel;

  const resolvedItems = items === DEFAULT_COLO_NAV_ITEMS && isLaos ? [
    { id: 'overview', label: 'Overview', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
    { id: 'pricing', label: 'Pricing', href: '#pricing', sectionId: 'pricing', order: 2, enabled: true },
    { id: 'features', label: 'Features', href: '#features', sectionId: 'features', order: 3, enabled: true },
    { id: 'benefits', label: 'Benefits', href: '#benefits', sectionId: 'benefits', order: 4, enabled: true },
    { id: 'use-cases', label: 'Applications', href: '#use-cases', sectionId: 'use-cases', order: 5, enabled: true },
    { id: 'faq', label: 'FAQ', href: '#faq', sectionId: 'faq', order: 6, enabled: true },
    { id: 'docs-support', label: 'Docs & Support', href: '#docs-support', sectionId: 'docs-support', order: 7, enabled: true },
  ] : items;

  const enabledItems = resolvedItems
    .filter((item) => item.enabled)
    .sort((a, b) => a.order - b.order);

  const [currentActive, setCurrentActive] = useState<string>(activeSection);
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabledItems]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const isMobile = window.innerWidth < 768;
      const stickyHeaderHeight = isMobile ? 116 : 144;
      const topPosition = element.getBoundingClientRect().top + window.pageYOffset - stickyHeaderHeight;
      
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
      setCurrentActive(sectionId);
    }
  };

  return (
    <div
      ref={navRef}
      id="vcs-section-nav"
      className={`sticky top-[108px] z-30 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--vidc-legacy-hex-e8eaed)]'
          : 'bg-white border-b border-[var(--vidc-legacy-hex-e8eaed)]'
      }`}
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-14">
          
          {/* Brand Name on the Left */}
          <div className="flex items-center gap-3">
            <VIDCAnchor
              href="#hero-section"
              onClick={(e) => scrollToSection(e, 'hero-section')}
              className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] hover:text-[var(--vidc-color-brand-red)] transition-colors whitespace-nowrap"
            >
              {displayBrandLabel}
            </VIDCAnchor>

            {/* Mobile Dropdown Button */}
            <div className="md:hidden">
              <VIDCNativeButton
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md border border-slate-200"
                aria-expanded={mobileMenuOpen}
              >
                <span>
                  {enabledItems.find((item) => item.sectionId === currentActive)?.label || 'Menu'}
                </span>
                {mobileMenuOpen ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </VIDCNativeButton>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {enabledItems.map((item) => {
              const isActive = currentActive === item.sectionId;
              return (
                <VIDCAnchor
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.sectionId)}
                  className={`px-3 py-4 text-xs lg:text-sm font-semibold transition-all relative whitespace-nowrap min-h-[44px] inline-flex items-center ${
                    isActive
                      ? 'text-[var(--vidc-color-brand-red)] font-bold'
                      : 'text-slate-600 hover:text-[var(--vidc-legacy-hex-222225)]'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--vidc-color-brand-red)] rounded-full" />
                  )}
                </VIDCAnchor>
              );
            })}
          </nav>

          {/* Right Action: Documentation Link */}
          <div className="flex items-center gap-2">
            <VIDCAnchor
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[var(--vidc-color-brand-red)] border border-slate-200 hover:border-[var(--vidc-color-brand-red)] px-3 py-1.5 rounded-lg transition-all"
            >
              <span>{displayCtaLabel}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </VIDCAnchor>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--vidc-legacy-hex-e8eaed)] bg-white px-4 py-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-1 py-1">
            {enabledItems.map((item) => {
              const isActive = currentActive === item.sectionId;
              return (
                <VIDCAnchor
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.sectionId)}
                  className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
                    isActive
                      ? 'bg-red-50 text-[var(--vidc-color-brand-red)] font-bold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </VIDCAnchor>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
