import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface DedicatedPrivateCloudUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenQuote?: () => void;
}

export const DedicatedPrivateCloudUseCases: React.FC<DedicatedPrivateCloudUseCasesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos 
      ? 'Mission-Critical HPC Application Scenarios' 
      : 'Các kịch bản ứng dụng tính toán hiệu năng cao tiêu biểu',
    subtitle: isLaos 
      ? 'Engineered to handle extreme computational demands from scientific research and AI model training to high-frequency financial modeling.'
      : 'Đáp ứng hoàn hảo các bài toán tính toán chuyên sâu từ nghiên cứu khoa học, huấn luyện AI đến phân tích tài chính phức tạp.',
    viewDetails: isLaos ? 'Consult solution' : 'Tư vấn giải pháp',
  };

  const useCases = [
    {
      title: isLaos ? 'Scientific Research & CFD Simulation' : 'Nghiên cứu khoa học & Mô phỏng CFD',
      desc: isLaos 
        ? 'Compute-intensive fluid dynamics (CFD), structural analysis (FEA), weather forecasting, and physical simulation algorithms.'
        : 'Xử lý tính toán động lực học chất lưu (CFD), phân tích ứng suất kết cấu (FEA), dự báo thời tiết khí tượng thủy văn và mô phỏng vật lý lượng tử.',
      image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Artificial Intelligence (AI) & LLM Training' : 'Trí tuệ nhân tạo (AI) & Huấn luyện LLM',
      desc: isLaos 
        ? 'Distributed deep learning clusters with GPU integration for LLM foundation models, Computer Vision, and Generative AI.'
        : 'Cụm tính toán phân tán tích hợp GPU hiệu năng cao phục vụ huấn luyện mô hình ngôn ngữ lớn (LLM), thị giác máy tính và AI tạo sinh.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'High-Frequency Financial Modeling' : 'Mô hình tài chính & Giao dịch tần suất cao',
      desc: isLaos 
        ? 'Sub-millisecond latency computing for algorithmic trading (HFT), risk management, Monte Carlo simulation, and fraud detection.'
        : 'Nền tảng độ trễ cực thấp phục vụ thuật toán giao dịch tài chính (HFT), phân tích định lượng rủi ro ngân hàng và mô phỏng Monte Carlo quy mô lớn.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Big Data Analytics & Genomics Processing' : 'Phân tích Big Data & Giải mã hệ gen',
      desc: isLaos 
        ? 'Parallel high-throughput storage and compute processing petabytes of genomics sequencing, drug discovery, and enterprise data lakes.'
        : 'Hạ tầng lưu trữ thông lượng cao kết hợp năng lực tính toán xử lý giải mã trình tự ADN/Genomics, nghiên cứu dược phẩm sinh học và phân tích Big Data.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Grid 4 Card Ứng dụng */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, idx) => {
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Banner Image */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img alt={item.title} src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" loading="lazy" onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-2.5">
                    <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <VIDCAnchor
                    href="#pricing"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </VIDCAnchor>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
