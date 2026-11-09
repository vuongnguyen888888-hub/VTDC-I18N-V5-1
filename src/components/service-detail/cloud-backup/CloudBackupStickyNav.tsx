import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export interface VCSSectionNavItem {
  id: string;
  label: string;
  href: string;
  sectionId: string;
  order: number;
  enabled: boolean;
  verificationStatus?: string;
}

export const DEFAULT_BACKUP_NAV_ITEMS: VCSSectionNavItem[] = [
  { id: 'overview', label: 'Tổng quan', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
  { id: 'pricing', label: 'Bảng giá', href: '#pricing', sectionId: 'pricing', order: 2, enabled: true },
  { id: 'features', label: 'Tính năng', href: '#features', sectionId: 'features', order: 3, enabled: true },
  { id: 'benefits', label: 'Lợi ích', href: '#benefits', sectionId: 'benefits', order: 4, enabled: true },
  { id: 'use-cases', label: 'Ứng dụng', href: '#use-cases', sectionId: 'use-cases', order: 5, enabled: true },
  { id: 'faq', label: 'Hỏi đáp', href: '#faq', sectionId: 'faq', order: 6, enabled: true },
  { id: 'docs-support', label: 'Tài liệu & Hỗ trợ', href: '#docs-support', sectionId: 'docs-support', order: 7, enabled: true },
];

export interface CloudBackupStickyNavProps {
  activeSection?: string;
  items?: VCSSectionNavItem[];
  brandLabel?: string;
  ctaLabel?: string;
  ctaHref?: string;
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CloudBackupStickyNav: React.FC<CloudBackupStickyNavProps> = ({
  activeSection = 'overview',
  items = DEFAULT_BACKUP_NAV_ITEMS,
  brandLabel,
  ctaLabel,
  ctaHref = 'https://docs.vtidc-test.com/',
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const defaultBrandLabel = 'Viettel Cloud Backup';
  const displayBrandLabel = brandLabel !== undefined ? brandLabel : defaultBrandLabel;

  const defaultCtaLabel = isLaos ? 'Technical Documents' : 'Tài liệu kỹ thuật';
  const displayCtaLabel = ctaLabel !== undefined ? ctaLabel : defaultCtaLabel;

  const resolvedItems = items === DEFAULT_BACKUP_NAV_ITEMS && isLaos ? [
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
      aria-label="Điều hướng nội dung Viettel Cloud Backup"
    >
      <div className="vidc-container">
        {/* Mobile Dropdown Card Style (AWS inspired) */}
        <div className="md:hidden pointer-events-auto">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/10 overflow-hidden transition-all duration-200">
            {/* Header Trigger */}
            <VIDCNativeButton
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full px-5 py-3.5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vidc-color-brand-red)]"
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex items-center gap-2.5">
                <span className="font-extrabold text-slate-900 text-sm tracking-tight">{displayBrandLabel}</span>
                <span className="text-slate-300 text-xs">•</span>
                <span className="text-xs font-bold text-[var(--vidc-color-brand-red)] bg-red-50/80 px-2.5 py-0.5 rounded-full border border-red-100">
                  {activeItemObj?.label}
                </span>
              </div>
              <div className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
                {mobileMenuOpen ? (
                  <ChevronUp className="w-5 h-5 text-slate-800" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-800" />
                )}
              </div>
            </VIDCNativeButton>

            {/* Expandable Dropdown List */}
            {mobileMenuOpen && (
              <div className="border-t border-slate-200/80 px-2 py-2.5 max-h-[60vh] overflow-y-auto space-y-1 bg-slate-50/60 divide-y divide-slate-100/80">
                {enabledItems.map((item) => {
                  const isActive = currentActive === item.sectionId;
                  return (
                    <VIDCAnchor
                      key={item.id}
                      href={item.href}
                      aria-current={isActive ? 'location' : undefined}
                      onClick={(e) => handleNavClick(e, item.sectionId)}
                      className={`block px-4 py-3 rounded-xl text-sm transition-all font-medium ${
                        isActive
                          ? 'bg-white font-extrabold text-[var(--vidc-color-brand-red)] shadow-sm border border-slate-200/80 pl-5'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-white/80'
                      }`}
                    >
                      {item.label}
                    </VIDCAnchor>
                  );
                })}

                {ctaHref && displayCtaLabel && (
                  <div className="pt-2.5 mt-2 px-1 pb-1">
                    <VIDCAnchor
                      href={ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] text-white hover:bg-[var(--vidc-button-primary-background-hover)] font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>{displayCtaLabel}</span>
                      <ExternalLink className="w-4 h-4" />
                    </VIDCAnchor>
                  </div>
                )}
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
                        className="vidc-vcs-section-nav__link"
                      >
                        {item.label}
                      </VIDCAnchor>
                    </li>
                  );
                })}
              </ul>
            </div>

            {ctaHref && displayCtaLabel && (
              <VIDCAnchor
                className="vidc-vcs-section-nav__cta"
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{displayCtaLabel}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
                <span className="sr-only">(mở tab mới)</span>
              </VIDCAnchor>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
