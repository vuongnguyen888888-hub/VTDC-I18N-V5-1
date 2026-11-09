import React, { useState } from 'react';
import { 
  Check, 
  X, 
  ArrowRight, 
  Sparkles, 
  ShieldAlert, 
  Zap, 
  Layers, 
  Info,
  CheckCircle2,
  Sliders,
  HelpCircle
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudWafPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (planName?: string) => void;
}

export const CloudWafPricing: React.FC<CloudWafPricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  // Controls state
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const t = {
    eyebrow: isLaos ? 'SERVICE PRICING & TIERS' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos 
      ? 'Viettel Cloud WAF Service Subscription Plans'
      : 'Bảng Giá Gói Cước Dịch Vụ Viettel Cloud WAF',
    desc: isLaos
      ? 'Flexible security tiers engineered for small web portals to mission-critical multi-cloud enterprise ecosystems. Multi-layer defense with 24/7 technical assurance.'
      : 'Đa dạng gói cước linh hoạt từ cổng thông tin doanh nghiệp vừa và nhỏ đến hệ sinh thái ứng dụng quy mô lớn. Bảo vệ toàn diện đa lớp với cam kết hỗ trợ chuyên sâu 24/7.',
    billingCycleLabel: isLaos ? 'Billing cycle' : 'Chu kỳ thanh toán:',
    billingMonthly: isLaos ? 'Monthly' : 'Hàng tháng',
    billingYearly: isLaos ? '1-Year (Save 15%)' : 'Gói cam kết năm (Tiết kiệm 15%)',
    addonsTitle: isLaos ? 'Optional Add-ons' : 'Tùy chọn bổ sung (Add-ons):',
    perMonth: isLaos ? '/ MONTH' : '/ THÁNG',
    actionSignUp: isLaos ? 'SIGN UP NOW' : 'ĐĂNG KÝ NGAY',
    actionTrial: isLaos ? 'FREE TRIAL' : 'DÙNG THỬ MIỄN PHÍ',
    customTitle: isLaos
      ? 'Need Custom Architecture or Unlimited DDoS Defense?'
      : 'Hệ thống có lưu lượng đặc thù hoặc cần Unlimited DDoS?',
    customDesc: isLaos
      ? 'Contact Viettel IDC cybersecurity specialists to architect customized defense pipelines, dedicated scrubbing instances, and tailored SLAs.'
      : 'Đội ngũ chuyên gia an toàn thông tin Viettel IDC sẵn sàng tư vấn cấu hình tùy biến theo từng ứng dụng đặc thù, băng thông lớn và cam kết SLA chuyên sâu.',
    customBtn: isLaos
      ? 'GET CUSTOM ARCHITECTURE & QUOTE'
      : 'NHẬN TƯ VẤN CẤU HÌNH TÙY BIẾN',
    vatFootnote: isLaos
      ? '* Prices in USD, excluding VAT. Includes 99.99% SLA uptime commitment and 24/7/365 ERT engineering assistance.'
      : '* Bảng giá trên tính theo USD, chưa bao gồm thuế VAT (10%). Áp dụng cam kết chất lượng dịch vụ SLA 99.99% và hỗ trợ kỹ thuật 24/7/365.',
    compareTableTitle: isLaos ? 'Detailed Tier Feature Comparison Matrix' : 'Bảng So Sánh Chi Tiết Tính Năng Giữa Các Gói Cước',
    tableColFeature: isLaos ? 'Feature Group / Capability' : 'Nhóm tính năng / Thành phần',
  };

  const addonOptions = [
    { id: 'cdn', name: 'CDN (Amazon CloudFront)', desc: isLaos ? 'Global edge content distribution' : 'Mạng phân phối nội dung toàn cầu' },
    { id: 'unlimited_ddos', name: 'Unlimited DDoS Defense', desc: isLaos ? 'Zero overage volumetric protection' : 'Phòng thủ DDoS lưu lượng không giới hạn' },
    { id: 'dns_as_a_service', name: 'DNS as a Service', desc: isLaos ? 'Managed high-availability DNS' : 'Quản lý bản ghi DNS thông minh sẵn sàng cao' },
    { id: 'advanced_web_ddos', name: 'Advanced Web DDoS (L7)', desc: isLaos ? 'Deep algorithmic L7 filtering' : 'Chống DDoS Lớp 7 chuyên sâu' },
    { id: 'premium_support', name: 'Premium 24/7 ERT Support', desc: isLaos ? '15-min emergency response SLA' : 'Đội ngũ kỹ sư ERT chuyên trách 24/7' },
  ];

  // Pricing calculations
  const plans = [
    {
      id: 'standard',
      name: 'STANDARD',
      subtitle: isLaos ? 'BUSINESS WEB PORTALS' : 'DOANH NGHIỆP VỪA & NHỎ',
      badge: isLaos ? 'Essential' : 'Cơ Bản',
      priceMonthly: 360,
      priceYearly: 306,
      desc: isLaos ? 'Standard protection for business web portals' : 'Gói bảo vệ cốt lõi cho website và cổng thông tin doanh nghiệp',
      popular: false,
      specs: [
        { label: isLaos ? 'Web Application Firewall (WAF)' : 'Tường lửa WAF (OWASP Top 10)', bold: true },
        { label: isLaos ? 'API Protection & Rate Limiting' : 'Bảo vệ API & Kiểm soát Rate Limit', bold: true },
        { label: isLaos ? '1 Gbps Anti-DDoS capacity' : 'Năng lực chống DDoS: 1 Gbps', bold: true },
        { label: isLaos ? 'Access Control & Geo IP Filtering' : 'Kiểm soát truy cập & Bộ lọc Geo IP', bold: false },
        { label: isLaos ? 'Basic Bot Protection' : 'Bảo vệ chống Bot cơ bản', bold: false },
        { label: isLaos ? '30 Days Data Retention' : 'Lưu trữ Log: 30 Ngày', bold: false },
        { label: isLaos ? 'LBaaS: Failover Active-Standby' : 'Cân bằng tải LBaaS: Failover', bold: false },
        { label: isLaos ? '24/7 Standard Support' : 'Hỗ trợ kỹ thuật Standard 24/7', bold: false },
      ],
    },
    {
      id: 'advance',
      name: 'ADVANCE',
      subtitle: isLaos ? 'COMMERCE & FINTECH' : 'THƯƠNG MẠI ĐIỆN TỬ & TÀI CHÍNH',
      badge: isLaos ? 'Most Popular' : 'Phổ Biến Nhất',
      priceMonthly: 720,
      priceYearly: 612,
      desc: isLaos ? 'Advanced protection with AI correlation & ERT feed' : 'Tối ưu cho ứng dụng thương mại, tài chính với AI Correlation',
      popular: true,
      specs: [
        { label: isLaos ? 'Includes all STANDARD capabilities' : 'Bao gồm toàn bộ tính năng gói STANDARD', bold: true },
        { label: isLaos ? '10 Gbps Anti-DDoS capacity' : 'Năng lực chống DDoS: 10 Gbps', bold: true },
        { label: isLaos ? 'AI Correlated WAF & Path Protection' : 'Advanced WAF & AI Correlation', bold: true },
        { label: isLaos ? 'ERT Active Attackers Feed (EAAF)' : 'Tình báo đe dọa ERT Feed (EAAF)', bold: true },
        { label: isLaos ? 'Client-Side Protection - Detection' : 'Client-Side Protection (Phát hiện mã độc)', bold: false },
        { label: isLaos ? '60 Days Data Retention' : 'Lưu trữ Log: 60 Ngày', bold: false },
        { label: isLaos ? 'LBaaS: Basic Multi-Origin Balancing' : 'Cân bằng tải LBaaS: Basic', bold: false },
        { label: isLaos ? 'Advanced Support with 24/7 ERT' : 'Hỗ trợ kỹ thuật Advanced với đội ERT', bold: false },
      ],
    },
    {
      id: 'complete',
      name: 'COMPLETE',
      subtitle: isLaos ? 'MISSION CRITICAL ECOSYSTEMS' : 'HỆ THỐNG CỐT LÕI & ĐA NỀN TẢNG',
      badge: isLaos ? 'Full Suite' : 'Toàn Diện',
      priceMonthly: 1400,
      priceYearly: 1190,
      desc: isLaos ? 'Complete suite with Bot Manager & Client-Side Protection' : 'Lá chắn phòng thủ tối cao cho hệ thống tài chính & API quy mô lớn',
      popular: false,
      specs: [
        { label: isLaos ? 'Includes all ADVANCE capabilities' : 'Bao gồm toàn bộ tính năng gói ADVANCE', bold: true },
        { label: isLaos ? '10 Gbps Anti-DDoS capacity' : 'Năng lực chống DDoS: 10 Gbps', bold: true },
        { label: isLaos ? 'Automated API Discovery' : 'Khám phá API tự động (API Discovery)', bold: true },
        { label: isLaos ? 'Advanced Bot Manager (AI Behavioral)' : 'Quản trị Bot nâng cao (Advanced Bot)', bold: true },
        { label: isLaos ? 'Client-Side Skimming Mitigation' : 'Client-Side Protection (Ngăn chặn mã độc)', bold: true },
        { label: isLaos ? '90 Days Data Retention' : 'Lưu trữ Log: 90 Ngày', bold: false },
        { label: isLaos ? 'LBaaS: Advanced Traffic Management' : 'Cân bằng tải LBaaS: Advanced', bold: false },
        { label: isLaos ? 'Dedicated ERT Priority Support' : 'Hỗ trợ ưu tiên chuyên trách từ ERT', bold: false },
      ],
    },
  ];

  // Table rows as specified in the prompt
  const tableRows = [
    {
      group: isLaos ? 'Core Web & API Firewall' : 'Tường Lửa Ứng Dụng & API',
      rows: [
        { feature: 'Web Application Firewall (WAF)', standard: true, advance: true, complete: true },
        { feature: 'API Protection & Schema Validation', standard: true, advance: true, complete: true },
        { feature: 'Access Control & IP Geo Rules', standard: true, advance: true, complete: true },
        { feature: 'Advanced Rules & Rate Limiting', standard: true, advance: true, complete: true },
        { feature: 'Dashboard Reporting & Analytics', standard: true, advance: true, complete: true },
        { feature: 'Basic Bot Protection', standard: true, advance: true, complete: true },
      ],
    },
    {
      group: isLaos ? 'DDoS Defense & Threat Intelligence' : 'Chống Tấn Công DDoS & Tình Báo Đe Dọa',
      rows: [
        { feature: 'Năng lực chống DDoS (DDoS Protection)', standard: '1 Gbps', advance: '10 Gbps', complete: '10 Gbps' },
        { feature: 'Threat Intelligence Queries', standard: '50 queries / tháng', advance: '50 queries / tháng', complete: '50 queries / tháng' },
        { feature: 'Cấp độ hỗ trợ kỹ thuật', standard: 'Standard Support', advance: 'Advanced Support', advanceHighlight: true, complete: 'Advanced Support' },
      ],
    },
    {
      group: isLaos ? 'Advanced Security & AI Engines' : 'Tính Năng Bảo Mật Chuyên Sâu & AI',
      rows: [
        { feature: 'Advanced WAF (Path Access Protection & AI Correlation)', standard: false, advance: true, complete: true },
        { feature: 'ERT Active Attackers Feed (EAAF)', standard: false, advance: true, complete: true },
        { feature: 'Client-Side Protection - Detection', standard: false, advance: true, complete: true },
        { feature: 'Client-Side Protection - Mitigation', standard: false, advance: false, complete: true },
        { feature: 'Khám phá API tự động (API Discovery)', standard: false, advance: false, complete: true },
        { feature: 'Quản trị Bot nâng cao (Advanced Bot Manager)', standard: false, advance: false, complete: true },
      ],
    },
    {
      group: isLaos ? 'System Infrastructure & Load Balancing' : 'Hạ Tầng, Dữ Liệu & Cân Bằng Tải',
      rows: [
        { feature: 'Thời gian lưu trữ dữ liệu log (Data Retention)', standard: '30 Ngày', advance: '60 Ngày', complete: '90 Ngày' },
        { feature: 'Cân bằng tải dịch vụ (LBaaS)', standard: 'Failover', advance: 'Basic', complete: 'Advanced' },
        { feature: 'Tùy chọn Add-on mở rộng', standard: 'Hỗ trợ Add-on', advance: 'Hỗ trợ Add-on', complete: 'Hỗ trợ Add-on' },
      ],
    },
  ];

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Thanh Điều Khiển: Chu kỳ thanh toán chuẩn Cloud Server */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.billingCycleLabel}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-full font-extrabold text-xs transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.billingMonthly}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`px-4 py-2 rounded-full font-extrabold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === 'yearly'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>{t.billingYearly}</span>
              </VIDCNativeButton>
            </div>
          </div>
        </div>

        {/* Grid 3 Gói Cước Chuẩn Cloud Server Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map((pkg) => {
            const price = billingCycle === 'yearly' ? pkg.priceYearly : pkg.priceMonthly;
            const isRecommended = pkg.popular;

            return (
              <div 
                key={pkg.id}
                className={`relative rounded-2xl p-5 bg-white border border-slate-200/90 flex flex-col justify-between transition-all duration-300 ${
                  isRecommended
                    ? 'shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-300 ring-2 ring-[var(--vidc-color-brand-red)]/15'
                    : 'shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Card Header: Title, Subtitle, Badge */}
                  <div className="min-h-[52px] mb-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">{pkg.name}</h3>
                      {pkg.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/80 whitespace-nowrap">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-0.5">{pkg.subtitle}</p>
                  </div>

                  {/* Price */}
                  <div className="my-3 pb-3 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">
                        ${price}
                      </span>
                      <span className="text-[11px] font-extrabold text-slate-500 uppercase">
                        {t.perMonth}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      {pkg.desc}
                    </p>
                  </div>

                  {/* Config Header */}
                  <div className="mt-4 mb-3">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      CẤU HÌNH GÓI CƯỚC
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Chi tiết gói bao gồm:
                    </p>
                  </div>

                  {/* Specs list with red checkmarks */}
                  <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                    {pkg.specs.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                        <span className={item.bold ? 'font-bold text-slate-900' : 'text-slate-600'}>
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom CTA Buttons */}
                <div className="space-y-2 pt-2">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult(pkg.name)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-sm uppercase tracking-wider text-center block cursor-pointer"
                  >
                    {t.actionSignUp}
                  </VIDCNativeButton>
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult(`${pkg.name} - Dùng thử`)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs transition-all uppercase tracking-wider text-center block cursor-pointer"
                  >
                    {t.actionTrial}
                  </VIDCNativeButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Khối Tùy Chọn Mở Rộng (Add-ons Selector) */}
        <div className="rounded-2xl p-6 bg-white border border-slate-200/90 shadow-sm mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Sliders className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              {t.addonsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {addonOptions.map((addon) => {
              const isChecked = selectedAddons.includes(addon.id);
              return (
                <VIDCNativeButton
                  key={addon.id}
                  type="button"
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                    isChecked
                      ? 'bg-red-50/60 border-[var(--vidc-color-brand-red)] text-slate-900 shadow-sm'
                      : 'bg-slate-50 border-slate-200 hover:bg-white text-slate-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                    isChecked 
                      ? 'bg-[var(--vidc-color-brand-red)] border-[var(--vidc-color-brand-red)] text-white' 
                      : 'border-slate-300 bg-white'
                  }`}>
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{addon.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{addon.desc}</div>
                  </div>
                </VIDCNativeButton>
              );
            })}
          </div>
        </div>

        {/* Bảng So Sánh Chi Tiết Tính Năng Giữa Các Gói Cước */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden mb-10">
          <div className="p-5 sm:p-6 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-50/50">
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-[var(--vidc-legacy-hex-0f172a)]">
                {t.compareTableTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {isLaos ? 'Matrix specifications of Viettel CWAF tiers' : 'Chi tiết thông số kỹ thuật và tính năng tương ứng từng cấp độ bảo vệ'}
              </p>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-100 font-bold">
              SPEC MATRIX
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70 text-slate-800">
                  <th className="py-4 px-6 font-extrabold uppercase tracking-wider text-slate-600 w-2/5">
                    {t.tableColFeature}
                  </th>
                  <th className="py-4 px-4 font-extrabold text-center text-slate-900 w-1/5">
                    STANDARD
                  </th>
                  <th className="py-4 px-4 font-extrabold text-center text-[var(--vidc-color-brand-red)] w-1/5 bg-red-50/40">
                    ADVANCE (Phổ biến)
                  </th>
                  <th className="py-4 px-4 font-extrabold text-center text-slate-900 w-1/5">
                    COMPLETE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {tableRows.map((sec, secIdx) => (
                  <React.Fragment key={secIdx}>
                    <tr className="bg-slate-50/90">
                      <td colSpan={4} className="py-2.5 px-6 font-extrabold text-slate-800 tracking-wide text-xs uppercase bg-slate-100/50">
                        {sec.group}
                      </td>
                    </tr>
                    {sec.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-6 text-slate-700 font-medium">
                          {row.feature}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof row.standard === 'boolean' ? (
                            row.standard ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                            ) : (
                              <X className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-semibold text-slate-700">{row.standard}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center bg-red-50/20">
                          {typeof row.advance === 'boolean' ? (
                            row.advance ? (
                              <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] font-bold mx-auto" />
                            ) : (
                              <X className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className={`font-bold ${row.advanceHighlight ? 'text-[var(--vidc-color-brand-red)]' : 'text-slate-800'}`}>
                              {row.advance}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {typeof row.complete === 'boolean' ? (
                            row.complete ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                            ) : (
                              <X className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="font-semibold text-slate-800">{row.complete}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Khối Tư Vấn Tùy Biến (Custom Configurator Card chuẩn Cloud Server) */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)]">
              {t.customTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              {t.customDesc}
            </p>
          </div>
          <VIDCNativeButton
            type="button"
            onClick={() => onOpenConsult('Tư vấn cấu hình WAF tùy biến')}
            className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs transition-all shadow-md uppercase tracking-wider whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.customBtn}
          </VIDCNativeButton>
        </div>

        {/* Footnote */}
        <p className="mt-8 text-center text-xs text-slate-400">
          {t.vatFootnote}
        </p>

      </div>
    </section>
  );
};
