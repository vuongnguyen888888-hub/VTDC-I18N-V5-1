import React from 'react';
import { Phone, Mail, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface HybridConnectFooterCtaProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
}

export const HybridConnectFooterCta: React.FC<HybridConnectFooterCtaProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    badge: isLaos ? 'DEDICATED ENTERPRISE NETWORKING' : 'KẾT NỐI DOANH NGHIỆP CHUYÊN BIỆT',
    headline: isLaos
      ? 'Ready to Establish a Dedicated Private Channel to Viettel IDC Cloud?'
      : 'Sẵn Sàng Thiết Lập Kênh Truyền Riêng Tới Đám Mây Viettel IDC?',
    subtext: isLaos
      ? 'Viettel IDC’s specialized network solution architects are available 24/7 to survey lines, design optimized connectivity topologies, and support implementation for your enterprise.'
      : 'Đội ngũ kiến trúc sư giải pháp mạng của Viettel IDC luôn sẵn sàng khảo sát hạ tầng, tư vấn mô hình đấu nối tối ưu và đồng hành triển khai 24/7 cho doanh nghiệp của bạn.',
    hotlineLabel: isLaos ? 'Toll-Free Hotline' : 'Hotline tư vấn',
    emailLabel: isLaos ? 'Solution Email' : 'Email giải pháp',
    websiteLabel: isLaos ? 'Official Portal' : 'Cổng thông tin',
    ctaBtnPrimary: isLaos ? 'REGISTER FOR TECHNICAL CONSULTATION' : 'ĐĂNG KÝ TƯ VẤN KỸ THUẬT',
    ctaBtnSecondary: isLaos ? 'Explore Topology Models' : 'Khám phá mô hình kết nối',
  };

  return (
    <section 
      id="cta-section"
      className="relative py-16 md:py-20 bg-gradient-to-br from-[var(--vidc-color-brand-red)] via-[color:var(--vidc-color-brand-red-dark)] to-[color:var(--vidc-color-brand-red-deep)] text-white overflow-hidden"
    >
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-black/20 blur-3xl pointer-events-none" />

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10 text-center">
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-white/10 text-white border border-white/20 backdrop-blur-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {t.headline}
          </h2>

          <p className="text-sm sm:text-base text-red-100 leading-relaxed font-normal max-w-2xl mx-auto">
            {t.subtext}
          </p>

          {/* Contact Direct Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 pb-2 text-xs sm:text-sm text-white/90">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-xs border border-white/20">
              <Phone className="w-4 h-4 text-white" />
              <span>{t.hotlineLabel}: <strong className="text-white font-extrabold">1800 8088</strong></span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-xs border border-white/20">
              <Mail className="w-4 h-4 text-white" />
              <span>{t.emailLabel}: <strong className="text-white font-extrabold">sales@viettelidc.com.vn</strong></span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-xs border border-white/20">
              <Globe className="w-4 h-4 text-white" />
              <span>{t.websiteLabel}: <strong className="text-white font-extrabold">viettelidc.com.vn</strong></span>
            </div>
          </div>

          {/* Group CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[var(--vidc-color-brand-red)] hover:bg-slate-100 font-extrabold text-sm sm:text-base transition-all shadow-xl flex items-center justify-center gap-2.5 min-h-[48px] active:scale-95"
            >
              <span>{t.ctaBtnPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </VIDCNativeButton>

            <VIDCAnchor
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 font-extrabold text-sm sm:text-base backdrop-blur-md transition-all shadow-lg flex items-center justify-center gap-2.5 min-h-[48px] active:scale-95"
            >
              <span>{t.ctaBtnSecondary}</span>
            </VIDCAnchor>
          </div>
        </div>

      </div>
    </section>
  );
};
