import React from 'react';
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface VKSHeroProps {
  currentMarket?: SEAMarket;
  onOpenQuote?: () => void;
  onNavigateHome?: () => void;
  onNavigateService?: (path: string) => void;
}

export const VKSHero: React.FC<VKSHeroProps> = ({
  currentMarket,
  onOpenQuote,
  onNavigateHome,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    paasContainer: isLaos ? 'PaaS & Containers' : 'Nền tảng PaaS & Container',
    serviceName: 'Viettel Kubernetes Service (vKS)',
    eyebrow: isLaos ? 'CNCF CERTIFIED KUBERNETES PLATFORM' : 'NỀN TẢNG ĐIỀU PHỐI CONTAINER CHUẨN CNCF',
    headline: isLaos
      ? 'Viettel Kubernetes Service (vKS) – Automated Cloud Platform for Microservices'
      : 'Viettel Kubernetes Service (vKS) – Nền tảng điều phối container tự động hóa',
    desc: isLaos
      ? 'Enterprise PaaS solution based on CNCF standard open-source Kubernetes. Full OS-layer container virtualization allowing seamless packaging, automated deployment, scaling, and complete lifecycle management for modern microservices.'
      : 'Giải pháp dịch vụ nền tảng (PaaS) phát triển trên mã nguồn mở Kubernetes tiêu chuẩn CNCF. Cung cấp môi trường ảo hóa lớp OS hoàn chỉnh giúp doanh nghiệp dễ dàng đóng gói, tự động triển khai, mở rộng và quản lý vòng đời ứng dụng container mà không cần tự vận hành cụm hạ tầng phức tạp.',
    freeTrial: isLaos ? 'Free trial / Pricing' : 'Trải nghiệm miễn phí',
    contact: isLaos ? 'Request consultation' : 'Đăng ký tư vấn',
  };

  const handleScrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const pricingEl = document.getElementById('pricing');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image - Exactly like CloudServerHero */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Kubernetes Service" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation - Exactly like CloudServerHero */}
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
              <span className="text-slate-200 drop-shadow">{t.paasContainer}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">
                {t.serviceName}
              </span>
            </li>
          </ol>
        </nav>

        {/* Section Eyebrow Badge - Exactly like CloudServerHero */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-red-500/10 text-[var(--vidc-color-brand-red)] font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/20 w-max inline-flex items-center">
            {t.eyebrow}
          </span>
        </div>

        {/* Main Hero Header Grid - Exactly like CloudServerHero */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            {t.headline}
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.desc}
          </p>

          {/* Group CTA Buttons - Exactly like CloudServerHero */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCAnchor
              href="#pricing"
              onClick={handleScrollToPricing}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px] cursor-pointer"
            >
              <span>{t.freeTrial}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCAnchor>

            <VIDCNativeButton
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] cursor-pointer"
            >
              <span>{t.contact}</span>
            </VIDCNativeButton>
          </div>

          {/* Trust Badges Minimal Row */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>SLA Cam Kết 99.99%</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>CNCF Certified Kubernetes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Bảo mật ATTT Cấp độ 3</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
