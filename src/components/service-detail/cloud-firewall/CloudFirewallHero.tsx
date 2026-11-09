import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudFirewallHeroProps {
  currentMarket?: SEAMarket;
  onOpenQuote: () => void;
  onNavigateHome?: () => void;
  onNavigateService?: (path: string) => void;
}

export const CloudFirewallHero: React.FC<CloudFirewallHeroProps> = ({
  currentMarket,
  onOpenQuote,
  onNavigateHome,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    security: isLaos ? 'Information Security' : 'An toàn Thông tin',
    eyebrow: isLaos 
      ? 'ML-POWERED NEXT-GEN FIREWALL (NGFW) ON CLOUD' 
      : 'TƯỜNG LỬA THẾ HỆ MỚI ML-POWERED NGFW TRÊN ĐÁM MÂY',
    headline: isLaos
      ? 'Viettel Cloud Firewall – Next-Generation Cybersecurity Shield Protecting Enterprise Cloud Infrastructure'
      : 'Viettel Cloud Firewall – Lá Chắn An Ninh Mạng Thế Hệ Mới Bảo Vệ Hạ Tầng Đám Mây Doanh Nghiệp',
    desc: isLaos
      ? 'Machine Learning-Powered Next Generation Firewall solution in strategic partnership with global leaders (Palo Alto Networks, Fortinet). Delivers deep application layer (L7) access control, real-time advanced threat prevention, and high availability SLA commitments.'
      : 'Giải pháp tường lửa thế hệ mới (Machine Learning-Powered Next Generation Firewall) hợp tác cùng các hãng bảo mật hàng đầu thế giới (Palo Alto Networks, Fortinet). Cung cấp khả năng kiểm soát truy cập sâu đến tầng ứng dụng (L7), ngăn chặn các mối đe dọa nâng cao theo thời gian thực và cam kết độ sẵn sàng cao với hạ tầng đạt chuẩn quốc tế.',
    freeTrial: isLaos ? 'Free trial / Consultation' : 'Dùng thử miễn phí / Đăng ký tư vấn',
    explorePricing: isLaos ? 'Explore pricing' : 'Khám phá bảng giá',
  };

  const handleScrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('pricing');
    if (elem) {
      const yOffset = -80;
      const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Cloud Firewall" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--vidc-legacy-hex-18181a)] via-[var(--vidc-legacy-hex-18181a)]/90 to-[var(--vidc-legacy-hex-18181a)]/70" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="inline-flex items-center flex-wrap gap-2 text-xs text-slate-200">
            <li>
              <VIDCNativeButton 
                onClick={onNavigateHome} 
                className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] rounded px-0.5 drop-shadow cursor-pointer"
              >
                {t.home}
              </VIDCNativeButton>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-slate-200 drop-shadow">{t.services}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-slate-200 drop-shadow">{t.security}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">Viettel Cloud Firewall</span>
            </li>
          </ol>
        </nav>

        {/* Section Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-red-500/10 text-[var(--vidc-color-brand-red)] font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/20 w-max inline-flex items-center">
            {t.eyebrow}
          </span>
        </div>

        {/* Main Hero Header Grid */}
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
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px] cursor-pointer"
            >
              <span>{t.freeTrial}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCNativeButton
              type="button"
              onClick={handleScrollToPricing}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] cursor-pointer"
            >
              <span>{t.explorePricing}</span>
            </VIDCNativeButton>
          </div>
        </div>

        {/* Stat-row: 4 Badges */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">
              99.99%
            </div>
            <div className="text-xs text-slate-300 mt-1 leading-snug">
              {isLaos ? 'High Availability SLA Commitment' : 'SLA Cam kết mức độ sẵn sàng liên tục'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              ML-NGFW
            </div>
            <div className="text-xs text-slate-300 mt-1 leading-snug">
              {isLaos ? 'Deep App-ID & User-ID Recognition' : 'Nhận dạng ứng dụng App-ID & User-ID'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              TIA-942
            </div>
            <div className="text-xs text-slate-300 mt-1 leading-snug">
              {isLaos ? 'Rated 3 International Data Center' : 'Hạ tầng Data Center Rated 3 quốc tế'}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              24/7/365
            </div>
            <div className="text-xs text-slate-300 mt-1 leading-snug">
              {isLaos ? 'Dedicated Cyber Security Support' : 'Đội ngũ kỹ sư an ninh mạng thường trực'}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
