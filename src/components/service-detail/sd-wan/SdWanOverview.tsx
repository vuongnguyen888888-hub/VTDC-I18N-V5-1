import React from 'react';
import { Network, Activity, Cpu, LayoutDashboard, Play, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface SdWanOverviewProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const SdWanOverview: React.FC<SdWanOverviewProps> = ({ currentMarket, onOpenConsult }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos
      ? 'Overview of Viettel SD-WAN Software-Defined Wide Area Network Solution'
      : 'Tổng Quan Về Giải Pháp Mạng Diện Rộng Ảo Viettel SD-WAN',
    paragraph: isLaos
      ? 'Viettel SD-WAN is a breakthrough connectivity solution developed by Viettel IDC, enabling organizations and enterprises to establish high-performance, flexible, and secure software-defined wide area networks. By virtualizing diverse transport links such as MPLS, broadband Internet (FTTH), and cellular (4G/5G/LTE) into a unified Resource Pool, the solution maximizes available bandwidth, partially or fully replaces costly MPLS channels while maintaining enterprise-grade reliability. It is uniquely tailored for distributed branch networks and cloud-first applications.'
      : 'Viettel SD-WAN là dịch vụ do Viettel IDC phát triển, hỗ trợ các tổ chức và doanh nghiệp thiết lập mạng diện rộng ảo (WAN) hiệu năng cao, linh hoạt và bảo mật. Bằng cách ảo hóa các dịch vụ truyền dẫn như MPLS, Internet băng rộng (FTTH) và mạng di động (4G/5G/LTE) thành một kho tài nguyên chung (Resource Pool), hệ thống cho phép tận dụng tối đa băng thông sẵn có, thay thế một phần hoặc toàn bộ kênh truyền MPLS đắt đỏ mà vẫn đảm bảo hiệu năng tương đương WAN truyền thống. Giải pháp đặc biệt tối ưu cho doanh nghiệp phân tán nhiều chi nhánh và sử dụng nhiều ứng dụng trên nền tảng điện toán đám mây.',
    highlight1Title: isLaos ? 'Carrier-Neutral & ISP Agnostic' : 'Độc Lập Nhà Cung Cấp Viễn Thông',
    highlight1Desc: isLaos
      ? 'Establish software-controlled virtual WAN links completely decoupled from physical underlying telecom carriers.'
      : 'Thiết lập mạng WAN ảo điều khiển bằng phần mềm, độc lập hoàn toàn với nhà cung cấp dịch vụ viễn thông (ISP-agnostic).',
    highlight2Title: isLaos ? 'Continuous Link Telemetry & Auto-Routing' : 'Định Tuyến & Giám Sát Tự Động',
    highlight2Desc: isLaos
      ? 'Continuous telemetry on jitter, latency, and packet loss, dynamically steering traffic over the best active path.'
      : 'Cơ chế giám sát chất lượng kênh truyền liên tục, tự động định tuyến gói tin theo đường truyền tối ưu nhất.',
    highlight3Title: isLaos ? 'Smart Caching & Data Compression' : 'Tăng Tốc Ứng Dụng (WAN Optimization)',
    highlight3Desc: isLaos
      ? 'Intelligent caching and compression accelerate cloud and on-prem application responsiveness for all remote branch users.'
      : 'Caching thông minh và nén dữ liệu giúp tăng tốc truy cập ứng dụng cho người dùng tại các chi nhánh.',
    highlight4Title: isLaos ? 'Centralized Single-Pane-of-Glass Management' : 'Quản Trị Tập Trung Hóa',
    highlight4Desc: isLaos
      ? 'Distribute routing policies, security configurations, and live monitoring from a unified central dashboard.'
      : 'Quản trị, phân bổ chính sách định tuyến và giám sát vận hành tập trung trên một giao diện thống nhất.',
    videoBadge: isLaos ? 'SD-WAN Architectural Overview' : 'Kiến Trúc Mạng Viettel SD-WAN',
    videoSub: isLaos ? 'Watch 2-minute architectural explanation' : 'Xem mô phỏng nguyên lý hoạt động 2 phút',
  };

  const highlights = [
    {
      icon: Network,
      title: t.highlight1Title,
      desc: t.highlight1Desc,
    },
    {
      icon: Activity,
      title: t.highlight2Title,
      desc: t.highlight2Desc,
    },
    {
      icon: Cpu,
      title: t.highlight3Title,
      desc: t.highlight3Desc,
    },
    {
      icon: LayoutDashboard,
      title: t.highlight4Title,
      desc: t.highlight4Desc,
    },
  ];

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* 2 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Solution Narrative & 4 Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
              {t.paragraph}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-[var(--vidc-color-brand-red)]/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 16:9 Architecture Visual / Video Simulation */}
          <div className="lg:col-span-5">
            <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border border-slate-700/80 shadow-xl overflow-hidden flex flex-col justify-between p-6 text-white group">
              {/* Background Network Graphic Overlay */}
              <div 
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(238, 0, 51, 0.4) 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }}
              />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-1 rounded-md bg-white/10 text-slate-200 border border-white/15 backdrop-blur-xs">
                  {t.videoBadge}
                </span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--vidc-color-brand-red)]" />
                </span>
              </div>

              {/* Center Play Button Graphic */}
              <div className="relative z-10 my-auto text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--vidc-color-brand-red)] text-white shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  {t.videoSub}
                </div>
              </div>

              {/* Bottom Specs Bar */}
              <div className="relative z-10 pt-3 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Central Orchestrator Cloud</span>
                </span>
                <span className="text-slate-300 font-mono">100% Zero-Touch Prov</span>
              </div>
            </div>

            {/* Sub-card summary */}
            <div className="mt-4 p-4 rounded-xl bg-red-50/70 border border-red-100 flex items-center justify-between">
              <div className="text-xs text-slate-700">
                <strong className="text-slate-900 block font-bold">Cần tư vấn kiến trúc SD-WAN thực tế?</strong>
                Khảo sát hạ tầng và thiết kế topology miễn phí.
              </div>
              <VIDCNativeButton
                type="button"
                onClick={onOpenConsult}
                className="shrink-0 text-xs font-extrabold text-[var(--vidc-color-brand-red)] hover:underline flex items-center gap-1"
              >
                <span>Đăng ký ngay</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </VIDCNativeButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
