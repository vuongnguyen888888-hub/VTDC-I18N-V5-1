import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudNPUHeroProps {
  currentMarket: SEAMarket;
  onOpenQuote?: () => void;
  onNavigateHome?: () => void;
}

export const CloudNPUHero: React.FC<CloudNPUHeroProps> = ({
  currentMarket,
  onOpenQuote,
  onNavigateHome,
}) => {
  const isLaos = currentMarket.code === 'la';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    compute: isLaos ? 'Cloud Compute' : 'Điện toán Đám mây',
    productName: isLaos ? 'Viettel Cloud NPU (vCNPU)' : 'Viettel Cloud NPU (vCNPU)',
    eyebrow: isLaos
      ? 'NEXT-GEN AI ACCELERATION INFRASTRUCTURE'
      : 'HẠ TẦNG ĐIỆN TOÁN TĂNG TỐC AI THỜI ĐẠI MỚI',
    headline: isLaos
      ? 'Viettel Cloud NPU (vCNPU) – Unique & Optimized Infrastructure for AI Inference'
      : 'Viettel Cloud NPU (vCNPU) – Giải Pháp Hạ Tầng Độc Đáo & Tối Ưu Cho AI Suy Luận',
    subheading: isLaos
      ? 'Virtual server attached with Qualcomm Cloud AI 100 NPU cards on Public Cloud, specialized for AI Inference, Computer Vision (CV), Natural Language Processing (NLP), and Generative AI (GenAI). Optimal balance between performance and cost (P/P).'
      : 'Máy chủ ảo gắn card NPU Qualcomm Cloud AI 100 trên nền tảng Public Cloud, chuyên dụng cho bài toán Suy luận AI (AI Inference), Thị giác máy tính (CV), Xử lý ngôn ngữ tự nhiên (NLP) và AI Tạo sinh (GenAI). Cân bằng tối ưu giữa hiệu năng và chi phí (P/P).',
    cta1: isLaos ? 'Free Trial' : 'Dùng Thử Miễn Phí',
    cta2: isLaos ? 'Explore Pricing' : 'Khám Phá Bảng Giá',
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      const isMobile = window.innerWidth < 768;
      const navOffset = isMobile ? 124 : 164;
      const topOffset = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image Texture */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Cloud NPU Background" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--vidc-legacy-hex-0f172a)]/90 via-[var(--vidc-legacy-hex-0f172a)]/80 to-transparent" />
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
              <span className="text-slate-200 drop-shadow">{t.compute}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">{t.productName}</span>
            </li>
          </ol>
        </nav>

        {/* Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-red-500/15 text-[var(--vidc-color-brand-red)] font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/30 w-max inline-flex items-center backdrop-blur-sm">
            {t.eyebrow}
          </span>
        </div>

        {/* Main Hero Header Grid */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
            {t.headline}
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {t.subheading}
          </p>

          {/* Group CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <VIDCNativeButton
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] active:bg-[color:var(--vidc-color-brand-red-hover)] text-white font-bold text-base transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[44px] cursor-pointer"
            >
              <span>{t.cta1}</span>
              <ArrowRight className="w-5 h-5" />
            </VIDCNativeButton>

            <VIDCNativeButton
              type="button"
              onClick={scrollToPricing}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 hover:border-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-white min-h-[44px] cursor-pointer"
            >
              <span>{t.cta2}</span>
            </VIDCNativeButton>
          </div>
        </div>

      </div>
    </section>
  );
};
