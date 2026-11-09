import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, HardDrive, Share2, Layers } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CloudFileStorageHeroProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onOpenConsult?: () => void;
}

export const CloudFileStorageHero: React.FC<CloudFileStorageHeroProps> = ({
  currentMarket,
  onNavigateHome,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    storage: isLaos ? 'Cloud Storage' : 'Lưu trữ Đám mây',
    current: 'Viettel Cloud File Storage',
    eyebrow: isLaos 
      ? 'HIGH-PERFORMANCE ENTERPRISE HIERARCHICAL FILE STORAGE SYSTEM' 
      : 'HỆ THỐNG LƯU TRỮ TỆP TIN PHÂN CẤP DOANH NGHIỆP HIỆU NĂNG CAO',
    headline: isLaos 
      ? 'Viettel Cloud File Storage – High-Performance File Storage & Sharing, Unlimited Scalability' 
      : 'Viettel Cloud File Storage – Lưu Trữ & Chia Sẻ Dữ Liệu Tệp Hiệu Năng Cao, Mở Rộng Không Giới Hạn',
    desc: isLaos 
      ? 'Hierarchical tree file storage solution seamlessly supporting both industry-standard CIFS/SMB and NFS protocols. Enables simultaneous data sharing across Virtual Machines (VM) and On-premises servers, optimizing operational costs, providing multi-layer security, and flexibly scaling up to 1,000+ TB.'
      : 'Giải pháp lưu trữ dữ liệu theo cấu trúc cây thư mục phân cấp (Hierarchy), hỗ trợ hoàn hảo hai giao thức chuẩn công nghiệp CIFS/SMB và NFS. Cho phép chia sẻ dữ liệu đồng thời giữa máy chủ ảo (VM) và máy chủ tại chỗ (On-premises), tối ưu hóa chi phí vận hành, bảo mật đa lớp và mở rộng dung lượng linh hoạt lên đến 1.000+ TB.',
    freeTrialOrConsult: isLaos ? 'Free Trial / Request Consultation' : 'Dùng Thử Miễn Phí / Đăng Ký Tư Vấn',
    viewPricing: isLaos ? 'View Detailed Pricing' : 'Xem Bảng Giá Chi Tiết',
    badge1: isLaos ? 'Dual Protocol NFS & CIFS/SMB' : 'Hỗ trợ đồng thời NFS & CIFS/SMB',
    badge2: isLaos ? 'Enterprise SSD & Standard HDD' : 'Tùy chọn 100% Enterprise SSD / HDD',
    badge3: isLaos ? 'SLA 99.99% Availability' : 'Cam kết SLA 99.99% liên tục',
  };

  return (
    <section
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <img alt="Viettel Cloud File Storage" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--vidc-legacy-hex-18181a)] via-[var(--vidc-legacy-hex-18181a)]/90 to-transparent"></div>
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation: Trang chủ > Dịch vụ > Lưu trữ Đám mây > Viettel Cloud File Storage */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="inline-flex items-center flex-wrap gap-2 text-xs text-slate-300">
            <li>
              <VIDCNativeButton 
                type="button"
                onClick={onNavigateHome} 
                className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] rounded px-0.5 drop-shadow cursor-pointer"
              >
                {t.home}
              </VIDCNativeButton>
            </li>
            <li className="flex items-center">
              <ChevronRight className="w-3.5 h-3.5 mx-1 text-slate-500" />
              <span className="text-slate-400">{t.services}</span>
            </li>
            <li className="flex items-center">
              <ChevronRight className="w-3.5 h-3.5 mx-1 text-slate-500" />
              <span className="text-slate-400">{t.storage}</span>
            </li>
            <li className="flex items-center">
              <ChevronRight className="w-3.5 h-3.5 mx-1 text-slate-500" />
              <span className="font-semibold text-white drop-shadow">{t.current}</span>
            </li>
          </ol>
        </nav>

        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 backdrop-blur-sm">
          <HardDrive className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
          <span>{t.eyebrow}</span>
        </div>

        {/* Main Hero Header Grid */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
            {t.headline}
          </h1>
          
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl">
            {t.desc}
          </p>

          {/* Group CTA Buttons: CTA 1 (Primary - Nền đỏ var(--vidc-color-brand-red)), CTA 2 (Secondary - Nút viền xám) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px] cursor-pointer"
            >
              <span>{t.freeTrialOrConsult}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCAnchor
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/30 hover:border-white/50 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] cursor-pointer"
            >
              <span>{t.viewPricing}</span>
            </VIDCAnchor>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-xs sm:text-sm text-slate-300 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Share2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.badge1}</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{t.badge2}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.badge3}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
