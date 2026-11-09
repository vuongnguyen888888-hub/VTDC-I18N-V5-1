import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


export interface DedicatedHpcSectionNavItem {
  id: string;
  label: string;
  sectionId: string;
  order: number;
  enabled: boolean;
}

export const DEFAULT_HPC_NAV_ITEMS: DedicatedHpcSectionNavItem[] = [
  { id: 'overview', label: 'Tổng quan', sectionId: 'overview', order: 1, enabled: true },
  { id: 'pricing', label: 'Bảng giá', sectionId: 'pricing', order: 2, enabled: true },
  { id: 'features', label: 'Tính năng', sectionId: 'features', order: 3, enabled: true },
  { id: 'benefits', label: 'Lợi ích', sectionId: 'benefits', order: 4, enabled: true },
  { id: 'use-cases', label: 'Ứng dụng', sectionId: 'use-cases', order: 5, enabled: true },
  { id: 'faq', label: 'Hỏi đáp', sectionId: 'faq', order: 6, enabled: true },
  { id: 'docs-support', label: 'Tài liệu & Hỗ trợ', sectionId: 'docs-support', order: 7, enabled: true },
];

interface DedicatedPrivateCloudStickyNavProps {
  currentMarket: SEAMarket;
  onOpenQuote: () => void;
}

export const DedicatedPrivateCloudStickyNav: React.FC<DedicatedPrivateCloudStickyNavProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  const isLaos = currentMarket.code === 'la';

  const displayBrandLabel = isLaos ? 'Dedicated Private Cloud (HPC)' : 'Dedicated Private Cloud (HPC)';

  const resolvedItems = isLaos ? [
    { id: 'overview', label: 'Overview', sectionId: 'overview', order: 1, enabled: true },
    { id: 'pricing', label: 'Pricing', sectionId: 'pricing', order: 2, enabled: true },
    { id: 'features', label: 'Features', sectionId: 'features', order: 3, enabled: true },
    { id: 'benefits', label: 'Benefits', sectionId: 'benefits', order: 4, enabled: true },
    { id: 'use-cases', label: 'Applications', sectionId: 'use-cases', order: 5, enabled: true },
    { id: 'faq', label: 'FAQ', sectionId: 'faq', order: 6, enabled: true },
    { id: 'docs-support', label: 'Docs & Support', sectionId: 'docs-support', order: 7, enabled: true },
  ] : DEFAULT_HPC_NAV_ITEMS;

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
      
      for (let i = resolvedItems.length - 1; i >= 0; i--) {
        const item = resolvedItems[i];
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
  }, [resolvedItems]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, sectionId: string) => {
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

      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', `#${sectionId}`);
      }
    }
  };

  const activeItemObj = resolvedItems.find((item) => item.sectionId === currentActive) || resolvedItems[0];

  return (
    <nav
      ref={navRef}
      className={`sticky top-[56px] md:top-[60px] z-30 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200'
          : 'bg-white border-b border-slate-200'
      }`}
      aria-label="Điều hướng nội dung Viettel Dedicated Private Cloud"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Mobile Dropdown Card Style */}
        <div className="md:hidden py-2.5">
          <div className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden">
            <VIDCNativeButton
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full px-4 py-2.5 flex items-center justify-between text-left focus:outline-none"
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-xs tracking-tight">{displayBrandLabel}</span>
                <span className="text-slate-300 text-xs">•</span>
                <span className="text-xs font-bold text-[var(--vidc-color-brand-red)] bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                  {activeItemObj?.label}
                </span>
              </div>
              <div className="p-1 rounded-lg text-slate-600">
                {mobileMenuOpen ? (
                  <ChevronUp className="w-4 h-4 text-slate-800" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-800" />
                )}
              </div>
            </VIDCNativeButton>

            {mobileMenuOpen && (
              <div className="border-t border-slate-200 bg-white divide-y divide-slate-100 max-h-64 overflow-y-auto">
                {resolvedItems.map((item) => (
                  <VIDCNativeButton
                    key={item.id}
                    type="button"
                    onClick={(e) => handleNavClick(e, item.sectionId)}
                    className={`w-full px-4 py-2.5 text-left text-xs font-semibold flex items-center justify-between transition-colors ${
                      currentActive === item.sectionId
                        ? 'bg-red-50/70 text-[var(--vidc-color-brand-red)] font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {currentActive === item.sectionId && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--vidc-color-brand-red)]" />
                    )}
                  </VIDCNativeButton>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Sticky Bar */}
        <div className="hidden md:flex items-center justify-between h-14">
          <div className="flex items-center space-x-1 lg:space-x-2 overflow-x-auto no-scrollbar">
            {resolvedItems.map((item) => {
              const isActive = currentActive === item.sectionId;
              return (
                <VIDCNativeButton
                  key={item.id}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className={`text-xs lg:text-sm font-bold whitespace-nowrap px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'text-[var(--vidc-color-brand-red)] bg-red-50/80 font-extrabold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </VIDCNativeButton>
              );
            })}
          </div>

          <div className="flex items-center pl-4 shrink-0">
            <VIDCNativeButton
              type="button"
              onClick={onOpenQuote}
              className="text-xs font-bold px-4 py-2 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] cursor-pointer"
            >
              {isLaos ? 'Request Consultation' : 'Đăng Ký Tư Vấn'}
            </VIDCNativeButton>
          </div>
        </div>

      </div>
    </nav>
  );
};
