import React, { useState } from 'react';
import { Check, Sliders, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VKSPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: (notes?: string) => void;
}

export const VKSPricing: React.FC<VKSPricingProps> = ({ currentMarket, onOpenConsult }) => {
  const isLaos = currentMarket?.code !== 'vn';

  // Controls: billingMode ('monthly' | 'hourly'), region ('north' | 'south'), masterType ('1master' | '3master')
  const [billingMode, setBillingMode] = useState<'monthly' | 'hourly'>('monthly');
  const [selectedRegion, setSelectedRegion] = useState<'north' | 'south'>('north');
  const [masterType, setMasterType] = useState<'1master' | '3master'>('1master');

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos
      ? 'Choose the Optimal Kubernetes Configuration for Your Business'
      : 'Lựa chọn cấu hình Viettel Kubernetes tối ưu cho doanh nghiệp',
    desc: isLaos
      ? 'Enterprise-grade CNCF standard container orchestration infrastructure with transparent & flexible costs'
      : 'Hạ tầng điều phối container tiêu chuẩn CNCF với chi phí minh bạch & linh hoạt theo nhu cầu',
    billingModel: isLaos ? 'BILLING MODEL:' : 'MÔ HÌNH THANH TOÁN:',
    regionModel: isLaos ? 'INFRASTRUCTURE REGION:' : 'KHU VỰC HẠ TẦNG:',
    masterModel: isLaos ? 'CONTROL PLANE:' : 'KIẾN TRÚC MASTER:',
    north: isLaos ? 'North Region' : 'Miền Bắc',
    south: isLaos ? 'South Region' : 'Miền Nam',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    freeTrialBtn: isLaos ? 'FREE TRIAL' : 'DÙNG THỬ MIỄN PHÍ',
    consultBtn: isLaos ? 'REQUEST CONSULTATION' : 'NHẬN TƯ VẤN',
    customTitle: isLaos ? 'Custom Configuration — Tailored to your needs' : 'Cấu hình tùy chỉnh — Thiết kế riêng theo nhu cầu',
    customDesc: isLaos
      ? 'Need a larger cluster? We support custom cluster configurations: GPU Node Groups (NVIDIA H100, A100, L40S), Bare Metal Nodes, Multi-region HA with the highest SLA commitment.'
      : 'Cần giải pháp cụm lớn hơn? Chúng tôi hỗ trợ may đo cấu hình riêng biệt: GPU Node Groups (NVIDIA H100, A100, L40S), Bare Metal chuyên dụng, Multi-region HA với cam kết SLA 99.99%.',
    customBtn: isLaos ? 'REQUEST CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatFootnote: isLaos
      ? '* All service pricing excludes taxes. You can scale worker nodes up or down at any time via the management portal.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể co giãn số lượng Worker Nodes bất cứ lúc nào trong bảng điều khiển Portal.',
  };

  // 5 Packages from standard vKS specs
  const packages = [
    {
      id: 'voks1',
      name: 'T2.VOKS 1 HIGH MEMORY',
      subtitle: 'STARTER WORKLOAD',
      master: masterType === '1master' ? '1 Master (2 vCPU, 4GB)' : '3 Master HA (2 vCPU, 4GB)',
      worker: '2 Worker (2 vCPU, 4GB RAM)',
      nodeStorage: '50 GB SSD / node',
      pvStorage: '50 GB NFS PV Storage',
      bandwidth: '300 Mbps Băng thông',
      ip: '2 IP Public',
      priceMonthly: masterType === '1master' ? '1.920.000' : '3.360.000',
      priceHourly: masterType === '1master' ? '3.555' : '6.222',
      badge: null,
      recommended: false,
    },
    {
      id: 'voks2',
      name: 'T2.VOKS 2',
      subtitle: 'BALANCED CLUSTER',
      master: masterType === '1master' ? '1 Master (2 vCPU, 4GB)' : '3 Master HA (2 vCPU, 4GB)',
      worker: '2 Worker (4 vCPU, 4GB RAM)',
      nodeStorage: '50 GB SSD / node',
      pvStorage: '50 GB NFS PV Storage',
      bandwidth: '300 Mbps Băng thông',
      ip: '2 IP Public',
      priceMonthly: masterType === '1master' ? '2.440.000' : '3.880.000',
      priceHourly: masterType === '1master' ? '4.518' : '7.185',
      badge: null,
      recommended: false,
    },
    {
      id: 'voks2-hm',
      name: 'T2.VOKS 2 HIGH MEMORY',
      subtitle: isLaos ? 'MOST POPULAR' : 'PHỔ BIẾN NHẤT',
      master: masterType === '1master' ? '1 Master (2 vCPU, 4GB)' : '3 Master HA (2 vCPU, 4GB)',
      worker: '2 Worker (4 vCPU, 8GB RAM)',
      nodeStorage: '50 GB SSD / node',
      pvStorage: '50 GB NFS PV Storage',
      bandwidth: '300 Mbps Băng thông',
      ip: '2 IP Public',
      priceMonthly: masterType === '1master' ? '3.220.000' : '4.660.000',
      priceHourly: masterType === '1master' ? '5.962' : '8.629',
      badge: isLaos ? '★ BEST SELLER' : '★ BÁN CHẠY',
      recommended: true,
    },
    {
      id: 'voks3',
      name: 'T2.VOKS 3',
      subtitle: 'HIGH PERFORMANCE',
      master: masterType === '1master' ? '1 Master (4 vCPU, 8GB)' : '3 Master HA (4 vCPU, 8GB)',
      worker: '2 Worker (8 vCPU, 8GB RAM)',
      nodeStorage: '50 GB SSD / node',
      pvStorage: '100 GB NFS PV Storage',
      bandwidth: '300 Mbps Băng thông',
      ip: '2 IP Public',
      priceMonthly: masterType === '1master' ? '4.980.000' : '7.540.000',
      priceHourly: masterType === '1master' ? '9.222' : '13.962',
      badge: null,
      recommended: false,
    },
    {
      id: 'voks3-hm',
      name: 'T2.VOKS 3 HIGH MEMORY',
      subtitle: 'ENTERPRISE PRODUCTION',
      master: masterType === '1master' ? '1 Master (4 vCPU, 8GB)' : '3 Master HA (4 vCPU, 8GB)',
      worker: '2 Worker (8 vCPU, 16GB RAM)',
      nodeStorage: '50 GB SSD / node',
      pvStorage: '100 GB NFS PV Storage',
      bandwidth: '300 Mbps Băng thông',
      ip: '2 IP Public',
      priceMonthly: masterType === '1master' ? '6.540.000' : '9.100.000',
      priceHourly: masterType === '1master' ? '12.111' : '16.851',
      badge: null,
      recommended: false,
    },
  ];

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header - Exactly like CloudServerEstimator */}
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

        {/* Top Control Bar: Billing Model, Region & Control Plane - Exactly styled like CloudServerEstimator */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mb-12 text-xs flex-wrap">
          
          {/* Mô hình thanh toán */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
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
                Saving Plan
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
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.regionModel}
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

          {/* Mô hình Master Node */}
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.masterModel}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setMasterType('1master')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  masterType === '1master'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                1 Master Node
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setMasterType('3master')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  masterType === '3master'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                3 Master (HA)
              </VIDCNativeButton>
            </div>
          </div>

        </div>

        {/* 5 Pricing Cards Grid - Exactly formatted like CloudServerEstimator */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12 items-stretch">
          {packages.map((pkg) => {
            const isRecommended = pkg.recommended;
            const displayPrice = billingMode === 'monthly' ? pkg.priceMonthly : pkg.priceHourly;
            const displayUnit = billingMode === 'monthly' ? 'Đ/THÁNG' : 'Đ/GIỜ';

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-5 bg-white border flex flex-col justify-between transition-all duration-300 ${
                  isRecommended
                    ? 'border-red-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-red-300'
                    : 'border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Card Header: Title, Subtitle, Badge */}
                  <div className="min-h-[52px] mb-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-snug">
                        {pkg.name}
                      </h3>
                      {pkg.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/80 whitespace-nowrap shrink-0">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
                      {pkg.subtitle}
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="my-4 pt-3 border-t border-slate-100">
                    <div className="text-2xl font-black text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
                      {displayPrice}
                    </div>
                    <div className="text-[11px] font-extrabold text-slate-400 mt-0.5">
                      {displayUnit}
                    </div>
                  </div>

                  {/* Detailed Specs List */}
                  <div className="space-y-2 text-xs py-3 border-t border-slate-100">
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-slate-700 font-semibold">{pkg.worker}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-slate-600">{pkg.master}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-slate-600">{pkg.nodeStorage}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-slate-600">{pkg.pvStorage}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-slate-600">{pkg.bandwidth}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-slate-600">{pkg.ip}</span>
                    </div>
                  </div>
                </div>

                {/* Card CTA Buttons */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult && onOpenConsult(`Đăng ký gói ${pkg.name} (${billingMode === 'monthly' ? 'Saving Plan' : 'Pay-as-you-go'})`)}
                    className="w-full py-2.5 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d6002c)] text-white font-extrabold text-xs transition-colors shadow-sm cursor-pointer"
                  >
                    {t.registerNow}
                  </VIDCNativeButton>

                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult && onOpenConsult(`Tư vấn dùng thử gói ${pkg.name}`)}
                    className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                  >
                    {isRecommended ? t.freeTrialBtn : t.consultBtn}
                  </VIDCNativeButton>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Configurator Box - Exactly styled like CloudServerEstimator */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700/60 shadow-xl mb-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Sliders className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                {t.customTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {t.customDesc}
            </p>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={() => onOpenConsult && onOpenConsult('Yêu cầu cấu hình cụm Kubernetes riêng (Custom GPU / Bare Metal)')}
            className="px-6 py-3 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d6002c)] text-white font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>{t.customBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </VIDCNativeButton>
        </div>

        {/* VAT Footnote */}
        <div className="text-center text-[11px] text-slate-500">
          {t.vatFootnote}
        </div>

      </div>
    </section>
  );
};
