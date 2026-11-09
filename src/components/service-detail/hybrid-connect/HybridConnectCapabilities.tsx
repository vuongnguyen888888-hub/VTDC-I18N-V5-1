import React, { useState } from 'react';
import { 
  Cable, 
  Cpu, 
  Layers, 
  ShieldAlert, 
  Workflow, 
  Cloud, 
  CheckCircle2, 
  Check,
  ShieldCheck,
  Zap,
  Split,
  Network
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface HybridConnectCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const HybridConnectCapabilities: React.FC<HybridConnectCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'transmission' | 'security'>('all');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE CAPABILITIES & SPEC SHEET' : 'TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET',
    headline: isLaos 
      ? 'Infrastructure Capabilities & Technical Features' 
      : 'Năng Lực Hạ Tầng & Tính Năng Kỹ Thuật Viettel Hybrid Connect',
    tabAll: isLaos ? 'All Core Capabilities' : 'Tất Cả Tính Năng',
    tabTransmission: isLaos ? 'Transmission & Bandwidth' : 'Truyền Dẫn & Băng Thông',
    tabSecurity: isLaos ? 'Security & Topologies' : 'Bảo Mật & Kiến Trúc',
    specSheetTitle: isLaos 
      ? 'Standard Technical Specification Sheet (Technical Spec Sheet)' 
      : 'Bảng Thông Số Kỹ Thuật Tiêu Chuẩn (Technical Spec Sheet)',
    specCriteria: isLaos ? 'Technical Criteria' : 'Tiêu Chí Kỹ Thuật',
    specDetails: isLaos ? 'Viettel Hybrid Connect Standard Details' : 'Chi Tiết Tiêu Chuẩn Viettel Hybrid Connect',
  };

  const coreFeatures = [
    {
      icon: Cable,
      category: 'transmission',
      title: isLaos ? 'Dedicated Link' : 'Kết Nối Chuyên Biệt (Dedicated Link)',
      desc: isLaos
        ? 'Private, trusted end-to-end transmission from office to Cloud, between services in the same or different data centers.'
        : 'Đường truyền riêng tư, End-to-End tin cậy từ văn phòng đến Cloud, giữa các dịch vụ trong cùng một hoặc khác trung tâm dữ liệu.',
    },
    {
      icon: Cpu,
      category: 'transmission',
      title: isLaos ? 'High-Speed Port Interfaces' : 'Giao Diện Cổng Tốc Độ Cao',
      desc: isLaos
        ? 'Flexible 1 Gbps and 10 Gbps physical optical interfaces, effortlessly integrating into enterprise core switches and routers.'
        : 'Cung cấp cổng vật lý linh hoạt 1 Gbps và 10 Gbps, dễ dàng đấu nối vào hệ thống Switch/Router lõi của doanh nghiệp.',
    },
    {
      icon: Layers,
      category: 'transmission',
      title: isLaos ? 'Granular & Broad Bandwidth' : 'Băng Thông Đa Dạng',
      desc: isLaos
        ? 'Broad committed bandwidth options from 100 Mbps to 10 Gbps (with fine increments of 10M, 20M, 50M) matching exact workload demand.'
        : 'Tùy chọn dải băng thông cam kết rộng từ 100 Mbps tới 10 Gbps (hỗ trợ các mức tinh chỉnh 10M, 20M, 50M...), đáp ứng sát nhu cầu thực tế.',
    },
    {
      icon: ShieldAlert,
      category: 'security',
      title: isLaos ? 'Anti-MAC Spoofing Security' : 'Bảo Mật Chống Giả Mạo MAC',
      desc: isLaos
        ? 'Integrated advanced security filtering against Layer 2 MAC spoofing attacks, protecting the integrity of private data links.'
        : 'Tích hợp tính năng bảo mật nâng cao, ngăn chặn nguy cơ tấn công giả mạo địa chỉ MAC (MAC spoofing) trên tầng liên kết dữ liệu.',
    },
    {
      icon: Workflow,
      category: 'security',
      title: isLaos ? 'Multi-Service Cloud Interconnect' : 'Kết Nối Multi-Service',
      desc: isLaos
        ? 'Interconnect multiple cloud services within Viettel IDC ecosystem across the same or disparate geographical regions.'
        : 'Liên kết đa dịch vụ trong hệ sinh thái Cloud của Viettel IDC trong cùng một vùng hoặc khác vùng địa lý.',
    },
    {
      icon: Cloud,
      category: 'security',
      title: isLaos ? 'Multi-Cloud Ready Network' : 'Kết Nối Multi-Cloud Sẵn Sàng',
      desc: isLaos
        ? 'Carrier-neutral expansion across domestic telcos with ready routing to global Public Clouds (AWS, Azure, Google Cloud).'
        : 'Mở rộng linh hoạt tới nhiều nhà cung cấp viễn thông trong nước và sẵn sàng định tuyến đến các nền tảng Public Cloud quốc tế.',
    },
  ];

  const filteredFeatures = activeTab === 'all'
    ? coreFeatures
    : coreFeatures.filter((f) => f.category === activeTab);

  const technicalSpecs = [
    {
      criteria: isLaos ? 'Port Interface' : 'Giao diện cổng đấu nối (Port Interface)',
      detail: '1 Gbps / 10 Gbps (SFP / SFP+)',
    },
    {
      criteria: isLaos ? 'Committed Bandwidth' : 'Dải băng thông cung cấp (Bandwidth)',
      detail: isLaos
        ? 'From 100 Mbps up to 10 Gbps (with granular options: 10 Mbps, 20 Mbps, 50 Mbps...)'
        : 'Từ 100 Mbps đến 10 Gbps (Có tùy chọn mức nhỏ: 10 Mbps, 20 Mbps, 50 Mbps...)',
    },
    {
      criteria: isLaos ? 'Transmission Methods' : 'Phương thức truyền dẫn',
      detail: isLaos
        ? 'Layer 1 (Direct Point-to-Point Optical Fiber), Layer 2 / Layer 3 (MPLS VPN, Intra-DC Cross-connect)'
        : 'Layer 1 (Cáp quang trắng Point-to-Point), Layer 2 / Layer 3 (MPLS VPN, Cross-connect)',
    },
    {
      criteria: isLaos ? 'Network Topologies' : 'Mô hình kiến trúc mạng',
      detail: isLaos
        ? 'Point-to-Point, Hub-and-Spoke, Full-Mesh multi-site'
        : 'Điểm - Điểm (Point-to-Point), Điểm - Đa điểm (Hub-and-Spoke), Full-Mesh',
    },
    {
      criteria: isLaos ? 'Network Security Features' : 'Tính năng an toàn mạng',
      detail: isLaos
        ? 'Anti-MAC Spoofing, dedicated private channel cryptographic isolation'
        : 'Chống giả mạo MAC (Anti-MAC Spoofing), cô lập dữ liệu kênh riêng biệt',
    },
    {
      criteria: isLaos ? 'Supported Telco Carriers (ISP)' : 'Nhà mạng (ISP) hỗ trợ',
      detail: 'Viettel, VNPT, FPT, CMC và các nhà cung cấp viễn thông hàng đầu',
    },
    {
      criteria: isLaos ? 'Viettel Cloud Service Compatibility' : 'Khả năng tương thích dịch vụ',
      detail: 'vCS, vVPC, vDPC, vCG (Cloud GPU), Cloud Camera, Cloud Object/File Storage',
    },
    {
      criteria: isLaos ? 'High Availability (HA) Models' : 'Mô hình sẵn sàng cao (HA)',
      detail: isLaos
        ? 'Supports Active/Standby automatic failover or Active/Active parallel load-sharing'
        : 'Hỗ trợ cấu hình đường truyền Active/Standby hoặc Active/Active chạy song song',
    },
  ];

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto no-scrollbar pb-1">
          <VIDCNativeButton
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[40px] whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.tabAll}
          </VIDCNativeButton>
          <VIDCNativeButton
            type="button"
            onClick={() => setActiveTab('transmission')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[40px] whitespace-nowrap ${
              activeTab === 'transmission'
                ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.tabTransmission}
          </VIDCNativeButton>
          <VIDCNativeButton
            type="button"
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[40px] whitespace-nowrap ${
              activeTab === 'security'
                ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.tabSecurity}
          </VIDCNativeButton>
        </div>

        {/* Grid Card Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredFeatures.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-3 hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>

                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bảng Thông Số Kỹ Thuật Tiêu Chuẩn (Technical Spec Sheet) */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
              {t.specSheetTitle}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 w-1/3">{t.specCriteria}</th>
                  <th className="py-3 px-4">{t.specDetails}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70">
                {technicalSpecs.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-white/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-800">
                      {spec.criteria}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{spec.detail}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
