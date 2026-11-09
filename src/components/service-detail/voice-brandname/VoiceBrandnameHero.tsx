import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VoiceBrandnameHeroProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
  onNavigateHome?: () => void;
  onNavigateService?: (path: string) => void;
}

export const VoiceBrandnameHero: React.FC<VoiceBrandnameHeroProps> = ({
  currentMarket,
  onOpenConsult,
  onNavigateHome,
  onNavigateService,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    telecom: isLaos ? 'Telecom & IT Solutions' : 'Giải pháp Viễn thông & CNTT',
    serviceName: isLaos ? 'Viettel Voice Brandname' : 'Viettel Voice Brandname',
    eyebrow: isLaos 
      ? 'ENTERPRISE CALL BRAND IDENTITY & VOICE BRANDNAME SOLUTION' 
      : 'GIẢI PHÁP CUỘC GỌI THƯƠNG HIỆU ĐỊNH DANH DOANH NGHIỆP',
    headline: isLaos
      ? 'Viettel Voice Brandname – Affirm Brand Credibility & Optimize Customer Call Pickup Rates'
      : 'Viettel Voice Brandname – Khẳng Định Uy Tín Thương Hiệu & Tối Ưu Tỉ Lệ Bắt Máy Của Khách Hàng',
    desc: isLaos
      ? 'Directly display your Enterprise/Product Brand Name on the recipient’s incoming call screen instead of unfamiliar phone numbers. Create an exceptional professional impression, eliminate spam call suspicion, increase customer trust, and maximize multi-channel engagement efficiency.'
      : 'Hiển thị trực tiếp Tên Thương Hiệu/Sản Phẩm của doanh nghiệp trên màn hình cuộc gọi đến của khách hàng thay cho số điện thoại thông thường. Tạo ấn tượng chuyên nghiệp vượt trội, triệt tiêu nguy cơ bị nhận diện là cuộc gọi rác (spam), gia tăng độ tin cậy và nâng cao hiệu quả tương tác đa kênh.',
    consultCTA: isLaos ? 'Request Consultation' : 'Đăng ký tư vấn',
    pricingCTA: isLaos ? 'Explore Service Pricing' : 'Xem bảng giá',
  };

  const handleHomeClick = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else if (onNavigateService) {
      onNavigateService('/');
    }
  };

  const handleCategoryClick = () => {
    if (onNavigateService) {
      onNavigateService('/services');
    }
  };

  const handleScrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image Matching CloudServerHero */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Voice Brandname" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        {/* Breadcrumb Navigation matching CloudServerHero */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="inline-flex items-center flex-wrap gap-2 text-xs text-slate-200">
            <li>
              <VIDCNativeButton 
                type="button"
                onClick={handleHomeClick} 
                className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] rounded px-0.5 drop-shadow cursor-pointer"
              >
                {t.home}
              </VIDCNativeButton>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <VIDCNativeButton 
                type="button"
                onClick={handleCategoryClick} 
                className="text-slate-200 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] rounded px-0.5 drop-shadow cursor-pointer"
              >
                {t.services}
              </VIDCNativeButton>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-slate-200 drop-shadow">{t.telecom}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">{t.serviceName}</span>
            </li>
          </ol>
        </nav>

        {/* Section Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-red-500/10 text-[var(--vidc-color-brand-red)] font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/20 w-max inline-flex items-center">
            {t.eyebrow}
          </span>
        </div>

        {/* Main Hero Header Layout matching CloudServerHero */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            {t.headline}
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.desc}
          </p>

          {/* Group CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px] cursor-pointer active:scale-95"
            >
              <span>{t.consultCTA}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCNativeButton
              type="button"
              onClick={handleScrollToPricing}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] cursor-pointer active:scale-95"
            >
              <span>{t.pricingCTA}</span>
            </VIDCNativeButton>
          </div>
        </div>
      </div>
    </section>
  );
};
