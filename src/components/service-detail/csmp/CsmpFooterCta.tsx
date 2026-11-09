import React from 'react';
import { Phone, Mail, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CsmpFooterCtaProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
}

export const CsmpFooterCta: React.FC<CsmpFooterCtaProps> = ({ onOpenConsult }) => {
  return (
    <section 
      id="bottom-cta"
      className="py-16 md:py-20 bg-[color:var(--vidc-color-brand-red)] text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>HỘI VIÊN VIETTEL CSMP</span>
        </div>

        <h2 
          id="csmp-footer-cta-h2"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto mb-6"
        >
          Sẵn Sàng Đồng Hành Cùng Viettel Nâng Tầm Trưởng Thành An Toàn Thông Tin?
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
          Đăng ký tham gia ngay hôm nay để nhận các đặc quyền hội viên CSMP, 
          tối ưu chi phí đầu tư và thiết lập lá chắn an ninh mạng vững chắc cho tổ chức của bạn.
        </p>

        {/* CTA Button */}
        <div className="mb-12">
          <VIDCNativeButton
            id="csmp-footer-register-btn"
            onClick={onOpenConsult}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-white hover:bg-gray-100 text-[color:var(--vidc-color-brand-red)] font-bold text-sm sm:text-base transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-[0.98] cursor-pointer"
          >
            <span>ĐĂNG KÝ HỘI VIÊN CSMP NGAY</span>
            <ArrowRight className="w-5 h-5 text-[color:var(--vidc-color-brand-red)]" />
          </VIDCNativeButton>
        </div>

        {/* Direct Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/20 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2.5">
            <Phone className="w-4 h-4 text-white/80 shrink-0" />
            <div className="text-left">
              <span className="text-white/70 block text-[11px]">Hotline miễn cước</span>
              <VIDCAnchor href="tel:18008088" className="font-bold text-white hover:underline">
                1800 8088
              </VIDCAnchor>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5">
            <Mail className="w-4 h-4 text-white/80 shrink-0" />
            <div className="text-left">
              <span className="text-white/70 block text-[11px]">Email tiếp nhận yêu cầu</span>
              <span className="font-semibold text-white">
                sales@viettelidc.com.vn
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5">
            <Globe className="w-4 h-4 text-white/80 shrink-0" />
            <div className="text-left">
              <span className="text-white/70 block text-[11px]">Website chính thức</span>
              <VIDCAnchor href="https://viettelidc.com.vn" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:underline">
                viettelidc.com.vn
              </VIDCAnchor>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
