import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface VMaaSUseCasesProps {
  currentMarket?: SEAMarket;
}

export const VMaaSUseCases: React.FC<VMaaSUseCasesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Typical Application Scenarios' : 'Các kịch bản ứng dụng tiêu biểu',
    subtitle: isLaos 
      ? 'Accelerate AI transformation across key business functions with dedicated, pre-optimized foundation models.'
      : 'Đáp ứng hoàn hảo mọi nhu cầu tích hợp trí tuệ nhân tạo từ môi trường lập trình thử nghiệm đến hệ thống sản xuất cốt lõi của doanh nghiệp.',
    viewDetails: isLaos ? 'View solution details' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      title: isLaos ? '24/7 AI Customer Support Chatbot' : 'Chatbot CSKH & Trợ lý ảo 24/7',
      desc: isLaos 
        ? 'Deploy Qwen3-14B into omnichannel customer service bots to automatically resolve 85% of common user inquiries.'
        : 'Tích hợp Qwen3-14B vào website, app di động và Zalo OA, tự động giải đáp 85% thắc mắc thường gặp với tốc độ dưới 1 giây.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Enterprise Knowledge Base (RAG)' : 'Kho tri thức doanh nghiệp (Enterprise RAG)',
      desc: isLaos 
        ? 'Combine BGE-M3 embeddings, rerankers, and Qwen3-32B for accurate document QA and cited search across company knowledge.'
        : 'Kết hợp BGE-M3 (Vector Embedding) và Qwen3-32B để nhân viên tra cứu chính xác quy trình, hợp đồng kèm trích dẫn nguồn.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Deep Document Analysis & OCR' : 'Phân tích tài liệu & Trích xuất dữ liệu (VLM)',
      desc: isLaos 
        ? 'Utilize Llama-3.1-8B (128K context) and Qwen 2.5-VL for complex financial reports, contracts, and scanned forms analysis.'
        : 'Sử dụng Llama-3.1-8B (ngữ cảnh 128K) và Qwen 2.5-VL để tự động bóc tách hóa đơn, hợp đồng kinh tế và rà soát rủi ro pháp lý.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Workflow Automation & Tool Calling' : 'Tự động hóa quy trình nghiệp vụ (AI Agent)',
      desc: isLaos 
        ? 'Empower business workflows with Function Calling to parse invoices, sync with ERP/CRM, and trigger automated tasks.'
        : 'Mô hình AI thực hiện Function Calling tự động hóa quy trình nhập liệu ERP, đối soát công nợ và kích hoạt luồng xử lý tự động.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
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
