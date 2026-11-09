import React from 'react';
import { ChevronRight, ArrowRight, ShieldCheck, Database, Zap } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface ThreatIntelligenceHeroProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const ThreatIntelligenceHero: React.FC<ThreatIntelligenceHeroProps> = ({
  currentMarket,
  onOpenConsult,
  onNavigateHome,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    security: isLaos ? 'Cybersecurity' : 'An toàn Thông tin',
    currentService: 'Viettel Threat Intelligence',
    eyebrow: isLaos 
      ? 'COMPREHENSIVE & IN-DEPTH CYBER THREAT INTELLIGENCE PLATFORM' 
      : 'NỀN TẢNG CUNG CẤP TRI THỨC AN NINH MẠNG CHUYÊN SÂU & TOÀN DIỆN',
    headline: isLaos
      ? 'Viettel Threat Intelligence – Actionable Cyber Threat Intelligence, Early Risk Detection & Proactive Defense'
      : 'Viettel Threat Intelligence – Tri Thức Tình Báo An Ninh Mạng Chuyên Sâu, Phát Hiện Sớm Rủi Ro & Chủ Động Phòng Thủ',
    desc: isLaos
      ? 'Multi-layered cyber threat intelligence (CTI) platform empowering organizations with enhanced situational awareness, early identification of targeted adversaries, and seamless alert ingestion into SIEM/EDR via STIX/TAXII standards.'
      : 'Nền tảng tình báo mối đe dọa mạng (CTI) đa tầng giúp doanh nghiệp nâng cao khả năng quan sát, nhận diện sớm các nguy cơ nhắm vào tổ chức và tự động tích hợp cảnh báo vào hệ thống SIEM/EDR qua chuẩn STIX/TAXII.',
    ctaPrimary: isLaos ? 'Request Consultation / Threat Check' : 'Đăng Ký Tư Vấn / Đánh Giá Threat Check',
    ctaSecondary: isLaos ? 'Explore Service Plans' : 'Khám Phá Các Gói Dịch Vụ',
    stat1Label: isLaos ? 'Data Standard' : 'Chuẩn tích hợp mở',
    stat1Desc: isLaos ? 'STIX/TAXII v2.1 real-time feeds' : 'STIX/TAXII v2.1 thời gian thực',
    stat2Label: isLaos ? 'Exclusive Intelligence' : 'Dữ liệu độc quyền',
    stat2Desc: isLaos ? 'Zero-day & APT campaign insights' : 'Chiến dịch APT & Zero-day Viettel',
    stat3Label: isLaos ? 'Expert Team' : 'Đội ngũ chuyên gia',
    stat3Desc: isLaos ? 'Pwn2Own 2023 World Champions' : 'Vô địch thế giới Pwn2Own 2023',
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Threat Intelligence Background" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--vidc-legacy-hex-111113)]/95 via-[var(--vidc-legacy-hex-18181a)]/90 to-[var(--vidc-legacy-hex-18181a)]/75" />
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

        {/* Main Hero Header */}
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
              onClick={() => onOpenConsult('Đăng Ký Tư Vấn / Đánh Giá Threat Check - Viettel Threat Intelligence')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px] cursor-pointer"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCAnchor
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
            >
              <span>{t.ctaSecondary}</span>
            </VIDCAnchor>
          </div>

          {/* 3 Metric Badges */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 text-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">STIX / TAXII</div>
                <div className="text-xs text-slate-400">{t.stat1Desc}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 text-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Zero-day & APT</div>
                <div className="text-xs text-slate-400">{t.stat2Desc}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 text-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Top 1 Pwn2Own</div>
                <div className="text-xs text-slate-400">{t.stat3Desc}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
