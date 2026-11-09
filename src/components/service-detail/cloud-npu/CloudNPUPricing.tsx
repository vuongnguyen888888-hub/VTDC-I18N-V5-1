import React, { useState } from 'react';
import { 
  Check, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


export interface NPUConfigItem {
  id: string;
  name: string;
  vCpu: string;
  npuCard: string;
  ram: string;
  ssd: string;
  bandwidth: string;
  ipPublic: string;
  priceMonthly: string;
  priceMonthVnd: number;
  badge: string | null;
  recommended: boolean;
  dataCenters: string[];
}

interface CloudNPUPricingProps {
  currentMarket: SEAMarket;
  onSelectConfigForQuote: (config: NPUConfigItem, dataCenter: string) => void;
}

export const CloudNPUPricing: React.FC<CloudNPUPricingProps> = ({
  currentMarket,
  onSelectConfigForQuote,
}) => {
  const isLaos = currentMarket.code === 'la';

  // Controls state
  const [selectedDc, setSelectedDc] = useState<'hoa-lac' | 'hoang-hoa-tham' | 'binh-duong'>('hoa-lac');

  const dcNames: Record<string, string> = {
    'hoa-lac': 'TTDL Hòa Lạc',
    'hoang-hoa-tham': 'TTDL Hoàng Hoa Thám',
    'binh-duong': 'TTDL Bình Dương',
  };

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos
      ? 'Viettel Cloud NPU Standard Configuration Pricing'
      : 'Bảng giá cấu hình tiêu chuẩn Viettel Cloud NPU',
    desc: isLaos
      ? 'Standardized Qualcomm Cloud AI 100 Ultra infrastructure with transparent pricing, optimal ROI, and 24/7 expert support.'
      : 'Hạ tầng NPU Qualcomm Cloud AI 100 Ultra tiêu chuẩn với chi phí minh bạch, tối ưu ROI và hỗ trợ kỹ thuật 24/7.',
    dcLabel: isLaos ? 'DATA CENTER:' : 'KHU VỰC / TTDL:',
    vatFootnote: isLaos
      ? '* All service pricing excludes taxes. You can scale up to 6 NPU cards at any time in the control panel.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể mở rộng lên tới 6 Card NPU bất cứ lúc nào trong bảng điều khiển.',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    freeTrialBtn: isLaos ? 'FREE TRIAL' : 'DÙNG THỬ MIỄN PHÍ',
    consultBtn: isLaos ? 'REQUEST CONSULTATION' : 'NHẬN TƯ VẤN',
    customTitle: isLaos ? 'Custom Configuration & Enterprise AI Cluster' : 'Cấu hình tùy chỉnh & Mở rộng cụm AI Cluster',
    customDesc: isLaos 
      ? 'Need a larger multi-card solution? We support custom configurations scaling up to 6 Qualcomm AI 100 Ultra NPU Cards, 96 vCPU, 256 GB RAM, 4TB SSD and dedicated Private Clusters with the highest SLA commitment.'
      : 'Cần giải pháp lớn hơn? Chúng tôi hỗ trợ may đo cấu hình riêng biệt mở rộng lên tới 06 Card NPU Qualcomm AI 100 Ultra, 96 vCPU, 256 GB RAM ECC, 4.000 GB SSD và cụm Private Cluster độc lập với cam kết SLA cao nhất.',
    customBtn: isLaos ? 'REQUEST CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
  };

  // Standard 1 Package Specification
  const standardPackage: NPUConfigItem = {
    id: 'vcnpu-16',
    name: 'Gói VCNPU16 (Tiêu chuẩn)',
    vCpu: '16 vCPU (Dedicated)',
    npuCard: '1 Card NPU Qualcomm Cloud AI 100 Ultra (350 TOPS)',
    ram: '32 GB RAM ECC',
    ssd: '500 GB SSD Enterprise',
    bandwidth: '300 Mbps Băng thông',
    ipPublic: '1 IP Public',
    priceMonthly: isLaos ? '850' : '21.000.000',
    priceMonthVnd: 21000000,
    badge: isLaos ? '★ STANDARD SPEC' : '★ CẤU HÌNH TIÊU CHUẨN',
    recommended: true,
    dataCenters: ['TTDL Hòa Lạc', 'TTDL Hoàng Hoa Thám', 'TTDL Bình Dương'],
  };

  const displayPrice = standardPackage.priceMonthly;
  const displayUnit = isLaos ? 'USD/THÁNG' : 'Đ/THÁNG';

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200 scroll-mt-24"
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

        {/* Top Control Bar: TTDL */}
        <div className="flex items-center justify-center gap-4 mb-12 text-xs">
          {/* Khu vực / Data Center */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
              <span>{t.dcLabel}</span>
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedDc('hoa-lac')}
                className={`px-3.5 py-1.5 rounded-full font-extrabold text-xs transition-all duration-200 cursor-pointer ${
                  selectedDc === 'hoa-lac'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Hòa Lạc
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedDc('hoang-hoa-tham')}
                className={`px-3.5 py-1.5 rounded-full font-extrabold text-xs transition-all duration-200 cursor-pointer ${
                  selectedDc === 'hoang-hoa-tham'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Hoàng Hoa Thám
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedDc('binh-duong')}
                className={`px-3.5 py-1.5 rounded-full font-extrabold text-xs transition-all duration-200 cursor-pointer ${
                  selectedDc === 'binh-duong'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Bình Dương
              </VIDCNativeButton>
            </div>
          </div>
        </div>

        {/* 1 Single Standard Pricing Card + Custom Option Grid */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Product Info & Pricing (~55% / 7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80">
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/80">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{standardPackage.badge}</span>
                  </div>
                  <span className="text-xs font-bold text-slate-500">
                    {dcNames[selectedDc]}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight mt-3">
                  {standardPackage.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[var(--vidc-color-brand-red)] uppercase tracking-wider mt-1">
                  CHUYÊN DỤNG CHO AI INFERENCE & GENERATIVE AI
                </p>

                {/* Price Block */}
                <div className="my-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">
                      {isLaos ? `$${displayPrice}` : displayPrice}
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-500 uppercase">
                      {displayUnit}
                    </span>
                  </div>
                </div>

                {/* Key Benefits Pills */}
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>SLA Uptime 99.5%</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>SDK Miễn Phí 100%</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 mt-4 border-t border-slate-100">
                <VIDCNativeButton
                  type="button"
                  onClick={() => onSelectConfigForQuote(standardPackage, dcNames[selectedDc])}
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] active:bg-[var(--vidc-legacy-hex-aa0025)] text-white font-extrabold text-sm transition-all shadow-md shadow-red-500/20 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <span>{t.registerNow}</span>
                  <ArrowRight className="w-4 h-4" />
                </VIDCNativeButton>

                <VIDCNativeButton
                  type="button"
                  onClick={() => onSelectConfigForQuote(standardPackage, dcNames[selectedDc])}
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-extrabold text-sm transition-all cursor-pointer uppercase tracking-wider"
                >
                  {t.freeTrialBtn}
                </VIDCNativeButton>
              </div>
            </div>

            {/* Right Column: Detailed Specs List (~45% / 5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-50/70 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-200">
                  Cấu hình chi tiết bao gồm:
                </h4>

                <div className="space-y-3.5 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-slate-900 block text-xs sm:text-sm">
                        {standardPackage.npuCard}
                      </span>
                      <span className="text-[11px] text-slate-500">Hiệu năng suy luận AI 350 TOPS</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">
                        {standardPackage.vCpu}
                      </span>
                      <span className="text-[11px] text-slate-500">Tài nguyên CPU dùng riêng không chia sẻ</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">
                        {standardPackage.ram}
                      </span>
                      <span className="text-[11px] text-slate-500">Bộ nhớ đệm tự sửa lỗi kiểm toán cao cấp</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">
                        {standardPackage.ssd}
                      </span>
                      <span className="text-[11px] text-slate-500">Tốc độ đọc/ghi IOPS chuẩn Enterprise</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">
                        {standardPackage.bandwidth}
                      </span>
                      <span className="text-[11px] text-slate-500">Không giới hạn Data Transfer</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 block">
                        {standardPackage.ipPublic}
                      </span>
                      <span className="text-[11px] text-slate-500">1 Địa chỉ IPv4 Public tĩnh</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-[11px] text-slate-500 leading-relaxed">
                Hỗ trợ cài đặt tự động Ubuntu 20.04/22.04 LTS, bộ driver Qualcomm Cloud AI Apps SDK và Kubernetes Device Plugin sẵn sàng.
              </div>
            </div>

          </div>
        </div>

        {/* Custom Tailor Configuration Banner (Matching CloudServer pattern) */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM ENTERPRISE SPEC</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
              {t.customTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl leading-relaxed">
              {t.customDesc}
            </p>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={() => onSelectConfigForQuote(standardPackage, dcNames[selectedDc])}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[var(--vidc-legacy-hex-0f172a)] hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer uppercase tracking-wider"
          >
            <span>{t.customBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </VIDCNativeButton>
        </div>

        {/* Footnote */}
        <div className="mt-6 text-center text-xs text-slate-400">
          {t.vatFootnote}
        </div>

      </div>
    </section>
  );
};
