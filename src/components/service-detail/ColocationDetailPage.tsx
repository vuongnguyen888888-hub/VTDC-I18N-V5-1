import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { ColocationHero } from './colocation/ColocationHero';
import { ColocationStickyNav } from './colocation/ColocationStickyNav';
import { ColocationOverview } from './colocation/ColocationOverview';
import { ColocationPricing, ColoPackageItem, DATA_CENTERS } from './colocation/ColocationPricing';
import { ColocationCapabilities } from './colocation/ColocationCapabilities';
import { ColocationBenefits } from './colocation/ColocationBenefits';
import { ColocationUseCases } from './colocation/ColocationUseCases';
import { ColocationFaq } from './colocation/ColocationFaq';
import { ColocationFooterCta } from './colocation/ColocationFooterCta';
import { ColocationDocsSupport } from './colocation/ColocationDocsSupport';
import { ColocationRelatedProducts } from './colocation/ColocationRelatedProducts';
import { ColocationQuoteModal } from './colocation/ColocationQuoteModal';

interface ColocationDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const ColocationDetailPage: React.FC<ColocationDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigateService,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<ColoPackageItem | null>(null);
  const [selectedDc, setSelectedDc] = useState<string>(DATA_CENTERS[0].name);
  const [selectedCycle, setSelectedCycle] = useState<number>(1);
  const [isCustomSurvey, setIsCustomSurvey] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenConsultModal = () => {
    setIsCustomSurvey(false);
    setSelectedPackage(null);
    setIsQuoteModalOpen(true);
  };

  const handleSelectPackageForQuote = (
    pkg: ColoPackageItem,
    location: string,
    cycle: number
  ) => {
    setSelectedPackage(pkg);
    setSelectedDc(location);
    setSelectedCycle(cycle);
    setIsCustomSurvey(false);
    setIsQuoteModalOpen(true);
  };

  const handleOpenCustomSurveyModal = () => {
    setIsCustomSurvey(true);
    setSelectedPackage(null);
    setIsQuoteModalOpen(true);
  };

  return (
    <div 
      id="service-detail-viettel-colocation" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-011"
      data-vidc-pillar="data-center"
    >
      {/* 🟢 SECTION 0: HERO SECTION (Mở đầu & Định vị giá trị) */}
      <ColocationHero
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
        onNavigateHome={onNavigateHome}
      />

      {/* 📌 STICKY NAVIGATION BAR (Thanh điều hướng cố định) */}
      <ColocationStickyNav 
        currentMarket={currentMarket}
        onOpenQuote={handleOpenConsultModal}
      />

      {/* ⚪ SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng) */}
      <ColocationOverview />

      {/* 🔘 SECTION 2: BẢNG GIÁ & DỰ TOÁN CHI PHÍ (#pricing - Nền Xám) */}
      <ColocationPricing
        currentMarket={currentMarket}
        onSelectPackageForQuote={handleSelectPackageForQuote}
        onOpenCustomSurvey={handleOpenCustomSurveyModal}
      />

      {/* ⚪ SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features - Nền Trắng) */}
      <ColocationCapabilities currentMarket={currentMarket} />

      {/* 🔘 SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám) */}
      <ColocationBenefits currentMarket={currentMarket} />

      {/* ⚪ SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng) */}
      <ColocationUseCases 
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* 🔘 SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Trắng / Minimal divider) */}
      <ColocationFaq 
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* 🔴 SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (Bottom CTA - Nền Gradient Đỏ thương hiệu V8) */}
      <ColocationFooterCta
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* 🔘 SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám) */}
      <ColocationDocsSupport currentMarket={currentMarket} />

      {/* ⚪ SECTION 9: HỆ SINH THÁI SẢN PHẨM LIÊN QUAN (Nền Trắng) */}
      <ColocationRelatedProducts
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* Modal Đăng Ký / Nhận Báo Giá / Khảo Sát Tùy Biến */}
      <ColocationQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedPackage={selectedPackage}
        selectedDc={selectedDc}
        selectedCycle={selectedCycle}
        isCustomSurvey={isCustomSurvey}
        currentMarket={currentMarket}
      />
    </div>
  );
};
