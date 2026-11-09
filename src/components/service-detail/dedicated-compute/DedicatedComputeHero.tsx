import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface DedicatedComputeHeroProps {
  currentMarket?: SEAMarket;
  onOpenQuote: () => void;
  onNavigateHome: () => void;
}

export const DedicatedComputeHero: React.FC<DedicatedComputeHeroProps> = ({
  currentMarket,
  onOpenQuote,
  onNavigateHome,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    dataCenter: isLaos ? 'Data Center' : 'Trung tâm Dữ liệu',
    eyebrow: isLaos ? 'DEDICATED SERVER LEASING' : 'DỊCH VỤ CHO THUÊ MÁY CHỦ',
    headline: isLaos 
      ? 'Viettel Server Leasing - Dedicated physical servers & full administrative control'
      : 'Viettel Server Leasing - Máy chủ vật lý hiệu năng cao & toàn quyền quản trị',
    desc: isLaos
      ? 'Dedicated genuine physical servers (Dell, HPE, Supermicro) located in international-standard TIA-942 Rated 3 Data Centers with 100% isolated resources, 99.99% SLA uptime, and 24/7/365 on-site technical support.'
      : 'Hạ tầng máy chủ vật lý riêng biệt chính hãng (Dell, HP, Supermicro) đặt tại Trung tâm Dữ liệu chuẩn quốc tế TIA-942 Rated 3 với 100% tài nguyên độc lập, cam kết SLA 99.99% và hỗ trợ kỹ thuật 24/7/365.',
    registerQuote: isLaos ? 'Request consultation' : 'Đăng ký tư vấn',
    explorePricing: isLaos ? 'Explore configurations' : 'Khám phá cấu hình',
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image - Standard Viettel Cloud banner */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Server Leasing" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
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
              <span className="text-slate-200 drop-shadow">{t.dataCenter}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">Viettel Server Leasing</span>
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
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.desc}
          </p>

          {/* Group CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCNativeButton
              id="btn-hero-register-quote"
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px] cursor-pointer"
            >
              <span>{t.registerQuote}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCAnchor
              id="btn-hero-explore-pricing"
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
            >
              <span>{t.explorePricing}</span>
            </VIDCAnchor>
          </div>
        </div>

      </div>
    </section>
  );
};
