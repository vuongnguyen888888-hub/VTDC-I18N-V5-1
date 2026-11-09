import React, { useState } from 'react';
import { ChevronDown, CircleHelp } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CsmpFaqProps {
  currentMarket?: SEAMarket;
}

export const CsmpFaq: React.FC<CsmpFaqProps> = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First open by default

  const faqs = [
    {
      q: 'Chương trình CSMP mang lại lợi ích gì nổi bật cho doanh nghiệp của tôi?',
      a: 'CSMP cung cấp giải pháp toàn diện gồm giám sát ATTT 24/7 qua SOC, cảnh báo sớm nhờ Threat Intelligence, đánh giá mức độ trưởng thành theo chuẩn NIST-CSF và đào tạo nâng cao nhận thức cho nhân viên. Doanh nghiệp vừa được bảo vệ chủ động, vừa nâng cao năng lực nội bộ và tối ưu chi phí đầu tư tới 60%.',
    },
    {
      q: 'SOC giám sát 24/7 trong CSMP có gì khác so với việc tự triển khai tại chỗ?',
      a: 'SOC trong CSMP được vận hành bởi đội ngũ chuyên gia giàu kinh nghiệm của Viettel, sử dụng công nghệ hiện đại, cung cấp giám sát liên tục 24/7 và khả năng phản ứng sự cố nhanh chóng. So với tự đầu tư, doanh nghiệp tiết kiệm chi phí phần cứng, nhân sự và luôn được cập nhật các mẫu đe dọa mới nhất.',
    },
    {
      q: 'Threat Intelligence trong CSMP hỗ trợ doanh nghiệp như thế nào?',
      a: 'Threat Intelligence cung cấp thông tin sớm về các mối đe dọa, chiến dịch tấn công, mã độc hoặc lỗ hổng đang bị khai thác để doanh nghiệp kịp thời phòng tránh. Dữ liệu này còn được tích hợp trực tiếp vào SOC để nâng cao hiệu quả phát hiện và phản ứng sự cố.',
    },
    {
      q: 'Doanh nghiệp có thể mua riêng lẻ một số dịch vụ trong CSMP được không?',
      a: 'Quý khách hoàn toàn có thể mua riêng lẻ từng dịch vụ theo nhu cầu. Tuy nhiên, việc mua theo gói combo CSMP sẽ giúp tối ưu chi phí tổng thể tốt hơn rất nhiều và đảm bảo tính đồng bộ toàn diện giữa các lớp phòng thủ.',
    },
    {
      q: 'Chương trình hỗ trợ đào tạo nhân sự nội bộ theo hình thức nào?',
      a: 'Viettel tổ chức các chương trình đào tạo nhận thức bảo mật cho toàn bộ nhân viên công ty, đồng thời hướng dẫn thực chiến chuyên sâu cho đội ngũ IT thao tác và quản trị trực tiếp trên hệ thống ATTT thực tế của doanh nghiệp.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] border-b border-gray-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--vidc-color-brand-red)] uppercase tracking-wider mb-2">
            <CircleHelp className="w-4 h-4" />
            <span>Giải đáp thắc mắc</span>
          </div>
          <h2 
            id="csmp-faq-h2"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--vidc-legacy-hex-222225)]"
          >
            Câu Hỏi Thường Gặp Về Chương Trình Viettel CSMP
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-200"
              >
                <VIDCNativeButton
                  id={`csmp-faq-toggle-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-6 text-left font-semibold text-sm sm:text-base text-[var(--vidc-legacy-hex-222225)] hover:text-[color:var(--vidc-color-brand-red)] flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[color:var(--vidc-color-brand-red)]' : ''
                    }`}
                  />
                </VIDCNativeButton>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    <p>{faq.a}</p>
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
