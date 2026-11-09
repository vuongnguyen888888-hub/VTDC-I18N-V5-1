import React, { useState } from 'react';
import { Tag, Check, Sliders, Server, Cloud, HardDrive, Mail, Calculator, ChevronDown, ChevronUp } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CloudBackupPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: (notes?: string) => void;
}

export const CloudBackupPricing: React.FC<CloudBackupPricingProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  // Region Selection State
  const [selectedRegion, setSelectedRegion] = useState<'north' | 'central' | 'south'>('north');
  // Billing Mode State: 'monthly' (1 Tháng) or 'annual' (12 Tháng - Chiết khấu 10%)
  const [billingMode, setBillingMode] = useState<'monthly' | 'annual'>('monthly');
  // Show comparison matrix toggle
  const [showMatrix, setShowMatrix] = useState<boolean>(false);

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos ? 'Choose the optimal BaaS package for your enterprise' : 'Lựa chọn gói sao lưu tối ưu cho doanh nghiệp',
    desc: isLaos 
      ? 'Enterprise-standard BaaS backup and disaster recovery infrastructure with transparent & flexible costs'
      : 'Hạ tầng sao lưu đám mây tiêu chuẩn Enterprise với chi phí minh bạch & tối ưu hóa TCO',
    billingModel: isLaos ? 'BILLING CYCLE:' : 'CHU KỲ THANH TOÁN:',
    infrastructureRegion: isLaos ? 'INFRASTRUCTURE REGION:' : 'KHU VỰC HẠ TẦNG:',
    north: isLaos ? 'North (Hanoi)' : 'Miền Bắc',
    central: isLaos ? 'Central (Da Nang)' : 'Miền Trung',
    south: isLaos ? 'South (HCMC)' : 'Miền Nam',
    config: isLaos ? 'SPECIFICATIONS' : 'THÔNG SỐ GÓI',
    detailDesc: isLaos ? 'Package highlights include:' : 'Chi tiết gói bao gồm:',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    freeTrialBtn: isLaos ? 'FREE TRIAL' : 'DÙNG THỬ MIỄN PHÍ',
    consultBtn: isLaos ? 'REQUEST CONSULTATION' : 'NHẬN TƯ VẤN',
    customTitle: isLaos ? 'Custom Configuration — Tailored to your enterprise' : 'Cấu hình tùy chỉnh — May đo theo nhu cầu doanh nghiệp',
    customDesc: isLaos 
      ? 'Need larger backup volume (> 10 TB), mission-critical databases (Oracle RAC, SAP HANA), or long-term archiving policy? We provide customized architecture with 99.99% SLA commitment.'
      : 'Cần giải pháp sao lưu quy mô lớn (> 10 TB), hệ thống cơ sở dữ liệu chuyên biệt (Oracle RAC, SAP HANA) hoặc chính sách lưu trữ dài hạn tuân thủ pháp lý? Chúng tôi hỗ trợ may đo kiến trúc riêng biệt với cam kết SLA cao nhất.',
    customBtn: isLaos ? 'REQUEST ARCHITECTURE CONSULTATION' : 'ĐĂNG KÝ NHẬN TƯ VẤN',
    vatFootnote: isLaos 
      ? '* All service pricing excludes taxes. You can adjust the capacity at any time via the automated management portal.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể mở rộng dung lượng bất cứ lúc nào trong bảng điều khiển.',
    compareTableTitle: isLaos ? 'Detailed Feature Comparison Matrix' : 'Bảng So Sánh Chi Tiết Tính Năng Các Gói',
  };

  // 4 Standard BaaS Packages
  const packages = [
    {
      id: 'backup-cs',
      name: isLaos ? 'Backup Cloud Server' : 'Backup Cloud Server',
      subtitle: 'VIRTUAL MACHINE / OPENSTACK',
      priceMonthly: isLaos ? '12' : '120.000',
      priceAnnual: isLaos ? '10.8' : '108.000',
      unit: isLaos ? 'USD/VM/MO' : 'Đ/VM/THÁNG',
      badge: isLaos ? '★ MOST POPULAR' : '★ PHỔ BIẾN NHẤT',
      recommended: true,
      specs: [
        'Hỗ trợ máy chủ ảo Cloud Server, VMware, KVM',
        'Sao lưu tự động theo lịch không gián đoạn dịch vụ',
        'Mã hóa đầu cuối AES 256 và đường truyền SSL',
        'Khôi phục 2 chiều: Override hoặc Keep phiên bản',
        'Quản trị tập trung qua Web Portal tự phục vụ',
        'Giá lưu trữ thêm: 1.200 đ / GB / tháng',
      ],
      secondaryBtnText: isLaos ? t.freeTrialBtn : 'DÙNG THỬ MIỄN PHÍ',
    },
    {
      id: 'backup-private',
      name: isLaos ? 'Backup Private Cloud' : 'Backup Private Cloud & VPC',
      subtitle: 'DEDICATED CLOUD / ENTERPRISE',
      priceMonthly: isLaos ? '18' : '180.000',
      priceAnnual: isLaos ? '16.2' : '162.000',
      unit: isLaos ? 'USD/VM/MO' : 'Đ/VM/THÁNG',
      badge: isLaos ? 'ENTERPRISE' : 'DOANH NGHIỆP',
      recommended: false,
      specs: [
        'Dành cho cụm Private Cloud, VPC, DPC độc lập',
        'Hỗ trợ VMware ESXi, Hyper-V, Nutanix, OpenStack',
        'Quản lý đa phiên bản điểm khôi phục (Restore Points)',
        'Tương thích kênh truyền riêng Viettel Hybrid Connect',
        'Đạt chuẩn an toàn thông tin Cấp độ 3 & PCI-DSS',
        'Giá lưu trữ thêm: 1.100 đ / GB / tháng',
      ],
      secondaryBtnText: isLaos ? t.consultBtn : 'NHẬN TƯ VẤN',
    },
    {
      id: 'backup-physical',
      name: isLaos ? 'Backup Physical Server' : 'Backup Server Vật Lý',
      subtitle: 'ON-PREMISES BARE-METAL',
      priceMonthly: isLaos ? '25' : '250.000',
      priceAnnual: isLaos ? '22.5' : '225.000',
      unit: isLaos ? 'USD/SERVER/MO' : 'Đ/SERVER/THÁNG',
      badge: null,
      recommended: false,
      specs: [
        'Hỗ trợ máy chủ vật lý Windows Server & Linux (RHEL, Ubuntu)',
        'Khôi phục trạng thái trắng Bare-metal Restore',
        'Đồng bộ qua Internet Gateway bảo mật hoặc MPLS',
        'Không cần đầu tư hệ thống băng từ (Tape) hay SAN tốn kém',
        'Lập lịch sao lưu xoay vòng tự động 24/7',
        'Giá lưu trữ thêm: 1.200 đ / GB / tháng',
      ],
      secondaryBtnText: isLaos ? t.consultBtn : 'NHẬN TƯ VẤN',
    },
    {
      id: 'backup-m365',
      name: isLaos ? 'Backup Microsoft 365' : 'Backup Microsoft 365',
      subtitle: 'SAAS BACKUP & ARCHIVING',
      priceMonthly: isLaos ? '1.5' : '35.000',
      priceAnnual: isLaos ? '1.35' : '31.500',
      unit: isLaos ? 'USD/USER/MO' : 'Đ/USER/THÁNG',
      badge: isLaos ? 'SAAS SECURITY' : 'BẢO VỆ SAAS',
      recommended: false,
      specs: [
        'Bảo vệ Exchange Online, OneDrive, SharePoint & Teams',
        'Lưu trữ bất biến chống Ransomware (Object Lock)',
        'Tìm kiếm eDiscovery và khôi phục chi tiết từng Email/Tệp',
        'Lưu trữ linh hoạt không giới hạn thời gian',
        'Tuân thủ đầy đủ quy định pháp lý và kiểm toán',
        'Tối ưu dung lượng lưu trữ trên Object Storage',
      ],
      secondaryBtnText: isLaos ? t.freeTrialBtn : 'DÙNG THỬ MIỄN PHÍ',
    },
  ];

  const handleConsult = (packageName: string) => {
    if (onOpenConsult) {
      onOpenConsult(`Tư vấn gói ${packageName} - Khu vực: ${selectedRegion} - Chu kỳ: ${billingMode === 'annual' ? '12 tháng (Chiết khấu 10%)' : '1 tháng'}`);
    }
  };

  const handleCustomConsult = () => {
    if (onOpenConsult) {
      onOpenConsult('Tư vấn thiết kế giải pháp Viettel Cloud Backup may đo riêng biệt cho hệ thống doanh nghiệp');
    }
  };

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

        {/* Top Control Bar: Billing Cycle & Region Controls */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 mb-12 text-xs">
          
          {/* Chu kỳ thanh toán */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.billingModel}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingMode('monthly')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer ${
                  billingMode === 'monthly'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                1 Tháng (Tiêu chuẩn)
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setBillingMode('annual')}
                className={`px-4 py-2 rounded-full font-extrabold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  billingMode === 'annual'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>12 Tháng</span>
                <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-red-500 text-white font-black">-10%</span>
              </VIDCNativeButton>
            </div>
          </div>

          {/* Khu vực hạ tầng Data Center */}
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

        {/* 4 Pricing Cards Grid Chuẩn UI TDV-01 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 items-stretch">
          {packages.map((pkg) => {
            const isRecommended = pkg.recommended;
            const displayPrice = billingMode === 'monthly' ? pkg.priceMonthly : pkg.priceAnnual;

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
                    {pkg.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                        <span className="leading-snug">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom CTA Buttons */}
                <div className="space-y-2 pt-2">
                  <VIDCAnchor
                    href="https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-backup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-sm uppercase tracking-wider text-center block"
                  >
                    {t.registerNow}
                  </VIDCAnchor>
                  <VIDCNativeButton
                    type="button"
                    onClick={() => handleConsult(pkg.name)}
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-extrabold text-[11px] transition-all uppercase tracking-wider text-center block cursor-pointer"
                  >
                    {pkg.secondaryBtnText}
                  </VIDCNativeButton>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Configuration Dark Banner Chuẩn UI TDV-01 */}
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
              onClick={handleCustomConsult}
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

        {/* Optional Toggle for Package Comparison Matrix */}
        <div className="mt-8 text-center">
          <VIDCNativeButton
            type="button"
            onClick={() => setShowMatrix(!showMatrix)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:border-red-200 transition-all shadow-xs cursor-pointer"
          >
            <span>{t.compareTableTitle}</span>
            {showMatrix ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </VIDCNativeButton>
        </div>

        {/* Collapsible Comparison Table */}
        {showMatrix && (
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-800 font-extrabold">
                  <th className="p-4 min-w-[220px]">Tiêu Chí / Tính Năng</th>
                  <th className="p-4 min-w-[160px] text-center">Backup Cloud Server</th>
                  <th className="p-4 min-w-[160px] text-center">Backup Private Cloud</th>
                  <th className="p-4 min-w-[160px] text-center">Backup Server Vật Lý</th>
                  <th className="p-4 min-w-[160px] text-center">Backup Microsoft 365</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Môi trường áp dụng</td>
                  <td className="p-4 text-center">Máy chủ ảo Cloud Server</td>
                  <td className="p-4 text-center">Private Cloud, VPC, DPC</td>
                  <td className="p-4 text-center">Physical Windows / Linux</td>
                  <td className="p-4 text-center">SaaS (Exchange, Teams...)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Chuẩn mã hóa</td>
                  <td className="p-4 text-center">AES 256 + SSL</td>
                  <td className="p-4 text-center">AES 256 + SSL</td>
                  <td className="p-4 text-center">AES 256 + SSL</td>
                  <td className="p-4 text-center">AES 256 + SSL</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Chống Ransomware (Object Lock)</td>
                  <td className="p-4 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-4 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Khôi phục mức ứng dụng (Explorer)</td>
                  <td className="p-4 text-center">SQL, AD, Exchange</td>
                  <td className="p-4 text-center">SQL, AD, Exchange, Oracle</td>
                  <td className="p-4 text-center">Bare-metal / SQL Server</td>
                  <td className="p-4 text-center">Email, Chat, Files, Contacts</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Cam kết SLA khả dụng</td>
                  <td className="p-4 text-center font-bold text-slate-900">99.99%</td>
                  <td className="p-4 text-center font-bold text-slate-900">99.99%</td>
                  <td className="p-4 text-center font-bold text-slate-900">99.99%</td>
                  <td className="p-4 text-center font-bold text-slate-900">99.99%</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>
    </section>
  );
};
