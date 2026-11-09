import React, { useState } from 'react';
import { 
  ShieldCheck, 
  BrainCircuit, 
  ShieldAlert, 
  Activity, 
  Cpu, 
  Box, 
  BarChart3, 
  Server, 
  Layers, 
  FileCode, 
  CheckCircle2 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface EndpointSecurityCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const EndpointSecurityCapabilities: React.FC<EndpointSecurityCapabilitiesProps> = ({
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [activeTab, setActiveTab] = useState<'defense' | 'advanced' | 'platform'>('defense');

  const t = {
    eyebrow: isLaos ? 'CORE CAPABILITIES & SPECS' : 'TÍNH NĂNG VƯỢT TRỘI & BẢNG THÔNG SỐ',
    headline: isLaos 
      ? 'Next-Gen Multi-Layered Defense Capabilities' 
      : 'Năng Lực Công Nghệ Phòng Thủ Điểm Cuối Đa Tầng',
    specSheetTitle: isLaos ? 'Technical Specifications' : 'Bảng Thông Số Kỹ Thuật Tiêu Chuẩn (Technical Spec Sheet)',
    specSheetSubtitle: isLaos
      ? 'Official system parameters and verified platform compatibility matrix.'
      : 'Thông số kiến trúc, dung lượng tài nguyên chiếm dụng và khả năng tương thích toàn diện.',
  };

  const tabs = [
    {
      id: 'defense',
      label: isLaos ? 'Multi-Layered AI Defense' : 'Phòng thủ Đa tầng & AI',
      icon: BrainCircuit,
    },
    {
      id: 'advanced',
      label: isLaos ? 'Advanced Protection & Sandbox' : 'Bảo vệ Nâng cao & Sandbox',
      icon: ShieldAlert,
    },
    {
      id: 'platform',
      label: isLaos ? 'Architecture & Compatibility' : 'Kiến trúc & Tương thích',
      icon: Server,
    },
  ];

  const tabContents = {
    defense: [
      {
        title: isLaos ? 'Machine Learning Anti-Malware' : 'Machine Learning Anti-Malware (Pre-Execution)',
        desc: isLaos
          ? 'Employs machine learning algorithms trained on billions of threat samples to predict and block emerging malware before execution.'
          : 'Ứng dụng các thuật toán máy học tự động phân tích hàng tỷ mẫu tệp để dự đoán và ngăn chặn tức thì mã độc đã biết và chưa biết trước khi kịp thực thi.',
      },
      {
        title: isLaos ? 'Advanced Anti-Exploit' : 'Chống Khai Thác Nâng Cao (Advanced Anti-Exploit)',
        desc: isLaos
          ? 'Protects application and browser vulnerabilities during runtime execution, preventing memory injection and privilege escalation.'
          : 'Bảo vệ các lỗ hổng của trình duyệt và ứng dụng trong giai đoạn thực thi (Execution phase), ngăn chặn hacker chiếm quyền điều khiển bộ nhớ.',
      },
      {
        title: isLaos ? 'Process Inspector / ATC' : 'Kiểm Tra Tiến Trình Thời Gian Thực (Process Inspector / ATC)',
        desc: isLaos
          ? 'Continuously tracks and analyzes abnormal behaviors across background processes to discover and neutralize stealth malware.'
          : 'Liên tục theo dõi các hoạt động đáng ngờ và hành vi bất thường của toàn bộ tiến trình chạy ngầm để triệt tiêu mã độc ẩn nấp.',
      },
    ],
    advanced: [
      {
        title: isLaos ? 'Fileless Attack Defense & HyperDetect' : 'Phòng Chống Tấn Công Không File (Fileless Attack & HyperDetect)',
        desc: isLaos
          ? 'Thwarts in-memory attacks that bypass traditional disk scanners by abusing native administrative tooling (PowerShell, WMI).'
          : 'Ngăn chặn các kỹ thuật tấn công tiêm mã độc vào bộ nhớ RAM hoặc lạm dụng công cụ hệ thống (PowerShell, WMI) trước khi kịp kích hoạt.',
      },
      {
        title: isLaos ? 'Integrated Cloud Sandbox' : 'Môi Trường Giả Lập Cô Lập (Endpoint Integrated Sandbox)',
        desc: isLaos
          ? 'Automatically detonates suspicious payloads in an isolated cloud chamber for behavioral forensics without risking production hosts.'
          : 'Tự động gửi tệp đáng ngờ vào môi trường ảo độc lập để phân tích hành vi chuyên sâu mà không gây ảnh hưởng đến hệ thống thực tế.',
      },
      {
        title: isLaos ? 'Endpoint Risk Analytics (ERA)' : 'Phân Tích & Quản Trị Rủi Ro (Endpoint Risk Analytics - ERA)',
        desc: isLaos
          ? 'Autonomously scans misconfigurations and application CVEs, assigning actionable risk ratings and remediation prioritization.'
          : 'Tự động rà quét các lỗ hổng ứng dụng và lỗi cấu hình sai (misconfigurations), đưa ra thang điểm và khuyến nghị khắc phục chuẩn an toàn.',
      },
    ],
    platform: [
      {
        title: isLaos ? 'Central Scan via SVA' : 'Máy Chủ Quét Tập Trung (Security Server - SVA)',
        desc: isLaos
          ? 'Dedicated virtual appliance offloads antivirus scans from virtual machines, eliminating Antivirus Storms and freeing 98% host RAM/CPU.'
          : 'Máy ảo bảo mật chuyên dụng gánh toàn bộ tải quét virus từ máy chủ ảo (VM), triệt tiêu nghẽn I/O và giải phóng 98% CPU/RAM.',
      },
      {
        title: isLaos ? 'Universal OS & Hypervisor Support' : 'Đa Nền Tảng OS & Công Nghệ Ảo Hóa',
        desc: isLaos
          ? 'Seamlessly supports Windows, Linux, macOS, Android, iOS along with VMware vSphere, Hyper-V, KVM, Nutanix AHV, Citrix.'
          : 'Tương thích tuyệt đối với Windows, Linux (CentOS, Ubuntu, RedHat), macOS, Android, iOS và các nền tảng VMware, Hyper-V, KVM.',
      },
      {
        title: isLaos ? 'SIEM & SOC Interoperability' : 'Kết Nối Tích Hợp SIEM & SOC 24/7',
        desc: isLaos
          ? 'Standard API connectors feeding telemetry into central Splunk, IBM QRadar, or Viettel Managed Security Service (MSS) seamlessly.'
          : 'Hỗ trợ API chuẩn xuất dữ liệu sự kiện an ninh sang hệ thống SIEM (Splunk, QRadar) và kết nối trực tiếp với Trung tâm điều hành SOC 24/7.',
      },
    ],
  };

  const specRows = [
    {
      category: isLaos ? 'Management Architecture' : 'Kiến trúc quản trị',
      detail: isLaos 
        ? 'GravityZone Cloud / On-Premise Control Center (Single-pane-of-glass dashboard)' 
        : 'Nền tảng GravityZone Cloud / On-Premise Control Center (Giao diện Web tập trung duy nhất)',
      icon: Layers
    },
    {
      category: isLaos ? 'Centralized Scan Engine' : 'Công nghệ quét offload',
      detail: isLaos 
        ? 'Security Virtual Appliance (SVA) – Centralized scanning dedicated for Virtual Machines' 
        : 'Security Virtual Appliance (SVA) – Quét tập trung chuyên dụng cho Virtual Machines',
      icon: Server
    },
    {
      category: isLaos ? 'Resource Footprint' : 'Tài nguyên chiếm dụng',
      detail: isLaos 
        ? '10–20 MB static RAM, ~110 MB during scan, consumes 1–2% of a single vCPU' 
        : '10–20 MB bộ nhớ tĩnh, ~110 MB khi quét, chiếm 1–2% hoạt động của 1 vCPU',
      icon: Cpu
    },
    {
      category: isLaos ? 'Supported Operating Systems' : 'Hệ điều hành hỗ trợ',
      detail: isLaos 
        ? 'Windows (Desktop & Server), Linux (RedHat, Ubuntu, CentOS, Debian...), macOS, Android, iOS, Solaris' 
        : 'Windows (Desktop & Server), Linux (RedHat, Ubuntu, CentOS, Debian...), macOS, Android, iOS, Solaris',
      icon: FileCode
    },
    {
      category: isLaos ? 'Supported Hypervisors' : 'Nền tảng ảo hóa hỗ trợ',
      detail: isLaos 
        ? 'VMware vSphere, Microsoft Hyper-V, Citrix XenServer, KVM, Nutanix AHV, RedHat Enterprise Virtualization' 
        : 'VMware vSphere, Microsoft Hyper-V, Citrix XenServer, KVM, Nutanix AHV, RedHat Enterprise Virtualization',
      icon: Server
    },
    {
      category: isLaos ? 'Compatible Cloud Platforms' : 'Nền tảng Cloud tương thích',
      detail: isLaos 
        ? 'Viettel Cloud (vCS, vVPC, oDPC), AWS, Microsoft Azure, Google Cloud Platform' 
        : 'Viettel Cloud (vCS, vVPC, oDPC), AWS, Microsoft Azure, Google Cloud Platform',
      icon: ShieldCheck
    },
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

        {/* Active Tab Content Cards (3 cards grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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

        {/* Technical Spec Sheet Table */}
        <div className="mt-12 pt-10 border-t border-slate-200">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight">
              {t.specSheetTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {t.specSheetSubtitle}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-[var(--vidc-legacy-hex-0f172a)]">
                <tr>
                  <th className="py-3.5 px-6 font-extrabold w-1/3">Hạng mục kỹ thuật</th>
                  <th className="py-3.5 px-6 font-extrabold">Thông số & Năng lực đáp ứng</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {specRows.map((spec, sIdx) => {
                  const Icon = spec.icon;
                  return (
                    <tr key={sIdx} className={sIdx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-4 px-6 font-bold text-[var(--vidc-legacy-hex-222225)] flex items-center gap-2.5">
                        <Icon className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                        <span>{spec.category}</span>
                      </td>
                      <td className="py-4 px-6 text-slate-600 leading-relaxed font-normal">
                        {spec.detail}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
