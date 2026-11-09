import React from 'react';
import { Phone, Mail, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudFirewallFooterCtaProps {
  currentMarket?: SEAMarket;
  onOpenQuote: () => void;
}

export const CloudFirewallFooterCta: React.FC<CloudFirewallFooterCtaProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos
      ? 'Ready to Deploy Next-Generation Cybersecurity Shields For Your Cloud?'
      : 'Sẵn Sàng Thiết Lập Lá Chắn Bảo Mật Thế Hệ Mới Cho Hạ Tầng Đám Mây Của Bạn?',
    subtext: isLaos
      ? 'Viettel IDC cybersecurity experts are available 24/7 to audit your current architecture, recommend custom firewall topology, and assist with immediate deployment.'
      : 'Đội ngũ chuyên gia an ninh mạng của Viettel IDC sẵn sàng khảo sát hiện trạng, tư vấn thiết kế mô hình tường lửa tối ưu và hỗ trợ khởi tạo nhanh chóng.',
    cta: isLaos ? 'Register For Consultation & Quote Now' : 'ĐĂNG KÝ NHẬN TƯ VẤN & BÁO GIÁ NGAY',
    hotlineLabel: isLaos ? '24/7 Toll-free Hotline' : 'Hotline hỗ trợ miễn cước 24/7',
    hotlineVal: '1800 8088',
    websiteLabel: isLaos ? 'Official Portal' : 'Website chính thức',
    websiteVal: 'https://viettelidc.com.vn/',
    emailLabel: isLaos ? 'Solution Support Email' : 'Email tư vấn giải pháp',
    emailVal: 'support@viettelidc.com.vn',
  };

  return (
    <section 
      id="footer-cta" 
      className="py-16 md:py-20 bg-gradient-to-br from-[color:var(--vidc-color-brand-red)] to-[var(--vidc-legacy-hex-c4002b)] text-white relative overflow-hidden"
    >
      {/* Decorative SVG Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border-[30px] border-white/40" />
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full border-[20px] border-white/30" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10 text-center">
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-white/20 text-white backdrop-blur-md">
            <ShieldCheck className="w-4 h-4" />
            <span>AN TOÀN THÔNG TIN CHUẨN QUỐC TẾ</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            {t.headline}
          </h2>

          <p className="text-sm sm:text-base text-red-50 leading-relaxed max-w-2xl mx-auto">
            {t.subtext}
          </p>

          {/* Action CTA Button */}
          <div className="pt-2">
            <VIDCNativeButton
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-[var(--vidc-color-brand-red)] hover:bg-red-50 font-black text-sm sm:text-base shadow-2xl hover:shadow-white/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>{t.cta}</span>
              <ArrowRight className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
            </VIDCNativeButton>
          </div>

          {/* Contact Direct Info Row */}
          <div className="pt-8 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            
            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs flex items-center justify-center gap-2.5">
              <Phone className="w-4 h-4 text-red-200" />
              <div className="text-left">
                <div className="text-red-200 text-[10px]">{t.hotlineLabel}</div>
                <div className="font-bold text-white font-mono">{t.hotlineVal}</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs flex items-center justify-center gap-2.5">
              <Globe className="w-4 h-4 text-red-200" />
              <div className="text-left">
                <div className="text-red-200 text-[10px]">{t.websiteLabel}</div>
                <div className="font-bold text-white font-mono">viettelidc.com.vn</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs flex items-center justify-center gap-2.5">
              <Mail className="w-4 h-4 text-red-200" />
              <div className="text-left">
                <div className="text-red-200 text-[10px]">{t.emailLabel}</div>
                <div className="font-bold text-white font-mono">{t.emailVal}</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
