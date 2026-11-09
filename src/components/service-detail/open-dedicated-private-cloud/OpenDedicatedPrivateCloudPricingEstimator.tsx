import React, { useState } from 'react';
import { Tag, Check, Sliders, Settings, ArrowRight, Phone } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export interface ODPCConfig {
  vcpu: number;
  ram: number;
  storage: number;
  ipCount: number;
  bandwidthMbps: number;
  sdnSpeedGbps: number;
  osType: string;
  billingCycleMonths: number;
  packageName?: string;
  dataCenter?: string;
}

interface OpenDedicatedPrivateCloudPricingEstimatorProps {
  currentMarket?: SEAMarket;
  onOpenQuote: (config?: any, estimatedTotal?: number, currency?: string) => void;
  onSelectConfigForQuote?: (config: any, estimatedTotal: number, currency: string) => void;
}

export const OpenDedicatedPrivateCloudPricingEstimator: React.FC<OpenDedicatedPrivateCloudPricingEstimatorProps> = ({
  currentMarket,
  onOpenQuote,
  onSelectConfigForQuote,
}) => {
  // Region Selection State
  const [selectedRegion, setSelectedRegion] = useState<'north' | 'central' | 'south'>('north');
  // Billing Mode State: 'monthly' (Saving Plan) or 'hourly' (Pay-as-you-go)
  const [billingMode, setBillingMode] = useState<'monthly' | 'hourly'>('monthly');

  const isLaos = currentMarket?.code === 'la';

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos 
      ? 'Standard Viettel Open Dedicated Private Cloud Package' 
      : 'Bảng Giá Gói Dịch Vụ Viettel oDPC Tiêu Chuẩn',
    desc: isLaos 
      ? 'Single-tenant OpenStack cloud infrastructure with dedicated physical compute, storage, and 10Gbps SDN networking'
      : 'Hạ tầng điện toán đám mây OpenStack Single-Tenant tiêu chuẩn Enterprise với chi phí minh bạch & linh hoạt',
    billingModel: isLaos ? 'BILLING MODEL:' : 'MÔ HÌNH THANH TOÁN:',
    infrastructureRegion: isLaos ? 'INFRASTRUCTURE REGION:' : 'KHU VỰC HẠ TẦNG:',
    north: isLaos ? 'North (Pháp Vân / Hòa Lạc)' : 'Miền Bắc (Pháp Vân / Hòa Lạc)',
    central: isLaos ? 'Central (Đà Nẵng)' : 'Miền Trung (Đà Nẵng)',
    south: isLaos ? 'South (Bình Dương / HHT)' : 'Miền Nam (Bình Dương / HHT)',
    config: isLaos ? 'CONFIGURATION' : 'CẤU HÌNH',
    detailDesc: isLaos ? 'Detailed configuration includes:' : 'Cấu hình chi tiết bao gồm:',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    freeTrialBtn: isLaos ? 'FREE TRIAL' : 'DÙNG THỬ MIỄN PHÍ',
    consultBtn: isLaos ? 'REQUEST CONSULTATION' : 'NHẬN TƯ VẤN',
    customTitle: isLaos ? 'Custom Configuration — Tailored to your enterprise' : 'Cấu hình tùy chỉnh — Thiết kế riêng theo nhu cầu doanh nghiệp',
    customDesc: isLaos 
      ? 'Need a larger Multi-Node cluster? We support custom architectures up to thousands of vCPUs, Terabytes of RAM, Petabyte-scale Ceph All-Flash SSDs, and dedicated private links with the highest SLA commitment.'
      : 'Cần giải pháp Multi-Node lớn hơn? Chúng tôi hỗ trợ may đo kiến trúc riêng biệt lên tới hàng nghìn vCPU, Terabytes RAM, cụm lưu trữ Ceph All-Flash SSD Petabytes và đường truyền riêng với cam kết SLA cao nhất.',
    customBtn: isLaos ? 'REQUEST CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatFootnote: isLaos 
      ? '* All service pricing excludes taxes. You can adjust or expand the cluster configuration at any time.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể điều chỉnh hoặc mở rộng cấu hình bất cứ lúc nào trong bảng điều khiển.',
  };

  // Duy nhất 1 Gói Chuẩn Viettel oDPC (Single Standard Package)
  const standardPackage = {
    id: 'dpc-standard',
    name: isLaos ? 'Standard Package oDPC' : 'Gói oDPC Tiêu Chuẩn',
    subtitle: 'SINGLE-TENANT OPENSTACK CLUSTER',
    vcpu: isLaos ? '192 vCPU (Intel Xeon Gold Dedicated)' : '192 vCPU (Intel Xeon Gold Dedicated)',
    ram: '384 GB RAM ECC Registered',
    storage: '7.680 GB SSD Ceph (3x Replicas & Self-Healing)',
    bandwidth: isLaos ? '500 Mbps National Bandwidth (Unlimited Data)' : '500 Mbps Băng thông trong nước (Không giới hạn Data)',
    sdn: isLaos ? '10 Gbps SDN Mesh Internal Network' : '10 Gbps SDN Mesh nội bộ tốc độ cao',
    ip: isLaos ? '10 Public IPs + Free vLB, vFW, VKS, VDBS' : '10 IP Public + Free vLB, vFW, VKS (Kubernetes), VDBS',
    priceMonthly: isLaos ? '3,800' : '94.848.000',
    priceHourly: isLaos ? '5.20' : '130.000',
    badge: isLaos ? '★ STANDARD CLUSTER' : '★ GÓI TIÊU CHUẨN',
    recommended: true,
    vcpuCount: 192,
    ramCount: 384,
    storageCount: 7680,
  };

  const handleSelectPackage = () => {
    const config: ODPCConfig = {
      vcpu: standardPackage.vcpuCount,
      ram: standardPackage.ramCount,
      storage: standardPackage.storageCount,
      ipCount: 10,
      bandwidthMbps: 500,
      sdnSpeedGbps: 10,
      osType: 'linux',
      billingCycleMonths: 12,
      packageName: standardPackage.name,
      dataCenter: selectedRegion === 'north' ? 'Pháp Vân / Hòa Lạc' : selectedRegion === 'south' ? 'Bình Dương / HHT' : 'Đà Nẵng',
    };
    const numericPrice = isLaos 
      ? parseFloat(standardPackage.priceMonthly.replace(/,/g, '')) 
      : parseFloat(standardPackage.priceMonthly.replace(/\./g, ''));
    
    if (onSelectConfigForQuote) {
      onSelectConfigForQuote(config, numericPrice, isLaos ? 'USD' : 'VND');
    } else {
      onOpenQuote({
        packageName: `Viettel Open Dedicated Private Cloud (${standardPackage.name})`,
        price: `${standardPackage.priceMonthly} ${isLaos ? 'USD' : 'đ'}/tháng`,
        vcpu: standardPackage.vcpuCount,
        ram: standardPackage.ramCount,
        storage: standardPackage.storageCount,
        dataCenter: config.dataCenter,
        billingCycle: '12 tháng'
      }, numericPrice, isLaos ? 'USD' : 'VND');
    }
  };

  const displayPrice = billingMode === 'monthly' ? standardPackage.priceMonthly : standardPackage.priceHourly;
  let displayUnit = '';
  if (isLaos) {
    displayUnit = billingMode === 'monthly' ? 'USD/MO' : 'USD/HR';
  } else {
    displayUnit = billingMode === 'monthly' ? 'Đ/THÁNG' : 'Đ/GIỜ';
  }

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200"
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

        {/* Top Control Bar: Billing Model & Region Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-12 text-xs">
          
          {/* Mô hình thanh toán */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.billingModel}
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
                Saving Plan (12T)
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingMode('hourly')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  billingMode === 'hourly'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Pay-as-you-go
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

        </div>

        {/* Pricing Layout: 1 Gói Chuẩn Tiêu Chuẩn (Trực quan & Chuẩn Style Viettel Cloud Server) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch max-w-5xl mx-auto">
          
          {/* CỘT 1: CARD GÓI TIÊU CHUẨN DUY NHẤT (Chuẩn UI Viettel Cloud Server) */}
          <div className="lg:col-span-7 relative rounded-2xl p-6 sm:p-8 bg-white border-2 border-[var(--vidc-color-brand-red)]/30 flex flex-col justify-between shadow-xl shadow-slate-200/60 hover:shadow-2xl transition-all duration-300">
            <div>
              {/* Card Header: Title, Subtitle, Badge */}
              <div className="min-h-[52px] mb-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
                    {standardPackage.name}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/80 whitespace-nowrap">
                    {standardPackage.badge}
                  </span>
                </div>
                <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mt-1">
                  {standardPackage.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="my-4 pb-4 border-b border-slate-100">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">
                    {isLaos ? `$${displayPrice}` : displayPrice}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-500 uppercase">
                    {displayUnit}
                  </span>
                </div>
              </div>

              {/* Config Header */}
              <div className="mt-4 mb-4">
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                  {t.config}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {t.detailDesc}
                </p>
              </div>

              {/* Specs list with red checkmarks */}
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">{standardPackage.vcpu}</span>
                    <p className="text-[11px] text-slate-500">100% Dedicated Physical Host, không Noisy Neighbour</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">{standardPackage.ram}</span>
                    <p className="text-[11px] text-slate-500">DDR4/DDR5 Registered băng thông cao</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">{standardPackage.storage}</span>
                    <p className="text-[11px] text-slate-500">Lưu trữ phân tán SDS Ceph nhân bản 3x copies</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">{standardPackage.bandwidth}</span>
                    <p className="text-[11px] text-slate-500">Cam kết chất lượng đường truyền nội địa</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">{standardPackage.sdn}</span>
                    <p className="text-[11px] text-slate-500">Mạng SDN ảo hóa OpenStack Neutron</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">{standardPackage.ip}</span>
                    <p className="text-[11px] text-slate-500">Tích hợp sẵn bộ công cụ PaaS hoàn toàn miễn phí</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Card Bottom CTA Buttons */}
            <div className="space-y-2.5 pt-2">
              <VIDCNativeButton
                type="button"
                onClick={handleSelectPackage}
                className="w-full py-3.5 px-4 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs sm:text-sm transition-all shadow-md uppercase tracking-wider text-center block cursor-pointer"
              >
                {t.registerNow}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={handleSelectPackage}
                className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-extrabold text-xs transition-all uppercase tracking-wider text-center block cursor-pointer"
              >
                {t.freeTrialBtn}
              </VIDCNativeButton>
            </div>

          </div>

          {/* CỘT 2: CARD MAY ĐO CẤU HÌNH RIÊNG (Enterprise Custom Tailored Card) */}
          <div className="lg:col-span-5 relative rounded-2xl p-6 sm:p-8 bg-slate-900 text-white border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="min-h-[52px] mb-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                    <Settings className="w-6 h-6 text-[var(--vidc-color-brand-red)]" />
                    <span>May Đo Riêng</span>
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-slate-800 text-slate-200 border border-slate-700 whitespace-nowrap">
                    ENTERPRISE
                  </span>
                </div>
                <p className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mt-1">
                  CUSTOM MULTI-NODE CLUSTER
                </p>
              </div>

              {/* Price placeholder */}
              <div className="my-4 pb-4 border-b border-slate-800">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {isLaos ? 'Contact for Quote' : 'Báo Giá Theo Nhu Cầu'}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">Khảo sát &amp; may đo kiến trúc tối ưu theo hạ tầng thực tế</p>
              </div>

              {/* Specs May đo */}
              <div className="mt-4 mb-4">
                <h4 className="text-xs font-black text-slate-300 uppercase tracking-wider">
                  NĂNG LỰC MAY ĐO MỞ RỘNG
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Linh hoạt theo mọi quy mô doanh nghiệp:
                </p>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-300 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Tùy biến từ 192 đến hàng nghìn vCPU (Intel Xeon / AMD EPYC)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Cấp phát Terabytes RAM ECC Registered tốc độ cao</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Khối lưu trữ All-Flash NVMe SSD Ceph quy mô Petabyte</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Băng thông kết nối riêng biệt lên tới 25Gbps / 100Gbps</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Tích hợp Direct Connect / MegaPort / VPN Site-to-Site</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Đội ngũ Solution Architect tư vấn quy hoạch và di chuyển 24/7</span>
                </li>
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-2.5 pt-2">
              <VIDCNativeButton
                type="button"
                onClick={() => onOpenQuote({
                  customArchitecture: true,
                  packageName: 'Viettel Open Dedicated Private Cloud (May Đo Riêng)',
                  vcpu: 384,
                  ram: 768,
                  storage: 15360,
                  dataCenter: selectedRegion === 'north' ? 'Pháp Vân / Hòa Lạc' : selectedRegion === 'south' ? 'Bình Dương / HHT' : 'Đà Nẵng',
                })}
                className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-slate-100 active:bg-slate-200 text-[var(--vidc-legacy-hex-0f172a)] font-extrabold text-xs sm:text-sm transition-all shadow-md uppercase tracking-wider text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.consultBtn}</span>
                <ArrowRight className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
              </VIDCNativeButton>
              
              <VIDCAnchor
                href="tel:18008088"
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-extrabold text-xs transition-all uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-slate-300" />
                <span>Hotline: 1800 8088</span>
              </VIDCAnchor>
            </div>

          </div>

        </div>

        {/* Custom Configuration Dark Banner (Identical to Cloud Server) */}
        <div className="relative rounded-2xl bg-[var(--vidc-legacy-hex-090d16)] text-white p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden">
          {/* Background grid texture */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center justify-center md:justify-start gap-2.5">
                <Sliders className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
                <span>{t.customTitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                {t.customDesc}
              </p>
            </div>

            <VIDCNativeButton
              type="button"
              onClick={() => onOpenQuote({
                customArchitecture: true,
                serviceName: 'Viettel Open Dedicated Private Cloud (oDPC)',
                vcpu: 384,
                ram: 768,
                storage: 15360,
                dataCenter: selectedRegion === 'north' ? 'Pháp Vân / Hòa Lạc' : selectedRegion === 'south' ? 'Bình Dương / HHT' : 'Đà Nẵng',
              })}
              className="px-6 py-3 rounded-xl bg-black hover:bg-slate-900 active:bg-slate-950 text-white border border-slate-700 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 whitespace-nowrap min-h-[44px] cursor-pointer"
            >
              {t.customBtn}
            </VIDCNativeButton>
          </div>
        </div>

        {/* Price Footnote */}
        <p className="text-center text-[11px] text-slate-400 italic mt-4">
          {t.vatFootnote}
        </p>

      </div>
    </section>
  );
};
