import React from 'react';
import { ArrowRight, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CloudBackupFooterCtaProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CloudBackupFooterCta: React.FC<CloudBackupFooterCtaProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos
      ? 'Start Protecting Your Enterprise Data with Viettel Cloud Backup Today'
      : 'Bắt đầu thiết lập lá chắn an toàn dữ liệu cùng Viettel Cloud Backup ngay hôm nay',
    desc: isLaos
      ? 'Contact Viettel IDC experts now to receive dedicated backup architecture design, ransomware protection consultation, and trial offers.'
      : 'Liên hệ ngay với đội ngũ chuyên gia của Viettel IDC để được tư vấn thiết kế kiến trúc sao lưu, giải pháp chống Ransomware và nhận chương trình dùng thử miễn phí.',
    ctaPrimary: isLaos ? 'Register now' : 'Đăng ký ngay',
    ctaSecondary: isLaos ? 'Request consultation' : 'Đăng ký tư vấn',
    commitment1: isLaos ? '100% Immutable Ransomware Shield' : 'Bảo vệ bất biến 100% chống Ransomware',
    commitment2: isLaos ? 'ANSI/TIA-942 Rated 3 Data Centers' : 'Hạ tầng Data Center chuẩn quốc tế Rated 3',
    commitment3: isLaos ? '24/7/365 Expert Support' : 'Hỗ trợ kỹ thuật chuyên sâu 24/7/365',
    hotlineLabel: isLaos ? 'Hotline:' : 'Hotline:',
    emailLabel: isLaos ? 'Email:' : 'Email:',
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

        {/* Value Commitments */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-1 text-xs sm:text-sm text-red-100 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" />
            {t.commitment1}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" />
            {t.commitment2}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-white" />
            {t.commitment3}
          </span>
        </div>

        {/* 2 CTA Buttons Matching CloudServerFooterCta */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <VIDCAnchor
            href="https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-backup"
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

        {/* Contact Direct Strip */}
        <div className="pt-8 border-t border-red-400/30 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-red-100">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-white shrink-0" />
            <span>{t.hotlineLabel}</span>
            <VIDCAnchor href="tel:18008088" className="font-bold text-white hover:underline">
              1800 8088
            </VIDCAnchor>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-white shrink-0" />
            <span>{t.emailLabel}</span>
            <VIDCAnchor href="mailto:cskh@viettelidc.com.vn" className="font-semibold text-white hover:underline">
              cskh@viettelidc.com.vn
            </VIDCAnchor>
            <span className="opacity-60">|</span>
            <VIDCAnchor href="mailto:support@viettelidc.com.vn" className="font-semibold text-white hover:underline">
              support@viettelidc.com.vn
            </VIDCAnchor>
          </div>
        </div>

      </div>
    </section>
  );
};
