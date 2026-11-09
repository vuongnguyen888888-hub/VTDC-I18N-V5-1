import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CloudDRFooterCtaProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
}

export const CloudDRFooterCta: React.FC<CloudDRFooterCtaProps> = ({ currentMarket, onOpenConsult }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos 
      ? 'Start protecting your business continuity with Viettel Cloud DR'
      : 'Bắt đầu bảo vệ tính liên tục của doanh nghiệp với Viettel Cloud DR',
    desc: isLaos
      ? 'Contact Viettel IDC disaster recovery experts now for survey, customized DR runbook design, and trial failover drills.'
      : 'Liên hệ ngay với đội ngũ chuyên gia DR của Viettel IDC để được tư vấn thiết kế kịch bản dự phòng và tham gia diễn tập DR miễn phí.',
    ctaPrimary: isLaos ? 'Register now' : 'Đăng ký ngay',
    ctaSecondary: isLaos ? 'Request DR consultation' : 'Đăng ký nhận tư vấn DR',
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
          <VIDCAnchor
            href="https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-dr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-white text-[var(--vidc-color-brand-red)] hover:bg-slate-100 active:bg-slate-200 font-extrabold text-base transition-all shadow-xl flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px]"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
          </VIDCAnchor>

          <VIDCNativeButton
            type="button"
            onClick={onOpenConsult}
            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/30 font-extrabold text-base backdrop-blur-md transition-all shadow-lg flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px] cursor-pointer"
          >
            <span>{t.ctaSecondary}</span>
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
