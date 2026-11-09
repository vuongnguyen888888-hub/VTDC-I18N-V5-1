import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudFirewallFaqProps {
  currentMarket?: SEAMarket;
}

export const CloudFirewallFaq: React.FC<CloudFirewallFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Cloud Firewall services'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ tường lửa đám mây Viettel Cloud Firewall',
  };

  const faqs = [
    {
      q: isLaos ? 'What security vendors does Viettel Cloud Firewall partner with?' : 'Viettel Cloud Firewall hỗ trợ những hãng bảo mật nào?',
      a: isLaos
        ? 'Viettel Cloud Firewall integrates leading global cybersecurity vendors including Palo Alto Networks (VM-Series) and Fortinet (FortiGate-VM) deployed on international Tier 3 standard infrastructure.'
        : 'Viettel Cloud Firewall hợp tác cùng các hãng bảo mật hàng đầu thế giới bao gồm Palo Alto Networks (VM-Series) và Fortinet (FortiGate-VM), triển khai trên nền tảng hạ tầng đạt chuẩn quốc tế ANSI/TIA-942 Rated 3 của Viettel IDC.',
    },
    {
      q: isLaos ? 'Does the listed price include Virtual Machine (VM) compute resources?' : 'Chi phí trên bảng giá đã bao gồm máy chủ ảo (VM) chưa?',
      a: isLaos
        ? 'The listed pricing covers the Next-Gen Firewall Software License and threat intelligence subscriptions. You can provision recommended Cloud Server vCPU/RAM resources directly or attach to your existing Viettel Cloud IaaS environment.'
        : 'Đơn giá niêm yết trong bảng giá là chi phí bản quyền tính năng tường lửa (License), chưa bao gồm tài nguyên máy chủ ảo (vCPU, RAM, Lưu trữ) triển khai. Quý khách có thể sử dụng hạ tầng Cloud Server sẵn có hoặc khởi tạo mới tài nguyên theo cấu hình khuyến nghị.',
    },
    {
      q: isLaos ? 'When should I choose Standalone vs High-Availability (HA) deployment?' : 'Khi nào nên sử dụng mô hình Standalone và mô hình High-Availability (HA)?',
      a: isLaos
        ? 'Standalone mode (1 firewall instance) is optimized for Dev/Test, staging, or cost-sensitive workloads. High-Availability (Active-Passive HA) is essential for mission-critical core banking, financial, and e-commerce systems requiring sub-second seamless failover.'
        : 'Mô hình Standalone (01 thiết bị) phù hợp cho các hệ thống yêu cầu chi phí tiết kiệm, quản trị đơn giản hoặc môi trường Dev/Test. Mô hình HA (01 thiết bị Active và 01 thiết bị Passive) phù hợp cho các hệ thống ứng dụng quan trọng, tài chính, e-commerce yêu cầu độ sẵn sàng cao tuyệt đối và chuyển mạch dự phòng tức thì.',
    },
    {
      q: isLaos ? 'Can I seamlessly scale from VCF1 to VCF2 or VCF3 as traffic grows?' : 'Tôi có thể mở rộng từ gói VCF1 lên VCF2 hoặc VCF3 khi lưu lượng tăng không?',
      a: isLaos
        ? 'Yes, absolutely. Because it is cloud-native, you can upgrade license tiers and scale underlying vCPU/RAM anytime without rebuilding existing network topologies and security policies.'
        : 'Hoàn toàn có thể. Do vận hành trên nền tảng điện toán đám mây linh hoạt, bạn có thể dễ dàng nâng cấp license và tài nguyên máy chủ ảo lên cấu hình cao hơn mà không cần tái cấu hình toàn bộ hệ thống chính sách bảo mật.',
    },
    {
      q: isLaos ? 'Does the service support secure Remote VPN for work-from-home teams?' : 'Dịch vụ có hỗ trợ kết nối từ xa cho người dùng làm việc tại nhà (Work from Home) không?',
      a: isLaos
        ? 'Yes. The service provides extensive IPSec VPN tunnels (up to 2,000) and SSL VPN / Clientless VPN enabling secure, encrypted remote workforce access from anywhere.'
        : 'Có. Dịch vụ hỗ trợ đầy đủ các tính năng IPSec VPN Site-to-Site (lên tới 2.000 tunnels) cùng SSL VPN và Clientless VPN cho phép người dùng từ xa kết nối an toàn vào hạ tầng mạng nội bộ.',
    },
    {
      q: isLaos ? 'What is the SLA commitment and incident response time?' : 'Cam kết chất lượng dịch vụ (SLA) và thời gian phản hồi sự cố như thế nào?',
      a: isLaos
        ? 'Viettel IDC commits to a 99.99% service availability SLA backed by 24/7/365 dedicated SOC security engineers with incident response within 15 minutes.'
        : 'Viettel IDC cam kết SLA độ sẵn sàng 99.99% với chính sách bồi thường hợp đồng minh bạch. Đội ngũ kỹ sư an ninh mạng & SOC hỗ trợ kỹ thuật 24/7/365 với thời gian phản hồi sự cố dưới 15 phút.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-111827)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
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

