import React, { useState } from 'react';
import { 
  Zap, 
  Settings, 
  Layers, 
  Server, 
  DollarSign, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  RefreshCw,
  HardDrive
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudDRCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const CloudDRCapabilities: React.FC<CloudDRCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'failover' | 'management' | 'security'>('failover');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos 
      ? 'Technology Capabilities & Outstanding DR Features'
      : 'Tính năng công nghệ & Năng lực phục hồi thảm họa vượt trội',
    specTitle: isLaos ? 'Technical Specifications (Spec Sheet)' : 'Bảng thông số kỹ thuật tiêu chuẩn (Technical Spec Sheet)',
  };

  const tabs = [
    { id: 'failover', label: isLaos ? 'Failover & Scalability' : 'Khôi phục & Mở rộng', icon: Zap },
    { id: 'management', label: isLaos ? 'Management & Platforms' : 'Quản trị & Tương thích', icon: Settings },
    { id: 'security', label: isLaos ? 'Security & Economics' : 'Bảo mật & Tối ưu chi phí', icon: ShieldCheck },
  ];

  const tabContents = {
    failover: [
      {
        title: isLaos ? 'Rapid 1-Click Failover (~10m RTO)' : 'Khôi phục tức thời 1-Click Failover (RTO ~ 10 phút)',
        desc: isLaos 
          ? 'Execute pre-configured DR runbooks with a single click, restoring services within 10 minutes (partial or full failover).'
          : 'Kích hoạt kịch bản chuyển đổi dự phòng tức thời chỉ với một cú click chuột, phục hồi dịch vụ trong ~ 10 phút (kịch bản 1 phần hoặc toàn phần).',
      },
      {
        title: isLaos ? 'Elastic On-Demand Resource Scaling' : 'Co giãn tài nguyên linh hoạt khi có sự cố',
        desc: isLaos 
          ? 'Instantly scale up compute and storage capacity on disaster without disrupting existing production systems.'
          : 'Khả năng co giãn và cấp phát tài nguyên máy chủ tức thời khi có thảm họa mà không làm gián đoạn hay ảnh hưởng tải vận hành.',
      },
      {
        title: isLaos ? 'Periodic DR Drills Without Downtime' : 'Diễn tập DR định kỳ không gián đoạn hệ thống',
        desc: isLaos 
          ? 'Run test failovers in isolated test networks to validate business continuity plans without production impact.'
          : 'Thực hiện diễn tập chuyển đổi trong môi trường mạng thử nghiệm cô lập, đánh giá tính sẵn sàng mà không ảnh hưởng hệ thống thật.',
      },
    ],
    management: [
      {
        title: isLaos ? 'Centralized Self-Service Web Portal' : 'Cổng quản trị tự phục vụ tập trung 24/7',
        desc: isLaos 
          ? 'Proactively manage, configure, monitor, and receive alerts for replication jobs via a single unified dashboard.'
          : 'Chủ động khởi tạo, cấu hình, cập nhật, giám sát trạng thái và nhận cảnh báo các tiến trình sao chép (Replication Jobs) trên một giao diện.',
      },
      {
        title: isLaos ? 'Broad Virtualization (VMware & Hyper-V)' : 'Tương thích đa nền tảng ảo hóa VMware & Hyper-V',
        desc: isLaos 
          ? 'Deep compatibility with VMware vSphere and Microsoft Hyper-V, replicating data across heterogeneous storages.'
          : 'Tương thích sâu rộng với cả 2 nền tảng ảo hóa VMware vSphere và Microsoft Hyper-V, đồng bộ dữ liệu đa dạng kiến trúc lưu trữ.',
      },
      {
        title: isLaos ? 'Flexible Hybrid Cloud Topologies' : 'Linh hoạt mô hình On-Premise to Cloud & Zone-to-Zone',
        desc: isLaos 
          ? 'Supports On-Premise to Cloud via IPsec/MPLS and Zone-to-Zone across Viettel IDC multi-region cloud centers.'
          : 'Hỗ trợ cả mô hình On-Premise to Cloud qua kênh riêng mã hóa và Zone-to-Zone giữa các trung tâm dữ liệu Viettel IDC.',
      },
    ],
    security: [
      {
        title: isLaos ? 'Pay-as-you-failover Cost Optimization' : 'Tối ưu chi phí Compute (Pay-as-you-failover)',
        desc: isLaos 
          ? 'Standby compute resources are free; compute is charged only when failover is actually active, saving up to 50% TCO.'
          : 'Không phải trả phí vCPU/RAM trong trạng thái chờ dự phòng; chỉ tính phí tài nguyên xử lý khi thực tế kích hoạt Failover.',
      },
      {
        title: isLaos ? 'International Security Certifications' : 'Bảo mật chuẩn quốc tế ISO 27001 & ISO 27017',
        desc: isLaos 
          ? 'Meets rigorous cloud security standards ISO 27001, ISO 27017, ISO 9001 and Tier 3 TIA-942 Rated 3 data centers.'
          : 'Hạ tầng tuân thủ các chứng chỉ bảo mật quốc tế ISO 27001, ISO 27017, chuẩn thiết kế xây dựng TIA-942 Rated 3.',
      },
      {
        title: isLaos ? 'Integrated L7 Firewall & Anti-DDoS' : 'Lá chắn Firewall L7 & Chống DDoS hạ tầng L4',
        desc: isLaos 
          ? 'End-to-end data encryption in transit and at rest, coupled with carrier-grade DDoS mitigation and L7 perimeter firewall.'
          : 'Mã hóa dữ liệu trên đường truyền và tại đích, bảo vệ toàn diện với hệ thống tường lửa ứng dụng L7 và chống DDoS L4.',
      },
    ],
  };

  const specRows = [
    { item: 'Mô hình triển khai', detail: 'On-Premise to Cloud / Cloud to Cloud (Zone-to-Zone giữa vVPC & vDPC)' },
    { item: 'Nền tảng ảo hóa hỗ trợ', detail: 'VMware vSphere, Microsoft Hyper-V' },
    { item: 'Chỉ số RTO (Recovery Time Objective)', detail: '~ 10 phút phục hồi hoàn tất dịch vụ ứng dụng' },
    { item: 'Phương thức Failover', detail: '1-Click Failover (Hỗ trợ kịch bản 1 phần hoặc toàn phần)' },
    { item: 'Hạ tầng lưu trữ DR', detail: 'HDD phân tán dung lượng cao (Đóng gói block 50 GB, tối thiểu 1.050 GB)' },
    { item: 'Hạ tầng Data Center', detail: 'Chuẩn TIA-942 Rated 3 với độ sẵn sàng SLA 99.99%' },
    { item: 'An toàn thông tin & Mạng', detail: 'Firewall Layer 7, Hệ thống Anti-DDoS Layer 4, Kênh truyền MPLS/IPsec VPN' },
    { item: 'Chứng chỉ chất lượng', detail: 'ISO 27001:2013, ISO 27017:2015, ISO 9001:2015' },
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

        {/* Active Tab Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tabContents[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-[var(--vidc-color-brand-red)] hover:shadow-sm transition-all"
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

        {/* Standard Technical Spec Table */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-50 border border-slate-200/80 p-6">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--vidc-color-brand-red)]" />
            {t.specTitle}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-slate-700 bg-white rounded-xl border border-slate-200 overflow-hidden">
              <tbody className="divide-y divide-slate-100">
                {specRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                    <td className="py-3 px-4 font-bold text-slate-900 w-1/3 border-r border-slate-100">
                      {row.item}
                    </td>
                    <td className="py-3 px-4 text-slate-700 font-medium">
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
