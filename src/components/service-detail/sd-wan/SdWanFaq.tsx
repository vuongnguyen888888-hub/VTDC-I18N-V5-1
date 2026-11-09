import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface SdWanFaqProps {
  currentMarket?: SEAMarket;
}

export const SdWanFaq: React.FC<SdWanFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'FREQUENTLY ASKED QUESTIONS' : 'HỎI ĐÁP THƯỜNG GẶP',
    headline: isLaos 
      ? 'Frequently Asked Questions About Viettel SD-WAN Solution' 
      : 'Câu Hỏi Thường Gặp Về Dịch Vụ Viettel SD-WAN',
    subtitle: isLaos
      ? 'Detailed answers to key technical, commercial, and operational questions.'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về kiến trúc, tính năng và chi phí của mạng diện rộng ảo SD-WAN.',
  };

  const faqs = [
    {
      q: isLaos
        ? 'What is the biggest advantage of SD-WAN over legacy WAN architectures?'
        : 'Lợi ích lớn nhất khi sử dụng SD-WAN so với mô hình WAN truyền thống là gì?',
      a: isLaos
        ? 'SD-WAN delivers dramatic cost savings by augmenting or replacing expensive leased MPLS with commodity broadband (FTTH, 4G/5G), reduces branch onboarding time by 5 to 10 times, eliminates ISP lock-in, and offers centralized web-based orchestration across all sites.'
        : 'SD-WAN giúp tiết kiệm chi phí đáng kể do có thể kết hợp hoặc thay thế đường MPLS bằng các kênh truyền Internet FTTH, 4G, LTE; rút ngắn thời gian triển khai từ 5 đến 10 lần; không phụ thuộc vào nhà mạng (ISP) và quản trị tập trung dễ dàng trên giao diện Web.',
    },
    {
      q: isLaos
        ? 'How should my organization transition to SD-WAN from our existing MPLS network?'
        : 'Tổ chức của tôi nên chuyển sang SD-WAN như thế nào từ giải pháp WAN MPLS hiện tại?',
      a: isLaos
        ? 'You do not need to rip-and-replace existing infrastructure. Enterprises can adopt a phased Hybrid SD-WAN model by deploying broadband/4G links alongside existing MPLS. SD-WAN immediately boosts available bandwidth and enables Direct Cloud Breakout without operational disruption.'
        : 'Doanh nghiệp không cần hủy bỏ ngay hệ thống cũ mà có thể triển khai theo kiến trúc WAN lai (Hybrid WAN). Bằng cách bổ sung thêm các đường kết nối Internet/4G/LTE song song với MPLS hiện tại, SD-WAN sẽ bổ sung băng thông tức thì và định tuyến lưu lượng Cloud trực tiếp từ chi nhánh mà không gây xáo trộn vận hành.',
    },
    {
      q: isLaos
        ? 'How does SD-WAN accelerate mission-critical application performance?'
        : 'SD-WAN đẩy nhanh hiệu suất của các ứng dụng quan trọng như thế nào?',
      a: isLaos
        ? 'Viettel SD-WAN continuously monitors telemetry across all active links. Through Application-Aware intelligence, it proactively steers business-critical traffic (ERP, CRM, VoIP) over the optimal path while utilizing local caching and compression for instant responsiveness.'
        : 'Viettel SD-WAN liên tục giám sát chất lượng từng đường truyền và độ ưu tiên của ứng dụng. Bằng cơ chế nhận diện ứng dụng (Application-aware), hệ thống sẽ chủ động lái lưu lượng của các phần mềm nghiệp vụ cốt lõi qua đường truyền có chất lượng tốt nhất và ứng dụng bộ nhớ đệm (Cache) để tăng tốc tải dữ liệu.',
    },
    {
      q: isLaos
        ? 'Does replacing MPLS with SD-WAN degrade network performance or reliability?'
        : 'Hiệu năng và độ tin cậy của mạng có bị giảm khi thay thế MPLS bằng SD-WAN không?',
      a: isLaos
        ? 'Not at all. In fact, network reliability improves because SD-WAN pools multiple independent transport links (MPLS, Internet, 4G/5G). If a link experiences brownout or cut, sub-second failover reroutes active sessions seamlessly without end users noticing any glitch.'
        : 'Hoàn toàn không. Ngược lại, độ tin cậy còn được nâng cao do SD-WAN cho phép gom nhiều liên kết mạng độc lập (MPLS, Internet, 4G). Nếu một đường truyền gặp sự cố, hệ thống sẽ tự động chuyển mạch sang đường truyền còn lại ngay lập tức mà người dùng không hề nhận thấy gián đoạn.',
    },
    {
      q: isLaos
        ? 'Does Viettel SD-WAN mandate using only Viettel-provided transmission lines?'
        : 'Dịch vụ Viettel SD-WAN có bắt buộc phải sử dụng toàn bộ đường truyền do Viettel cung cấp không?',
      a: isLaos
        ? 'No. Viettel SD-WAN is completely carrier-neutral. It runs natively across any physical or broadband transmission from domestic ISPs (Viettel, VNPT, FPT, CMC) as well as global international network carriers.'
        : 'Không. Viettel SD-WAN là giải pháp mạng linh hoạt, có thể tích hợp và chạy trên hạ tầng kết nối của bất kỳ nhà cung cấp dịch vụ mạng (ISP) nào trong nước và quốc tế.',
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
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Standard VCS FAQ Accordion Container */}
        <div className="max-w-4xl mx-auto">
          <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5 sm:py-6">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-start justify-between gap-4 focus:outline-none group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <span className="p-1 rounded-md text-slate-400 group-hover:text-slate-700 transition-colors shrink-0 mt-0.5">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-[var(--vidc-color-brand-red)] stroke-[1.75]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[1.75]" />
                      )}
                    </span>
                  </VIDCNativeButton>

                  {isOpen && (
                    <div className="pt-3 pr-6 text-sm text-slate-600 leading-relaxed font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

