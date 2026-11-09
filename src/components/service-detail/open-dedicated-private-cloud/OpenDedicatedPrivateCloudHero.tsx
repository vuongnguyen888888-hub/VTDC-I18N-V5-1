import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface OpenDedicatedPrivateCloudHeroProps {
  currentMarket?: SEAMarket;
  onOpenQuote: () => void;
  onNavigateHome: () => void;
}

export const OpenDedicatedPrivateCloudHero: React.FC<OpenDedicatedPrivateCloudHeroProps> = ({
  onOpenQuote,
  onNavigateHome,
}) => {
  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image - No dark overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Open Dedicated Private Cloud" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
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
                Trang chủ
              </VIDCNativeButton>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-slate-200 drop-shadow">Dịch vụ</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-slate-200 drop-shadow">Điện toán Đám mây</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">
                Viettel Open Dedicated Private Cloud (oDPC)
              </span>
            </li>
          </ol>
        </nav>

        {/* Section Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-red-500/10 text-[var(--vidc-color-brand-red)] font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/20 w-max inline-flex items-center">
            HẠ TẦNG ĐÁM MÂY CHUYÊN DỤNG TRÊN NỀN TẢNG OPENSTACK
          </span>
        </div>

        {/* Main Hero Header */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Viettel Open Dedicated Private Cloud (oDPC) – Đám Mây Chuyên Dụng Tách Biệt Hoàn Toàn &amp; Hiệu Năng Vượt Trội
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Nền tảng đám mây chuyên dụng xây dựng trên nền tảng mã nguồn mở OpenStack, mang lại khả năng bảo mật cao, hiệu năng vượt trội và hạ tầng phần cứng tách biệt hoàn toàn cho từng khách hàng. Tích hợp sẵn sàng hệ sinh thái dịch vụ nâng cao không phát sinh chi phí.
          </p>

          {/* Group CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCNativeButton
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px] cursor-pointer"
            >
              <span>Nhận Tư Vấn Ngay</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCAnchor
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/30 font-bold text-base backdrop-blur-md transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
            >
              <span>Xem Bảng Giá Gói DPC</span>
            </VIDCAnchor>
          </div>
        </div>

      </div>
    </section>
  );
};
