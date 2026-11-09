import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface ColocationFooterCtaProps {
  onOpenConsult?: () => void;
  currentMarket?: SEAMarket;
}

export const ColocationFooterCta: React.FC<ColocationFooterCtaProps> = ({
  onOpenConsult,
  currentMarket,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    headline: isLaos
      ? 'Establish Secure & International Standard Server Colocation Space Today'
      : 'Khởi Lập Không Gian Đặt Máy Chủ An Toàn & Chuẩn Quốc Tế Ngay Hôm Nay',
    desc: isLaos
      ? 'Let Viettel IDC’s 9 TIA-942 Rated 3 standard Data Centers protect and operate your critical enterprise IT infrastructure.'
      : 'Hãy để hệ thống 9 Trung tâm Dữ liệu chuẩn TIA-942 Rated 3 của Viettel IDC bảo vệ và vận hành hạ tầng CNTT trọng yếu của doanh nghiệp bạn.',
    ctaPrimary: isLaos ? 'GET CONSULTATION & QUOTE NOW' : 'Nhận Tư Vấn & Báo Giá Ngay',
    ctaSecondary: isLaos ? 'Hotline 1800 8088' : 'Hotline 1800 8088',
  };

  return (
    <section 
      id="cta-section"
      className="relative py-16 md:py-20 bg-gradient-to-br from-[var(--vidc-color-brand-red)] via-[color:var(--vidc-color-brand-red-dark)] to-[color:var(--vidc-color-brand-red-deep)] text-white overflow-hidden"
    >
      {/* Subtle radial glow and background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10 text-center max-w-4xl space-y-6">
        
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          {t.headline}
        </h2>

        <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto font-normal">
          {t.desc}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <VIDCNativeButton
            id="btn-bottom-consult"
            type="button"
            onClick={onOpenConsult}
            className="px-8 py-4 rounded-xl bg-white text-[var(--vidc-color-brand-red)] hover:bg-slate-100 active:bg-slate-200 font-extrabold text-sm sm:text-base transition-all shadow-xl flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px] cursor-pointer"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
          </VIDCNativeButton>

          <VIDCAnchor
            href="tel:18008088"
            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/30 font-extrabold text-sm sm:text-base backdrop-blur-md transition-all shadow-lg flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px] cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-white" />
            <span>{t.ctaSecondary}</span>
          </VIDCAnchor>
        </div>

      </div>
    </section>
  );
};

