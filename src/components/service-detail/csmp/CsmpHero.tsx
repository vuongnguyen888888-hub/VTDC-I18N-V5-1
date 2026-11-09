import React from 'react';
import { ArrowRight, ShieldCheck, Award, FileText, CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CsmpHeroProps {
  currentMarket: SEAMarket;
  onOpenConsult: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const CsmpHero: React.FC<CsmpHeroProps> = ({
  onOpenConsult,
  onNavigateHome,
}) => {
  return (
    <section 
      id="csmp-hero" 
      className="relative bg-white pt-6 pb-12 md:pb-16 border-b border-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav 
          id="csmp-breadcrumb-nav"
          aria-label="Breadcrumb" 
          className="flex items-center space-x-2 text-xs text-gray-500 mb-6 flex-wrap gap-y-1"
        >
          <VIDCNativeButton 
            id="csmp-breadcrumb-home-btn"
            onClick={onNavigateHome}
            className="hover:text-[color:var(--vidc-color-brand-red)] transition-colors cursor-pointer"
          >
            Trang chủ
          </VIDCNativeButton>
          <span>/</span>
          <span className="text-gray-500">Dịch vụ</span>
          <span>/</span>
          <span className="text-gray-500">An toàn Thông tin</span>
          <span>/</span>
          <span className="text-[color:var(--vidc-color-brand-red)] font-medium" aria-current="page">
            Viettel Cyber Security Maturity Program (vCSMP)
          </span>
        </nav>

        <div className="max-w-4xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-[color:var(--vidc-color-brand-red)] text-xs font-semibold uppercase tracking-wider mb-5">
            <ShieldCheck className="w-4 h-4 text-[color:var(--vidc-color-brand-red)]" />
            <span>CHƯƠNG TRÌNH ĐỐI TÁC ĐẶC QUYỀN ĐỒNG HÀNH TRƯỞNG THÀNH AN TOÀN THÔNG TIN TOÀN DIỆN</span>
          </div>

          {/* H1 Headline */}
          <h1 
            id="csmp-main-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--vidc-legacy-hex-222225)] leading-tight tracking-tight mb-5"
          >
            Viettel Cyber Security Maturity Program (vCSMP) – Chương Trình Bảo Vệ Toàn Diện Cùng Doanh Nghiệp
          </h1>

          {/* Sub-heading */}
          <p 
            id="csmp-subheading-text"
            className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl"
          >
            Chương trình đối tác đặc quyền giúp doanh nghiệp bảo vệ toàn diện trước các mối nguy an ninh mạng, 
            giải quyết bài toán thiếu hụt nhân sự chuyên môn cao và tối ưu chi phí đầu tư ATTT dài hạn lên tới 60% 
            theo khung chuẩn quốc tế NIST-CSF.
          </p>

          {/* Group CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <VIDCNativeButton
              id="csmp-hero-primary-cta"
              onClick={() => onOpenConsult('Đăng ký tư vấn chương trình Viettel CSMP')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[color:var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002b)] text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
            >
              <span>Nhận Tư Vấn Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </VIDCNativeButton>

            <VIDCAnchor
              id="csmp-hero-secondary-cta"
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm border border-gray-300 transition-all duration-200 cursor-pointer"
            >
              <span>Xem Chi Tiết Các Gói Dịch Vụ</span>
            </VIDCAnchor>
          </div>

          {/* Key Metrics / Value Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
              <div className="w-9 h-9 rounded-md bg-red-100 flex items-center justify-center text-[color:var(--vidc-color-brand-red)] shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Khung chuẩn quốc tế</p>
                <p className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">NIST-CSF 2.0</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
              <div className="w-9 h-9 rounded-md bg-red-100 flex items-center justify-center text-[color:var(--vidc-color-brand-red)] shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Tối ưu tổng chi phí</p>
                <p className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">Tiết kiệm tới 60%</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
              <div className="w-9 h-9 rounded-md bg-red-100 flex items-center justify-center text-[color:var(--vidc-color-brand-red)] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Bảo vệ & Vận hành</p>
                <p className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">SOC 24/7 & CTI Toàn Trình</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
