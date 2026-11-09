import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudWafFaqProps {
  currentMarket?: SEAMarket;
}

export const CloudWafFaq: React.FC<CloudWafFaqProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const t = {
    headline: isLaos 
      ? 'Frequently Asked Questions About Viettel Cloud WAF'
      : 'Câu hỏi thường gặp',
    subtitle: isLaos
      ? 'Clear answers regarding operational architecture, deployment models, anti-DDoS scrubbing capacity, and free trial onboarding.'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ tường lửa ứng dụng web và API Viettel Cloud WAF',
  };

  const faqs = [
    {
      q: isLaos 
        ? 'What deployment model does Viettel CWAF use, and is any software installation required on origin servers?'
        : 'Viettel CWAF triển khai theo mô hình nào và có cần cài đặt phần mềm lên máy chủ không?',
      a: isLaos
        ? 'Viettel CWAF operates on a cloud-based Reverse Proxy model. You do not need to install any agent or software on your origin servers. Simply redirecting your DNS records (CNAME or A Record) to point to the Viettel CWAF edge gateway instantly activates complete web and API protection without downtime.'
        : 'Viettel CWAF hoạt động theo mô hình Reverse Proxy trên nền tảng đám mây. Bạn không cần cài đặt bất kỳ agent hay phần mềm nào lên máy chủ gốc, chỉ cần chuyển hướng bản ghi DNS (CNAME/A Record) trỏ về hệ thống Viettel CWAF là quá trình bảo vệ được kích hoạt ngay lập tức mà không gây gián đoạn dịch vụ.',
    },
    {
      q: isLaos
        ? 'What types of DDoS attacks can Viettel CWAF successfully mitigate?'
        : 'Viettel CWAF có khả năng chống được những loại tấn công DDoS nào?',
      a: isLaos
        ? 'The solution delivers comprehensive defense against DDoS attacks at Layer 3 and 4 (Network/Transport layer floods like SYN Flood, UDP Flood, ICMP Flood) and Layer 7 (Application layer floods like HTTP GET/POST floods, Slowloris, Slow Read). Backed by a globally distributed 15 Tbps scrubbing capacity across 21 Scrubbing Centers, Viettel CWAF neutralizes volumetric barrages effortlessly to ensure unbroken availability.'
        : 'Giải pháp bảo vệ toàn diện trước các cuộc tấn công DDoS ở Lớp 3, 4 (Network/Transport layer như SYN Flood, UDP Flood, ICMP Flood) và Lớp 7 (Application layer như HTTP GET/POST Flood, Slowloris). Với hạ tầng phân tán công suất lên tới 15 Tbps và 21 Scrubbing Centers toàn cầu, Viettel CWAF triệt tiêu mọi đợt tấn công bão mạng và bảo vệ dịch vụ vận hành thông suốt.',
    },
    {
      q: isLaos
        ? 'How does the solution minimize false positives and prevent blocking genuine users?'
        : 'Giải pháp hạn chế chặn nhầm (False Positive) người dùng thật như thế nào?',
      a: isLaos
        ? 'The platform utilizes advanced Machine Learning algorithms to continuously baseline and learn normative application traffic behaviors. When an anomalous pattern arises, the system dynamically synthesizes context-aware custom rules rather than rigidly applying static signatures, radically minimizing false alerts and ensuring genuine users enjoy seamless access.'
        : 'Hệ thống ứng dụng học máy (Machine Learning) để liên tục phân tích và tự học hành vi thông thường của ứng dụng. Khi xuất hiện mẫu bất thường, hệ thống tự động sinh ra quy tắc bảo vệ đặc thù theo ngữ cảnh thay vì áp dụng máy móc các bộ rule cứng, nhờ đó tối thiểu hóa cảnh báo giả và chặn nhầm người dùng hợp lệ.',
    },
    {
      q: isLaos
        ? 'How do I protect undocumented endpoints (Shadow or Zombie APIs)?'
        : 'Làm sao để tôi bảo vệ được các API chưa được lập tài liệu (Shadow/Zombie API)?',
      a: isLaos
        ? 'The COMPLETE tier of Viettel CWAF integrates automated API Discovery technology. It autonomously scans, identifies, and profiles all live API endpoints in the traffic stream, enabling you to inspect, manage, and enforce automated protection policies without tedious manual endpoint documentation.'
        : 'Gói COMPLETE của Viettel CWAF tích hợp công nghệ API Discovery tự động rà quét, nhận diện và lập hồ sơ toàn bộ các điểm cuối API đang hoạt động trong luồng dữ liệu, giúp bạn giám sát và áp dụng chính sách bảo vệ tự động mà không cần can thiệp thủ công.',
    },
    {
      q: isLaos
        ? 'Can I trial the Viettel CWAF service before signing a commercial contract?'
        : 'Tôi có được dùng thử dịch vụ trước khi ký hợp đồng không?',
      a: isLaos
        ? 'Yes. Viettel IDC offers a full-featured Trial program so that your enterprise can thoroughly evaluate filtering performance, latency overhead, and compatibility with your production applications prior to commercial commitment.'
        : 'Có. Viettel IDC hỗ trợ chương trình dùng thử (Trial) đầy đủ tính năng để doanh nghiệp đánh giá hiệu năng lọc tấn công, độ trễ và độ tương thích với hệ thống ứng dụng trước khi chính thức ký hợp đồng.',
    },
  ];

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-111827)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Section Title chuẩn Cloud Server */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Minimal Accordion List with horizontal line dividers chuẩn Cloud Server */}
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
                  <div className="pb-6 pr-12 text-sm sm:text-base text-slate-600 leading-relaxed">
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
