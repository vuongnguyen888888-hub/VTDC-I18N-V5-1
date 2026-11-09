import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { FileText, Headphones, Globe, ChevronDown, Check, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { trackMarketSelectorOpen } from '../../lib/analytics';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export interface SEAMarket {
  code: string;
  name: string;
  languageLabel: string;
  domain: string;
  prefix: string;
  currency: string;
  status: 'source-confirmed' | 'business-gated' | 'production-gated' | 'conflicted';
  inSitemap: boolean;
  externalUrl?: string;
}

export const SEA_MARKETS: SEAMarket[] = [
  { code: 'vn', name: 'Việt Nam', languageLabel: 'Tiếng Việt', domain: 'viettelidc.com.vn', prefix: '/', currency: 'VND', status: 'source-confirmed', inSitemap: true },
  { code: 'global', name: 'Global', languageLabel: 'English / Français / Español', domain: 'viettelidc.com', prefix: '/en/', currency: 'USD', status: 'business-gated', inSitemap: true },
  { code: 'la', name: 'Lào', languageLabel: 'Lao / English', domain: 'viettelidc.com', prefix: '/la/', currency: 'LAK/USD', status: 'business-gated', inSitemap: true },
  { code: 'ph', name: 'Philippines', languageLabel: 'Filipino / English', domain: 'viettelidc.com', prefix: '/ph/', currency: 'PHP/USD', status: 'business-gated', inSitemap: true },
  { code: 'mm', name: 'Myanma', languageLabel: 'Burmese / English', domain: 'viettelidc.com', prefix: '/mm/', currency: 'MMK/USD', status: 'production-gated', inSitemap: true },
  { code: 'vcloudia', name: 'Campuchia (vCloudia)', languageLabel: 'Khmer / English', domain: 'vcloudia.com', prefix: '/kh/', currency: 'USD', status: 'source-confirmed', inSitemap: true },
];

export interface MarketLanguageOption {
  code: string;
  label: string;
  fullName: string;
}

export const MARKET_LANGUAGES: Record<string, MarketLanguageOption[]> = {
  vn: [
    { code: 'vn', label: 'VN', fullName: 'Tiếng Việt' },
    { code: 'en', label: 'EN', fullName: 'English (Vietnam)' },
  ],
  global: [
    { code: 'en', label: 'EN', fullName: 'English' },
    { code: 'vn', label: 'VN', fullName: 'Tiếng Việt' },
  ],
  la: [
    { code: 'la', label: 'LA', fullName: 'Lao (ພາສາລາວ)' },
    { code: 'en', label: 'EN', fullName: 'English (Laos)' },
  ],
  ph: [
    { code: 'ph', label: 'PH', fullName: 'Filipino (Tagalog)' },
    { code: 'en', label: 'EN', fullName: 'English (Philippines)' },
  ],
  mm: [
    { code: 'mm', label: 'MM', fullName: 'Burmese (မြန်မာ)' },
    { code: 'en', label: 'EN', fullName: 'English' },
  ],
  vcloudia: [
    { code: 'kh', label: 'KH', fullName: 'Khmer (ភាសាខ្មែរ)' },
    { code: 'en', label: 'EN', fullName: 'English' },
  ],
};

export const MARKET_FLAGS: Record<string, string> = {
  'vn': '🇻🇳',
  'global': '🌐',
  'fr': '🇫🇷',
  'es': '🇪🇸',
  'la': '🇱🇦',
  'ph': '🇵🇭',
  'mm': '🇲🇲',
  'vcloudia': '🇰🇭',
};

export function VietnamFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <svg
      className={`${className} shrink-0 rounded-[2px] shadow-xs overflow-hidden inline-block align-middle`}
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of Vietnam"
    >
      <rect width="30" height="20" fill="#DA251D" />
      <polygon
        points="15,4 16.35,8.15 20.71,8.15 17.18,10.71 18.53,14.85 15,12.29 11.47,14.85 12.82,10.71 9.29,8.15 13.65,8.15"
        fill="#FFFF00"
      />
    </svg>
  );
}

export function LaosFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <svg
      className={`${className} shrink-0 rounded-[2px] shadow-xs overflow-hidden inline-block align-middle`}
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of Laos"
    >
      <rect width="30" height="5" fill="#CE1126" />
      <rect y="5" width="30" height="10" fill="#002868" />
      <rect y="15" width="30" height="5" fill="#CE1126" />
      <circle cx="15" cy="10" r="4" fill="#FFFFFF" />
    </svg>
  );
}

export function MyanmarFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <svg
      className={`${className} shrink-0 rounded-[2px] shadow-xs overflow-hidden inline-block align-middle`}
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of Myanmar"
    >
      <rect width="30" height="6.67" fill="#FECB00" />
      <rect y="6.67" width="30" height="6.66" fill="#34B233" />
      <rect y="13.33" width="30" height="6.67" fill="#EA2839" />
      <polygon
        points="15,4.5 16.29,8.22 20.23,8.3 17.09,10.68 18.23,14.45 15,12.2 11.77,14.45 12.91,10.68 9.77,8.3 13.71,8.22"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function CambodiaFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <svg
      className={`${className} shrink-0 rounded-[2px] shadow-xs overflow-hidden inline-block align-middle`}
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of Cambodia"
    >
      <rect width="30" height="5" fill="#032EA6" />
      <rect y="5" width="30" height="10" fill="#E00025" />
      <rect y="15" width="30" height="5" fill="#032EA6" />
      <g fill="#FFFFFF">
        {/* Foundation layers */}
        <rect x="7" y="13.2" width="16" height="0.8" rx="0.2" />
        <rect x="8.5" y="12" width="13" height="1.2" />
        <rect x="9.5" y="10.8" width="11" height="1.2" />
        {/* Center main tower */}
        <path d="M14 10.8h2v-3.2l-1-1.6-1 1.6z" />
        <circle cx="15" cy="5.8" r="0.4" />
        {/* Left tower */}
        <path d="M11 10.8h1.8v-2.2l-0.9-1.3-0.9 1.3z" />
        {/* Right tower */}
        <path d="M17.2 10.8h1.8v-2.2l-0.9-1.3-0.9 1.3z" />
      </g>
    </svg>
  );
}

export function PhilippinesFlag({ className = "w-4 h-3" }: { className?: string }) {
  return (
    <svg
      className={`${className} shrink-0 rounded-[2px] shadow-xs overflow-hidden inline-block align-middle`}
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of the Philippines"
    >
      {/* Top half: Royal Blue */}
      <rect width="30" height="10" fill="#0038A8" />
      {/* Bottom half: Scarlet Red */}
      <rect y="10" width="30" height="10" fill="#CE1126" />
      {/* White Equilateral Triangle on Hoist */}
      <polygon points="0,0 17.32,10 0,20" fill="#FFFFFF" />
      {/* Golden Sun & Rays */}
      <circle cx="5.8" cy="10" r="2.2" fill="#FCD116" />
      {/* Three Stars */}
      <circle cx="2.2" cy="3.5" r="0.7" fill="#FCD116" />
      <circle cx="2.2" cy="16.5" r="0.7" fill="#FCD116" />
      <circle cx="13.5" cy="10" r="0.7" fill="#FCD116" />
    </svg>
  );
}

export const MarketFlag: React.FC<{ code: string; className?: string }> = ({ code, className = "w-4 h-3" }) => {
  switch (code) {
    case 'vn':
    case 'vn-fdi':
      return <VietnamFlag className={className} />;
    case 'global':
      return <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" aria-hidden="true" />;
    case 'mm':
      return <MyanmarFlag className={className} />;
    case 'la':
      return <LaosFlag className={className} />;
    case 'ph':
      return <PhilippinesFlag className={className} />;
    case 'vcloudia':
      return <CambodiaFlag className={className} />;
    default:
      return <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />;
  }
};

interface UtilityBarProps {
  currentMarketCode?: string;
  currentLanguageCode?: string;
  onMarketChange?: (market: SEAMarket) => void;
  onLanguageChange?: (languageCode: string) => void;
}

export const UtilityBar: React.FC<UtilityBarProps> = ({
  currentMarketCode = 'vn',
  currentLanguageCode,
  onMarketChange,
  onLanguageChange,
}) => {
  const { isNonVn, t } = useLanguage();
  const [regionOpen, setRegionOpen] = useState(false);
  const [selectedMarketCode, setSelectedMarketCode] = useState<string>(currentMarketCode);
  const [activeLangCode, setActiveLangCode] = useState<string>(() => {
    if (currentLanguageCode) return currentLanguageCode;
    const options = MARKET_LANGUAGES[currentMarketCode] || MARKET_LANGUAGES.vn;
    return options[0]?.code || 'vn';
  });
  const [focusedIndex, setFocusedIndex] = useState<number>(0);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedMarket = SEA_MARKETS.find((m) => m.code === selectedMarketCode) || SEA_MARKETS[0];
  const availableLanguages = MARKET_LANGUAGES[selectedMarketCode] || MARKET_LANGUAGES.vn;
  const displayedMarkets = SEA_MARKETS.filter((m) => m.code !== 'vn-fdi');

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        listboxRef.current &&
        !listboxRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setRegionOpen(false);
      }
    };

    if (regionOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [regionOpen]);

  // Focus management when opening dropdown
  useEffect(() => {
    if (regionOpen) {
      const idx = displayedMarkets.findIndex((m) => m.code === selectedMarketCode);
      const initialIndex = idx >= 0 ? idx : 0;
      setFocusedIndex(initialIndex);
      setTimeout(() => {
        optionRefs.current[initialIndex]?.focus();
      }, 50);
    }
  }, [regionOpen, selectedMarketCode]);

  // Sync selectedMarketCode and activeLangCode when currentMarketCode changes
  useEffect(() => {
    setSelectedMarketCode(currentMarketCode);
    const options = MARKET_LANGUAGES[currentMarketCode] || MARKET_LANGUAGES.vn;
    if (!options.some((o) => o.code === activeLangCode)) {
      const defaultLang = options[0]?.code || 'vn';
      setActiveLangCode(defaultLang);
    }
  }, [currentMarketCode]);

  // Sync with currentLanguageCode if passed externally
  useEffect(() => {
    if (currentLanguageCode) {
      setActiveLangCode(currentLanguageCode);
    }
  }, [currentLanguageCode]);

  const toggleDropdown = () => {
    setRegionOpen((prev) => {
      const next = !prev;
      if (next) {
        trackMarketSelectorOpen();
      }
      return next;
    });
  };

  const handleSelectLanguage = (langCode: string) => {
    setActiveLangCode(langCode);
    if (onLanguageChange) {
      onLanguageChange(langCode);
    }
  };

  const handleSelectMarket = (market: SEAMarket) => {
    setSelectedMarketCode(market.code);
    const options = MARKET_LANGUAGES[market.code] || MARKET_LANGUAGES.vn;
    const defaultLang = options[0]?.code || (market.code === 'global' ? 'en' : 'vn');
    setActiveLangCode(defaultLang);
    setRegionOpen(false);
    triggerRef.current?.focus();
    if (onMarketChange) {
      onMarketChange(market);
    }
  };

  const handleTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      trackMarketSelectorOpen();
      setRegionOpen(true);
    }
  };

  const handleListKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      setRegionOpen(false);
      triggerRef.current?.focus();
      return;
    }

    if (e.key === 'Tab') {
      setRegionOpen(false);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (focusedIndex + 1) % displayedMarkets.length;
      setFocusedIndex(nextIndex);
      optionRefs.current[nextIndex]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (focusedIndex - 1 + displayedMarkets.length) % displayedMarkets.length;
      setFocusedIndex(prevIndex);
      optionRefs.current[prevIndex]?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      setFocusedIndex(0);
      optionRefs.current[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      const lastIndex = displayedMarkets.length - 1;
      setFocusedIndex(lastIndex);
      optionRefs.current[lastIndex]?.focus();
    }
  };

  return (
    <div
      data-component="utility-bar"
      className="vidc-utility-bar hidden md:block"
    >
      <div className="vidc-container vidc-utility-bar__inner">
        {/* 4.1 Cổng Tài Liệu Kỹ Thuật */}
        <VIDCAnchor
          href="https://docs.vtidc-test.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="vidc-utility-bar__item"
          title={isNonVn ? "Viettel IDC Technical Documentation" : "Truy cập Cổng Tài liệu Kỹ thuật Viettel IDC"}
        >
          <FileText className="w-4 h-4" aria-hidden="true" />
          <span>{isNonVn ? 'Documentation' : 'Tài liệu kỹ thuật'}</span>
        </VIDCAnchor>

        {/* 4.3 Trung Tâm Hỗ Trợ 24/7 */}
        <VIDCAnchor
          href="https://support.vtidc-test.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="vidc-utility-bar__item"
          title={isNonVn ? "24/7 Technical Support & NOC/SOC" : "Truy cập Trung tâm Hỗ trợ Kỹ thuật NOC/SOC 24/7"}
        >
          <Headphones className="w-4 h-4" aria-hidden="true" />
          <span>{isNonVn ? '24/7 Support' : 'Hỗ trợ 24/7'}</span>
        </VIDCAnchor>

        {/* 4.4 Khối Chuyển Đổi Vùng / Ngôn Ngữ (SEA Region Selector) */}
        <div className="relative h-full flex items-center z-50 pl-3">
          <div className="flex items-center gap-2.5 select-none">
            {/* Left side: Region Trigger */}
            <VIDCNativeButton
              ref={triggerRef}
              type="button"
              onClick={toggleDropdown}
              onKeyDown={handleTriggerKeyDown}
              aria-haspopup="listbox"
              aria-expanded={regionOpen}
              aria-controls="sea-region-menu"
              aria-label={isNonVn ? "Select region" : "Chọn vùng quốc gia"}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors focus:outline-none cursor-pointer text-xs py-1"
            >
              <MarketFlag code={selectedMarket.code} className="w-4 h-3" />
              <span>{selectedMarket.name}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  regionOpen ? 'rotate-180' : 'rotate-0'
                }`}
                aria-hidden="true"
              />
            </VIDCNativeButton>

            {/* Language Quick-Switch (Dynamic tabs corresponding to selected market) */}
            <div 
              role="group" 
              aria-label={`${isNonVn ? "Available languages for" : "Ngôn ngữ khả dụng cho"} ${selectedMarket.name}`}
              className="flex items-center gap-0.5 p-0.5 bg-slate-800/80 rounded-full border border-slate-700/60 transition-all"
            >
              {availableLanguages.map((lang) => {
                const isActive = activeLangCode === lang.code;
                return (
                  <VIDCNativeButton
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelectLanguage(lang.code)}
                    title={lang.fullName}
                    aria-label={lang.fullName}
                    className={`px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'bg-[var(--vidc-legacy-hex-2d3441)] text-white shadow-xs font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {lang.label}
                  </VIDCNativeButton>
                );
              })}
            </div>
          </div>

          {/* 4.4.2 Dropdown Popover */}
          {regionOpen && (
            <div
              ref={listboxRef}
              id="sea-region-menu"
              role="listbox"
              tabIndex={-1}
              aria-label={isNonVn ? "Southeast Asian markets" : "Danh sách thị trường Đông Nam Á"}
              onKeyDown={handleListKeyDown}
              className="vidc-utility-bar__dropdown-popover animate-in fade-in slide-in-from-top-1 duration-150"
            >
              {/* 4.4.4 Danh sách các thị trường Đông Nam Á */}
              <div className="py-1">
                {displayedMarkets.map((market, index) => {
                  const isSelected = market.code === selectedMarketCode;
                  return (
                    <VIDCNativeButton
                      key={market.code}
                      ref={(el) => {
                        optionRefs.current[index] = el;
                      }}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      tabIndex={focusedIndex === index ? 0 : -1}
                      onClick={() => handleSelectMarket(market)}
                      className={`vidc-utility-bar__market-option ${
                        isSelected ? 'vidc-utility-bar__market-option--selected' : ''
                      }`}
                    >
                      <div className="flex flex-col text-left">
                        <span className="font-medium flex items-center gap-2">
                          <MarketFlag code={market.code} className="w-4 h-3" />
                          <span>{market.name}</span>
                          {market.externalUrl && <ExternalLink className="w-3 h-3 text-red-500 opacity-80 shrink-0" aria-hidden="true" />}
                        </span>
                        <span className="text-[11px] opacity-75">{market.languageLabel}</span>
                      </div>

                      {isSelected && (
                        <Check className="w-4 h-4 text-[var(--vidc-color-text-brand)] shrink-0" aria-hidden="true" />
                      )}
                    </VIDCNativeButton>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
