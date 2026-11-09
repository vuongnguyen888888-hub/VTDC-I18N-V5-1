import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { CloudFileStorageHero } from './cloud-file-storage/CloudFileStorageHero';
import { CloudFileStorageStickyNav } from './cloud-file-storage/CloudFileStorageStickyNav';
import { CloudFileStorageOverview } from './cloud-file-storage/CloudFileStorageOverview';
import { CloudFileStoragePricing } from './cloud-file-storage/CloudFileStoragePricing';
import { CloudFileStorageCapabilities } from './cloud-file-storage/CloudFileStorageCapabilities';
import { CloudFileStorageBenefits } from './cloud-file-storage/CloudFileStorageBenefits';
import { CloudFileStorageUseCases } from './cloud-file-storage/CloudFileStorageUseCases';
import { CloudFileStorageFaq } from './cloud-file-storage/CloudFileStorageFaq';
import { CloudFileStorageFooterCta } from './cloud-file-storage/CloudFileStorageFooterCta';
import { CloudFileStorageDocsSupport } from './cloud-file-storage/CloudFileStorageDocsSupport';
import { CloudFileStorageRelatedProducts } from './cloud-file-storage/CloudFileStorageRelatedProducts';
import { CloudFileStorageQuoteModal } from './cloud-file-storage/CloudFileStorageQuoteModal';

interface CloudFileStorageDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const CloudFileStorageDetailPage: React.FC<CloudFileStorageDetailPageProps> = ({
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
      id="service-detail-viettel-cloud-file-storage" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-014"
      data-vidc-pillar="storage"
    >
      {/* 🟢 SECTION 0: HERO SECTION (Mở đầu & Định vị giá trị) */}
      <CloudFileStorageHero
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
        onNavigateHome={onNavigateHome}
      />

      {/* 📌 STICKY NAVIGATION BAR (Thanh điều hướng cố định) */}
      <CloudFileStorageStickyNav 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* ⚪ SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng) */}
      <CloudFileStorageOverview currentMarket={currentMarket} />

      {/* 🔘 SECTION 2: BẢNG GIÁ & DỰ TOÁN CHI PHÍ (#pricing - Nền Xám) */}
      <CloudFileStoragePricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* ⚪ SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features - Nền Trắng) */}
      <CloudFileStorageCapabilities currentMarket={currentMarket} />

      {/* 🔘 SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám) */}
      <CloudFileStorageBenefits currentMarket={currentMarket} />

      {/* ⚪ SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng) */}
      <CloudFileStorageUseCases 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* 🔘 SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám) */}
      <CloudFileStorageFaq 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* 🔴 SECTION 7: KHỐI CHỐT CHUYỂN ĐỔI CHÍNH (Nền Đỏ Thương Hiệu var(--vidc-color-brand-red)) */}
      <CloudFileStorageFooterCta 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* 🔘 SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám) */}
      <CloudFileStorageDocsSupport 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* ⚪ SECTION 9: HỆ SINH THÁI DỊCH VỤ TÍCH HỢP (#related-products - Nền Trắng) */}
      <CloudFileStorageRelatedProducts 
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* 💬 POPUP / MODAL ĐĂNG KÝ TƯ VẤN & BÁO GIÁ */}
      <CloudFileStorageQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        customNotes={customNotes}
        currentMarket={currentMarket}
      />
    </div>
  );
};
