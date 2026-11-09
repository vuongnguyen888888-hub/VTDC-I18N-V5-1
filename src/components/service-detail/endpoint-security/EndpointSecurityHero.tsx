import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { useLanguage } from '../../../context/LanguageContext';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface EndpointSecurityHeroProps {
  currentMarket: SEAMarket;
  onOpenConsult: () => void;
  onNavigateHome: () => void;
}

export const EndpointSecurityHero: React.FC<EndpointSecurityHeroProps> = ({
  currentMarket,
  onOpenConsult,
  onNavigateHome,
}) => {
  const { currentLanguage } = useLanguage();
  const isLaos = currentLanguage !== 'vn' && currentLanguage !== 'vi';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    security: isLaos ? 'Information Security' : 'An toàn Thông tin',
    currentService: 'Viettel Endpoint Security',
    eyebrow: isLaos 
      ? 'NEXT-GEN ENDPOINT SECURITY SOLUTION' 
      : 'GIẢI PHÁP BẢO MẬT ĐIỂM CUỐI THẾ HỆ MỚI (NEXT-GEN ENDPOINT SECURITY)',
    headline: isLaos 
      ? 'Viettel Endpoint Security – Comprehensive Endpoint Shield for Physical & Virtualized Servers' 
      : 'Viettel Endpoint Security – Lá Chắn Bảo Vệ Điểm Cuối Toàn Diện Cho Máy Chủ Vật Lý & Máy Chủ Ảo Hóa',
    desc: isLaos 
      ? 'Comprehensive protection for all endpoints against known and unknown threats (Zero-day, Ransomware, Fileless attack). Integrated with Machine Learning, Risk Analytics, and optimized hardware resource offloading via centralized scanning server SVA.'
      : 'Bảo vệ toàn diện các thiết bị đầu cuối trước mọi nguy cơ đã biết và chưa biết (Zero-day, Ransomware, Fileless attack). Tích hợp công nghệ Máy học (Machine Learning), phân tích rủi ro (Risk Analytics) và tối ưu hóa tài nguyên phần cứng vượt trội với máy chủ quét tập trung SVA.',
    freeTrial: isLaos ? 'Free Trial' : 'Dùng Thử Miễn Phí',
    viewPricing: isLaos ? 'View Pricing & Features' : 'Xem Bảng Giá & Tính Năng',
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image - Clean Server standard */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Endpoint Security" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="inline-flex items-center flex-wrap gap-2 text-xs text-slate-200">
            <li>
              <VIDCNativeButton 
                onClick={onNavigateHome} 
                className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] rounded px-0.5 drop-shadow cursor-pointer"
              >
                {t.home}
              </VIDCNativeButton>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-slate-200 drop-shadow">{t.services}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-slate-200 drop-shadow">{t.security}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">
                {t.currentService}
              </span>
            </li>
          </ol>
        </nav>

        {/* Section Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-red-500/10 text-[var(--vidc-color-brand-red)] font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/20 w-max inline-flex items-center">
            {t.eyebrow}
          </span>
        </div>

        {/* Main Hero Header */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            {t.headline}
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {t.desc}
          </p>

          {/* Group CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            {/* CTA 1: Primary - Nền đỏ var(--vidc-color-brand-red) */}
            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px] cursor-pointer"
            >
              <span>{t.freeTrial}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            {/* CTA 2: Secondary - Nút viền xám */}
            <VIDCNativeButton
              type="button"
              onClick={scrollToPricing}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] cursor-pointer"
            >
              <span>{t.viewPricing}</span>
            </VIDCNativeButton>
          </div>
        </div>

      </div>
    </section>
  );
};
