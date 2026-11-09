import React from 'react';
import { PROMOTIONS_DATA, PromoItem } from '../../../data/sitemapData';
import { Gift, ArrowRight, ShieldAlert, X } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface PromotionsMegaMenuProps {
  onClose: () => void;
  currentMarketPath: string;
}

export const PromotionsMegaMenu: React.FC<PromotionsMegaMenuProps> = ({ onClose, currentMarketPath }) => {
  const { currentLanguage, getFullPath: localizedPath } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';

  const getFullPath = (path: string) => {
    if (localizedPath) return localizedPath(path);
    if (currentMarketPath === '/') return path;
    return `${currentMarketPath}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  const localizedPromotions = PROMOTIONS_DATA.map((promo: PromoItem) => {
    if (!isNonVn) return promo;

    let title = promo.title;
    let description = promo.description;
    let badge = promo.badge;

    if (promo.id === 'cloud-server-sale') {
      title = 'Viettel Cloud Server Starter Offer';
      description = 'Get up to 30% off virtual cloud servers for new enterprise account deployments.';
      badge = 'ACTIVE';
    } else if (promo.id === 'birthday') {
      title = 'Viettel IDC Anniversary Promotion';
      description = 'Receive 5,000,000 VND voucher credit upon subscribing to Cloud & Colocation services.';
      badge = 'GIFT VOUCHER';
    } else if (promo.id === 'migration-offer') {
      title = 'Zero-Cost Infrastructure Migration';
      description = 'Free architecture consulting and expert engineer support for zero-downtime cloud migration.';
      badge = 'FREE';
    } else if (promo.id === 'startup') {
      title = 'Viettel Cloud Startup Acceleration';
      description = 'Sponsor up to $10,000 in cloud infrastructure credits for innovative technology startups.';
      badge = 'CREDIT $10K';
    }

    return {
      ...promo,
      title,
      description,
      badge
    };
  });

  return (
    <div className="relative w-full mx-auto text-slate-800 p-7 md:p-9 rounded-2xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden min-h-[380px]">
      {/* Top Right Close Button */}
      <VIDCNativeButton 
        onClick={onClose}
        aria-label={isNonVn ? 'Close menu' : 'Đóng menu'}
        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all z-10"
      >
        <X className="w-5 h-5" />
      </VIDCNativeButton>

      {/* Top Banner with Animated Gift Icon */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-4 pr-10">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/60 shadow-xs">
            <Gift className="w-6 h-6 vidc-gift-shake-icon" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-wide flex items-center gap-2 flex-wrap">
              {isNonVn ? 'Special Promotions & Offers' : 'Chương trình Khuyến mãi & Ưu đãi Đặc biệt'}
            </h3>
            <p className="text-xs text-slate-500">
              {isNonVn 
                ? 'Latest infrastructure discounts, promotional vouchers, and free trial credits' 
                : 'Cập nhật các chương trình chiết khấu hạ tầng, tặng Voucher và credit dùng thử'}
            </p>
          </div>
        </div>

        <VIDCAnchor
          href={getFullPath('/resources/promotions/')}
          onClick={onClose}
          className="text-xs text-[var(--vidc-color-brand-red)] hover:text-[var(--vidc-legacy-hex-8f0027)] font-bold flex items-center gap-1 group shrink-0"
        >
          {isNonVn ? 'All active promotions' : 'Tất cả ưu đãi đang diễn ra'}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </VIDCAnchor>
      </div>

      {/* Grid of 4 Promo Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {localizedPromotions.map((promo: PromoItem) => (
          <VIDCAnchor
            key={promo.id}
            href={getFullPath(promo.path)}
            onClick={onClose}
            className="group p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-all flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[var(--vidc-color-brand-red)] text-white">
                  {promo.badge || (isNonVn ? 'PROMOTION' : 'KHUYẾN MÃI')}
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center justify-between mt-2">
                {promo.title}
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-[var(--vidc-color-brand-red)]" />
              </h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">{promo.description}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-[var(--vidc-color-brand-red)] font-bold flex items-center gap-1">
              {isNonVn ? 'View promotion terms' : 'Xem chi tiết điều khoản'}
              <ArrowRight className="w-3 h-3" />
            </div>
          </VIDCAnchor>
        ))}
      </div>

      {/* Verification Note */}
      <div className="mt-6 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 text-xs text-slate-500">
        <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
        <span>
          {isNonVn 
            ? 'Note: Promotional offers are updated regularly. Please contact Hotline 1800 8088 for expert advice and best offer application.'
            : 'Lưu ý: Các chương trình ưu đãi được cập nhật liên tục. Vui lòng liên hệ Hotline 1800 8088 để nhận tư vấn và áp dụng khuyến mãi tốt nhất.'}
        </span>
      </div>
    </div>
  );
};

