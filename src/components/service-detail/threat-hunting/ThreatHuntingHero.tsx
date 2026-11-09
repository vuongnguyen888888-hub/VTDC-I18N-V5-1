import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { useLanguage } from '../../../context/LanguageContext';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface ThreatHuntingHeroProps {
  currentMarket: SEAMarket;
  onOpenConsult: () => void;
  onNavigateHome: () => void;
}

export const ThreatHuntingHero: React.FC<ThreatHuntingHeroProps> = ({
  currentMarket,
  onOpenConsult,
  onNavigateHome,
}) => {
  const { currentLanguage } = useLanguage();
  const isLaos = currentLanguage !== 'vn' && currentLanguage !== 'vi';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    security: isLaos ? 'Information Security' : 'An toàn Thông tin',
    eyebrow: isLaos ? 'ADVANCED THREAT HUNTING SERVICE' : 'DỊCH VỤ RÀ SOÁT VÀ SĂN LÙNG MỐI NGUY AN NINH MẠNG NÂNG CAO',
    headline: isLaos
      ? 'Viettel Threat Hunting – Proactively hunt hidden threats, stay one step ahead of attackers'
      : 'Viettel Threat Hunting – Chủ Động Săn Lùng Mối Nguy Ẩn Sâu, Đi Trước Kẻ Tấn Công Một Bước',
    desc: isLaos
      ? 'Proactive hunting and early detection of sophisticated intrusions bypassing existing security defenses, minimizing Mean Time to Detect (MTTD), optimizing incident response resources, and reinforcing defense-in-depth.'
      : 'Giải pháp chủ động rà soát, phát hiện sớm các hành vi xâm nhập tinh vi đã vượt qua lớp bảo mật hiện tại, rút ngắn tối đa thời gian phát hiện (MTTD), tối ưu hóa nguồn lực phản ứng và củng cố năng lực phòng thủ chiều sâu cho tổ chức.',
    ctaPrimary: isLaos ? 'Request Consultation & Survey' : 'Đăng Ký Tư Vấn & Khảo Sát',
    ctaSecondary: isLaos ? 'Explore Capabilities' : 'Khám Phá Khung Năng Lực',
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image Matching CloudServer Hero */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Threat Hunting Background" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover object-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--vidc-legacy-hex-18181a)] via-[var(--vidc-legacy-hex-18181a)]/90 to-transparent" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="inline-flex items-center flex-wrap gap-2 text-xs text-slate-200">
            <li>
              <VIDCNativeButton 
                onClick={onNavigateHome} 
                className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] rounded px-0.5 drop-shadow"
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
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">Viettel Threat Hunting</span>
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

          {/* Group CTA Buttons matching CloudServer */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px]"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCAnchor
              href="#pricing"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-all backdrop-blur-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white min-h-[44px]"
            >
              <span>{t.ctaSecondary}</span>
            </VIDCAnchor>
          </div>
        </div>

      </div>
    </section>
  );
};
