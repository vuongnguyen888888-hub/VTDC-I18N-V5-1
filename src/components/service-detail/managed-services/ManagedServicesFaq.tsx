import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ManagedServicesFaqProps {
  currentMarket?: SEAMarket;
}

export const ManagedServicesFaq: React.FC<ManagedServicesFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Managed Services'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ quản trị ủy thác Viettel Managed Services',
  };

  const faqs = [
    {
      q: 'Viettel Managed Services là gì và đối tượng nào nên sử dụng?',
      a: 'Viettel Managed Services là dịch vụ ủy thác quản trị, vận hành và giám sát hạ tầng CNTT toàn diện (Máy chủ Cloud/Vật lý, Thiết bị Mạng, Firewall, Database) 24/7/365 bởi đội ngũ kỹ sư Viettel IDC. Dịch vụ phù hợp cho doanh nghiệp muốn tối ưu chi phí nhân sự IT, xóa bỏ áp lực trực ca và đảm bảo an toàn vận hành liên tục.',
    },
    {
      q: 'Viettel IDC hỗ trợ quản trị những nền tảng và hệ điều hành nào?',
      a: 'Chúng tôi hỗ trợ quản trị đa dạng nền tảng: Máy chủ ảo Viettel Cloud Server, máy chủ vật lý Dedicated Server, hạ tầng On-Premise của khách hàng, các thiết bị Router/Firewall (Cisco, Fortinet, Sophos...) và toàn bộ các hệ điều hành phổ biến (Ubuntu, CentOS, Debian, Rocky Linux, Windows Server...).',
    },
    {
      q: 'Thời gian cam kết phản hồi và xử lý sự cố (SLA) như thế nào?',
      a: 'Hệ thống NOC của Viettel IDC trực ca 24/7/365. Thời gian tiếp nhận và phản hồi sự cố khẩn cấp (P1) là dưới 15 phút, đồng thời kỹ sư L2/L3 sẽ can thiệp xử lý ngay lập tức để giảm thiểu tối đa thời gian gián đoạn dịch vụ.',
    },
    {
      q: 'Dữ liệu và mã nguồn ứng dụng của doanh nghiệp có được bảo mật an toàn?',
      a: 'Hoàn toàn an toàn. Viettel IDC ký cam kết bảo mật thông tin (NDA) pháp lý nghiêm ngặt. Việc truy cập quản trị hệ thống được thực hiện qua kênh VPN bảo mật, có ghi nhận Log đầy đủ và tuân thủ các tiêu chuẩn an toàn thông tin quốc tế ISO 27001, PCI-DSS.',
    },
    {
      q: 'Doanh nghiệp có cần bàn giao toàn bộ quyền Root / Administrator không?',
      a: 'Không bắt buộc. Doanh nghiệp có thể cấp tài khoản quản trị riêng biệt cho kỹ sư Viettel IDC với phân quyền vừa đủ hoặc cấp quyền cao nhất theo thỏa thuận trong hợp đồng dịch vụ.',
    },
    {
      q: 'Khác biệt giữa gói quản trị cơ bản và gói quản trị chuyên sâu?',
      a: 'Gói cơ bản tập trung vào cài đặt, cập nhật bản vá bảo mật OS và giám sát 24/7. Gói nâng cao/chuyên sâu mở rộng quản trị toàn diện tầng ứng dụng Web Server (Nginx, Apache), Database (MySQL, PostgreSQL), tối ưu hiệu năng và thiết lập chính sách sao lưu tự động khôi phục thảm họa (Disaster Recovery).',
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
