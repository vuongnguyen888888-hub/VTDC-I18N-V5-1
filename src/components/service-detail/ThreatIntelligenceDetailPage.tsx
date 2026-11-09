import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { ThreatIntelligenceHero } from './threat-intelligence/ThreatIntelligenceHero';
import { ThreatIntelligenceStickyNav } from './threat-intelligence/ThreatIntelligenceStickyNav';
import { ThreatIntelligenceOverview } from './threat-intelligence/ThreatIntelligenceOverview';
import { ThreatIntelligencePricing } from './threat-intelligence/ThreatIntelligencePricing';
import { ThreatIntelligenceFeatures } from './threat-intelligence/ThreatIntelligenceFeatures';
import { ThreatIntelligenceBenefits } from './threat-intelligence/ThreatIntelligenceBenefits';
import { ThreatIntelligenceUseCases } from './threat-intelligence/ThreatIntelligenceUseCases';
import { ThreatIntelligenceFaq } from './threat-intelligence/ThreatIntelligenceFaq';
import { ThreatIntelligenceFooterCta } from './threat-intelligence/ThreatIntelligenceFooterCta';
import { ThreatIntelligenceDocsSupport } from './threat-intelligence/ThreatIntelligenceDocsSupport';
import { ThreatIntelligenceRelatedProducts } from './threat-intelligence/ThreatIntelligenceRelatedProducts';
import { ThreatIntelligenceQuoteModal } from './threat-intelligence/ThreatIntelligenceQuoteModal';

interface ThreatIntelligenceDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const ThreatIntelligenceDetailPage: React.FC<ThreatIntelligenceDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigateService,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [customNotes, setCustomNotes] = useState('');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenConsultModal = (notes?: string) => {
    setCustomNotes(notes || '');
    setIsQuoteModalOpen(true);
  };

  return (
    <div 
      id="service-detail-viettel-threat-intelligence" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-037"
      data-vidc-pillar="security"
    >
      {/* SECTION 0: HERO SECTION (Mở đầu & Định vị giá trị) */}
      <ThreatIntelligenceHero
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
        onNavigateHome={onNavigateHome}
      />

      {/* STICKY NAVIGATION BAR (Thanh điều hướng cố định) */}
      <ThreatIntelligenceStickyNav
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký tư vấn Viettel Threat Intelligence')}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng #FFFFFF) */}
      <ThreatIntelligenceOverview currentMarket={currentMarket} />

      {/* SECTION 2: BẢNG CÁC GÓI DỊCH VỤ (#pricing - Nền Xám #F4F4F4) */}
      <ThreatIntelligencePricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 3: TÍNH NĂNG VƯỢT TRỘI & NĂNG LỰC CÔNG NGHỆ (#features - Nền Trắng #FFFFFF) */}
      <ThreatIntelligenceFeatures currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám #F4F4F4) */}
      <ThreatIntelligenceBenefits currentMarket={currentMarket} />

      {/* SECTION 5: ĐỐI TƯỢNG & KỊCH BẢN ỨNG DỤNG (#use-cases - Nền Trắng #FFFFFF) */}
      <ThreatIntelligenceUseCases currentMarket={currentMarket} />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám #F4F4F4) */}
      <ThreatIntelligenceFaq currentMarket={currentMarket} />

      {/* SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (Bottom CTA - Nền Đỏ var(--vidc-color-brand-red)) */}
      <ThreatIntelligenceFooterCta
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký tư vấn & nhận báo giá Viettel Threat Intelligence')}
      />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám #F4F4F4) */}
      <ThreatIntelligenceDocsSupport
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Tài liệu & Hỗ trợ kỹ thuật Viettel Threat Intelligence')}
      />

      {/* SECTION 9: HỆ SINH THÁI GIẢI PHÁP BỔ TRỢ (Nền Trắng #FFFFFF) */}
      <ThreatIntelligenceRelatedProducts
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* Consultation & Quote Modal */}
      <ThreatIntelligenceQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        customNotes={customNotes}
        currentMarket={currentMarket}
      />
    </div>
  );
};
