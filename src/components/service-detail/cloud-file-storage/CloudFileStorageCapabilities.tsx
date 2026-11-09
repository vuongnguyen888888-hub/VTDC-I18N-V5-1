import React from 'react';
import { 
  Network, 
  Settings2, 
  Zap, 
  ShieldCheck, 
  HardDrive, 
  FolderTree, 
  CheckCircle2, 
  Server,
  Layers
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudFileStorageCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const CloudFileStorageCapabilities: React.FC<CloudFileStorageCapabilitiesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'TECHNICAL CAPABILITIES & SPEC SHEET' : 'TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET',
    headline: isLaos ? 'Technological Capabilities & Deep Features' : 'Năng Lực Công Nghệ & Tính Năng Chuyên Sâu',
    featuresDesc: isLaos
      ? 'Designed for modern enterprise workloads, high-speed file sharing across multi-cloud environments, and rock-solid enterprise security.'
      : 'Hệ thống lưu trữ tệp phân cấp được thiết kế chuyên sâu cho các ứng dụng doanh nghiệp, tối ưu tốc độ chia sẻ dữ liệu và an toàn bảo mật tuyệt đối.',
    specHeadline: isLaos ? 'Standard Technical Specifications' : 'Bảng Thông Số Kỹ Thuật Tiêu Chuẩn',
    specSubtitle: isLaos
      ? 'Comprehensive technical parameters of Viettel Cloud File Storage infrastructure and service standards.'
      : 'Tổng hợp chi tiết các chỉ số kỹ thuật tiêu chuẩn của dịch vụ Viettel Cloud File Storage (vCFS).',
  };

  const coreFeatures = [
    {
      icon: Network,
      title: isLaos ? 'Standard & Multi-Platform Connectivity' : 'Kết Nối Tiêu Chuẩn & Đa Nền Tảng',
      desc: isLaos
        ? 'Directly integrates standard CIFS/SMB (Windows) and NFS (Linux/Unix) protocols, making network drive mounting instant without third-party middleware.'
        : 'Tích hợp trực tiếp các giao thức chuẩn CIFS/SMB (Windows) và NFS (Linux/Unix), giúp mount ổ đĩa mạng chia sẻ diễn ra tức thì mà không cần cài đặt thêm phần mềm trung gian.',
      tag: 'Native NFS & CIFS/SMB',
    },
    {
      icon: Settings2,
      title: isLaos ? 'Streamlined Provisioning & Administration' : 'Khởi Tạo & Quản Trị Tinh Gọn',
      desc: isLaos
        ? 'Simple and rapid hierarchical file system creation and configuration via an intuitive Web Portal interface.'
        : 'Khởi tạo và cấu hình hệ thống file phân cấp đơn giản, nhanh chóng thông qua giao diện Web Portal trực quan.',
      tag: 'Self-Service Portal',
    },
    {
      icon: Zap,
      title: isLaos ? 'Elastic Performance & Throughput' : 'Hiệu Năng & Thông Lượng Co Giãn',
      desc: isLaos
        ? 'Flexibly meets storage capacity growth demands, rapid throughput upgrades up to 500 MB/s tailored for high-load application workloads.'
        : 'Linh hoạt đáp ứng nhu cầu mở rộng về dung lượng và quy mô hệ thống, nâng cấp thông lượng nhanh chóng phù hợp với nhiều workload ứng dụng tải cao.',
      tag: 'Up to 500 MB/s Throughput',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Comprehensive Data Security & Integrity' : 'Bảo Mật & An Toàn Dữ Liệu',
      desc: isLaos
        ? 'Distributed storage infrastructure designed to ensure absolute security, granular access permissions, and high continuous availability (SLA 99.99%).'
        : 'Hạ tầng lưu trữ phân tán được thiết kế đảm bảo an toàn tuyệt đối về bảo mật, phân quyền truy cập chi tiết và duy trì độ sẵn sàng cao.',
      tag: 'Enterprise SLA 99.99%',
    },
  ];

  const specRows = [
    {
      category: isLaos ? 'Data Architecture' : 'Kiến trúc dữ liệu',
      detail: isLaos ? 'Hierarchical Tree File System' : 'Cấu trúc phân cấp hình cây (Hierarchical Tree File System)',
    },
    {
      category: isLaos ? 'Supported Protocols' : 'Giao thức hỗ trợ',
      detail: isLaos ? 'NFS (Linux/Unix) & CIFS/SMB (Windows Server)' : 'NFS (Network File System cho Linux), CIFS/SMB (cho Windows)',
    },
    {
      category: isLaos ? 'Storage Tiers' : 'Phân lớp ổ đĩa',
      detail: isLaos ? '100% Enterprise SSD (High Performance) or HDD (High Capacity)' : 'Tùy chọn 100% Enterprise SSD (Hiệu năng cao) hoặc HDD (Dung lượng lớn)',
    },
    {
      category: isLaos ? 'Metadata Management' : 'Quản lý Metadata',
      detail: isLaos ? 'Automatically managed via File System (FS)' : 'Tự động quản lý metadata thông qua File System (FS)',
    },
    {
      category: isLaos ? 'Storage Capacity' : 'Dung lượng lưu trữ',
      detail: isLaos ? 'Unlimited scalability (Provision from 50 GB to 1,000+ TB)' : 'Cung cấp không giới hạn (Khởi tạo từ 50 GB đến hơn 1.000 TB)',
    },
    {
      category: isLaos ? 'Default Throughput' : 'Thông lượng mặc định',
      detail: isLaos ? 'Default 38 MB/s free (Expandable up to 500 MB/s)' : 'Mặc định 38 MB/s (Hỗ trợ nâng cấp thêm lên tới 500 MB/s)',
    },
    {
      category: isLaos ? 'Supported File Count' : 'Số lượng file hỗ trợ',
      detail: isLaos ? 'Default 15,000,000 files free (Expandable to 150,000,000 files)' : 'Mặc định miễn phí 15.000.000 file (Mở rộng lên tới 150.000.000 file)',
    },
    {
      category: isLaos ? 'Connecting Environments' : 'Môi trường kết nối',
      detail: isLaos ? 'Cloud Virtual Machines (VM), Dedicated Servers, On-premises' : 'Máy chủ ảo (Cloud VM), Dedicated Server, Máy chủ tại chỗ (On-premises)',
    },
    {
      category: isLaos ? 'Data Center Infrastructure' : 'Hạ tầng Trung tâm dữ liệu',
      detail: isLaos ? 'Viettel IDC Data Centers certified ANSI/TIA-942 Rated 3' : 'Hệ thống Data Center Viettel IDC đạt chuẩn quốc tế ANSI/TIA-942 Rated 3',
    },
    {
      category: isLaos ? 'Information Security' : 'Tiêu chuẩn An toàn thông tin',
      detail: isLaos ? 'ISO 27001, ISO 27017, ISO 9001, Level 3 Security Compliance' : 'Tuân thủ ISO 27001, ISO 27017, ISO 9001 và quy chuẩn ATTT cấp độ 3',
    },
    {
      category: isLaos ? 'Service Level Agreement' : 'Cam kết chất lượng (SLA)',
      detail: isLaos ? '99.99% Continuous Operational Availability' : '99.99% độ sẵn sàng vận hành liên tục',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white text-slate-800">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[var(--vidc-color-brand-red)] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-snug">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            {t.featuresDesc}
          </p>
        </div>

        {/* 4 Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {coreFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all hover:shadow-md group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-white text-[var(--vidc-color-brand-red)] shadow-sm border border-slate-100 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-mono">
                      {feat.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Sẵn sàng kết nối trên Viettel IDC Cloud</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Spec Table */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                {t.specHeadline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {t.specSubtitle}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold font-mono">
              TIA-942 Rated 3
            </span>
          </div>

          <div className="divide-y divide-slate-100 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th className="py-3.5 px-6 w-1/3">Hạng mục kỹ thuật</th>
                  <th className="py-3.5 px-6 w-2/3">Chi tiết thông số tiêu chuẩn Viettel Cloud File Storage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {specRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-6 font-semibold text-slate-900 bg-slate-50/40">
                      {row.category}
                    </td>
                    <td className="py-3 px-6 font-medium text-slate-700">
                      {row.detail}
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
