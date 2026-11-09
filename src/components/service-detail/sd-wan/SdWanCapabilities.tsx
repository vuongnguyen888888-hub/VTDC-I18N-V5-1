import React, { useState } from 'react';
import { 
  Network, 
  Zap, 
  Sliders, 
  RefreshCw, 
  Lock, 
  LayoutDashboard, 
  CheckCircle2, 
  Check 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface SdWanCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const SdWanCapabilities: React.FC<SdWanCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'routing' | 'security'>('all');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE CAPABILITIES & SPEC SHEET' : 'TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET',
    headline: isLaos
      ? 'Technology Capabilities & Technical Specification Sheet'
      : 'Năng Lực Công Nghệ & Thông Số Kỹ Thuật Viettel SD-WAN',
    tabAll: isLaos ? 'All Features' : 'Tất Cả Tính Năng',
    tabRouting: isLaos ? 'Routing & WAN Optimization' : 'Tối Ưu & Định Tuyến',
    tabSecurity: isLaos ? 'Security & Management' : 'Bảo Mật & Quản Trị',
    specSheetTitle: isLaos
      ? 'Standard Technical Specification Sheet'
      : 'Bảng Thông Số Kỹ Thuật Tiêu Chuẩn (Spec Sheet)',
    specCriteria: isLaos ? 'Technical Criteria' : 'Hạng Mục Kỹ Thuật',
    specDetails: isLaos ? 'Viettel SD-WAN Standard Details' : 'Chi Tiết Tiêu Chuẩn Viettel SD-WAN',
  };

  const coreFeatures = [
    {
      icon: Network,
      category: 'routing',
      title: isLaos ? 'Carrier-Independent Virtual WAN' : 'Thiết Lập WAN Ảo Độc Lập',
      desc: isLaos
        ? 'Virtualize multi-transport links (MPLS, FTTH Broadband, 4G/LTE) into a single Resource Pool, eliminating physical cable and ISP lock-in.'
        : 'Ảo hóa đa kênh truyền (MPLS, Internet FTTH, 4G/LTE) thành một kho tài nguyên mạng (Resource Pool), gỡ bỏ sự phụ thuộc vào loại cáp và nhà mạng cung cấp.',
    },
    {
      icon: Zap,
      category: 'routing',
      title: isLaos ? 'Application Performance Acceleration' : 'Tối Ưu Hóa Hiệu Suất Ứng Dụng',
      desc: isLaos
        ? 'Integrated smart caching for recently accessed content paired with data compression to accelerate web apps, ERP, and cloud responsiveness.'
        : 'Tích hợp bộ nhớ đệm (Cache) lưu trữ thông tin truy cập gần nhất, hỗ trợ nén dữ liệu giúp tăng tốc độ tải trang và phản hồi ứng dụng.',
    },
    {
      icon: Sliders,
      category: 'routing',
      title: isLaos ? 'App-Aware Traffic Steering & QoS' : 'Phân Luồng & Ưu Tiên Chất Lượng (QoS)',
      desc: isLaos
        ? 'Automatically recognizes business-critical workloads (ERP, Voice/Video, CRM) and allocates optimal bandwidth priority.'
        : 'Tự động nhận diện ứng dụng nghiệp vụ trọng yếu (ERP, Voice/Video, CRM) để ưu tiên phân bổ băng thông tốt nhất.',
    },
    {
      icon: RefreshCw,
      category: 'routing',
      title: isLaos ? 'Sub-Second Automatic Failover' : 'Chuyển Mạch Tự Động (Failover)',
      desc: isLaos
        ? 'Continuous telemetry measuring jitter, latency, and packet loss; automatically fails over to backup links without user interruption.'
        : 'Liên tục đo kiểm jitter, latency, packet loss; tự động chuyển sang đường truyền dự phòng khi có sự cố mà không gián đoạn kết nối.',
    },
    {
      icon: Lock,
      category: 'security',
      title: isLaos ? 'High-Grade IPsec Tunnel Security' : 'Bảo Mật Đường Truyền Bằng IPsec',
      desc: isLaos
        ? 'Encodes all traffic across public channels (Broadband/4G) with robust IPsec cryptographic tunnels (AES-256 / SHA-256).'
        : 'Mã hóa toàn bộ lưu lượng dữ liệu trên các kênh công cộng (Internet/4G) bằng đường hầm IPsec bảo mật cao cấp.',
    },
    {
      icon: LayoutDashboard,
      category: 'security',
      title: isLaos ? 'Centralized Orchestration & Live Monitoring' : 'Quản Trị & Giám Sát Tập Trung',
      desc: isLaos
        ? 'Single-pane-of-glass dashboard tracking real-time traffic health, raising instant incident alerts, and pushing configs to 100+ sites in seconds.'
        : 'Bảng điều khiển trực quan theo dõi toàn bộ trạng thái lưu lượng, cảnh báo sự cố thời gian thực và đẩy cấu hình xuống hàng trăm site chỉ trong vài giây.',
    },
  ];

  const filteredFeatures = activeTab === 'all'
    ? coreFeatures
    : coreFeatures.filter((f) => f.category === activeTab);

  const technicalSpecs = [
    {
      criteria: isLaos ? 'Supported Transport Infrastructure' : 'Hạ tầng truyền dẫn hỗ trợ',
      detail: isLaos
        ? 'MPLS, FTTH Fiber Broadband, 4G / LTE / 5G Mobile, Satellite'
        : 'MPLS, Cáp quang FTTH, Mạng di động 4G / LTE / 5G, Vệ tinh',
    },
    {
      criteria: isLaos ? 'Carrier Compatibility' : 'Khả năng tương thích ISP',
      detail: isLaos
        ? 'Carrier-Neutral (Open multi-carrier support: Viettel, VNPT, FPT, CMC...)'
        : 'Carrier-Neutral (Không giới hạn nhà mạng, hỗ trợ đa ISP Viettel, VNPT, FPT...)',
    },
    {
      criteria: isLaos ? 'Tunnel Encryption & Security Protocols' : 'Giao thức bảo mật kết nối',
      detail: 'IPsec VPN (AES-256 / SHA-256), SSL/TLS Encrypted Tunnels',
    },
    {
      criteria: isLaos ? 'Traffic Steering & Optimization' : 'Cơ chế điều phối lưu lượng',
      detail: 'Application-aware Routing, Dynamic Path Selection, Quality of Service (QoS)',
    },
    {
      criteria: isLaos ? 'WAN Optimization Engine' : 'Tối ưu hóa dữ liệu (WAN Optimization)',
      detail: isLaos
        ? 'Application Caching, Data Compression, Packet Loss Mitigation'
        : 'Bộ nhớ đệm (Application Caching), Nén dữ liệu, Chống mất gói tin',
    },
    {
      criteria: isLaos ? 'Central Management Portal' : 'Cổng quản trị hệ thống',
      detail: isLaos
        ? 'Cloud Centralized Orchestrator / Dashboard giám sát lưu lượng tập trung'
        : 'Cloud Centralized Orchestrator / Dashboard giám sát lưu lượng tập trung',
    },
    {
      criteria: isLaos ? 'Hardware / Appliance Form Factors' : 'Mô hình triển khai thiết bị',
      detail: isLaos
        ? 'Dedicated Hardware Appliances (CPE) or Virtualized Network Functions (vCPE)'
        : 'Thiết bị phần cứng chuyên dụng (CPE) hoặc Thiết bị ảo hóa (vCPE)',
    },
    {
      criteria: isLaos ? 'High Availability (HA) Commitments' : 'Cam kết độ sẵn sàng mạng',
      detail: isLaos
        ? 'Active/Active link pooling or Active/Standby sub-second failover'
        : 'Cơ chế Active/Active hoặc Active/Standby đảm bảo Uptime tối đa',
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
            onClick={() => setActiveTab('routing')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all min-h-[40px] whitespace-nowrap ${
              activeTab === 'routing'
                ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.tabRouting}
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

        {/* Grid 6 Card Features */}
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

        {/* Bảng Thông Số Kỹ Thuật Tiêu Chuẩn (Spec Sheet) */}
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
