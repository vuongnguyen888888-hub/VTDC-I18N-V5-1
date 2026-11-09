import React, { useState } from 'react';
import { Tag, Check, Sliders, ArrowRight, ShieldCheck } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface InterconnectionPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (notes?: string) => void;
}

export const InterconnectionPricing: React.FC<InterconnectionPricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedScope, setSelectedScope] = useState<string>('all');

  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos 
      ? 'Choose the optimal connectivity solution for your business' 
      : 'Lựa chọn cấu hình kết nối tối ưu cho doanh nghiệp',
    desc: isLaos 
      ? 'Enterprise-grade dedicated leased lines and carrier Internet with transparent & flexible costs'
      : 'Hạ tầng kênh truyền & Internet chuyên dụng với chi phí minh bạch & linh hoạt',
    filterType: isLaos ? 'CONNECTION MODEL:' : 'MÔ HÌNH KẾT NỐI:',
    filterScope: isLaos ? 'DEPLOYMENT SCOPE:' : 'PHẠM VI TRIỂN KHAI:',
    config: isLaos ? 'SPECIFICATION' : 'THÔNG SỐ KỸ THUẬT',
    detailDesc: isLaos ? 'Service package includes:' : 'Gói dịch vụ bao gồm:',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    consultBtn: isLaos ? 'REQUEST QUOTE' : 'NHẬN TƯ VẤN',
    customTitle: isLaos 
      ? 'Custom Connectivity — Tailored to your architecture' 
      : 'Cấu hình tùy chỉnh — Thiết kế riêng theo nhu cầu',
    customDesc: isLaos 
      ? 'Need a higher bandwidth or bespoke multi-site route? We support optical route surveys up to 10 Gbps – 100 Gbps, diverse redundant paths with the highest SLA commitment.'
      : 'Cần giải pháp lớn hơn? Chúng tôi hỗ trợ khảo sát và may đo tuyến cáp quang riêng biệt lên tới 10 Gbps – 100 Gbps, đa hướng dự phòng với cam kết SLA cao nhất.',
    customBtn: isLaos ? 'REQUEST CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatFootnote: isLaos 
      ? '* All service pricing excludes taxes. You can request capacity and routing expansion at any time.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể yêu cầu mở rộng băng thông và tuyến cáp bất cứ lúc nào.',
  };

  const typeFilters = [
    { id: 'all', label: isLaos ? 'All Solutions' : 'Tất cả giải pháp' },
    { id: 'dark-fibre', label: 'Dark-Fibre' },
    { id: 'ip-transit', label: 'IP Transit' },
    { id: 'iplc', label: 'IPLC' },
    { id: 'wan-vpn', label: 'WAN / VPN' },
    { id: 'fttx', label: 'FTTx' },
  ];

  const scopeFilters = [
    { id: 'all', label: isLaos ? 'All Scopes' : 'Tất cả phạm vi' },
    { id: 'intra-dc', label: isLaos ? 'Intra-DC' : 'Nội bộ TTDL' },
    { id: 'domestic', label: isLaos ? 'Domestic' : 'Trong nước' },
    { id: 'international', label: isLaos ? 'International' : 'Quốc tế' },
  ];

  const packages = [
    {
      id: 'pkg-dark-fibre',
      name: isLaos ? 'Dark-Fibre' : 'Gói Dark-Fibre',
      subtitle: 'OPTICAL FIBER (UNLIT)',
      typeKey: 'dark-fibre',
      scopeKey: ['intra-dc', 'domestic'],
      bandwidth: '1 Gbps – 10 Gbps+',
      throughput: isLaos ? 'Dedicated Physical Core' : 'Lõi quang vật lý riêng biệt',
      latency: isLaos ? 'Near 0ms Ultra-low Latency' : 'Độ trễ tiệm cận 0ms',
      sla: 'SLA 99.95%',
      security: isLaos ? 'Immune to EMI Interference' : 'Miễn nhiễm nhiễu điện từ',
      priceMonthly: isLaos ? 'Contact' : 'Liên hệ khảo sát',
      badge: null,
      recommended: false,
    },
    {
      id: 'pkg-ip-transit',
      name: 'IP Transit',
      subtitle: isLaos ? 'MOST POPULAR' : 'PHỔ BIẾN NHẤT',
      typeKey: 'ip-transit',
      scopeKey: ['domestic', 'international'],
      bandwidth: isLaos ? 'Unlimited Burstable' : 'Băng thông không giới hạn',
      throughput: isLaos ? 'Tier-1 BGP Direct Peering' : 'Định tuyến BGP Tier-1 trực tiếp',
      latency: isLaos ? 'Optimized Routing Path' : 'Tối ưu hóa định tuyến quốc tế',
      sla: 'SLA 99.99%',
      security: isLaos ? 'Carrier-grade Gateways' : 'Cổng Internet cấp nhà mạng',
      priceMonthly: isLaos ? 'Tier-based' : 'Theo lưu lượng cam kết',
      badge: isLaos ? '★ BEST SELLER' : '★ BÁN CHẠY',
      recommended: true,
    },
    {
      id: 'pkg-iplc',
      name: isLaos ? 'IPLC Global' : 'Gói IPLC',
      subtitle: 'INTERNATIONAL LEASED LINE',
      typeKey: 'iplc',
      scopeKey: ['international'],
      bandwidth: isLaos ? 'Custom Committed BW' : 'Băng thông cam kết 100%',
      throughput: isLaos ? 'Submarine Fiber Cables' : 'Đa tuyến cáp quang biển',
      latency: isLaos ? 'Deterministic Global Latency' : 'Độ trễ quốc tế ổn định',
      sla: 'SLA 99.95%',
      security: isLaos ? 'End-to-End Cryptography' : 'Bảo mật điểm-điểm độc quyền',
      priceMonthly: isLaos ? 'Tailored' : 'Thiết kế theo tuyến',
      badge: null,
      recommended: false,
    },
    {
      id: 'pkg-wan-vpn',
      name: isLaos ? 'WAN / VPN' : 'Gói Mạng WAN / VPN',
      subtitle: 'ENTERPRISE PRIVATE NETWORK',
      typeKey: 'wan-vpn',
      scopeKey: ['domestic', 'international'],
      bandwidth: isLaos ? 'Dedicated Multi-Site' : 'Băng thông riêng đa điểm',
      throughput: isLaos ? 'MPLS / SD-WAN Architecture' : 'Kiến trúc MPLS / SD-WAN',
      latency: isLaos ? 'QoS for Voice & Data' : 'Ưu tiên QoS thoại & dữ liệu',
      sla: 'SLA 99.95%',
      security: isLaos ? 'Encrypted Site-to-Site' : 'Mã hóa kết nối chi nhánh',
      priceMonthly: isLaos ? 'Custom' : 'Báo giá theo điểm',
      badge: null,
      recommended: false,
    },
    {
      id: 'pkg-fttx',
      name: isLaos ? 'FTTx Dedicated' : 'Gói FTTx',
      subtitle: 'HIGH-SPEED FIBER ACCESS',
      typeKey: 'fttx',
      scopeKey: ['domestic'],
      bandwidth: isLaos ? '100 Mbps – 1 Gbps' : '100 Mbps – 1 Gbps',
      throughput: isLaos ? 'Symmetric Fiber Optics' : 'Cáp quang đối xứng cao',
      latency: isLaos ? 'Standard Local Peering' : 'Kết nối mạng nội hạt tối ưu',
      sla: 'SLA 99.9%',
      security: isLaos ? 'Direct Access Node' : 'Điểm đấu nối trực tiếp',
      priceMonthly: isLaos ? 'From $35/mo' : 'Từ 800.000 đ/tháng',
      badge: null,
      recommended: false,
    },
  ];

  const filteredPackages = packages.filter((pkg) => {
    const matchType = selectedType === 'all' || pkg.typeKey === selectedType;
    const matchScope = selectedScope === 'all' || pkg.scopeKey.includes(selectedScope);
    return matchType && matchScope;
  });

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered like CloudServerEstimator) */}
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

        {/* Filter Controls Row (Centered Buttons matching CloudServerEstimator) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10">
          {/* Connection Model */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mr-1">
              {t.filterType}
            </span>
            {typeFilters.map((tf) => (
              <VIDCNativeButton
                key={tf.id}
                type="button"
                onClick={() => setSelectedType(tf.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all min-h-[38px] ${
                  selectedType === tf.id
                    ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {tf.label}
              </VIDCNativeButton>
            ))}
          </div>

          {/* Scope Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mr-1">
              {t.filterScope}
            </span>
            {scopeFilters.map((sf) => (
              <VIDCNativeButton
                key={sf.id}
                type="button"
                onClick={() => setSelectedScope(sf.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all min-h-[38px] ${
                  selectedScope === sf.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {sf.label}
              </VIDCNativeButton>
            ))}
          </div>
        </div>

        {/* 5 Package Cards Grid (Exact CloudServer 5-Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 ${
                pkg.recommended
                  ? 'bg-white border-2 border-[var(--vidc-color-brand-red)] shadow-xl lg:-translate-y-2'
                  : 'bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              {/* Recommended Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[var(--vidc-color-brand-red)] text-white text-[11px] font-extrabold px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Card Header */}
              <div className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-400 block mb-1">
                    {pkg.subtitle}
                  </span>
                  <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] leading-tight">
                    {pkg.name}
                  </h3>
                </div>

                {/* Price Box */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                  <span className="text-xs text-slate-500 block mb-0.5">Mức đầu tư dự kiến</span>
                  <span className="text-base font-extrabold text-[var(--vidc-color-brand-red)] leading-tight block">
                    {pkg.priceMonthly}
                  </span>
                </div>

                {/* Specs List */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {t.detailDesc}
                  </span>
                  
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-900">{pkg.bandwidth}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pkg.throughput}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pkg.latency}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-800">{pkg.sla}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pkg.security}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-slate-100 space-y-2">
                <VIDCNativeButton
                  type="button"
                  onClick={() => onOpenConsult(`Đăng ký khảo sát & tư vấn ${pkg.name}`)}
                  className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs min-h-[40px] flex items-center justify-center gap-1.5 ${
                    pkg.recommended
                      ? 'bg-[var(--vidc-color-brand-red)] text-white hover:bg-[var(--vidc-legacy-hex-d4002d)]'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  <span>{t.registerNow}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </VIDCNativeButton>

                <VIDCNativeButton
                  type="button"
                  onClick={() => onOpenConsult(`Yêu cầu báo giá chi tiết ${pkg.name}`)}
                  className="w-full py-2 rounded-lg text-xs font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200/80"
                >
                  {t.consultBtn}
                </VIDCNativeButton>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tailored Solution Banner (Exact CloudServerEstimator Box) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0">
              <Sliders className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                {t.customTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                {t.customDesc}
              </p>
            </div>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={() => onOpenConsult('Tư vấn thiết kế kênh truyền riêng may đo theo yêu cầu')}
            className="w-full md:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d4002d)] shadow-md transition-all shrink-0 active:scale-95"
          >
            <span>{t.customBtn}</span>
          </VIDCNativeButton>
        </div>

        {/* Footnote */}
        <p className="text-xs text-slate-500 text-center italic">
          {t.vatFootnote}
        </p>

      </div>
    </section>
  );
};
