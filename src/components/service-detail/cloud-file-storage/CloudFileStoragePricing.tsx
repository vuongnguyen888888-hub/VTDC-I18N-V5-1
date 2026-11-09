import React, { useState, useId } from 'react';
import { 
  Calculator, 
  Check, 
  HelpCircle, 
  ArrowRight, 
  Layers, 
  HardDrive, 
  Zap, 
  FileText, 
  ShieldCheck, 
  Info,
  Sliders,
  Sparkles,
  Server
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';


interface CloudFileStoragePricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: (customNotes?: string) => void;
}

export type StorageHardwareTier = 'ssd' | 'hdd';
export type BillingCycle = 1 | 6 | 12 | 24 | 36;

export const CloudFileStoragePricing: React.FC<CloudFileStoragePricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code === 'la';

  // Calculator State
  const [hardwareTier, setHardwareTier] = useState<StorageHardwareTier>('ssd');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(1);
  const [storageGB, setStorageGB] = useState<number>(500); // Step 50 GB
  const [additionalThroughputMbps, setAdditionalThroughputMbps] = useState<number>(0); // 0 to 500
  const [additionalFiles, setAdditionalFiles] = useState<number>(0); // Files in millions for SSD (0 to 135M)
  const storageInputId = useId();
  const throughputInputId = useId();
  const filesInputId = useId();

  // Discount rates
  const discountRates: Record<BillingCycle, { rate: number; label: string }> = {
    1: { rate: 0, label: isLaos ? '1 Month (Standard)' : '1 Tháng (Tiêu chuẩn)' },
    6: { rate: 0.05, label: isLaos ? '6 Months (-5%)' : '6 Tháng (-5%)' },
    12: { rate: 0.10, label: isLaos ? '12 Months (-10%)' : '12 Tháng (-10%)' },
    24: { rate: 0.15, label: isLaos ? '24 Months (-15%)' : '24 Tháng (-15%)' },
    36: { rate: 0.20, label: isLaos ? '36 Months (-20%)' : '36 Tháng (-20%)' },
  };

  // Unit price calculations for SSD Storage
  const getSSDUnitPrice = (gb: number): number => {
    if (gb <= 1000) return 3000;
    if (gb <= 5000) return 2800;
    if (gb <= 10000) return 2500;
    return 2000;
  };

  // Unit price calculations for HDD Storage
  const getHDDUnitPrice = (gb: number): number => {
    if (gb <= 1000) return 1600;
    if (gb <= 5000) return 1450;
    if (gb <= 10000) return 1350;
    return 1150;
  };

  // Calculate base monthly cost
  const storageUnitPrice = hardwareTier === 'ssd' ? getSSDUnitPrice(storageGB) : getHDDUnitPrice(storageGB);
  const storageCost = storageGB * storageUnitPrice;
  
  // Throughput cost: 68,800 VND per Mb/s added
  const throughputCost = additionalThroughputMbps * 68800;

  // Additional file cost for SSD: 500,000 VND per extra 1M files (or package)
  const additionalFilesCost = hardwareTier === 'ssd' ? additionalFiles * 500000 : 0;

  const totalMonthlyBase = storageCost + throughputCost + additionalFilesCost;
  const discountAmount = totalMonthlyBase * discountRates[billingCycle].rate;
  const finalMonthlyCost = totalMonthlyBase - discountAmount;
  const totalPeriodCost = finalMonthlyCost * billingCycle;

  const formatVND = (val: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'decimal' }).format(Math.round(val));
  };

  const handleApplyConfig = () => {
    const configSummary = `[Yêu cầu cấu hình Cloud File Storage]: Phân lớp ${hardwareTier.toUpperCase()}, Dung lượng: ${storageGB} GB (${formatVND(storageGB / 1024)} TB), Thông lượng bổ sung: ${additionalThroughputMbps} Mb/s (Tổng ${38 + additionalThroughputMbps} Mb/s), Chu kỳ: ${billingCycle} tháng, Dự toán: ${formatVND(finalMonthlyCost)} VNĐ/tháng.`;
    if (onOpenConsult) {
      onOpenConsult(configSummary);
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-slate-800 border-t border-slate-200">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[var(--vidc-color-brand-red)] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{isLaos ? 'TRANSPARENT PRICING' : 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight">
            {isLaos ? 'Flexible Pricing & Investment Optimization' : 'Bảng Giá Linh Hoạt & Tối Ưu Chi Phí Đầu Tư'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            {isLaos
              ? 'Transparent pay-as-you-grow rates for both Enterprise SSD & High-Capacity HDD tiers. Provision by 50 GB blocks with zero downtime.'
              : '(Bảng giá chưa bao gồm thuế VAT nếu có). Khởi tạo linh hoạt theo từng Block 50 GB, miễn phí 38 Mb/s thông lượng và 15 triệu file mặc định.'}
          </p>
        </div>

        {/* Tier Selector & Billing Cycle Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200/80 mb-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-100">
            
            {/* Hardware Tier Toggle */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                {isLaos ? 'Hardware Tier:' : 'Phân lớp:'}
              </span>
              <div className="flex rounded-lg bg-slate-100 p-1 w-full md:w-auto">
                <VIDCNativeButton
                  type="button"
                  onClick={() => setHardwareTier('ssd')}
                  className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    hardwareTier === 'ssd'
                      ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>{isLaos ? 'SSD (High Performance)' : 'Lưu trữ SSD (Hiệu năng cao)'}</span>
                </VIDCNativeButton>
                <VIDCNativeButton
                  type="button"
                  onClick={() => setHardwareTier('hdd')}
                  className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    hardwareTier === 'hdd'
                      ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <HardDrive className="w-4 h-4 text-sky-500" />
                  <span>{isLaos ? 'HDD (Standard / Capacity)' : 'Lưu trữ HDD (Dung lượng lớn)'}</span>
                </VIDCNativeButton>
              </div>
            </div>

            {/* Billing Cycle Pill Buttons */}
            <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center w-full md:w-auto">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline">
                {isLaos ? 'Billing:' : 'Chu kỳ:'}
              </span>
              {([1, 6, 12, 24, 36] as BillingCycle[]).map((cycle) => {
                const isSelected = billingCycle === cycle;
                const info = discountRates[cycle];
                return (
                  <VIDCNativeButton
                    key={cycle}
                    type="button"
                    onClick={() => setBillingCycle(cycle)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cycle === 1 ? '1 Tháng' : `${cycle}T (-${info.rate * 100}%)`}
                  </VIDCNativeButton>
                );
              })}
            </div>

          </div>

          {/* Quick Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 text-xs text-slate-600">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              Khởi tạo tối thiểu từ 50 GB (Bước nhảy 50 GB)
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              Miễn phí mặc định 38 Mb/s thông lượng (tối đa 304 Mbps)
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              {hardwareTier === 'ssd' ? 'Miễn phí 15.000.000 file mặc định' : 'Hỗ trợ lưu trữ hàng triệu file không giới hạn'}
            </span>
          </div>
        </div>

        {/* 2 Main Official Pricing Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* BẢNG 1: BẢNG GIÁ LƯU TRỮ SSD (High Performance) */}
          <div className={`rounded-2xl bg-white border shadow-sm overflow-hidden flex flex-col transition-all ${
            hardwareTier === 'ssd' ? 'ring-2 ring-[var(--vidc-color-brand-red)] border-transparent' : 'border-slate-200'
          }`}>
            <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50/50 border-b border-red-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[var(--vidc-color-brand-red)] text-white shadow-md">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--vidc-legacy-hex-222225)]">
                    Lưu Trữ SSD (High Performance)
                  </h3>
                  <p className="text-xs text-slate-600">
                    Phù hợp cơ sở dữ liệu, phân tích realtime, máy chủ web tải cao
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-red-100 text-[var(--vidc-color-brand-red)] text-xs font-bold">
                100% SSD Enterprise
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-600">
                      <th className="py-2.5 px-3 font-semibold">STT</th>
                      <th className="py-2.5 px-3 font-semibold">Loại tài nguyên</th>
                      <th className="py-2.5 px-3 font-semibold">Cấu hình / tháng</th>
                      <th className="py-2.5 px-3 font-semibold">ĐVT</th>
                      <th className="py-2.5 px-3 font-semibold text-right">Đơn giá (VNĐ/tháng)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-2.5 px-3 font-medium text-slate-400" rowSpan={4}>1</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-900" rowSpan={4}>
                        Dung lượng lưu trữ (SSD)
                      </td>
                      <td className="py-2.5 px-3">50 – 1.000</td>
                      <td className="py-2.5 px-3">1 GB</td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900">3.000</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-2.5 px-3">1.050 – 5.000</td>
                      <td className="py-2.5 px-3">1 GB</td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900">2.800</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-2.5 px-3">5.050 – 10.000</td>
                      <td className="py-2.5 px-3">1 GB</td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900">2.500</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-2.5 px-3 font-semibold text-red-600">&gt; 10.050</td>
                      <td className="py-2.5 px-3">1 GB</td>
                      <td className="py-2.5 px-3 text-right font-bold text-red-600">2.000</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 bg-slate-50/40">
                      <td className="py-2.5 px-3 font-medium text-slate-400">2</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-900">Thông lượng bổ sung (Throughput)</td>
                      <td className="py-2.5 px-3">39 – 500</td>
                      <td className="py-2.5 px-3">1 Mb/s</td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900">68.800</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-2.5 px-3 font-medium text-slate-400">3</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-900">Số lượng file bổ sung</td>
                      <td className="py-2.5 px-3">16.000.000 – 150.000.000</td>
                      <td className="py-2.5 px-3">1 file</td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900">500.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Rules & Notes for SSD */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <p className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-blue-500" />
                  Quy chuẩn & Lưu ý gói SSD:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] text-slate-600 leading-relaxed">
                  <li><strong>Dung lượng lưu trữ:</strong> Khởi tạo tối thiểu từ 50 GB, tính cước theo Block 50 GB (Hỗ trợ mở rộng lên tới 100.000 GB trên portal).</li>
                  <li><strong>Thông lượng mặc định:</strong> Miễn phí 38 Mb/s (Tối đa 304 Mbps). Chỉ tính phí khi đăng ký thêm từ 39 – 500 Mb/s.</li>
                  <li><strong>Số lượng file mặc định:</strong> Miễn phí 15.000.000 file.</li>
                </ul>
              </div>

              <VIDCNativeButton
                type="button"
                onClick={() => { setHardwareTier('ssd'); }}
                className="w-full py-2.5 px-4 rounded-lg bg-red-50 hover:bg-red-100 text-[var(--vidc-color-brand-red)] font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{hardwareTier === 'ssd' ? 'Đang chọn phân lớp SSD' : 'Chọn phân lớp SSD để tính giá'}</span>
                <ArrowRight className="w-4 h-4" />
              </VIDCNativeButton>
            </div>
          </div>

          {/* BẢNG 2: BẢNG GIÁ LƯU TRỮ HDD (Standard / Capacity) */}
          <div className={`rounded-2xl bg-white border shadow-sm overflow-hidden flex flex-col transition-all ${
            hardwareTier === 'hdd' ? 'ring-2 ring-[var(--vidc-color-brand-red)] border-transparent' : 'border-slate-200'
          }`}>
            <div className="p-6 bg-gradient-to-r from-sky-50 to-blue-50/50 border-b border-sky-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-600 text-white shadow-md">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--vidc-legacy-hex-222225)]">
                    Lưu Trữ HDD (Standard / Capacity)
                  </h3>
                  <p className="text-xs text-slate-600">
                    Phù hợp kho tệp tài liệu, sao lưu, camera giám sát, lưu trữ lâu dài
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
                Tối Ưu Chi Phí
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-600">
                      <th className="py-2.5 px-3 font-semibold">STT</th>
                      <th className="py-2.5 px-3 font-semibold">Loại tài nguyên</th>
                      <th className="py-2.5 px-3 font-semibold">Cấu hình / tháng</th>
                      <th className="py-2.5 px-3 font-semibold">ĐVT</th>
                      <th className="py-2.5 px-3 font-semibold text-right">Đơn giá (VNĐ/tháng)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-2.5 px-3 font-medium text-slate-400" rowSpan={4}>1</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-900" rowSpan={4}>
                        Dung lượng lưu trữ (HDD)
                      </td>
                      <td className="py-2.5 px-3">50 – 1.000</td>
                      <td className="py-2.5 px-3">1 GB</td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900">1.600</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-2.5 px-3">1.050 – 5.000</td>
                      <td className="py-2.5 px-3">1 GB</td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900">1.450</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-2.5 px-3">5.050 – 10.000</td>
                      <td className="py-2.5 px-3">1 GB</td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900">1.350</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80">
                      <td className="py-2.5 px-3 font-semibold text-sky-700">&gt; 10.050</td>
                      <td className="py-2.5 px-3">1 GB</td>
                      <td className="py-2.5 px-3 text-right font-bold text-sky-700">1.150</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 bg-slate-50/40">
                      <td className="py-2.5 px-3 font-medium text-slate-400">2</td>
                      <td className="py-2.5 px-3 font-semibold text-slate-900">Thông lượng bổ sung (Throughput)</td>
                      <td className="py-2.5 px-3">39 – 500</td>
                      <td className="py-2.5 px-3">1 MB/s</td>
                      <td className="py-2.5 px-3 text-right font-bold text-slate-900">68.800</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Rules & Notes for HDD */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <p className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-blue-500" />
                  Quy chuẩn & Lưu ý gói HDD:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] text-slate-600 leading-relaxed">
                  <li><strong>Dung lượng lưu trữ:</strong> Khởi tạo tối thiểu từ 50 GB, tính cước theo Block 50 GB (Hỗ trợ mở rộng không giới hạn dung lượng lên tới hàng triệu GB).</li>
                  <li><strong>Thông lượng mặc định:</strong> Miễn phí 38 MB/s (Tối đa 304 Mbps). Chỉ tính phí khi đăng ký thêm từ 39 – 500 MB/s.</li>
                </ul>
              </div>

              <VIDCNativeButton
                type="button"
                onClick={() => { setHardwareTier('hdd'); }}
                className="w-full py-2.5 px-4 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{hardwareTier === 'hdd' ? 'Đang chọn phân lớp HDD' : 'Chọn phân lớp HDD để tính giá'}</span>
                <ArrowRight className="w-4 h-4" />
              </VIDCNativeButton>
            </div>
          </div>

        </div>

        {/* SECTION 2B: INTERACTIVE COST ESTIMATOR / CONFIGURATOR */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200/90 overflow-hidden mb-10">
          <div className="p-6 md:p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold tracking-wider text-red-400">
                <Sliders className="w-3.5 h-3.5" />
                <span>CÔNG CỤ DỰ TOÁN CHI PHÍ TRỰC QUAN</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Tùy Biến Cấu Hình Viettel Cloud File Storage Theo Nhu Cầu
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Kéo chỉnh thông số dung lượng, thông lượng và chu kỳ để nhận ngay ước tính cước phí minh bạch.
              </p>
            </div>

            <div className="shrink-0">
              <span className="px-3.5 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Tiết kiệm đến 20% khi cam kết dài hạn
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Dung lượng lưu trữ (GB) */}
              <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between">
                  <label htmlFor={storageInputId} className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
                    <HardDrive className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
                    Dung lượng lưu trữ ({hardwareTier.toUpperCase()})
                  </label>
                  <div className="flex items-center gap-1.5">
                    <VIDCNativeInput
                      id={storageInputId}
                      type="number"
                      min="50"
                      max="100000"
                      step="50"
                      value={storageGB}
                      onChange={(e) => setStorageGB(Math.max(50, Math.min(100000, Number(e.target.value) || 50)))}
                      className="w-24 px-2 py-1 text-right text-sm font-bold bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                    <span className="text-xs font-semibold text-slate-600">GB</span>
                    <span className="text-[11px] font-mono text-slate-400">({(storageGB / 1024).toFixed(2)} TB)</span>
                  </div>
                </div>

                <VIDCNativeInput 
                  type="range"
                  min="50"
                  max="20000"
                  step="50"
                  value={storageGB}
                  onChange={(e) => setStorageGB(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[var(--vidc-color-brand-red)]"
                />

                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>50 GB</span>
                  <span>1.000 GB</span>
                  <span>5.000 GB</span>
                  <span>10.000 GB</span>
                  <span>20.000+ GB</span>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs text-slate-600 border-t border-slate-200/60">
                  <span>Đơn giá áp dụng:</span>
                  <span className="font-bold text-[var(--vidc-color-brand-red)]">
                    {formatVND(storageUnitPrice)} đ/GB/tháng
                  </span>
                </div>
              </div>

              {/* Slider 2: Thông lượng bổ sung (Mb/s) */}
              <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between">
                  <label htmlFor={throughputInputId} className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
                    <Zap className="w-4 h-4 text-amber-500" />
                    Thông lượng bổ sung (Throughput)
                  </label>
                  <div className="flex items-center gap-1.5">
                    <VIDCNativeInput
                      id={throughputInputId}
                      type="number"
                      min="0"
                      max="500"
                      value={additionalThroughputMbps}
                      onChange={(e) => setAdditionalThroughputMbps(Math.max(0, Math.min(500, Number(e.target.value) || 0)))}
                      className="w-20 px-2 py-1 text-right text-sm font-bold bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
                    />
                    <span className="text-xs font-semibold text-slate-600">Mb/s</span>
                  </div>
                </div>

                <VIDCNativeInput 
                  type="range"
                  min="0"
                  max="500"
                  step="1"
                  value={additionalThroughputMbps}
                  onChange={(e) => setAdditionalThroughputMbps(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[var(--vidc-color-brand-red)]"
                />

                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>0 (Miễn phí 38 Mb/s)</span>
                  <span>100 Mb/s</span>
                  <span>250 Mb/s</span>
                  <span>500 Mb/s</span>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs text-slate-600 border-t border-slate-200/60">
                  <span>Tổng thông lượng đạt:</span>
                  <span className="font-bold text-slate-800">
                    {38 + additionalThroughputMbps} Mb/s (~{((38 + additionalThroughputMbps) * 8).toFixed(0)} Mbps)
                  </span>
                </div>
              </div>

              {/* Slider 3: Số lượng file bổ sung (Chỉ áp dụng khi chọn SSD) */}
              {hardwareTier === 'ssd' && (
                <div className="space-y-2 p-4 rounded-xl bg-slate-50 border border-slate-200/80 animate-in fade-in">
                  <div className="flex items-center justify-between">
                    <label htmlFor={filesInputId} className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2 cursor-pointer">
                      <FileText className="w-4 h-4 text-blue-500" />
                      Số lượng file bổ sung (SSD)
                    </label>
                    <div className="flex items-center gap-1.5">
                      <VIDCNativeInput
                        id={filesInputId}
                        type="number"
                        min="0"
                        max="135"
                        value={additionalFiles}
                        onChange={(e) => setAdditionalFiles(Math.max(0, Math.min(135, Number(e.target.value) || 0)))}
                        className="w-16 px-2 py-1 text-right text-sm font-bold bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                      <span className="text-xs font-semibold text-slate-600">triệu file</span>
                    </div>
                  </div>

                  <VIDCNativeInput 
                    type="range"
                    min="0"
                    max="135"
                    step="1"
                    value={additionalFiles}
                    onChange={(e) => setAdditionalFiles(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[var(--vidc-color-brand-red)]"
                  />

                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>0 (Mặc định 15M file)</span>
                    <span>50M file</span>
                    <span>100M file</span>
                    <span>135M file (Tối đa 150M)</span>
                  </div>
                </div>
              )}

            </div>

            {/* Right Summary Bill Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                    TÓM TẮT DỰ TOÁN CẤU HÌNH
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                    {hardwareTier.toUpperCase()} TIER
                  </span>
                </div>

                <div className="divide-y divide-slate-800/80 text-xs sm:text-sm py-2 space-y-2">
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-slate-300">Dung lượng ({storageGB} GB):</span>
                    <span className="font-mono font-bold text-white">{formatVND(storageCost)} đ</span>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-slate-300">
                      Thông lượng (+{additionalThroughputMbps} Mb/s):
                    </span>
                    <span className="font-mono font-bold text-white">{formatVND(throughputCost)} đ</span>
                  </div>

                  {hardwareTier === 'ssd' && additionalFilesCost > 0 && (
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-slate-300">File bổ sung (+{additionalFiles}M file):</span>
                      <span className="font-mono font-bold text-white">{formatVND(additionalFilesCost)} đ</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-slate-300">Chu kỳ thanh toán:</span>
                    <span className="font-semibold text-amber-400">{billingCycle} tháng</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between items-center pt-2 text-emerald-400">
                      <span>Ưu đãi chu kỳ ({discountRates[billingCycle].rate * 100}%):</span>
                      <span className="font-mono font-bold">-{formatVND(discountAmount)} đ/tháng</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Total Monthly Amount Box */}
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-300 font-medium">Chi phí ước tính / tháng:</span>
                  <div className="text-right">
                    <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight">
                      {formatVND(finalMonthlyCost)}
                      <span className="text-xs font-normal text-slate-400 ml-1">VNĐ/tháng</span>
                    </div>
                  </div>
                </div>

                {billingCycle > 1 && (
                  <div className="flex justify-between text-xs text-slate-400 border-t border-slate-700/60 pt-2 font-mono">
                    <span>Tổng kỳ ({billingCycle} tháng):</span>
                    <span className="text-slate-200 font-bold">{formatVND(totalPeriodCost)} VNĐ</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <VIDCNativeButton
                  type="button"
                  onClick={handleApplyConfig}
                  className="w-full py-3.5 px-4 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-sm transition-all shadow-lg shadow-red-500/25 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  <span>Đăng Ký Nhận Báo Giá Cấu Hình Này</span>
                  <ArrowRight className="w-4 h-4" />
                </VIDCNativeButton>
                <p className="text-[11px] text-center text-slate-400">
                  Báo giá chính thức sẽ được chuyên gia Viettel IDC liên hệ tư vấn trong vòng 15 phút.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Custom Configurator CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-red-600 via-red-700 to-[var(--vidc-legacy-hex-18181a)] p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Server className="w-3.5 h-3.5 text-amber-300" />
              <span>DÀNH RIÊNG CHO DOANH NGHIỆP LỚN</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug">
              Doanh nghiệp có nhu cầu thuê không gian lưu trữ quy mô lớn từ 100 TB đến hơn 1.000 TB hoặc cần thông lượng chuyên dụng?
            </h3>
            <p className="text-xs sm:text-sm text-red-100">
              Đội ngũ kiến trúc sư giải pháp của Viettel IDC sẵn sàng thiết kế hạ tầng lưu trữ phân cấp riêng biệt với SLA và chính sách giá ưu đãi nhất.
            </p>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={() => onOpenConsult?.('[Tư vấn quy mô lớn >100TB - 1.000TB Cloud File Storage]')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[var(--vidc-color-brand-red)] font-extrabold text-sm sm:text-base transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>Yêu Cầu Thiết Kế Cấu Hình Riêng &amp; Nhận Báo Giá →</span>
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
