import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VpcFaqProps {
  currentMarket?: SEAMarket;
}

export const VpcFaq: React.FC<VpcFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code === 'la';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos
      ? 'Detailed answers to common questions about Viettel Virtual Private Cloud (vVPC)'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ Trung tâm dữ liệu ảo Viettel vVPC',
  };

  const faqs = [
    {
      q: isLaos
        ? 'How does Viettel Virtual Private Cloud (vVPC) differ from standard Cloud Server?'
        : 'Viettel Virtual Private Cloud (vVPC) khác gì so với Viettel Cloud Server thông thường?',
      a: isLaos
        ? 'Viettel Cloud Server provides individual standalone virtual machines. Meanwhile, Viettel vVPC delivers a comprehensive Virtual Data Center Resource Pool (Compute Pool, Storage Pool, SDN Network Pool), empowering enterprises to self-provision multiple VMs, customize private Subnets, Virtual Routers, Firewalls, and Load Balancers with complete network isolation.'
        : 'Viettel Cloud Server là dịch vụ cung cấp từng máy chủ ảo đơn lẻ. Trong khi đó, Viettel vVPC cung cấp trọn gói một Vùng tài nguyên tổng thể (Compute Pool, Storage Pool, SDN Network Pool), cho phép khách hàng tự phân bổ tài nguyên này để tạo ra nhiều máy ảo, tự cấu hình mạng Subnet, Virtual Router, Firewall và Load Balancer như một Trung tâm dữ liệu riêng biệt.',
    },
    {
      q: isLaos
        ? 'Can I migrate my existing on-premises virtual machines to vVPC?'
        : 'Tôi có thể mang hệ thống máy ảo đang chạy tại On-premise lên vVPC được không?',
      a: isLaos
        ? 'Yes. Viettel IDC provides full support with Image Import tools, system conversion mechanisms (P2V, V2V), and a team of experts dedicated to seamless Data Migration without interrupting your core business operations.'
        : 'Có. Viettel IDC hỗ trợ đầy đủ các công cụ Import Image, chuyển đổi hệ thống (P2V, V2V) và có đội ngũ chuyên gia hỗ trợ quy trình Migration không làm gián đoạn vận hành kinh doanh của doanh nghiệp.',
    },
    {
      q: isLaos
        ? 'How is multi-tenant data security guaranteed on the shared Cloud infrastructure?'
        : 'Cơ chế bảo mật dữ liệu giữa các khách hàng trên cùng hạ tầng Cloud được đảm bảo như thế nào?',
      a: isLaos
        ? 'vVPC utilizes Software-Defined Networking (SDN) technology to strictly isolate network traffic for each tenant (Multi-tenant Isolation). Stored data is strongly encrypted with absolute logical partitioning, preventing cross-tenant leakage or unauthorized access.'
        : 'vVPC sử dụng công nghệ mạng định nghĩa bằng phần mềm (SDN) để cô lập hoàn toàn lưu lượng mạng của từng khách hàng (Multi-tenant Isolation). Dữ liệu lưu trữ được mã hóa và phân tách logic tuyệt đối, ngăn chặn hoàn toàn nguy cơ rò rỉ hoặc truy cập trái phép chéo.',
    },
    {
      q: isLaos
        ? 'What secure connection protocols are supported between enterprise premises and vVPC?'
        : 'Dịch vụ vVPC hỗ trợ những giao thức kết nối bảo mật nào từ trụ sở doanh nghiệp lên Cloud?',
      a: isLaos
        ? 'Enterprises can connect via Site-to-Site VPN (IPsec VPN / OpenVPN) over the Internet or deploy dedicated physical links (Viettel Direct Connect / MPLS-VPN) from HQ/branches directly into Viettel IDC Virtual Data Centers with high speed and low latency.'
        : 'Khách hàng có thể kết nối thông qua VPN Site-to-Site (IPsec VPN / OpenVPN) qua đường truyền Internet hoặc triển khai kênh truyền vật lý dành riêng (Viettel Direct Connect / MPLS-VPN) từ trụ sở/chi nhánh trực tiếp vào vDC của Viettel IDC với tốc độ cao và độ trễ cực thấp.',
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

