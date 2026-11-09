import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  X, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  Loader2, 
  Building, 
  User, 
  Mail, 
  PhoneCall, 
  Layers, 
  Server, 
  Clock, 
  SlidersHorizontal, 
  ChevronDown, 
  Check,
  Search
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { QUOTE_COPY, getQuoteLocale, localizeQuoteCategory, localizeQuoteService, localizeQuoteRegion } from '../../utils/quoteLocale';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


export interface QuoteModalDetails {
  serviceName?: string;
  category?: string;
  notes?: string;
  serviceSku?: string;
  pillarSlug?: string;
}

interface EnterpriseQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDetails?: QuoteModalDetails | null;
  currentMarket?: SEAMarket;
}

interface ServiceOption {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
}

const SERVICE_CATALOG_GROUPS = [
  { id: 'all', name: 'Tất cả danh mục' },
  { id: 'cloud-compute', name: 'Điện toán & Máy chủ ảo' },
  { id: 'data-center', name: 'Trung tâm dữ liệu & Colocation' },
  { id: 'storage', name: 'Lưu trữ & Bảo vệ dữ liệu' },
  { id: 'data-platform', name: 'Cơ sở dữ liệu & Nền tảng dữ liệu' },
  { id: 'security', name: 'Bảo mật & An ninh mạng SOC' },
  { id: 'networking', name: 'Mạng & Phân phối nội dung CDN' },
  { id: 'digital-services', name: 'Ứng dụng & Dịch vụ số' },
  { id: 'managed-services', name: 'Dịch vụ Quản trị & Tư vấn di trú' },
];

const SERVICE_OPTIONS: ServiceOption[] = [
  // Điện toán & Máy chủ
  { id: 'cloud_server', name: 'Viettel Cloud Server (Máy chủ ảo doanh nghiệp)', categoryId: 'cloud-compute', categoryName: 'Điện toán & Máy chủ ảo' },
  { id: 'gpu_ai', name: 'Viettel Cloud GPU (Máy chủ tính toán AI & Deep Learning)', categoryId: 'cloud-compute', categoryName: 'Điện toán & Máy chủ ảo' },
  { id: 'private_cloud', name: 'Dedicated Private Cloud (Đám mây riêng biệt)', categoryId: 'cloud-compute', categoryName: 'Điện toán & Máy chủ ảo' },
  { id: 'bare_metal', name: 'Bare Metal Server (Máy chủ vật lý dùng riêng)', categoryId: 'cloud-compute', categoryName: 'Điện toán & Máy chủ ảo' },
  { id: 'kubernetes_vks', name: 'Managed Kubernetes - vK8s (Cụm Container tự động)', categoryId: 'cloud-compute', categoryName: 'Điện toán & Máy chủ ảo' },
  { id: 'container_registry', name: 'Container Registry & CI/CD Pipeline', categoryId: 'cloud-compute', categoryName: 'Điện toán & Máy chủ ảo' },

  // Trung tâm dữ liệu
  { id: 'colocation_rack', name: 'Thuê Chỗ Đặt Máy Chủ (Colocation / Thuê Tủ Rack)', categoryId: 'data-center', categoryName: 'Trung tâm dữ liệu & Colocation' },
  { id: 'dedicated_cage', name: 'Thuê Phòng Máy Riêng biệt (Dedicated Cage Data Center)', categoryId: 'data-center', categoryName: 'Trung tâm dữ liệu & Colocation' },
  { id: 'datacenter_hands', name: 'Dịch vụ Hỗ trợ Kỹ thuật tại chỗ (Remote Hands 24/7)', categoryId: 'data-center', categoryName: 'Trung tâm dữ liệu & Colocation' },

  // Lưu trữ & Sao lưu
  { id: 'object_storage', name: 'Cloud Object Storage (Lưu trữ đối tượng chuẩn S3)', categoryId: 'storage', categoryName: 'Lưu trữ & Bảo vệ dữ liệu' },
  { id: 'block_storage', name: 'Cloud Block Storage (Ổ cứng lưu trữ SSD NVMe)', categoryId: 'storage', categoryName: 'Lưu trữ & Bảo vệ dữ liệu' },
  { id: 'cloud_backup', name: 'Cloud Backup - BaaS (Sao lưu dữ liệu tự động)', categoryId: 'storage', categoryName: 'Lưu trữ & Bảo vệ dữ liệu' },
  { id: 'cloud_dr', name: 'Disaster Recovery - DRaaS (Khôi phục sau thảm họa)', categoryId: 'storage', categoryName: 'Lưu trữ & Bảo vệ dữ liệu' },

  // Cơ sở dữ liệu & Nền tảng
  { id: 'managed_db', name: 'Cloud Database - vDBS (PostgreSQL, MySQL Quản trị)', categoryId: 'data-platform', categoryName: 'Cơ sở dữ liệu & Nền tảng dữ liệu' },
  { id: 'redis_cache', name: 'Cloud In-Memory Cache (Redis hiệu năng cao)', categoryId: 'data-platform', categoryName: 'Cơ sở dữ liệu & Nền tảng dữ liệu' },
  { id: 'event_streaming', name: 'Managed Apache Kafka & Event Streaming', categoryId: 'data-platform', categoryName: 'Cơ sở dữ liệu & Nền tảng dữ liệu' },

  // Bảo mật & An ninh mạng
  { id: 'soc_security', name: 'SOC as a Service (Trung tâm Giám sát An ninh mạng 24/7)', categoryId: 'security', categoryName: 'Bảo mật & An ninh mạng SOC' },
  { id: 'cloud_waf', name: 'Cloud WAF (Tường lửa Bảo vệ Ứng dụng Web & API)', categoryId: 'security', categoryName: 'Bảo mật & An ninh mạng SOC' },
  { id: 'anti_ddos', name: 'Anti-DDoS Protection (Chống tấn công DDoS L3/L4/L7)', categoryId: 'security', categoryName: 'Bảo mật & An ninh mạng SOC' },
  { id: 'ssl_tls', name: 'Chứng thư số bảo mật (SSL/TLS & PKI Certificate)', categoryId: 'security', categoryName: 'Bảo mật & An ninh mạng SOC' },

  // Mạng & CDN
  { id: 'cloud_cdn', name: 'Cloud CDN (Mạng Phân phối Nội dung & Media siêu tốc)', categoryId: 'networking', categoryName: 'Mạng & Phân phối nội dung CDN' },
  { id: 'load_balancer', name: 'Cloud Load Balancer (Cân bằng tải lưu lượng mạng)', categoryId: 'networking', categoryName: 'Mạng & Phân phối nội dung CDN' },
  { id: 'direct_connect', name: 'Direct Connect & Megaport (Kênh truyền riêng tốc độ cao)', categoryId: 'networking', categoryName: 'Mạng & Phân phối nội dung CDN' },
  { id: 'sd_wan', name: 'Mạng diện rộng định nghĩa bằng phần mềm (SD-WAN)', categoryId: 'networking', categoryName: 'Mạng & Phân phối nội dung CDN' },

  // Ứng dụng & Dịch vụ số
  { id: 'cloud_pc_vdi', name: 'Cloud PC / VDI (Máy tính ảo làm việc từ xa an toàn)', categoryId: 'digital-services', categoryName: 'Ứng dụng & Dịch vụ số' },
  { id: 'vcontract', name: 'Hợp đồng điện tử xác thực số (vContract)', categoryId: 'digital-services', categoryName: 'Ứng dụng & Dịch vụ số' },
  { id: 'enterprise_email', name: 'Email Doanh nghiệp Cloud Email', categoryId: 'digital-services', categoryName: 'Ứng dụng & Dịch vụ số' },

  // Dịch vụ Quản trị
  { id: 'managed_operations', name: 'Dịch vụ Quản trị Hệ thống Cloud (Managed Ops 24/7)', categoryId: 'managed-services', categoryName: 'Dịch vụ Quản trị & Tư vấn di trú' },
  { id: 'cloud_migration', name: 'Dịch vụ Tư vấn & Di trú Đám mây (Cloud Migration)', categoryId: 'managed-services', categoryName: 'Dịch vụ Quản trị & Tư vấn di trú' },
  { id: 'finops_consulting', name: 'Tư vấn Tối ưu Hóa Chi phí & Kiến trúc Cloud (FinOps)', categoryId: 'managed-services', categoryName: 'Dịch vụ Quản trị & Tư vấn di trú' },
];

const REGION_OPTIONS = [
  { id: 'north', name: 'Miền Bắc — DC Hòa Lạc / Pháp Vân (Hà Nội)' },
  { id: 'central', name: 'Miền Trung — DC Đà Nẵng' },
  { id: 'south', name: 'Miền Nam — DC Bình Dương / Hoàng Hoa Thám (TP.HCM)' },
  { id: 'multi_region', name: 'Đa vùng (Multi-Region Active-Active / Disaster Recovery)' },
];

export const EnterpriseQuoteModal: React.FC<EnterpriseQuoteModalProps> = ({
  isOpen,
  onClose,
  initialDetails,
  currentMarket,
}) => {
  const { currentLanguage } = useLanguage();
  const quoteLocale = getQuoteLocale(currentLanguage);
  const copy = QUOTE_COPY[quoteLocale];
  const categories = useMemo(() => SERVICE_CATALOG_GROUPS.map(c => ({...c, name: localizeQuoteCategory(c.id,c.name,quoteLocale)})),[quoteLocale]);
  const services = useMemo(() => SERVICE_OPTIONS.map(s => ({...s, name: localizeQuoteService(s.id,s.name,quoteLocale), categoryName: localizeQuoteCategory(s.categoryId,s.categoryName,quoteLocale)})),[quoteLocale]);
  const regions = useMemo(() => REGION_OPTIONS.map(r => ({...r, name: localizeQuoteRegion(r.id,r.name,quoteLocale)})),[quoteLocale]);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [serviceSearchTerm, setServiceSearchTerm] = useState('');

  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);
  const regionDropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    workEmail: '',
    companyName: '',
    serviceInterest: initialDetails?.serviceName || 'cloud_server',
    region: 'north',
    scale: 'medium',
    notes: initialDetails?.notes || '',
    nd13Consent: true,
  });

  const [loading, setLoading] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(e.target as Node)) {
        setIsCategoryDropdownOpen(false);
      }
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(e.target as Node)) {
        setIsServiceDropdownOpen(false);
      }
      if (regionDropdownRef.current && !regionDropdownRef.current.contains(e.target as Node)) {
        setIsRegionDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update initial service when prop changes
  useEffect(() => {
    if (initialDetails?.serviceName) {
      const matched = SERVICE_OPTIONS.find(s => s.id === initialDetails.serviceName || s.name.toLowerCase().includes(initialDetails.serviceName?.toLowerCase() || ''));
      if (matched) {
        setSelectedCategoryFilter(matched.categoryId);
        setFormData(prev => ({
          ...prev,
          serviceInterest: matched.id,
          notes: initialDetails.notes || prev.notes,
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          serviceInterest: initialDetails.serviceName || prev.serviceInterest,
          notes: initialDetails.notes || prev.notes,
        }));
      }
    }
  }, [initialDetails]);

  // Reset states when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmittedSuccess(false);
      setErrorMsg('');
      setIsCategoryDropdownOpen(false);
      setIsServiceDropdownOpen(false);
      setIsRegionDropdownOpen(false);
      setServiceSearchTerm('');
    }
  }, [isOpen]);

  // Filter services by category & search term
  const filteredServices = useMemo(() => {
    return services.filter(s => {
      const matchesCategory = selectedCategoryFilter === 'all' || s.categoryId === selectedCategoryFilter;
      const matchesSearch = !serviceSearchTerm || s.name.toLowerCase().includes(serviceSearchTerm.toLowerCase()) || s.categoryName.toLowerCase().includes(serviceSearchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategoryFilter, serviceSearchTerm, services]);

  // Selected object helpers
  const selectedServiceObj = useMemo(() => {
    return services.find(s => s.id === formData.serviceInterest) || services[0];
  }, [formData.serviceInterest, services]);

  const selectedCategoryObj = useMemo(() => {
    return categories.find(c => c.id === selectedCategoryFilter) || categories[0];
  }, [selectedCategoryFilter, categories]);

  const selectedRegionObj = useMemo(() => {
    return regions.find(r => r.id === formData.region) || regions[0];
  }, [formData.region, regions]);

  const handleCategoryFilterChange = (catId: string) => {
    setSelectedCategoryFilter(catId);
    setIsCategoryDropdownOpen(false);
    if (catId !== 'all') {
      const itemsInCat = services.filter(s => s.categoryId === catId);
      if (itemsInCat.length > 0 && !itemsInCat.some(s => s.id === formData.serviceInterest)) {
        setFormData(prev => ({ ...prev, serviceInterest: itemsInCat[0].id }));
      }
    }
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.workEmail.trim()) {
      setErrorMsg(copy.missingFields);
      return;
    }

    if (!formData.nd13Consent) {
      setErrorMsg(copy.noConsent);
      return;
    }

    setLoading(true);

    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      setSubmittedSuccess(true);
    }, 600);
  };

  return (
    <div 
      className="fixed inset-0 z-[var(--vidc-z-modal)] flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      lang={quoteLocale === 'vn' ? 'vi' : 'en'}
      aria-modal="true"
      aria-labelledby="enterprise-quote-title"
      data-vidc-sku={initialDetails?.serviceSku ?? ''}
      data-vidc-pillar={initialDetails?.pillarSlug ?? ''}
    >
      <div className="relative w-full max-w-2xl bg-white text-slate-900 border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-4 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200 shrink-0">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h3 id="enterprise-quote-title" className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">{copy.heading}</h3>
            </div>
          </div>
          <VIDCNativeButton
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
            aria-label={copy.close}
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[80vh] overflow-y-auto">
          {submittedSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">{copy.success}</h4>
              <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                {copy.thanks} <strong>{formData.fullName}</strong> {copy.followUpPhone} <strong>{formData.phone}</strong> {copy.followUpMail} <strong>{formData.workEmail}</strong>.
              </p>
              
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2 text-slate-600">
                <div className="flex items-center gap-2 text-slate-900 font-bold">
                  <Clock className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
                  <span>{copy.responsePromise}</span>
                </div>
                <p>{copy.businessHours} <strong>{copy.responseMinutes}</strong>.</p>
                <p>{copy.offHours} <strong>{copy.responseHours}</strong>.</p>
              </div>

              <div className="pt-4">
                <VIDCNativeButton
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-red-hover)] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
                >{copy.complete}</VIDCNativeButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Error Message */}
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold animate-shake">
                  {errorMsg}
                </div>
              )}

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">{copy.name}<span className="text-[var(--vidc-color-brand-red)]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 inset-y-0 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <VIDCNativeInput
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={copy.namePlaceholder}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-white text-slate-900 placeholder:text-slate-400 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-2 focus:ring-red-100 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">{copy.phone}<span className="text-[var(--vidc-color-brand-red)]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 inset-y-0 flex items-center pointer-events-none text-slate-400">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <VIDCNativeInput
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="098x xxx xxx"
                      className="w-full pl-10 pr-3.5 py-2.5 bg-white text-slate-900 placeholder:text-slate-400 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-2 focus:ring-red-100 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Work Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">{copy.email}<span className="text-[var(--vidc-color-brand-red)]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 inset-y-0 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <VIDCNativeInput
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full pl-10 pr-3.5 py-2.5 bg-white text-slate-900 placeholder:text-slate-400 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-2 focus:ring-red-100 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">{copy.company}</label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3.5 inset-y-0 flex items-center pointer-events-none text-slate-400">
                      <Building className="w-4 h-4" />
                    </div>
                    <VIDCNativeInput
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder={copy.companyPlaceholder}
                      className="w-full pl-10 pr-3.5 py-2.5 bg-white text-slate-900 placeholder:text-slate-400 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-2 focus:ring-red-100 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Group Filter Dropdown */}
                <div className="relative" ref={categoryDropdownRef}>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">{copy.group}</label>
                  <VIDCNativeButton
                    type="button"
                    onClick={() => {
                      setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
                      setIsServiceDropdownOpen(false);
                      setIsRegionDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-2.5 px-3.5 py-2.5 bg-slate-50 text-slate-900 text-sm border rounded-xl transition-all font-medium text-left ${
                      isCategoryDropdownOpen 
                        ? 'border-[var(--vidc-color-brand-red)] ring-2 ring-red-100 bg-white' 
                        : 'border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <SlidersHorizontal className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="truncate text-slate-900">{selectedCategoryObj.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isCategoryDropdownOpen ? 'rotate-180 text-[var(--vidc-color-brand-red)]' : ''}`} />
                  </VIDCNativeButton>

                  {/* Dropdown Menu for Categories */}
                  {isCategoryDropdownOpen && (
                    <div className="absolute left-0 right-0 top-full mt-1.5 z-[var(--vidc-z-modal-nested)] bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden py-1.5 max-h-60 overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
                      {categories.map(cat => {
                        const isSelected = selectedCategoryFilter === cat.id;
                        return (
                          <VIDCNativeButton
                            key={cat.id}
                            type="button"
                            onClick={() => handleCategoryFilterChange(cat.id)}
                            className={`w-full flex items-center justify-between px-4 py-2.5 text-xs text-left transition-colors ${
                              isSelected 
                                ? 'bg-red-50 text-[var(--vidc-color-brand-red)] font-bold' 
                                : 'text-slate-700 hover:bg-red-50/60 hover:text-[var(--vidc-color-brand-red)]'
                            }`}
                          >
                            <span className="truncate">{cat.name}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0 ml-2" />}
                          </VIDCNativeButton>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Service Dropdown with Brand Red Palette & Robust Frame */}
                <div className="relative" ref={serviceDropdownRef}>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">{copy.service}<span className="text-[var(--vidc-color-brand-red)]">*</span>
                  </label>
                  <VIDCNativeButton
                    type="button"
                    onClick={() => {
                      setIsServiceDropdownOpen(!isServiceDropdownOpen);
                      setIsCategoryDropdownOpen(false);
                      setIsRegionDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-2.5 px-3.5 py-2.5 bg-white text-slate-900 text-sm border rounded-xl transition-all font-medium text-left ${
                      isServiceDropdownOpen 
                        ? 'border-[var(--vidc-color-brand-red)] ring-2 ring-red-100' 
                        : 'border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <Layers className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="truncate text-slate-900 font-semibold">{selectedServiceObj.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isServiceDropdownOpen ? 'rotate-180 text-[var(--vidc-color-brand-red)]' : ''}`} />
                  </VIDCNativeButton>

                  {/* Dropdown Menu for Services with Brand Red Active States */}
                  {isServiceDropdownOpen && (
                    <div className="absolute left-0 right-0 top-full mt-1.5 z-[var(--vidc-z-modal-nested)] bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden py-2 max-h-72 overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
                      
                      {/* Search bar inside dropdown */}
                      <div className="px-3 pb-2 mb-1 border-b border-slate-100">
                        <div className="relative flex items-center">
                          <div className="absolute left-2.5 inset-y-0 flex items-center pointer-events-none text-slate-400">
                            <Search className="w-3.5 h-3.5" />
                          </div>
                          <VIDCNativeInput
                            type="text"
                            value={serviceSearchTerm}
                            onChange={(e) => setServiceSearchTerm(e.target.value)}
                            placeholder={copy.serviceSearch}
                            className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 text-slate-800 placeholder:text-slate-400 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-red-100"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>

                      {filteredServices.length === 0 ? (
                        <div className="px-4 py-4 text-center text-xs text-slate-500">{copy.noService}</div>
                      ) : (
                        filteredServices.map(svc => {
                          const isSelected = formData.serviceInterest === svc.id;
                          return (
                            <VIDCNativeButton
                              key={svc.id}
                              type="button"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, serviceInterest: svc.id }));
                                setIsServiceDropdownOpen(false);
                                setServiceSearchTerm('');
                              }}
                              className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left transition-colors border-l-2 ${
                                isSelected 
                                  ? 'bg-red-50 text-[var(--vidc-color-brand-red)] font-bold border-[var(--vidc-color-brand-red)]' 
                                  : 'border-transparent text-slate-700 hover:bg-red-50/60 hover:text-[var(--vidc-color-brand-red)]'
                              }`}
                            >
                              <div className="min-w-0 pr-2">
                                <p className="truncate font-semibold">{svc.name}</p>
                                <p className="text-[10px] text-slate-400 mt-0.5">{svc.categoryName}</p>
                              </div>
                              {isSelected && (
                                <Check className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 ml-2" />
                              )}
                            </VIDCNativeButton>
                          );
                        })
                      )}
                    </div>
                  )}
                </div>

                {/* Data Center Region Custom Dropdown */}
                <div className="sm:col-span-2 relative" ref={regionDropdownRef}>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">{copy.region}</label>
                  <VIDCNativeButton
                    type="button"
                    onClick={() => {
                      setIsRegionDropdownOpen(!isRegionDropdownOpen);
                      setIsCategoryDropdownOpen(false);
                      setIsServiceDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-2.5 px-3.5 py-2.5 bg-white text-slate-900 text-sm border rounded-xl transition-all font-medium text-left ${
                      isRegionDropdownOpen 
                        ? 'border-[var(--vidc-color-brand-red)] ring-2 ring-red-100' 
                        : 'border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <Server className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="truncate text-slate-900">{selectedRegionObj.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isRegionDropdownOpen ? 'rotate-180 text-[var(--vidc-color-brand-red)]' : ''}`} />
                  </VIDCNativeButton>

                  {/* Dropdown Menu for Regions */}
                  {isRegionDropdownOpen && (
                    <div className="absolute left-0 right-0 top-full mt-1.5 z-[var(--vidc-z-modal-nested)] bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden py-1.5 max-h-60 overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
                      {regions.map(reg => {
                        const isSelected = formData.region === reg.id;
                        return (
                          <VIDCNativeButton
                            key={reg.id}
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, region: reg.id }));
                              setIsRegionDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-4 py-2.5 text-xs text-left transition-colors border-l-2 ${
                              isSelected 
                                ? 'bg-red-50 text-[var(--vidc-color-brand-red)] font-bold border-[var(--vidc-color-brand-red)]' 
                                : 'border-transparent text-slate-700 hover:bg-red-50/60 hover:text-[var(--vidc-color-brand-red)]'
                            }`}
                          >
                            <span className="truncate">{reg.name}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)] shrink-0 ml-2" />}
                          </VIDCNativeButton>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Requirement Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">{copy.details}</label>
                <VIDCNativeTextarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={copy.detailsPlaceholder}
                  className="w-full p-3 bg-white text-slate-900 placeholder:text-slate-400 placeholder:font-normal text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-2 focus:ring-red-100 transition-all font-medium"
                />
              </div>

              {/* Decree 13 Security & Privacy Consent */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-600 select-none">
                  <VIDCNativeInput
                    type="checkbox"
                    checked={formData.nd13Consent}
                    onChange={(e) => setFormData({ ...formData, nd13Consent: e.target.checked })}
                    className="mt-0.5 w-4 h-4 rounded text-[var(--vidc-color-brand-red)] accent-[var(--vidc-color-brand-red)] focus:ring-[var(--vidc-color-brand-red)] border-slate-300 cursor-pointer"
                  />
                  <span>
                    {copy.consentIntro} <strong>Nghị định 13/2023/NĐ-CP</strong> {copy.consentOutro}
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
                  <span>{copy.trust}</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <VIDCNativeButton
                    type="button"
                    onClick={onClose}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors"
                  >{copy.cancel}</VIDCNativeButton>
                  <VIDCNativeButton
                    type="submit"
                    disabled={loading}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-red-hover)] disabled:opacity-50 text-white font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{copy.processing}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{copy.submit}</span>
                      </>
                    )}
                  </VIDCNativeButton>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
