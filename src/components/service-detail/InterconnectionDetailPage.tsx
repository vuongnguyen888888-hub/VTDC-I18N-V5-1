import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { InterconnectionHero } from './interconnection/InterconnectionHero';
import { InterconnectionStickyNav } from './interconnection/InterconnectionStickyNav';
import { InterconnectionOverview } from './interconnection/InterconnectionOverview';
import { InterconnectionPricing } from './interconnection/InterconnectionPricing';
import { InterconnectionCapabilities } from './interconnection/InterconnectionCapabilities';
import { InterconnectionBenefits } from './interconnection/InterconnectionBenefits';
import { InterconnectionUseCases } from './interconnection/InterconnectionUseCases';
import { InterconnectionGlossary } from './interconnection/InterconnectionGlossary';
import { InterconnectionFaq } from './interconnection/InterconnectionFaq';
import { InterconnectionFooterCta } from './interconnection/InterconnectionFooterCta';
import { InterconnectionDocsSupport } from './interconnection/InterconnectionDocsSupport';
import { InterconnectionRelatedProducts } from './interconnection/InterconnectionRelatedProducts';
import { InterconnectionQuoteModal } from './interconnection/InterconnectionQuoteModal';

interface InterconnectionDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const InterconnectionDetailPage: React.FC<InterconnectionDetailPageProps> = ({
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
      id="service-detail-viettel-interconnection" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-026"
      data-vidc-pillar="networking"
    >
      {/* SECTION 0: HERO SECTION */}
      <InterconnectionHero
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký tư vấn kỹ thuật dịch vụ Viettel Interconnection')}
        onNavigateHome={onNavigateHome}
      />

      {/* STICKY SECTION NAV (Chuẩn hóa theo CloudServerStickyNav) */}
      <InterconnectionStickyNav
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký tư vấn dịch vụ Viettel Interconnection')}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview) */}
      <InterconnectionOverview currentMarket={currentMarket} />

      {/* SECTION 2: BẢNG GIÁ DỊCH VỤ (#pricing) */}
      <InterconnectionPricing
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 3: TÍNH NĂNG NỔI BẬT (#features) */}
      <InterconnectionCapabilities currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits) */}
      <InterconnectionBenefits currentMarket={currentMarket} />

      {/* SECTION 5: ỨNG DỤNG THỰC TẾ (#use-cases) */}
      <InterconnectionUseCases currentMarket={currentMarket} />

      {/* SECTION 5.1: TỪ ĐIỂN THUẬT NGỮ & CÔNG NGHỆ KẾT NỐI (#glossary) */}
      <InterconnectionGlossary
        currentMarket={currentMarket}
        onOpenConsult={handleOpenConsultModal}
      />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq) */}
      <InterconnectionFaq currentMarket={currentMarket} />

      {/* SECTION 7: KHỐI CHỐT CHUYỂN ĐỔI CHÍNH (Nền Đỏ thương hiệu var(--vidc-color-brand-red)) */}
      <InterconnectionFooterCta
        currentMarket={currentMarket}
        onOpenConsult={() => handleOpenConsultModal('Đăng ký nhận tư vấn kết nối ngay')}
      />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support) */}
      <InterconnectionDocsSupport
        currentMarket={currentMarket}
      />

      {/* SECTION 9: HỆ SINH THÁI SẢN PHẨM LIÊN QUAN */}
      <InterconnectionRelatedProducts
        currentMarket={currentMarket}
      />

      {/* Modal Đăng Ký Tư Vấn & Khảo Sát */}
      <InterconnectionQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        currentMarket={currentMarket}
        customNotes={customNotes}
      />
    </div>
  );
};
