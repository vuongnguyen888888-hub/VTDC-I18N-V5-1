import React, { useState } from 'react';
import { 
  Network, 
  Layers, 
  Smartphone, 
  Check, 
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  Zap, 
  Star,
  Sliders,
  HelpCircle,
  Building2,
  Store,
  Compass
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface SdWanPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
}

export type ArchitectureType = 'all' | 'hybrid' | 'internet' | 'mobile';
export type BillingCycle = '1m' | '12m' | '24m' | '36m';

export const SdWanPricing: React.FC<SdWanPricingProps> = ({ currentMarket, onOpenConsult }) => {
  const [selectedArch, setSelectedArch] = useState<ArchitectureType>('all');
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('12m');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'TRANSPARENT PRICING & PACKAGES' : 'BẢNG GIÁ DỊCH VỤ & GÓI CƯỚC',
    headline: isLaos
      ? 'Viettel SD-WAN Pricing Plans & Deployment Options'
      : 'Bảng Giá Dịch Vụ Viettel SD-WAN Chuẩn Hóa',
    subtitle: isLaos
      ? 'Flexible packages customized to your branch network topology and cloud interconnection demands.'
      : 'Đa dạng phương án triển khai linh hoạt theo quy mô chi nhánh và nhu cầu kết nối ứng dụng đám mây của doanh nghiệp.',
    archFilterLabel: isLaos ? 'Filter by Deployment Architecture:' : 'Lọc theo mô hình triển khai:',
    cycleLabel: isLaos ? 'Billing Term:' : 'Thời hạn thanh toán:',
    cycle1m: isLaos ? '1 Month' : '1 Tháng',
    cycle12m: isLaos ? '12 Months (-10%)' : '12 Tháng (-10%)',
    cycle24m: isLaos ? '24 Months (-15%)' : '24 Tháng (-15%)',
    cycle36m: isLaos ? '36 Months (-20%)' : '36 Tháng (-20%)',
    recommendedBadge: isLaos ? '★ MOST POPULAR' : '★ PHỔ BIẾN NHẤT',
    enterpriseBadge: isLaos ? '★ ENTERPRISE GRADE' : '★ DOANH NGHIỆP',
    monthUnit: isLaos ? '/ site / month' : '/ điểm / tháng',
    contactPrice: isLaos ? 'Custom Quote' : 'Liên hệ báo giá',
    btnRegister: isLaos ? 'Deploy Now' : 'Đăng Ký Ngay',
    btnConsult: isLaos ? 'Request Solution Quote' : 'Nhận Báo Giá Chi Tiết',
    comparisonTitle: isLaos
      ? 'SD-WAN Deployment Architecture Comparison Matrix'
      : 'Bảng So Sánh Chi Tiết Kiến Trúc Triển Khai Viettel SD-WAN',
    colModel: isLaos ? 'Deployment Model' : 'Mô Hình Triển Khai',
    colLinks: isLaos ? 'Transport Link Components' : 'Thành Phần Kênh Truyền',
    colTarget: isLaos ? 'Target Applications & Workloads' : 'Đối Tượng Phù Hợp',
    colRouting: isLaos ? 'Routing & Failover Mechanism' : 'Cơ Chế Định Tuyến & Dự Phòng',
    ctaBoxText: isLaos
      ? 'Need a customized multi-branch topology survey or private cloud interconnect calculation?'
      : 'Cần khảo sát topology mạng đa chi nhánh hoặc thiết kế kết nối riêng cho hệ thống lớn?',
    ctaBoxBtn: isLaos ? 'Request Network Survey & Quotation' : 'Khảo Sát & Nhận Dự Toán Chi Phí',
    vatNote: isLaos 
      ? '* Pricing excludes 10% VAT and optional edge hardware appliance fees.' 
      : '* Giá cước dịch vụ chưa bao gồm 10% thuế VAT và thiết bị phần cứng CPE đầu cuối (nếu có). Cam kết SLA kết nối 99.99%.',
  };

  // Pricing multiplier based on billing cycle
  const discountRate = billingCycle === '1m' ? 1 : billingCycle === '12m' ? 0.9 : billingCycle === '24m' ? 0.85 : 0.8;

  const pricingPackages = [
    {
      id: 'starter',
      arch: 'internet',
      name: isLaos ? 'SD-WAN Starter' : 'SD-WAN Starter',
      subtitle: isLaos ? 'For Small Branches & Retail POS (<10 sites)' : 'Dành cho điểm bán lẻ, cửa hàng, văn phòng nhỏ',
      basePrice: 650000,
      priceFormatted: isLaos 
        ? `$${Math.round(28 * discountRate)}` 
        : `${Math.round(650000 * discountRate).toLocaleString('vi-VN')} đ`,
      isRecommended: false,
      badge: null,
      icon: Store,
      specs: [
        isLaos ? 'Up to 50 Mbps bandwidth optimization' : 'Băng thông tối ưu hóa tới 50 Mbps',
        isLaos ? 'Dual FTTH Broadband links active' : 'Hỗ trợ 02 đường truyền Internet FTTH Active/Standby',
        isLaos ? 'Automated sub-second failover' : 'Tự động chuyển mạch dự phòng (Auto-failover)',
        isLaos ? 'IPsec AES-256 encrypted VPN tunnel' : 'Mã hóa đường hầm VPN IPsec AES-256',
        isLaos ? 'Centralized cloud monitoring portal' : 'Cổng quản trị giám sát lưu lượng tập trung',
        isLaos ? 'Standard 24/7 technical hotline support' : 'Hỗ trợ kỹ thuật 24/7 qua Hotline 1800 8088',
      ],
      suitable: isLaos ? '1 - 10 sites' : 'Chuỗi 1 – 10 điểm',
    },
    {
      id: 'business',
      arch: 'hybrid',
      name: isLaos ? 'SD-WAN Business' : 'SD-WAN Business',
      subtitle: isLaos ? 'For Medium Enterprises & Distributed Branches (10-50 sites)' : 'Dành cho doanh nghiệp vừa và chuỗi chi nhánh lớn',
      basePrice: 1450000,
      priceFormatted: isLaos 
        ? `$${Math.round(62 * discountRate)}` 
        : `${Math.round(1450000 * discountRate).toLocaleString('vi-VN')} đ`,
      isRecommended: true,
      badge: t.recommendedBadge,
      icon: Building2,
      specs: [
        isLaos ? 'Up to 200 Mbps WAN optimization' : 'Băng thông tối ưu hóa lên tới 200 Mbps',
        isLaos ? 'Hybrid WAN (MPLS + Dual FTTH Broadband)' : 'Mô hình Hybrid WAN (Kết hợp MPLS + 02 đường FTTH)',
        isLaos ? 'Application-aware routing (ERP/VoIP priority)' : 'Định tuyến thông minh nhận diện ứng dụng (QoS ERP/VoIP)',
        isLaos ? 'Direct Internet Breakout (SaaS Acceleration)' : 'Direct Internet Breakout (Tăng tốc M365, Salesforce, Cloud)',
        isLaos ? 'Local Application Caching & Data Compression' : 'Bộ nhớ đệm thông minh (Cache) & Nén dữ liệu truyền',
        isLaos ? 'Zero-Touch Provisioning (ZTP) setup' : 'Triển khai cấu hình tự động (Zero-Touch Provisioning)',
        isLaos ? 'Dedicated Network Engineer Support' : 'Kỹ sư giải pháp hỗ trợ riêng + Cam kết SLA 99.99%',
      ],
      suitable: isLaos ? '10 - 50 sites' : 'Chuỗi 10 – 50 điểm',
    },
    {
      id: 'enterprise',
      arch: 'hybrid',
      name: isLaos ? 'SD-WAN Enterprise' : 'SD-WAN Enterprise',
      subtitle: isLaos ? 'For Banks, Financial Institutions & Multi-Region (>50 sites)' : 'Dành cho ngân hàng, tài chính & tập đoàn đa quốc gia',
      basePrice: 0,
      priceFormatted: t.contactPrice,
      isRecommended: false,
      badge: t.enterpriseBadge,
      icon: ShieldCheck,
      specs: [
        isLaos ? 'Uncapped High-Throughput (1 Gbps+)' : 'Băng thông lớn không giới hạn (1 Gbps+)',
        isLaos ? 'Multi-carrier MPLS + Multi-ISP FTTH + 5G' : 'Đa kênh MPLS + Đa nhà mạng FTTH + Dự phòng 5G',
        isLaos ? 'Next-Gen Firewall (NGFW) integrated at Edge' : 'Tích hợp tường lửa thế hệ mới (NGFW) tại chi nhánh',
        isLaos ? 'Full Mesh encrypted Dynamic Multipoint VPN' : 'Mô hình Full-Mesh bảo mật cao cấp Dynamic Multipoint VPN',
        isLaos ? 'Real-time telemetry & deep packet analytics' : 'Phân tích lưu lượng chuyên sâu & Cảnh báo an ninh tức thì',
        isLaos ? 'Custom SLA 99.999% with 24/7 dedicated NOC' : 'Cam kết SLA 99.999% & Đội ngũ NOC riêng biệt 24/7/365',
      ],
      suitable: isLaos ? '50+ sites' : 'Tập đoàn trên 50 điểm',
    },
    {
      id: 'mobile',
      arch: 'mobile',
      name: isLaos ? 'SD-WAN Mobile Edge' : 'SD-WAN Mobile Edge',
      subtitle: isLaos ? 'For Construction, Fleets & Pop-Up Outlets (4G/5G SIM)' : 'Dành cho công trường, sự kiện & điểm lưu động không kéo cáp',
      basePrice: 850000,
      priceFormatted: isLaos 
        ? `$${Math.round(36 * discountRate)}` 
        : `${Math.round(850000 * discountRate).toLocaleString('vi-VN')} đ`,
      isRecommended: false,
      badge: null,
      icon: Smartphone,
      specs: [
        isLaos ? 'Multi-SIM 4G / LTE / 5G bonding' : 'Gom băng thông đa SIM 4G / LTE / 5G',
        isLaos ? 'Instant plug-and-play without fiber cable' : 'Cắm nguồn hoạt động tức thì không cần chờ kéo cáp',
        isLaos ? 'Dual-carrier auto-failover SIM switching' : 'Tự động chuyển đổi thông minh giữa các nhà mạng di động',
        isLaos ? 'Encrypted tunnel back to central DC' : 'Đường hầm mã hóa bảo mật kết nối trực tiếp về DC',
        isLaos ? 'GPS Tracking & Remote Cloud Management' : 'Định vị GPS thiết bị & Quản trị từ xa qua Cloud',
        isLaos ? 'Flexible monthly subscription terms' : 'Gói cước thuê bao linh hoạt theo từng tháng dự án',
      ],
      suitable: isLaos ? 'Temporary sites' : 'Địa điểm di động',
    },
  ];

  const filteredPackages = selectedArch === 'all'
    ? pricingPackages
    : pricingPackages.filter((pkg) => pkg.arch === selectedArch || pkg.id === selectedArch);

  const architecturesData = [
    {
      id: 'hybrid',
      name: isLaos ? 'Hybrid SD-WAN (Hybrid WAN)' : 'SD-WAN Lai (Hybrid WAN)',
      tagline: isLaos ? 'Keep MPLS Core + Augment Cloud via Internet' : 'Giữ MPLS lõi + Mở rộng Cloud qua Internet',
      links: isLaos 
        ? 'Existing MPLS + FTTH Broadband + 4G/LTE backup' 
        : 'Kết hợp MPLS hiện hữu + FTTH / 4G / LTE',
      target: isLaos
        ? 'Enterprises seeking to preserve MPLS for core sensitive workloads while expanding high-speed Internet for SaaS/Cloud'
        : 'Doanh nghiệp muốn giữ MPLS cho ứng dụng nhạy cảm và mở rộng băng thông Internet cho Cloud',
      routing: isLaos
        ? 'Dynamic load balancing; prioritize MPLS for Core ERP/Voice and FTTH for Direct Cloud Breakout'
        : 'Tự động cân bằng tải, ưu tiên MPLS cho Core Data và Internet cho ứng dụng Cloud',
      recommendedFor: isLaos ? 'Banks, Financial Entities, Large Enterprises' : 'Ngân hàng, tài chính, doanh nghiệp lớn',
      costEstimate: isLaos ? 'Optimized Opex (-40% vs full MPLS)' : 'Tiết kiệm ~40% chi phí cước so với mở rộng MPLS thuần',
    },
    {
      id: 'internet',
      name: isLaos ? 'Cloud-First SD-WAN (Internet-only)' : 'SD-WAN Thuần Internet (Cloud-First)',
      tagline: isLaos ? 'Dual/Multi-FTTH Broadband + Active IPsec' : 'Đa kênh FTTH giá rẻ + Mã hóa IPsec chủ động',
      links: isLaos
        ? 'Dual/Multi-carrier FTTH Broadband + 4G/LTE High-speed link'
        : 'Đa kênh Internet FTTH + Dự phòng 4G / LTE tốc độ cao',
      target: isLaos
        ? 'Cloud-first organizations, retail chains, F&B, distributed showrooms & branches'
        : 'Doanh nghiệp định hướng Cloud hoàn toàn, chuỗi bán lẻ, F&B, phòng giao dịch',
      routing: isLaos
        ? 'Direct Internet Breakout at branch gateway; auto failover across broadband links'
        : 'Định tuyến trực tiếp Internet Gateway (Direct Internet Breakout) tối ưu chi phí',
      recommendedFor: isLaos ? 'Retail Chains, F&B, Logistics, Tech Startups' : 'Chuỗi bán lẻ, chuỗi F&B, thương mại & dịch vụ',
      costEstimate: isLaos ? 'Maximized Savings (-70% WAN cost)' : 'Tiết kiệm ~70% chi phí đường truyền WAN',
    },
    {
      id: 'mobile',
      name: isLaos ? 'Mobile SD-WAN (Cellular Branch)' : 'SD-WAN Chi Nhánh Di Động (4G/5G)',
      tagline: isLaos ? 'Multi-carrier 4G/5G Cellular Instant Setup' : 'Cắm SIM 4G/5G dùng ngay không cần kéo cáp',
      links: isLaos
        ? 'Multi-carrier 4G / LTE / 5G SIM connections'
        : 'Kênh di động 4G / LTE / 5G đa nhà mạng',
      target: isLaos
        ? 'Pop-up stores, kiosks, construction sites, temporary exhibitions and mobile teams'
        : 'Điểm bán lưu động, pop-up store, công trường, sự kiện tạm thời',
      routing: isLaos
        ? 'Instant plug-and-play provisioning without fiber cabling; dynamic SIM failover'
        : 'Thiết lập tức thì không cần kéo cáp vật lý, tự động failover giữa các SIM',
      recommendedFor: isLaos ? 'Construction, Events, Pop-ups, Fleets' : 'Công trường xây dựng, hội chợ, gian hàng lưu động',
      costEstimate: isLaos ? 'Pay-as-you-go flexible subscription' : 'Chi phí thuê bao linh hoạt theo tháng',
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Top Controls: Billing Term Switcher & Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs">
          
          {/* Architecture Filter Switcher */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar pb-1 sm:pb-0">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 shrink-0 hidden md:inline">
              {t.archFilterLabel}
            </span>
            <VIDCNativeButton
              type="button"
              onClick={() => setSelectedArch('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedArch === 'all'
                  ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isLaos ? 'All Packages' : 'Tất Cả Gói'}
            </VIDCNativeButton>
            <VIDCNativeButton
              type="button"
              onClick={() => setSelectedArch('internet')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedArch === 'internet'
                  ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isLaos ? 'Pure Internet SD-WAN' : 'SD-WAN Thuần Internet'}
            </VIDCNativeButton>
            <VIDCNativeButton
              type="button"
              onClick={() => setSelectedArch('hybrid')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedArch === 'hybrid'
                  ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isLaos ? 'Hybrid SD-WAN' : 'SD-WAN Lai (Hybrid)'}
            </VIDCNativeButton>
            <VIDCNativeButton
              type="button"
              onClick={() => setSelectedArch('mobile')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedArch === 'mobile'
                  ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isLaos ? 'Mobile 4G/5G' : '4G/5G Không Dây'}
            </VIDCNativeButton>
          </div>

          {/* Billing Cycle Discount Toggle */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0 w-full sm:w-auto justify-center">
            <VIDCNativeButton
              type="button"
              onClick={() => setBillingCycle('1m')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                billingCycle === '1m'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.cycle1m}
            </VIDCNativeButton>
            <VIDCNativeButton
              type="button"
              onClick={() => setBillingCycle('12m')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                billingCycle === '12m'
                  ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>{t.cycle12m}</span>
            </VIDCNativeButton>
            <VIDCNativeButton
              type="button"
              onClick={() => setBillingCycle('24m')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                billingCycle === '24m'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.cycle24m}
            </VIDCNativeButton>
            <VIDCNativeButton
              type="button"
              onClick={() => setBillingCycle('36m')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                billingCycle === '36m'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.cycle36m}
            </VIDCNativeButton>
          </div>

        </div>

        {/* Pricing Cards Grid (3 to 4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredPackages.map((pkg) => {
            const IconComp = pkg.icon;
            const isFeatured = pkg.isRecommended;

            return (
              <div 
                key={pkg.id}
                className={`relative rounded-2xl bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl ${
                  isFeatured 
                    ? 'border-2 border-[var(--vidc-color-brand-red)] ring-2 ring-red-500/10' 
                    : 'border border-slate-200/90 hover:border-slate-300'
                }`}
              >
                {/* Optional Badge */}
                {pkg.badge && (
                  <div className="bg-[var(--vidc-color-brand-red)] text-white text-[11px] font-extrabold uppercase tracking-wider text-center py-1.5 px-4 shadow-xs">
                    {pkg.badge}
                  </div>
                )}

                <div className="p-6 space-y-5">
                  {/* Card Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                          {pkg.name}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 mt-2 min-h-[32px] leading-relaxed">
                        {pkg.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      CƯỚC DỊCH VỤ DỰ TOÁN
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono">
                        {pkg.priceFormatted}
                      </span>
                      {pkg.basePrice > 0 && (
                        <span className="text-xs text-slate-500 font-medium">
                          {t.monthUnit}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] font-bold text-emerald-600 mt-0.5">
                      Phù hợp: {pkg.suitable}
                    </div>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="pt-3 border-t border-slate-100 space-y-2.5">
                    <div className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                      Thông số tính năng:
                    </div>
                    <ul className="space-y-2">
                      {pkg.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Action */}
                <div className="p-6 pt-0">
                  <VIDCNativeButton
                    type="button"
                    onClick={onOpenConsult}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white shadow-md active:scale-95'
                        : 'bg-slate-900 hover:bg-slate-800 text-white active:scale-95'
                    }`}
                  >
                    <span>{pkg.basePrice > 0 ? t.btnRegister : t.btnConsult}</span>
                    <ArrowRight className="w-4 h-4" />
                  </VIDCNativeButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* VAT and Pricing Note */}
        <div className="text-center text-xs text-slate-500 mb-12">
          {t.vatNote}
        </div>

        {/* Bảng So Sánh Kiến Trúc Triển Khai (Comparison Table) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden mb-12">
          <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50/70 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                {t.comparisonTitle}
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">3 Phương Án Chính</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase tracking-wider text-[11px] bg-slate-50/50">
                  <th className="py-3.5 px-4 w-1/4">{t.colModel}</th>
                  <th className="py-3.5 px-4 w-1/4">{t.colLinks}</th>
                  <th className="py-3.5 px-4 w-1/4">{t.colTarget}</th>
                  <th className="py-3.5 px-4 w-1/4">{t.colRouting}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70">
                {architecturesData.map((arch) => (
                  <tr 
                    key={arch.id} 
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="font-extrabold text-slate-900 text-sm">
                        {arch.name}
                      </div>
                      <div className="text-[11px] text-emerald-600 font-bold mt-0.5">
                        {arch.costEstimate}
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-1">{arch.recommendedFor}</span>
                    </td>
                    <td className="py-4 px-4 text-slate-700">
                      {arch.links}
                    </td>
                    <td className="py-4 px-4 text-slate-700">
                      {arch.target}
                    </td>
                    <td className="py-4 px-4 text-slate-700">
                      {arch.routing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom Configurator CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700/80 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6 text-[var(--vidc-color-brand-red)]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-extrabold text-white">
                {t.ctaBoxText}
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Kỹ sư giải pháp mạng của Viettel IDC hỗ trợ tư vấn 24/7 không tính phí.
              </p>
            </div>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={onOpenConsult}
            className="w-full md:w-auto px-7 py-3.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 shrink-0 active:scale-95"
          >
            <span>{t.ctaBoxBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
