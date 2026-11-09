import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Phone, Server, ShieldCheck, Users, Clock, Cpu, Target, Zap, Layers, Sparkles } from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface HeroSectionProps {
  currentMarket: SEAMarket;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentMarket }) => {
  const { t, getFullPath } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const headlineVal = (
    <>
      {t.hero.headlinePart1}{' '}
      <span className="text-[color:var(--vidc-color-brand-red)]">
        {t.hero.headlineHighlight}
      </span>{' '}
      {t.hero.headlinePart2}
    </>
  );

  const statsVal = [
    {
      value: null,
      label: t.hero.stat1Label,
      sublabel: t.hero.stat1Sublabel,
      icon: Cpu,
    },
    {
      value: null,
      label: t.hero.stat2Label,
      sublabel: t.hero.stat2Sublabel,
      icon: Target,
    },
    {
      value: null,
      label: t.hero.stat3Label,
      sublabel: t.hero.stat3Sublabel,
      icon: Zap,
    },
    {
      value: null,
      label: t.hero.stat4Label,
      sublabel: t.hero.stat4Sublabel,
      icon: Layers,
    },
  ];

  const slides = [
    {
      id: 'ai-qualcomm-program',
      bgImage: 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1790319772/banner_hero-2_hung6e.png',
      eyebrow: t.hero.eyebrow,
      eyebrowIcon: Sparkles,
      headline: headlineVal,
      description: t.hero.description,
      primaryCta: {
        label: t.hero.ctaTrial,
        href: getFullPath('/partners/qualcomm/#register-form'),
        external: false,
      },
      secondaryCta: {
        label: t.hero.ctaLearnMore,
        href: getFullPath('/partners/qualcomm/'),
      },
      stats: statsVal,
    },
  ];

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const slide = slides[currentSlide];

  return (
    <section 
      className="relative overflow-hidden bg-slate-50 text-slate-900 py-14 md:py-20 vidc-tech-grid border-b border-slate-200/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Hero Background Banner */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={slide.bgImage}
          alt="Viettel IDC Hero Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="vidc-container relative z-10 space-y-8">
        {/* Main Content Block with smooth key transition */}
        <div key={slide.id} className="max-w-[880px] space-y-6 animate-in fade-in slide-in-from-right-2 duration-300">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-red-50/90 backdrop-blur-md border border-red-200/80 shadow-none">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
              {slide.eyebrow}
            </span>
          </div>

          {/* H1 Display Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
            {slide.headline}
          </h1>

          {/* Sub-heading Description */}
          <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed max-w-[var(--vidc-layout-container-reading)]">
            {slide.description}
          </p>

          {/* CTA Group (Button Group) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            {/* Button Primary */}
            <VIDCAnchor
              href={slide.primaryCta.href}
              target={slide.primaryCta.external ? '_blank' : '_self'}
              rel={slide.primaryCta.external ? 'noopener noreferrer' : undefined}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-[var(--vidc-button-height-md)] rounded-[var(--vidc-button-radius)] bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-sm font-bold shadow-none transition-all transform hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>{slide.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </VIDCAnchor>

            {/* Button Secondary */}
            {(() => {
              const SecIcon = (slide.secondaryCta as any).icon;
              return (
                <VIDCAnchor
                  href={slide.secondaryCta.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-[var(--vidc-button-height-md)] rounded-[var(--vidc-button-radius)] border border-slate-300 hover:border-slate-400 bg-white/90 hover:bg-white text-slate-800 hover:text-slate-900 text-sm font-bold shadow-none backdrop-blur-md transition-all cursor-pointer"
                >
                  {SecIcon && <SecIcon className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />}
                  <span>{slide.secondaryCta.label}</span>
                </VIDCAnchor>
              );
            })()}
          </div>
        </div>

        {/* Thẻ giá trị / Chỉ số tin cậy (4 cards) */}
        <div key={`stats-${slide.id}`} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-6 md:pt-8 animate-in fade-in duration-300">
          {slide.stats.map((stat, index) => {
            const IconComp = stat.icon;
            return (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-[var(--vidc-radius-lg)] bg-white/40 backdrop-blur-xl border border-white/70 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] hover:bg-white/60 hover:border-white/90 hover:shadow-[0_8px_32px_0_rgba(238,0,51,0.12)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <IconComp className="w-4.5 h-4.5 text-[var(--vidc-color-brand-red)]" />
                    {stat.value && (
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono ml-auto">
                        {stat.value}
                      </span>
                    )}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle slide dot indicators under cards */}
        {slides.length > 1 && (
          <div className="flex items-center justify-center gap-2 pt-2">
            {slides.map((s, idx) => (
              <VIDCNativeButton
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Switch to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx
                    ? 'w-6 bg-[var(--vidc-color-brand-red)] shadow-sm shadow-red-500/50'
                    : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

