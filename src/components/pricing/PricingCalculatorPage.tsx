'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  ALL_PRICING_SERVICES, 
  PRICING_GROUPS, 
  COMMITMENT_DISCOUNTS, 
  PricingServiceItem, 
  calculateServicePrice 
} from './pricingServicesData';
import { 
  SERVICE_CATEGORIES, 
  ALL_SERVICES, 
  ServiceItem 
} from '../../data/sitemapData';
import { 
  SERVICE_EN_TRANSLATIONS,
  CATEGORY_EN_TRANSLATIONS 
} from '../../data/serviceEnglishTranslations';
import { getCategoryI18n, getSubgroupI18n, getCommonUII18n } from '../../data/multilingualServiceData';
import { EnterpriseQuoteModal, QuoteModalDetails } from '../common/EnterpriseQuoteModal';
import { CloudServerEstimator, EstimatorConfig } from '../service-detail/CloudServerEstimator';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Calculator, 
  Search, 
  Check, 
  Plus, 
  Trash2, 
  Download, 
  Send, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  X, 
  Sparkles, 
  ChevronRight, 
  SlidersHorizontal, 
  Info,
  Building,
  HelpCircle,
  FileText,
  Percent,
  CheckCircle2,
  Copy,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  PhoneCall,
  Headphones,
  Layers,
  Cpu,
  Server,
  HardDrive,
  Database,
  Globe,
  Activity,
  Monitor,
  Mail
} from 'lucide-react';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';


interface PricingCalculatorPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigate?: (path: string) => void;
}

export interface CartItem {
  serviceId: string;
  serviceName: string;
  serviceCode: string;
  groupName: string;
  specsState: Record<string, any>;
  monthlyUnitPrice: number;
  quantity: number;
}

export interface EcosystemServiceEntry {
  id: string;
  code: string;
  numId?: number;
  name: string;
  tagline: string;
  description: string;
  category: string;
  categoryLabel: string;
  subgroup?: string;
  subgroupLabel?: string;
  badge?: string;
  canonicalPath?: string;
  hasPublicCalculator: boolean;
  pricingItem?: PricingServiceItem;
  features: string[];
}

export const PricingCalculatorPage: React.FC<PricingCalculatorPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigate
}) => {
  const { t, currentLanguage, currentMarket: contextMarket, getFullPath } = useLanguage();
  const ui = getCommonUII18n(currentLanguage);
  const effectiveMarket = currentMarket || contextMarket || 'VN';
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';

  // State for active category group filter
  const [selectedGroupId, setSelectedGroupId] = useState<string>('all');
  // State for filter type: 'all' | 'public_calculator' | 'consultation'
  const [pricingTypeFilter, setPricingTypeFilter] = useState<'all' | 'public_calculator' | 'consultation'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Dropdown filter state (matching homepage Ecosystem dropdown)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [expandedGroupId, setExpandedGroupId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const commitmentMonths = 1;
  const [includeVat, setIncludeVat] = useState<boolean>(true);

  // Quote modal state for consultation services
  const [quoteModalState, setQuoteModalState] = useState<{
    isOpen: boolean;
    initialDetails: QuoteModalDetails | null;
  }>({
    isOpen: false,
    initialDetails: null
  });

  // Per-service custom specs configuration state map: serviceId -> Record<specId, value>
  const [servicesSpecsState, setServicesSpecsState] = useState<Record<string, Record<string, any>>>(() => {
    const initialState: Record<string, Record<string, any>> = {};
    ALL_PRICING_SERVICES.forEach(svc => {
      const specObj: Record<string, any> = {};
      svc.specs.forEach(spec => {
        specObj[spec.id] = spec.defaultValue;
      });
      initialState[svc.id] = specObj;
    });
    return initialState;
  });

  // State for Estimate Cart (dự toán)
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  // Helper mapping function to unify 28 pricing services and all sitemap services
  const unifiedEcosystemServices = useMemo<EcosystemServiceEntry[]>(() => {
    const pricingListEntries: EcosystemServiceEntry[] = ALL_PRICING_SERVICES.map(ps => {
      let mappedCat = ps.groupId;
      if (mappedCat === 'cloud-storage') mappedCat = 'storage';
      if (mappedCat === 'cloud-security') mappedCat = 'security';
      if (mappedCat === 'enterprise-app') mappedCat = 'digital-services';
      if (mappedCat === 'cloud-database') mappedCat = 'data-platform';

      const en = isNonVn ? SERVICE_EN_TRANSLATIONS[ps.id] : null;
      const enCat = isNonVn ? CATEGORY_EN_TRANSLATIONS[mappedCat] : null;

      return {
        id: ps.id,
        code: ps.code,
        numId: ps.numId,
        name: en?.name || ps.name,
        tagline: en?.tagline || ps.description,
        description: en?.cardDescription || ps.description,
        category: mappedCat,
        categoryLabel: enCat?.menuLabel || ps.group,
        badge: isNonVn ? (ps.badge === 'MỚI' ? 'NEW' : ps.badge === 'HOT' ? 'HOT' : ps.badge) : ps.badge,
        canonicalPath: ps.canonicalPath,
        hasPublicCalculator: true,
        pricingItem: ps,
        features: ps.features
      };
    });

    const addedIds = new Set(pricingListEntries.map(e => e.id));

    // Map remaining services from sitemapData ALL_SERVICES
    const consultationEntries: EcosystemServiceEntry[] = [];
    ALL_SERVICES.forEach(s => {
      const nameKey = s.name.toLowerCase();

      const matchedPricing = ALL_PRICING_SERVICES.find(ps => 
        ps.id === s.id || 
        ps.name.toLowerCase() === nameKey ||
        (ps.canonicalPath && s.canonicalPath && ps.canonicalPath.toLowerCase().includes(s.canonicalPath.toLowerCase().replace('/services/', '')))
      );

      if (matchedPricing) {
        return;
      }

      if (!addedIds.has(s.id)) {
        addedIds.add(s.id);
        const en = isNonVn ? SERVICE_EN_TRANSLATIONS[s.id] : null;
        let catLabel = isNonVn ? 'Enterprise Quote' : 'Báo Giá Tư Vấn';
        const foundCat = SERVICE_CATEGORIES.find(c => c.id === s.category);
        if (foundCat) {
          const enCat = isNonVn ? CATEGORY_EN_TRANSLATIONS[foundCat.id] : null;
          catLabel = enCat?.menuLabel || foundCat.menuLabel;
        }

        consultationEntries.push({
          id: s.id,
          code: s.svcCode || s.code,
          name: en?.name || s.name,
          tagline: en?.tagline || s.tagline || s.cardDescription || '',
          description: en?.cardDescription || s.cardDescription || s.tagline || '',
          category: s.category,
          categoryLabel: catLabel,
          subgroup: s.subgroup,
          subgroupLabel: en?.subgroupLabel || s.subgroupLabel,
          badge: isNonVn ? 'ENTERPRISE QUOTE' : (s.badge || 'TƯ VẤN BÁO GIÁ'),
          canonicalPath: s.canonicalPath,
          hasPublicCalculator: false,
          features: isNonVn ? [
            '99.99% Availability SLA & 24/7/365 Continuous Operations',
            'Tailored Consulting & Enterprise Infrastructure Architecture Design',
            'Dedicated 1-on-1 Viettel IDC Cloud Migration & Optimization Experts',
            'Certified Compliance with ISO 27001 & TIA-942 Rated 3 Standards'
          ] : [
            'SLA 99.99% Khả dụng & Vận hành liên tục 24/7/365',
            'Tư vấn & Thiết kế kiến trúc hạ tầng chuyên biệt cho Doanh nghiệp',
            'Đội ngũ Chuyên gia Viettel IDC đồng hành di trú & tối ưu 1-1',
            'Tuân thủ chuẩn An toàn thông tin ISO 27001 & TIA-942 Rated 3'
          ]
        });
      }
    });

    return [...pricingListEntries, ...consultationEntries];
  }, [isNonVn]);

  // Handler to update a spec for a specific service
  const handleSpecChange = (serviceId: string, specId: string, value: any) => {
    setServicesSpecsState(prev => ({
      ...prev,
      [serviceId]: {
        ...(prev[serviceId] || {}),
        [specId]: value
      }
    }));
  };

  // Category Icon Resolver
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'all': return Layers;
      case 'compute':
      case 'cloud-compute': return Cpu;
      case 'container-kubernetes':
      case 'container': return Layers;
      case 'data-center': return Server;
      case 'storage': return HardDrive;
      case 'data-platform': return Database;
      case 'networking': return Globe;
      case 'security': return ShieldCheck;
      case 'cloud-operations': return Activity;
      case 'digital-services': return Monitor;
      case 'managed-services': return Headphones;
      case 'hosting': return Mail;
      default: return Sparkles;
    }
  };

  // Category Tabs Configuration
  const categoryTabs = [
    { id: 'all', name: isNonVn ? 'All Services (60+)' : 'Tất cả dịch vụ (60+)' },
    { id: 'cloud-compute', name: isNonVn ? 'Cloud Compute' : 'Điện toán đám mây' },
    { id: 'data-center', name: isNonVn ? 'Data Center' : 'Trung tâm dữ liệu' },
    { id: 'storage', name: isNonVn ? 'Storage & Data Protection' : 'Lưu trữ & Bảo vệ dữ liệu' },
    { id: 'security', name: isNonVn ? 'Security & Cyber Defense' : 'Bảo mật & An ninh mạng' },
    { id: 'container-kubernetes', name: isNonVn ? 'Container & Kubernetes' : 'Container & Kubernetes' },
    { id: 'hosting', name: isNonVn ? 'Domain, Hosting & Mail' : 'Domain, Hosting & Mail' },
    { id: 'digital-services', name: isNonVn ? 'Enterprise Applications' : 'Ứng dụng doanh nghiệp' },
    { id: 'data-platform', name: isNonVn ? 'Database & Data Platform' : 'Cơ sở dữ liệu & Data' },
    { id: 'integration', name: isNonVn ? 'Integration & Messaging' : 'Tích hợp & Messaging' },
    { id: 'managed-services', name: isNonVn ? 'Consulting & Managed Services' : 'Dịch vụ tư vấn & Vận hành' },
  ];

  // Filter services by category group, pricing type filter, and search query
  const filteredServices = useMemo(() => {
    return unifiedEcosystemServices.filter(svc => {
      let matchesGroup = selectedGroupId === 'all';
      if (!matchesGroup) {
        if (selectedGroupId === 'cloud-compute' && (svc.category === 'cloud-compute' || svc.category === 'compute')) matchesGroup = true;
        else if (selectedGroupId === 'data-center' && svc.category === 'data-center') matchesGroup = true;
        else if (selectedGroupId === 'storage' && (svc.category === 'storage' || svc.category === 'cloud-storage')) matchesGroup = true;
        else if (selectedGroupId === 'security' && (svc.category === 'security' || svc.category === 'cloud-security')) matchesGroup = true;
        else if ((selectedGroupId === 'container' || selectedGroupId === 'container-kubernetes') && (svc.category === 'container' || svc.category === 'container-kubernetes' || svc.subgroup === 'container-kubernetes')) matchesGroup = true;
        else if (selectedGroupId === 'hosting' && (svc.category === 'hosting' || svc.category === 'domain-hosting')) matchesGroup = true;
        else if (selectedGroupId === 'digital-services' && (svc.category === 'digital-services' || svc.category === 'enterprise-app')) matchesGroup = true;
        else if (selectedGroupId === 'data-platform' && (svc.category === 'data-platform' || svc.category === 'cloud-database')) matchesGroup = true;
        else if (selectedGroupId === 'integration' && svc.category === 'integration') matchesGroup = true;
        else if (selectedGroupId === 'managed-services' && (svc.category === 'managed-services' || svc.category === 'cloud-operations')) matchesGroup = true;
        else if (svc.category === selectedGroupId) matchesGroup = true;
      }

      let matchesType = true;
      if (pricingTypeFilter === 'public_calculator') matchesType = svc.hasPublicCalculator;
      if (pricingTypeFilter === 'consultation') matchesType = !svc.hasPublicCalculator;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        svc.name.toLowerCase().includes(q) ||
        svc.code.toLowerCase().includes(q) ||
        svc.categoryLabel.toLowerCase().includes(q) ||
        svc.description.toLowerCase().includes(q) ||
        svc.tagline.toLowerCase().includes(q);

      return matchesGroup && matchesType && matchesSearch;
    });
  }, [selectedGroupId, pricingTypeFilter, searchQuery, unifiedEcosystemServices]);

  const publicCount = useMemo(() => unifiedEcosystemServices.filter(s => s.hasPublicCalculator).length, [unifiedEcosystemServices]);
  const consultationCount = useMemo(() => unifiedEcosystemServices.filter(s => !s.hasPublicCalculator).length, [unifiedEcosystemServices]);

  // Toggle or add item to cart
  const handleAddToCart = (service: PricingServiceItem) => {
    const specsState = servicesSpecsState[service.id] || {};
    const unitPrice = calculateServicePrice(service, specsState);

    setCartItems(prev => {
      const existingIdx = prev.findIndex(item => item.serviceId === service.id);
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          specsState,
          monthlyUnitPrice: unitPrice
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            serviceId: service.id,
            serviceName: service.name,
            serviceCode: service.code,
            groupName: service.group,
            specsState,
            monthlyUnitPrice: unitPrice,
            quantity: 1
          }
        ];
      }
    });
  };

  const handleRemoveFromCart = (serviceId: string) => {
    setCartItems(prev => prev.filter(item => item.serviceId !== serviceId));
  };

  const cartTotals = useMemo(() => {
    const rawMonthly = cartItems.reduce((sum, item) => sum + (item.monthlyUnitPrice * item.quantity), 0);
    const vatMultiplier = includeVat ? 1.08 : 1.0;
    const finalMonthlyWithVat = rawMonthly * vatMultiplier;

    return {
      rawMonthly,
      finalMonthlyWithVat,
    };
  }, [cartItems, includeVat]);

  const formatVND = (amount: number) => {
    if (isNonVn) {
      const usdAmount = Math.max(1, Math.round(amount / 24500));
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(usdAmount);
    }
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Math.round(amount));
  };

  const handleCopyEstimateSummary = () => {
    let summaryText = isNonVn 
      ? `VIETTEL IDC CLOUD SERVICES COST ESTIMATE\nVAT: ${includeVat ? 'Included 8% VAT' : 'Excluding VAT'}\n--------------------------------------------------\n`
      : `BẢNG DỰ TOÁN CHI PHÍ DỊCH VỤ VIETTEL IDC\nThuế VAT: ${includeVat ? 'Đã gồm 8% VAT' : 'Chưa bao gồm VAT'}\n--------------------------------------------------\n`;
    
    cartItems.forEach((item, idx) => {
      summaryText += `${idx + 1}. ${item.serviceName} (${item.serviceCode})\n`;
      summaryText += `   ${isNonVn ? 'Unit price:' : 'Đơn giá:'} ${formatVND(includeVat ? item.monthlyUnitPrice * 1.08 : item.monthlyUnitPrice)}${isNonVn ? '/month' : '/tháng'}\n`;
    });
    summaryText += `--------------------------------------------------\n`;
    summaryText += `${isNonVn ? 'Total estimated monthly cost:' : 'Tổng chi phí dự toán hàng tháng:'} ${formatVND(cartTotals.finalMonthlyWithVat)}${isNonVn ? '/month' : '/tháng'}\n`;
    summaryText += `${isNonVn ? 'Official enterprise consultation:' : 'Liên hệ tư vấn chính thức:'} 1800 8088 / https://viettelidc.com.vn/\n`;

    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  const handleOpenConsultationModal = (serviceName: string, categoryName: string) => {
    setQuoteModalState({
      isOpen: true,
      initialDetails: {
        serviceName,
        category: categoryName,
        notes: `Yêu cầu báo giá tư vấn giải pháp ${serviceName} cho Doanh nghiệp`
      }
    });
  };

  const handleCloudServerSelectConfig = (config: EstimatorConfig, estimatedTotal: number, currency: string) => {
    // 1. Find Cloud Server pricing item if exists and update spec state
    const csService = ALL_PRICING_SERVICES.find(s => s.id === 'cloud-server');
    if (csService) {
      setServicesSpecsState(prev => ({
        ...prev,
        'cloud-server': {
          ...prev['cloud-server'],
          vcpu: config.vcpu,
          ram: config.ram,
          storage: config.storage,
          ip: config.ipCount,
          bandwidth: config.bandwidthMbps,
          os: config.osType === 'windows' ? 'windows' : 'linux'
        }
      }));
      handleAddToCart(csService);
    }

    // 2. Open quote modal for immediate assistance
    setQuoteModalState({
      isOpen: true,
      initialDetails: {
        serviceName: `Viettel Cloud Server (${config.vcpu} vCPU / ${config.ram} GB RAM / ${config.storage} GB SSD)`,
        category: 'Điện toán đám mây',
        notes: `Đăng ký gói cấu hình Cloud Server: ${config.vcpu} vCPU, ${config.ram} GB RAM, ${config.storage} GB SSD Storage, ${config.bandwidthMbps} Mbps Băng thông, ${config.ipCount} IP Public (${config.osType.toUpperCase()} OS).`
      }
    });
  };

  const handleRequestOfficialQuoteFromCart = () => {
    const summaryList = cartItems.map(i => `${i.serviceName} (${i.serviceCode})`).join(', ');
    setQuoteModalState({
      isOpen: true,
      initialDetails: {
        serviceName: isNonVn 
          ? `Cost Estimate for ${cartItems.length} Viettel Cloud services` 
          : `Dự toán ${cartItems.length} dịch vụ Viettel Cloud`,
        notes: isNonVn
          ? `Estimated services list: ${summaryList} | Estimated monthly total: ${formatVND(cartTotals.finalMonthlyWithVat)}/month`
          : `Danh sách dịch vụ dự toán: ${summaryList} | Tổng dự toán ước tính: ${formatVND(cartTotals.finalMonthlyWithVat)}/tháng`
      }
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-28 font-sans">
      
      {/* 1. HERO BANNER - FOCUS ON PRICING & COST ESTIMATION */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-10 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C5002A_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="vidc-container relative z-10 space-y-6 text-center">
          
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-2">
            <VIDCNativeButton onClick={onNavigateHome} className="hover:text-white transition-colors cursor-pointer">
              {ui.home}
            </VIDCNativeButton>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-medium">
              {ui.pricingCalculatorTitle}
            </span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-black uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-red-400" />
            <span>
              {ui.pricingCalculatorTitle}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight max-w-4xl mx-auto">
            {ui.pricingCalculatorTitle}
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            {ui.pricingCalculatorSubtitle}
          </p>

          {/* Quick value props / highlights for pricing */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">
                  {ui.instantPricingTitle}
                </div>
                <div className="text-[10px] text-slate-400">
                  {ui.instantPricingSubtitle}
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">
                  {ui.transparentTitle}
                </div>
                <div className="text-[10px] text-slate-400">
                  {ui.transparentSubtitle}
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">
                  {ui.customSpecsTitle}
                </div>
                <div className="text-[10px] text-slate-400">CPU, RAM, SSD, WAN</div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 backdrop-blur-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">
                  {ui.automatedQuotationTitle}
                </div>
                <div className="text-[10px] text-slate-400">
                  {ui.automatedQuotationSubtitle}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ECOSYSTEM FILTER CONTROLS BAR */}
      <section className="sticky top-[120px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3.5">
        <div className="vidc-container">
          
          <div className="flex items-center gap-3">
            
            <div className="relative shrink-0" ref={dropdownRef}>
              <VIDCNativeButton
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer border ${
                  isDropdownOpen || selectedGroupId !== 'all'
                    ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                    : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5 shrink-0 text-red-500" />
                <span>{isNonVn ? 'Category Filter' : 'Bộ Lọc Danh Mục'}</span>
                <ChevronDown className={`w-3.5 h-3.5 ml-0.5 shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </VIDCNativeButton>

              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-85 sm:w-[420px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 p-3.5 animate-in fade-in slide-in-from-top-2 duration-200 text-left">
                  <div className="max-h-[500px] overflow-y-auto space-y-2 pr-1 custom-scrollbar-subtle">
                    {SERVICE_CATEGORIES.map((cat) => {
                      const IconComp = getCategoryIcon(cat.id);
                      const isExpanded = expandedGroupId === cat.id;
                      const catI18n = getCategoryI18n(cat.id, currentLanguage);
                      const catLabel = catI18n.menuLabel || cat.menuLabel;

                      return (
                        <div key={cat.id} className="rounded-xl border border-slate-200/80 overflow-hidden bg-slate-50/50">
                          <VIDCNativeButton
                            type="button"
                            onClick={() => setExpandedGroupId(prev => prev === cat.id ? null : cat.id)}
                            className="w-full flex items-center justify-between py-2.5 px-3 text-xs sm:text-sm font-semibold hover:bg-slate-100/80 text-slate-800 transition-colors cursor-pointer text-left"
                          >
                            <div className="flex items-center gap-2.5 flex-1 min-w-0 mr-2">
                              <IconComp className="w-4 h-4 shrink-0 text-red-600" />
                              <span className="truncate">{catLabel}</span>
                            </div>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-slate-400" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-400" />}
                          </VIDCNativeButton>

                          {isExpanded && (
                            <div className="bg-white border-t border-slate-100 px-3 py-1.5 space-y-1">
                              {ALL_SERVICES.filter(s => s.category === cat.id).map((service) => {
                                const svcName = isNonVn ? (SERVICE_EN_TRANSLATIONS[service.id]?.name || service.name) : service.name;
                                return (
                                  <VIDCNativeButton
                                    key={service.id}
                                    type="button"
                                    onClick={() => {
                                      setSelectedGroupId(cat.id);
                                      setSearchQuery(svcName);
                                      setIsDropdownOpen(false);
                                    }}
                                    className="w-full flex items-center justify-between py-1.5 pl-4 pr-2 rounded-lg text-xs cursor-pointer text-slate-700 hover:bg-slate-50 hover:text-red-600"
                                  >
                                    <span className="truncate">{svcName}</span>
                                    <span className="text-[10px] text-slate-400 font-mono ml-2 shrink-0">{service.svcCode || service.code}</span>
                                  </VIDCNativeButton>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Ô tìm kiếm dịch vụ đặt ngay bên cạnh nút bộ lọc */}
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <VIDCNativeInput
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isNonVn ? "Search 60+ Viettel Cloud services (Cloud Server, Colocation, Object Storage, Anti-DDoS, M365...)..." : "Tìm kiếm 60+ dịch vụ Viettel Cloud (Cloud Server, Colocation, Object Storage, Anti-DDoS, M365...)..."}
                className="w-full pl-10 pr-9 py-2 rounded-full bg-slate-100 text-slate-900 placeholder-slate-400 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white border border-slate-200/80 transition-all"
              />
              {searchQuery && (
                <VIDCNativeButton 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5 rounded-full cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </VIDCNativeButton>
              )}
            </div>

            {cartItems.length > 0 && (
              <VIDCNativeButton
                onClick={() => setIsCartDrawerOpen(true)}
                className="px-3.5 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold flex items-center gap-2 shadow-xs transition-all cursor-pointer shrink-0"
              >
                <Calculator className="w-3.5 h-3.5 text-red-400" />
                <span>{isNonVn ? 'Estimate' : 'Dự toán'} ({cartItems.length})</span>
              </VIDCNativeButton>
            )}

          </div>

        </div>
      </section>

      {/* 3. DEFAULT PRICING TABLE: VIETTEL CLOUD SERVER */}
      <section className="vidc-container mt-4">
        <CloudServerEstimator
          currentMarket={effectiveMarket}
          onSelectConfigForQuote={handleCloudServerSelectConfig}
        />
      </section>

      {/* 4. FLOATING ESTIMATE SUMMARY BAR */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900 text-white border-t border-slate-700 shadow-2xl p-4 animate-in slide-in-from-bottom duration-300">
          <div className="vidc-container flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 font-black">
                {cartItems.length}
              </div>
              <div>
                <div className="text-xs text-slate-300 font-bold">
                  {isNonVn ? `Cost Estimate (${cartItems.length} selected services)` : `Bảng tổng hợp dự toán (${cartItems.length} dịch vụ đã chọn)`}
                </div>
                <div className="text-xl font-black text-white flex items-center gap-2">
                  <span>{formatVND(cartTotals.finalMonthlyWithVat)}</span>
                  <span className="text-xs font-medium text-slate-400">{isNonVn ? '/ month' : '/ tháng'}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <VIDCNativeButton
                onClick={() => setIsCartDrawerOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-red-400" />
                <span>{isNonVn ? 'View Detailed Estimate' : 'Xem Chi Tiết Bảng Dự Toán'}</span>
              </VIDCNativeButton>

              <VIDCNativeButton
                onClick={handleRequestOfficialQuoteFromCart}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-red-600/30 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isNonVn ? 'Request Official Quotation' : 'Gửi Yêu Cầu Báo Giá Chính Thức'}</span>
              </VIDCNativeButton>
            </div>

          </div>
        </div>
      )}

      {/* 5. SLIDE-OVER ESTIMATE DRAWER PANEL */}
      {isCartDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsCartDrawerOpen(false)}
          />

          <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300 text-slate-900">
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <Calculator className="w-5 h-5 text-red-500" />
                <div>
                  <h3 className="text-base font-bold">
                    {isNonVn ? 'Detailed Cost Estimate' : 'Bảng Dự Toán Chi Phí Chi Tiết'}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {isNonVn ? 'Calculated automatically based on your selected specifications' : 'Tự động tính theo cấu hình & thông số bạn đã chọn'}
                  </p>
                </div>
              </div>
              <VIDCNativeButton 
                onClick={() => setIsCartDrawerOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </VIDCNativeButton>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <Calculator className="w-12 h-12 text-slate-300 mx-auto" />
                  <p className="text-xs text-slate-500 font-medium">
                    {isNonVn ? 'Your estimate is empty' : 'Bảng dự toán của bạn đang trống'}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {isNonVn ? 'Configure specs in any service to add it to your estimate.' : 'Hãy bấm "Thêm Vào Bảng Dự Toán" ở bất kỳ dịch vụ nào để bắt đầu tính toán chi phí.'}
                  </p>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div key={item.serviceId} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="text-[10px] font-bold text-red-600 uppercase">{item.groupName}</div>
                        <h4 className="text-sm font-bold text-slate-900">{item.serviceName}</h4>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {isNonVn ? 'Code:' : 'Mã:'} {item.serviceCode}
                        </span>
                      </div>
                      <VIDCNativeButton
                        onClick={() => handleRemoveFromCart(item.serviceId)}
                        className="p-1 text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                        title={isNonVn ? 'Remove service from estimate' : 'Xóa dịch vụ khỏi dự toán'}
                      >
                        <Trash2 className="w-4 h-4" />
                      </VIDCNativeButton>
                    </div>

                    <div className="text-[11px] text-slate-600 space-y-0.5 bg-white p-2.5 rounded-xl border border-slate-100">
                      {Object.entries(item.specsState).map(([k, v]) => (
                        <div key={k} className="flex justify-between">
                          <span className="text-slate-500 capitalize">{k}:</span>
                          <span className="font-bold text-slate-800">{String(v)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs">
                      <span className="text-slate-500">{isNonVn ? 'Monthly unit price:' : 'Đơn giá tháng:'}</span>
                      <span className="font-bold text-red-600">
                        {formatVND(includeVat ? item.monthlyUnitPrice * 1.08 : item.monthlyUnitPrice)} {isNonVn ? '/ month' : '/ tháng'}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-4">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>{isNonVn ? 'Subtotal (excl. VAT):' : 'Tổng tiền chưa VAT:'}</span>
                    <span>{formatVND(cartTotals.rawMonthly)} {isNonVn ? '/ month' : '/ tháng'}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>{isNonVn ? `VAT (${includeVat ? '8%' : '0%'}):` : `Thuế VAT (${includeVat ? '8%' : '0%'}):`}</span>
                    <span>{formatVND(cartTotals.rawMonthly * (includeVat ? 0.08 : 0))} {isNonVn ? '/ month' : '/ tháng'}</span>
                  </div>
                  <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                    <span>{isNonVn ? 'Total estimated monthly:' : 'Tổng dự toán hàng tháng:'}</span>
                    <span className="text-red-600">{formatVND(cartTotals.finalMonthlyWithVat)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <VIDCNativeButton
                    onClick={handleCopyEstimateSummary}
                    className="flex-1 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    {copiedSummary ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>{isNonVn ? 'Copied!' : 'Đã Sao Chép!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>{isNonVn ? 'Copy Summary' : 'Sao Chép Nội Dung'}</span>
                      </>
                    )}
                  </VIDCNativeButton>

                  <VIDCNativeButton
                    onClick={() => {
                      setIsCartDrawerOpen(false);
                      handleRequestOfficialQuoteFromCart();
                    }}
                    className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isNonVn ? 'Official Quote' : 'Báo Giá Chính Thức'}</span>
                  </VIDCNativeButton>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 6. ENTERPRISE QUOTE MODAL INTEGRATION */}
      <EnterpriseQuoteModal
        isOpen={quoteModalState.isOpen}
        onClose={() => setQuoteModalState({ isOpen: false, initialDetails: null })}
        initialDetails={quoteModalState.initialDetails}
        currentMarket={currentMarket}
      />

    </div>
  );
};
