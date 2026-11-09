import React from 'react';
import { ChevronRight, ArrowRight, ShieldCheck, Clock, Server, TrendingDown } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CloudDRHeroProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
  onNavigateHome: () => void;
}

export const CloudDRHero: React.FC<CloudDRHeroProps> = ({
  currentMarket,
  onOpenConsult,
  onNavigateHome,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    storageBackup: isLaos ? 'Storage & Backup' : 'Lưu trữ & Dự phòng',
    eyebrow: isLaos ? 'DISASTER RECOVERY AS A SERVICE (DRAAS)' : 'DỊCH VỤ PHỤC HỒI THẢM HỌA ĐÁM MÂY (DRAAS)',
    headline: isLaos 
      ? 'Viettel Cloud DR (DRaaS) – Enterprise Cloud Disaster Recovery'
      : 'Viettel Cloud DR (DRaaS) – Dự phòng & Khôi phục thảm họa trên đám mây',
    desc: isLaos 
      ? 'Comprehensive disaster recovery solution replicating enterprise workloads to Viettel IDC Cloud. Ensure business continuity with 10-minute RTO, 99.99% SLA availability, VMware & Hyper-V multi-hypervisor compatibility, and 24/7/365 drill support.'
      : 'Giải pháp dự phòng thảm họa toàn diện nhân bản hệ thống CNTT doanh nghiệp lên nền tảng Viettel IDC Cloud. Cam kết duy trì kinh doanh liên tục với RTO 10 phút, SLA 99.99%, tương thích ảo hóa VMware & Hyper-V và hỗ trợ diễn tập 24/7/365.',
    freeTrial: isLaos ? 'Free trial' : 'Trải nghiệm miễn phí',
    contact: isLaos ? 'Request consultation' : 'Đăng ký tư vấn',
    badge1: isLaos ? 'RTO 10 Minutes' : 'RTO ~ 10 Phút',
    badge2: isLaos ? 'TIA-942 Rated 3' : 'Chuẩn Tier 3 TIA-942',
    badge3: isLaos ? 'VMware & Hyper-V' : 'VMware & Hyper-V',
    badge4: isLaos ? 'Save up to 50% TCO' : 'Tiết kiệm tới 50% TCO',
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Cloud DR" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="inline-flex items-center flex-wrap gap-2 text-xs text-slate-200">
            <li>
              <VIDCNativeButton 
                type="button"
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
              <span className="text-slate-200 drop-shadow">{t.storageBackup}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">Viettel Cloud DR (DRaaS)</span>
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

          {/* Key Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <Clock className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
              <span className="text-xs font-bold text-slate-200">{t.badge1}</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs font-bold text-slate-200">{t.badge2}</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <Server className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="text-xs font-bold text-slate-200">{t.badge3}</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
              <TrendingDown className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs font-bold text-slate-200">{t.badge4}</span>
            </div>
          </div>

          {/* Group CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCAnchor
              href="https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-dr"
              target="_blank"
              rel="noopener noreferrer"
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

