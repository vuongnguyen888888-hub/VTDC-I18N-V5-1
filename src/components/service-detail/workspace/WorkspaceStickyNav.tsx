import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface WorkspaceStickyNavProps {
  currentMarket?: SEAMarket;
  onOpenQuote?: () => void;
}

export const WorkspaceStickyNav: React.FC<WorkspaceStickyNavProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const isLaos = currentMarket?.code !== 'vn';

  const navItems = [
    { id: 'overview', label: isLaos ? 'Overview' : 'Tổng quan' },
    { id: 'pricing', label: isLaos ? 'Pricing' : 'Bảng giá' },
    { id: 'features', label: isLaos ? 'Features & Specs' : 'Tính năng' },
    { id: 'benefits', label: isLaos ? 'Benefits' : 'Lợi ích' },
    { id: 'use-cases', label: isLaos ? 'Applications' : 'Ứng dụng' },
    { id: 'faq', label: isLaos ? 'FAQ' : 'Hỏi đáp' },
    { id: 'docs-support', label: isLaos ? 'Docs & Support' : 'Tài liệu & Hỗ trợ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const elem = document.getElementById(item.id);
        if (elem && elem.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = elem.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <nav 
      aria-label="Section Navigation" 
      className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-14">
        
        {/* Navigation Item Tabs */}
        <div className="flex items-center space-x-1 sm:space-x-3 overflow-x-auto no-scrollbar py-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <VIDCAnchor
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`text-xs sm:text-sm font-bold whitespace-nowrap px-3 py-1.5 rounded-lg transition-all ${
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

        {/* Quick Action Button */}
        {onOpenQuote && (
          <div className="hidden md:flex items-center pl-4 shrink-0">
            <VIDCNativeButton
              type="button"
              onClick={onOpenQuote}
              className="px-4 py-1.5 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-c9002b)] active:bg-[var(--vidc-legacy-hex-990022)] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>{isLaos ? 'Request Quote' : 'Tư vấn báo giá'}</span>
            </VIDCNativeButton>
          </div>
        )}

      </div>
    </nav>
  );
};
