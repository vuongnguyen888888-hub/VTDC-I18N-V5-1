import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { AntiDdosHero } from './anti-ddos/AntiDdosHero';
import { AntiDdosStickyNav } from './anti-ddos/AntiDdosStickyNav';
import { AntiDdosOverview } from './anti-ddos/AntiDdosOverview';
import { AntiDdosPricing } from './anti-ddos/AntiDdosPricing';
import { AntiDdosCapabilities } from './anti-ddos/AntiDdosCapabilities';
import { AntiDdosBenefits } from './anti-ddos/AntiDdosBenefits';
import { AntiDdosUseCases } from './anti-ddos/AntiDdosUseCases';
import { AntiDdosFaq } from './anti-ddos/AntiDdosFaq';
import { AntiDdosFooterCta } from './anti-ddos/AntiDdosFooterCta';
import { AntiDdosDocsSupport } from './anti-ddos/AntiDdosDocsSupport';
import { AntiDdosRelatedProducts } from './anti-ddos/AntiDdosRelatedProducts';
import { AntiDdosQuoteModal } from './anti-ddos/AntiDdosQuoteModal';

interface AntiDdosDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const AntiDdosDetailPage: React.FC<AntiDdosDetailPageProps> = ({
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
      id="service-detail-viettel-anti-ddos" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-032"
      data-vidc-pillar="security"
    >
      {/* SECTION 0: HERO SECTION (Mở đầu & Định vị giá trị) */}
      <AntiDdosHero
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Khách hàng đăng ký dùng thử dịch vụ Viettel Anti-DDoS')}
        onNavigateHome={onNavigateHome}
      />

      {/* STICKY NAVIGATION BAR (Thanh điều hướng cố định) */}
      <AntiDdosStickyNav
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký dùng thử dịch vụ')}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng #FFFFFF) */}
      <AntiDdosOverview currentMarket={currentMarket} />

      {/* SECTION 2: BẢNG GIÁ & GÓI CƯỚC DỊCH VỤ (#pricing - Nền Xám #F4F4F4) */}
      <AntiDdosPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features - Nền Trắng #FFFFFF) */}
      <AntiDdosCapabilities currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám #F4F4F4) */}
      <AntiDdosBenefits currentMarket={currentMarket} />

      {/* SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#architecture / #use-cases - Nền Trắng #FFFFFF) */}
      <AntiDdosUseCases 
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám #F4F4F4) */}
      <AntiDdosFaq currentMarket={currentMarket} />

      {/* SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (Bottom CTA - Nền Đỏ var(--vidc-color-brand-red)) */}
      <AntiDdosFooterCta
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Tư vấn và trải nghiệm dùng thử')}
      />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám #F4F4F4) */}
      <AntiDdosDocsSupport 
        currentMarket={currentMarket}
        onOpenSupport={() => handleOpenConsultModal('Yêu cầu hỗ trợ kỹ thuật Anti-DDoS 24/7')}
      />

      {/* SECTION 9: HỆ SINH THÁI GIẢI PHÁP AN TOÀN BỔ TRỢ (Nền Trắng #FFFFFF) */}
      <AntiDdosRelatedProducts
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* Quote & Free Trial Lead Modal */}
      <AntiDdosQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        customNotes={customNotes}
        currentMarket={currentMarket}
      />
    </div>
  );
};
