import React, { useState } from 'react';
import { Check, Sliders } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface VAPMPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const VAPMPricing: React.FC<VAPMPricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  // Billing Mode: 'monthly' or 'yearly' (Saving Plan)
  const [billingMode, setBillingMode] = useState<'monthly' | 'yearly'>('yearly');
  // Environment filter: 'cloud' | 'onprem' | 'k8s'
  const [environment, setEnvironment] = useState<'cloud' | 'onprem' | 'k8s'>('cloud');

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos 
      ? 'Choose the optimal vAPM monitoring plan for your business' 
      : 'Lựa chọn gói giám sát vAPM tối ưu cho doanh nghiệp',
    desc: isLaos
      ? 'Enterprise-grade application performance observability with transparent and flexible pricing'
      : 'Hạ tầng giám sát hiệu năng chuẩn quốc tế với chi phí minh bạch & linh hoạt',
    billingModel: isLaos ? 'BILLING MODEL:' : 'MÔ HÌNH THANH TOÁN:',
    environmentLabel: isLaos ? 'DEPLOYMENT ENVIRONMENT:' : 'MÔI TRƯỜNG TRIỂN KHAI:',
    cloudLabel: isLaos ? 'Cloud Server / VPC' : 'Cloud Server / VPC',
    onpremLabel: isLaos ? 'On-Premises Data Center' : 'On-Premises Data Center',
    k8sLabel: isLaos ? 'Kubernetes Cluster' : 'Kubernetes Cluster',
    config: isLaos ? 'CONFIGURATION' : 'CẤU HÌNH',
    detailDesc: isLaos ? 'Detailed configuration includes:' : 'Cấu hình chi tiết bao gồm:',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    freeTrialBtn: isLaos ? 'FREE TRIAL' : 'DÙNG THỬ MIỄN PHÍ',
    consultBtn: isLaos ? 'REQUEST CONSULTATION' : 'NHẬN TƯ VẤN',
    customTitle: isLaos 
      ? 'Custom Enterprise Solution — Tailored to your architecture' 
      : 'Giải pháp Enterprise May Đo — Thiết kế riêng theo kiến trúc',
    customDesc: isLaos 
      ? 'Need deep monitoring for complex banking, multi-cloud, or hundreds of microservices nodes? We provide on-demand custom architecture, dedicated collector clusters, and guaranteed high-touch SLA.'
      : 'Cần giải pháp giám sát cho hệ thống ngân hàng, viễn thông, thương mại điện tử lớn với hàng trăm microservice nodes? Chúng tôi cung cấp giải pháp may đo riêng, cụm Telemetry độc lập và cam kết SLA chuyên sâu.',
    customBtn: isLaos ? 'REQUEST CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatFootnote: isLaos 
      ? '* All service pricing excludes taxes. You can adjust the number of monitored nodes at any time.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể tùy chỉnh quy mô node giám sát bất cứ lúc nào trong quá trình vận hành.',
  };

  const packages = [
    {
      id: 'vapm-starter',
      name: isLaos ? 'vAPM Starter' : 'vAPM Starter',
      subtitle: isLaos ? 'SMALL APP / DEV' : 'ỨNG DỤNG NHỎ / DEV',
      nodes: isLaos ? '1 – 5 Compute Nodes' : '1 – 5 Compute Nodes',
      featuresList: [
        isLaos ? 'Telemetry Ingestion (Metrics & Traces)' : 'Thu thập Telemetry (Metrics & Traces)',
        isLaos ? 'Real-Time Performance Dashboard' : 'Dashboard hiệu năng Real-time',
        isLaos ? 'Automated Service Dependency Map' : 'Bản đồ phụ thuộc dịch vụ tự động',
        isLaos ? 'Basic Email / Webhook Alerts' : 'Cảnh báo tự động Email / Webhook',
        isLaos ? '15 Days Data Retention' : 'Lưu trữ dữ liệu Telemetry 15 ngày',
        isLaos ? 'Standard Support (8/5)' : 'Hỗ trợ kỹ thuật giờ hành chính (8/5)',
      ],
      priceMonthlyVND: '1.250.000',
      priceYearlyVND: '1.000.000',
      priceMonthlyUSD: '50',
      priceYearlyUSD: '40',
      badge: null,
      recommended: false,
      secondaryBtnText: t.freeTrialBtn,
    },
    {
      id: 'vapm-business',
      name: isLaos ? 'vAPM Business' : 'vAPM Business',
      subtitle: isLaos ? 'MOST POPULAR' : 'PHỔ BIẾN NHẤT',
      nodes: isLaos ? '6 – 20 Compute Nodes' : '6 – 20 Compute Nodes',
      featuresList: [
        isLaos ? 'Full Distributed Transaction Tracing' : 'Trace phân tán giao dịch toàn diện',
        isLaos ? 'Deep-Dive Code & Method Profiling' : 'Đào sâu mã nguồn & Slow Method profiling',
        isLaos ? 'Slow Database & SQL Profiling' : 'Phân tích câu lệnh SQL & Database chậm',
        isLaos ? 'Real User Browser Monitoring (RUM)' : 'Giám sát trải nghiệm người dùng (RUM)',
        isLaos ? '30 Days Data Retention' : 'Lưu trữ dữ liệu Telemetry 30 ngày',
        isLaos ? '24/7/365 Priority Support' : 'Hỗ trợ kỹ thuật ưu tiên 24/7/365',
      ],
      priceMonthlyVND: '3.750.000',
      priceYearlyVND: '3.000.000',
      priceMonthlyUSD: '150',
      priceYearlyUSD: '120',
      badge: isLaos ? '★ BEST SELLER' : '★ BÁN CHẠY NHẤT',
      recommended: true,
      secondaryBtnText: t.freeTrialBtn,
    },
    {
      id: 'vapm-enterprise',
      name: isLaos ? 'vAPM Enterprise' : 'vAPM Enterprise',
      subtitle: isLaos ? 'CORE SYSTEM & K8S' : 'HỆ THỐNG CỐT LÕI & K8S',
      nodes: isLaos ? '21 – 50 Compute Nodes' : '21 – 50 Compute Nodes',
      featuresList: [
        isLaos ? 'Kubernetes & Container Auto-Injection' : 'Tự động tích hợp cụm Kubernetes/Container',
        isLaos ? 'AI Anomaly Detection & Baselining' : 'Cảnh báo bất thường bằng AI & Baselining',
        isLaos ? 'Synthetic & Mobile APM Integration' : 'Giám sát mô phỏng & Mobile App APM',
        isLaos ? 'Root-Cause Impact Analysis Report' : 'Báo cáo nguyên nhân gốc rễ định kỳ',
        isLaos ? '60 – 90 Days Data Retention' : 'Lưu trữ dữ liệu Telemetry 60 - 90 ngày',
        isLaos ? 'Dedicated 24/7 Managed Engineer' : 'Kỹ sư chuyên trách vận hành ủy thác 24/7',
      ],
      priceMonthlyVND: '8.750.000',
      priceYearlyVND: '7.000.000',
      priceMonthlyUSD: '350',
      priceYearlyUSD: '280',
      badge: null,
      recommended: false,
      secondaryBtnText: t.consultBtn,
    },
    {
      id: 'vapm-custom',
      name: isLaos ? 'vAPM Tailored' : 'vAPM May Đo',
      subtitle: isLaos ? 'UNLIMITED / DEDICATED' : 'QUY MÔ LỚN / ĐỘC LẬP',
      nodes: isLaos ? '> 50 Nodes / Multi-Cloud' : '> 50 Nodes / Multi-Cloud',
      featuresList: [
        isLaos ? 'Unlimited Monitored Nodes & Pods' : 'Không giới hạn số lượng Node & Pods',
        isLaos ? 'Dedicated Telemetry Storage Cluster' : 'Hạ tầng lưu trữ Telemetry riêng biệt',
        isLaos ? 'Custom Retention up to 365 Days' : 'Lưu trữ tùy chọn lên tới 365 ngày',
        isLaos ? 'Private Cloud / On-Prem Collector' : 'Triển khai Collector tại On-Premises/VPC',
        isLaos ? 'Custom SLA 99.99% Commitment' : 'Cam kết SLA 99.99% theo hợp đồng',
        isLaos ? 'Direct Solution Architect Advisory' : 'Chuyên gia Kiến trúc giải pháp đồng hành',
      ],
      priceMonthlyVND: 'Liên hệ',
      priceYearlyVND: 'Liên hệ',
      priceMonthlyUSD: 'Contact',
      priceYearlyUSD: 'Contact',
      badge: null,
      recommended: false,
      secondaryBtnText: t.consultBtn,
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

        {/* Top Control Bar: Billing Model & Deployment Environment Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-12 text-xs">
          
          {/* Mô hình thanh toán */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.billingModel}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingMode('yearly')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  billingMode === 'yearly'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Saving Plan (-20%)
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingMode('monthly')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  billingMode === 'monthly'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Pay-as-you-go
              </VIDCNativeButton>
            </div>
          </div>

          {/* Môi trường triển khai */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.environmentLabel}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setEnvironment('cloud')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  environment === 'cloud'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.cloudLabel}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setEnvironment('onprem')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  environment === 'onprem'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.onpremLabel}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setEnvironment('k8s')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  environment === 'k8s'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.k8sLabel}
              </VIDCNativeButton>
            </div>
          </div>

        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 items-stretch">
          {packages.map((pkg) => {
            const isRecommended = pkg.recommended;
            const isCustom = pkg.id === 'vapm-custom';
            
            let displayPrice = '';
            if (isLaos) {
              displayPrice = billingMode === 'yearly' ? pkg.priceYearlyUSD : pkg.priceMonthlyUSD;
            } else {
              displayPrice = billingMode === 'yearly' ? pkg.priceYearlyVND : pkg.priceMonthlyVND;
            }

            let displayUnit = '';
            if (!isCustom) {
              if (isLaos) {
                displayUnit = billingMode === 'yearly' ? 'USD/MO (YEARLY)' : 'USD/MO';
              } else {
                displayUnit = billingMode === 'yearly' ? 'Đ/THÁNG (NĂM)' : 'Đ/THÁNG';
              }
            }

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-5 sm:p-6 bg-white border border-slate-200/90 flex flex-col justify-between transition-all duration-300 ${
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
                        {isLaos && !isCustom ? `$${displayPrice}` : displayPrice}
                      </span>
                      {displayUnit && (
                        <span className="text-[11px] font-extrabold text-slate-500 uppercase">
                          {displayUnit}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Node Scale */}
                  <div className="mb-3 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/60">
                    <span className="text-xs font-bold text-slate-800">
                      {pkg.nodes}
                    </span>
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
                    {pkg.featuresList.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                        <span className="text-slate-800 font-medium leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom CTA Buttons */}
                <div className="space-y-2 pt-2">
                  <VIDCAnchor
                    href="https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-sm uppercase tracking-wider text-center block cursor-pointer"
                  >
                    {t.registerNow}
                  </VIDCAnchor>
                  <VIDCNativeButton
                    type="button"
                    onClick={onOpenConsult}
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-extrabold text-[11px] transition-all uppercase tracking-wider text-center block cursor-pointer"
                  >
                    {pkg.secondaryBtnText}
                  </VIDCNativeButton>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Configuration Dark Banner */}
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
