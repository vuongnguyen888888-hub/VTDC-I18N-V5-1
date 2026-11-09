import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { VKSHero } from './vks/VKSHero';
import { VKSStickyNav } from './vks/VKSStickyNav';
import { VKSOverview } from './vks/VKSOverview';
import { VKSPricing } from './vks/VKSPricing';
import { VKSFeatures } from './vks/VKSFeatures';
import { VKSBenefits } from './vks/VKSBenefits';
import { VKSUseCases } from './vks/VKSUseCases';
import { VKSFaq } from './vks/VKSFaq';
import { VKSFooterCta } from './vks/VKSFooterCta';
import { VKSDocsSupport } from './vks/VKSDocsSupport';
import { VKSEcosystem } from './vks/VKSEcosystem';
import { VKSQuoteModal } from './vks/VKSQuoteModal';

interface KubernetesServiceDetailPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigateService?: (path: string) => void;
}

/**
 * Viettel Kubernetes Service (vKS) Detail Page
 * Standardized in exact accordance with Design System TDV-01
 * Mirroring the UI pattern of /services/compute/cloud-server/
 */
export const KubernetesServiceDetailPage: React.FC<KubernetesServiceDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigateService,
}) => {
  const { currentLanguage } = useLanguage();
  const isVietnamese = currentLanguage === 'vn' || currentLanguage === 'vi';
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [serviceContext, setServiceContext] = useState<string>('Viettel Kubernetes Service (vKS)');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Never overwrite the translated SEO title supplied by Next.js on non-VI routes.
    if (isVietnamese) document.title = 'Viettel Kubernetes Service (vKS) – Nền Tảng Đám Mây Tự Động Hóa Microservices | Viettel IDC';
  }, [isVietnamese]);

  const handleOpenQuote = (notes?: string) => {
    setServiceContext(notes || 'Viettel Kubernetes Service (vKS)');
    setIsQuoteModalOpen(true);
  };

  return (
    <div 
      id="service-detail-viettel-kubernetes-service" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-VKS-01"
      data-vidc-pillar="paas-containers"
    >
      {/* SECTION 0: HERO SECTION */}
      <VKSHero
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenQuote()}
        onNavigateHome={onNavigateHome}
        onNavigateService={onNavigateService}
      />

      {/* Sticky Section Nav */}
      <VKSStickyNav currentMarket={currentMarket} />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <VKSOverview 
        currentMarket={currentMarket} 
        onOpenConsult={() => handleOpenQuote('Tư vấn kiến trúc cụm vKS')}
      />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing) */}
      <VKSPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenQuote}
      />

      {/* SECTION 3: TÍNH NĂNG NỔI BẬT (#features) */}
      <VKSFeatures currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH CỐT LÕI (#benefits) */}
      <VKSBenefits currentMarket={currentMarket} />

      {/* SECTION 5: ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <VKSUseCases 
        currentMarket={currentMarket} 
        onOpenConsult={handleOpenQuote}
      />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <VKSFaq currentMarket={currentMarket} />

      {/* SECTION 7: CTA KÊU GỌI HÀNH ĐỘNG (Nền Đỏ thương hiệu V8) */}
      <VKSFooterCta 
        onOpenQuote={() => handleOpenQuote()} 
        currentMarket={currentMarket} 
      />

      {/* SECTION 8: TÀI LIỆU & HỖ TRỢ (#docs-support) */}
      <VKSDocsSupport currentMarket={currentMarket} />

      {/* SECTION 9: SẢN PHẨM LIÊN QUAN */}
      <VKSEcosystem 
        currentMarket={currentMarket} 
        onNavigateService={onNavigateService}
      />

      {/* Lead / Consultation Modal */}
      <VKSQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        serviceContext={serviceContext}
        currentMarket={currentMarket}
      />
    </div>
  );
};
