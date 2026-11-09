import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export interface CloudDRNavItem {
  id: string;
  label: string;
  href: string;
  sectionId: string;
  order: number;
}

interface CloudDRStickyNavProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CloudDRStickyNav: React.FC<CloudDRStickyNavProps> = ({ currentMarket, onOpenConsult }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    brandName: 'Viettel Cloud DR',
    docsLabel: isLaos ? 'Technical Documents' : 'Tài liệu kỹ thuật',
    consultLabel: isLaos ? 'Request Consultation' : 'Đăng ký tư vấn',
  };

  const navItems: CloudDRNavItem[] = [
    { id: 'overview', label: isLaos ? 'Overview' : 'Tổng quan', href: '#overview', sectionId: 'overview', order: 1 },
    { id: 'pricing', label: isLaos ? 'Pricing' : 'Bảng giá', href: '#pricing', sectionId: 'pricing', order: 2 },
    { id: 'features', label: isLaos ? 'Features' : 'Tính năng', href: '#features', sectionId: 'features', order: 3 },
    { id: 'benefits', label: isLaos ? 'Benefits' : 'Lợi ích', href: '#benefits', sectionId: 'benefits', order: 4 },
    { id: 'use-cases', label: isLaos ? 'Applications' : 'Ứng dụng', href: '#use-cases', sectionId: 'use-cases', order: 5 },
    { id: 'faq', label: isLaos ? 'FAQ' : 'Hỏi đáp', href: '#faq', sectionId: 'faq', order: 6 },
    { id: 'docs-support', label: isLaos ? 'Docs & Support' : 'Tài liệu & Hỗ trợ', href: '#docs-support', sectionId: 'docs-support', order: 7 },
  ];

  const [currentActive, setCurrentActive] = useState<string>('overview');
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
      
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
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
  }, [navItems]);

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

  const activeItemObj = navItems.find((item) => item.sectionId === currentActive) || navItems[0];

  return (
    <nav
      ref={navRef}
      className={`vidc-vcs-section-nav ${isScrolled ? 'vidc-vcs-section-nav--scrolled' : ''}`}
      data-component="vcs-section-navigation"
      aria-label="Điều hướng nội dung Viettel Cloud DR"
    >
      <div className="vidc-container">
        {/* Mobile Dropdown Card Style */}
        <div className="md:hidden pointer-events-auto">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/10 overflow-hidden transition-all duration-200">
            <VIDCNativeButton
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full px-5 py-3.5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vidc-color-brand-red)]"
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex items-center gap-2.5">
                <span className="font-extrabold text-slate-900 text-sm tracking-tight">{t.brandName}</span>
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

            {mobileMenuOpen && (
              <div className="border-t border-slate-200/80 px-2 py-2.5 max-h-[60vh] overflow-y-auto space-y-1 bg-slate-50/60 divide-y divide-slate-100/80">
                {navItems.map((item) => {
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
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between gap-4 h-14">
          <div className="flex items-center gap-6">
            <span className="text-sm font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
              {t.brandName}
            </span>

            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = currentActive === item.sectionId;
                return (
                  <VIDCAnchor
                    key={item.id}
                    href={item.href}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={(e) => handleNavClick(e, item.sectionId)}
                    className={`px-3.5 py-2 text-xs font-bold transition-all relative whitespace-nowrap rounded-lg ${
                      isActive
                        ? 'text-[var(--vidc-color-brand-red)] bg-red-50/70 font-extrabold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[var(--vidc-color-brand-red)] rounded-full" />
                    )}
                  </VIDCAnchor>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <VIDCAnchor
              href="https://docs.vtidc-test.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              {t.docsLabel}
            </VIDCAnchor>
            {onOpenConsult && (
              <VIDCNativeButton
                type="button"
                onClick={onOpenConsult}
                className="px-4 py-2 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                {t.consultLabel}
              </VIDCNativeButton>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

