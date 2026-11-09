import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { useLanguage } from '../../../context/LanguageContext';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudMigrationHeroProps {
  currentMarket: SEAMarket;
  onOpenConsult: () => void;
  onNavigateHome: () => void;
}

export const CloudMigrationHero: React.FC<CloudMigrationHeroProps> = ({
  currentMarket,
  onOpenConsult,
  onNavigateHome,
}) => {
  const { currentLanguage } = useLanguage();
  const isLaos = currentLanguage !== 'vn' && currentLanguage !== 'vi';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    migration: isLaos ? 'Migration & Managed Services' : 'Dịch vụ Di chuyển & Chuyển đổi',
    eyebrow: isLaos 
      ? 'SECURE CLOUD DATA & SYSTEM MIGRATION SERVICE'
      : 'DỊCH VỤ DI CHUYỂN DỮ LIỆU & HỆ THỐNG LÊN ĐÁM MÂY AN TOÀN',
    headline: isLaos 
      ? 'Viettel Cloud Migration – Swift & Secure Data & Infrastructure Cloud Transition'
      : 'Viettel Cloud Migration – Chuyển Đổi Dữ Liệu & Hạ Tầng Lên Đám Mây Nhanh Chóng, An Toàn',
    desc: isLaos 
      ? 'Comprehensive workload and storage migration from On-Premise, Public Cloud or other providers to Viettel IDC Cloud. Absolute data integrity, full Decree 13/2023/ND-CP compliance, and optimal infrastructure TCO.'
      : 'Giải pháp dịch chuyển toàn diện hệ thống lưu trữ và máy chủ từ On-Premise, Public Cloud hoặc nhà cung cấp khác sang môi trường Cloud của Viettel IDC. Đảm bảo an toàn dữ liệu tuyệt đối, tuân thủ Nghị định 13/2023/NĐ-CP và tối ưu chi phí hạ tầng.',
    consultPrimary: isLaos ? 'Request Consultation' : 'Nhận Tư Vấn Chuyển Đổi',
    explorePricing: isLaos ? 'Explore Pricing & Blueprints' : 'Khám Phá Bảng Giá',
  };

  const handleScrollToPricing = () => {
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
      {/* Background Image matching Cloud Server standard */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Cloud Migration" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
        {/* Soft gradient overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-900/40" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation matching Cloud Server */}
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
              <span className="text-slate-200 drop-shadow">{t.migration}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">Viettel Cloud Migration</span>
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
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {t.desc}
          </p>

          {/* Group CTA Buttons matching Cloud Server */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px] cursor-pointer"
            >
              <span>{t.consultPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCNativeButton
              type="button"
              onClick={handleScrollToPricing}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] cursor-pointer"
            >
              <span>{t.explorePricing}</span>
            </VIDCNativeButton>
          </div>
        </div>

      </div>
    </section>
  );
};
