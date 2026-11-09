import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CloudObjectStorageStickyNavProps {
  currentMarket?: SEAMarket;
  onOpenQuote: () => void;
}

export const CloudObjectStorageStickyNav: React.FC<CloudObjectStorageStickyNavProps> = ({ 
  currentMarket,
  onOpenQuote 
}) => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const isLaos = currentMarket?.code === 'la';

  const navItems = [
    { id: 'overview', label: isLaos ? 'Overview' : 'Tổng quan' },
    { id: 'pricing', label: isLaos ? 'Pricing' : 'Báo giá' },
    { id: 'features', label: isLaos ? 'Features' : 'Tính năng' },
    { id: 'benefits', label: isLaos ? 'Benefits' : 'Lợi ích' },
    { id: 'use-cases', label: isLaos ? 'Use Cases' : 'Ứng dụng' },
    { id: 'faq', label: isLaos ? 'FAQ' : 'Hỏi đáp' },
    { id: 'docs-support', label: isLaos ? 'Docs & Support' : 'Tài liệu & Hỗ trợ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 130;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="sticky top-[120px] z-40 w-full bg-white/95 backdrop-blur-md border-b border-[var(--vidc-legacy-hex-e8eaed)] shadow-sm transition-all">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-14">
          
          {/* Scrollable Nav Items */}
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <VIDCAnchor
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap ${
                    isActive
                      ? 'text-[var(--vidc-color-brand-red)] bg-red-50 font-bold border-b-2 border-[var(--vidc-color-brand-red)] rounded-b-none'
                      : 'text-slate-600 hover:text-[var(--vidc-legacy-hex-222225)] hover:bg-slate-100/80'
                  }`}
                >
                  {item.label}
                </VIDCAnchor>
              );
            })}
          </nav>

          {/* Quick CTA on Sticky Bar */}
          <div className="hidden md:flex items-center gap-3 shrink-0 pl-4 border-l border-slate-200">
            <VIDCNativeButton
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002b)] text-white text-xs font-bold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] cursor-pointer"
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
