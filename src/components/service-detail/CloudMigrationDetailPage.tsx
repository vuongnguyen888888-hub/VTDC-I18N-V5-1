import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { CloudMigrationHero } from './cloud-migration/CloudMigrationHero';
import { CloudMigrationStickyNav } from './cloud-migration/CloudMigrationStickyNav';
import { CloudMigrationOverview } from './cloud-migration/CloudMigrationOverview';
import { CloudMigrationPricing } from './cloud-migration/CloudMigrationPricing';
import { CloudMigrationCapabilities } from './cloud-migration/CloudMigrationCapabilities';
import { CloudMigrationBenefits } from './cloud-migration/CloudMigrationBenefits';
import { CloudMigrationUseCases } from './cloud-migration/CloudMigrationUseCases';
import { CloudMigrationFaq } from './cloud-migration/CloudMigrationFaq';
import { CloudMigrationFooterCta } from './cloud-migration/CloudMigrationFooterCta';
import { CloudMigrationDocsSupport } from './cloud-migration/CloudMigrationDocsSupport';
import { CloudMigrationRelatedProducts } from './cloud-migration/CloudMigrationRelatedProducts';
import { CloudMigrationQuoteModal } from './cloud-migration/CloudMigrationQuoteModal';

interface CloudMigrationDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const CloudMigrationDetailPage: React.FC<CloudMigrationDetailPageProps> = ({
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
      id="service-detail-viettel-cloud-migration" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-052"
      data-vidc-pillar="managed-services"
    >
      {/* SECTION 0: HERO SECTION */}
      <CloudMigrationHero
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
        onNavigateHome={onNavigateHome}
      />

      {/* Sticky Section Nav */}
      <CloudMigrationStickyNav 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <CloudMigrationOverview currentMarket={currentMarket} />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing) */}
      <CloudMigrationPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 3: TÍNH NĂNG NỔI BẬT (#features) */}
      <CloudMigrationCapabilities currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH CỐT LÕI (#benefits) */}
      <CloudMigrationBenefits currentMarket={currentMarket} />

      {/* SECTION 5: ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <CloudMigrationUseCases currentMarket={currentMarket} />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <CloudMigrationFaq currentMarket={currentMarket} />

      {/* SECTION 7: CTA KÊU GỌI HÀNH ĐỘNG (#cta-section) */}
      <CloudMigrationFooterCta 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* SECTION 8: TÀI LIỆU & HỖ TRỢ (#docs-support) */}
      <CloudMigrationDocsSupport currentMarket={currentMarket} />

      {/* SECTION 9: SẢN PHẨM LIÊN QUAN (#related-products) */}
      <CloudMigrationRelatedProducts 
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* Lead / Quote Registration Modal */}
      <CloudMigrationQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        customNotes={customNotes}
        currentMarket={currentMarket}
      />
    </div>
  );
};
