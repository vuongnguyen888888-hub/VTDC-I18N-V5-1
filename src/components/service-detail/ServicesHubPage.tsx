'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  ALL_SERVICES, 
  SERVICE_CATEGORIES, 
  ServiceItem,
  ServiceCategory
} from '../../data/sitemapData';
import { 
  SERVICE_EN_TRANSLATIONS,
  CATEGORY_EN_TRANSLATIONS,
  SUBGROUP_EN_TRANSLATIONS
} from '../../data/serviceEnglishTranslations';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Home, 
  ChevronRight, 
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Search, 
  ArrowRight, 
  Server, 
  Database, 
  HardDrive, 
  Globe, 
  ShieldCheck, 
  Layers, 
  Activity, 
  Cpu, 
  Monitor,
  Headphones,
  Mail,
  SlidersHorizontal,
  X,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export const getServiceTechType = (serviceId: string): 'VMware' | 'OpenStack' | 'Both' | 'None' => {
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

interface ServicesHubPageProps {
  initialCategory?: string;
}

export const ServicesHubPage: React.FC<ServicesHubPageProps> = ({ initialCategory = 'cloud-compute' }) => {
  const { currentLanguage, getFullPath } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const isLaos = isNonVn;

  // Normalize initial category slug aliases
  const normalizeCategory = (cat: string) => {
    if (!cat || cat === 'all') return 'cloud-compute';
    if (cat === 'compute') return 'cloud-compute';
    if (cat === 'containers') return 'container-kubernetes';
    if (cat === 'database') return 'data-platform';
    return cat;
  };

  const [activeTab, setActiveTab] = useState<string>(normalizeCategory(initialCategory));
  const [activeSubgroup, setActiveSubgroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [expandedGroupId, setExpandedGroupId] = useState<string | null>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tabsScrollRef = useRef<HTMLDivElement>(null);

  // Translate categories
  const localizedCategories = SERVICE_CATEGORIES.map(cat => {
    if (!isNonVn) return cat;
    
    const catEn = CATEGORY_EN_TRANSLATIONS[cat.id];
    let menuLabel = catEn?.menuLabel || cat.menuLabel;
    let description = catEn?.description || cat.description;
    const subgroups = cat.subgroups.map(sub => {
      let subName = SUBGROUP_EN_TRANSLATIONS[sub.id] || sub.name;
      return { ...sub, name: subName };
    });

    return {
      ...cat,
      menuLabel,
      description,
      subgroups
    };
  });

  // Translate displayed services
  const localizedAllServices = ALL_SERVICES.map(service => {
    if (!isNonVn) return service;

    const en = SERVICE_EN_TRANSLATIONS[service.id];
    return {
      ...service,
      name: en?.name || service.name,
      tagline: en?.tagline || service.tagline,
      cardDescription: en?.cardDescription || service.cardDescription
    };
  });

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

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsScrollRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      tabsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Reset all filters from main view
  const handleResetAll = () => {
    setActiveTab('cloud-compute');
    setActiveSubgroup('all');
    setSearchQuery('');
    setIsDropdownOpen(false);
  };

  // Filtered Services
  const displayedServices = localizedAllServices.filter(service => {
    const matchesCategory = activeTab === 'all' || service.category === activeTab;
    const matchesSubgroup = activeSubgroup === 'all' || service.subgroup === activeSubgroup;
    
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      service.name.toLowerCase().includes(q) ||
      service.code.toLowerCase().includes(q) ||
      service.tagline.toLowerCase().includes(q) ||
      (service.cardDescription && service.cardDescription.toLowerCase().includes(q)) ||
      (service.subgroupLabel && service.subgroupLabel.toLowerCase().includes(q));

    return matchesCategory && matchesSubgroup && matchesSearch;
  });

  const currentCategoryObj = localizedCategories.find(c => c.id === activeTab);

  return (
    <div className="min-h-screen bg-[var(--vidc-color-background-subtle)] text-[var(--vidc-color-text-primary)]">
      {/* 1. Breadcrumb Bar */}
      <div className="border-b border-slate-200/80 bg-white sticky top-0 z-20 shadow-xs">
        <div className="vidc-container py-3 flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
          <VIDCAnchor
            href={getFullPath('/')}
            className="hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-1 shrink-0"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{isLaos ? 'Home' : 'Trang chủ'}</span>
          </VIDCAnchor>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <VIDCAnchor
            href={getFullPath('/services/')}
            onClick={(e) => {
              e.preventDefault();
              handleResetAll();
            }}
            className="hover:text-[var(--vidc-color-brand-red)] transition-colors shrink-0"
          >
            {isLaos ? 'Services Catalog' : 'Danh mục Dịch vụ'}
          </VIDCAnchor>
          {currentCategoryObj && (
            <>
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="font-semibold text-slate-900 truncate">
                {currentCategoryObj.menuLabel}
              </span>
            </>
          )}
        </div>
      </div>

      {/* 2. Main Services Section matching Homepage ServicesTabsSection */}
      <section className="py-12 md:py-16 border-b border-[var(--vidc-color-border-default)]">
        <div className="vidc-container space-y-10">
          {/* Header */}
          <div className="text-center max-w-5xl mx-auto space-y-3.5">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-red-700">
                {isLaos ? 'VIETTEL IDC SERVICE ECOSYSTEM' : 'HỆ SINH THÁI DỊCH VỤ VIETTEL IDC'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight whitespace-normal lg:whitespace-nowrap">
              {isLaos ? 'Comprehensive Digital & Cloud Infrastructure for All Business Needs' : 'Hạ tầng số & đám mây toàn diện cho mọi nhu cầu doanh nghiệp'}
            </h1>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed whitespace-normal lg:whitespace-nowrap">
              {isLaos ? '60+ internationally standardized services, meeting the most rigorous standards for Information Security & Business Continuity.' : '60+ dịch vụ chuẩn hóa quốc tế, đáp ứng các tiêu chuẩn khắt khe nhất về An toàn thông tin & Vận hành liên tục.'}
            </p>
          </div>

          {/* Controls Bar: Category Scroll Row with Filter & Search inside Filter */}
          <div className="space-y-4">
            <div className="flex items-center justify-start gap-3 sm:gap-4 max-w-full">
              {/* Filter Button */}
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
                  <SlidersHorizontal className="w-3.5 h-3.5 shrink-0" />
                  <span>{isLaos ? 'Filter' : 'Bộ lọc'}</span>
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
                        <span>{isLaos ? 'Search in filter' : 'Tìm kiếm trong bộ lọc'}</span>
                        {searchQuery && (
                          <VIDCNativeButton
                            type="button"
                            onClick={() => setSearchQuery('')}
                            className="text-[11px] font-semibold text-[var(--vidc-color-brand-red)] hover:underline"
                          >
                            {isLaos ? 'Clear search' : 'Xóa tìm kiếm'}
                          </VIDCNativeButton>
                        )}
                      </div>
                      <div className="relative w-full">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <VIDCNativeInput
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder={isLaos ? 'Search services, keywords...' : 'Tìm kiếm dịch vụ, từ khóa...'}
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
                      {localizedCategories.map((cat) => {
                        const IconComp = getCategoryIcon(cat.id);
                        const categoryServices = localizedAllServices.filter(s => s.category === cat.id);
                        const categoryCount = categoryServices.length;
                        const isExpanded = expandedGroupId === cat.id;

                        return (
                          <div key={cat.id} className="rounded-xl border border-slate-200/80 overflow-hidden bg-slate-50/50">
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
                  className="overflow-x-auto no-scrollbar min-w-0 scroll-smooth"
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
                          {isLaos ? 'View details' : 'Xem chi tiết'}
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
              <h3 className="text-base font-bold text-slate-800">{isLaos ? 'No matching services found' : 'Không tìm thấy dịch vụ phù hợp'}</h3>
              <p className="text-xs text-slate-500">
                {isLaos ? 'Please try searching with another keyword or clear filters to see all services.' : 'Vui lòng thử tìm kiếm bằng từ khóa khác hoặc xóa bộ lọc để xem tất cả dịch vụ.'}
              </p>
              <VIDCNativeButton
                onClick={handleResetAll}
                className="mt-2 px-4 py-2 rounded-full text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {isLaos ? 'Clear all filters' : 'Xóa tất cả bộ lọc'}
              </VIDCNativeButton>
            </div>
          )}
        </div>
      </section>

      {/* 3. Trust & Infrastructure Assurance */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="vidc-container grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200/80 flex items-center justify-center shrink-0 text-[var(--vidc-color-brand-red)]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">
                {isLaos ? 'ANSI/TIA-942 Rated 3' : 'Tiêu Chuẩn TIA-942 Rated 3'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {isLaos 
                  ? 'All data centers are built to strict international availability and safety standards.' 
                  : 'Hệ thống Data Center đạt chứng chỉ quốc tế uy tín về xây dựng và vận hành bền vững.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200/80 flex items-center justify-center shrink-0 text-[var(--vidc-color-brand-red)]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">
                {isLaos ? '99.99% Uptime SLA' : 'Cam Kết SLA 99.99%'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {isLaos 
                  ? 'Enterprise SLA guaranteed for all compute, storage, network, and hosting infrastructure.' 
                  : 'Cam kết chất lượng dịch vụ minh bạch, hỗ trợ kỹ thuật chuyên sâu 24/7/365.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200/80 flex items-center justify-center shrink-0 text-[var(--vidc-color-brand-red)]">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm mb-1">
                {isLaos ? 'Modern Data Centers' : 'Hạ Tầng Trung Tâm Dữ Liệu'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {isLaos 
                  ? 'Distributed across Hanoi, Da Nang, and Ho Chi Minh City with ultra-fast connectivity.' 
                  : 'Phân bố tại các thành phố trọng điểm, kết nối trực tiếp vào mạng trục viễn thông quốc gia.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesHubPage;
