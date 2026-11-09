import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface VAPMFooterCtaProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const VAPMFooterCta: React.FC<VAPMFooterCtaProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos
      ? 'Elevate and optimize application performance with Viettel vAPM today'
      : 'Bắt đầu tối ưu hiệu năng ứng dụng với Viettel vAPM ngay hôm nay',
    desc: isLaos
      ? 'Contact Viettel IDC application observability specialists now to get dedicated architecture consultation and exclusive trial packages.'
      : 'Liên hệ ngay với đội ngũ chuyên gia của Viettel IDC để được khảo sát thực trạng hệ thống, tư vấn kiến trúc giải pháp và nhận chương trình ưu đãi dùng thử miễn phí.',
    registerNow: isLaos ? 'Register for Free Trial' : 'Đăng Ký Trải Nghiệm Ngay',
    consultNow: isLaos ? 'Contact Solution Expert' : 'Tư Vấn Với Chuyên Gia',
  };

  return (
    <section 
      id="cta-section"
      className="relative py-16 md:py-20 bg-gradient-to-br from-[var(--vidc-color-brand-red)] via-[color:var(--vidc-color-brand-red-dark)] to-[color:var(--vidc-color-brand-red-deep)] text-white overflow-hidden"
    >
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10 text-center max-w-4xl space-y-6">
        
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          {t.headline}
        </h2>

        <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
          {t.desc}
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <VIDCAnchor
            href="https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-server"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white text-[var(--vidc-color-brand-red)] hover:bg-slate-100 active:bg-slate-200 font-extrabold text-base transition-all shadow-xl focus:outline-none focus:ring-2 focus:ring-white min-h-[48px]"
          >
            <span>{t.registerNow}</span>
            <ArrowRight className="w-5 h-5" />
          </VIDCAnchor>

          <VIDCNativeButton
            type="button"
            onClick={onOpenConsult}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/30 font-extrabold text-base backdrop-blur-md transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-white min-h-[48px] cursor-pointer"
          >
            <PhoneCall className="w-5 h-5" />
            <span>{t.consultNow}</span>
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
