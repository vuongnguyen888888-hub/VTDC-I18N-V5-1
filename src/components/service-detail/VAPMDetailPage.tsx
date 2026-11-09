import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { VAPMHero } from './vapm/VAPMHero';
import { VAPMStickyNav } from './vapm/VAPMStickyNav';
import { VAPMOverview } from './vapm/VAPMOverview';
import { VAPMPricing } from './vapm/VAPMPricing';
import { VAPMCapabilities } from './vapm/VAPMCapabilities';
import { VAPMBenefits } from './vapm/VAPMBenefits';
import { VAPMUseCases } from './vapm/VAPMUseCases';
import { VAPMFaq } from './vapm/VAPMFaq';
import { VAPMFooterCta } from './vapm/VAPMFooterCta';
import { VAPMDocsSupport } from './vapm/VAPMDocsSupport';
import { VAPMRelatedProducts } from './vapm/VAPMRelatedProducts';
import { VAPMQuoteModal } from './vapm/VAPMQuoteModal';

interface VAPMDetailPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigateService?: (path: string) => void;
}

export const VAPMDetailPage: React.FC<VAPMDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigateService,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenConsult = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseConsult = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div 
      id="service-detail-viettel-apm" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-APM-01"
      data-vidc-pillar="managed-services"
    >
      {/* SECTION 0: HERO SECTION */}
      <VAPMHero
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
        onNavigateHome={onNavigateHome}
        onNavigateService={onNavigateService}
      />

      {/* Sticky Section Nav */}
      <VAPMStickyNav
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <VAPMOverview
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing) */}
      <VAPMPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 3: TÍNH NĂNG NỔI BẬT & BẢNG SO SÁNH (#features, #spec-sheet) */}
      <VAPMCapabilities
        currentMarket={currentMarket}
      />

      {/* SECTION 4: LỢI ÍCH CỐT LÕI (#benefits) */}
      <VAPMBenefits
        currentMarket={currentMarket}
      />

      {/* SECTION 5: ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <VAPMUseCases
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <VAPMFaq
        currentMarket={currentMarket}
      />

      {/* SECTION 7: CTA KÊU GỌI HÀNH ĐỘNG (Nền Đỏ thương hiệu) */}
      <VAPMFooterCta
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 8: TÀI LIỆU HƯỚNG DẪN & TRUNG TÂM HỖ TRỢ (#docs-support) */}
      <VAPMDocsSupport
        currentMarket={currentMarket}
      />

      {/* SECTION 9: HỆ SINH THÁI DỊCH VỤ LIÊN QUAN (#related-products) */}
      <VAPMRelatedProducts
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* Consultation Modal */}
      <VAPMQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseConsult}
        currentMarket={currentMarket}
      />
    </div>
  );
};
