import React from 'react';
import { ChevronRight, ArrowRight, Sparkles, Cpu, Layers } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VMaaSHeroProps {
  currentMarket: SEAMarket;
  onOpenPoc?: () => void;
  onOpenConsult?: () => void;
  onNavigateHome?: () => void;
}

export const VMaaSHero: React.FC<VMaaSHeroProps> = ({
  currentMarket,
  onOpenPoc,
  onOpenConsult,
  onNavigateHome,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    home: isLaos ? 'Home' : 'Trang chủ',
    services: isLaos ? 'Services' : 'Dịch vụ',
    category: isLaos ? 'Artificial Intelligence' : 'Trí tuệ Nhân tạo',
    productName: 'Viettel Model as a Service (vMaaS)',
    eyebrow: isLaos
      ? 'AI MODEL AS A SERVICE PLATFORM (API)'
      : 'NỀN TẢNG CUNG CẤP MÔ HÌNH AI DƯỚI DẠNG API',
    headline: isLaos
      ? 'Viettel Model as a Service (vMaaS) – Fast AI Integration, Cost Optimization & Data Security'
      : 'Viettel Model as a Service (vMaaS) – Tích Hợp AI Nhanh Chóng, Tối Ưu Chi Phí & Bảo Mật Dữ Liệu',
    subheading: isLaos
      ? 'Viettel Model as a Service (vMaaS) provides AI models via OpenAI-compatible APIs, supporting multi-task NLP (LLM), Computer Vision, Image Generation, and Embeddings. Securely operated on Viettel IDC Data Centers in Vietnam powered by Qualcomm AI Inference Suite for superior performance and cost efficiency with zero GPU/NPU investment required.'
      : 'Viettel Model as a Service (vMaaS) là dịch vụ cung cấp các mô hình AI dưới dạng API tương thích chuẩn OpenAI, hỗ trợ đa tác vụ xử lý ngôn ngữ (LLM), thị giác máy tính, tạo ảnh và embedding. Vận hành an toàn trên hạ tầng Trung tâm dữ liệu Viettel IDC tại Việt Nam với nền tảng Qualcomm AI Inference Suite tối ưu hiệu năng và chi phí, không cần đầu tư hạ tầng GPU/NPU.',
    cta1: isLaos ? 'Register for PoC' : 'Đăng Ký PoC',
    cta2: isLaos ? 'Get Consultation' : 'Nhận Tư Vấn',
    badge1: isLaos ? 'OpenAI-Compatible API' : 'API Tương thích OpenAI',
    badge2: isLaos ? 'Qualcomm AI Inference Suite' : 'Qualcomm AI Inference Suite',
    badge3: isLaos ? '100% In-Country Data' : '100% TTDL Viettel IDC VN',
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full bg-[var(--vidc-legacy-hex-18181a)] text-white pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden"
    >
      {/* Background Image Texture */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img alt="Viettel Model as a Service Background" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1787075679/banner_2_yyafrd.jpg" className="w-full h-full object-cover object-center opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--vidc-legacy-hex-0f172a)]/95 via-[var(--vidc-legacy-hex-0f172a)]/85 to-transparent" />
      </div>

      <div className="vidc-container relative mx-auto px-4 sm:px-6 lg:px-10 z-10">
        
        {/* Breadcrumb Navigation: Trang chủ > Dịch vụ > Trí tuệ Nhân tạo > Viettel Model as a Service (vMaaS) */}
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
              <span className="text-slate-200 drop-shadow">{t.category}</span>
            </li>
            <li className="text-slate-400 drop-shadow"><ChevronRight className="w-3 h-3" /></li>
            <li>
              <span className="text-[var(--vidc-color-brand-red)] font-bold drop-shadow" aria-current="page">{t.productName}</span>
            </li>
          </ol>
        </nav>

        {/* Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-red-500/15 text-[var(--vidc-color-brand-red)] font-bold text-xs uppercase tracking-widest px-3.5 py-1 rounded-full border border-red-500/30 w-max inline-flex items-center gap-1.5 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </span>
        </div>

        {/* Main Hero Header */}
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
            {t.headline}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            {t.subheading}
          </p>

          {/* Quick Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-semibold text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm">
              <Cpu className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
              <span>{t.badge1}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.badge2}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.badge3}</span>
            </span>
          </div>

          {/* Group CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* CTA 1 (Primary - Nền đỏ thương hiệu var(--vidc-color-brand-red)): [ Đăng Ký PoC ] */}
            <VIDCNativeButton
              type="button"
              onClick={onOpenPoc}
              className="px-7 py-3.5 bg-[var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] active:bg-[var(--vidc-legacy-hex-aa0025)] text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-red-900/30 flex items-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <span>{t.cta1}</span>
              <ArrowRight className="w-4 h-4" />
            </VIDCNativeButton>

            {/* CTA 2 (Secondary - Nút viền xám): [ Nhận Tư Vấn ] */}
            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-bold text-xs sm:text-sm rounded-xl border border-slate-400/40 transition-all backdrop-blur-sm flex items-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <span>{t.cta2}</span>
            </VIDCNativeButton>
          </div>
        </div>

      </div>
    </section>
  );
};
