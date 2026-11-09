import React from 'react';
import { CheckCircle2, Sparkles, Cpu, Code2, ShieldCheck, Languages } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface VMaaSOverviewProps {
  currentMarket: SEAMarket;
  onOpenQuote?: () => void;
}

export const VMaaSOverview: React.FC<VMaaSOverviewProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos
      ? 'OpenAI-compatible AI Model as a Service platform with optimized cost'
      : 'Nền tảng trí tuệ nhân tạo Model as a Service chuẩn hóa OpenAI tối ưu chi phí',
    desc1: isLaos
      ? 'Viettel Model as a Service (vMaaS) provides enterprise AI models via standard OpenAI-compatible REST APIs. Businesses can instantly integrate generative AI into web applications, customer support chatbots, knowledge retrieval systems (RAG), and automated workflows without investing in expensive GPU/NPU hardware or building specialized MLOps infrastructure teams.'
      : 'Viettel Model as a Service (vMaaS) là dịch vụ cung cấp các mô hình AI dưới dạng API theo chuẩn tương thích OpenAI. Doanh nghiệp có thể nhanh chóng tích hợp trí tuệ nhân tạo vào ứng dụng, chatbot CSKH, kho tri thức (RAG) hoặc quy trình tự động hóa mà không cần đầu tư máy chủ phần cứng GPU/NPU đắt đỏ hay xây dựng đội ngũ MLOps chuyên biệt.',
    desc2: isLaos
      ? 'Operated 100% within Viettel IDC ANSI/TIA-942 Rated 3 Data Centers in Vietnam on the Qualcomm AI Inference Suite platform, vMaaS delivers ultra-low latency, outstanding throughput, and strict data sovereignty compliance.'
      : 'Hệ thống được vận hành 100% trên hạ tầng Trung tâm Dữ liệu chuẩn quốc tế ANSI/TIA-942 Rated 3 của Viettel IDC tại Việt Nam, ứng dụng nền tảng tăng tốc Qualcomm AI Inference Suite mang lại độ trễ suy luận siêu thấp, thông lượng vượt trội và đáp ứng trọn vẹn chủ quyền an toàn dữ liệu.',
    highlight1Title: isLaos ? 'Deep Vietnamese & Domain Optimization' : 'Tối ưu tiếng Việt & Nghiệp vụ nội địa',
    highlight1Desc: isLaos
      ? 'Supports state-of-the-art models fine-tuned for Vietnamese nuances, banking, retail, legal, and public sector contexts.'
      : 'Hỗ trợ các mô hình AI hiểu sâu ngữ cảnh tiếng Việt, tối ưu cho tài chính - ngân hàng, bán lẻ và hành chính công.',
    highlight2Title: isLaos ? 'Standardized OpenAI-Compatible API' : 'Chuẩn hóa API tương thích OpenAI',
    highlight2Desc: isLaos
      ? 'Drop-in replacement for OpenAI SDKs (Python, NodeJS, Go). Switch endpoints in seconds without refactoring codebase.'
      : 'Chuyển đổi và tích hợp nhanh chóng bằng cách đổi Endpoint & API Key trong OpenAI SDK mà không cần viết lại mã nguồn.',
    highlight3Title: isLaos ? 'Absolute Security & 100% In-Country' : 'Bảo mật tuyệt đối & Chủ quyền dữ liệu',
    highlight3Desc: isLaos
      ? '100% data processed within Vietnam data centers. Enterprise data is never used to train public third-party models.'
      : 'Triển khai 100% tại TTDL Viettel IDC Việt Nam, cam kết dữ liệu doanh nghiệp không bị sử dụng để đào tạo mô hình bên thứ ba.',
  };

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Eyebrow Badge & H2 Headline */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột Trái (Mô tả giải pháp & 3 Highlights) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 3 Key Highlights */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight1Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight1Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight2Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight2Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight3Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight3Desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Cột Phải (Video YouTube nhúng / Trực quan) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Model as a Service Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
