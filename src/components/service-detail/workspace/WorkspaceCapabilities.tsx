import React, { useState } from 'react';
import { Mail, HardDrive, Globe, Lock, CheckCircle2, ChevronDown, ChevronUp, FileCode } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface WorkspaceCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const WorkspaceCapabilities: React.FC<WorkspaceCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'email' | 'drive' | 'web' | 'iam'>('email');
  const [isSpecTableOpen, setIsSpecTableOpen] = useState(true);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES & SPECS' : 'TÍNH NĂNG & THÔNG SỐ KỸ THUẬT',
    headline: isLaos 
      ? 'Comprehensive Features & Modern Digital Workplace Suite'
      : 'Hệ thống tính năng làm việc số & Thông số kỹ thuật chuyên sâu',
  };

  const tabs = [
    { id: 'email', label: isLaos ? 'Business Email' : 'Email Doanh nghiệp', icon: Mail },
    { id: 'drive', label: isLaos ? 'Cloud Drive & Office' : 'Lưu trữ & Văn phòng số', icon: HardDrive },
    { id: 'web', label: isLaos ? 'Web Hosting & SSL' : 'Web Hosting & Tên miền', icon: Globe },
    { id: 'iam', label: isLaos ? 'Central IAM & Security' : 'Quản trị IAM & Bảo mật', icon: Lock },
  ];

  const tabContents = {
    email: [
      {
        title: isLaos ? 'Dedicated Domain Mailbox' : 'Hộp thư theo tên miền riêng (@doanhnghiep.vn)',
        desc: isLaos 
          ? 'Professional branding with anti-spam / anti-phishing protection filters built-in.'
          : 'Nâng cao độ uy tín thương hiệu doanh nghiệp với hộp thư tên miền riêng, tỷ lệ vào Inbox cao và tích hợp bộ lọc AI chống thư rác.',
      },
      {
        title: isLaos ? 'Multi-Device Sync & Protocols' : 'Đồng bộ đa thiết bị (IMAP, POP3, SMTP)',
        desc: isLaos 
          ? 'Seamlessly synchronizes email, calendar, and contacts on Outlook, Thunderbird, iOS, and Android.'
          : 'Tương thích hoàn hảo với Microsoft Outlook, Thunderbird, Webmail và ứng dụng Mail trên điện thoại thông minh (iOS, Android).',
      },
      {
        title: isLaos ? 'Smart Calendar & Shared Contacts' : 'Lịch số dùng chung & Danh bạ doanh nghiệp',
        desc: isLaos 
          ? 'Schedule meetings, share calendars, and manage global organization contact lists effortlessly.'
          : 'Tự động tạo lịch họp, gửi lời mời meeting, chia sẻ lịch làm việc phòng ban và tra cứu danh bạ nhân sự nội bộ tức thì.',
      },
    ],
    drive: [
      {
        title: isLaos ? 'Enterprise NVMe SSD Cloud Storage' : 'Lưu trữ đám mây NVMe SSD tốc độ cao',
        desc: isLaos 
          ? 'High-speed storage blocks with instant synchronization and cross-device file accessibility.'
          : 'Không gian lưu trữ tập trung trên ổ cứng Enterprise SSD/NVMe, truy cập và đồng bộ tài liệu từ bất kỳ đâu.',
      },
      {
        title: isLaos ? 'Realtime Online Office Collaboration' : 'Soạn thảo văn phòng trực tuyến thời gian thực',
        desc: isLaos 
          ? 'Edit documents, spreadsheets, and slides directly in browser with multi-user real-time co-authoring.'
          : 'Soạn thảo văn bản (Docs), bảng tính (Sheets) và trình chiếu (Slides) mượt mà ngay trên trình duyệt mà không cần cài đặt phần mềm ngoài.',
      },
      {
        title: isLaos ? 'Granular Link Sharing & File Versioning' : 'Phân quyền chia sẻ & Lưu lịch sử phiên bản',
        desc: isLaos 
          ? 'Set passwords, expiration dates, view-only modes, and restore up to 30 prior file versions.'
          : 'Thiết lập mật khẩu bảo vệ link chia sẻ, đặt thời hạn truy cập, giới hạn chỉ xem/không cho tải về và khôi phục lịch sử tệp tin tới 30 phiên bản.',
      },
    ],
    web: [
      {
        title: isLaos ? 'High Performance Enterprise Web Hosting' : 'Lưu trữ Website doanh nghiệp hiệu năng cao',
        desc: isLaos 
          ? 'Optimized hosting infrastructure with 99.99% uptime commitment and automated cPanel / DirectAdmin.'
          : 'Hạ tầng máy chủ web tối ưu tốc độ tải trang, cam kết SLA 99.99% uptime, bảng điều khiển quản trị trực quan.',
      },
      {
        title: isLaos ? 'Free Lifetime SSL Certificate' : 'Miễn phí Chứng chỉ Bảo mật SSL Let\'s Encrypt',
        desc: isLaos 
          ? 'Automated SSL issuance and renewal ensuring HTTPS encryption and higher SEO rankings.'
          : 'Tự động cấp phát và gia hạn chứng chỉ SSL miễn phí, mã hóa HTTPS bảo vệ dữ liệu khách truy cập và tối ưu thứ hạng SEO.',
      },
      {
        title: isLaos ? 'Automated Daily Website Backups' : 'Tự động sao lưu dữ liệu Website hàng ngày',
        desc: isLaos 
          ? 'Scheduled daily backups with one-click restore ensuring zero data loss on unexpected incidents.'
          : 'Hệ thống tự động sao lưu mã nguồn và cơ sở dữ liệu hàng ngày, hỗ trợ khôi phục tức thì chỉ với 1 cú nhấp chuột.',
      },
    ],
    iam: [
      {
        title: isLaos ? 'Centralized Organization IAM Dashboard' : 'Bảng điều khiển quản trị tập trung (Central IAM)',
        desc: isLaos 
          ? 'Manage staff accounts, department structures, storage quotas, and security policies in one place.'
          : 'Giao diện quản trị phân cấp rõ ràng: phân bổ dung lượng từng nhân sự, tạo mới/khóa tài khoản nhân viên nghỉ việc trong 1 giây.',
      },
      {
        title: isLaos ? 'Two-Factor Authentication (2FA) & Audit Logs' : 'Xác thực 2 lớp (2FA) & Nhật ký truy cập (Audit Logs)',
        desc: isLaos 
          ? 'Enforce 2FA via OTP/Authenticator app and track detailed employee sign-in history.'
          : 'Bắt buộc xác thực 2 bước 2FA qua Google Authenticator/SMS, ghi lại toàn bộ lịch sử đăng nhập và thao tác tệp tin để kiểm tra khi cần.',
      },
      {
        title: isLaos ? 'Single Sign-On (SSO) & LDAP Integration' : 'Tích hợp Single Sign-On (SSO) & Active Directory',
        desc: isLaos 
          ? 'Seamlessly integrate with internal enterprise Active Directory, LDAP, and ERP/CRM systems.'
          : 'Hỗ trợ kết nối hệ thống Active Directory, LDAP, SAML 2.0 có sẵn của doanh nghiệp để đăng nhập một lần tiện lợi.',
      },
    ],
  };

  const technicalSpecs = [
    { name: 'Hạ tầng Data Center', value: 'Viettel IDC Tier 3 (ANSI/TIA-942 Rated 3)' },
    { name: 'Vị trí lưu trữ dữ liệu', value: '100% trong lãnh thổ Việt Nam (Hà Nội, TP.HCM, Đà Nẵng, Cần Thơ)' },
    { name: 'Cam kết mức độ sẵn sàng (SLA)', value: '99.99% Uptime kèm chính sách bồi thường minh bạch' },
    { name: 'Giao thức Email hỗ trợ', value: 'IMAP, POP3, SMTP, Webmail, CalDAV, CardDAV' },
    { name: 'Bộ lọc thư rác & Mã độc', value: 'Multi-layer AI Anti-Spam, Antivirus & DKIM/SPF/DMARC' },
    { name: 'Lưu trữ tệp tin (Cloud Storage)', value: 'Enterprise NVMe/SSD Storage với cơ chế phân tán Ceph' },
    { name: 'Định dạng Office hỗ trợ', value: 'DOCX, XLSX, PPTX, PDF, TXT, CSV và các định dạng mở tiêu chuẩn' },
    { name: 'Mã hóa truyền tải', value: 'SSL/TLS 1.3 End-to-End Encryption' },
    { name: 'Tuân thủ an toàn thông tin', value: 'ISO 27001, ISO 27017, ISO 9001, Nghị định 13/2023/NĐ-CP' },
    { name: 'Phương thức sao lưu dự phòng', value: 'Tự động Snapshot hàng ngày & Lưu trữ định kỳ sang cụm độc lập' },
  ];

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 mb-8">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <VIDCNativeButton
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all min-h-[44px] ${
                  isActive
                    ? 'border-[var(--vidc-color-brand-red)] text-[var(--vidc-color-brand-red)] bg-red-50/50'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{tab.label}</span>
              </VIDCNativeButton>
            );
          })}
        </div>

        {/* Active Tab Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tabContents[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-slate-300 transition-all shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-[var(--vidc-legacy-hex-222225)]">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Collapsible Technical Specifications Table */}
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
          <VIDCNativeButton
            type="button"
            onClick={() => setIsSpecTableOpen(!isSpecTableOpen)}
            className="w-full p-5 sm:p-6 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between transition-colors text-left"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)]">
                <FileCode className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                  Bảng thông số kỹ thuật chuẩn hóa (Technical Specifications)
                </h3>
                <p className="text-xs text-slate-500">
                  Chi tiết tiêu chuẩn vận hành, an toàn thông tin & chứng chỉ của Viettel Workspace
                </p>
              </div>
            </div>
            <div className="p-2 text-slate-500">
              {isSpecTableOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </VIDCNativeButton>

          {isSpecTableOpen && (
            <div className="p-4 sm:p-6 divide-y divide-slate-100 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="text-slate-400 font-mono text-[11px] uppercase border-b border-slate-200">
                    <th className="pb-3 font-bold w-1/3">Tiêu chí kỹ thuật</th>
                    <th className="pb-3 font-bold w-2/3">Tiêu chuẩn kỹ thuật Viettel Workspace</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {technicalSpecs.map((spec, sIdx) => (
                    <tr key={sIdx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 font-bold text-slate-800 pr-4">{spec.name}</td>
                      <td className="py-3.5 text-slate-600 font-medium">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
