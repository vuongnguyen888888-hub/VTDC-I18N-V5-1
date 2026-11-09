import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { CsmpHero } from './csmp/CsmpHero';
import { CsmpStickyNav } from './csmp/CsmpStickyNav';
import { CsmpOverview } from './csmp/CsmpOverview';
import { CsmpPricing } from './csmp/CsmpPricing';
import { CsmpFeatures } from './csmp/CsmpFeatures';
import { CsmpBenefits } from './csmp/CsmpBenefits';
import { CsmpUseCases } from './csmp/CsmpUseCases';
import { CsmpFaq } from './csmp/CsmpFaq';
import { CsmpFooterCta } from './csmp/CsmpFooterCta';
import { CsmpDocsSupport } from './csmp/CsmpDocsSupport';
import { CsmpRelatedProducts } from './csmp/CsmpRelatedProducts';
import { CsmpQuoteModal } from './csmp/CsmpQuoteModal';

interface CsmpDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const CsmpDetailPage: React.FC<CsmpDetailPageProps> = ({
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
      id="service-detail-viettel-csmp" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-039"
      data-vidc-pillar="security"
    >
      {/* SECTION 0: HERO SECTION (Mở đầu & Định vị giá trị) */}
      <CsmpHero
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
        onNavigateHome={onNavigateHome}
      />

      {/* STICKY NAVIGATION BAR (Thanh điều hướng cố định) */}
      <CsmpStickyNav
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký tư vấn chương trình Viettel CSMP')}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng #FFFFFF) */}
      <CsmpOverview currentMarket={currentMarket} />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing - Nền Xám #F4F4F4) */}
      <CsmpPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 3: NĂNG LỰC CỐT LÕI & CÁC TRỤ CỘT BẢO VỆ (#features - Nền Trắng #FFFFFF) */}
      <CsmpFeatures currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám #F4F4F4) */}
      <CsmpBenefits currentMarket={currentMarket} />

      {/* SECTION 5: ĐỐI TƯỢNG & KỊCH BẢN ÁP DỤNG (#use-cases - Nền Trắng #FFFFFF) */}
      <CsmpUseCases currentMarket={currentMarket} />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám #F4F4F4) */}
      <CsmpFaq currentMarket={currentMarket} />

      {/* SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (Bottom CTA - Nền Đỏ var(--vidc-color-brand-red)) */}
      <CsmpFooterCta
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký hội viên Viettel CSMP ngay')}
      />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám #F4F4F4) */}
      <CsmpDocsSupport
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Yêu cầu tài liệu & Trợ giúp Viettel CSMP')}
      />

      {/* SECTION 9: HỆ SINH THÁI SẢN PHẨM LIÊN QUAN (Nền Trắng #FFFFFF) */}
      <CsmpRelatedProducts
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* Consultation & Quote Modal */}
      <CsmpQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        currentMarket={currentMarket}
        initialNotes={customNotes}
      />
    </div>
  );
};
