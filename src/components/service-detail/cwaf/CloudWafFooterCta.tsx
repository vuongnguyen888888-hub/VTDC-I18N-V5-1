import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudWafFooterCtaProps {
  onOpenConsult: () => void;
  currentMarket?: SEAMarket;
}

export const CloudWafFooterCta: React.FC<CloudWafFooterCtaProps> = ({
  onOpenConsult,
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos 
      ? 'Start Protecting Your Web & API with Viettel Cloud WAF Today'
      : 'Bắt đầu trải nghiệm Viettel Cloud WAF ngay hôm nay',
    desc: isLaos
      ? 'Contact Viettel IDC cybersecurity specialists today for architectural consultations, risk assessments, and enterprise free trial onboarding.'
      : 'Liên hệ ngay với đội ngũ chuyên gia an toàn thông tin của Viettel IDC để được tư vấn thiết kế giải pháp và nhận chương trình ưu đãi dùng thử miễn phí.',
    ctaPrimary: isLaos ? 'Request Consultation' : 'Đăng ký tư vấn ngay',
    ctaSecondary: isLaos ? 'Free Trial' : 'Dùng thử miễn phí',
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

        <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto font-normal">
          {t.desc}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <VIDCNativeButton
            type="button"
            onClick={onOpenConsult}
            className="px-8 py-4 rounded-xl bg-white text-[var(--vidc-color-brand-red)] hover:bg-slate-100 active:bg-slate-200 font-extrabold text-base transition-all shadow-xl flex items-center justify-center gap-2.5 min-h-[48px] cursor-pointer"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
          </VIDCNativeButton>

          <VIDCNativeButton
            type="button"
            onClick={onOpenConsult}
            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/30 font-extrabold text-base backdrop-blur-md transition-all shadow-lg flex items-center justify-center gap-2.5 min-h-[48px] cursor-pointer"
          >
            <span>{t.ctaSecondary}</span>
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
