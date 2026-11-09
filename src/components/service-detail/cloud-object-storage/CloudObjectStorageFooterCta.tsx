import React from 'react';
import { ArrowRight, Phone, Mail, Globe } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CloudObjectStorageFooterCtaProps {
  onOpenQuote: () => void;
  currentMarket?: SEAMarket;
}

export const CloudObjectStorageFooterCta: React.FC<CloudObjectStorageFooterCtaProps> = ({ 
  onOpenQuote, 
  currentMarket 
}) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    headline: isLaos
      ? 'Launch Your Unlimited Cloud Storage Repository with Viettel IDC'
      : 'Khởi Lập Không Gian Lưu Trữ Đám Mây Mở Rộng Không Giới Hạn Cùng Viettel IDC',
    subtext: isLaos
      ? 'Optimize storage TCO, enhance multi-zone data durability, and accelerate data delivery for your mission-critical applications today.'
      : 'Tối ưu chi phí lưu trữ, nâng cao bảo mật đa vùng và tăng tốc phân phối dữ liệu cho ứng dụng của bạn ngay hôm nay.',
    hotlineLabel: isLaos ? 'Toll-free Hotline:' : 'Hotline hỗ trợ miễn phí:',
    emailLabel: isLaos ? 'Solution Experts Email:' : 'Email chuyên gia giải pháp:',
    portalLabel: isLaos ? 'Official Portal:' : 'Cổng thông tin:',
    ctaBtn: isLaos ? 'REGISTER FOR CONSULTATION & QUOTE' : 'ĐĂNG KÝ TƯ VẤN & NHẬN BÁO GIÁ NGAY',
    viewPricing: isLaos ? 'Explore Storage Tiers' : 'Xem Bảng Giá Phân Lớp',
  };

  return (
    <section 
      id="cta-section"
      className="relative py-16 md:py-24 bg-gradient-to-br from-[color:var(--vidc-color-brand-red)] via-[color:var(--vidc-color-brand-red-dark)] to-[color:var(--vidc-color-brand-red-deep)] text-white overflow-hidden"
    >
      {/* Abstract Background Ring Visual */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/20 rounded-full blur-2xl pointer-events-none" />

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10 text-center max-w-4xl space-y-8">
        
        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-black tracking-tight text-white leading-tight">
          {t.headline}
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed max-w-2xl mx-auto font-normal">
          {t.subtext}
        </p>

        {/* Contact Info Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
          <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-[11px] text-white/80">{t.hotlineLabel}</div>
              <div className="text-sm font-extrabold text-white">1800 8088</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-[11px] text-white/80">{t.emailLabel}</div>
              <div className="text-xs font-bold text-white truncate max-w-[170px]">sales@viettelidc.com.vn</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-[11px] text-white/80">{t.portalLabel}</div>
              <div className="text-sm font-bold text-white">viettelidc.com.vn</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <VIDCNativeButton
            type="button"
            onClick={onOpenQuote}
            className="px-8 py-4 rounded-xl bg-white text-[var(--vidc-color-brand-red)] hover:bg-slate-100 active:bg-slate-200 font-extrabold text-sm sm:text-base transition-all shadow-2xl flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px] cursor-pointer active:scale-98"
          >
            <span>{t.ctaBtn}</span>
            <ArrowRight className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
          </VIDCNativeButton>

          <VIDCAnchor
            href="#pricing"
            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/30 font-extrabold text-sm sm:text-base backdrop-blur-md transition-all shadow-lg flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-white min-h-[48px]"
          >
            <span>{t.viewPricing}</span>
          </VIDCAnchor>
        </div>

      </div>
    </section>
  );
};
