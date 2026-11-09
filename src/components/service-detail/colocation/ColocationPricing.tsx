import React, { useState } from 'react';
import { Tag, Check, Sliders, Server, MapPin, LayoutGrid, Table as TableIcon } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


export interface ColoPackageItem {
  id: string;
  name: string;
  subtitle: string;
  space: string;
  power: string;
  traffic: string;
  bandwidth: string;
  ip: string;
  priceMonthlyNum: number;
  priceMonthly: string;
  badge: string | null;
  recommended: boolean;
}

export interface ColocationPricingProps {
  currentMarket: SEAMarket;
  onSelectPackageForQuote: (
    pkg: ColoPackageItem,
    selectedDc: string,
    billingCycle: number
  ) => void;
  onOpenCustomSurvey?: () => void;
}

export const DATA_CENTERS = [
  { id: 'dc-hl', name: 'DC Viettel Hòa Lạc (Hà Nội)', region: 'north' },
  { id: 'dc-ph', name: 'DC Viettel Pháp Vân (Hà Nội)', region: 'north' },
  { id: 'dc-dn', name: 'DC Viettel Đà Nẵng (Đà Nẵng)', region: 'central' },
  { id: 'dc-bd', name: 'DC Viettel Bình Dương (Bình Dương)', region: 'south' },
  { id: 'dc-hcm', name: 'DC Viettel Tân Bình (TP.HCM)', region: 'south' },
];

export const ColocationPricing: React.FC<ColocationPricingProps> = ({
  currentMarket,
  onSelectPackageForQuote,
  onOpenCustomSurvey,
}) => {
  const isLaos = currentMarket?.code === 'la';

  // View mode toggle: 'cards' (prioritized) or 'table'
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  // Region Selection State: 'north' | 'central' | 'south'
  const [selectedRegion, setSelectedRegion] = useState<'north' | 'central' | 'south'>('north');
  // Billing Cycle State: 1 | 12 | 24 | 36 months
  const [billingCycle, setBillingCycle] = useState<number>(1);
  const [selectedDc, setSelectedDc] = useState<string>(DATA_CENTERS[0].name);

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
    headline: isLaos
      ? 'Standard Equipment Colocation Service Packages'
      : 'Các Gói Dịch Vụ Thuê Chỗ Đặt Thiết Bị Tiêu Chuẩn',
    billingCycleLabel: isLaos ? 'BILLING CYCLE:' : 'CHU KỲ THANH TOÁN:',
    infrastructureRegion: isLaos ? 'INFRASTRUCTURE REGION:' : 'KHU VỰC HẠ TẦNG:',
    north: isLaos ? 'North' : 'Miền Bắc',
    central: isLaos ? 'Central' : 'Miền Trung',
    south: isLaos ? 'South' : 'Miền Nam',
    config: isLaos ? 'CONFIGURATION' : 'CẤU HÌNH GÓI',
    registerNow: isLaos ? 'REGISTER' : 'ĐĂNG KÝ',
    customPrompt: 'Doanh nghiệp cần thuê nguyên tủ Rack 42U, thuê phân khu riêng (Cage) hoặc tùy biến công suất điện lớn?',
    customBtn: 'Đăng Ký Khảo Sát & Nhận Báo Giá Tùy Chỉnh →',
    vatFootnote: 'Ghi chú chung: Bảng giá chưa bao gồm thuế VAT (nếu có).',
  };

  // Discount multiplier based on billing cycle
  const getDiscount = (cycle: number) => {
    switch (cycle) {
      case 12:
        return 0.9; // 10% off
      case 24:
        return 0.85; // 15% off
      case 36:
        return 0.8; // 20% off
      default:
        return 1.0;
    }
  };

  // 6 Standard COLO Packages:
  // COLO 1: 1U, 400W, Unlimited, 100 Mbps, 1 IPv4, 1.352.000 đ
  // COLO 2: 2U, 500W, Unlimited, 100 Mbps, 1 IPv4, 1.680.000 đ
  // COLO 3: 1U, 400W, Unlimited, 200 Mbps, 1 IPv4, 2.080.000 đ
  // COLO 4: 1U, 400W, Unlimited, 300 Mbps, 1 IPv4, 2.480.000 đ
  // COLO 5: 5U, 900W, Unlimited, 400 Mbps, 3 IPv4, 4.640.000 đ
  // COLO 6: 10U, 1.500W, Unlimited, 500 Mbps, 5 IPv4, 7.120.000 đ
  const basePackages: ColoPackageItem[] = [
    {
      id: 'colo-1',
      name: 'COLO 1',
      subtitle: '1U RACKSPACE',
      space: '1 U',
      power: '400 W',
      traffic: 'Unlimited',
      bandwidth: '100 Mbps',
      ip: '1 IPv4',
      priceMonthlyNum: 1352000,
      priceMonthly: '1.352.000',
      badge: 'TIẾT KIỆM',
      recommended: false,
    },
    {
      id: 'colo-2',
      name: 'COLO 2',
      subtitle: '2U RACKSPACE',
      space: '2 U',
      power: '500 W',
      traffic: 'Unlimited',
      bandwidth: '100 Mbps',
      ip: '1 IPv4',
      priceMonthlyNum: 1680000,
      priceMonthly: '1.680.000',
      badge: '★ PHỔ BIẾN',
      recommended: true,
    },
    {
      id: 'colo-3',
      name: 'COLO 3',
      subtitle: '1U BĂNG THÔNG 200M',
      space: '1 U',
      power: '400 W',
      traffic: 'Unlimited',
      bandwidth: '200 Mbps',
      ip: '1 IPv4',
      priceMonthlyNum: 2080000,
      priceMonthly: '2.080.000',
      badge: null,
      recommended: false,
    },
    {
      id: 'colo-4',
      name: 'COLO 4',
      subtitle: '1U BĂNG THÔNG 300M',
      space: '1 U',
      power: '400 W',
      traffic: 'Unlimited',
      bandwidth: '300 Mbps',
      ip: '1 IPv4',
      priceMonthlyNum: 2480000,
      priceMonthly: '2.480.000',
      badge: null,
      recommended: false,
    },
    {
      id: 'colo-5',
      name: 'COLO 5',
      subtitle: '5U RACKSPACE',
      space: '5 U',
      power: '900 W',
      traffic: 'Unlimited',
      bandwidth: '400 Mbps',
      ip: '3 IPv4',
      priceMonthlyNum: 4640000,
      priceMonthly: '4.640.000',
      badge: 'DOANH NGHIỆP',
      recommended: false,
    },
    {
      id: 'colo-6',
      name: 'COLO 6',
      subtitle: '10U RACKSPACE',
      space: '10 U',
      power: '1.500 W',
      traffic: 'Unlimited',
      bandwidth: '500 Mbps',
      ip: '5 IPv4',
      priceMonthlyNum: 7120000,
      priceMonthly: '7.120.000',
      badge: 'HIỆU NĂNG CAO',
      recommended: false,
    },
  ];

  const packages = basePackages.map((pkg) => {
    const discountedNum = Math.round(pkg.priceMonthlyNum * getDiscount(billingCycle));
    return {
      ...pkg,
      priceMonthlyNum: discountedNum,
      priceMonthly: discountedNum.toLocaleString('vi-VN'),
    };
  });

  const handleSelectPackage = (pkg: ColoPackageItem) => {
    onSelectPackageForQuote(pkg, selectedDc, billingCycle);
  };

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Eyebrow Badge & H2 Headline */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.pricingTitle}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm italic">
            {t.vatFootnote}
          </p>
        </div>

        {/* Pricing Controls: Billing Cycle + Region Toggles + View Mode */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mb-8 text-xs bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Chu kỳ thanh toán */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
                {t.billingCycleLabel}
              </span>
              <div className="inline-flex p-1 bg-slate-100/80 rounded-full">
                <VIDCNativeButton
                  id="btn-cycle-1"
                  type="button"
                  onClick={() => setBillingCycle(1)}
                  className={`px-3 py-1 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                    billingCycle === 1
                      ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  1 Tháng
                </VIDCNativeButton>
                <VIDCNativeButton
                  id="btn-cycle-12"
                  type="button"
                  onClick={() => setBillingCycle(12)}
                  className={`px-3 py-1 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                    billingCycle === 12
                      ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  12 Tháng <span className="text-[10px] text-emerald-400 font-bold ml-0.5">(-10%)</span>
                </VIDCNativeButton>
                <VIDCNativeButton
                  id="btn-cycle-24"
                  type="button"
                  onClick={() => setBillingCycle(24)}
                  className={`px-3 py-1 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                    billingCycle === 24
                      ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  24 Tháng <span className="text-[10px] text-emerald-400 font-bold ml-0.5">(-15%)</span>
                </VIDCNativeButton>
                <VIDCNativeButton
                  id="btn-cycle-36"
                  type="button"
                  onClick={() => setBillingCycle(36)}
                  className={`px-3 py-1 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                    billingCycle === 36
                      ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  36 Tháng <span className="text-[10px] text-emerald-400 font-bold ml-0.5">(-20%)</span>
                </VIDCNativeButton>
              </div>
            </div>

            {/* Khu vực hạ tầng */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
                {t.infrastructureRegion}
              </span>
              <div className="inline-flex p-1 bg-slate-100/80 rounded-full">
                <VIDCNativeButton
                  id="btn-region-north"
                  type="button"
                  onClick={() => {
                    setSelectedRegion('north');
                    setSelectedDc(DATA_CENTERS[0].name);
                  }}
                  className={`px-3 py-1 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                    selectedRegion === 'north'
                      ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.north}
                </VIDCNativeButton>
                <VIDCNativeButton
                  id="btn-region-central"
                  type="button"
                  onClick={() => {
                    setSelectedRegion('central');
                    setSelectedDc(DATA_CENTERS[2].name);
                  }}
                  className={`px-3 py-1 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                    selectedRegion === 'central'
                      ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.central}
                </VIDCNativeButton>
                <VIDCNativeButton
                  id="btn-region-south"
                  type="button"
                  onClick={() => {
                    setSelectedRegion('south');
                    setSelectedDc(DATA_CENTERS[3].name);
                  }}
                  className={`px-3 py-1 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                    selectedRegion === 'south'
                      ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.south}
                </VIDCNativeButton>
              </div>
            </div>
          </div>

          {/* Toggle View: Thẻ / Bảng */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            <VIDCNativeButton
              type="button"
              onClick={() => setViewMode('cards')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg font-extrabold text-xs transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Dạng Thẻ</span>
            </VIDCNativeButton>
            <VIDCNativeButton
              type="button"
              onClick={() => setViewMode('table')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg font-extrabold text-xs transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Dạng Bảng</span>
            </VIDCNativeButton>
          </div>

        </div>

        {/* PRIMARY VIEW: DẠNG BẢNG TIÊU CHUẨN */}
        {viewMode === 'table' && (
          <div className="mb-10 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[var(--vidc-legacy-hex-1e232a)] text-white font-extrabold uppercase text-[11px] sm:text-xs tracking-wider">
                <tr>
                  <th className="py-4 px-4 sm:px-5">Tên Gói</th>
                  <th className="py-4 px-4">Không Gian Máy Chủ</th>
                  <th className="py-4 px-4">Công Suất Điện</th>
                  <th className="py-4 px-4">Lưu Lượng Thông Tin</th>
                  <th className="py-4 px-4">Băng Thông Internet</th>
                  <th className="py-4 px-4">IPv4</th>
                  <th className="py-4 px-4">Phí Duy Trì (đ/Tháng)</th>
                  <th className="py-4 px-4 text-center">Tùy Chọn Đăng Ký</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {packages.map((pkg) => (
                  <tr key={`table-${pkg.id}`} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-5 font-extrabold text-[var(--vidc-legacy-hex-0f172a)]">
                      <div className="flex items-center gap-2">
                        <span>{pkg.name}</span>
                        {pkg.badge && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/80 whitespace-nowrap">
                            {pkg.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-medium text-slate-400 block mt-0.5">
                        {pkg.subtitle}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-bold text-slate-800">{pkg.space}</td>
                    <td className="py-4 px-4 font-bold text-slate-800">{pkg.power}</td>
                    <td className="py-4 px-4 text-slate-700">{pkg.traffic}</td>
                    <td className="py-4 px-4 text-slate-700 font-semibold">{pkg.bandwidth}</td>
                    <td className="py-4 px-4 text-slate-700">{pkg.ip}</td>
                    <td className="py-4 px-4 font-black text-base text-[var(--vidc-color-brand-red)] whitespace-nowrap">
                      {pkg.priceMonthly} đ
                    </td>
                    <td className="py-4 px-4 text-center">
                      <VIDCNativeButton
                        type="button"
                        onClick={() => handleSelectPackage(pkg)}
                        className="px-5 py-2 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs uppercase tracking-wider shadow-xs hover:shadow transition-all cursor-pointer"
                      >
                        ĐĂNG KÝ
                      </VIDCNativeButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ALTERNATIVE VIEW: DẠNG THẺ GRID (Khi người dùng chọn chế độ xem dạng thẻ) */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 mb-10 items-stretch">
            {packages.map((pkg) => {
              const isRecommended = pkg.recommended;
              const displayPrice = pkg.priceMonthly;
              const displayUnit = 'Đ/THÁNG';

              return (
                <div
                  key={pkg.id}
                  id={`card-${pkg.id}`}
                  className={`relative rounded-2xl p-5 bg-white border border-slate-200/90 flex flex-col justify-between transition-all duration-300 ${
                    isRecommended
                      ? 'shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-300 ring-2 ring-[var(--vidc-color-brand-red)]/20'
                      : 'shadow-xs hover:shadow-md hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Card Header: Title, Subtitle, Badge */}
                    <div className="min-h-[48px] mb-2">
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
                        <span className="text-xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">
                          {displayPrice}
                        </span>
                        <span className="text-[10px] font-extrabold text-slate-500 uppercase">
                          {displayUnit}
                        </span>
                      </div>
                    </div>

                    {/* Specs list with red checkmarks */}
                    <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                        <span className="font-bold text-slate-900">Không gian: {pkg.space}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                        <span className="font-bold text-slate-900">Công suất: {pkg.power}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                        <span className="text-slate-700">Lưu lượng: {pkg.traffic}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                        <span className="text-slate-700">Băng thông: {pkg.bandwidth}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                        <span className="text-slate-700">IPv4: {pkg.ip}</span>
                      </li>
                    </ul>
                  </div>

                  {/* Action: Register button */}
                  <div className="pt-2 border-t border-slate-100">
                    <VIDCNativeButton
                      id={`btn-register-${pkg.id}`}
                      type="button"
                      onClick={() => handleSelectPackage(pkg)}
                      className="w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-xs uppercase tracking-wider text-center block cursor-pointer"
                    >
                      {t.registerNow}
                    </VIDCNativeButton>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Custom Configurator CTA Banner */}
        <div className="relative rounded-2xl bg-[var(--vidc-legacy-hex-090d16)] text-white p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-white/10 text-white border border-white/10 shrink-0">
                <Sliders className="w-6 h-6 text-[var(--vidc-color-brand-red)]" />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-sm sm:text-base font-extrabold text-white leading-relaxed">
                  📞 {t.customPrompt}
                </p>
              </div>
            </div>

            <VIDCNativeButton
              id="btn-custom-survey"
              type="button"
              onClick={onOpenCustomSurvey}
              className="px-6 py-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs sm:text-sm whitespace-nowrap transition-all shadow-lg shadow-[var(--vidc-color-brand-red)]/20 uppercase tracking-wider cursor-pointer"
            >
              {t.customBtn}
            </VIDCNativeButton>
          </div>
        </div>

      </div>
    </section>
  );
};
