'use client';

import React, { useState } from 'react';
import { SOLUTION_CATEGORIES } from '../../data/sitemapData';
import { SOLUTION_EN_TRANSLATIONS } from '../../data/serviceEnglishTranslations';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Terminal, 
  Globe2, 
  Building2, 
  Home, 
  ChevronRight,
  Search,
  CheckCircle2
} from 'lucide-react';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export const SolutionsHubPage: React.FC = () => {
  const { t, currentLanguage, getFullPath } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const localizedSolutionCategories = SOLUTION_CATEGORIES.map(cat => {
    if (!isNonVn) return cat;
    let title = cat.title;
    if (cat.id === 'infrastructure-cloud') title = 'Infrastructure & Cloud Migration';
    else if (cat.id === 'business-applications') title = 'Modern Digital Workspace & Apps';
    else if (cat.id === 'security-continuity') title = 'Security & Disaster Recovery';
    else if (cat.id === 'industry-specific') title = 'Industry Tailored Solutions';

    const items = cat.items.map(item => {
      const en = SOLUTION_EN_TRANSLATIONS[item.id];
      return {
        ...item,
        title: en?.title || item.title,
        description: en?.description || item.description,
        highlights: (en as any)?.highlights || item.highlights
      };
    });

    return {
      ...cat,
      title,
      items
    };
  });

  const allSolutions = localizedSolutionCategories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, categoryId: cat.id, categoryTitle: cat.title }))
  );

  const filteredSolutions = allSolutions.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.categoryId === selectedCategory;
    const matchesQuery = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.highlights && item.highlights.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-800">
      {/* 1. Breadcrumb Bar */}
      <div className="border-b border-slate-200/80 bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
          <VIDCAnchor
            href={getFullPath('/')}
            className="hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-1 shrink-0"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{isNonVn ? 'Home' : 'Trang chủ'}</span>
          </VIDCAnchor>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-900 truncate">
            {isNonVn ? 'Solutions Ecosystem' : 'Hệ sinh thái giải pháp'}
          </span>
        </div>
      </div>

      {/* 2. Hero Header */}
      <section className="bg-gradient-to-br from-[var(--vidc-legacy-hex-1e293b)] via-[var(--vidc-legacy-hex-0f172a)] to-[var(--vidc-legacy-hex-020617)] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-[var(--vidc-color-brand-red)]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>{isNonVn ? '16 Enterprise Solutions' : '16 Giải pháp Doanh nghiệp'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {isNonVn ? 'Viettel IDC Technology Solutions' : 'Giải pháp chuyển đổi số toàn diện Viettel IDC'}
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isNonVn
              ? 'Tailored cloud, connectivity, security and data infrastructure solutions designed for enterprises and government sectors.'
              : 'Bộ giải pháp may đo tối ưu cho từng ngành nghề, tối ưu hóa chi phí, bảo mật vượt trội và tăng tốc độ chuyển đổi số.'}
          </p>
        </div>
      </section>

      {/* 3. Filter & Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <VIDCNativeButton
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[var(--vidc-button-primary-background-default)] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {isNonVn ? 'All Solutions (16)' : 'Tất cả (16)'}
            </VIDCNativeButton>
            {localizedSolutionCategories.map((cat) => (
              <VIDCNativeButton
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[var(--vidc-button-primary-background-default)] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.title} ({cat.items.length})
              </VIDCNativeButton>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <VIDCNativeInput
              type="text"
              placeholder={isNonVn ? 'Search solutions...' : 'Tìm kiếm giải pháp...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] transition-all"
            />
          </div>
        </div>

        {/* Grid of 16 Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((item) => {
            const highlightsList = item.highlights
              ? item.highlights.split('·').map((h: string) => h.trim()).filter(Boolean)
              : [];

            return (
              <VIDCAnchor
                key={item.id}
                href={getFullPath(item.path)}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[var(--vidc-color-brand-red)]/50 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider bg-rose-50 px-2.5 py-0.5 rounded-md">
                      {item.categoryTitle}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>

                  {highlightsList.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 space-y-1.5">
                      {highlightsList.slice(0, 2).map((h: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-slate-500">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[var(--vidc-color-brand-red)] group-hover:translate-x-1 transition-transform">
                  <span>{isNonVn ? 'Explore Solution' : 'Xem chi tiết'}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </VIDCAnchor>
            );
          })}
        </div>
      </section>
    </div>
  );
};
