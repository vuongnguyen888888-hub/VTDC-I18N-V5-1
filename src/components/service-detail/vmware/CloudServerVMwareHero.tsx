import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudServerVMwareHeroProps {
  currentMarket: SEAMarket;
  onOpenQuote: () => void;
  onNavigateHome: () => void;
}

export const CloudServerVMwareHero: React.FC<CloudServerVMwareHeroProps> = ({
  currentMarket,
  onOpenQuote,
  onNavigateHome,
}) => {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 border-b border-slate-800 overflow-hidden"
    >
      {/* Background Dot Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--vidc-color-brand-red)_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--vidc-color-brand-red)]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="inline-flex items-center flex-wrap gap-2 text-xs text-slate-300 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
            <li>
              <VIDCNativeButton 
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
              <span className="text-slate-300">Điện toán Đám mây</span>
            </li>
            <li className="text-slate-500"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-semibold" aria-current="page">
                Viettel Cloud Server (VMware)
              </span>
            </li>
          </ol>
        </nav>

        {/* Section Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-red-500/10 text-[var(--vidc-color-brand-red)] font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/20 w-max inline-flex items-center">
            HẠ TẦNG ĐIỆN TOÁN ĐÁM MÂY CHUẨN QUỐC TẾ
          </span>
        </div>

        {/* Main Hero Header Block */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Viettel Cloud Server (VMware) - Điện Toán Đám Mây Trên Nền Tảng Ảo Hóa VMware
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Khởi tạo hạ tầng CNTT mạnh mẽ với Viettel Cloud Server được xây dựng trên nền tảng ảo hóa VMware, mang đến giải pháp máy chủ ảo linh hoạt, an toàn và tối ưu chi phí. Sẵn sàng mở rộng tài nguyên tức thì, đảm bảo hệ thống vận hành liên tục với độ sẵn sàng lên tới 99,99%.
          </p>

          {/* Group CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCNativeButton
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px]"
            >
              <span>Nhận Tư Vấn</span>
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
