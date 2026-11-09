import React, { useState } from 'react';
import { 
  Cpu, 
  Check, 
  Sparkles, 
  MapPin, 
  LayoutGrid, 
  Table as TableIcon, 
  ArrowRight,
  PhoneCall,
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export interface GPUConfigItem {
  id: string;
  name: string;
  chipType: 'l40s' | 'a30' | 't4' | 'h200';
  chipName: string;
  vCpu: string;
  gpuCard: string;
  ram: string;
  ssd: string;
  bandwidth: string;
  ipPublic: string;
  priceMonthly: string;
  priceHourly: string;
  priceMonthVnd: number;
  subtitle: string;
  badge: string | null;
  recommended: boolean;
  dataCenters: string[];
  secondaryBtnText?: string;
}

interface CloudGPUPricingProps {
  currentMarket: SEAMarket;
  onSelectConfigForQuote: (config: GPUConfigItem, location: string) => void;
}

export const CloudGPUPricing: React.FC<CloudGPUPricingProps> = ({
  currentMarket,
  onSelectConfigForQuote,
}) => {
  const isLaos = currentMarket.code === 'la';

  // State Controls
  const [selectedRegion, setSelectedRegion] = useState<'north' | 'south'>('north');
  const [selectedChip, setSelectedChip] = useState<'a30' | 't4' | 'l40s' | 'h200'>('a30');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const t = {
    pricingTitle: isLaos ? 'SERVICE PRICING & ESTIMATOR' : 'BẢNG GIÁ DỊCH VỤ & DỰ TOÁN',
    headline: isLaos 
      ? 'Choose the optimal GPU configuration for your AI & 3D workloads' 
      : 'Lựa chọn cấu hình GPU tối ưu cho doanh nghiệp',
    desc: isLaos 
      ? 'Enterprise-grade accelerated computing infrastructure with transparent & flexible costs'
      : 'Hạ tầng tính toán tăng tốc GPU tiêu chuẩn Enterprise với chi phí minh bạch & linh hoạt',
    infrastructureRegion: isLaos ? 'REGION:' : 'KHU VỰC:',
    north: isLaos ? 'North' : 'Miền Bắc',
    south: isLaos ? 'South' : 'Miền Nam',
    chipSeries: isLaos ? 'GPU CARD:' : 'LOẠI CARD GPU:',
    viewStyle: isLaos ? 'VIEW MODE:' : 'CHẾ ĐỘ XEM:',
    cardsView: isLaos ? 'Cards' : 'Dạng Thẻ',
    tableView: isLaos ? 'Table' : 'Bảng Chi Tiết',
    config: isLaos ? 'CONFIGURATION' : 'CẤU HÌNH',
    detailDesc: isLaos ? 'Detailed configuration includes:' : 'Cấu hình chi tiết bao gồm:',
    registerNow: isLaos ? 'REGISTER NOW' : 'ĐĂNG KÝ NGAY',
    freeTrialBtn: isLaos ? 'FREE TRIAL' : 'DÙNG THỬ MIỄN PHÍ',
    consultBtn: isLaos ? 'REQUEST CONSULTATION' : 'NHẬN TƯ VẤN',
    customTitle: isLaos ? 'Custom GPU Configuration — Tailored to your needs' : 'Cấu hình tùy chỉnh — Thiết kế riêng theo nhu cầu',
    customDesc: isLaos 
      ? 'Need a larger AI cluster? We support tailored configurations with up to 8x NVIDIA H200/L40S, NVLink, InfiniBand and multi-node Distributed Training.'
      : 'Cần giải pháp cụm GPU AI lớn hơn? Chúng tôi hỗ trợ may đo cấu hình đa Node lên tới 8x NVIDIA H200/L40S, liên kết NVLink, mạng RoCE/InfiniBand với cam kết SLA 99.99%.',
    customBtn: isLaos ? 'CUSTOM ESTIMATOR' : 'TÙY CHỈNH & DỰ TOÁN',
    vatFootnote: isLaos 
      ? '* All service pricing excludes taxes (VAT). You can scale or adjust GPU resources anytime.'
      : '* Toàn bộ bảng giá dịch vụ chưa bao gồm thuế VAT (10%). Quý khách có thể nâng cấp hoặc điều chỉnh cấu hình bất cứ lúc nào trong bảng điều khiển.',
  };

  const chipFilters = [
    { id: 'a30', label: 'NVIDIA A30' },
    { id: 't4', label: 'NVIDIA Tesla T4' },
    { id: 'l40s', label: 'NVIDIA L40S' },
    { id: 'h200', label: 'NVIDIA H200' },
  ];

  // 1. NVIDIA L40S Packages
  const l40sPackages: GPUConfigItem[] = [
    {
      id: 'l40s-1',
      name: isLaos ? 'Package GPU L40S_1' : 'Gói GPU L40S_1',
      chipType: 'l40s',
      chipName: 'NVIDIA L40S 48GB',
      vCpu: '16 vCPU (Dedicated)',
      gpuCard: '1 Card (48GB GDDR6 ECC)',
      ram: '48 GB RAM ECC',
      ssd: '500 GB NVMe U.2',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '1,250' : '31.000.000',
      priceHourly: isLaos ? '1.72' : '42.500',
      priceMonthVnd: 31000000,
      subtitle: 'AI INFERENCE & RENDERING',
      badge: isLaos ? '★ BEST SELLER' : '★ BÁN CHẠY',
      recommended: false,
      dataCenters: ['Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.freeTrialBtn : 'DÙNG THỬ MIỄN PHÍ',
    },
    {
      id: 'l40s-2',
      name: isLaos ? 'Package GPU L40S_2' : 'Gói GPU L40S_2',
      chipType: 'l40s',
      chipName: 'NVIDIA L40S 48GB',
      vCpu: '32 vCPU (Dedicated)',
      gpuCard: '2 Card (96GB GDDR6 ECC)',
      ram: '96 GB RAM ECC',
      ssd: '1.000 GB NVMe U.2',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '2,490' : '61.850.000',
      priceHourly: isLaos ? '3.42' : '84.700',
      priceMonthVnd: 61850000,
      subtitle: 'MOST POPULAR AI FINETUNE',
      badge: isLaos ? '★ RECOMMENDED' : '★ KHUYÊN DÙNG',
      recommended: true,
      dataCenters: ['Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.freeTrialBtn : 'DÙNG THỬ MIỄN PHÍ',
    },
    {
      id: 'l40s-4',
      name: isLaos ? 'Package GPU L40S_4' : 'Gói GPU L40S_4',
      chipType: 'l40s',
      chipName: 'NVIDIA L40S 48GB',
      vCpu: '64 vCPU (Dedicated)',
      gpuCard: '4 Card (192GB GDDR6 ECC)',
      ram: '192 GB RAM ECC',
      ssd: '2.000 GB NVMe U.2',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '4,980' : '123.600.000',
      priceHourly: isLaos ? '6.85' : '169.300',
      priceMonthVnd: 123600000,
      subtitle: 'ENTERPRISE AI TRAINING',
      badge: isLaos ? '★ HIGH POWER' : '★ HIỆU NĂNG CAO',
      recommended: false,
      dataCenters: ['Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.consultBtn : 'NHẬN TƯ VẤN',
    },
    {
      id: 'l40s-6',
      name: isLaos ? 'Package GPU L40S_6' : 'Gói GPU L40S_6',
      chipType: 'l40s',
      chipName: 'NVIDIA L40S 48GB',
      vCpu: '96 vCPU (Dedicated)',
      gpuCard: '6 Card (288GB GDDR6 ECC)',
      ram: '320 GB RAM ECC',
      ssd: '6.000 GB NVMe U.2',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '8,150' : '202.000.000',
      priceHourly: isLaos ? '11.20' : '276.700',
      priceMonthVnd: 202000000,
      subtitle: 'HEAVY AI TRAINING',
      badge: null,
      recommended: false,
      dataCenters: ['Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.consultBtn : 'NHẬN TƯ VẤN',
    },
    {
      id: 'l40s-8',
      name: isLaos ? 'Package GPU L40S_8' : 'Gói GPU L40S_8',
      chipType: 'l40s',
      chipName: 'NVIDIA L40S 48GB',
      vCpu: '128 vCPU (Dedicated)',
      gpuCard: '8 Card (384GB GDDR6 ECC)',
      ram: '512 GB RAM ECC',
      ssd: '8.000 GB NVMe U.2',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '10,850' : '269.000.000',
      priceHourly: isLaos ? '14.90' : '368.500',
      priceMonthVnd: 269000000,
      subtitle: 'MAXIMUM AI CLUSTER',
      badge: isLaos ? '★ EXTREME' : '★ TỐI ĐA NĂNG LƯỢNG',
      recommended: false,
      dataCenters: ['Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.consultBtn : 'NHẬN TƯ VẤN',
    },
  ];

  // 2. NVIDIA A30 Packages
  const a30Packages: GPUConfigItem[] = [
    {
      id: 'a30-1',
      name: isLaos ? 'Package GPU A30_1' : 'Gói GPU A30_1',
      chipType: 'a30',
      chipName: 'NVIDIA A30 24GB',
      vCpu: '8 vCPU (Dedicated)',
      gpuCard: '1 Card (24GB HBM2)',
      ram: '16 GB RAM ECC',
      ssd: '500 GB NVMe U.2',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '590' : '14.600.000',
      priceHourly: isLaos ? '0.82' : '20.000',
      priceMonthVnd: 14600000,
      subtitle: 'ENTRY LEVEL AI & HPC',
      badge: null,
      recommended: false,
      dataCenters: ['Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.freeTrialBtn : 'DÙNG THỬ MIỄN PHÍ',
    },
    {
      id: 'a30-2',
      name: isLaos ? 'Package GPU A30_2' : 'Gói GPU A30_2',
      chipType: 'a30',
      chipName: 'NVIDIA A30 24GB',
      vCpu: '16 vCPU (Dedicated)',
      gpuCard: '1 Card (24GB HBM2)',
      ram: '32 GB RAM ECC',
      ssd: '500 GB NVMe U.2',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '675' : '16.700.000',
      priceHourly: isLaos ? '0.93' : '22.900',
      priceMonthVnd: 16700000,
      subtitle: 'MAINSTREAM HPC & AI',
      badge: isLaos ? '★ BEST SELLER' : '★ BÁN CHẠY',
      recommended: true,
      dataCenters: ['Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.freeTrialBtn : 'DÙNG THỬ MIỄN PHÍ',
    },
    {
      id: 'a30-3',
      name: isLaos ? 'Package GPU A30_3' : 'Gói GPU A30_3',
      chipType: 'a30',
      chipName: 'NVIDIA A30 24GB',
      vCpu: '32 vCPU (Dedicated)',
      gpuCard: '2 Card (48GB HBM2)',
      ram: '64 GB RAM ECC',
      ssd: '1.000 GB NVMe U.2',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '1,280' : '31.600.000',
      priceHourly: isLaos ? '1.76' : '43.300',
      priceMonthVnd: 31600000,
      subtitle: 'DUAL GPU INFERENCE',
      badge: null,
      recommended: false,
      dataCenters: ['Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.freeTrialBtn : 'DÙNG THỬ MIỄN PHÍ',
    },
    {
      id: 'a30-4',
      name: isLaos ? 'Package GPU A30_4' : 'Gói GPU A30_4',
      chipType: 'a30',
      chipName: 'NVIDIA A30 24GB',
      vCpu: '64 vCPU (Dedicated)',
      gpuCard: '3 Card (72GB HBM2)',
      ram: '128 GB RAM ECC',
      ssd: '2.000 GB NVMe U.2',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '2,150' : '53.200.000',
      priceHourly: isLaos ? '2.95' : '72.900',
      priceMonthVnd: 53200000,
      subtitle: 'MULTI-CARD HPC WORKLOAD',
      badge: null,
      recommended: false,
      dataCenters: ['Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.consultBtn : 'NHẬN TƯ VẤN',
    },
    {
      id: 'a30-5',
      name: isLaos ? 'Package GPU A30_5' : 'Gói GPU A30_5',
      chipType: 'a30',
      chipName: 'NVIDIA A30 24GB',
      vCpu: '128 vCPU (Dedicated)',
      gpuCard: '6 Card (144GB HBM2)',
      ram: '256 GB RAM ECC',
      ssd: '6.000 GB NVMe U.2',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '4,400' : '109.000.000',
      priceHourly: isLaos ? '6.05' : '149.300',
      priceMonthVnd: 109000000,
      subtitle: 'ENTERPRISE AI TRAINING',
      badge: isLaos ? '★ HIGH POWER' : '★ HIỆU NĂNG CAO',
      recommended: false,
      dataCenters: ['Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.consultBtn : 'NHẬN TƯ VẤN',
    },
  ];

  // 3. NVIDIA Tesla T4 Packages
  const t4Packages: GPUConfigItem[] = [
    {
      id: 't4-1',
      name: isLaos ? 'Package GPU T4_1' : 'Gói GPU T4_1',
      chipType: 't4',
      chipName: 'NVIDIA Tesla T4',
      vCpu: '8 vCPU (Standard)',
      gpuCard: '1 Card (16GB GDDR6)',
      ram: '16 GB RAM',
      ssd: '300 GB SSD Enterprise',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '350' : '8.700.000',
      priceHourly: isLaos ? '0.48' : '11.900',
      priceMonthVnd: 8700000,
      subtitle: 'VIDEO TRANSCODING & INFERENCE',
      badge: null,
      recommended: false,
      dataCenters: ['Pháp Vân', 'Hoàng Hoa Thám', 'Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.freeTrialBtn : 'DÙNG THỬ MIỄN PHÍ',
    },
    {
      id: 't4-2',
      name: isLaos ? 'Package GPU T4_2' : 'Gói GPU T4_2',
      chipType: 't4',
      chipName: 'NVIDIA Tesla T4',
      vCpu: '16 vCPU (Standard)',
      gpuCard: '1 Card (16GB GDDR6)',
      ram: '32 GB RAM',
      ssd: '300 GB SSD Enterprise',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '418' : '10.320.000',
      priceHourly: isLaos ? '0.57' : '14.100',
      priceMonthVnd: 10320000,
      subtitle: 'AI CAMERA & STREAMING',
      badge: isLaos ? '★ BEST SELLER' : '★ BÁN CHẠY',
      recommended: true,
      dataCenters: ['Pháp Vân', 'Hoàng Hoa Thám', 'Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.freeTrialBtn : 'DÙNG THỬ MIỄN PHÍ',
    },
    {
      id: 't4-3',
      name: isLaos ? 'Package GPU T4_3' : 'Gói GPU T4_3',
      chipType: 't4',
      chipName: 'NVIDIA Tesla T4',
      vCpu: '32 vCPU (Standard)',
      gpuCard: '1 Card (16GB GDDR6)',
      ram: '64 GB RAM',
      ssd: '300 GB SSD Enterprise',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '578' : '14.280.000',
      priceHourly: isLaos ? '0.79' : '19.600',
      priceMonthVnd: 14280000,
      subtitle: 'HEAVY INFERENCE VM',
      badge: null,
      recommended: false,
      dataCenters: ['Pháp Vân', 'Hoàng Hoa Thám', 'Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.freeTrialBtn : 'DÙNG THỬ MIỄN PHÍ',
    },
    {
      id: 't4-4',
      name: isLaos ? 'Package GPU T4_4' : 'Gói GPU T4_4',
      chipType: 't4',
      chipName: 'NVIDIA Tesla T4',
      vCpu: '16 vCPU (Standard)',
      gpuCard: '2 Card (32GB GDDR6)',
      ram: '32 GB RAM',
      ssd: '300 GB SSD Enterprise',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '599' : '14.800.000',
      priceHourly: isLaos ? '0.82' : '20.300',
      priceMonthVnd: 14800000,
      subtitle: 'DUAL T4 MULTI-STREAM',
      badge: null,
      recommended: false,
      dataCenters: ['Pháp Vân', 'Hoàng Hoa Thám', 'Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.freeTrialBtn : 'DÙNG THỬ MIỄN PHÍ',
    },
    {
      id: 't4-5',
      name: isLaos ? 'Package GPU T4_5' : 'Gói GPU T4_5',
      chipType: 't4',
      chipName: 'NVIDIA Tesla T4',
      vCpu: '32 vCPU (Standard)',
      gpuCard: '2 Card (32GB GDDR6)',
      ram: '64 GB RAM',
      ssd: '300 GB SSD Enterprise',
      bandwidth: isLaos ? '300 Mbps Bandwidth' : '300 Mbps Băng thông',
      ipPublic: isLaos ? '1 Static Public IP' : '1 IP Public tĩnh',
      priceMonthly: isLaos ? '740' : '18.280.000',
      priceHourly: isLaos ? '1.01' : '25.000',
      priceMonthVnd: 18280000,
      subtitle: 'HIGH-DENSITY MEDIA SERVER',
      badge: null,
      recommended: false,
      dataCenters: ['Pháp Vân', 'Hoàng Hoa Thám', 'Hòa Lạc', 'Bình Dương'],
      secondaryBtnText: isLaos ? t.consultBtn : 'NHẬN TƯ VẤN',
    },
  ];

  // Get active package list by chip
  const getActivePackages = () => {
    switch (selectedChip) {
      case 'l40s':
        return l40sPackages;
      case 'a30':
        return a30Packages;
      case 't4':
        return t4Packages;
      default:
        return [];
    }
  };

  const currentPackages = getActivePackages();

  const handleRegisterH200 = () => {
    const h200CustomItem: GPUConfigItem = {
      id: 'h200-enterprise',
      name: isLaos ? 'NVIDIA H200 Super GPU Cluster' : 'Cụm Siêu GPU NVIDIA H200 (Kiến Trúc Hopper)',
      chipType: 'h200',
      chipName: 'NVIDIA H200 141GB HBM3e',
      vCpu: 'May đo Enterprise (Multi-Node / SXM5)',
      gpuCard: '1 đến 8+ Card NVIDIA H200 141GB',
      ram: 'Lên tới 2 TB ECC DDR5',
      ssd: 'Enterprise NVMe Gen 5 All-Flash',
      bandwidth: '10 Gbps + Liên kết NVLink 900 GB/s',
      ipPublic: 'Dải IP Public riêng biệt',
      priceMonthly: isLaos ? 'Enterprise Quote' : 'Khảo sát báo giá',
      priceHourly: '0',
      priceMonthVnd: 0,
      subtitle: 'SUPER GPU FOR LLM & GENAI',
      badge: '★ FLAGSHIP',
      recommended: true,
      dataCenters: [selectedRegion === 'north' ? 'Hòa Lạc' : 'Bình Dương'],
    };
    onSelectConfigForQuote(h200CustomItem, selectedRegion === 'north' ? 'Hòa Lạc' : 'Bình Dương');
  };

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200"
    >
      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* Top Control Bar: KHU VỰC, LOẠI CARD GPU, CHẾ ĐỘ XEM all on the same single row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-10 text-xs">
          
          {/* 1. Khu vực hạ tầng */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
              <span>{t.infrastructureRegion}</span>
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setSelectedRegion('north')}
                className={`px-3.5 py-1.5 rounded-full font-extrabold text-xs transition-all duration-200 ${
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
                className={`px-3.5 py-1.5 rounded-full font-extrabold text-xs transition-all duration-200 ${
                  selectedRegion === 'south'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.south}
              </VIDCNativeButton>
            </div>
          </div>

          {/* 2. Tên các loại card thiết kế hình viên thuốc (GPU Chip Pills) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px] flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
              <span>{t.chipSeries}</span>
            </span>
            <div className="flex flex-wrap items-center justify-center gap-1 p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              {chipFilters.map((chip) => {
                const isSelected = selectedChip === chip.id;
                return (
                  <VIDCNativeButton
                    key={chip.id}
                    type="button"
                    onClick={() => setSelectedChip(chip.id as any)}
                    className={`px-3.5 py-1.5 rounded-full font-extrabold text-xs transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-md'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {chip.label}
                  </VIDCNativeButton>
                );
              })}
            </div>
          </div>

          {/* 3. Chế độ xem: Chỉ hiện Icon */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="font-extrabold text-slate-500 uppercase tracking-wider text-[11px]">
              {t.viewStyle}
            </span>
            <div className="inline-flex p-1 bg-white border border-slate-200 rounded-full shadow-sm">
              <VIDCNativeButton
                type="button"
                onClick={() => setViewMode('cards')}
                className={`p-2 rounded-full font-extrabold text-xs flex items-center justify-center transition-all ${
                  viewMode === 'cards'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title={t.cardsView}
                aria-label={t.cardsView}
              >
                <LayoutGrid className="w-4 h-4" />
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-full font-extrabold text-xs flex items-center justify-center transition-all ${
                  viewMode === 'table'
                    ? 'bg-[var(--vidc-legacy-hex-0f172a)] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title={t.tableView}
                aria-label={t.tableView}
              >
                <TableIcon className="w-4 h-4" />
              </VIDCNativeButton>
            </div>
          </div>

        </div>

        {/* Dynamic Display of GPU Packages: Cards Grid vs Table View */}
        {selectedChip !== 'h200' ? (
          <div>
            {viewMode === 'cards' ? (
              /* 5 Pricing Cards Grid in 1 row on large screen */
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-12 items-stretch">
                {currentPackages.map((pkg) => {
                  const isRecommended = pkg.recommended;
                  const displayPrice = pkg.priceMonthly;
                  const displayUnit = isLaos ? 'USD/THÁNG' : 'Đ/THÁNG';

                  return (
                    <div
                      key={pkg.id}
                      className={`relative rounded-2xl p-4 sm:p-4.5 bg-white border border-slate-200/90 flex flex-col justify-between transition-all duration-300 ${
                        isRecommended
                          ? 'shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-300 ring-1 ring-[var(--vidc-color-brand-red)]/20'
                          : 'shadow-sm hover:shadow-md hover:border-slate-300'
                      }`}
                    >
                      <div>
                        {/* Card Header: Title, Subtitle, Badge */}
                        <div className="min-h-[50px] mb-2">
                          <div className="flex items-center justify-between gap-1.5">
                            <h3 className="text-[15px] font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
                              {pkg.name}
                            </h3>
                            {pkg.badge && (
                              <span className="px-1.5 py-0.5 rounded-full text-[9px] font-black bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/80 whitespace-nowrap">
                                {pkg.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-0.5">
                            {pkg.subtitle}
                          </p>
                        </div>

                        {/* Price */}
                        <div className="my-2.5 pb-2.5 border-b border-slate-100">
                          <div className="flex items-baseline gap-1 flex-wrap">
                            <span className="text-xl sm:text-2xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">
                              {isLaos ? `$${displayPrice}` : displayPrice}
                            </span>
                            <span className="text-[10px] font-extrabold text-slate-500 uppercase">
                              {displayUnit}
                            </span>
                          </div>
                        </div>

                        {/* Config Header */}
                        <div className="mt-3 mb-2.5">
                          <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider">
                            {t.config}
                          </h4>
                          <p className="text-[10px] text-slate-400 mt-0.5">
                            {t.detailDesc}
                          </p>
                        </div>

                        {/* Specs list with red checkmarks */}
                        <ul className="space-y-2 text-[11.5px] sm:text-xs text-slate-700 mb-5">
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                            <span className="font-bold text-slate-900 leading-snug">{pkg.gpuCard}</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                            <span className="font-bold text-slate-900 leading-snug">{pkg.vCpu}</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                            <span className="font-bold text-slate-900 leading-snug">{pkg.ram}</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                            <span className="font-bold text-slate-900 leading-snug">{pkg.ssd}</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                            <span className="text-slate-700 leading-snug">{pkg.bandwidth}</span>
                          </li>
                          <li className="flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                            <span className="text-slate-700 leading-snug">{pkg.ipPublic}</span>
                          </li>
                        </ul>
                      </div>

                      {/* Card Bottom CTA Buttons */}
                      <div className="space-y-1.5 pt-2">
                        <VIDCAnchor
                          href="https://auth.vtidc-test.com/?redirect_uri=https%3A%2F%2Fvconsole.vtidc-test.com%2F%23%2Fprovision%3Fservice%3Dcloud-gpu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 px-2.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-[11px] transition-all shadow-sm uppercase tracking-wider text-center block"
                        >
                          {t.registerNow}
                        </VIDCAnchor>
                        <VIDCNativeButton
                          type="button"
                          onClick={() => onSelectConfigForQuote(pkg, selectedRegion === 'north' ? 'Hòa Lạc' : 'Bình Dương')}
                          className="w-full py-1.5 px-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200 font-extrabold text-[10.5px] transition-all uppercase tracking-wider text-center block cursor-pointer"
                        >
                          {pkg.secondaryBtnText || t.consultBtn}
                        </VIDCNativeButton>
                      </div>

                    </div>
                  );
                })}
              </div>
            ) : (
              /* Table View */
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-700">
                        <th className="py-3.5 px-4">Tên Gói</th>
                        <th className="py-3.5 px-3">Card GPU</th>
                        <th className="py-3.5 px-3">vCPU</th>
                        <th className="py-3.5 px-3">RAM</th>
                        <th className="py-3.5 px-3">Ổ cứng SSD</th>
                        <th className="py-3.5 px-3">Băng Thông</th>
                        <th className="py-3.5 px-3">IP Public</th>
                        <th className="py-3.5 px-4 text-right">
                          Phí Duy Trì (đ/Tháng)
                        </th>
                        <th className="py-3.5 px-4 text-center">Thao Tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                      {currentPackages.map((pkg) => {
                        const displayPrice = pkg.priceMonthly;
                        return (
                          <tr key={pkg.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-4 px-4 font-extrabold text-[var(--vidc-legacy-hex-222225)] whitespace-nowrap">
                              {pkg.name}
                            </td>
                            <td className="py-4 px-3 text-slate-900 font-bold whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/60 font-extrabold text-xs">
                                {pkg.gpuCard}
                              </span>
                            </td>
                            <td className="py-4 px-3 text-slate-700 font-semibold whitespace-nowrap">{pkg.vCpu}</td>
                            <td className="py-4 px-3 text-slate-700 whitespace-nowrap">{pkg.ram}</td>
                            <td className="py-4 px-3 text-slate-700 whitespace-nowrap">{pkg.ssd}</td>
                            <td className="py-4 px-3 text-slate-700 whitespace-nowrap">{pkg.bandwidth}</td>
                            <td className="py-4 px-3 text-slate-700 whitespace-nowrap">{pkg.ipPublic}</td>
                            <td className="py-4 px-4 text-right font-extrabold text-[var(--vidc-color-brand-red)] whitespace-nowrap text-sm sm:text-base">
                              {isLaos ? `$${displayPrice}` : `${displayPrice} đ`}
                            </td>
                            <td className="py-4 px-4 text-center whitespace-nowrap">
                              <VIDCNativeButton
                                type="button"
                                onClick={() => onSelectConfigForQuote(pkg, selectedRegion === 'north' ? 'Hòa Lạc' : 'Bình Dương')}
                                className="px-4 py-2 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] text-white font-extrabold text-xs transition-all shadow-sm cursor-pointer"
                              >
                                ĐĂNG KÝ
                              </VIDCNativeButton>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* H200 Super GPU Enterprise Showcase Card */
          <div className="mb-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>DÒNG SIÊU GPU DOANH NGHIỆP THẾ HỆ MỚI</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Dòng Siêu GPU NVIDIA H200 (Kiến trúc Hopper)
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Kiến trúc Hopper thế hệ mới với bộ nhớ HBM3e siêu tốc (141GB VRAM, thông lượng 4.8 TB/s), phục vụ chuyên biệt cho việc đào tạo Mô hình ngôn ngữ lớn (LLM), AI tạo sinh (GenAI) và bài toán Big Data cấp quốc gia.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Bộ nhớ HBM3e 141 GB</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>NVLink 900 GB/s</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>3.958 TOPS INT8</span>
                  </span>
                </div>
              </div>

              <div className="shrink-0 p-6 rounded-xl bg-slate-800/80 border border-slate-700 text-center space-y-3 md:min-w-[280px]">
                <span className="text-xs text-slate-400 uppercase font-extrabold tracking-wider block">
                  Hình thức cung cấp
                </span>
                <div className="text-lg font-extrabold text-amber-400">
                  Khảo sát may đo &amp; Báo giá Enterprise
                </div>
                <VIDCNativeButton
                  type="button"
                  onClick={handleRegisterH200}
                  className="w-full py-3 px-5 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] text-white font-extrabold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>YÊU CẦU KHẢO SÁT &amp; BÁO GIÁ</span>
                </VIDCNativeButton>
              </div>
            </div>
          </div>
        )}

        {/* Price Footnote */}
        <p className="text-center text-[11px] text-slate-400 italic mt-4">
          {t.vatFootnote}
        </p>

      </div>
    </section>
  );
};
