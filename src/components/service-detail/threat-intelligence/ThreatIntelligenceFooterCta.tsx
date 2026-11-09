import React from 'react';
import { Phone, Mail, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface ThreatIntelligenceFooterCtaProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
}

export const ThreatIntelligenceFooterCta: React.FC<ThreatIntelligenceFooterCtaProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos
      ? 'Elevate Proactive Threat Defense For Your Organization Today'
      : 'Nâng Cao Năng Lực Phòng Thủ Chủ Động Cho Tổ Chức Ngay Hôm Nay',
    subtext: isLaos
      ? 'Partner with Viettel Cyber Security’s elite engineers to spot emerging adversaries early, securing brand trust and digital assets 24/7/365.'
      : 'Đồng hành cùng các chuyên gia an ninh mạng hàng đầu của Viettel để phát hiện sớm nguy cơ, bảo vệ toàn diện thương hiệu và tài sản số của bạn 24/7/365.',
    hotlineLabel: isLaos ? 'Toll-free hotline:' : 'Hotline tư vấn miễn cước:',
    emailLabel: isLaos ? 'Support & Sales Email:' : 'Email tiếp nhận yêu cầu:',
    websiteLabel: isLaos ? 'Official Website:' : 'Website chính thức:',
    ctaBtn: isLaos ? 'REQUEST CONSULTATION & QUOTE' : 'ĐĂNG KÝ TƯ VẤN & NHẬN BÁO GIÁ NGAY',
  };

  return (
    <section 
      id="bottom-cta"
      className="relative py-16 md:py-20 bg-gradient-to-br from-[var(--vidc-color-brand-red)] via-[color:var(--vidc-color-brand-red-dark)] to-[color:var(--vidc-color-brand-red-deep)] text-white overflow-hidden"
    >
      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10 text-center max-w-4xl space-y-8">
        
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold border border-white/20">
            <ShieldCheck className="w-4 h-4 text-white" />
            <span>VIETTEL CYBER SECURITY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {t.headline}
          </h2>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
            {t.subtext}
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 max-w-3xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-black/20 border border-white/15 backdrop-blur-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[11px] text-white/70">{t.hotlineLabel}</div>
              <VIDCAnchor href="tel:18008088" className="text-sm font-extrabold text-white hover:underline">
                1800 8088
              </VIDCAnchor>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/20 border border-white/15 backdrop-blur-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[11px] text-white/70">{t.emailLabel}</div>
              <VIDCAnchor href="mailto:support@viettelidc.com.vn" className="text-xs font-bold text-white hover:underline block truncate">
                support@viettelidc.com.vn
              </VIDCAnchor>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/20 border border-white/15 backdrop-blur-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[11px] text-white/70">{t.websiteLabel}</div>
              <VIDCAnchor href="https://viettelidc.com.vn" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:underline">
                viettelidc.com.vn
              </VIDCAnchor>
            </div>
          </div>
        </div>

        {/* Main Conversion Button */}
        <div className="pt-2">
          <VIDCNativeButton
            type="button"
            onClick={onOpenConsult}
            className="px-8 sm:px-10 py-4 rounded-xl bg-white text-[var(--vidc-color-brand-red)] hover:bg-slate-100 active:bg-slate-200 font-extrabold text-sm sm:text-base transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 mx-auto focus:outline-none focus:ring-2 focus:ring-white min-h-[48px] cursor-pointer"
          >
            <span>{t.ctaBtn}</span>
            <ArrowRight className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
