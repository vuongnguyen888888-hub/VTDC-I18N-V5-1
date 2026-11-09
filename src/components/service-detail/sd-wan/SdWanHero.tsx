import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface SdWanHeroProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
  onNavigateHome?: () => void;
  onNavigateService?: (path: string) => void;
}

export const SdWanHero: React.FC<SdWanHeroProps> = ({
  currentMarket,
  onOpenConsult,
  onNavigateHome,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    networking: isLaos ? 'Connectivity & Networking' : 'Kết nối & Mạng',
    eyebrow: isLaos 
      ? 'NEXT-GEN SOFTWARE-DEFINED WIDE AREA NETWORK' 
      : 'MẠNG DIỆN RỘNG ẢO ĐIỀU KHIỂN BẰNG PHẦN MỀM THẾ HỆ MỚI',
    headline: isLaos
      ? 'Viettel SD-WAN – Intelligent, Secure & Cost-Effective Branch Networking Solution'
      : 'Viettel SD-WAN – Giải Pháp Mạng WAN Ảo Kết Nối Chi Nhánh Thông Minh, Bảo Mật & Tối Ưu Chi Phí',
    desc: isLaos
      ? 'Software-defined WAN solution that flexibly interconnects all corporate branches without physical transmission constraints. Features automatic failover, cloud application traffic acceleration, and significant operational cost savings compared to traditional WAN.'
      : 'Giải pháp mạng WAN định nghĩa bằng phần mềm giúp liên kết linh hoạt toàn bộ hệ thống chi nhánh mà không phụ thuộc hạ tầng truyền dẫn vật lý. Tự động chuyển mạch dự phòng, tối ưu băng thông ứng dụng đám mây và tiết kiệm chi phí vận hành so với mạng WAN truyền thống.',
    contact: isLaos ? 'Request Solution Consultation' : 'Đăng Ký Tư Vấn Giải Pháp',
    exploreArch: isLaos ? 'Explore SD-WAN Architecture' : 'Khám Phá Kiến Trúc SD-WAN',
  };

  const handleHomeClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else if (onNavigateService) {
      onNavigateService('/');
    }
  };

  const handleNetworkingClick = () => {
    if (onNavigateService) {
      onNavigateService('/services/networking');
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel SD-WAN" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="inline-flex items-center flex-wrap gap-2 text-xs text-slate-200">
            <li>
              <VIDCNativeButton 
                onClick={handleHomeClick} 
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
              <VIDCNativeButton
                onClick={handleNetworkingClick}
                className="text-slate-200 hover:text-white transition-colors drop-shadow"
              >
                {t.networking}
              </VIDCNativeButton>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">Viettel SD-WAN</span>
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
              <span>{t.contact}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCAnchor
              href="#overview"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
            >
              <span>{t.exploreArch}</span>
            </VIDCAnchor>
          </div>
        </div>

      </div>
    </section>
  );
};
