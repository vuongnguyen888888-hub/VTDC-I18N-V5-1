import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Share2, 
  ThumbsUp, 
  Eye, 
  BookOpen, 
  Gift, 
  Copy, 
  Check, 
  ShieldCheck, 
  AlertCircle, 
  ExternalLink, 
  Tag,
  CheckCircle2,
  Database
} from 'lucide-react';
import { PromotionItem, PROMOTIONS_DATA } from '../../data/promotionsData';
import { AnniversaryPromoTable } from './AnniversaryPromoTable';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface PromotionDetailViewProps {
  item: PromotionItem;
  onBack: () => void;
  onNavigatePromo: (item: PromotionItem, index: number) => void;
  onCopyCode: (code: string) => void;
}

export const PromotionDetailView: React.FC<PromotionDetailViewProps> = ({
  item,
  onBack,
  onNavigatePromo,
  onCopyCode,
}) => {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [likes, setLikes] = useState(145);
  const [hasLiked, setHasLiked] = useState(false);

  // Scroll to top when loading a new item
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [item]);

  const handleCopy = () => {
    if (item.code) {
      navigator.clipboard.writeText(item.code);
      setCopied(true);
      onCopyCode(item.code);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setToastMessage('Đã sao chép liên kết bài viết!');
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    }
  };

  // Inline styling parsing helper for bold and backticks
  const parseInlineStyles = (line: string): React.ReactNode[] | string => {
    const parts: React.ReactNode[] = [];
    let currentStr = line;
    let idx = 0;
    
    while (currentStr.length > 0) {
      const boldMatch = currentStr.match(/\*\*(.*?)\*\*/);
      const codeMatch = currentStr.match(/`(.*?)`/);
      
      if (!boldMatch && !codeMatch) {
        parts.push(<span key={idx++}>{currentStr}</span>);
        break;
      }
      
      const boldIndex = boldMatch ? currentStr.indexOf(boldMatch[0]) : Infinity;
      const codeIndex = codeMatch ? currentStr.indexOf(codeMatch[0]) : Infinity;
      
      if (boldIndex < codeIndex) {
        const before = currentStr.substring(0, boldIndex);
        if (before) parts.push(<span key={idx++}>{before}</span>);
        parts.push(<strong key={idx++} className="font-extrabold text-slate-900">{boldMatch![1]}</strong>);
        currentStr = currentStr.substring(boldIndex + boldMatch![0].length);
      } else {
        const before = currentStr.substring(0, codeIndex);
        if (before) parts.push(<span key={idx++}>{before}</span>);
        parts.push(
          <code key={idx++} className="bg-slate-100 text-red-600 font-mono text-xs px-1.5 py-0.5 rounded-md border border-slate-200">
            {codeMatch![1]}
          </code>
        );
        currentStr = currentStr.substring(codeIndex + codeMatch![0].length);
      }
    }
    
    return parts.length > 0 ? parts : line;
  };

  // Main block parser
  const parseContentToArticle = (text: string) => {
    if (!text) return null;
    
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let keyIdx = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        const listItems = [...currentList];
        currentList = [];
        
        elements.push(
          <ul key={`list-${keyIdx++}`} className="space-y-3.5 my-4 pl-1">
            {listItems.map((itemText, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                <span className="flex-1">{parseInlineStyles(itemText)}</span>
              </li>
            ))}
          </ul>
        );
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) {
        flushList();
        continue;
      }

      if (line === '[ANNIVERSARY_PROMO_TABLE]') {
        flushList();
        elements.push(<AnniversaryPromoTable key={`anniversary-table-${keyIdx++}`} />);
        continue;
      }

      if (line.startsWith('### ')) {
        flushList();
        const headingText = line.replace('### ', '');
        elements.push(
          <h3 key={`h3-${keyIdx++}`} className="text-base sm:text-lg font-extrabold text-slate-900 mt-6 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-4.5 bg-red-600 rounded-full inline-block"></span>
            {headingText}
          </h3>
        );
      } else if (line.startsWith('## ')) {
        flushList();
        const headingText = line.replace('## ', '');
        elements.push(
          <h2 key={`h2-${keyIdx++}`} className="text-lg sm:text-xl font-extrabold text-slate-900 mt-8 mb-4 border-b border-slate-100 pb-2">
            {headingText}
          </h2>
        );
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        const cleanLine = line.replace(/^[-*]\s+/, '');
        currentList.push(cleanLine);
      } else {
        flushList();
        const isFirst = elements.length === 0;
        elements.push(
          <p 
            key={`p-${keyIdx++}`} 
            className={`${
              isFirst 
                ? 'text-sm sm:text-base font-semibold text-slate-800 border-l-4 border-red-500 pl-4 py-1.5 bg-red-50/50 rounded-r-lg' 
                : 'text-slate-600 text-sm'
            } leading-relaxed mb-4`}
          >
            {parseInlineStyles(line)}
          </p>
        );
      }
    }
    
    flushList();
    return elements;
  };

  // Retrieve other promotions for discovery sidebar
  const otherPromotions = PROMOTIONS_DATA.filter(p => p.id !== item.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-[var(--vidc-z-modal-nested)] bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl text-xs font-bold flex items-center gap-2 border border-slate-700 animate-slideDown">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Breadcrumbs & Back Nav */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <VIDCNativeButton type="button" className="cursor-pointer hover:text-red-600 transition-colors text-left" onClick={onBack}>Trang chủ</VIDCNativeButton>
          <span>/</span>
          <VIDCNativeButton type="button" className="cursor-pointer hover:text-red-600 transition-colors text-left" onClick={onBack}>Ưu đãi &amp; Tin tức</VIDCNativeButton>
          <span>/</span>
          <span className="text-slate-800 font-medium line-clamp-1 max-w-[240px]">{item.title}</span>
        </div>

        <VIDCNativeButton
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-red-600 transition-colors cursor-pointer self-start"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại danh sách</span>
        </VIDCNativeButton>
      </div>

      {/* Main Grid Structure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Core Article Content */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 p-5 sm:p-8 space-y-6">
          
          {/* Header & Meta Area */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="bg-red-50 text-red-600 border border-red-100 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {item.categoryLabel}
              </span>
              <span className="bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                Hạn dùng: {item.endDate}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
              {item.title}
            </h1>

            {/* Author and Reading Stats */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  V
                </div>
                <div>
                  <span className="font-bold text-slate-800 block">Ban Biên Tập Viettel IDC</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Cập nhật: {item.startDate}</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  <span>3 phút đọc</span>
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-slate-400" />
                  <span>{(item.viewsCount || 1280).toLocaleString()} lượt xem</span>
                </span>
                <VIDCNativeButton 
                  onClick={handleShare}
                  className="p-1 text-slate-400 hover:text-slate-950 transition-colors cursor-pointer"
                  title="Chia sẻ liên kết"
                >
                  <Share2 className="w-4 h-4" />
                </VIDCNativeButton>
              </div>
            </div>
          </div>

          {/* Featured Image - 4 Corners Rounded */}
          <div className="space-y-2">
            <div className="relative h-[200px] sm:h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
              <img alt={item.title} src={item.bannerImage} className="w-full h-full object-cover" onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute top-4 right-4">
                <span className="bg-red-600 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-xl shadow-md">
                  {item.discountValue}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 italic text-center">
              Chương trình khuyến mãi chính thức "{item.title}" do Viettel IDC tổ chức.
            </p>
          </div>

          {/* Formatted Article Prose */}
          <article className="prose prose-slate max-w-none prose-sm sm:prose leading-relaxed">
            {parseContentToArticle(item.content)}
          </article>

          {/* Exclusive Promo Code Box */}
          {item.code && (
            <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-50 rounded-xl text-red-600 border border-red-100 shrink-0">
                  <Gift className="w-5.5 h-5.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                    Mã ưu đãi áp dụng tại checkout
                  </span>
                  <span className="text-base sm:text-lg font-mono font-bold text-slate-800 tracking-wider">
                    {item.code}
                  </span>
                </div>
              </div>

              <VIDCNativeButton
                type="button"
                onClick={handleCopy}
                className={`w-full sm:w-auto flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-xl text-xs font-bold border transition-all shrink-0 cursor-pointer ${
                  copied 
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                    : 'bg-red-600 hover:bg-red-700 text-white border-transparent shadow-sm'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Đã Sao Chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao Chép Mã Ưu Đãi</span>
                  </>
                )}
              </VIDCNativeButton>
            </div>
          )}

          {/* Products Applied list */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-slate-400" />
              Sản phẩm &amp; Dịch vụ áp dụng
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {item.applicableServices.map((svc, i) => (
                <span
                  key={i}
                  className="bg-slate-50 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200"
                >
                  {svc}
                </span>
              ))}
            </div>
          </div>

          {/* Terms & Conditions Section */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Điều kiện &amp; Thể lệ áp dụng
            </h4>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3">
              <ul className="space-y-2.5">
                {item.terms.map((term, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                    <span className="flex-1">{term}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-start gap-2 text-[10px] text-slate-400 border-t border-slate-200/60 pt-2.5">
                <AlertCircle className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                <span>Mọi thắc mắc vui lòng liên hệ bộ phận hỗ trợ khách hàng trước khi đặt mua.</span>
              </div>
            </div>
          </div>

          {/* Post Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 pt-5 gap-3">
            <VIDCNativeButton 
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full transition-colors cursor-pointer ${
                hasLiked 
                  ? 'bg-red-50 text-red-600 font-bold' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              <ThumbsUp className={`w-3.5 h-3.5 ${hasLiked ? 'fill-red-500 text-red-600' : ''}`} />
              <span>Hữu ích ({likes})</span>
            </VIDCNativeButton>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <VIDCNativeButton
                onClick={onBack}
                className="flex-1 sm:flex-initial text-center px-4 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl font-bold text-xs transition-all cursor-pointer"
              >
                Quay lại danh sách
              </VIDCNativeButton>
              <VIDCAnchor
                href="/services/cloud-server"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-xs cursor-pointer"
              >
                <span>Đăng ký nhận ưu đãi</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </VIDCAnchor>
            </div>
          </div>

        </div>

        {/* Right Column: Discover other promotions Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-red-600 rounded-full inline-block"></span>
              Ưu đãi nổi bật khác
            </h3>
            
            <div className="space-y-4">
              {otherPromotions.map((promo) => {
                const globalIndex = PROMOTIONS_DATA.findIndex(p => p.id === promo.id);
                return (
                  <div 
                    key={promo.id}
                    onClick={() => onNavigatePromo(promo, globalIndex)}
                    className="group flex gap-3 cursor-pointer p-1.5 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-slate-50 border border-slate-100">
                      <img alt={promo.title} src={promo.bannerImage} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300" onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <span className="text-[9px] font-extrabold text-red-600 uppercase">
                        {promo.categoryLabel}
                      </span>
                      <h4 className="text-xs font-bold text-slate-800 line-clamp-2 group-hover:text-red-600 transition-colors leading-snug">
                        {promo.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 block">
                        Đến {promo.endDate}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Contact widget */}
          <div className="bg-slate-900 text-white rounded-xl p-6 space-y-4 shadow-sm relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-red-600/10 rounded-full blur-xl" />
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-red-500">
              Cần Tư Vấn Thiết Kế Hạ Tầng?
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hãy để chuyên gia của Viettel IDC hỗ trợ Quý doanh nghiệp lên phương án tối ưu hóa chi phí đám mây và nhận thêm các chính sách chiết khấu tốt nhất.
            </p>
            <div className="pt-2">
              <span className="text-xs text-slate-400 block">Hotline hỗ trợ miễn phí 24/7:</span>
              <span className="text-lg font-black text-white block mt-0.5">1800 8088</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
