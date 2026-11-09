import React, { useState } from 'react';
import { 
  Server, 
  Layers, 
  Activity, 
  ShieldCheck, 
  FileText,
  Cpu,
  Zap,
  CheckCircle2,
  HardDrive,
  Headphones
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ManagedPrivateCloudCapabilitiesProps {
  currentMarket: SEAMarket;
}

export const ManagedPrivateCloudCapabilities: React.FC<ManagedPrivateCloudCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'infrastructure' | 'cloudnative' | 'managed'>('infrastructure');
  const isLaos = currentMarket.code === 'la';

  const t = {
    eyebrow: isLaos ? 'TECHNOLOGY CAPABILITIES & FEATURES' : 'NĂNG LỰC CÔNG NGHỆ & TÍNH NĂNG',
    headline: isLaos
      ? 'Outstanding Infrastructure Features & Technology'
      : 'Tính năng hạ tầng & Công nghệ vượt trội',
    tableTitle: isLaos ? 'Technical Specifications & Delegated Operations Scope' : 'Bảng thông số & Phạm vi vận hành kỹ thuật',
  };

  const tabs = [
    { id: 'infrastructure', label: isLaos ? 'Infrastructure & Virtualization' : 'Hạ tầng & Ảo hóa VMware', icon: HardDrive },
    { id: 'cloudnative', label: isLaos ? 'Cloud-Native & PaaS Readiness' : 'Sẵn sàng Cloud-Native & PaaS', icon: Cpu },
    { id: 'managed', label: isLaos ? '24/7 Delegated Management' : 'Ủy thác Quản trị 24/7 & Bảo mật', icon: Server },
  ];

  const tabContents = {
    infrastructure: [
      {
        title: isLaos ? 'VMware Cloud Foundation Architecture' : 'Kiến trúc VMware Cloud Foundation Tiên tiến',
        desc: isLaos
          ? 'Built on enterprise-grade VMware Private Cloud stack (vSphere, vSAN, NSX), delivering high availability and rock-solid virtualization.'
          : 'Xây dựng trên nền tảng VMware chuẩn mực doanh nghiệp (vSphere, vSAN, NSX), tối ưu hiệu năng phân bổ tài nguyên và điều phối máy ảo cực đại.',
      },
      {
        title: isLaos ? 'Dedicated Physical Compute & All-Flash Storage' : 'Hạ tầng tính toán chuyên biệt & All-Flash Storage',
        desc: isLaos
          ? 'Latest Intel/AMD multi-core processors with Enterprise NVMe SAN or vSAN All-Flash storage ensuring microsecond latency.'
          : 'Trang bị dòng vi xử lý Intel Xeon/AMD EPYC thế hệ mới nhất cùng hệ thống lưu trữ NVMe SAN/vSAN All-Flash cho độ trễ chỉ tính bằng micro-giây.',
      },
      {
        title: isLaos ? 'High Availability & Seamless Clustering' : 'Độ sẵn sàng cao (HA) & Cụm Cluster dự phòng',
        desc: isLaos
          ? 'N+1 redundancy architecture with automated VMware DRS and HA failover guarantees uninterrupted continuous business operation.'
          : 'Kiến trúc dự phòng N+1 kết hợp cơ chế VMware DRS và HA tự động chuyển đổi dự phòng khi phát sinh sự cố phần cứng, không làm gián đoạn ứng dụng.',
      },
    ],
    cloudnative: [
      {
        title: isLaos ? 'Containerization & Kubernetes Support' : 'Hỗ trợ Containerization & Kubernetes (Tanzu)',
        desc: isLaos
          ? 'Readily integrated with enterprise Kubernetes platforms, container orchestration, and automated microservices provisioning.'
          : 'Sẵn sàng tích hợp nền tảng Kubernetes doanh nghiệp, điều phối container tự động và hỗ trợ triển khai kiến trúc Microservices hiện đại.',
      },
      {
        title: isLaos ? 'Managed Database Services' : 'Tích hợp dịch vụ CSDL (Managed Databases)',
        desc: isLaos
          ? 'Support on-demand clustering for PostgreSQL, MySQL, Redis, and Oracle with automated backup and replication.'
          : 'Hỗ trợ thiết lập cụm CSDL hiệu năng cao như PostgreSQL, MySQL, Redis, Oracle với cơ chế sao lưu tự động và phân tán dữ liệu.',
      },
      {
        title: isLaos ? 'CI/CD & DevOps Automation Integration' : 'Tương thích quy trình CI/CD & DevOps',
        desc: isLaos
          ? 'Comprehensive Infrastructure-as-Code (Terraform, Ansible) and API-driven automation for enterprise engineering teams.'
          : 'Hỗ trợ mô hình Hạ tầng dạng mã nguồn (Infrastructure-as-Code) qua Terraform, Ansible và REST API giúp đội ngũ DevOps tăng tốc độ release phần mềm.',
      },
    ],
    managed: [
      {
        title: isLaos ? '24/7/365 Proactive NOC/SOC Monitoring' : 'Giám sát chủ động 24/7/365 NOC & SOC',
        desc: isLaos
          ? 'Continuous monitoring of CPU, RAM, Storage, and network metrics with real-time alerting and proactive threshold prevention.'
          : 'Giám sát liên tục các thông số hiệu năng phần cứng, đường truyền và ứng dụng với ngưỡng cảnh báo sớm ngăn ngừa sự cố tiềm ẩn.',
      },
      {
        title: isLaos ? 'Security Patching & Lifecycle Firmware' : 'Vá lỗi bảo mật & Bảo trì định kỳ',
        desc: isLaos
          ? 'Standardized regular patch management, firmware updates, and vulnerability assessments following strict vendor baselines.'
          : 'Quy trình cập nhật bản vá bảo mật (Patch Management), nâng cấp Firmware định kỳ theo chuẩn khuyến nghị từ VMware và nhà sản xuất.',
      },
      {
        title: isLaos ? 'Level-3 Technical Escalation & Incident SLA' : 'Đội ngũ chuyên gia L3 & Cam kết thời gian SLA',
        desc: isLaos
          ? 'Direct partnership with Viettel IDC and VMware Certified Master Architects for rapid emergency troubleshooting.'
          : 'Được hỗ trợ trực tiếp bởi các kỹ sư cấp cao đạt chứng chỉ VMware VCAP/VCDX cùng cam kết thời gian tiếp nhận và xử lý sự cố khẩn cấp.',
      },
    ],
  };

  const specsList = [
    { 
      label: 'Mô hình triển khai', 
      value: 'Private Cloud đặt tại On-premises Data Center của khách hàng' 
    },
    { 
      label: 'Nền tảng công nghệ lõi', 
      value: 'VMware Private Cloud Platform (Enterprise Ready)' 
    },
    { 
      label: 'Phạm vi quản trị ủy thác', 
      value: 'Giám sát 24/7/365, quản trị cấu hình, vá lỗi bảo mật, tối ưu hiệu năng và xử lý sự cố' 
    },
    { 
      label: 'Khả năng mở rộng PaaS', 
      value: 'Hỗ trợ Container Orchestration (Kubernetes), Managed Database, Microservices' 
    },
    { 
      label: 'Mô hình kết nối', 
      value: 'Kết nối linh hoạt Hybrid Cloud, kết nối liên vùng / liên DC, thiết lập VPN bảo mật' 
    },
    { 
      label: 'Tiêu chuẩn An toàn thông tin', 
      value: 'Đáp ứng tiêu chuẩn Sovereign Cloud, ISO 27001, PCI-DSS và các quy định ngành' 
    },
    { 
      label: 'Cam kết chất lượng (SLA)', 
      value: '99.99% độ sẵn sàng vận hành liên tục; cam kết thời gian phản hồi sự cố khẩn cấp' 
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

        {/* Active Tab Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

        {/* Bảng Thông Số & Phạm Vi Vận Hành Kỹ Thuật (Technical Spec Table) */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <FileText className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
            <h3 className="text-lg font-bold text-[var(--vidc-legacy-hex-222225)]">
              {t.tableTitle}
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-100/90 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <th className="py-4 px-6 w-1/3">Hạng mục</th>
                  <th className="py-4 px-6 w-2/3">Chi tiết tiêu chuẩn dịch vụ Viettel Managed Private Cloud (vMPC)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                {specsList.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <th scope="row" className="py-4 px-6 font-bold text-[var(--vidc-legacy-hex-222225)] align-top bg-slate-50/30">
                      {spec.label}
                    </th>
                    <td className="py-4 px-6 text-slate-700 font-normal leading-relaxed">
                      {spec.value}
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
