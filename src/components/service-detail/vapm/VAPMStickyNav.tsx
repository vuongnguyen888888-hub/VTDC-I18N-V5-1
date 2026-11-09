import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export interface VAPMSectionNavItem {
  id: string;
  label: string;
  href: string;
  sectionId: string;
  order: number;
  enabled: boolean;
}

export const DEFAULT_VAPM_NAV_ITEMS: VAPMSectionNavItem[] = [
  { id: 'overview', label: 'Tổng quan', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
  { id: 'pricing', label: 'Bảng giá', href: '#pricing', sectionId: 'pricing', order: 2, enabled: true },
  { id: 'features', label: 'Tính năng', href: '#features', sectionId: 'features', order: 3, enabled: true },
  { id: 'benefits', label: 'Lợi ích', href: '#benefits', sectionId: 'benefits', order: 4, enabled: true },
  { id: 'use-cases', label: 'Ứng dụng', href: '#use-cases', sectionId: 'use-cases', order: 5, enabled: true },
  { id: 'faq', label: 'Hỏi đáp', href: '#faq', sectionId: 'faq', order: 6, enabled: true },
  { id: 'docs-support', label: 'Tài liệu & Hỗ trợ', href: '#docs-support', sectionId: 'docs-support', order: 7, enabled: true },
];

export interface VAPMStickyNavProps {
  activeSection?: string;
  items?: VAPMSectionNavItem[];
  brandLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const VAPMStickyNav: React.FC<VAPMStickyNavProps> = ({
  activeSection = 'overview',
  items = DEFAULT_VAPM_NAV_ITEMS,
  brandLabel,
  ctaLabel,
  ctaHref = 'https://docs.vtidc-test.com/',
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const defaultBrandLabel = 'Viettel vAPM';
  const displayBrandLabel = brandLabel !== undefined ? brandLabel : defaultBrandLabel;

  const defaultCtaLabel = isLaos ? 'Technical Documents' : 'Tài liệu kỹ thuật';
  const displayCtaLabel = ctaLabel !== undefined ? ctaLabel : defaultCtaLabel;

  const resolvedItems = items === DEFAULT_VAPM_NAV_ITEMS && isLaos ? [
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const sec = document.getElementById(sectionId);
    if (sec) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 110 : 130;
      const topPos = sec.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: Math.max(0, topPos),
        behavior: 'smooth'
      });
      setCurrentActive(sectionId);
    }
  };

  const currentActiveItem = enabledItems.find(item => item.sectionId === currentActive) || enabledItems[0];

  return (
    <div
      ref={navRef}
      id="sticky-section-nav"
      className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow duration-200 ${
        isScrolled ? 'shadow-md shadow-slate-900/5' : 'shadow-none'
      }`}
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-14">
          
          {/* Brand/Product Identifier */}
          <div className="hidden lg:flex items-center gap-3 pr-6 border-r border-slate-200">
            <span className="font-extrabold text-sm text-[var(--vidc-legacy-hex-222225)] tracking-tight whitespace-nowrap">
              {displayBrandLabel}
            </span>
          </div>

          {/* Mobile Selector Dropdown */}
          <div className="flex md:hidden items-center flex-1 justify-between">
            <VIDCNativeButton
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 text-xs font-extrabold text-[var(--vidc-legacy-hex-222225)] py-2 px-3 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer"
            >
              <span>{currentActiveItem?.label}</span>
              {mobileMenuOpen ? <ChevronUp className="w-3.5 h-3.5 text-slate-500" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-500" />}
            </VIDCNativeButton>
            
            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-[11px] font-bold transition-all shadow-xs cursor-pointer"
            >
              <span>{isLaos ? 'Contact' : 'Tư vấn'}</span>
            </VIDCNativeButton>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 flex-1 justify-center px-4 overflow-x-auto no-scrollbar">
            {enabledItems.map((item) => {
              const isActive = currentActive === item.sectionId;
              return (
                <VIDCAnchor
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={`relative px-3.5 py-4 text-xs font-extrabold tracking-wide uppercase transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[var(--vidc-color-brand-red)] border-b-2 border-[var(--vidc-color-brand-red)]'
                      : 'text-slate-600 hover:text-slate-900 border-b-2 border-transparent'
                  }`}
                >
                  {item.label}
                </VIDCAnchor>
              );
            })}
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden md:flex items-center gap-3 pl-4 border-l border-slate-200 shrink-0">
            <VIDCAnchor
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-xs font-semibold border border-slate-200 transition-all cursor-pointer"
            >
              <span>{displayCtaLabel}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </VIDCAnchor>

            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <span>{isLaos ? 'Consult' : 'Tư vấn'}</span>
            </VIDCNativeButton>
          </div>

        </div>

        {/* Mobile Dropdown Menu Items */}
        {mobileMenuOpen && (
          <div className="md:hidden py-2 border-t border-slate-200 bg-white shadow-xl rounded-b-xl animate-in fade-in duration-150">
            {enabledItems.map((item) => {
              const isActive = currentActive === item.sectionId;
              return (
                <VIDCAnchor
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={`block px-4 py-2.5 text-xs font-bold ${
                    isActive
                      ? 'bg-red-50 text-[var(--vidc-color-brand-red)] font-extrabold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </VIDCAnchor>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
