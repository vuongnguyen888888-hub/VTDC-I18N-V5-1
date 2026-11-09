import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { ManagedPrivateCloudHero } from './managed-private-cloud/ManagedPrivateCloudHero';
import { ManagedPrivateCloudStickyNav } from './managed-private-cloud/ManagedPrivateCloudStickyNav';
import { ManagedPrivateCloudOverview } from './managed-private-cloud/ManagedPrivateCloudOverview';
import { ManagedPrivateCloudEstimator, ManagedCloudConfig } from './managed-private-cloud/ManagedPrivateCloudEstimator';
import { ManagedPrivateCloudCapabilities } from './managed-private-cloud/ManagedPrivateCloudCapabilities';
import { ManagedPrivateCloudBenefits } from './managed-private-cloud/ManagedPrivateCloudBenefits';
import { ManagedPrivateCloudUseCases } from './managed-private-cloud/ManagedPrivateCloudUseCases';
import { ManagedPrivateCloudFaq } from './managed-private-cloud/ManagedPrivateCloudFaq';
import { ManagedPrivateCloudFooterCta } from './managed-private-cloud/ManagedPrivateCloudFooterCta';
import { ManagedPrivateCloudDocsSupport } from './managed-private-cloud/ManagedPrivateCloudDocsSupport';
import { ManagedPrivateCloudRelatedProducts } from './managed-private-cloud/ManagedPrivateCloudRelatedProducts';
import { ManagedPrivateCloudQuoteModal } from './managed-private-cloud/ManagedPrivateCloudQuoteModal';

interface ManagedPrivateCloudDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
}

export const ManagedPrivateCloudDetailPage: React.FC<ManagedPrivateCloudDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState<ManagedCloudConfig | null>({
    packageName: 'Gói Enterprise Managed (5 Nodes)',
    nodeCount: 5,
    cpuPerNode: '2x Intel® Xeon® Platinum 8400 (64 Cores/node)',
    ramPerNode: '512 GB ECC DDR5 / node (Tổng 2.5 TB)',
    storageRaw: '20 TB NVMe All-Flash Enterprise SAN (x3 Copies)',
    hypervisor: 'vmware',
    managementTier: 'premium',
    datacenter: 'Hòa Lạc (Hà Nội)',
    billingCycleMonths: 12,
  });
  const [estimatedTotal, setEstimatedTotal] = useState<number>(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenQuoteWithConfig = (config: ManagedCloudConfig, total: number, currency: string) => {
    setSelectedConfig(config);
    setEstimatedTotal(total);
    setIsQuoteModalOpen(true);
  };

  const handleOpenGeneralQuote = () => {
    setIsQuoteModalOpen(true);
  };

  return (
    <div 
      id="service-detail-viettel-managed-private-cloud" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-007"
      data-vidc-pillar="compute"
    >
      {/* SECTION 0: HERO SECTION */}
      <ManagedPrivateCloudHero
        currentMarket={currentMarket}
        onOpenQuote={handleOpenGeneralQuote}
        onNavigateHome={onNavigateHome}
      />

      {/* Sticky Section Nav */}
      <ManagedPrivateCloudStickyNav currentMarket={currentMarket} />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <ManagedPrivateCloudOverview
        currentMarket={currentMarket}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing) */}
      <ManagedPrivateCloudEstimator
        currentMarket={currentMarket}
        onSelectConfigForQuote={handleOpenQuoteWithConfig}
      />

      {/* SECTION 3: TÍNH NĂNG NỔI BẬT & ĐẶC TẢ KỸ THUẬT (#features) */}
      <ManagedPrivateCloudCapabilities currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH CỐT LÕI (#benefits) */}
      <ManagedPrivateCloudBenefits currentMarket={currentMarket} />

      {/* SECTION 5: ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <ManagedPrivateCloudUseCases
        currentMarket={currentMarket}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <ManagedPrivateCloudFaq currentMarket={currentMarket} />

      {/* SECTION 7: CTA KÊU GỌI HÀNH ĐỘNG (Nền Đỏ thương hiệu) */}
      <ManagedPrivateCloudFooterCta
        onOpenQuote={handleOpenGeneralQuote}
        currentMarket={currentMarket}
      />

      {/* SECTION 8: TÀI LIỆU & HỖ TRỢ (#docs-support) */}
      <ManagedPrivateCloudDocsSupport
        currentMarket={currentMarket}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* SECTION 9: SẢN PHẨM LIÊN QUAN */}
      <ManagedPrivateCloudRelatedProducts currentMarket={currentMarket} />

      {/* Lead / Quote Registration Modal */}
      <ManagedPrivateCloudQuoteModal
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
