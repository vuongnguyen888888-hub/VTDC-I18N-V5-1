import React from 'react';
import { 
  Code2, 
  KeyRound, 
  BarChart3, 
  FolderTree, 
  ShieldCheck, 
  Cpu, 
  Server, 
  CheckCircle2 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudObjectStorageCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const CloudObjectStorageCapabilities: React.FC<CloudObjectStorageCapabilitiesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'TECHNICAL CAPABILITIES & SPEC SHEET' : 'TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET',
    headline: isLaos ? 'Technological Capabilities & Deep Features' : 'Năng Lực Công Nghệ & Tính Năng Chuyên Sâu',
    featuresDesc: isLaos
      ? 'Comprehensive storage engineering tailored for modern cloud-native architectures, enterprise security, and seamless developer workflows.'
      : 'Được thiết kế chuyên sâu cho các ứng dụng đám mây hiện đại, tối ưu khả năng lập trình và đảm bảo an toàn dữ liệu cấp độ doanh nghiệp.',
    specHeadline: isLaos ? 'Standard Technical Specifications' : 'Bảng Thông Số Kỹ Thuật Tiêu Chuẩn',
    specSubtitle: isLaos
      ? 'Detailed technical specifications of Viettel Cloud Object Storage infrastructure and service standards.'
      : 'Tổng hợp chi tiết các chỉ số kỹ thuật tiêu chuẩn của dịch vụ Viettel Cloud Object Storage.',
  };

  const coreFeatures = [
    {
      icon: Code2,
      title: isLaos ? 'S3 API Connection & Compatibility' : 'Kết Nối & Tương Thích S3 API',
      desc: isLaos
        ? 'Supports rapid access and system integration via S3 API, HTTP/HTTPS protocols; provides multi-language SDKs (Python, Java, PHP, NodeJS, Go...) for effortless custom app development.'
        : 'Hỗ trợ truy cập và tích hợp hệ thống nhanh chóng qua S3 API, giao thức HTTP/HTTPS; cung cấp thư viện SDK đa ngôn ngữ (Python, Java, PHP, NodeJS, Go...) giúp người dùng dễ dàng tự phát triển ứng dụng.',
      tag: 'Standard S3 Compatible',
    },
    {
      icon: KeyRound,
      title: isLaos ? 'STS Access Control & Security' : 'Bảo Mật Phân Quyền STS (Security Token Service)',
      desc: isLaos
        ? 'Allows creating and granting temporary, time-bound access credentials for users or applications to designated S3 resources, greatly enhancing data security.'
        : 'Cho phép khởi tạo và cấp quyền truy cập tạm thời, có giới hạn thời gian cho người dùng hoặc ứng dụng vào các tài nguyên S3 chỉ định, tăng cường an toàn dữ liệu.',
      tag: 'Time-bound STS Tokens',
    },
    {
      icon: BarChart3,
      title: isLaos ? 'Real-Time Performance & Capacity Monitoring' : 'Giám Sát Hiệu Năng & Dung Lượng Trực Quan',
      desc: isLaos
        ? 'Provides intuitive real-time charts and detailed capacity reports on the Management Portal, or automated metric queries via extended APIs.'
        : 'Cung cấp biểu đồ trực quan và báo cáo dung lượng chi tiết theo thời gian thực trên Portal quản trị hoặc truy xuất tự động qua hệ thống API mở rộng.',
      tag: 'Live Metric Telemetry',
    },
    {
      icon: FolderTree,
      title: isLaos ? 'Centralized Data Management (Bucket & Object)' : 'Quản Lý Dữ Liệu Tập Trung (Bucket & Object)',
      desc: isLaos
        ? 'Intuitive Web Portal allowing complete administration, permission assignment, upload/download, and lifecycle policy configuration for each data bucket and object.'
        : 'Giao diện Web Portal thân thiện, cho phép người dùng toàn quyền quản trị, phân quyền, tải lên/xuống và cấu hình chính sách cho từng bucket và object dữ liệu.',
      tag: 'Granular Bucket Policies',
    },
  ];

  const specRows = [
    {
      category: isLaos ? 'Data Architecture' : 'Kiến trúc dữ liệu',
      detail: isLaos ? 'Object-based Storage for unstructured data' : 'Lưu trữ đối tượng phi cấu trúc (Object-based Storage)',
    },
    {
      category: isLaos ? 'Storage Tiers' : 'Phân lớp lưu trữ',
      detail: isLaos ? 'Gold (Hot / Frequent) / Silver (Warm / Infrequent) / Archive (Cold / Long-term)' : 'Gold (Truy cập thường xuyên) / Silver (Ít truy cập) / Archive (Lưu trữ dài hạn)',
    },
    {
      category: isLaos ? 'Supported Protocols' : 'Giao thức hỗ trợ',
      detail: isLaos ? 'Standard S3 RESTful API, HTTP / HTTPS' : 'Chuẩn S3 RESTful API, HTTP/HTTPS',
    },
    {
      category: isLaos ? 'Scalability' : 'Khả năng mở rộng',
      detail: isLaos ? 'Unlimited storage capacity (Petabyte-scale support)' : 'Không giới hạn dung lượng (Hỗ trợ cấp độ Petabyte)',
    },
    {
      category: isLaos ? 'Redundancy & Integrity' : 'Cơ chế dự phòng & Toàn vẹn',
      detail: isLaos ? 'Multi Availability Zone (Multi AZ) cross-datacenter physical synchronization' : 'Đồng bộ liên phân vùng vật lý (Multi Availability Zone - Multi AZ)',
    },
    {
      category: isLaos ? 'Authentication & Security' : 'Cơ chế xác thực & Bảo mật',
      detail: isLaos ? 'Access Key / Secret Key, Time-bound Temporary Authorization via STS' : 'Access Key / Secret Key, Phân quyền tạm thời qua STS (Security Token Service)',
    },
    {
      category: isLaos ? 'Data Center Infrastructure' : 'Hạ tầng Trung tâm Dữ liệu',
      detail: isLaos ? 'ANSI/TIA-942 Rated 3 Constructed Facility certified' : 'Đạt chuẩn quốc tế ANSI/TIA-942 Rated 3 Constructed Facility',
    },
    {
      category: isLaos ? 'Information Security Standards' : 'Tiêu chuẩn An toàn thông tin',
      detail: isLaos ? 'ISO 27001, ISO 27017, PCI-DSS, Level 3 Information Security Compliance' : 'ISO 27001, ISO 27017, PCI-DSS, Tiêu chuẩn an toàn thông tin Cấp độ 3',
    },
    {
      category: isLaos ? 'Network & Bandwidth' : 'Băng thông mạng',
      detail: isLaos ? 'High-speed domestic bandwidth, zero dependence on international submarine cables' : 'Băng thông nội địa tốc độ cao, không phụ thuộc cáp quang biển quốc tế',
    },
  ];

  return (
    <section 
      id="features" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {t.featuresDesc}
          </p>
        </div>

        {/* Grid 4 Khối Tính Năng Nòng Cốt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {coreFeatures.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-[var(--vidc-color-brand-red)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[var(--vidc-color-brand-red)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
                  <span>{isLaos ? 'Enterprise Production Ready' : 'Đạt chuẩn vận hành doanh nghiệp'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Spec Sheet Table Header */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight">
              {t.specHeadline}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              {t.specSubtitle}
            </p>
          </div>

          {/* Technical Spec Table */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-extrabold">
                  <th className="py-3.5 px-4 sm:px-6 w-1/3">
                    {isLaos ? 'Technical Category' : 'Hạng Mục Kỹ Thuật'}
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 w-2/3">
                    {isLaos ? 'Standard Specification (Viettel Cloud Object Storage)' : 'Chi Tiết Thông Số Tiêu Chuẩn Viettel Cloud Object Storage'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {specRows.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={idx % 2 === 0 ? 'bg-white hover:bg-slate-50/80 transition-colors' : 'bg-slate-50/50 hover:bg-slate-50 transition-colors'}
                  >
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 border-r border-slate-200">
                      {row.category}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-700">
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
