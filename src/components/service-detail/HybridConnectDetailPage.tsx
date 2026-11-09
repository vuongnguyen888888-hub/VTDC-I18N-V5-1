import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { HybridConnectHero } from './hybrid-connect/HybridConnectHero';
import { HybridConnectStickyNav } from './hybrid-connect/HybridConnectStickyNav';
import { HybridConnectOverview } from './hybrid-connect/HybridConnectOverview';
import { HybridConnectPricing } from './hybrid-connect/HybridConnectPricing';
import { HybridConnectCapabilities } from './hybrid-connect/HybridConnectCapabilities';
import { HybridConnectBenefits } from './hybrid-connect/HybridConnectBenefits';
import { HybridConnectUseCases } from './hybrid-connect/HybridConnectUseCases';
import { HybridConnectFaq } from './hybrid-connect/HybridConnectFaq';
import { HybridConnectFooterCta } from './hybrid-connect/HybridConnectFooterCta';
import { HybridConnectDocsSupport } from './hybrid-connect/HybridConnectDocsSupport';
import { HybridConnectRelatedProducts } from './hybrid-connect/HybridConnectRelatedProducts';
import { HybridConnectQuoteModal } from './hybrid-connect/HybridConnectQuoteModal';

interface HybridConnectDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const HybridConnectDetailPage: React.FC<HybridConnectDetailPageProps> = ({
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
      id="service-detail-viettel-hybrid-connect" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-027"
      data-vidc-pillar="networking"
    >
      {/* SECTION 0: HERO SECTION */}
      <HybridConnectHero
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký tư vấn kỹ thuật dịch vụ Viettel Hybrid Connect')}
        onNavigateHome={onNavigateHome}
      />

      {/* STICKY SECTION NAV (Chuẩn hóa theo CloudServerStickyNav) */}
      <HybridConnectStickyNav
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký tư vấn dịch vụ Viettel Hybrid Connect')}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <HybridConnectOverview currentMarket={currentMarket} />

      {/* SECTION 2: CÁC MÔ HÌNH KẾT NỐI & TÙY CHỌN DỊCH VỤ (#pricing) */}
      <HybridConnectPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features) */}
      <HybridConnectCapabilities currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits) */}
      <HybridConnectBenefits currentMarket={currentMarket} />

      {/* SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <HybridConnectUseCases currentMarket={currentMarket} />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <HybridConnectFaq currentMarket={currentMarket} />

      {/* SECTION 7: KHỐI CHỐT CHUYỂN ĐỔI CHÍNH (Nền Đỏ thương hiệu var(--vidc-color-brand-red)) */}
      <HybridConnectFooterCta
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký nhận tư vấn kết nối ngay')}
      />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support) */}
      <HybridConnectDocsSupport
        currentMarket={currentMarket}
      />

      {/* SECTION 9: HỆ SINH THÁI SẢN PHẨM LIÊN QUAN */}
      <HybridConnectRelatedProducts
        currentMarket={currentMarket}
      />

      {/* Modal Đăng Ký Tư Vấn & Khảo Sát */}
      <HybridConnectQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        currentMarket={currentMarket}
        customNotes={customNotes}
      />
    </div>
  );
};
