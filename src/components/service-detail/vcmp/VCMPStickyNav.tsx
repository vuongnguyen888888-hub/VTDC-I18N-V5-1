import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VCMPStickyNavProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const VCMPStickyNav: React.FC<VCMPStickyNavProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLaos = currentMarket?.code !== 'vn';

  const navItems = [
    { id: 'overview', label: isLaos ? 'Overview' : 'Tổng quan' },
    { id: 'pricing', label: isLaos ? 'Pricing' : 'Báo giá' },
    { id: 'features', label: isLaos ? 'Features' : 'Tính năng' },
    { id: 'benefits', label: isLaos ? 'Benefits' : 'Lợi ích' },
    { id: 'use-cases', label: isLaos ? 'Use Cases' : 'Kịch bản' },
    { id: 'faq', label: isLaos ? 'FAQ' : 'FAQ' },
    { id: 'docs-support', label: isLaos ? 'Docs & Support' : 'Tài liệu & Hỗ trợ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm transition-all duration-200">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-14">
          
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <VIDCNativeButton
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-semibold transition-colors duration-150 relative cursor-pointer ${
                    isActive
                      ? 'text-[var(--vidc-color-brand-red)]'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-[-9px] left-0 right-0 h-0.5 bg-[var(--vidc-color-brand-red)]" />
                  )}
                </VIDCNativeButton>
              );
            })}
          </nav>

          {/* Mobile Menu Dropdown Button */}
          <div className="lg:hidden relative">
            <VIDCNativeButton
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 bg-slate-50"
            >
              <span>{navItems.find(i => i.id === activeSection)?.label || (isLaos ? 'Navigate' : 'Điều hướng')}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-180' : ''}`} />
            </VIDCNativeButton>

            {mobileMenuOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-xl py-1 z-50">
                {navItems.map((item) => (
                  <VIDCNativeButton
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-2 text-xs font-semibold ${
                      activeSection === item.id
                        ? 'text-[var(--vidc-color-brand-red)] bg-red-50'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </VIDCNativeButton>
                ))}
              </div>
            )}
          </div>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs sm:text-sm font-bold transition-all shadow-sm cursor-pointer"
            >
              <span>{isLaos ? 'Get Quote' : 'Nhận báo giá'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </VIDCNativeButton>
          </div>

        </div>
      </div>
    </div>
  );
};
