import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VMaaSFaqProps {
  currentMarket: SEAMarket;
}

export const VMaaSFaq: React.FC<VMaaSFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code === 'la';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos
      ? 'Detailed answers to common questions about Viettel Model as a Service (vMaaS)'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ Viettel Model as a Service (vMaaS)',
  };

  const faqs = [
    {
      q: isLaos ? 'What is Viettel Model as a Service (vMaaS)?' : 'Viettel Model as a Service (vMaaS) là gì?',
      a: isLaos
        ? 'Viettel Model as a Service (vMaaS) provides AI models via OpenAI-compatible APIs, allowing businesses to integrate LLMs, Computer Vision, and Image Generation into their applications without purchasing GPU servers or managing MLOps teams.'
        : 'Viettel Model as a Service (vMaaS) là dịch vụ cung cấp các mô hình AI dưới dạng API theo chuẩn tương thích OpenAI. Doanh nghiệp có thể nhanh chóng tích hợp trí tuệ nhân tạo (LLM, RAG, Vision, Image) vào ứng dụng, chatbot hoặc quy trình tự động hóa mà không cần đầu tư máy chủ phần cứng GPU/NPU đắt đỏ hay xây dựng đội ngũ MLOps chuyên biệt.',
    },
    {
      q: isLaos ? 'Is the vMaaS API 100% compatible with OpenAI SDK?' : 'API vMaaS có tương thích hoàn toàn với thư viện OpenAI SDK không?',
      a: isLaos
        ? 'Yes. vMaaS supports standard OpenAI endpoints (/chat/completions, /embeddings, /images/generations). You only need to replace base_url and api_key in your existing code without modifying business logic.'
        : 'Hoàn toàn tương thích. vMaaS hỗ trợ đầy đủ các Endpoint chuẩn của OpenAI (/chat/completions, /embeddings, /images/generations). Lập trình viên chỉ cần thay đổi giá trị base_url sang Endpoint của Viettel IDC và nhập API Key là có thể chạy ngay với mã nguồn hiện có.',
    },
    {
      q: isLaos ? 'How is customer data sovereignty and security guaranteed?' : 'Dữ liệu doanh nghiệp được đảm bảo an toàn và bảo mật như thế nào?',
      a: isLaos
        ? '100% data is stored and processed within Viettel IDC Data Centers in Vietnam. We strictly commit that customer data and prompts will never be logged or used to train third-party public AI models.'
        : 'Toàn bộ hạ tầng tính toán và dữ liệu được lưu trữ, xử lý 100% tại Trung tâm Dữ liệu của Viettel IDC tại Việt Nam. Viettel IDC cam kết tuân thủ nghiêm ngặt Nghị định 13/2023/NĐ-CP và không sử dụng dữ liệu hoặc prompt của khách hàng để huấn luyện mô hình bên thứ ba.',
    },
    {
      q: isLaos ? 'How does the Add-on Token policy work when exceeding bundle quota?' : 'Chính sách mua thêm Add-on Token khi phát sinh vượt gói như thế nào?',
      a: isLaos
        ? 'Add-on tokens are priced at 6,000 VND / 1,000,000 tokens (sold in 1M token blocks). There is no distinction between prompt input and completion output tokens.'
        : 'Khi phát sinh vượt hạn mức gói chính, khách hàng có thể mua thêm Add-on Token với đơn giá 6.000 đ / 1M Token (cung cấp theo từng block 1.000.000 token). Hệ thống không phân biệt Input hay Output token.',
    },
    {
      q: isLaos ? 'Can enterprise bring their own fine-tuned model (BYOM)?' : 'Doanh nghiệp có thể mang mô hình AI tự huấn luyện lên vMaaS (BYOM) không?',
      a: isLaos
        ? 'Yes. Viettel IDC supports Bring Your Own Model (BYOM) deployment on dedicated isolated endpoints with custom SLA agreements and expert MLOps consulting.'
        : 'Có. Viettel IDC hỗ trợ giải pháp Bring Your Own Model (BYOM), cho phép doanh nghiệp triển khai mô hình riêng đã fine-tune lên cụm Dedicated Endpoint biệt lập với cam kết SLA cao cấp và hỗ trợ kỹ thuật chuyên sâu.',
    },
    {
      q: isLaos ? 'How do I register for a PoC trial?' : 'Quy trình đăng ký dùng thử (PoC) như thế nào?',
      a: isLaos
        ? 'Enterprises can register for the vMaaS_50M PoC package (50M tokens for up to 1 month). Click [Register PoC] or contact hotline 1800 8088 to be activated within 24 hours.'
        : 'Doanh nghiệp có thể đăng ký gói dùng thử tiêu chuẩn vMaaS_50M (50 triệu token, thời hạn tối đa 01 tháng). Quý khách chỉ cần bấm nút [Đăng Ký PoC] trên website hoặc liên hệ hotline 1800 8088 để được đội ngũ kỹ sư kích hoạt tài khoản trong vòng 24 giờ.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-111827)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-14">
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
