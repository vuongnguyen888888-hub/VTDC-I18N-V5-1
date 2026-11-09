import React from 'react';
import { Phone, Mail, Globe, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CloudFileStorageFooterCtaProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CloudFileStorageFooterCta: React.FC<CloudFileStorageFooterCtaProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    headline: isLaos
      ? 'Ready to Optimize Your Enterprise File Storage Infrastructure Today?'
      : 'Sẵn Sàng Tối Ưu Hóa Hạ Tầng Lưu Trữ Tệp Doanh Nghiệp Ngay Hôm Nay?',
    subtext: isLaos
      ? 'Expand storage without limits, connect flexibly via CIFS/NFS, and eliminate maintenance overhead with Viettel Cloud File Storage.'
      : 'Mở rộng không gian lưu trữ không giới hạn, kết nối linh hoạt và cắt giảm chi phí bảo dưỡng hạ tầng cùng Viettel Cloud File Storage.',
    ctaButton: isLaos ? 'REQUEST CONSULTATION & PRICING NOW' : 'ĐĂNG KÝ NHẬN TƯ VẤN & BÁO GIÁ NGAY',
    hotlineLabel: isLaos ? 'Toll-Free Hotline:' : 'Hotline tư vấn miễn cước:',
    emailLabel: isLaos ? 'Enterprise Inquiries:' : 'Email tiếp nhận giải pháp:',
    websiteLabel: isLaos ? 'Official Portal:' : 'Website chính thức:',
    commitment1: isLaos ? '100% Dedicated Domestic Bandwidth' : 'Băng thông nội địa 100% không suy hao',
    commitment2: isLaos ? 'ANSI/TIA-942 Rated 3 Data Centers' : 'Hạ tầng Data Center chuẩn quốc tế TIA-942 Rated 3',
    commitment3: isLaos ? '24/7/365 Solution Support' : 'Hỗ trợ kỹ thuật 24/7/365 từ kỹ sư Viettel IDC',
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-[var(--vidc-color-brand-red)] text-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-dots-cfs" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots-cfs)" />
        </svg>
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {t.headline}
          </h2>

          <p className="text-base sm:text-lg text-red-100 max-w-2xl mx-auto leading-relaxed">
            {t.subtext}
          </p>

          {/* Value Commitments */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 text-xs sm:text-sm text-red-100 font-medium">
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

          {/* Main CTA Button: Nền Trắng, Chữ Đỏ var(--vidc-color-brand-red) */}
          <div className="pt-4">
            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[var(--vidc-color-brand-red)] font-black text-sm sm:text-base tracking-wide uppercase transition-all shadow-2xl hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-white/40"
            >
              <span>{t.ctaButton}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>
          </div>

          {/* Contact Direct Strip */}
          <div className="pt-10 border-t border-red-400/40 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs sm:text-sm text-white">
            <div className="space-y-1">
              <span className="text-red-200 block text-xs">{t.hotlineLabel}</span>
              <VIDCAnchor 
                href="tel:18008088" 
                className="font-bold text-base hover:underline inline-flex items-center gap-1.5 justify-center"
              >
                <Phone className="w-4 h-4 text-red-200" />
                1800 8088
              </VIDCAnchor>
            </div>

            <div className="space-y-1">
              <span className="text-red-200 block text-xs">{t.emailLabel}</span>
              <VIDCAnchor 
                href="mailto:sales@viettelidc.com.vn" 
                className="font-semibold hover:underline inline-flex items-center gap-1.5 justify-center text-xs sm:text-sm"
              >
                <Mail className="w-4 h-4 text-red-200" />
                sales@viettelidc.com.vn
              </VIDCAnchor>
            </div>

            <div className="space-y-1">
              <span className="text-red-200 block text-xs">{t.websiteLabel}</span>
              <VIDCAnchor 
                href="https://viettelidc.com.vn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold hover:underline inline-flex items-center gap-1.5 justify-center text-xs sm:text-sm"
              >
                <Globe className="w-4 h-4 text-red-200" />
                viettelidc.com.vn
              </VIDCAnchor>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
