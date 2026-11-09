import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface ThreatIntelligenceStickyNavProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
}

export const ThreatIntelligenceStickyNav: React.FC<ThreatIntelligenceStickyNavProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const isLaos = currentMarket?.code !== 'vn';

  const navItems = [
    { id: 'overview', label: isLaos ? 'Overview' : 'Tổng quan' },
    { id: 'pricing', label: isLaos ? 'Service Plans' : 'Gói dịch vụ' },
    { id: 'features', label: isLaos ? 'Features' : 'Tính năng' },
    { id: 'benefits', label: isLaos ? 'Benefits' : 'Lợi ích' },
    { id: 'use-cases', label: isLaos ? 'Use Cases' : 'Đối tượng' },
    { id: 'faq', label: isLaos ? 'FAQ' : 'Hỏi đáp' },
    { id: 'docs-support', label: isLaos ? 'Docs & Support' : 'Tài liệu & Hỗ trợ' },
  ];

  const t = {
    register: isLaos ? 'Request Consultation' : 'Đăng Ký Tư Vấn',
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
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
      const offsetTop = el.offsetTop - 120;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <div 
      id="threat-intelligence-sticky-nav" 
      className="sticky top-[72px] z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all duration-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-14">
        
        {/* Navigation Links with horizontal overflow for small screens */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <VIDCAnchor
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  isActive
                    ? 'text-[var(--vidc-color-brand-red)] bg-red-50 font-bold'
                    : 'text-slate-600 hover:text-[var(--vidc-legacy-hex-222225)] hover:bg-slate-100'
                }`}
              >
                {item.label}
              </VIDCAnchor>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center shrink-0 pl-4">
          <VIDCNativeButton
            type="button"
            onClick={onOpenConsult}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            <span>{t.register}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </VIDCNativeButton>
        </div>

      </div>
    </div>
  );
};
