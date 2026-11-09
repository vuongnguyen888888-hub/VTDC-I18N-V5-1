import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CsmpStickyNavProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
}

const navItems = [
  { id: 'overview', label: 'Tổng quan' },
  { id: 'pricing', label: 'Bảng giá' },
  { id: 'features', label: 'Năng lực' },
  { id: 'benefits', label: 'Lợi ích' },
  { id: 'use-cases', label: 'Đối tượng' },
  { id: 'faq', label: 'Hỏi đáp' },
  { id: 'docs-support', label: 'Tài liệu & Hỗ trợ' },
];

export const CsmpStickyNav: React.FC<CsmpStickyNavProps> = ({ onOpenConsult }) => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('csmp-hero');
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        setIsSticky(heroBottom < 60);
      }

      // Check current section
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <div
      id="csmp-sticky-navigation"
      className={`w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-30 transition-all duration-200 ${
        isSticky ? 'sticky top-0 shadow-sm' : 'relative'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <nav className="flex items-center space-x-1 sm:space-x-4 overflow-x-auto no-scrollbar py-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <VIDCNativeButton
                  key={item.id}
                  id={`csmp-nav-link-${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-2 text-xs sm:text-sm font-medium whitespace-nowrap rounded-md transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[color:var(--vidc-color-brand-red)] bg-red-50/80 font-semibold'
                      : 'text-gray-600 hover:text-[color:var(--vidc-color-brand-red)] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </VIDCNativeButton>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center shrink-0 pl-4">
            <VIDCNativeButton
              id="csmp-sticky-nav-cta-btn"
              onClick={onOpenConsult}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[color:var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002b)] text-white text-xs font-semibold transition-all cursor-pointer shadow-sm"
            >
              <span>Nhận Tư Vấn</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </VIDCNativeButton>
          </div>
        </div>
      </div>
    </div>
  );
};
