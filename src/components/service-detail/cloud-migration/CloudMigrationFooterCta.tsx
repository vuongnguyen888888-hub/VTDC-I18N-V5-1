import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudMigrationFooterCtaProps {
  onOpenConsult: () => void;
  currentMarket?: SEAMarket;
}

export const CloudMigrationFooterCta: React.FC<CloudMigrationFooterCtaProps> = ({
  onOpenConsult,
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos 
      ? 'Start Transitioning to Viettel Cloud Today'
      : 'Bắt đầu chuyển đổi hạ tầng lên Viettel Cloud ngay hôm nay',
    desc: isLaos
      ? 'Connect with Viettel IDC certified solution architects for a free infrastructure assessment, tailored migration blueprint, and trial environment setup.'
      : 'Liên hệ ngay với đội ngũ chuyên gia của Viettel IDC để được khảo sát hiện trạng miễn phí, tư vấn thiết kế kịch bản di chuyển và nhận gói hỗ trợ Managed Service tối ưu.',
    ctaPrimary: isLaos ? 'Register for Consultation' : 'Nhận Tư Vấn Chuyển Đổi',
    ctaSecondary: isLaos ? 'Explore Pricing & Blueprints' : 'Khám Phá Bảng Giá',
  };

  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
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

        <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto font-normal">
          {t.desc}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <VIDCNativeButton
            type="button"
            onClick={onOpenConsult}
            className="px-8 py-4 rounded-xl bg-white text-[var(--vidc-color-brand-red)] hover:bg-slate-100 active:bg-slate-200 font-extrabold text-base transition-all shadow-xl flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px] cursor-pointer"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
          </VIDCNativeButton>

          <VIDCNativeButton
            type="button"
            onClick={handleScrollToPricing}
            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/30 font-extrabold text-base backdrop-blur-md transition-all shadow-lg flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px] cursor-pointer"
          >
            <span>{t.ctaSecondary}</span>
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
