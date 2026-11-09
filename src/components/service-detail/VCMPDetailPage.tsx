import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { VCMPHero } from './vcmp/VCMPHero';
import { VCMPStickyNav } from './vcmp/VCMPStickyNav';
import { VCMPOverview } from './vcmp/VCMPOverview';
import { VCMPPricing } from './vcmp/VCMPPricing';
import { VCMPCapabilities } from './vcmp/VCMPCapabilities';
import { VCMPBenefits } from './vcmp/VCMPBenefits';
import { VCMPUseCases } from './vcmp/VCMPUseCases';
import { VCMPFaq } from './vcmp/VCMPFaq';
import { VCMPFooterCta } from './vcmp/VCMPFooterCta';
import { VCMPDocsSupport } from './vcmp/VCMPDocsSupport';
import { VCMPRelatedProducts } from './vcmp/VCMPRelatedProducts';
import { VCMPQuoteModal } from './vcmp/VCMPQuoteModal';

interface VCMPDetailPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigateService?: (path: string) => void;
}

export const VCMPDetailPage: React.FC<VCMPDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigateService,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState<any>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenConsult = (details?: any) => {
    if (details) {
      setQuoteDetails(details);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseConsult = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div 
      id="service-detail-viettel-vcmp" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-042"
      data-vidc-pillar="cloud-operations"
    >
      {/* SECTION 0: HERO SECTION */}
      <VCMPHero
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsult()}
        onNavigateHome={onNavigateHome}
        onNavigateService={onNavigateService}
      />

      {/* STICKY NAVIGATION BAR */}
      <VCMPStickyNav
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsult()}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng #FFFFFF) */}
      <VCMPOverview
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsult()}
      />

      {/* SECTION 2: BẢNG GIÁ & DỰ TOÁN CHI PHÍ (#pricing - Nền Xám #F4F4F4) */}
      <VCMPPricing
        currentMarket={currentMarket}
        onOpenConsult={(details) => handleOpenConsult(details)}
      />

      {/* SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features, #spec-sheet - Nền Trắng #FFFFFF) */}
      <VCMPCapabilities
        currentMarket={currentMarket}
      />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám #F4F4F4) */}
      <VCMPBenefits
        currentMarket={currentMarket}
      />

      {/* SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng #FFFFFF) */}
      <VCMPUseCases
        currentMarket={currentMarket}
        onOpenConsult={(details) => handleOpenConsult(details)}
      />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám #F4F4F4) */}
      <VCMPFaq
        currentMarket={currentMarket}
      />

      {/* SECTION 7: KHỐI CHỐT CHUYỂN ĐỔI CHÍNH (Nền Đỏ var(--vidc-color-brand-red)) */}
      <VCMPFooterCta
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsult()}
      />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám #F4F4F4) */}
      <VCMPDocsSupport
        currentMarket={currentMarket}
      />

      {/* SECTION 9: HỆ SINH THÁI DỊCH VỤ LIÊN QUAN (#related-products - Nền Trắng #FFFFFF) */}
      <VCMPRelatedProducts
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* Consultation Modal */}
      <VCMPQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseConsult}
        currentMarket={currentMarket}
        initialDetails={quoteDetails}
      />
    </div>
  );
};
