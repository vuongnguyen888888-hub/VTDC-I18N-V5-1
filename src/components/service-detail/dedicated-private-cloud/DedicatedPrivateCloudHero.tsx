import React from 'react';
import { ChevronRight, ArrowRight, Zap } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface DedicatedPrivateCloudHeroProps {
  currentMarket: SEAMarket;
  onOpenQuote: () => void;
  onNavigateHome: () => void;
}

export const DedicatedPrivateCloudHero: React.FC<DedicatedPrivateCloudHeroProps> = ({
  currentMarket,
  onOpenQuote,
  onNavigateHome,
}) => {
  const isLaos = currentMarket.code === 'la';

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    compute: isLaos ? 'Cloud Compute' : 'Điện toán đám mây',
    serviceName: 'Viettel Dedicated Private Cloud (HPC)',
    eyebrow: isLaos 
      ? 'DEDICATED HIGH-PERFORMANCE COMPUTING (HPC) CLOUD' 
      : 'HẠ TẦNG ĐIỆN TOÁN HIỆU NĂNG CAO DÀNH RIÊNG',
    headline: isLaos 
      ? 'Viettel Dedicated Private Cloud (HPC) - Isolated High-Performance Cloud Cluster' 
      : 'Viettel Dedicated Private Cloud (HPC) - Máy chủ dùng riêng hiệu năng cực cao',
    desc: isLaos 
      ? 'Advanced Infrastructure-as-a-Service (IaaS) tier providing 100% isolated bare-metal server clusters, 200 Gbps InfiniBand ultra-fabric network, NVMe high-IOPS storage, and 99.99% SLA commitment for mission-critical simulations and AI/Deep Learning workloads.'
      : 'Hạ tầng máy chủ vật lý độc lập 100% (Single-Tenant) thuộc phân lớp IaaS cao cấp, trang bị mạng InfiniBand 200 Gbps siêu tốc, lưu trữ NVMe tốc độ cao, cam kết SLA 99.99% phục vụ các bài toán tính toán phức tạp, mô phỏng khoa học và AI/Deep Learning.',
    contact: isLaos ? 'Request consultation' : 'Đăng ký tư vấn',
    explore: isLaos ? 'Explore packages' : 'Khám phá bảng giá',
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Banner */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Dedicated Private Cloud HPC" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
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
              <span className="text-slate-200 drop-shadow">{t.compute}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">
                {t.serviceName}
              </span>
            </li>
          </ol>
        </nav>

        {/* Section Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-red-500/10 text-[var(--vidc-color-brand-red)] font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/20 w-max inline-flex items-center gap-1.5 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
            <span>{t.eyebrow}</span>
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
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px] cursor-pointer"
            >
              <span>{t.contact}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCNativeButton
              type="button"
              onClick={scrollToPricing}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] cursor-pointer"
            >
              <span>{t.explore}</span>
            </VIDCNativeButton>
          </div>

        </div>

      </div>
    </section>
  );
};
