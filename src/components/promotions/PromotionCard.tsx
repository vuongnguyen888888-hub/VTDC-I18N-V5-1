import React, { useState } from 'react';
import { Copy, Check, ArrowRight } from 'lucide-react';
import { PromotionItem } from '../../data/promotionsData';

interface PromotionCardProps {
  item: PromotionItem;
  onSelect: (item: PromotionItem) => void;
  onCopyCode: (code: string) => void;
}

export const PromotionCard: React.FC<PromotionCardProps> = ({
  item,
  onSelect,
  onCopyCode,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.code) {
      navigator.clipboard.writeText(item.code);
      setCopied(true);
      onCopyCode(item.code);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getDotColor = (category: string) => {
    switch (category) {
      case 'cloud-server':
        return 'bg-red-500';
      case 'hosting-domain':
        return 'bg-blue-500';
      case 'storage-backup':
        return 'bg-emerald-500';
      case 'security':
        return 'bg-purple-500';
      case 'enterprise':
        return 'bg-amber-500';
      default:
        return 'bg-indigo-500';
    }
  };

  const getBadgeStyle = (color: PromotionItem['badgeColor']) => {
    switch (color) {
      case 'red':
        return 'bg-red-600 text-white';
      case 'amber':
        return 'bg-amber-500 text-white';
      case 'emerald':
        return 'bg-emerald-600 text-white';
      case 'purple':
        return 'bg-purple-600 text-white';
      case 'blue':
      default:
        return 'bg-blue-600 text-white';
    }
  };

  return (
    <div
      onClick={() => onSelect(item)}
      className="group bg-slate-50/50 hover:bg-white rounded-[24px] border border-slate-200/40 hover:border-red-500/20 shadow-none hover:shadow-xl transition-all duration-300 p-4 sm:p-5 flex flex-col h-full cursor-pointer"
    >
      {/* Banner Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 rounded-2xl shrink-0">
        <img alt={item.title} src={item.bannerImage} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" referrerPolicy="no-referrer" onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
          }}
        />
        {/* Special badge */}
        {item.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest ${getBadgeStyle(item.badgeColor)}`}>
              {item.badge}
            </span>
          </div>
        )}
        {/* Discount Value overlay */}
        {item.discountValue && (
          <div className="absolute bottom-3 right-3 z-10">
            <span className="text-[10px] font-black px-2.5 py-1 rounded bg-slate-900/90 text-[var(--vidc-color-brand-red)] uppercase tracking-wider backdrop-blur-xs">
              {item.discountValue}
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex-1 flex flex-col justify-between mt-4">
        <div className="space-y-2">
          {/* Badge with a dot */}
          <div className="flex items-center gap-1.5 text-[11px] font-black text-slate-500 uppercase tracking-widest">
            <span className={`w-2.5 h-2.5 rounded-full ${getDotColor(item.category)} shrink-0`} />
            <span>{item.categoryLabel}</span>
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-slate-900 line-clamp-2 group-hover:text-red-600 transition-colors duration-200 leading-snug">
            {item.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {item.shortDescription}
          </p>

          {/* Code display inside card if code exists */}
          {item.code && (
            <div
              onClick={handleCopy}
              className="mt-3 flex items-center justify-between border border-slate-200/60 rounded-xl p-3 hover:bg-slate-50/80 transition-colors cursor-pointer"
              title="Click để sao chép mã"
            >
              <div className="space-y-0.5">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">
                  MÃ KHUYẾN MẠI
                </span>
                <span className="text-xs font-mono font-bold text-slate-800 tracking-wider uppercase">
                  {item.code}
                </span>
              </div>
              <div className="text-slate-400 hover:text-slate-600 transition-colors pr-1">
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-4 pt-3.5 border-t border-slate-200/50 flex items-center justify-between text-[11px] font-bold text-slate-400 shrink-0">
          <span>Hạn đến: {item.endDate}</span>
          <span className="text-red-600 group-hover:text-red-700 transition-colors uppercase tracking-wider text-[10px] font-black flex items-center gap-0.5">
            <span>Nhận ưu đãi</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </span>
        </div>
      </div>
    </div>
  );
};
