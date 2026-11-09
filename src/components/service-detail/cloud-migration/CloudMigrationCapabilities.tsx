import React, { useState } from 'react';
import { HardDrive, Server, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudMigrationCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const CloudMigrationCapabilities: React.FC<CloudMigrationCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'infrastructure' | 'engine' | 'security'>('infrastructure');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos 
      ? 'Outstanding Migration Technologies & Infrastructure Features'
      : 'Tính năng chuyển đổi & Công nghệ hạ tầng vượt trội',
  };

  const tabs = [
    { id: 'infrastructure', label: isLaos ? 'Infrastructure & Storage' : 'Hạ tầng & Lưu trữ chuyển đổi', icon: HardDrive },
    { id: 'engine', label: isLaos ? 'Migration Engines & Tooling' : 'Động cơ & Công cụ di chuyển', icon: Cpu },
    { id: 'security', label: isLaos ? 'Security & Managed Service' : 'Bảo mật & Quản trị ủy thác', icon: ShieldCheck },
  ];

  const tabContents = {
    infrastructure: [
      {
        title: isLaos ? 'High-Performance HDD/SSD Staging Storage' : 'Lưu trữ đệm HDD/SSD dung lượng lớn',
        desc: isLaos 
          ? 'Flexible staging storage blocks calculated in 50 GB increments, accommodating petabyte-scale data transfers seamlessly.'
          : 'Khối lưu trữ vùng đệm tính cước theo Block 50 GB linh hoạt, đáp ứng khả năng truyền tải dữ liệu quy mô từ Gigabyte đến hàng Petabyte.',
      },
      {
        title: isLaos ? 'Tier 3 Standard Data Center Facilities' : 'Trung tâm dữ liệu đạt chuẩn Tier 3 quốc tế',
        desc: isLaos 
          ? 'Operated within certified TIA-942 Rated 3 facilities across Vietnam, ensuring 99.99% system availability and power redundancy.'
          : 'Hệ thống Data Center TIA-942 Rated 3 trải dài toàn quốc với tiêu chuẩn an toàn vật lý và nguồn điện dự phòng đa tầng nghiêm ngặt.',
      },
      {
        title: isLaos ? 'Dedicated High-Speed Bandwidth Direct Line' : 'Kênh truyền dẫn tốc độ cao riêng biệt',
        desc: isLaos 
          ? 'Supports dedicated high-throughput leased lines and VPN/Hybrid L3 channels up to 10 Gbps / 40 Gbps, minimizing data transfer lag.'
          : 'Hỗ trợ kênh truyền kết nối riêng Hybrid Connect và VPN tốc độ cao lên tới 10 Gbps / 40 Gbps, rút ngắn tối đa thời gian di chuyển dữ liệu.',
      },
    ],
    engine: [
      {
        title: isLaos ? 'Physical-to-Cloud (P2C) Live Conversion' : 'Chuyển đổi trực tiếp máy chủ vật lý (P2C)',
        desc: isLaos 
          ? 'Converts Bare-Metal physical servers directly into Viettel Cloud virtual instances with zero re-architecting needed.'
          : 'Dịch chuyển máy chủ vật lý nguyên bản (Bare-Metal) lên môi trường điện toán đám mây Viettel Cloud mà không cần cấu trúc lại ứng dụng.',
      },
      {
        title: isLaos ? 'Virtual-to-Cloud (V2C) Seamless Sync' : 'Di chuyển máy chủ ảo hóa nội bộ (V2C)',
        desc: isLaos 
          ? 'Full support for live cloning and incremental synchronization from VMware vSphere and Microsoft Hyper-V to Viettel Cloud.'
          : 'Hỗ trợ clone dữ liệu và đồng bộ vi sai liên tục từ hệ thống ảo hóa nội bộ VMware vSphere, Microsoft Hyper-V sang Cloud.',
      },
      {
        title: isLaos ? 'Public Cloud to Viettel Cloud Repatriation' : 'Hồi hương từ Public Cloud quốc tế (C2C)',
        desc: isLaos 
          ? 'Automated pipeline to migrate running workloads from AWS, Azure, and Google Cloud Platform back to domestic data centers.'
          : 'Chuyển đổi trơn tru các workload đang chạy trên AWS, Azure, GCP về hạ tầng Viettel IDC giúp tiết kiệm ngoại tệ và tuân thủ dữ liệu.',
      },
    ],
    security: [
      {
        title: isLaos ? 'Decree 13/2023/ND-CP Personal Data Shield' : 'Tuân thủ toàn diện Nghị định 13/2023/NĐ-CP',
        desc: isLaos 
          ? 'End-to-end encryption in transit and at rest, guaranteeing domestic data sovereignty and personal data protection.'
          : 'Mã hóa dữ liệu trong suốt quá trình truyền tải và lưu trữ, đảm bảo chủ quyền dữ liệu trong nước và bảo vệ dữ liệu cá nhân.',
      },
      {
        title: isLaos ? 'Zero-Loss Integrity & Verified Checksums' : 'Cam kết toàn vẹn dữ liệu Zero-Loss',
        desc: isLaos 
          ? 'Rigorous pre-migration and post-cutover SHA-256 block hash verification, ensuring zero corrupted or missing records.'
          : 'Quy trình kiểm tra mã băm SHA-256 đối soát tự động trước và sau chuyển đổi, bảo đảm 100% dữ liệu không thất thoát.',
      },
      {
        title: isLaos ? 'Turnkey 24/7/365 Managed Service' : 'Dịch vụ ủy thác trọn gói (Managed Service)',
        desc: isLaos 
          ? 'Viettel IDC certified architects manage survey, design, pilot testing, cutover, and hand-off with 24/7 standby.'
          : 'Đội ngũ chuyên gia cao cấp khảo sát, lập kịch bản, chạy thử nghiệm và trực chiến 24/7 trong suốt quá trình cutover thực tế.',
      },
    ],
  };

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header matching Cloud Server */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Tab Selection matching Cloud Server */}
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

        {/* Active Tab Content Cards matching Cloud Server */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
