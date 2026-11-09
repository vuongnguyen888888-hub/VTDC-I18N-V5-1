import React, { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface InterconnectionStickyNavProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
}

export const InterconnectionStickyNav: React.FC<InterconnectionStickyNavProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const isLaos = currentMarket?.code !== 'vn';

  const navItems = [
    { id: 'overview', label: isLaos ? 'Overview' : 'Tổng quan' },
    { id: 'pricing', label: isLaos ? 'Pricing' : 'Bảng giá' },
    { id: 'features', label: isLaos ? 'Features' : 'Tính năng' },
    { id: 'benefits', label: isLaos ? 'Benefits' : 'Lợi ích' },
    { id: 'use-cases', label: isLaos ? 'Applications' : 'Ứng dụng' },
    { id: 'faq', label: isLaos ? 'FAQ' : 'Hỏi đáp' },
    { id: 'docs-support', label: isLaos ? 'Docs & Support' : 'Tài liệu & Hỗ trợ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      setIsScrolled(window.scrollY > 400);

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
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
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 130;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <div 
      className={`sticky top-[120px] z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200 ${
        isScrolled ? 'shadow-md py-2.5' : 'py-3'
      }`}
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        
        {/* Navigation items */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <VIDCAnchor
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-red-50 text-[var(--vidc-color-brand-red)] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </VIDCAnchor>
            );
          })}
        </div>

        {/* Quick CTA on sticky bar */}
        <div className="hidden md:flex items-center shrink-0">
          <VIDCNativeButton
            type="button"
            onClick={onOpenConsult}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d4002d)] transition-colors shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{isLaos ? 'Consult Now' : 'Tư vấn ngay'}</span>
          </VIDCNativeButton>
        </div>

      </div>
    </div>
  );
};
