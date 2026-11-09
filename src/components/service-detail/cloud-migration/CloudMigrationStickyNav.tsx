import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export interface VCMSectionNavItem {
  id: string;
  label: string;
  href: string;
  sectionId: string;
  order: number;
}

interface CloudMigrationStickyNavProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CloudMigrationStickyNav: React.FC<CloudMigrationStickyNavProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const navItems: VCMSectionNavItem[] = isLaos
    ? [
        { id: 'overview', label: 'Overview', href: '#overview', sectionId: 'overview', order: 1 },
        { id: 'pricing', label: 'Pricing', href: '#pricing', sectionId: 'pricing', order: 2 },
        { id: 'features', label: 'Features', href: '#features', sectionId: 'features', order: 3 },
        { id: 'benefits', label: 'Benefits', href: '#benefits', sectionId: 'benefits', order: 4 },
        { id: 'use-cases', label: 'Applications', href: '#use-cases', sectionId: 'use-cases', order: 5 },
        { id: 'faq', label: 'FAQ', href: '#faq', sectionId: 'faq', order: 6 },
        { id: 'docs-support', label: 'Docs & Support', href: '#docs-support', sectionId: 'docs-support', order: 7 },
      ]
    : [
        { id: 'overview', label: 'Tổng quan', href: '#overview', sectionId: 'overview', order: 1 },
        { id: 'pricing', label: 'Bảng giá', href: '#pricing', sectionId: 'pricing', order: 2 },
        { id: 'features', label: 'Tính năng', href: '#features', sectionId: 'features', order: 3 },
        { id: 'benefits', label: 'Lợi ích', href: '#benefits', sectionId: 'benefits', order: 4 },
        { id: 'use-cases', label: 'Ứng dụng', href: '#use-cases', sectionId: 'use-cases', order: 5 },
        { id: 'faq', label: 'Hỏi đáp', href: '#faq', sectionId: 'faq', order: 6 },
        { id: 'docs-support', label: 'Tài liệu & Hỗ trợ', href: '#docs-support', sectionId: 'docs-support', order: 7 },
      ];

  const brandLabel = 'Viettel Cloud Migration';
  const ctaLabel = isLaos ? 'Request Consultation' : 'Nhận tư vấn';

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
      const isMobile = window.innerWidth < 768;
      const navOffset = isMobile ? 124 : 164;
      const topOffset = targetEl.getBoundingClientRect().top + window.scrollY - navOffset;

      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      ref={navRef}
      className={`sticky top-[108px] z-30 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-white border-b border-slate-200'
      }`}
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-14">
          
          {/* Brand Name / Service Label */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight truncate max-w-[200px] sm:max-w-none">
              {brandLabel}
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Cloud Migration Section Navigation">
            {navItems.map((item) => {
              const isActive = currentActive === item.sectionId;
              return (
                <VIDCAnchor
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={`px-3 py-2 text-xs font-bold transition-all relative rounded-md ${
                    isActive
                      ? 'text-[var(--vidc-color-brand-red)] bg-red-50/60 font-black'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[var(--vidc-color-brand-red)] rounded-full" />
                  )}
                </VIDCAnchor>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-2">
            {onOpenConsult && (
              <VIDCNativeButton
                type="button"
                onClick={onOpenConsult}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <span>{ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </VIDCNativeButton>
            )}

            {/* Mobile Menu Toggle Button */}
            <VIDCNativeButton
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle section menu"
            >
              {mobileMenuOpen ? (
                <ChevronUp className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </VIDCNativeButton>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 px-2 border-t border-slate-100 bg-white shadow-lg rounded-b-xl space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
            {navItems.map((item) => {
              const isActive = currentActive === item.sectionId;
              return (
                <VIDCAnchor
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={`block px-3.5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-red-50 text-[var(--vidc-color-brand-red)] font-black'
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
