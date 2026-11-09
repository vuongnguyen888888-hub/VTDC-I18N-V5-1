import React from 'react';
import { PhoneCall, Mail, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface VCMPFooterCtaProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const VCMPFooterCta: React.FC<VCMPFooterCtaProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    badge: isLaos ? 'MULTI-CLOUD CONSULTATION' : 'TƯ VẤN KIẾN TRÚC MULTI-CLOUD',
    headline: isLaos 
      ? 'Ready to Unify & Optimize Multi-Cloud Governance for Your Enterprise?' 
      : 'Sẵn Sàng Hợp Nhất & Tối Ưu Hóa Quản Trị Multi-Cloud Cho Doanh Nghiệp?',
    desc: isLaos
      ? 'Viettel IDC’s Cloud Solution Architects are always ready to consult, survey, and construct an end-to-end multi-cloud management roadmap tailored to your business.'
      : 'Đội ngũ chuyên gia kiến trúc giải pháp Cloud của Viettel IDC luôn sẵn sàng đồng hành tư vấn, khảo sát và xây dựng phương án quản trị đa đám mây toàn diện cho bạn.',
    hotlineLabel: isLaos ? 'Toll-free Hotline' : 'Hotline tư vấn miễn cước',
    emailLabel: isLaos ? 'Solution Support Email' : 'Email hỗ trợ giải pháp',
    websiteLabel: isLaos ? 'Official Portal' : 'Website chính thức',
    ctaBtn: isLaos ? 'REGISTER FOR CONSULTATION & LIVE DEMO' : 'ĐĂNG KÝ TƯ VẤN & TRẢI NGHIỆM DEMO',
  };

  return (
    <section 
      id="cta-bottom"
      className="py-16 md:py-24 bg-[var(--vidc-color-brand-red)] text-white relative overflow-hidden"
    >
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 text-center max-w-4xl z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold bg-white/20 text-white border border-white/30 backdrop-blur-sm mb-6">
          <ShieldCheck className="w-4 h-4 text-white" />
          <span>{t.badge}</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
          {t.headline}
        </h2>

        {/* Sub-text */}
        <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
          {t.desc}
        </p>

        {/* Main CTA Button */}
        <div className="mb-12">
          <VIDCNativeButton
            type="button"
            onClick={onOpenConsult}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[var(--vidc-color-brand-red)] font-black text-base transition-all transform hover:scale-105 shadow-2xl shadow-black/20 focus:outline-none focus:ring-4 focus:ring-white/40 cursor-pointer min-h-[48px]"
          >
            <span>{t.ctaBtn}</span>
            <ArrowRight className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
          </VIDCNativeButton>
        </div>

        {/* Direct Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/20 text-left">
          
          {/* Hotline */}
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
            <div className="flex items-center gap-2 text-xs font-bold text-white/80 mb-1">
              <PhoneCall className="w-4 h-4" />
              <span>{t.hotlineLabel}</span>
            </div>
            <VIDCAnchor 
              href="tel:18008088" 
              className="text-lg font-black text-white hover:underline block"
            >
              1800 8088
            </VIDCAnchor>
          </div>

          {/* Email */}
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
            <div className="flex items-center gap-2 text-xs font-bold text-white/80 mb-1">
              <Mail className="w-4 h-4" />
              <span>{t.emailLabel}</span>
            </div>
            <VIDCAnchor 
              href="mailto:sales@viettelidc.com.vn" 
              className="text-xs font-bold text-white hover:underline block truncate"
            >
              sales@viettelidc.com.vn
            </VIDCAnchor>
          </div>

          {/* Website */}
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
            <div className="flex items-center gap-2 text-xs font-bold text-white/80 mb-1">
              <Globe className="w-4 h-4" />
              <span>{t.websiteLabel}</span>
            </div>
            <VIDCAnchor 
              href="https://viettelidc.com.vn" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-white hover:underline block"
            >
              viettelidc.com.vn
            </VIDCAnchor>
          </div>

        </div>

      </div>
    </section>
  );
};
