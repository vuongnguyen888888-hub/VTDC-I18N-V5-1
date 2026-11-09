import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ThreatIntelligenceFaqProps {
  currentMarket?: SEAMarket;
}

export const ThreatIntelligenceFaq: React.FC<ThreatIntelligenceFaqProps> = ({
  currentMarket,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'FREQUENTLY ASKED QUESTIONS' : 'HỎI ĐÁP THƯỜNG GẶP',
    headline: isLaos
      ? 'Frequently Asked Questions About Viettel Threat Intelligence'
      : 'Câu Hỏi Thường Gặp Về Dịch Vụ Viettel Threat Intelligence',
    subtitle: isLaos
      ? 'Detailed technical and operational answers to common inquiries regarding CTI deployment, integrations, and efficacy.'
      : 'Giải đáp chi tiết các thắc mắc phổ biến về cơ chế vận hành, chuẩn kết nối dữ liệu và hiệu quả phòng thủ của Viettel Threat Intelligence.',
  };

  const faqs = [
    {
      question: 'Threat Intelligence là gì và khác gì so với các giải pháp bảo mật truyền thống?',
      answer:
        'Cyber Threat Intelligence (CTI) là quá trình thu thập, phân tích và diễn giải thông tin về các mối đe dọa mạng hiện tại và tiềm ẩn. Khác với giải pháp truyền thống chỉ phản ứng khi mã độc đã chạm vào hệ thống, CTI giúp doanh nghiệp biết trước đối tượng tấn công là ai, sử dụng công cụ gì và dấu hiệu nhận biết (IoC) ra sao để chủ động chặn đứng từ xa.',
    },
    {
      question: 'Dữ liệu của Viettel Threat Intelligence được cập nhật với tần suất như thế nào?',
      answer:
        'Dữ liệu được cập nhật liên tục theo thời gian thực: Threat Feed (IP, Domain độc hại, IoC) cập nhật hàng giờ; Cảnh báo lộ lọt dữ liệu và tài khoản phát ngay khi có phát hiện mới; Dữ liệu về lỗ hổng, mã độc, APT cập nhật hàng ngày hoặc tức thì ngay khi xuất hiện; Dark Web và mạng xã hội được quét tự động liên tục.',
    },
    {
      question: 'Gói đánh giá nhanh Threat Check cung cấp những thông tin gì?',
      answer:
        'Gói Threat Check đánh giá mức độ rủi ro an ninh mạng tổng thể của doanh nghiệp trên thang điểm từ A đến F, bao gồm: rà soát rò rỉ dữ liệu/tài khoản, kiểm tra mã độc trên hạ tầng, đánh giá cấu hình bảo mật website, phát hiện cổng mở bất thường và cảnh báo phishing/giả mạo thương hiệu kèm báo cáo khuyến nghị khắc phục.',
    },
    {
      question: 'Viettel Threat Intelligence có thể tích hợp với các hệ thống SIEM/SOC sẵn có của chúng tôi không?',
      answer:
        'Có. Nền tảng hỗ trợ đầy đủ các chuẩn API quốc tế như STIX/TAXII, RESTful API giúp dễ dàng đẩy dữ liệu Threat Feed tự động vào các hệ thống SIEM (Splunk, IBM QRadar, Elastic...), tường lửa NGFW, IPS/IDS và giải pháp EDR của mọi hãng mà không gây xung đột hạ tầng.',
    },
    {
      question: 'Dịch vụ có giúp doanh nghiệp ngăn chặn hacker khi đang xảy ra sự cố không?',
      answer:
        'Có. Khi xảy ra sự cố, dịch vụ hỗ trợ xác định nguồn gốc và hành vi hacker, cung cấp ngay tập IoC độc quyền để cô lập cuộc tấn công, đồng thời đội ngũ chuyên gia Viettel sẽ hướng dẫn quy trình phản ứng, xử lý và giảm thiểu tối đa thiệt hại.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 5 Accordions */}
        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200"
              >
                <VIDCNativeButton
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] leading-snug">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </VIDCNativeButton>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
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
