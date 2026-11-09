import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface WorkspaceFooterCtaProps {
  onOpenQuote: () => void;
  currentMarket?: SEAMarket;
}

export const WorkspaceFooterCta: React.FC<WorkspaceFooterCtaProps> = ({
  onOpenQuote,
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos 
      ? 'Empower Your Digital Workplace with Viettel Workspace Today'
      : 'Bắt đầu nâng tầm không gian làm việc số cùng Viettel Workspace ngay hôm nay',
    desc: isLaos
      ? 'Contact Viettel IDC digital workplace specialists for personalized consultation, seamless migration support, and exclusive free trial programs.'
      : 'Liên hệ ngay với đội ngũ chuyên gia Viettel IDC để được tư vấn lộ trình chuyển đổi số, hỗ trợ di chuyển dữ liệu miễn phí và nhận gói ưu đãi trải nghiệm dịch vụ.',
    ctaPrimary: isLaos ? 'Request Consultation' : 'Đăng ký nhận tư vấn',
    ctaSecondary: isLaos ? 'Hotline 1800 8088' : 'Hotline 1800 8088 (Miễn cước)',
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
            <PhoneCall className="w-5 h-5 text-white" />
            <span>{t.ctaSecondary}</span>
          </VIDCAnchor>
        </div>

      </div>
    </section>
  );
};
