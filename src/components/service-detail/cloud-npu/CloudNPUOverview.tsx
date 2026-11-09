import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudNPUOverviewProps {
  currentMarket: SEAMarket;
  onOpenQuote?: () => void;
}

export const CloudNPUOverview: React.FC<CloudNPUOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket.code === 'la';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos
      ? 'International Standard Dedicated AI Inference NPU Cloud Infrastructure'
      : 'Hạ tầng máy chủ ảo NPU tăng tốc suy luận AI chuẩn quốc tế',
    desc1: isLaos
      ? 'Viettel Cloud NPU (vCNPU) is a high-performance virtual server solution integrated with dedicated Qualcomm Cloud AI 100 NPU processors, purpose-built for AI Inference, Computer Vision (CV), Natural Language Processing (NLP), and Generative AI (GenAI).'
      : 'Viettel Cloud NPU (vCNPU) là giải pháp máy chủ ảo tích hợp bộ vi xử lý AI chuyên dụng (NPU) Qualcomm Cloud AI 100 thế hệ mới, tối ưu chuyên sâu cho các bài toán Suy luận AI (Inference), Thị giác máy tính (CV), Xử lý ngôn ngữ tự nhiên (NLP) và AI Tạo sinh (GenAI).',
    desc2: isLaos
      ? 'Powered by dedicated ASIC architecture delivering up to 350 TOPS per card with outstanding energy efficiency (Performance/Watt), hosted in Viettel IDC’s ANSI/TIA-942 Rated 3 Data Centers with enterprise-grade international security standards.'
      : 'Vận hành trên kiến trúc vi mạch chuyên dụng (ASIC) mang lại hiệu suất 350 TOPS/card cùng hiệu quả năng lượng (Performance/Watt) vượt trội, đặt tại Trung tâm Dữ liệu đạt chuẩn ANSI/TIA-942 Rated 3 của Viettel IDC cùng chứng chỉ an toàn bảo mật quốc tế.',
    highlight1Title: isLaos ? 'Optimal TCO & Price/Performance Ratio' : 'Tối ưu TCO & Hiệu năng trên Giá thành (P/P)',
    highlight1Desc: isLaos
      ? 'Dedicated ASIC architecture for AI Inference cuts operational costs by up to 50% compared to traditional GPU architectures while ensuring ultra-low latency and high throughput.'
      : 'Kiến trúc ASIC chuyên dụng cho Inference giúp giảm tới 50% chi phí vận hành so với kiến trúc GPU truyền thống mà vẫn đảm bảo độ trễ thấp và throughput cao.',
    highlight2Title: isLaos ? 'Exclusive Strategic Qualcomm Partner' : 'Đối tác chiến lược độc quyền Qualcomm',
    highlight2Desc: isLaos
      ? 'Viettel IDC is the exclusive official partner providing Qualcomm Cloud AI 100 products and services in Vietnam, guaranteeing enterprise SLA and hardware availability.'
      : 'Viettel IDC là đối tác độc quyền của Qualcomm cung cấp sản phẩm và dịch vụ Qualcomm Cloud AI 100 tại Việt Nam, cam kết SLA cấp độ doanh nghiệp.',
    highlight3Title: isLaos ? 'Full SDK & Cloud-Native Ecosystem' : 'Hệ sinh thái SDK & Cloud-Native hoàn chỉnh',
    highlight3Desc: isLaos
      ? 'Pre-installed with Qualcomm Cloud AI Apps SDK and Kubernetes Device Plugin, fully compatible with PyTorch, TensorFlow, ONNX, and popular models (YOLO, ResNet, BERT, LLMs).'
      : 'Tích hợp sẵn bộ công cụ Qualcomm Cloud AI Apps SDK và Kubernetes Device Plugin, tương thích mượt mà với PyTorch, TensorFlow, ONNX và các model phổ biến như YOLO, ResNet, BERT, LLMs.',
  };

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)] scroll-mt-24"
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

        {/* 2-Column Architecture Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột Trái (Mô tả giải pháp & 3 Highlights chuẩn hóa) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 3 Key Highlights Chuẩn */}
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

          {/* Cột Phải (Video 16:9 nhúng giới thiệu kiến trúc NPU) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Cloud NPU Overview & Architecture"
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
