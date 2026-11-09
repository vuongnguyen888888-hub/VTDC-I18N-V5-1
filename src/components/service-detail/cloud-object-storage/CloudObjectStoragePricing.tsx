import React, { useState } from 'react';
import { 
  Database, 
  Flame, 
  Sun, 
  Snowflake, 
  Check, 
  Calculator, 
  ArrowRight, 
  Info, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  HardDrive 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';


export interface StorageTierPlan {
  id: 'gold' | 'silver' | 'archive';
  name: string;
  badge: string;
  badgeColor: string;
  desc: string;
  purpose: string;
  startingPrice: string;
  unit: string;
  features: string[];
}

interface CloudObjectStoragePricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (details?: { tier: string; capacityGB: number; multiAz: boolean }) => void;
}

export const CloudObjectStoragePricing: React.FC<CloudObjectStoragePricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const [activeTier, setActiveTier] = useState<'gold' | 'silver' | 'archive'>('gold');
  const [calcCapacityGB, setCalcCapacityGB] = useState<number>(500);
  const [calcMultiAz, setCalcMultiAz] = useState<boolean>(false);
  const [billingCycle, setBillingCycle] = useState<number>(1); // months

  const isLaos = currentMarket?.code === 'la';

  // Format currency
  const formatVND = (num: number) => {
    return new Intl.NumberFormat('vi-VN').format(Math.round(num));
  };

  // Helper for tiered pricing calculation
  const getStorageRatePerGB = (tier: 'gold' | 'silver' | 'archive', capacityGB: number): number => {
    if (tier === 'gold') {
      if (capacityGB <= 1000) return 1000;
      if (capacityGB <= 5000) return 850;
      if (capacityGB <= 10000) return 750;
      return 650;
    } else if (tier === 'silver') {
      if (capacityGB <= 1000) return 600;
      if (capacityGB <= 5000) return 500;
      if (capacityGB <= 10000) return 450;
      return 350;
    } else {
      // archive
      if (capacityGB <= 5000) return 350;
      if (capacityGB <= 10000) return 300;
      return 250;
    }
  };

  const getMultiAzRatePerGB = (capacityGB: number): number => {
    if (capacityGB <= 1000) return 480;
    if (capacityGB <= 5000) return 400;
    if (capacityGB <= 10000) return 360;
    return 280;
  };

  // Calculate monthly total
  const ratePerGB = getStorageRatePerGB(activeTier, calcCapacityGB);
  const multiAzRate = (activeTier === 'silver' && calcMultiAz) ? getMultiAzRatePerGB(calcCapacityGB) : 0;
  const totalRatePerGB = ratePerGB + multiAzRate;
  const monthlyTotal = calcCapacityGB * totalRatePerGB;
  
  // Cycle discount (6m = 5%, 12m = 10%, 24m = 15%)
  const discountRate = billingCycle === 6 ? 0.05 : billingCycle === 12 ? 0.10 : billingCycle === 24 ? 0.15 : 0;
  const discountedTotal = monthlyTotal * billingCycle * (1 - discountRate);

  // Free quota metrics
  const freeBandwidthGB = activeTier === 'gold' 
    ? calcCapacityGB * 10 
    : activeTier === 'silver' 
    ? calcCapacityGB * 5 
    : calcCapacityGB * 2;

  const freeRequestsPerMonth = activeTier === 'gold' 
    ? '103.680.000 (~40 req/s)' 
    : activeTier === 'silver' 
    ? '51.840.000 (~20 req/s)' 
    : '25.920.000 (~10 req/s)';

  const t = {
    eyebrow: isLaos ? 'PRICING & ESTIMATOR' : 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
    headline: isLaos ? 'Detailed Pricing & Storage Tiers' : 'Bảng Giá Chi Tiết & Các Phân Lớp Lưu Trữ',
    policy: isLaos
      ? 'Pay-as-you-scale model: Unit cost per GB decreases as your stored capacity expands. (Prices do not include VAT).'
      : 'Áp dụng mô hình chi trả linh hoạt theo nhu cầu sử dụng thực tế (Pay-as-you-scale). Giá thuê theo GB giảm dần theo từng bậc dung lượng mở rộng. (Lưu ý: Bảng giá dưới đây chưa bao gồm thuế VAT).',
    goldTab: isLaos ? 'GOLD Tier' : 'Phân Lớp GOLD',
    silverTab: isLaos ? 'SILVER Tier' : 'Phân Lớp SILVER',
    archiveTab: isLaos ? 'ARCHIVE Tier' : 'Phân Lớp ARCHIVE',
    calcTitle: isLaos ? 'Real-Time Storage Cost Estimator' : 'Công Cụ Ước Tính Chi Phí Lưu Trữ Trực Quan',
    calcSubtitle: isLaos
      ? 'Drag slider or choose storage capacity to estimate monthly investment with volume discount.'
      : 'Kéo thanh trượt hoặc nhập dung lượng để dự toán chi phí hàng tháng kèm ưu đãi theo bậc quy mô.',
    customBannerText: isLaos
      ? 'Need large-scale capacity from 1,000 TB (1 PB) or high-bandwidth CDN integration?'
      : 'Doanh nghiệp cần thuê quy mô dung lượng lớn từ 1.000 TB (1 PB) trở lên hoặc tích hợp CDN băng thông cao?',
    customBannerCta: isLaos
      ? 'Get Enterprise Solution Quote →'
      : 'Nhận Dự Toán Chi Phí & Tư Vấn Giải Pháp Doanh Nghiệp →',
  };

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {t.policy}
          </p>
        </div>

        {/* 2-Column: Left = Detailed Tier Specs & Pricing Table | Right = Interactive Cost Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Cột trái: Bảng giá chi tiết & Quy chuẩn phân lớp đã chọn */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Phân Lớp GOLD Content */}
            {activeTier === 'gold' && (
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 space-y-6 h-full flex flex-col justify-between">
                <div>
                  {/* Tier Selection Tabs (Pills) inside left card */}
                  <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-full border border-slate-200/80 mb-6 max-w-fit">
                    <VIDCNativeButton
                      type="button"
                      onClick={() => {
                        setActiveTier('gold');
                        if (calcCapacityGB < 50) setCalcCapacityGB(50);
                      }}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                        activeTier === 'gold'
                          ? 'bg-[var(--vidc-color-brand-red)] text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                      }`}
                    >
                      <Flame className={`w-3.5 h-3.5 ${activeTier === 'gold' ? 'text-amber-300' : 'text-amber-500'}`} />
                      <span>{t.goldTab}</span>
                    </VIDCNativeButton>

                    <VIDCNativeButton
                      type="button"
                      onClick={() => {
                        setActiveTier('silver');
                        if (calcCapacityGB < 50) setCalcCapacityGB(50);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer text-slate-600 hover:text-slate-900 hover:bg-white/80"
                    >
                      <Sun className="w-3.5 h-3.5 text-slate-500" />
                      <span>{t.silverTab}</span>
                    </VIDCNativeButton>

                    <VIDCNativeButton
                      type="button"
                      onClick={() => {
                        setActiveTier('archive');
                        if (calcCapacityGB < 1050) setCalcCapacityGB(1050);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer text-slate-600 hover:text-slate-900 hover:bg-white/80"
                    >
                      <Snowflake className="w-3.5 h-3.5 text-blue-500" />
                      <span>{t.archiveTab}</span>
                    </VIDCNativeButton>
                  </div>

                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                        1. Phân Lớp GOLD
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 block">{isLaos ? 'Starting from' : 'Đơn giá từ'}</span>
                      <span className="text-2xl font-extrabold text-[var(--vidc-color-brand-red)]">650 – 1.000</span>
                      <span className="text-xs text-slate-600 block">VNĐ / GB / tháng</span>
                    </div>
                  </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">{isLaos ? 'Purpose:' : 'Mục đích:'}</strong>{' '}
                  {isLaos
                    ? 'Storing data with frequent access frequency requiring high-speed retrieval such as video, images, audio, media streaming, IoT devices, Big Data...'
                    : 'Lưu trữ dữ liệu có tần suất truy cập thường xuyên và cần truy xuất tốc độ cao như video, hình ảnh, audio, streaming, dữ liệu thiết bị IoT, Big Data...'}
                </div>

                {/* Table Breakdown */}
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                        <th className="py-2.5 px-3 rounded-tl-lg">STT</th>
                        <th className="py-2.5 px-3">Loại tài nguyên</th>
                        <th className="py-2.5 px-3">Cấu hình / tháng</th>
                        <th className="py-2.5 px-3">Đơn vị</th>
                        <th className="py-2.5 px-3 text-right rounded-tr-lg">Đơn giá (VNĐ/tháng)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr>
                        <td className="py-2 px-3 font-semibold text-slate-900" rowSpan={4}>1</td>
                        <td className="py-2 px-3 font-semibold text-slate-900" rowSpan={4}>Dung lượng lưu trữ</td>
                        <td className="py-2 px-3">50 – 1.000 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">1.000</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">1.050 – 5.000 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">850</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">5.050 – 10.000 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">750</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">&gt;= 10.050 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-[var(--vidc-color-brand-red)]">650</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="py-2 px-3 font-semibold text-slate-900">2</td>
                        <td className="py-2 px-3 font-semibold text-slate-900">Lưu lượng truyền tải vào (Inbound)</td>
                        <td className="py-2 px-3">501 – 100.000.000</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">100</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-slate-900">3</td>
                        <td className="py-2 px-3 font-semibold text-slate-900">Lưu lượng truyền tải ra (Outbound)</td>
                        <td className="py-2 px-3">501 – 100.000.000</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">100</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="py-2 px-3 font-semibold text-slate-900">4</td>
                        <td className="py-2 px-3 font-semibold text-slate-900">Số lượng truy vấn (Requests)</td>
                        <td className="py-2 px-3">106.272.000 – 1.000.000.000</td>
                        <td className="py-2 px-3">1.000 Truy vấn</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

                {/* Quy chuẩn tính cước */}
                <div className="p-4 rounded-xl bg-red-50/60 border border-red-100 space-y-2">
                  <h4 className="text-xs font-extrabold text-[var(--vidc-color-brand-red)] uppercase tracking-wider flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" />
                    <span>{isLaos ? 'Billing Standards for GOLD Tier:' : 'Quy chuẩn tính cước Gói GOLD:'}</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Dung lượng lưu trữ:</strong> Cấp phát theo block 50 GB.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Lưu lượng truyền tải:</strong> Miễn phí x10 Dung lượng lưu trữ/tháng (Băng thông tối đa 1 MB/phút). Tính cước theo block 1 GB khi vượt hạn mức.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Truy vấn:</strong> Miễn phí 103.680.000 Truy vấn/tháng (Tối đa 40 Truy vấn/giây). Tính cước theo block 2.592.000 Truy vấn khi vượt hạn mức.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Phân Lớp SILVER Content */}
            {activeTier === 'silver' && (
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 space-y-6 h-full flex flex-col justify-between">
                <div>
                  {/* Tier Selection Tabs (Pills) inside left card */}
                  <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-full border border-slate-200/80 mb-6 max-w-fit">
                    <VIDCNativeButton
                      type="button"
                      onClick={() => {
                        setActiveTier('gold');
                        if (calcCapacityGB < 50) setCalcCapacityGB(50);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer text-slate-600 hover:text-slate-900 hover:bg-white/80"
                    >
                      <Flame className="w-3.5 h-3.5 text-amber-500" />
                      <span>{t.goldTab}</span>
                    </VIDCNativeButton>

                    <VIDCNativeButton
                      type="button"
                      onClick={() => {
                        setActiveTier('silver');
                        if (calcCapacityGB < 50) setCalcCapacityGB(50);
                      }}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                        activeTier === 'silver'
                          ? 'bg-[var(--vidc-color-brand-red)] text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                      }`}
                    >
                      <Sun className={`w-3.5 h-3.5 ${activeTier === 'silver' ? 'text-yellow-200' : 'text-slate-500'}`} />
                      <span>{t.silverTab}</span>
                    </VIDCNativeButton>

                    <VIDCNativeButton
                      type="button"
                      onClick={() => {
                        setActiveTier('archive');
                        if (calcCapacityGB < 1050) setCalcCapacityGB(1050);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer text-slate-600 hover:text-slate-900 hover:bg-white/80"
                    >
                      <Snowflake className="w-3.5 h-3.5 text-blue-500" />
                      <span>{t.archiveTab}</span>
                    </VIDCNativeButton>
                  </div>

                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                        2. Phân Lớp SILVER
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 block">{isLaos ? 'Starting from' : 'Đơn giá từ'}</span>
                      <span className="text-2xl font-extrabold text-[var(--vidc-color-brand-red)]">350 – 600</span>
                      <span className="text-xs text-slate-600 block">VNĐ / GB / tháng</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed mb-6">
                    <strong className="text-slate-900">{isLaos ? 'Purpose:' : 'Mục đích:'}</strong>{' '}
                    {isLaos
                      ? 'Storing data with infrequent access but requiring quick and easy retrieval when needed, such as backup archives, periodic media assets.'
                      : 'Lưu trữ dữ liệu ít truy cập thường xuyên nhưng cần khả năng truy xuất nhanh chóng, dễ dàng khi cần thiết như dữ liệu backup, media lưu trữ định kỳ.'}
                  </div>

                {/* Table Breakdown */}
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                        <th className="py-2.5 px-3 rounded-tl-lg">STT</th>
                        <th className="py-2.5 px-3">Loại tài nguyên</th>
                        <th className="py-2.5 px-3">Cấu hình / tháng</th>
                        <th className="py-2.5 px-3">Đơn vị</th>
                        <th className="py-2.5 px-3 text-right rounded-tr-lg">Đơn giá (VNĐ/tháng)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr>
                        <td className="py-2 px-3 font-semibold text-slate-900" rowSpan={4}>1</td>
                        <td className="py-2 px-3 font-semibold text-slate-900" rowSpan={4}>Dung lượng lưu trữ</td>
                        <td className="py-2 px-3">50 – 1.000 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">600</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">1.050 – 5.000 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">500</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">5.050 – 10.000 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">450</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">&gt;= 10.050 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-[var(--vidc-color-brand-red)]">350</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="py-2 px-3 font-semibold text-slate-900">2</td>
                        <td className="py-2 px-3 font-semibold text-slate-900">Lưu lượng truyền tải vào</td>
                        <td className="py-2 px-3">251 – 100.000.000</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">150</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-slate-900">3</td>
                        <td className="py-2 px-3 font-semibold text-slate-900">Lưu lượng truyền tải ra</td>
                        <td className="py-2 px-3">251 – 100.000.000</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">150</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="py-2 px-3 font-semibold text-slate-900">4</td>
                        <td className="py-2 px-3 font-semibold text-slate-900">Số lượng truy vấn</td>
                        <td className="py-2 px-3">54.432.000 – 1.000.000.000</td>
                        <td className="py-2 px-3">1.000 Truy vấn</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">100</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-slate-900" rowSpan={4}>5</td>
                        <td className="py-2 px-3 font-semibold text-slate-900" rowSpan={4}>Tùy chọn Multi AZ</td>
                        <td className="py-2 px-3">50 – 1.000 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">480</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">1.050 – 5.000 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">400</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">5.050 – 10.000 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">360</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">&gt;= 10.050 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-[var(--vidc-color-brand-red)]">280</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

                {/* Quy chuẩn tính cước */}
                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 space-y-2">
                  <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" />
                    <span>{isLaos ? 'Billing Standards for SILVER Tier:' : 'Quy chuẩn tính cước Gói SILVER:'}</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Dung lượng lưu trữ:</strong> Cấp phát theo block 50 GB.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Lưu lượng truyền tải:</strong> Miễn phí x5 Dung lượng lưu trữ/tháng (Băng thông tối đa 1 MB/giây). Tính cước theo block 1 GB khi vượt hạn mức.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Truy vấn:</strong> Miễn phí 51.840.000 Truy vấn/tháng (Tối đa 20 request/giây). Tính cước theo block 2.592.000 Truy vấn khi vượt hạn mức.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Tùy chọn Multi AZ:</strong> Tính cước theo từng bậc dung lượng thực tế sử dụng.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Phân Lớp ARCHIVE Content */}
            {activeTier === 'archive' && (
              <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 space-y-6 h-full flex flex-col justify-between">
                <div>
                  {/* Tier Selection Tabs (Pills) inside left card */}
                  <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-full border border-slate-200/80 mb-6 max-w-fit">
                    <VIDCNativeButton
                      type="button"
                      onClick={() => {
                        setActiveTier('gold');
                        if (calcCapacityGB < 50) setCalcCapacityGB(50);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer text-slate-600 hover:text-slate-900 hover:bg-white/80"
                    >
                      <Flame className="w-3.5 h-3.5 text-amber-500" />
                      <span>{t.goldTab}</span>
                    </VIDCNativeButton>

                    <VIDCNativeButton
                      type="button"
                      onClick={() => {
                        setActiveTier('silver');
                        if (calcCapacityGB < 50) setCalcCapacityGB(50);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer text-slate-600 hover:text-slate-900 hover:bg-white/80"
                    >
                      <Sun className="w-3.5 h-3.5 text-slate-500" />
                      <span>{t.silverTab}</span>
                    </VIDCNativeButton>

                    <VIDCNativeButton
                      type="button"
                      onClick={() => {
                        setActiveTier('archive');
                        if (calcCapacityGB < 1050) setCalcCapacityGB(1050);
                      }}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                        activeTier === 'archive'
                          ? 'bg-[var(--vidc-color-brand-red)] text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                      }`}
                    >
                      <Snowflake className={`w-3.5 h-3.5 ${activeTier === 'archive' ? 'text-cyan-200' : 'text-blue-500'}`} />
                      <span>{t.archiveTab}</span>
                    </VIDCNativeButton>
                  </div>

                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                        3. Phân Lớp ARCHIVE
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 block">{isLaos ? 'Starting from' : 'Đơn giá từ'}</span>
                      <span className="text-2xl font-extrabold text-[var(--vidc-color-brand-red)]">250 – 350</span>
                      <span className="text-xs text-slate-600 block">VNĐ / GB / tháng</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed mb-6">
                    <strong className="text-slate-900">{isLaos ? 'Purpose:' : 'Mục đích:'}</strong>{' '}
                    {isLaos
                      ? 'Storing infrequently used data, historical backup archives, electronic medical records, historical bank transaction logs...'
                      : 'Lưu trữ các loại dữ liệu ít sử dụng, dữ liệu lịch sử sao lưu (backup archive), hồ sơ bệnh án điện tử, dữ liệu lịch sử giao dịch ngân hàng...'}
                  </div>

                {/* Table Breakdown */}
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                        <th className="py-2.5 px-3 rounded-tl-lg">STT</th>
                        <th className="py-2.5 px-3">Loại tài nguyên</th>
                        <th className="py-2.5 px-3">Cấu hình / tháng</th>
                        <th className="py-2.5 px-3">Đơn vị</th>
                        <th className="py-2.5 px-3 text-right rounded-tr-lg">Đơn giá (VNĐ/tháng)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      <tr>
                        <td className="py-2 px-3 font-semibold text-slate-900" rowSpan={3}>1</td>
                        <td className="py-2 px-3 font-semibold text-slate-900" rowSpan={3}>Dung lượng lưu trữ</td>
                        <td className="py-2 px-3">1.050 – 5.000 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">350</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">5.050 – 10.000 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">300</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">&gt; 10.000 GB</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-[var(--vidc-color-brand-red)]">250</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="py-2 px-3 font-semibold text-slate-900">2</td>
                        <td className="py-2 px-3 font-semibold text-slate-900">Lưu lượng truyền tải vào</td>
                        <td className="py-2 px-3">2.101 – 1.000.000</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">200</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-slate-900">3</td>
                        <td className="py-2 px-3 font-semibold text-slate-900">Lưu lượng truyền tải ra</td>
                        <td className="py-2 px-3">2.101 – 1.000.000</td>
                        <td className="py-2 px-3">1 GB</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">200</td>
                      </tr>
                      <tr className="bg-slate-50/50">
                        <td className="py-2 px-3 font-semibold text-slate-900">4</td>
                        <td className="py-2 px-3 font-semibold text-slate-900">Số lượng truy vấn</td>
                        <td className="py-2 px-3">28.512.000 – 1.000.000.000</td>
                        <td className="py-2 px-3">1.000 Truy vấn</td>
                        <td className="py-2 px-3 text-right font-extrabold text-slate-900">150</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

                {/* Quy chuẩn tính cước */}
                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 space-y-2">
                  <h4 className="text-xs font-extrabold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-blue-700" />
                    <span>{isLaos ? 'Billing Standards for ARCHIVE Tier:' : 'Quy chuẩn tính cước Gói ARCHIVE:'}</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Dung lượng lưu trữ:</strong> Khởi tạo tối thiểu từ 1.050 GB (Tính cước theo block 50 GB).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Lưu lượng truyền tải:</strong> Miễn phí x2 Dung lượng lưu trữ/tháng (Băng thông tối đa 1 MB/giây). Tính cước theo block 1 GB khi vượt hạn mức.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Truy vấn:</strong> Miễn phí 25.920.000 Truy vấn/tháng (Tối đa 10 request/giây). Tính cước theo block 2.592.000 Truy vấn khi vượt hạn mức.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

          </div>

          {/* Cột phải: Bộ tính toán dự toán chi phí trực quan (Estimator) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 space-y-6 h-full flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                      {t.calcTitle}
                    </h3>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-slate-100 text-slate-700 uppercase">
                    {activeTier.toUpperCase()} Tier
                  </span>
                </div>

                {/* Slider Dung lượng lưu trữ */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800">{isLaos ? 'Storage Capacity:' : 'Dung lượng lưu trữ:'}</span>
                    <div className="flex items-center gap-1.5">
                      <VIDCNativeInput 
                        type="number"
                        min={activeTier === 'archive' ? 1050 : 50}
                        step={50}
                        value={calcCapacityGB}
                        onChange={(e) => {
                          const val = Math.max(activeTier === 'archive' ? 1050 : 50, Number(e.target.value) || 50);
                          setCalcCapacityGB(val);
                        }}
                        className="w-24 px-2 py-1 text-right font-extrabold text-sm rounded-lg border border-slate-300 text-[var(--vidc-color-brand-red)] focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                      />
                      <span className="font-bold text-slate-600">GB</span>
                      <span className="text-[11px] text-slate-400">({(calcCapacityGB / 1000).toFixed(1)} TB)</span>
                    </div>
                  </div>

                  <VIDCNativeInput 
                    type="range"
                    min={activeTier === 'archive' ? 1050 : 50}
                    max={20000}
                    step={50}
                    value={calcCapacityGB}
                    onChange={(e) => setCalcCapacityGB(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[var(--vidc-color-brand-red)]"
                  />

                  {/* Preset Buttons */}
                  <div className="flex items-center gap-1.5 pt-1 overflow-x-auto no-scrollbar">
                    {[
                      ...(activeTier !== 'archive' ? [{ label: '100 GB', val: 100 }, { label: '500 GB', val: 500 }, { label: '1 TB', val: 1000 }] : []),
                      { label: '2 TB', val: 2000 },
                      { label: '5 TB', val: 5000 },
                      { label: '10 TB', val: 10000 },
                      { label: '20 TB', val: 20000 },
                    ].map((preset, idx) => (
                      <VIDCNativeButton
                        key={idx}
                        type="button"
                        onClick={() => setCalcCapacityGB(preset.val)}
                        className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all shrink-0 cursor-pointer ${
                          calcCapacityGB === preset.val
                            ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {preset.label}
                      </VIDCNativeButton>
                    ))}
                  </div>
                </div>

                {/* Multi-AZ Toggle for Silver */}
                {activeTier === 'silver' && (
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <div>
                        <div className="text-xs font-bold text-slate-800">
                          {isLaos ? 'Multi-AZ Auto Sync Option' : 'Tùy chọn Đồng bộ Multi AZ'}
                        </div>
                        <div className="text-[11px] text-slate-500">+{getMultiAzRatePerGB(calcCapacityGB)} đ/GB/tháng</div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <VIDCNativeInput 
                        type="checkbox" 
                        checked={calcMultiAz}
                        onChange={(e) => setCalcMultiAz(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[var(--vidc-color-brand-red)]"></div>
                    </label>
                  </div>
                )}

                {/* Included Free Quotas for this size */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>{isLaos ? 'Free Quotas Included / Month:' : 'Hạn mức miễn phí đi kèm / tháng:'}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>{isLaos ? 'Free Data Transfer:' : 'Truyền tải miễn phí:'}</span>
                    <span className="font-bold text-slate-900">{formatVND(freeBandwidthGB)} GB</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>{isLaos ? 'Free API Requests:' : 'Truy vấn miễn phí:'}</span>
                    <span className="font-bold text-slate-900">{freeRequestsPerMonth}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>{isLaos ? 'Applied Unit Rate:' : 'Đơn giá áp dụng:'}</span>
                    <span className="font-bold text-[var(--vidc-color-brand-red)]">{formatVND(totalRatePerGB)} đ/GB</span>
                  </div>
                </div>

                {/* Billing Cycle Picker */}
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-700">{isLaos ? 'Billing Period:' : 'Chu kỳ thanh toán:'}</div>
                  <div className="grid grid-cols-4 gap-1.5 text-xs font-bold">
                    {[
                      { m: 1, label: '1 Tháng', discount: '' },
                      { m: 6, label: '6 Tháng', discount: '-5%' },
                      { m: 12, label: '12 Tháng', discount: '-10%' },
                      { m: 24, label: '24 Tháng', discount: '-15%' },
                    ].map((cycle) => (
                      <VIDCNativeButton
                        key={cycle.m}
                        type="button"
                        onClick={() => setBillingCycle(cycle.m)}
                        className={`py-2 px-1 rounded-full border text-center transition-all cursor-pointer ${
                          billingCycle === cycle.m
                            ? 'border-[var(--vidc-color-brand-red)] bg-red-50 text-[var(--vidc-color-brand-red)] font-extrabold shadow-xs'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div>{cycle.label}</div>
                        {cycle.discount && (
                          <div className="text-[10px] text-emerald-600 font-extrabold">{cycle.discount}</div>
                        )}
                      </VIDCNativeButton>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimated Total */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-500">{isLaos ? 'Estimated Monthly Cost:' : 'Dự toán theo tháng:'}</span>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-black text-[var(--vidc-color-brand-red)]">
                      {formatVND(monthlyTotal)}
                    </span>
                    <span className="text-xs font-bold text-slate-600 ml-1">VNĐ/tháng</span>
                  </div>
                </div>

                {billingCycle > 1 && (
                  <div className="flex items-center justify-between text-xs text-slate-600 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                    <span className="text-emerald-800 font-semibold">Tổng {billingCycle} tháng (đã giảm {discountRate * 100}%):</span>
                    <span className="font-extrabold text-emerald-900">{formatVND(discountedTotal)} VNĐ</span>
                  </div>
                )}

                <VIDCNativeButton
                  type="button"
                  onClick={() => onOpenConsult({
                    tier: activeTier,
                    capacityGB: calcCapacityGB,
                    multiAz: calcMultiAz
                  })}
                  className="w-full py-3.5 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002b)] text-white font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>{isLaos ? 'Get Official Quotation' : 'Đăng Ký Tư Vấn & Nhận Báo Giá'}</span>
                  <ArrowRight className="w-4 h-4" />
                </VIDCNativeButton>
              </div>

            </div>
          </div>

        </div>

        {/* Custom Configurator CTA Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[var(--vidc-legacy-hex-1f1f24)] to-[var(--vidc-legacy-hex-121214)] border border-slate-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-2xl">💡</span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {t.customBannerText}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              {isLaos
                ? 'Viettel IDC cloud architects provide tailored capacity design, dedicated S3 pipelines, SLA 99.999% and enterprise volume pricing.'
                : 'Đội ngũ chuyên gia Viettel IDC sẵn sàng tư vấn phương án kiến trúc phân tầng chuyên biệt, cam kết SLA 99.999% và đơn giá đặc quyền.'}
            </p>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={() => onOpenConsult({ tier: 'enterprise-petabyte', capacityGB: 1000000, multiAz: true })}
            className="px-6 py-3.5 rounded-xl bg-white text-[var(--vidc-color-brand-red)] hover:bg-slate-100 font-extrabold text-sm transition-all shadow-lg shrink-0 flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <span>{t.customBannerCta}</span>
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
