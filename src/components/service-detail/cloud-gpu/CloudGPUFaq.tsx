import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudGPUFaqProps {
  currentMarket?: SEAMarket;
}

export const CloudGPUFaq: React.FC<CloudGPUFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Cloud GPU services'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ máy chủ đám mây Viettel Cloud GPU',
  };

  const faqs = [
    {
      q: isLaos ? 'What is Viettel Cloud GPU?' : 'Viettel Cloud GPU là gì?',
      a: isLaos 
        ? 'Viettel Cloud GPU (vCGPU) is a high-performance virtual server service integrated with dedicated NVIDIA enterprise GPUs (Tesla T4, A30, L40S, H200), dedicated to AI Training, Inference, and Intensive 3D Graphics.'
        : 'Viettel Cloud GPU (vCGPU) là dịch vụ máy chủ ảo tích hợp bộ xử lý đồ họa (GPU) chuyên dụng thế hệ mới của NVIDIA (Tesla T4, A30, L40S, H200), tối ưu chuyên sâu cho đào tạo và suy luận AI, Deep Learning và đồ họa 3D.',
    },
    {
      q: isLaos ? 'Which NVIDIA GPU models are supported?' : 'Dịch vụ Viettel Cloud GPU hiện đang cung cấp những dòng card GPU nào?',
      a: isLaos 
        ? 'Viettel Cloud GPU provides a comprehensive portfolio: NVIDIA Tesla T4 (16GB) for inference & video, NVIDIA A30 (24GB) for AI/HPC, NVIDIA L40S (48GB) for GenAI & 3D, and NVIDIA H200 (141GB HBM3e) for large LLMs.'
        : 'Viettel Cloud GPU cung cấp danh mục phong phú: NVIDIA Tesla T4 (16GB) cho inference & streaming; NVIDIA A30 (24GB) cho AI/HPC; NVIDIA L40S (48GB) cho GenAI & dựng hình 3D; cùng siêu GPU NVIDIA H200 (141GB HBM3e) cho các mô hình LLM lớn.',
    },
    {
      q: isLaos ? 'Can I rent a fractional vGPU to optimize cost?' : 'Tôi muốn thuê máy ảo Cloud GPU chỉ sử dụng một phần năng lực card GPU (vGPU) có được không?',
      a: isLaos 
        ? 'Yes. The fractional vGPU virtualization allows customers to allocate a portion of compute capacity and VRAM on a physical GPU, maximizing budget efficiency for testing and moderate workloads.'
        : 'Có. Cơ chế ảo hóa vGPU cho phép Khách hàng sử dụng một phần năng lực tính toán và VRAM trên card GPU vật lý thay vì phải thuê nguyên card (dedicated), giúp tối ưu ngân sách tối đa cho môi trường phát triển và thử nghiệm.',
    },
    {
      q: isLaos ? 'Can I configure multiple GPUs on a single VM or build a multi-node cluster?' : 'Tôi có thể thuê 01 VM gắn nhiều card GPU hoặc thiết lập cụm Multi-Node được không?',
      a: isLaos 
        ? 'Absolutely. Configurations support 1, 2, 4, to 6 GPUs per VM. Multiple Cloud GPU VMs can also be interconnected over high-speed networks for Distributed AI Training workloads.'
        : 'Hoàn toàn được. Bạn có thể cấu hình từ 1, 2, 4 đến 6 card GPU trên cùng một VM, hoặc liên kết nhiều máy ảo Cloud GPU qua mạng nội bộ tốc độ cao để thực hiện huấn luyện mô hình phân tán (Distributed Training).',
    },
    {
      q: isLaos ? 'What software and tools are pre-installed upon delivery?' : 'Viettel Cloud GPU được cài đặt sẵn những công cụ gì khi bàn giao?',
      a: isLaos 
        ? 'VMs are delivered pre-installed with OS (Ubuntu, CentOS, Windows Server), official NVIDIA Drivers, and CUDA Toolkit; 100% compatible with TensorFlow, PyTorch, TensorRT, and Docker Container.'
        : 'Máy chủ ảo được bàn giao với hệ điều hành (Ubuntu, CentOS, Windows Server), NVIDIA Driver chính hãng và CUDA Toolkit mới nhất; tương thích hoàn toàn PyTorch, TensorFlow, TensorRT và container hóa GPU.',
    },
    {
      q: isLaos ? 'Can I integrate Cloud GPU with other Viettel IDC services?' : 'Tôi có thể sử dụng Viettel Cloud GPU kết hợp với các dịch vụ khác trong hệ sinh thái Viettel IDC không?',
      a: isLaos 
        ? 'Yes. Cloud GPU seamlessly connects with Viettel Cloud Server, Cloud Storage (for datasets), vVPC private networking, Cloud Backup, and 10 Gbps Viettel Hybrid Connect.'
        : 'Có. Viettel Cloud GPU kết nối liên thông băng thông cao với toàn bộ hệ sinh thái: Viettel Cloud Server, Cloud Storage (chứa Dataset lớn), mạng ảo riêng vVPC, Cloud Backup và kênh truyền riêng Viettel Hybrid Connect (lên tới 10 Gbps).',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {isLaos ? 'FREQUENTLY ASKED QUESTIONS' : 'CÂU HỎI THƯỜNG GẶP'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Minimal Accordion List with white cards and border */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all"
              >
                <VIDCNativeButton
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[var(--vidc-legacy-hex-222225)] leading-snug">
                    {faq.q}
                  </span>
                  <span className={`p-1.5 rounded-lg shrink-0 transition-colors ${isOpen ? 'bg-red-50 text-[var(--vidc-color-brand-red)]' : 'bg-slate-100 text-slate-600'}`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[2]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2]" />
                    )}
                  </span>
                </VIDCNativeButton>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
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

