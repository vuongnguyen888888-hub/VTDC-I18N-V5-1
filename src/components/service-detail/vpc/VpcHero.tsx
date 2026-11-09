import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VpcHeroProps {
  currentMarket: SEAMarket;
  onOpenQuote: () => void;
  onNavigateHome: () => void;
}

export const VpcHero: React.FC<VpcHeroProps> = ({
  currentMarket,
  onOpenQuote,
  onNavigateHome,
}) => {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else onOpenQuote();
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 border-b border-slate-800 overflow-hidden"
    >
      {/* Radial Gradient Dot Tech Background */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--vidc-color-brand-red)_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--vidc-color-brand-red)]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="inline-flex items-center flex-wrap gap-2 text-xs text-slate-300 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
            <li>
              <VIDCNativeButton 
                type="button"
                onClick={onNavigateHome} 
                className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] rounded px-1"
              >
                Trang chủ
              </VIDCNativeButton>
            </li>
            <li className="text-slate-500"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-slate-300">Dịch vụ</span>
            </li>
            <li className="text-slate-500"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-slate-300">Điện toán &amp; Container</span>
            </li>
            <li className="text-slate-500"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-semibold" aria-current="page">
                Viettel Virtual Private Cloud (vVPC)
              </span>
            </li>
          </ol>
        </nav>

        {/* Section Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-red-500/10 text-[var(--vidc-color-brand-red)] font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/20 w-max inline-flex items-center">
            HẠ TẦNG TRUNG TÂM DỮ LIỆU ẢO ĐỘC LẬP
          </span>
        </div>

        {/* Main Hero Header Block */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Viettel Virtual Private Cloud (vVPC) - Trung Tâm Dữ Liệu Ảo Độc Lập Cho Doanh Nghiệp
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Hạ tầng trung tâm dữ liệu ảo riêng biệt (Virtual Data Center - vDC) trên nền tảng Public Cloud chuẩn TIA-942 Rated 3. Cung cấp vùng tài nguyên tính toán, lưu trữ phân tầng và mạng ảo hóa SDN độc lập hoàn toàn, đáp ứng nghiêm ngặt tiêu chuẩn Chính phủ điện tử và Doanh nghiệp lớn.
          </p>

          {/* Group CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCNativeButton
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px]"
            >
              <span>Nhận Tư Vấn &amp; Báo Giá</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCNativeButton
              type="button"
              onClick={scrollToPricing}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-slate-600 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
            >
              <span>Xem Bảng Giá</span>
            </VIDCNativeButton>
          </div>
        </div>

      </div>
    </section>
  );
};


