import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Server, MapPin, ShieldCheck, CheckCircle2, Image as ImageIcon, Map, Layers, Zap, 
  Award, Sparkles, ChevronRight, Activity, ArrowRight, X, Cpu, Globe, 
  Building2, SlidersHorizontal, Grid, ExternalLink, Gauge, ChevronDown, Check
} from 'lucide-react';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface DataCenterBentoSectionProps {
  currentMarket: SEAMarket;
}

export const DataCenterBentoSection: React.FC<DataCenterBentoSectionProps> = ({ currentMarket }) => {
  const { t, currentLanguage } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const isLaos = isNonVn;
  const [layoutMode, setLayoutMode] = useState<'cards' | 'bento'>('cards');
  const [selectedDc, setSelectedDc] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState<string>('north');
  const [activeModalDc, setActiveModalDc] = useState<any | null>(null);

  const getFullPath = (path: string) => {
    if (currentMarket.prefix === '/') return path;
    return `${currentMarket.prefix}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  const dataCenters = [
    {
      id: 'pv',
      badge: isLaos ? 'PHAP VAN DATA CENTER' : 'TTDL PHÁP VÂN',
      title: isLaos ? 'Phap Van DC' : 'TTDL Pháp Vân',
      address: isLaos ? 'Km 1, Phap Van – Cau Gie Highway, Hoang Mai, Hanoi' : 'Km 1, cao tốc Pháp Vân – Cầu Giẽ, Hoàng Mai, Hà Nội',
      description: isLaos 
        ? 'Large-scale Colocation infrastructure at Hanoi southern gateway supporting multi-carrier neutral cross-connect, 24/7 technical operations, and multi-layered physical security.'
        : 'Hạ tầng Colocation diện tích lớn tại cửa ngõ phía Nam Hà Nội, hỗ trợ kết nối đa nhà mạng, vận hành 24/7 và hệ thống an toàn đa lớp.',
      standard: 'Rated III – TIA-942',
      power: '2.9 MW',
      area: '9,500 m²',
      rackDensity: '3 kW/rack',
      pue: 'PUE 1.5',
      redundancy: 'N+1 / 2N',
      region: 'north',
      regionName: isLaos ? 'North' : 'Miền Bắc',
      services: ['Colocation', 'Disaster Recovery'],
      secondaryBadges: ['Carrier & Cloud Neutral', 'FM200 24/7'],
      certifications: isLaos 
        ? 'ISO 9001 · ISO 20000-1 · ISO 22301 · ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS (7 Certificates)'
        : 'ISO 9001 · ISO 20000-1 · ISO 22301 · ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS (7 Chứng chỉ)',
      image: 'https://images.unsplash.com/photo-1551703599-6b3e8379aa82?auto=format&fit=crop&w=1200&q=80',
      highlights: isLaos 
        ? ['9,500m² gross footprint', 'Strategic southern gateway position', 'Integrated DR disaster backup node']
        : ['Diện tích sàn 9.500m²', 'Vị trí cửa ngõ Hà Nội', 'Trạm DR dự phòng thảm họa'],
    },
    {
      id: 'hl1',
      badge: isLaos ? 'HOA LAC 1 DATA CENTER' : 'TTDL HÒA LẠC 1',
      title: isLaos ? 'Hoa Lac 1 DC' : 'TTDL Hòa Lạc 1',
      address: isLaos ? 'Hoa Lac High-Tech Park, Km29 Thang Long Boulevard, Hanoi' : 'Khu Công nghệ cao Hòa Lạc, Km29 Đại lộ Thăng Long, Hà Nội',
      description: isLaos
        ? 'Flexible Colocation node designed for maximum energy efficiency, equipped with elite power redundancy and neutral cross-connect access.'
        : 'Hạ tầng Colocation linh hoạt, tối ưu hiệu suất năng lượng, trang bị hệ thống nguồn dự phòng cao cấp và kết nối trung lập cho doanh nghiệp.',
      standard: 'Rated III – TIA-942',
      power: '3.3 MW',
      area: '6,000 m²',
      rackDensity: '8 kW/rack',
      pue: 'PUE 1.4',
      redundancy: 'N+1 / 2N',
      region: 'north',
      regionName: isLaos ? 'North' : 'Miền Bắc',
      services: ['Colocation', 'Cloud', 'Disaster Recovery'],
      secondaryBadges: ['Carrier & Cloud Neutral', 'FM200 24/7'],
      certifications: isLaos
        ? 'ISO 9001 · ISO 20000-1 · ISO 22301 · ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS (7 Certificates)'
        : 'ISO 9001 · ISO 20000-1 · ISO 22301 · ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS (7 Chứng chỉ)',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
      highlights: isLaos
        ? ['2N dual-feed utility grid', 'Optimized for colocation', '5-layered biometric access security']
        : ['Trạm nguồn kép 2N', 'Tối ưu Colocation', 'Bảo mật 5 lớp Biometric'],
    },
    {
      id: 'hl2',
      badge: isLaos ? 'HOA LAC 2 DATA CENTER' : 'TTDL HÒA LẠC 2',
      title: isLaos ? 'Hoa Lac 2 DC' : 'TTDL Hòa Lạc 2',
      address: isLaos ? 'Viettel Building, Hoa Lac High-Tech Park, Hanoi' : 'Tòa nhà Viettel, Khu Công nghệ cao Hòa Lạc, Hà Nội',
      description: isLaos
        ? 'Optimal layouts for enterprise servers and IT architectures, providing consistent power feeds alongside certified global operations.'
        : 'Thiết kế tối ưu cho nhu cầu đặt máy chủ và hạ tầng CNTT doanh nghiệp, cung cấp nguồn điện ổn định cùng tiêu chuẩn vận hành quốc tế.',
      standard: 'Rated III – TIA-942',
      power: '2.4 MW',
      area: '2,500 m²',
      rackDensity: '4.5 kW/rack',
      pue: 'PUE 1.5',
      redundancy: 'N+1 / 2N',
      region: 'north',
      regionName: isLaos ? 'North' : 'Miền Bắc',
      services: ['Colocation', 'Cloud'],
      secondaryBadges: ['Carrier & Cloud Neutral', 'FM200 24/7'],
      certifications: isLaos
        ? 'ISO 9001 · ISO 20000-1 · ISO 22301 · ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS (7 Certificates)'
        : 'ISO 9001 · ISO 20000-1 · ISO 22301 · ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS (7 Chứng chỉ)',
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=80',
      highlights: isLaos
        ? ['ANSI/TIA-942 Rated 3 design', '3D BMS telemetry 24/7', 'Highly scalable floor footprints']
        : ['Tiêu chuẩn TIA-942 Rated 3', 'Giám sát BMS 3D 24/7', 'Khả năng mở rộng linh hoạt'],
    },
    {
      id: 'hl3',
      badge: isLaos ? 'HOA LAC 3 DATA CENTER' : 'TTDL HÒA LẠC 3',
      title: isLaos ? 'Hoa Lac 3 DC' : 'TTDL Hòa Lạc 3',
      address: isLaos ? 'Technical Center Building, Hoa Lac High-Tech Park, Hanoi' : 'Tòa nhà Trung tâm kỹ thuật, Khu Công nghệ cao Hòa Lạc, Hà Nội',
      description: isLaos
        ? 'Super-scale facility engineered for high-density computing, Cloud, and AI workloads, featuring unparalleled power stability and extreme efficiency.'
        : 'TTDL quy mô lớn phục vụ Colocation, Cloud và hệ thống tải lớn trọng yếu, sở hữu công suất cao, kiến trúc dự phòng tối đa và hệ sinh thái trung lập.',
      standard: 'Rated III – TIA-942',
      power: '30 MW',
      area: '6,500 m²',
      rackDensity: '4–5 kW/rack',
      pue: 'PUE 1.4',
      redundancy: 'N+1 / 2N / N+2',
      region: 'north',
      regionName: isLaos ? 'North' : 'Miền Bắc',
      services: ['Colocation', 'Cloud', 'AI & GPU', 'Green DC'],
      secondaryBadges: ['Carrier & Cloud Neutral', 'FM200 & VESDA 24/7'],
      certifications: isLaos
        ? 'ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS · SOC 2 · TVRA · ISO 14064 (7 Certificates)'
        : 'ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS · SOC 2 · TVRA · ISO 14064 (7 Chứng chỉ)',
      image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80',
      highlights: isLaos
        ? ['30MW heavy power facility', 'Optimized for AI & GPU computing', 'Green certified ISO 14064']
        : ['Siêu TTDL 30MW', 'Chuyên dụng cho AI & GPU Computing', 'Green DC chứng chỉ ISO 14064'],
    },
    {
      id: 'dn',
      badge: isLaos ? 'DANANG DATA CENTER' : 'TTDL ĐÀ NẴNG',
      title: isLaos ? 'Danang DC' : 'TTDL Đà Nẵng',
      address: isLaos ? 'No. 2 Quang Trung Street, Hai Chau District, Danang' : 'Số 02 Quang Trung, Hải Châu, TP. Đà Nẵng',
      description: isLaos
        ? 'Central Vietnam key infrastructure hub, featuring seismic-resistant & typhoon-hardened building structures, with direct submarine cable land connectivity.'
        : 'Trọng điểm hạ tầng kỹ thuật miền Trung, thiết kế kháng chấn & chống bão nhiệt đới siêu quy chuẩn, kết nối trực tiếp các tuyến cáp quang biển.',
      standard: 'Rated III – TIA-942',
      power: '2.5 MW',
      area: '3,200 m²',
      rackDensity: '3–4 kW/rack',
      pue: 'PUE 1.45',
      redundancy: 'N+1 / 2N',
      region: 'central',
      regionName: isLaos ? 'Central' : 'Miền Trung',
      services: ['Colocation', 'Cloud', 'Disaster Recovery'],
      secondaryBadges: ['Carrier & Cloud Neutral', 'FM200 24/7'],
      certifications: isLaos
        ? 'ISO 9001 · ISO 27001 · PCI DSS · SOC 1 · SOC 2 Type II (5 Certificates)'
        : 'ISO 9001 · ISO 27001 · PCI DSS · SOC 1 · SOC 2 Type II (5 Chứng chỉ)',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      highlights: isLaos
        ? ['Submarine fiber intersection', 'Typhoon & earthquake resilient', 'Central Vietnam key core node']
        : ['Giao điểm cáp quang biển', 'Kháng chấn & bão cấp siêu tiêu chuẩn', 'Node trọng điểm Miền Trung'],
    },
    {
      id: 'hht1',
      badge: isLaos ? 'HOANG HOA THAM 1 DATA CENTER' : 'TTDL HOÀNG HOA THÁM 1',
      title: isLaos ? 'Hoang Hoa Tham 1 DC' : 'TTDL Hoàng Hoa Thám 1',
      address: isLaos ? 'H158/2A Hoang Hoa Tham, Tan Binh, Ho Chi Minh City' : 'H158/2A Hoàng Hoa Thám, Tân Bình, TP.HCM',
      description: isLaos
        ? 'Premium urban facility in HCMC offering microsecond latency pipelines to major financial hubs and public cloud exchanges.'
        : 'Hạ tầng thông tin nội đô vị trí đắc địa tại TP.HCM, kết nối trực tiếp với độ trễ siêu thấp tới các trung tâm tài chính & giao dịch lớn.',
      standard: 'Rated III – TIA-942',
      power: '1.2 MW',
      area: '2,800 m²',
      rackDensity: '4–5 kW/rack',
      pue: 'PUE 1.48',
      redundancy: 'N+1 / 2N',
      region: 'south',
      regionName: isLaos ? 'South' : 'Miền Nam',
      services: ['Colocation', 'Cloud'],
      secondaryBadges: ['Carrier & Cloud Neutral', 'FM200 24/7'],
      certifications: isLaos
        ? 'ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS · SOC 2 · TVRA · ISO 14064 (7 Certificates)'
        : 'ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS · SOC 2 · TVRA · ISO 14064 (7 Chứng chỉ)',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
      highlights: isLaos
        ? ['Low latency urban center', 'PCI DSS finance compliant', 'Direct Tier-1 Internet hubs']
        : ['Nội đô TP.HCM độ trễ siêu thấp', 'Đạt chuẩn PCI DSS ngân hàng', 'Kết nối trực tiếp Internet Hub'],
    },
    {
      id: 'hht2',
      badge: isLaos ? 'HOANG HOA THAM 2 DATA CENTER' : 'TTDL HOÀNG HOA THÁM 2',
      title: isLaos ? 'Hoang Hoa Tham 2 DC' : 'TTDL Hoàng Hoa Thám 2',
      address: isLaos ? 'H158/2A Hoang Hoa Tham, Tan Binh, Ho Chi Minh City' : 'H158/2A Hoàng Hoa Thám, Tân Bình, TP.HCM',
      description: isLaos
        ? 'Expansion block of the downtown HCMC facility cluster, with dual utility substations and dense rack custom layouts.'
        : 'Phân khu mở rộng cụm TTDL nội đô TP.HCM, tăng cường hạ tầng điện lưới kép và cung cấp không gian tủ rack tối ưu cho doanh nghiệp vừa và lớn.',
      standard: 'Rated III – TIA-942',
      power: '1.5 MW',
      area: '2,500 m²',
      rackDensity: '3.5 kW/rack',
      pue: 'PUE 1.43',
      redundancy: 'N+1 / 2N',
      region: 'south',
      regionName: isLaos ? 'South' : 'Miền Nam',
      services: ['Colocation', 'Cloud'],
      secondaryBadges: ['Carrier & Cloud Neutral', 'FM200 24/7'],
      certifications: isLaos
        ? 'ISO 9001 · ISO 20000-1 · ISO 22301 · ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS (7 Certificates)'
        : 'ISO 9001 · ISO 20000-1 · ISO 22301 · ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS (7 Chứng chỉ)',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      highlights: isLaos
        ? ['2N independent substations', 'Financial core HCMC', 'ISO 20000 service managed']
        : ['Điện lưới kép 2N độc lập', 'Trung tâm tài chính HCM', 'Quản trị dịch vụ tiêu chuẩn ISO 20000'],
    },
    {
      id: 'hht3',
      badge: isLaos ? 'HOANG HOA THAM 3 DATA CENTER' : 'TTDL HOÀNG HOA THÁM 3',
      title: isLaos ? 'Hoang Hoa Tham 3 DC' : 'TTDL Hoàng Hoa Thám 3',
      address: isLaos ? 'H158/2A Hoang Hoa Tham, Tan Binh, Ho Chi Minh City' : 'H158/2A Hoàng Hoa Thám, Tân Bình, TP.HCM',
      description: isLaos
        ? 'Green Data Center utilizing auxiliary solar panels and high-efficiency smart cooling systems to optimize cooling energy.'
        : 'TTDL xanh trung tâm TP.HCM, tiên phong áp dụng hệ thống pin năng lượng mặt trời phụ trợ kết hợp các giải pháp Green DC tối ưu PUE.',
      standard: 'Rated III – TIA-942',
      power: '1.8 MW',
      area: '3,000 m²',
      rackDensity: '4.5 kW/rack',
      pue: 'PUE 1.42',
      redundancy: 'N+1 / 2N / N+2',
      region: 'south',
      regionName: isLaos ? 'South' : 'Miền Nam',
      services: ['Colocation', 'Cloud', 'Green DC'],
      secondaryBadges: ['Carrier & Cloud Neutral', 'FM200 & VESDA 24/7'],
      certifications: isLaos
        ? 'ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS · SOC 2 · TVRA · ISO 14064 (7 Certificates)'
        : 'ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS · SOC 2 · TVRA · ISO 14064 (7 Chứng chỉ)',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
      highlights: isLaos
        ? ['Renewable energy hybrid model', 'ISO 14064 greenhouse certified', 'InRow efficient cooling']
        : ['Mô hình Green DC năng lượng tái tạo', 'Chứng chỉ khí nhà kính ISO 14064', 'Hệ thống làm mát InRow tiết kiệm điện'],
    },
    {
      id: 'bd',
      badge: isLaos ? 'BINH DUONG DATA CENTER' : 'TTDL BÌNH DƯƠNG',
      title: isLaos ? 'Binh Duong DC' : 'TTDL Bình Dương',
      address: isLaos ? 'DT743 Road, Binh Hoa, Thuan An, Binh Duong Province' : 'Đường DT743, Bình Hòa, Thuận An, Bình Dương',
      description: isLaos
        ? 'Heavy-load hyper-scale node catering to Southern economic industrial zones, featuring flexible expansion options and redundant regional pipelines.'
        : 'TTDL quy mô lớn phục vụ Colocation, Cloud và hệ thống doanh nghiệp phía Nam, đáp ứng công suất nguồn cao, khả năng mở rộng và kết nối đa tuyến.',
      standard: 'Rated III – TIA-942',
      power: '6.5 MW',
      area: '10,000 m²',
      rackDensity: '3.5 kW/rack',
      pue: 'PUE 1.40',
      redundancy: 'N+1 / 2N / N+2',
      region: 'south',
      regionName: isLaos ? 'South' : 'Miền Nam',
      services: ['Colocation', 'Cloud', 'AI & GPU', 'Disaster Recovery'],
      secondaryBadges: ['Carrier & Cloud Neutral', 'FM200 & VESDA 24/7'],
      certifications: isLaos
        ? 'ISO 9001 · ISO 20000-1 · ISO 22301 · ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS (7 Certificates)'
        : 'ISO 9001 · ISO 20000-1 · ISO 22301 · ISO 27001 · ISO 27017 · ISO 27018 · PCI DSS (7 Chứng chỉ)',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      highlights: isLaos
        ? ['6.5MW large facility power', 'Southern key economic core', 'Absolute 99.99% SLA uptime']
        : ['Công suất 6.5MW quy mô lớn', 'Tâm điểm vùng kinh tế trọng điểm phía Nam', 'Uptime SLA 99.99% tuyệt đối'],
    },
  ];

  // 4 Metrics per spec Section 6.5
  const dcMetrics = [
    { value: '10,000+', label: isLaos ? 'Total Cabinet Racks' : 'Tổng số Racks', icon: Server, desc: isLaos ? 'Unified high standards' : 'Đồng bộ tiêu chuẩn cao' },
    { value: '120,000 m²', label: isLaos ? 'Data Center Area' : 'Diện tích sàn DC', icon: Layers, desc: isLaos ? 'Leading scale in Vietnam' : 'Quy mô hàng đầu Việt Nam' },
    { value: 'Rated 3', label: isLaos ? 'ANSI/TIA-942 Standard' : 'Chuẩn ANSI/TIA-942', icon: Award, desc: isLaos ? 'Design & Operations' : 'Thiết kế & Vận hành' },
    { value: '99.99%', label: isLaos ? 'Uptime SLA Commitment' : 'Cam kết Uptime SLA', icon: Zap, desc: isLaos ? 'N+1/2N backup cooling & power' : 'Dự phòng nguồn & mát N+1/2N' },
  ];

  // Filter logic
  const filteredNodes = dataCenters.filter((dc) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'north') return dc.region === 'north';
    if (selectedFilter === 'central') return dc.region === 'central';
    if (selectedFilter === 'south') return dc.region === 'south';
    if (selectedFilter === 'overview') return dc.region === 'overview';
    return dc.id === selectedFilter;
  });

  // Auto sync selectedDc to a valid node in filteredNodes when filter or layout changes
  useEffect(() => {
    if (filteredNodes.length > 0) {
      const isCurrentInFiltered = filteredNodes.some(dc => dc.id === dataCenters[selectedDc]?.id);
      if (!isCurrentInFiltered) {
        const newIndex = dataCenters.findIndex(dc => dc.id === filteredNodes[0].id);
        if (newIndex !== -1) setSelectedDc(newIndex);
      }
    }
  }, [selectedFilter, layoutMode]);

  const currentDc = dataCenters[selectedDc] || dataCenters[0];

  return (
    <section className="bg-slate-50/80 py-16 md:py-24 border-b border-slate-200/80 relative">
      <div className="vidc-container space-y-10">
        
        {/* Header & Section Title */}
        <div className="flex flex-col items-center text-center space-y-3.5 max-w-5xl mx-auto">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
            <span className="text-xs font-black uppercase tracking-wider text-red-700">
              {isLaos ? 'COMPREHENSIVE PHYSICAL INFRASTRUCTURE' : 'HẠ TẦNG VẬT LÝ TOÀN DIỆN'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-center leading-tight whitespace-normal lg:whitespace-nowrap">
            {t.dataCenterSection.title}
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed text-center whitespace-normal lg:whitespace-nowrap">
            {t.dataCenterSection.subtitle}
          </p>
        </div>

        {/* Key Metrics Grid - Full Container Width */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full">
          {dcMetrics.map((metric, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-center flex flex-col justify-center items-center">
              <span className="text-xl md:text-2xl font-black text-[var(--vidc-color-brand-red)] tracking-tight">{metric.value}</span>
              <span className="text-xs md:text-sm font-extrabold text-slate-900 mt-1">{metric.label}</span>
              <span className="text-[11px] font-medium text-slate-500 mt-0.5 leading-tight">{metric.desc}</span>
            </div>
          ))}
        </div>

        {/* Segmented Filter Bar - Regional Pill Control (DS-V8 Style) */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200 shrink-0">
            <VIDCNativeButton
              onClick={() => setSelectedFilter('north')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedFilter === 'north'
                  ? 'bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-reference-hover)] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 font-medium'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{isLaos ? 'North' : 'Miền Bắc'} ({dataCenters.filter((dc) => dc.region === 'north').length})</span>
            </VIDCNativeButton>

            <VIDCNativeButton
              onClick={() => setSelectedFilter('central')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedFilter === 'central'
                  ? 'bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-reference-hover)] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 font-medium'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{isLaos ? 'Central' : 'Miền Trung'} ({dataCenters.filter((dc) => dc.region === 'central').length})</span>
            </VIDCNativeButton>

            <VIDCNativeButton
              onClick={() => setSelectedFilter('south')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedFilter === 'south'
                  ? 'bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-reference-hover)] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 font-medium'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{isLaos ? 'South' : 'Miền Nam'} ({dataCenters.filter((dc) => dc.region === 'south').length})</span>
            </VIDCNativeButton>
          </div>
        </div>


        {/* VIEW MODE 1: Large Cards with High-Res Images Grid */}
        {layoutMode === 'cards' && (
          <div className="space-y-6">
            {filteredNodes.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-2xl border border-slate-200/80 space-y-3">
                <Server className="w-10 h-10 text-slate-300 mx-auto animate-pulse" />
                <h3 className="text-base font-bold text-slate-800">
                  {isLaos ? 'No Data Center found matching the filter' : 'Không tìm thấy Data Center phù hợp bộ lọc'}
                </h3>
                <p className="text-xs text-slate-500">
                  {isLaos ? 'Please try selecting a different region.' : 'Vui lòng thử bỏ chọn bớt tiêu chí lọc khu vực.'}
                </p>
                <VIDCNativeButton
                  onClick={() => {
                    setSelectedFilter('north');
                  }}
                  className="px-4 py-2 bg-[var(--vidc-color-brand-red)] text-white text-xs font-bold rounded-xl shadow-sm hover:bg-[var(--vidc-color-brand-reference-hover)] transition-colors cursor-pointer inline-block"
                >
                  {isLaos ? 'View All Data Centers' : 'Xem danh sách Data Center'}
                </VIDCNativeButton>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {filteredNodes.map((dc) => (
                  <div
                     key={dc.id}
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs flex flex-col justify-between"
                  >
                    {/* Top Image Section */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img alt={dc.title} src={dc.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="text-base font-extrabold text-slate-900 line-clamp-1">
                          {dc.title}
                        </h3>
                        {dc.address && (
                          <p className="text-xs font-medium text-slate-600 flex items-start gap-1 leading-snug">
                            <MapPin className="w-3.5 h-3.5 shrink-0 text-[var(--vidc-color-brand-red)] mt-0.5" />
                            <span>{dc.address}</span>
                          </p>
                        )}

                      </div>

                      {/* Specs 6-Item Grid */}
                      <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100/90 text-xs">
                        <div>
                          <span className="text-[10px] text-slate-500 font-medium block">{isLaos ? 'Standard:' : 'Tiêu chuẩn:'}</span>
                          <span className="font-extrabold text-slate-900 text-[11px] truncate block">{dc.standard}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 font-medium block">{isLaos ? 'Power capacity:' : 'Công suất nguồn:'}</span>
                          <span className="font-extrabold text-[var(--vidc-color-brand-red)]">{dc.power}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 font-medium block">{isLaos ? 'Facility scale:' : 'Quy mô facility:'}</span>
                          <span className="font-extrabold text-slate-900">{dc.area}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 font-medium block">{isLaos ? 'Rack density:' : 'Mật độ rack:'}</span>
                          <span className="font-extrabold text-slate-900">{dc.rackDensity}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 font-medium block">{isLaos ? 'Energy efficiency:' : 'Hiệu quả năng lượng:'}</span>
                          <span className="font-extrabold text-slate-900">{dc.pue}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-slate-500 font-medium block">{isLaos ? 'Redundancy:' : 'Dự phòng:'}</span>
                          <span className="font-extrabold text-slate-900">{dc.redundancy}</span>
                        </div>
                      </div>


                      {/* Card Action Footer */}
                      <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                        <VIDCAnchor
                          href={getFullPath('/contact/request-quote/')}
                          className="py-2 px-2 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-[11px] sm:text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-xs whitespace-nowrap text-center"
                        >
                          <span>{isLaos ? 'Rent Colocation' : 'Thuê chỗ đặt'}</span>
                        </VIDCAnchor>
                        <VIDCNativeButton
                          onClick={() => setActiveModalDc(dc)}
                          className="py-2 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] sm:text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap text-center"
                        >
                          <span>{isLaos ? 'Request Visit' : 'Đăng ký tham quan'}</span>
                        </VIDCNativeButton>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW MODE 2: Bento Dashboard Mode */}
        {layoutMode === 'bento' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Column: Data Center Nodes List */}
            <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 px-1">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {isLaos ? `List of ${dataCenters.length} Data Center Nodes` : `Danh sách ${dataCenters.length} Nodes Data Center`}
                  </h3>
                  <span className="text-xs font-semibold text-[var(--vidc-color-brand-red)] flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    100% Uptime SLA
                  </span>
                </div>

                <div className="space-y-2 max-h-[540px] overflow-y-auto pr-1">
                  {dataCenters.map((dc, originalIndex) => {
                    const isSelected = selectedDc === originalIndex;
                    return (
                      <VIDCNativeButton
                        key={dc.id}
                        onClick={() => setSelectedDc(originalIndex)}
                        className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group relative overflow-hidden ${
                          isSelected
                            ? 'bg-white border-[var(--vidc-color-brand-red)] shadow-md ring-1 ring-[var(--vidc-color-brand-red)]/20'
                            : 'bg-white/90 border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-xs'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--vidc-color-brand-red)]" />
                        )}

                        <div className="space-y-1 pl-1 min-w-0 pr-2">
                          <h4 className={`text-sm font-extrabold transition-colors leading-tight ${
                            isSelected ? 'text-[var(--vidc-color-brand-red)]' : 'text-slate-800 group-hover:text-slate-900'
                          }`}>
                            {dc.title}
                          </h4>
                          {dc.address && (
                            <p className="text-xs text-slate-600 flex items-start gap-1 leading-normal font-medium mt-1">
                              <MapPin className="w-3.5 h-3.5 shrink-0 text-[var(--vidc-color-brand-red)] mt-0.5" />
                              <span className="break-words">{dc.address}</span>
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[var(--vidc-color-brand-red)] translate-x-0.5' : 'text-slate-300 group-hover:text-slate-400'}`} />
                        </div>
                      </VIDCNativeButton>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Map Frame */}
            <div className="lg:col-span-7 bg-[var(--vidc-legacy-hex-989898)] rounded-[28px] min-h-[500px] h-full w-full relative overflow-hidden flex items-center justify-center border border-slate-300/80 shadow-xs">
              {/* Ready for Google Maps / Interactive Map Embed */}
              <div className="text-center p-6 space-y-2 text-slate-100/70 pointer-events-none select-none">
                <Map className="w-10 h-10 mx-auto text-slate-200/80" />
                <span className="text-xs font-bold tracking-wider uppercase block text-slate-200">
                  {isLaos ? 'Data Center Infrastructure Map' : 'Bản đồ hạ tầng Data Center'}
                </span>
              </div>
            </div>
          </div>
        )}



      </div>

      {/* DETAILED MODAL DIALOG WHEN CLICKING "Chi tiết thấu đáo" */}
      {activeModalDc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 space-y-0 max-h-[90vh] flex flex-col">
            
            {/* Modal Header Banner */}
            <div className="relative h-48 bg-slate-950 overflow-hidden shrink-0">
              <img alt={activeModalDc.title} src={activeModalDc.image} className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              
              <VIDCNativeButton
                onClick={() => setActiveModalDc(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-[var(--vidc-color-brand-red)] transition-colors cursor-pointer z-20"
              >
                <X className="w-5 h-5" />
              </VIDCNativeButton>

              <div className="absolute bottom-4 left-6 right-6 z-10 space-y-1">
                <span className="px-2.5 py-0.5 rounded bg-[var(--vidc-color-brand-red)] text-white text-[10px] font-extrabold uppercase">
                  {activeModalDc.badge}
                </span>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {activeModalDc.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Scrollable */}
            <div className="p-6 overflow-y-auto space-y-5 flex-1 text-slate-700 text-xs">
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {activeModalDc.description}
              </p>

              {/* Specs Grid */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-slate-900 tracking-wider">
                  {isLaos ? 'Detailed Technical Specifications:' : 'Thông số Kỹ thuật Chi tiết:'}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <div>
                    <span className="text-[10px] text-slate-500 font-medium block">{isLaos ? 'Standard:' : 'Tiêu chuẩn:'}</span>
                    <span className="text-xs font-extrabold text-slate-900">{activeModalDc.standard}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-medium block">{isLaos ? 'Power capacity:' : 'Công suất nguồn:'}</span>
                    <span className="text-xs font-extrabold text-[var(--vidc-color-brand-red)]">{activeModalDc.power}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-medium block">{isLaos ? 'Facility scale:' : 'Quy mô facility:'}</span>
                    <span className="text-xs font-extrabold text-slate-900">{activeModalDc.area}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-medium block">{isLaos ? 'Rack density:' : 'Mật độ rack:'}</span>
                    <span className="text-xs font-extrabold text-slate-900">{activeModalDc.rackDensity}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-medium block">{isLaos ? 'Energy efficiency:' : 'Hiệu quả năng lượng:'}</span>
                    <span className="text-xs font-extrabold text-slate-900">{activeModalDc.pue}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-medium block">{isLaos ? 'Redundancy:' : 'Dự phòng:'}</span>
                    <span className="text-xs font-extrabold text-slate-900">{activeModalDc.redundancy}</span>
                  </div>
                </div>
              </div>

              {/* Operational Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-slate-900 tracking-wider">
                  {isLaos ? 'Operational & Security Solutions:' : 'Giải pháp Vận hành & An ninh:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalDc.secondaryBadges.map((badge: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-red-50/60 border border-red-100 font-medium text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
              <VIDCNativeButton
                onClick={() => setActiveModalDc(null)}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold cursor-pointer"
              >
                {isLaos ? 'Close' : 'Đóng'}
              </VIDCNativeButton>
              <VIDCAnchor
                href={getFullPath('/contact/request-quote/')}
                className="px-5 py-2.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs font-bold shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>{isLaos ? `Get Colocation Quote` : `Nhận báo giá Colocation`} {activeModalDc.title}</span>
                <ArrowRight className="w-4 h-4" />
              </VIDCAnchor>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};


