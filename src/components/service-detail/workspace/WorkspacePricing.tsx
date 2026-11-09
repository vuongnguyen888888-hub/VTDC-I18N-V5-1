import React, { useState } from 'react';
import { Check, Tag, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


export interface WorkspacePackageConfig {
  id: string;
  name: string;
  subtitle: string;
  users: string;
  emailQuota: string;
  driveStorage: string;
  webHosting: string;
  officeSuite: string;
  adminIAM: string;
  priceMonthly: number;
  badge?: string | null;
  recommended?: boolean;
}

interface WorkspacePricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (packageName?: string) => void;
}

export const WorkspacePricing: React.FC<WorkspacePricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const [billingCycle, setBillingCycle] = useState<'1' | '12' | '24'>('12');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos 
      ? 'Choose the optimal Viettel Workspace package for your enterprise'
      : 'Lựa chọn gói cấu hình Viettel Workspace tối ưu cho doanh nghiệp',
    desc: isLaos 
      ? 'Enterprise-standard digital workplace infrastructure with transparent costs and scalable user tiers'
      : 'Hạ tầng làm việc số tiêu chuẩn Enterprise với chi phí minh bạch, tiết kiệm và linh hoạt theo quy mô nhân sự',
    cycleMonthly: isLaos ? 'Monthly' : 'Thanh toán 1 Tháng',
    cycle12: isLaos ? '12 Months (Save 10%)' : 'Gói 12 Tháng (Tiết kiệm 10%)',
    cycle24: isLaos ? '24 Months (Save 20% + Free SSL)' : 'Gói 24 Tháng (Tiết kiệm 20% + Tặng SSL)',
    perMonth: isLaos ? '/month' : '/tháng',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    freeTrial: isLaos ? 'FREE TRIAL' : 'DÙNG THỬ MIỄN PHÍ',
    contactSales: isLaos ? 'CONTACT SALES' : 'LIÊN HỆ BÁO GIÁ',
    customTitle: isLaos ? 'Custom Enterprise Solution — Tailored to your needs' : 'Giải pháp Doanh nghiệp Tùy chỉnh — May đo theo nhu cầu',
    customDesc: isLaos 
      ? 'Need more accounts or hybrid private cloud deployment? We support tailored configurations for enterprises with 500+ employees, dedicated single-tenant servers, and on-site SLA.'
      : 'Cần giải pháp lớn hơn hoặc triển khai máy chủ riêng biệt? Chúng tôi hỗ trợ may đo cấu hình riêng cho tập đoàn từ 500+ nhân sự, tích hợp SSO/Active Directory nội bộ và cam kết SLA 99.99%.',
    customBtn: isLaos ? 'REQUEST CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatFootnote: isLaos 
      ? '* All service pricing excludes taxes. You can upgrade user accounts and storage at any time.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể nâng cấp mở rộng tài khoản hoặc dung lượng lưu trữ bất cứ lúc nào.',
  };

  const discountRate = billingCycle === '12' ? 0.9 : billingCycle === '24' ? 0.8 : 1.0;

  const packages: WorkspacePackageConfig[] = [
    {
      id: 'ws-starter',
      name: 'Workspace Starter',
      subtitle: isLaos ? 'FOR STARTUPS & TEAMS' : 'KHỞI NGHIỆP & NHÓM 5-10 NGƯỜI',
      users: isLaos ? 'Up to 10 Users' : 'Tối đa 10 Người dùng',
      emailQuota: isLaos ? '10 Business Emails (2GB/box)' : '10 Email doanh nghiệp (2GB/hộp thư)',
      driveStorage: isLaos ? '50 GB Cloud Storage (Drive)' : '50 GB Lưu trữ đám mây Viettel Drive',
      webHosting: isLaos ? '5 GB SSD Web Hosting + Free SSL' : '5 GB SSD Web Hosting + Miễn phí SSL',
      officeSuite: isLaos ? 'Online Docs, Sheets, Slides' : 'Soạn thảo Docs, Sheets, Slides trực tuyến',
      adminIAM: isLaos ? 'Basic Admin Portal' : 'Phân quyền quản trị cơ bản',
      priceMonthly: 199000,
      badge: null,
      recommended: false,
    },
    {
      id: 'ws-standard',
      name: 'Workspace Standard',
      subtitle: isLaos ? 'MOST POPULAR FOR SMES' : 'PHỔ BIẾN CHO DOANH NGHIỆP SME (20-50 NGƯỜI)',
      users: isLaos ? 'Up to 30 Users' : 'Tối đa 30 Người dùng',
      emailQuota: isLaos ? '30 Business Emails (5GB/box)' : '30 Email doanh nghiệp (5GB/hộp thư)',
      driveStorage: isLaos ? '200 GB Cloud Storage (Drive)' : '200 GB Lưu trữ đám mây Viettel Drive NVMe',
      webHosting: isLaos ? '15 GB SSD Web Hosting + Free SSL' : '15 GB SSD Web Hosting + SSL Let\'s Encrypt',
      officeSuite: isLaos ? 'Online Office + Realtime Collab' : 'Bộ Office Online + Cộng tác thời gian thực',
      adminIAM: isLaos ? 'Advanced Department IAM' : 'Quản trị phân quyền phòng ban & Tự động Backup',
      priceMonthly: 499000,
      badge: isLaos ? '★ BEST SELLER' : '★ BÁN CHẠY NHẤT',
      recommended: true,
    },
    {
      id: 'ws-pro',
      name: 'Workspace Pro',
      subtitle: isLaos ? 'FOR GROWING ENTERPRISES' : 'DOANH NGHIỆP TĂNG TRƯỞNG (50-150 NGƯỜI)',
      users: isLaos ? 'Up to 100 Users' : 'Tối đa 100 Người dùng',
      emailQuota: isLaos ? '100 Business Emails (10GB/box)' : '100 Email doanh nghiệp (10GB/hộp thư)',
      driveStorage: isLaos ? '1 TB (1000 GB) Drive NVMe' : '1 TB (1000 GB) Viettel Drive NVMe',
      webHosting: isLaos ? '50 GB SSD Web Hosting + CDN Boost' : '50 GB SSD Hosting Enterprise + Tăng tốc CDN',
      officeSuite: isLaos ? 'Full Office Suite + Video Meet' : 'Trọn bộ Office, Lịch số, Video Conference',
      adminIAM: isLaos ? 'Granular IAM, Audit Logs & 2FA' : 'Phân quyền IAM chi tiết, Nhật ký Audit & 2FA',
      priceMonthly: 1290000,
      badge: null,
      recommended: false,
    },
    {
      id: 'ws-enterprise',
      name: 'Workspace Enterprise',
      subtitle: isLaos ? 'FOR LARGE CORPORATIONS' : 'TẬP ĐOÀN & TỔ CHỨC LỚN (200+ NGƯỜI)',
      users: isLaos ? 'Unlimited Custom Users' : 'Không giới hạn số lượng người dùng',
      emailQuota: isLaos ? 'Unlimited Custom Mailboxes' : 'Email dung lượng lớn tùy biến theo yêu cầu',
      driveStorage: isLaos ? '2 TB - 50 TB Dedicated Storage' : 'Từ 2 TB - 50 TB Lưu trữ đám mây riêng',
      webHosting: isLaos ? 'Dedicated Server / Private VPC' : 'Máy chủ Web riêng biệt / Private Cloud VPC',
      officeSuite: isLaos ? 'Enterprise Collaboration Suite' : 'Bộ giải pháp văn phòng số toàn diện & Bảo mật cao',
      adminIAM: isLaos ? 'SSO, LDAP/AD, On-site SLA' : 'Tích hợp SSO, LDAP/AD, API ERP & SLA 99.99%',
      priceMonthly: 0, // Contact for quote
      badge: isLaos ? 'ENTERPRISE' : 'MAY ĐO RIÊNG',
      recommended: false,
    },
  ];

  const formatPrice = (amount: number) => {
    if (amount === 0) return isLaos ? 'Custom Quote' : 'Liên hệ';
    const finalAmount = Math.round(amount * discountRate);
    if (isLaos) {
      return `$${Math.round(finalAmount / 25000)}`;
    }
    return `${finalAmount.toLocaleString('vi-VN')} đ`;
  };

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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-3">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Billing Cycle Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <VIDCNativeButton
            type="button"
            onClick={() => setBillingCycle('1')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              billingCycle === '1'
                ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {t.cycleMonthly}
          </VIDCNativeButton>
          <VIDCNativeButton
            type="button"
            onClick={() => setBillingCycle('12')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all relative ${
              billingCycle === '12'
                ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {t.cycle12}
            <span className="ml-1.5 px-1.5 py-0.5 text-[10px] uppercase font-extrabold bg-amber-400 text-slate-950 rounded-full">
              HOT
            </span>
          </VIDCNativeButton>
          <VIDCNativeButton
            type="button"
            onClick={() => setBillingCycle('24')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              billingCycle === '24'
                ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {t.cycle24}
          </VIDCNativeButton>
        </div>

        {/* Pricing Cards Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {packages.map((pkg) => {
            const isRecommended = pkg.recommended;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 bg-white border ${
                  isRecommended
                    ? 'border-[var(--vidc-color-brand-red)] shadow-xl ring-2 ring-[var(--vidc-color-brand-red)]/20 -translate-y-1'
                    : 'border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Header Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-[var(--vidc-color-brand-red)] text-white shadow-md">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-extrabold tracking-wider text-slate-500 uppercase block mb-1">
                      {pkg.subtitle}
                    </span>
                    <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price Section */}
                  <div className="py-3 border-y border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight">
                        {formatPrice(pkg.priceMonthly)}
                      </span>
                      {pkg.priceMonthly > 0 && (
                        <span className="text-xs text-slate-500 font-medium">
                          {t.perMonth}
                        </span>
                      )}
                    </div>
                    {billingCycle !== '1' && pkg.priceMonthly > 0 && (
                      <p className="text-[11px] text-emerald-600 font-bold mt-1">
                        ✓ Đã áp dụng chiết khấu {billingCycle === '12' ? '10%' : '20%'}
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-semibold text-[var(--vidc-legacy-hex-222225)]">{pkg.users}</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pkg.emailQuota}</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pkg.driveStorage}</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pkg.webHosting}</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pkg.officeSuite}</span>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pkg.adminIAM}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult(`Đăng ký gói ${pkg.name} (${billingCycle} tháng)`)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 min-h-[44px] ${
                      isRecommended
                        ? 'bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white shadow-md'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{pkg.priceMonthly > 0 ? t.registerNow : t.contactSales}</span>
                    <ArrowRight className="w-4 h-4" />
                  </VIDCNativeButton>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Tailored Enterprise Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <ShieldCheck className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
              <h4 className="font-extrabold text-base sm:text-lg text-[var(--vidc-legacy-hex-222225)]">
                {t.customTitle}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              {t.customDesc}
            </p>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={() => onOpenConsult('Tư vấn giải pháp Viettel Workspace Enterprise tùy chỉnh')}
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-bold text-xs sm:text-sm transition-all whitespace-nowrap shadow-md shrink-0 flex items-center gap-2 min-h-[44px]"
          >
            <span>{t.customBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </VIDCNativeButton>
        </div>

        {/* VAT Footnote */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 italic">
            {t.vatFootnote}
          </p>
        </div>

      </div>
    </section>
  );
};
