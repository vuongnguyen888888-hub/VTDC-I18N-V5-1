import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudServerFaqProps {
  currentMarket?: SEAMarket;
}

export const CloudServerFaq: React.FC<CloudServerFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Cloud Server services'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ máy chủ đám mây Viettel Cloud Server',
  };

  const faqs = [
    {
      q: isLaos ? 'What is Viettel Cloud Server?' : 'Viettel Cloud Server là gì?',
      a: isLaos 
        ? 'Viettel Cloud Server is a virtual private server service built on international standardized OpenStack open-source cloud computing platform, offering flexible compute resources (vCPU, RAM, Storage), high availability, and 99.99% SLA commitment.'
        : 'Viettel Cloud Server là dịch vụ máy chủ ảo trên nền tảng điện toán đám mây mã nguồn mở OpenStack, cung cấp tài nguyên tính toán (vCPU, RAM, Storage) co giãn linh hoạt, tính sẵn sàng cao và cam kết SLA lên tới 99.99%.',
    },
    {
      q: isLaos ? 'What is the difference between Pay-as-you-go and Monthly subscription?' : 'Khác biệt giữa gói Pay-as-you-go và gói Đăng ký theo tháng?',
      a: isLaos 
        ? 'Pay-as-you-go bills you detailed by actual hours used (ideal for short-term testing or projects). Monthly subscriptions help optimize costs for systems requiring stable, long-term operation.'
        : 'Gói Pay-as-you-go tính tiền chi tiết theo từng giờ sử dụng thực tế (phù hợp thử nghiệm hoặc dự án ngắn hạn). Gói đăng ký theo tháng giúp tối ưu chi phí hơn cho các hệ thống hoạt động ổn định lâu dài.',
    },
    {
      q: isLaos ? 'Is my data automatically backed up?' : 'Dữ liệu của tôi có được sao lưu (Backup) tự động không?',
      a: isLaos 
        ? 'Yes, the system supports Auto Snapshot and scheduled daily/weekly Backups to ensure comprehensive data safety for your virtual server.'
        : 'Có, hệ thống hỗ trợ tính năng Auto Snapshot và Backup định kỳ hàng ngày/hàng tuần giúp đảm bảo an toàn dữ liệu toàn diện cho máy chủ của bạn.',
    },
    {
      q: isLaos ? 'Can I upgrade my server configuration (Scale Up) when needed?' : 'Tôi có thể nâng cấp cấu hình máy chủ (Scale Up) khi có nhu cầu không?',
      a: isLaos 
        ? 'Absolutely. You just need to increase vCPU, RAM, or Enterprise SSD storage directly on the automated admin Portal without affecting your existing data.'
        : 'Hoàn toàn có thể. Bạn chỉ cần thao tác tăng vCPU, RAM hay dung lượng SSD Enterprise trực tiếp trên Portal quản trị tự động mà không làm ảnh hưởng đến dữ liệu hiện có.',
    },
    {
      q: isLaos ? 'Which Operating Systems (OS) are supported?' : 'Viettel Cloud Server hỗ trợ những Hệ điều hành (OS) nào?',
      a: isLaos 
        ? 'The service supports most popular operating systems including Linux distributions (Ubuntu, CentOS, Debian, AlmaLinux, Rocky Linux) and licensed versions of Windows Server.'
        : 'Dịch vụ hỗ trợ hầu hết các hệ điều hành phổ biến gồm các bản phân phối Linux (Ubuntu, CentOS, Debian, AlmaLinux, Rocky Linux) và Windows Server các phiên bản bản quyền.',
    },
    {
      q: isLaos ? 'How is virtual server security guaranteed?' : 'Làm thế nào để đảm bảo an toàn bảo mật cho máy chủ ảo?',
      a: isLaos 
        ? 'Viettel Cloud Server is pre-equipped with Firewall/Security Group, VPC private virtual networks, Anti-DDoS protection, and certified under PCI-DSS, ISO 27001, and ISO 27017 international security standards.'
        : 'Viettel Cloud Server trang bị sẵn hệ thống Firewall/Security Group, mạng ảo riêng VPC, chống tấn công DDoS và đạt chứng nhận an toàn thông tin quốc tế PCI-DSS, ISO 27001, ISO 27017.',
    },
    {
      q: isLaos ? 'Can I get help migrating data from another provider?' : 'Tôi có được hỗ trợ chuyển đổi dữ liệu từ nhà cung cấp khác sang Viettel Cloud không?',
      a: isLaos 
        ? 'Yes. Viettel IDC experts provide fully free consulting and Data Migration assistance from your old premises, on-premise infrastructure, or global public clouds (AWS, Azure, GCP).'
        : 'Có. Đội ngũ chuyên gia kỹ thuật Viettel IDC tư vấn và hỗ trợ di chuyển dữ liệu (Data Migration) hoàn toàn miễn phí từ hạ tầng cũ, On-premise hoặc đám mây quốc tế (AWS, Azure, GCP).',
    },
    {
      q: isLaos ? 'How long does the registration and server provisioning take?' : 'Quy trình đăng ký và thời gian khởi tạo máy chủ mất bao lâu?',
      a: isLaos 
        ? 'After provisioning on our Portal, your virtual private server will be ready to operate within 30 - 60 seconds with full Root / Administrator access privileges.'
        : 'Sau khi khởi tạo trên Portal, máy chủ ảo của bạn sẽ sẵn sàng hoạt động chỉ trong vòng 30 - 60 giây với đầy đủ quyền quản trị Root / Administrator.',
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
                  className="w-full py-5 sm:py-6 text-left flex items-center justify-between gap-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vidc-color-brand-red)]"
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

