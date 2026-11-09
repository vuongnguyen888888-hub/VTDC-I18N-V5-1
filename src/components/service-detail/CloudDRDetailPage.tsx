import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { CloudDRHero } from './cloud-dr/CloudDRHero';
import { CloudDRStickyNav } from './cloud-dr/CloudDRStickyNav';
import { CloudDROverview } from './cloud-dr/CloudDROverview';
import { CloudDRPricing } from './cloud-dr/CloudDRPricing';
import { CloudDRCapabilities } from './cloud-dr/CloudDRCapabilities';
import { CloudDRBenefits } from './cloud-dr/CloudDRBenefits';
import { CloudDRUseCases } from './cloud-dr/CloudDRUseCases';
import { CloudDRFaq } from './cloud-dr/CloudDRFaq';
import { CloudDRFooterCta } from './cloud-dr/CloudDRFooterCta';
import { CloudDRDocsSupport } from './cloud-dr/CloudDRDocsSupport';
import { CloudDRRelatedProducts } from './cloud-dr/CloudDRRelatedProducts';
import { CloudDRQuoteModal } from './cloud-dr/CloudDRQuoteModal';

interface CloudDRDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const CloudDRDetailPage: React.FC<CloudDRDetailPageProps> = ({
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
      id="service-detail-viettel-cloud-dr" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-015"
      data-vidc-pillar="storage"
    >
      {/* 🟢 SECTION 0: HERO SECTION (Mở đầu & Định vị giá trị) */}
      <CloudDRHero
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
        onNavigateHome={onNavigateHome}
      />

      {/* 📌 STICKY NAVIGATION BAR (Thanh điều hướng cố định) */}
      <CloudDRStickyNav 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* ⚪ SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng) */}
      <CloudDROverview currentMarket={currentMarket} />

      {/* 🔘 SECTION 2: BẢNG GIÁ & DỰ TOÁN CHI PHÍ (#pricing - Nền Xám) */}
      <CloudDRPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* ⚪ SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features - Nền Trắng) */}
      <CloudDRCapabilities currentMarket={currentMarket} />

      {/* 🔘 SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám) */}
      <CloudDRBenefits currentMarket={currentMarket} />

      {/* ⚪ SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng) */}
      <CloudDRUseCases 
        currentMarket={currentMarket}
        onOpenConsult={(notes) => handleOpenConsultModal(notes)}
      />

      {/* 🔘 SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám) */}
      <CloudDRFaq 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* 🔴 SECTION 7: KHỐI CHỐT CHUYỂN ĐỔI CHÍNH (Nền Đỏ Thương Hiệu var(--vidc-color-brand-red)) */}
      <CloudDRFooterCta 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* 🔘 SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám) */}
      <CloudDRDocsSupport 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* ⚪ SECTION 9: HỆ SINH THÁI DỊCH VỤ TÍCH HỢP (Nền Trắng) */}
      <CloudDRRelatedProducts 
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* Quote / Consultation Modal */}
      <CloudDRQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        customNotes={customNotes}
        currentMarket={currentMarket}
      />
    </div>
  );
};
