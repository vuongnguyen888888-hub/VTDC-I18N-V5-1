import React, { useState } from 'react';
import { SOLUTION_CATEGORIES, SolutionItem } from '../../../data/sitemapData';
import { getSolutionI18n } from '../../../data/multilingualServiceData';
import { useLanguage } from '../../../context/LanguageContext';
import { 
  Search, 
  X, 
  ArrowRight, 
  Layers, 
  Terminal, 
  Globe2, 
  Building2, 
  ShieldCheck, 
  Zap, 
  Box, 
  Network, 
  HardDrive, 
  Cloud, 
  Lock,
  Sparkles
} from 'lucide-react';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface SolutionsMegaMenuProps {
  onClose: () => void;
  currentMarketPath: string;
}

export const SolutionsMegaMenu: React.FC<SolutionsMegaMenuProps> = ({ onClose, currentMarketPath }) => {
  const { t, currentLanguage, getFullPath } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const [activeTab, setActiveTab] = useState<string>('infrastructure-cloud');
  const [searchQuery, setSearchQuery] = useState('');

  // Localized Solution Categories
  const localizedSolutionCategories = SOLUTION_CATEGORIES.map(cat => {
    const catTitle = isNonVn ? (
      cat.id === 'infrastructure-cloud' ? (currentLanguage === 'kh' ? 'ហេដ្ឋារចនាសម្ព័ន្ធ & Hybrid Cloud' : 'Infrastructure & Hybrid Cloud') :
      cat.id === 'devops-ai' ? (currentLanguage === 'kh' ? 'DevOps, Big Data & AI' : 'DevOps, Big Data & AI') :
      cat.id === 'connectivity-workspace' ? (currentLanguage === 'kh' ? 'ការតភ្ជាប់ & Digital Workplace' : 'Connectivity & Digital Workplace') :
      cat.id === 'industries' ? (currentLanguage === 'kh' ? 'ដំណោះស្រាយតាមវិស័យ' : 'Industry Solutions') : cat.title
    ) : cat.title;

    const localizedItems = cat.items.map(item => {
      const sol = getSolutionI18n(item.id, currentLanguage);
      if (sol) {
        return {
          ...item,
          title: sol.title,
          description: sol.description
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

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'infrastructure-cloud': return <Layers className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      case 'devops-ai': return <Terminal className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      case 'connectivity-workspace': return <Globe2 className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      case 'industries': return <Building2 className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
      default: return <Layers className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />;
    }
  };

  const cleanTitle = (title: string) => {
    if (!title) return '';
    return title.replace(/\s*\([^)]*\)/g, '').trim();
  };

  // Extract all solutions from all categories for flat searching
  const allSolutions: SolutionItem[] = localizedSolutionCategories.flatMap(c => c.items);

  const filteredSolutions = searchQuery.trim()
    ? allSolutions.filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase())
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

      {/* Main 3-Column Mega Menu Grid matching Services Mega Menu style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* COLUMN 1: Category Sidebar & Search (~25% / col-span-3) */}
        <div className="lg:col-span-3 lg:border-r lg:border-slate-200/80 lg:pr-6 space-y-4">
          {/* Header Link */}
          <VIDCAnchor
            href={getFullPath('/solutions/')}
            onClick={onClose}
            className="group flex items-center justify-between text-sm font-bold text-slate-900 hover:text-[var(--vidc-color-brand-red)] transition-colors pt-1"
          >
            <span>{isNonVn ? 'View all solutions' : 'Xem tất cả giải pháp'}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </VIDCAnchor>

          {/* Quick Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <VIDCNativeInput
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isNonVn ? 'Search solutions...' : 'Tìm giải pháp...'}
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
            {/* Strategic Solution Categories */}
            {localizedSolutionCategories.map(cat => {
              const isActive = activeTab === cat.id && !searchQuery;

              return (
                <VIDCNativeButton
                  key={cat.id}
                  onClick={() => { setActiveTab(cat.id); setSearchQuery(''); }}
                  onMouseEnter={() => { if (!searchQuery) setActiveTab(cat.id); }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-[var(--vidc-color-brand-subtle)] text-[var(--vidc-color-brand-red)] font-bold'
                      : 'text-slate-700 hover:text-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-subtle)] font-medium'
                  }`}
                >
                  <span className="truncate">{cat.title}</span>
                </VIDCNativeButton>
              );
            })}
          </div>
        </div>

        {/* COLUMN 2: Solutions Display Area (~50% / col-span-6) */}
        <div className="lg:col-span-6 space-y-4 px-1">
          {/* Search Results Overlay */}
          {filteredSolutions !== null ? (
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs text-slate-500 pb-2 border-b border-slate-200">
                <span>{isNonVn ? `Search results (${filteredSolutions.length} solutions)` : `Kết quả tìm kiếm (${filteredSolutions.length} giải pháp)`}</span>
                <VIDCNativeButton onClick={() => setSearchQuery('')} className="text-[var(--vidc-color-brand-red)] font-bold hover:underline">
                  {isNonVn ? 'Clear search' : 'Xóa tìm kiếm'}
                </VIDCNativeButton>
              </div>

              {filteredSolutions.length === 0 ? (
                <div className="py-12 text-center text-slate-500 text-xs">
                  {isNonVn ? `No solutions found matching "${searchQuery}".` : `Không tìm thấy giải pháp phù hợp với từ khóa "${searchQuery}".`}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
                  {filteredSolutions.map(item => (
                    <VIDCAnchor
                      key={item.id}
                      href={getFullPath(item.path)}
                      onClick={onClose}
                      className="group block p-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer border border-transparent hover:border-slate-200/60"
                    >
                      <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                        <Layers className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                        <span className="leading-snug">{cleanTitle(item.title)}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 pl-6.5 leading-relaxed line-clamp-2">{item.description}</p>
                    </VIDCAnchor>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* CATEGORY SPECIFIC VIEW */
            <div>
              {(() => {
                const category = localizedSolutionCategories.find(c => c.id === activeTab);
                if (!category) return null;

                return (
                  <div className="space-y-4">
                    <div className="pb-2 border-b border-slate-200 flex justify-between items-center">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
                        {category.title}
                      </h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {category.items.length} {isNonVn ? 'solutions' : 'giải pháp'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
                      {category.items.map(item => (
                        <VIDCAnchor
                          key={item.id}
                          href={getFullPath(item.path)}
                          onClick={onClose}
                          className="group block p-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer border border-transparent hover:border-slate-200/60"
                        >
                          <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                            <Layers className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                            <span className="leading-snug">{cleanTitle(item.title)}</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-1 pl-6.5 leading-relaxed line-clamp-2">{item.description}</p>
                        </VIDCAnchor>
                      ))}
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
              <Sparkles className="w-4 h-4 fill-white/80" />
            </div>
            
            <h4 className="text-sm font-bold text-white tracking-wide">
              {isNonVn ? '1-on-1 Expert Consulting' : 'Tư vấn Chuyên sâu 1-1'}
            </h4>
            
            <p className="text-xs text-white/90 mt-2 leading-relaxed">
              {isNonVn
                ? 'Architectural and cloud deployment consulting tailored to your enterprise needs.'
                : 'Tư vấn thiết kế kiến trúc hạ tầng Cloud tối ưu theo nhu cầu vận hành thực tế.'}
            </p>

            <VIDCAnchor
              href={getFullPath('/contact/')}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white mt-4 hover:underline underline-offset-4 group-hover:translate-x-0.5 transition-all"
            >
              <span>{isNonVn ? 'Book Consultation' : 'Đăng ký tư vấn'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </VIDCAnchor>
          </div>

          {/* Card 2: Compliance & Security Card */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-800 hover:border-red-200 hover:bg-white hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-xl text-[var(--vidc-color-brand-red)] flex items-center justify-center mb-3 border border-slate-200/60">
              <ShieldCheck className="w-4 h-4" />
            </div>

            <h4 className="text-sm font-bold text-slate-900">
              {isNonVn ? 'Compliance & Security' : 'Tuân thủ Pháp lý & Bảo mật'}
            </h4>

            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {isNonVn
                ? 'Complying with Decree 13, PCI-DSS, ISO 27001 & TIA-942 Rated 3 standards.'
                : 'Đáp ứng Thông tư NHNN, Nghị định 13/2023/NĐ-CP, PCI-DSS & TIA-942 Rated 3.'}
            </p>

            <VIDCAnchor
              href={getFullPath('/about/certifications/')}
              onClick={onClose}
              className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] mt-3 hover:underline"
            >
              <span>{isNonVn ? 'View international certs' : 'Xem chứng chỉ quốc tế'}</span>
              <ArrowRight className="w-3 h-3" />
            </VIDCAnchor>
          </div>

        </div>

      </div>
    </div>
  );
};
