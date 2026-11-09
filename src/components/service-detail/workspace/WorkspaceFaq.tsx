import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface WorkspaceFaqProps {
  currentMarket?: SEAMarket;
}

export const WorkspaceFaq: React.FC<WorkspaceFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp về Viettel Workspace',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Workspace suite & migration process'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về giải pháp, triển khai và tính năng của Viettel Workspace',
  };

  const faqs = [
    {
      q: isLaos ? 'What tools and services are included in Viettel Workspace?' : 'Viettel Workspace bao gồm những công cụ và dịch vụ nào?',
      a: isLaos 
        ? 'Viettel Workspace is an integrated 5-in-1 digital workplace suite including Business Email with custom domains, Viettel Drive cloud storage, Online Office suite (Docs/Sheets/Slides), Web Hosting with free SSL, and a Centralized IAM user management dashboard.'
        : 'Viettel Workspace là bộ giải pháp làm việc số trọn bộ 5-trong-1, bao gồm: Email doanh nghiệp theo tên miền riêng (@tencongty.vn), Lưu trữ đám mây Viettel Drive, Bộ công cụ soạn thảo văn phòng trực tuyến (Docs, Sheets, Slides), Không gian lưu trữ Website (Web Hosting) kèm miễn phí SSL, và Bảng điều khiển quản trị phân quyền người dùng tập trung (IAM).',
    },
    {
      q: isLaos ? 'Where is my enterprise data stored and is it secure?' : 'Dữ liệu doanh nghiệp được lưu trữ ở đâu và có an toàn không?',
      a: isLaos 
        ? '100% of data is securely stored within Viettel IDC Data Centers in Vietnam, certified under ANSI/TIA-942 Rated 3, ISO 27001, and ISO 27017 standards, ensuring full compliance with national cybersecurity laws and data residency mandates.'
        : 'Toàn bộ 100% dữ liệu của doanh nghiệp được lưu trữ an toàn tại hệ thống Trung tâm Dữ liệu đạt chuẩn quốc tế ANSI/TIA-942 Rated 3 của Viettel IDC tại Việt Nam. Dữ liệu được mã hóa SSL/TLS 1.3 trong quá trình truyền tải, tự động sao lưu dự phòng hàng ngày và tuân thủ nghiêm ngặt Luật An ninh mạng cũng như Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.',
    },
    {
      q: isLaos ? 'Can I use my existing company domain name?' : 'Tôi có thể sử dụng tên miền riêng hiện có của công ty không?',
      a: isLaos 
        ? 'Yes, absolutely. You can easily point your existing domain (e.g., .vn, .com, .net) to Viettel Workspace. Viettel IDC engineers will provide complete DNS configuration support at no extra cost.'
        : 'Hoàn toàn được. Bạn có thể sử dụng bất kỳ tên miền nào hiện có của công ty (ví dụ: .vn, .com.vn, .com,...). Đội ngũ kỹ sư Viettel IDC sẽ hỗ trợ quý khách cấu hình trỏ bản ghi DNS (MX, SPF, DKIM, DMARC, A record) hoàn toàn miễn phí và nhanh chóng.',
    },
    {
      q: isLaos ? 'How is data migrated from legacy systems like Google Workspace or Microsoft 365?' : 'Quy trình chuyển đổi dữ liệu email và tệp tin từ hệ thống cũ sang Viettel Workspace như thế nào?',
      a: isLaos 
        ? 'Viettel IDC provides automated migration tools and direct engineering support to migrate mailboxes, contacts, calendars, and files smoothly with zero downtime.'
        : 'Viettel IDC cung cấp công cụ chuyển đổi dữ liệu tự động cùng đội ngũ kỹ sư đồng hành trực tiếp. Quá trình di chuyển hộp thư (Inbox, Sent, Folders), danh bạ, lịch và tệp tin từ Google Workspace, Microsoft 365, Mdaemon hoặc cPanel Mail diễn ra êm đẹp, đảm bảo liên tục nhận gửi email và không làm gián đoạn công việc hàng ngày.',
    },
    {
      q: isLaos ? 'Can our organization upgrade user accounts and storage when headcount expands?' : 'Doanh nghiệp có thể nâng cấp thêm tài khoản hoặc dung lượng khi quy mô nhân sự tăng lên không?',
      a: isLaos 
        ? 'Yes. You can flexibly add extra user accounts or increase storage quotas anytime directly on the automated admin portal without affecting existing users or data.'
        : 'Có, Viettel Workspace được thiết kế theo cấu trúc linh hoạt (Elastic). Doanh nghiệp có thể mua thêm số lượng người dùng hoặc mở rộng dung lượng ổ đĩa bất cứ lúc nào ngay trên cổng quản trị mà không cần cấu hình lại hệ thống hay gây gián đoạn phiên làm việc của nhân viên.',
    },
    {
      q: isLaos ? 'Does Viettel Workspace support mobile apps and desktop clients?' : 'Viettel Workspace có hỗ trợ ứng dụng trên điện thoại di động và máy tính không?',
      a: isLaos 
        ? 'Yes, Viettel Workspace works seamlessly via modern web browsers and standard protocols (IMAP/SMTP/CalDAV/WebDAV) compatible with Outlook, Thunderbird, iOS Mail, and Android Mail.'
        : 'Có. Người dùng có thể truy cập trực tiếp qua Webmail/Web Portal trên mọi trình duyệt, hoặc cài đặt đồng bộ với các phần mềm phổ biến như Microsoft Outlook, Thunderbird trên máy tính và ứng dụng Mail/Drive trên điện thoại thông minh (iOS & Android).',
    },
    {
      q: isLaos ? 'What is the SLA commitment for Viettel Workspace?' : 'Cam kết chất lượng dịch vụ (SLA) của Viettel Workspace như thế nào?',
      a: isLaos 
        ? 'Viettel IDC commits to a 99.99% service availability (SLA) with transparent compensation terms specified in enterprise contracts and 24/7/365 multi-channel technical support.'
        : 'Viettel IDC cam kết mức độ sẵn sàng dịch vụ (Uptime SLA) đạt 99.99% với chính sách đền bù rõ ràng theo hợp đồng doanh nghiệp. Hệ thống được giám sát liên tục 24/7/365 bởi Trung tâm Điều hành Mạng (NOC/SOC) chuyên nghiệp của Viettel.',
    },
    {
      q: isLaos ? 'How fast is the provisioning and onboarding process?' : 'Thời gian khởi tạo và bàn giao dịch vụ mất bao lâu?',
      a: isLaos 
        ? 'Cloud infrastructure and user portals are automatically provisioned within 15 to 30 minutes after registration confirmation.'
        : 'Sau khi xác nhận thông tin đăng ký, hạ tầng không gian làm việc số của doanh nghiệp sẽ được khởi tạo tự động trong vòng 15 - 30 phút. Quý khách sẽ nhận được thông tin quản trị tài khoản Root/Admin kèm tài liệu hướng dẫn sử dụng chi tiết.',
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
                  className="w-full py-5 sm:py-6 flex items-start justify-between gap-4 text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors pr-2">
                    {faq.q}
                  </span>
                  <span className="p-1 rounded-md text-slate-400 group-hover:text-slate-600 shrink-0 mt-0.5">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </VIDCNativeButton>

                {isOpen && (
                  <div className="pb-6 text-sm sm:text-base text-slate-600 leading-relaxed pr-6 animate-fadeIn">
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
