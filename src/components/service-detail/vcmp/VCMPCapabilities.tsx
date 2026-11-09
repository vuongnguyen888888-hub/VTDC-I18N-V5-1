import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Cpu, 
  HardDrive, 
  Server, 
  ChevronDown, 
  ChevronUp, 
  Table 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VCMPCapabilitiesProps {
  currentMarket?: SEAMarket;
}

type TabType = 'multi-cloud' | 'automation' | 'devops-finops';

export const VCMPCapabilities: React.FC<VCMPCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<TabType>('multi-cloud');
  const [showFullSpecs, setShowFullSpecs] = useState(false);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'KEY CAPABILITIES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos 
      ? 'Comprehensive Technological Capabilities & Multi-Cloud Orchestration' 
      : 'Tính năng quản trị & Công nghệ vượt trội',
    tab1: isLaos ? 'Multi-Cloud Connectivity' : 'Hạ tầng & Kết nối Đa nền tảng',
    tab2: isLaos ? 'Orchestration & Automation' : 'Điều phối & Quản trị Tự động',
    tab3: isLaos ? 'DevOps, Marketplace & FinOps' : 'DevOps, Marketplace & FinOps',
    showSpecs: isLaos ? 'View Detailed Specification Sheet' : 'Xem Bảng Thông Số Chi Tiết',
    hideSpecs: isLaos ? 'Collapse Specification Sheet' : 'Thu Gọn Bảng Thông Số',
    specTitle: isLaos ? 'vCMP Technical Specification Sheet' : 'Bảng Thông Số Kỹ Thuật Viettel vCMP',
  };

  const tabsContent = {
    'multi-cloud': [
      {
        title: isLaos ? 'Native Drivers for ~20 Cloud Platforms' : 'Kết nối gần 20 nền tảng Cloud & Hypervisor',
        desc: isLaos
          ? 'Native integration with AWS, Azure, Google Cloud, Alibaba Cloud, Viettel Cloud, and OpenStack environments.'
          : 'Tương thích sẵn với AWS, Microsoft Azure, Google Cloud (GCP), Alibaba Cloud, Viettel Cloud và OpenStack.',
      },
      {
        title: isLaos ? 'Bare Metal & On-Premises Hypervisors' : 'Hỗ trợ Bare Metal & Hệ ảo hóa On-Premises',
        desc: isLaos
          ? 'Manage physical bare metal servers, VMware vSphere, KVM, and Microsoft Hyper-V clusters seamlessly.'
          : 'Quản lý máy chủ vật lý Bare Metal cùng các hệ ảo hóa doanh nghiệp phổ biến như VMware vSphere, KVM và Hyper-V.',
      },
      {
        title: isLaos ? 'Hybrid Network & Security Control' : 'Điều phối mạng Hybrid & Bảo mật tập trung',
        desc: isLaos
          ? 'Central configuration for VPC, subnets, load balancers, virtual firewalls, and site-to-site VPN tunnels.'
          : 'Cấu hình và kiểm soát đồng nhất VPC, Subnet, Load Balancer, Cloud Firewall và kênh truyền VPN liên đám mây.',
      },
    ],
    'automation': [
      {
        title: isLaos ? 'Self-Service Catalog & Marketplace' : 'Cổng tự phục vụ Self-Service & Marketplace',
        desc: isLaos
          ? 'Package infrastructure and middleware stacks into cataloged services with 1-click provisioning and automated teardown.'
          : 'Chuẩn hóa tài nguyên từ VM, OS đến ứng dụng theo dạng dịch vụ PaaS. Khởi tạo, co giãn và thu hồi tự động chỉ bằng 1 cú click.',
      },
      {
        title: isLaos ? 'Lifecycle Orchestration & Scaling' : 'Điều phối vòng đời & Tự động co giãn',
        desc: isLaos
          ? 'Orchestrate compute, storage, and networking with policy-driven automated scaling and migration flows.'
          : 'Tự động hóa toàn bộ vòng đời tài nguyên, lập lịch bật/tắt và co giãn tải linh hoạt theo chính sách quy định.',
      },
      {
        title: isLaos ? 'Role-Based Access & Policy Auditing' : 'Phân quyền RBAC & Kiểm soát tuân thủ',
        desc: isLaos
          ? 'Enforce granular RBAC permissions, approval workflows, and centralized audit logs across all accounts.'
          : 'Thiết lập hạn mức phân quyền chi tiết (RBAC), quy trình phê duyệt đa cấp và kiểm soát lịch sử thao tác toàn diện.',
      },
    ],
    'devops-finops': [
      {
        title: isLaos ? 'DevOps CI/CD & IaC Ecosystem' : 'Hệ sinh thái DevOps & IaC tích hợp sẵn',
        desc: isLaos
          ? 'Pre-integrated with HashiCorp Terraform, Red Hat Ansible, Jenkins, Git repositories, and CNCF Kubernetes.'
          : 'Tích hợp sẵn Terraform, Ansible, Jenkins, Git và cụm Kubernetes chuẩn CNCF sẵn sàng cho quy trình CI/CD liên tục.',
      },
      {
        title: isLaos ? 'FinOps & Budget Quota Management' : 'FinOps & Quản trị ngân sách theo Tenant',
        desc: isLaos
          ? 'Real-time multi-cloud billing dashboard, department chargeback, and automated idle resource detection.'
          : 'Giao diện giám sát chi phí billing tập trung, thiết lập hạn mức ngân sách và tự động phát hiện tài nguyên lãng phí.',
      },
      {
        title: isLaos ? 'Open API & Enterprise ITSM Connectors' : 'Open API & Tích hợp ITSM / CMDB mở rộng',
        desc: isLaos
          ? 'Full RESTful API and pre-built connectors for ServiceNow, Jira, Enterprise CMDB, and central IAM/SSO.'
          : 'Mở rộng kết nối qua RESTful API/Plugin với các hệ thống ITSM (ServiceNow, Jira), CMDB và hệ thống Single Sign-On / IAM.',
      },
    ],
  };

  const specRows = [
    {
      category: isLaos ? 'Supported Cloud Platforms' : 'Nền tảng Cloud hỗ trợ',
      detail: isLaos 
        ? 'AWS, Microsoft Azure, Google Cloud (GCP), Alibaba Cloud, Viettel IDC Cloud, OpenStack...'
        : 'AWS, Microsoft Azure, Google Cloud (GCP), Alibaba Cloud, Viettel IDC Cloud, OpenStack...',
    },
    {
      category: isLaos ? 'On-Premises & Virtualization' : 'Hạ tầng On-Premises & Virtualization',
      detail: isLaos
        ? 'Bare Metal physical servers, VMware vSphere, KVM, Microsoft Hyper-V, OpenStack'
        : 'Server vật lý (Bare Metal), Hypervisors (VMware vSphere, KVM, Hyper-V), OpenStack',
    },
    {
      category: isLaos ? 'Managed Resource Types' : 'Loại tài nguyên quản trị',
      detail: isLaos
        ? 'Compute (VMs), Storage (Block, Object, File), Networking (VPC, Subnet, vLB, vFW, VPN), Databases, Containers (K8s)'
        : 'Compute (VMs), Storage (Block/Object/File), Network (VPC, Subnet, vLB, vFW, VPN), Database, Container (K8s)',
    },
    {
      category: isLaos ? 'DevOps & IaC Tooling' : 'Công cụ DevOps tích hợp',
      detail: isLaos
        ? 'HashiCorp Terraform, Red Hat Ansible, Jenkins, GitLab/GitHub, AWS CloudFormation, CNCF Kubernetes'
        : 'Terraform, Ansible, Jenkins, Git, AWS CloudFormation, CNCF Certified Kubernetes',
    },
    {
      category: isLaos ? 'Enterprise Integrations' : 'Khả năng tích hợp mở rộng',
      detail: isLaos
        ? 'RESTful APIs, Webhooks, ITSM (ServiceNow, Jira), CMDB, SAML 2.0 / LDAP / OAuth2 IAM'
        : 'RESTful API và Plugin kết nối hệ thống ITSM, CMDB, IAM và giải pháp giám sát bên thứ 3',
    },
    {
      category: isLaos ? 'FinOps & Cost Governance' : 'Cơ chế quản trị chi phí',
      detail: isLaos
        ? 'Multi-provider billing monitoring, Tenant quotas, idle resource alerts, automated rightsizing'
        : 'Giám sát Billing tập trung, phân chia hạn mức Tenant/Phòng ban, tự động đưa ra khuyến cáo tối ưu',
    },
  ];

  return (
    <section 
      id="features" 
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

        {/* Tab Navigation Controls */}
        <div className="flex border-b border-slate-200 mb-8 overflow-x-auto">
          <VIDCNativeButton
            type="button"
            onClick={() => setActiveTab('multi-cloud')}
            className={`pb-4 px-6 text-sm font-bold border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'multi-cloud'
                ? 'border-[var(--vidc-color-brand-red)] text-[var(--vidc-color-brand-red)] bg-red-50/50 rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <HardDrive className="w-4 h-4" />
            <span>{t.tab1}</span>
          </VIDCNativeButton>
          
          <VIDCNativeButton
            type="button"
            onClick={() => setActiveTab('automation')}
            className={`pb-4 px-6 text-sm font-bold border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'automation'
                ? 'border-[var(--vidc-color-brand-red)] text-[var(--vidc-color-brand-red)] bg-red-50/50 rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>{t.tab2}</span>
          </VIDCNativeButton>

          <VIDCNativeButton
            type="button"
            onClick={() => setActiveTab('devops-finops')}
            className={`pb-4 px-6 text-sm font-bold border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 cursor-pointer ${
              activeTab === 'devops-finops'
                ? 'border-[var(--vidc-color-brand-red)] text-[var(--vidc-color-brand-red)] bg-red-50/50 rounded-t-lg'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Server className="w-4 h-4" />
            <span>{t.tab3}</span>
          </VIDCNativeButton>
        </div>

        {/* 3 Active Tab Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tabsContent[activeTab].map((item, idx) => (
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

        {/* Technical Specification Table Toggle */}
        <div className="text-center mb-6">
          <VIDCNativeButton
            type="button"
            onClick={() => setShowFullSpecs(!showFullSpecs)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            <Table className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
            <span>{showFullSpecs ? t.hideSpecs : t.showSpecs}</span>
            {showFullSpecs ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </VIDCNativeButton>
        </div>

        {/* Specification Table */}
        {showFullSpecs && (
          <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white animate-in fade-in duration-300">
            <div className="p-4 bg-slate-100 border-b border-slate-200 font-extrabold text-sm text-[var(--vidc-legacy-hex-222225)]">
              {t.specTitle}
            </div>
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-3.5 px-6 font-extrabold uppercase text-slate-800 w-1/3">
                    Hạng mục kỹ thuật
                  </th>
                  <th className="py-3.5 px-6 font-extrabold uppercase text-slate-800">
                    Chi tiết tiêu chuẩn Viettel vCMP
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {specRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/70">
                    <td className="py-3.5 px-6 font-bold text-slate-900 align-top">
                      {row.category}
                    </td>
                    <td className="py-3.5 px-6 text-slate-700 leading-relaxed">
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
};

