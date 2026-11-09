import React, { useState, useEffect } from 'react';
import { SOLUTION_CATEGORIES, SolutionItem } from '../../data/sitemapData';
import { getIndustryI18n, getCommonUII18n } from '../../data/multilingualServiceData';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Building2, 
  Landmark, 
  ShoppingBag, 
  Stethoscope, 
  GraduationCap, 
  ArrowRight, 
  Pause, 
  Play, 
  Sparkles, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface IndustriesAccordionSectionProps {
  currentMarket: SEAMarket;
}

// Enterprise Architectural & Datacenter Images for each industry domain
const INDUSTRY_IMAGES: Record<string, string> = {
  'finance-banking': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  'fintech-banking': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  'ecommerce-fintech': 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
  'retail-ecommerce': 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
  'healthcare': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
  'healthtech': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
  'education-edtech': 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
  'edtech': 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
  'government': 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
};

export const IndustriesAccordionSection: React.FC<IndustriesAccordionSectionProps> = ({ currentMarket }) => {
  const { t, currentLanguage, getFullPath } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const isLaos = isNonVn;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Mobile Touch Swipe States
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 40;

  const ui = getCommonUII18n(currentLanguage);

  // Extract Industry Solutions
  const industryCategory = SOLUTION_CATEGORIES.find(cat => cat.id === 'industries');
  const rawIndustryItems: SolutionItem[] = industryCategory ? industryCategory.items : [];

  // Localize industry items
  const industryItems = rawIndustryItems.map(item => {
    const indI18n = getIndustryI18n(item.id, currentLanguage);
    if (indI18n) {
      return {
        ...item,
        title: indI18n.title || item.title,
        description: indI18n.description || item.description
      };
    }
    return item;
  });

  // Icon Resolver
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'finance-banking':
      case 'fintech-banking':
        return Landmark;
      case 'ecommerce-fintech':
      case 'retail-ecommerce':
        return ShoppingBag;
      case 'healthcare':
      case 'healthtech':
        return Stethoscope;
      case 'education-edtech':
      case 'edtech':
        return GraduationCap;
      case 'government':
        return Building2;
      default:
        return Building2;
    }
  };

  // 6-second auto-rotate timer
  useEffect(() => {
    if (isPaused || industryItems.length === 0) return;

    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % industryItems.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, industryItems.length]);

  // Touch Swipe Handlers for Mobile & Tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveIndex(prev => (prev + 1) % industryItems.length);
    } else if (isRightSwipe) {
      setActiveIndex(prev => (prev - 1 + industryItems.length) % industryItems.length);
    }
  };

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + industryItems.length) % industryItems.length);
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % industryItems.length);
  };

  return (
    <section 
      className="bg-gradient-to-b from-[var(--vidc-legacy-hex-7a0016)] via-[var(--vidc-legacy-hex-330007)] to-[var(--vidc-legacy-hex-0d0103)] text-white py-16 md:py-24 border-b border-red-950/80 relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Visual & Atmosphere: Red Brand Glow & Radial Tech Grid Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-red-600/25 via-[var(--vidc-legacy-hex-8a001a)]/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="vidc-container space-y-10 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-3.5 max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm">
            <span className="text-xs font-black uppercase tracking-wider text-white">
              {ui.multiIndustryBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-center leading-tight whitespace-normal lg:whitespace-nowrap">
            {t.industriesSection.title}
          </h2>
          <p className="text-sm md:text-base text-slate-200/90 font-medium leading-relaxed text-center whitespace-normal lg:whitespace-nowrap">
            {t.industriesSection.subtitle}
          </p>
        </div>

        {/* 2. DESKTOP DESIGN (>= 1024px): 3D Coverflow Stacked Effect */}
        <div className="hidden lg:flex relative w-full max-w-7xl mx-auto h-[480px] items-center justify-center my-6 perspective-[1200px]">
          {industryItems.map((item, idx) => {
            const IconComp = getIndustryIcon(item.id);
            const total = industryItems.length;

            // Calculate wrapped circular offset relative to activeIndex
            let diff = idx - activeIndex;
            if (diff < -Math.floor(total / 2)) diff += total;
            if (diff > Math.floor(total / 2)) diff -= total;

            const isActive = diff === 0;
            const bgImage = INDUSTRY_IMAGES[item.id] || INDUSTRY_IMAGES['government'];

            // Calculate 3D Coverflow positioning for enlarged cards
            let transformStyle = '';
            let opacity = 0;
            let filterStyle = 'brightness(100%)';
            let zIndex = 0;

            if (diff === 0) {
              transformStyle = 'translateX(0px) scale(1) translateZ(0px)';
              opacity = 1;
              filterStyle = 'brightness(100%)';
              zIndex = 30;
            } else if (diff === -1) {
              transformStyle = 'translateX(-220px) scale(0.88) translateZ(-50px)';
              opacity = 1;
              filterStyle = 'brightness(55%)';
              zIndex = 20;
            } else if (diff === 1) {
              transformStyle = 'translateX(220px) scale(0.88) translateZ(-50px)';
              opacity = 1;
              filterStyle = 'brightness(55%)';
              zIndex = 20;
            } else if (diff === -2) {
              transformStyle = 'translateX(-380px) scale(0.75) translateZ(-100px)';
              opacity = 1;
              filterStyle = 'brightness(35%)';
              zIndex = 10;
            } else if (diff === 2) {
              transformStyle = 'translateX(380px) scale(0.75) translateZ(-100px)';
              opacity = 1;
              filterStyle = 'brightness(35%)';
              zIndex = 10;
            } else {
              transformStyle = 'translateX(0px) scale(0.5) translateZ(-200px)';
              opacity = 0;
              filterStyle = 'brightness(0%)';
              zIndex = 0;
            }

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                style={{
                  transform: transformStyle,
                  opacity,
                  filter: filterStyle,
                  zIndex,
                  transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), filter 0.6s ease, opacity 0.6s ease, box-shadow 0.6s ease, border-color 0.6s ease',
                }}
                className={`absolute w-[840px] xl:w-[920px] h-[450px] rounded-3xl overflow-hidden cursor-pointer flex flex-col justify-between p-8 sm:p-10 border bg-[var(--vidc-color-background-inverse)] ${
                  isActive
                    ? 'border-slate-700/80 shadow-[0_25px_60px_rgba(197,0,42,0.45)]'
                    : 'border-slate-800/80 shadow-2xl hover:border-slate-700'
                }`}
              >
                {/* Background Image */}
                <img alt={item.title} src={bgImage} className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-transform duration-1000 scale-100 group-hover:scale-105" />

                {/* Bottom-to-top dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--vidc-color-background-inverse)] via-[var(--vidc-color-background-inverse)]/75 to-transparent pointer-events-none" />

                {/* Title & Description */}
                <div className="relative z-10 space-y-3.5 mt-auto mb-3 max-w-2xl">
                  {/* Solution Title */}
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                    {item.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-sm lg:text-base text-slate-200/90 font-normal leading-relaxed line-clamp-3 drop-shadow-xs">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Red Pill CTA Button */}
                <div className="relative z-10 pt-1 flex items-center justify-start">
                  <VIDCAnchor
                    href={getFullPath(item.path)}
                    className="px-4 py-1.5 rounded-full bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-red-hover)] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-[var(--vidc-color-brand-red)]/30 hover:shadow-[var(--vidc-color-brand-red)]/50 hover:scale-105 cursor-pointer shrink-0"
                  >
                    <span>{isLaos ? 'Explore Now' : 'Tìm hiểu ngay'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </VIDCAnchor>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Navigation Bar below cards */}
        <div className="hidden lg:flex items-center justify-center gap-3 pt-3">
          {/* Auto-play toggle button */}
          <VIDCNativeButton
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/60 border border-red-700/60 hover:bg-red-900/80 hover:border-red-500 text-xs text-red-100 transition-all cursor-pointer shadow-md backdrop-blur-md active:scale-95"
          >
            {isPaused ? <Play className="w-3.5 h-3.5 text-red-400" /> : <Pause className="w-3.5 h-3.5 text-red-300" />}
            <span className="font-bold">{isPaused ? (isLaos ? 'Resume' : 'Tiếp tục') : (isLaos ? 'Pause' : 'Tạm dừng')}</span>
          </VIDCNativeButton>

          {/* Prev Button */}
          <VIDCNativeButton
            onClick={handlePrev}
            aria-label="Previous industry"
            className="p-2.5 rounded-full bg-red-950/60 border border-red-700/60 hover:bg-red-600 hover:border-red-500 text-red-200 hover:text-white transition-all cursor-pointer shadow-md backdrop-blur-md active:scale-95 hover:shadow-lg hover:shadow-red-600/30"
          >
            <ChevronLeft className="w-4 h-4" />
          </VIDCNativeButton>

          {/* Next Button */}
          <VIDCNativeButton
            onClick={handleNext}
            aria-label="Next industry"
            className="p-2.5 rounded-full bg-red-950/60 border border-red-700/60 hover:bg-red-600 hover:border-red-500 text-red-200 hover:text-white transition-all cursor-pointer shadow-md backdrop-blur-md active:scale-95 hover:shadow-lg hover:shadow-red-600/30"
          >
            <ChevronRight className="w-4 h-4" />
          </VIDCNativeButton>
        </div>

        {/* 3. MOBILE & TABLET DESIGN (< 1024px): Touch Swipe Full-Width Single Card */}
        <div className="block lg:hidden space-y-6">
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="w-full max-w-lg mx-auto"
          >
            {industryItems.map((item, idx) => {
              if (idx !== activeIndex) return null;

              const bgImage = INDUSTRY_IMAGES[item.id] || INDUSTRY_IMAGES['government'];

              return (
                <div
                  key={item.id}
                  className="relative rounded-2xl overflow-hidden border border-red-900/60 bg-[var(--vidc-legacy-hex-120002)] shadow-[0_20px_50px_rgba(197,0,42,0.35)] min-h-[420px] flex flex-col justify-between p-6 sm:p-8 space-y-4"
                >
                  {/* Background Image & Multi-layer Dark Gradient */}
                  <img alt={item.title} src={bgImage} className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--vidc-legacy-hex-120002)] via-[var(--vidc-legacy-hex-120002)]/80 to-transparent pointer-events-none" />

                  {/* Slide Indicator Number */}
                  <div className="relative z-10 flex justify-end">
                    <span className="text-xs text-red-200/80 font-medium">
                      {idx + 1} / {industryItems.length}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="relative z-10 space-y-3 mt-auto mb-1">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-200/90 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Mobile Red Pill CTA Button */}
                  <div className="relative z-10 pt-2 border-t border-red-900/60">
                    <VIDCAnchor
                      href={getFullPath(item.path)}
                      className="inline-flex min-h-[38px] py-2 px-4 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs font-bold items-center justify-center gap-1.5 transition-all shadow-md shadow-red-600/40 cursor-pointer active:scale-95"
                    >
                      <span>{isLaos ? 'Explore Now' : 'Tìm hiểu ngay'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </VIDCAnchor>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Dot Indicators & Navigation */}
          <div className="flex items-center justify-between max-w-lg mx-auto px-2">
            <VIDCNativeButton
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-red-950/70 border border-red-700/60 text-red-200 hover:text-white hover:bg-red-600 cursor-pointer active:scale-95 shadow-md"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-4 h-4" />
            </VIDCNativeButton>

            <div className="flex items-center gap-2">
              {industryItems.map((_, dotIdx) => (
                <VIDCNativeButton
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`transition-all duration-300 cursor-pointer rounded-full ${
                    activeIndex === dotIdx
                      ? 'w-6 h-2 bg-red-500 shadow-md shadow-red-500/50'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <VIDCNativeButton
              onClick={handleNext}
              className="p-2.5 rounded-full bg-red-950/70 border border-red-700/60 text-red-200 hover:text-white hover:bg-red-600 cursor-pointer active:scale-95 shadow-md"
              aria-label="Next card"
            >
              <ChevronRight className="w-4 h-4" />
            </VIDCNativeButton>
          </div>
        </div>
      </div>
    </section>
  );
};
