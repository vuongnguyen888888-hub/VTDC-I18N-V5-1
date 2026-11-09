import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface CloudNPUUseCasesProps {
  currentMarket: SEAMarket;
}

export const CloudNPUUseCases: React.FC<CloudNPUUseCasesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket.code === 'la';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos
      ? 'Typical Application Scenarios for Viettel Cloud NPU'
      : 'Các kịch bản ứng dụng tiêu biểu của Viettel Cloud NPU',
    subtitle: isLaos
      ? 'Ideal high-throughput, low-latency AI Inference infrastructure across key business domains.'
      : 'Hạ tầng suy luận AI độ trễ thấp, throughput cao lý tưởng cho các lĩnh vực trọng điểm của doanh nghiệp.',
    viewDetails: isLaos ? 'View solution details' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      title: isLaos
        ? 'Computer Vision & AI Camera Systems'
        : 'Thị giác máy tính & Camera AI giám sát',
      desc: isLaos
        ? 'Facial recognition attendance (FaceID), Electronic Know Your Customer (eKYC), AI cameras for traffic surveillance and urban public security (YOLO, ResNet).'
        : 'Chấm công khuôn mặt (FaceID), Định danh điện tử (eKYC), Camera AI giám sát giao thông và an ninh đô thị thông minh (YOLO, ResNet).',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos
        ? 'Virtual Assistants, Chatbots & Voicebots (NLP)'
        : 'Trợ lý ảo, Chatbot & Voicebot thông minh (NLP)',
      desc: isLaos
        ? 'Text-to-Speech (TTS), Speech-to-Text (STT), automated customer care virtual assistants and enterprise search agents (BERT, GPT, Transformer).'
        : 'Chuyển đổi văn bản thành giọng nói (TTS), Chuyển giọng nói thành văn bản (STT), Trợ lý ảo CSKH tự động và tìm kiếm dữ liệu doanh nghiệp.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos
        ? 'Generative AI & LLM Inference'
        : 'AI Tạo sinh & Suy luận Large Language Model (GenAI)',
      desc: isLaos
        ? 'Automated marketing copywriting, artistic image/video synthesis, intelligent code generation and enterprise LLM inference pipelines.'
        : 'Tự động sinh nội dung văn bản, tạo ảnh/video nghệ thuật, hỗ trợ gợi ý mã nguồn lập trình và chạy suy luận các mô hình ngôn ngữ lớn (LLMs).',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos
        ? 'AI Robotics & Augmented Reality (AR/Robotics)'
        : 'AI Robot & Thực tế ảo tăng cường (AR/Robotics)',
      desc: isLaos
        ? 'Autonomous navigation, environment perception and real-time interaction for robots; AR solutions in education, defense and e-commerce.'
        : 'Điều hướng, nhận thức môi trường và tương tác thời gian thực cho Robot; giải pháp AR ứng dụng trong đào tạo, quốc phòng và thương mại điện tử.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section 
      id="usecases" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)] scroll-mt-24"
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
