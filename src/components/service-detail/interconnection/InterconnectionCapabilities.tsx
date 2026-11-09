import React, { useState } from 'react';
import { Cable, Cpu, ShieldCheck, CheckCircle2, Share2, Network } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface InterconnectionCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const InterconnectionCapabilities: React.FC<InterconnectionCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'infrastructure' | 'routing' | 'security'>('infrastructure');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos 
      ? 'Outstanding Infrastructure Features & Technology'
      : 'Tính năng hạ tầng & Công nghệ vượt trội',
  };

  const tabs = [
    { id: 'infrastructure', label: isLaos ? 'Fiber Infrastructure & Bandwidth' : 'Hạ tầng & Cáp quang', icon: Cable },
    { id: 'routing', label: isLaos ? 'Routing, BGP & Protocols' : 'Định tuyến & BGP', icon: Network },
    { id: 'security', label: isLaos ? 'Security & Carrier-Neutral' : 'An toàn & Trung lập', icon: ShieldCheck },
  ];

  const tabContents = {
    infrastructure: [
      {
        title: isLaos ? '100% Dedicated Bandwidth' : 'Băng thông riêng biệt 100%',
        desc: isLaos
          ? 'Fully isolated optical transmission channels with zero bandwidth sharing, ensuring lowest latency for Voice, VPN, and real-time workloads.'
          : 'Thiết lập đường truyền độc lập, không chia sẻ lưu lượng, đảm bảo độ trễ thấp nhất cho các dịch vụ Thoại, VPN và ứng dụng thời gian thực.',
      },
      {
        title: isLaos ? 'Rated 3 - TIA-942 Data Centers' : 'TTDL chuẩn quốc tế Rated 3',
        desc: isLaos
          ? 'Operating across 5 modern enterprise Data Centers nationwide certified to Rated 3 - TIA-942 with N+1 power backups and precision climate control.'
          : 'Vận hành trên nền tảng 5 Trung tâm dữ liệu đạt chuẩn Rated 3 - TIA-942 với nguồn điện dự phòng và điều hòa chuẩn hóa.',
      },
      {
        title: isLaos ? 'Elastic 1 Gbps – 10 Gbps+ Scaling' : 'Mở rộng linh hoạt 1 – 10 Gbps+',
        desc: isLaos
          ? 'Flexible optical transceiver optics supporting rapid capacity scaling on demand from 1 Gbps to 10 Gbps and 100 Gbps.'
          : 'Khả năng nâng cấp dung lượng kênh quang nhanh chóng từ 1 Gbps lên 10 Gbps và 100 Gbps theo nhu cầu thực tế.',
      },
    ],
    routing: [
      {
        title: isLaos ? 'Carrier-grade Direct IP Transit' : 'Cổng IP Transit cấp nhà mạng',
        desc: isLaos
          ? 'Tier-1 direct carrier-grade Internet gateway routing with multi-homed BGP peering for domestic and global traffic.'
          : 'Cổng kết nối Internet cấp nhà mạng trực tiếp trong nước & quốc tế với định tuyến BGP đa hướng tối ưu.',
      },
      {
        title: isLaos ? 'Multi-Protocol L2/L3 & VPN Routing' : 'Hỗ trợ giao thức đa tầng L2/L3',
        desc: isLaos
          ? 'Comprehensive support for Layer 2 VLAN tagging, Layer 3 dynamic routing, MPLS-VPN, and site-to-site encrypted tunneling.'
          : 'Hỗ trợ toàn diện định tuyến tĩnh/động L2/L3, phân bổ VLAN riêng, MPLS-VPN và đường hầm bảo mật đa điểm.',
      },
      {
        title: isLaos ? 'Submarine Cable International Reach' : 'Hạ tầng kết nối quốc tế IPLC',
        desc: isLaos
          ? 'Connecting domestic branches with global corporate headquarters via resilient international submarine optical cable routes.'
          : 'Liên kết chi nhánh trong nước với văn phòng toàn cầu qua đa tuyến cáp quang biển với độ khả dụng SLA 99.95%.',
      },
    ],
    security: [
      {
        title: isLaos ? 'Carrier-Neutral Interconnection Policy' : 'Hạ tầng trung lập (Carrier-Neutral)',
        desc: isLaos
          ? 'Full support for cross-connects and Meet-Me-Room integration from all major telcos (Viettel, VNPT, FPT, CMC, etc.).'
          : 'Hỗ trợ kéo kênh và tích hợp hạ tầng của tất cả các nhà mạng lớn tại Việt Nam (Viettel, VNPT, FPT, CMC...).',
      },
      {
        title: isLaos ? 'Physical & Logical Cryptographic Isolation' : 'Bảo mật cô lập vật lý & logic',
        desc: isLaos
          ? 'End-to-end physical ODF security, CCTV surveillance, and dedicated VLAN isolation protecting sensitive corporate flows.'
          : 'Đường truyền được bảo vệ vật lý tại ODF và cô lập logic, kiểm soát nghiêm ngặt bằng hệ thống an ninh đa lớp.',
      },
      {
        title: isLaos ? '24/7/365 Dedicated NOC Engineers' : 'Giám sát chủ động 24/7/365',
        desc: isLaos
          ? 'Round-the-clock proactive monitoring, optical line attenuation testing, and rapid incident dispatch by specialized network engineers.'
          : 'Đội ngũ kỹ sư mạng chuyên trách hỗ trợ đo kiểm suy hao tuyến cáp, giám sát băng thông và xử lý sự cố 24/7/365.',
      },
    ],
  };

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered like CloudServerCapabilities) */}
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

        {/* Active Tab Content Cards Grid */}
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
