import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface InterconnectionHeroProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
  onNavigateHome: () => void;
}

export const InterconnectionHero: React.FC<InterconnectionHeroProps> = ({
  currentMarket,
  onOpenConsult,
  onNavigateHome,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    networking: isLaos ? 'Connectivity & Networking' : 'Kết nối & Mạng',
    eyebrow: isLaos
      ? 'DEDICATED LEASED LINE & HIGH-SPEED INTERNET'
      : 'HẠ TẦNG KẾT NỐI KÊNH TRUYỀN & INTERNET TỐC ĐỘ CAO',
    headline: isLaos
      ? 'Viettel Interconnection - Dedicated Leased Line & Point-to-Point Multi-Network'
      : 'Viettel Interconnection – Dịch Vụ Kết Nối Kênh Truyền Dành Riêng & Internet Đa Điểm',
    desc: isLaos
      ? 'Ensure fast, stable, and secure connectivity between Data Centers, from Data Centers to enterprise branch offices, and directly to end-users. Fully isolated dedicated transmission infrastructure with zero bandwidth sharing at all times.'
      : 'Đảm bảo kết nối nhanh, ổn định và bảo mật giữa các Trung tâm Dữ liệu (TTDL) với nhau, giữa TTDL với văn phòng doanh nghiệp và tới người dùng cuối. Hệ thống kênh truyền riêng biệt, cam kết không chia sẻ băng thông tại mọi thời điểm.',
    ctaPrimary: isLaos ? 'Request Technical Consultation' : 'Đăng Ký Tư Vấn Kỹ Thuật',
    ctaSecondary: isLaos ? 'Explore Connectivity Solutions' : 'Khám Phá Phương Án Kết Nối',
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image - No dark overlay per Cloud Server standard */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Interconnection" src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--vidc-legacy-hex-0e1118)] via-[var(--vidc-legacy-hex-0e1118)]/90 to-[var(--vidc-legacy-hex-0e1118)]/60" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="inline-flex items-center flex-wrap gap-2 text-xs text-slate-200">
            <li>
              <VIDCNativeButton 
                onClick={onNavigateHome} 
                className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] rounded px-0.5 drop-shadow"
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
              <span className="text-slate-200 drop-shadow">{t.networking}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">Viettel Interconnection</span>
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
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px]"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCAnchor
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
            >
              <span>{t.ctaSecondary}</span>
            </VIDCAnchor>
          </div>
        </div>

      </div>
    </section>
  );
};
