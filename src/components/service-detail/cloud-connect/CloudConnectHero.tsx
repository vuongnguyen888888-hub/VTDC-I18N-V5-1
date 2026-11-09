import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudConnectHeroProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
  onNavigateHome: () => void;
}

export const CloudConnectHero: React.FC<CloudConnectHeroProps> = ({
  currentMarket,
  onOpenConsult,
  onNavigateHome,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    breadcrumbHome: isLaos ? 'Home' : 'Trang chủ',
    breadcrumbServices: isLaos ? 'Services' : 'Dịch vụ',
    breadcrumbCategory: isLaos ? 'Connectivity & Networking' : 'Kết nối & Mạng',
    breadcrumbCurrent: 'Viettel Cloud Connect',
    eyebrow: isLaos 
      ? 'DEDICATED & SECURE HYBRID CLOUD CONNECTIVITY'
      : 'GIẢI PHÁP KẾT NỐI HYBRID CLOUD CHUYÊN DỤNG & BẢO MẬT',
    h1Title: isLaos
      ? 'Viettel Cloud Connect - Dedicated, Secure & High-Speed Multi-Cloud Connectivity'
      : 'Viettel Cloud Connect - Giải Pháp Kết Nối Chuyên Dụng, Bảo Mật & Ổn Định Tới Các Hyperscale Cloud Hàng Đầu',
    subHeading: isLaos
      ? 'Establish high-speed dedicated private connections from enterprise infrastructure to AWS, Google Cloud, Microsoft Azure, Alibaba Cloud and other leading clouds. SLA 99.95%, latency <10ms, save up to 50% bandwidth costs.'
      : 'Thiết lập kênh truyền riêng tốc độ cao từ hạ tầng doanh nghiệp tới Amazon Web Services (AWS), Google Cloud, Microsoft Azure, Alibaba Cloud và các môi trường đám mây lớn khác. Cam kết SLA 99,95%, độ trễ dưới 10ms, tiết kiệm chi phí băng thông lên tới 50% và bảo đảm tuân thủ pháp luật Việt Nam.',
    ctaPrimary: isLaos ? 'REGISTER FOR CONSULTATION' : 'ĐĂNG KÝ TƯ VẤN KỸ THUẬT',
    ctaSecondary: isLaos ? 'EXPLORE CONNECTION OPTIONS' : 'KHÁM PHÁ PHƯƠNG ÁN KẾT NỐI',
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section" 
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Hero Banner */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Cloud Connect" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--vidc-legacy-hex-18181a)]/95 via-[var(--vidc-legacy-hex-18181a)]/80 to-[var(--vidc-legacy-hex-18181a)]/60" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation */}
        <nav 
          aria-label="Breadcrumb" 
          className="flex items-center space-x-2 text-xs text-slate-400 mb-6 overflow-x-auto no-scrollbar py-1"
        >
          <VIDCNativeButton 
            type="button"
            onClick={onNavigateHome}
            className="hover:text-white transition-colors flex items-center gap-1 shrink-0"
          >
            {t.breadcrumbHome}
          </VIDCNativeButton>
          <ChevronRight className="w-3 h-3 text-slate-500 shrink-0" />
          <span className="hover:text-white transition-colors shrink-0">{t.breadcrumbServices}</span>
          <ChevronRight className="w-3 h-3 text-slate-500 shrink-0" />
          <span className="hover:text-white transition-colors shrink-0">{t.breadcrumbCategory}</span>
          <ChevronRight className="w-3 h-3 text-slate-500 shrink-0" />
          <span className="text-white font-medium truncate" aria-current="page">
            {t.breadcrumbCurrent}
          </span>
        </nav>

        {/* Hero Content */}
        <div className="max-w-3xl space-y-6">
          
          {/* Eyebrow Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-red-500/10 text-[var(--vidc-color-brand-red)] font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/20 w-max inline-flex items-center">
              {t.eyebrow}
            </span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            {t.h1Title}
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.subHeading}
          </p>

          {/* Group CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <VIDCNativeButton
              type="button"
              id="btn-cloud-connect-hero-consult"
              onClick={onOpenConsult}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px]"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </VIDCNativeButton>

            <VIDCNativeButton
              type="button"
              id="btn-cloud-connect-hero-features"
              onClick={scrollToPricing}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
            >
              <span>{t.ctaSecondary}</span>
            </VIDCNativeButton>
          </div>

        </div>

      </div>
    </section>
  );
};

