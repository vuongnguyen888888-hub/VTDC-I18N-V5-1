import React, { useState } from 'react';
import { HardDrive, Server, Network, ShieldCheck, CheckCircle2, FileText } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface DedicatedPrivateCloudCapabilitiesProps {
  currentMarket?: SEAMarket;
  onOpenQuote?: () => void;
}

export const DedicatedPrivateCloudCapabilities: React.FC<DedicatedPrivateCloudCapabilitiesProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'hardware' | 'network' | 'management'>('hardware');
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos 
      ? 'Outstanding HPC Infrastructure Features & Technology'
      : 'Tính năng hạ tầng & Công nghệ HPC vượt trội',
  };

  const tabs = [
    { id: 'hardware', label: isLaos ? 'Hardware & Storage' : 'Phần cứng & Lưu trữ', icon: HardDrive },
    { id: 'network', label: isLaos ? 'InfiniBand & SDN Fabric' : 'Mạng InfiniBand & SDN', icon: Network },
    { id: 'management', label: isLaos ? 'Security & Management' : 'Bảo mật & Quản trị', icon: ShieldCheck },
  ];

  const tabContents = {
    hardware: [
      {
        title: isLaos ? 'Single-Tenant Bare-Metal Isolation' : 'Tài nguyên vật lý cô lập 100%',
        desc: isLaos 
          ? 'Dedicated isolated physical servers with zero resource sharing for CPU, RAM, firewalls, and disk pools.'
          : 'Hạ tầng máy chủ vật lý độc lập tuyệt đối, loại bỏ hiện tượng tranh chấp tài nguyên (Noisy Neighbors).',
      },
      {
        title: isLaos ? 'Massive Processing Power & GPU Support' : 'Vi xử lý cực đại & Hỗ trợ GPU',
        desc: isLaos 
          ? '02 - 04 AMD EPYC / Intel Xeon Platinum CPUs per node, RAM DDR5 expandable up to 3–6 TB per server.'
          : 'Trang bị CPU AMD EPYC / Intel Xeon Platinum, RAM DDR5 lên đến 3–6 TB/node, hỗ trợ GPU NVIDIA cho AI.',
      },
      {
        title: isLaos ? 'All-Flash NVMe High-IOPS Storage' : 'Lưu trữ phân tán NVMe All-Flash',
        desc: isLaos 
          ? 'High-throughput All-Flash NVMe storage pools delivering ultra-high IOPS and sub-millisecond latency.'
          : 'Khối lưu trữ NVMe tốc độ cao mang lại IOPS vượt trội và độ trễ cực thấp cho các bài toán Big Data và AI.',
      },
    ],
    network: [
      {
        title: isLaos ? 'InfiniBand 200 Gbps Ultra-Fabric' : 'Mạng InfiniBand 200 Gbps siêu tốc',
        desc: isLaos 
          ? '200 Gbps InfiniBand cluster interconnect for ultra-low latency compute clustering and parallel processing.'
          : 'Đường truyền chuyên dụng 200 Gbps liên kết cụm máy chủ, phục vụ tính toán song song quy mô lớn.',
      },
      {
        title: isLaos ? 'Multi-AZ Cloud & High Bandwidth' : 'Giải pháp Cloud Multi-AZ mạnh mẽ',
        desc: isLaos 
          ? 'Inter-region latency < 5ms, 10 Gbps inter-AZ dedicated bandwidth, and automated Failover support.'
          : 'Độ trễ liên vùng < 5ms, băng thông liên AZ đạt 10 Gbps, tự động chuyển đổi dự phòng khi có sự cố.',
      },
      {
        title: isLaos ? 'Software-Defined Networking (SDN)' : 'Mạng điều khiển bằng phần mềm (SDN)',
        desc: isLaos 
          ? 'Full virtual networking suite: vRouter, Layer 4-7 vLoad Balancer, IPSec VPN, and Dynamic BGP Routing.'
          : 'Tích hợp đầy đủ vRouter, cân bằng tải vLoad Balancer L4-L7, kết nối an toàn IPSec VPN và Dynamic Routing.',
      },
    ],
    management: [
      {
        title: isLaos ? 'Inline Machine Learning Security' : 'Bảo mật Inline Machine Learning',
        desc: isLaos 
          ? 'Firewall with embedded ML algorithms in firewall code to proactively detect and block Zero-day threats.'
          : 'Thuật toán học máy nhúng trực tiếp trong mã tường lửa ngăn chặn mã độc Zero-day thời gian thực.',
      },
      {
        title: isLaos ? 'Unified Self-Service Web Portal' : 'Giao diện quản trị tập trung duy nhất',
        desc: isLaos 
          ? 'Centralized web portal for VM provisioning, SDN topology mapping, ISO/Template management, and IAM.'
          : 'Portal trực quan giúp chủ động khởi tạo/xóa VM, vẽ sơ đồ mạng ảo, quản trị ISO/Template và IAM (LDAP/SAML).',
      },
      {
        title: isLaos ? 'Zero-Downtime Hot-Add Scaling' : 'Mở rộng Hot-Add không gián đoạn',
        desc: isLaos 
          ? 'Hot-add CPU, RAM, and hot-extend storage disks seamlessly without service interruptions.'
          : 'Hỗ trợ tăng nóng CPU, RAM và mở rộng nóng dung lượng đĩa cứng mà không cần tắt máy chủ hay gián đoạn dịch vụ.',
      },
    ],
  };

  const specGroups = [
    {
      groupName: 'Hạ Tầng Phần Cứng & Năng Lực Tính Toán (Hardware & Compute)',
      items: [
        { label: 'Mô hình triển khai', value: 'Dedicated Private Cloud – Tier HPC (100% Single-Tenant Bare-Metal)' },
        { label: 'Vi xử lý (CPU)', value: '02 – 04 CPU AMD EPYC / Intel Xeon Platinum (Ice Lake/Sapphire Rapids)' },
        { label: 'Bộ nhớ (RAM)', value: 'DDR5 Enterprise ECC Registered, mở rộng từ 3 TB – 6 TB / máy chủ' },
        { label: 'Khả năng tăng tốc AI/GPU', value: 'Hỗ trợ tích hợp cụm GPU NVIDIA (H100, A100, L40S) chuyên dụng' },
      ]
    },
    {
      groupName: 'Hạ Tầng Mạng & Lưu Trữ (Networking & Storage)',
      items: [
        { label: 'Mạng liên cụm HPC', value: 'InfiniBand 200 Gbps tốc độ cực cao, độ trễ sub-microsecond' },
        { label: 'Mạng kết nối ngoài (External)', value: 'Dual 25 Gbps Redundant NICs; Băng thông liên vùng AZ 10 Gbps' },
        { label: 'Lưu trữ (Storage)', value: '100% Enterprise NVMe All-Flash SAN Storage; Replication x3 copies' },
        { label: 'Hạ tầng mạng ảo (SDN)', value: 'vRouter, vLoad Balancer L4-L7, IPSec VPN, Micro Segmentation' },
      ]
    },
    {
      groupName: 'An Toàn Bảo Mật & Tiêu Chuẩn Vận Hành (Security & SLA)',
      items: [
        { label: 'Tường lửa bảo vệ', value: 'Inline Machine Learning Firewall ngăn chặn mã độc Zero-Day chủ động' },
        { label: 'Cam kết chất lượng Uptime', value: 'SLA 99.99% độ sẵn sàng vận hành liên tục (Bồi thường theo hợp đồng)' },
        { label: 'Hạ tầng Trung tâm Dữ liệu', value: 'Trung tâm dữ liệu đạt chuẩn quốc tế ANSI/TIA-942 Rated 3' },
        { label: 'Chứng chỉ Bảo mật & Pháp lý', value: 'ISO 27001, ISO 27017, PCI-DSS v4.0, Nghị định 13/2023/NĐ-CP' },
      ]
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

        {/* Active Tab Content Cards */}
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

        {/* Structured Spec Table Matrix (Consistent with Cloud Server) */}
        <div className="mt-8">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[var(--vidc-color-brand-red)] mb-2">
              <Server className="w-3.5 h-3.5" />
              <span>BẢNG THÔNG SỐ KỸ THUẬT TIÊU CHUẨN HPC (TECHNICAL SPECS)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--vidc-text-primary)] tracking-tight">
              Đặc Tả Kỹ Thuật Viettel Dedicated Private Cloud (HPC)
            </h3>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white border border-[var(--vidc-border-default)] shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[var(--vidc-legacy-hex-1e232a)] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  <th scope="col" className="py-4 px-6 w-1/3 border-b border-[var(--vidc-text-secondary)]">Hạng Mục Kỹ Thuật</th>
                  <th scope="col" className="py-4 px-6 w-2/3 border-b border-[var(--vidc-text-secondary)]">Chi Tiết Thông Số Cam Kết</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--vidc-border-default)]">
                {specGroups.map((group, gIdx) => (
                  <React.Fragment key={gIdx}>
                    <tr className="bg-[var(--vidc-legacy-hex-f1f5f9)] text-[var(--vidc-legacy-hex-0f172a)]">
                      <td colSpan={2} className="py-3 px-6 text-sm font-bold tracking-wide uppercase">
                        {group.groupName}
                      </td>
                    </tr>
                    {group.items.map((item, iIdx) => (
                      <tr key={iIdx} className="hover:bg-[var(--vidc-legacy-hex-f8fafc)] transition-colors">
                        <th scope="row" className="py-3.5 px-6 text-sm font-medium text-[var(--vidc-text-secondary)] align-top bg-white/50">
                          {item.label}
                        </th>
                        <td className="py-3.5 px-6 text-sm text-[var(--vidc-text-primary)] font-normal leading-relaxed">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Download Tech Specs PDF Banner */}
          <div className="mt-8 p-4 sm:p-6 rounded-xl bg-slate-50 border border-[var(--vidc-border-default)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[var(--vidc-text-primary)]">Bản Đặc Tả Kỹ Thuật Cụm HPC (SLA &amp; Specs Datasheet)</h4>
                <p className="text-xs text-[var(--vidc-legacy-hex-475467)]">Tải tài liệu PDF đặc tả kỹ thuật tiêu chuẩn dịch vụ Viettel Dedicated Private Cloud.</p>
              </div>
            </div>
            <VIDCNativeButton 
              type="button"
              onClick={onOpenQuote}
              className="px-5 py-2.5 rounded-lg bg-[var(--vidc-legacy-hex-1e232a)] hover:bg-[var(--vidc-legacy-hex-2d3748)] text-white text-xs font-semibold transition-colors shrink-0 min-h-[44px] cursor-pointer"
            >
              Yêu Cầu Datasheet PDF
            </VIDCNativeButton>
          </div>

        </div>

      </div>
    </section>
  );
};
