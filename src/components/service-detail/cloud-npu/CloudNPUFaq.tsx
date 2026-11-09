import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudNPUFaqProps {
  currentMarket: SEAMarket;
}

export const CloudNPUFaq: React.FC<CloudNPUFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'FREQUENTLY ASKED QUESTIONS' : 'CÂU HỎI THƯỜNG GẶP',
    headline: isLaos
      ? 'Frequently Asked Questions about Viettel Cloud NPU'
      : 'Câu hỏi thường gặp về Viettel Cloud NPU',
    subtitle: isLaos
      ? 'Detailed answers to common questions about Qualcomm NPU architecture and AI Inference operations.'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về kiến trúc NPU Qualcomm và phương thức vận hành dịch vụ',
  };

  const faqs = [
    {
      q: isLaos 
        ? 'What is NPU and how does it differ from traditional GPU?' 
        : 'NPU là gì và khác gì so với GPU thông thường?',
      a: isLaos
        ? 'NPU (Neural Processing Unit) is a dedicated application-specific integrated circuit (ASIC) designed specifically for AI Inference calculations, maximizing performance/price and performance/watt efficiency. GPUs are general-purpose processors designed for 3D rendering and model training.'
        : 'NPU (Neural Processing Unit) là vi mạch chuyên dụng (ASIC) được thiết kế tối ưu riêng cho mục đích tính toán suy luận AI (Inference), giúp tối ưu hiệu năng và điện năng tiêu thụ (Performance/Watt). Trong khi đó, GPU (GPGPU) là vi xử lý đa năng bao gồm nhiều nhân đồ họa phục vụ nhiều loại workload khác nhau như xử lý hình ảnh, render video 3D và đào tạo mô hình (Training).',
    },
    {
      q: isLaos
        ? 'What form does Viettel Cloud NPU service take?'
        : 'Hình thái cung cấp của dịch vụ Viettel Cloud NPU là gì?',
      a: isLaos
        ? 'Viettel Cloud NPU provides virtual machines attached with 1 to 6 Qualcomm Cloud AI 100 NPU cards, accessible via SSH/Remote Desktop or secure private networking connected to VPC and Private Cloud.'
        : 'Viettel Cloud NPU cung cấp máy chủ ảo gắn từ 01 đến 06 card NPU Qualcomm Cloud AI 100. Khách hàng có thể truy cập qua Internet (SSH/Remote Desktop) hoặc qua mạng Private bảo mật liên kết với Viettel Cloud Server, Virtual Private Cloud (vVPC) và Dedicated Private Cloud.',
    },
    {
      q: isLaos
        ? 'Which Operating Systems (OS) are supported?'
        : 'Dịch vụ hỗ trợ những hệ điều hành nào?',
      a: isLaos
        ? 'The service fully supports popular operating systems including Ubuntu LTS (18.04, 20.04, 22.04) and Windows Server with continuous updates matching Qualcomm SDK releases.'
        : 'Dịch vụ hỗ trợ đầy đủ các hệ điều hành phổ biến như Windows Server, Ubuntu (18.04, 20.04, 22.04 LTS...) và liên tục được cập nhật các phiên bản OS mới nhất phù hợp với hệ sinh thái Qualcomm SDK.',
    },
    {
      q: isLaos
        ? 'What AI workloads is Viettel Cloud NPU best suited for?'
        : 'Viettel Cloud NPU phù hợp cho những bài toán AI nào?',
      a: isLaos
        ? 'Optimal for AI Inference workloads: Computer Vision (FaceID, eKYC, Smart Cameras), NLP (TTS, STT, Chatbots/Voicebots), Generative AI (LLM inference), Robotics, and AR.'
        : 'Viettel Cloud NPU phù hợp tối ưu cho các bài toán AI Suy luận (Inference) bao gồm Thị giác máy tính (Computer Vision - FaceID, eKYC, Smart Camera), Xử lý ngôn ngữ tự nhiên (NLP - TTS, STT, Chatbot/Voicebot), AI Tạo sinh (Generative AI - LLM inference), Robotics và Thực tế tăng cường (AR).',
    },
    {
      q: isLaos
        ? 'Is Viettel Cloud NPU suitable for model training (AI Training)?'
        : 'Viettel Cloud NPU có phù hợp cho việc đào tạo mô hình (AI Training) không?',
      a: isLaos
        ? 'Qualcomm Cloud AI 100 NPUs are architected and optimized exclusively for AI Inference, not for AI model training from scratch. For training workloads, we recommend pairing with Viettel Cloud GPU (NVIDIA A30, L40S, H200).'
        : 'NPU Qualcomm Cloud AI 100 được thiết kế chuyên biệt và tối ưu nhất cho mục đích AI Inference (suy luận), không phù hợp và không tối ưu cho mục đích AI Training. Nếu doanh nghiệp có nhu cầu đào tạo mô hình từ đầu hoặc fine-tune quy mô lớn, giải pháp khuyến nghị là kết hợp sử dụng Viettel Cloud GPU (NVIDIA A30, L40S, H200).',
    },
    {
      q: isLaos
        ? 'What SLA quality commitments does Viettel IDC provide?'
        : 'Viettel IDC cam kết chất lượng SLA cho dịch vụ như thế nào?',
      a: isLaos
        ? 'Viettel IDC commits to VM uptime availability from ≥ 99.5%, accompanied by clear contractual compensation terms and 24/7/365 multi-tier technical support.'
        : 'Viettel IDC cam kết mức sẵn sàng Uptime của các máy chủ ảo Cloud NPU đạt từ ≥ 99.5%, đi kèm chính sách bồi hoàn rõ ràng trong hợp đồng và đội ngũ chuyên gia hỗ trợ kỹ thuật 24/7/365.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-111827)] scroll-mt-24"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Minimal Accordion List with horizontal line dividers */}
        <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <VIDCNativeButton
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 sm:py-6 text-left flex items-center justify-between gap-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vidc-color-brand-red)] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-slate-800 group-hover:text-slate-900 transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-slate-800 group-hover:text-slate-900 transition-colors">
                    {isOpen ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                    )}
                  </span>
                </VIDCNativeButton>

                {isOpen && (
                  <div className="pb-6 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
