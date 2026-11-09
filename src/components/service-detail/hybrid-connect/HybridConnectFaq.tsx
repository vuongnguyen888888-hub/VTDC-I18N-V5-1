import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface HybridConnectFaqProps {
  currentMarket?: SEAMarket;
}

export const HybridConnectFaq: React.FC<HybridConnectFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Hybrid Connect dedicated network services'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ kết nối riêng Viettel Hybrid Connect',
  };

  const faqs = [
    {
      q: isLaos
        ? 'Why should enterprises choose Viettel Hybrid Connect instead of standard VPN tunnels?'
        : 'Vì sao khách hàng nên sử dụng Viettel Hybrid Connect thay cho kết nối Virtual Private Network (VPN) thông thường?',
      a: isLaos
        ? 'Traditional VPNs are virtual encrypted tunnels traversing the public Internet, which cannot guarantee Quality of Service (QoS) and suffer from packet loss and variable latency during peak congestion. Viettel Hybrid Connect utilizes physically or logically isolated private channels, delivering 100% committed real-world bandwidth, deterministic ultra-low latency, and near-zero packet loss.'
        : 'Kết nối VPN truyền thống là đường hầm ảo đi qua môi trường Internet công cộng, do đó không thể cam kết chất lượng dịch vụ (độ trễ cao, dễ rớt gói tin - packet loss) khi mạng Internet bị nghẽn. Dịch vụ Viettel Hybrid Connect sử dụng kênh truyền riêng biệt vật lý/logic, cam kết 100% băng thông thực tế, tối ưu chất lượng với độ trễ thấp nhất và tỉ lệ mất gói gần như bằng 0.',
    },
    {
      q: isLaos
        ? 'Which Viettel IDC cloud services are compatible with Viettel Hybrid Connect?'
        : 'Dịch vụ Viettel Hybrid Connect tương thích với các dịch vụ nào khác của Viettel IDC?',
      a: isLaos
        ? 'Viettel Hybrid Connect is seamlessly compatible with the entire Viettel IDC ecosystem: Viettel Cloud Server (vCS), Viettel Virtual Private Cloud (vVPC), Viettel Dedicated Private Cloud (vDPC), Viettel Cloud GPU (vCG), Viettel Cloud Camera, Viettel Cloud Object/File Storage, and Colocation.'
        : 'Viettel Hybrid Connect tương thích hoàn hảo với hầu hết các dịch vụ trong hệ sinh thái của Viettel IDC gồm: Viettel Cloud Server (vCS), Viettel Virtual Private Cloud (vVPC), Viettel Dedicated Private Cloud (vDPC), Viettel Cloud GPU (vCG), Viettel Cloud Camera, Viettel Cloud Object/File Storage...',
    },
    {
      q: isLaos
        ? 'Can international on-premises sites or AWS/Azure clouds connect to Viettel IDC via Hybrid Connect?'
        : 'Hệ thống mạng tại chỗ đặt tại quốc tế hoặc Cloud AWS, Azure có thể thuê Viettel Hybrid Connect để kết nối vào Cloud Viettel IDC không?',
      a: isLaos
        ? 'Currently, the service focuses on interconnecting Viettel IDC Cloud with on-premises networks located within Vietnam. In subsequent roadmap phases, Viettel IDC will expand to support direct international on-premise endpoints and Hyperscale Public Clouds such as AWS, Azure, and Google Cloud.'
        : 'Hiện tại, dịch vụ tập trung hỗ trợ kết nối giữa Cloud của Viettel IDC tới mạng tại chỗ của khách hàng đặt tại lãnh thổ Việt Nam. Trong các giai đoạn tiếp theo, Viettel IDC sẽ mở rộng dịch vụ để hỗ trợ kết nối trực tiếp tới các điểm On-premise quốc tế và các Public Cloud lớn như AWS, Azure, Google Cloud...',
    },
    {
      q: isLaos
        ? 'What port interfaces and bandwidth tiers are supported by Viettel Hybrid Connect?'
        : 'Dịch vụ Viettel Hybrid Connect hỗ trợ những loại cổng kết nối và mức băng thông nào?',
      a: isLaos
        ? 'The service provides standard physical high-speed optical interfaces of 1 Gbps and 10 Gbps. In terms of bandwidth, enterprises can flexibly choose from granular steps (10 Mbps, 20 Mbps, 50 Mbps...) up to high-capacity tiers from 100 Mbps to 10 Gbps according to exact traffic requirements.'
        : 'Dịch vụ hỗ trợ giao diện đấu nối vật lý tốc độ cao chuẩn 1 Gbps và 10 Gbps. Về băng thông, khách hàng có thể lựa chọn linh hoạt từ các mức nhỏ (10 Mbps, 20 Mbps, 50 Mbps...) đến các mức lớn từ 100 Mbps lên tới 10 Gbps theo nhu cầu truyền tải thực tế.',
    },
    {
      q: isLaos
        ? 'Does the service support link redundancy and high availability (HA)?'
        : 'Dịch vụ có hỗ trợ mô hình dự phòng đường truyền không?',
      a: isLaos
        ? 'Yes. Viettel IDC provides ready-to-deploy topologies ranging from Single Link models to High Availability Redundant Links operating in Active/Standby failover or Active/Active load balancing to ensure 24/7 continuous operation.'
        : 'Có. Viettel IDC cung cấp sẵn sàng các use case từ mô hình kết nối đơn (Single link) đến mô hình kết nối có tính dự phòng cao (Redundant links) chạy Active/Standby hoặc Load Balancing để đảm bảo hệ thống luôn sẵn sàng 24/7.',
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
