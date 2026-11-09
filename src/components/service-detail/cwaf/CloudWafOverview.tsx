import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  BrainCircuit, 
  Globe2, 
  ArrowRight,
  Server,
  Lock,
  Zap,
  Users,
  AlertTriangle,
  Play,
  Network,
  Cpu,
  Layers,
  Sparkles,
  SlidersHorizontal,
  FileCode2,
  Filter
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudWafOverviewProps {
  currentMarket?: SEAMarket;
}

export const CloudWafOverview: React.FC<CloudWafOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [activeTab, setActiveTab] = useState<'flow' | 'modes' | 'video'>('flow');

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW & ARCHITECTURE' : 'TỔNG QUAN DỊCH VỤ & KIẾN TRÚC',
    headline: isLaos 
      ? 'Overview of Viettel Cloud WAF Architecture & Operation'
      : 'Tổng quan kiến trúc & cơ chế hoạt động của Viettel Cloud WAF',
    desc1: isLaos
      ? 'Viettel Cloud WAF (CWAF) is an enterprise cloud-based Web Application and API Firewall operating on a distributed intelligent Reverse Proxy architecture. The solution builds an impenetrable security perimeter, inspecting and sanitizing all inbound traffic before it can ever touch your origin infrastructure.'
      : 'Viettel Cloud WAF (CWAF) là giải pháp tường lửa bảo vệ ứng dụng Web và API trên nền tảng đám mây, vận hành theo mô hình Reverse Proxy thông minh kết hợp mạng lưới Anycast Edge phân tán. Dịch vụ thiết lập vành đai bảo mật chuyên sâu, chặn đứng các cuộc tấn công mạng khai thác lỗ hổng và bão mạng DDoS trước khi chạm tới máy chủ gốc.',
    desc2: isLaos
      ? 'Through seamless DNS CNAME redirection without server agents, incoming requests are routed through Viettel CWAF Edge nodes for TLS decryption, multi-layer behavioral inspection, automated bot mitigation, and AI-driven OWASP Top 10 threat blocking. This completely masks origin server IP addresses, accelerates page loading via edge caching, and guarantees 99.99% high availability.'
      : 'Thông qua cơ chế chuyển hướng bản ghi DNS (CNAME/A Record) nhanh gọn mà không cần cài đặt phần mềm trên máy chủ gốc (Agentless), toàn bộ lưu lượng truy cập Internet được phân tích bóc tách qua các tầng lọc chuyên sâu: giải mã SSL tại biên, phân tích hành vi AI/ML, quản trị Bot và ngăn chặn OWASP Top 10. Cơ chế này che giấu hoàn toàn địa chỉ IP thực của Origin Server, tích hợp bộ đệm CDN tăng tốc độ tải trang và cam kết độ sẵn sàng SLA 99.99%.',
    highlight1Title: isLaos ? 'Reverse Proxy & Complete Origin IP Shielding' : 'Cơ chế Reverse Proxy & Che giấu IP máy chủ gốc',
    highlight1Desc: isLaos 
      ? 'Quick 5-minute DNS CNAME deployment without agents. Origin server IPs are 100% hidden, eliminating direct network scans and bypass exploits.'
      : 'Khởi tạo triển khai chỉ trong 5 phút qua bản ghi DNS CNAME, không cần cài Agent. Che giấu 100% IP thực của máy chủ gốc, loại bỏ nguy cơ bị tấn công quét cổng và dò quét trực diện.',
    highlight2Title: isLaos ? 'AI/ML Threat Engine & Zero-Day Defense' : 'Động cơ học máy AI/ML & Phòng thủ Zero-day',
    highlight2Desc: isLaos 
      ? 'Continuously models normative application behaviors in real time, auto-synthesizing context-aware signatures with < 0.5ms latency and near-zero false alarms.'
      : 'Tự động học hành vi ứng dụng theo thời gian thực (Behavioral Profiling), tự động sinh Custom Rules theo ngữ cảnh để ngăn chặn tấn công Zero-day với độ trễ xử lý < 0.5ms và triệt tiêu cảnh báo giả.',
    highlight3Title: isLaos ? 'Dual Operating Modes (Monitoring vs Active Blocking)' : 'Chế độ vận hành kép (Monitoring vs Active Blocking)',
    highlight3Desc: isLaos 
      ? 'Easily switch between Monitoring Mode (passive inspection and baseline learning) and Active Blocking Mode (instant mitigation) for safe onboarding.'
      : 'Linh hoạt chuyển đổi giữa Chế độ Giám sát (Monitoring Mode - học hành vi, cảnh báo không gián đoạn) và Chế độ Bảo vệ Chủ động (Active Blocking Mode - chặn tức thì), đảm bảo an toàn tuyệt đối khi đưa vào vận hành.',
    tabFlow: isLaos ? 'Traffic Pipeline Flow' : 'Sơ đồ luồng hoạt động',
    tabModes: isLaos ? 'Operation Modes & Cutover' : 'Cơ chế vận hành & Chế độ',
    tabVideo: isLaos ? 'Solution Video' : 'Video giải pháp',
  };

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* 2 Cột Nội dung + Trực quan hóa Kiến trúc & Cơ chế hoạt động */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột Trái (Mô tả giải pháp & 3 Điểm Nhấn Công Nghệ Chuẩn Cloud Server) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 3 Key Highlights chuẩn Cloud Server */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-[var(--vidc-color-brand-red)] hover:shadow-xs transition-all">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight1Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight1Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-[var(--vidc-color-brand-red)] hover:shadow-xs transition-all">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight2Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight2Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-[var(--vidc-color-brand-red)] hover:shadow-xs transition-all">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight3Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight3Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cột Phải: Bộ Tabs tương tác trực quan hóa Kiến trúc & Cơ chế hoạt động */}
          <div className="lg:col-span-6">
            
            {/* Tab Controller Bar */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                {isLaos ? 'ARCHITECTURE & OPERATION PREVIEW' : 'TRỰC QUAN HÓA KIẾN TRÚC & CƠ CHẾ'}
              </span>
              <div className="inline-flex p-1 bg-slate-100 rounded-full text-[11px] font-bold">
                <VIDCNativeButton
                  type="button"
                  onClick={() => setActiveTab('flow')}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === 'flow'
                      ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.tabFlow}
                </VIDCNativeButton>
                <VIDCNativeButton
                  type="button"
                  onClick={() => setActiveTab('modes')}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === 'modes'
                      ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.tabModes}
                </VIDCNativeButton>
                <VIDCNativeButton
                  type="button"
                  onClick={() => setActiveTab('video')}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    activeTab === 'video'
                      ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.tabVideo}
                </VIDCNativeButton>
              </div>
            </div>

            {/* TAB 1: SƠ ĐỒ LUỒNG HOẠT ĐỘNG & BẢO VỆ ĐA LỚP */}
            {activeTab === 'flow' && (
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--vidc-legacy-hex-090d16)] text-white shadow-2xl border border-slate-800 relative overflow-hidden">
                {/* Subtle Background Glows */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

                {/* Top Status Bar */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                      {isLaos ? 'VIETTEL CWAF REVERSE PROXY PIPELINE' : 'LUỒNG XỬ LÝ REVERSE PROXY ĐA TẦNG'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/30 font-bold">
                    15 TBPS SCRUBBING
                  </span>
                </div>

                {/* Pipeline Flow Stages */}
                <div className="space-y-3 text-xs">
                  
                  {/* STAGE 1: Internet Traffic (Người dùng & Tấn công) */}
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span className="font-bold text-white text-xs">
                          {isLaos ? '1. Inbound Internet Traffic' : '1. Lưu Lượng Truy Cập Internet Đến Tên Miền'}
                        </span>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-700/60 text-slate-300 font-mono">
                        Port 80 / 443
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-1.5 rounded-lg bg-blue-950/40 border border-blue-800/40 flex items-center gap-1.5 text-blue-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>Người dùng thật (Web/App/API)</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-red-950/40 border border-red-800/40 flex items-center gap-1.5 text-red-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span>Kẻ tấn công, Botnet & DDoS</span>
                      </div>
                    </div>
                  </div>

                  {/* Connector: DNS CNAME Redirection */}
                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-mono">
                    <span>↓</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                      DNS CNAME Redirection (Anycast Routing)
                    </span>
                    <span>↓</span>
                  </div>

                  {/* STAGE 2: Viettel Cloud WAF Edge Core Engine */}
                  <div className="p-3.5 rounded-xl bg-gradient-to-br from-red-950/50 via-slate-800/90 to-slate-900 border-2 border-red-500/40 shadow-lg space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[var(--vidc-color-brand-red)] text-white flex items-center justify-center shadow-md">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-extrabold text-white text-xs flex items-center gap-1.5">
                            <span>2. VIETTEL CLOUD WAF GATEWAY</span>
                            <span className="text-[9px] px-1.5 py-0.2 rounded bg-red-500/20 text-red-300 font-mono font-bold">
                              REVERSE PROXY
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-300">
                            Giải mã SSL/TLS tại biên • Lọc đa tầng với độ trễ &lt; 0.5ms
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5 Inspection Filters Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-1 text-[10px]">
                      <div className="p-1.5 rounded bg-slate-900/90 border border-slate-700/80 text-center font-medium text-slate-200">
                        Anti-DDoS L3/L4/L7
                      </div>
                      <div className="p-1.5 rounded bg-slate-900/90 border border-slate-700/80 text-center font-medium text-slate-200">
                        OWASP Top 10 Core
                      </div>
                      <div className="p-1.5 rounded bg-slate-900/90 border border-slate-700/80 text-center font-medium text-slate-200">
                        AI/ML Zero-Day Engine
                      </div>
                      <div className="p-1.5 rounded bg-slate-900/90 border border-slate-700/80 text-center font-medium text-slate-200">
                        Bot Management
                      </div>
                      <div className="p-1.5 rounded bg-slate-900/90 border border-slate-700/80 text-center font-medium text-slate-200">
                        API Security &amp; Discovery
                      </div>
                      <div className="p-1.5 rounded bg-slate-900/90 border border-slate-700/80 text-center font-medium text-slate-200">
                        CDN Edge Caching
                      </div>
                    </div>
                  </div>

                  {/* Split Path: Blocked vs Clean Forwarding */}
                  <div className="grid grid-cols-2 gap-2 pt-0.5 text-[11px]">
                    
                    {/* Branch A: Dropped / Challenged */}
                    <div className="p-2.5 rounded-xl bg-red-950/30 border border-red-500/30 space-y-1">
                      <div className="flex items-center gap-1.5 text-red-400 font-bold text-[11px]">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                        <span>Tấn công bị chặn</span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-tight">
                        Tự động Drop / Block 403 / CAPTCHA tại biên. Ghi log SIEM &amp; cảnh báo SOC ERT 24/7.
                      </p>
                    </div>

                    {/* Branch B: 100% Clean Forwarded */}
                    <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-1">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                        <Zap className="w-3.5 h-3.5 shrink-0" />
                        <span>Lưu lượng sạch 100%</span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-tight">
                        Chuyển tiếp qua Reverse Proxy bảo mật; Static assets trả thẳng từ bộ nhớ đệm CDN.
                      </p>
                    </div>

                  </div>

                  {/* STAGE 3: Protected Origin Server (Hạ tầng Máy chủ gốc) */}
                  <div className="p-3 rounded-xl bg-slate-800/90 border border-emerald-500/40 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs flex items-center gap-1.5">
                          <span>3. Máy Chủ Web &amp; API Gốc (Origin Servers)</span>
                          <Lock className="w-3 h-3 text-emerald-400" />
                        </div>
                        <div className="text-[10px] text-slate-400">
                          Viettel Cloud Server / On-Premise / Multi-Cloud • IP gốc được che giấu 100%
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                      PROTECTED
                    </span>
                  </div>

                </div>

                {/* Footer Specs in Diagram */}
                <div className="mt-3.5 pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div>
                    <span className="text-slate-400 block">Độ trễ lọc gói</span>
                    <span className="font-bold text-emerald-400 text-xs mt-0.5 block">&lt; 0.5ms</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Công suất Scrubbing</span>
                    <span className="font-bold text-white text-xs mt-0.5 block">15 Tbps</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Cam kết Uptime</span>
                    <span className="font-bold text-red-400 text-xs mt-0.5 block">SLA 99.99%</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CƠ CHẾ VẬN HÀNH & CHẾ ĐỘ TRIỂN KHAI */}
            {activeTab === 'modes' && (
              <div className="p-5 sm:p-6 rounded-2xl bg-[var(--vidc-legacy-hex-090d16)] text-white shadow-2xl border border-slate-800 space-y-4">
                
                <div className="border-b border-slate-800/80 pb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
                    <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                      {isLaos ? 'OPERATING MODES & DEPLOYMENT' : 'CƠ CHẾ VẬN HÀNH & TRIỂN KHAI'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    ZERO DOWNTIME
                  </span>
                </div>

                {/* 2 Chế độ hoạt động */}
                <div className="space-y-3">
                  
                  {/* Mode 1: Monitoring Mode */}
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-amber-500/30 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="font-bold text-xs text-amber-300">
                          Chế độ Giám sát (Monitoring / Detection Mode)
                        </span>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                        LOG ONLY
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                      Hệ thống ghi nhận và phân tích toàn bộ lưu lượng, gửi cảnh báo khi phát hiện bất thường nhưng <strong>KHÔNG chặn</strong> (No Block). Giai đoạn này giúp thuật toán AI tự học hành vi chuẩn của website trong 24–48h và giúp chuyên gia tinh chỉnh bộ luật (Rule Tuning) an toàn tuyệt đối.
                    </p>
                  </div>

                  {/* Mode 2: Active Blocking Mode */}
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-emerald-500/30 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="font-bold text-xs text-emerald-300">
                          Chế độ Bảo vệ Chủ động (Active Blocking / Protection Mode)
                        </span>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                        ACTIVE DEFENSE
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                      Kích hoạt chặn tức thời (Instant Block / Drop / CAPTCHA Challenge) đối với mọi truy vấn vi phạm quy tắc WAF, mã độc, Bot nguy hại hoặc bão mạng DDoS. Bảo vệ 24/7/365 toàn vẹn máy chủ web và dữ liệu doanh nghiệp.
                    </p>
                  </div>

                </div>

                {/* 3 Bước Kích Hoạt DNS CNAME */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="text-[11px] font-bold text-slate-200 flex items-center gap-1.5">
                    <FileCode2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Quy trình 3 bước kích hoạt dịch vụ (Zero Downtime)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[10px]">
                    <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-white block mb-0.5">Bước 1: Khai báo</strong>
                      <span className="text-slate-400">Đăng ký domain và IP máy chủ gốc lên WAF Portal</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-white block mb-0.5">Bước 2: Trỏ CNAME</strong>
                      <span className="text-slate-400">Chuyển hướng bản ghi DNS về mạng lưới Viettel WAF</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/60">
                      <strong className="text-white block mb-0.5">Bước 3: Bảo vệ</strong>
                      <span className="text-slate-400">Lưu lượng tự động được lọc sạch, bảo vệ tức thì</span>
                    </div>
                  </div>
                </div>

                {/* Origin IP Whitelist Note */}
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Lock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Origin Security: Cấu hình chỉ nhận kết nối từ IP Whitelist của Viettel CWAF</span>
                  </span>
                  <span className="text-emerald-400 font-bold font-mono text-[10px]">100% SECURED</span>
                </div>

              </div>
            )}

            {/* TAB 3: VIDEO GIẢI PHÁP CHUẨN 16:9 NHƯ CLOUD SERVER */}
            {activeTab === 'video' && (
              <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
                <iframe
                  className="w-full h-full border-0"
                  src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                  title="Viettel Cloud WAF Overview & Architecture"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
