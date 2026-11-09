import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VirtualSocFaqProps {
  currentMarket?: SEAMarket;
}

export const VirtualSocFaq: React.FC<VirtualSocFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Virtual SOC services'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ Trung tâm Điều hành ATTT Viettel Virtual SOC',
  };

  const faqs = [
    {
      q: isLaos
        ? 'What is Viettel Virtual SOC (vSOC) and how does it differ from traditional SOC?'
        : 'Viettel Virtual SOC là gì và khác gì so với trung tâm SOC truyền thống?',
      a: isLaos
        ? 'Viettel Virtual SOC is a cloud-native Security Operation Center combining Process, People, and Technology. Instead of investing billions in hardware and an in-house 24/7 team, businesses subscribe on-demand to Viettel\'s multi-layered monitoring, SIEM, SOAR, and certified security analysts.'
        : 'Viettel Virtual SOC là Trung tâm điều hành an ninh mạng thế hệ mới vận hành trên nền tảng đám mây, kết hợp hoàn hảo 3 trụ cột: Quy trình – Con người – Công nghệ. Thay vì doanh nghiệp phải đầu tư hàng tỷ đồng mua sắm hạ tầng và duy trì đội ngũ trực 24/7, vSOC cho phép thuê dịch vụ linh hoạt theo số lượng thiết bị với đầy đủ năng lực SIEM, SOAR và chuyên gia bảo mật hàng đầu.',
    },
    {
      q: isLaos
        ? 'Does vSOC require upfront investment in on-premise hardware appliances?'
        : 'Dịch vụ vSOC có yêu cầu doanh nghiệp phải đầu tư thiết bị phần cứng mới không?',
      a: isLaos
        ? 'No. Viettel Virtual SOC operates on Viettel IDC cloud infrastructure, deployed via lightweight distributed endpoint agents and virtual network sensors, eliminating all hardware CapEx.'
        : 'Không. Viettel Virtual SOC vận hành trên nền tảng đám mây của Viettel IDC, triển khai thông qua Agent phân tán trên Endpoint và các cảm biến phân tích mạng, giúp doanh nghiệp tiết kiệm 100% chi phí mua sắm và khấu hao phần cứng ban đầu.',
    },
    {
      q: isLaos
        ? 'What is the standard SLA response time when a security incident is detected?'
        : 'Thời gian phản ứng và xử lý khi phát hiện tấn công (SLA) là bao lâu?',
      a: isLaos
        ? 'Our Tier 1 specialists and certified security analysts on 24/7/365 watch detect and triage incidents immediately, with an SLA response time under 15 minutes for critical threats and instant network quarantine.'
        : 'Đội ngũ kỹ sư Tier 1 và chuyên gia trực chiến 24/7/365 phát hiện và tiếp nhận sự cố ngay lập tức. Thời gian phản hồi theo cam kết SLA dưới 15 phút đối với các sự cố nghiêm trọng, đồng thời kích hoạt cô lập thiết bị nhiễm độc tức thì.',
    },
    {
      q: isLaos
        ? 'How does the service continuously tune rules to eliminate False Positives?'
        : 'Dịch vụ có hỗ trợ định kỳ giảm thiểu cảnh báo sai (False Positive) không?',
      a: isLaos
        ? 'Yes. Dedicated Content Analysis engineers continuously calibrate detection heuristics and correlation rules, suppressing benign noise and delivering high-fidelity executive insights.'
        : 'Có. Đội ngũ kỹ sư Content Analysis chuyên trách sẽ liên tục tinh chỉnh các bộ quy tắc tương quan (correlation rules) dựa trên lưu lượng thực tế của doanh nghiệp, giúp loại bỏ cảnh báo giả và tập trung vào mối đe dọa thật sự.',
    },
    {
      q: isLaos
        ? 'Can small businesses with fewer than 5 servers or workstations adopt vSOC?'
        : 'Doanh nghiệp quy mô nhỏ dưới 5 thiết bị có sử dụng được vSOC không?',
      a: isLaos
        ? 'Yes. The pricing model flexibly accommodates entry scales of 1 – 5 devices starting from 5,000,000 VNĐ/month/device with free trial onboarding available.'
        : 'Hoàn toàn có thể. Bảng giá hỗ trợ linh hoạt từ quy mô 1 – 5 thiết bị với mức phí chỉ từ 5.000.000 VNĐ/tháng/thiết bị và hỗ trợ dùng thử miễn phí trước khi triển khai chính thức.',
    },
    {
      q: isLaos
        ? 'Does vSOC assist in complying with regulations like Decree 85/2016/ND-CP and State Bank circulars?'
        : 'Dịch vụ có hỗ trợ tuân thủ các quy định như Nghị định 85/2016/NĐ-CP và Thông tư NHNN không?',
      a: isLaos
        ? 'Yes. Viettel Virtual SOC satisfies the requirement for independent third-party 24/7 security monitoring mandated for Level 3+ information systems and banking/financial regulatory standards.'
        : 'Có. Viettel Virtual SOC đáp ứng trọn vẹn tiêu chí thuê ngoài dịch vụ giám sát ATTT độc lập 24/7 bắt buộc đối với hệ thống thông tin cấp độ 3 trở lên theo Nghị định 85/2016/NĐ-CP và các quy định an toàn bảo mật của Ngân hàng Nhà nước.',
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
