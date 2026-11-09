import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VCMPHeroProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
  onNavigateHome?: () => void;
  onNavigateService?: (path: string) => void;
}

export const VCMPHero: React.FC<VCMPHeroProps> = ({
  currentMarket,
  onOpenConsult,
  onNavigateHome,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    category: isLaos ? 'Management & Monitoring' : 'Quản trị & Giám sát',
    eyebrow: isLaos 
      ? 'MULTI-CLOUD MANAGEMENT PLATFORM' 
      : 'NỀN TẢNG ĐIỀU PHỐI, GIÁM SÁT & QUẢN TRỊ TẬP TRUNG MULTI-CLOUD',
    headline: isLaos 
      ? 'Viettel Cloud Management Platform (vCMP) – Unified Multi-Cloud Governance in a Single Pane of Glass' 
      : 'Viettel Cloud Management Platform (vCMP) – Hợp Nhất Quản Trị Đa Nền Tảng Đám Mây Trên Một Giao Diện Duy Nhất',
    desc: isLaos 
      ? 'Comprehensive management platform empowering enterprises to orchestrate, monitor, optimize costs, and automate resources across nearly 20 Public Cloud, Private Cloud, Hypervisor, and Bare Metal platforms.'
      : 'Giải pháp nền tảng toàn diện giúp doanh nghiệp điều phối, giám sát, tối ưu hóa chi phí và tự động hóa tài nguyên trên gần 20 nền tảng Public Cloud, Private Cloud, Hypervisor và máy chủ vật lý.',
    consultBtn: isLaos ? 'Request Consultation' : 'Đăng Ký Tư Vấn Giải Pháp',
    demoBtn: isLaos ? 'Request Live Demo' : 'Yêu Cầu Trải Nghiệm Demo',
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image - No dark overlay per Cloud Server template */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Cloud Management Platform" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
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
              <span className="text-slate-200 drop-shadow">{t.category}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">
                Viettel Cloud Management Platform (vCMP)
              </span>
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
              <span>{t.consultBtn}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] cursor-pointer"
            >
              <span>{t.demoBtn}</span>
            </VIDCNativeButton>
          </div>
        </div>

      </div>
    </section>
  );
};

