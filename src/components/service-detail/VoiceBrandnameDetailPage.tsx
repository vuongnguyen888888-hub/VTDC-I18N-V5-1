import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { VoiceBrandnameHero } from './voice-brandname/VoiceBrandnameHero';
import { VoiceBrandnameStickyNav } from './voice-brandname/VoiceBrandnameStickyNav';
import { VoiceBrandnameOverview } from './voice-brandname/VoiceBrandnameOverview';
import { VoiceBrandnamePricing } from './voice-brandname/VoiceBrandnamePricing';
import { VoiceBrandnameCapabilities } from './voice-brandname/VoiceBrandnameCapabilities';
import { VoiceBrandnameBenefits } from './voice-brandname/VoiceBrandnameBenefits';
import { VoiceBrandnameUseCases } from './voice-brandname/VoiceBrandnameUseCases';
import { VoiceBrandnameFaq } from './voice-brandname/VoiceBrandnameFaq';
import { VoiceBrandnameFooterCta } from './voice-brandname/VoiceBrandnameFooterCta';
import { VoiceBrandnameDocsSupport } from './voice-brandname/VoiceBrandnameDocsSupport';
import { VoiceBrandnameRelatedProducts } from './voice-brandname/VoiceBrandnameRelatedProducts';
import { VoiceBrandnameQuoteModal } from './voice-brandname/VoiceBrandnameQuoteModal';

interface VoiceBrandnameDetailPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigateService?: (path: string) => void;
}

export const VoiceBrandnameDetailPage: React.FC<VoiceBrandnameDetailPageProps> = ({
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
      id="service-detail-viettel-voice-brandname" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-VOICE-01"
      data-vidc-pillar="telecom"
    >
      {/* SECTION 0: HERO SECTION */}
      <VoiceBrandnameHero
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
        onNavigateHome={onNavigateHome}
        onNavigateService={onNavigateService}
      />

      {/* Sticky Section Nav */}
      <VoiceBrandnameStickyNav
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <VoiceBrandnameOverview
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing) */}
      <VoiceBrandnamePricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 3: TÍNH NĂNG NỔI BẬT (#features, #spec-sheet) */}
      <VoiceBrandnameCapabilities
        currentMarket={currentMarket}
      />

      {/* SECTION 4: LỢI ÍCH CỐT LÕI (#benefits) */}
      <VoiceBrandnameBenefits
        currentMarket={currentMarket}
      />

      {/* SECTION 5: ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <VoiceBrandnameUseCases
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <VoiceBrandnameFaq
        currentMarket={currentMarket}
      />

      {/* SECTION 7: CTA KÊU GỌI HÀNH ĐỘNG (Nền Đỏ thương hiệu) */}
      <VoiceBrandnameFooterCta
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 8: TÀI LIỆU & HỖ TRỢ (#docs-support) */}
      <VoiceBrandnameDocsSupport
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsult}
      />

      {/* SECTION 9: SẢN PHẨM LIÊN QUAN */}
      <VoiceBrandnameRelatedProducts
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* Consultation & Onboarding Modal */}
      <VoiceBrandnameQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseConsult}
        currentMarket={currentMarket}
      />
    </div>
  );
};
