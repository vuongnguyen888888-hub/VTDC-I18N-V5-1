import React, { useState } from 'react';
import { 
  Network, 
  Receipt, 
  Layers, 
  CheckCircle2, 
  FileText, 
  Info 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VoiceBrandnameCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const VoiceBrandnameCapabilities: React.FC<VoiceBrandnameCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'pbx_connectivity' | 'management_billing' | 'compliance_routing'>('pbx_connectivity');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos 
      ? 'Outstanding Operational Capabilities & Telecom Technology' 
      : 'Tính năng vận hành & Công nghệ viễn thông vượt trội',
    specEyebrow: isLaos ? 'SPECIFICATION & STANDARDS' : 'QUY CHUẨN ĐẶT TÊN ĐỊNH DANH',
    specHeadline: isLaos 
      ? 'Brandname Declaration Standards & Legal Specifications' 
      : 'Tiêu chuẩn khai báo tên định danh & Khung pháp lý',
    specDesc: isLaos
      ? 'Mandatory technical and legal guidelines issued by the Authority of Information Security (MIC).'
      : 'Các tiêu chí kỹ thuật và pháp lý bắt buộc do Cục An toàn thông tin (Bộ TT&TT) quy định.',
  };

  const tabs = [
    { 
      id: 'pbx_connectivity', 
      label: isLaos ? 'PBX & Connectivity' : 'Kết nối & Tổng đài', 
      icon: Network 
    },
    { 
      id: 'management_billing', 
      label: isLaos ? 'Management & Billing' : 'Quản trị & Cước phí', 
      icon: Receipt 
    },
    { 
      id: 'compliance_routing', 
      label: isLaos ? 'Routing & Recording' : 'Định tuyến & Ghi âm', 
      icon: Layers 
    },
  ];

  const tabContents = {
    pbx_connectivity: [
      {
        title: isLaos ? 'Universal PBX & Gateway Integration' : 'Tương thích mọi Tổng đài & Voice Gateway',
        desc: isLaos 
          ? 'Seamlessly integrates with on-premise IP PBX, Cloud PBX, Asterisk, FreePBX, and SIP Gateways with standard SIP Trunking.'
          : 'Dễ dàng kết nối tên định danh thương hiệu với hầu hết hệ thống tổng đài IP PBX, Cloud PBX và Voice Gateway qua giao thức SIP Trunk tiêu chuẩn.',
      },
      {
        title: isLaos ? 'Cross-Carrier Telco Synchronization' : 'Đồng bộ hạ tầng đa nhà mạng',
        desc: isLaos 
          ? 'Synchronizes Brandname across Viettel, MobiFone, VinaPhone/VNPT with automated carrier lookup.'
          : 'Hiển thị đồng bộ thương hiệu trên mọi mạng di động lớn (Viettel, MobiFone, VNPT) với cơ chế đồng bộ định danh liên mạng.',
      },
      {
        title: isLaos ? 'Open RESTful API & CRM Connectors' : 'Open API & Tích hợp CRM/ERP',
        desc: isLaos 
          ? 'Provides developer-ready RESTful APIs and webhooks for real-time click-to-call, customer lookup, and automated dialers.'
          : 'Cung cấp bộ API RESTful và webhook giúp nhúng tính năng gọi định danh trực tiếp vào CRM (Salesforce, HubSpot, Lark, Getfly, KiotViet).',
      },
    ],
    management_billing: [
      {
        title: isLaos ? 'Granular Quota & Billing Allocation' : 'Phân bổ cước & Giới hạn hạn mức',
        desc: isLaos 
          ? 'Built-in real-time billing management allows setting granular call minute limits per department or agent account.'
          : 'Tích hợp phần mềm tính cước chi tiết, cho phép thiết lập hạn mức gọi linh hoạt theo nhóm hoặc từng nhân sự dựa trên số phút định mức.',
      },
      {
        title: isLaos ? 'Multi-Tier RBAC Administration' : 'Quản trị tập trung & Phân quyền sâu',
        desc: isLaos 
          ? 'Flexible hierarchical permissions for parent corporations, branch offices, and campaign teams with full audit logs.'
          : 'Hỗ trợ mô hình phân cấp quản trị linh hoạt cho Tập đoàn, Tổng công ty, từng chi nhánh và phòng ban giúp kiểm soát toàn diện.',
      },
      {
        title: isLaos ? 'Real-Time Communication Dashboard' : 'Báo cáo & Thống kê thời gian thực',
        desc: isLaos 
          ? 'Interactive analytics dashboard displaying live call answer rates, durations, agent performance, and traffic trends.'
          : 'Cung cấp báo cáo trực quan về tỷ lệ bắt máy, thời lượng cuộc gọi, số hotline khai báo và sản lượng tiêu thụ phút thoại theo thời gian thực.',
      },
    ],
    compliance_routing: [
      {
        title: isLaos ? 'Intelligent MNP Routing Engine' : 'Định tuyến tự động tối ưu cước (MNP)',
        desc: isLaos 
          ? 'Automated mobile number portability (MNP) detection routes calls to on-net trunks for lowest operational tariff.'
          : 'Tự động nhận diện mạng chuyển mạng giữ số (MNP), điều hướng cuộc gọi qua kênh nội mạng tương ứng để tối ưu chi phí cước thoại.',
      },
      {
        title: isLaos ? '100% Secure Call Recording' : 'Ghi âm cuộc gọi toàn diện',
        desc: isLaos 
          ? 'Automated recording of all inbound/outbound calls with encrypted cloud storage for quality auditing and compliance.'
          : 'Tự động ghi âm 100% cuộc gọi đến và đi trên hệ thống, lưu trữ mã hóa phục vụ công tác kiểm soát chất lượng dịch vụ và đào tạo.',
      },
      {
        title: isLaos ? 'Tier 3 Infrastructure Security' : 'An toàn bảo mật chuẩn Enterprise',
        desc: isLaos 
          ? 'Operated on Viettel IDC Tier 3 data centers with geo-redundancy and 99.99% carrier uptime SLA.'
          : 'Hạ tầng triển khai trên hệ thống Data Center TIA-942 Rated 3 tiêu chuẩn quốc tế với dự phòng DRaaS 2 miền Bắc - Nam và SLA 99.99%.',
      },
    ],
  };

  const specRows = [
    {
      criterion: isLaos ? 'Brandname Character Length' : 'Độ dài tên định danh',
      detail: isLaos ? 'From 3 to 11 characters (including spaces).' : 'Từ 3 đến 11 ký tự (bao gồm cả ký tự khoảng trắng/dấu cách).',
      tag: '3 - 11 ký tự',
    },
    {
      criterion: isLaos ? 'Starting Character Rule' : 'Quy tắc ký tự bắt đầu',
      detail: isLaos ? 'Must begin with an alphabetic character (A-Z) to prevent display issues on older mobile operating systems.' : 'Nên bắt đầu bằng chữ cái (A-Z) để hạn chế tối đa lỗi hiển thị trên các dòng điện thoại di động.',
      tag: 'Chữ cái (A-Z)',
    },
    {
      criterion: isLaos ? 'Domain-Based Brandname' : 'Định danh theo Tên Miền (Domain)',
      detail: isLaos ? 'Must include the full domain extension (.vn, .com.vn, .com...). Automatically shortens cleanly if exceeding 11 chars.' : 'Phải chứa tên miền đầy đủ (bao gồm cả đuôi .com.vn, .com, .vn...). Tự động rút gọn chuẩn xác nếu vượt quá 11 ký tự.',
      tag: 'Tên miền hợp lệ',
    },
    {
      criterion: isLaos ? 'Household Business Format' : 'Định danh Hộ Kinh Doanh',
      detail: isLaos ? 'Declared following official syntax: "HKD [Brandname]". Individual brands allowed if character limit is exceeded.' : 'Khai báo theo cú pháp chuẩn: HKD Tên định danh. Trường hợp chuỗi ký tự quá 11 ký tự mới được khai báo tên riêng.',
      tag: 'Cú pháp "HKD..."',
    },
    {
      criterion: isLaos ? 'Carrier Support Scope' : 'Phạm vi nhà mạng hỗ trợ',
      detail: isLaos ? 'Synchronized across all carriers nationwide in Vietnam (Viettel, MobiFone, VNPT/VinaPhone...).' : 'Đồng bộ trên toàn bộ các nhà mạng viễn thông tại Việt Nam (Viettel, MobiFone, VinaPhone/VNPT...).',
      tag: 'Toàn mạng VN',
    },
    {
      criterion: isLaos ? 'Legal Certification' : 'Tính pháp lý & Cấp phép',
      detail: isLaos ? 'Requires valid Brandname Identity Certificate issued by the Authority of Information Security (MIC).' : 'Cần có Giấy chứng nhận tên định danh do Cục An toàn thông tin (Bộ TT&TT) cấp phép.',
      tag: 'Cục ATTT cấp',
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

        {/* Tab Selection matching CloudServerCapabilities */}
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

        {/* Active Tab Content Cards matching CloudServerCapabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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

        {/* Spec Sheet & Standards Table */}
        <div id="spec-sheet" className="pt-10 border-t border-slate-200 scroll-mt-20">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-extrabold uppercase tracking-wider mb-2">
              <FileText className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
              <span>{t.specEyebrow}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
              {t.specHeadline}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {t.specDesc}
            </p>
          </div>

          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-black text-slate-700 uppercase tracking-wider">
                    <th className="py-4 px-5 sm:px-6 w-1/3">Tiêu Chí Quy Chuẩn</th>
                    <th className="py-4 px-5 sm:px-6 w-1/2">Chi Tiết Quy Định Khai Báo Brandname</th>
                    <th className="py-4 px-5 sm:px-6 text-right">Phân Loại</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {specRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-5 sm:px-6 font-bold text-slate-900 align-top">
                        {row.criterion}
                      </td>
                      <td className="py-4 px-5 sm:px-6 text-slate-600 leading-relaxed align-top">
                        {row.detail}
                      </td>
                      <td className="py-4 px-5 sm:px-6 text-right align-top">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-red-50 text-[var(--vidc-color-brand-red)] font-mono font-bold text-[11px] whitespace-nowrap border border-red-100">
                          {row.tag}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Info note below table */}
          <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900 leading-relaxed">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Lưu ý hỗ trợ từ Viettel IDC:</span> Doanh nghiệp chưa có Giấy chứng nhận tên định danh sẽ được đội ngũ chuyên viên Viettel IDC hướng dẫn trực tiếp quy trình nộp hồ sơ trực tuyến qua Cổng dịch vụ công của Cục An toàn thông tin, cam kết thời gian thẩm định nhanh chóng nhất.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
