import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


export const CloudServerVMwareFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Tôi có thể tự cài đặt lại hệ điều hành cho Cloud Server của tôi được không?',
      a: 'Khách hàng hoàn toàn có thể tự cài hệ điều hành theo ý muốn qua giao diện Web Portal của Viettel IDC cung cấp khi đăng ký dịch vụ. Nếu trong quá trình cài đặt có vướng mắc, bạn hãy liên hệ với kỹ thuật Viettel IDC để được hỗ trợ.',
    },
    {
      q: 'Có bao nhiêu Website tôi có thể host khi thuê 1 Cloud Server?',
      a: 'Viettel Cloud Server không có giới hạn số lượng website bạn có thể host. Khách hàng có thể thêm bao nhiêu trang web tùy thích miễn là còn đủ tài nguyên. Và nếu bạn cần hơn, Viettel IDC sẽ hỗ trợ bạn.',
    },
    {
      q: 'Dịch vụ Cloud Server của Viettel IDC bảo mật như thế nào?',
      a: 'Viettel Cloud Server VMware của Viettel IDC bảo mật theo công nghệ VXLAN tạo các mạng ảo độc lập. Ở mức hạ tầng cung cấp dịch vụ, Viettel IDC đảm bảo các khách hàng khác không thể truy cập vào dữ liệu của nhau, không thể bị tấn công từ bên ngoài. Ở mức hệ điều hành và dịch vụ, khách hàng cần đảm bảo ATTT cho hệ điều hành cũng như các dịch vụ chạy trên đó như website, email.',
    },
    {
      q: 'Tôi được hỗ trợ những gì khi thuê Viettel Cloud Server?',
      a: 'Viettel IDC sẽ cung cấp cho khách hàng 1 trang Web Portal và hướng dẫn sử dụng. Sau khi hoàn tất thanh toán cho dịch vụ, thông tin username sẽ được gửi tới email của khách hàng. Đội ngũ kỹ sư hỗ trợ 24/7/365 luôn sẵn sàng đồng hành khi phát sinh yêu cầu.',
    },
    {
      q: 'Quy trình nâng cấp tài nguyên máy chủ có gây gián đoạn dịch vụ không?',
      a: 'Khách hàng có thể nâng cấp CPU, RAM, Storage linh hoạt theo nhu cầu thực tế một cách nhanh chóng mà không cần downtime, đảm bảo hệ thống vận hành liên tục.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-111827)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            CÂU HỎI THƯỜNG GẶP
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Câu Hỏi Thường Gặp Về Viettel Cloud Server (VMware)
          </h2>
        </div>

        {/* Accordion List */}
        <div className="border-t border-b border-slate-300 divide-y divide-slate-300">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors bg-white/50">
                <VIDCNativeButton
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 sm:py-6 px-4 text-left flex items-center justify-between gap-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vidc-color-brand-red)]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-slate-900 transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-slate-800 group-hover:text-slate-900 transition-colors p-1 rounded-full bg-slate-100">
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[2]" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2]" />
                    )}
                  </span>
                </VIDCNativeButton>

                {isOpen && (
                  <div className="pb-6 px-4 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed animate-in fade-in duration-200">
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
