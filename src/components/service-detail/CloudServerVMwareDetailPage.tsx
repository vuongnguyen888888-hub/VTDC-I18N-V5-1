import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { CloudServerVMwareHero } from './vmware/CloudServerVMwareHero';
import { CloudServerStickyNav } from './CloudServerStickyNav';
import { CloudServerVMwareOverview } from './vmware/CloudServerVMwareOverview';
import { CloudServerVMwareEstimator, EstimatorConfig } from './vmware/CloudServerVMwareEstimator';
import { CloudServerVMwareCapabilities } from './vmware/CloudServerVMwareCapabilities';
import { CloudServerVMwareBenefits } from './vmware/CloudServerVMwareBenefits';
import { CloudServerVMwareUseCases } from './vmware/CloudServerVMwareUseCases';
import { CloudServerVMwareFaq } from './vmware/CloudServerVMwareFaq';
import { CloudServerVMwareFooterCta } from './vmware/CloudServerVMwareFooterCta';
import { CloudServerVMwareDocsSupport } from './vmware/CloudServerVMwareDocsSupport';
import { CloudServerVMwareRelatedProducts } from './vmware/CloudServerVMwareRelatedProducts';
import { CloudServerQuoteModal } from './CloudServerQuoteModal';

interface CloudServerVMwareDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
}

export const CloudServerVMwareDetailPage: React.FC<CloudServerVMwareDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState<EstimatorConfig | null>({
    vcpu: 4,
    ram: 8,
    storage: 80,
    ipCount: 1,
    bandwidthMbps: 300,
    osType: 'linux',
    billingCycleMonths: 1,
    packageName: 'T2.GEN 02',
  });
  const [estimatedTotal, setEstimatedTotal] = useState<number>(1600000);

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
      id="service-detail-viettel-cloud-server-vmware" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-001B"
      data-vidc-pillar="compute"
    >
      {/* SECTION 0: HERO SECTION */}
      <CloudServerVMwareHero
        currentMarket={currentMarket}
        onOpenQuote={handleOpenGeneralQuote}
        onNavigateHome={onNavigateHome}
      />

      {/* STICKY NAVIGATION BAR */}
      <CloudServerStickyNav />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng) */}
      <CloudServerVMwareOverview />

      {/* SECTION 2: BẢNG GIÁ & DỰ TOÁN CHI PHÍ (#pricing - Nền Xám) */}
      <CloudServerVMwareEstimator
        currentMarket={currentMarket}
        onSelectConfigForQuote={handleOpenQuoteWithConfig}
      />

      {/* SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features - Nền Trắng) */}
      <CloudServerVMwareCapabilities />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám) */}
      <CloudServerVMwareBenefits />

      {/* SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng) */}
      <CloudServerVMwareUseCases />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám) */}
      <CloudServerVMwareFaq />

      {/* SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (Conversion Bottom CTA - Nền Đỏ var(--vidc-color-brand-red)) */}
      <CloudServerVMwareFooterCta onOpenQuote={handleOpenGeneralQuote} />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám) */}
      <CloudServerVMwareDocsSupport />

      {/* SECTION 9: HỆ SINH THÁI SẢN PHẨM LIÊN QUAN (Nền Trắng) */}
      <CloudServerVMwareRelatedProducts />

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
