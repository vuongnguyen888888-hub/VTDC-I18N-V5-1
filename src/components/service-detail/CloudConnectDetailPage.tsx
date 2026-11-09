import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { CloudConnectHero } from './cloud-connect/CloudConnectHero';
import { CloudConnectStickyNav } from './cloud-connect/CloudConnectStickyNav';
import { CloudConnectOverview } from './cloud-connect/CloudConnectOverview';
import { CloudConnectPricing } from './cloud-connect/CloudConnectPricing';
import { CloudConnectCapabilities } from './cloud-connect/CloudConnectCapabilities';
import { CloudConnectBenefits } from './cloud-connect/CloudConnectBenefits';
import { CloudConnectUseCases } from './cloud-connect/CloudConnectUseCases';
import { CloudConnectFaq } from './cloud-connect/CloudConnectFaq';
import { CloudConnectFooterCta } from './cloud-connect/CloudConnectFooterCta';
import { CloudConnectDocsSupport } from './cloud-connect/CloudConnectDocsSupport';
import { CloudConnectRelatedProducts } from './cloud-connect/CloudConnectRelatedProducts';
import { CloudConnectQuoteModal } from './cloud-connect/CloudConnectQuoteModal';

interface CloudConnectDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const CloudConnectDetailPage: React.FC<CloudConnectDetailPageProps> = ({
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
      id="service-detail-viettel-cloud-connect" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-025"
      data-vidc-pillar="networking"
    >
      {/* SECTION 0: HERO SECTION */}
      <CloudConnectHero
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký tư vấn kỹ thuật dịch vụ Viettel Cloud Connect')}
        onNavigateHome={onNavigateHome}
      />

      {/* STICKY SECTION NAV (Chuẩn hóa theo CloudServerStickyNav) */}
      <CloudConnectStickyNav
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký tư vấn dịch vụ Cloud Connect')}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <CloudConnectOverview currentMarket={currentMarket} />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing) */}
      <CloudConnectPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features) */}
      <CloudConnectCapabilities currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits) */}
      <CloudConnectBenefits currentMarket={currentMarket} />

      {/* SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <CloudConnectUseCases
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <CloudConnectFaq currentMarket={currentMarket} />

      {/* SECTION 7: KHỐI CHỐT CHUYỂN ĐỔI CHÍNH (Nền Đỏ thương hiệu var(--vidc-color-brand-red)) */}
      <CloudConnectFooterCta
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký nhận tư vấn kết nối ngay')}
      />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support) */}
      <CloudConnectDocsSupport
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Yêu cầu hỗ trợ & tài liệu Cloud Connect')}
      />

      {/* SECTION 9: HỆ SINH THÁI SẢN PHẨM LIÊN QUAN */}
      <CloudConnectRelatedProducts
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* Modal Đăng Ký Tư Vấn & Khảo Sát */}
      <CloudConnectQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        currentMarket={currentMarket}
        customNotes={customNotes}
      />
    </div>
  );
};
