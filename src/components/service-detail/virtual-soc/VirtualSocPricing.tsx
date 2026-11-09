import React, { useState, useMemo } from 'react';
import { 
  Check, 
  Sliders, 
  ShieldCheck, 
  Calculator, 
  ArrowRight,
  Server,
  Layers,
  Sparkles
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';


interface VirtualSocPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (planNote?: string) => void;
}

export const VirtualSocPricing: React.FC<VirtualSocPricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  // Toggle states
  const [socPackage, setSocPackage] = useState<'endpoint' | 'full'>('endpoint');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // Calculator state: Device count (1 to 150)
  const [deviceCount, setDeviceCount] = useState<number>(10);

  const t = {
    eyebrow: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos 
      ? 'Optimal Cybersecurity Monitoring Pricing & Estimator' 
      : 'Lựa Chọn Quy Mô Giám Sát An Ninh Mạng Tối Ưu',
    subtitle: isLaos
      ? 'Enterprise-grade SOC monitoring infrastructure with transparent, flexible, and predictable pricing.'
      : 'Hạ tầng giám sát an ninh mạng tiêu chuẩn Enterprise với chi phí minh bạch, linh hoạt theo số lượng máy chủ/máy trạm.',
    
    packageLabel: isLaos ? 'SERVICE SCOPE:' : 'GÓI DỊCH VỤ:',
    pkgEndpoint: isLaos ? 'Endpoint vSOC' : 'Giám sát Endpoint SOC',
    pkgFull: isLaos ? 'Full SOC (Network + Endpoint)' : 'Giám sát Toàn diện (Network + Endpoint)',
    
    cycleLabel: isLaos ? 'BILLING CYCLE:' : 'KỲ HẠN THANH TOÁN:',
    cycleMonthly: isLaos ? 'Monthly' : 'Theo tháng',
    cycleYearly: isLaos ? '12 Months (-10%)' : '12 Tháng (Giảm 10%)',

    privilegeTitle: isLaos ? 'INCLUDED ENTERPRISE PRIVILEGES' : 'ĐẶC QUYỀN TÍNH NĂNG ĐI KÈM TRONG MỌI GÓI',
    privilegeDesc: isLaos 
      ? 'All tiers include 24/7 threat monitoring, remote incident triage, and weekly/monthly executive reports.' 
      : 'Bao gồm giám sát 24/7, xử lý sự cố từ xa, lọc False Positive và báo cáo ATTT định kỳ.',

    calculatorTitle: isLaos ? 'Fast Interactive Cost Estimator' : 'Công cụ dự toán chi phí nhanh (vSOC Calculator)',
    calculatorDesc: isLaos 
      ? 'Select your total quantity of physical servers, cloud VMs, and enterprise workstations.' 
      : 'Chọn số lượng máy chủ vật lý, máy ảo cloud và máy trạm doanh nghiệp cần giám sát bảo vệ.',
    deviceUnit: isLaos ? 'Device Quantity (Servers / Workstations)' : 'Số lượng thiết bị (Máy chủ / Máy trạm)',
    unitPriceLabel: isLaos ? 'Tier Unit Price:' : 'Đơn giá bậc thang:',
    monthlyTotalLabel: isLaos ? 'Estimated Monthly Cost:' : 'Ước tính cước phí:',
    
    customConfigTitle: isLaos 
      ? 'Custom Configuration — Tailored for Large Enterprise Demands' 
      : 'Cấu hình tùy chỉnh — Thiết kế riêng theo nhu cầu',
    customConfigDesc: isLaos
      ? 'Need an end-to-end Enterprise SOC (dedicated Network NSM sensors, Gateway inspection, Cloud WAF, and deep SIEM)? Contact our architects for infrastructure audits and customized quotes.'
      : 'Doanh nghiệp cần triển khai mô hình SOC toàn diện (bao gồm Network NSM, Gateway, Cloud WAF và SIEM chuyên sâu)? Chúng tôi hỗ trợ khảo sát hiện trạng và xây dựng phương án may đo riêng biệt.',
    customConfigBtn: isLaos 
      ? 'Request Consultation & Custom Quote' 
      : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatNote: isLaos
      ? '* Pricing excludes 10% VAT. Volume discounts apply automatically as device count scales.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể điều chỉnh số lượng thiết bị bất cứ lúc nào theo nhu cầu thực tế.',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    freeTrial: isLaos ? 'FREE TRIAL' : 'DÙNG THỬ MIỄN PHÍ',
    contactSales: isLaos ? 'CONTACT SALES' : 'LIÊN HỆ TƯ VẤN',
    config: isLaos ? 'CONFIG & PRIVILEGES' : 'CẤU HÌNH',
    detailDesc: isLaos ? 'Included service capabilities:' : 'Quyền lợi dịch vụ bao gồm:',
  };

  const privileges = [
    'Giám sát ATTT Endpoint 24/7/365',
    'Xử lý sự cố từ xa bởi Tier 1-3',
    'Phát hiện kỹ thuật tấn công mới',
    'Tối ưu rule giảm cảnh báo sai',
    'Báo cáo vận hành ATTT tuần',
    'Báo cáo tổng quan ATTT tháng',
    'Tri thức Threat Intelligence',
    'Hỗ trợ khẩn cấp từ chuyên gia VCS',
  ];

  const pricingTiers = [
    {
      name: 'Gói 1 – 5 thiết bị',
      range: '1 – 5 thiết bị',
      min: 1,
      max: 5,
      basePrice: 5000000,
      badge: null,
      isPopular: false,
    },
    {
      name: 'Gói 6 – 19 thiết bị',
      range: '6 – 19 thiết bị',
      min: 6,
      max: 19,
      basePrice: 4000000,
      badge: 'TIÊU CHUẨN',
      isPopular: false,
    },
    {
      name: 'Gói 20 – 49 thiết bị',
      range: '20 – 49 thiết bị',
      min: 20,
      max: 49,
      basePrice: 3500000,
      badge: '★ PHỔ BIẾN NHẤT',
      isPopular: true,
    },
    {
      name: 'Gói 50 – 99 thiết bị',
      range: '50 – 99 thiết bị',
      min: 50,
      max: 99,
      basePrice: 3000000,
      badge: 'DOANH NGHIỆP',
      isPopular: false,
    },
    {
      name: 'Gói Trên 100 thiết bị',
      range: 'Trên 100 thiết bị',
      min: 100,
      max: 9999,
      basePrice: 2000000,
      badge: 'ENTERPRISE',
      isPopular: false,
    },
  ];

  // Discount factor if yearly
  const discountFactor = billingCycle === 'yearly' ? 0.9 : 1.0;
  // Multiplier if full soc
  const packageMultiplier = socPackage === 'full' ? 1.35 : 1.0;

  // Dynamic price calculation based on slider
  const { currentUnitPrice, calculatedMonthlyTotal, currentTier } = useMemo(() => {
    let baseUnitP = 5000000;
    let tierObj = pricingTiers[0];

    if (deviceCount >= 100) {
      baseUnitP = 2000000;
      tierObj = pricingTiers[4];
    } else if (deviceCount >= 50) {
      baseUnitP = 3000000;
      tierObj = pricingTiers[3];
    } else if (deviceCount >= 20) {
      baseUnitP = 3500000;
      tierObj = pricingTiers[2];
    } else if (deviceCount >= 6) {
      baseUnitP = 4000000;
      tierObj = pricingTiers[1];
    } else {
      baseUnitP = 5000000;
      tierObj = pricingTiers[0];
    }

    const effectiveUnitP = Math.round(baseUnitP * packageMultiplier * discountFactor);
    const total = deviceCount * effectiveUnitP;

    return {
      currentUnitPrice: effectiveUnitP,
      calculatedMonthlyTotal: total,
      currentTier: tierObj,
    };
  }, [deviceCount, discountFactor, packageMultiplier]);

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount);
  };

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Global Controls & Mode Toggle Row */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Package Scope Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
              {t.packageLabel}
            </span>
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold">
              <VIDCNativeButton
                type="button"
                onClick={() => setSocPackage('endpoint')}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  socPackage === 'endpoint'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.pkgEndpoint}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSocPackage('full')}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  socPackage === 'full'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.pkgFull}
              </VIDCNativeButton>
            </div>
          </div>

          {/* Right: Billing Cycle Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
              {t.cycleLabel}
            </span>
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold">
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.cycleMonthly}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === 'yearly'
                    ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>{t.cycleYearly}</span>
              </VIDCNativeButton>
            </div>
          </div>

        </div>

        {/* 8 Feature Privileges Box */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs mb-8">
          <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-100">
            <ShieldCheck className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
            <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wider">
              {t.privilegeTitle}
            </h3>
            <span className="text-xs text-slate-400 hidden sm:inline">• {t.privilegeDesc}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {privileges.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                <div className="w-5 h-5 rounded-full bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Fast Calculator */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
                <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
                  {t.calculatorTitle}
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                {t.calculatorDesc}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                Gói áp dụng: <strong className="text-[var(--vidc-color-brand-red)]">{currentTier.range}</strong>
              </span>
            </div>
          </div>

          {/* Slider & Input Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            
            {/* Left Col: Range Slider & Quick Steppers */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <label htmlFor="device-slider" className="font-extrabold text-slate-700 uppercase tracking-wider">
                  {t.deviceUnit}
                </label>
                <span className="text-sm font-black text-[var(--vidc-legacy-hex-0f172a)] px-3 py-1 bg-slate-100 rounded-lg">
                  {deviceCount} {isLaos ? 'nodes' : 'thiết bị'}
                </span>
              </div>

              <VIDCNativeInput
                id="device-slider"
                type="range"
                min="1"
                max="150"
                step="1"
                value={deviceCount}
                onChange={(e) => setDeviceCount(parseInt(e.target.value, 10))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[var(--vidc-color-brand-red)]"
              />

              {/* Stepper Buttons for Quick Selection */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {[1, 5, 10, 25, 50, 100].map((num) => (
                  <VIDCNativeButton
                    key={num}
                    type="button"
                    onClick={() => setDeviceCount(num)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      deviceCount === num
                        ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {num} thiết bị
                  </VIDCNativeButton>
                ))}
              </div>
            </div>

            {/* Right Col: Calculation Results Card */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-5 border border-slate-200/90 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs text-slate-600">
                  <span>{t.unitPriceLabel}</span>
                  <span className="font-bold text-slate-900">{formatVND(currentUnitPrice)} VNĐ/tháng/node</span>
                </div>

                <div className="flex justify-between items-center text-xs text-slate-600">
                  <span>{t.monthlyTotalLabel}</span>
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">
                      {formatVND(calculatedMonthlyTotal)}
                    </span>
                    <span className="text-xs font-bold text-slate-500 uppercase ml-1">VNĐ/tháng</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <VIDCNativeButton
                  type="button"
                  onClick={() => onOpenConsult(`Đăng ký vSOC cho ${deviceCount} thiết bị (${formatVND(calculatedMonthlyTotal)} VNĐ/tháng)`)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs uppercase tracking-wider text-center transition-all shadow-sm cursor-pointer"
                >
                  {t.registerNow}
                </VIDCNativeButton>
                <VIDCNativeButton
                  type="button"
                  onClick={() => onOpenConsult(`Đăng ký dùng thử vSOC cho ${deviceCount} thiết bị`)}
                  className="py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-extrabold text-xs uppercase tracking-wider text-center transition-all cursor-pointer"
                >
                  {t.freeTrial}
                </VIDCNativeButton>
              </div>
            </div>

          </div>
        </div>

        {/* 5 Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12 items-stretch">
          {pricingTiers.map((tier, idx) => {
            const effectiveTierPrice = Math.round(tier.basePrice * packageMultiplier * discountFactor);
            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-5 bg-white border border-slate-200/90 flex flex-col justify-between transition-all duration-300 ${
                  tier.isPopular
                    ? 'shadow-lg shadow-slate-200/60 ring-2 ring-[var(--vidc-color-brand-red)]'
                    : 'shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Header */}
                  <div className="min-h-[52px] mb-2">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
                        {tier.name}
                      </h4>
                      {tier.badge && (
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold whitespace-nowrap ${
                          tier.isPopular
                            ? 'bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-0.5">
                      {tier.range}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="my-3 pb-3 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">
                        {formatVND(effectiveTierPrice)}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">
                        Đ/node/tháng
                      </span>
                    </div>
                  </div>

                  {/* Config Header */}
                  <div className="mt-4 mb-3">
                    <h5 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      {t.config}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {t.detailDesc}
                    </p>
                  </div>

                  {/* Specs list with red checkmarks */}
                  <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                      <span className="font-bold text-slate-900">Giám sát 24/7/365</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                      <span className="font-bold text-slate-900">Xử lý sự cố Tier 1-3</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                      <span className="text-slate-700">Tối ưu rule giảm False Positive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                      <span className="text-slate-700">Báo cáo vận hành tuần/tháng</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                      <span className="text-slate-700">Tri thức Threat Intelligence</span>
                    </li>
                  </ul>
                </div>

                {/* Card Bottom CTA Buttons */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {idx === 4 ? (
                    <VIDCNativeButton
                      type="button"
                      onClick={() => onOpenConsult(`Tư vấn gói quy mô ${tier.range}`)}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-all uppercase tracking-wider text-center block cursor-pointer"
                    >
                      {t.contactSales}
                    </VIDCNativeButton>
                  ) : (
                    <>
                      <VIDCNativeButton
                        type="button"
                        onClick={() => onOpenConsult(`Đăng ký gói vSOC: ${tier.range} (${formatVND(effectiveTierPrice)} VNĐ/node)`)}
                        className="w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all uppercase tracking-wider text-center block cursor-pointer"
                      >
                        {t.registerNow}
                      </VIDCNativeButton>
                      <VIDCNativeButton
                        type="button"
                        onClick={() => onOpenConsult(`Đăng ký dùng thử gói vSOC: ${tier.range}`)}
                        className="w-full py-1.5 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-extrabold text-[11px] transition-all uppercase tracking-wider text-center block cursor-pointer"
                      >
                        {t.freeTrial}
                      </VIDCNativeButton>
                    </>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Configuration Dark Banner (Matching CloudServerEstimator) */}
        <div className="relative rounded-2xl bg-[var(--vidc-legacy-hex-090d16)] text-white p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden">
          {/* Background grid texture */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight flex items-center justify-center md:justify-start gap-2.5">
                <Sliders className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
                <span>{t.customConfigTitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                {t.customConfigDesc}
              </p>
            </div>

            <VIDCNativeButton
              type="button"
              onClick={() => onOpenConsult('Yêu cầu khảo sát hiện trạng & Báo giá may đo vSOC toàn diện')}
              className="px-6 py-3 rounded-xl bg-black hover:bg-slate-900 active:bg-slate-950 text-white border border-slate-700 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 whitespace-nowrap min-h-[44px] cursor-pointer"
            >
              {t.customConfigBtn}
            </VIDCNativeButton>
          </div>
        </div>

        {/* Price Footnote */}
        <p className="text-center text-[11px] text-slate-400 italic mt-4">
          {t.vatNote}
        </p>

      </div>
    </section>
  );
};
