import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudMigrationFaqProps {
  currentMarket?: SEAMarket;
}

export const CloudMigrationFaq: React.FC<CloudMigrationFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Cloud Migration services'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ chuyển đổi hạ tầng Viettel Cloud Migration',
  };

  const faqs = [
    {
      q: isLaos 
        ? 'What is Viettel Cloud Migration and which environments does it support?'
        : 'Viettel Cloud Migration là gì và hỗ trợ chuyển đổi từ những môi trường nào?',
      a: isLaos 
        ? 'Viettel Cloud Migration is a specialized service suite designed to move workloads, operating systems, applications, and databases into Viettel Cloud. We support transitions from On-Premises physical Bare-Metal servers, VMware/Hyper-V virtualized machines, and international hyperscalers (AWS, Microsoft Azure, Google Cloud Platform).'
        : 'Viettel Cloud Migration là dịch vụ hỗ trợ chuyển đổi toàn diện hệ thống máy chủ, máy ảo, ứng dụng và cơ sở dữ liệu từ On-Premise, các nền tảng ảo hóa nội bộ (VMware, Hyper-V) hoặc từ các nhà cung cấp đám mây quốc tế (AWS, Azure, GCP...) về hạ tầng điện toán đám mây của Viettel IDC.',
    },
    {
      q: isLaos 
        ? 'Does migration cause prolonged business downtime or service disruption?'
        : 'Quá trình di chuyển có gây gián đoạn hệ thống kinh doanh hay downtime kéo dài không?',
      a: isLaos 
        ? 'No. We utilize non-intrusive delta block replication. Your live production systems remain active and serve users normally. The cutover switch is rehearsed and scheduled during off-peak windows (midnight or weekends), reducing actual downtime to merely a few minutes for DNS/IP redirection.'
        : 'Không. Viettel IDC áp dụng công nghệ nhân bản dữ liệu vi sai (Block-level replication) liên tục trong nền. Hệ thống đang vận hành của bạn vẫn hoạt động bình thường phục vụ người dùng. Thời gian cutover chuyển đổi chính thức chỉ mất từ vài phút đến vài chục phút và được thực hiện vào khung giờ đêm hoặc cuối tuần.',
    },
    {
      q: isLaos 
        ? 'How does Viettel IDC ensure absolute data safety and prevent data loss during migration?'
        : 'Viettel IDC bảo đảm an toàn và chống thất thoát dữ liệu (Zero-Loss) như thế nào?',
      a: isLaos 
        ? 'All data pipelines are encrypted with AES-256 in transit and at rest. Pre-migration automated SHA-256 hash checksums are performed alongside trial runs on isolated staging environments to ensure 100% data consistency before cutover.'
        : 'Chúng tôi thiết lập kênh truyền riêng được mã hóa AES-256, thực hiện đối soát mã băm SHA-256 tự động trước và sau khi đồng bộ dữ liệu. Đồng thời, kịch bản rollback khẩn cấp luôn được chuẩn bị sẵn sàng để đảm bảo hệ thống cũ không bao giờ bị ảnh hưởng nếu có sự cố bất khả kháng.',
    },
    {
      q: isLaos 
        ? 'How is the service priced and what do the 7 official tariff items cover?'
        : 'Bảng giá dịch vụ Viettel Cloud Migration được tính toán như thế nào?',
      a: isLaos 
        ? 'Costs are calculated strictly on a daily pay-as-you-go basis for the actual duration of the migration. Components include Staging HDD Storage (Block 50 GB with tiered discounts for >5TB and >10TB), Migration VM Licenses (Block 2 VM), and Physical Server Migration Licenses (Block 1 Server).'
        : 'Bảng giá dịch vụ được tính cước theo ngày thực tế sử dụng tài nguyên trong suốt chiến dịch di chuyển. Bao gồm các thành phần: Lưu trữ HDD vùng đệm (Block 50 GB với các mốc giá ưu đãi cho dung lượng lớn >5.000 GB và >10.000 GB), Bản quyền Migration VM (Block 2 VM) và Bản quyền Migration Server vật lý (Block 1 Server).',
    },
    {
      q: isLaos 
        ? 'How does domestic migration help comply with Decree 13/2023/ND-CP and the Cybersecurity Law?'
        : 'Việc chuyển dữ liệu về Viettel Cloud giúp doanh nghiệp tuân thủ Nghị định 13/2023/NĐ-CP như thế nào?',
      a: isLaos 
        ? 'By repatriating databases to Viettel IDCs Tier 3 certified data centers located in Vietnam, businesses completely satisfy regulatory mandates regarding personal data localization, cybersecurity compliance, and local sovereignty requirements.'
        : 'Nghị định 13/2023/NĐ-CP và Luật An ninh mạng yêu cầu lưu trữ và bảo vệ dữ liệu cá nhân của công dân Việt Nam trên lãnh thổ Việt Nam. Chuyển đổi dữ liệu về Trung tâm dữ liệu Tier 3 của Viettel IDC giúp doanh nghiệp loại bỏ hoàn toàn rủi ro pháp lý về chuyển dữ liệu xuyên biên giới.',
    },
    {
      q: isLaos 
        ? 'Do Viettel IDC engineers perform end-to-end turnkey implementation?'
        : 'Đội ngũ Viettel IDC có thực hiện dịch chuyển trọn gói (Managed Service) không?',
      a: isLaos 
        ? 'Yes. Viettel IDCs team of certified senior cloud architects can deliver end-to-end turnkey Managed Services: conducting initial infrastructure audits, designing migration runbooks, provisioning target cloud environments, piloting test migrations, and providing 24/7 cutover standby.'
        : 'Có. Viettel IDC cung cấp gói Dịch vụ ủy thác trọn gói (Managed Service) do đội ngũ kỹ sư cao cấp trực tiếp đảm nhiệm từ khâu khảo sát hiện trạng, lập kế hoạch chi tiết, khởi tạo hạ tầng đích, thử nghiệm kịch bản đến trực chiến 24/7 trong suốt quá trình chuyển giao.',
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
        
        {/* Section Title matching Cloud Server */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Minimal Accordion List with horizontal line dividers matching Cloud Server */}
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
                  <div className="pb-6 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed font-normal animate-in fade-in duration-200">
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
