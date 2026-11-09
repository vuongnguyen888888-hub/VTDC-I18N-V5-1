import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { EndpointSecurityHero } from './endpoint-security/EndpointSecurityHero';
import { EndpointSecurityStickyNav } from './endpoint-security/EndpointSecurityStickyNav';
import { EndpointSecurityOverview } from './endpoint-security/EndpointSecurityOverview';
import { EndpointSecurityPricing } from './endpoint-security/EndpointSecurityPricing';
import { EndpointSecurityCapabilities } from './endpoint-security/EndpointSecurityCapabilities';
import { EndpointSecurityBenefits } from './endpoint-security/EndpointSecurityBenefits';
import { EndpointSecurityUseCases } from './endpoint-security/EndpointSecurityUseCases';
import { EndpointSecurityFaq } from './endpoint-security/EndpointSecurityFaq';
import { EndpointSecurityFooterCta } from './endpoint-security/EndpointSecurityFooterCta';
import { EndpointSecurityDocsSupport } from './endpoint-security/EndpointSecurityDocsSupport';
import { EndpointSecurityRelatedProducts } from './endpoint-security/EndpointSecurityRelatedProducts';
import { EndpointSecurityQuoteModal } from './endpoint-security/EndpointSecurityQuoteModal';

interface EndpointSecurityDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const EndpointSecurityDetailPage: React.FC<EndpointSecurityDetailPageProps> = ({
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
      id="service-detail-viettel-endpoint-security" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-033"
      data-vidc-pillar="security"
    >
      {/* SECTION 0: HERO SECTION (Mở đầu & Định vị giá trị) */}
      <EndpointSecurityHero
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Khách hàng đăng ký dùng thử Viettel Endpoint Security')}
        onNavigateHome={onNavigateHome}
      />

      {/* STICKY NAVIGATION BAR (Thanh điều hướng cố định) */}
      <EndpointSecurityStickyNav
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký dùng thử dịch vụ')}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng #FFFFFF) */}
      <EndpointSecurityOverview currentMarket={currentMarket} />

      {/* SECTION 2: BẢNG GIÁ & GÓI CƯỚC DỊCH VỤ (#pricing - Nền Xám #F4F4F4) */}
      <EndpointSecurityPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features - Nền Trắng #FFFFFF) */}
      <EndpointSecurityCapabilities currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám #F4F4F4) */}
      <EndpointSecurityBenefits currentMarket={currentMarket} />

      {/* SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng #FFFFFF) */}
      <EndpointSecurityUseCases 
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám #F4F4F4) */}
      <EndpointSecurityFaq currentMarket={currentMarket} />

      {/* SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (Bottom CTA) */}
      <EndpointSecurityFooterCta
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký tư vấn và dùng thử Viettel Endpoint Security')}
      />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Trắng #FFFFFF) */}
      <EndpointSecurityDocsSupport 
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 9: HỆ SINH THÁI GIẢI PHÁP AN TOÀN BỔ TRỢ (#related-products - Nền Xám #F4F4F4) */}
      <EndpointSecurityRelatedProducts
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* Quote & Free Trial Lead Modal */}
      <EndpointSecurityQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        customNotes={customNotes}
        currentMarket={currentMarket}
      />
    </div>
  );
};
