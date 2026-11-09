import React, { useState, useEffect } from 'react';
import { SEAMarket } from '../layout/UtilityBar';
import { VMaaSHero } from './vmaas/VMaaSHero';
import { VMaaSStickyNav } from './vmaas/VMaaSStickyNav';
import { VMaaSOverview } from './vmaas/VMaaSOverview';
import { VMaaSPricing, VMaaSConfigItem } from './vmaas/VMaaSPricing';
import { VMaaSCapabilities } from './vmaas/VMaaSCapabilities';
import { VMaaSBenefits } from './vmaas/VMaaSBenefits';
import { VMaaSUseCases } from './vmaas/VMaaSUseCases';
import { VMaaSFaq } from './vmaas/VMaaSFaq';
import { VMaaSFooterCta } from './vmaas/VMaaSFooterCta';
import { VMaaSDocsSupport } from './vmaas/VMaaSDocsSupport';
import { VMaaSRelatedProducts } from './vmaas/VMaaSRelatedProducts';
import { VMaaSQuoteModal } from './vmaas/VMaaSQuoteModal';

interface VMaaSDetailPageProps {
  currentMarket: SEAMarket;
  onNavigateHome: () => void;
  onNavigateService?: (path: string) => void;
}

export const VMaaSDetailPage: React.FC<VMaaSDetailPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigateService,
}) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [actionType, setActionType] = useState<'register' | 'poc' | 'consult'>('poc');
  const [selectedConfig, setSelectedConfig] = useState<VMaaSConfigItem | null>({
    id: 'vmaas-50m',
    name: 'vMaaS_50M (Gói PoC)',
    targetAudience: 'SME',
    tokenAllocation: '50M Token',
    priceMonthly: '260.000',
    priceMonthVnd: 260000,
    badge: '★ GÓI DÙNG THỬ / POC',
    isPoc: true,
    features: [
      'Gói tiêu chuẩn áp dụng cho chính sách dùng thử/PoC doanh nghiệp.',
      'Kết nối đa mô hình, giảm thời gian tích hợp nhiều nhà cung cấp.',
      'Tối ưu cho Chatbot, RAG, phân tích tài liệu và tự động hóa quy trình.',
    ],
  });
  const [selectedDc, setSelectedDc] = useState<string>('TTDL Viettel IDC Việt Nam');

  // Scroll to top on initial mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenPocModal = () => {
    setActionType('poc');
    setSelectedConfig({
      id: 'vmaas-50m',
      name: 'vMaaS_50M (Gói PoC)',
      targetAudience: 'SME',
      tokenAllocation: '50M Token',
      priceMonthly: '260.000',
      priceMonthVnd: 260000,
      badge: '★ GÓI DÙNG THỬ / POC',
      isPoc: true,
      features: [
        'Gói tiêu chuẩn áp dụng cho chính sách dùng thử/PoC doanh nghiệp.',
        'Kết nối đa mô hình, giảm thời gian tích hợp nhiều nhà cung cấp.',
        'Tối ưu cho Chatbot, RAG, phân tích tài liệu và tự động hóa quy trình.',
      ],
    });
    setIsQuoteModalOpen(true);
  };

  const handleOpenConsultModal = () => {
    setActionType('consult');
    setSelectedConfig({
      id: 'vmaas-custom',
      name: 'Customize',
      targetAudience: 'Doanh nghiệp lớn / Tập đoàn',
      tokenAllocation: 'Theo nhu cầu',
      priceMonthly: 'Liên hệ',
      priceMonthVnd: 0,
      isCustom: true,
      badge: 'DOANH NGHIỆP & BYOM',
      features: [
        'Dành cho nhu cầu lượng token lớn, cấu hình hạn mức riêng biệt.',
        'Hỗ trợ triển khai mô hình riêng của doanh nghiệp (BYOM).',
        'Cung cấp Dedicated Endpoint riêng và thỏa thuận SLA cao cấp.',
      ],
    });
    setIsQuoteModalOpen(true);
  };

  const handleSelectConfigForQuote = (
    config: VMaaSConfigItem,
    location: string,
    action: 'register' | 'poc' | 'consult' = 'register'
  ) => {
    setSelectedConfig(config);
    setSelectedDc(location);
    setActionType(action);
    setIsQuoteModalOpen(true);
  };

  return (
    <div 
      id="service-detail-viettel-model-as-a-service" 
      className="w-full bg-white min-h-screen text-[var(--vidc-legacy-hex-222225)] font-sans"
      data-vidc-sku="SVC-010"
      data-vidc-pillar="compute"
    >
      {/* SECTION 0: HERO SECTION (Mở đầu & Định vị giá trị) */}
      <VMaaSHero
        currentMarket={currentMarket}
        onOpenPoc={handleOpenPocModal}
        onOpenConsult={handleOpenConsultModal}
        onNavigateHome={onNavigateHome}
      />

      {/* STICKY NAVIGATION BAR (Thanh điều hướng cố định) */}
      <VMaaSStickyNav 
        currentMarket={currentMarket} 
        onOpenQuote={handleOpenPocModal}
      />

      {/* SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng #FFFFFF) */}
      <VMaaSOverview
        currentMarket={currentMarket}
        onOpenQuote={handleOpenPocModal}
      />

      {/* SECTION 2: BẢNG GIÁ & DỰ TOÁN CHI PHÍ (#pricing - Nền Xám #F4F4F4) */}
      <VMaaSPricing
        currentMarket={currentMarket}
        onSelectConfigForQuote={handleSelectConfigForQuote}
      />

      {/* SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features - Nền Trắng #FFFFFF) */}
      <VMaaSCapabilities currentMarket={currentMarket} />

      {/* SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám #F4F4F4) */}
      <VMaaSBenefits currentMarket={currentMarket} />

      {/* SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng #FFFFFF) */}
      <VMaaSUseCases currentMarket={currentMarket} />

      {/* SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám #F4F4F4) */}
      <VMaaSFaq currentMarket={currentMarket} />

      {/* SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (Bottom CTA - Nền Đỏ var(--vidc-color-brand-red)) */}
      <VMaaSFooterCta
        onOpenQuote={handleOpenPocModal}
        currentMarket={currentMarket}
      />

      {/* SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám #F4F4F4) */}
      <VMaaSDocsSupport
        currentMarket={currentMarket}
        onOpenQuote={handleOpenConsultModal}
      />

      {/* SECTION 9: HỆ SINH THÁI SẢN PHẨM LIÊN QUAN (Nền Trắng #FFFFFF) */}
      <VMaaSRelatedProducts 
        currentMarket={currentMarket} 
        onNavigateService={onNavigateService}
      />

      {/* PoC / Consulting / Registration Modal */}
      <VMaaSQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedConfig={selectedConfig}
        selectedDc={selectedDc}
        actionType={actionType}
        currentMarket={currentMarket}
      />
    </div>
  );
};
