import React, { useRef } from 'react';
import { SOLUTION_CATEGORIES, SolutionItem } from '../../data/sitemapData';
import { getSolutionI18n } from '../../data/multilingualServiceData';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Cpu, ShieldCheck, Server, Terminal, Lock, Globe, Cloud, Zap, Laptop, CheckCircle2 } from 'lucide-react';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface SolutionsCarouselSectionProps {
  currentMarket: SEAMarket;
}

// Red Glossy Wave/Sphere background matching the reference 3D liquid red wallpaper with vibrant tones & smooth animated gradient motion
const RedWaveBackground: React.FC<{ index: number }> = ({ index }) => {
  const configs = [
    {
      cx1: "30%", cy1: "65%", r1: "80%",
      cx2: "85%", cy2: "25%", r2: "70%",
      rimPath: "M-20,160 Q120,40 280,180 T420,80",
      animDelay1: "0s", animDelay2: "-3s",
    },
    {
      cx1: "20%", cy1: "35%", r1: "75%",
      cx2: "75%", cy2: "75%", r2: "75%",
      rimPath: "M-20,60 Q160,200 320,50 T440,190",
      animDelay1: "-2s", animDelay2: "-5s",
    },
    {
      cx1: "70%", cy1: "55%", r1: "80%",
      cx2: "25%", cy2: "25%", r2: "65%",
      rimPath: "M-20,200 Q180,20 380,150 T440,60",
      animDelay1: "-4s", animDelay2: "-1s",
    },
  ];

  const cfg = configs[index % configs.length];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl sm:rounded-2xl group/wave">
      {/* CSS Animation Keyframes for Smooth Motion & Animated Gradient */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes liquidFloat1 {
          0%, 100% { transform: translate(-50%, -50%) scale(1) translate(0px, 0px); opacity: 0.9; }
          50% { transform: translate(-50%, -50%) scale(1.15) translate(15px, -12px); opacity: 1; }
        }
        @keyframes liquidFloat2 {
          0%, 100% { transform: translate(-50%, -50%) scale(1) translate(0px, 0px); opacity: 0.85; }
          50% { transform: translate(-50%, -50%) scale(1.2) translate(-18px, 14px); opacity: 0.95; }
        }
        @keyframes waveShift {
          0%, 100% { transform: scaleY(1) translateY(0px); }
          50% { transform: scaleY(1.08) translateY(-6px); }
        }
      `}</style>

      {/* 1. Base Animated Crimson Red Canvas (Brighter & Flowing Gradient) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[var(--vidc-legacy-hex-e6002e)] via-[var(--vidc-legacy-hex-b80022)] to-[var(--vidc-legacy-hex-590012)]"
        style={{
          backgroundSize: '180% 180%',
          animation: 'gradientShift 8s ease infinite',
        }}
      />

      {/* 2. Primary Glossy 3D Sphere Glow (Moving Light) */}
      <div 
        className="absolute rounded-full mix-blend-screen blur-xl transition-all duration-700"
        style={{
          left: cfg.cx1,
          top: cfg.cy1,
          width: cfg.r1,
          height: cfg.r1,
          background: 'radial-gradient(circle, rgba(255,120,145,0.85) 0%, rgba(225,10,48,0.55) 50%, rgba(100,0,20,0) 80%)',
          animation: `liquidFloat1 7s ease-in-out infinite`,
          animationDelay: cfg.animDelay1,
        }}
      />

      {/* 3. Secondary Curved Liquid Highlight Glow (Moving Light) */}
      <div 
        className="absolute rounded-full mix-blend-screen blur-2xl transition-all duration-700"
        style={{
          left: cfg.cx2,
          top: cfg.cy2,
          width: cfg.r2,
          height: cfg.r2,
          background: 'radial-gradient(circle, rgba(255,160,180,0.8) 0%, rgba(230,20,60,0.5) 45%, rgba(80,0,16,0) 75%)',
          animation: `liquidFloat2 9s ease-in-out infinite`,
          animationDelay: cfg.animDelay2,
        }}
      />

      {/* 4. Glossy Specular Edge / Crest Lines for 3D Satin Effect with Motion */}
      <svg
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-1000"
        style={{
          animation: `waveShift 6s ease-in-out infinite`,
          animationDelay: cfg.animDelay1,
        }}
        viewBox="0 0 400 250"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Specular Rim Light Gradient */}
          <linearGradient id={`specular-rim-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#FFA0B4" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#E6002A" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#A0001B" stopOpacity="0" />
          </linearGradient>

          {/* Deep Curved Shadow Gradient */}
          <linearGradient id={`liquid-fill-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6002A" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#900018" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#3B000B" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* 3D Wave Curve Fill */}
        <path
          d={`${cfg.rimPath} L420,270 L-20,270 Z`}
          fill={`url(#liquid-fill-${index})`}
          className="mix-blend-screen"
        />

        {/* Glossy Specular Edge Highlight Stroke */}
        <path
          d={cfg.rimPath}
          fill="none"
          stroke={`url(#specular-rim-${index})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          className="filter drop-shadow-[0_0_8px_rgba(255,180,200,0.7)]"
        />
      </svg>

      {/* 5. Overall Smooth Satin Sheen Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/15 pointer-events-none" />
    </div>
  );
};

export const SolutionsCarouselSection: React.FC<SolutionsCarouselSectionProps> = ({ currentMarket }) => {
  const { t, currentLanguage, getFullPath } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const isLaos = isNonVn;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Extract solutions from sitemapData (Groups 1, 2, 3)
  const featuredSolutions: SolutionItem[] = SOLUTION_CATEGORIES
    .filter(cat => cat.id !== 'industries')
    .flatMap(cat => cat.items);

  // Translate featuredSolutions using multilingual getSolutionI18n
  const localizedFeaturedSolutions = featuredSolutions.map(item => {
    const sol = getSolutionI18n(item.id, currentLanguage);
    if (sol) {
      return {
        ...item,
        title: sol.title,
        description: sol.description,
        highlights: sol.highlights,
        ctaText: sol.ctaText || 'Consult Now'
      };
    }
    return item;
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Custom visual metadata & banner graphics mapping for all 11 solutions
  const getBannerConfig = (id: string, index: number) => {
    // Red gradient colors from bright red to deep crimson/dark red
    const redGradients = [
      'from-[var(--vidc-legacy-hex-ff2a4b)] via-[var(--vidc-color-brand-red)] to-[var(--vidc-legacy-hex-4d000e)]',
      'from-red-600 via-[var(--vidc-color-brand-reference-hover)] to-[var(--vidc-legacy-hex-3b000b)]',
      'from-[var(--vidc-legacy-hex-e50914)] via-[var(--vidc-legacy-hex-9e0020)] to-[var(--vidc-legacy-hex-300008)]',
      'from-rose-600 via-[var(--vidc-color-brand-red)] to-[var(--vidc-legacy-hex-42000c)]',
    ];
    const defaultRedGradient = redGradients[index % redGradients.length];

    switch (id) {
      case 'backup-disaster-recovery':
        return {
          categoryLabel: isLaos ? 'INFRASTRUCTURE & CLOUD' : 'HẠ TẦNG & CLOUD',
          meta: '25 JUL • BACKUP & DRAAS • 3min',
          bgGradient: 'from-[var(--vidc-legacy-hex-ff2a4b)] via-[var(--vidc-color-brand-red)] to-[var(--vidc-legacy-hex-4d000e)]',
          badge: 'BAAS & DRAAS',
          hashtag: '#backup_dr',
          icon: ShieldCheck,
        };

      case 'cloud-migration':
        return {
          categoryLabel: isLaos ? 'INFRASTRUCTURE & CLOUD' : 'HẠ TẦNG & CLOUD',
          meta: '18 JUL • CHUYỂN ĐỔI SỐ • 4min',
          bgGradient: 'from-red-600 via-[var(--vidc-legacy-hex-b00024)] to-[var(--vidc-legacy-hex-3b000b)]',
          badge: 'MIGRATION SERVICE',
          hashtag: '#zero_downtime',
          icon: Cloud,
        };

      case 'multi-az':
        return {
          categoryLabel: isLaos ? 'INFRASTRUCTURE & CLOUD' : 'HẠ TẦNG & CLOUD',
          meta: '15 JUL • ĐA VÙNG SẴN SÀNG • 3min',
          bgGradient: 'from-[var(--vidc-legacy-hex-e50914)] via-[var(--vidc-legacy-hex-9e0020)] to-[var(--vidc-legacy-hex-300008)]',
          badge: 'RATED 3 DC',
          hashtag: '#multi_az',
          icon: Server,
        };

      case 'iac-hub':
        return {
          categoryLabel: isLaos ? 'INFRASTRUCTURE & CLOUD' : 'HẠ TẦNG & CLOUD',
          meta: '10 JUL • IAC AUTOMATION • 3min',
          bgGradient: 'from-rose-600 via-[var(--vidc-color-brand-red)] to-[var(--vidc-legacy-hex-42000c)]',
          badge: 'TERRAFORM & ANSIBLE',
          hashtag: '#viettel_iac',
          icon: Terminal,
        };

      case 'container-kubernetes':
        return {
          categoryLabel: isLaos ? 'DEV, OPS & AI' : 'DEV, OPS & AI',
          meta: '05 JUL • KUBERNETES & CONTAINERS • 4min',
          bgGradient: 'from-[var(--vidc-legacy-hex-ff2a4b)] via-[var(--vidc-color-brand-red)] to-[var(--vidc-legacy-hex-4d000e)]',
          badge: 'vOKS / vDKS / vCR',
          hashtag: '#cloud_native',
          icon: Cpu,
        };

      case 'devsecops':
        return {
          categoryLabel: isLaos ? 'DEV, OPS & AI' : 'DEV, OPS & AI',
          meta: '28 JUN • SHIFT-LEFT SECURITY • 3min',
          bgGradient: 'from-red-600 via-[var(--vidc-legacy-hex-b00024)] to-[var(--vidc-legacy-hex-3b000b)]',
          badge: 'CI/CD SECURITY',
          hashtag: '#devsecops',
          icon: Lock,
        };

      case 'monitoring-ai':
        return {
          categoryLabel: isLaos ? 'DEV, OPS & AI' : 'DEV, OPS & AI',
          meta: '22 JUN • APM & AI ANALYTICS • 3min',
          bgGradient: 'from-[var(--vidc-legacy-hex-e50914)] via-[var(--vidc-legacy-hex-9e0020)] to-[var(--vidc-legacy-hex-300008)]',
          badge: 'FULL-STACK APM',
          hashtag: '#ai_monitoring',
          icon: Sparkles,
        };

      case 'high-performance-cloud':
        return {
          categoryLabel: isLaos ? 'DEV, OPS & AI' : 'DEV, OPS & AI',
          meta: '18 JUN • AI & BIG DATA • 5min',
          bgGradient: 'from-rose-600 via-[var(--vidc-color-brand-red)] to-[var(--vidc-legacy-hex-42000c)]',
          badge: 'CLOUD GPU / NPU',
          hashtag: '#gpu_cluster',
          icon: Zap,
        };

      case 'cdn':
        return {
          categoryLabel: isLaos ? 'CONNECTIVITY & WORKSPACE' : 'KẾT NỐI & WORKSPACE',
          meta: '12 JUN • MEDIA & MULTI-CDN • 3min',
          bgGradient: 'from-[var(--vidc-legacy-hex-ff2a4b)] via-[var(--vidc-color-brand-red)] to-[var(--vidc-legacy-hex-4d000e)]',
          badge: 'vMCDN PLATFORM',
          hashtag: '#cdn_speed',
          icon: Globe,
        };

      case 'remote-workspace':
        return {
          categoryLabel: isLaos ? 'CONNECTIVITY & WORKSPACE' : 'KẾT NỐI & WORKSPACE',
          meta: '08 JUN • DIGITAL WORKSPACE • 4min',
          bgGradient: 'from-red-600 via-[var(--vidc-legacy-hex-b00024)] to-[var(--vidc-legacy-hex-3b000b)]',
          badge: 'CLOUD PC & M365',
          hashtag: '#hybrid_working',
          icon: Laptop,
        };

      case 'website-builder':
        return {
          categoryLabel: isLaos ? 'CONNECTIVITY & WORKSPACE' : 'KẾT NỐI & WORKSPACE',
          meta: '02 JUN • TRỌN GÓI WEBSITE • 3min',
          bgGradient: 'from-[var(--vidc-legacy-hex-e50914)] via-[var(--vidc-legacy-hex-9e0020)] to-[var(--vidc-legacy-hex-300008)]',
          badge: 'HOSTING & CWAF',
          hashtag: '#web_infrastructure',
          icon: Globe,
        };

      default:
        return {
          categoryLabel: isLaos ? 'ADVANCED SOLUTIONS' : 'GIẢI PHÁP CHUYÊN SÂU',
          meta: `15 JUN • ENTERPRISE SOLUTION • 3min`,
          bgGradient: defaultRedGradient,
          badge: 'ENTERPRISE',
          hashtag: `#viettelcloud`,
          icon: Sparkles,
        };
    }
  };

  return (
    <section className="bg-slate-50/50 py-16 md:py-24 border-b border-slate-200/80">
      <div className="vidc-container space-y-12">
        {/* Header */}
        <div className="space-y-3.5 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
            <span className="text-xs font-black uppercase tracking-wider text-red-700">
              {isLaos ? 'ENTERPRISE OPERATIONS OPTIMIZATION' : 'GIẢI PHÁP TỐI ƯU VẬN HÀNH DOANH NGHIỆP'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-center leading-tight whitespace-normal lg:whitespace-nowrap">
            {isLaos ? 'Specialized Solutions for Optimizing Enterprise Operations' : 'Giải pháp chuyên sâu giúp tối ưu vận hành Doanh nghiệp'}
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed text-center whitespace-normal lg:whitespace-nowrap">
            {isLaos ? 'Advanced digital infrastructure customized across 3 categories: Infrastructure & Cloud, Dev/Ops & AI, Connectivity & Workspace' : 'Thiết kế hạ tầng số chuyên sâu theo 3 nhóm dịch vụ: Hạ tầng & Cloud, Dev/Ops & AI, Kết nối & Workspace'}
          </p>
        </div>

        {/* Carousel / Card Track matching Hostinger layout */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-8 overflow-x-auto snap-x snap-mandatory pb-6 pt-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {localizedFeaturedSolutions.map((item, idx) => {
            const banner = getBannerConfig(item.id, idx);
            const IconComp = banner.icon;

            return (
              <div
                key={item.id}
                className="snap-start shrink-0 w-[300px] sm:w-[350px] md:w-[370px] bg-white rounded-2xl border border-slate-200/90 hover:border-[var(--vidc-color-brand-red)]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden group"
              >
                {/* 1. Top Banner Visual Area (All 4 Corners Rounded) */}
                <div className="relative w-full aspect-[16/8] p-4 sm:p-5 flex flex-col justify-between rounded-xl sm:rounded-2xl overflow-hidden shadow-xs">
                  {/* Custom Background Image for Cards */}
                  <img
                    src={
                      item.id === 'backup-disaster-recovery'
                        ? 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1790519726/data_ykb7vd.png'
                        : 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1790514372/1111111_fmucsv.png'
                    }
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-xl sm:rounded-2xl"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top Header inside Banner */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-red-700 text-[9.5px] font-extrabold uppercase tracking-wider border border-white/90 shadow-xs">
                      {banner.categoryLabel}
                    </span>
                    <IconComp className="w-4 h-4 text-white drop-shadow-md" />
                  </div>


                </div>

                {/* 2. Content Body Area */}
                <div className="pt-3.5 flex flex-col justify-between flex-1 space-y-3.5">
                  <div className="space-y-2">
                    {/* Title placed above description */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors line-clamp-1">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    {item.highlights && (
                      <div className="pt-2.5 border-t border-slate-100 space-y-1">
                        <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                          {isLaos ? 'Key Benefits:' : 'Lợi ích nổi bật:'}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {item.highlights.split('·').map((highlight, hIdx) => (
                            <span
                              key={hIdx}
                              className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-slate-700 bg-slate-100/80 px-2 py-0.5 rounded-md border border-slate-200/60"
                            >
                              <CheckCircle2 className="w-2.5 h-2.5 text-[var(--vidc-color-brand-red)] shrink-0" />
                              <span>{highlight.trim()}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom CTA Button */}
                  <div className="pt-3 border-t border-slate-100">
                    <VIDCAnchor
                      href={getFullPath(item.path)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-[var(--vidc-button-primary-background-default)] text-white text-xs font-bold text-center flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer group-hover:bg-[var(--vidc-button-primary-background-default)]"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </VIDCAnchor>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Navigation Controls Below Cards */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <VIDCNativeButton
            onClick={() => scroll('left')}
            aria-label="Previous solution"
            className="p-3.5 rounded-full bg-white hover:bg-[var(--vidc-color-brand-red)] hover:text-white text-slate-700 border border-slate-200/90 hover:border-[var(--vidc-color-brand-red)] transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </VIDCNativeButton>
          <VIDCNativeButton
            onClick={() => scroll('right')}
            aria-label="Next solution"
            className="p-3.5 rounded-full bg-white hover:bg-[var(--vidc-color-brand-red)] hover:text-white text-slate-700 border border-slate-200/90 hover:border-[var(--vidc-color-brand-red)] transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </VIDCNativeButton>
        </div>
      </div>
    </section>
  );
};



