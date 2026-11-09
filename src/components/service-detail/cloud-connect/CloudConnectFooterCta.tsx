import React from 'react';
import { Phone, Mail, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudConnectFooterCtaProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
}

export const CloudConnectFooterCta: React.FC<CloudConnectFooterCtaProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  return (
    <section 
      id="cta-section"
      className="py-16 md:py-20 bg-gradient-to-br from-[var(--vidc-color-brand-red)] via-[color:var(--vidc-color-brand-red-dark)] to-[color:var(--vidc-color-brand-red-deep)] text-white relative overflow-hidden"
    >
      {/* Background Graphic Watermark */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-radial-at-c from-transparent to-black/30 pointer-events-none" />

      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold bg-white/15 text-white backdrop-blur-xs border border-white/20">
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span>
              {isLaos 
                ? 'DEDICATED HYBRID CLOUD INTERCONNECT - SAVE UP TO 50% EGRESS'
                : 'KẾT NỐI CHUYÊN DỤNG TIẾT KIỆM 50% CHI PHÍ BĂNG THÔNG'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {isLaos
              ? 'Ready to Deploy High-Speed Direct Interconnect to Multi-Cloud?'
              : 'Sẵn Sàng Thiết Lập Kênh Truyền Riêng Tới Multi-Cloud Cho Doanh Nghiệp?'}
          </h2>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
            {isLaos
              ? 'Viettel IDC solution architects and networking specialists are ready to consult on optimal topologies and cost-effective bandwidth models.'
              : 'Đội ngũ chuyên gia kiến trúc mạng và giải pháp Cloud của Viettel IDC luôn sẵn sàng tư vấn phương án kết nối tối ưu hiệu năng và tiết kiệm chi phí nhất cho bạn.'}
          </p>

          {/* Action CTA Button */}
          <div className="pt-2">
            <VIDCNativeButton
              type="button"
              id="btn-cloud-connect-footer-cta"
              onClick={onOpenConsult}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[var(--vidc-color-brand-red)] bg-white hover:bg-slate-100 shadow-2xl transition-all transform active:scale-95"
            >
              <span>{isLaos ? 'Request Technical Consultation' : 'ĐĂNG KÝ TƯ VẤN KẾT NỐI NGAY'}</span>
              <ArrowRight className="w-4 h-4" />
            </VIDCNativeButton>
          </div>

          {/* Contact Direct Info Bar */}
          <div className="pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-white/90">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Hotline: <strong className="text-white font-bold">1800 8088</strong> (Miễn cước)</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>sales@viettelidc.com.vn</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Globe className="w-3.5 h-3.5 text-white" />
              <span>https://viettelidc.com.vn</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

