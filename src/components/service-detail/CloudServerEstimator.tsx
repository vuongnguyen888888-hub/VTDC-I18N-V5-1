import React, { useState } from 'react';
import { LayoutGrid, Table as TableIcon, ChevronLeft, ChevronRight, Check, Sliders, Info, Cpu, HardDrive, Shield, Network, RefreshCw, Headphones, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


export interface EstimatorConfig {
  vcpu: number;
  ram: number;
  storage: number;
  ipCount: number;
  bandwidthMbps: number;
  osType: 'linux' | 'windows';
  billingCycleMonths: number;
  packageName?: string;
}

interface CloudServerEstimatorProps {
  currentMarket?: SEAMarket;
  onSelectConfigForQuote: (config: EstimatorConfig, estimatedTotal: number, currency: string) => void;
}

export const CloudServerEstimator: React.FC<CloudServerEstimatorProps> = ({
  currentMarket,
  onSelectConfigForQuote,
}) => {
  const { currentLanguage } = useLanguage();
  // View mode: 'grid' (Card view - image 1) or 'table' (Comparison table - image 2)
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  // Carousel page for grid view on screens that cannot fit all cards
  const [gridPage, setGridPage] = useState<number>(0);
  // Billing Mode State: 'saving' (Saving Plan) or 'payg' (Pay-as-you-go)
  const [billingMode, setBillingMode] = useState<'saving' | 'payg'>('saving');
  // Region Selection State: 'north' (Miền Bắc) or 'south' (Miền Nam) matching image
  const [selectedRegion, setSelectedRegion] = useState<'north' | 'south'>('north');

  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const isKhmer = currentLanguage === 'kh';
  const isLaos = isNonVn && !isKhmer;

  const t = {
    pricingTitle: isKhmer ? 'តារាងតម្លៃសេវាកម្ម' : isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isKhmer ? 'ជ្រើសរើសរចនាសម្ព័ន្ធដ៏ប្រសើរសម្រាប់អាជីវកម្មរបស់អ្នក' : isLaos ? 'Choose the optimal configuration for your business' : 'Lựa chọn cấu hình tối ưu cho doanh nghiệp',
    desc: isKhmer 
      ? 'ហេដ្ឋារចនាសម្ព័ន្ធ Cloud កម្រិត Enterprise ជាមួយតម្លៃច្បាស់លាស់ និងបត់បែន'
      : isLaos 
      ? 'Enterprise-standard cloud computing infrastructure with transparent & flexible costs'
      : 'Hạ tầng điện toán đám mây tiêu chuẩn Enterprise với chi phí minh bạch & linh hoạt',
    billingModel: isKhmer ? 'MÔ HÌNH TÍNH PHÍ:' : isLaos ? 'MÔ HÌNH TÍNH PHÍ:' : 'MÔ HÌNH TÍNH PHÍ:',
    infrastructureRegion: isKhmer ? 'KHU VỰC HẠ TẦNG:' : isLaos ? 'KHU VỰC HẠ TẦNG:' : 'KHU VỰC HẠ TẦNG:',
    north: 'MIỀN BẮC',
    south: 'MIỀN NAM',
    showingPackages: 'Hiển thị 5 gói cước dịch vụ',
    register: 'ĐĂNG KÝ',
    trial: 'DÙNG THỬ',
    customTitle: isKhmer ? 'ការកំណត់រចនាសម្ព័ន្ធផ្ទាល់ខ្លួន — រចនាឡើងតាមតម្រូវការរបស់អ្នក' : isLaos ? 'Custom Configuration — Tailored to your needs' : 'Cấu hình tùy chỉnh — Thiết kế riêng theo nhu cầu',
    customDesc: isKhmer 
      ? 'ត្រូវការដំណោះស្រាយធំជាងនេះ? យើងគាំទ្រការកំណត់រចនាសម្ព័ន្ធផ្ទាល់ខ្លួនរហូតដល់ 32 vCPU, 128 GB RAM និង SSD Enterprise រាប់សិប Terabyte ជាមួយនឹងការប្តេជ្ញាចិត្ត SLA ខ្ពស់បំផុត។'
      : isLaos 
      ? 'Need a larger solution? We support custom configurations up to 32 vCPU, 128 GB RAM and dozens of Terabytes Enterprise SSD with the highest SLA commitment.'
      : 'Cần giải pháp lớn hơn? Chúng tôi hỗ trợ may đo cấu hình riêng biệt lên tới 32 vCPU, 128 GB RAM và hàng chục Terabyte SSD Enterprise với cam kết SLA cao nhất.',
    customBtn: isKhmer ? 'ស្នើសុំការប្រឹក្សា' : isLaos ? 'REQUEST CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatFootnote: isKhmer 
      ? '* តារាងតម្លៃសេវាកម្មទាំងអស់មិនទាន់ាប់បញ្ចូលពន្ធអាករឡើយ។'
      : isLaos 
      ? '* All service pricing excludes taxes.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể điều chỉnh cấu hình bất cứ lúc nào trong bảng điều khiển.',
  };

  // Exact 5 packages from the user's uploaded screenshots
  const packages = [
    {
      id: 'cs1',
      code: 'CS1',
      originalPrice: '800.000 đ',
      discountPrice: '614.000 đ',
      priceNumeric: 614000,
      period: '/tháng',
      hasTrial: true,
      vcpu: '2 vCPU',
      ram: '4 GB',
      ssd: '20 GB',
      ssdSilver: '20 GB',
      bandwidth: '300 Mbps',
      dataTransfer: 'Unlimited',
      ip: '1 IP',
      support: 'Hỗ trợ kỹ thuật 24/7/365',
      security: 'DDoS Protection Basic',
      vcpuCount: 2,
      ramCount: 4,
      storageCount: 20,
    },
    {
      id: 'cs2',
      code: 'CS2',
      originalPrice: '1.200.000 đ',
      discountPrice: '908.000 đ',
      priceNumeric: 908000,
      period: '/tháng',
      hasTrial: true,
      vcpu: '4 vCPU',
      ram: '4 GB',
      ssd: '40 GB',
      ssdSilver: '40 GB',
      bandwidth: '300 Mbps',
      dataTransfer: 'Unlimited',
      ip: '1 IP',
      support: 'Hỗ trợ kỹ thuật 24/7/365',
      security: 'DDoS Protection Basic',
      vcpuCount: 4,
      ramCount: 4,
      storageCount: 40,
    },
    {
      id: 'cs3',
      code: 'CS3',
      originalPrice: '1.800.000 đ',
      discountPrice: '1.356.000 đ',
      priceNumeric: 1356000,
      period: '/tháng',
      hasTrial: true,
      vcpu: '4 vCPU',
      ram: '8 GB',
      ssd: '80 GB',
      ssdSilver: '80 GB',
      bandwidth: '300 Mbps',
      dataTransfer: 'Unlimited',
      ip: '1 IP',
      support: 'Hỗ trợ kỹ thuật 24/7/365',
      security: 'DDoS Protection Basic',
      vcpuCount: 4,
      ramCount: 8,
      storageCount: 80,
    },
    {
      id: 'cs4',
      code: 'CS4',
      originalPrice: '3.500.000 đ',
      discountPrice: '2.584.000 đ',
      priceNumeric: 2584000,
      period: '/tháng',
      hasTrial: false,
      vcpu: '8 vCPU',
      ram: '16 GB',
      ssd: '120 GB',
      ssdSilver: '120 GB',
      bandwidth: '300 Mbps',
      dataTransfer: 'Unlimited',
      ip: '1 IP',
      support: 'Hỗ trợ chuyên gia 24/7',
      security: 'DDoS Protection Advanced',
      vcpuCount: 8,
      ramCount: 16,
      storageCount: 120,
    },
    {
      id: 'cs5',
      code: 'CS5',
      originalPrice: '5.000.000 đ',
      discountPrice: '3.780.000 đ',
      priceNumeric: 3780000,
      period: '/tháng',
      hasTrial: false,
      vcpu: '12 vCPU',
      ram: '24 GB',
      ssd: '150 GB',
      ssdSilver: '150 GB',
      bandwidth: '300 Mbps',
      dataTransfer: 'Unlimited',
      ip: '1 IP',
      support: 'Hỗ trợ chuyên gia 24/7',
      security: 'DDoS Protection Advanced',
      vcpuCount: 12,
      ramCount: 24,
      storageCount: 150,
    },
  ];

  const handleSelectPackage = (pkg: typeof packages[0]) => {
    const config: EstimatorConfig = {
      vcpu: pkg.vcpuCount,
      ram: pkg.ramCount,
      storage: pkg.storageCount,
      ipCount: 1,
      bandwidthMbps: 300,
      osType: 'linux',
      billingCycleMonths: 1,
      packageName: pkg.code,
    };
    onSelectConfigForQuote(config, pkg.priceNumeric, 'VND');
  };

  const handleTrial = (pkg: typeof packages[0]) => {
    window.open('https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-server', '_blank');
  };

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f5f8)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.pricingTitle}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Top Control Bar Matching Image: Mô hình tính phí & Khu vực hạ tầng */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 mb-10 text-xs">
          {/* Mô hình tính phí */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5 font-bold text-slate-800 text-xs tracking-wider">
              <span>{t.billingModel}</span>
              <Info className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-slate-600" />
            </div>
            <div className="inline-flex p-1 bg-white border border-slate-200/90 rounded-full shadow-xs">
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingMode('saving')}
                className={`px-5 py-2 rounded-full font-bold text-xs transition-all duration-200 cursor-pointer ${
                  billingMode === 'saving'
                    ? 'bg-[var(--vidc-legacy-hex-18181a)] text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                SAVING PLAN
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingMode('payg')}
                className={`px-5 py-2 rounded-full font-bold text-xs transition-all duration-200 cursor-pointer ${
                  billingMode === 'payg'
                    ? 'bg-[var(--vidc-legacy-hex-18181a)] text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                PAY-AS-YOU-GO
              </VIDCNativeButton>
            </div>
          </div>

          {/* Khu vực hạ tầng */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5 font-bold text-slate-800 text-xs tracking-wider">
              <span>📍 {t.infrastructureRegion}</span>
            </div>
            <div className="inline-flex p-1 bg-white border border-slate-200/90 rounded-full shadow-xs">
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('north')}
                className={`px-5 py-2 rounded-full font-bold text-xs transition-all duration-200 cursor-pointer ${
                  selectedRegion === 'north'
                    ? 'bg-[var(--vidc-legacy-hex-18181a)] text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {t.north}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('south')}
                className={`px-5 py-2 rounded-full font-bold text-xs transition-all duration-200 cursor-pointer ${
                  selectedRegion === 'south'
                    ? 'bg-[var(--vidc-legacy-hex-18181a)] text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {t.south}
              </VIDCNativeButton>
            </div>
          </div>
        </div>

        {/* View Toggle Bar (Hiển thị 5 gói cước dịch vụ & Icon chuyển đổi chế độ xem Grid / Table + Carousel Arrows) */}
        <div className="flex items-center justify-between mb-6 pb-2">
          <div className="text-xs sm:text-sm text-slate-600 font-medium">
            Hiển thị <span className="font-bold text-slate-900">5</span> gói cước dịch vụ
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Switcher: Grid vs Table */}
            <div className="inline-flex p-0.5 bg-white border border-slate-200 rounded-lg shadow-2xs">
              <VIDCNativeButton
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[var(--vidc-legacy-hex-18181a)] text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Dạng lưới (Grid)"
              >
                <LayoutGrid className="w-4 h-4" />
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-md transition-all cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-[var(--vidc-legacy-hex-18181a)] text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Dạng bảng so sánh (Table)"
              >
                <TableIcon className="w-4 h-4" />
              </VIDCNativeButton>
            </div>

            {/* Pagination / Arrow Controls */}
            {viewMode === 'grid' && (
              <div className="hidden sm:inline-flex p-0.5 bg-white border border-slate-200 rounded-lg shadow-2xs">
                <VIDCNativeButton
                  type="button"
                  onClick={() => setGridPage((p) => Math.max(0, p - 1))}
                  disabled={gridPage === 0}
                  className="p-1.5 text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  title="Gói trước"
                >
                  <ChevronLeft className="w-4 h-4" />
                </VIDCNativeButton>
                <VIDCNativeButton
                  type="button"
                  onClick={() => setGridPage((p) => Math.min(1, p + 1))}
                  disabled={gridPage === 1}
                  className="p-1.5 text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  title="Gói tiếp theo"
                >
                  <ChevronRight className="w-4 h-4" />
                </VIDCNativeButton>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: 5 PRICING CARDS (GRID VIEW - MATCHING IMAGE 1)                    */}
        {/* ========================================================================= */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12 items-stretch">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 group"
              >
                <div>
                  {/* Package Code Heading (CS1, CS2, ...) */}
                  <div className="text-center pb-2">
                    <h3 className="text-lg font-black text-[var(--vidc-color-brand-red)] tracking-wide">
                      {pkg.code}
                    </h3>

                    {/* Original Strikethrough Price */}
                    <div className="text-xs text-slate-400 line-through font-medium mt-1">
                      {pkg.originalPrice}
                    </div>

                    {/* Discounted / Current Price */}
                    <div className="text-2xl font-black text-[var(--vidc-color-brand-red)] tracking-tight mt-0.5">
                      {pkg.discountPrice}
                    </div>

                    <div className="text-[11px] text-slate-500 font-medium">
                      {pkg.period}
                    </div>
                  </div>

                  {/* Action Buttons: ĐĂNG KÝ & DÙNG THỬ */}
                  <div className="space-y-2 my-5">
                    <VIDCNativeButton
                      type="button"
                      onClick={() => handleSelectPackage(pkg)}
                      className="w-full py-2.5 px-4 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] active:bg-[var(--vidc-legacy-hex-b30027)] text-white font-extrabold text-xs tracking-wider transition-all shadow-xs cursor-pointer"
                    >
                      {t.register}
                    </VIDCNativeButton>

                    {pkg.hasTrial ? (
                      <VIDCNativeButton
                        type="button"
                        onClick={() => handleTrial(pkg)}
                        className="w-full py-2 px-4 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-bold text-xs tracking-wider transition-all cursor-pointer"
                      >
                        {t.trial}
                      </VIDCNativeButton>
                    ) : (
                      /* Blank placeholder for alignment */
                      <div className="h-[34px] hidden xl:block" />
                    )}
                  </div>

                  {/* Feature specs list with Red Checkmarks */}
                  <ul className="space-y-3 text-xs text-slate-700 pt-2 border-t border-slate-100">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span>vCPU: <strong className="text-slate-900 font-semibold">{pkg.vcpu}</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span>RAM: <strong className="text-slate-900 font-semibold">{pkg.ram}</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span>SSD: <strong className="text-slate-900 font-semibold">{pkg.ssd}</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span>Bandwidth: <strong className="text-slate-900 font-semibold">{pkg.bandwidth}</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span>Data Transfer: <strong className="text-slate-900 font-semibold">{pkg.dataTransfer}</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span>IP Address: <strong className="text-slate-900 font-semibold">{pkg.ip}</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: COMPARISON TABLE VIEW (MATCHING IMAGE 2)                          */}
        {/* ========================================================================= */}
        {viewMode === 'table' && (
          <div className="overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-xs mb-12">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-[var(--vidc-legacy-hex-fafafa)]">
                  {/* Left Column Header: Thông Số & Tính Năng */}
                  <th className="py-5 px-6 text-left text-sm font-extrabold text-[var(--vidc-legacy-hex-222225)] w-[220px] min-w-[200px]">
                    Thông Số & Tính Năng
                  </th>

                  {/* 5 Package Headers */}
                  {packages.map((pkg) => (
                    <th key={pkg.id} className="py-5 px-4 min-w-[170px] align-top">
                      <div className="space-y-2">
                        <div className="text-base font-black text-[var(--vidc-color-brand-red)]">
                          {pkg.code}
                        </div>
                        <VIDCNativeButton
                          type="button"
                          onClick={() => handleSelectPackage(pkg)}
                          className="w-full py-2 px-3 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs tracking-wider transition-all shadow-2xs cursor-pointer"
                        >
                          {t.register}
                        </VIDCNativeButton>
                        {pkg.hasTrial ? (
                          <VIDCNativeButton
                            type="button"
                            onClick={() => handleTrial(pkg)}
                            className="w-full py-1.5 px-3 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-xs tracking-wider transition-all cursor-pointer"
                          >
                            {t.trial}
                          </VIDCNativeButton>
                        ) : (
                          <div className="h-[29px]" />
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {/* 1. Giá dịch vụ */}
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-6 text-left font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-red-500">🏷️</span> Giá dịch vụ
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="py-4 px-4 align-middle">
                      <div className="text-xs text-slate-400 line-through font-medium">
                        {pkg.originalPrice}
                      </div>
                      <div className="text-sm sm:text-base font-black text-[var(--vidc-color-brand-red)]">
                        {pkg.discountPrice}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {pkg.period}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* 2. vCPU */}
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-6 text-left font-bold text-slate-900">
                    <span className="text-red-500 mr-2">🎛️</span> vCPU
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="py-3.5 px-4 font-medium text-slate-800">
                      {pkg.vcpu}
                    </td>
                  ))}
                </tr>

                {/* 3. RAM */}
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-6 text-left font-bold text-slate-900">
                    <span className="text-red-500 mr-2">💾</span> RAM
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="py-3.5 px-4 font-medium text-slate-800">
                      {pkg.ram}
                    </td>
                  ))}
                </tr>

                {/* 4. SSD Silver */}
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-6 text-left font-bold text-slate-900">
                    <span className="text-red-500 mr-2">🗄️</span> SSD Silver
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="py-3.5 px-4 font-medium text-slate-800">
                      {pkg.ssdSilver}
                    </td>
                  ))}
                </tr>

                {/* 5. Bandwidth */}
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-6 text-left font-bold text-slate-900">
                    <span className="text-red-500 mr-2">🛡️</span> Bandwidth
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="py-3.5 px-4 font-medium text-slate-800">
                      {pkg.bandwidth}
                    </td>
                  ))}
                </tr>

                {/* 6. Data Transfer */}
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-6 text-left font-bold text-slate-900">
                    <span className="text-red-500 mr-2">⏱️</span> Data Transfer
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="py-3.5 px-4 font-medium text-slate-800">
                      {pkg.dataTransfer}
                    </td>
                  ))}
                </tr>

                {/* 7. IP Address */}
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-6 text-left font-bold text-slate-900">
                    <span className="text-red-500 mr-2">🔄</span> IP Address
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="py-3.5 px-4 font-medium text-slate-800">
                      {pkg.ip}
                    </td>
                  ))}
                </tr>

                {/* 8. Hỗ trợ kỹ thuật 24/7 */}
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-6 text-left font-bold text-slate-900">
                    <span className="text-red-500 mr-2">🎧</span> Hỗ trợ kỹ thuật 24/7
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="py-3.5 px-4 font-medium text-slate-800">
                      {pkg.support}
                    </td>
                  ))}
                </tr>

                {/* 9. Bảo mật & Tính năng mở rộng */}
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-6 text-left font-bold text-slate-900">
                    <span className="text-red-500 mr-2">🔒</span> Bảo mật & Tính năng mở rộng
                  </td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="py-3.5 px-4 font-medium text-slate-800">
                      {pkg.security}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

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
              onClick={() => onSelectConfigForQuote({
                vcpu: 8,
                ram: 16,
                storage: 200,
                ipCount: 1,
                bandwidthMbps: 300,
                osType: 'linux',
                billingCycleMonths: 12,
                packageName: 'Custom Enterprise',
              }, 2584000, 'VND')}
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
