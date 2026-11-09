import React, { useState } from 'react';
import { Layers, ShieldCheck, Activity, HardDrive, Cpu, Network, CheckCircle2, Server } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VKSFeaturesProps {
  currentMarket?: SEAMarket;
}

export const VKSFeatures: React.FC<VKSFeaturesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'orchestration' | 'storage_network' | 'security_devops'>('orchestration');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos
      ? 'Outstanding Kubernetes Infrastructure Features & Enterprise Technology'
      : 'Tính năng hạ tầng & Công nghệ Kubernetes vượt trội',
    specTitle: isLaos
      ? 'Standard Technical Specifications of Viettel Kubernetes Service (vKS)'
      : 'Bảng Thông Số Kỹ Thuật Tiêu Chuẩn Của Viettel Kubernetes Service (vKS)',
  };

  const tabs = [
    { id: 'orchestration', label: isLaos ? 'Orchestration & Workload' : 'Điều phối & Vận hành', icon: Cpu },
    { id: 'storage_network', label: isLaos ? 'Storage & Network' : 'Lưu trữ & Mạng lưới', icon: HardDrive },
    { id: 'security_devops', label: isLaos ? 'Security & Monitoring' : 'Bảo mật & Giám sát', icon: ShieldCheck },
  ];

  const tabContents = {
    orchestration: [
      {
        title: 'Quản Trị Node Group & Tự Động Phục Hồi (Auto-repair)',
        desc: 'Khởi tạo, gắn nhãn (Labels & Taints) và phân nhóm Worker Nodes linh hoạt. Tự động kiểm tra và thay thế các node gặp lỗi phần cứng hoặc treo hệ điều hành mà không làm gián đoạn cụm.',
      },
      {
        title: 'Triển Khai Không Gián Đoạn (Rolling Update & Zero-Downtime)',
        desc: 'Hỗ trợ nâng cấp phiên bản ứng dụng theo cơ chế Rolling Update mượt mà. Kết hợp linh hoạt các chiến lược triển khai tiên tiến như Blue-Green Deployment và Canary Release an toàn.',
      },
      {
        title: 'Co Giãn Linh Hoạt Đa Chiều (HPA, VPA, Cluster Autoscaler)',
        desc: 'Tự động mở rộng số lượng Pod theo ngưỡng tải CPU/RAM; đồng thời tự động thêm bớt Worker Node trong cụm khi tổng nhu cầu tài nguyên vượt ngưỡng giới hạn đã định.',
      },
    ],
    storage_network: [
      {
        title: 'Lưu Trữ Bền Vững & 01 NFS Node Chuyên Dụng (CSI Driver)',
        desc: 'Tích hợp sẵn NFS Server Node chuyên dụng làm backend lưu trữ Persistent Volume (PV). Chuẩn giao tiếp CSI Driver tiêu chuẩn cho phép tạo và mount Volume tự động vào Pod.',
      },
      {
        title: 'Mạng Lưới Container Calico CNI Tốc Độ Cao',
        desc: 'Sử dụng Calico CNI mang lại thông lượng mạng tối đa, định tuyến IP nội bộ phẳng giữa các Pod, hỗ trợ Network Policy phân đoạn bảo mật luồng giao tiếp giữa các microservices.',
      },
      {
        title: 'Ingress Controller & Cân Bằng Tải L4 - L7 Tự Động',
        desc: 'Tích hợp sẵn Ingress Controller (Nginx) cùng 2 IP Public tĩnh và 300 Mbps băng thông mạng, hỗ trợ định tuyến HTTP/HTTPS, SSL Offloading và phân phối tải thông minh.',
      },
    ],
    security_devops: [
      {
        title: 'Bảo Mật Đa Tầng Theo Chuẩn CIS Benchmark & RBAC',
        desc: 'Kiểm soát truy cập dựa trên vai trò (RBAC) chi tiết cho từng kỹ sư và Service Account. Control Plane tuân thủ nghiêm ngặt theo khuyến nghị bảo mật của CIS Kubernetes Benchmark.',
      },
      {
        title: 'Giám Sát 1-Click Prometheus, Grafana & vAPM',
        desc: 'Sẵn sàng cấu hình tích hợp bộ đôi công cụ mã nguồn mở Prometheus & Grafana để thu thập metrics, hiển thị dashboard tải thời gian thực và cảnh báo sự cố tức thì qua Alertmanager.',
      },
      {
        title: 'Đồng Bộ DevOps Pipeline & Viettel Container Registry',
        desc: 'Kết nối mượt mà với các nền tảng CI/CD (GitLab CI, GitHub Actions, Jenkins, ArgoCD) và Viettel Container Registry (vCR) cho quy trình đóng gói và deploy tự động.',
      },
    ],
  };

  const technicalSpecs = [
    { criterion: 'Phiên bản Kubernetes', spec: 'Kubernetes v1.31.x (Hỗ trợ nâng cấp định kỳ theo khuyến nghị CNCF)' },
    { criterion: 'Hệ điều hành Node ảo hóa', spec: 'Ubuntu 20.04.5 LTS / Linux Kernel 6.13 tối ưu cho container runtime' },
    { criterion: 'Container Runtime Engine', spec: 'Containerd v1.7.25 (Chuẩn runtime công nghiệp, thay thế dockershim)' },
    { criterion: 'Container Network Interface (CNI)', spec: 'Calico CNI (Hỗ trợ cấu hình Network Policy bảo mật và hiệu năng mạng cao)' },
    { criterion: 'Lưu trữ Node Storage', spec: '50 GB Enterprise SSD cục bộ trên mỗi node phục vụ hệ điều hành và cache' },
    { criterion: 'Lưu trữ dữ liệu bền vững (PV)', spec: 'Tích hợp 01 NFS Node chuyên dụng (50 GB - 100 GB SSD) & Block Storage CSI' },
    { criterion: 'Ingress Controller', spec: 'Nginx Ingress Controller cài đặt sẵn, hỗ trợ định tuyến Domain & SSL Termination' },
    { criterion: 'Tài nguyên mạng & IP Public', spec: 'Mặc định trang bị 02 IPv4 Public tĩnh, băng thông Internet trong nước 300 Mbps' },
    { criterion: 'Cam kết chất lượng dịch vụ (SLA)', spec: '99.99% độ sẵn sàng của hạ tầng cụm và Control Plane Kubernetes' },
    { criterion: 'Hạ tầng Trung tâm Dữ liệu', spec: 'Hệ thống Data Center Viettel IDC đạt chuẩn quốc tế ANSI/TIA-942 Rated 3' },
  ];

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header - Exactly like CloudServerCapabilities */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Tab Selection Bar - Exactly like CloudServerCapabilities */}
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

        {/* Active Tab Content Cards Grid - Exactly like CloudServerCapabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tabContents[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
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
            </div>
          ))}
        </div>

        {/* Bảng Thông Số Kỹ Thuật Tiêu Chuẩn */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)]">
              {t.specTitle}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Các thông số cấu hình mặc định được thiết lập trên mỗi cụm Viettel Kubernetes Service khi bàn giao.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider font-extrabold">
                  <th className="py-3 px-4 w-1/3">Tiêu Chí Kỹ Thuật</th>
                  <th className="py-3 px-4 w-2/3">Quy Chuẩn Viettel IDC Cung Cấp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 text-slate-700">
                {technicalSpecs.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">{row.criterion}</td>
                    <td className="py-3 px-4 font-medium text-slate-600">{row.spec}</td>
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
