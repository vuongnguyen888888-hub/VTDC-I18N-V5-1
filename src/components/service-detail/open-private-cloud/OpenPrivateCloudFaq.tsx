import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


export const OpenPrivateCloudFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Dịch vụ Viettel Open Dedicated Private Cloud (oDPC) có điểm gì khác biệt so với dịch vụ Viettel Virtual Private Cloud (VPC)?',
      a: 'Dịch vụ Viettel oDPC cung cấp cho khách hàng hạ tầng vật lý chuyên biệt hoàn toàn (Single Tenant), không chia sẻ tài nguyên với nhiều khách hàng khác như dịch vụ Viettel VPC. Ngoài ra, với dịch vụ oDPC, các dịch vụ gia tăng như cân bằng tải ảo (vLB), tường lửa ảo (vFW), Kubernetes (VKS), Database (VDBS) được tích hợp sẵn như các tính năng mặc định của hệ thống. Khách hàng không cần trả thêm chi phí mua thêm tính năng khi tích hợp như trên dịch vụ Viettel VPC.',
    },
    {
      q: 'Thời gian triển khai và bàn giao hệ thống Viettel Open Dedicated Private Cloud là bao lâu?',
      a: 'Viettel IDC cung cấp và bàn giao hệ thống oDPC hoàn chỉnh theo gói cấu hình tiêu chuẩn trong vòng 24 tiếng kể từ thời điểm khách hàng hoàn tất thanh toán đầy đủ giá trị đơn hàng theo thỏa thuận.',
    },
    {
      q: 'Hình thức cung cấp dịch vụ và các điều khoản thanh toán tối thiểu của dịch vụ như thế nào?',
      a: 'Khách hàng vui lòng đăng ký sử dụng dịch vụ với thời gian tối thiểu 12 tháng. Hình thức thanh toán áp dụng trả trước cho toàn bộ giá trị hợp đồng hoặc thanh toán định kỳ theo chu kỳ 3 tháng/lần. Để nhận phương án thanh toán chi tiết, quý khách vui lòng liên hệ hotline 1800.8088 hoặc email sales@viettelidc.com.vn.',
    },
    {
      q: 'Khách hàng có thể yêu cầu cấu hình các dòng máy chủ khác so với hạ tầng đầu tư sẵn của dịch vụ không?',
      a: 'Viettel oDPC hướng đến mục tiêu đáp ứng tối ưu về thời gian đưa dịch vụ vào hoạt động nhanh nhất, tính sẵn sàng cao và hiệu năng sử dụng tài nguyên ổn định. Trong trường hợp doanh nghiệp có yêu cầu đặc thù về dòng máy chủ phần cứng khác, vui lòng liên hệ với bộ phận kinh doanh của Viettel IDC để được tư vấn và thiết kế giải pháp kỹ thuật phù hợp.',
    },
    {
      q: 'Dịch vụ hỗ trợ những cơ chế bảo mật và giám sát nào trên giao diện quản trị?',
      a: 'Hệ thống cung cấp portal Self-Service cho phép giám sát tài nguyên thời gian thực (RAM, CPU, IOPS, Bandwidth), quản lý bản sao lưu (Backup), cấu hình tường lửa phân lớp vFirewall, Security Group và phân quyền người dùng chi tiết (IAM), giúp quản trị toàn diện hệ thống trên một giao diện duy nhất.',
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
            Câu Hỏi Thường Gặp Về Viettel Open Private Cloud
          </h2>
        </div>

        {/* Accordion List */}
        <div className="border-t border-b border-slate-300 divide-y divide-slate-300">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors bg-white/60">
                <VIDCNativeButton
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 sm:py-6 px-4 sm:px-6 text-left flex items-center justify-between gap-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vidc-color-brand-red)]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-slate-950 transition-colors leading-snug">
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
                  <div className="pb-6 px-4 sm:px-6 pr-8 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-200 font-medium">
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
