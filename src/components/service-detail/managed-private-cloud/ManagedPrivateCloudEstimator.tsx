import React, { useState } from 'react';
import { 
  Server, 
  Cpu, 
  HardDrive, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Settings, 
  FileSpreadsheet, 
  Briefcase, 
  Key, 
  Headphones,
  CheckCircle2,
  Layers,
  Building2
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


export interface ManagedCloudConfig {
  packageName: string;
  nodeCount: number;
  cpuPerNode: string;
  ramPerNode: string;
  storageRaw: string;
  hypervisor: 'vmware' | 'openstack';
  managementTier: 'standard' | 'premium';
  datacenter: string;
  billingCycleMonths: number;
}

interface ManagedPrivateCloudEstimatorProps {
  currentMarket: SEAMarket;
  onSelectConfigForQuote: (config: ManagedCloudConfig, total: number, currency: string) => void;
}

export const ManagedPrivateCloudEstimator: React.FC<ManagedPrivateCloudEstimatorProps> = ({
  currentMarket,
  onSelectConfigForQuote,
}) => {
  const isLaos = currentMarket.code === 'la';

  const t = {
    eyebrow: isLaos ? 'PRICING & INVESTMENT ESTIMATION' : 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
    headline: isLaos
      ? 'Flexible Investment & Quotation Model According to Enterprise Needs'
      : 'Phương Án Báo Giá & Đầu Tư Linh Hoạt Theo Nhu Cầu Doanh Nghiệp',
    subtitle: isLaos
      ? 'Viettel Managed Private Cloud (vMPC) service is custom-tailored based on hardware scale, existing datacenter architecture, and required managed services scope.'
      : 'Dịch vụ Viettel Managed Private Cloud (vMPC) được thiết kế và may đo riêng biệt (Custom-tailored) dựa trên quy mô phần cứng, kiến trúc trung tâm dữ liệu hiện hữu và phạm vi dịch vụ ủy thác quản trị (Managed Services) mà doanh nghiệp yêu cầu.',
    tableTitle: isLaos ? 'Investment Solution Components Framework' : 'Khung các thành phần giải pháp đầu tư',
    tableSubtitle: isLaos ? 'Custom-tailored On-premises Architecture' : 'Kiến trúc On-premises may đo',
    col1: isLaos ? 'Solution Component' : 'Hạng mục cấu phần giải pháp',
    col2: isLaos ? 'Scope of Supply' : 'Chi tiết phạm vi cung cấp',
    col3: isLaos ? 'Billing Model' : 'Hình thức tính cước',
    ctaBoxTitle: isLaos 
      ? '💡 Need an on-site DC survey & tailored budget estimation for vMPC?' 
      : '💡 Doanh nghiệp cần khảo sát hiện trạng Data Center và xây dựng dự toán ngân sách chi tiết cho vMPC?',
    ctaBoxDesc: isLaos
      ? 'Our VMware & Viettel IDC solution architects will conduct an on-site technical assessment within 24 hours.'
      : 'Đội ngũ chuyên gia kiến trúc giải pháp Viettel IDC & VMware sẽ liên hệ và thực hiện khảo sát kỹ thuật trong vòng 24h.',
    ctaButton: isLaos ? 'Get Architecture Consultation & Solution Quote' : 'Nhận Tư Vấn Kiến Trúc & Báo Giá Giải Pháp',
  };

  const solutionComponents = [
    {
      category: isLaos ? 'Consulting & Architecture Design Package' : 'Gói Tư vấn & Thiết kế Kiến trúc',
      scope: isLaos 
        ? 'Survey existing DC conditions, strategic consulting, hardware sizing planning, and detailed blueprint documentation' 
        : 'Khảo sát hiện trạng DC, tư vấn chiến lược, quy hoạch sizing phần cứng và lập hồ sơ thiết kế chi tiết',
      billingModel: isLaos ? 'Turnkey Project-based' : 'Trọn gói theo dự án',
      icon: Briefcase,
    },
    {
      category: isLaos ? 'Deployment & Optimization Package' : 'Gói Triển khai & Tối ưu hóa',
      scope: isLaos 
        ? 'Installation, configuration of VMware Private Cloud ecosystem, network security setup, and data migration' 
        : 'Cài đặt, cấu hình hệ sinh thái VMware Private Cloud, thiết lập mạng bảo mật và chuyển đổi dữ liệu (Migration)',
      billingModel: isLaos ? 'Turnkey Deployment' : 'Trọn gói triển khai',
      icon: Settings,
    },
    {
      category: isLaos ? 'VMware Platform License' : 'Bản quyền Nền tảng VMware',
      scope: isLaos 
        ? 'Genuine VMware enterprise licenses tailored to system scale requirements' 
        : 'Cung cấp gói License VMware chính hãng theo chuẩn quy mô hệ thống',
      billingModel: isLaos ? 'Periodic Subscription / Perpetual' : 'Thuê bao định kỳ / Sở hữu vĩnh viễn',
      icon: Key,
    },
    {
      category: isLaos ? '24/7 Managed Services Package' : 'Gói Dịch vụ Managed Services 24/7',
      scope: isLaos 
        ? 'Performance monitoring, incident management, regular maintenance, security patching, and continuous optimization' 
        : 'Giám sát hiệu năng, quản trị sự cố, bảo trì định kỳ, vá lỗi bảo mật và tối ưu hạ tầng liên tục',
      billingModel: isLaos ? 'Periodic Subscription (Monthly / Quarterly / Yearly)' : 'Thuê bao định kỳ (Tháng / Quý / Năm)',
      icon: Headphones,
    },
  ];

  const packageTiers = [
    {
      id: 'starter',
      name: isLaos ? 'Standard Managed (3 Nodes)' : 'Gói Standard Managed (3 Nodes)',
      desc: isLaos ? 'Optimal for core business branches or medium enterprise workloads' : 'Phù hợp hệ thống chi nhánh trọng yếu hoặc khối doanh nghiệp quy mô vừa',
      nodes: 3,
      cpu: '2x Intel® Xeon® Silver (32 Cores/node)',
      ram: '256 GB ECC DDR5 / node (Tổng 768 GB)',
      storage: '10 TB NVMe All-Flash Enterprise SAN',
      sla: '99.95%',
      tier: 'standard' as const,
    },
    {
      id: 'enterprise',
      name: isLaos ? 'Enterprise Managed (5 Nodes)' : 'Gói Enterprise Managed (5 Nodes)',
      desc: isLaos ? 'Ideal for ERP, SAP, Core Banking, and high-availability workloads' : 'Chuẩn mực cho ERP, SAP, Core Banking và ứng dụng đòi hỏi HA tuyệt đối',
      nodes: 5,
      cpu: '2x Intel® Xeon® Gold/Platinum (64 Cores/node)',
      ram: '512 GB ECC DDR5 / node (Tổng 2.5 TB)',
      storage: '25 TB NVMe All-Flash Enterprise SAN (x3 Replicas)',
      sla: '99.99%',
      isPopular: true,
      tier: 'premium' as const,
    },
    {
      id: 'custom',
      name: isLaos ? 'Custom Tailored Architecture' : 'Kiến Trúc May Đo Riêng',
      desc: isLaos ? 'Designed specifically for large multi-datacenter setups & Sovereign Cloud' : 'Thiết kế riêng cho hệ thống phân tán đa Data Center và Sovereign Cloud',
      nodes: 8,
      cpu: 'Tối ưu theo khảo sát kiến trúc chuyên sâu',
      ram: 'Tối ưu theo quy mô tải thực tế',
      storage: 'SAN / vSAN All-Flash dung lượng linh hoạt',
      sla: '99.99%',
      tier: 'premium' as const,
    },
  ];

  const handleSelectPackage = (pkg: typeof packageTiers[0]) => {
    const config: ManagedCloudConfig = {
      packageName: pkg.name,
      nodeCount: pkg.nodes,
      cpuPerNode: pkg.cpu,
      ramPerNode: pkg.ram,
      storageRaw: pkg.storage,
      hypervisor: 'vmware',
      managementTier: pkg.tier,
      datacenter: 'Data Center Khách Hàng (On-premises)',
      billingCycleMonths: 12,
    };
    onSelectConfigForQuote(config, 0, currentMarket.currency);
  };

  return (
    <section id="pricing" className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-3">
            {t.headline}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Khung các thành phần giải pháp đầu tư */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-10">
          <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <FileSpreadsheet className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
              <span className="font-bold text-sm sm:text-base">
                {t.tableTitle}
              </span>
            </div>
            <span className="text-xs text-slate-300 hidden sm:inline-block">
              {t.tableSubtitle}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[var(--vidc-legacy-hex-222225)] text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                  <th className="py-4 px-6 w-1/3">{t.col1}</th>
                  <th className="py-4 px-6 w-5/12">{t.col2}</th>
                  <th className="py-4 px-6 w-1/4 text-center sm:text-right">{t.col3}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                {solutionComponents.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-6 font-bold text-[var(--vidc-legacy-hex-222225)] flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="pt-1.5 font-semibold text-slate-900">{item.category}</span>
                      </td>
                      <td className="py-4 px-6 text-slate-600 leading-relaxed">
                        {item.scope}
                      </td>
                      <td className="py-4 px-6 font-semibold text-slate-900 text-center sm:text-right">
                        <span className="inline-block px-3 py-1.5 bg-slate-100 rounded-md border border-slate-200 text-slate-800 text-xs font-bold">
                          {item.billingModel}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom Configurator CTA Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[var(--vidc-legacy-hex-222225)] mb-1">
                {t.ctaBoxTitle}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                {t.ctaBoxDesc}
              </p>
            </div>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={() => handleSelectPackage(packageTiers[1])}
            className="w-full md:w-auto whitespace-nowrap inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0"
          >
            <span>{t.ctaButton}</span>
            <ArrowRight className="w-4 h-4" />
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
