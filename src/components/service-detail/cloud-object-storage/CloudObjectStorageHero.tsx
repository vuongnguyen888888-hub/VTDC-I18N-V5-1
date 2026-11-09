import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CloudObjectStorageHeroProps {
  currentMarket: SEAMarket;
  onOpenConsult: () => void;
  onNavigateHome: () => void;
}

export const CloudObjectStorageHero: React.FC<CloudObjectStorageHeroProps> = ({
  currentMarket,
  onOpenConsult,
  onNavigateHome,
}) => {
  const isLaos = currentMarket.code === 'la';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    storage: isLaos ? 'Cloud Storage' : 'Lưu trữ Đám mây',
    eyebrow: isLaos ? 'COMPREHENSIVE UNSTRUCTURED OBJECT STORAGE' : 'DỊCH VỤ LƯU TRỮ ĐỐI TƯỢNG PHI CẤU TRÚC TOÀN DIỆN',
    headline: isLaos 
      ? 'Viettel Cloud Object Storage – Unlimited Scalable Data, Optimized TCO & Multi-AZ Security' 
      : 'Viettel Cloud Object Storage – Lưu Trữ Dữ Liệu Không Giới Hạn, Tối Ưu Chi Phí & Bảo Mật Đa Vùng',
    desc: isLaos 
      ? 'Comprehensive storage services for enterprises and individuals on an advanced cloud computing platform. Unlimited Petabyte-scale expansion, 100% S3 API compatibility, absolute security with Multi Availability Zone (Multi AZ) synchronization, and optimized operational costs.'
      : 'Dịch vụ lưu trữ toàn diện cho doanh nghiệp và cá nhân trên nền tảng điện toán đám mây tiên tiến. Không gian lưu trữ mở rộng không giới hạn lên tới hàng Petabyte, tương thích hoàn toàn chuẩn S3 API, đảm bảo an toàn tuyệt đối với cơ chế đồng bộ đa vùng (Multi AZ) và tối ưu chi phí vận hành.',
    getAdvice: isLaos ? 'Get Advice' : 'Đăng Ký Tư Vấn',
    viewPricing: isLaos ? 'View Detailed Pricing' : 'Xem Bảng Giá Chi Tiết',
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Cloud Object Storage" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation: Trang chủ > Dịch vụ > Lưu trữ Đám mây > Viettel Cloud Object Storage */}
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
              <span className="text-slate-200 drop-shadow">{t.storage}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">Viettel Cloud Object Storage</span>
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
            {t.headline}
          </h1>
          
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            {t.desc}
          </p>

          {/* Group CTA Buttons: CTA 1 (Primary - Nền đỏ var(--vidc-color-brand-red)), CTA 2 (Secondary - Nút viền xám) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px] cursor-pointer"
            >
              <span>{t.getAdvice}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCAnchor
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/30 hover:border-white/50 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] cursor-pointer"
            >
              <span>{t.viewPricing}</span>
            </VIDCAnchor>
          </div>
        </div>

      </div>
    </section>
  );
};

