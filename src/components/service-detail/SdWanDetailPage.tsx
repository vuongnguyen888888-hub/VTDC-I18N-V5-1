import React, { useState } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { SdWanHero } from './sd-wan/SdWanHero';
import { SdWanStickyNav } from './sd-wan/SdWanStickyNav';
import { SdWanOverview } from './sd-wan/SdWanOverview';
import { SdWanPricing } from './sd-wan/SdWanPricing';
import { SdWanCapabilities } from './sd-wan/SdWanCapabilities';
import { SdWanBenefits } from './sd-wan/SdWanBenefits';
import { SdWanUseCases } from './sd-wan/SdWanUseCases';
import { SdWanFaq } from './sd-wan/SdWanFaq';
import { SdWanFooterCta } from './sd-wan/SdWanFooterCta';
import { SdWanDocsSupport } from './sd-wan/SdWanDocsSupport';
import { SdWanRelatedProducts } from './sd-wan/SdWanRelatedProducts';
import { SdWanQuoteModal } from './sd-wan/SdWanQuoteModal';

interface SdWanDetailPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigateService?: (path: string) => void;
}

export const SdWanDetailPage: React.FC<SdWanDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigateService,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenConsult = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseConsult = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[var(--vidc-legacy-hex-222225)] flex flex-col selection:bg-red-500 selection:text-white">
      {/* SECTION 0: HERO SECTION */}
      <SdWanHero
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
        onNavigateService={onNavigateService}
      />

      {/* STICKY NAVIGATION BAR */}
      <SdWanStickyNav
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng #FFFFFF) */}
      <SdWanOverview
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 2: BẢNG TÙY CHỌN & PHƯƠNG ÁN TRIỂN KHAI (#pricing - Nền Xám #F4F4F4) */}
      <SdWanPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features - Nền Trắng #FFFFFF) */}
      <SdWanCapabilities
        currentMarket={currentMarket}
      />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám #F4F4F4) */}
      <SdWanBenefits
        currentMarket={currentMarket}
      />

      {/* SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng #FFFFFF) */}
      <SdWanUseCases
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám #F4F4F4) */}
      <SdWanFaq
        currentMarket={currentMarket}
      />

      {/* SECTION 7: KHỐI CHỐT CHUYỂN ĐỔI CHÍNH (Bottom CTA - Nền Đỏ var(--vidc-color-brand-red)) */}
      <SdWanFooterCta
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám #F4F4F4) */}
      <SdWanDocsSupport
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 9: HỆ SINH THÁI GIẢI PHÁP TÍCH HỢP (Nền Trắng #FFFFFF) */}
      <SdWanRelatedProducts
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* Quick Quote Modal */}
      <SdWanQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseConsult}
        currentMarket={currentMarket}
      />
    </div>
  );
};
