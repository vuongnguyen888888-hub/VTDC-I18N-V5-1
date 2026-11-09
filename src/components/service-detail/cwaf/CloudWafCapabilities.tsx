import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Bot, 
  Network, 
  FileCheck, 
  Sliders, 
  Search, 
  Code2, 
  Layers, 
  Zap,
  Globe2,
  RefreshCw,
  Cpu,
  Table
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudWafCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const CloudWafCapabilities: React.FC<CloudWafCapabilitiesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [activeTab, setActiveTab] = useState<'waf' | 'bot' | 'ddos'>('waf');

  const t = {
    eyebrow: isLaos ? 'KEY CAPABILITIES & TECHNOLOGIES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos 
      ? 'Next-Gen Technology Capabilities of Viettel Cloud WAF'
      : 'Năng Lực Công Nghệ & Tính Năng Chuyên Sâu Của Viettel CWAF',
    tabWaf: isLaos ? 'Web Security & Custom Rules' : 'Bảo mật Web & WAF Rules',
    tabBot: isLaos ? 'Bot Management & API Protection' : 'Quản lý Bot & Bảo vệ API',
    tabDdos: isLaos ? 'Anti-DDoS & Load Balancing (LBaaS)' : 'Chống DDoS & Cân bằng tải (LBaaS)',
    lbaasTitle: isLaos ? 'LBaaS Technical Specification Matrix' : 'Bảng Thông Số Kỹ Thuật Load Balancer as a Service (LBaaS)',
    lbaasSubtitle: isLaos 
      ? 'Integrated load balancing specifications across all Viettel CWAF operational tiers'
      : 'Thông số kỹ thuật tính năng cân bằng tải tích hợp sẵn theo từng cấp độ dịch vụ',
  };

  const tabs = [
    { id: 'waf' as const, label: t.tabWaf, icon: ShieldCheck },
    { id: 'bot' as const, label: t.tabBot, icon: Bot },
    { id: 'ddos' as const, label: t.tabDdos, icon: Network },
  ];

  const featuresByTab = {
    waf: [
      {
        icon: ShieldCheck,
        title: isLaos ? 'OWASP Top 10 & Zero-day Prevention' : 'Ngăn Chặn OWASP Top 10 & Zero-day',
        desc: isLaos 
          ? 'Protects against SQL Injection, Cross-Site Scripting (XSS), Remote Code Execution (RCE), Server-Side Request Forgery (SSRF) and zero-day vulnerabilities in real time.'
          : 'Chặn đứng triệt để các hiểm họa SQL Injection, Cross-Site Scripting (XSS), Remote Code Execution (RCE), SSRF và các lỗ hổng bảo mật Zero-day chưa có bản vá.',
      },
      {
        icon: Sliders,
        title: isLaos ? 'Context-Aware Rate Limiting' : 'Rate Limiting Linh Hoạt Theo Ngữ Cảnh',
        desc: isLaos
          ? 'Enforces granular request rate throttling by IP address, URI path, HTTP headers, session tokens, or geographic origin to prevent credential stuffing and brute force.'
          : 'Giới hạn số lượng yêu cầu truy cập linh hoạt theo IP, đường dẫn URL, Session ID hoặc HTTP Header nhằm ngăn chặn quét dò thông tin và Brute Force.',
      },
      {
        icon: FileCheck,
        title: isLaos ? 'Custom Security Rules Engine' : 'Tùy Biến Luật Bảo Mật (Custom Rules)',
        desc: isLaos
          ? 'Enables creation of flexible custom filtering logic via intuitive visual dashboard or automated API calls, responding instantly to zero-day emergence.'
          : 'Cho phép quản trị viên tự cấu hình các luật bảo vệ chuyên biệt phù hợp với đặc thù nghiệp vụ doanh nghiệp, hỗ trợ Regex và các toán tử logic phức tạp.',
      },
    ],
    bot: [
      {
        icon: Bot,
        title: isLaos ? 'AI Behavioral Bot Management' : 'Quản Trị & Phân Biệt Bot Thông Minh (AI)',
        desc: isLaos
          ? 'Distinguishes beneficial bots (Googlebot, Bingbot) from malicious automation (content scrapers, ticket scalpers, credential-stuffers) with zero CAPTCHA friction.'
          : 'Phân loại chính xác Bot hợp lệ (Google, Bing SEO...) và Bot độc hại (Content Scraping, Credential Stuffing, Scalper Bot) bằng thuật toán học máy tinh vi.',
      },
      {
        icon: Search,
        title: isLaos ? 'Shadow & Zombie API Discovery' : 'Khám Phá Điểm Cuối API Tự Động (API Discovery)',
        desc: isLaos
          ? 'Automatically maps, logs, and profiles all exposed REST/GraphQL API endpoints, surfacing undocumented APIs and preventing sensitive data leaks.'
          : 'Tự động rà quét và lập danh mục toàn bộ API endpoints đang hoạt động, phát hiện các Shadow/Zombie API chưa được ghi nhận để áp dụng chính sách bảo vệ.',
      },
      {
        icon: Code2,
        title: isLaos ? 'Client-Side Protection & Magecart Defense' : 'Bảo Vệ Client-Side & Ngăn Chặn Magecart',
        desc: isLaos
          ? 'Inspects third-party JavaScript scripts running in end-user browsers to mitigate digital skimming, formjacking, and unauthorized DOM tampering.'
          : 'Kiểm soát và phát hiện các đoạn mã JavaScript độc hại chạy trên trình duyệt người dùng, chống đánh cắp dữ liệu thẻ thanh toán (Formjacking/Magecart).',
      },
    ],
    ddos: [
      {
        icon: Network,
        title: isLaos ? '15 Tbps Global Anti-DDoS Capacity' : 'Năng Lực Chống DDoS Toàn Cầu 15 Tbps',
        desc: isLaos
          ? 'Distributed across 21 worldwide Scrubbing Centers with Anycast routing, effortlessly absorbing multi-hundred Gbps Layer 3, 4, and 7 attacks.'
          : 'Phân tán trên 21 Trung tâm làm sạch (Scrubbing Centers) toàn cầu với định tuyến Anycast, dễ dàng hấp thụ các đợt tấn công bão mạng hàng trăm Gbps.',
      },
      {
        icon: Zap,
        title: isLaos ? 'Load Balancer as a Service (LBaaS)' : 'Cân Bằng Tải Ứng Dụng Đa Máy Chủ (LBaaS)',
        desc: isLaos
          ? 'Smart traffic distribution across multiple origin servers with continuous health checks and instantaneous active-standby failover.'
          : 'Điều phối lưu lượng truy cập thông minh giữa các cụm máy chủ gốc, hỗ trợ thuật toán Round Robin, Least Connections và Failover tức thì khi có sự cố.',
      },
      {
        icon: Globe2,
        title: isLaos ? 'Global CDN Acceleration' : 'Tăng Tốc Toàn Cầu Qua Amazon CloudFront',
        desc: isLaos
          ? 'Direct peering with worldwide edge networks caches static content close to end users, dramatically reducing transit times and latency.'
          : 'Tích hợp mạng phân phối nội dung biên giúp lưu bộ nhớ đệm (caching) dữ liệu tĩnh, giảm thời gian phản hồi máy chủ và nâng cao trải nghiệm người dùng.',
      },
    ],
  };

  const lbaasSpecs = [
    { feature: 'Mô hình triển khai (Deployment)', standard: 'Reverse Proxy Cloud', advance: 'Reverse Proxy Cloud', complete: 'Reverse Proxy Cloud' },
    { feature: 'Cơ chế cân bằng tải', standard: 'Active - Standby (Failover)', advance: 'Round Robin / Least Conn', complete: 'Weighted Round Robin / Health-driven' },
    { feature: 'Kiểm tra tình trạng máy chủ (Health Checks)', standard: 'ICMP / TCP Ping', advance: 'HTTP / HTTPS Path Check', complete: 'Custom Payload & Response Code' },
    { feature: 'Thời gian chuyển mạch dự phòng (Failover Time)', standard: '< 10 giây', advance: '< 3 giây', complete: '< 1 giây (Tức thì)' },
    { feature: 'Hỗ trợ Multi-Origin & Multi-Cloud', standard: '1 Cụm máy chủ', advance: 'Tối đa 3 Cụm máy chủ', complete: 'Không giới hạn Cụm máy chủ' },
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

        {/* Tab Selection Bar chuẩn Cloud Server */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <VIDCNativeButton
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all min-h-[44px] cursor-pointer ${
                  isActive
                    ? 'border-[var(--vidc-color-brand-red)] text-[var(--vidc-color-brand-red)] bg-red-50/50'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </VIDCNativeButton>
            );
          })}
        </div>

        {/* Active Tab Grid 3 Card chuẩn Cloud Server */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuresByTab[activeTab].map((f, idx) => {
            const IconComp = f.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[var(--vidc-color-brand-red)] hover:shadow-md transition-all duration-300 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bảng Thông Số Kỹ Thuật LBaaS (Load Balancer as a Service) */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <Table className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-[var(--vidc-legacy-hex-0f172a)]">
                  {t.lbaasTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {t.lbaasSubtitle}
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-bold">
              HIGH AVAILABILITY
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-800">
                  <th className="py-3.5 px-6 font-extrabold uppercase tracking-wider text-slate-600 w-2/5">
                    Thông số kỹ thuật LBaaS
                  </th>
                  <th className="py-3.5 px-4 font-extrabold text-center text-slate-900 w-1/5">
                    STANDARD
                  </th>
                  <th className="py-3.5 px-4 font-extrabold text-center text-[var(--vidc-color-brand-red)] w-1/5 bg-red-50/30">
                    ADVANCE
                  </th>
                  <th className="py-3.5 px-4 font-extrabold text-center text-slate-900 w-1/5">
                    COMPLETE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {lbaasSpecs.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-6 text-slate-800 font-semibold">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-center text-slate-600">
                      {row.standard}
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-[var(--vidc-color-brand-red)] bg-red-50/20">
                      {row.advance}
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-slate-800">
                      {row.complete}
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
