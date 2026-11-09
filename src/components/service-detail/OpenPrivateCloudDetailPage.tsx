import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { OpenPrivateCloudHero } from './open-private-cloud/OpenPrivateCloudHero';
import { CloudServerStickyNav } from './CloudServerStickyNav';
import { OpenPrivateCloudOverview } from './open-private-cloud/OpenPrivateCloudOverview';
import { OpenPrivateCloudEstimator, EstimatorConfig } from './open-private-cloud/OpenPrivateCloudEstimator';
import { OpenPrivateCloudCapabilities } from './open-private-cloud/OpenPrivateCloudCapabilities';
import { OpenPrivateCloudBenefits } from './open-private-cloud/OpenPrivateCloudBenefits';
import { OpenPrivateCloudUseCases } from './open-private-cloud/OpenPrivateCloudUseCases';
import { OpenPrivateCloudFaq } from './open-private-cloud/OpenPrivateCloudFaq';
import { OpenPrivateCloudFooterCta } from './open-private-cloud/OpenPrivateCloudFooterCta';
import { OpenPrivateCloudDocsSupport } from './open-private-cloud/OpenPrivateCloudDocsSupport';
import { OpenPrivateCloudRelatedProducts } from './open-private-cloud/OpenPrivateCloudRelatedProducts';
import { CloudServerQuoteModal } from './CloudServerQuoteModal';

interface OpenPrivateCloudDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
}

export const OpenPrivateCloudDetailPage: React.FC<OpenPrivateCloudDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState<EstimatorConfig | null>({
    vcpu: 16,
    ram: 64,
    storage: 600,
    ipCount: 2,
    bandwidthMbps: 500,
    osType: 'linux',
    billingCycleMonths: 1,
    packageName: 'OPC-NODE 02',
  });
  const [estimatedTotal, setEstimatedTotal] = useState<number>(7900000);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenQuoteWithConfig = (config: EstimatorConfig, total: number, currency: string) => {
    setSelectedConfig(config);
    setEstimatedTotal(total);
    setIsQuoteModalOpen(true);
  };

  const handleOpenGeneralQuote = () => {
    setIsQuoteModalOpen(true);
  };

  return (
    <div 
      id="service-detail-viettel-open-private-cloud" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-004"
      data-vidc-pillar="compute"
    >
      {/* SECTION 0: HERO SECTION */}
      <OpenPrivateCloudHero
        currentMarket={currentMarket}
        onOpenQuote={handleOpenGeneralQuote}
        onNavigateHome={onNavigateHome}
      />

      {/* STICKY NAVIGATION BAR */}
      <CloudServerStickyNav brandLabel="Viettel Open Private Cloud" />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng) */}
      <OpenPrivateCloudOverview />

      {/* SECTION 2: BẢNG GIÁ & DỰ TOÁN CHI PHÍ (#pricing - Nền Xám) */}
      <OpenPrivateCloudEstimator
        currentMarket={currentMarket}
        onSelectConfigForQuote={handleOpenQuoteWithConfig}
      />

      {/* SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features - Nền Trắng) */}
      <OpenPrivateCloudCapabilities />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám) */}
      <OpenPrivateCloudBenefits />

      {/* SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng) */}
      <OpenPrivateCloudUseCases />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám) */}
      <OpenPrivateCloudFaq />

      {/* SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (Conversion Bottom CTA - Nền Đỏ) */}
      <OpenPrivateCloudFooterCta onOpenQuote={handleOpenGeneralQuote} />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám) */}
      <OpenPrivateCloudDocsSupport />

      {/* SECTION 9: HỆ SINH THÁI SẢN PHẨM LIÊN QUAN (Nền Trắng) */}
      <OpenPrivateCloudRelatedProducts />

      {/* Lead / Quote Registration Modal */}
      <CloudServerQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedConfig={selectedConfig}
        estimatedTotal={estimatedTotal}
        currency={currentMarket.currency}
        currentMarket={currentMarket}
      />
    </div>
  );
};
