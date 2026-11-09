import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Sliders, 
  ChevronDown, 
  HardDrive, 
  ShieldCheck, 
  Calculator,
  Server,
  Cloud
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';


interface CloudDRPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (notes?: string) => void;
}

export const CloudDRPricing: React.FC<CloudDRPricingProps> = ({ currentMarket, onOpenConsult }) => {
  const [modelType, setModelType] = useState<'cloud-to-cloud' | 'onprem-to-cloud'>('cloud-to-cloud');
  const [billingMode, setBillingMode] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedRegion, setSelectedRegion] = useState<'north' | 'central' | 'south'>('north');
  const [isSpecTableOpen, setIsSpecTableOpen] = useState(false);

  // Custom estimator sliders
  const [vmCount, setVmCount] = useState<number>(3);
  const [storageGb, setStorageGb] = useState<number>(2000);

  const isLaos = currentMarket?.code !== 'vn';
  const discountRate = billingMode === 'yearly' ? 0.1 : 0;

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos ? 'Choose the optimal Disaster Recovery configuration' : 'Lựa chọn gói dự phòng thảm họa tối ưu cho doanh nghiệp',
    desc: isLaos 
      ? 'Transparent cost model: only standby storage and DR license fees apply. Compute power is billed only upon failover.'
      : 'Cơ chế tính phí minh bạch: chỉ trả phí lưu trữ và license DR trong thời gian dự phòng; tài nguyên xử lý chỉ tính khi kích hoạt Failover.',
    deploymentModel: isLaos ? 'DEPLOYMENT MODEL:' : 'MÔ HÌNH TRIỂN KHAI:',
    infrastructureRegion: isLaos ? 'INFRASTRUCTURE REGION:' : 'KHU VỰC HẠ TẦNG:',
    billingCycle: isLaos ? 'BILLING CYCLE:' : 'CHU KỲ THANH TOÁN:',
    north: isLaos ? 'North' : 'Miền Bắc',
    central: isLaos ? 'Central' : 'Miền Trung',
    south: isLaos ? 'South' : 'Miền Nam',
    monthlyPlan: isLaos ? 'Monthly' : 'Theo tháng',
    yearlyPlan: isLaos ? '12 Months (-10%)' : '12 Tháng (-10%)',
    config: isLaos ? 'CONFIGURATION' : 'CẤU HÌNH',
    detailDesc: isLaos ? 'Package includes:' : 'Cấu hình chi tiết bao gồm:',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    consultBtn: isLaos ? 'REQUEST CONSULTATION' : 'NHẬN TƯ VẤN',
    customTitle: isLaos ? 'Custom Disaster Recovery Capacity & Drills' : 'May đo cấu hình dự phòng & Diễn tập DR theo nhu cầu',
    customDesc: isLaos 
      ? 'Need protection for dozens or hundreds of virtual machines? We provide customized DR architectures, continuous replication networks, and periodic DR drill support.'
      : 'Cần bảo vệ hạ tầng lớn từ hàng chục đến hàng trăm máy chủ? Chúng tôi hỗ trợ may đo kiến trúc DR chuyên biệt, thiết lập đường truyền đồng bộ và tổ chức diễn tập DR định kỳ.',
    customBtn: isLaos ? 'REQUEST CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatFootnote: isLaos 
      ? '* All service pricing excludes taxes. Compute resources (vCPU, RAM) are billed only when failover is actually active.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT. Tài nguyên xử lý (vCPU, RAM) chỉ phát sinh khi thực tế kích hoạt Failover.',
  };

  const getStorageRate = (gb: number) => {
    if (gb > 10000) return 1150;
    if (gb >= 5000) return 1350;
    return 1450;
  };

  const getVmRate = (type: 'cloud-to-cloud' | 'onprem-to-cloud') => {
    return type === 'cloud-to-cloud' ? 600000 : 650000;
  };

  const normalizedStorage = Math.ceil(Math.max(1050, storageGb) / 50) * 50;
  const storageRate = getStorageRate(normalizedStorage);
  const licenseRate = getVmRate(modelType);
  const rawCustomMonthly = (vmCount * licenseRate) + (normalizedStorage * storageRate);
  const effectiveCustomMonthly = Math.round(rawCustomMonthly * (1 - discountRate));

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount);
  };

  // 4 Standard Preset Packages matching Cloud Server card style
  const packages = [
    {
      id: 'dr1',
      name: isLaos ? 'Package DR1' : 'Gói DR1',
      subtitle: 'STARTER WORKLOAD',
      vms: 1,
      storage: 1050,
      rto: '~ 10 phút',
      hypervisor: 'VMware / Hyper-V',
      storageDesc: '1.050 GB HDD Storage',
      support: '24/7 Monitoring & Support',
      badge: null,
      recommended: false,
    },
    {
      id: 'dr2',
      name: isLaos ? 'Package DR2' : 'Gói DR2',
      subtitle: isLaos ? 'MOST POPULAR' : 'PHỔ BIẾN NHẤT',
      vms: 3,
      storage: 2000,
      rto: '~ 10 phút',
      hypervisor: 'VMware / Hyper-V',
      storageDesc: '2.000 GB HDD Storage',
      support: 'Hỗ trợ diễn tập DR định kỳ',
      badge: isLaos ? '★ BEST SELLER' : '★ BÁN CHẠY',
      recommended: true,
    },
    {
      id: 'dr3',
      name: isLaos ? 'Package DR3' : 'Gói DR3',
      subtitle: 'BUSINESS CONTINUITY',
      vms: 5,
      storage: 4000,
      rto: '~ 10 phút',
      hypervisor: 'VMware / Hyper-V',
      storageDesc: '4.000 GB HDD Storage',
      support: 'Kênh truyền riêng MPLS / VPN',
      badge: null,
      recommended: false,
    },
    {
      id: 'dr4',
      name: isLaos ? 'Package DR4' : 'Gói DR4',
      subtitle: 'ENTERPRISE CRITICAL',
      vms: 10,
      storage: 8000,
      rto: '~ 10 phút',
      hypervisor: 'VMware / Hyper-V',
      storageDesc: '8.000 GB HDD Storage (Bậc 2)',
      support: 'Chuyên gia Viettel L3 kèm cặp',
      badge: isLaos ? 'ENTERPRISE' : 'DOANH NGHIỆP',
      recommended: false,
    },
  ];

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f8fafc)] border-b border-slate-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.pricingTitle}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Top Control Bar: Deployment Model & Region Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-12 text-xs">
          
          {/* Mô hình triển khai */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.deploymentModel}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setModelType('cloud-to-cloud')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  modelType === 'cloud-to-cloud'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Cloud to Cloud
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setModelType('onprem-to-cloud')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  modelType === 'onprem-to-cloud'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                On-Premise to Cloud
              </VIDCNativeButton>
            </div>
          </div>

          {/* Khu vực hạ tầng */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.infrastructureRegion}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('north')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  selectedRegion === 'north'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.north}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('central')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  selectedRegion === 'central'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.central}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('south')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  selectedRegion === 'south'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.south}
              </VIDCNativeButton>
            </div>
          </div>

          {/* Chu kỳ thanh toán */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.billingCycle}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingMode('monthly')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  billingMode === 'monthly'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.monthlyPlan}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingMode('yearly')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  billingMode === 'yearly'
                    ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.yearlyPlan}
              </VIDCNativeButton>
            </div>
          </div>

        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 items-stretch">
          {packages.map((pkg) => {
            const isRecommended = pkg.recommended;
            const currentVmRate = getVmRate(modelType);
            const currentStorageRate = getStorageRate(pkg.storage);
            const rawMonthly = (pkg.vms * currentVmRate) + (pkg.storage * currentStorageRate);
            const displayMonthly = Math.round(rawMonthly * (1 - discountRate));

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-5 bg-white border border-slate-200/90 flex flex-col justify-between transition-all duration-300 ${
                  isRecommended
                    ? 'shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-300 ring-2 ring-[var(--vidc-color-brand-red)]/10'
                    : 'shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Card Header: Title, Subtitle, Badge */}
                  <div className="min-h-[52px] mb-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
                        {pkg.name}
                      </h3>
                      {pkg.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/80 whitespace-nowrap">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-0.5">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="my-3 pb-3 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">
                        {formatVND(displayMonthly)}
                      </span>
                      <span className="text-[11px] font-extrabold text-slate-500 uppercase">
                        Đ/THÁNG
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">
                      Standby: {pkg.vms} License VM + {formatVND(pkg.storage)} GB HDD
                    </div>
                  </div>

                  {/* Specs List */}
                  <div className="space-y-2.5 my-4">
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      {t.detailDesc}
                    </p>
                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-semibold text-slate-900">{pkg.vms} Máy chủ ảo (VMs)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pkg.storageDesc}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>RTO khôi phục: <strong className="text-slate-900">{pkg.rto}</strong></span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pkg.hypervisor}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{pkg.support}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult(`Đăng ký gói ${pkg.name} (${modelType === 'cloud-to-cloud' ? 'Cloud to Cloud' : 'On-Prem to Cloud'}) - ${pkg.vms} VMs, ${pkg.storage} GB Storage`)}
                    className="w-full py-2.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{t.registerNow}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </VIDCNativeButton>

                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult(`Yêu cầu tư vấn diễn tập DR cho gói ${pkg.name}`)}
                    className="w-full py-2 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs transition-all cursor-pointer"
                  >
                    {t.consultBtn}
                  </VIDCNativeButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Configuration Banner — Dark Theme matching CloudServer */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-700/80 shadow-xl mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-700/80">
            <div className="space-y-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/10 text-slate-200 text-xs font-bold mb-1">
                <Sliders className="w-3.5 h-3.5 text-red-400" />
                <span>{t.config}</span>
              </div>
              <h3 className="text-xl font-extrabold tracking-tight">
                {t.customTitle}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.customDesc}
              </p>
            </div>

            <div className="text-left lg:text-right shrink-0">
              <div className="text-xs text-slate-400">Ước tính duy trì DR tùy biến:</div>
              <div className="text-3xl font-black text-red-400">
                {formatVND(effectiveCustomMonthly)} <span className="text-xs font-bold text-slate-400">đ/tháng</span>
              </div>
              <VIDCNativeButton
                type="button"
                onClick={() => onOpenConsult(`Dự toán tùy biến: ${vmCount} VMs, ${normalizedStorage} GB HDD (${modelType === 'cloud-to-cloud' ? 'Cloud to Cloud' : 'On-Prem to Cloud'}) - Ước tính ${formatVND(effectiveCustomMonthly)} đ/tháng`)}
                className="mt-3 px-6 py-2.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                {t.customBtn}
              </VIDCNativeButton>
            </div>
          </div>

          {/* 2 Interactive Range Sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-300">Số lượng máy chủ ảo cần bảo vệ (VMs):</span>
                <span className="text-red-400">{vmCount} VMs</span>
              </div>
              <VIDCNativeInput
                type="range"
                min="1"
                max="50"
                step="1"
                value={vmCount}
                onChange={(e) => setVmCount(Number(e.target.value))}
                className="w-full accent-[var(--vidc-color-brand-red)] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>1 VM</span>
                <span>10 VMs</span>
                <span>25 VMs</span>
                <span>50 VMs</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-300">Dung lượng HDD lưu trữ (block 50GB):</span>
                <span className="text-red-400">{formatVND(normalizedStorage)} GB</span>
              </div>
              <VIDCNativeInput
                type="range"
                min="1050"
                max="25000"
                step="250"
                value={storageGb}
                onChange={(e) => setStorageGb(Number(e.target.value))}
                className="w-full accent-[var(--vidc-color-brand-red)] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>1.050 GB</span>
                <span>5.000 GB</span>
                <span>10.000 GB</span>
                <span>25.000 GB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Full Official Spec Rate Card (Table Section) */}
        <div className="max-w-5xl mx-auto mb-8">
          <VIDCNativeButton
            type="button"
            onClick={() => setIsSpecTableOpen(!isSpecTableOpen)}
            className="w-full py-4 px-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-between text-left group cursor-pointer shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center font-bold">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-extrabold text-slate-900 block group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                  {isSpecTableOpen ? 'Thu gọn khung đơn giá quy định' : 'Xem khung đơn giá quy định & chi tiết bậc lưu trữ'}
                </span>
                <span className="text-xs text-slate-500">
                  Biểu giá chi tiết dung lượng HDD theo bậc & License DR cho mô hình Cloud to Cloud và On-Premise to Cloud
                </span>
              </div>
            </div>
            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isSpecTableOpen ? 'rotate-180 text-[var(--vidc-color-brand-red)]' : ''}`} />
          </VIDCNativeButton>

          {isSpecTableOpen && (
            <div className="mt-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-8 animate-in fade-in duration-200">
              {/* Table 1: Cloud to Cloud */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--vidc-color-brand-red)]" />
                  <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                    1. Bảng giá DR từ Zone A sang Zone B (Cloud to Cloud - Áp dụng vVPC; vDPC)
                  </h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left text-slate-700 border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-100 text-slate-900 font-extrabold uppercase text-[11px] border-b border-slate-200">
                      <tr>
                        <th className="p-3 w-12 text-center">STT</th>
                        <th className="p-3">Loại tài nguyên</th>
                        <th className="p-3">Cấu hình / tháng</th>
                        <th className="p-3">Đơn vị tính</th>
                        <th className="p-3 text-right">Đơn giá / tháng (VNĐ)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 text-center font-bold" rowSpan={3}>1</td>
                        <td className="p-3 font-bold" rowSpan={3}>Dung lượng lưu trữ DR (HDD)</td>
                        <td className="p-3">1.050 – 5.000 GB</td>
                        <td className="p-3">1 GB</td>
                        <td className="p-3 text-right font-bold text-slate-900">1.450</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3">5.000 – 10.000 GB</td>
                        <td className="p-3">1 GB</td>
                        <td className="p-3 text-right font-bold text-slate-900">1.350</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3">&gt; 10.000 GB</td>
                        <td className="p-3">1 GB</td>
                        <td className="p-3 text-right font-bold text-slate-900">1.150</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-red-50/30">
                        <td className="p-3 text-center font-bold">2</td>
                        <td className="p-3 font-bold">License Disaster Recovery (DR) Cloud to Cloud</td>
                        <td className="p-3">Bảo vệ Máy chủ ảo (VM)</td>
                        <td className="p-3">1 VM</td>
                        <td className="p-3 text-right font-extrabold text-[var(--vidc-color-brand-red)]">600.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 2: On-Premise to Cloud */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--vidc-color-brand-red)]" />
                  <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                    2. Bảng giá DR từ On-Premise / Khách hàng sang Cloud Viettel IDC
                  </h4>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left text-slate-700 border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-slate-100 text-slate-900 font-extrabold uppercase text-[11px] border-b border-slate-200">
                      <tr>
                        <th className="p-3 w-12 text-center">STT</th>
                        <th className="p-3">Loại tài nguyên</th>
                        <th className="p-3">Cấu hình / tháng</th>
                        <th className="p-3">Đơn vị tính</th>
                        <th className="p-3 text-right">Đơn giá / tháng (VNĐ)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 text-center font-bold" rowSpan={3}>1</td>
                        <td className="p-3 font-bold" rowSpan={3}>Dung lượng lưu trữ DR (HDD)</td>
                        <td className="p-3">1.050 – 5.000 GB</td>
                        <td className="p-3">1 GB</td>
                        <td className="p-3 text-right font-bold text-slate-900">1.450</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3">5.000 – 10.000 GB</td>
                        <td className="p-3">1 GB</td>
                        <td className="p-3 text-right font-bold text-slate-900">1.350</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3">&gt; 10.000 GB</td>
                        <td className="p-3">1 GB</td>
                        <td className="p-3 text-right font-bold text-slate-900">1.150</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-red-50/30">
                        <td className="p-3 text-center font-bold">2</td>
                        <td className="p-3 font-bold">License Disaster Recovery (DR) On-Premise to Cloud</td>
                        <td className="p-3">Bảo vệ Máy chủ ảo (VM)</td>
                        <td className="p-3">1 VM</td>
                        <td className="p-3 text-right font-extrabold text-[var(--vidc-color-brand-red)]">650.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="text-xs text-slate-500 space-y-1">
                <p><strong>Ghi chú:</strong> Dung lượng lưu trữ được đóng gói theo block 50GB. Mức dung lượng tối thiểu là 1.050GB.</p>
                <p>Tài nguyên Compute (vCPU, RAM) tại Data Center dự phòng chỉ tính cước khi kích hoạt chuyển đổi dự phòng (Failover) theo đơn giá Cloud Server quy định tại thời điểm kích hoạt.</p>
              </div>
            </div>
          )}
        </div>

        {/* VAT Footnote */}
        <p className="text-center text-xs text-slate-500 max-w-2xl mx-auto">
          {t.vatFootnote}
        </p>

      </div>
    </section>
  );
};
