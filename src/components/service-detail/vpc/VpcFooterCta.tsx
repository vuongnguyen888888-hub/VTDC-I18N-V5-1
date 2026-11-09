import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VpcFooterCtaProps {
  onOpenQuote: () => void;
  currentMarket?: SEAMarket;
}

export const VpcFooterCta: React.FC<VpcFooterCtaProps> = ({ onOpenQuote, currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    headline: isLaos
      ? 'Ready to build an isolated virtual data center for your enterprise?'
      : 'Sẵn sàng xây dựng trung tâm dữ liệu ảo độc lập cho doanh nghiệp của bạn?',
    desc: isLaos
      ? 'Contact Viettel IDC Cloud solution architecture experts now for cost-optimized consulting and 24/7 migration support.'
      : 'Đội ngũ chuyên gia kiến trúc giải pháp Cloud của Viettel IDC luôn sẵn sàng đồng hành, tư vấn giải pháp tối ưu chi phí và hỗ trợ chuyển đổi hạ tầng 24/7.',
    ctaPrimary: isLaos ? 'Request Solution Consultation' : 'Đăng ký nhận tư vấn kiến trúc giải pháp',
    ctaSecondary: isLaos ? 'Get Detailed Quote' : 'Yêu cầu báo giá chi tiết',
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

