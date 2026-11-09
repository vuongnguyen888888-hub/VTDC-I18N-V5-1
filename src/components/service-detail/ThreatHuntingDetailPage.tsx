import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { ThreatHuntingHero } from './threat-hunting/ThreatHuntingHero';
import { ThreatHuntingStickyNav } from './threat-hunting/ThreatHuntingStickyNav';
import { ThreatHuntingOverview } from './threat-hunting/ThreatHuntingOverview';
import { ThreatHuntingPricing } from './threat-hunting/ThreatHuntingPricing';
import { ThreatHuntingCapabilities } from './threat-hunting/ThreatHuntingCapabilities';
import { ThreatHuntingBenefits } from './threat-hunting/ThreatHuntingBenefits';
import { ThreatHuntingUseCases } from './threat-hunting/ThreatHuntingUseCases';
import { ThreatHuntingFaq } from './threat-hunting/ThreatHuntingFaq';
import { ThreatHuntingFooterCta } from './threat-hunting/ThreatHuntingFooterCta';
import { ThreatHuntingDocsSupport } from './threat-hunting/ThreatHuntingDocsSupport';
import { ThreatHuntingRelatedProducts } from './threat-hunting/ThreatHuntingRelatedProducts';
import { ThreatHuntingQuoteModal } from './threat-hunting/ThreatHuntingQuoteModal';

interface ThreatHuntingDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const ThreatHuntingDetailPage: React.FC<ThreatHuntingDetailPageProps> = ({
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
      id="service-detail-viettel-threat-hunting" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-038"
      data-vidc-pillar="security"
    >
      {/* SECTION 0: HERO SECTION */}
      <ThreatHuntingHero
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký tư vấn & khảo sát dịch vụ Viettel Threat Hunting')}
        onNavigateHome={onNavigateHome}
      />

      {/* STICKY SECTION NAV (Chuẩn hóa theo CloudServerStickyNav) */}
      <ThreatHuntingStickyNav
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký tư vấn dịch vụ Threat Hunting')}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <ThreatHuntingOverview currentMarket={currentMarket} />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing) */}
      <ThreatHuntingPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 3: TÍNH NĂNG NỔI BẬT (#features) */}
      <ThreatHuntingCapabilities currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH CỐT LÕI (#benefits) */}
      <ThreatHuntingBenefits currentMarket={currentMarket} />

      {/* SECTION 5: ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <ThreatHuntingUseCases
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <ThreatHuntingFaq currentMarket={currentMarket} />

      {/* SECTION 7: CTA KÊU GỌI HÀNH ĐỘNG (Nền Đỏ thương hiệu V8) */}
      <ThreatHuntingFooterCta
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký tư vấn & khảo sát ngay')}
      />

      {/* SECTION 8: TÀI LIỆU & HỖ TRỢ (#docs-support) */}
      <ThreatHuntingDocsSupport
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Yêu cầu hỗ trợ & tài liệu Threat Hunting')}
      />

      {/* SECTION 9: SẢN PHẨM LIÊN QUAN */}
      <ThreatHuntingRelatedProducts
        currentMarket={currentMarket}
        onNavigateService={onNavigateService}
      />

      {/* Modal Đăng Ký Tư Vấn / Khảo Sát */}
      <ThreatHuntingQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        currentMarket={currentMarket}
        customNotes={customNotes}
      />
    </div>
  );
};
