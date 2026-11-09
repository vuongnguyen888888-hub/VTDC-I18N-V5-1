import React, { useState } from 'react';
import { Tag, Check, Sliders } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VoiceBrandnamePricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const VoiceBrandnamePricing: React.FC<VoiceBrandnamePricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  // Billing Mode State: 'prepaid' (Saving Plan) or 'postpaid' (Pay-as-you-go)
  const [billingMode, setBillingMode] = useState<'prepaid' | 'postpaid'>('prepaid');
  // Network Scope State
  const [networkScope, setNetworkScope] = useState<'all' | 'viettel' | 'multibrand'>('all');

  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos ? 'Choose the optimal package for your business' : 'Lựa chọn gói cước tối ưu cho doanh nghiệp',
    desc: isLaos 
      ? 'Enterprise Brand Identity Voice infrastructure with transparent & flexible costs'
      : 'Hạ tầng viễn thông định danh thương hiệu chính hãng với chi phí minh bạch & linh hoạt',
    billingModel: isLaos ? 'BILLING MODEL:' : 'MÔ HÌNH THANH TOÁN:',
    connectionScope: isLaos ? 'NETWORK SCOPE:' : 'PHẠM VI NHÀ MẠNG:',
    scopeAll: isLaos ? 'All Carriers' : 'Toàn mạng quốc gia',
    scopeViettel: isLaos ? 'On-Net Viettel' : 'Nội mạng Viettel',
    scopeMulti: isLaos ? 'Multi-Brand' : 'Đa thương hiệu',
    config: isLaos ? 'CONFIGURATION' : 'CẤU HÌNH & QUYỀN LỢI',
    detailDesc: isLaos ? 'Package details include:' : 'Chi tiết gói cước bao gồm:',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    consultBtn: isLaos ? 'REQUEST CONSULTATION' : 'NHẬN TƯ VẤN',
    customTitle: isLaos ? 'Custom Configuration — Tailored for Large Enterprise Telesales' : 'Cấu hình tùy chỉnh — Thiết kế riêng cho Telesales & Contact Center lớn',
    customDesc: isLaos 
      ? 'Need high-capacity SIP Trunks, dozens of brand identities, multi-branch authorization, or custom CRM/ERP integration? Our dedicated enterprise team is ready to assist.'
      : 'Cần giải pháp lớn hơn? Chúng tôi hỗ trợ may đo cấu hình riêng biệt với hàng trăm luồng gọi đồng thời, không giới hạn tên định danh, kết nối SIP Trunking kênh riêng và cam kết SLA cao nhất.',
    customBtn: isLaos ? 'REQUEST CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatFootnote: isLaos 
      ? '* All service pricing excludes VAT (10%). Viettel IDC assists in full legal declaration with the Authority of Information Security (MIC).'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Hỗ trợ hoàn tất thủ tục cấp giấy chứng nhận tên định danh Cục An toàn thông tin.',
  };

  // 5 Distinct Pricing Packages structured exactly like CloudServerEstimator
  const packages = [
    {
      id: 'vb1',
      name: isLaos ? 'Brand Starter' : 'Gói Brand Starter',
      subtitle: 'HKD & STARTUP',
      brandCount: isLaos ? '01 Brandname Identity' : '01 Tên định danh (Brandname)',
      carrier: isLaos ? 'All Vietnamese Carriers' : 'Đồng bộ Viettel, Mobi, VNPT',
      trunking: isLaos ? 'Standard SIP Trunking' : 'Cổng kết nối SIP Trunk tiêu chuẩn',
      routing: isLaos ? 'Basic Call Routing' : 'Định tuyến cuộc gọi cơ bản',
      recording: isLaos ? 'Call Recording (30 days)' : 'Ghi âm cuộc gọi 30 ngày',
      support: isLaos ? 'MIC Certification Filing' : 'Hỗ trợ trọn gói hồ sơ Cục ATTT',
      pricePrepaid: isLaos ? '29' : '650.000',
      pricePostpaid: isLaos ? '35' : '780.000',
      badge: null,
      recommended: false,
    },
    {
      id: 'vb2',
      name: isLaos ? 'Brand Growth' : 'Gói Brand Growth',
      subtitle: 'SME TELESALES',
      brandCount: isLaos ? '02 - 03 Brandnames' : '02 - 03 Tên định danh',
      carrier: isLaos ? 'All Vietnamese Carriers' : 'Đồng bộ toàn mạng quốc gia',
      trunking: isLaos ? 'High-Speed SIP Trunking' : 'SIP Trunking tốc độ cao',
      routing: isLaos ? 'Smart MNP Routing' : 'Định tuyến MNP tối ưu cước',
      recording: isLaos ? 'Call Recording (60 days)' : 'Ghi âm cuộc gọi 60 ngày',
      support: isLaos ? 'Real-Time Analytics' : 'Báo cáo thống kê Real-time',
      pricePrepaid: isLaos ? '49' : '1.150.000',
      pricePostpaid: isLaos ? '59' : '1.380.000',
      badge: null,
      recommended: false,
    },
    {
      id: 'vb3',
      name: isLaos ? 'Brand Business' : 'Gói Brand Business',
      subtitle: isLaos ? 'MOST POPULAR' : 'PHỔ BIẾN NHẤT',
      brandCount: isLaos ? '03 - 05 Brandnames' : '03 - 05 Tên định danh',
      carrier: isLaos ? 'Full Carrier Sync' : 'Đồng bộ toàn mạng 100%',
      trunking: isLaos ? 'IP PBX / Cloud PBX / CRM' : 'Tích hợp IP PBX, Cloud PBX & CRM',
      routing: isLaos ? 'Auto MNP + Department Routing' : 'Định tuyến MNP & Phân quyền nhóm',
      recording: isLaos ? 'Unlimited Call Recording' : 'Ghi âm không giới hạn dung lượng',
      support: isLaos ? '24/7 Priority Support' : 'Hỗ trợ kỹ thuật 24/7 chuyên trách',
      pricePrepaid: isLaos ? '79' : '1.850.000',
      pricePostpaid: isLaos ? '95' : '2.200.000',
      badge: isLaos ? '★ BEST SELLER' : '★ BÁN CHẠY',
      recommended: true,
    },
    {
      id: 'vb4',
      name: isLaos ? 'Brand Enterprise' : 'Gói Brand Enterprise',
      subtitle: 'MULTI-BRANCH CORP',
      brandCount: isLaos ? '05 - 10 Brandnames' : '05 - 10 Tên định danh',
      carrier: isLaos ? 'Full Carrier Sync + VIP Route' : 'Đồng bộ toàn mạng + Luồng VIP',
      trunking: isLaos ? 'Dedicated SIP Trunking' : 'SIP Trunking kênh riêng cam kết',
      routing: isLaos ? 'Multi-Tier RBAC Management' : 'Quản trị phân quyền sâu đa cấp',
      recording: isLaos ? 'Encrypted Cloud Storage' : 'Lưu trữ ghi âm mã hóa điện toán mây',
      support: isLaos ? 'Dedicated Account Manager' : 'Chuyên viên kỹ thuật VIP On-site',
      pricePrepaid: isLaos ? '139' : '3.250.000',
      pricePostpaid: isLaos ? '165' : '3.890.000',
      badge: null,
      recommended: false,
    },
    {
      id: 'vb5',
      name: isLaos ? 'Brand Ultimate' : 'Gói Brand Ultimate',
      subtitle: 'LARGE CONTACT CENTER',
      brandCount: isLaos ? 'Unlimited Brandnames' : 'Không giới hạn Brandname & Hotline',
      carrier: isLaos ? 'Dedicated Carrier Gateway' : 'Cổng kết nối Gateway riêng biệt',
      trunking: isLaos ? 'Direct Core IMS Interconnect' : 'Kết nối trực tiếp mạng lõi IMS',
      routing: isLaos ? 'Geo-Redundant DRaaS' : 'Dự phòng thảm họa DRaaS 2 miền',
      recording: isLaos ? 'AI Voice & Speech Analytics' : 'Tích hợp AI Voice & Speech Analytics',
      support: isLaos ? '24/7 VIP SLA Commitment' : 'Cam kết SLA 99.99% & Hotline VIP',
      pricePrepaid: isLaos ? '219' : '5.100.000',
      pricePostpaid: isLaos ? '260' : '6.120.000',
      badge: null,
      recommended: false,
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

        {/* Top Control Bar: Billing Model & Scope Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-12 text-xs">
          
          {/* Mô hình thanh toán */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.billingModel}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingMode('prepaid')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  billingMode === 'prepaid'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isLaos ? 'Saving Plan (-15%)' : 'Trả trước (Tiết kiệm 15%)'}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingMode('postpaid')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  billingMode === 'postpaid'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {isLaos ? 'Pay-as-you-go' : 'Trả sau (Linh hoạt)'}
              </VIDCNativeButton>
            </div>
          </div>

          {/* Phạm vi mạng */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.connectionScope}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setNetworkScope('all')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  networkScope === 'all'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.scopeAll}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setNetworkScope('viettel')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  networkScope === 'viettel'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.scopeViettel}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setNetworkScope('multibrand')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  networkScope === 'multibrand'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.scopeMulti}
              </VIDCNativeButton>
            </div>
          </div>

        </div>

        {/* 5 Pricing Cards Grid matching CloudServerEstimator */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12 items-stretch">
          {packages.map((pkg) => {
            const isRecommended = pkg.recommended;
            const displayPrice = billingMode === 'prepaid' ? pkg.pricePrepaid : pkg.pricePostpaid;
            
            let displayUnit = '';
            if (isLaos) {
              displayUnit = billingMode === 'prepaid' ? 'USD/MO' : 'USD/MO';
            } else {
              displayUnit = billingMode === 'prepaid' ? 'Đ/THÁNG' : 'Đ/THÁNG';
            }

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-5 bg-white border border-slate-200/90 flex flex-col justify-between transition-all duration-300 ${
                  isRecommended
                    ? 'shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-300'
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
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="my-3 pb-3 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">
                        {isLaos ? `$${displayPrice}` : displayPrice}
                      </span>
                      <span className="text-[11px] font-extrabold text-slate-500 uppercase">
                        {displayUnit}
                      </span>
                    </div>
                  </div>

                  {/* Config Header */}
                  <div className="mt-4 mb-3">
                    <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">
                      {t.config}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {t.detailDesc}
                    </p>
                  </div>

                  {/* Specs list with red checkmarks */}
                  <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-bold text-slate-900">{pkg.brandCount}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-bold text-slate-900">{pkg.carrier}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-bold text-slate-900">{pkg.trunking}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="text-slate-700">{pkg.routing}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="text-slate-700">{pkg.recording}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="text-slate-700">{pkg.support}</span>
                    </li>
                  </ul>
                </div>

                {/* Card Bottom CTA Buttons */}
                <div className="space-y-2 pt-2">
                  <VIDCNativeButton
                    type="button"
                    onClick={onOpenConsult}
                    className="w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-sm uppercase tracking-wider text-center block cursor-pointer active:scale-95"
                  >
                    {t.registerNow}
                  </VIDCNativeButton>
                  <VIDCNativeButton
                    type="button"
                    onClick={onOpenConsult}
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-extrabold text-[11px] transition-all uppercase tracking-wider text-center block cursor-pointer active:scale-95"
                  >
                    {t.consultBtn}
                  </VIDCNativeButton>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Configuration Dark Banner matching CloudServerEstimator */}
        <div className="relative rounded-2xl bg-[var(--vidc-legacy-hex-090d16)] text-white p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden">
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
              onClick={onOpenConsult}
              className="px-6 py-3 rounded-xl bg-black hover:bg-slate-900 active:bg-slate-950 text-white border border-slate-700 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 whitespace-nowrap min-h-[44px] cursor-pointer"
            >
              {t.customBtn}
            </VIDCNativeButton>
          </div>
        </div>

        {/* Price Footnote */}
        <p className="text-center text-[11px] text-slate-400 italic mt-4">
          {t.vatFootnote}
        </p>

      </div>
    </section>
  );
};
