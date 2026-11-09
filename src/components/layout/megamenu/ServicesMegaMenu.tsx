import React, { useState } from 'react';
import { 
  SERVICE_CATEGORIES, 
  ALL_SERVICES, 
  ServiceItem 
} from '../../../data/sitemapData';
import { 
  getCategoryI18n,
  getSubgroupI18n,
  getServiceI18n,
  getCommonUII18n
} from '../../../data/multilingualServiceData';
import { useLanguage } from '../../../context/LanguageContext';
import { 
  Search, 
  X, 
  ArrowRight, 
  ExternalLink,
  Cpu, 
  ShieldCheck, 
  Zap, 
  HardDrive, 
  Box, 
  Network, 
  ShieldAlert, 
  Database,
  Server,
  Cloud,
  Activity,
  Monitor,
  Settings,
  Globe,
  FileText,
  Sparkles,
  Layers
} from 'lucide-react';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



const getServiceTechType = (serviceId: string): 'VMware' | 'OpenStack' | 'Both' | 'None' => {
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

interface ServicesMegaMenuProps {
  onClose: () => void;
  currentMarketPath: string;
}

export const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({ onClose, currentMarketPath }) => {
  const { t, currentLanguage, getFullPath } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const [activeTab, setActiveTab] = useState<string>(SERVICE_CATEGORIES[0]?.id || 'cloud-compute');
  const [searchQuery, setSearchQuery] = useState('');

  const ui = getCommonUII18n(currentLanguage);

  // Localized Categories
  const localizedCategories = SERVICE_CATEGORIES.map(cat => {
    const catI18n = getCategoryI18n(cat.id, currentLanguage);
    return {
      ...cat,
      menuLabel: catI18n.menuLabel || cat.menuLabel,
      description: catI18n.description || cat.description,
      subgroups: cat.subgroups.map(sub => ({
        ...sub,
        name: getSubgroupI18n(sub.id, currentLanguage) || sub.name
      }))
    };
  });

  // Localized Services
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

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'cloud-compute': return <Cpu className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      case 'container-kubernetes': return <Layers className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      case 'data-center': return <Server className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      case 'storage': return <HardDrive className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      case 'data-platform': return <Database className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      case 'networking': return <Network className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      case 'security': return <ShieldCheck className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      case 'cloud-operations': return <Activity className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      case 'digital-services': return <Monitor className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      case 'managed-services': return <Settings className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      case 'hosting': return <Globe className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      default: return <Cloud className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
    }
  };

  const renderFormattedName = (name: string) => {
    if (!name) return null;
    const match = name.match(/^(.*?)\s*(\([^)]+\))$/);
    if (match) {
      return (
        <>
          <span>{match[1]}</span>
          <span className="text-[11px] font-normal opacity-90 ml-1 inline-block">{match[2]}</span>
        </>
      );
    }
    return <span>{name}</span>;
  };

  const getServiceIcon = (code: string, categoryId: string) => {
    const codeUpper = (code || '').toUpperCase();
    if (codeUpper.includes('GPU') || codeUpper.includes('NPU')) return <Zap className="w-4 h-4" />;
    if (codeUpper.includes('OKS') || codeUpper.includes('DKS') || codeUpper.includes('CR') || codeUpper.includes('K8S') || codeUpper.includes('CONTAINER')) return <Box className="w-4 h-4" />;
    if (codeUpper.includes('VCS') || codeUpper.includes('VPC') || codeUpper.includes('PVC') || codeUpper.includes('DPC') || codeUpper.includes('OPC') || codeUpper.includes('VDC') || codeUpper.includes('MPC')) return <Cpu className="w-4 h-4" />;
    if (categoryId === 'data-center') return <Server className="w-4 h-4" />;
    if (categoryId === 'storage') return <HardDrive className="w-4 h-4" />;
    if (categoryId === 'data-platform') return <Database className="w-4 h-4" />;
    if (categoryId === 'networking') return <Network className="w-4 h-4" />;
    if (categoryId === 'security') return <ShieldCheck className="w-4 h-4" />;
    if (categoryId === 'cloud-operations') return <Activity className="w-4 h-4" />;
    if (categoryId === 'digital-services') return <Monitor className="w-4 h-4" />;
    if (categoryId === 'managed-services') return <Settings className="w-4 h-4" />;
    if (categoryId === 'hosting') return <Globe className="w-4 h-4" />;
    return <Cloud className="w-4 h-4" />;
  };

  const filteredServices = searchQuery.trim()
    ? localizedAllServices.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (
    <div className="relative w-full mx-auto bg-white border border-slate-200/90 rounded-2xl shadow-2xl p-7 md:p-9 text-slate-800 overflow-hidden min-h-[520px]">
      {/* Top Right Close Button */}
      <VIDCNativeButton 
        onClick={onClose}
        aria-label={isNonVn ? 'Close menu' : 'Đóng menu'}
        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all z-10"
      >
        <X className="w-5 h-5" />
      </VIDCNativeButton>

      {/* Main 3-Column Mega Menu Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* COLUMN 1: Category Sidebar & Search (~25% / col-span-3) */}
        <div className="lg:col-span-3 lg:border-r lg:border-slate-200/80 lg:pr-6 space-y-4">
          {/* Header Link */}
          <VIDCAnchor
            href={getFullPath('/services')}
            onClick={onClose}
            className="group flex items-center justify-between text-sm font-bold text-slate-900 hover:text-[var(--vidc-color-brand-red)] transition-colors pt-1"
          >
            <span>{isNonVn ? 'View all services' : 'Xem tất cả dịch vụ'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </VIDCAnchor>

          {/* Quick Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <VIDCNativeInput
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isNonVn ? 'Search services...' : 'Tìm dịch vụ...'}
              className="w-full pl-9 pr-3 py-2 text-xs bg-slate-100/80 text-slate-900 placeholder-slate-400 rounded-lg border border-transparent focus:bg-white focus:border-[var(--vidc-color-brand-red)] focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]/10 transition-all"
            />
            {searchQuery && (
              <VIDCNativeButton 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 hover:text-slate-700 bg-slate-200 px-1.5 py-0.5 rounded"
              >
                {isNonVn ? 'Clear' : 'Xóa'}
              </VIDCNativeButton>
            )}
          </div>

          {/* Category Item List */}
          <div className="space-y-1 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
            {/* 10 Canonical Categories */}
            {localizedCategories.map(cat => {
              const isActive = activeTab === cat.id && !searchQuery;

              return (
                <VIDCNativeButton
                  key={cat.id}
                  onClick={() => { setActiveTab(cat.id); setSearchQuery(''); }}
                  onMouseEnter={() => { if (!searchQuery) setActiveTab(cat.id); }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[var(--vidc-color-brand-subtle)] text-[var(--vidc-color-brand-red)] font-bold'
                      : 'text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-subtle)]'
                  }`}
                >
                  <span className="truncate">{cat.menuLabel}</span>
                </VIDCNativeButton>
              );
            })}
          </div>
        </div>

        {/* COLUMN 2: Products Display Area (~50% / col-span-6) */}
        <div className="lg:col-span-6 space-y-4 px-1">
          {/* Search Results Overlay */}
          {filteredServices !== null ? (
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs text-slate-500 pb-2 border-b border-slate-200">
                <span>{isNonVn ? `Search results (${filteredServices.length} services)` : `Kết quả tìm kiếm (${filteredServices.length} dịch vụ)`}</span>
                <VIDCNativeButton onClick={() => setSearchQuery('')} className="text-[var(--vidc-color-brand-red)] font-bold hover:underline">
                  {isNonVn ? 'Clear search' : 'Xóa tìm kiếm'}
                </VIDCNativeButton>
              </div>

              {filteredServices.length === 0 ? (
                <div className="py-12 text-center text-slate-500 text-xs">
                  {isNonVn ? `No services found matching "${searchQuery}".` : `Không tìm thấy dịch vụ phù hợp với từ khóa "${searchQuery}".`}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
                  {filteredServices.map(service => (
                    <VIDCAnchor
                      key={service.id}
                      href={getFullPath(service.canonicalPath)}
                      onClick={onClose}
                      className="group block p-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer border border-transparent hover:border-slate-200/60"
                    >
                      <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                        <span className="text-[var(--vidc-color-brand-red)] shrink-0">
                          {getServiceIcon(service.code, service.category)}
                        </span>
                        <span className="leading-snug">{renderFormattedName(service.name)}</span>
                        <div className="flex items-center gap-1 shrink-0">
                          {(() => {
                            const tech = getServiceTechType(service.id);
                            if (tech === 'VMware') {
                              return (
                                <span className="h-4 inline-flex items-center px-1.5 rounded-full text-[8px] font-bold uppercase bg-red-50 text-red-600 border border-red-200/60 tracking-wider leading-none">
                                  VMware
                                </span>
                              );
                            }
                            return null;
                          })()}
                          {service.badge && (
                            <span className="h-4 inline-flex items-center text-[8px] font-bold px-1.5 uppercase rounded-full bg-sky-50 text-sky-700 border border-sky-200/70 shrink-0 leading-none">
                              {service.badge}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 pl-6.5 leading-relaxed line-clamp-2">{service.tagline}</p>
                    </VIDCAnchor>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* CATEGORY SPECIFIC VIEW */
            <div>
              {(() => {
                const category = localizedCategories.find(c => c.id === activeTab);
                if (!category) return null;
                const categoryServices = localizedAllServices.filter(s => s.category === category.id);
                const hasSubgroups = category.subgroups && category.subgroups.length > 0;

                return (
                  <div className="space-y-4">
                    <div className="pb-2 border-b border-slate-200 flex justify-between items-center">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
                          {category.menuLabel}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">{category.description}</p>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                        {categoryServices.length} {isNonVn ? 'services' : 'dịch vụ'}
                      </span>
                    </div>

                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
                      {hasSubgroups ? (
                        category.subgroups.map(subgroup => {
                          const subgroupServices = categoryServices.filter(s => s.subgroup === subgroup.id);
                          if (subgroupServices.length === 0) return null;

                          return (
                            <div key={subgroup.id} className="space-y-2">
                              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 pt-1">
                                {subgroup.name} ({subgroupServices.length})
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
                                {subgroupServices.map(service => (
                                  <VIDCAnchor
                                    key={service.id}
                                    href={getFullPath(service.canonicalPath)}
                                    onClick={onClose}
                                    className="group block p-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer border border-transparent hover:border-slate-200/60"
                                  >
                                    <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                                      <span className="text-[var(--vidc-color-brand-red)] shrink-0">
                                        {getServiceIcon(service.code, service.category)}
                                      </span>
                                      <span className="leading-snug">{renderFormattedName(service.name)}</span>
                                        <div className="flex items-center gap-1 shrink-0">
                                          {(() => {
                                            const tech = getServiceTechType(service.id);
                                            if (tech === 'VMware') {
                                              return (
                                                <span className="h-4 inline-flex items-center px-1.5 rounded-full text-[8px] font-bold uppercase bg-red-50 text-red-600 border border-red-200/60 tracking-wider leading-none">
                                                  VMware
                                                </span>
                                              );
                                            }
                                            return null;
                                          })()}
                                          {service.badge && (
                                            <span className="h-4 inline-flex items-center text-[8px] font-bold px-1.5 uppercase rounded-full bg-sky-50 text-sky-700 border border-sky-200/70 shrink-0 leading-none">
                                              {service.badge}
                                            </span>
                                          )}
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1 pl-6.5 leading-relaxed line-clamp-2">{service.tagline}</p>
                                  </VIDCAnchor>
                                ))}
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
                          {categoryServices.map(service => (
                            <VIDCAnchor
                              key={service.id}
                              href={getFullPath(service.canonicalPath)}
                              onClick={onClose}
                              className="group block p-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer border border-transparent hover:border-slate-200/60"
                            >
                              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                                <span className="text-[var(--vidc-color-brand-red)] shrink-0">
                                  {getServiceIcon(service.code, service.category)}
                                </span>
                                <span className="leading-snug">{renderFormattedName(service.name)}</span>
                                  <div className="flex items-center gap-1 shrink-0">
                                    {(() => {
                                      const tech = getServiceTechType(service.id);
                                      if (tech === 'VMware') {
                                        return (
                                          <span className="h-4 inline-flex items-center px-1.5 rounded-full text-[8px] font-bold uppercase bg-red-50 text-red-600 border border-red-200/60 tracking-wider leading-none">
                                            VMware
                                          </span>
                                        );
                                      }
                                      return null;
                                    })()}
                                    {service.badge && (
                                      <span className="h-4 inline-flex items-center text-[8px] font-bold px-1.5 uppercase rounded-full bg-sky-50 text-sky-700 border border-sky-200/70 shrink-0 leading-none">
                                        {service.badge}
                                      </span>
                                    )}
                                  </div>
                              </div>
                              <p className="text-xs text-slate-500 mt-1 pl-6.5 leading-relaxed line-clamp-2">{service.tagline}</p>
                            </VIDCAnchor>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {/* COLUMN 3: Right Featured Banner Cards (~25% / col-span-3) */}
        <div className="lg:col-span-3 lg:border-l lg:border-slate-200/80 lg:pl-6.5 space-y-4">
          
          {/* Card 1: Red Promotion Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[var(--vidc-legacy-hex-8f0027)] via-[var(--vidc-legacy-hex-a30023)] to-[var(--vidc-legacy-hex-75001e)] text-white relative overflow-hidden shadow-lg group hover:shadow-xl transition-all">
            <div className="w-8 h-8 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white mb-3 border border-white/20">
              <Zap className="w-4 h-4 fill-white/80" />
            </div>
            
            <h4 className="text-sm font-bold text-white tracking-wide">
              {isNonVn ? 'Special Offers' : 'Khuyến mãi tháng 6'}
            </h4>
            
            <p className="text-xs text-white/90 mt-2 leading-relaxed">
              {isNonVn 
                ? 'Save up to 30% on Cloud Server deployments for new enterprise accounts.'
                : 'Giảm 30% Cloud Server cho mọi khách hàng mới trong tháng này.'}
            </p>

            <VIDCAnchor
              href={getFullPath('/resources/promotions/')}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white mt-4 hover:underline underline-offset-4 group-hover:translate-x-0.5 transition-all"
            >
              <span>{isNonVn ? 'Explore deals' : 'Xem ngay'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </VIDCAnchor>
          </div>

          {/* Card 2: Featured Service - Viettel Dedicated Compute */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-800 hover:border-red-200 hover:bg-white hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-xl text-[var(--vidc-color-brand-red)] bg-red-50 flex items-center justify-center mb-3 border border-red-100">
              <Cpu className="w-4 h-4" />
            </div>

            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-slate-900">
                Viettel Dedicated Compute
              </h4>
            </div>

            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              {isNonVn
                ? 'Dedicated physical servers with 100% isolated resources and TIA-942 Rated 3 standard.'
                : 'Máy chủ dùng riêng với 100% tài nguyên vật lý cô lập, hiệu năng đỉnh cao & chuẩn TIA-942 Rated 3.'}
            </p>

            <VIDCAnchor
              href={getFullPath('/services/compute/dedicated-compute/')}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] mt-3 hover:underline group"
            >
              <span>{isNonVn ? 'View service details' : 'Xem chi tiết dịch vụ'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </VIDCAnchor>
          </div>

        </div>

      </div>
    </div>
  );
};
