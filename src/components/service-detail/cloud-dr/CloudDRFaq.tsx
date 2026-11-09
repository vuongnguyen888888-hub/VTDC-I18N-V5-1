import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudDRFaqProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CloudDRFaq: React.FC<CloudDRFaqProps> = ({ currentMarket, onOpenConsult }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Cloud DR (DRaaS) service'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ dự phòng thảm họa Viettel Cloud DR (DRaaS)',
  };

  const faqs = [
    {
      q: isLaos 
        ? 'What is the key difference between DRaaS and Cloud Backup (BaaS)?' 
        : 'DRaaS khác biệt gì so với dịch vụ sao lưu đám mây (Cloud Backup - BaaS)?',
      a: isLaos 
        ? 'The primary distinction between DRaaS and BaaS is the Recovery Time Objective (RTO). While BaaS focuses on data archiving and file/database restoration taking hours to days, DRaaS maintains hot/warm replica workloads allowing near-instant failover and service restoration within just 10 minutes.'
        : 'Khác biệt lớn nhất giữa DRaaS và BaaS là thời gian khôi phục dịch vụ (RTO – Recovery Time Objective). Dịch vụ DRaaS cho phép khách hàng chuyển đổi dự phòng và khôi phục hệ thống hoạt động trở lại chỉ trong vòng ~10 phút, trong khi BaaS chủ yếu phục vụ lưu trữ sao lưu dữ liệu và thời gian phục hồi phụ thuộc vào dung lượng tải về.',
    },
    {
      q: isLaos 
        ? 'How is the Viettel Cloud DR service billed?' 
        : 'Cơ chế tính cước dịch vụ Viettel Cloud DR được thực hiện như thế nào?',
      a: isLaos 
        ? 'Viettel IDC only charges for DR Licenses and standby Storage (HDD) capacity while maintaining replication. Only when actual Failover is triggered and the DR system runs in place of the primary system does Viettel IDC bill for compute resources (vCPU, RAM, IP, Bandwidth).'
        : 'Viettel IDC chỉ tính phí License và phí không gian lưu trữ (HDD) trong thời gian duy trì hệ thống DR. Chỉ khi nào hệ thống DR được kích hoạt Failover và hoạt động thay thế hệ thống chính, Viettel IDC mới bắt đầu thu tiền các tài nguyên Compute liên quan (vCPU, RAM, IP, Bandwidth).',
    },
    {
      q: isLaos 
        ? 'Which customer platforms and environments can implement DRaaS?' 
        : 'Hệ thống nào của khách hàng có thể triển khai được DRaaS?',
      a: isLaos 
        ? 'DRaaS is optimized for the two most popular enterprise virtualization platforms: VMware vSphere and Microsoft Hyper-V. Any customer On-Premises or Private Cloud environment running these platforms can seamlessly replicate to Viettel IDC Cloud.'
        : 'DRaaS hoạt động tối ưu trên 2 nền tảng ảo hóa phổ biến nhất hiện nay là VMware vSphere và Microsoft Hyper-V. Mọi hệ thống Private Cloud hoặc On-Premises của khách hàng sử dụng 2 nền tảng này hoàn toàn có thể triển khai hệ thống DR lên hạ tầng Cloud của Viettel IDC.',
    },
    {
      q: isLaos 
        ? 'Why does DRaaS offer massive cost savings compared to building a secondary DC?' 
        : 'Vì sao dịch vụ DRaaS giúp tiết kiệm chi phí vượt trội so với tự xây dựng Data Center dự phòng?',
      a: isLaos 
        ? 'Enterprises do not need to invest hundreds of thousands of dollars constructing a secondary physical data center, nor hire dedicated 24/7 operations teams. Total DR maintenance costs do not exceed 50% of the primary system lease.'
        : 'Doanh nghiệp không cần tiêu tốn hàng tỷ đồng đầu tư trung tâm dữ liệu dự phòng thứ cấp, không cần mua sắm thêm phần cứng hay thuê chuyên gia kỹ thuật riêng. Tổng chi phí duy trì dịch vụ DR không vượt quá 50% so với chi phí thuê hệ thống chính.',
    },
    {
      q: isLaos 
        ? 'What failover scenarios are supported when a disaster strikes?' 
        : 'Dịch vụ có hỗ trợ những kịch bản Failover nào khi xảy ra sự cố?',
      a: isLaos 
        ? 'The service provides a flexible "Failover Now" capability with a single click according to pre-configured runbooks: supporting partial failover (specific servers/apps) or full failover (entire data center).'
        : 'Dịch vụ cung cấp tính năng 1-Click Failover theo kịch bản thiết lập sẵn: hỗ trợ chuyển đổi Failover 1 phần (từng cụm máy chủ hoặc dịch vụ ưu tiên) hoặc Failover toàn phần (toàn bộ trung tâm dữ liệu).',
    },
    {
      q: isLaos 
        ? 'Does Viettel IDC support regular DR drills for compliance?' 
        : 'Viettel IDC có hỗ trợ diễn tập DR định kỳ để phục vụ kiểm toán tuân thủ không?',
      a: isLaos 
        ? 'Yes. Viettel IDC engineers accompany customers during periodic DR testing in isolated sandboxes, validating runbooks and generating audit-ready compliance reports without impacting live production systems.'
        : 'Có. Đội ngũ chuyên gia Viettel IDC trực tiếp đồng hành cùng khách hàng trong các buổi diễn tập DR định kỳ trên môi trường mạng thử nghiệm cô lập, đánh giá tính sẵn sàng và cấp báo cáo tuân thủ mà không làm gián đoạn hệ thống đang chạy.',
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
                  <div className="pb-6 sm:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl animate-in fade-in duration-200">
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
