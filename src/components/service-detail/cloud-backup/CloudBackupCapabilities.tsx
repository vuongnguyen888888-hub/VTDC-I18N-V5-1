import React, { useState } from 'react';
import { Layers, ShieldCheck, RefreshCw, CheckCircle2, Server, Lock, Zap, Database } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudBackupCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const CloudBackupCapabilities: React.FC<CloudBackupCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'platform' | 'security' | 'recovery'>('platform');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos 
      ? 'Technology Capabilities & Outstanding Features of Viettel BaaS'
      : 'Năng lực công nghệ & Tính năng vượt trội của Viettel BaaS',
    specTitle: isLaos ? 'Technical Specifications Summary' : 'Bảng thông số kỹ thuật dịch vụ BaaS',
  };

  const tabs = [
    { id: 'platform', label: isLaos ? 'Multi-Platform & Data' : 'Đa nền tảng & Dữ liệu', icon: Layers },
    { id: 'security', label: isLaos ? 'Security & Anti-Ransomware' : 'Bảo mật & Anti-Ransomware', icon: ShieldCheck },
    { id: 'recovery', label: isLaos ? 'Automation & Recovery' : 'Tự động hóa & Khôi phục', icon: RefreshCw },
  ];

  const tabContents = {
    platform: [
      {
        title: isLaos ? 'Universal Multi-Platform Support' : 'Hỗ trợ đa dạng nền tảng',
        desc: isLaos 
          ? 'Backup for Cloud Server, Bare-metal/Physical Server (Linux/Windows), VMware, Hyper-V, VPC, DPC, and Microsoft 365 SaaS.'
          : 'Sao lưu cho Cloud Server, Máy chủ vật lý Linux / Windows Server, VMware ESXi, Hyper-V, VPC, DPC và SaaS Microsoft 365.',
      },
      {
        title: isLaos ? 'Smart Snapshot & Deduplication' : 'Cơ chế sao lưu thông minh',
        desc: isLaos 
          ? 'Zero-downtime snapshots, flexible hourly/daily/weekly/monthly scheduling, data compression and deduplication saving storage costs.'
          : 'Snapshot không gián đoạn dịch vụ, lập lịch sao lưu xoay vòng linh hoạt, tích hợp nén dữ liệu và loại bỏ trùng lặp (Deduplication) giúp tiết kiệm dung lượng.',
      },
      {
        title: isLaos ? 'Application-Aware Processing' : 'Bảo vệ ứng dụng chuyên sâu',
        desc: isLaos 
          ? 'Application-Aware image processing ensuring transaction consistency for MS SQL Server, Oracle, Active Directory, and MS Exchange.'
          : 'Tích hợp Application-Aware đảm bảo tính toàn vẹn giao dịch cho cơ sở dữ liệu Microsoft SQL Server, Oracle RAC, Active Directory và Exchange.',
      },
    ],
    security: [
      {
        title: isLaos ? 'End-to-End Military-Grade Encryption' : 'Mã hóa dữ liệu toàn diện',
        desc: isLaos 
          ? 'AES 256-bit at-rest encryption and SSL/TLS in-transit data transmission ensuring zero unauthorized access.'
          : 'Dữ liệu được mã hóa chuẩn quân sự AES 256-bit khi lưu trữ (at-rest) và SSL/TLS trên đường truyền (in-transit), đảm bảo tính an mật tuyệt đối.',
      },
      {
        title: isLaos ? 'Immutable Backup (Object Lock)' : 'Lưu trữ bất biến & Chống Ransomware',
        desc: isLaos 
          ? 'WORM (Write Once, Read Many) technology on S3 Object Storage prevents ransomware and rogue actors from modifying or deleting backups.'
          : 'Công nghệ khóa dữ liệu WORM (Object Lock) trên Object Storage ngăn chặn triệt để mã độc tống tiền Ransomware sửa đổi hoặc xóa dữ liệu sao lưu.',
      },
      {
        title: isLaos ? 'Multi-Factor Auth & Audit Logging' : 'Xác thực đa yếu tố & Kiểm toán hệ thống',
        desc: isLaos 
          ? 'Enterprise RBAC role delegation, 2FA/MFA authentication, and tamper-proof audit trail for regulatory compliance.'
          : 'Hỗ trợ xác thực đa yếu tố (2FA/MFA), phân quyền người dùng chi tiết (RBAC) và lưu vết toàn bộ lịch sử thao tác để phục vụ kiểm toán.',
      },
    ],
    recovery: [
      {
        title: isLaos ? 'Autonomous Schedule & Alerts' : 'Tự động hóa hoàn toàn',
        desc: isLaos 
          ? 'Auto-discover new server instances, execute scheduled retention policies, and dispatch alert notifications via Email/SMS/Webhook.'
          : 'Tự động phát hiện máy chủ mới trong cụm, thực thi chính sách lưu trữ định kỳ và tự động gửi cảnh báo qua Email/SMS/Webhook khi có bất thường.',
      },
      {
        title: isLaos ? 'Multi-Level Granular Recovery' : 'Khôi phục linh hoạt đa cấp độ',
        desc: isLaos 
          ? 'Instantly restore entire virtual machines, disk volumes, specific files, or granular application objects (emails, database tables).'
          : 'Hỗ trợ phục hồi toàn bộ máy chủ (Full VM / Bare-metal), phục hồi từng ổ đĩa, từng tệp tin riêng rẽ hoặc trích xuất từng bản ghi dữ liệu ứng dụng.',
      },
      {
        title: isLaos ? 'Dual-Direction Restore Policy' : 'Khôi phục hai chiều linh hoạt',
        desc: isLaos 
          ? 'Choose between Override (overwrite damaged files) or Keep (retain both original and restored copies side-by-side).'
          : 'Tùy chọn ghi đè (Override) vào hệ thống đang chạy hoặc lưu song song (Keep) để so sánh và kiểm tra tính toàn vẹn dữ liệu trước khi chuyển giao.',
      },
    ],
  };

  const specs = [
    { label: 'Phạm vi hỗ trợ', value: 'Physical Server, Cloud Server, Private Cloud, VMware, KVM, Microsoft 365' },
    { label: 'Cơ chế lưu trữ', value: 'Khối lưu trữ SAN/Object Storage đạt chuẩn TIA-942 Rated 3 với nhân bản phân tán' },
    { label: 'Công nghệ bảo mật', value: 'Mã hóa AES 256-bit, SSL/TLS, Object Lock (WORM chống Ransomware)' },
    { label: 'Chế độ khôi phục', value: 'Full Server / Bare-metal, Disk volume, Single file, Application-level Explorer' },
    { label: 'Tiêu chuẩn & Pháp lý', value: 'ISO 27001, ISO 27017, PCI-DSS, Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân' },
    { label: 'Cam kết SLA & Hỗ trợ', value: 'Cam kết tính khả dụng dịch vụ 99.99%, Đội ngũ kỹ sư hỗ trợ 24/7/365' },
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

        {/* Tab Selection Chuẩn TDV-01 */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 mb-8">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <VIDCNativeButton
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all min-h-[44px] cursor-pointer ${
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

        {/* Active Tab Content Cards (Grid 3 Cards Chuẩn TDV-01) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tabContents[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
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

        {/* Technical Specification Summary Table */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8">
          <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] mb-4 flex items-center gap-2">
            <Server className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
            <span>{t.specTitle}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specs.map((spec, sIdx) => (
              <div key={sIdx} className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                  {spec.label}
                </span>
                <span className="text-xs font-semibold text-slate-800 mt-1.5 leading-relaxed">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
