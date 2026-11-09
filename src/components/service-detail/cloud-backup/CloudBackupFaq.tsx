import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudBackupFaqProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CloudBackupFaq: React.FC<CloudBackupFaqProps> = ({ currentMarket, onOpenConsult }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Cloud Backup (BaaS) services'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về giải pháp sao lưu Viettel Cloud Backup (BaaS)',
  };

  const faqs = [
    {
      q: isLaos 
        ? 'How is Viettel Cloud Backup (BaaS) different from on-premises backup hardware?' 
        : 'Viettel Cloud Backup (BaaS) khác gì so với việc tự mua ổ cứng / SAN sao lưu tại chỗ?',
      a: isLaos 
        ? 'With Viettel BaaS, enterprises eliminate huge upfront CAPEX hardware purchases and manual tape rotation. Backups are replicated offsite into certified Tier 3 data centers with automated scheduling, AES 256 encryption, and instant cloud failover readiness.'
        : 'Viettel Cloud Backup (BaaS) giúp doanh nghiệp chuyển đổi hoàn toàn từ mô hình đầu tư thiết bị vật lý tại chỗ tốn kém (CAPEX) sang chi phí thuê bao dịch vụ linh hoạt (OPEX). Bạn không cần mua sắm hệ thống SAN, băng từ Tape, không lo hỏng hóc phần cứng và dữ liệu được cách ly an toàn ngoài địa điểm chính (Offsite Backup) tại Data Center Tier 3.',
    },
    {
      q: isLaos 
        ? 'Can backup files be infected or encrypted if the primary production server suffers Ransomware?' 
        : 'Dữ liệu sao lưu trên Viettel BaaS có bị lây nhiễm hay mã hóa khi hệ thống chính bị Ransomware không?',
      a: isLaos 
        ? 'No. Viettel Cloud Backup incorporates Immutable Storage (Object Lock - WORM technology). Once written, backup restore points cannot be altered, overwritten, or deleted by any ransomware or unauthorized account during the retention lock period.'
        : 'Hoàn toàn không. Viettel Cloud Backup ứng dụng công nghệ lưu trữ bất biến (Immutable Backup / Object Lock theo chuẩn WORM). Dữ liệu sau khi ghi sẽ bị khóa cứng trong khoảng thời gian quy định; mã độc tống tiền hoặc thậm chí tài khoản quản trị bị lộ mật khẩu cũng không thể sửa đổi hay xóa bỏ bản sao lưu, đảm bảo luôn có bản sạch để phục hồi.',
    },
    {
      q: isLaos 
        ? 'What recovery options are available when an outage or disaster strikes?' 
        : 'Dịch vụ hỗ trợ những cơ chế khôi phục dữ liệu nào khi xảy ra sự cố?',
      a: isLaos 
        ? 'The system supports multi-tier recovery: Instant Bare-metal Restore to original or dissimilar hardware, Full Virtual Machine restoration, specific Disk/Volume recovery, Single File extraction, and Application Explorer (individual emails, SQL tables).'
        : 'Hệ thống hỗ trợ khôi phục linh hoạt ở nhiều cấp độ: (1) Khôi phục toàn bộ máy chủ ảo hoặc máy chủ vật lý trắng (Bare-metal Restore); (2) Khôi phục từng ổ đĩa hoặc tệp tin/thư mục cụ thể; (3) Khôi phục mức bản ghi ứng dụng (Application Explorer) cho phép trích xuất từng email, danh bạ, bảng dữ liệu SQL mà không cần khôi phục cả máy chủ.',
    },
    {
      q: isLaos 
        ? 'Can I back up servers hosted in our own local office or another cloud provider to Viettel IDC?' 
        : 'Tôi có thể sao lưu máy chủ đặt tại văn phòng riêng hoặc đám mây khác lên Viettel IDC không?',
      a: isLaos 
        ? 'Yes. Viettel BaaS supports hybrid architectures. You can back up on-premises physical/virtual servers, private clouds, or workloads running on AWS/Azure/GCP to Viettel IDC via secure SSL Internet Gateway or Viettel Hybrid Connect (dedicated MPLS).'
        : 'Hoàn toàn được. Viettel BaaS được thiết kế chuẩn Hybrid Cloud. Bạn có thể sao lưu máy chủ vật lý đặt tại văn phòng, chi nhánh, máy chủ ảo VMware tại trung tâm dữ liệu riêng, hoặc máy chủ đang chạy trên AWS/Azure/GCP về hạ tầng Viettel IDC qua đường truyền Internet mã hóa SSL hoặc kênh truyền riêng Viettel Hybrid Connect.',
    },
    {
      q: isLaos 
        ? 'Does the backup process slow down or interrupt running production services?' 
        : 'Việc sao lưu có làm chậm hoặc gián đoạn hoạt động của hệ thống đang chạy không?',
      a: isLaos 
        ? 'No. The solution utilizes hypervisor-level snapshot technology and Changed Block Tracking (CBT) to back up only modified blocks without causing service downtime or impacting server performance.'
        : 'Không. Viettel BaaS sử dụng công nghệ Snapshot tầng ảo hóa kết hợp cơ chế Changed Block Tracking (CBT). Hệ thống chỉ quét và truyền tải các khối dữ liệu có thay đổi (Incremental Backup) kể từ lần sao lưu gần nhất, diễn ra hoàn toàn ngầm và không gây gián đoạn hay ảnh hưởng đến hiệu năng máy chủ.',
    },
    {
      q: isLaos 
        ? 'How does the Application-Aware Explorer feature work with MS SQL Server and Active Directory?' 
        : 'Tính năng Application-Aware Explorer hoạt động thế nào với MS SQL Server và Active Directory?',
      a: isLaos 
        ? 'It uses VSS (Volume Shadow Copy Service) to freeze transaction logs momentarily, ensuring crash-consistent and transaction-consistent backups. During restoration, administrators can browse individual database tables or AD objects directly.'
        : 'Tính năng này kết nối trực tiếp với dịch vụ VSS của hệ điều hành để đồng bộ tính toàn vẹn giao dịch trước khi chụp ảnh sao lưu. Khi cần khôi phục, bạn có thể mở công cụ Explorer để duyệt cấu trúc cơ sở dữ liệu và xuất trực tiếp một bảng dữ liệu hoặc tài khoản Active Directory mà không cần dựng lại môi trường máy chủ.',
    },
    {
      q: isLaos 
        ? 'Does data stored in Viettel Cloud Backup comply with Vietnamese data regulations?' 
        : 'Dữ liệu sao lưu có tuân thủ các quy định pháp luật Việt Nam về an toàn thông tin không?',
      a: isLaos 
        ? '100% compliant. All backup data is stored exclusively in Viettel IDC Tier 3 data centers located in Vietnam, meeting Cybersecurity Law and Decree 13/2023/ND-CP requirements on Personal Data Protection.'
        : 'Tuyệt đối tuân thủ. Toàn bộ dữ liệu được lưu trữ 100% tại hệ thống Data Center Viettel IDC đặt trên lãnh thổ Việt Nam, đáp ứng hoàn toàn Luật An ninh mạng, Luật Giao dịch điện tử và Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.',
    },
    {
      q: isLaos 
        ? 'How is the service billed, and can I trial the solution before committing?' 
        : 'Chi phí dịch vụ được tính như thế nào và tôi có thể dùng thử trước khi mua không?',
      a: isLaos 
        ? 'Pricing is based transparently on the number of protected endpoints (VMs/servers/users) and actual storage consumed (GB). Viettel provides a free trial program with dedicated engineer onboarding.'
        : 'Chi phí được tính minh bạch dựa trên số lượng máy chủ/người dùng bảo vệ và dung lượng lưu trữ thực tế (tính theo GB/tháng). Quý khách hoàn toàn có thể đăng ký chương trình Dùng Thử Miễn Phí với sự đồng hành và thiết lập kỹ thuật trực tiếp từ đội ngũ chuyên gia Viettel IDC.',
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

        {/* Minimal Accordion List with horizontal line dividers Chuẩn TDV-01 */}
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
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75] text-[var(--vidc-color-brand-red)]" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75] text-slate-400 group-hover:text-slate-700" />
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
