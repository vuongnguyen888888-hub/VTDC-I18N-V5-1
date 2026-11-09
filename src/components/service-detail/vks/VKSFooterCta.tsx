import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VKSFooterCtaProps {
  onOpenQuote?: () => void;
  currentMarket?: SEAMarket;
}

export const VKSFooterCta: React.FC<VKSFooterCtaProps> = ({ onOpenQuote, currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos 
      ? 'Start Experiencing Viettel Kubernetes Service (vKS) Today' 
      : 'Bắt đầu trải nghiệm Viettel Kubernetes Service (vKS) ngay hôm nay',
    desc: isLaos
      ? 'Contact Viettel IDC cloud architects now to receive dedicated container architecture design and full-featured free trial offers.'
      : 'Liên hệ ngay với đội ngũ chuyên gia của Viettel IDC để được tư vấn thiết kế giải pháp và nhận chương trình ưu đãi dùng thử miễn phí.',
    ctaPrimary: isLaos ? 'Register now' : 'Đăng ký ngay',
    ctaSecondary: isLaos ? 'Free trial' : 'Dùng thử miễn phí',
  };

  return (
    <section 
      id="cta-section"
      className="relative py-16 md:py-20 bg-gradient-to-br from-[var(--vidc-color-brand-red)] via-[color:var(--vidc-color-brand-red-dark)] to-[color:var(--vidc-color-brand-red-deep)] text-white overflow-hidden"
    >
      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10 text-center max-w-4xl space-y-6">
        
        {/* Headline - Exactly like CloudServerFooterCta */}
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          {t.headline}
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
          {t.desc}
        </p>

        {/* Buttons */}
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
            onClick={onOpenQuote}
            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/30 font-extrabold text-base backdrop-blur-md transition-all shadow-lg flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px] cursor-pointer"
          >
            <span>{t.ctaSecondary}</span>
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
