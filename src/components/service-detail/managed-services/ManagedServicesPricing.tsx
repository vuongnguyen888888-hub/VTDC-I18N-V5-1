import React, { useState } from 'react';
import { Check, Sliders, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ManagedServicesPricingProps {
  currentMarket?: SEAMarket;
  onOpenQuote: (planName?: string) => void;
}

export const ManagedServicesPricing: React.FC<ManagedServicesPricingProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  const [platformType, setPlatformType] = useState<'cloud' | 'dedicated' | 'network'>('cloud');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos ? 'Choose the optimal management package for your business' : 'Lựa chọn gói quản trị tối ưu cho doanh nghiệp',
    desc: isLaos 
      ? 'Enterprise-standard IT infrastructure management with transparent & predictable operational costs'
      : 'Hạ tầng điện toán đám mây & trung tâm dữ liệu với chi phí quản trị minh bạch & linh hoạt',
    billingModel: isLaos ? 'BILLING CYCLE:' : 'CHU KỲ THANH TOÁN:',
    platformLabel: isLaos ? 'INFRASTRUCTURE PLATFORM:' : 'NỀN TẢNG HẠ TẦNG:',
    cloud: isLaos ? 'Cloud Server' : 'Viettel Cloud Server',
    dedicated: isLaos ? 'Dedicated Server' : 'Máy chủ vật lý',
    network: isLaos ? 'Network & Firewall' : 'Thiết bị Mạng & Firewall',
    monthly: isLaos ? 'Monthly' : 'Thanh toán theo tháng',
    yearly: isLaos ? '12-Month (Save 15%)' : 'Cam kết 12 tháng (Tiết kiệm 15%)',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    consultBtn: isLaos ? 'REQUEST CONSULTATION' : 'NHẬN TƯ VẤN',
    customTitle: isLaos ? 'Custom Enterprise SLA — Tailored to your architecture' : 'Quy chuẩn quản trị may đo — Thiết kế riêng theo kiến trúc',
    customDesc: isLaos 
      ? 'Managing complex clusters, multi-cloud topologies, or high-compliance banking systems? We offer tailored SLA commitments and dedicated L3 engineer assignments.'
      : 'Cần quản trị cụm máy chủ lớn, hệ thống ngân hàng hay kiến trúc Multi-Cloud phức tạp? Chúng tôi hỗ trợ may đo quy trình quản trị chuyên biệt với kỹ sư L3 thường trực và cam kết SLA cao nhất.',
    customBtn: isLaos ? 'REQUEST CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatFootnote: isLaos 
      ? '* All service pricing excludes taxes. You can adjust the management scope and target servers at any time.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể tùy chỉnh phạm vi quản trị và danh sách máy chủ bất cứ lúc nào.',
  };

  const packages = [
    {
      id: 'ms-os',
      name: isLaos ? 'Package MS-01' : 'Gói MS-01',
      subtitle: 'MANAGED OS & MONITORING',
      target: isLaos ? '1 VM / OS Instance' : '1 Máy chủ / Instance',
      features: [
        'Cài đặt & cấu hình Hệ điều hành (Linux/Windows)',
        'Giám sát chủ động 24/7 (CPU, RAM, Disk, Network)',
        'Cảnh báo sự cố qua SMS/Email tự động',
        'Cập nhật bản vá bảo mật OS định kỳ',
        'Hỗ trợ xử lý sự cố OS cơ bản qua Ticket',
      ],
      priceMonthly: isLaos ? '35' : '850.000',
      priceYearly: isLaos ? '30' : '720.000',
      badge: null,
      recommended: false,
    },
    {
      id: 'ms-fullstack',
      name: isLaos ? 'Package MS-02' : 'Gói MS-02',
      subtitle: isLaos ? 'MOST POPULAR' : 'PHỔ BIẾN NHẤT',
      target: isLaos ? '1 Web / App Server' : '1 Máy chủ Web & Ứng dụng',
      features: [
        'Toàn bộ tính năng của Gói MS-01',
        'Cài đặt & tối ưu Web Server (Nginx, Apache, IIS)',
        'Cấu hình PHP-FPM, Node.js runtime & SSL',
        'Thiết lập chính sách sao lưu tự động (Backup Policy)',
        'Tự động quét lỗ hổng bảo mật định kỳ',
        'Phản hồi kỹ thuật khẩn cấp trong 15 phút',
      ],
      priceMonthly: isLaos ? '65' : '1.550.000',
      priceYearly: isLaos ? '55' : '1.315.000',
      badge: isLaos ? '★ BEST SELLER' : '★ BÁN CHẠY',
      recommended: true,
    },
    {
      id: 'ms-db',
      name: isLaos ? 'Package MS-03' : 'Gói MS-03',
      subtitle: 'ENTERPRISE DATABASE & CLUSTER',
      target: isLaos ? '1 Database / Cluster Node' : '1 Cụm Database / Ứng dụng tải cao',
      features: [
        'Toàn bộ tính năng của Gói MS-02',
        'Quản trị chuyên sâu MySQL, PostgreSQL, MSSQL',
        'Tối ưu hóa chỉ mục (Index) & Slow Query Log',
        'Cấu hình đồng bộ Replication & High Availability',
        'Kiểm tra định kỳ & diễn tập khôi phục Disaster Recovery',
        'Chuyên gia L3 phụ trách riêng & Báo cáo tháng',
      ],
      priceMonthly: isLaos ? '120' : '2.850.000',
      priceYearly: isLaos ? '100' : '2.420.000',
      badge: null,
      recommended: false,
    },
    {
      id: 'ms-net',
      name: isLaos ? 'Package MS-NET' : 'Gói MS-NET',
      subtitle: 'MANAGED NETWORK & FIREWALL',
      target: isLaos ? '1 Network / Firewall Device' : '1 Thiết bị Mạng / Tường lửa',
      features: [
        'Quản trị thiết bị Router, Switch, Firewall chuyên dụng',
        'Cấu hình Routing, VLAN, VPN Site-to-Site & SSL VPN',
        'Thiết lập chính sách phân lớp bảo mật (Security Policy)',
        'Giám sát lưu lượng băng thông & cảnh báo tấn công',
        'Sao lưu định kỳ cấu hình thiết bị (Config Backup)',
      ],
      priceMonthly: isLaos ? '80' : '1.950.000',
      priceYearly: isLaos ? '68' : '1.650.000',
      badge: null,
      recommended: false,
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
            {t.pricingTitle}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Filter Controls Styled Exactly as CloudServerEstimator */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-sm max-w-4xl mx-auto mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Platform filter */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider shrink-0">
              {t.platformLabel}
            </span>
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
              <VIDCNativeButton
                type="button"
                onClick={() => setPlatformType('cloud')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  platformType === 'cloud'
                    ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.cloud}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setPlatformType('dedicated')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  platformType === 'dedicated'
                    ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.dedicated}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setPlatformType('network')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  platformType === 'network'
                    ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.network}
              </VIDCNativeButton>
            </div>
          </div>

          {/* Billing Cycle toggle */}
          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider shrink-0">
              {t.billingModel}
            </span>
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.monthly}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingCycle('yearly')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === 'yearly'
                    ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.yearly}
              </VIDCNativeButton>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => {
            const isRecommended = pkg.recommended;
            const currentPrice = billingCycle === 'yearly' ? pkg.priceYearly : pkg.priceMonthly;

            return (
              <div
                key={pkg.id}
                className={`rounded-2xl bg-white border p-6 flex flex-col justify-between transition-all duration-300 relative ${
                  isRecommended
                    ? 'border-[var(--vidc-color-brand-red)] shadow-xl ring-2 ring-[var(--vidc-color-brand-red)]/10 scale-102 z-10'
                    : 'border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Badge if available */}
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--vidc-color-brand-red)] text-white text-[10px] font-extrabold tracking-wider px-3 py-0.5 rounded-full uppercase shadow-sm">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {/* Header info */}
                  <div className="border-b border-slate-100 pb-4 mb-4">
                    <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest block mb-1">
                      {pkg.subtitle}
                    </span>
                    <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {pkg.target}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight">
                        {currentPrice}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        {isLaos ? 'USD' : 'VND'} /tháng
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <span className="text-[11px] text-emerald-600 font-bold mt-1 block">
                        ✓ Đã áp dụng chiết khấu cam kết 1 năm
                      </span>
                    )}
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-2">
                      Quy chuẩn quản trị bao gồm:
                    </span>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenQuote(pkg.name)}
                    className="w-full bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                  >
                    <span>{t.registerNow}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </VIDCNativeButton>

                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenQuote(`${pkg.name} (Tư vấn kỹ thuật)`)}
                    className="w-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[40px]"
                  >
                    <span>{t.consultBtn}</span>
                  </VIDCNativeButton>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Tailored SLA Consultation Card */}
        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-1">
              <Sliders className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                {t.customTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                {t.customDesc}
              </p>
            </div>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={() => onOpenQuote('Quy chuẩn quản trị Enterprise may đo')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer min-h-[44px]"
          >
            {t.customBtn}
          </VIDCNativeButton>
        </div>

        {/* VAT Footnote */}
        <div className="mt-6 text-center text-xs text-slate-500">
          {t.vatFootnote}
        </div>

      </div>
    </section>
  );
};
