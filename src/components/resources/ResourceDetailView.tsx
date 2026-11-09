import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Share2, 
  ThumbsUp, 
  BookOpen, 
  Clock, 
  User, 
  Download, 
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  Copy,
  Check,
  ChevronRight
} from 'lucide-react';
import { ResourceItem, RESOURCES_DATA } from '../../data/resourcesData';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';


interface ResourceDetailViewProps {
  item: ResourceItem;
  onBack: () => void;
  onNavigateResource: (item: ResourceItem) => void;
}

export const ResourceDetailView: React.FC<ResourceDetailViewProps> = ({
  item,
  onBack,
  onNavigateResource,
}) => {
  const [likes, setLikes] = useState(218);
  const [hasLiked, setHasLiked] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Randomize initial like count based on ID
    const baseLikes = item.title.length * 3 + 45;
    setLikes(baseLikes);
    setHasLiked(false);
  }, [item]);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
    } else {
      setLikes(prev => prev - 1);
      setHasLiked(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setToastMessage('Đã sao chép liên kết tài nguyên!');
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const handleCopyCodeText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail) {
      setSubSuccess(true);
      setSubscribedEmail('');
      setTimeout(() => setSubSuccess(false), 4000);
    }
  };

  // Inline styling parser (bold and code ticks)
  const parseInlineStyles = (text: string): React.ReactNode[] | string => {
    const parts: React.ReactNode[] = [];
    let currentStr = text;
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
    
    return parts.length > 0 ? parts : text;
  };

  // Detailed block-level markdown parser supporting yaml/json code blocks
  const parseContentToArticle = (text: string) => {
    if (!text) return null;
    
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let inCodeBlock = false;
    let codeBlockLines: string[] = [];
    let codeBlockLang = '';
    let keyIdx = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        const listItems = [...currentList];
        currentList = [];
        
        elements.push(
          <ul key={`list-${keyIdx++}`} className="space-y-3.5 my-5 pl-1">
            {listItems.map((itemText, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm sm:text-base leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
                <span className="flex-1">{parseInlineStyles(itemText)}</span>
              </li>
            ))}
          </ul>
        );
      }
    };

    const flushCodeBlock = () => {
      if (inCodeBlock) {
        const blockCode = codeBlockLines.join('\n');
        const currentLang = codeBlockLang;
        const currentId = `code-${keyIdx++}`;
        codeBlockLines = [];
        inCodeBlock = false;

        elements.push(
          <div key={currentId} className="relative group/code my-6 rounded-xl border border-slate-200 overflow-hidden bg-slate-950 shadow-xs">
            {/* Code Block Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-[10px] text-slate-400 font-mono">
              <span className="uppercase">{currentLang || 'code'}</span>
              <VIDCNativeButton
                onClick={() => handleCopyCodeText(blockCode, currentId)}
                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              >
                {copiedCodeId === currentId ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Đã chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao chép</span>
                  </>
                )}
              </VIDCNativeButton>
            </div>
            {/* Code Content */}
            <pre className="p-4 overflow-x-auto text-xs font-mono text-slate-200 leading-relaxed max-w-full">
              <code>{blockCode}</code>
            </pre>
          </div>
        );
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Handle Code Block delimiters
      if (trimmed.startsWith('```')) {
        if (inCodeBlock) {
          flushCodeBlock();
        } else {
          flushList();
          inCodeBlock = true;
          codeBlockLang = trimmed.substring(3).trim();
        }
        continue;
      }

      if (inCodeBlock) {
        codeBlockLines.push(line);
        continue;
      }

      if (!trimmed) {
        flushList();
        continue;
      }

      // Headers & Lists
      if (trimmed.startsWith('# ')) {
        flushList();
        // Skip document title as it is already rendered in the Hero
        continue;
      } else if (trimmed.startsWith('### ')) {
        flushList();
        const headingText = trimmed.substring(4);
        elements.push(
          <h3 key={`h3-${keyIdx++}`} className="text-base sm:text-lg font-extrabold text-slate-900 mt-6 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-4.5 bg-red-600 rounded-full inline-block"></span>
            {headingText}
          </h3>
        );
      } else if (trimmed.startsWith('## ')) {
        flushList();
        const headingText = trimmed.substring(3);
        elements.push(
          <h2 key={`h2-${keyIdx++}`} className="text-lg sm:text-xl font-bold text-slate-900 mt-8 mb-4 border-b border-slate-100 pb-2">
            {headingText}
          </h2>
        );
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const cleanLine = trimmed.substring(2);
        currentList.push(cleanLine);
      } else if (trimmed.match(/^\d+\.\s+/)) {
        // Ordered lists treated as normal lists for clean styled look
        const cleanLine = trimmed.replace(/^\d+\.\s+/, '');
        currentList.push(cleanLine);
      } else {
        flushList();
        elements.push(
          <p key={`p-${keyIdx++}`} className="text-slate-600 text-sm sm:text-base leading-relaxed my-4">
            {parseInlineStyles(trimmed)}
          </p>
        );
      }
    }

    // Flush any remaining active lists
    flushList();
    return elements;
  };

  // Sidebar recommendations
  const otherResources = RESOURCES_DATA.filter(r => r.id !== item.id).slice(0, 3);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-fade-in-up">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          {toastMessage}
        </div>
      )}

      {/* Main Container */}
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 space-y-6">
        {/* Navigation / Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-slate-200">
          <VIDCNativeButton
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-extrabold text-slate-600 hover:text-red-600 transition-colors cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Trở lại Trung tâm Tài nguyên
          </VIDCNativeButton>

          <nav className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
            <VIDCNativeButton type="button" className="hover:text-red-600 transition-colors cursor-pointer text-left" onClick={onBack}>Trang Tài Nguyên</VIDCNativeButton>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-900 font-extrabold capitalize max-w-[200px] truncate">{item.categoryLabel}</span>
          </nav>
        </div>

        {/* Master Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Read Panel (8 cols) */}
          <article className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
            {/* Cover Image */}
            <div className="relative h-56 sm:h-72 md:h-80 w-full bg-slate-100">
              <img alt={item.title} src={item.bannerImage} className="w-full h-full object-cover" referrerPolicy="no-referrer" onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent flex items-end p-6 sm:p-8">
                <div className="space-y-2">
                  <span className="text-[10px] font-black tracking-widest bg-red-600 text-white px-2.5 py-1 rounded uppercase">
                    {item.categoryLabel}
                  </span>
                  <h1 className="text-lg sm:text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-sm">
                    {item.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* Meta bar */}
            <div className="px-6 sm:px-10 py-5 border-b border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-4 text-slate-500 font-semibold">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-slate-400" />
                  <div>
                    <p className="text-slate-900 font-bold leading-none">{item.author}</p>
                    <p className="text-[10px] text-slate-400 font-normal mt-0.5">{item.authorRole}</p>
                  </div>
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  {item.publishDate}
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <VIDCNativeButton
                  onClick={handleLike}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                    hasLiked 
                      ? 'bg-red-50 text-red-600 border-red-200 font-bold' 
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${hasLiked ? 'fill-red-500' : ''}`} />
                  <span>{likes} Thích</span>
                </VIDCNativeButton>
                <VIDCNativeButton
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Chia sẻ</span>
                </VIDCNativeButton>
              </div>
            </div>

            {/* Document Content Block */}
            <div className="px-6 sm:px-10 py-8 prose prose-slate max-w-none">
              {parseContentToArticle(item.content)}
            </div>

            {/* Download CTA Box if downloadable */}
            {item.downloadable && (
              <div className="mx-6 sm:mx-10 mb-8 p-6 rounded-xl bg-gradient-to-br from-red-50 to-rose-100/50 border border-red-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1.5 text-center sm:text-left">
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center justify-center sm:justify-start gap-1.5">
                    <FileText className="w-5 h-5 text-red-600" />
                    Tải về trọn bộ tài liệu chi tiết (PDF)
                  </h4>
                  <p className="text-xs text-slate-600 font-medium">
                    Nhận bản đầy đủ, bao gồm toàn bộ biểu đồ kỹ thuật, case study thực tiễn và bảng số liệu. (Dung lượng: {item.downloadSize})
                  </p>
                </div>
                <VIDCNativeButton
                  onClick={() => alert(`Bắt đầu tải xuống tài liệu: ${item.title}`)}
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-xs shrink-0 cursor-pointer flex items-center gap-2 group/btn"
                >
                  <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                  Tải PDF Ngay
                </VIDCNativeButton>
              </div>
            )}
          </article>

          {/* Right Column: Recommended & Discover (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Author card or Quick Info */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nhà xuất bản</h3>
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold shrink-0">
                  VT
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">{item.author}</h4>
                  <p className="text-xs text-slate-500 leading-normal mt-0.5">{item.authorRole}</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                Cung cấp bởi phòng phân tích hạ tầng và đội ngũ kỹ sư giải pháp Viettel Cloud. Tài liệu được cập nhật mới nhất cho xu hướng chuyển dịch 2026.
              </p>
            </div>

            {/* Other recommendations */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-2xs">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-3">
                <BookOpen className="w-4 h-4 text-red-600" />
                Đề xuất cho bạn
              </h3>

              <div className="space-y-4">
                {otherResources.map((promo) => (
                  <div
                    key={promo.id}
                    onClick={() => onNavigateResource(promo)}
                    className="group flex gap-3.5 items-start cursor-pointer hover:bg-slate-50/50 p-1.5 rounded-xl transition-colors duration-200"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-100">
                      <img alt={promo.title} src={promo.bannerImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                    </div>
                    <div className="space-y-1 min-w-0">
                      <span className="text-[9px] font-black tracking-widest text-red-600 uppercase">
                        {promo.categoryLabel}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-red-600 transition-colors duration-150">
                        {promo.title}
                      </h4>
                      <p className="text-[10px] text-slate-400">{promo.publishDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contextual Sidebar Newsletter subscription */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-2xl p-6 space-y-4 shadow-sm border border-slate-800 relative overflow-hidden">
              {/* Abstract mesh */}
              <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://res.cloudinary.com/dpyizq1m2/image/upload/v1785791613/banner_cubyvl.png')" }} />
              
              <div className="relative z-10 space-y-3">
                <div className="w-9 h-9 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-extrabold tracking-tight">Cập Nhật Kỹ Thuật Đám Mây</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Nhận tin tức phân tích kiến trúc Kubernetes, An toàn thông tin và báo cáo chuyên môn mới nhất trực tiếp qua email của bạn hàng tuần.
                </p>

                {subSuccess ? (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-2 text-emerald-400 text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Đăng ký nhận tài liệu thành công!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2">
                    <VIDCNativeInput
                      type="email"
                      required
                      value={subscribedEmail}
                      onChange={(e) => setSubscribedEmail(e.target.value)}
                      placeholder="email@doanhnghiep.vn"
                      className="w-full px-3 py-2 bg-slate-800/80 text-white border border-slate-700 rounded-xl text-xs placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                    <VIDCNativeButton
                      type="submit"
                      className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      Đăng Ký
                      <ArrowRight className="w-3.5 h-3.5" />
                    </VIDCNativeButton>
                  </form>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
