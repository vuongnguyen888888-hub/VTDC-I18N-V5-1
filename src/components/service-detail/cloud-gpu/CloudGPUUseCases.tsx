import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudGPUUseCasesProps {
  currentMarket: SEAMarket;
  onOpenQuote?: () => void;
}

export const CloudGPUUseCases: React.FC<CloudGPUUseCasesProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  const isLaos = currentMarket.code === 'la';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Typical Application Scenarios of Viettel Cloud GPU' : 'Các kịch bản ứng dụng tiêu biểu của Viettel Cloud GPU',
    subtitle: isLaos 
      ? 'Perfectly meeting all heavy AI training, real-time inference, high-end 3D rendering, and video processing workloads.'
      : 'Đáp ứng hoàn hảo mọi nhu cầu tải từ huấn luyện mô hình AI, suy luận thời gian thực đến dựng hình 3D và xử lý video chuyên sâu.',
    viewDetails: isLaos ? 'Consult architecture' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      title: isLaos ? 'AI Camera & Computer Vision' : 'Thị giác máy tính & AI Camera',
      desc: isLaos 
        ? 'Real-time facial recognition (FaceID), electronic KYC, and smart urban traffic monitoring cameras with ultra-low latency.'
        : 'Nhận diện khuôn mặt (FaceID), định danh điện tử (eKYC) và camera giám sát thông minh giao thông/đô thị thời gian thực.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      tag: 'NVIDIA Tesla T4 / A30',
    },
    {
      title: isLaos ? 'Large Language Models (LLM) & Chatbots' : 'Mô hình Ngôn ngữ Lớn (LLM) & Trợ lý ảo AI',
      desc: isLaos 
        ? 'Pre-training & fine-tuning NLP models, Vietnamese voice assistants, and enterprise generative AI knowledge bases.'
        : 'Huấn luyện và vận hành mô hình NLP (BERT, GPT), trợ lý ảo tiếng Việt và trung tâm tri thức GenAI thông minh.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
      tag: 'NVIDIA A30 / L40S / H200',
    },
    {
      title: isLaos ? 'Generative AI & Multimodal Diffusion' : 'AI Tạo Sinh (Generative AI & Diffusion)',
      desc: isLaos 
        ? 'Automated high-speed content generation: Text-to-Image, Text-to-Video, code synthesis, and high-fidelity speech cloning.'
        : 'Tạo lập nội dung tự động đa phương thức: Text-to-Image, Text-to-Video, sinh mã lập trình và tổng hợp giọng nói AI.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      tag: 'NVIDIA L40S / H200',
    },
    {
      title: isLaos ? '3D Rendering & Video Transcoding' : 'Dựng hình 3D & Chuyển mã Video trực tuyến',
      desc: isLaos 
        ? 'Architectural visualization in Unreal Engine/Blender and real-time multi-bitrate video transcoding for live OTT streaming.'
        : 'Render bối cảnh kiến trúc/game 3D (Blender, Unreal Engine) và nén/chuyển mã hàng nghìn luồng video 4K/8K trực tiếp.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      tag: 'NVIDIA L40S / T4',
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
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm text-white border border-white/20">
                        {item.tag}
                      </span>
                    </div>
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
                  <VIDCNativeButton
                    type="button"
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </VIDCNativeButton>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

