import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface OpenDedicatedPrivateCloudFaqProps {
  currentMarket?: SEAMarket;
}

export const OpenDedicatedPrivateCloudFaq: React.FC<OpenDedicatedPrivateCloudFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code === 'la';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp về Viettel oDPC',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Open Dedicated Private Cloud'
      : 'Giải đáp chi tiết các thắc mắc về hạ tầng đám mây chuyên dụng mã nguồn mở OpenStack',
  };

  const faqs = [
    {
      q: 'Viettel Open Dedicated Private Cloud khác biệt gì so với Public Cloud và vDPC (VMware)?',
      a: 'Khác với Public Cloud dùng chung tài nguyên đa người dùng (Multi-tenant), oDPC mang đến cụm máy chủ vật lý tách biệt 100% (Single-tenant). So với vDPC chạy trên nền tảng VMware thương mại, oDPC phát triển trên OpenStack giúp doanh nghiệp tối ưu chi phí bản quyền lên đến 45%, toàn quyền làm chủ API mở và tích hợp miễn phí hệ sinh thái dịch vụ (vLB, vFW, VKS, VDBS).',
    },
    {
      q: 'Doanh nghiệp có tốn thêm chi phí khi sử dụng các dịch vụ vLB, vFW, VKS và VDBS không?',
      a: 'Hoàn toàn không. Các dịch vụ vLB (Cân bằng tải), vFW (Tường lửa), VKS (Kubernetes) và VDBS (Cơ sở dữ liệu) là tính năng tích hợp sẵn trên nền tảng Viettel oDPC. Khách hàng sử dụng trực tiếp trên dung lượng tài nguyên của gói mà không phát sinh thêm bất kỳ chi phí bản quyền phần mềm nào.',
    },
    {
      q: 'Thời gian triển khai và bàn giao hệ thống Viettel oDPC là bao lâu?',
      a: 'Viettel IDC cam kết bàn giao hệ thống trong vòng 24 giờ làm việc sau khi hoàn tất ký kết hợp đồng và nghiệm thu phương án kỹ thuật. Hệ thống được cấu hình sẵn sàng cùng thông tin truy cập cổng Self-Service Portal.',
    },
    {
      q: 'Dữ liệu của tôi được bảo vệ và tuân thủ các quy định pháp lý như thế nào?',
      a: 'Hạ tầng oDPC được triển khai tại các Trung tâm dữ liệu Viettel IDC đạt chuẩn quốc tế ANSI/TIA-942 Rated 3, tuân thủ nghiêm ngặt các tiêu chuẩn an toàn thông tin ISO 27001, PCI-DSS và các quy định của Luật An ninh mạng Việt Nam về lưu trữ dữ liệu nội địa.',
    },
    {
      q: 'Viettel IDC có hỗ trợ di chuyển dữ liệu (Migration) từ hệ thống hiện tại sang oDPC không?',
      a: 'Có. Đội ngũ chuyên gia giải pháp của Viettel IDC sẽ đồng hành khảo sát kiến trúc hiện tại, lập kế hoạch di trú chi tiết và hỗ trợ thực hiện chuyển đổi dữ liệu an toàn, đảm bảo không làm gián đoạn hoạt động sản xuất kinh doanh của khách hàng.',
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
