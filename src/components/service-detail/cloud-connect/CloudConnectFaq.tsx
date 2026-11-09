import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudConnectFaqProps {
  currentMarket?: SEAMarket;
}

export const CloudConnectFaq: React.FC<CloudConnectFaqProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const t = {
    eyebrow: isLaos ? 'FREQUENTLY ASKED QUESTIONS' : 'HỎI ĐÁP THƯỜNG GẶP',
    headline: isLaos
      ? 'Frequently Asked Questions About Cloud Connect'
      : 'Câu Hỏi Thường Gặp Về Viettel Cloud Connect',
  };

  const faqs = [
    {
      q: isLaos
        ? 'Who is Viettel Cloud Connect suitable for?'
        : 'Dịch vụ Viettel Cloud Connect phù hợp cho đối tượng nào?',
      a: isLaos ? (
        <div className="space-y-2">
          <p>The service is optimized for:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Enterprises using Hyperscale Cloud (AWS, Google Cloud, Azure, Alibaba) with high-volume data transfers.</li>
            <li>Applications requiring low deterministic latency for real-time transactions and AI/ML processing.</li>
            <li>Organizations adopting Hybrid Cloud architectures ensuring strict data compliance and sovereignty.</li>
          </ul>
        </div>
      ) : (
        <div className="space-y-2">
          <p>Dịch vụ được thiết kế tối ưu cho:</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Doanh nghiệp đang sử dụng các dịch vụ Hyperscale Cloud (AWS, Google Cloud, Azure, Alibaba Cloud...) với nhu cầu truyền tải dữ liệu lớn.</li>
            <li>Doanh nghiệp vận hành ứng dụng yêu cầu tốc độ cao, độ trễ thấp cho dữ liệu thời gian thực (real-time).</li>
            <li>Doanh nghiệp triển khai mô hình Hybrid Cloud nhằm tối ưu hiệu năng và tuân thủ các quy định bảo vệ dữ liệu trong nước.</li>
          </ul>
        </div>
      ),
    },
    {
      q: isLaos
        ? 'Which Hyperscale Cloud providers are natively supported?'
        : 'Dịch vụ hỗ trợ kết nối đến những nhà cung cấp Cloud nào?',
      a: isLaos
        ? 'Viettel Cloud Connect natively supports AWS Direct Connect, Google Cloud Interconnect, Microsoft Azure ExpressRoute, Alibaba Cloud Express Connect, and other major global clouds.'
        : 'Viettel Cloud Connect hỗ trợ kết nối trực tiếp tới AWS, Google Cloud, Microsoft Azure, Alibaba Cloud và hầu hết các nhà cung cấp dịch vụ Hyperscale Cloud lớn khác trên toàn cầu.',
    },
    {
      q: isLaos
        ? 'What is the standard provisioning and setup turnaround time?'
        : 'Thời gian triển khai dịch vụ Viettel Cloud Connect mất bao lâu?',
      a: isLaos
        ? 'Standard deployment takes 5 to 10 business days depending on specific port requirements and cross-connect locations. Subsequent bandwidth scaling takes only 1-2 hours.'
        : 'Thời gian triển khai tiêu chuẩn thông thường từ 5 – 10 ngày làm việc, tùy thuộc vào yêu cầu kỹ thuật cụ thể, hạ tầng sẵn có và vị trí điểm kết nối của doanh nghiệp.',
    },
    {
      q: isLaos
        ? 'How does Cloud Connect ensure cybersecurity and legal compliance?'
        : 'Dịch vụ có đảm bảo tuân thủ quy định pháp luật Việt Nam không?',
      a: isLaos
        ? 'By deploying a completely isolated private circuit bypassed from public internet, and keeping sensitive records locally within Tier 3 certified data centers in compliance with cybersecurity regulations.'
        : 'Có. Viettel Cloud Connect hỗ trợ mô hình kiến trúc Hybrid Cloud tối ưu, cho phép doanh nghiệp lưu trữ các dữ liệu nhạy cảm, thông tin trọng yếu tại hệ thống Data Center trong nước theo đúng quy định của Luật An ninh mạng và các văn bản pháp luật hiện hành.',
    },
    {
      q: isLaos
        ? 'Can we quickly upgrade port bandwidth when traffic spikes occur?'
        : 'Dịch vụ có hỗ trợ nâng cấp mở rộng khi lưu lượng gia tăng không?',
      a: isLaos
        ? 'Yes. Virtual interface and physical port capacity can be dynamically scaled up quickly within 1 to a few hours without disrupting active customer workloads.'
        : 'Có. Dịch vụ cho phép mở rộng băng thông linh hoạt theo nhu cầu thực tế với thời gian nâng cấp cực kỳ nhanh chóng, chỉ từ 1 giờ đến vài giờ làm việc.',
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-xs"
              >
                <VIDCNativeButton
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[var(--vidc-legacy-hex-222225)] leading-snug">
                    {item.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[var(--vidc-color-brand-red)] text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </VIDCNativeButton>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Hotline Contact Note */}
        <div className="mt-10 text-center text-xs text-slate-500">
          {isLaos ? 'Need technical consultation?' : 'Chưa tìm thấy câu trả lời bạn cần? Liên hệ chuyên gia mạng Viettel IDC qua Hotline miễn cước'}{' '}
          <strong className="text-[var(--vidc-color-brand-red)]">1800 8088</strong>
        </div>

      </div>
    </section>
  );
};

