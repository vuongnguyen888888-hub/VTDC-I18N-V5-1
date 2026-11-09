import React from 'react';
import { ChevronRight, ArrowRight, ShieldCheck, Database, Layers, Headset } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface WorkspaceHeroProps {
  currentMarket?: SEAMarket;
  onOpenQuote: () => void;
  onNavigateHome?: () => void;
  onNavigateService?: (path: string) => void;
}

export const WorkspaceHero: React.FC<WorkspaceHeroProps> = ({
  currentMarket,
  onOpenQuote,
  onNavigateHome,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    digitalWorkplace: isLaos ? 'Enterprise Applications' : 'Ứng dụng Doanh nghiệp',
    currentService: 'Viettel Workspace',
    eyebrow: isLaos ? 'UNIFIED DIGITAL WORKPLACE PLATFORM' : 'NỀN TẢNG LÀM VIỆC SỐ TOÀN DIỆN & TẬP TRUNG',
    headline: isLaos 
      ? 'Viettel Workspace - Complete Digital Workplace for Modern Enterprises'
      : 'Viettel Workspace - Không gian làm việc số toàn diện cho doanh nghiệp',
    desc: isLaos 
      ? 'All-in-one digital collaboration suite integrating Business Email, Cloud Storage Drive, Online Office, Web Hosting, and centralized IAM on international TIA-942 Rated 3 Data Center infrastructure.'
      : 'Bộ giải pháp làm việc số trọn bộ tích hợp Web Hosting, Email doanh nghiệp theo tên miền riêng, Lưu trữ đám mây Viettel Drive, Văn phòng trực tuyến và Quản trị phân quyền tập trung trên hạ tầng Data Center chuẩn quốc tế TIA-942 Rated 3.',
    freeTrial: isLaos ? 'Start Free Trial' : 'Trải nghiệm miễn phí',
    requestConsult: isLaos ? 'Request Consultation' : 'Đăng ký nhận tư vấn',
    viewPricing: isLaos ? 'View Pricing Plans' : 'Xem bảng giá dịch vụ',
    stat1Number: '100%',
    stat1Label: isLaos ? 'In-Country Data' : 'Dữ liệu tại Việt Nam',
    stat1Desc: isLaos ? 'Strict compliance & sovereignty' : 'Tuân thủ pháp lý & an toàn chủ quyền số',
    stat2Number: '5 trong 1',
    stat2Label: isLaos ? 'Unified Tool Suite' : 'Bộ công cụ hợp nhất',
    stat2Desc: isLaos ? 'Web, Email, Drive, Office & IAM' : 'Web, Email, Drive, Office & IAM',
    stat3Number: '99.99%',
    stat3Label: isLaos ? 'SLA Availability' : 'Cam kết SLA sẵn sàng',
    stat3Desc: isLaos ? 'Continuous operations 24/7' : 'Vận hành liên tục không gián đoạn',
    stat4Number: '24/7/365',
    stat4Label: isLaos ? 'Expert Support' : 'Hỗ trợ kỹ thuật 24/7',
    stat4Desc: isLaos ? 'Dedicated in-house engineers' : 'Đội ngũ chuyên gia kỹ sư thường trực',
  };

  const handleScrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('pricing');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image with optimized readability */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Workspace" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover object-center opacity-25 filter contrast-125" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--vidc-legacy-hex-18181a)] via-[var(--vidc-legacy-hex-18181a)]/90 to-[var(--vidc-legacy-hex-18181a)]/70" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="inline-flex items-center flex-wrap gap-2 text-xs text-slate-300">
            <li>
              <VIDCNativeButton 
                onClick={onNavigateHome} 
                className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] rounded px-0.5"
              >
                {t.home}
              </VIDCNativeButton>
            </li>
            <li className="text-slate-400"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-slate-300">{t.services}</span>
            </li>
            <li className="text-slate-400"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-slate-300">{t.digitalWorkplace}</span>
            </li>
            <li className="text-slate-400"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold" aria-current="page">
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
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {t.desc}
          </p>

          {/* Group CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCNativeButton
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px]"
            >
              <span>{t.requestConsult}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCAnchor
              href="#pricing"
              onClick={handleScrollToPricing}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
            >
              <span>{t.viewPricing}</span>
            </VIDCAnchor>
          </div>
        </div>

        {/* Hero 4 Stat Metric Row */}
        <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[var(--vidc-color-brand-red)] shrink-0" />
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t.stat1Number}
              </div>
            </div>
            <div className="text-sm font-bold text-slate-200">{t.stat1Label}</div>
            <p className="text-xs text-slate-400">{t.stat1Desc}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[var(--vidc-color-brand-red)] shrink-0" />
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t.stat2Number}
              </div>
            </div>
            <div className="text-sm font-bold text-slate-200">{t.stat2Label}</div>
            <p className="text-xs text-slate-400">{t.stat2Desc}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Database className="w-5 h-5 text-[var(--vidc-color-brand-red)] shrink-0" />
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t.stat3Number}
              </div>
            </div>
            <div className="text-sm font-bold text-slate-200">{t.stat3Label}</div>
            <p className="text-xs text-slate-400">{t.stat3Desc}</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Headset className="w-5 h-5 text-[var(--vidc-color-brand-red)] shrink-0" />
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t.stat4Number}
              </div>
            </div>
            <div className="text-sm font-bold text-slate-200">{t.stat4Label}</div>
            <p className="text-xs text-slate-400">{t.stat4Desc}</p>
          </div>
        </div>

      </div>
    </section>
  );
};
