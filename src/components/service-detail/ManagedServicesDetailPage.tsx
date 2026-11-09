import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { ManagedServicesHero } from './managed-services/ManagedServicesHero';
import { ManagedServicesStickyNav } from './managed-services/ManagedServicesStickyNav';
import { ManagedServicesOverview } from './managed-services/ManagedServicesOverview';
import { ManagedServicesPricing } from './managed-services/ManagedServicesPricing';
import { ManagedServicesFeatures } from './managed-services/ManagedServicesFeatures';
import { ManagedServicesBenefits } from './managed-services/ManagedServicesBenefits';
import { ManagedServicesUseCases } from './managed-services/ManagedServicesUseCases';
import { ManagedServicesFaq } from './managed-services/ManagedServicesFaq';
import { ManagedServicesFooterCta } from './managed-services/ManagedServicesFooterCta';
import { ManagedServicesDocsSupport } from './managed-services/ManagedServicesDocsSupport';
import { ManagedServicesRelatedProducts } from './managed-services/ManagedServicesRelatedProducts';
import { ManagedServicesQuoteModal } from './managed-services/ManagedServicesQuoteModal';

interface ManagedServicesDetailPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigateService?: (path: string) => void;
}

/**
 * Viettel Managed Services Detail Page
 * Standardized 100% per Architectural Framework TDV-01 & Design System Tokens matching /services/compute/cloud-server/ pattern
 */
export const ManagedServicesDetailPage: React.FC<ManagedServicesDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigateService,
}) => {
  const { currentLanguage } = useLanguage();
  const isVietnamese = currentLanguage === 'vn' || currentLanguage === 'vi';
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Viettel Managed Services');

  // Scroll to top on mount and set page title
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Never overwrite the translated SEO title supplied by Next.js on non-VI routes.
    if (isVietnamese) document.title = 'Viettel Managed Services – Dịch Vụ Quản Trị & Vận Hành Hạ Tầng CNTT Chuyên Nghiệp 24/7/365 | Viettel IDC';
  }, [isVietnamese]);

  const handleOpenQuote = (planName?: string) => {
    setSelectedPlan(planName || 'Viettel Managed Services');
    setIsQuoteModalOpen(true);
  };

  return (
    <div 
      id="service-detail-viettel-managed-services" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-MS-01"
      data-vidc-pillar="operations-management"
    >
      {/* SECTION 0: HERO SECTION */}
      <ManagedServicesHero
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenQuote('Tư vấn dịch vụ Viettel Managed Services')}
        onNavigateHome={onNavigateHome}
        onNavigateService={onNavigateService}
      />

      {/* STICKY NAVIGATION BAR */}
      <ManagedServicesStickyNav 
        currentMarket={currentMarket} 
        onOpenQuote={() => handleOpenQuote('Tư vấn dịch vụ Viettel Managed Services')}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng #FFFFFF) */}
      <ManagedServicesOverview currentMarket={currentMarket} />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing - Nền Xám #F4F4F4) */}
      <ManagedServicesPricing
        currentMarket={currentMarket}
        onOpenQuote={handleOpenQuote}
      />

      {/* SECTION 3: TÍNH NĂNG NỔI BẬT (#features - Nền Trắng #FFFFFF) */}
      <ManagedServicesFeatures currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH CỐT LÕI (#benefits - Nền Xám #F4F4F4) */}
      <ManagedServicesBenefits currentMarket={currentMarket} />

      {/* SECTION 5: ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng #FFFFFF) */}
      <ManagedServicesUseCases currentMarket={currentMarket} />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Trắng #FFFFFF) */}
      <ManagedServicesFaq currentMarket={currentMarket} />

      {/* SECTION 7: CTA KÊU GỌI HÀNH ĐỘNG (Nền Đỏ thương hiệu V8) */}
      <ManagedServicesFooterCta 
        currentMarket={currentMarket} 
        onOpenQuote={() => handleOpenQuote('Đăng ký nhận tư vấn vận hành')}
      />

      {/* SECTION 8: TÀI LIỆU & HỖ TRỢ (#docs-support - Nền Xám #F4F4F4) */}
      <ManagedServicesDocsSupport currentMarket={currentMarket} />

      {/* SECTION 9: SẢN PHẨM LIÊN QUAN (#related-products - Nền Trắng #FFFFFF) */}
      <ManagedServicesRelatedProducts currentMarket={currentMarket} />

      {/* Lead / Quote Registration Modal */}
      <ManagedServicesQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedPlan={selectedPlan}
        currentMarket={currentMarket}
      />
    </div>
  );
};
