import React, { useState } from 'react';
import { 
  Activity, 
  Zap, 
  FileText, 
  ShieldCheck, 
  Network, 
  Lock, 
  Layers, 
  Settings, 
  CheckCircle2
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VirtualSocCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const VirtualSocCapabilities: React.FC<VirtualSocCapabilitiesProps> = ({
  currentMarket,
}) => {
  const [activeTab, setActiveTab] = useState<'monitoring' | 'response' | 'management'>('monitoring');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'KEY CAPABILITIES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos 
      ? 'Multi-Layered Defense Capabilities & Technology Ecosystem' 
      : 'Năng lực bảo vệ phân lớp & Hệ sinh thái công nghệ vSOC',
    specTableTitle: isLaos 
      ? 'Multi-Layered Cybersecurity Solution Ecosystem' 
      : 'Hệ sinh thái giải pháp đảm bảo an toàn thông tin phân lớp',
    specTableSubtitle: isLaos
      ? 'Integrated deep security solutions from Endpoint, Network, Gateway to Application and Central SOC Management.'
      : 'Tích hợp toàn diện các giải pháp bảo vệ chuyên sâu từ Endpoint, Network, Gateway đến Application và Trung tâm điều hành.',
  };

  const tabs = [
    { id: 'monitoring', label: isLaos ? 'Monitoring & SIEM' : 'Giám sát & Phân tích (SIEM)', icon: Activity },
    { id: 'response', label: isLaos ? 'Orchestration & SOAR' : 'Điều phối & Phản ứng (SOAR)', icon: Zap },
    { id: 'management', label: isLaos ? 'Threat Intel & Reporting' : 'Quản trị & Báo cáo', icon: FileText },
  ];

  const tabContents = {
    monitoring: [
      {
        title: isLaos ? 'Comprehensive Endpoint & Network Surveillance' : 'Giám sát toàn diện lớp Endpoint & Network',
        desc: isLaos
          ? 'Continuous monitoring across servers and workstations to detect C&C beacons and lateral movement, combined with deep packet inspection and sandboxing forensics.'
          : 'Giám sát máy chủ/máy trạm phát hiện kết nối C&C, lây lan mã độc kết hợp bóc tách gói tin mạng bằng công nghệ Sandboxing phân tích chuyên sâu.',
      },
      {
        title: isLaos ? 'Centralized Log Analytics Engine (SIEM)' : 'Nền tảng phân tích log tập trung (SIEM)',
        desc: isLaos
          ? 'Collects, normalizes, correlates, and queries security telemetry across all enterprise devices and cloud workloads in real time.'
          : 'Thu thập, chuẩn hóa, tương quan sự kiện và giám sát vận hành thời gian thực trên toàn bộ hệ sinh thái thiết bị.',
      },
      {
        title: isLaos ? 'Proactive Anomaly & Zero-Day Detection' : 'Phát hiện sớm bất thường & Nguy cơ Zero-Day',
        desc: isLaos
          ? 'Applies advanced machine learning heuristics to uncover stealthy indicators of attack (IoA) before damage spreads.'
          : 'Ứng dụng mô hình học máy tự động nhận diện các hành vi xâm nhập trái phép và mối đe dọa tiềm ẩn trước khi bùng phát.',
      },
    ],
    response: [
      {
        title: isLaos ? 'Automated Incident Response (SOAR)' : 'Điều phối an ninh & Phản ứng tự động (SOAR)',
        desc: isLaos
          ? 'Automates repetitive incident containment playbooks, drastically compressing Mean Time to Respond (MTTR).'
          : 'Tự động hóa quy trình phản ứng và xử lý sự cố theo kịch bản chuẩn, rút ngắn tối đa thời gian xử lý nguy cơ an ninh.',
      },
      {
        title: isLaos ? 'Instant Endpoint Isolation' : 'Cô lập thiết bị nhiễm độc tức thì',
        desc: isLaos
          ? 'Enables remote network quarantine of infected hosts directly from the console to eliminate lateral ransomware spread.'
          : 'Cách ly mạng tức thì máy chủ/máy trạm bị xâm nhập chỉ bằng 1 thao tác, ngăn chặn triệt để mã độc tống tiền lây lan.',
      },
      {
        title: isLaos ? '24/7 Expert Triage Escalation' : 'Ứng cứu sự cố chuyên sâu 24/7',
        desc: isLaos
          ? 'Direct escalation to certified Viettel Cyber Security tier-3 incident handlers for deep reverse engineering.'
          : 'Chuyển cấp xử lý trực tiếp tới các kỹ sư chuyên sâu của Viettel Cyber Security để bóc tách mã độc và truy vết thủ phạm.',
      },
    ],
    management: [
      {
        title: isLaos ? 'Continuous Threat Intelligence' : 'Cơ sở tri thức Threat Intelligence',
        desc: isLaos
          ? 'Ingests continuous global and Vietnam-specific threat intelligence feeds to maintain superior defensive readiness.'
          : 'Liên tục cập nhật dữ liệu tấn công toàn cầu và mẫu mã độc mới tại Việt Nam để nâng cao năng lực phòng thủ.',
      },
      {
        title: isLaos ? 'Weekly & Monthly Executive Reports' : 'Báo cáo quản trị tuần & tháng',
        desc: isLaos
          ? 'Structured operational summaries, vulnerability audits, and strategic defense recommendations for CISOs.'
          : 'Cung cấp báo cáo vận hành định kỳ tuần/tháng, đánh giá tình trạng ATTT và khuyến nghị nâng cấp hệ thống.',
      },
      {
        title: isLaos ? 'False Positive Tuning & Rule Optimization' : 'Tối ưu luật & Giảm cảnh báo sai',
        desc: isLaos
          ? 'Continuous SIEM correlation rule tuning by dedicated engineers to eliminate alert fatigue and ensure focus.'
          : 'Chuyên gia liên tục tinh chỉnh các luật tương quan giúp loại bỏ cảnh báo giả, tập trung xử lý sự cố trọng yếu.',
      },
    ],
  };

  const layerArchitecture = [
    {
      layer: 'Endpoint (Thiết bị đầu cuối)',
      solutions: 'VCS-aJiant, VCS M-Suite, Viettel Endpoint Detection & Response (EDR)',
      desc: isLaos ? 'Workstation & server anomaly heuristics, fileless mitigation & local sensor agents' : 'Giám sát hành vi tiến trình, chống mã độc tống tiền và phát hiện tấn công trên máy chủ/máy trạm.',
      icon: ShieldCheck,
    },
    {
      layer: 'Network (Kết nối mạng)',
      solutions: 'VCS-NSM (Network Security Monitoring), VCS-NAC, VCS-Anti DDoS',
      desc: isLaos ? 'Traffic flow inspection, rogue connection detection, and volumetric DDoS filtration' : 'Bóc tách gói tin mạng, phân tích kết nối C&C độc hại và lọc sạch lưu lượng tấn công mạng.',
      icon: Network,
    },
    {
      layer: 'Gateway (Cổng kết nối)',
      solutions: 'VCS-WSG (Web Security Gateway), VCS-ESG (Email Security Gateway)',
      desc: isLaos ? 'Malicious URL/phishing interception, outbound data leakage control, email sandbox' : 'Bảo vệ cổng kết nối web/email, ngăn chặn thư lừa đảo (Phishing) và kiểm soát rò rỉ dữ liệu.',
      icon: Lock,
    },
    {
      layer: 'Application (Ứng dụng)',
      solutions: 'VCS-SWP (Smart Web Protection), Cloudrity',
      desc: isLaos ? 'Cloud Web Application Firewall (WAF), OWASP Top 10 shielding & API threat mitigation' : 'Tường lửa bảo vệ website, cổng API và ứng dụng web trước các cuộc tấn công khai thác lỗ hổng.',
      icon: Layers,
    },
    {
      layer: 'Management (Quản lý & Điều hành)',
      solutions: 'VCS-CYM, VCS-CyCir, VCS-KIAN, Viettel Threat Intelligence',
      desc: isLaos ? 'Centralized SIEM/SOAR console, automated incident workflow, predictive global threat feeds' : 'Nền tảng SIEM/SOAR tập trung, điều phối phản ứng tự động và cập nhật cơ sở tri thức tấn công toàn cầu.',
      icon: Settings,
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

        {/* Active Tab Content Cards (Matching CloudServerCapabilities) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tabContents[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-[var(--vidc-color-brand-red)] transition-all"
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

        {/* Spec Table: Bảng Hệ Sinh Thái Giải Pháp Đảm Bảo ATTT Các Lớp */}
        <div className="pt-6">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight">
              {t.specTableTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {t.specTableSubtitle}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-[var(--vidc-legacy-hex-0f172a)]">
                <tr>
                  <th className="py-3.5 px-6 font-extrabold w-1/4">Lớp kiến trúc bảo vệ</th>
                  <th className="py-3.5 px-6 font-extrabold w-1/3 text-[var(--vidc-color-brand-red)]">Giải pháp & Công nghệ tích hợp</th>
                  <th className="py-3.5 px-6 font-extrabold">Mô tả năng lực phòng thủ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {layerArchitecture.map((row, rIdx) => {
                  const Icon = row.icon;
                  return (
                    <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-4 px-6 font-bold text-[var(--vidc-legacy-hex-222225)]">
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                          <span>{row.layer}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-extrabold text-[var(--vidc-legacy-hex-0f172a)]">
                        {row.solutions}
                      </td>
                      <td className="py-4 px-6 text-slate-600 text-xs leading-relaxed">
                        {row.desc}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
