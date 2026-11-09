import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { CloudBackupHero } from './cloud-backup/CloudBackupHero';
import { CloudBackupStickyNav } from './cloud-backup/CloudBackupStickyNav';
import { CloudBackupOverview } from './cloud-backup/CloudBackupOverview';
import { CloudBackupPricing } from './cloud-backup/CloudBackupPricing';
import { CloudBackupCapabilities } from './cloud-backup/CloudBackupCapabilities';
import { CloudBackupBenefits } from './cloud-backup/CloudBackupBenefits';
import { CloudBackupUseCases } from './cloud-backup/CloudBackupUseCases';
import { CloudBackupFaq } from './cloud-backup/CloudBackupFaq';
import { CloudBackupFooterCta } from './cloud-backup/CloudBackupFooterCta';
import { CloudBackupDocsSupport } from './cloud-backup/CloudBackupDocsSupport';
import { CloudBackupRelatedProducts } from './cloud-backup/CloudBackupRelatedProducts';
import { CloudBackupQuoteModal } from './cloud-backup/CloudBackupQuoteModal';

interface CloudBackupDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const CloudBackupDetailPage: React.FC<CloudBackupDetailPageProps> = ({
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
      id="service-detail-viettel-cloud-backup" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-016"
      data-vidc-pillar="storage"
    >
      {/* 🟢 SECTION 0: HERO SECTION (Mở đầu & Định vị giá trị) */}
      <CloudBackupHero
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
        onNavigateHome={onNavigateHome}
      />

      {/* 📌 STICKY NAVIGATION BAR (Thanh điều hướng cố định) */}
      <CloudBackupStickyNav 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* ⚪ SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng) */}
      <CloudBackupOverview currentMarket={currentMarket} />

      {/* 🔘 SECTION 2: BẢNG GIÁ & DỰ TOÁN CHI PHÍ (#pricing - Nền Xám) */}
      <CloudBackupPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* ⚪ SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features - Nền Trắng) */}
      <CloudBackupCapabilities currentMarket={currentMarket} />

      {/* 🔘 SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám) */}
      <CloudBackupBenefits currentMarket={currentMarket} />

      {/* ⚪ SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng) */}
      <CloudBackupUseCases 
        currentMarket={currentMarket}
        onOpenConsult={(notes) => handleOpenConsultModal(notes)}
      />

      {/* 🔘 SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám) */}
      <CloudBackupFaq 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* 🔴 SECTION 7: KHỐI CHỐT CHUYỂN ĐỔI CHÍNH (Nền Đỏ Thương Hiệu var(--vidc-color-brand-red)) */}
      <CloudBackupFooterCta 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* 🔘 SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám) */}
      <CloudBackupDocsSupport 
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal()}
      />

      {/* ⚪ SECTION 9: HỆ SINH THÁI DỊCH VỤ TÍCH HỢP (#related-products - Nền Trắng) */}
      <CloudBackupRelatedProducts 
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* 💬 POPUP / MODAL ĐĂNG KÝ TƯ VẤN & BÁO GIÁ */}
      <CloudBackupQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        customNotes={customNotes}
        currentMarket={currentMarket}
      />
    </div>
  );
};
