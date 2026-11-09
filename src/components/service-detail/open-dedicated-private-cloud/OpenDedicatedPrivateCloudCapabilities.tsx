import React, { useState } from 'react';
import { 
  HardDrive, 
  Cpu, 
  Network, 
  Layers, 
  CheckCircle2
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface OpenDedicatedPrivateCloudCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const OpenDedicatedPrivateCloudCapabilities: React.FC<OpenDedicatedPrivateCloudCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'infrastructure' | 'compute' | 'network' | 'paas'>('infrastructure');
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos 
      ? 'Outstanding Infrastructure Features & Technology'
      : 'Tính Năng Hạ Tầng & Công Nghệ Vượt Trội',
    subtitle: isLaos
      ? 'Dedicated OpenStack cloud platform with high computing capacity and comprehensive integrated PaaS ecosystem.'
      : 'Hạ tầng đám mây mã nguồn mở OpenStack chuyên biệt, mang lại sức mạnh tính toán vượt trội và hệ sinh thái PaaS tích hợp toàn diện.',
  };

  const tabs = [
    { id: 'infrastructure', label: isLaos ? 'Infrastructure & SDS Storage' : 'Hạ tầng & Lưu trữ (SDS)', icon: HardDrive },
    { id: 'compute', label: isLaos ? 'Compute & Management' : 'Tính toán & Quản trị (Compute)', icon: Cpu },
    { id: 'network', label: isLaos ? 'SDN & Virtual Firewall (vFW)' : 'Mạng SDN & Bảo mật (vFW)', icon: Network },
    { id: 'paas', label: isLaos ? 'PaaS Ecosystem & DevOps' : 'Hệ sinh thái PaaS & DevOps', icon: Layers },
  ];

  const tabContents = {
    infrastructure: [
      {
        title: isLaos ? '100% Single-Tenant Physical Infrastructure' : 'Hạ tầng vật lý Single-Tenant 100%',
        desc: isLaos 
          ? 'Dedicated physical servers, Intel Xeon / AMD EPYC CPUs, and ECC RAM without hardware sharing.'
          : 'Toàn bộ máy chủ vật lý, vi xử lý CPU Intel Xeon / AMD EPYC và RAM được cấp phát riêng biệt 100%, không chia sẻ phần cứng.',
      },
      {
        title: isLaos ? 'Ceph Software-Defined Storage (SDS)' : 'Lưu trữ phân tán SDS Ceph Storage',
        desc: isLaos 
          ? 'Distributed All-Flash / Enterprise SSD storage with 3x replication ensuring absolute data integrity.'
          : 'Khối lưu trữ Software Defined Storage (SDS) All-Flash / Enterprise SSD với cơ chế nhân bản 3x Replicas, đảm bảo dữ liệu toàn vẹn tuyệt đối.',
      },
      {
        title: isLaos ? 'Tier 3 ANSI/TIA-942 Rated 3 Data Centers' : 'Trung tâm dữ liệu chuẩn ANSI/TIA-942 Rated 3',
        desc: isLaos 
          ? 'Operated securely on Viettel IDC Tier 3 certified data centers with 99.99% availability.'
          : 'Vận hành an toàn trên hệ thống Data Center hiện đại hàng đầu Việt Nam tại Pháp Vân, Hòa Lạc, Bình Dương và Hoàng Hoa Thám.',
      },
    ],
    compute: [
      {
        title: isLaos ? 'OpenStack Enterprise Hardened Virtualization' : 'Ảo hóa KVM OpenStack Enterprise Hardened',
        desc: isLaos 
          ? 'Standardized OpenStack cloud platform optimizing hardware efficiency with zero hypervisor licensing fee.'
          : 'Nền tảng OpenStack chuẩn hóa quốc tế với khả năng tối ưu hóa tài nguyên phần cứng, không phát sinh chi phí bản quyền ảo hóa.',
      },
      {
        title: isLaos ? 'Flexible Custom Flavors' : 'Tự do tùy biến cấu hình VM (Flavors)',
        desc: isLaos 
          ? 'Freely configure custom VM instances tailored to your exact application workloads.'
          : 'Khởi tạo linh hoạt các máy ảo với tỷ lệ vCPU:RAM tùy ý theo sát bài toán tải thực tế của doanh nghiệp thay vì bị bó hẹp.',
      },
      {
        title: isLaos ? 'Self-Service Cloud Portal & Horizon' : 'Cổng quản trị Self-Service Portal & Horizon',
        desc: isLaos 
          ? 'Intuitive portal for lifecycle management, real-time metrics monitoring, and granular IAM access control.'
          : 'Giao diện trực quan cho phép quản lý vòng đời tài nguyên, giám sát hiệu năng theo thời gian thực và phân quyền IAM chi tiết.',
      },
    ],
    network: [
      {
        title: isLaos ? '10 Gbps SDN Mesh Internal Network' : 'Mạng SDN Neutron 10 Gbps Mesh nội bộ',
        desc: isLaos 
          ? 'Software-defined networking enables flexible topology definitions, isolated subnets, and private routing.'
          : 'Hạ tầng mạng định nghĩa bằng phần mềm SDN cho phép thiết lập linh hoạt các Topology mạng phức tạp, Subnet và Private Router.',
      },
      {
        title: isLaos ? 'Virtual Firewall & 30 Security Groups' : 'Bảo mật mạng vFirewall & 30 Security Groups',
        desc: isLaos 
          ? 'Integrated vFirewall and security groups managing granular network isolation for applications.'
          : 'Tích hợp sẵn tường lửa ảo vFW và hệ thống nhóm bảo mật Security Groups quản lý phân vùng độc lập cho từng ứng dụng.',
      },
      {
        title: isLaos ? 'Hybrid Cloud Connectivity & Site-to-Site VPN' : 'Kết nối Hybrid Cloud & VPN Site-to-Site',
        desc: isLaos 
          ? 'Secure interconnection between oDPC cloud and enterprise on-premises datacenter via VPN / Direct Connect.'
          : 'Hỗ trợ kết nối an toàn, bảo mật giữa đám mây oDPC với hệ thống On-Premise hoặc các đám mây công cộng qua VPN/Direct Connect.',
      },
    ],
    paas: [
      {
        title: isLaos ? 'Integrated Virtual Load Balancer (vLB)' : 'Tích hợp sẵn vLB (Load Balancer)',
        desc: isLaos 
          ? 'Intelligent traffic balancing service enhancing application uptime and responsiveness across nodes.'
          : 'Dịch vụ cân bằng tải lưu lượng truy cập thông minh, tăng tính sẵn sàng và hiệu năng cho toàn bộ cụm ứng dụng.',
      },
      {
        title: isLaos ? 'Integrated Viettel Kubernetes Service (VKS)' : 'Tích hợp sẵn VKS (Viettel Kubernetes Service)',
        desc: isLaos 
          ? 'Instant provisioning of CNCF-certified Kubernetes clusters for microservices and automated CI/CD.'
          : 'Khởi tạo và quản lý cụm Kubernetes chuẩn CNCF nhanh chóng, phục vụ kiến trúc microservices và triển khai tự động.',
      },
      {
        title: isLaos ? 'Integrated Database Service (VDBS) & OpenStack API' : 'Tích hợp sẵn VDBS (Database Service) & RESTful API',
        desc: isLaos 
          ? 'Automated database service and standard OpenStack RESTful APIs fully compatible with Terraform.'
          : 'Cung cấp dịch vụ cơ sở dữ liệu tự động hóa cùng hệ thống OpenStack RESTful API tương thích hoàn hảo với Terraform và CI/CD.',
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
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

        {/* Active Tab Content Cards (Clean 3-column layout matching Cloud Server) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tabContents[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:bg-white hover:border-[var(--vidc-color-brand-red)] hover:shadow-lg transition-all duration-300"
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
