import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ColocationFaqProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const ColocationFaq: React.FC<ColocationFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'FAQ' : 'CÂU HỎI THƯỜNG GẶP',
    headline: isLaos ? 'Frequently Asked Questions About Viettel Colocation' : 'Câu Hỏi Thường Gặp Về Dịch Vụ Viettel Colocation',
  };

  const faqs = [
    {
      q: 'Dịch vụ thuê chỗ đặt thiết bị (Colocation) là gì?',
      a: 'Dịch vụ Colocation của Viettel IDC là dịch vụ cung cấp không gian theo unit (U), tủ rack hoặc khu vực riêng (cage) trong phòng máy đạt chuẩn quốc tế TIA-942 Rated 3. Dịch vụ mang lại độ sẵn sàng 99.98%, kết nối Internet tốc độ cao, nguồn điện liên tục và nhiệt độ được điều khiển chính xác bởi hệ thống điều hòa công nghiệp chuyên dụng cho Data Center.',
    },
    {
      q: 'Không gian RACK và đơn vị U được tính như thế nào?',
      a: 'Trong Data Center, thiết bị được lắp đặt trong các tủ Rack chuẩn 19 inch (chiều rộng 19 inch = 482.6 mm). Chiều cao không gian bên trong được tính bằng đơn vị U (1U = 1.75 inch = 44.45 mm). Chiều cao của các thiết bị (server, switch, router) thường là bội số của U. Tủ rack phổ biến nhất hiện nay có kích thước 42U.',
    },
    {
      q: 'Tôi có được sử dụng dịch vụ Internet/truyền số liệu của nhà cung cấp khác để làm đường backup không?',
      a: 'Có. Viettel IDC chào đón tất cả các ISP tại Việt Nam. Các nhà cung cấp mạng lớn như VNPT, FPT, CMC,... đều đã hợp tác với Viettel IDC để cung cấp đường truyền và phương án backup cho khách hàng tại các Data Center.',
    },
    {
      q: 'Viettel IDC có hỗ trợ kiểm tra thiết bị định kỳ hàng ngày không?',
      a: 'Với khách hàng có nhu cầu, Viettel IDC sẽ kiểm tra tình trạng thiết bị định kỳ 2 lần/ngày. Nếu phát hiện đèn tín hiệu bất thường, đội ngũ trực sẽ chủ động gọi điện thông báo cho nhân viên kỹ thuật đã đăng ký và phối hợp xử lý trong phạm vi trách nhiệm.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Minimal Accordion List with horizontal line dividers */}
        <div className="border-t border-b border-slate-200 divide-y divide-slate-200 bg-white rounded-2xl shadow-xs px-6 sm:px-8">
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
                  <span className="text-base sm:text-lg font-extrabold text-slate-800 group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-slate-700 group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    {isOpen ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                    )}
                  </span>
                </VIDCNativeButton>

                {isOpen && (
                  <div className="pb-6 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed animate-in fade-in duration-200 font-normal">
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
