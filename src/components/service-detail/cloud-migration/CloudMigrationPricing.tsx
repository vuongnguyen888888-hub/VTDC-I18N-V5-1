import React, { useState, useId } from 'react';
import { 
  Check, 
  ArrowRight, 
  Sliders, 
  Info, 
  HardDrive, 
  Cpu, 
  Server, 
  Calendar,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';


interface CloudMigrationPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (notes?: string) => void;
}

export const CloudMigrationPricing: React.FC<CloudMigrationPricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  // State: Tab for Rate Card vs Interactive Estimator
  const [viewMode, setViewMode] = useState<'ratecard' | 'estimator'>('ratecard');

  // Interactive Estimator states
  const [vmCount, setVmCount] = useState<number>(4);
  const [serverCount, setServerCount] = useState<number>(1);
  const [storageGb, setStorageGb] = useState<number>(2500);
  const [migrationDays, setMigrationDays] = useState<number>(14);

  const vmId = useId();
  const serverId = useId();
  const storageId = useId();
  const daysId = useId();

  const getStorageUnitPrice = (gb: number): number => {
    if (gb <= 5000) return 62;
    if (gb <= 10000) return 58;
    return 49;
  };

  const storageUnitPrice = getStorageUnitPrice(storageGb);
  const dailyStorageCost = storageGb * storageUnitPrice;
  const dailyVmCost = vmCount * 19200;
  const dailyServerCost = serverCount * 27800;

  const totalDailyCost = dailyStorageCost + dailyVmCost + dailyServerCost;
  const totalCampaignCost = totalDailyCost * migrationDays;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('vi-VN').format(Math.round(val));
  };

  const t = {
    eyebrow: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos 
      ? 'Choose Optimal Migration Resources & Plan Your Budget'
      : 'Lựa chọn cấu hình và ước tính kinh phí chuyển đổi',
    desc: isLaos 
      ? 'Transparent, flexible daily billing model without hidden charges. Pay strictly for active migration resources and staging duration.'
      : 'Hạ tầng chuyển đổi đám mây tiêu chuẩn Enterprise với chi phí minh bạch & linh hoạt. Tính cước theo ngày thực tế sử dụng tài nguyên.',
    rateCardTab: isLaos ? 'Standard Daily Rate Card' : 'Bảng đơn giá tiêu chuẩn',
    estimatorTab: isLaos ? 'Interactive Cost Estimator' : 'Công cụ dự toán kinh phí',
    customTitle: isLaos ? 'Custom Large-Scale Migration — Tailored Architecture' : 'Dự án di chuyển quy mô lớn — Thiết kế riêng theo nhu cầu',
    customDesc: isLaos 
      ? 'Need to migrate hundreds of virtual machines, multiple physical data centers, or petabytes of database storage? Viettel IDC Senior Architects design tailored blueprints with dedicated 24/7 cutover support.'
      : 'Cần di chuyển hàng trăm máy chủ, toàn bộ trung tâm dữ liệu tại chỗ hoặc cơ sở dữ liệu hàng chục Terabyte? Đội ngũ chuyên gia cao cấp của Viettel IDC sẵn sàng khảo sát hiện trường và thiết kế kịch bản chuyển giao chuyên biệt.',
    customBtn: isLaos ? 'REQUEST CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatFootnote: isLaos 
      ? '* All prices exclude VAT. Charged based on actual daily consumption and migration time.' 
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT. Quý khách có thể điều chỉnh cấu hình bất cứ lúc nào theo quy mô thực tế.',
  };

  const pricingTable = [
    {
      id: 1,
      attribute: 'Storage 1 (1.050 GB – 5.000 GB)',
      unit: 'GB',
      price: '62',
      note: 'Ổ cứng HDD, tính theo Block 50 GB',
    },
    {
      id: 2,
      attribute: 'Storage 2 (5.050 GB – 10.000 GB)',
      unit: 'GB',
      price: '58',
      note: 'Ổ cứng HDD, tính theo Block 50 GB',
    },
    {
      id: 3,
      attribute: 'Storage 3 (> 10.000 GB)',
      unit: 'GB',
      price: '49',
      note: 'Ổ cứng HDD, tính theo Block 50 GB',
    },
    {
      id: 4,
      attribute: 'License Migration VM',
      unit: 'VM',
      price: '19.200',
      note: 'Tính theo Block 2 VM',
    },
    {
      id: 5,
      attribute: 'License Migration Server',
      unit: 'Server',
      price: '27.800',
      note: 'Tính theo Block 1 VM',
    },
    {
      id: 6,
      attribute: 'License Migration Data',
      unit: 'Day',
      price: isLaos ? 'Contact' : 'Liên hệ tư vấn',
      note: 'Tùy chỉnh theo dung lượng và kiến trúc dữ liệu',
    },
    {
      id: 7,
      attribute: 'Managed Service',
      unit: 'ManDay',
      price: isLaos ? 'Contact' : 'Liên hệ tư vấn',
      note: 'Tùy biến theo quy mô khảo sát & triển khai',
    },
  ];

  const handleEstimateQuote = () => {
    const summaryNotes = `Dự toán Viettel Cloud Migration:
- Số VM: ${vmCount} VM (${formatCurrency(dailyVmCost)} đ/ngày)
- Số Server vật lý: ${serverCount} Server (${formatCurrency(dailyServerCost)} đ/ngày)
- Dung lượng HDD: ${formatCurrency(storageGb)} GB (${formatCurrency(dailyStorageCost)} đ/ngày)
- Thời gian dự kiến: ${migrationDays} ngày
- Tổng kinh phí ước tính: ~${formatCurrency(totalCampaignCost)} VNĐ (chưa VAT)`;

    onOpenConsult(summaryNotes);
  };

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header matching Cloud Server */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* View Mode Switcher (Matching Cloud Server Tab Switcher) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-white border border-slate-200/90 shadow-xs">
            <VIDCNativeButton
              type="button"
              onClick={() => setViewMode('ratecard')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                viewMode === 'ratecard'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.rateCardTab}
            </VIDCNativeButton>
            <VIDCNativeButton
              type="button"
              onClick={() => setViewMode('estimator')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'estimator'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{t.estimatorTab}</span>
            </VIDCNativeButton>
          </div>
        </div>

        {/* Content Mode 1: Standard Rate Card Table */}
        {viewMode === 'ratecard' ? (
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden mb-8">
            <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-extrabold tracking-tight">
                  {isLaos ? 'Official Unit Price Card (Per Day)' : 'Bảng Đơn Giá Tiêu Chuẩn (Theo Ngày)'}
                </h3>
                <p className="text-xs text-slate-300">
                  {isLaos ? 'Flexible daily billing calculated based on active resources' : 'Tính cước linh hoạt theo thời gian thực tế sử dụng dịch vụ'}
                </p>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-slate-800 text-red-400 border border-slate-700">
                VNĐ / Ngày
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold text-[11px] uppercase tracking-wider">
                    <th className="py-3 px-4 text-center w-14">STT</th>
                    <th className="py-3 px-4">Thuộc tính</th>
                    <th className="py-3 px-4 text-center">ĐVT</th>
                    <th className="py-3 px-4 text-right font-black text-slate-700">Đơn giá (VNĐ/ngày)</th>
                    <th className="py-3 px-4 hidden sm:table-cell">Ghi chú cấu hình</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-normal text-slate-700">
                  {pricingTable.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 text-center text-slate-400 font-bold">
                        {row.id}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        {row.attribute}
                        <div className="sm:hidden text-[11px] text-slate-400 font-normal mt-0.5">
                          {row.note}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-bold">
                          {row.unit}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right font-extrabold text-[var(--vidc-color-brand-red)] whitespace-nowrap">
                        {row.price}
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 text-xs hidden sm:table-cell">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Technical Notes Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 space-y-1.5">
              <div className="font-extrabold text-slate-800 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
                <span>{isLaos ? 'Technical Notes:' : 'Lưu ý kỹ thuật:'}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[11px] sm:text-xs text-slate-600 pl-1">
                <li><strong>Storage:</strong> Sử dụng ổ cứng HDD tốc độ cao, bước nhảy tính cước theo Block 50 GB.</li>
                <li><strong>License Migration VM:</strong> Áp dụng tính theo Block 2 VM.</li>
                <li><strong>License Migration Server:</strong> Áp dụng tính theo Block 1 VM / Server vật lý.</li>
              </ul>
            </div>
          </div>
        ) : (
          /* Content Mode 2: Interactive Estimator */
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Controls */}
              <div className="lg:col-span-7 space-y-5">
                <h3 className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                  {isLaos ? 'Configure Migration Scope' : 'Điều Chỉnh Quy Mô Dự Án'}
                </h3>

                {/* 1. VM Count */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-xs">
                    <label htmlFor={vmId} className="flex items-center gap-1.5 text-slate-700">
                      <Cpu className="w-4 h-4 text-blue-600" />
                      <span>Số lượng máy ảo (VM) — Block 2 VM</span>
                    </label>
                    <span className="text-[var(--vidc-color-brand-red)] font-extrabold text-sm">
                      {vmCount} VM
                    </span>
                  </div>
                  <VIDCNativeInput
                    id={vmId}
                    type="range"
                    min={2}
                    max={60}
                    step={2}
                    value={vmCount}
                    onChange={(e) => setVmCount(Number(e.target.value))}
                    className="w-full accent-[var(--vidc-color-brand-red)] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>2 VM</span>
                    <span>20 VM</span>
                    <span>40 VM</span>
                    <span>60 VM</span>
                  </div>
                </div>

                {/* 2. Physical Server Count */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-xs">
                    <label htmlFor={serverId} className="flex items-center gap-1.5 text-slate-700">
                      <Server className="w-4 h-4 text-amber-600" />
                      <span>Số máy chủ vật lý (Server) — Block 1 Server</span>
                    </label>
                    <span className="text-[var(--vidc-color-brand-red)] font-extrabold text-sm">
                      {serverCount} Server
                    </span>
                  </div>
                  <VIDCNativeInput
                    id={serverId}
                    type="range"
                    min={0}
                    max={20}
                    step={1}
                    value={serverCount}
                    onChange={(e) => setServerCount(Number(e.target.value))}
                    className="w-full accent-[var(--vidc-color-brand-red)] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>0</span>
                    <span>5</span>
                    <span>10</span>
                    <span>20 Server</span>
                  </div>
                </div>

                {/* 3. Storage HDD */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-xs">
                    <label htmlFor={storageId} className="flex items-center gap-1.5 text-slate-700">
                      <HardDrive className="w-4 h-4 text-emerald-600" />
                      <span>Dung lượng HDD lưu trữ đệm (GB) — Bước nhảy 50 GB</span>
                    </label>
                    <span className="text-[var(--vidc-color-brand-red)] font-extrabold text-sm">
                      {formatCurrency(storageGb)} GB
                    </span>
                  </div>
                  <VIDCNativeInput
                    id={storageId}
                    type="range"
                    min={1050}
                    max={20000}
                    step={50}
                    value={storageGb}
                    onChange={(e) => setStorageGb(Number(e.target.value))}
                    className="w-full accent-[var(--vidc-color-brand-red)] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>1.050 GB</span>
                    <span>5.000 GB (62đ)</span>
                    <span>10.000 GB (58đ)</span>
                    <span>&gt;10.000 GB (49đ)</span>
                  </div>
                </div>

                {/* 4. Migration Duration */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between font-bold text-xs">
                    <label htmlFor={daysId} className="flex items-center gap-1.5 text-slate-700">
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span>Thời gian dự kiến thực hiện (ngày)</span>
                    </label>
                    <span className="text-slate-900 font-extrabold text-sm">
                      {migrationDays} ngày
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[7, 14, 21, 30].map((d) => (
                      <VIDCNativeButton
                        key={d}
                        type="button"
                        onClick={() => setMigrationDays(d)}
                        className={`py-2 rounded-lg font-bold text-xs border transition-all cursor-pointer ${
                          migrationDays === d
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {d} ngày
                      </VIDCNativeButton>
                    ))}
                  </div>
                </div>

              </div>

              {/* Summary Card */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
                  <h4 className="text-sm font-extrabold text-slate-900">
                    {isLaos ? 'Estimated Cost Breakdown' : 'Chi Tiết Ước Tính Kinh Phí'}
                  </h4>
                </div>

                <div className="space-y-2 text-xs divide-y divide-slate-200">
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-500">Bản quyền di chuyển VM:</span>
                    <span className="font-bold text-slate-800">{formatCurrency(dailyVmCost)} đ/ngày</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-slate-500">Bản quyền di chuyển Server:</span>
                    <span className="font-bold text-slate-800">{formatCurrency(dailyServerCost)} đ/ngày</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-slate-500">Lưu trữ HDD ({formatCurrency(storageGb)} GB):</span>
                    <span className="font-bold text-slate-800">{formatCurrency(dailyStorageCost)} đ/ngày</span>
                  </div>
                  <div className="flex justify-between pt-2 text-slate-700">
                    <span>Tổng đơn giá mỗi ngày:</span>
                    <strong className="text-slate-900">{formatCurrency(totalDailyCost)} đ/ngày</strong>
                  </div>
                  <div className="flex justify-between pt-2 text-slate-700">
                    <span>Thời gian chiến dịch:</span>
                    <strong>x {migrationDays} ngày</strong>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">
                    Tổng Dự Toán Chuyển Đổi (Tạm tính)
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-[var(--vidc-color-brand-red)]">
                      {formatCurrency(totalCampaignCost)}
                    </span>
                    <span className="text-xs font-bold text-slate-700">VNĐ</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Chưa bao gồm thuế VAT (nếu có)</p>
                </div>

                <VIDCNativeButton
                  type="button"
                  onClick={handleEstimateQuote}
                  className="w-full py-3.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{isLaos ? 'Get Custom Quote with this Spec' : 'Nhận Báo Giá Dự Toán Này'}</span>
                  <ArrowRight className="w-4 h-4" />
                </VIDCNativeButton>
              </div>

            </div>
          </div>
        )}

        {/* Custom Tailoring Card matching CloudServerEstimator */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-lg sm:text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] leading-snug">
              {t.customTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t.customDesc}
            </p>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={() => onOpenConsult()}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>{t.customBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </VIDCNativeButton>
        </div>

        {/* VAT Footnote matching Cloud Server */}
        <div className="mt-6 text-center text-xs text-slate-500 font-normal">
          {t.vatFootnote}
        </div>

      </div>
    </section>
  );
};
