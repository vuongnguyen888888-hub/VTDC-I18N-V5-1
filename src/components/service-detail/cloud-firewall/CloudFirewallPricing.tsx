import React, { useState } from 'react';
import { Tag, Check, X, Shield, Sliders, Server, Info, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudFirewallPricingProps {
  currentMarket?: SEAMarket;
  onOpenQuote: (planName?: string) => void;
}

export const CloudFirewallPricing: React.FC<CloudFirewallPricingProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const [selectedRegion, setSelectedRegion] = useState<'north' | 'central' | 'south'>('north');
  const [selectedTier, setSelectedTier] = useState<'BASIC' | 'GOLD' | 'PLATINUM'>('GOLD');
  const [activeTab, setActiveTab] = useState<'cards' | 'matrix'>('cards');

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos
      ? 'Choose the optimal Cloud Firewall package for your infrastructure'
      : 'Lựa chọn gói tường lửa bảo vệ tối ưu cho doanh nghiệp',
    desc: isLaos 
      ? 'Enterprise-grade Machine Learning Next-Gen Firewall with transparent licensing & scalable compute'
      : 'Hạ tầng tường lửa thế hệ mới ML-Powered NGFW tiêu chuẩn quốc tế với chi phí minh bạch & linh hoạt',
    tierFilter: isLaos ? 'SECURITY TIER:' : 'GÓI TÍNH NĂNG:',
    infrastructureRegion: isLaos ? 'INFRASTRUCTURE REGION:' : 'KHU VỰC HẠ TẦNG:',
    north: isLaos ? 'North' : 'Miền Bắc',
    central: isLaos ? 'Central' : 'Miền Trung',
    south: isLaos ? 'South' : 'Miền Nam',
    config: isLaos ? 'CONFIGURATION' : 'CẤU HÌNH THIẾT BỊ ẢO',
    detailDesc: isLaos ? 'Detailed specifications include:' : 'Thông số kỹ thuật bao gồm:',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    freeTrialBtn: isLaos ? 'FREE TRIAL' : 'DÙNG THỬ MIỄN PHÍ',
    consultBtn: isLaos ? 'REQUEST CONSULTATION' : 'NHẬN TƯ VẤN',
    customTitle: isLaos ? 'High Availability (HA) & Custom Security Architecture' : 'Kiến trúc High Availability (HA) & May đo chuyên sâu',
    customDesc: isLaos 
      ? 'Need Active-Passive HA redundancy, Fortinet / VMware Native Firewalls, or custom IPSec VPN setups? Our dedicated 24/7 security engineers will audit and architect a bespoke security blueprint.'
      : 'Cần thiết lập mô hình dự phòng Active-Passive HA, tường lửa Fortinet / VMware Native, hoặc kết nối VPN diện rộng? Đội ngũ kỹ sư an ninh mạng 24/7 của Viettel IDC sẵn sàng khảo sát và thiết kế kiến trúc bảo mật riêng biệt.',
    customBtn: isLaos ? 'REQUEST BESPOKE QUOTE' : 'YÊU CẦU BÁO GIÁ RIÊNG',
    vatFootnote: isLaos 
      ? '* Listed monthly prices are for firewall software licenses, excluding VAT and virtual server compute resources (vCPU, RAM, SSD).'
      : '* Đơn giá niêm yết theo tháng, chưa bao gồm thuế VAT và tài nguyên máy chủ ảo (vCPU, RAM, SSD) triển khai.',
  };

  // 3 Primary Hardware Configurations
  const packages = [
    {
      id: 'vcf1',
      name: 'Gói VCF1',
      subtitle: 'STANDARD FIREWALL (2 vCPU)',
      specs: {
        vcpu: '2 vCPU Virtual Firewall',
        ram: '7 GB RAM tối thiểu',
        storage: '60 GB SSD Storage',
        throughput: '3 Gbps App-ID Throughput',
        threatThroughput: '1.5 Gbps Threat Prevention',
        ipsecVpn: '1.000 Đường hầm IPSec VPN',
        sslVpn: '500 Đường hầm SSL VPN',
        zones: '40 Security Zones',
      },
      prices: {
        BASIC: '6.600.000',
        GOLD: '7.700.000',
        PLATINUM: '20.800.000',
      },
      badge: null,
      recommended: false,
    },
    {
      id: 'vcf2',
      name: 'Gói VCF2',
      subtitle: 'POPULAR CHOICE (3 vCPU)',
      specs: {
        vcpu: '3 vCPU Virtual Firewall',
        ram: '7 GB RAM tối thiểu',
        storage: '60 GB SSD Storage',
        throughput: '4.5 Gbps App-ID Throughput',
        threatThroughput: '2.25 Gbps Threat Prevention',
        ipsecVpn: '1.000 Đường hầm IPSec VPN',
        sslVpn: '500 Đường hầm SSL VPN',
        zones: '40 Security Zones',
      },
      prices: {
        BASIC: '9.350.000',
        GOLD: '12.100.000',
        PLATINUM: '15.950.000',
      },
      badge: isLaos ? '★ BEST SELLER' : '★ BÁN CHẠY',
      recommended: true,
    },
    {
      id: 'vcf3',
      name: 'Gói VCF3',
      subtitle: 'MAXIMUM DEFENSE (4 vCPU)',
      specs: {
        vcpu: '4 vCPU Virtual Firewall',
        ram: '9 GB RAM tối thiểu',
        storage: '60 GB SSD Storage',
        throughput: '6 Gbps App-ID Throughput',
        threatThroughput: '3 Gbps Threat Prevention',
        ipsecVpn: '2.000 Đường hầm IPSec VPN',
        sslVpn: '2.000 Đường hầm SSL VPN',
        zones: '40 Security Zones',
      },
      prices: {
        BASIC: '12.100.000',
        GOLD: '14.575.000',
        PLATINUM: '21.175.000',
      },
      badge: null,
      recommended: false,
    },
  ];

  const featureMatrix = [
    { name: 'Tường lửa thế hệ mới ML-Powered NGFW ảo', basic: true, gold: true, plat: true },
    { name: 'Nhận dạng ứng dụng (App-ID)', basic: true, gold: true, plat: true },
    { name: 'Nhận dạng người dùng (User-ID)', basic: true, gold: true, plat: true },
    { name: 'Các tính năng Network, Routing (BGP, OSPF, NAT)', basic: true, gold: true, plat: true },
    { name: 'Hỗ trợ IPSec VPN Site-to-Site', basic: true, gold: true, plat: true },
    { name: 'Hỗ trợ Remote Access/VPN Client (cơ bản)', basic: true, gold: true, plat: true },
    { name: 'Lọc file và dữ liệu cơ bản', basic: true, gold: true, plat: true },
    { name: 'Anti-Virus & Chống mã độc chuyên sâu', basic: false, gold: true, plat: true },
    { name: 'Anti-Spyware & Ngăn chặn gián điệp mạng', basic: false, gold: true, plat: true },
    { name: 'Bảo vệ lỗ hổng bảo mật (Vulnerability Protection / IPS)', basic: false, gold: true, plat: true },
    { name: 'Phân tích & phòng vệ mã độc APT bằng Sandbox (WildFire)', basic: false, gold: false, plat: true },
    { name: 'Lọc web nâng cao (Advanced URL Filtering)', basic: false, gold: false, plat: true },
    { name: 'Bảo vệ truy vấn DNS (DNS Security)', basic: false, gold: false, plat: true },
    { name: 'Remote Access VPN nâng cao (GlobalProtect)', basic: 'Add-on', gold: 'Add-on', plat: 'Add-on' },
    { name: 'Chống thất thoát dữ liệu nâng cao (Enterprise DLP-Inline)', basic: 'Add-on', gold: 'Add-on', plat: 'Add-on' },
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

        {/* Top Control Bar: Security Tier & Region Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-10 text-xs">
          
          {/* Gói Tính Năng Switch */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.tierFilter}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedTier('BASIC')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  selectedTier === 'BASIC'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Gói BASIC
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedTier('GOLD')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  selectedTier === 'GOLD'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Gói GOLD (Khuyên dùng)
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedTier('PLATINUM')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  selectedTier === 'PLATINUM'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Gói PLATINUM
              </VIDCNativeButton>
            </div>
          </div>

          {/* Khu vực hạ tầng */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.infrastructureRegion}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('north')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  selectedRegion === 'north'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.north}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('central')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  selectedRegion === 'central'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.central}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('south')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  selectedRegion === 'south'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.south}
              </VIDCNativeButton>
            </div>
          </div>

        </div>

        {/* View Switch: Pricing Cards vs Full Matrix */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-200/80 rounded-xl text-xs font-bold">
            <VIDCNativeButton
              type="button"
              onClick={() => setActiveTab('cards')}
              className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'cards'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Bảng giá gói cước
            </VIDCNativeButton>
            <VIDCNativeButton
              type="button"
              onClick={() => setActiveTab('matrix')}
              className={`px-4 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'matrix'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Ma trận so sánh tính năng
            </VIDCNativeButton>
          </div>
        </div>

        {/* TAB 1: 3 Pricing Cards Grid Matching CloudServer */}
        {activeTab === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-stretch">
            {packages.map((pkg) => {
              const isRecommended = pkg.recommended;
              const displayPrice = pkg.prices[selectedTier];
              
              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-2xl p-6 bg-white border border-slate-200/90 flex flex-col justify-between transition-all duration-300 ${
                    isRecommended
                      ? 'shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-300'
                      : 'shadow-sm hover:shadow-md hover:border-slate-300'
                  }`}
                >
                  <div>
                    {/* Card Header: Title, Subtitle, Badge */}
                    <div className="min-h-[52px] mb-2">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
                          {pkg.name}
                        </h3>
                        {pkg.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/80 whitespace-nowrap">
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
                        <span className="text-3xl font-black text-[var(--vidc-color-brand-red)] tracking-tight font-mono">
                          {displayPrice}
                        </span>
                        <span className="text-[11px] font-extrabold text-slate-500 uppercase">
                          Đ/THÁNG
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                        License Palo Alto ({selectedTier})
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
                        <span className="font-bold text-slate-900">{pkg.specs.vcpu}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                        <span className="font-bold text-slate-900">{pkg.specs.ram}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                        <span className="font-bold text-slate-900">{pkg.specs.storage}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                        <span className="text-slate-800">{pkg.specs.throughput}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                        <span className="text-slate-800">{pkg.specs.threatThroughput}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                        <span className="text-slate-700">{pkg.specs.ipsecVpn}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                        <span className="text-slate-700">{pkg.specs.sslVpn}</span>
                      </li>
                    </ul>
                  </div>

                  {/* Card Bottom CTA Buttons */}
                  <div className="space-y-2 pt-2">
                    <VIDCNativeButton
                      type="button"
                      onClick={() => onOpenQuote(`${pkg.name} - Gói ${selectedTier}`)}
                      className="w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-sm uppercase tracking-wider text-center block cursor-pointer"
                    >
                      {t.registerNow}
                    </VIDCNativeButton>
                    <VIDCNativeButton
                      type="button"
                      onClick={() => onOpenQuote(`Dùng thử ${pkg.name} - Gói ${selectedTier}`)}
                      className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-extrabold text-[11px] transition-all uppercase tracking-wider text-center block cursor-pointer"
                    >
                      {t.freeTrialBtn}
                    </VIDCNativeButton>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* TAB 2: Full Matrix Comparison */}
        {activeTab === 'matrix' && (
          <div className="mb-12 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] flex items-center gap-2">
                <Shield className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
                <span>Ma Trận Tính Năng An Ninh Mạng Chi Tiết (Feature Matrix)</span>
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3.5 px-6 min-w-[280px]">Danh mục tính năng an ninh mạng</th>
                    <th className="py-3.5 px-4 text-center min-w-[120px]">Gói BASIC</th>
                    <th className="py-3.5 px-4 text-center min-w-[120px]">Gói GOLD</th>
                    <th className="py-3.5 px-4 text-center min-w-[120px] bg-red-50/50 text-[var(--vidc-color-brand-red)]">Gói PLATINUM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {featureMatrix.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-6 text-slate-800 font-medium">{item.name}</td>
                      
                      {/* Basic */}
                      <td className="py-3 px-4 text-center">
                        {item.basic === true ? (
                          <div className="inline-flex items-center justify-center text-emerald-600 font-bold gap-1 text-xs">
                            <Check className="w-4 h-4" /> <span>Có</span>
                          </div>
                        ) : item.basic === false ? (
                          <div className="inline-flex items-center justify-center text-slate-400 gap-1 text-xs">
                            <X className="w-4 h-4" /> <span>Không</span>
                          </div>
                        ) : (
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[11px] font-medium">{item.basic}</span>
                        )}
                      </td>

                      {/* Gold */}
                      <td className="py-3 px-4 text-center">
                        {item.gold === true ? (
                          <div className="inline-flex items-center justify-center text-emerald-600 font-bold gap-1 text-xs">
                            <Check className="w-4 h-4" /> <span>Có</span>
                          </div>
                        ) : item.gold === false ? (
                          <div className="inline-flex items-center justify-center text-slate-400 gap-1 text-xs">
                            <X className="w-4 h-4" /> <span>Không</span>
                          </div>
                        ) : (
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[11px] font-medium">{item.gold}</span>
                        )}
                      </td>

                      {/* Platinum */}
                      <td className="py-3 px-4 text-center bg-red-50/20">
                        {item.plat === true ? (
                          <div className="inline-flex items-center justify-center text-emerald-600 font-bold gap-1 text-xs">
                            <Check className="w-4 h-4" /> <span>Có</span>
                          </div>
                        ) : item.plat === false ? (
                          <div className="inline-flex items-center justify-center text-slate-400 gap-1 text-xs">
                            <X className="w-4 h-4" /> <span>Không</span>
                          </div>
                        ) : (
                          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[11px] font-medium">{item.plat}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

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
              onClick={() => onOpenQuote('Tư vấn Kiến trúc HA / Fortinet / VMware Native')}
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
