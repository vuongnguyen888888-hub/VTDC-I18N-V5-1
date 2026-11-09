import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ManagedPrivateCloudFaqProps {
  currentMarket: SEAMarket;
}

export const ManagedPrivateCloudFaq: React.FC<ManagedPrivateCloudFaqProps> = ({ currentMarket }) => {
  const isLaos = currentMarket.code === 'la';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const t = {
    eyebrow: isLaos ? 'FREQUENTLY ASKED QUESTIONS' : 'CÂU HỎI THƯỜNG GẶP',
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos
      ? 'Detailed answers to common questions about Viettel Managed Private Cloud services.'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về giải pháp đám mây riêng ủy thác Viettel Managed Private Cloud.',
  };

  const faqs = [
    {
      q: isLaos
        ? 'What is the core difference between Viettel Managed Private Cloud (vMPC) and standard Public Cloud?'
        : 'Viettel Managed Private Cloud (vMPC) khác gì so với dịch vụ Public Cloud thông thường?',
      a: isLaos
        ? 'Public Cloud is a multi-tenant shared infrastructure model over the public internet. vMPC is dedicated 100% physically isolated for your enterprise, deployed on-premises at your Data Center with comprehensive 24/7 management support by Viettel IDC.'
        : 'Public Cloud là mô hình dùng chung hạ tầng (Multi-tenant) trên môi trường internet công cộng. vMPC là mô hình đám mây riêng biệt hoàn toàn (Single-tenant), được thiết kế và đặt trực tiếp tại chính trung tâm dữ liệu của doanh nghiệp với sự đồng hành vận hành ủy thác 24/7 từ đội ngũ Viettel IDC.',
    },
    {
      q: isLaos
        ? 'How does the 24/7 delegated operations management process work?'
        : 'Quy trình ủy thác vận hành 24/7 diễn ra như thế nào?',
      a: isLaos
        ? 'Viettel IDC engineers continuously monitor through standard tools, handle events, periodically perform health-checks, optimize workloads, and patch systems, allowing enterprise IT teams to focus 100% on business applications.'
        : 'Đội ngũ chuyên gia của Viettel IDC thực hiện giám sát liên tục qua các công cụ tiêu chuẩn, trực tiếp xử lý các sự cố, thực hiện bảo trì định kỳ, tối ưu tải và vá lỗi hệ thống, giúp giảm tải hoàn toàn cho bộ phận CNTT nội bộ.',
    },
    {
      q: isLaos
        ? 'Does vMPC support hybrid connectivity with Public Cloud or other platforms?'
        : 'vMPC có hỗ trợ kết nối linh hoạt với Public Cloud hoặc các nền tảng khác không?',
      a: isLaos
        ? 'Yes. vMPC is architected with modern standard frameworks, easily connecting with Public Clouds, multi-site Data Centers, or edge environments via secure VPN/Direct Connect channels.'
        : 'Có. vMPC được thiết kế theo chuẩn kiến trúc mở, cho phép dễ dàng tích hợp và thiết lập mô hình Hybrid Cloud hoặc Multi-cloud kết nối với các hạ tầng đám mây công cộng và các Data Center khác qua kênh truyền bảo mật.',
    },
    {
      q: isLaos
        ? 'Can the system be upgraded and expanded in the future?'
        : 'Hệ thống có khả năng nâng cấp và mở rộng trong tương lai không?',
      a: isLaos
        ? 'The underlying VMware platform supports modular scaling, allowing flexible upgrades of Compute, Storage, and PaaS components without causing service interruption.'
        : 'Nền tảng VMware cho phép mở rộng linh hoạt theo mô-đun (Scale-out/Scale-up) cả về năng lực tính toán (Compute), lưu trữ (Storage) lẫn các lớp dịch vụ PaaS mở rộng mà không làm gián đoạn hệ thống hiện hữu.',
    },
    {
      q: isLaos
        ? 'What is the deployment procedure and estimated timeline for vMPC?'
        : 'Doanh nghiệp cần chuẩn bị gì và thời gian triển khai mất bao lâu?',
      a: isLaos
        ? 'Enterprises only need to provide standard server room facilities (rack space, power, cooling, local network). Viettel IDC conducts on-site surveys, designs architecture, and delivers the complete solution in 2 to 4 weeks depending on scale.'
        : 'Doanh nghiệp chỉ cần cung cấp hạ tầng phòng máy cơ bản (không gian Rack, nguồn điện, làm mát và mạng kết nối). Viettel IDC sẽ phối hợp khảo sát, thiết kế và tiến hành triển khai hoàn thiện trong khoảng 2 - 4 tuần tùy quy mô.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-111827)]"
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
                  className="w-full py-5 sm:py-6 text-left flex items-center justify-between gap-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vidc-color-brand-red)]"
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
                  <div className="pb-6 text-sm sm:text-base text-slate-600 leading-relaxed pr-8">
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
