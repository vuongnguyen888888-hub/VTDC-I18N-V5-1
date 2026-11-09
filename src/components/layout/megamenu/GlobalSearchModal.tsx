import React, { useState, useEffect, useRef } from 'react';
import { ALL_SERVICES, SOLUTION_CATEGORIES, ServiceItem, SolutionItem } from '../../../data/sitemapData';
import { 
  SERVICE_EN_TRANSLATIONS, 
  SOLUTION_EN_TRANSLATIONS 
} from '../../../data/serviceEnglishTranslations';
import { useLanguage } from '../../../context/LanguageContext';
import { Search, X, CornerDownLeft, Layers, Cpu } from 'lucide-react';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMarketPath: string;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose, currentMarketPath }) => {
  const { currentLanguage, getFullPath: localizedPath } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'services' | 'solutions'>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const getFullPath = (path: string) => {
    if (path.startsWith('http')) return path;
    if (localizedPath) return localizedPath(path);
    if (currentMarketPath === '/') return path;
    return `${currentMarketPath}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  const renderFormattedName = (name: string) => {
    if (!name) return null;
    const match = name.match(/^(.*?)\s*(\([^)]+\))$/);
    if (match) {
      return (
        <>
          <span>{match[1]}</span>
          <span className="text-xs font-normal opacity-90 ml-1 inline-block">{match[2]}</span>
        </>
      );
    }
    return <span>{name}</span>;
  };

  if (!isOpen) return null;

  // Localized services and solutions
  const localizedAllServices: ServiceItem[] = ALL_SERVICES.map(service => {
    if (!isNonVn) return service;
    const en = SERVICE_EN_TRANSLATIONS[service.id];
    if (en) {
      return {
        ...service,
        name: en.name,
        tagline: en.tagline,
        cardDescription: en.cardDescription
      };
    }
    return service;
  });

  const allSolutionsList: SolutionItem[] = [];
  SOLUTION_CATEGORIES.forEach(cat => {
    cat.items.forEach(item => {
      if (!isNonVn) {
        allSolutionsList.push(item);
      } else {
        const en = SOLUTION_EN_TRANSLATIONS[item.id];
        allSolutionsList.push({
          ...item,
          title: en?.title || item.title,
          description: en?.description || item.description
        });
      }
    });
  });

  // Filter services
  const matchingServices = localizedAllServices.filter(s => {
    if (filterType === 'solutions') return false;
    if (!query.trim()) return s.featured;
    const q = query.toLowerCase();
    return (
      s.name.toLowerCase().includes(q) ||
      s.code.toLowerCase().includes(q) ||
      s.tagline.toLowerCase().includes(q) ||
      (s.searchAliases && s.searchAliases.some(alias => alias.toLowerCase().includes(q)))
    );
  });

  const matchingSolutions = allSolutionsList.filter(sol => {
    if (filterType === 'services') return false;
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      sol.title.toLowerCase().includes(q) ||
      sol.description.toLowerCase().includes(q)
    );
  });

  const totalResults = [...matchingServices.map(s => ({ type: 'service', item: s })), ...matchingSolutions.map(s => ({ type: 'solution', item: s }))];

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < totalResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : totalResults.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (totalResults[selectedIndex]) {
        const selected = totalResults[selectedIndex];
        const path = selected.type === 'service' 
          ? (selected.item as ServiceItem).canonicalPath 
          : (selected.item as SolutionItem).path;
        window.location.href = getFullPath(path);
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[var(--vidc-z-overlay)] flex items-start justify-center pt-14 md:pt-20 px-3 sm:px-4 bg-slate-950/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200">
      {/* Click outside to close */}
      <VIDCNativeButton 
        type="button" 
        aria-label={isNonVn ? 'Close search' : 'Đóng tìm kiếm'} 
        className="fixed inset-0 w-full h-full bg-transparent border-0 cursor-default" 
        onClick={onClose} 
      />

      {/* Modal Content (Bright Light Theme) */}
      <div 
        className="relative w-full max-w-3xl bg-white border border-slate-200/90 rounded-2xl shadow-2xl overflow-hidden z-[var(--vidc-z-modal)] text-slate-900 transition-all"
        onKeyDown={handleKeyDown}
      >
        {/* Search Header Input */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200/80 bg-slate-50/80">
          <Search className="w-5 h-5 text-[var(--vidc-color-brand-red)] shrink-0 mr-3" />
          <VIDCNativeInput
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
            placeholder={isNonVn ? "Search 55+ services, 17 solutions or technical docs..." : "Tìm kiếm 55+ dịch vụ, 17 giải pháp hoặc tài liệu kỹ thuật..."}
            className="w-full bg-transparent text-xs sm:text-base text-slate-900 font-semibold placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <VIDCNativeButton 
              onClick={() => setQuery('')}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors mr-2"
            >
              <X className="w-4 h-4" />
            </VIDCNativeButton>
          )}
          <VIDCNativeButton 
            onClick={onClose}
            className="px-2.5 py-1 rounded-lg bg-slate-200/80 text-xs text-slate-700 font-bold border border-slate-300 hover:bg-slate-300 transition-colors shrink-0"
          >
            ESC
          </VIDCNativeButton>
        </div>

        {/* Filter Type Pills */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100/70 border-b border-slate-200/80 text-xs overflow-x-auto">
          <span className="text-slate-500 mr-1 font-bold shrink-0">{isNonVn ? 'Filter by:' : 'Lọc theo:'}</span>
          <VIDCNativeButton
            onClick={() => setFilterType('all')}
            className={`px-3 py-1 rounded-full font-bold transition-all shrink-0 ${
              filterType === 'all' 
                ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs' 
                : 'text-slate-700 hover:bg-slate-200 active:bg-slate-300'
            }`}
          >
            {isNonVn ? 'All' : 'Tất cả'}
          </VIDCNativeButton>
          <VIDCNativeButton
            onClick={() => setFilterType('services')}
            className={`px-3 py-1 rounded-full font-bold transition-all shrink-0 ${
              filterType === 'services' 
                ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs' 
                : 'text-slate-700 hover:bg-slate-200 active:bg-slate-300'
            }`}
          >
            {isNonVn ? 'Services' : 'Dịch vụ'}
          </VIDCNativeButton>
          <VIDCNativeButton
            onClick={() => setFilterType('solutions')}
            className={`px-3 py-1 rounded-full font-bold transition-all shrink-0 ${
              filterType === 'solutions' 
                ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs' 
                : 'text-slate-700 hover:bg-slate-200 active:bg-slate-300'
            }`}
          >
            {isNonVn ? 'Solutions' : 'Giải pháp'}
          </VIDCNativeButton>
        </div>

        {/* Results Container */}
        <div className="max-h-[440px] overflow-y-auto p-3 space-y-2 custom-scrollbar bg-slate-50/40">
          {totalResults.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <p className="text-base font-bold text-slate-800 mb-1">
                {isNonVn ? `No results found for "${query}"` : `Không tìm thấy kết quả nào cho "${query}"`}
              </p>
              <p className="text-xs text-slate-500">
                {isNonVn ? 'Try searching for "Cloud Server", "Kubernetes", "Anti-DDoS", "Database".' : 'Thử tìm kiếm từ khóa khác như "Cloud Server", "Kubernetes", "Anti-DDoS", "Database".'}
              </p>
            </div>
          ) : (
            <div className="space-y-1.5">
              {totalResults.map((res, idx) => {
                const isSelected = idx === selectedIndex;

                if (res.type === 'service') {
                  const s = res.item as ServiceItem;
                  return (
                    <VIDCAnchor
                      key={s.id}
                      href={getFullPath(s.canonicalPath)}
                      onClick={onClose}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                        isSelected 
                          ? 'bg-red-50 border border-red-200 text-[var(--vidc-color-brand-red)] pl-4 shadow-2xs' 
                          : 'bg-white border border-slate-200/80 text-slate-800 hover:bg-slate-50 hover:border-slate-300 active:bg-red-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-[var(--vidc-color-brand-red)] text-white' : 'bg-slate-100 text-[var(--vidc-color-brand-red)]'}`}>
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-[var(--vidc-color-brand-red)]">{s.code}</span>
                            <span className="text-sm font-extrabold text-slate-900">{renderFormattedName(s.name)}</span>
                            {s.badge && (
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/60 shrink-0">
                                {s.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{s.tagline}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-bold uppercase border border-slate-200/60">{isNonVn ? 'Service' : 'Dịch vụ'}</span>
                        <CornerDownLeft className={`w-4 h-4 ${isSelected ? 'text-[var(--vidc-color-brand-red)]' : 'opacity-0'}`} />
                      </div>
                    </VIDCAnchor>
                  );
                } else {
                  const sol = res.item as SolutionItem;
                  return (
                    <VIDCAnchor
                      key={sol.id}
                      href={getFullPath(sol.path)}
                      onClick={onClose}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                        isSelected 
                          ? 'bg-blue-50 border border-blue-200 text-sky-800 pl-4 shadow-2xs' 
                          : 'bg-white border border-slate-200/80 text-slate-800 hover:bg-slate-50 hover:border-slate-300 active:bg-blue-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-sky-600 text-white' : 'bg-slate-100 text-sky-600'}`}>
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-extrabold text-slate-900">{sol.title}</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{sol.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-bold uppercase border border-slate-200/60">{isNonVn ? 'Solution' : 'Giải pháp'}</span>
                        <CornerDownLeft className={`w-4 h-4 ${isSelected ? 'text-sky-600' : 'opacity-0'}`} />
                      </div>
                    </VIDCAnchor>
                  );
                }
              })}
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/80 border-t border-slate-200/80 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-300 text-[10px] text-slate-700 font-bold shadow-2xs">↑</kbd> <kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-300 text-[10px] text-slate-700 font-bold shadow-2xs">↓</kbd> {isNonVn ? 'Navigate' : 'Di chuyển'}</span>
            <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 bg-white rounded border border-slate-300 text-[10px] text-slate-700 font-bold shadow-2xs">↵</kbd> {isNonVn ? 'Select' : 'Chọn'}</span>
          </div>
          <span>Viettel IDC Ecosystem Search v2.1</span>
        </div>
      </div>
    </div>
  );
};
