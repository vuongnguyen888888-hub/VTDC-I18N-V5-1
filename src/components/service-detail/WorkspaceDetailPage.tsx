import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { WorkspaceHero } from './workspace/WorkspaceHero';
import { WorkspaceStickyNav } from './workspace/WorkspaceStickyNav';
import { WorkspaceOverview } from './workspace/WorkspaceOverview';
import { WorkspacePricing } from './workspace/WorkspacePricing';
import { WorkspaceCapabilities } from './workspace/WorkspaceCapabilities';
import { WorkspaceBenefits } from './workspace/WorkspaceBenefits';
import { WorkspaceUseCases } from './workspace/WorkspaceUseCases';
import { WorkspaceFaq } from './workspace/WorkspaceFaq';
import { WorkspaceFooterCta } from './workspace/WorkspaceFooterCta';
import { WorkspaceDocsSupport } from './workspace/WorkspaceDocsSupport';
import { WorkspaceRelatedProducts } from './workspace/WorkspaceRelatedProducts';
import { WorkspaceQuoteModal } from './workspace/WorkspaceQuoteModal';

interface WorkspaceDetailPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigateService?: (path: string) => void;
}

/**
 * Viettel Workspace Detail Page
 * Standardized in exact accordance with Design System TDV-01
 * Mirroring the UI pattern of /services/compute/cloud-server/
 */
export const WorkspaceDetailPage: React.FC<WorkspaceDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigateService,
}) => {
  const { currentLanguage } = useLanguage();
  const isVietnamese = currentLanguage === 'vn' || currentLanguage === 'vi';
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [serviceContext, setServiceContext] = useState<string>('Viettel Workspace');

  // Scroll to top on mount and set title
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Never overwrite the translated SEO title supplied by Next.js on non-VI routes.
    if (isVietnamese) document.title = 'Viettel Workspace – Nền Tảng Làm Việc Số Hợp Nhất & An Toàn Cho Doanh Nghiệp | Viettel IDC';
  }, [isVietnamese]);

  const handleOpenQuote = (notes?: string) => {
    setServiceContext(notes || 'Viettel Workspace');
    setIsQuoteModalOpen(true);
  };

  return (
    <div 
      id="service-detail-viettel-workspace" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-WS-01"
      data-vidc-pillar="digital-workplace"
    >
      {/* SECTION 0: HERO SECTION */}
      <WorkspaceHero
        currentMarket={currentMarket}
        onOpenQuote={() => handleOpenQuote('Tư vấn giải pháp Viettel Workspace')}
        onNavigateHome={onNavigateHome}
        onNavigateService={onNavigateService}
      />

      {/* Sticky Section Nav */}
      <WorkspaceStickyNav 
        currentMarket={currentMarket} 
        onOpenQuote={() => handleOpenQuote('Tư vấn báo giá Viettel Workspace')}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <WorkspaceOverview 
        currentMarket={currentMarket} 
        onOpenConsult={() => handleOpenQuote('Tư vấn kiến trúc giải pháp Viettel Workspace')}
      />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing) */}
      <WorkspacePricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenQuote}
      />

      {/* SECTION 3: TÍNH NĂNG NỔI BẬT & THÔNG SỐ (#features) */}
      <WorkspaceCapabilities currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH CỐT LÕI (#benefits) */}
      <WorkspaceBenefits currentMarket={currentMarket} />

      {/* SECTION 5: ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <WorkspaceUseCases 
        currentMarket={currentMarket} 
        onOpenConsult={handleOpenQuote}
      />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <WorkspaceFaq currentMarket={currentMarket} />

      {/* SECTION 7: CTA KÊU GỌI HÀNH ĐỘNG (Nền Đỏ thương hiệu V8) */}
      <WorkspaceFooterCta 
        onOpenQuote={() => handleOpenQuote('Đăng ký trải nghiệm Viettel Workspace')} 
        currentMarket={currentMarket} 
      />

      {/* SECTION 8: TÀI LIỆU & HỖ TRỢ (#docs-support) */}
      <WorkspaceDocsSupport currentMarket={currentMarket} />

      {/* SECTION 9: HỆ SINH THÁI SẢN PHẨM LIÊN QUAN */}
      <WorkspaceRelatedProducts 
        currentMarket={currentMarket} 
        onNavigateService={onNavigateService}
      />

      {/* Lead / Consultation Modal */}
      <WorkspaceQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        serviceContext={serviceContext}
        currentMarket={currentMarket}
      />
    </div>
  );
};
