import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../../layout/UtilityBar';
import { ArrowRight } from 'lucide-react';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CloudFileStorageStickyNavProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CloudFileStorageStickyNav: React.FC<CloudFileStorageStickyNavProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code === 'la';
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const navItems = [
    { id: 'overview', label: isLaos ? 'Overview' : 'Tổng quan' },
    { id: 'pricing', label: isLaos ? 'Pricing' : 'Bảng giá' },
    { id: 'features', label: isLaos ? 'Features' : 'Tính năng' },
    { id: 'benefits', label: isLaos ? 'Benefits' : 'Lợi ích' },
    { id: 'use-cases', label: isLaos ? 'Use Cases' : 'Ứng dụng' },
    { id: 'faq', label: isLaos ? 'FAQ' : 'Hỏi đáp' },
    { id: 'docs-support', label: isLaos ? 'Docs & Support' : 'Tài liệu & Hỗ trợ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero-section');
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        setIsSticky(heroBottom < 60);
      }

      // Track active section based on scroll position
      const scrollPos = window.scrollY + 120;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveTab(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveTab(id);
    }
  };

  return (
    <div
      className={`w-full z-40 bg-white border-b border-slate-200 transition-all duration-200 ${
        isSticky
          ? 'sticky top-0 shadow-md backdrop-blur-md bg-white/95'
          : 'relative'
      }`}
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-14">
          
          {/* Scrollable Nav Tabs */}
          <nav className="flex items-center space-x-1 sm:space-x-4 overflow-x-auto no-scrollbar py-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <VIDCAnchor
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-md whitespace-nowrap transition-colors duration-150 ${
                    isActive
                      ? 'text-[var(--vidc-color-brand-red)] bg-red-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </VIDCAnchor>
              );
            })}
          </nav>

          {/* Right Action Button (Shown when sticky or on desktop) */}
          <div className="hidden md:flex items-center shrink-0 ml-4">
            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer"
            >
              <span>{isLaos ? 'Get Advice' : 'Đăng Ký Tư Vấn'}</span>
              <ArrowRight className="w-4 h-4" />
            </VIDCNativeButton>
          </div>

        </div>
      </div>
    </div>
  );
};
