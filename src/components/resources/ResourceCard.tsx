import React from 'react';
import { ResourceItem } from '../../data/resourcesData';

interface ResourceCardProps {
  item: ResourceItem;
  onSelect: (item: ResourceItem) => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ item, onSelect }) => {
  const getDotColor = (category: string) => {
    switch (category) {
      case 'whitepapers':
        return 'bg-emerald-500';
      case 'blog':
        return 'bg-red-500';
      case 'news':
        return 'bg-cyan-500';
      case 'case-studies':
        return 'bg-purple-500';
      case 'events':
        return 'bg-blue-500';
      default:
        return 'bg-amber-500';
    }
  };

  const getBadgeStyle = (color?: ResourceItem['badgeColor']) => {
    switch (color) {
      case 'red':
        return 'bg-red-600/90 text-white';
      case 'blue':
        return 'bg-blue-600/90 text-white';
      case 'emerald':
        return 'bg-emerald-600/90 text-white';
      case 'purple':
        return 'bg-purple-600/90 text-white';
      default:
        return 'bg-slate-900/85 text-white';
    }
  };

  return (
    <div 
      onClick={() => onSelect(item)}
      className="group bg-slate-50/50 hover:bg-white rounded-[24px] border border-slate-200/40 hover:border-red-500/20 shadow-none hover:shadow-xl transition-all duration-300 p-4 sm:p-5 flex flex-col h-full cursor-pointer"
    >
      {/* Banner Image Container with small compact badge */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 rounded-2xl shrink-0">
        <img alt={item.title} src={item.bannerImage} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" referrerPolicy="no-referrer" onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
          }}
        />

        {/* Small, compact topic badge on top of image */}
        {item.badge && (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className={`text-[8px] sm:text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs backdrop-blur-xs ${getBadgeStyle(item.badgeColor)}`}>
              {item.badge}
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex-1 flex flex-col justify-between mt-4">
        <div>
          {/* Category & Format Info */}
          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-black uppercase tracking-wider">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60">
              <span className={`w-1.5 h-1.5 rounded-full ${getDotColor(item.category)} shrink-0`} />
              <span>{item.categoryLabel}</span>
            </span>

            {item.downloadable && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60">
                <span>PDF</span>
                {item.downloadSize && <span className="text-slate-400 font-normal">· {item.downloadSize}</span>}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-slate-900 line-clamp-2 group-hover:text-red-600 transition-colors duration-200 leading-snug mt-2.5">
            {item.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mt-2">
            {item.description}
          </p>
        </div>

        {/* Footer Info */}
        <div className="mt-4 pt-3.5 border-t border-slate-200/50 flex items-center justify-between text-[11px] font-bold text-slate-400 shrink-0">
          <span>{item.publishDate} · {item.readTime}</span>
          <span className="text-red-600 group-hover:text-red-700 transition-colors uppercase tracking-wider text-[10px] font-black flex items-center gap-0.5">
            <span>Đọc tiếp</span>
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </span>
        </div>
      </div>
    </div>
  );
};
