import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { CloudNPUHero } from './cloud-npu/CloudNPUHero';
import { CloudNPUStickyNav } from './cloud-npu/CloudNPUStickyNav';
import { CloudNPUOverview } from './cloud-npu/CloudNPUOverview';
import { CloudNPUPricing, NPUConfigItem } from './cloud-npu/CloudNPUPricing';
import { CloudNPUCapabilities } from './cloud-npu/CloudNPUCapabilities';
import { CloudNPUBenefits } from './cloud-npu/CloudNPUBenefits';
import { CloudNPUUseCases } from './cloud-npu/CloudNPUUseCases';
import { CloudNPUFaq } from './cloud-npu/CloudNPUFaq';
import { CloudNPUFooterCta } from './cloud-npu/CloudNPUFooterCta';
import { CloudNPUDocsSupport } from './cloud-npu/CloudNPUDocsSupport';
import { CloudNPURelatedProducts } from './cloud-npu/CloudNPURelatedProducts';
import { CloudNPUQuoteModal } from './cloud-npu/CloudNPUQuoteModal';

interface CloudNPUDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const CloudNPUDetailPage: React.FC<CloudNPUDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigateService,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState<NPUConfigItem | null>({
    id: 'vcnpu-16',
    name: 'VCNPU16',
    vCpu: '16 vCPU',
    npuCard: '1 Card NPU Qualcomm AI100 Ultra',
    ram: '32 GB RAM ECC',
    ssd: '500 GB SSD Enterprise',
    bandwidth: '300 Mbps',
    ipPublic: '1 IP Public',
    priceMonthly: '21.000.000',
    priceMonthVnd: 21000000,
    badge: '★ PHỔ BIẾN NHẤT',
    recommended: true,
    dataCenters: ['TTDL Hòa Lạc', 'TTDL Hoàng Hoa Thám', 'TTDL Bình Dương'],
  });
  const [selectedDc, setSelectedDc] = useState<string>('TTDL Hòa Lạc');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenQuoteWithConfig = (config: NPUConfigItem, location: string) => {
    setSelectedConfig(config);
    setSelectedDc(location);
    setIsQuoteModalOpen(true);
  };

  const handleOpenGeneralQuote = () => {
    setIsQuoteModalOpen(true);
  };

  return (
    <div 
      id="service-detail-viettel-cloud-npu" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-009"
      data-vidc-pillar="compute"
    >
      {/* SECTION 0: HERO SECTION */}
      <CloudNPUHero
        currentMarket={currentMarket}
        onOpenQuote={handleOpenGeneralQuote}
        onNavigateHome={onNavigateHome}
      />

      {/* STICKY NAVIGATION BAR (7 Anchor Links) */}
      <CloudNPUStickyNav 
        currentMarket={currentMarket} 
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <CloudNPUOverview
        currentMarket={currentMarket}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing) */}
      <CloudNPUPricing
        currentMarket={currentMarket}
        onSelectConfigForQuote={handleOpenQuoteWithConfig}
      />

      {/* SECTION 3: LỢI ÍCH DOANH NGHIỆP & ƯU THẾ (#benefits) */}
      <CloudNPUBenefits currentMarket={currentMarket} />

      {/* SECTION 4: THÔNG SỐ KỸ THUẬT & TÍNH NĂNG VƯỢT TRỘI (#specs) */}
      <CloudNPUCapabilities currentMarket={currentMarket} />

      {/* SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#usecases) */}
      <CloudNPUUseCases currentMarket={currentMarket} />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <CloudNPUFaq currentMarket={currentMarket} />

      {/* SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (Bottom CTA Nền Đỏ var(--vidc-color-brand-red)) */}
      <CloudNPUFooterCta
        onOpenQuote={handleOpenGeneralQuote}
        currentMarket={currentMarket}
      />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs) */}
      <CloudNPUDocsSupport
        currentMarket={currentMarket}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* SECTION 9: HỆ SINH THÁI SẢN PHẨM LIÊN QUAN */}
      <CloudNPURelatedProducts 
        currentMarket={currentMarket} 
        onNavigateService={onNavigateService}
      />

      {/* Lead / Quote Registration Modal */}
      <CloudNPUQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedConfig={selectedConfig}
        selectedDc={selectedDc}
        currentMarket={currentMarket}
      />
    </div>
  );
};
