import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Cpu, 
  Activity, 
  CheckCircle2,
  Clock,
  Zap,
  BarChart3,
  Check
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface AntiDdosCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const AntiDdosCapabilities: React.FC<AntiDdosCapabilitiesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [activeTab, setActiveTab] = useState<'l4-defense' | 'technology' | 'management'>('l4-defense');

  const t = {
    eyebrow: isLaos ? 'OUTSTANDING FEATURES & SLA' : 'TÍNH NĂNG NỔI BẬT & SLA',
    headline: isLaos 
      ? 'Comprehensive Volumetric Defense & Deep Scrubbing Capabilities' 
      : 'Năng Lực Phòng Vệ Bão Mạng & Công Nghệ Lọc Lưu Lượng Sâu',
    tab1: isLaos ? 'L3/L4 Network Layer Defense' : 'Chống tấn công Tầng Mạng (L3/L4)',
    tab2: isLaos ? 'Scrubbing & BGP Flowspec Tech' : 'Công nghệ Lọc & BGP Flowspec',
    tab3: isLaos ? 'Real-Time Monitoring & Management' : 'Giám sát & Quản trị Real-time',
    slaTableTitle: isLaos ? 'SLA Service Quality Commitments' : 'Bảng Thông Số Cam Kết Kỹ Thuật (SLA)',
    metricCol: isLaos ? 'Technical Metric' : 'Chỉ số cam kết kỹ thuật',
    commitCol: isLaos ? 'Standard Commitment' : 'Nội dung cam kết tiêu chuẩn',
    statusCol: isLaos ? 'SLA Target' : 'Chỉ tiêu SLA',
  };

  const tabContents = {
    'l4-defense': [
      {
        title: isLaos ? 'Massive Volumetric Attack Mitigation' : 'Chống Tấn Công Volumetric Băng Thông Khủng',
        desc: isLaos 
          ? 'Eliminates pipe-saturating floods including UDP Flood, ICMP Flood, and IGMP flood scaling beyond 100 Gbps.'
          : 'Loại bỏ hoàn toàn các cuộc tấn công gây nghẽn kênh truyền internet như UDP Flood, ICMP Flood với quy mô trên 100 Gbps.',
      },
      {
        title: isLaos ? 'Advanced TCP Protocol Stack Defense' : 'Xử Lý Tấn Công Giao Thức TCP Nâng Cao',
        desc: isLaos 
          ? 'Neutralizes sophisticated connection exploits targeting the TCP stack: SYN Flood, FIN, RST, ACK, and SYN-ACK Flood.'
          : 'Triệt tiêu các hình thái tấn công giao thức kết nối TCP nguy hiểm như SYN Flood, FIN, RST, ACK, SYN-ACK Flood.',
      },
      {
        title: isLaos ? 'Reflection & Amplification Blocking' : 'Ngăn Chặn Reflection / Amplification',
        desc: isLaos 
          ? 'Intercepts high-multiplier amplification attacks abusing DNS, NTP, SSDP, SNMP, Memcached, Chargen, and mDNS.'
          : 'Chặn đứng các dạng tấn công khuếch đại lưu lượng phức tạp thông qua DNS, NTP, SSDP, SNMP, Memcached, Chargen, mDNS.',
      },
    ],
    'technology': [
      {
        title: isLaos ? 'Deep Packet Inspection (DPI) & ML' : 'Kiểm Tra Gói Tin Sâu (DPI) & Học Máy (ML)',
        desc: isLaos 
          ? 'Deeply analyzes packet payloads and profiles baseline traffic with behavioral Machine Learning algorithms.'
          : 'Phân tích sâu payload của từng gói tin và thiết lập baseline lưu lượng thông qua các thuật toán Học máy (Machine Learning).',
      },
      {
        title: isLaos ? 'Automated BGP Flowspec & RTBH' : 'Tự Động Hóa BGP Flowspec & RTBH',
        desc: isLaos 
          ? 'Directly communicates with Tier 1 edge routers to dynamically divert and isolate malicious flows without topology changes.'
          : 'Giao tiếp trực tiếp với router biên ISP để điều hướng và cô lập luồng tấn công tự động mà khách hàng không cần đổi IP hay topology.',
      },
      {
        title: isLaos ? 'Malformed & Fragmented Scrubbing' : 'Lọc Bỏ Gói Bất Thường (Malformed / Fragmented)',
        desc: isLaos 
          ? 'Automatically inspects, identifies, and discards Teardrop attacks, invalid TCP headers, and malformed fragments.'
          : 'Tự động phát hiện và loại bỏ các gói tin bị phân mảnh (Teardrop attack) cùng các gói tin có header bất thường (Invalid packet).',
      },
    ],
    'management': [
      {
        title: isLaos ? 'Real-Time Self-Service Portal' : 'Web Portal Quản Trị Thời Gian Thực',
        desc: isLaos 
          ? 'Intuitive web dashboard displaying live traffic graphs, current scrubbing status, and attack forensics.'
          : 'Giao diện bảng điều khiển trực quan theo dõi đồ thị lưu lượng theo thời gian thực, trạng thái lọc sạch và nguồn tấn công.',
      },
      {
        title: isLaos ? 'Instant Multi-Channel Alerts (< 5 Mins)' : 'Cảnh Báo Đa Kênh Tức Thì (< 5 Phút)',
        desc: isLaos 
          ? 'Automatically dispatches incident notifications via SMS and Email within 5 minutes of attack detection.'
          : 'Hệ thống tự động kích hoạt thông báo sự cố qua Email và SMS trong vòng 5 phút ngay khi phát hiện lưu lượng tấn công.',
      },
      {
        title: isLaos ? '24/7/365 Dedicated SOC Experts' : 'Đội Ngũ Chuyên Gia An Ninh Mạng 24/7/365',
        desc: isLaos 
          ? 'Viettel IDC Tier 3 cybersecurity engineers standing by 24/7 to analyze and counter coordinated zero-day cyber attacks.'
          : 'Đội ngũ chuyên gia an ninh mạng giàu kinh nghiệm của Viettel IDC túc trực 24/7 hỗ trợ phối hợp xử lý sự cố phức tạp.',
      },
    ],
  };

  const slaSpecs = [
    {
      metric: isLaos ? 'Detection & Automated Mitigation Latency' : 'Thời gian phát hiện & tự động xử lý',
      sla: isLaos ? 'Within 3 minutes of attack initiation' : 'Tối đa trong vòng 3 phút kể từ khi xuất hiện tấn công',
      target: '< 3 phút',
    },
    {
      metric: isLaos ? 'Incident Notification Dispatch Time' : 'Thời gian gửi cảnh báo (SMS/Email/Portal)',
      sla: isLaos ? 'Within 5 minutes of threat identification' : 'Tối đa trong vòng 5 phút kể từ khi kích hoạt',
      target: '< 5 phút',
    },
    {
      metric: isLaos ? 'Clean Traffic Scrubbing Efficiency' : 'Hiệu quả làm sạch (Clean Traffic Ratio)',
      sla: isLaos ? 'Minimum 95% legitimate clean traffic delivered to customer servers' : 'Tối thiểu 95% lưu lượng sạch được trả về máy chủ khách hàng',
      target: '≥ 95%',
    },
    {
      metric: isLaos ? 'Additional Packet Latency Overhead' : 'Độ trễ bổ sung khi qua trạm lọc (Latency Overhead)',
      sla: isLaos ? 'Strictly under 3 ms through Scrubbing Centers' : 'Dưới 3 ms khi gói tin đi qua trạm lọc Scrubbing Center',
      target: '< 3 ms',
    },
    {
      metric: isLaos ? 'Infrastructure Availability SLA' : 'Độ sẵn sàng hạ tầng (Uptime SLA)',
      sla: isLaos ? 'High availability continuous operation 24/7/365' : 'Hạ tầng hoạt động liên tục, cam kết ổn định 99.99%',
      target: '99.99%',
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
          <VIDCNativeButton
            type="button"
            onClick={() => setActiveTab('l4-defense')}
            className={`inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all min-h-[44px] cursor-pointer ${
              activeTab === 'l4-defense'
                ? 'border-[var(--vidc-color-brand-red)] text-[var(--vidc-color-brand-red)] bg-red-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>{t.tab1}</span>
          </VIDCNativeButton>

          <VIDCNativeButton
            type="button"
            onClick={() => setActiveTab('technology')}
            className={`inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all min-h-[44px] cursor-pointer ${
              activeTab === 'technology'
                ? 'border-[var(--vidc-color-brand-red)] text-[var(--vidc-color-brand-red)] bg-red-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>{t.tab2}</span>
          </VIDCNativeButton>

          <VIDCNativeButton
            type="button"
            onClick={() => setActiveTab('management')}
            className={`inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all min-h-[44px] cursor-pointer ${
              activeTab === 'management'
                ? 'border-[var(--vidc-color-brand-red)] text-[var(--vidc-color-brand-red)] bg-red-50/50'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>{t.tab3}</span>
          </VIDCNativeButton>
        </div>

        {/* Tab Content Cards (Grid 3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tabContents[activeTab].map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[var(--vidc-legacy-hex-222225)] leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* SLA Technical Commitment Table */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight">
              {t.slaTableTitle}
            </h3>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                    <th className="py-3.5 px-5">{t.metricCol}</th>
                    <th className="py-3.5 px-5">{t.commitCol}</th>
                    <th className="py-3.5 px-5 text-right">{t.statusCol}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {slaSpecs.map((spec, sIdx) => (
                    <tr key={sIdx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-5 font-bold text-slate-900">
                        {spec.metric}
                      </td>
                      <td className="py-3.5 px-5 text-slate-600 font-medium">
                        {spec.sla}
                      </td>
                      <td className="py-3.5 px-5 text-right">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/70">
                          {spec.target}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
