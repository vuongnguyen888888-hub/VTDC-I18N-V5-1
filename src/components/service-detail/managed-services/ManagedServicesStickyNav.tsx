import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export interface MSSectionNavItem {
  id: string;
  label: string;
  href: string;
  sectionId: string;
  order: number;
  enabled: boolean;
}

export const DEFAULT_MS_NAV_ITEMS: MSSectionNavItem[] = [
  { id: 'overview', label: 'Tổng quan', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
  { id: 'pricing', label: 'Bảng giá', href: '#pricing', sectionId: 'pricing', order: 2, enabled: true },
  { id: 'features', label: 'Tính năng', href: '#features', sectionId: 'features', order: 3, enabled: true },
  { id: 'benefits', label: 'Lợi ích', href: '#benefits', sectionId: 'benefits', order: 4, enabled: true },
  { id: 'use-cases', label: 'Ứng dụng', href: '#use-cases', sectionId: 'use-cases', order: 5, enabled: true },
  { id: 'faq', label: 'Hỏi đáp', href: '#faq', sectionId: 'faq', order: 6, enabled: true },
  { id: 'docs-support', label: 'Tài liệu & Hỗ trợ', href: '#docs-support', sectionId: 'docs-support', order: 7, enabled: true },
];

export interface ManagedServicesStickyNavProps {
  activeSection?: string;
  items?: MSSectionNavItem[];
  currentMarket?: { code: string; name: string };
  onOpenQuote?: () => void;
}

export const ManagedServicesStickyNav: React.FC<ManagedServicesStickyNavProps> = ({
  activeSection = 'overview',
  items = DEFAULT_MS_NAV_ITEMS,
  currentMarket,
  onOpenQuote,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const defaultBrandLabel = isLaos ? 'Viettel Managed Services' : 'Viettel Managed Services';
  const defaultCtaLabel = isLaos ? 'Request Consultation' : 'Đăng ký tư vấn';

  const resolvedItems = items === DEFAULT_MS_NAV_ITEMS && isLaos ? [
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

  const activeItemObj = enabledItems.find((item) => item.sectionId === currentActive) || enabledItems[0];

  return (
    <nav
      ref={navRef}
      className={`vidc-vcs-section-nav ${isScrolled ? 'vidc-vcs-section-nav--scrolled' : ''}`}
      data-component="vcs-section-navigation"
      aria-label="Điều hướng nội dung Viettel Managed Services"
    >
      <div className="vidc-container">
        {/* Mobile Dropdown Card Style */}
        <div className="md:hidden pointer-events-auto">
          <div className="bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/90 shadow-lg px-3 py-2 flex items-center justify-between gap-2">
            <VIDCNativeButton
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex-1 flex items-center justify-between text-left px-2 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="w-2 h-2 rounded-full bg-[var(--vidc-color-brand-red)] shrink-0" />
                <span className="text-xs font-bold text-slate-800 truncate">
                  {activeItemObj?.label}
                </span>
              </div>
              {mobileMenuOpen ? (
                <ChevronUp className="w-4 h-4 text-slate-500 shrink-0 ml-1" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-500 shrink-0 ml-1" />
              )}
            </VIDCNativeButton>

            {onOpenQuote && (
              <VIDCNativeButton
                type="button"
                onClick={onOpenQuote}
                className="shrink-0 px-3 py-1.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                {defaultCtaLabel}
              </VIDCNativeButton>
            )}
          </div>

          {mobileMenuOpen && (
            <div className="mt-1.5 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden py-1">
              {enabledItems.map((item) => (
                <VIDCAnchor
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={`block px-4 py-2.5 text-xs font-semibold transition-colors ${
                    currentActive === item.sectionId
                      ? 'bg-red-50 text-[var(--vidc-color-brand-red)] font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </VIDCAnchor>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Sticky Bar */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-slate-200/80">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            <span className="font-extrabold text-sm text-slate-900 mr-4 shrink-0">
              {defaultBrandLabel}
            </span>
            {enabledItems.map((item) => {
              const isActive = currentActive === item.sectionId;
              return (
                <VIDCAnchor
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-all shrink-0 ${
                    isActive
                      ? 'text-[var(--vidc-color-brand-red)] bg-red-50/80 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {item.label}
                </VIDCAnchor>
              );
            })}
          </div>

          {onOpenQuote && (
            <div className="shrink-0 pl-4">
              <VIDCNativeButton
                type="button"
                onClick={onOpenQuote}
                className="px-4 py-2 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                {defaultCtaLabel}
              </VIDCNativeButton>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
