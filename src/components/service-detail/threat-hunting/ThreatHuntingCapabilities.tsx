import React, { useState } from 'react';
import { Search, Route, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ThreatHuntingCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const ThreatHuntingCapabilities: React.FC<ThreatHuntingCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'discovery' | 'forensics' | 'hardening'>('discovery');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos
      ? 'Outstanding Threat Hunting Capabilities & Technology'
      : 'Tính Năng Săn Lùng Mối Nguy & Công Nghệ Vượt Trội',
  };

  const tabs = [
    { id: 'discovery', label: isLaos ? 'Threat Discovery' : 'Rà Soát & Săn Lùng Mối Nguy', icon: Search },
    { id: 'forensics', label: isLaos ? 'Investigation & Forensics' : 'Phân Tích & Truy Vết Nguồn Gốc', icon: Route },
    { id: 'hardening', label: isLaos ? 'Hardening & Playbooks' : 'Tối Ưu Luật & Nâng Cấp Playbook', icon: SlidersHorizontal },
  ];

  const tabContents = {
    discovery: [
      {
        title: isLaos ? 'Fileless Attack & Memory Injection Detection' : 'Phát hiện mã độc tàng hình & Fileless',
        desc: isLaos
          ? 'Proactively identifies code injection, process hollowing, and memory-only payloads bypassing standard antivirus.'
          : 'Chủ động tìm kiếm các kỹ thuật tấn công tiêm mã độc vào bộ nhớ (Memory Injection), Process Hollowing mà Antivirus truyền thống hoàn toàn bỏ sót.',
      },
      {
        title: isLaos ? 'Living off the Land (LotL) Defense' : 'Ngăn chặn lạm dụng công cụ hợp trị (LotL)',
        desc: isLaos
          ? 'Hunts malicious usage of native admin utilities such as PowerShell, WMI, PsExec, and certutil.'
          : 'Săn lùng các hành vi kẻ tấn công lợi dụng công cụ quản trị hệ thống có sẵn (PowerShell, WMI, PsExec, Certutil) để di chuyển ngầm mà không kích hoạt chuông báo.',
      },
      {
        title: isLaos ? 'Privilege Escalation & Persistence Hunting' : 'Rà soát leo thang đặc quyền & Cửa sau ngầm',
        desc: isLaos
          ? 'Deep scanning of scheduled tasks, registry run keys, shadow admin accounts, and modified security descriptors.'
          : 'Quét sâu vào Scheduled Tasks, Registry Run Keys, tài khoản quản trị ẩn danh và các cơ chế duy trì quyền kiểm soát lâu dài (Persistence) của hacker.',
      },
    ],
    forensics: [
      {
        title: isLaos ? 'Initial Access Vector Identification' : 'Xác định điểm khởi phát xâm nhập (Initial Access)',
        desc: isLaos
          ? 'Pinpoints how adversaries entered the perimeter: Phishing, compromised VPN credentials, or unpatched public edge vulnerabilities.'
          : 'Chỉ rõ đường đi của kẻ tấn công: Qua email lừa đảo (Phishing), lộ lọt thông tin tài khoản VPN hay khai thác lỗ hổng máy chủ công khai Internet.',
      },
      {
        title: isLaos ? 'Lateral Movement Mapping' : 'Vẽ lại sơ đồ di chuyển ngang (Lateral Movement)',
        desc: isLaos
          ? 'Visualizes hop-by-hop traversal across internal network subnets, SMB shares, and Kerberos ticket operations.'
          : 'Tái hiện trực quan từng bước nhảy của kẻ tấn công qua các phân vùng mạng nội bộ, chia sẻ file SMB, Remote Desktop và lạm dụng vé Kerberos.',
      },
      {
        title: isLaos ? 'Digital Evidence & Blast Radius Assessment' : 'Đánh giá phạm vi ảnh hưởng & Bảo toàn chứng cứ',
        desc: isLaos
          ? 'Determines exact data exposure, accessed databases, impacted servers, and preserves forensic artifacts for legal review.'
          : 'Đo lường chính xác các cơ sở dữ liệu bị truy cập, máy chủ bị kiểm soát và thu thập bằng chứng kỹ thuật số nguyên vẹn phục vụ công tác ứng cứu và pháp lý.',
      },
    ],
    hardening: [
      {
        title: isLaos ? 'False Positive Elimination (Zero Alert Fatigue)' : 'Triệt tiêu bão cảnh báo giả (Alert Fatigue)',
        desc: isLaos
          ? 'Filters out telemetry noise, allowing SOC analysts to dedicate full attention to high-fidelity, verified adversary signals.'
          : 'Sàng lọc và loại bỏ tới 75% các cảnh báo rác, giúp đội ngũ kỹ sư an ninh mạng nội bộ dồn 100% sự tập trung vào các nguy cơ thực tế nguy hiểm nhất.',
      },
      {
        title: isLaos ? 'SIEM & EDR Rule Tuning' : 'Tinh chỉnh & Chuẩn hóa quy tắc SIEM/EDR',
        desc: isLaos
          ? 'Translates hunting insights into robust custom Sigma/YARA/EDR detection rules tailored to client infrastructure.'
          : 'Đúc kết các dấu vết săn lùng thành bộ quy tắc phát hiện Sigma, YARA và luật giám sát EDR được tối ưu riêng biệt cho môi trường doanh nghiệp.',
      },
      {
        title: isLaos ? 'Playbook Upgrades & Threat Knowledge Transfer' : 'Nâng cấp Playbook & Chuyển giao tri thức',
        desc: isLaos
          ? 'Delivers actionable response playbooks aligned with MITRE ATT&CK, empowering internal teams to respond effectively in the future.'
          : 'Bàn giao bộ kịch bản phản ứng sự cố (Playbook) chuẩn hóa theo khung MITRE ATT&CK, nâng tầm năng lực tác chiến an toàn thông tin cho đội ngũ doanh nghiệp.',
      },
    ],
  };

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

        {/* Tab Selection matching CloudServerCapabilities */}
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

        {/* Active Tab Content Cards matching CloudServerCapabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tabContents[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-red-200 hover:shadow-md transition-all duration-200"
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

      </div>
    </section>
  );
};
