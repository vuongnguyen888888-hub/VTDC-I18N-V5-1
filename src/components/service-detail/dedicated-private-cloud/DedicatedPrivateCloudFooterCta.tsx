import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, Headphones } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface DedicatedPrivateCloudFooterCtaProps {
  currentMarket?: SEAMarket;
  onOpenQuote: () => void;
}

export const DedicatedPrivateCloudFooterCta: React.FC<DedicatedPrivateCloudFooterCtaProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    headline: isLaos 
      ? 'Start Deploying Your High Performance Cloud Cluster Today'
      : 'Khởi lập cụm điện toán hiệu năng cao cùng Viettel IDC ngay hôm nay',
    desc: isLaos
      ? 'Contact Viettel IDC HPC Solution Architects now to survey your computing workloads and receive customized cluster sizing and pricing.'
      : 'Liên hệ ngay với đội ngũ kiến trúc sư giải pháp HPC của Viettel IDC để được khảo sát bài toán tính toán và nhận báo giá cụm chuyên biệt.',
    ctaPrimary: isLaos ? 'Request Consultation' : 'Đăng ký tư vấn ngay',
    ctaSecondary: isLaos ? 'Explore HPC Packages' : 'Khám phá bảng giá',
  };

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

  return (
    <section 
      id="cta-section"
      className="relative py-16 md:py-20 bg-gradient-to-br from-[var(--vidc-color-brand-red)] via-[color:var(--vidc-color-brand-red-dark)] to-[color:var(--vidc-color-brand-red-deep)] text-white overflow-hidden"
    >
      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10 text-center max-w-4xl space-y-6">
        
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          {t.headline}
        </h2>

        <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
          {t.desc}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <VIDCNativeButton
            type="button"
            onClick={onOpenQuote}
            className="px-8 py-4 rounded-xl bg-white text-[var(--vidc-color-brand-red)] hover:bg-slate-100 active:bg-slate-200 font-extrabold text-base transition-all shadow-xl flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px] cursor-pointer"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
          </VIDCNativeButton>

          <VIDCNativeButton
            type="button"
            onClick={scrollToPricing}
            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/30 font-extrabold text-base backdrop-blur-md transition-all shadow-lg flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px] cursor-pointer"
          >
            <span>{t.ctaSecondary}</span>
          </VIDCNativeButton>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-white/80">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-white" />
            <span>Hotline 24/7: <strong>1800 8088</strong> (Miễn phí)</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>Cam kết SLA 99.99%</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-white" />
            <span>Hỗ trợ kỹ thuật chuyên sâu 24/7/365</span>
          </div>
        </div>

      </div>
    </section>
  );
};
