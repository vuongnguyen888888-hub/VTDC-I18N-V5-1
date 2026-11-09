import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface InterconnectionFaqProps {
  currentMarket?: SEAMarket;
}

export const InterconnectionFaq: React.FC<InterconnectionFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Interconnection leased line and Internet gateway services'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ kết nối kênh truyền và Internet Viettel Interconnection',
  };

  const faqs = [
    {
      q: isLaos
        ? 'Can Dark-Fibre (Unlit optical fiber) scale up to 10 Gbps speeds?'
        : 'Kênh quang trắng (Dark-Fibre) tốc độ có lên được 10 Gbps không?',
      a: isLaos
        ? 'Yes, Dark-Fibre transmission speeds can reach 10 Gbps or higher provided that customer terminal transceiver optics and switches support 10G/40G/100G interfaces. In practical deployments, standard 1 Gbps to 10 Gbps allocations satisfy the vast majority of enterprise and data replication workloads.'
        : 'Có thể lên được 10 Gbps nếu thiết bị đầu cuối của khách hàng hỗ trợ. Tuy nhiên, trên thực tế phần lớn các tổ chức và doanh nghiệp thường sử dụng ở mức 1 Gbps là đã đáp ứng tốt nhu cầu.',
    },
    {
      q: isLaos
        ? 'At Viettel IDC Data Centers, can third-party telcos deploy their own fiber transmission channels?'
        : 'Tại Trung tâm dữ liệu của Viettel IDC, ngoài Viettel thì các đơn vị viễn thông khác có triển khai kênh vào được không?',
      a: isLaos
        ? 'Absolutely. Viettel IDC operates strictly under a carrier-neutral interconnection policy. In addition to Viettel, all major telcos such as VNPT, FPT, CMC, and global carriers have fiber points-of-presence in our Meet-Me-Rooms and are ready for direct cross-connects.'
        : 'Hoàn toàn được. Viettel IDC áp dụng chính sách trung lập kết nối (Carrier-neutral). Ngoài Viettel, các nhà cung cấp dịch vụ viễn thông khác như VNPT, FPT, CMC,... đều đã có sẵn hạ tầng mạng và sẵn sàng đấu nối trực tiếp tại TTDL.',
    },
    {
      q: isLaos
        ? 'What is the total Internet bandwidth capacity available at Viettel IDC Data Centers?'
        : 'Băng thông Internet tại Trung tâm dữ liệu Viettel IDC là bao nhiêu?',
      a: isLaos
        ? 'Internet bandwidth capacity at Viettel IDC Data Centers is virtually unlimited, built on multi-terabit backbone rings. We provide customized, guaranteed burstable bandwidth corresponding exactly to each enterprise’s committed traffic tiers.'
        : 'Băng thông Internet tại Trung tâm dữ liệu là không giới hạn, sẵn sàng mở rộng và cung cấp theo mức dung lượng cam kết thực tế mà doanh nghiệp yêu cầu.',
    },
    {
      q: isLaos
        ? 'What is the default Internet bandwidth allocated per rack in the Data Center?'
        : 'Băng thông Internet mặc định cho 1 Rack tại Data Center là bao nhiêu?',
      a: isLaos
        ? 'The default bandwidth allocated per Server Rack is provisioned flexibly depending on the Colocation service tier or the specific dedicated leased line contract terms. Customers can request bandwidth scale-ups or burstable increments at any time with fast provisioning.'
        : 'Mức băng thông Internet mặc định cho 1 tủ Rack sẽ được cấp phát linh hoạt tùy theo gói dịch vụ chỗ đặt (Colocation) hoặc thỏa thuận hợp đồng kênh truyền riêng của doanh nghiệp. Quý khách có thể yêu cầu mở rộng thêm băng thông bất cứ lúc nào.',
    },
    {
      q: isLaos
        ? 'How does Viettel Interconnection guarantee 100% dedicated non-shared bandwidth?'
        : 'Viettel Interconnection đảm bảo không chia sẻ băng thông như thế nào?',
      a: isLaos
        ? 'Each customer connection is allocated a dedicated physical optical core or isolated logical VLAN on dedicated edge switches with strict QoS traffic policing, ensuring committed throughput is 100% reserved 24/7 without multi-tenant contention.'
        : 'Mỗi kênh truyền của khách hàng được cấp phát sợi quang vật lý riêng biệt hoặc phân đoạn VLAN độc lập trên thiết bị chuyển mạch chuyên dụng, áp dụng chính sách QoS nghiêm ngặt để cam kết 100% băng thông riêng không bị suy hao hay chia sẻ vào giờ cao điểm.',
    },
    {
      q: isLaos
        ? 'What is the standard SLA commitment for Viettel Interconnection services?'
        : 'Cam kết chất lượng dịch vụ (SLA) của Viettel Interconnection là bao nhiêu?',
      a: isLaos
        ? 'Viettel Interconnection commits to an enterprise SLA availability of 99.95%, backed by 24/7/365 proactive NOC monitoring, optical attenuation diagnostics, and rapid emergency dispatch response times.'
        : 'Dịch vụ cam kết mức độ khả dụng (SLA) lên tới 99,95%, được giám sát liên tục 24/7/365 bởi đội ngũ kỹ sư NOC và quy trình bồi thường minh bạch theo hợp đồng dịch vụ viễn thông.',
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
        
        {/* Section Title (Centered like CloudServerFaq) */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Minimal Accordion List with horizontal line dividers (Exact CloudServerFaq layout) */}
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
