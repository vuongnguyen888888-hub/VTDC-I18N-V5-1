import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { CloudServerHero } from './CloudServerHero';
import { CloudServerStickyNav } from './CloudServerStickyNav';
import { CloudServerOverview } from './CloudServerOverview';
import { CloudServerEstimator, EstimatorConfig } from './CloudServerEstimator';
import { CloudServerCapabilities } from './CloudServerCapabilities';
import { CloudServerBenefits } from './CloudServerBenefits';
import { CloudServerUseCases } from './CloudServerUseCases';
import { CloudServerFaq } from './CloudServerFaq';
import { CloudServerFooterCta } from './CloudServerFooterCta';
import { CloudServerDocsSupport } from './CloudServerDocsSupport';
import { CloudServerRelatedProducts } from './CloudServerRelatedProducts';
import { CloudServerQuoteModal } from './CloudServerQuoteModal';

interface CloudServerDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
}

export const CloudServerDetailPage: React.FC<CloudServerDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState<EstimatorConfig | null>({
    vcpu: 4,
    ram: 4,
    storage: 40,
    ipCount: 1,
    bandwidthMbps: 300,
    osType: 'linux',
    billingCycleMonths: 1,
  });
  const [estimatedTotal, setEstimatedTotal] = useState<number>(0);

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
      id="service-detail-viettel-cloud-server" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-001A"
      data-vidc-pillar="compute"
    >
      {/* SECTION 0: HERO SECTION */}
      <CloudServerHero
        currentMarket={currentMarket}
        onOpenQuote={handleOpenGeneralQuote}
        onNavigateHome={onNavigateHome}
      />

      {/* Sticky Section Nav */}
      <CloudServerStickyNav currentMarket={currentMarket} />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <CloudServerOverview currentMarket={currentMarket} />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing) */}
      <CloudServerEstimator
        currentMarket={currentMarket}
        onSelectConfigForQuote={handleOpenQuoteWithConfig}
      />

      {/* SECTION 3: TÍNH NĂNG NỔI BẬT (#features) */}
      <CloudServerCapabilities currentMarket={currentMarket} />

      {/* SECTION 4: ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <CloudServerUseCases currentMarket={currentMarket} onOpenQuote={handleOpenGeneralQuote} />

      {/* SECTION 5: LỢI ÍCH CỐT LÕI (#benefits) */}
      <CloudServerBenefits currentMarket={currentMarket} />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <CloudServerFaq currentMarket={currentMarket} />

      {/* SECTION 7: CTA KÊU GỌI HÀNH ĐỘNG (Nền Đỏ thương hiệu V8) */}
      <CloudServerFooterCta onOpenQuote={handleOpenGeneralQuote} currentMarket={currentMarket} />

      {/* SECTION 8: TÀI LIỆU & HỖ TRỢ (#docs-support) */}
      <CloudServerDocsSupport currentMarket={currentMarket} />

      {/* SECTION 9: SẢN PHẨM LIÊN QUAN */}
      <CloudServerRelatedProducts currentMarket={currentMarket} />

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
