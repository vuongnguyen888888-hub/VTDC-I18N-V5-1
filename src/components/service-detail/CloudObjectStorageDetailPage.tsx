import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { CloudObjectStorageHero } from './cloud-object-storage/CloudObjectStorageHero';
import { CloudObjectStorageStickyNav } from './cloud-object-storage/CloudObjectStorageStickyNav';
import { CloudObjectStorageOverview } from './cloud-object-storage/CloudObjectStorageOverview';
import { CloudObjectStoragePricing } from './cloud-object-storage/CloudObjectStoragePricing';
import { CloudObjectStorageCapabilities } from './cloud-object-storage/CloudObjectStorageCapabilities';
import { CloudObjectStorageBenefits } from './cloud-object-storage/CloudObjectStorageBenefits';
import { CloudObjectStorageUseCases } from './cloud-object-storage/CloudObjectStorageUseCases';
import { CloudObjectStorageFaq } from './cloud-object-storage/CloudObjectStorageFaq';
import { CloudObjectStorageFooterCta } from './cloud-object-storage/CloudObjectStorageFooterCta';
import { CloudObjectStorageDocsSupport } from './cloud-object-storage/CloudObjectStorageDocsSupport';
import { CloudObjectStorageRelatedProducts } from './cloud-object-storage/CloudObjectStorageRelatedProducts';
import { CloudObjectStorageQuoteModal } from './cloud-object-storage/CloudObjectStorageQuoteModal';

interface CloudObjectStorageDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const CloudObjectStorageDetailPage: React.FC<CloudObjectStorageDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigateService,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState<{
    tier: string;
    capacityGB: number;
    multiAz: boolean;
  }>({
    tier: 'gold',
    capacityGB: 500,
    multiAz: false,
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenConsultModal = (details?: { tier: string; capacityGB: number; multiAz: boolean }) => {
    if (details) {
      setQuoteDetails(details);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <div 
      id="service-detail-viettel-cloud-object-storage" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-013"
      data-vidc-pillar="storage"
    >
      {/* 🟢 SECTION 0: HERO SECTION (Mở đầu & Định vị giá trị) */}
      <CloudObjectStorageHero
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
        onNavigateHome={onNavigateHome}
      />

      {/* 📌 STICKY NAVIGATION BAR (Thanh điều hướng cố định) */}
      <CloudObjectStorageStickyNav 
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenConsultModal()}
      />

      {/* ⚪ SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng) */}
      <CloudObjectStorageOverview currentMarket={currentMarket} />

      {/* 🔘 SECTION 2: BẢNG GIÁ & DỰ TOÁN CHI PHÍ (#pricing - Nền Xám) */}
      <CloudObjectStoragePricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* ⚪ SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features - Nền Trắng) */}
      <CloudObjectStorageCapabilities currentMarket={currentMarket} />

      {/* 🔘 SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám) */}
      <CloudObjectStorageBenefits currentMarket={currentMarket} />

      {/* ⚪ SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng) */}
      <CloudObjectStorageUseCases 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* 🔘 SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám) */}
      <CloudObjectStorageFaq currentMarket={currentMarket} />

      {/* 🔴 SECTION 7: KHỐI CHỐT CHUYỂN ĐỔI CHÍNH (Nền Đỏ / Gradient) */}
      <CloudObjectStorageFooterCta 
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenConsultModal()}
      />

      {/* 🔘 SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám) */}
      <CloudObjectStorageDocsSupport currentMarket={currentMarket} />

      {/* ⚪ SECTION 9: HỆ SINH THÁI DỊCH VỤ TÍCH HỢP (#related-products - Nền Trắng) */}
      <CloudObjectStorageRelatedProducts currentMarket={currentMarket} />

      {/* 💬 POPUP / MODAL ĐĂNG KÝ TƯ VẤN & BÁO GIÁ */}
      <CloudObjectStorageQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedTier={quoteDetails.tier}
        capacityGB={quoteDetails.capacityGB}
        multiAz={quoteDetails.multiAz}
        currentMarket={currentMarket}
      />
    </div>
  );
};
