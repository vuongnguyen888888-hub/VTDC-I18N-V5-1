'use client';

import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft,
  ChevronRight, 
  Search, 
  Send, 
  CheckCircle2, 
  CircleHelp, 
  Plus, 
  Minus,
  BookOpen,
  Newspaper,
  Award,
  FileText
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SEAMarket } from '../layout/UtilityBar';
import { RESOURCE_CATEGORIES, RESOURCES_DATA, ResourceItem } from '../../data/resourcesData';
import { ResourceCard } from './ResourceCard';
import { ResourceDetailView } from './ResourceDetailView';
import { useLanguage } from '../../context/LanguageContext';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';


interface ResourcesPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  currentMarket,
  onNavigateHome,
  currentPath = '/resources/',
  onNavigate,
}) => {
  const { currentLanguage } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [emailSubscription, setEmailSubscription] = useState<string>('');
  const [subscribedSuccess, setSubscribedSuccess] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [selectedSubTag, setSelectedSubTag] = useState<string>('all');

  // Reset page & subTag when category or search query changes
  useEffect(() => {
    setCurrentPage(1);
    setSelectedSubTag('all');
  }, [activeCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedSubTag]);

  // Sync Category from Path on entry or change (Mega Menu deep links)
  useEffect(() => {
    if (currentPath.includes('/events')) {
      setActiveCategory('events');
    } else if (currentPath.includes('/blog')) {
      setActiveCategory('blog');
    } else if (currentPath.includes('/news') || currentPath.includes('/tech-news')) {
      setActiveCategory('news');
    } else if (currentPath.includes('/case-studies')) {
      setActiveCategory('case-studies');
    } else if (currentPath.includes('/whitepapers')) {
      setActiveCategory('whitepapers');
    } else {
      setActiveCategory('all');
    }
    // Clear selection when navigating category
    setSelectedResource(null);
  }, [currentPath]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSubscription) {
      setSubscribedSuccess(true);
      setEmailSubscription('');
      setTimeout(() => setSubscribedSuccess(false), 4000);
    }
  };

  const scrollToFirstSection = () => {
    requestAnimationFrame(() => {
      const heroElem = document.getElementById('resources-hero-section');
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const stickyHeaderOffset = isMobile ? 64 : 112;

      if (heroElem) {
        const heroRect = heroElem.getBoundingClientRect();
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
        const heroBottomY = currentScrollY + heroRect.bottom;
        const targetY = heroBottomY - stickyHeaderOffset;

        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: 'smooth'
        });
      }
    });
  };

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setSelectedResource(null); // Return to list view
    setCurrentPage(1);
    setSelectedSubTag('all');
    
    // Update path seamlessly
    let newPath = '/resources/';
    if (catId !== 'all') {
      newPath = `/resources/${catId}/`;
    }
    onNavigate?.(newPath);

    // Scroll to the first section of the selected tab
    scrollToFirstSection();
  };

  const handleSelectResource = (resource: ResourceItem) => {
    setSelectedResource(resource);
    // Push separate detail path
    const detailPath = `/resources/${resource.category}/${resource.id}/`;
    onNavigate?.(detailPath);
  };

  const handleBackToList = () => {
    setSelectedResource(null);
    let originalPath = '/resources/';
    if (activeCategory !== 'all') {
      originalPath = `/resources/${activeCategory}/`;
    }
    onNavigate?.(originalPath);
  };

  // Filter items based on active category, subtag and live search query
  const filteredResources = RESOURCES_DATA.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSubTag = selectedSubTag === 'all' || item.badge === selectedSubTag;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.badge && item.badge.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSubTag && matchesSearch;
  });

  // Calculate available sub-tags for the currently selected category
  const availableSubTags = React.useMemo(() => {
    if (activeCategory === 'all') return [];
    const tagsSet = new Set<string>();
    RESOURCES_DATA.filter(item => item.category === activeCategory).forEach(item => {
      if (item.badge) tagsSet.add(item.badge);
    });
    return Array.from(tagsSet);
  }, [activeCategory]);

  // Pick the first item of the filtered resources as Featured if "All" or a filtered category has items
  const featuredItem = filteredResources.length > 0 ? filteredResources[0] : null;
  const remainingResources = featuredItem ? filteredResources.slice(1) : filteredResources;

  // Resource Center Specific FAQs
  const faqData = [
    {
      question: 'Làm thế nào để tôi có thể đăng ký tham gia các sự kiện trực tuyến (Webinar)?',
      answer: 'Để tham dự Webinar, bạn chỉ cần nhấp vào nút "Xem chi tiết" hoặc "Đăng ký" trên các thẻ Sự kiện của trang Tài nguyên. Sau khi điền thông tin email doanh nghiệp, hệ thống sẽ tự động gửi thư mời xác nhận kèm theo đường liên kết phòng họp bảo mật qua Zoom/Microsoft Teams và mã tài liệu đính kèm trước khi sự kiện diễn ra.'
    },
    {
      question: 'Tôi có cần chi trả bất kỳ khoản phí nào để tải về các báo cáo Whitepaper không?',
      answer: 'Không. Toàn bộ tài liệu báo cáo nghiên cứu chuyên sâu, sách trắng (Whitepapers) và hướng dẫn kỹ thuật tại Trung tâm Tài nguyên Viettel IDC đều được xuất bản hoàn toàn MIỄN PHÍ nhằm hỗ trợ cộng đồng doanh nghiệp Việt Nam cập nhật xu hướng công nghệ đám mây tiên tiến.'
    },
    {
      question: 'Làm sao để tôi liên hệ trực tiếp với tác giả hoặc đội ngũ kỹ sư giải pháp để nhận tư vấn kỹ thuật?',
      answer: 'Ở cuối mỗi bài viết hoặc tài liệu, bạn có thể gửi câu hỏi hoặc đề xuất liên hệ. Ngoài ra, bạn có thể điền thông tin vào "Form Liên Hệ" ở trang chủ, đội ngũ kỹ sư kiến trúc giải pháp (Solution Architects) của Viettel IDC sẽ phản hồi trực tiếp qua email hoặc số điện thoại của bạn trong vòng 2 giờ làm việc.'
    },
    {
      question: 'Các bài viết chuyên gia và tin tức công nghệ của Viettel IDC có được kiểm duyệt không?',
      answer: 'Có. 100% bài viết chuyên gia đều được chấp bút bởi các kỹ sư DevOps, quản trị viên hệ thống và kiến trúc sư giải pháp có chứng chỉ quốc tế cấp cao của Viettel IDC. Các bài tin tức & xu hướng được đội ngũ biên tập tổng hợp và kiểm chứng chặt chẽ từ các nguồn chuẩn quốc tế.'
    }
  ];

  return (
    <div className="w-full bg-[var(--vidc-color-background-canvas)] min-h-screen pb-12 sm:pb-20">
      {/* Detail View Router */}
      {selectedResource ? (
        <ResourceDetailView 
          item={selectedResource}
          onBack={handleBackToList}
          onNavigateResource={handleSelectResource}
        />
      ) : (
        <div className="space-y-8 sm:space-y-12">
          {/* Breadcrumb Navigation + Rotated Hero Block */}
          <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 pt-6 space-y-3 sm:space-y-4">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 py-1">
              <VIDCNativeButton
                onClick={onNavigateHome}
                className="hover:text-[var(--vidc-color-text-brand)] transition-colors cursor-pointer"
              >
                {isNonVn ? 'Home' : 'Trang chủ'}
              </VIDCNativeButton>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 font-bold">{isNonVn ? 'Tech Resources & Knowledge Hub' : 'Trung tâm Tài nguyên & Tri thức Công nghệ'}</span>
            </nav>

            {/* Hero Banner Section (Hostinger Newsroom Style matching Promotions) */}
            <div id="resources-hero-section" className="relative bg-transparent text-white rounded-xl py-12 sm:py-16 lg:py-20 px-6 sm:p-10 lg:p-12 overflow-hidden shadow-none border-0">
              {/* Background Image rotated 180 degrees */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://res.cloudinary.com/dpyizq1m2/image/upload/v1785791613/banner_cubyvl.png')",
                  transform: "rotate(180deg)"
                }}
              />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                  <span className="text-[10px] sm:text-xs font-bold text-red-600 bg-red-100/90 backdrop-blur-xs px-2.5 py-1 rounded inline-block uppercase tracking-widest">
                    TECH RESOURCE KNOWLEDGE HUB
                  </span>
                  <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight md:leading-snug tracking-tight">
                    {isNonVn ? 'Technology Resources & Knowledge Center' : 'Trung tâm Tài nguyên & Tri thức Công nghệ'}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base text-slate-700 font-semibold leading-relaxed max-w-2xl">
                    {isNonVn
                      ? 'Explore in-depth technical documentation, cloud-native trend reports, customer success stories, and infrastructure optimization whitepapers written by experts.'
                      : 'Khám phá tài liệu kỹ thuật chuyên môn, báo cáo nghiên cứu xu hướng cloud-native, câu chuyện khách hàng thành công và cẩm nang tối ưu hạ tầng được biên soạn bởi chuyên gia.'}
                  </p>
                </div>

                {/* Right Column: Instant Subscribe Alert Box */}
                <div className="lg:col-span-5 bg-white/60 backdrop-blur-lg border border-white/60 p-6 sm:p-7 rounded-xl space-y-3 shadow-xs">
                  <span className="text-xs sm:text-sm text-slate-900 font-extrabold block tracking-wide">
                    {isNonVn ? 'Subscribe for latest tech reports via email:' : 'Đăng ký nhận báo cáo xu hướng mới qua email:'}
                  </span>
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <VIDCNativeInput
                      type="email"
                      required
                      value={emailSubscription}
                      onChange={(e) => setEmailSubscription(e.target.value)}
                      placeholder={isNonVn ? 'work-email@company.com' : 'email@doanhnghiep.vn'}
                      className="flex-1 px-3 py-2.5 bg-white/80 text-slate-900 placeholder-slate-500 text-xs font-bold rounded-xl border border-slate-200/80 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-500/30"
                    />
                    <VIDCNativeButton
                      type="submit"
                      className="px-4 py-2.5 bg-[var(--vidc-color-brand-action)] hover:bg-[var(--vidc-color-brand-action-hover)] text-white text-xs font-extrabold rounded-xl transition-all shrink-0 cursor-pointer flex items-center gap-1.5 shadow-md hover:scale-[1.02]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isNonVn ? 'Subscribe' : 'Đăng Ký'}</span>
                    </VIDCNativeButton>
                  </form>
                  {subscribedSuccess && (
                    <p className="text-[11px] text-emerald-600 font-extrabold flex items-center gap-1 mt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {isNonVn ? 'Successfully subscribed for reports!' : 'Đã đăng ký nhận tài liệu thành công!'}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Categories tab navigation panel & Live Search */}
          <div id="resources-sticky-nav" className="sticky top-[112px] z-40 bg-white/90 backdrop-blur-xl backdrop-saturate-150 border-y border-slate-200/80 shadow-xs py-3.5 transition-all">
            <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                {/* Pill Tabs Container */}
                <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto py-1 scrollbar-none scroll-smooth">
                  {RESOURCE_CATEGORIES.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    let catLabel = cat.label;
                    if (isNonVn) {
                      if (cat.id === 'all') catLabel = 'All Resources';
                      else if (cat.id === 'events') catLabel = 'Webinars & Events';
                      else if (cat.id === 'blog') catLabel = 'Expert Blog';
                      else if (cat.id === 'news') catLabel = 'Tech News';
                      else if (cat.id === 'case-studies') catLabel = 'Case Studies';
                      else if (cat.id === 'whitepapers') catLabel = 'Whitepapers & Reports';
                    }

                    return (
                      <VIDCNativeButton
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-extrabold rounded-full border transition-all shrink-0 cursor-pointer ${
                          isActive
                            ? 'bg-slate-900 text-white border-slate-950 shadow-xs scale-102'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                        }`}
                      >
                        {catLabel}
                      </VIDCNativeButton>
                    );
                  })}
                </div>

                {/* Dynamic Live Search Bar */}
                <div className="relative w-full md:max-w-xs shrink-0">
                  <VIDCNativeInput
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={isNonVn ? 'Search resources, articles...' : 'Tìm tài nguyên, bài viết...'}
                    className="w-full text-xs font-bold text-slate-900 bg-white border border-slate-200/80 rounded-xl pl-9 pr-4 py-2 focus:outline-none focus:border-red-500/50 focus:ring-2 focus:ring-red-500/10 placeholder-slate-400 shadow-2xs"
                  />
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                </div>
              </div>

              {/* Sub-tag chips row when a specific category with badges is selected */}
              {availableSubTags.length > 0 && (
                <div className="flex items-center gap-1.5 sm:gap-2 pt-2.5 overflow-x-auto scrollbar-none border-t border-slate-100/90 mt-2.5">
                  <span className="text-xs font-semibold text-slate-400 shrink-0 mr-0.5">
                    {isNonVn ? 'Tag:' : 'Nhãn:'}
                  </span>
                  <VIDCNativeButton
                    onClick={() => {
                      setSelectedSubTag('all');
                      scrollToFirstSection();
                    }}
                    className={`px-3 py-1 text-xs font-medium rounded-full border transition-all shrink-0 cursor-pointer ${
                      selectedSubTag === 'all'
                        ? 'bg-red-600 text-white border-red-600 shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {isNonVn ? 'All' : 'Tất cả'}
                  </VIDCNativeButton>
                  {availableSubTags.map((tag) => {
                    const isTagActive = selectedSubTag === tag;
                    // Format tag to title/sentence case (e.g. "XU HƯỚNG TECH" -> "Xu hướng Tech" or capitalize words)
                    const formatTagText = (str: string) => {
                      return str.toLowerCase().replace(/(^|\s|-|\/)\S/g, (l) => l.toUpperCase());
                    };
                    return (
                      <VIDCNativeButton
                        key={tag}
                        onClick={() => {
                          setSelectedSubTag(isTagActive ? 'all' : tag);
                          scrollToFirstSection();
                        }}
                        className={`px-3 py-1 text-xs font-medium rounded-full border transition-all shrink-0 cursor-pointer ${
                          isTagActive
                            ? 'bg-red-600 text-white border-red-600 shadow-xs'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        {formatTagText(tag)}
                      </VIDCNativeButton>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Main Resource Content Area */}
          <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 space-y-6">

            {/* Empty Search / Empty Filter State */}
            {filteredResources.length === 0 && (
              <div className="text-center py-16 sm:py-24 bg-white rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Không tìm thấy tài nguyên phù hợp</h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                  Hãy thử thay đổi từ khóa tìm kiếm hoặc chọn phân hệ danh mục khác để khám phá các bài viết chuyên môn khác.
                </p>
                <VIDCNativeButton
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold rounded-xl transition-all cursor-pointer"
                >
                  Đặt lại bộ lọc
                </VIDCNativeButton>
              </div>
            )}

            {/* Top Featured and Latest post Split Section */}
            {filteredResources.length > 0 && !searchQuery && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-2">
                {/* Left Side: Large Featured Card with reduced, balanced height */}
                {featuredItem && (
                  <div className="lg:col-span-6 flex flex-col">
                    <div 
                      onClick={() => handleSelectResource(featuredItem)}
                      className="group relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10.5] max-h-[440px] sm:max-h-[460px] w-full cursor-pointer shadow-xs hover:shadow-2xl transition-all duration-500 bg-slate-100"
                    >
                      <img alt={featuredItem.title} src={featuredItem.bannerImage} className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" referrerPolicy="no-referrer" onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                      {/* Dark gradient overlay covering bottom area */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 sm:p-7 md:p-8" />
                      
                      {/* Content overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-8 space-y-2.5 z-10">
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm w-fit">
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            <span>{featuredItem.categoryLabel}</span>
                          </div>
                          {featuredItem.badge && (
                            <span className="px-2.5 py-0.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
                              {featuredItem.badge}
                            </span>
                          )}
                        </div>
                        
                        <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-white leading-snug tracking-tight line-clamp-2 group-hover:text-red-200 transition-colors duration-200">
                          {featuredItem.title}
                        </h2>
                        
                        <p className="text-[11px] font-bold text-slate-300">
                          {featuredItem.publishDate} · {featuredItem.readTime}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Right Side: Latest post Vertical list */}
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight pl-1 border-l-4 border-red-600">
                    Bài viết mới nhất
                  </h3>
                  
                  <div className="divide-y divide-slate-100 bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-xs">
                    {filteredResources.slice(1, 4).map((item) => (
                      <div 
                        key={item.id}
                        onClick={() => handleSelectResource(item)}
                        className="group flex flex-row gap-3.5 sm:gap-4 items-center cursor-pointer py-3.5 first:pt-0 last:pb-0 hover:bg-slate-50/70 p-2 sm:p-2.5 rounded-2xl transition-all duration-200"
                      >
                        {/* Image Frame */}
                        <div className="w-28 h-20 sm:w-36 sm:h-24 md:w-40 md:h-26 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 shrink-0 relative shadow-2xs border border-slate-200/50">
                          <img alt={item.title} src={item.bannerImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" onError={(e) => {
                              e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
                            }}
                          />
                          {item.badge && (
                            <span className="absolute top-1.5 left-1.5 bg-slate-900/85 text-white text-[8px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-wider shadow-xs backdrop-blur-xs">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        
                        {/* Article Text Content */}
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 px-2 py-0.5 rounded-md border border-red-100/60">
                              {item.categoryLabel}
                            </span>
                            {item.downloadable && (
                              <span className="text-[9px] font-extrabold uppercase text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200/60">
                                PDF
                              </span>
                            )}
                          </div>

                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
                            {item.title}
                          </h4>

                          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-400 font-semibold">
                            <span>{item.publishDate}</span>
                            <span>•</span>
                            <span>{item.readTime}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {filteredResources.length <= 1 && (
                      <p className="text-xs text-slate-400 py-6 text-center">Chưa có bài viết mới khác</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Grid: Curated resource corner */}
            {filteredResources.length > 0 && (
              <div className="space-y-6 pt-10 border-t border-slate-100 mt-12">
                {/* Header with circular navigators */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {activeCategory === 'all' 
                      ? 'Góc chia sẻ tri thức chuyên gia' 
                      : `Tài nguyên: ${RESOURCE_CATEGORIES.find(c => c.id === activeCategory)?.label}`}
                  </h2>
                  
                  {/* Circular Prev/Next controls */}
                  <div className="flex items-center gap-2.5 shrink-0">
                    <VIDCNativeButton
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all cursor-pointer shadow-2xs"
                      aria-label="Trang trước"
                    >
                      <ChevronRight className="w-5 h-5 rotate-180" />
                    </VIDCNativeButton>
                    <VIDCNativeButton
                      onClick={() => setCurrentPage(prev => Math.min(Math.max(1, Math.ceil(filteredResources.length / 12)), prev + 1))}
                      disabled={currentPage >= Math.max(1, Math.ceil(filteredResources.length / 12))}
                      className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all cursor-pointer shadow-2xs"
                      aria-label="Trang sau"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </VIDCNativeButton>
                  </div>
                </div>

                {/* Paginated Grid list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 pt-2">
                  {filteredResources
                    .slice((currentPage - 1) * 12, currentPage * 12)
                    .map((item) => (
                      <ResourceCard 
                        key={item.id}
                        item={item}
                        onSelect={handleSelectResource}
                      />
                    ))}
                </div>

                {/* Numbered Pagination bar at bottom */}
                {Math.ceil(filteredResources.length / 12) > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100 mt-12">
                    <div className="text-xs text-slate-500 font-bold">
                      Trang <span className="text-slate-800">{currentPage}</span> / <span className="text-slate-800">{Math.ceil(filteredResources.length / 12)}</span> (Tổng {filteredResources.length} bài viết)
                    </div>
                    <div className="flex items-center gap-2">
                      <VIDCNativeButton
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                          currentPage === 1
                            ? 'bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300 cursor-pointer shadow-2xs'
                        }`}
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Trước</span>
                      </VIDCNativeButton>
                      
                      <div className="flex items-center gap-1">
                        {Array.from({ length: Math.ceil(filteredResources.length / 12) }).map((_, idx) => {
                          const pageNum = idx + 1;
                          const isCurrent = pageNum === currentPage;
                          return (
                            <VIDCNativeButton
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              className={`w-8 h-8 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center justify-center ${
                                isCurrent
                                  ? 'bg-slate-900 text-white shadow-xs'
                                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                              }`}
                            >
                              {pageNum}
                            </VIDCNativeButton>
                          );
                        })}
                      </div>

                      <VIDCNativeButton
                        type="button"
                        disabled={currentPage === Math.ceil(filteredResources.length / 12)}
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredResources.length / 12)))}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                          currentPage === Math.ceil(filteredResources.length / 12)
                            ? 'bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300 cursor-pointer shadow-2xs'
                        }`}
                      >
                        <span>Sau</span>
                        <ChevronRight className="w-4 h-4" />
                      </VIDCNativeButton>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* FAQ Accordion Section (matching Promotions structure exactly) */}
          <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 pt-6">
            <div className="bg-white rounded-2xl p-6 sm:p-12 lg:p-16 border border-slate-200/80 shadow-xs space-y-10 max-w-4xl mx-auto w-full">
              <div className="text-center space-y-3">
                <span className="text-xs font-bold text-[var(--vidc-color-brand-action)] uppercase tracking-widest inline-flex items-center gap-1.5 justify-center">
                  <CircleHelp className="w-4 h-4 shrink-0" />
                  Hỏi Đáp Về Trung Tâm Tài Nguyên
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Câu Hỏi Thường Gặp Khi Đọc Tài Liệu
                </h2>
              </div>

              <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
                {faqData.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="transition-colors">
                      <VIDCNativeButton
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full py-5 sm:py-6 text-left flex items-center justify-between gap-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vidc-color-brand-action)] cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm sm:text-base md:text-lg font-bold text-slate-800 group-hover:text-slate-900 transition-colors leading-snug">
                          {faq.question}
                        </span>
                        <span className="shrink-0 text-slate-800 group-hover:text-slate-900 transition-colors">
                          {isOpen ? (
                            <Minus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                          ) : (
                            <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                          )}
                        </span>
                      </VIDCNativeButton>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pb-6 pr-8 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
