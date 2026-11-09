import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { CloudWafHero } from './cwaf/CloudWafHero';
import { CloudWafStickyNav } from './cwaf/CloudWafStickyNav';
import { CloudWafOverview } from './cwaf/CloudWafOverview';
import { CloudWafPricing } from './cwaf/CloudWafPricing';
import { CloudWafCapabilities } from './cwaf/CloudWafCapabilities';
import { CloudWafBenefits } from './cwaf/CloudWafBenefits';
import { CloudWafUseCases } from './cwaf/CloudWafUseCases';
import { CloudWafFaq } from './cwaf/CloudWafFaq';
import { CloudWafFooterCta } from './cwaf/CloudWafFooterCta';
import { CloudWafDocsSupport } from './cwaf/CloudWafDocsSupport';
import { CloudWafRelatedProducts } from './cwaf/CloudWafRelatedProducts';
import { CloudWafQuoteModal } from './cwaf/CloudWafQuoteModal';

interface CloudWafDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const CloudWafDetailPage: React.FC<CloudWafDetailPageProps> = ({
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
      id="service-detail-viettel-cloud-waf" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-031"
      data-vidc-pillar="security"
    >
      {/* SECTION 0: HERO SECTION */}
      <CloudWafHero
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
        onNavigateHome={onNavigateHome}
      />

      {/* STICKY SECTION NAV (7 mục) */}
      <CloudWafStickyNav 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* SECTION 1: TỔNG QUAN KIẾN TRÚC & CƠ CHẾ HOẠT ĐỘNG (#overview) */}
      <CloudWafOverview currentMarket={currentMarket} />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing) */}
      <CloudWafPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 3: TÍNH NĂNG NỔI BẬT & SPEC SHEET (#features) */}
      <CloudWafCapabilities currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits) */}
      <CloudWafBenefits currentMarket={currentMarket} />

      {/* SECTION 5: ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <CloudWafUseCases 
        currentMarket={currentMarket} 
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <CloudWafFaq currentMarket={currentMarket} />

      {/* SECTION 7: KHỐI CTA ĐIỀU HƯỚNG CHUYỂN ĐỔI (Nền Đỏ) */}
      <CloudWafFooterCta
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* SECTION 8: TÀI LIỆU & HỖ TRỢ (#docs-support) */}
      <CloudWafDocsSupport currentMarket={currentMarket} />

      {/* SECTION 9: HỆ SINH THÁI BỔ TRỢ */}
      <CloudWafRelatedProducts
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* Lead capture / Quote modal */}
      <CloudWafQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        customNotes={customNotes}
        currentMarket={currentMarket}
      />
    </div>
  );
};
