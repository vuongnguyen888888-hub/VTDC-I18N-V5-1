import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface DedicatedComputeFaqProps {
  currentMarket?: SEAMarket;
}

export const DedicatedComputeFaq: React.FC<DedicatedComputeFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code === 'la';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Server Leasing services'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ thuê máy chủ vật lý Viettel Server Leasing',
  };

  const faqs = [
    {
      q: isLaos ? 'What is Viettel Server Leasing?' : 'Dịch vụ Cho thuê máy chủ (Viettel Server Leasing) là gì?',
      a: isLaos 
        ? 'Viettel Server Leasing provides dedicated physical servers, storage, network devices, and security equipment in diverse configurations, located within international-standard Viettel IDC Data Centers with 100% isolated hardware resources.'
        : 'Viettel Server Leasing là dịch vụ cung cấp máy chủ vật lý riêng biệt kèm thiết bị mạng, bảo mật và lưu trữ chính hãng (HP, Dell, Supermicro), được đặt trong không gian hạ tầng tiêu chuẩn tại các Trung tâm Dữ liệu của Viettel IDC.',
    },
    {
      q: isLaos ? 'What is the difference between Server Leasing and Cloud Server?' : 'Khác biệt chính giữa Viettel Server Leasing và Cloud Server (Máy chủ ảo)?',
      a: isLaos 
        ? 'Viettel Server Leasing gives you 100% raw physical hardware performance without any hypervisor virtualization layer or shared tenancy, making it ideal for large databases, high-IOPS storage, and strict regulatory compliance.'
        : 'Server Leasing bàn giao máy chủ vật lý thực tế độc lập 100%, không chia sẻ phần cứng với người dùng khác và không có độ trễ ảo hóa, phù hợp cho hệ thống cơ sở dữ liệu lớn và ứng dụng đòi hỏi hiệu năng CPU/IOPS tối đa.',
    },
    {
      q: isLaos ? 'Who is responsible for hardware maintenance and component failures?' : 'Ai chịu trách nhiệm bảo trì và thay thế linh kiện khi phát sinh hỏng hóc phần cứng?',
      a: isLaos 
        ? 'Viettel IDC is 100% responsible for hardware maintenance, physical monitoring, and free replacement of genuine spare components throughout the contract period.'
        : 'Viettel IDC chịu toàn bộ trách nhiệm bảo trì phần cứng. Khi phát sinh sự cố hỏng hóc, đội ngũ kỹ sư tại chỗ sẽ kiểm tra và thay mới linh kiện chính hãng ngay lập tức hoàn toàn miễn phí.',
    },
    {
      q: isLaos ? 'Can I customize hardware specs (CPU, RAM, Disks, RAID, Network)?' : 'Tôi có thể tùy biến cấu hình phần cứng (CPU, RAM, Ổ cứng, Card mạng, RAID) không?',
      a: isLaos 
        ? 'Yes, absolutely. Viettel IDC supports flexible configurations including multi-socket CPUs, RAM expansions up to 1TB+, NVMe SSDs, Hardware RAID cards, and 10Gbps/25Gbps network interfaces.'
        : 'Hoàn toàn có thể. Viettel IDC hỗ trợ tư vấn và lắp ráp cấu hình linh hoạt theo đúng yêu cầu dự án: mở rộng RAM đến hàng TB, gắn thêm ổ đĩa NVMe, card RAID phần cứng và card mạng 10Gbps/25Gbps.',
    },
    {
      q: isLaos ? 'What level of administrative access do I receive?' : 'Khách hàng nhận được quyền quản trị như thế nào sau khi bàn giao?',
      a: isLaos 
        ? 'You receive complete root privileges on Linux or Administrator on Windows, plus dedicated out-of-band management access (iDRAC for Dell, iLO for HPE, IPMI for Supermicro).'
        : 'Khách hàng được bàn giao toàn quyền quản trị cao nhất (Root trên Linux hoặc Administrator trên Windows), đồng thời được cung cấp tài khoản quản trị phần cứng từ xa (iDRAC/iLO/IPMI).',
    },
    {
      q: isLaos ? 'How long does physical server provisioning take?' : 'Thời gian triển khai và bàn giao máy chủ vật lý mất bao lâu?',
      a: isLaos 
        ? 'Standard in-stock configurations are provisioned within 24 - 48 hours. Custom hardware configurations are deployed according to agreed technical schedules.'
        : 'Đối với các cấu hình máy chủ có sẵn tại Data Center, thời gian cài đặt và bàn giao diễn ra trong vòng 24 - 48 giờ. Cấu hình đặt hàng đặc thù sẽ triển khai theo tiến độ thống nhất.',
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
                  <span className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-slate-400 group-hover:text-slate-600 transition-colors">
                    {isOpen ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2] text-[var(--vidc-color-brand-red)]" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                    )}
                  </span>
                </VIDCNativeButton>

                {isOpen && (
                  <div className="pb-6 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
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
