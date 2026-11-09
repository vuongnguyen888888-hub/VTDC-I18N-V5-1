import React, { useState } from 'react';
import { Check, Sliders, Server, Building2, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface DedicatedComputePricingEstimatorProps {
  currentMarket?: SEAMarket;
  onOpenQuote: (config?: any) => void;
}

export const DedicatedComputePricingEstimator: React.FC<DedicatedComputePricingEstimatorProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  const isLaos = currentMarket?.code === 'la';

  // State: Brand selection [dell | hpe | supermicro]
  const [selectedBrand, setSelectedBrand] = useState<'dell' | 'hpe' | 'supermicro'>('dell');
  // State: DC Region selection [north | south]
  const [selectedRegion, setSelectedRegion] = useState<'north' | 'south'>('north');

  const t = {
    eyebrow: isLaos ? 'SERVICE PRICING' : 'BẢNG GIÁ DỊCH VỤ',
    headline: isLaos ? 'Optimal Server Configurations for Your Business' : 'Lựa chọn cấu hình máy chủ tối ưu cho doanh nghiệp',
    subtitle: isLaos
      ? 'Genuine enterprise-grade physical server infrastructure with transparent & flexible pricing'
      : 'Hạ tầng máy chủ chuyên dụng chính hãng tiêu chuẩn Enterprise với chi phí minh bạch & linh hoạt',
    brand: isLaos ? 'Hardware Brand:' : 'Dòng phần cứng:',
    region: isLaos ? 'Data Center Region:' : 'Khu vực Trung tâm Dữ liệu:',
    north: isLaos ? 'Northern DC (Hanoi)' : 'Miền Bắc (Hà Nội)',
    south: isLaos ? 'Southern DC (HCMC / Binh Duong)' : 'Miền Nam (TP.HCM / Bình Dương)',
    config: isLaos ? 'CONFIGURATION' : 'CẤU HÌNH',
    detailDesc: isLaos ? 'Detailed hardware specs include:' : 'Cấu hình chi tiết bao gồm:',
    contactPrice: isLaos ? 'Contact' : 'Liên hệ',
    contactUnit: isLaos ? 'QUOTE' : 'BÁO GIÁ',
    registerNow: isLaos ? 'Request Quote' : 'Đăng ký tư vấn',
    customConfig: isLaos ? 'Select this plan' : 'Tùy chỉnh cấu hình',
    customTitle: isLaos ? 'Need a Custom Tailored Hardware Architecture?' : 'Doanh nghiệp cần cấu hình phần cứng đặc thù?',
    customDesc: isLaos 
      ? 'Viettel IDC engineers will design customized configurations (Multi-socket CPU, High RAM 1TB+, NVMe RAID, 10Gbps dedicated Uplink, Hardware GPU) tailored to your exact business workloads.'
      : 'Đội ngũ kỹ sư Viettel IDC sẽ tư vấn thiết kế cấu hình riêng biệt (Đa Socket CPU, RAM dung lượng lớn 1TB+, NVMe RAID, Card mạng 10Gbps chuyên dụng, GPU tăng tốc) tối ưu tuyệt đối theo yêu cầu tải của bạn.',
    customBtn: isLaos ? 'Contact for custom architecture' : 'Yêu cầu tư vấn thiết kế riêng',
  };

  // 4 Packages per brand
  const packagesByBrand = {
    dell: [
      {
        id: 'dell-entry',
        name: 'Dell PowerEdge R250/R350',
        subtitle: isLaos ? 'ENTRY ENTERPRISE' : 'TIÊU CHUẨN DOANH NGHIỆP',
        badge: isLaos ? 'POPULAR' : 'PHỔ BIẾN',
        priceText: isLaos ? 'Contact' : 'Liên hệ',
        priceUnit: isLaos ? 'QUOTE' : 'BÁO GIÁ',
        cpu: '1x Intel Xeon E-2300 Series (6C/12T)',
        ram: '32GB DDR4 ECC UDIMM (Up to 128GB)',
        storage: '2x 480GB Enterprise SSD SATA (RAID 1)',
        network: '1Gbps Shared Uplink, 01 Static IPv4',
        dataTransfer: isLaos ? 'Unlimited Domestic Bandwidth' : 'Băng thông trong nước không giới hạn',
        management: 'Dell iDRAC9 Enterprise Remote Access',
        support: isLaos ? '24/7/365 Hardware Replacement' : 'Bảo hành thay thế linh kiện 24/7/365',
        recommended: false,
      },
      {
        id: 'dell-mainstream',
        name: 'Dell PowerEdge R650/R750',
        subtitle: isLaos ? 'MAINSTREAM DUAL CPU' : 'HIỆU NĂNG CAO DUAL CPU',
        badge: isLaos ? '★ RECOMMENDED' : '★ KHUYÊN DÙNG',
        priceText: isLaos ? 'Contact' : 'Liên hệ',
        priceUnit: isLaos ? 'QUOTE' : 'BÁO GIÁ',
        cpu: '2x Intel Xeon Silver 4314 (32C/64T)',
        ram: '64GB - 128GB DDR4/DDR5 ECC Registered',
        storage: '2x 960GB Enterprise SSD NVMe / SAS',
        network: '1Gbps / 10Gbps Uplink, 01 Static IPv4',
        dataTransfer: isLaos ? 'Unlimited Domestic Bandwidth' : 'Băng thông trong nước không giới hạn',
        management: 'Dell iDRAC9 Enterprise Remote Access',
        support: isLaos ? '24/7/365 Hardware Replacement' : 'Bảo hành thay thế linh kiện 24/7/365',
        recommended: true,
      },
      {
        id: 'dell-performance',
        name: 'Dell PowerEdge R750xs / R850',
        subtitle: isLaos ? 'HEAVY DATABASE & ERP' : 'CƠ SỞ DỮ LIỆU & ERP',
        badge: isLaos ? 'HIGH IOPS' : 'TẢI CAO',
        priceText: isLaos ? 'Contact' : 'Liên hệ',
        priceUnit: isLaos ? 'QUOTE' : 'BÁO GIÁ',
        cpu: '2x Intel Xeon Gold 5318Y / 6330',
        ram: '128GB - 256GB DDR4/DDR5 ECC',
        storage: '4x 1.92TB Enterprise NVMe SSD (Hardware RAID)',
        network: '10Gbps Uplink Port, 01 Static IPv4',
        dataTransfer: isLaos ? 'Unlimited Domestic Bandwidth' : 'Băng thông trong nước không giới hạn',
        management: 'Dell iDRAC9 Enterprise Remote Access',
        support: isLaos ? '24/7/365 Hardware Replacement' : 'Bảo hành thay thế linh kiện 24/7/365',
        recommended: false,
      },
      {
        id: 'dell-custom',
        name: 'Dell PowerEdge Custom Cluster',
        subtitle: isLaos ? 'CUSTOM TAILORED' : 'THIẾT KẾ ĐẶC THÙ',
        badge: isLaos ? 'ENTERPRISE' : 'DỰ ÁN LỚN',
        priceText: isLaos ? 'Contact' : 'Liên hệ',
        priceUnit: isLaos ? 'QUOTE' : 'BÁO GIÁ',
        cpu: 'Dual Intel Xeon Platinum / AMD EPYC',
        ram: '512GB - 1TB+ DDR5 ECC Registered',
        storage: 'All-Flash NVMe High Density Arrays',
        network: 'Dual 10Gbps / 25Gbps Redundant Uplink',
        dataTransfer: isLaos ? 'Unlimited Domestic Bandwidth' : 'Băng thông trong nước không giới hạn',
        management: 'Dell iDRAC9 Enterprise + OpenManage',
        support: isLaos ? '24/7/365 Dedicated SLA Support' : 'Hỗ trợ kỹ sư chuyên trách 24/7',
        recommended: false,
      }
    ],
    hpe: [
      {
        id: 'hpe-dl20',
        name: 'HPE ProLiant DL20 Gen10 Plus',
        subtitle: isLaos ? 'COMPACT & RELIABLE' : 'TIÊU CHUẨN ĐỘ BỀN CAO',
        badge: isLaos ? 'POPULAR' : 'PHỔ BIẾN',
        priceText: isLaos ? 'Contact' : 'Liên hệ',
        priceUnit: isLaos ? 'QUOTE' : 'BÁO GIÁ',
        cpu: '1x Intel Xeon E-2300 (6C/12T)',
        ram: '32GB DDR4 ECC UDIMM',
        storage: '2x 480GB Enterprise SSD SATA',
        network: '1Gbps Shared Uplink, 01 Static IPv4',
        dataTransfer: isLaos ? 'Unlimited Domestic Bandwidth' : 'Băng thông trong nước không giới hạn',
        management: 'HPE iLO 5 Advanced Remote Management',
        support: isLaos ? '24/7/365 Hardware Replacement' : 'Bảo hành thay thế linh kiện 24/7/365',
        recommended: false,
      },
      {
        id: 'hpe-dl360',
        name: 'HPE ProLiant DL360 / DL380 Gen10',
        subtitle: isLaos ? 'ENTERPRISE WORKHORSE' : 'HIỆU NĂNG CAO DUAL CPU',
        badge: isLaos ? '★ RECOMMENDED' : '★ KHUYÊN DÙNG',
        priceText: isLaos ? 'Contact' : 'Liên hệ',
        priceUnit: isLaos ? 'QUOTE' : 'BÁO GIÁ',
        cpu: '2x Intel Xeon Silver 4314 (32C/64T)',
        ram: '64GB - 128GB DDR4 SmartMemory',
        storage: '2x 960GB Enterprise SAS/NVMe SSD',
        network: '1Gbps / 10Gbps Uplink, 01 Static IPv4',
        dataTransfer: isLaos ? 'Unlimited Domestic Bandwidth' : 'Băng thông trong nước không giới hạn',
        management: 'HPE iLO 5 Advanced Remote Management',
        support: isLaos ? '24/7/365 Hardware Replacement' : 'Bảo hành thay thế linh kiện 24/7/365',
        recommended: true,
      },
      {
        id: 'hpe-dl380-gold',
        name: 'HPE ProLiant DL380 Gen10 Plus',
        subtitle: isLaos ? 'MISSION-CRITICAL' : 'CƠ SỞ DỮ LIỆU & VIRTUALIZATION',
        badge: isLaos ? 'HIGH IOPS' : 'TẢI CAO',
        priceText: isLaos ? 'Contact' : 'Liên hệ',
        priceUnit: isLaos ? 'QUOTE' : 'BÁO GIÁ',
        cpu: '2x Intel Xeon Gold 6330 (56C/112T)',
        ram: '128GB - 256GB DDR4 ECC Registered',
        storage: '4x 1.92TB Enterprise NVMe High-IOPS',
        network: '10Gbps Uplink Port, 01 Static IPv4',
        dataTransfer: isLaos ? 'Unlimited Domestic Bandwidth' : 'Băng thông trong nước không giới hạn',
        management: 'HPE iLO 5 Advanced Remote Management',
        support: isLaos ? '24/7/365 Hardware Replacement' : 'Bảo hành thay thế linh kiện 24/7/365',
        recommended: false,
      },
      {
        id: 'hpe-custom',
        name: 'HPE Synergy / Multi-Node Gen11',
        subtitle: isLaos ? 'CUSTOM CLUSTER' : 'HẠ TẦNG DOANH NGHIỆP LỚN',
        badge: isLaos ? 'ENTERPRISE' : 'DỰ ÁN LỚN',
        priceText: isLaos ? 'Contact' : 'Liên hệ',
        priceUnit: isLaos ? 'QUOTE' : 'BÁO GIÁ',
        cpu: 'Dual Intel Xeon Scalable Gen4 / Gen5',
        ram: '512GB - 1TB+ DDR5 SmartMemory',
        storage: 'Enterprise NVMe All-Flash Scalable',
        network: 'Dual 10Gbps / 25Gbps Redundant Uplink',
        dataTransfer: isLaos ? 'Unlimited Domestic Bandwidth' : 'Băng thông trong nước không giới hạn',
        management: 'HPE iLO 6 Advanced + OneView',
        support: isLaos ? '24/7/365 Dedicated SLA Support' : 'Hỗ trợ kỹ sư chuyên trách 24/7',
        recommended: false,
      }
    ],
    supermicro: [
      {
        id: 'sm-1u',
        name: 'Supermicro 1U Single Socket',
        subtitle: isLaos ? 'DENSE & COST-EFFECTIVE' : 'TIÊU CHUẨN TỐI ƯU CHI PHÍ',
        badge: isLaos ? 'POPULAR' : 'PHỔ BIẾN',
        priceText: isLaos ? 'Contact' : 'Liên hệ',
        priceUnit: isLaos ? 'QUOTE' : 'BÁO GIÁ',
        cpu: '1x AMD EPYC 7003 Series / Intel Xeon',
        ram: '32GB - 64GB DDR4 ECC Registered',
        storage: '2x 480GB Enterprise SATA/NVMe SSD',
        network: '1Gbps Shared Uplink, 01 Static IPv4',
        dataTransfer: isLaos ? 'Unlimited Domestic Bandwidth' : 'Băng thông trong nước không giới hạn',
        management: 'Supermicro IPMI 2.0 with KVM over IP',
        support: isLaos ? '24/7/365 Hardware Replacement' : 'Bảo hành thay thế linh kiện 24/7/365',
        recommended: false,
      },
      {
        id: 'sm-2u-dual',
        name: 'Supermicro 2U Dual Socket',
        subtitle: isLaos ? 'HIGH COMPUTE DENSITY' : 'HIỆU NĂNG CAO DUAL CPU',
        badge: isLaos ? '★ RECOMMENDED' : '★ KHUYÊN DÙNG',
        priceText: isLaos ? 'Contact' : 'Liên hệ',
        priceUnit: isLaos ? 'QUOTE' : 'BÁO GIÁ',
        cpu: '2x AMD EPYC 7763 / Intel Xeon Silver',
        ram: '64GB - 128GB DDR4/DDR5 ECC Registered',
        storage: '2x 960GB Enterprise NVMe SSD',
        network: '1Gbps / 10Gbps Uplink, 01 Static IPv4',
        dataTransfer: isLaos ? 'Unlimited Domestic Bandwidth' : 'Băng thông trong nước không giới hạn',
        management: 'Supermicro IPMI 2.0 with KVM over IP',
        support: isLaos ? '24/7/365 Hardware Replacement' : 'Bảo hành thay thế linh kiện 24/7/365',
        recommended: true,
      },
      {
        id: 'sm-storage',
        name: 'Supermicro High-Density Storage',
        subtitle: isLaos ? 'STORAGE & BIG DATA' : 'LƯU TRỮ DUNG LƯỢNG LỚN',
        badge: isLaos ? 'HIGH IOPS' : 'TẢI CAO',
        priceText: isLaos ? 'Contact' : 'Liên hệ',
        priceUnit: isLaos ? 'QUOTE' : 'BÁO GIÁ',
        cpu: '2x Intel Xeon Gold / AMD EPYC',
        ram: '128GB - 256GB DDR4/DDR5 ECC',
        storage: '8x - 12x Enterprise SAS/SATA HDD + NVMe Cache',
        network: '10Gbps Uplink Port, 01 Static IPv4',
        dataTransfer: isLaos ? 'Unlimited Domestic Bandwidth' : 'Băng thông trong nước không giới hạn',
        management: 'Supermicro IPMI 2.0 with KVM over IP',
        support: isLaos ? '24/7/365 Hardware Replacement' : 'Bảo hành thay thế linh kiện 24/7/365',
        recommended: false,
      },
      {
        id: 'sm-gpu',
        name: 'Supermicro GPU Server',
        subtitle: isLaos ? 'AI / ML / DEEP LEARNING' : 'AI / MACHINE LEARNING',
        badge: isLaos ? 'GPU POWERED' : 'GPU TỐC ĐỘ CAO',
        priceText: isLaos ? 'Contact' : 'Liên hệ',
        priceUnit: isLaos ? 'QUOTE' : 'BÁO GIÁ',
        cpu: 'Dual AMD EPYC / Intel Xeon Gold',
        ram: '256GB - 512GB DDR5 ECC Registered',
        storage: '4x 3.84TB High IOPS Enterprise NVMe',
        network: 'Dual 10Gbps / 25Gbps Uplink, GPU Ready',
        dataTransfer: isLaos ? 'Unlimited Domestic Bandwidth' : 'Băng thông trong nước không giới hạn',
        management: 'Supermicro IPMI 2.0 Dedicated',
        support: isLaos ? '24/7/365 Dedicated SLA Support' : 'Hỗ trợ kỹ sư chuyên trách 24/7',
        recommended: false,
      }
    ]
  };

  const currentPackages = packagesByBrand[selectedBrand] || packagesByBrand.dell;

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Controls Row: Brand Selection & DC Region Selection */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Brand Switcher Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider hidden sm:inline">
              {t.brand}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedBrand('dell')}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 ${
                  selectedBrand === 'dell'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dell PowerEdge
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedBrand('hpe')}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 ${
                  selectedBrand === 'hpe'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                HPE ProLiant
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedBrand('supermicro')}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 ${
                  selectedBrand === 'supermicro'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Supermicro Enterprise
              </VIDCNativeButton>
            </div>
          </div>

          {/* Region Switcher Pills */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider hidden sm:inline">
              {t.region}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('north')}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 ${
                  selectedRegion === 'north'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.north}
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('south')}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 ${
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

        {/* Pricing Cards Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 items-stretch">
          {currentPackages.map((pkg) => {
            const isRecommended = pkg.recommended;

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
                        {pkg.priceText}
                      </span>
                      <span className="text-[11px] font-extrabold text-slate-500 uppercase">
                        {pkg.priceUnit}
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
                      <span className="font-bold text-slate-900">{pkg.cpu}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-bold text-slate-900">{pkg.ram}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="font-bold text-slate-900">{pkg.storage}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="text-slate-700">{pkg.network}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="text-slate-700">{pkg.dataTransfer}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span className="text-slate-700">{pkg.management}</span>
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
                    onClick={() => onOpenQuote({ package: pkg, brand: selectedBrand, region: selectedRegion })}
                    className="w-full py-2.5 px-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-sm uppercase tracking-wider text-center block cursor-pointer"
                  >
                    {t.registerNow}
                  </VIDCNativeButton>
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenQuote({ package: pkg, brand: selectedBrand, region: selectedRegion, custom: true })}
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-extrabold text-[11px] transition-all uppercase tracking-wider text-center block cursor-pointer"
                  >
                    {t.customConfig}
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
              onClick={() => onOpenQuote({ customArchitecture: true })}
              className="px-6 py-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[var(--vidc-color-brand-red)]/20 transition-all shrink-0 cursor-pointer min-h-[44px]"
            >
              {t.customBtn}
            </VIDCNativeButton>
          </div>
        </div>

      </div>
    </section>
  );
};
