import React, { useState } from 'react';
import { Check, Sliders } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface AntiDdosPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (notes?: string) => void;
}

export const AntiDdosPricing: React.FC<AntiDdosPricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedRegion, setSelectedRegion] = useState<'north' | 'central' | 'south'>('north');

  const discountRate = billingCycle === 'yearly' ? 0.9 : 1.0;

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos ? 'Choose the optimal protection tier for your enterprise' : 'Lựa chọn cấu hình bảo vệ tối ưu cho doanh nghiệp',
    desc: isLaos 
      ? 'Enterprise-standard volumetric DDoS mitigation infrastructure with transparent & flexible costs'
      : 'Hạ tầng phòng vệ an toàn thông tin tiêu chuẩn Enterprise với chi phí minh bạch & linh hoạt',
    billingModel: isLaos ? 'BILLING MODEL:' : 'MÔ HÌNH THANH TOÁN:',
    infrastructureRegion: isLaos ? 'INFRASTRUCTURE REGION:' : 'KHU VỰC HẠ TẦNG:',
    north: isLaos ? 'North' : 'Miền Bắc',
    central: isLaos ? 'Central' : 'Miền Trung',
    south: isLaos ? 'South' : 'Miền Nam',
    monthly: isLaos ? 'Monthly' : 'Theo tháng',
    yearly: isLaos ? 'Yearly (Save 10%)' : 'Theo năm (Tiết kiệm 10%)',
    config: isLaos ? 'CONFIGURATION' : 'CẤU HÌNH',
    detailDesc: isLaos ? 'Detailed configuration includes:' : 'Cấu hình chi tiết bao gồm:',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    freeTrialBtn: isLaos ? 'FREE TRIAL' : 'DÙNG THỬ MIỄN PHÍ',
    consultBtn: isLaos ? 'REQUEST CONSULTATION' : 'NHẬN TƯ VẤN',
    customTitle: isLaos ? 'Custom Configuration — Tailored to your needs' : 'Cấu hình tùy chỉnh — Thiết kế riêng theo nhu cầu',
    customDesc: isLaos 
      ? 'Need a larger mitigation capacity? We support custom engineering architectures scaling from 10 Gbps to over 100 Gbps with the highest SLA commitment.'
      : 'Cần giải pháp quy mô lớn hơn? Chúng tôi hỗ trợ may đo cấu hình riêng biệt từ 10 Gbps đến hơn 100 Gbps với cam kết SLA cao nhất và hạ tầng chuyên biệt.',
    customBtn: isLaos ? 'REQUEST CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatFootnote: isLaos 
      ? '* All service pricing excludes taxes. You can upgrade protection bandwidth at any time in the control panel.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể nâng cấp băng thông bảo vệ bất cứ lúc nào trong bảng điều khiển.',
  };

  const packages = [
    {
      id: 'DDM1G',
      name: isLaos ? 'Package DDM1G' : 'Gói DDM1G',
      subtitle: isLaos ? 'STANDARD DEFENSE' : 'TIÊU CHUẨN (CÓ DÙNG THỬ)',
      bandwidth: isLaos ? '1 Gbps Scrubbing Capacity' : '1 Gbps Băng thông lọc sạch',
      ipCount: isLaos ? '8 Protected IPs' : '8 IP được bảo vệ',
      detection: isLaos ? 'Automated Reaction < 3 Mins' : 'Tự động phát hiện & chặn < 3 phút',
      alerts: isLaos ? 'Email & SMS Alerts (< 5 Mins)' : 'Cảnh báo Email & SMS (< 5 phút)',
      portal: isLaos ? 'Real-Time Web Dashboard' : 'Web Portal theo dõi thời gian thực',
      support: isLaos ? '24/7/365 Dedicated SOC Support' : 'Chuyên gia kỹ thuật 24/7/365',
      basePriceMonthly: 7000000,
      priceUSD: 280,
      badge: isLaos ? 'TRIAL AVAILABLE' : 'CÓ DÙNG THỬ',
      recommended: false,
      secondaryBtnText: t.freeTrialBtn,
    },
    {
      id: 'DDM2G',
      name: isLaos ? 'Package DDM2G' : 'Gói DDM2G',
      subtitle: isLaos ? 'ADVANCED MITIGATION' : 'NÂNG CAO CHO DOANH NGHIỆP',
      bandwidth: isLaos ? '2 Gbps Scrubbing Capacity' : '2 Gbps Băng thông lọc sạch',
      ipCount: isLaos ? '32 Protected IPs' : '32 IP được bảo vệ',
      detection: isLaos ? 'Automated Reaction < 3 Mins' : 'Tự động phát hiện & chặn < 3 phút',
      alerts: isLaos ? 'Email & SMS Alerts (< 5 Mins)' : 'Cảnh báo Email & SMS (< 5 phút)',
      portal: isLaos ? 'Real-Time Web Dashboard' : 'Web Portal theo dõi thời gian thực',
      support: isLaos ? '24/7/365 Dedicated SOC Support' : 'Chuyên gia kỹ thuật 24/7/365',
      basePriceMonthly: 10000000,
      priceUSD: 400,
      badge: null,
      recommended: false,
      secondaryBtnText: t.consultBtn,
    },
    {
      id: 'DDM3G',
      name: isLaos ? 'Package DDM3G' : 'Gói DDM3G',
      subtitle: isLaos ? 'MOST POPULAR' : 'PHỔ BIẾN NHẤT',
      bandwidth: isLaos ? '3 Gbps Scrubbing Capacity' : '3 Gbps Băng thông lọc sạch',
      ipCount: isLaos ? '64 Protected IPs' : '64 IP được bảo vệ',
      detection: isLaos ? 'Automated Reaction < 3 Mins' : 'Tự động phát hiện & chặn < 3 phút',
      alerts: isLaos ? 'Email & SMS Alerts (< 5 Mins)' : 'Cảnh báo Email & SMS (< 5 phút)',
      portal: isLaos ? 'Real-Time Web Dashboard' : 'Web Portal theo dõi thời gian thực',
      support: isLaos ? '24/7/365 Dedicated SOC Support' : 'Chuyên gia kỹ thuật 24/7/365',
      basePriceMonthly: 14000000,
      priceUSD: 560,
      badge: isLaos ? '★ BEST SELLER' : '★ BÁN CHẠY',
      recommended: true,
      secondaryBtnText: t.consultBtn,
    },
    {
      id: 'DDM5G',
      name: isLaos ? 'Package DDM5G' : 'Gói DDM5G',
      subtitle: isLaos ? 'ENTERPRISE SCALE' : 'QUY MÔ LỚN / TÀI CHÍNH',
      bandwidth: isLaos ? '5 Gbps Scrubbing Capacity' : '5 Gbps Băng thông lọc sạch',
      ipCount: isLaos ? '256 Protected IPs' : '256 IP được bảo vệ',
      detection: isLaos ? 'Automated Reaction < 3 Mins' : 'Tự động phát hiện & chặn < 3 phút',
      alerts: isLaos ? 'Email & SMS Alerts (< 5 Mins)' : 'Cảnh báo Email & SMS (< 5 phút)',
      portal: isLaos ? 'Real-Time Web Dashboard' : 'Web Portal theo dõi thời gian thực',
      support: isLaos ? '24/7/365 Dedicated SOC Support' : 'Chuyên gia kỹ thuật 24/7/365',
      basePriceMonthly: 25000000,
      priceUSD: 1000,
      badge: null,
      recommended: false,
      secondaryBtnText: t.consultBtn,
    },
  ];

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
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.monthly}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  billingCycle === 'yearly'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.yearly}
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

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 items-stretch">
          {packages.map((pkg) => {
            const isRecommended = pkg.recommended;
            const finalPriceVnd = Math.round(pkg.basePriceMonthly * discountRate);
            const finalPriceUsd = Math.round(pkg.priceUSD * discountRate);
            
            const displayPriceFormatted = isLaos 
              ? `$${finalPriceUsd}` 
              : new Intl.NumberFormat('vi-VN').format(finalPriceVnd);
            const displayUnit = isLaos ? 'USD/MO' : 'Đ/THÁNG';

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-5 bg-white border border-slate-200/90 flex flex-col justify-between transition-all duration-300 ${
                  isRecommended
                    ? 'shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-300'
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
                        {displayPriceFormatted}
                      </span>
                      <span className="text-[11px] font-extrabold text-slate-500 uppercase">
                        {displayUnit}
                      </span>
                    </div>
                  </div>

                  {/* Config Header */}
                  <div className="mt-4 mb-3">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      {t.config}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {t.detailDesc}
                    </p>
                  </div>

                  {/* Specs list with red checkmarks */}
                  <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-bold text-slate-900">{pkg.bandwidth}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-bold text-slate-900">{pkg.ipCount}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="text-slate-700">{pkg.detection}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="text-slate-700">{pkg.alerts}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="text-slate-700">{pkg.portal}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="text-slate-700">{pkg.support}</span>
                    </li>
                  </ul>
                </div>

                {/* Card Bottom CTA Buttons */}
                <div className="space-y-2 pt-2">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult(`Đăng ký ngay ${pkg.name} (${billingCycle === 'yearly' ? 'Gói 12 tháng' : 'Gói 1 tháng'})`)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-sm uppercase tracking-wider text-center block cursor-pointer"
                  >
                    {t.registerNow}
                  </VIDCNativeButton>
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult(`Yêu cầu tư vấn / dùng thử ${pkg.name}`)}
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-extrabold text-[11px] transition-all uppercase tracking-wider text-center block cursor-pointer"
                  >
                    {pkg.secondaryBtnText}
                  </VIDCNativeButton>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Configuration Dark Banner */}
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
              onClick={() => onOpenConsult('Đăng ký cấu hình Anti-DDoS may đo riêng (> 100 Gbps)')}
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
