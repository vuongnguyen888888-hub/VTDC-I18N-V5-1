import React, { useState } from 'react';
import { HardDrive, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudConnectCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const CloudConnectCapabilities: React.FC<CloudConnectCapabilitiesProps> = ({
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [activeTab, setActiveTab] = useState<number>(0);

  const t = {
    eyebrow: isLaos ? 'KEY CAPABILITIES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos 
      ? 'Outstanding Connectivity Technologies & Infrastructure Features'
      : 'Tính Năng Kỹ Thuật & Công Nghệ Kết Nối Vượt Trội',
  };

  const tabs = [
    {
      id: 'bandwidth',
      name: isLaos ? 'Infrastructure & Bandwidth' : 'Hạ Tầng & Băng Thông',
      icon: HardDrive,
      items: [
        {
          title: isLaos ? 'Direct Hyperscale Cloud Interconnect' : 'Kết nối trực tiếp Hyperscale Cloud',
          desc: isLaos
            ? 'Native direct interconnect with AWS Direct Connect, Azure ExpressRoute, Google Cloud Interconnect, Alibaba Cloud.'
            : 'Định tuyến cáp quang trực tiếp tới các trạm PoP kết nối của AWS, Microsoft Azure, Google Cloud và Alibaba Cloud.',
        },
        {
          title: isLaos ? 'Scalable 50 Mbps - 100 Gbps+' : 'Băng thông linh hoạt 50 Mbps – 100 Gbps+',
          desc: isLaos
            ? 'Easily scale port capacity and virtual interface throughput quickly from 1 hour without service disruption.'
            : 'Mở rộng dung lượng kênh truyền nhanh chóng chỉ từ 1 giờ làm việc, không gián đoạn dịch vụ của doanh nghiệp.',
        },
        {
          title: isLaos ? 'Carrier-Grade Backbone Infrastructure' : 'Hạ tầng mạng trục chuẩn viễn thông',
          desc: isLaos
            ? 'Backed by Viettel IDC Tier 3 data centers with diverse routing paths and high redundancy.'
            : 'Vận hành trên nền tảng Data Center Tier 3 quốc tế và mạng cáp quang đa hướng ngầm hóa kiên cố.',
        },
      ],
    },
    {
      id: 'routing',
      name: isLaos ? 'L2/L3 Routing & Protocols' : 'Định Tuyến & Giao Thức L2/L3',
      icon: Cpu,
      items: [
        {
          title: isLaos ? 'Layer 2 & Layer 3 Flexible Support' : 'Hỗ trợ linh hoạt Layer 2 & Layer 3',
          desc: isLaos
            ? 'Flexible choice between Layer 2 VLAN/QinQ private circuits or Layer 3 BGP dynamic routing sessions.'
            : 'Doanh nghiệp chủ động lựa chọn kiến trúc Layer 2 (VLAN / QinQ) hoặc Layer 3 BGP Peering đa điểm.',
        },
        {
          title: isLaos ? 'Dual-Path HA Redundancy (1+1)' : 'Dự phòng kênh đôi 1+1 (High Availability)',
          desc: isLaos
            ? 'Active-Active or Active-Standby redundancy across separate physical devices and fiber routes.'
            : 'Cấu hình cổng kép độc lập trên hai thiết bị Switch/Router và hai tuyến cáp ngầm riêng biệt.',
        },
        {
          title: isLaos ? 'Jumbo Frames & MTU 9000' : 'Hỗ trợ Jumbo Frames & MTU 9000',
          desc: isLaos
            ? 'Optimize throughput for high-volume database replication and continuous big data streaming.'
            : 'Tối ưu hóa gói tin MTU kích thước lớn lên đến 9000 bytes, tăng tốc độ sao chép cơ sở dữ liệu lớn.',
        },
      ],
    },
    {
      id: 'security',
      name: isLaos ? 'Security & 24/7 Monitoring' : 'Bảo Mật & Quản Trị Giám Sát',
      icon: ShieldCheck,
      items: [
        {
          title: isLaos ? '100% Isolated Private Channel' : 'Kênh truyền riêng cô lập 100%',
          desc: isLaos
            ? 'Completely bypassed public Internet, shielding data against DDoS attacks, sniffing and packet loss.'
            : 'Tách biệt tuyệt đối khỏi Internet công cộng, loại trừ nguy cơ tấn công DDoS, nghe lén và mất mát gói tin.',
        },
        {
          title: isLaos ? 'Enterprise MACsec Encryption' : 'Bảo mật mã hóa đường truyền MACsec',
          desc: isLaos
            ? 'Hardware-level MACsec encryption ensuring data integrity and confidentiality at line rate.'
            : 'Hỗ trợ tiêu chuẩn mã hóa phần cứng MACsec bảo vệ tính toàn vẹn dữ liệu ở tốc độ cao nhất.',
        },
        {
          title: isLaos ? '24/7 Real-Time NOC/SOC Monitoring' : 'Giám sát chủ động 24/7 từ NOC/SOC',
          desc: isLaos
            ? 'Dedicated telecom engineers monitoring throughput, latency and packet metrics 24/7/365.'
            : 'Đội ngũ kỹ sư mạng Viettel IDC giám sát liên tục tình trạng đường truyền và cam kết hỗ trợ khẩn cấp.',
        },
      ],
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

        {/* Tab Selection Bar */}
        <div className="flex justify-center mb-12 overflow-x-auto no-scrollbar py-2">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {tabs.map((tab, idx) => {
              const IconComp = tab.icon;
              const isActive = activeTab === idx;
              return (
                <VIDCNativeButton
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{tab.name}</span>
                </VIDCNativeButton>
              );
            })}
          </div>
        </div>

        {/* Tab Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tabs[activeTab].items.map((item, iIdx) => (
            <div 
              key={iIdx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
