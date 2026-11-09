import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Sliders, LayoutGrid, Table, ChevronLeft, ChevronRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



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

interface CloudServerVMwareEstimatorProps {
  currentMarket: SEAMarket;
  onSelectConfigForQuote: (config: EstimatorConfig, estimatedTotal: number, currency: string) => void;
}

export const CloudServerVMwareEstimator: React.FC<CloudServerVMwareEstimatorProps> = ({
  currentMarket,
  onSelectConfigForQuote,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<'north' | 'central' | 'south'>('north');
  const [packageType, setPackageType] = useState<'general' | 'memory' | 'custom'>('general');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  // Custom configuration sliders state
  const [customVcpu, setCustomVcpu] = useState<number>(8);
  const [customRam, setCustomRam] = useState<number>(16);
  const [customStorage, setCustomStorage] = useState<number>(120);
  const [customIp, setCustomIp] = useState<number>(1);

  const formatPriceNum = (numMonthly: number) => {
    return new Intl.NumberFormat('vi-VN').format(Math.round(numMonthly));
  };

  const calculateCustomPrice = () => {
    const vcpuCost = customVcpu * 160000;
    const ramCost = customRam * 90000;
    const storageCost = customStorage * 3000;
    const ipCost = (customIp - 1) * 100000;
    return vcpuCost + ramCost + storageCost + ipCost;
  };

  const t2GenPackages = [
    { name: 'T2.GEN 01', subtitle: 'STANDARD VMWARE', vcpu: '4 vCPU', ram: '4 GB', ssd: '80 GB SSD', price: 1160000, canTrial: true },
    { name: 'T2.GEN 02', subtitle: 'PHỔ BIẾN NHẤT', vcpu: '4 vCPU', ram: '8 GB', ssd: '80 GB SSD', price: 1600000, canTrial: true, recommended: true },
    { name: 'T2.GEN 03', subtitle: 'PROFESSIONAL VMWARE', vcpu: '8 vCPU', ram: '8 GB', ssd: '100 GB SSD', price: 2150000, canTrial: false },
    { name: 'T2.GEN 04', subtitle: 'ENTERPRISE VMWARE', vcpu: '4 vCPU', ram: '16 GB', ssd: '100 GB SSD', price: 2550000, canTrial: false },
    { name: 'T2.GEN 05', subtitle: 'HIGH PERFORMANCE', vcpu: '8 vCPU', ram: '16 GB', ssd: '120 GB SSD', price: 3140000, canTrial: false },
    { name: 'T2.GEN 06', subtitle: 'BUSINESS HEAVY', vcpu: '8 vCPU', ram: '32 GB', ssd: '160 GB SSD', price: 5000000, canTrial: false },
    { name: 'T2.GEN 07', subtitle: 'POWER VMWARE', vcpu: '16 vCPU', ram: '32 GB', ssd: '200 GB SSD', price: 6150000, canTrial: false },
    { name: 'T2.GEN 08', subtitle: 'MAX POWER VMWARE', vcpu: '16 vCPU', ram: '64 GB', ssd: '240 GB SSD', price: 9950000, canTrial: false },
    { name: 'T2.GEN 09', subtitle: 'ULTIMATE ENTERPRISE', vcpu: '32 vCPU', ram: '96 GB', ssd: '300 GB SSD', price: 15790000, canTrial: false },
  ];

  const t2MemBurstPackages = [
    { name: 'T2.MEM BURST 01', subtitle: 'OPTIMIZED MEMORY', vcpu: '2 vCPU', ram: '16 GB', ssd: '80 GB SSD', price: 2290000, canTrial: false },
    { name: 'T2.MEM BURST 02', subtitle: 'DATABASE ENTERPRISE', vcpu: '6 vCPU', ram: '48 GB', ssd: '160 GB SSD', price: 6650000, canTrial: false, recommended: true },
    { name: 'T2.MEM BURST 03', subtitle: 'HEAVY IN-MEMORY', vcpu: '8 vCPU', ram: '64 GB', ssd: '180 GB SSD', price: 8800000, canTrial: false },
  ];

  const currentPackages = packageType === 'general' ? t2GenPackages : t2MemBurstPackages;

  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 5;

  useEffect(() => {
    setCurrentPage(0);
  }, [packageType]);

  const totalPages = Math.ceil(currentPackages.length / itemsPerPage);
  const paginatedPackages = currentPackages.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleSelectPackage = (pkgName: string, vcpuStr: string, ramStr: string, ssdStr: string, basePrice: number) => {
    const finalPrice = basePrice;
    const vcpuNum = parseInt(vcpuStr) || 4;
    const ramNum = parseInt(ramStr) || 8;
    const ssdNum = parseInt(ssdStr) || 80;

    onSelectConfigForQuote({
      vcpu: vcpuNum,
      ram: ramNum,
      storage: ssdNum,
      ipCount: 1,
      bandwidthMbps: 300,
      osType: 'linux',
      billingCycleMonths: 1,
      packageName: pkgName
    }, finalPrice, 'VND');
  };

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black bg-red-50 text-[var(--vidc-color-brand-red)] uppercase tracking-wider mb-3">
            BẢNG GIÁ DỊCH VỤ
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight mb-2">
            Bảng Giá Linh Hoạt &amp; Tối Ưu Chi Phí Đầu Tư
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            Lựa chọn cấu hình máy chủ ảo VMware vSphere phù hợp nhất với mô hình vận hành của doanh nghiệp
          </p>
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-6 sm:gap-x-8 mb-12 text-xs">
          
          {/* Region */}
          <div className="flex items-center gap-2.5">
            <span className="font-black text-slate-500 uppercase tracking-wider text-[11px]">
              KHU VỰC HẠ TẦNG:
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200/90 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('north')}
                className={`px-4 py-1.5 rounded-full font-bold transition-all ${
                  selectedRegion === 'north'
                    ? 'bg-[var(--vidc-legacy-hex-0b0f19)] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Miền Bắc
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('central')}
                className={`px-4 py-1.5 rounded-full font-bold transition-all ${
                  selectedRegion === 'central'
                    ? 'bg-[var(--vidc-legacy-hex-0b0f19)] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Miền Trung
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('south')}
                className={`px-4 py-1.5 rounded-full font-bold transition-all ${
                  selectedRegion === 'south'
                    ? 'bg-[var(--vidc-legacy-hex-0b0f19)] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Miền Nam
              </VIDCNativeButton>
            </div>
          </div>

          {/* Package Category */}
          <div className="flex items-center gap-2.5">
            <span className="font-black text-slate-500 uppercase tracking-wider text-[11px]">
              GÓI GIÁ:
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200/90 rounded-full shadow-sm">
              <div className="relative group">
                <VIDCNativeButton
                  type="button"
                  onClick={() => setPackageType('general')}
                  className={`px-4 py-1.5 rounded-full font-bold transition-all ${
                    packageType === 'general'
                      ? 'bg-[var(--vidc-legacy-hex-0b0f19)] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  General Purpose
                </VIDCNativeButton>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-2.5 bg-slate-900 text-white text-[11px] font-medium rounded-xl shadow-xl z-30 pointer-events-none text-center leading-relaxed">
                  Tối ưu cho đa số tác vụ web, phần mềm quản lý, ứng dụng doanh nghiệp vừa và nhỏ.
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                </div>
              </div>

              <div className="relative group">
                <VIDCNativeButton
                  type="button"
                  onClick={() => setPackageType('memory')}
                  className={`px-4 py-1.5 rounded-full font-bold transition-all ${
                    packageType === 'memory'
                      ? 'bg-[var(--vidc-legacy-hex-0b0f19)] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Memory Burst
                </VIDCNativeButton>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-64 p-2.5 bg-slate-900 text-white text-[11px] font-medium rounded-xl shadow-xl z-30 pointer-events-none text-center leading-relaxed">
                  Tối ưu cho cơ sở dữ liệu lớn, Redis/Memcached, ứng dụng ERP/CRM với tỉ lệ RAM cao (8 GB/vCPU).
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                </div>
              </div>

              <div className="relative group">
                <VIDCNativeButton
                  type="button"
                  onClick={() => setPackageType('custom')}
                  className={`px-4 py-1.5 rounded-full font-bold transition-all ${
                    packageType === 'custom'
                      ? 'bg-[color:var(--vidc-color-brand-red)] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tùy chỉnh
                </VIDCNativeButton>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-56 p-2.5 bg-slate-900 text-white text-[11px] font-medium rounded-xl shadow-xl z-30 pointer-events-none text-center leading-relaxed">
                  Tùy chỉnh thông số vCPU, RAM, SSD theo nhu cầu sử dụng thực tế.
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                </div>
              </div>
            </div>
          </div>

          {/* View Mode Toggle (only relevant for standard cards/table) */}
          {packageType !== 'custom' && (
            <div className="flex items-center gap-2.5">
              <div className="inline-flex p-1 bg-white border border-slate-200/90 rounded-full shadow-sm">
                <VIDCNativeButton
                  type="button"
                  onClick={() => setViewMode('cards')}
                  className={`p-1.5 rounded-full transition-all ${
                    viewMode === 'cards' ? 'bg-[var(--vidc-legacy-hex-0b0f19)] text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Dạng thẻ"
                >
                  <LayoutGrid className="w-4 h-4" />
                </VIDCNativeButton>
                <VIDCNativeButton
                  type="button"
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-full transition-all ${
                    viewMode === 'table' ? 'bg-[var(--vidc-legacy-hex-0b0f19)] text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Bảng ngang"
                >
                  <Table className="w-4 h-4" />
                </VIDCNativeButton>
              </div>
            </div>
          )}

        </div>

        {/* CUSTOM PACKAGE SLIDER MODE */}
        {packageType === 'custom' && (
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xl mb-12">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-0f172a)]">
                  Tùy Chỉnh Cấu Hình Máy Chủ Vmware
                </h3>
                <p className="text-xs text-slate-500">
                  Điều chỉnh thông số vCPU, RAM, SSD theo đúng nhu cầu sử dụng thực tế của bạn
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* vCPU */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    vCPU Cores:
                  </span>
                  <span className="text-sm font-black text-[var(--vidc-color-brand-red)]">
                    {customVcpu} vCPU
                  </span>
                </div>
                <VIDCNativeInput
                  type="range"
                  min="2"
                  max="32"
                  step="2"
                  value={customVcpu}
                  onChange={(e) => setCustomVcpu(Number(e.target.value))}
                  className="w-full accent-[var(--vidc-color-brand-red)] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-1">
                  <span>2 vCPU</span>
                  <span>16 vCPU</span>
                  <span>32 vCPU</span>
                </div>
              </div>

              {/* RAM */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    RAM Memory:
                  </span>
                  <span className="text-sm font-black text-[var(--vidc-color-brand-red)]">
                    {customRam} GB RAM
                  </span>
                </div>
                <VIDCNativeInput
                  type="range"
                  min="4"
                  max="128"
                  step="4"
                  value={customRam}
                  onChange={(e) => setCustomRam(Number(e.target.value))}
                  className="w-full accent-[var(--vidc-color-brand-red)] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-1">
                  <span>4 GB</span>
                  <span>64 GB</span>
                  <span>128 GB</span>
                </div>
              </div>

              {/* Storage */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Dung lượng SSD Storage:
                  </span>
                  <span className="text-sm font-black text-[var(--vidc-color-brand-red)]">
                    {customStorage} GB SSD
                  </span>
                </div>
                <VIDCNativeInput
                  type="range"
                  min="40"
                  max="1000"
                  step="20"
                  value={customStorage}
                  onChange={(e) => setCustomStorage(Number(e.target.value))}
                  className="w-full accent-[var(--vidc-color-brand-red)] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-1">
                  <span>40 GB</span>
                  <span>500 GB</span>
                  <span>1000 GB</span>
                </div>
              </div>

              {/* IP Count */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Số lượng IP Public:
                  </span>
                  <span className="text-sm font-black text-[var(--vidc-color-brand-red)]">
                    {customIp} IP
                  </span>
                </div>
                <VIDCNativeInput
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={customIp}
                  onChange={(e) => setCustomIp(Number(e.target.value))}
                  className="w-full accent-[var(--vidc-color-brand-red)] cursor-pointer"
                />
              </div>

              {/* Summary and CTA */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    ƯỚC TÍNH CHI PHÍ
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[var(--vidc-color-brand-red)]">
                    {formatPriceNum(calculateCustomPrice())} <span className="text-sm font-bold text-slate-500">Đ/THÁNG</span>
                  </div>
                </div>

                <VIDCNativeButton
                  type="button"
                  onClick={() => onSelectConfigForQuote({
                    vcpu: customVcpu,
                    ram: customRam,
                    storage: customStorage,
                    ipCount: customIp,
                    bandwidthMbps: 300,
                    osType: 'linux',
                    billingCycleMonths: 1,
                    packageName: `Cấu hình Tùy chỉnh (${customVcpu}vCPU/${customRam}GB/${customStorage}GB SSD)`
                  }, calculateCustomPrice(), 'VND')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d0002d)] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span>ĐĂNG KÝ CẤU HÌNH TÙY CHỈNH</span>
                  <ArrowRight className="w-4 h-4" />
                </VIDCNativeButton>
              </div>

            </div>
          </div>
        )}

        {/* CARD VIEW MODE */}
        {viewMode === 'cards' && packageType !== 'custom' && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-8 items-stretch">
              {paginatedPackages.map((pkg, idx) => {
                const isRecommended = pkg.recommended;

                return (
                  <div
                    key={idx}
                    className={`relative rounded-2xl p-5 bg-white border flex flex-col justify-between transition-all duration-300 ${
                      isRecommended
                        ? 'border-red-300 shadow-xl ring-1 ring-red-200'
                        : 'border-slate-200/90 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div>
                      {/* Top Package Label & Badge */}
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div>
                          <h3 className="text-lg font-black text-[var(--vidc-legacy-hex-0f172a)]">
                            {pkg.name}
                          </h3>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                            {pkg.subtitle}
                          </p>
                        </div>
                        {isRecommended && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/60 shrink-0">
                            ★ BÁN CHẠY
                          </span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="mt-3 mb-4">
                        <span className="text-2xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">
                          {formatPriceNum(pkg.price)}
                        </span>
                        <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider ml-1">
                          Đ/THÁNG
                        </span>
                      </div>

                      {/* Config Label */}
                      <div className="pt-2.5 border-t border-slate-100 mb-2.5">
                        <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-900 mb-0.5">
                          THÔNG SỐ CẤU HÌNH
                        </h4>
                      </div>

                      {/* Feature list */}
                      <ul className="space-y-2 text-xs text-slate-700 font-medium mb-5">
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0" />
                          <span className="font-bold text-slate-900">vCPU:</span>
                          <span className="font-semibold text-slate-800">{pkg.vcpu}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0" />
                          <span className="font-bold text-slate-900">RAM:</span>
                          <span className="font-semibold text-slate-800">{pkg.ram}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0" />
                          <span className="font-bold text-slate-900">Ổ Cứng:</span>
                          <span className="text-slate-800">{pkg.ssd}</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0" />
                          <span className="font-bold text-slate-900">Băng Thông:</span>
                          <span className="text-slate-800">300 Mbps / Unlimited</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0" />
                          <span className="font-bold text-slate-900">IP Tĩnh:</span>
                          <span className="text-slate-800">1 IP Public</span>
                        </li>
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2 pt-2">
                      <VIDCAnchor
                        href="https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-server"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-[color:var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002d)] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-[0.98] text-center block"
                      >
                        ĐĂNG KÝ NGAY
                      </VIDCAnchor>

                      {pkg.canTrial && (
                        <VIDCAnchor
                          href="https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-server"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-extrabold text-xs uppercase tracking-wider transition-all text-center block"
                        >
                          DÙNG THỬ MIỄN PHÍ
                        </VIDCAnchor>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Pagination / Next Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mb-12">
                <VIDCNativeButton
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
                  disabled={currentPage === 0}
                  aria-label="Trang trước"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentPage === 0
                      ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm active:scale-95'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </VIDCNativeButton>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }).map((_, pIdx) => (
                    <VIDCNativeButton
                      key={pIdx}
                      type="button"
                      onClick={() => setCurrentPage(pIdx)}
                      className={`w-8 h-8 rounded-full text-xs font-black transition-all ${
                        currentPage === pIdx
                          ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-sm'
                          : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {pIdx + 1}
                    </VIDCNativeButton>
                  ))}
                </div>

                <VIDCNativeButton
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
                  disabled={currentPage === totalPages - 1}
                  aria-label="Trang tiếp theo"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentPage === totalPages - 1
                      ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                      : 'bg-[var(--vidc-legacy-hex-0b0f19)] text-white hover:bg-[var(--vidc-color-brand-red)] shadow-md active:scale-95'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </VIDCNativeButton>
              </div>
            )}
          </div>
        )}

        {/* TABLE VIEW MODE */}
        {viewMode === 'table' && packageType !== 'custom' && (
          <div className="mb-12 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-slate-100/80 text-[11px] font-black uppercase text-slate-700 tracking-wider border-b border-slate-200">
                  <th className="py-4 px-5">Tên Gói</th>
                  <th className="py-4 px-4">vCPU</th>
                  <th className="py-4 px-4">RAM</th>
                  <th className="py-4 px-4">Ổ Cứng SSD</th>
                  <th className="py-4 px-4">Băng Thông / Data</th>
                  <th className="py-4 px-4">IP Tĩnh</th>
                  <th className="py-4 px-5 text-right">Đơn Giá / Tháng</th>
                  <th className="py-4 px-5 text-center">Thao Tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-800 font-medium">
                {currentPackages.map((pkg, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-5 font-bold text-[var(--vidc-legacy-hex-0f172a)] whitespace-nowrap">
                      {pkg.name}
                      {pkg.recommended && (
                        <span className="ml-2 text-[10px] font-black text-[var(--vidc-color-brand-red)] bg-red-50 px-2 py-0.5 rounded-full">
                          ★ BÁN CHẠY
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 font-semibold text-slate-900">{pkg.vcpu}</td>
                    <td className="py-4 px-4 font-semibold text-slate-900">{pkg.ram}</td>
                    <td className="py-4 px-4 text-slate-700">{pkg.ssd}</td>
                    <td className="py-4 px-4 text-slate-600">300 Mbps / Unlimited</td>
                    <td className="py-4 px-4 text-slate-600">1 IP Public</td>
                    <td className="py-4 px-5 text-right font-black text-[var(--vidc-color-brand-red)] text-base whitespace-nowrap">
                      {formatPriceNum(pkg.price)} đ
                    </td>
                    <td className="py-4 px-5 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-2">
                        <VIDCAnchor
                          href="https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-server"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-[color:var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002d)] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-sm inline-block"
                        >
                          ĐĂNG KÝ NGAY
                        </VIDCAnchor>
                        {pkg.canTrial && (
                          <VIDCAnchor
                            href="https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-server"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-extrabold text-xs uppercase tracking-wider transition-colors inline-block"
                          >
                            DÙNG THỬ
                          </VIDCAnchor>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}



      </div>
    </section>
  );
};


