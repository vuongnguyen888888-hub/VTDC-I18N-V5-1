import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VoiceBrandnameFaqProps {
  currentMarket?: SEAMarket;
}

export const VoiceBrandnameFaq: React.FC<VoiceBrandnameFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Voice Brandname services'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ cuộc gọi thương hiệu Viettel Voice Brandname',
  };

  const faqs = [
    {
      q: isLaos ? 'What is Viettel Voice Brandname and how does it work?' : 'Viettel Voice Brandname là gì và hoạt động như thế nào?',
      a: isLaos 
        ? 'Viettel Voice Brandname displays your official company or product name on the recipient phone screen during outbound calls instead of a numeric phone number, eliminating spam risk and boosting answer rates up to 92%+.'
        : 'Viettel Voice Brandname là giải pháp hiển thị trực tiếp Tên Thương Hiệu/Sản Phẩm của doanh nghiệp trên màn hình cuộc gọi đến của khách hàng thay cho số điện thoại thông thường, tạo ấn tượng chuyên nghiệp vượt trội và triệt tiêu nguy cơ bị nhận diện là cuộc gọi rác.',
    },
    {
      q: isLaos ? 'What legal documents are required for Brandname registration?' : 'Hồ sơ pháp lý đăng ký tên định danh bao gồm những gì?',
      a: isLaos 
        ? 'Requirements include Business Registration Certificate, Identity Card of legal representative, and Certificate of Brandname from the Authority of Information Security (MIC). Viettel IDC provides end-to-end guidance.'
        : 'Hồ sơ bao gồm: Giấy chứng nhận ĐKKD của doanh nghiệp, CCCD của người đại diện pháp luật và Giấy chứng nhận tên định danh do Cục An toàn thông tin (Bộ TT&TT) cấp. Đội ngũ Viettel IDC sẽ hỗ trợ quý khách trọn gói quy trình chuẩn bị và đăng ký hồ sơ.',
    },
    {
      q: isLaos ? 'What are the technical and syntax rules for choosing a Brandname?' : 'Có những quy định bắt buộc nào khi đặt tên định danh không?',
      a: isLaos 
        ? 'The brand name must be 3 to 11 characters (including spaces), starting with letters A-Z, matching registered company trademarks, business registration name, or verified domain names.'
        : 'Tên định danh cần dài từ 3 – 11 ký tự (gồm cả dấu cách), bắt đầu bằng chữ cái A-Z, không chứa ký tự đặc biệt nhạy cảm, phải trùng khớp hoặc liên quan trực tiếp đến tên doanh nghiệp trong ĐKKD, nhãn hiệu đã bảo hộ hoặc tên miền sở hữu hợp pháp.',
    },
    {
      q: isLaos ? 'Does Voice Brandname support calls across all mobile networks?' : 'Dịch vụ có hiển thị Brandname khi gọi liên mạng (Mobi, Vina, Viettel...) không?',
      a: isLaos 
        ? 'Yes, Viettel Voice Brandname supports seamless cross-carrier synchronization across Viettel, MobiFone, VinaPhone/VNPT, and other domestic carriers with HD Voice quality.'
        : 'Có. Dịch vụ hỗ trợ đồng bộ hiển thị tên thương hiệu liền mạch đến tất cả các nhà mạng viễn thông tại Việt Nam (Viettel, VinaPhone, MobiFone, Vietnamobile, Gmobile...) với chất lượng thoại chuẩn HD Voice.',
    },
    {
      q: isLaos ? 'Can it be integrated into existing IP PBX, CRM, or Call Center systems?' : 'Doanh nghiệp có thể kết nối với Tổng đài IP / Call Center / CRM sẵn có không?',
      a: isLaos 
        ? 'Absolutely. The solution easily connects via standard SIP Trunking / Voice Gateway to any IP PBX (Asterisk, 3CX, FreePBX, Cisco) and popular CRM platforms (HubSpot, Salesforce, Zoho, Lark).'
        : 'Hoàn toàn tương thích. Viettel Voice Brandname hỗ trợ giao thức SIP Trunking và Voice Gateway tiêu chuẩn, dễ dàng tích hợp vào mọi hệ thống tổng đài IP (Asterisk, 3CX, FreePBX, Cisco) và phần mềm quản trị quan hệ khách hàng CRM.',
    },
    {
      q: isLaos ? 'How does Intelligent MNP Routing optimize calling tariffs?' : 'Tính năng định tuyến MNP tự động giúp tiết kiệm chi phí như thế nào?',
      a: isLaos 
        ? 'The smart routing engine automatically detects carrier switches (MNP) and directs outbound calls through optimal on-net channels, minimizing cross-network tariff surcharges.'
        : 'Hệ thống định tuyến thông minh tự động kiểm tra nhà mạng thực tế của số thuê bao nhận (kể cả số đã chuyển mạng giữ số MNP) và điều hướng cuộc gọi qua kênh nội mạng tương ứng, giúp tiết kiệm tới 40% chi phí cước thoại.',
    },
    {
      q: isLaos ? 'Is call recording data safely stored and compliant with enterprise security?' : 'Dữ liệu ghi âm cuộc gọi được lưu trữ an toàn như thế nào?',
      a: isLaos 
        ? '100% of call recordings are encrypted in transit and at rest within Viettel IDC Tier 3 data centers with automated retention policies and granular RBAC auditing.'
        : 'Toàn bộ file ghi âm cuộc gọi được mã hóa lưu trữ trên nền tảng đám mây tại Trung tâm dữ liệu Viettel IDC đạt chuẩn TIA-942 Rated 3, phân quyền truy cập chặt chẽ và lưu nhật ký kiểm toán minh bạch.',
    },
    {
      q: isLaos ? 'How long does deployment and carrier activation take?' : 'Thời gian triển khai và kích hoạt dịch vụ mất bao lâu?',
      a: isLaos 
        ? 'Once the MIC Brandname Certificate is approved, technical trunking and carrier activation is completed within 24 to 48 hours.'
        : 'Sau khi hoàn tất phê duyệt Giấy chứng nhận tên định danh từ Cục ATTT, việc thiết lập kênh truyền SIP Trunking và kích hoạt hiển thị trên toàn mạng viễn thông được đội ngũ kỹ sư Viettel IDC hoàn tất trong 24 - 48 giờ.',
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
        
        {/* Section Title matching CloudServerFaq */}
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
