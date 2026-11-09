import React, { useState } from 'react';
import { Tag, Calendar, Copy, Check, ArrowRight, Gift, Sparkles, ShieldCheck, Flame, Zap } from 'lucide-react';
import { PromotionItem } from '../../data/promotionsData';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface FeaturedPromotionCardProps {
  item: PromotionItem;
  onSelect: (item: PromotionItem) => void;
  onCopyCode: (code: string) => void;
}

export const FeaturedPromotionCard: React.FC<FeaturedPromotionCardProps> = ({
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

  return (
    <div
      onClick={() => onSelect(item)}
      className="group bg-slate-50/50 hover:bg-white rounded-[24px] border border-slate-200/40 hover:border-red-500/20 shadow-none hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
        {/* Left / Top Banner Image */}
        <div className="lg:col-span-6 p-4 sm:p-5 lg:p-6">
          <div className="relative h-[220px] sm:h-[280px] lg:h-[340px] overflow-hidden rounded-2xl bg-slate-100">
            <img alt={item.title} src={item.bannerImage} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
              }}
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-white">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
              {item.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-4 font-normal">
              {item.shortDescription}
            </p>
          </div>

          {/* Applicable Services Section */}
          {item.applicableServices && item.applicableServices.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
                Sản phẩm & Dịch vụ áp dụng
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.applicableServices.map((service, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-slate-50 border border-slate-200 text-slate-600 font-medium px-2.5 py-1 rounded-md"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Code & CTA Box */}
          <div className="space-y-4">
            {item.code && (
              <div 
                onClick={handleCopy}
                className="border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                title="Click để sao chép mã"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Mã ưu đãi áp dụng tại checkout
                  </span>
                  <span className="text-base font-mono font-bold text-slate-800 tracking-wider">
                    {item.code}
                  </span>
                </div>
                <VIDCNativeButton
                  type="button"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all shrink-0 cursor-pointer ${
                    copied 
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                      : 'bg-red-50 text-red-600 border-red-100 hover:bg-red-100'
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

            <div className="pt-1 flex items-center gap-1 text-red-600 font-bold transition-colors">
              <span className="text-sm hover:text-red-700 transition-colors cursor-pointer">
                Xem chi tiết
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
