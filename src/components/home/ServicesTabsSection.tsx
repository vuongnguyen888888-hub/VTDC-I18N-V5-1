import React, { useState, useEffect, useRef } from 'react';
import { 
  SERVICE_CATEGORIES, 
  ALL_SERVICES, 
  ServiceItem, 
  ServiceCategory 
} from '../../data/sitemapData';
import { SERVICE_EN_TRANSLATIONS } from '../../data/serviceEnglishTranslations';
import { getCategoryI18n, getSubgroupI18n, getCommonUII18n, getServiceI18n } from '../../data/multilingualServiceData';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Cpu, 
  Server, 
  HardDrive, 
  Database, 
  Globe, 
  ShieldCheck, 
  Activity, 
  Monitor, 
  Headphones, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Tag, 
  Loader2,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Layers,
  SlidersHorizontal,
  Filter,
  Check
} from 'lucide-react';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export type ServiceTechType = 'VMware' | 'OpenStack' | 'Both' | 'None';

export const getServiceTechType = (serviceId: string): ServiceTechType => {
  const pureId = (serviceId || '').toLowerCase().trim();

  // Chỉ gắn tag VMware cho các dịch vụ thực sự chạy trên nền tảng ảo hóa VMware
  const vmwareIds = [
    'viettel-cloud-server-vmware',
    'viettel-private-cloud-vmware'
  ];

  const openstackIds = [
    'viettel-cloud-server',
    'viettel-open-private-cloud',
    'viettel-open-dedicated-private-cloud',
    'viettel-cloud-gpu',
    'viettel-cloud-backup-baas',
    'viettel-cloud-file-storage',
    'viettel-cloud-object-storage',
    'viettel-open-kubernetes-service-voks',
    'viettel-container-registry',
    'viettel-database-service-vdbs',
    'viettel-search-engine-service-vse',
    'viettel-caching-service-vcas',
    'viettel-api-gateway',
    'viettel-queue-messaging-service-vkqs'
  ];

  const dualPlatformIds = [
    'viettel-virtual-private-cloud',
    'viettel-managed-private-cloud',
    'viettel-cloud-disaster-recovery'
  ];

  if (vmwareIds.includes(pureId)) return 'VMware';
  if (openstackIds.includes(pureId)) return 'OpenStack';
  if (dualPlatformIds.includes(pureId)) return 'Both';

  return 'None';
};

interface ServicesTabsSectionProps {
  currentMarket: SEAMarket;
}

export const ServicesTabsSection: React.FC<ServicesTabsSectionProps> = ({ currentMarket }) => {
  const { t, currentLanguage } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const isLaos = isNonVn;

  const ui = getCommonUII18n(currentLanguage);

  // Translate categories
  const localizedCategories = SERVICE_CATEGORIES.map(cat => {
    const catI18n = getCategoryI18n(cat.id, currentLanguage);
    const subgroups = cat.subgroups.map(sub => {
      const subName = getSubgroupI18n(sub.id, currentLanguage);
      return { ...sub, name: subName };
    });

    return {
      ...cat,
      menuLabel: catI18n.menuLabel || cat.menuLabel,
      description: catI18n.description || cat.description,
      subgroups
    };
  });

  // Translate displayed services
  const localizedAllServices = ALL_SERVICES.map(service => {
    const svcI18n = getServiceI18n(service.id, currentLanguage);

    if (svcI18n) {
      return {
        ...service,
        name: svcI18n.name,
        tagline: svcI18n.tagline,
        cardDescription: svcI18n.cardDescription,
        subgroupLabel: svcI18n.subgroupLabel || service.subgroupLabel,
        ctaText: svcI18n.ctaText || ui.viewDetails
      };
    }

    return {
      ...service,
      ctaText: ui.viewDetails
    };
  });

  const defaultCategory = 'cloud-compute';
  const [activeTab, setActiveTab] = useState<string>('cloud-compute');
  const [activeSubgroup, setActiveSubgroup] = useState<string>('all');
  const [activeTech, setActiveTech] = useState<'all' | 'vmware' | 'openstack'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [expandedGroupId, setExpandedGroupId] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isDraggingTrack, setIsDraggingTrack] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tabsScrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const dragOffsetRef = useRef<number>(32);

  const handleTabsScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const maxScroll = target.scrollWidth - target.clientWidth;
    if (maxScroll > 0) {
      const progress = target.scrollLeft / maxScroll;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    } else {
      setScrollProgress(0);
    }
  };

  const handlePointerDownHandle = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingTrack(true);
    if (handleRef.current) {
      const handleRect = handleRef.current.getBoundingClientRect();
      dragOffsetRef.current = e.clientX - handleRect.left;
    } else {
      dragOffsetRef.current = 32;
    }
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMoveHandle = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDraggingTrack && trackRef.current && tabsScrollRef.current) {
      const trackRect = trackRef.current.getBoundingClientRect();
      const handleWidth = 64;
      const availableWidth = trackRect.width - handleWidth;
      if (availableWidth > 0) {
        const desiredHandleLeft = e.clientX - trackRect.left - dragOffsetRef.current;
        const ratio = Math.min(1, Math.max(0, desiredHandleLeft / availableWidth));
        const maxScroll = tabsScrollRef.current.scrollWidth - tabsScrollRef.current.clientWidth;
        tabsScrollRef.current.scrollLeft = ratio * maxScroll;
        setScrollProgress(ratio);
      }
    }
  };

  const handlePointerUpHandle = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDraggingTrack) {
      setIsDraggingTrack(false);
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch (err) {
        // ignore
      }
    }
  };

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (trackRef.current && tabsScrollRef.current && !isDraggingTrack) {
      const trackRect = trackRef.current.getBoundingClientRect();
      const handleWidth = 64;
      const clickX = e.clientX - trackRect.left - handleWidth / 2;
      const availableWidth = trackRect.width - handleWidth;
      if (availableWidth > 0) {
        const ratio = Math.min(1, Math.max(0, clickX / availableWidth));
        const maxScroll = tabsScrollRef.current.scrollWidth - tabsScrollRef.current.clientWidth;
        tabsScrollRef.current.scrollTo({ left: ratio * maxScroll, behavior: 'smooth' });
      }
    }
  };

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsScrollRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      tabsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const [pricingData, setPricingData] = useState<Record<string, string>>({});
  const [loadingPricing, setLoadingPricing] = useState<boolean>(true);

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

  // Pre-load prices
  useEffect(() => {
    const fetchedPrices: Record<string, string> = isLaos ? {
      'viettel-cloud-server': 'From $11.60/mo',
      'viettel-cloud-gpu': 'From $100.00/mo',
      'viettel-open-kubernetes-service-voks': 'From $48.00/mo',
      'viettel-database-service-vdbs': 'From $34.00/mo',
      'viettel-cloud-backup-baas': 'From $18.00/mo',
      'viettel-media-cdn': 'From $0.006/GB',
      'viettel-cloud-firewall': 'From $60.00/mo',
      'viettel-anti-ddos': 'Consult on Bandwidth',
      'viettel-data-center-colocation': 'From $72.00/RACK/mo',
    } : {
      'viettel-cloud-server': 'Từ 290.000đ/tháng',
      'viettel-cloud-gpu': 'Từ 2.500.000đ/tháng',
      'viettel-open-kubernetes-service-voks': 'Từ 1.200.000đ/tháng',
      'viettel-database-service-vdbs': 'Từ 850.000đ/tháng',
      'viettel-cloud-backup-baas': 'Từ 450.000đ/tháng',
      'viettel-media-cdn': 'Từ 150đ/GB',
      'viettel-cloud-firewall': 'Từ 1.500.000đ/tháng',
      'viettel-anti-ddos': 'Tư vấn theo Băng thông',
      'viettel-data-center-colocation': 'Từ 1.800.000đ/RACK/tháng',
    };
    setPricingData(fetchedPrices);
    setLoadingPricing(false);
  }, [currentMarket, isLaos]);

  const getFullPath = (path: string) => {
    if (currentMarket.prefix === '/') return path;
    return `${currentMarket.prefix}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  // Reset all filters from main view
  const handleResetAll = () => {
    setActiveTab('cloud-compute');
    setActiveSubgroup('all');
    setSearchQuery('');
    setIsDropdownOpen(false);
  };

  // Get Services for current tab & search query
  const getDisplayedServices = (): ServiceItem[] => {
    return localizedAllServices.filter(service => {
      const matchesCategory = activeTab === 'all' || service.category === activeTab;
      const matchesSubgroup = activeSubgroup === 'all' || service.subgroup === activeSubgroup;
      
      // Technology Filter
      if (activeTech === 'vmware') {
        const tech = getServiceTechType(service.id);
        if (tech !== 'VMware' && tech !== 'Both') return false;
      } else if (activeTech === 'openstack') {
        const tech = getServiceTechType(service.id);
        if (tech !== 'OpenStack' && tech !== 'Both') return false;
      }

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        service.name.toLowerCase().includes(q) ||
        service.code.toLowerCase().includes(q) ||
        service.tagline.toLowerCase().includes(q) ||
        (service.cardDescription && service.cardDescription.toLowerCase().includes(q)) ||
        (service.subgroupLabel && service.subgroupLabel.toLowerCase().includes(q));

      return matchesCategory && matchesSubgroup && matchesSearch;
    });
  };

  const displayedServices = getDisplayedServices();

  // Category Icon Resolver
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'all': return Layers;
      case 'compute':
      case 'cloud-compute': return Cpu;
      case 'container-kubernetes': return Layers;
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

  return (
    <section className="bg-[var(--vidc-color-background-subtle)] py-16 md:py-24 border-b border-[var(--vidc-color-border-default)]">
      <div className="vidc-container space-y-10">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-3.5">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
            <span className="text-xs font-black uppercase tracking-wider text-red-700">
              {ui.ecoSystemBadge}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight whitespace-normal">
            {t.servicesSection.title || ui.ecoSystemTitle}
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed whitespace-normal">
            {t.servicesSection.subtitle || ui.ecoSystemSubtitle}
          </p>
        </div>

        {/* Controls Bar: Category Scroll Row with Filter & Search inside Filter */}
        <div className="space-y-4">
          {/* Category Quick Scroll Tabs with Filter on the exact same row */}
          <div className="flex items-center justify-start gap-3 sm:gap-4 max-w-full">
            {/* Filter Button (Outside overflow-x-auto so dropdown is never clipped and scrollbar never touches it) */}
            <div className="relative shrink-0 text-left flex items-center" ref={dropdownRef}>
              <VIDCNativeButton
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center gap-2 px-4 py-2 h-9 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer border ${
                  isDropdownOpen
                    ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                    : 'border-slate-300 bg-white text-slate-900 hover:border-[var(--vidc-color-brand-red)] hover:text-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-background-brand-subtle)]'
                }`}
              >
                <Filter className="w-3.5 h-3.5 shrink-0" />
                <span>{ui.filterLabel}</span>
                {searchQuery && (
                  <span className="w-2 h-2 rounded-full bg-[var(--vidc-color-brand-red)] shrink-0" />
                )}
                <ChevronDown className={`w-3.5 h-3.5 ml-0.5 shrink-0 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </VIDCNativeButton>

              {/* V8-Style Filter Dropdown Card */}
              {isDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-85 sm:w-[420px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 p-4 animate-in fade-in slide-in-from-top-2 duration-200 text-left space-y-3">
                  
                  {/* Search Input Box Inside Filter Card */}
                  <div className="space-y-1.5 pb-2 border-b border-slate-100">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span>{ui.searchInFilter}</span>
                      {searchQuery && (
                        <VIDCNativeButton
                          type="button"
                          onClick={() => setSearchQuery('')}
                          className="text-[11px] font-semibold text-[var(--vidc-color-brand-red)] hover:underline"
                        >
                          {ui.clearSearch}
                        </VIDCNativeButton>
                      )}
                    </div>
                    <div className="relative w-full">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <VIDCNativeInput
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t.servicesSection.searchPlaceholder || ui.searchPlaceholder}
                        className="w-full pl-9 pr-8 py-2 text-xs font-medium bg-slate-100/80 border border-slate-200/90 rounded-xl focus:bg-white focus:border-slate-800 focus:outline-none text-slate-800 placeholder-slate-400 transition-all shadow-2xs"
                      />
                      {searchQuery && (
                        <VIDCNativeButton
                          type="button"
                          onClick={() => setSearchQuery('')}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                        </VIDCNativeButton>
                      )}
                    </div>
                  </div>

                  <div className="max-h-[460px] sm:max-h-[520px] overflow-y-auto space-y-2 pr-1 custom-scrollbar-subtle">
                    {/* Level 1 Categories with Level 2 Service Names when expanded */}
                    {localizedCategories.map((cat) => {
                        const IconComp = getCategoryIcon(cat.id);
                        const categoryServices = localizedAllServices.filter(s => s.category === cat.id);
                        const categoryCount = categoryServices.length;
                        const isExpanded = expandedGroupId === cat.id;

                        return (
                          <div key={cat.id} className="rounded-xl border border-slate-200/80 overflow-hidden bg-slate-50/50">
                            {/* Level 1 Item Header (Toggles accordion dropdown) */}
                            <VIDCNativeButton
                              type="button"
                              onClick={() => {
                                setExpandedGroupId(prev => prev === cat.id ? null : cat.id);
                              }}
                              className="w-full flex items-center justify-between py-2.5 px-3 text-xs sm:text-sm font-semibold hover:bg-[var(--vidc-color-background-brand-subtle)] hover:text-[var(--vidc-color-brand-red)] text-slate-800 transition-colors cursor-pointer text-left group"
                            >
                              <div className="flex items-center gap-2.5 flex-1 min-w-0 mr-2">
                                <IconComp className="w-4 h-4 shrink-0 text-slate-500 group-hover:text-[var(--vidc-color-brand-red)] transition-colors" />
                                <span className="truncate">{cat.menuLabel}</span>
                                <span className="text-[10px] font-medium text-slate-500 bg-white border border-slate-200 px-1.5 py-0.5 rounded-full shrink-0">
                                  {categoryCount}
                                </span>
                              </div>

                              <div className="p-1 text-slate-400 hover:text-slate-700 rounded-md shrink-0">
                                {isExpanded ? (
                                  <ChevronUp className="w-3.5 h-3.5" />
                                ) : (
                                  <ChevronDown className="w-3.5 h-3.5" />
                                )}
                              </div>
                            </VIDCNativeButton>

                            {/* Level 2: List of Services when expanded */}
                            {isExpanded && categoryServices.length > 0 && (
                              <div className="bg-white border-t border-slate-100 px-3 py-1.5 space-y-1">
                                {cat.subgroups && cat.subgroups.length > 0 ? (
                                  cat.subgroups.map((sub) => {
                                    const subServices = categoryServices.filter(s => s.subgroup === sub.id);
                                    if (subServices.length === 0) return null;

                                    return (
                                      <div key={sub.id} className="space-y-1">
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pt-1.5 pb-0.5 pl-3">
                                          {sub.name}
                                        </div>
                                        {subServices.map((service) => {
                                          const isServiceSelected = searchQuery === service.name;
                                          return (
                                            <VIDCNativeButton
                                              key={service.id}
                                              type="button"
                                              onClick={() => {
                                                setActiveTab(cat.id);
                                                setActiveSubgroup('all');
                                                setSearchQuery(service.name);
                                                setIsDropdownOpen(false);
                                              }}
                                              className={`w-full flex items-center justify-between py-1.5 pl-5 pr-2 rounded-lg text-xs cursor-pointer transition-colors group ${
                                                isServiceSelected
                                                  ? 'text-[var(--vidc-color-brand-red)] font-bold bg-[var(--vidc-color-background-brand-subtle)]'
                                                  : 'text-slate-600 hover:bg-[var(--vidc-color-background-brand-subtle)] hover:text-[var(--vidc-color-brand-red)]'
                                              }`}
                                            >
                                              <div className="flex items-center gap-2 truncate pr-2">
                                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${isServiceSelected ? 'bg-[var(--vidc-color-brand-red)]' : 'bg-slate-300 group-hover:bg-[var(--vidc-color-brand-red)]'}`} />
                                                <span className="truncate">{service.name}</span>
                                              </div>
                                            </VIDCNativeButton>
                                          );
                                        })}
                                      </div>
                                    );
                                  })
                                ) : (
                                  categoryServices.map((service) => {
                                    const isServiceSelected = searchQuery === service.name;
                                    return (
                                      <VIDCNativeButton
                                        key={service.id}
                                        type="button"
                                        onClick={() => {
                                          setActiveTab(cat.id);
                                          setActiveSubgroup('all');
                                          setSearchQuery(service.name);
                                          setIsDropdownOpen(false);
                                        }}
                                        className={`w-full flex items-center justify-between py-1.5 pl-3 pr-2 rounded-lg text-xs cursor-pointer transition-colors group ${
                                          isServiceSelected
                                            ? 'text-[var(--vidc-color-brand-red)] font-bold bg-[var(--vidc-color-background-brand-subtle)]'
                                            : 'text-slate-600 hover:bg-[var(--vidc-color-background-brand-subtle)] hover:text-[var(--vidc-color-brand-red)]'
                                        }`}
                                      >
                                        <div className="flex items-center gap-2 truncate pr-2">
                                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${isServiceSelected ? 'bg-[var(--vidc-color-brand-red)]' : 'bg-slate-300 group-hover:bg-[var(--vidc-color-brand-red)]'}`} />
                                          <span className="truncate">{service.name}</span>
                                        </div>
                                      </VIDCNativeButton>
                                    );
                                  })
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
            </div>

            {/* Category Pills (Horizontal Scroll) */}
            <div className="min-w-0 flex-1">
              <div
                ref={tabsScrollRef}
                onScroll={handleTabsScroll}
                className={`overflow-x-auto no-scrollbar min-w-0 ${isDraggingTrack ? 'scroll-auto' : 'scroll-smooth'}`}
              >
                <div className="flex items-center gap-2.5 min-w-max pb-0.5">
                  {localizedCategories.map(cat => {
                    const IconComp = getCategoryIcon(cat.id);
                    const isSelected = activeTab === cat.id;

                    return (
                      <VIDCNativeButton
                        key={cat.id}
                        onClick={(e) => {
                          setActiveTab(cat.id);
                          setActiveSubgroup('all');
                          (e.currentTarget as HTMLElement).scrollIntoView({
                            behavior: 'smooth',
                            block: 'nearest',
                            inline: 'center'
                          });
                        }}
                        className={`flex items-center gap-2 px-4 py-2 h-9 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                          isSelected
                            ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-sm'
                            : 'bg-white text-[var(--vidc-color-text-secondary)] border border-[var(--vidc-color-border-default)] hover:border-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-background-brand-subtle)] hover:text-[var(--vidc-color-brand-red)]'
                        }`}
                      >
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{cat.menuLabel}</span>
                      </VIDCNativeButton>
                    );
                  })}
                </div>
              </div>

              {/* Custom refined light grey track + drag-only handle (64px) - Hidden by user request */}
              <div
                ref={trackRef}
                onClick={handleTrackClick}
                className="hidden"
              >
                <div
                  ref={handleRef}
                  onPointerDown={handlePointerDownHandle}
                  onPointerMove={handlePointerMoveHandle}
                  onPointerUp={handlePointerUpHandle}
                  onPointerCancel={handlePointerUpHandle}
                  className={`h-full rounded-full relative cursor-grab active:cursor-grabbing ${
                    isDraggingTrack 
                      ? 'bg-slate-800 transition-none' 
                      : 'bg-slate-400 hover:bg-slate-600 transition-[transform,background-color] duration-150 ease-out'
                  }`}
                  style={{
                    width: '64px',
                    left: 0,
                    transform: `translateX(calc(${scrollProgress * 100}% - ${scrollProgress * 64}px))`,
                    willChange: 'transform'
                  }}
                  title={isLaos ? 'Drag scrollbar to see more categories' : 'Cầm kéo hoặc click thanh cuộn để xem thêm danh mục'}
                />
              </div>
            </div>

            {/* Scroll Navigation Buttons (Prev/Next) */}
            <div className="flex items-center gap-1.5 shrink-0 ml-1">
              <VIDCNativeButton
                type="button"
                onClick={() => scrollTabs('left')}
                className="w-9 h-9 rounded-full bg-white border border-slate-200/95 hover:border-[var(--vidc-color-brand-red)] hover:text-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-background-brand-subtle)] flex items-center justify-center text-slate-700 transition-all cursor-pointer shadow-2xs"
                title={isLaos ? "Previous" : "Trước"}
              >
                <ChevronLeft className="w-4 h-4" />
              </VIDCNativeButton>
              <VIDCNativeButton
                type="button"
                onClick={() => scrollTabs('right')}
                className="w-9 h-9 rounded-full bg-white border border-slate-200/95 hover:border-[var(--vidc-color-brand-red)] hover:text-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-background-brand-subtle)] flex items-center justify-center text-slate-700 transition-all cursor-pointer shadow-2xs"
                title={isLaos ? "Next" : "Sau"}
              >
                <ChevronRight className="w-4 h-4" />
              </VIDCNativeButton>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        {displayedServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedServices.map(service => {
              const IconComp = getCategoryIcon(service.category);
              const price = pricingData[service.id];

              return (
                <div
                  key={service.id}
                  onClick={() => {
                    window.location.href = getFullPath(service.canonicalPath);
                  }}
                  className="group flex flex-col justify-between p-6 rounded-[var(--vidc-card-radius-md)] bg-[var(--vidc-card-background-default)] border border-[var(--vidc-card-border-default)] hover:border-[var(--vidc-color-brand-red)] hover:shadow-[var(--vidc-card-shadow-hover)] transition-all duration-200 cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* Top Row: Category Icon & Status Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="p-2.5 rounded-lg bg-[var(--vidc-color-background-subtle)] group-hover:bg-[var(--vidc-color-background-brand-subtle)] transition-colors">
                        <IconComp className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {/* Technology Badge */}
                        {(() => {
                          const tech = getServiceTechType(service.id);
                          if (tech === 'VMware') {
                            return (
                              <span className="h-4 inline-flex items-center px-1.5 rounded-full text-[8.5px] font-bold uppercase bg-red-50 text-red-600 border border-red-200/60 tracking-wide leading-none">
                                VMware
                              </span>
                            );
                          }
                          return null;
                        })()}

                        {service.badge && (
                          <span className="h-4 inline-flex items-center px-1.5 rounded-full text-[8.5px] font-bold uppercase bg-sky-50 text-sky-700 border border-sky-200/70 tracking-wide leading-none">
                            {service.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-[var(--vidc-color-text-primary)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                        {service.name}
                      </h3>
                      <p className="text-xs text-[var(--vidc-color-text-secondary)] line-clamp-3 leading-relaxed">
                        {service.cardDescription || service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Row: Arrow by default, reveals 'Xem chi tiết' + animated Arrow on hover */}
                  <div className="pt-4 mt-6 border-t border-[var(--vidc-color-border-default)] flex items-center justify-start overflow-hidden min-h-[40px]">
                    <VIDCAnchor
                      href={getFullPath(service.canonicalPath)}
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-bold text-[var(--vidc-color-text-brand)] inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span className="inline-block max-w-0 opacity-0 -translate-x-2 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out overflow-hidden whitespace-nowrap">
                        {ui.viewDetails}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[var(--vidc-color-brand-red)] transition-all duration-300 group-hover:translate-x-1 shrink-0" />
                    </VIDCAnchor>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-2xl bg-white border border-slate-200/80 space-y-3 max-w-md mx-auto">
            <Search className="w-8 h-8 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">{ui.noResultsFound}</h3>
            <p className="text-xs text-slate-500">
              {ui.estimateEmptyDesc}
            </p>
            <VIDCNativeButton
              onClick={handleResetAll}
              className="mt-2 px-4 py-2 rounded-full text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {ui.clear}
            </VIDCNativeButton>
          </div>
        )}
      </div>
    </section>
  );
};

