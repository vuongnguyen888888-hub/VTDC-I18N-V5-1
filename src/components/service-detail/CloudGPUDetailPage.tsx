import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { CloudGPUHero } from './cloud-gpu/CloudGPUHero';
import { CloudGPUStickyNav } from './cloud-gpu/CloudGPUStickyNav';
import { CloudGPUOverview } from './cloud-gpu/CloudGPUOverview';
import { CloudGPUPricing, GPUConfigItem } from './cloud-gpu/CloudGPUPricing';
import { CloudGPUCapabilities } from './cloud-gpu/CloudGPUCapabilities';
import { CloudGPUBenefits } from './cloud-gpu/CloudGPUBenefits';
import { CloudGPUUseCases } from './cloud-gpu/CloudGPUUseCases';
import { CloudGPUFaq } from './cloud-gpu/CloudGPUFaq';
import { CloudGPUFooterCta } from './cloud-gpu/CloudGPUFooterCta';
import { CloudGPUDocsSupport } from './cloud-gpu/CloudGPUDocsSupport';
import { CloudGPURelatedProducts } from './cloud-gpu/CloudGPURelatedProducts';
import { CloudGPUQuoteModal } from './cloud-gpu/CloudGPUQuoteModal';

interface CloudGPUDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
}

export const CloudGPUDetailPage: React.FC<CloudGPUDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState<GPUConfigItem | null>(null);
  const [selectedDc, setSelectedDc] = useState<string>('Hòa Lạc');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenQuoteWithConfig = (config: GPUConfigItem, location: string) => {
    setSelectedConfig(config);
    setSelectedDc(location);
    setIsQuoteModalOpen(true);
  };

  const handleOpenGeneralQuote = () => {
    setIsQuoteModalOpen(true);
  };

  return (
    <div 
      id="service-detail-viettel-cloud-gpu" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-008"
      data-vidc-pillar="compute"
    >
      {/* SECTION 0: HERO SECTION */}
      <CloudGPUHero
        currentMarket={currentMarket}
        onOpenQuote={handleOpenGeneralQuote}
        onNavigateHome={onNavigateHome}
      />

      {/* Sticky Section Nav */}
      <CloudGPUStickyNav 
        currentMarket={currentMarket} 
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <CloudGPUOverview
        currentMarket={currentMarket}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing) */}
      <CloudGPUPricing
        currentMarket={currentMarket}
        onSelectConfigForQuote={handleOpenQuoteWithConfig}
      />

      {/* SECTION 3: TÍNH NĂNG NỔI BẬT & ĐẶC TẢ KỸ THUẬT (#features) */}
      <CloudGPUCapabilities currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits) */}
      <CloudGPUBenefits currentMarket={currentMarket} />

      {/* SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <CloudGPUUseCases
        currentMarket={currentMarket}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <CloudGPUFaq currentMarket={currentMarket} />

      {/* SECTION 7: CTA KÊU GỌI HÀNH ĐỘNG (Nền Đỏ thương hiệu) */}
      <CloudGPUFooterCta
        onOpenQuote={handleOpenGeneralQuote}
        currentMarket={currentMarket}
      />

      {/* SECTION 8: TÀI LIỆU & HỖ TRỢ (#docs-support) */}
      <CloudGPUDocsSupport
        currentMarket={currentMarket}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* SECTION 9: SẢN PHẨM LIÊN QUAN */}
      <CloudGPURelatedProducts currentMarket={currentMarket} />

      {/* Lead / Quote Registration Modal */}
      <CloudGPUQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedConfig={selectedConfig}
        selectedDc={selectedDc}
        currentMarket={currentMarket}
      />
    </div>
  );
};
