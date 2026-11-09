import React, { useState } from 'react';
import { 
  Check, 
  Minus, 
  Sliders, 
  ChevronDown, 
  ChevronUp, 
  Layers
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface EndpointSecurityPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (planNote?: string) => void;
}

export const EndpointSecurityPricing: React.FC<EndpointSecurityPricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [filterCategory, setFilterCategory] = useState<'all' | 'vm' | 'physical'>('all');
  const [showMatrix, setShowMatrix] = useState(false);

  const t = {
    pricingTitle: isLaos ? 'TRANSPARENT PRICING' : 'BẢNG GIÁ & GÓI CƯỚC NIÊM YẾT',
    headline: isLaos 
      ? 'Pricing & Detailed Service Packages of Viettel Endpoint Security'
      : 'Bảng Giá & Chi Tiết Các Gói Viettel Endpoint Security',
    desc: isLaos
      ? 'Flexible monthly licensing for virtual cloud servers or annual perpetual protection for on-premise hardware.'
      : 'Linh hoạt thanh toán theo tháng cho máy chủ ảo hóa đám mây hoặc theo năm cho máy trạm & hạ tầng vật lý.',
    filterLabel: isLaos ? 'Category:' : 'Phân loại:',
    allTab: isLaos ? 'All (5)' : 'Tất cả (5)',
    vmTab: isLaos ? 'Cloud VM (3)' : 'Máy chủ ảo hóa - VM (3)',
    physicalTab: isLaos ? 'Physical & Hybrid (2)' : 'Máy trạm & Server vật lý (2)',
    config: isLaos ? 'FEATURES & SPECS' : 'CẤU HÌNH & TÍNH NĂNG',
    detailDesc: isLaos ? 'Standard security policy' : 'Tiêu chuẩn bảo mật',
    registerNow: isLaos ? 'Register Now' : 'Đăng Ký Ngay',
    freeTrialBtn: isLaos ? 'Free Trial' : 'Dùng Thử Miễn Phí',
    customTitle: isLaos 
      ? 'Need Enterprise Volume Licensing or Advanced Managed SOC?' 
      : 'Doanh nghiệp cần triển khai số lượng lớn (Volume Licensing) hoặc tư vấn EDR chuyên sâu?',
    customDesc: isLaos
      ? 'Contact Viettel IDC security architects for tailored hybrid topologies, multi-tenant GravityZone consoles, and bulk enterprise discount tiers.'
      : 'Liên hệ ngay với đội ngũ kiến trúc sư ATTT của Viettel IDC để nhận chính sách chiết khấu khối lượng lớn, cấu hình GravityZone đa cụm và hỗ trợ POC chuyên sâu.',
    customBtn: isLaos ? 'CONTACT ENTERPRISE SALES' : 'LIÊN HỆ TƯ VẤN ENTERPRISE',
    vatFootnote: isLaos
      ? '* Pricing excludes VAT. Additional discounts available for annual contracts or enterprise volume deployments.'
      : '* Báo giá trên chưa bao gồm 10% VAT. Chiết khấu hấp dẫn khi đăng ký số lượng lớn hoặc chu kỳ dài hạn.',
    matrixToggleShow: isLaos ? 'View Detailed Feature Comparison Matrix' : 'Xem Ma Trận So Sánh Tính Năng Chi Tiết (27 Tiêu Chí)',
    matrixToggleHide: isLaos ? 'Collapse Comparison Matrix' : 'Thu Gọn Ma Trận So Sánh Tính Năng',
  };

  const packages = [
    {
      id: 'vm-basic',
      name: 'VM - Basic',
      subtitle: isLaos ? 'Virtual Machine / Cloud' : 'Máy chủ ảo hóa / Cloud',
      targetType: 'vm',
      price: '120.000',
      unit: isLaos ? 'VNĐ / lic / mo' : 'VNĐ / lic / tháng',
      badge: 'Cơ bản',
      isRecommended: false,
      features: [
        'Quản trị tập trung GravityZone Cloud',
        'Anti-Tampering & Content Control',
        'Anti-Phishing & Web Traffic Scan',
        'Firewall & Device Control cơ bản',
        'Bảo vệ 100% tài nguyên máy ảo VM',
        'Hỗ trợ kỹ thuật 24/7/365'
      ]
    },
    {
      id: 'vm-gold',
      name: 'VM Gold',
      subtitle: isLaos ? 'Virtual Machine + SVA Offload' : 'Máy chủ ảo hóa + SVA',
      targetType: 'vm',
      price: '420.000',
      unit: isLaos ? 'VNĐ / lic / mo' : 'VNĐ / lic / tháng',
      badge: 'Khuyên Dùng ★',
      isRecommended: true,
      features: [
        'Bao gồm mọi tính năng của gói Basic',
        'Central Scan tích hợp SVA chuyên dụng',
        'Triệt tiêu hoàn toàn Antivirus Storm',
        'Network Attack Defense & Ransomware',
        'Tích hợp kết nối SIEM / SOC tập trung',
        'Giải phóng tới 98% CPU/RAM máy ảo'
      ]
    },
    {
      id: 'vm-platinum',
      name: 'VM Platinum',
      subtitle: isLaos ? 'Virtual Machine + EDR & ATS' : 'Máy ảo + EDR & ATS Đầy Đủ',
      targetType: 'vm',
      price: '480.000',
      unit: isLaos ? 'VNĐ / lic / mo' : 'VNĐ / lic / tháng',
      badge: 'Cao cấp nhất',
      isRecommended: false,
      features: [
        'Bao gồm mọi tính năng của gói VM Gold',
        'Sẵn sàng gói EDR (Detection & Response)',
        'Phòng chống Fileless & HyperDetect',
        'Môi trường Sandbox Analyzer cô lập',
        'Container Protection & ERA chuyên sâu',
        'Hỗ trợ SLA 99.99% chuyên trách SOC'
      ]
    },
    {
      id: 'business',
      name: 'Business',
      subtitle: isLaos ? 'Physical Workstations & Servers' : 'Máy trạm & Server vật lý',
      targetType: 'physical',
      price: '420.000',
      unit: isLaos ? 'VNĐ / lic / yr' : 'VNĐ / lic / năm',
      badge: 'Doanh Nghiệp',
      isRecommended: false,
      features: [
        'Tùy chọn quản trị On-Premise / Cloud',
        'Next-Gen Anti-Malware & Local Scan',
        'Quản soát thiết bị (Device Control)',
        'Anti-Phishing & Web Traffic Scan',
        'Hạn mức tối đa 30% Server vật lý',
        'Triển khai nhanh qua 1 Agent BEST'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      subtitle: isLaos ? 'Physical, Hybrid & Mobile' : 'Vật lý, Hybrid & Di động',
      targetType: 'physical',
      price: '580.000',
      unit: isLaos ? 'VNĐ / lic / yr' : 'VNĐ / lic / năm',
      badge: 'Toàn Diện',
      isRecommended: false,
      features: [
        'Bao gồm mọi tính năng của gói Business',
        'Hạn mức Server vật lý lên tới 35%',
        'Tích hợp Mobile Security (Android/iOS)',
        'HyperDetect Machine Learning nâng cao',
        'Hỗ trợ tùy chọn Full Disk Encryption',
        'Quản lý đa nền tảng Windows, Mac, Linux'
      ]
    }
  ];

  const filteredPackages = packages.filter(pkg => {
    if (filterCategory === 'all') return true;
    return pkg.targetType === filterCategory;
  });

  const matrixCriteria = [
    { name: 'Quản trị tập trung GravityZone Cloud Console', basic: true, gold: true, plat: true, biz: true, prem: true },
    { name: 'Anti-Tampering (Chống gỡ cài đặt trái phép)', basic: true, gold: true, plat: true, biz: true, prem: true },
    { name: 'Device Control (Kiểm soát thiết bị ngoại vi USB)', basic: true, gold: true, plat: true, biz: true, prem: true },
    { name: 'Anti-Phishing & Web Traffic Filtering', basic: true, gold: true, plat: true, biz: true, prem: true },
    { name: 'Content Control & Web Access Control', basic: true, gold: true, plat: true, biz: true, prem: true },
    { name: 'Tường lửa cá nhân hai chiều (Two-way Firewall)', basic: true, gold: true, plat: true, biz: true, prem: true },
    { name: 'Local Scan (Quét trực tiếp trên thiết bị)', basic: true, gold: true, plat: true, biz: true, prem: true },
    { name: 'Central Scan (Quét qua máy chủ SVA tập trung)', basic: false, gold: true, plat: true, biz: false, prem: false },
    { name: 'Triệt tiêu hiện tượng nghẽn I/O (Antivirus Storm)', basic: false, gold: true, plat: true, biz: false, prem: false },
    { name: 'Ransomware Mitigation (Sao lưu & Khôi phục tự động)', basic: false, gold: true, plat: true, biz: true, prem: true },
    { name: 'Process Inspector (Theo dõi hành vi bất thường ATC)', basic: true, gold: true, plat: true, biz: true, prem: true },
    { name: 'Network Attack Defense (Chống tấn công qua mạng)', basic: false, gold: true, plat: true, biz: true, prem: true },
    { name: 'HyperDetect (Máy học Tunable Machine Learning)', basic: false, gold: false, plat: true, biz: false, prem: true },
    { name: 'Sandbox Analyzer (Cô lập & phân tích tệp nghi ngờ)', basic: false, gold: false, plat: true, biz: false, prem: false },
    { name: 'Endpoint Detection & Response (EDR mở rộng)', basic: false, gold: false, plat: true, biz: false, prem: false },
    { name: 'Endpoint Risk Analytics (ERA chấm điểm rủi ro)', basic: true, gold: true, plat: true, biz: true, prem: true },
    { name: 'Bảo vệ thiết bị di động (Mobile Security)', basic: false, gold: false, plat: false, biz: false, prem: true },
    { name: 'Hạn mức Server vật lý tối đa cho phép', basic: 'N/A (VM)', gold: 'N/A (VM)', plat: 'N/A (VM)', biz: '30% Server', prem: '35% Server' },
    { name: 'Chu kỳ thanh toán linh hoạt', basic: 'Tháng', gold: 'Tháng', plat: 'Tháng', biz: 'Năm', prem: 'Năm' },
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

        {/* Top Control Bar: Category Filter */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-12 text-xs">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.filterLabel}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setFilterCategory('all')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  filterCategory === 'all'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.allTab}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setFilterCategory('vm')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  filterCategory === 'vm'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.vmTab}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setFilterCategory('physical')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  filterCategory === 'physical'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.physicalTab}
              </VIDCNativeButton>
            </div>
          </div>
        </div>

        {/* 5 Pricing Cards in Grid (Matching CloudServerEstimator standard) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-12 items-stretch">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl p-5 bg-white border border-slate-200/90 flex flex-col justify-between transition-all duration-300 ${
                pkg.isRecommended
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
                      {pkg.price}
                    </span>
                    <span className="text-[11px] font-extrabold text-slate-500 uppercase">
                      {pkg.unit}
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
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 leading-tight">
                      <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Bottom CTA Buttons */}
              <div className="space-y-2 pt-2">
                <VIDCNativeButton
                  type="button"
                  onClick={() => onOpenConsult(`Đăng ký gói ${pkg.name}`)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-sm uppercase tracking-wider text-center block cursor-pointer"
                >
                  {t.registerNow}
                </VIDCNativeButton>
                <VIDCNativeButton
                  type="button"
                  onClick={() => onOpenConsult(`Đăng ký dùng thử gói ${pkg.name}`)}
                  className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-extrabold text-[11px] transition-all uppercase tracking-wider text-center block cursor-pointer"
                >
                  {t.freeTrialBtn}
                </VIDCNativeButton>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Configuration Dark Banner (Standard Cloud Server Pattern) */}
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
              onClick={() => onOpenConsult('Tư vấn giải pháp Enterprise Endpoint Security tùy chỉnh')}
              className="px-6 py-3 rounded-xl bg-black hover:bg-slate-900 active:bg-slate-950 text-white border border-slate-700 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 whitespace-nowrap min-h-[44px] cursor-pointer"
            >
              {t.customBtn}
            </VIDCNativeButton>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-center text-[11px] text-slate-400 italic mt-4">
          {t.vatFootnote}
        </p>

        {/* Collapsible Technical Feature Matrix Trigger */}
        <div className="mt-8 text-center">
          <VIDCNativeButton
            type="button"
            onClick={() => setShowMatrix(!showMatrix)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 transition-all shadow-xs cursor-pointer"
          >
            <Layers className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
            <span>{showMatrix ? t.matrixToggleHide : t.matrixToggleShow}</span>
            {showMatrix ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </VIDCNativeButton>
        </div>

        {/* Technical Matrix Table */}
        {showMatrix && (
          <div className="mt-6 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in duration-300">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[var(--vidc-legacy-hex-0f172a)]">
                    <th className="py-3.5 px-4 font-extrabold min-w-[260px]">Tiêu chí tính năng</th>
                    <th className="py-3.5 px-3 font-extrabold text-center min-w-[110px]">VM Basic</th>
                    <th className="py-3.5 px-3 font-extrabold text-center min-w-[110px] bg-red-50/40 text-[var(--vidc-color-brand-red)]">VM Gold ★</th>
                    <th className="py-3.5 px-3 font-extrabold text-center min-w-[110px]">VM Platinum</th>
                    <th className="py-3.5 px-3 font-extrabold text-center min-w-[110px]">Business</th>
                    <th className="py-3.5 px-3 font-extrabold text-center min-w-[110px]">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {matrixCriteria.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="py-3 px-4 font-medium text-[var(--vidc-legacy-hex-222225)]">{row.name}</td>
                      <td className="py-3 px-3 text-center">
                        {typeof row.basic === 'boolean' ? (
                          row.basic ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                        ) : <span className="font-semibold text-slate-600">{row.basic}</span>}
                      </td>
                      <td className="py-3 px-3 text-center bg-red-50/20">
                        {typeof row.gold === 'boolean' ? (
                          row.gold ? <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] mx-auto font-bold" /> : <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                        ) : <span className="font-bold text-[var(--vidc-color-brand-red)]">{row.gold}</span>}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {typeof row.plat === 'boolean' ? (
                          row.plat ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                        ) : <span className="font-semibold text-slate-600">{row.plat}</span>}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {typeof row.biz === 'boolean' ? (
                          row.biz ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                        ) : <span className="font-semibold text-slate-600">{row.biz}</span>}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {typeof row.prem === 'boolean' ? (
                          row.prem ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : <Minus className="w-4 h-4 text-slate-300 mx-auto" />
                        ) : <span className="font-semibold text-slate-600">{row.prem}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
