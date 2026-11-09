import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Building2, 
  Leaf, 
  HeartHandshake, 
  Server, 
  Users, 
  Newspaper, 
  Award,
  PhoneCall,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export type AboutPageId = 'overview' | 'esg' | 'csr' | 'datacenters' | 'careers' | 'press' | 'certifications' | 'contact';

interface AboutSubNavProps {
  activePage: AboutPageId;
  onNavigate?: (path: string) => void;
  currentMarketPath?: string;
}

export const aboutNavItems: { id: AboutPageId; path: string; label: string; icon: React.ElementType }[] = [
  { 
    id: 'overview', 
    path: '/about/', 
    label: 'Tổng Quan', 
    icon: Building2 
  },
  { 
    id: 'datacenters', 
    path: '/about/data-centers/', 
    label: 'Mạng Lưới DC', 
    icon: Server
  },
  { 
    id: 'certifications', 
    path: '/about/certifications/', 
    label: 'Chứng Chỉ & Giải Thưởng', 
    icon: Award 
  },
  { 
    id: 'esg', 
    path: '/about/esg/', 
    label: 'ESG', 
    icon: Leaf
  },
  { 
    id: 'csr', 
    path: '/about/csr/', 
    label: 'Vì Cộng Đồng', 
    icon: HeartHandshake 
  },
  { 
    id: 'press', 
    path: '/about/press/', 
    label: 'Thông Cáo Báo Chí', 
    icon: Newspaper 
  },
  { 
    id: 'careers', 
    path: '/about/careers/', 
    label: 'Cơ Hội Nghề Nghiệp', 
    icon: Users
  },
  { 
    id: 'contact', 
    path: '/about/contact/', 
    label: 'Liên Hệ', 
    icon: PhoneCall
  },
];

export const AboutSubNav: React.FC<AboutSubNavProps> = ({
  activePage,
  onNavigate,
  currentMarketPath = ''
}) => {
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const localizedNavItems = aboutNavItems.map(item => {
    let label = item.label;
    if (isNonVn) {
      if (item.id === 'overview') label = 'Overview';
      else if (item.id === 'datacenters') label = 'DC Network';
      else if (item.id === 'certifications') label = 'Certs & Awards';
      else if (item.id === 'esg') label = 'ESG & Green';
      else if (item.id === 'csr') label = 'CSR Community';
      else if (item.id === 'press') label = 'Press Releases';
      else if (item.id === 'careers') label = 'Careers';
      else if (item.id === 'contact') label = 'Contact Us';
    }
    return { ...item, label };
  });

  const getFullPath = (p: string) => {
    if (!currentMarketPath || currentMarketPath === '/') return p;
    return `${currentMarketPath}${p.startsWith('/') ? p.slice(1) : p}`;
  };

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

  // Handle sticky scroll state
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTarget = () => {
    requestAnimationFrame(() => {
      // Scroll viewport to sub-nav position right below the Hero to immediately display section 1
      const heroElem = document.getElementById('about-hero-section');
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const stickyHeaderOffset = isMobile ? 64 : 112;

      if (heroElem) {
        const heroRect = heroElem.getBoundingClientRect();
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
        const heroBottomY = currentScrollY + heroRect.bottom;
        const targetY = heroBottomY - stickyHeaderOffset;

        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: 'smooth'
        });
      }
    });
  };

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path);
    } else {
      router.push(path);
    }
    // Smoothly scroll to the first section
    scrollToTarget();
  };

  const currentItem = localizedNavItems.find(item => item.id === activePage) || localizedNavItems[0];

  return (
    <nav
      ref={navRef}
      id="about-sticky-subnav"
      className={`vidc-vcs-section-nav ${isScrolled ? 'vidc-vcs-section-nav--scrolled' : ''} -mt-6 sm:-mt-8 mb-4 relative z-30`}
      data-component="about-section-navigation"
      aria-label="Điều hướng chuyên mục Giới thiệu Viettel IDC"
    >
      <div className="vidc-container">
        {/* Mobile Dropdown Card Style (AWS/Viettel Cloud Server Pattern) */}
        <div className="md:hidden pointer-events-auto">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-900/10 overflow-hidden transition-all duration-200">
            {/* Header Trigger */}
            <VIDCNativeButton
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full px-5 py-3.5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vidc-color-brand-red)]"
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[var(--vidc-color-text-brand)] bg-[var(--vidc-color-background-brand-subtle)] px-3 py-1 rounded-full border border-[var(--vidc-color-border-brand-subtle)] flex items-center gap-1.5 shadow-2xs">
                  {React.createElement(currentItem.icon, { className: "w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" })}
                  {currentItem.label}
                </span>
              </div>
              <div className="p-1.5 rounded-lg text-[var(--vidc-color-text-secondary)] hover:text-[var(--vidc-color-text-primary)] hover:bg-[var(--vidc-color-background-subtle)] transition-colors">
                {mobileMenuOpen ? (
                  <ChevronUp className="w-5 h-5 text-[var(--vidc-color-text-primary)]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[var(--vidc-color-text-primary)]" />
                )}
              </div>
            </VIDCNativeButton>

            {/* Expandable Dropdown List */}
            {mobileMenuOpen && (
              <div className="border-t border-[var(--vidc-color-border-default)] px-2 py-2 max-h-[60vh] overflow-y-auto space-y-1 bg-[var(--vidc-color-background-elevated)] divide-y divide-[var(--vidc-color-border-default)]">
                {localizedNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activePage === item.id;
                  return (
                    <VIDCAnchor
                      key={item.id}
                      href={getFullPath(item.path)}
                      aria-current={isActive ? 'location' : undefined}
                      onClick={(e) => handleLinkClick(e, item.path)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all font-medium cursor-pointer ${
                        isActive
                          ? 'bg-[var(--vidc-color-background-canvas)] font-extrabold text-[var(--vidc-color-text-brand)] shadow-sm border border-[var(--vidc-color-border-brand-subtle)] pl-5'
                          : 'text-[var(--vidc-color-text-secondary)] hover:text-[var(--vidc-color-text-primary)] hover:bg-[var(--vidc-color-background-canvas)]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-[var(--vidc-color-brand-red)]' : 'text-[var(--vidc-color-text-muted)]'}`} />
                        <span>{item.label}</span>
                      </div>
                    </VIDCAnchor>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation Layout - Floating Glass Card (Viettel Cloud Server Pattern) */}
        <div className="hidden md:block">
          <div className="vidc-vcs-section-nav__card justify-center">
            <div className="vidc-vcs-section-nav__left w-full justify-center">
              <ul className="vidc-vcs-section-nav__list justify-center flex-wrap gap-1">
                {localizedNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activePage === item.id;
                  return (
                    <li key={item.id} className="vidc-vcs-section-nav__item">
                      <VIDCAnchor
                        href={getFullPath(item.path)}
                        aria-current={isActive ? 'location' : undefined}
                        onClick={(e) => handleLinkClick(e, item.path)}
                        className={`vidc-vcs-section-nav__link cursor-pointer flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                          isActive 
                            ? 'text-[var(--vidc-color-text-brand)] font-bold bg-[var(--vidc-color-background-brand-subtle)] border border-[var(--vidc-color-border-brand-subtle)] shadow-2xs' 
                            : 'text-[var(--vidc-color-text-secondary)] hover:text-[var(--vidc-color-text-brand)] hover:bg-[var(--vidc-color-background-brand-subtle)]'
                        }`}
                      >
                        <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-[var(--vidc-color-brand-red)]' : 'text-[var(--vidc-color-text-muted)]'}`} />
                        <span>{item.label}</span>
                      </VIDCAnchor>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
