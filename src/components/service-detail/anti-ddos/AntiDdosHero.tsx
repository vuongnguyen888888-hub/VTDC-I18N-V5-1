import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { useLanguage } from '../../../context/LanguageContext';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface AntiDdosHeroProps {
  currentMarket: SEAMarket;
  onOpenConsult: () => void;
  onNavigateHome: () => void;
}

export const AntiDdosHero: React.FC<AntiDdosHeroProps> = ({
  currentMarket,
  onOpenConsult,
  onNavigateHome,
}) => {
  const { currentLanguage } = useLanguage();
  const isLaos = currentLanguage !== 'vn' && currentLanguage !== 'vi';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    security: isLaos ? 'Information Security' : 'An toàn thông tin',
    eyebrow: isLaos ? 'VOLUMETRIC DDOS MITIGATION SERVICE' : 'DỊCH VỤ CHỐNG TẤN CÔNG DDOS BĂNG THÔNG LỚN',
    headline: isLaos 
      ? 'Viettel Anti-DDoS - Infrastructure & Transit Protection Against Volumetric Cyber Attacks' 
      : 'Viettel Anti-DDoS - Bảo vệ hạ tầng & kênh truyền trước mọi đợt bão mạng',
    desc: isLaos 
      ? 'Clean traffic scrubbing and Layer 4 volumetric DDoS mitigation scaling beyond 100 Gbps. Deployed natively on the Viettel Tier 1 ISP backbone, providing 100% automated threat detection, BGP diversion, and < 3 ms latency overhead.'
      : 'Giải pháp làm sạch lưu lượng và ngăn chặn tấn công DDoS Layer 4 quy mô lớn trên 100 Gbps. Vận hành trực tiếp trên hạ tầng mạng ISP Tier 1 của Viettel, tự động hóa 100% phát hiện, điều hướng BGP và độ trễ bộ lọc dưới 3 ms.',
    freeTrial: isLaos ? 'Free trial' : 'Trải nghiệm miễn phí',
    contact: isLaos ? 'Request consultation' : 'Đăng ký tư vấn',
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image - No dark overlay per Cloud Server standard */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Anti-DDoS" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
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
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">Viettel Anti-DDoS</span>
            </li>
          </ol>
        </nav>

        {/* Section Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-red-500/10 text-[var(--vidc-color-brand-red)] font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/20 w-max inline-flex items-center">
            {t.eyebrow}
          </span>
        </div>

        {/* Main Hero Header Grid */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            {t.headline}
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.desc}
          </p>

          {/* Group CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px] cursor-pointer"
            >
              <span>{t.freeTrial}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] cursor-pointer"
            >
              <span>{t.contact}</span>
            </VIDCNativeButton>
          </div>
        </div>

      </div>
    </section>
  );
};
