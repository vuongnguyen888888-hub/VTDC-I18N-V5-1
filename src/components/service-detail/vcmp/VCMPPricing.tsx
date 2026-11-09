import React, { useState } from 'react';
import { 
  Check, 
  Settings2
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VCMPPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: (details?: any) => void;
}

type BillingModel = 'saas' | 'dedicated';
type ScaleTier = 'tier1' | 'tier2' | 'tier3';

export const VCMPPricing: React.FC<VCMPPricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const [billingModel, setBillingModel] = useState<BillingModel>('saas');
  const [scaleTier, setScaleTier] = useState<ScaleTier>('tier1');

  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'MULTI-CLOUD PRICING & EDITIONS' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos 
      ? 'Transparent Multi-Cloud Management Pricing' 
      : 'Lựa chọn gói quản trị tối ưu cho doanh nghiệp',
    subtitle: isLaos
      ? 'Enterprise multi-cloud orchestration engine with predictable spending and scalable resources'
      : 'Hạ tầng điều phối Multi-Cloud tiêu chuẩn Enterprise với chi phí minh bạch & linh hoạt',
    modelLabel: isLaos ? 'DEPLOYMENT MODEL' : 'MÔ HÌNH TRIỂN KHAI',
    saasLabel: isLaos ? 'SaaS Multi-Cloud (Saving Plan)' : 'SaaS Multi-Cloud (Tiết kiệm)',
    dedicatedLabel: isLaos ? 'Dedicated Appliance (Private DC)' : 'Dedicated Appliance (DC riêng)',
    scaleLabel: isLaos ? 'INFRASTRUCTURE SCALE' : 'QUY MÔ QUẢN TRỊ',
    tier1: isLaos ? '1 - 3 Clouds (Small)' : '1 - 3 Đám mây (Vừa & Nhỏ)',
    tier2: isLaos ? '4 - 10 Clouds (Mid-Market)' : '4 - 10 Đám mây (Mở rộng)',
    tier3: isLaos ? 'Enterprise Multi-Cloud' : 'Tập đoàn & Doanh nghiệp lớn',
    contactPrice: isLaos ? 'Contact Us' : 'Liên hệ tư vấn',
    unitMonth: isLaos ? 'LAK / month' : 'VNĐ / tháng',
    unitDedicated: isLaos ? 'Tailored Contract' : 'Hợp đồng trọn gói',
    orderNow: isLaos ? 'SIGN UP NOW' : 'ĐĂNG KÝ NGAY',
    freeTrial: isLaos ? 'FREE TRIAL' : 'DÙNG THỬ MIỄN PHÍ',
    requestQuote: isLaos ? 'GET QUOTE' : 'NHẬN BÁO GIÁ',
    customTitle: isLaos 
      ? 'Custom Configuration — Tailored for Enterprise Multi-Cloud' 
      : 'Cấu hình tùy chỉnh — Thiết kế riêng theo nhu cầu Multi-Cloud',
    customDesc: isLaos
      ? 'Need custom integrations, dedicated ITSM connector, or sovereign compliance? Our solution architects will construct a dedicated architecture for your business.'
      : 'Cần giải pháp lớn hơn? Chúng tôi hỗ trợ may đo kiến trúc Multi-Cloud riêng biệt, kết nối tới hàng chục nền tảng Cloud và Private DC với cam kết SLA cao nhất.',
    customBtn: isLaos ? 'REQUEST ARCHITECT CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    footnote: isLaos
      ? '* All pricing excludes applicable VAT. Scale tier can be upgraded or adjusted dynamically anytime.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể điều chỉnh quy mô quản trị bất cứ lúc nào trong bảng điều khiển.',
  };

  const packages = [
    {
      id: 'starter',
      code: 'vCMP Starter',
      name: isLaos ? 'vCMP Starter (CS1)' : 'Gói vCMP Starter (CS1)',
      sub: isLaos ? 'Small Workloads' : 'Khởi tạo & Thử nghiệm',
      badge: null,
      price: isLaos ? '2,800,000' : '2.500.000',
      unit: t.unitMonth,
      highlight: false,
      specs: [
        isLaos ? 'Up to 2 Connected Clouds' : 'Quản lý tối đa 2 Nền tảng Cloud',
        isLaos ? 'Max 50 Managed VMs / Nodes' : 'Quản trị tối đa 50 Máy ảo / Nodes',
        isLaos ? 'Centralized Self-Service Portal' : 'Cổng tự phục vụ Self-Service cơ bản',
        isLaos ? 'Multi-Cloud Billing Monitoring' : 'Giám sát chi phí Billing tập trung',
        isLaos ? 'Standard 24/7 Support' : 'Hỗ trợ kỹ thuật tiêu chuẩn 24/7',
      ],
    },
    {
      id: 'standard',
      code: 'vCMP Standard',
      name: isLaos ? 'vCMP Standard (CS2)' : 'Gói vCMP Standard (CS2)',
      sub: isLaos ? 'Growing Teams' : 'Doanh nghiệp tăng trưởng',
      badge: isLaos ? '★ PHỔ BIẾN NHẤT' : '★ PHỔ BIẾN NHẤT',
      price: isLaos ? '6,500,000' : '5.900.000',
      unit: t.unitMonth,
      highlight: true,
      specs: [
        isLaos ? 'Up to 4 Connected Clouds' : 'Quản lý tới 4 Nền tảng Cloud',
        isLaos ? 'Max 150 Managed VMs / Nodes' : 'Quản trị tối đa 150 Máy ảo / Nodes',
        isLaos ? 'PaaS Template Marketplace' : 'Kho PaaS Marketplace Templates',
        isLaos ? 'Terraform & Ansible CI/CD' : 'Tích hợp Terraform & Ansible CI/CD',
        isLaos ? 'FinOps Idle Resource Detection' : 'Tự động phát hiện tài nguyên nhàn rỗi',
        isLaos ? 'Tenant-Based Budget Quotas' : 'Phân bổ hạn mức chi phí theo Tenant',
      ],
    },
    {
      id: 'pro',
      code: 'vCMP Professional',
      name: isLaos ? 'vCMP Pro (CS3)' : 'Gói vCMP Professional (CS3)',
      sub: isLaos ? 'Production Multi-Cloud' : 'Sản xuất & Mở rộng',
      badge: isLaos ? '★ KHUYÊN DÙNG' : '★ KHUYÊN DÙNG',
      price: isLaos ? '13,800,000' : '12.500.000',
      unit: t.unitMonth,
      highlight: false,
      specs: [
        isLaos ? 'Up to 8 Connected Clouds' : 'Quản lý tới 8 Nền tảng Cloud',
        isLaos ? 'Max 400 Managed VMs / Nodes' : 'Quản trị tối đa 400 Máy ảo / Nodes',
        isLaos ? 'Full RESTful API & Webhooks' : 'Bộ RESTful API & Webhooks không giới hạn',
        isLaos ? 'CNCF Kubernetes Provisioning' : 'Cấp phát cụm Kubernetes CNCF tự động',
        isLaos ? 'Advanced FinOps Rightsizing' : 'FinOps tối ưu chi phí & Rightsizing nâng cao',
        isLaos ? 'SAML / SSO / LDAP IAM Integration' : 'Tích hợp Single Sign-On / SAML / LDAP',
      ],
    },
    {
      id: 'enterprise',
      code: 'vCMP Enterprise',
      name: isLaos ? 'vCMP Enterprise' : 'Gói vCMP Enterprise',
      sub: isLaos ? 'Large Scale' : 'Tập đoàn & Đa chi nhánh',
      badge: isLaos ? '★ DOANH NGHIỆP' : '★ DOANH NGHIỆP',
      price: isLaos ? '28,000,000' : '25.000.000',
      unit: t.unitMonth,
      highlight: false,
      specs: [
        isLaos ? 'Unlimited Cloud Connections' : 'Không giới hạn nền tảng Cloud',
        isLaos ? '1000+ Managed VMs / Nodes' : 'Từ 1.000+ Máy ảo / Nodes trở lên',
        isLaos ? 'Enterprise ITSM & CMDB Plugins' : 'Tích hợp ITSM (ServiceNow/Jira), CMDB',
        isLaos ? 'Custom Policy Compliance Engine' : 'Chính sách bảo mật & Audit compliance riêng',
        isLaos ? 'Dedicated TAM & 99.99% SLA' : 'Kỹ sư TAM chuyên trách & Cam kết SLA 99.99%',
      ],
    },
    {
      id: 'dedicated',
      code: 'vCMP Dedicated',
      name: isLaos ? 'vCMP Dedicated DC' : 'Gói vCMP Dedicated DC',
      sub: isLaos ? 'On-Premises Appliance' : 'Triển khai Private DC riêng',
      badge: isLaos ? '★ ON-PREMISES' : '★ ON-PREMISES',
      price: t.contactPrice,
      unit: t.unitDedicated,
      highlight: false,
      specs: [
        isLaos ? 'Isolated On-Premises Appliance' : 'Triển khai đóng gói Appliance tại DC khách hàng',
        isLaos ? 'Custom Sovereign Cloud Compliance' : 'Đáp ứng trọn vẹn quy chuẩn bảo mật chuyên ngành',
        isLaos ? 'Full Source / Air-Gapped Support' : 'Hỗ trợ môi trường Air-gapped biệt lập hoàn toàn',
        isLaos ? 'Direct Engineering Handover' : 'Bàn giao chuyển giao công nghệ trực tiếp',
        isLaos ? 'Dedicated 24/7 Tier 3 Support' : 'Hỗ trợ kỹ thuật cấp cao Tier 3 riêng biệt',
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
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Controls Switcher Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10">
          
          {/* Model Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{t.modelLabel}:</span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingModel('saas')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  billingModel === 'saas'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.saasLabel}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingModel('dedicated')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  billingModel === 'dedicated'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.dedicatedLabel}
              </VIDCNativeButton>
            </div>
          </div>

          {/* Scale Tier Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{t.scaleLabel}:</span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setScaleTier('tier1')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  scaleTier === 'tier1'
                    ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.tier1}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setScaleTier('tier2')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  scaleTier === 'tier2'
                    ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.tier2}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setScaleTier('tier3')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  scaleTier === 'tier3'
                    ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.tier3}
              </VIDCNativeButton>
            </div>
          </div>

        </div>

        {/* 5 Cards Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-5 bg-white border flex flex-col justify-between transition-all duration-300 ${
                pkg.highlight
                  ? 'border-[var(--vidc-color-brand-red)] shadow-lg shadow-red-500/10 ring-2 ring-[var(--vidc-color-brand-red)]/20'
                  : 'border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-2 min-h-[32px]">
                  <div>
                    <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-snug">
                      {pkg.name}
                    </h3>
                    <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                      {pkg.sub}
                    </p>
                  </div>
                  {pkg.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/80 whitespace-nowrap">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Price block */}
                <div className="py-3 border-y border-slate-100 my-3">
                  <div className="text-2xl font-black text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
                    {pkg.price}
                  </div>
                  <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                    {pkg.unit}
                  </div>
                </div>

                {/* Spec details */}
                <div className="space-y-2 text-xs text-slate-600 mb-6">
                  {pkg.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <VIDCNativeButton
                  type="button"
                  onClick={() => onOpenConsult?.({ package: pkg.code, price: pkg.price })}
                  className="w-full py-2.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-red-900/10 cursor-pointer text-center"
                >
                  {t.orderNow}
                </VIDCNativeButton>
                <VIDCNativeButton
                  type="button"
                  onClick={() => onOpenConsult?.({ package: pkg.code, action: 'trial' })}
                  className="w-full py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer text-center"
                >
                  {pkg.price === t.contactPrice ? t.requestQuote : t.freeTrial}
                </VIDCNativeButton>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Configuration Box */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <Settings2 className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
              <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-0f172a)]">
                {t.customTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.customDesc}
            </p>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={() => onOpenConsult?.({ package: 'Custom Multi-Cloud Architecture' })}
            className="shrink-0 px-6 py-3 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer whitespace-nowrap"
          >
            {t.customBtn}
          </VIDCNativeButton>
        </div>

        {/* Footnote */}
        <div className="mt-8 text-center text-xs text-slate-500">
          {t.footnote}
        </div>

      </div>
    </section>
  );
};

