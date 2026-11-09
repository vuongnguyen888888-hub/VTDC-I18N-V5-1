import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface ManagedPrivateCloudFooterCtaProps {
  onOpenQuote?: () => void;
  currentMarket?: SEAMarket;
}

export const ManagedPrivateCloudFooterCta: React.FC<ManagedPrivateCloudFooterCtaProps> = ({ onOpenQuote, currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    headline: isLaos
      ? 'Start Your Enterprise Private Cloud Journey Today'
      : 'Khởi đầu hành trình Private Cloud chuẩn doanh nghiệp ngay hôm nay',
    desc: isLaos
      ? 'Contact Viettel IDC & VMware senior architects for an on-site assessment, tailored architecture design, and comprehensive TCO estimation.'
      : 'Liên hệ ngay với đội ngũ kiến trúc sư Viettel IDC & VMware để được khảo sát hiện trạng DC, tư vấn thiết kế kiến trúc may đo và xây dựng bài toán TCO tối ưu.',
    ctaPrimary: isLaos ? 'Request Solution Consultation' : 'Đăng ký tư vấn giải pháp',
    ctaSecondary: isLaos ? 'Hotline 1800 8088' : 'Hotline: 1800 8088',
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
            className="px-8 py-4 rounded-xl bg-white text-[var(--vidc-color-brand-red)] hover:bg-slate-100 active:bg-slate-200 font-extrabold text-base transition-all shadow-xl flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px]"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
          </VIDCNativeButton>

          <VIDCAnchor
            href="tel:18008088"
            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/30 font-extrabold text-base backdrop-blur-md transition-all shadow-lg flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px]"
          >
            <span>{t.ctaSecondary}</span>
          </VIDCAnchor>
        </div>

      </div>
    </section>
  );
};
