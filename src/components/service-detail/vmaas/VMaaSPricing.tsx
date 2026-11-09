import React from 'react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  PlusCircle, 
  Sliders 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


export interface VMaaSConfigItem {
  id: string;
  name: string;
  targetAudience: string;
  tokenAllocation: string;
  priceMonthly: string;
  priceMonthVnd: number;
  features: string[];
  badge?: string;
  isPoc?: boolean;
  isCustom?: boolean;
  recommended?: boolean;
}

interface VMaaSPricingProps {
  currentMarket: SEAMarket;
  onSelectConfigForQuote: (config: VMaaSConfigItem, location: string, actionType?: 'register' | 'poc' | 'consult') => void;
}

export const VMaaSPricing: React.FC<VMaaSPricingProps> = ({
  currentMarket,
  onSelectConfigForQuote,
}) => {
  const isLaos = currentMarket?.code === 'la';
  const defaultLocation = 'TTDL Viettel IDC Việt Nam';

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos
      ? 'Choose the optimal vMaaS token package for your business'
      : 'Lựa chọn gói vMaaS tối ưu cho nhu cầu phát triển & doanh nghiệp',
    desc: isLaos
      ? 'Pay-as-you-grow token bundles with zero infrastructure CapEx and transparent Add-on pricing'
      : 'Đa dạng gói token từ thử nghiệm đến quy mô lớn, chi phí minh bạch, không tốn phí đầu tư hạ tầng phần cứng',
    config: isLaos ? 'CONFIGURATION & FEATURES' : 'CẤU HÌNH & TÍNH NĂNG',
    detailDesc: isLaos ? 'Detailed features include:' : 'Chi tiết gói bao gồm:',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    freeTrialBtn: isLaos ? 'FREE TRIAL' : 'DÙNG THỬ',
    registerBtn: isLaos ? 'REGISTER' : 'ĐĂNG KÝ',
    consultBtn: isLaos ? 'REQUEST CONSULTATION' : 'NHẬN TƯ VẤN',
    additionalOptionsEyebrow: isLaos ? 'ADDITIONAL OPTIONS' : 'TÙY CHỌN BỔ SUNG',
    additionalOptionsTitle: isLaos ? 'Enterprise Customization & Add-on Tokens' : 'Tùy chọn bổ sung & Mở rộng dung lượng',
    generalPolicyTitle: isLaos ? 'General Operational Policies' : 'Chính Sách & Quy Chuẩn Chung',
    generalPolicy: isLaos 
      ? 'No distinction between Input/Output tokens; No limits on tokens/min or API requests/min; Max context length 8K; Max output 8K; Prices exclude VAT.'
      : 'Không phân biệt Input/Output token; Không giới hạn token/phút và API request/phút; Context length tối đa 8K; Max output tối đa 8K; Bảng giá chưa bao gồm thuế VAT.',
    customTitle: isLaos ? 'Custom Configuration — Tailored to enterprise needs' : 'Cấu hình tùy chỉnh — Thiết kế riêng theo nhu cầu doanh nghiệp',
    customDesc: isLaos 
      ? 'Need larger multi-billion token capacity, private fine-tuned model endpoints, or isolated Virtual Private Cloud clusters? Viettel IDC AI experts are ready to design solutions for you.'
      : 'Cần giải pháp lớn hơn? Chúng tôi hỗ trợ may đo cấu hình riêng biệt với sản lượng hàng tỷ token/tháng, triển khai mô hình riêng (BYOM) hoặc xây dựng cụm Dedicated Endpoint biệt lập với cam kết SLA cao nhất.',
    customBtn: isLaos ? 'REQUEST CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatFootnote: isLaos 
      ? '* All service pricing excludes taxes. You can adjust the token allocation or buy add-on tokens at any time.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể mua thêm Add-on Token hoặc nâng cấp gói bất cứ lúc nào.',
  };

  const pricingPackages: VMaaSConfigItem[] = [
    {
      id: 'vmaas-5m',
      name: 'vMaaS_5M',
      targetAudience: 'Starter Dev',
      tokenAllocation: '5M Token / tháng',
      priceMonthly: '30.000',
      priceMonthVnd: 30000,
      badge: undefined,
      features: [
        'Chi phí khởi điểm siêu tiết kiệm, thử nghiệm AI không rủi ro.',
        'API tương thích 100% chuẩn OpenAI SDK.',
        'Truy cập toàn bộ danh mục AI: LLM, Embedding, Vision, SDXL.',
        'Độ trễ thấp, máy chủ đặt tại Việt Nam.',
      ],
    },
    {
      id: 'vmaas-10m',
      name: 'vMaaS_10M',
      targetAudience: 'Freelance Dev',
      tokenAllocation: '10M Token / tháng',
      priceMonthly: '54.000',
      priceMonthVnd: 54000,
      badge: undefined,
      features: [
        'Phù hợp phát triển, kiểm thử và tối ưu ứng dụng AI thường xuyên.',
        'Triển khai đa tác vụ (Chat + RAG + Embedding) trên một API Key.',
        'Vận hành ổn định trên hạ tầng TTDL Viettel IDC.',
        'Quản lý token tiêu thụ chi tiết theo thời gian thực.',
      ],
    },
    {
      id: 'vmaas-50m',
      name: 'vMaaS_50M (Gói PoC)',
      targetAudience: 'SME / Doanh nghiệp',
      tokenAllocation: '50M Token / tháng',
      priceMonthly: '260.000',
      priceMonthVnd: 260000,
      badge: '★ GÓI DÙNG THỬ / POC',
      isPoc: true,
      recommended: true,
      features: [
        'Gói tiêu chuẩn áp dụng cho chính sách dùng thử/PoC tối đa 01 tháng.',
        'Kết nối đa mô hình, giảm thời gian tích hợp nhiều nhà cung cấp.',
        'Tối ưu cho Chatbot CSKH, RAG tri thức nội bộ và tự động hóa quy trình.',
        'Hỗ trợ kỹ thuật chuyên trách và tài liệu hướng dẫn mẫu.',
      ],
    },
    {
      id: 'vmaas-100m',
      name: 'vMaaS_100M',
      targetAudience: 'ISV & Agency',
      tokenAllocation: '100M Token / tháng',
      priceMonthly: '480.000',
      priceMonthVnd: 480000,
      badge: 'DÀNH CHO ISV & AGENCY',
      recommended: false,
      features: [
        'Phù hợp phát triển và cung cấp giải pháp AI cho nhiều khách hàng cuối.',
        'Hỗ trợ mở rộng theo nhu cầu với Add-on token 6.000 đ/1M token.',
        'Tích hợp bảo mật nhiều lớp, cam kết dữ liệu không bị rò rỉ.',
        'SLA 99.9% độ sẵn sàng của cổng API.',
      ],
    },
    {
      id: 'vmaas-custom',
      name: 'Customize',
      targetAudience: 'Tập đoàn / FinTech / Gov',
      tokenAllocation: 'Không giới hạn (Theo nhu cầu)',
      priceMonthly: 'Liên hệ',
      priceMonthVnd: 0,
      isCustom: true,
      badge: 'DOANH NGHIỆP & BYOM',
      recommended: false,
      features: [
        'Dành cho nhu cầu lượng token lớn, cấu hình hạn mức riêng biệt.',
        'Hỗ trợ triển khai mô hình riêng của doanh nghiệp (BYOM).',
        'Cung cấp Dedicated Endpoint riêng và thỏa thuận SLA cao cấp.',
        'Tư vấn tối ưu hóa pipeline từ đội ngũ chuyên gia AI Viettel IDC.',
      ],
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

        {/* 5 Pricing Cards Grid — Standardized Viettel Cloud Server Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12 items-stretch">
          {pricingPackages.map((pkg) => {
            const isRecommended = pkg.recommended || pkg.isPoc;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-5 bg-white border border-slate-200/90 flex flex-col justify-between transition-all duration-300 ${
                  isRecommended
                    ? 'shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-300 border-2 border-[var(--vidc-color-brand-red)]'
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
                      {pkg.targetAudience}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="my-3 pb-3 border-b border-slate-100">
                    {pkg.isCustom ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">
                          Liên hệ
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">
                          {isLaos ? `$${pkg.priceMonthly}` : pkg.priceMonthly}
                        </span>
                        <span className="text-[11px] font-extrabold text-slate-500 uppercase">
                          {isLaos ? 'USD/MO' : 'Đ/THÁNG'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Config Header & Token Allocation */}
                  <div className="mt-4 mb-3">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      {t.config}
                    </h4>
                    <p className="text-[11px] font-bold text-[var(--vidc-color-brand-red)] mt-0.5">
                      {pkg.tokenAllocation}
                    </p>
                  </div>

                  {/* Specs / Features list with Red Checkmarks */}
                  <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                        <span className="text-slate-700 leading-relaxed font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom CTA Buttons */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {pkg.isPoc ? (
                    <div className="space-y-2">
                      <VIDCNativeButton
                        type="button"
                        onClick={() => onSelectConfigForQuote(pkg, defaultLocation, 'register')}
                        className="w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-sm uppercase tracking-wider text-center block cursor-pointer"
                      >
                        {t.registerBtn}
                      </VIDCNativeButton>
                      <VIDCNativeButton
                        type="button"
                        onClick={() => onSelectConfigForQuote(pkg, defaultLocation, 'poc')}
                        className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-extrabold text-[11px] transition-all uppercase tracking-wider text-center block cursor-pointer"
                      >
                        {t.freeTrialBtn}
                      </VIDCNativeButton>
                    </div>
                  ) : pkg.isCustom ? (
                    <VIDCNativeButton
                      type="button"
                      onClick={() => onSelectConfigForQuote(pkg, defaultLocation, 'consult')}
                      className="w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-legacy-hex-0f172a)] hover:bg-slate-800 text-white font-extrabold text-xs transition-all shadow-sm uppercase tracking-wider text-center block cursor-pointer"
                    >
                      {t.consultBtn}
                    </VIDCNativeButton>
                  ) : (
                    <VIDCNativeButton
                      type="button"
                      onClick={() => onSelectConfigForQuote(pkg, defaultLocation, 'register')}
                      className="w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-sm uppercase tracking-wider text-center block cursor-pointer"
                    >
                      {t.registerNow}
                    </VIDCNativeButton>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Tùy chọn bổ sung (Additional Options Section) */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-2">
              <PlusCircle className="w-3.5 h-3.5" />
              <span>{t.additionalOptionsEyebrow}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)]">
              {t.additionalOptionsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* Card Tùy chọn 1: Customize (Theo nhu cầu) */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                    <Sliders className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-slate-100 text-slate-800 uppercase tracking-wider">
                    Theo nhu cầu
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-0f172a)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    Customize (Theo nhu cầu)
                  </h4>
                  <p className="text-xs text-slate-500 font-bold mt-0.5">
                    Gói thiết kế riêng biệt cho hạ tầng quy mô lớn
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Doanh nghiệp lớn/tập đoàn có nhu cầu token lớn, cấu hình riêng hoặc triển khai BYOM (Bring Your Own Model).
                </p>

                <ul className="space-y-2.5 pt-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                    <span>Dedicated Inference Endpoint biệt lập, không chia sẻ tài nguyên.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                    <span>Hỗ trợ triển khai mô hình riêng đã fine-tune của doanh nghiệp.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                    <span>Cam kết SLA cao cấp và chuyên gia AI tư vấn tối ưu pipeline.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <VIDCNativeButton
                  type="button"
                  onClick={() => onSelectConfigForQuote(pricingPackages[4], defaultLocation, 'consult')}
                  className="w-full py-3 rounded-xl bg-[var(--vidc-legacy-hex-0f172a)] hover:bg-slate-800 text-white text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer shadow-sm text-center"
                >
                  Liên Hệ Tư Vấn Gói Customize
                </VIDCNativeButton>
              </div>
            </div>

            {/* Card Tùy chọn 2: Add-on Token */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-[var(--vidc-color-brand-red)]">
                      6.000 đ
                    </span>
                    <span className="text-[11px] font-extrabold text-slate-500 block">/ 1M Token</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-0f172a)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    Add-on Token: 6.000đ/1M Token
                  </h4>
                  <p className="text-xs text-slate-500 font-bold mt-0.5">
                    Block 1.000.000 token
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Gói bổ sung khi khách hàng cần mở rộng dung lượng ngoài giới hạn mức gói chính.
                </p>

                <ul className="space-y-2.5 pt-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                    <span>Cung cấp linh hoạt theo từng Block 1.000.000 token.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                    <span>Không phân biệt Input/Output token khi sử dụng.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                    <span>Kích hoạt tự động hoặc theo yêu cầu khi phát sinh tải đột biến.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <VIDCNativeButton
                  type="button"
                  onClick={() => onSelectConfigForQuote({
                    id: 'vmaas-addon-block',
                    name: 'Add-on Token (Block 1M)',
                    targetAudience: 'Mở rộng dung lượng',
                    tokenAllocation: 'Block 1.000.000 Token',
                    priceMonthly: '6.000',
                    priceMonthVnd: 6000,
                    features: [
                      'Gói bổ sung khi khách hàng cần mở rộng dung lượng ngoài giới hạn mức gói chính.',
                      'Đơn giá: 6.000 đ / 1.000.000 token.',
                      'Không phân biệt Input/Output token.',
                    ],
                  }, defaultLocation, 'register')}
                  className="w-full py-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer shadow-sm text-center"
                >
                  Đăng Ký Mua Thêm Add-on Token
                </VIDCNativeButton>
              </div>
            </div>

          </div>
        </div>

        {/* General Policy Banner */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm mb-10 max-w-5xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-extrabold text-[var(--vidc-legacy-hex-0f172a)]">
                {t.generalPolicyTitle}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.generalPolicy}
              </p>
            </div>
          </div>
        </div>

        {/* Custom Configuration Dark Banner — Viettel Cloud Server Standard */}
        <div className="relative rounded-2xl bg-[var(--vidc-legacy-hex-090d16)] text-white p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden max-w-5xl mx-auto">
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
              onClick={() => onSelectConfigForQuote(pricingPackages[4], defaultLocation, 'consult')}
              className="px-6 py-3 rounded-xl bg-black hover:bg-slate-900 active:bg-slate-950 text-white border border-slate-700 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 whitespace-nowrap min-h-[44px] cursor-pointer"
            >
              {t.customBtn}
            </VIDCNativeButton>
          </div>
        </div>

        {/* Price Footnote */}
        <p className="text-center text-[11px] text-slate-400 italic mt-6">
          {t.vatFootnote}
        </p>

      </div>
    </section>
  );
};
