import React, { useState } from 'react';
import { RotateCcw, Clock, ShieldCheck, Check, Calculator, Cpu, HardDrive, Layers, Sliders } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VpcPricingEstimatorProps {
  currentMarket: SEAMarket;
  onOpenQuote: (config?: any) => void;
}

export const VpcPricingEstimator: React.FC<VpcPricingEstimatorProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  // Filter States
  const [billingMode, setBillingMode] = useState<'saving' | 'payg'>('saving');
  const [selectedRegion, setSelectedRegion] = useState<'north' | 'central' | 'south'>('north');

  // Exact 2 Packages as requested by user
  const vpcPackages = [
    {
      id: 'vpc-silver',
      name: 'VPC SILVER',
      priceMonthly: '4.710.000 đ',
      priceHourly: '9.810 đ',
      periodMonthly: '/ Tháng',
      periodHourly: '/ Giờ',
      vcpu: '12 vCPU',
      subnet: '3 Subnet',
      gateway: '1 Internet Gateway',
      securityGroup: '10 Security Group',
      router: '1 Router',
      internalBw: '1 Gbps Băng thông Internal',
      storage: '300 GB SSD Silver',
      ram: '24 GB RAM',
      bandwidth: '500 Mbps Băng thông',
      ip: '3 IP',
    },
    {
      id: 'vpc-gold',
      name: 'VPC GOLD',
      priceMonthly: '5.100.000 đ',
      priceHourly: '10.625 đ',
      periodMonthly: '/ Tháng',
      periodHourly: '/ Giờ',
      vcpu: '12 vCPU',
      subnet: '3 Subnet',
      gateway: '1 Internet Gateway',
      securityGroup: '10 Security Group',
      router: '1 Router',
      internalBw: '1 Gbps Băng thông Internal',
      storage: '300 GB SSD Gold',
      ram: '24 GB RAM',
      bandwidth: '500 Mbps Băng thông',
      ip: '3 IP',
    },
  ];

  const handleRegister = (pkg: typeof vpcPackages[0]) => {
    onOpenQuote({
      packageName: `Đăng ký gói ${pkg.name}`,
      billingCycleMonths: billingMode === 'saving' ? 12 : 1,
      estimatedPrice: billingMode === 'saving' ? pkg.priceMonthly : pkg.priceHourly,
    });
  };

  const handleTrial = (pkg: typeof vpcPackages[0]) => {
    onOpenQuote({
      packageName: `Dùng thử gói ${pkg.name}`,
      billingCycleMonths: 1,
      estimatedPrice: '0 đ (Dùng thử miễn phí)',
    });
  };

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Eyebrow & Main Title */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-black bg-red-50 text-[color:var(--vidc-color-brand-red)] uppercase tracking-wider mb-3 border border-red-100">
            BẢNG GIÁ DỊCH VỤ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight">
            Lựa chọn cấu hình tối ưu cho doanh nghiệp
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2">
            Hạ tầng điện toán đám mây tiêu chuẩn Enterprise với chi phí minh bạch &amp; linh hoạt
          </p>
        </div>

        {/* Filter Controls Bar (Pill switchers & Mode selector) */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10 text-xs font-bold text-slate-500">
          
          {/* Mô hình thanh toán */}
          <div className="flex items-center gap-3">
            <span className="uppercase text-[11px] tracking-wider text-slate-500 font-bold">
              MÔ HÌNH THANH TOÁN:
            </span>
            <div className="bg-[var(--vidc-legacy-hex-e2e8f0)] p-1 rounded-full inline-flex items-center">
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingMode('saving')}
                className={`px-4 py-1.5 rounded-full font-extrabold transition-all cursor-pointer ${
                  billingMode === 'saving'
                    ? 'bg-[var(--vidc-text-primary)] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Saving Plan
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingMode('payg')}
                className={`px-4 py-1.5 rounded-full font-extrabold transition-all cursor-pointer ${
                  billingMode === 'payg'
                    ? 'bg-[var(--vidc-text-primary)] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Pay-as-you-go
              </VIDCNativeButton>
            </div>
          </div>

          {/* Khu vực hạ tầng */}
          <div className="flex items-center gap-3">
            <span className="uppercase text-[11px] tracking-wider text-slate-500 font-bold">
              KHU VỰC HẠ TẦNG:
            </span>
            <div className="bg-[var(--vidc-legacy-hex-e2e8f0)] p-1 rounded-full inline-flex items-center">
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('north')}
                className={`px-4 py-1.5 rounded-full font-extrabold transition-all cursor-pointer ${
                  selectedRegion === 'north'
                    ? 'bg-[var(--vidc-text-primary)] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Miền Bắc
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('central')}
                className={`px-4 py-1.5 rounded-full font-extrabold transition-all cursor-pointer ${
                  selectedRegion === 'central'
                    ? 'bg-[var(--vidc-text-primary)] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Miền Trung
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('south')}
                className={`px-4 py-1.5 rounded-full font-extrabold transition-all cursor-pointer ${
                  selectedRegion === 'south'
                    ? 'bg-[var(--vidc-text-primary)] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Miền Nam
              </VIDCNativeButton>
            </div>
          </div>

        </div>

        {/* EXACTLY 2 PRICING CARDS - CENTERED IN CONTAINER - STYLED EXACTLY LIKE VIETTEL CLOUD SERVER */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-stretch mb-10">
          {vpcPackages.map((pkg) => {
            const priceVal = billingMode === 'saving' ? pkg.priceMonthly : pkg.priceHourly;
            const priceUnit = billingMode === 'saving' ? 'Đ/THÁNG' : 'Đ/GIỜ';

            return (
              <div
                key={pkg.id}
                className="relative rounded-2xl p-6 bg-white border border-slate-200/90 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg hover:border-slate-300 group"
              >
                <div>
                  {/* Card Title & Subtitle */}
                  <div className="min-h-[48px] mb-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-0.5">
                      {pkg.name === 'VPC SILVER' ? 'SILVER VIRTUAL PRIVATE CLOUD' : 'GOLD VIRTUAL PRIVATE CLOUD'}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="my-3 pb-3 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-black text-[color:var(--vidc-color-brand-red)] tracking-tight">
                        {priceVal}
                      </span>
                      <span className="text-[11px] font-extrabold text-slate-500 uppercase">
                        {priceUnit}
                      </span>
                    </div>
                  </div>

                  {/* Config Header */}
                  <div className="mt-4 mb-3">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      CẤU HÌNH
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Cấu hình chi tiết bao gồm:
                    </p>
                  </div>

                  {/* Specs List with Red Check Icons */}
                  <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-semibold text-slate-800">{pkg.vcpu}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-semibold text-slate-800">{pkg.subnet}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-semibold text-slate-800">{pkg.gateway}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-semibold text-slate-800">{pkg.securityGroup}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-semibold text-slate-800">{pkg.router}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-semibold text-slate-800">{pkg.internalBw}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-semibold text-slate-800">{pkg.storage}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-semibold text-slate-800">{pkg.ram}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-semibold text-slate-800">{pkg.bandwidth}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-semibold text-slate-800">{pkg.ip}</span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-2">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => handleRegister(pkg)}
                    className="w-full py-2.5 px-4 rounded-full bg-[color:var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002d)] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-xs text-center block cursor-pointer"
                  >
                    ĐĂNG KÝ
                  </VIDCNativeButton>
                  <VIDCNativeButton
                    type="button"
                    onClick={() => handleTrial(pkg)}
                    className="w-full py-2 px-4 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-bold text-xs uppercase tracking-wider transition-colors text-center block cursor-pointer"
                  >
                    DÙNG THỬ
                  </VIDCNativeButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Footer Note */}
        <p className="text-center text-xs text-slate-500 font-semibold italic">
          * Bảng giá chưa bao gồm thuế VAT (nếu có)
        </p>

      </div>
    </section>
  );
};
