import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface HybridConnectHeroProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
  onNavigateHome: () => void;
}

export const HybridConnectHero: React.FC<HybridConnectHeroProps> = ({
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
      ? 'DEDICATED PRIVATE CHANNEL TO VIETTEL IDC CLOUD'
      : 'GIẢI PHÁP THIẾT LẬP KÊNH KẾT NỐI RIÊNG ĐẾN ĐÁM MÂY VIETTEL IDC',
    headline: isLaos
      ? 'Viettel Hybrid Connect – Dedicated, Optimized & Secure Cloud Connectivity'
      : 'Viettel Hybrid Connect – Giải Pháp Kết Nối Chuyên Biệt, Tối Ưu & Bảo Mật Tới Đám Mây Viettel IDC',
    desc: isLaos
      ? 'Simplify the establishment of dedicated transmission channels from offices, on-premises data centers, or colocation systems to Viettel IDC’s Cloud ecosystem. Ensuring high speed, minimal latency, zero packet loss, and optimized infrastructure costs.'
      : 'Đơn giản hóa việc thiết lập kênh truyền riêng biệt từ văn phòng, trung tâm dữ liệu tại chỗ hoặc hệ thống Colocation đến hệ sinh thái Cloud của Viettel IDC. Đảm bảo tốc độ cao, độ trễ tối thiểu, không suy hao gói tin và tối ưu chi phí hạ tầng.',
    ctaPrimary: isLaos ? 'Request Technical Consultation' : 'Đăng Ký Tư Vấn Kỹ Thuật',
    ctaSecondary: isLaos ? 'Explore Connectivity Models' : 'Khám Phá Mô Hình Kết Nối',
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Hybrid Connect" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity" />
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
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">Viettel Hybrid Connect</span>
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
