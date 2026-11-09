import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface VirtualSocHeroProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
  onNavigateHome: () => void;
}

export const VirtualSocHero: React.FC<VirtualSocHeroProps> = ({
  currentMarket,
  onOpenConsult,
  onNavigateHome,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    security: isLaos ? 'Cybersecurity' : 'An toàn Thông tin',
    currentService: 'Viettel Virtual SOC (vSOC)',
    eyebrow: isLaos 
      ? 'NEXT-GEN ENTERPRISE CYBERSECURITY OPERATION CENTER' 
      : 'TRUNG TÂM ĐIỀU HÀNH AN NINH MẠNG DOANH NGHIỆP THẾ HỆ MỚI',
    headline: isLaos
      ? 'Viettel Virtual SOC – Comprehensive 24/7 Threat Monitoring & Incident Response'
      : 'Viettel Virtual SOC – Nền Tảng Giám Sát & Ứng Cứu Sự Cố An Toàn Thông Tin Toàn Diện 24/7',
    desc: isLaos
      ? 'Intelligent Security Operation Center seamlessly uniting 3 pillars: Process – People – Technology. Real-time multi-layered surveillance from Endpoints to network perimeters, proactive threat hunting, autonomous response, and 24/7 triage powered by leading cybersecurity experts.'
      : 'Trung tâm điều hành an ninh mạng thông minh (Security Operation Center) kết hợp hoàn hảo 3 trụ cột: Quy trình – Con người – Công nghệ. Giám sát đa lớp từ Endpoint đến mạng lưới theo thời gian thực, chủ động phát hiện sớm nguy cơ tấn công, phản hồi tự động và ứng cứu sự cố 24/7 bởi đội ngũ chuyên gia an ninh mạng hàng đầu.',
    freeTrial: isLaos ? 'Free Trial Experience' : 'Dùng thử miễn phí',
    contact: isLaos ? 'Request Consultation' : 'Đăng ký tư vấn',
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image - Standard matching CloudServerHero */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Virtual SOC" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
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
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">
                {t.currentService}
              </span>
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
            <VIDCAnchor
              href="#pricing"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px]"
            >
              <span>{t.freeTrial}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCAnchor>

            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] cursor-pointer"
            >
              <span>{t.contact}</span>
            </VIDCNativeButton>
          </div>
        </div>

      </div>
    </section>
  );
};
