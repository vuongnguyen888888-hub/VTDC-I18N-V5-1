import React, { useState } from 'react';
import { 
  Phone, 
  FileText, 
  Globe, 
  X, 
  Check, 
  ExternalLink, 
  ChevronDown, 
  Cpu, 
  Layers, 
  Calculator, 
  BookOpen, 
  Handshake, 
  Building, 
  Gift, 
  UserCheck 
} from 'lucide-react';
import { SEA_MARKETS, SEAMarket, MarketFlag, MARKET_LANGUAGES } from './UtilityBar';
import { SERVICE_CATEGORIES, ALL_SERVICES, SOLUTION_CATEGORIES } from '../../data/sitemapData';
import { 
  SERVICE_EN_TRANSLATIONS, 
  CATEGORY_EN_TRANSLATIONS, 
  SOLUTION_EN_TRANSLATIONS 
} from '../../data/serviceEnglishTranslations';
import { getRoutePrefix, buildLocalizedPath } from '../../utils/routingMatrix';
import { useLanguage } from '../../context/LanguageContext';
import { VcloudiaLogo } from '../common/VcloudiaLogo';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface MobileNavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentMarketCode: string;
  currentLanguageCode?: string;
  onMarketChange: (market: SEAMarket) => void;
  onLanguageChange?: (languageCode: string) => void;
}

export const MobileNavigationDrawer: React.FC<MobileNavigationDrawerProps> = ({
  isOpen,
  onClose,
  currentMarketCode,
  currentLanguageCode,
  onMarketChange,
  onLanguageChange,
}) => {
  const { isNonVn, t } = useLanguage();
  const [showMarketList, setShowMarketList] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeLangCode, setActiveLangCode] = useState<string>(() => {
    if (currentLanguageCode) return currentLanguageCode;
    const options = MARKET_LANGUAGES[currentMarketCode] || MARKET_LANGUAGES.vn;
    return options[0]?.code || 'vn';
  });

  const selectedMarket = SEA_MARKETS.find((m) => m.code === currentMarketCode) || SEA_MARKETS[0];
  const availableLanguages = MARKET_LANGUAGES[currentMarketCode] || MARKET_LANGUAGES.vn;

  // Localized categories, services and solutions
  const localizedCategories = SERVICE_CATEGORIES.map(cat => {
    if (!isNonVn) return cat;
    const enCat = CATEGORY_EN_TRANSLATIONS[cat.id];
    return {
      ...cat,
      menuLabel: enCat?.menuLabel || cat.menuLabel,
      description: enCat?.description || cat.description
    };
  });

  const localizedAllServices = ALL_SERVICES.map(service => {
    if (!isNonVn) return service;
    const en = SERVICE_EN_TRANSLATIONS[service.id];
    if (en) {
      return {
        ...service,
        name: en.name,
        tagline: en.tagline
      };
    }
    return service;
  });

  const localizedSolutionCategories = SOLUTION_CATEGORIES.map(cat => {
    const catTitle = isNonVn ? (
      cat.id === 'infrastructure-cloud' ? 'Infrastructure & Hybrid Cloud' :
      cat.id === 'devops-ai' ? 'DevOps, Big Data & AI' :
      cat.id === 'connectivity-workspace' ? 'Connectivity & Digital Workplace' :
      cat.id === 'industries' ? 'Industry Solutions' : cat.title
    ) : cat.title;

    const localizedItems = cat.items.map(item => {
      if (!isNonVn) return item;
      const en = SOLUTION_EN_TRANSLATIONS[item.id];
      if (en) {
        return {
          ...item,
          title: en.title,
          description: en.description
        };
      }
      return item;
    });

    return {
      ...cat,
      title: catTitle,
      items: localizedItems
    };
  });

  React.useEffect(() => {
    const options = MARKET_LANGUAGES[currentMarketCode] || MARKET_LANGUAGES.vn;
    if (!options.some((o) => o.code === activeLangCode)) {
      const defaultLang = options[0]?.code || 'vn';
      setActiveLangCode(defaultLang);
    }
  }, [currentMarketCode]);

  React.useEffect(() => {
    if (currentLanguageCode) {
      setActiveLangCode(currentLanguageCode);
    }
  }, [currentLanguageCode]);

  const renderFormattedName = (name: string) => {
    if (!name) return null;
    const match = name.match(/^(.*?)\s*(\([^)]+\))$/);
    if (match) {
      return (
        <>
          <span>{match[1]}</span>
          <span className="text-[10px] font-normal opacity-90 ml-1 inline-block">{match[2]}</span>
        </>
      );
    }
    return <span>{name}</span>;
  };

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSection(prev => (prev === section ? null : section));
  };

  const getFullPath = (path: string) => {
    return buildLocalizedPath(path, currentMarketCode, activeLangCode);
  };

  return (
    <div className="fixed inset-0 z-[var(--vidc-z-modal)] lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity animate-in fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container (Bright Light Theme) */}
      <div className="relative ml-auto w-full max-w-sm bg-white text-slate-900 h-full shadow-2xl flex flex-col z-10 p-5 overflow-y-auto border-l border-slate-200">
        {/* Header with Title and Close Button */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <VIDCAnchor href={getFullPath('/')} onClick={onClose} className="flex items-center gap-2 cursor-pointer" aria-label={currentMarketCode === 'vcloudia' ? "vCloudia Homepage" : "Viettel IDC Homepage"}>
            {currentMarketCode === 'vcloudia' ? (
              <VcloudiaLogo className="h-7 w-auto object-contain" />
            ) : (
              <img alt="Viettel IDC Logo" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1782053913/logo-IDC_2_up2gqp.svg" className="h-7 w-auto object-contain" referrerPolicy="no-referrer" />
            )}
          </VIDCAnchor>
          <VIDCNativeButton
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 transition-colors"
            aria-label={t.nav.closeMenu}
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Primary Navigation Sections Accordion */}
        <div className="py-4 space-y-2.5 border-b border-slate-100">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1 mb-2">
            {isNonVn ? 'Navigation Menu' : 'Danh mục Website'}
          </div>

          {/* 1. Services Accordion */}
          <div className="rounded-xl bg-slate-50 border border-slate-200/90 overflow-hidden transition-all">
            <VIDCNativeButton
              onClick={() => toggleSection('services')}
              className="w-full flex items-center justify-between p-3.5 text-left text-sm font-bold text-slate-800 hover:bg-slate-100/80 active:bg-red-50 active:text-[var(--vidc-color-brand-red)] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
                <span>{isNonVn ? 'Cloud Services' : 'Dịch vụ'}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${expandedSection === 'services' ? 'rotate-180 text-[var(--vidc-color-brand-red)]' : ''}`} />
            </VIDCNativeButton>

            {expandedSection === 'services' && (
              <div className="p-3 bg-white border-t border-slate-200/80 space-y-3 max-h-64 overflow-y-auto">
                <VIDCAnchor
                  href={getFullPath('/services')}
                  onClick={onClose}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--vidc-color-brand-pink-subtle)] text-[var(--vidc-color-brand-red)] font-extrabold text-xs hover:bg-red-100 transition-colors"
                >
                  <span>{isNonVn ? 'View all services →' : 'Xem tất cả trang dịch vụ →'}</span>
                </VIDCAnchor>
                {localizedCategories.map(cat => (
                  <div key={cat.id} className="text-xs">
                    <span className="font-extrabold text-[var(--vidc-color-brand-red)] block mb-1 px-1">
                      {cat.menuLabel}
                    </span>
                    <div className="grid grid-cols-1 gap-1 pl-1">
                      {localizedAllServices.filter(s => s.category === cat.id).map(service => (
                        <VIDCAnchor
                          key={service.id}
                          href={getFullPath(service.canonicalPath)}
                          onClick={onClose}
                          className="px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-red-50/70 active:bg-red-100 transition-colors flex items-center justify-between font-medium"
                        >
                          <span className="truncate">{renderFormattedName(service.name)}</span>
                          <span className="text-[10px] text-[var(--vidc-color-brand-red)] font-mono ml-1 font-bold">{service.code}</span>
                        </VIDCAnchor>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 2. Solutions Accordion */}
          <div className="rounded-xl bg-slate-50 border border-slate-200/90 overflow-hidden transition-all">
            <VIDCNativeButton
              onClick={() => toggleSection('solutions')}
              className="w-full flex items-center justify-between p-3.5 text-left text-sm font-bold text-slate-800 hover:bg-slate-100/80 active:bg-red-50 active:text-[var(--vidc-color-brand-red)] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-sky-600" />
                <span>{isNonVn ? 'Solutions (17)' : 'Giải pháp (17)'}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${expandedSection === 'solutions' ? 'rotate-180 text-sky-600' : ''}`} />
            </VIDCNativeButton>

            {expandedSection === 'solutions' && (
              <div className="p-3 bg-white border-t border-slate-200/80 space-y-3">
                {localizedSolutionCategories.map(cat => (
                  <div key={cat.id} className="text-xs">
                    <span className="font-extrabold text-sky-700 block mb-1 px-1">
                      {cat.title}
                    </span>
                    <div className="grid grid-cols-1 gap-1 pl-1">
                      {cat.items.map(item => (
                        <VIDCAnchor
                          key={item.id}
                          href={getFullPath(item.path)}
                          onClick={onClose}
                          className="px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-sky-700 hover:bg-sky-50 active:bg-sky-100 transition-colors block truncate font-medium"
                        >
                          {item.title}
                        </VIDCAnchor>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 3. Pricing */}
          <VIDCAnchor
            href={getFullPath('/pricing/')}
            onClick={onClose}
            className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-sm font-bold text-slate-800 hover:bg-slate-100 hover:text-[var(--vidc-color-brand-red)] active:bg-red-50 transition-colors"
          >
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>{isNonVn ? 'Pricing & Calculator' : 'Bảng giá & Calculator'}</span>
          </VIDCAnchor>

          {/* 4. Resources */}
          <VIDCAnchor
            href={getFullPath('/resources/')}
            onClick={onClose}
            className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-sm font-bold text-slate-800 hover:bg-slate-100 hover:text-[var(--vidc-color-brand-red)] active:bg-red-50 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-purple-600" />
            <span>{isNonVn ? 'Resources & Knowledge' : 'Tài nguyên & Tri thức'}</span>
          </VIDCAnchor>

          {/* 5. Partners */}
          <VIDCAnchor
            href={getFullPath('/partners/reseller/')}
            onClick={onClose}
            className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-sm font-bold text-slate-800 hover:bg-slate-100 hover:text-[var(--vidc-color-brand-red)] active:bg-red-50 transition-colors"
          >
            <Handshake className="w-4 h-4 text-amber-600" />
            <span>{isNonVn ? 'Partner Programs' : 'Chương trình Đối tác'}</span>
          </VIDCAnchor>

          {/* 6. About Accordion */}
          <div className="rounded-xl bg-slate-50 border border-slate-200/90 overflow-hidden transition-all">
            <VIDCNativeButton
              onClick={() => toggleSection('about')}
              className="w-full flex items-center justify-between p-3.5 text-left text-sm font-bold text-slate-800 hover:bg-slate-100/80 active:bg-red-50 active:text-[var(--vidc-color-brand-red)] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Building className="w-4 h-4 text-[var(--vidc-text-brand)]" />
                <span>{isNonVn ? 'About Viettel IDC' : 'Về Viettel IDC'}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${expandedSection === 'about' ? 'rotate-180 text-[var(--vidc-color-brand-red)]' : ''}`} />
            </VIDCNativeButton>

            {expandedSection === 'about' && (
              <div className="p-3 bg-white border-t border-slate-200/80 space-y-3">
                {/* Group 1 */}
                <div className="text-xs">
                  <span className="font-extrabold text-[var(--vidc-color-brand-red)] block mb-1 px-1 uppercase tracking-wider text-[10px]">
                    {isNonVn ? 'Corporate Overview' : 'Tổng Quan Doanh Nghiệp'}
                  </span>
                  <div className="grid grid-cols-1 gap-1 pl-1">
                    <VIDCAnchor
                      href={getFullPath('/about/')}
                      onClick={onClose}
                      className="px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-red-50/70 transition-colors block font-medium"
                    >
                      {isNonVn ? 'History, Vision & Mission' : 'Lịch sử, Tầm nhìn & Sứ mệnh'}
                    </VIDCAnchor>
                    <VIDCAnchor
                      href={getFullPath('/about/csr/')}
                      onClick={onClose}
                      className="px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-red-50/70 transition-colors block font-medium"
                    >
                      {isNonVn ? 'ESG & Sustainability' : 'ESG & Trách nhiệm Xã hội (CSR)'}
                    </VIDCAnchor>
                  </div>
                </div>

                {/* Group 2 */}
                <div className="text-xs">
                  <span className="font-extrabold text-[var(--vidc-color-brand-red)] block mb-1 px-1 uppercase tracking-wider text-[10px]">
                    {isNonVn ? 'Infrastructure & Standards' : 'Hạ Tầng & Tiêu Chuẩn'}
                  </span>
                  <div className="grid grid-cols-1 gap-1 pl-1">
                    <VIDCAnchor
                      href={getFullPath('/about/data-centers/')}
                      onClick={onClose}
                      className="px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-red-50/70 transition-colors block font-medium"
                    >
                      {isNonVn ? 'Data Center Infrastructure' : 'Hạ tầng Trung tâm Dữ liệu (DC)'}
                    </VIDCAnchor>
                    <VIDCAnchor
                      href={getFullPath('/about/certifications/')}
                      onClick={onClose}
                      className="px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-red-50/70 transition-colors block font-medium"
                    >
                      {isNonVn ? 'Certifications & Awards' : 'Chứng Nhận & Giải Thưởng'}
                    </VIDCAnchor>
                  </div>
                </div>

                {/* Group 3 */}
                <div className="text-xs">
                  <span className="font-extrabold text-[var(--vidc-color-brand-red)] block mb-1 px-1 uppercase tracking-wider text-[10px]">
                    {isNonVn ? 'Media & News' : 'Truyền Thông'}
                  </span>
                  <div className="grid grid-cols-1 gap-1 pl-1">
                    <VIDCAnchor
                      href={getFullPath('/about/press/')}
                      onClick={onClose}
                      className="px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-red-50/70 transition-colors block font-medium"
                    >
                      {isNonVn ? 'Press Releases' : 'Thông Cáo Báo Chí & Truyền Thông'}
                    </VIDCAnchor>
                  </div>
                </div>

                {/* Group 4: Careers */}
                <div className="text-xs">
                  <span className="font-extrabold text-[var(--vidc-color-brand-red)] block mb-1 px-1 uppercase tracking-wider text-[10px]">
                    {isNonVn ? 'Careers' : 'Cơ Hội Nghề Nghiệp'}
                  </span>
                  <div className="grid grid-cols-1 gap-1 pl-1">
                    <VIDCAnchor
                      href={getFullPath('/about/careers/')}
                      onClick={onClose}
                      className="px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-red-50/70 transition-colors block font-medium"
                    >
                      {isNonVn ? 'Careers at Viettel IDC' : 'Cơ Hội Nghề Nghiệp'}
                    </VIDCAnchor>
                  </div>
                </div>

                {/* Group 5 */}
                <div className="text-xs pt-1 border-t border-slate-100">
                  <VIDCAnchor
                    href={getFullPath('/contact/')}
                    onClick={onClose}
                    className="w-full py-2 px-3 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-xs text-center block transition-colors"
                  >
                    {isNonVn ? 'Contact & 24/7 Support' : 'Thông Tin Liên Hệ & Hỗ Trợ 24/7'}
                  </VIDCAnchor>
                </div>
              </div>
            )}
          </div>

          {/* 7. Promotions */}
          <VIDCAnchor
            href={getFullPath('/resources/promotions/')}
            onClick={onClose}
            className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:bg-red-50 active:bg-red-100 transition-colors"
          >
            <Gift className="w-4 h-4 text-[var(--vidc-color-brand-red)] vidc-gift-shake-icon" />
            <span>{isNonVn ? 'Promotions & Offers' : 'Ưu đãi & Khuyến mãi'}</span>
          </VIDCAnchor>
        </div>

        {/* CTA Buttons */}
        <div className="py-4 space-y-2.5 border-b border-slate-100">
          <VIDCAnchor
            href={getFullPath('/contact/request-quote/')}
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] active:bg-[var(--vidc-button-primary-background-active)] text-white text-sm font-extrabold text-center block shadow-md transition-all"
          >
            {isNonVn ? 'Request Enterprise Quote' : 'Tư vấn Báo giá Ngay'}
          </VIDCAnchor>

          <VIDCAnchor
            href="https://auth.vtidc-test.com/?redirect_uri=https://vconsole.vtidc-test.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 text-sm font-bold text-center flex items-center justify-center gap-2 border border-slate-200 transition-all"
          >
            <UserCheck className="w-4 h-4 text-slate-600" />
            <span>{isNonVn ? 'vConsole Portal Login' : 'Đăng nhập Portal (vConsole)'}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </VIDCAnchor>
        </div>

        {/* Support & Docs Utilities */}
        <div className="py-4 space-y-2 border-b border-slate-100">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1 mb-1">
            {isNonVn ? 'Support & Technical Hotline' : 'Tổng đài Kỹ thuật & Hỗ trợ'}
          </div>

          <VIDCAnchor
            href="tel:18008088"
            className="flex items-center gap-3 p-3 rounded-xl bg-red-50/80 border border-red-100 hover:bg-red-100 transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
            <div>
              <div className="text-xs text-slate-500 font-medium">{isNonVn ? '24/7 Hotline (Toll-free)' : 'Hotline 24/7 (Miễn phí)'}</div>
              <div className="text-sm font-extrabold font-mono text-[var(--vidc-color-brand-red)]">1800 8088</div>
            </div>
          </VIDCAnchor>

          <VIDCAnchor
            href="https://docs.vtidc-test.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-colors text-xs font-semibold text-slate-700"
          >
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-slate-500" />
              <span>https://docs.vtidc-test.com/</span>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </VIDCAnchor>
        </div>

        {/* Market Switcher */}
        <div className="pt-4 space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
            {isNonVn ? 'Region & Language' : 'Khu vực & Ngôn ngữ'}
          </div>

          <div className="flex items-center gap-2">
            <VIDCNativeButton
              onClick={() => setShowMarketList(!showMarketList)}
              className="flex-1 flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-2">
                <MarketFlag code={selectedMarket.code} className="w-4 h-3" />
                <span>{selectedMarket.name}</span>
              </div>
              <span className="text-slate-500 font-medium text-[11px]">{showMarketList ? 'Thu gọn' : 'Đổi'}</span>
            </VIDCNativeButton>

            {/* Language tabs corresponding to selected market */}
            <div className="flex items-center gap-0.5 p-1 bg-slate-100 rounded-xl border border-slate-200 shrink-0">
              {availableLanguages.map((lang) => {
                const isActive = activeLangCode === lang.code;
                return (
                  <VIDCNativeButton
                    key={lang.code}
                    onClick={() => {
                      setActiveLangCode(lang.code);
                      if (onLanguageChange) onLanguageChange(lang.code);
                    }}
                    title={lang.fullName}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-xs border border-slate-200/80 font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lang.label}
                  </VIDCNativeButton>
                );
              })}
            </div>
          </div>

          {showMarketList && (
            <div className="space-y-1 bg-slate-50 p-2 rounded-xl border border-slate-200">
              {SEA_MARKETS.map((m) => {
                const isSelected = m.code === currentMarketCode;
                return (
                  <VIDCNativeButton
                    key={m.code}
                    onClick={() => {
                      onMarketChange(m);
                      const options = MARKET_LANGUAGES[m.code] || MARKET_LANGUAGES.vn;
                      const defaultLang = options[0]?.code || (m.code === 'global' ? 'en' : 'vn');
                      setActiveLangCode(defaultLang);
                      setShowMarketList(false);
                    }}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-xs text-left transition-colors font-medium ${
                      isSelected ? 'bg-red-50 text-[var(--vidc-color-brand-red)] font-bold border border-red-100' : 'hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MarketFlag code={m.code} className="w-4 h-3" />
                      <span>{m.name} ({m.languageLabel})</span>
                      {m.externalUrl && <ExternalLink className="w-3 h-3 text-red-500 opacity-80 shrink-0" />}
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />}
                  </VIDCNativeButton>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
