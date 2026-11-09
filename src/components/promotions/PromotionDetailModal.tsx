import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Calendar, 
  Tag, 
  ShieldCheck, 
  ExternalLink, 
  Gift, 
  CheckCircle2, 
  HelpCircle, 
  Share2,
  ThumbsUp,
  BookOpen,
  User,
  Eye,
  AlertCircle,
  Database
} from 'lucide-react';
import { PromotionItem } from '../../data/promotionsData';
import { AnniversaryPromoTable } from './AnniversaryPromoTable';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface PromotionDetailModalProps {
  item: PromotionItem | null;
  onClose: () => void;
  onCopyCode: (code: string) => void;
}

export const PromotionDetailModal: React.FC<PromotionDetailModalProps> = ({
  item,
  onClose,
  onCopyCode,
}) => {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [likes, setLikes] = useState(128);
  const [hasLiked, setHasLiked] = useState(false);

  if (!item) return null;

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

  return (
    <div className="fixed inset-0 z-[var(--vidc-z-modal)] overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      {/* Toast alert */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-[var(--vidc-z-modal-nested)] bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-xl text-xs font-bold flex items-center gap-2 border border-slate-700 animate-slideDown">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-4 max-h-[92vh] flex flex-col">
        {/* Modal Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-5 py-3.5 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-red-50 text-red-600 border border-red-100 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              {item.categoryLabel}
            </span>
            <span className="text-slate-300 text-xs hidden sm:inline">•</span>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Thời hạn: {item.startDate} - {item.endDate}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <VIDCNativeButton
              type="button"
              onClick={handleShare}
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Chia sẻ ưu đãi"
            >
              <Share2 className="w-4 h-4" />
            </VIDCNativeButton>
            <VIDCNativeButton
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Đóng"
            >
              <X className="w-5 h-5" />
            </VIDCNativeButton>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6 flex-1 custom-scrollbar-subtle">
          
          {/* Article Header & Metadata Block */}
          <div className="space-y-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
              {item.title}
            </h1>
            
            {/* Publisher Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  V
                </div>
                <div>
                  <span className="font-bold text-slate-800 block">Ban Biên Tập Viettel IDC</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Xuất bản: {item.startDate}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3.5">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  <span>3 phút đọc</span>
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-slate-400" />
                  <span>{(item.viewsCount || 1250).toLocaleString()} lượt đọc</span>
                </span>
              </div>
            </div>
          </div>

          {/* Featured Image with Rounded Edges */}
          <div className="space-y-2">
            <div className="relative h-48 sm:h-64 md:h-80 w-full rounded-xl overflow-hidden bg-slate-100 shadow-xs border border-slate-200">
              <img alt={item.title} src={item.bannerImage} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4">
                <span className="bg-red-600 text-white font-extrabold text-xs px-3 py-1.5 rounded-lg shadow-md">
                  {item.discountValue}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 italic text-center">
              Hình ảnh minh họa cho chương trình khuyến mại {item.title} tại Viettel IDC.
            </p>
          </div>

          {/* Main Parsed Article Body */}
          <article className="prose prose-slate max-w-none prose-sm sm:prose">
            {parseContentToArticle(item.content)}
          </article>

          {/* Promo Code Coupon Widget inside the Article */}
          {item.code && (
            <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
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
                className={`w-full sm:w-auto flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold border transition-all shrink-0 cursor-pointer ${
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
                    <span>Sao Chép Mã</span>
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
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
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

          {/* Article Footer Reactions */}
          <div className="flex items-center justify-between border-t border-b border-slate-100 py-3 text-xs">
            <VIDCNativeButton 
              onClick={handleLike}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
                hasLiked 
                  ? 'bg-red-50 text-red-600 font-bold' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <ThumbsUp className={`w-3.5 h-3.5 ${hasLiked ? 'fill-red-500 text-red-600' : ''}`} />
              <span>Hữu ích ({likes})</span>
            </VIDCNativeButton>
            <span className="text-slate-400">Viettel Cloud © 2026</span>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="sticky bottom-0 z-20 bg-slate-50 border-t border-slate-200 p-4 px-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
            Hotline hỗ trợ miễn phí: <strong>1800 8088</strong>
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <VIDCNativeButton
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-lg font-bold text-xs transition-all cursor-pointer"
            >
              Đóng
            </VIDCNativeButton>
            <VIDCAnchor
              href="/services/cloud-server"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-bold text-xs transition-all shadow-xs cursor-pointer"
            >
              <span>Đăng Ký Nhận Ưu Đãi</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </VIDCAnchor>
          </div>
        </div>
      </div>
    </div>
  );
};
