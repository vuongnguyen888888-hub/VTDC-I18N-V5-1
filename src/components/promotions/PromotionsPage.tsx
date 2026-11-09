'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gift, 
  Search, 
  Tag, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft,
  SlidersHorizontal, 
  Bell, 
  CircleHelp, 
  ChevronDown, 
  ChevronUp, 
  Plus,
  Minus,
  Percent, 
  Flame, 
  Check, 
  Clock, 
  RotateCcw,
  ShieldCheck,
  Send,
  Cloud,
  HardDrive,
  Globe,
  Building2
} from 'lucide-react';
import { PROMOTIONS_DATA, PROMOTION_CATEGORIES, PromotionItem } from '../../data/promotionsData';
import { PromotionCard } from './PromotionCard';
import { FeaturedPromotionCard } from './FeaturedPromotionCard';
import { PromotionDetailModal } from './PromotionDetailModal';
import { PromotionDetailView } from './PromotionDetailView';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect } from '@/components/ui/VIDCNativeControls';


interface PromotionsPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const PromotionsPage: React.FC<PromotionsPageProps> = ({
  currentMarket,
  onNavigateHome,
  currentPath = typeof window !== 'undefined' ? window.location.pathname : '/',
  onNavigate,
}) => {
  const { currentLanguage } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'newest' | 'discount' | 'endingSoon'>('newest');
  const [selectedItem, setSelectedItem] = useState<PromotionItem | null>(null);
  const [copiedToastCode, setCopiedToastCode] = useState<string | null>(null);
  const [emailSubscription, setEmailSubscription] = useState<string>('');
  const [subscribedSuccess, setSubscribedSuccess] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Dynamic category counts calculation
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PROMOTIONS_DATA.length };
    PROMOTIONS_DATA.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Reset page when search, category, or sorting changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, sortBy]);

  // Match active promotion item from URL path
  const activePromoItem = useMemo(() => {
    const path = currentPath || window.location.pathname;
    
    // 1. Check for /khuyen-mai-X pattern where X is 1-indexed
    const dashMatch = path.match(/\/khuyen-mai-(\d+)/i);
    if (dashMatch) {
      const index = parseInt(dashMatch[1], 10) - 1;
      if (index >= 0 && index < PROMOTIONS_DATA.length) {
        return PROMOTIONS_DATA[index];
      }
    }

    // 2. Check for /khuyen-mai/X pattern
    const slashMatch = path.match(/\/khuyen-mai\/([a-zA-Z0-9-]+)/i);
    if (slashMatch) {
      const identifier = slashMatch[1];
      const index = parseInt(identifier, 10) - 1;
      if (!isNaN(index) && index >= 0 && index < PROMOTIONS_DATA.length) {
        return PROMOTIONS_DATA[index];
      }
      const bySlug = PROMOTIONS_DATA.find(p => p.slug === identifier);
      if (bySlug) return bySlug;
      const byId = PROMOTIONS_DATA.find(p => p.id === identifier);
      if (byId) return byId;
    }

    // 3. Try fallback check if any slug matches the path directly
    const bySlugDirect = PROMOTIONS_DATA.find(p => path.includes(p.slug));
    if (bySlugDirect) return bySlugDirect;

    return null;
  }, [currentPath]);

  // Filter and sort items
  const filteredItems = useMemo(() => {
    return PROMOTIONS_DATA.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.code && item.code.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.applicableServices.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'discount') {
        return b.discountValue.localeCompare(a.discountValue);
      }
      if (sortBy === 'endingSoon') {
        return a.endDate.localeCompare(b.endDate);
      }
      return a.id.localeCompare(b.id);
    });
  }, [activeCategory, searchQuery, sortBy]);

  const featuredItem = useMemo(() => {
    return PROMOTIONS_DATA.find((item) => item.featured) || PROMOTIONS_DATA[0];
  }, []);

  const handleCopyCode = (code: string) => {
    setCopiedToastCode(code);
    setTimeout(() => setCopiedToastCode(null), 3500);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSubscription && emailSubscription.includes('@')) {
      setSubscribedSuccess(true);
      setTimeout(() => {
        setSubscribedSuccess(false);
        setEmailSubscription('');
      }, 4000);
    }
  };

  const faqData = [
    {
      question: 'Làm thế nào để áp dụng mã giảm giá khi thanh toán dịch vụ Viettel Cloud?',
      answer: 'Khi đăng ký dịch vụ tại cổng https://viettelcloud.vn hoặc hệ thống quản trị Viettel IDC, tại bước Thanh toán (Checkout), Quý khách nhập mã ưu đãi tương ứng vào ô "Mã giảm giá/Voucher" và nhấn "Áp dụng". Hệ thống sẽ tự động trừ phần trăm hoặc số tiền ưu đãi trực tiếp vào giá trị đơn hàng.'
    },
    {
      question: 'Các mã ưu đãi có thể cộng dồn với nhau hoặc các chương trình khác không?',
      answer: 'Theo quy định chuẩn, mỗi đơn hàng chỉ áp dụng 01 mã khuyến mại duy nhất. Tuy nhiên, một số quà tặng kèm (như tặng Cloud Backup hoặc tặng tên miền) sẽ tự động kích hoạt đi kèm nếu đơn hàng đạt điều kiện.'
    },
    {
      question: 'Doanh nghiệp mới kích hoạt dịch vụ lần đầu có ưu đãi riêng không?',
      answer: 'Có! Khách hàng doanh nghiệp mới lần đầu sử dụng dịch vụ Viettel Cloud được tham gia gói trải nghiệm dùng thử 30 ngày hoặc sử dụng mã VIDC8CLOUD50 giảm ngay 50% cho hợp đồng thanh toán từ 6-12 tháng.'
    },
    {
      question: 'Tôi có thể quy đổi mã ưu đãi thành tiền mặt được không?',
      answer: 'Tất cả mã ưu đãi, voucher và chương trình khuyến mại của Viettel IDC không có giá trị quy đổi thành tiền mặt hoặc chuyển nhượng ngoài hệ thống.'
    }
  ];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'cloud-server':
        return Cloud;
      case 'storage-backup':
        return HardDrive;
      case 'hosting-domain':
        return Globe;
      case 'security':
        return ShieldCheck;
      case 'enterprise':
        return Building2;
      default:
        return Sparkles;
    }
  };

  if (activePromoItem) {
    return (
      <div className="min-h-screen bg-[var(--vidc-color-background-canvas)] pb-20 pt-4">
        {/* Toast alert on copy */}
        {copiedToastCode && (
          <div className="fixed bottom-6 right-6 z-[var(--vidc-z-modal-nested)] bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-slideUp">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-xs font-bold block">Đã sao chép mã ưu đãi!</span>
              <span className="text-xs text-slate-300 font-mono">{copiedToastCode}</span>
            </div>
          </div>
        )}

        <PromotionDetailView
          item={activePromoItem}
          onBack={() => {
            if (onNavigate) onNavigate('/khuyen-mai');
          }}
          onNavigatePromo={(item, index) => {
            const path = `/khuyen-mai-${index + 1}`;
            if (onNavigate) onNavigate(path);
          }}
          onCopyCode={handleCopyCode}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--vidc-color-background-canvas)] pb-20 pt-4">
      {/* Toast alert on copy */}
      {copiedToastCode && (
        <div className="fixed bottom-6 right-6 z-[var(--vidc-z-modal-nested)] bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-slideUp">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div>
            <span className="text-xs font-bold block">Đã sao chép mã ưu đãi!</span>
            <span className="text-xs text-slate-300 font-mono">{copiedToastCode}</span>
          </div>
        </div>
      )}

      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 space-y-8 sm:space-y-12">
        <div className="space-y-3 sm:space-y-4">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 py-1">
            <VIDCNativeButton
              onClick={onNavigateHome}
              className="hover:text-[var(--vidc-color-text-brand)] transition-colors cursor-pointer"
            >
              {isNonVn ? 'Home' : 'Trang chủ'}
            </VIDCNativeButton>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">{isNonVn ? 'Promotions & Special Deals' : 'Chương Trình Khuyến Mại & Ưu Đãi'}</span>
          </nav>

          {/* Hero Banner Section (Hostinger Newsroom Style) */}
          <div className="relative bg-transparent text-white rounded-xl py-12 sm:py-20 lg:py-24 px-6 sm:p-10 lg:p-12 overflow-hidden shadow-none border-0">
            {/* Background Image rotated 180 degrees */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://res.cloudinary.com/dpyizq1m2/image/upload/v1785791613/banner_cubyvl.png')",
                transform: "rotate(180deg)"
              }}
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight md:leading-snug tracking-tight">
                  {isNonVn ? 'Latest Special Deals & Cloud Promotions' : 'Tổng Hợp Ưu Đãi & Tin Tức Khuyến Mại Mới Nhất'}
                </h1>

                <p className="text-xs sm:text-sm md:text-base text-slate-800 font-semibold leading-relaxed max-w-2xl">
                  {isNonVn
                    ? 'Discover the latest digital infrastructure offers, Cloud Server discounts, bonus Storage capacity, and exclusive vouchers for businesses.'
                    : 'Khám phá ngay các chương trình ưu đãi hạ tầng điện toán đám mây, giảm giá Cloud Server, tặng dung lượng Storage & voucher độc quyền dành riêng cho doanh nghiệp.'}
                </p>
              </div>

              {/* Right: Instant Offer Alert Box */}
              <div className="lg:col-span-5 bg-white/60 backdrop-blur-lg border border-white/60 p-6 sm:p-7 rounded-xl space-y-3 shadow-xs">
                <span className="text-xs sm:text-sm text-slate-900 font-extrabold block tracking-wide">
                  {isNonVn ? 'Get exclusive promo codes via email:' : 'Đăng ký nhận mã voucher độc quyền qua email:'}
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
                    {isNonVn ? 'Successfully subscribed for promotions!' : 'Đã đăng ký nhận ưu đãi thành công!'}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Promotion Hero Showcase */}
        {activeCategory === 'all' && !searchQuery && featuredItem && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
              <Flame className="w-4 h-4 text-[var(--vidc-color-brand-action)]" />
              <span>{isNonVn ? 'Featured Deal of the Month' : 'Khuyến Mại Tiêu Điểm Trong Tháng'}</span>
            </div>
            <FeaturedPromotionCard
              item={featuredItem}
              onSelect={(item) => {
                const idx = PROMOTIONS_DATA.findIndex(p => p.id === item.id);
                const path = `/khuyen-mai-${idx + 1}`;
                if (onNavigate) onNavigate(path);
              }}
              onCopyCode={handleCopyCode}
            />
          </div>
        )}

        {/* Filter Category Tabs & Sorting Controls (Matching Mockup Grid Tab Bar) */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            {/* Horizontal Scroll Category Pills */}
            <div className="overflow-x-auto custom-scrollbar-subtle min-w-0 flex items-center pt-1 flex-1">
              <div className="flex items-center gap-2 min-w-max">
                {PROMOTION_CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const IconComp = getCategoryIcon(cat.id);
                  const countVal = categoryCounts[cat.id] || 0;
                  let catLabel = cat.label;
                  if (isNonVn) {
                    if (cat.id === 'all') catLabel = 'All Promotions';
                    else if (cat.id === 'cloud') catLabel = 'Cloud & Hosting';
                    else if (cat.id === 'compute') catLabel = 'Compute & GPU';
                    else if (cat.id === 'storage') catLabel = 'Storage & Backup';
                    else if (cat.id === 'datacenter') catLabel = 'Data Center';
                    else if (cat.id === 'partner') catLabel = 'Partner Offers';
                  }

                  return (
                    <VIDCNativeButton
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-slate-900 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      <IconComp className="w-3.5 h-3.5 shrink-0" />
                      <span>{catLabel}</span>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white/20 text-white' : 'bg-white text-slate-500 border border-slate-200'
                      }`}>
                        {countVal}
                      </span>
                    </VIDCNativeButton>
                  );
                })}
              </div>
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 shrink-0 self-end md:self-auto">
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200 hover:border-slate-400 text-xs font-bold text-slate-800 shadow-2xs transition-colors cursor-pointer">
                <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span className="text-slate-500 font-medium text-xs">{isNonVn ? 'Sort by:' : 'Sắp xếp:'}</span>
                <VIDCNativeSelect
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-slate-900 font-bold focus:outline-none cursor-pointer pr-1"
                >
                  <option value="newest">{isNonVn ? 'Newest' : 'Mới nhất'}</option>
                  <option value="discount">{isNonVn ? 'Highest Discount' : 'Ưu đãi nhiều nhất'}</option>
                  <option value="endingSoon">{isNonVn ? 'Ending Soon' : 'Sắp hết hạn'}</option>
                </VIDCNativeSelect>
              </div>
            </div>
          </div>

          {/* Active Filter Info & Reset */}
          {(activeCategory !== 'all' || searchQuery) && (
            <div className="flex items-center justify-between pt-1 text-xs">
              <span className="text-slate-600">
                Hiển thị <strong>{filteredItems.length}</strong> kết quả cho tìm kiếm / bộ lọc của bạn.
              </span>
              <VIDCNativeButton
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="text-[var(--vidc-color-text-brand)] hover:underline font-bold flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Xóa bộ lọc
              </VIDCNativeButton>
            </div>
          )}
        </div>

        {/* Promotion Cards Grid */}
        <div>
          {filteredItems.length > 0 ? (
            <div className="space-y-8">
              {/* Grid content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredItems.slice((currentPage - 1) * 12, currentPage * 12).map((item) => (
                  <PromotionCard
                    key={item.id}
                    item={item}
                    onSelect={(item) => {
                      const idx = PROMOTIONS_DATA.findIndex(p => p.id === item.id);
                      const path = `/khuyen-mai-${idx + 1}`;
                      if (onNavigate) onNavigate(path);
                    }}
                    onCopyCode={handleCopyCode}
                  />
                ))}
              </div>

              {/* Pagination Controls */}
              {Math.ceil(filteredItems.length / 12) > 1 && (
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="text-xs text-slate-500 font-bold">
                    Trang <span className="text-slate-800">{currentPage}</span> / <span className="text-slate-800">{Math.ceil(filteredItems.length / 12)}</span> (Tổng {filteredItems.length} chương trình)
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
                      {Array.from({ length: Math.ceil(filteredItems.length / 12) }).map((_, idx) => {
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
                      disabled={currentPage === Math.ceil(filteredItems.length / 12)}
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredItems.length / 12)))}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                        currentPage === Math.ceil(filteredItems.length / 12)
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
          ) : (
            <div className="bg-white rounded-xl p-12 text-center border border-slate-200 space-y-4">
              <Gift className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">Không tìm thấy chương trình phù hợp</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Thử thay đổi từ khóa tìm kiếm hoặc bấm reset bộ lọc để xem toàn bộ danh sách ưu đãi.
              </p>
              <VIDCNativeButton
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer hover:bg-slate-800 transition-colors"
              >
                Xem tất cả ưu đãi
              </VIDCNativeButton>
            </div>
          )}
        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-12 lg:p-16 border border-slate-200/80 shadow-xs space-y-10 max-w-4xl mx-auto w-full">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-[var(--vidc-color-brand-action)] uppercase tracking-widest inline-flex items-center gap-1.5 justify-center">
              <CircleHelp className="w-4 h-4 shrink-0" />
              Hỏi Đáp Về Chương Trình Khuyến Mại
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Câu Hỏi Thường Gặp Khi Nhận Ưu Đãi
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

      {/* Promotion Detail Modal */}
      <PromotionDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onCopyCode={handleCopyCode}
      />
    </div>
  );
};
