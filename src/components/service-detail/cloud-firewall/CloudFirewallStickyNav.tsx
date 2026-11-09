import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudFirewallStickyNavProps {
  currentMarket?: SEAMarket;
  onOpenQuote: () => void;
}

export const CloudFirewallStickyNav: React.FC<CloudFirewallStickyNavProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: 'overview', label: isLaos ? 'Overview' : 'Tổng quan' },
    { id: 'pricing', label: isLaos ? 'Pricing' : 'Bảng giá' },
    { id: 'features', label: isLaos ? 'Capabilities' : 'Tính năng' },
    { id: 'benefits', label: isLaos ? 'Benefits' : 'Lợi ích' },
    { id: 'use-cases', label: isLaos ? 'Use Cases' : 'Ứng dụng' },
    { id: 'faq', label: isLaos ? 'FAQ' : 'Hỏi đáp' },
    { id: 'docs-support', label: isLaos ? 'Docs & Support' : 'Tài liệu & Hỗ trợ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const elem = document.getElementById(item.id);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-14 md:h-16">
          
          {/* Service Title / Brand Badge */}
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-sm md:text-base tracking-tight text-[var(--vidc-legacy-hex-222225)] hidden sm:inline-block">
              Viettel Cloud Firewall
            </span>
            <span className="hidden lg:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-[var(--vidc-color-brand-red)]">
              ML-Powered NGFW
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <VIDCNativeButton
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-xs lg:text-sm font-semibold transition-colors relative cursor-pointer ${
                    isActive
                      ? 'text-[var(--vidc-color-brand-red)] font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--vidc-color-brand-red)] rounded-full" />
                  )}
                </VIDCNativeButton>
              );
            })}
          </nav>

          {/* Mobile Nav Button */}
          <div className="flex md:hidden items-center">
            <VIDCNativeButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 rounded-lg cursor-pointer"
            >
              <span>{navItems.find((n) => n.id === activeTab)?.label || 'Menu'}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </VIDCNativeButton>
          </div>

          {/* Sticky CTA Button */}
          <div className="flex items-center gap-3">
            <VIDCNativeButton
              onClick={onOpenQuote}
              className="px-4 py-2 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs md:text-sm font-bold transition-all shadow-xs cursor-pointer"
            >
              {isLaos ? 'Get Free Quote' : 'Đăng Ký Tư Vấn'}
            </VIDCNativeButton>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-slate-200 bg-white space-y-1">
            {navItems.map((item) => (
              <VIDCNativeButton
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 text-xs font-semibold rounded-md ${
                  activeTab === item.id
                    ? 'bg-red-50 text-[var(--vidc-color-brand-red)] font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </VIDCNativeButton>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
