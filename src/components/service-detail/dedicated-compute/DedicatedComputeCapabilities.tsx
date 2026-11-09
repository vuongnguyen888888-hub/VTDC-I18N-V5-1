import React, { useState } from 'react';
import { HardDrive, ShieldCheck, Server, CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface DedicatedComputeCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const DedicatedComputeCapabilities: React.FC<DedicatedComputeCapabilitiesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';
  const [activeTab, setActiveTab] = useState<'hardware' | 'security' | 'network'>('hardware');

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos 
      ? 'Superior Dedicated Hardware Features & Enterprise Operations' 
      : 'Tính năng hạ tầng & Năng lực vận hành phần cứng vượt trội',
  };

  const tabs = [
    { id: 'hardware', label: isLaos ? 'Hardware & Performance' : 'Hạ tầng & Phần cứng', icon: HardDrive },
    { id: 'security', label: isLaos ? 'Administration & Security' : 'Quản trị & An toàn', icon: ShieldCheck },
    { id: 'network', label: isLaos ? 'Network & Data Center' : 'Mạng & Trung tâm Dữ liệu', icon: Server },
  ];

  const tabContents = {
    hardware: [
      {
        title: isLaos ? '100% Genuine Imported Hardware' : 'Phần cứng nhập khẩu 100% chính hãng',
        desc: isLaos 
          ? 'Equipped with original enterprise server systems from Dell Technologies, HPE ProLiant, and Supermicro with genuine spare part replacement.'
          : 'Trang bị máy chủ đồng bộ nguyên chiếc từ Dell Technologies, HPE ProLiant và Supermicro với cam kết linh kiện thay thế chính hãng.',
      },
      {
        title: isLaos ? 'Extreme Single & Multi-Socket CPUs' : 'Bộ vi xử lý hiệu năng cao đa luồng',
        desc: isLaos 
          ? 'Utilizing latest Intel Xeon Scalable and AMD EPYC processors, providing unmatched compute power for heavy enterprise computational loads.'
          : 'Tích hợp các dòng vi xử lý Intel Xeon Scalable và AMD EPYC thế hệ mới, đáp ứng tối đa nhu cầu tính toán hiệu năng cao và xử lý dữ liệu lớn.',
      },
      {
        title: isLaos ? 'Enterprise SSD & NVMe Storage' : 'Lưu trữ Enterprise SSD & NVMe tốc độ cao',
        desc: isLaos 
          ? 'High-speed SAS/SATA SSD and PCIe NVMe solid-state storage with hardware RAID controllers ensuring extreme IOPS and continuous data availability.'
          : 'Hệ thống ổ đĩa Enterprise SSD và NVMe kết hợp card RAID phần cứng chuyên dụng, mang lại tốc độ truy xuất IOPS vượt trội và bảo vệ dữ liệu tối đa.',
      },
    ],
    security: [
      {
        title: isLaos ? 'Full Root / Administrator Privileges' : 'Toàn quyền kiểm soát cao nhất (Root/Admin)',
        desc: isLaos 
          ? 'Customers receive complete administrative privileges to configure OS kernels, build custom software stacks, and control access permissions.'
          : 'Bàn giao tài khoản quản trị cấp cao nhất, cho phép doanh nghiệp tự do cài đặt hệ điều hành, phân quyền người dùng và thiết lập kiến trúc phần mềm.',
      },
      {
        title: isLaos ? 'IPMI / iDRAC / iLO Out-of-Band Management' : 'Quản trị từ xa qua iDRAC / iLO / IPMI',
        desc: isLaos 
          ? 'Hardware-level remote management interfaces allow full server console access, rebooting, BIOS configuration, and OS re-installation anywhere.'
          : 'Hỗ trợ giao diện quản trị phần cứng độc lập, cho phép khởi động lại, cài đặt OS và theo dõi trạng thái phần cứng từ xa theo thời gian thực.',
      },
      {
        title: isLaos ? 'Completely Isolated Environment' : 'Môi trường vật lý cách ly độc lập',
        desc: isLaos 
          ? 'Physical hardware is 100% reserved for your enterprise, completely eliminating shared multi-tenant vulnerabilities or resource contention.'
          : 'Toàn bộ máy chủ vật lý được dành riêng cho doanh nghiệp của bạn, loại bỏ hoàn toàn các rủi ro bảo mật do chia sẻ môi trường đa người dùng.',
      },
    ],
    network: [
      {
        title: isLaos ? 'TIA-942 Rated 3 Certified DC Facilities' : 'Hệ thống Data Center chuẩn TIA-942 Rated 3',
        desc: isLaos 
          ? 'Servers reside in world-class data centers with 2N electrical redundancy, precision chillers, and automated environmental monitoring.'
          : 'Đặt tại hệ thống Trung tâm Dữ liệu chuẩn quốc tế TIA-942 Rated 3 của Viettel IDC với nguồn điện dự phòng 2N, điều hòa chính xác và PCCC chuẩn quốc tế.',
      },
      {
        title: isLaos ? 'High-Speed Multi-Carrier Backbone' : 'Kết nối mạng lõi đa hướng tốc độ cao',
        desc: isLaos 
          ? 'Direct multi-10Gbps fiber connectivity into national and international core backbones, ensuring ultra-low latency and uninterrupted uptime.'
          : 'Đấu nối trực tiếp vào mạng trục truyền dẫn quốc gia và quốc tế của Viettel, cam kết độ trễ cực thấp và băng thông rộng không giới hạn.',
      },
      {
        title: isLaos ? '24/7/365 On-Site Technical Support' : 'Hỗ trợ kỹ thuật tại chỗ 24/7/365',
        desc: isLaos 
          ? 'Expert engineers stationed round-the-clock at data center facilities, ensuring immediate hardware diagnostic and fast component replacement.'
          : 'Đội ngũ kỹ sư túc trực 24/7 tại phòng máy, sẵn sàng kiểm tra, xử lý sự cố phần cứng và thay thế linh kiện dự phòng ngay lập tức.',
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

        {/* Active Tab Content Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tabContents[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-red-200 transition-colors"
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
