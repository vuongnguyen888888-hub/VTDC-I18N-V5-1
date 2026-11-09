import React from 'react';
import { SearchX, Home } from 'lucide-react';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';
import { useLanguage } from '../../context/LanguageContext';



interface ServiceNotFoundProps {
  onNavigateHome?: () => void;
}

export const ServiceNotFound: React.FC<ServiceNotFoundProps> = ({ onNavigateHome }) => {
  const {currentLanguage,getFullPath}=useLanguage();
  const en = currentLanguage !== 'vi' && currentLanguage !== 'vn';
  const copy = en ? {
    heading:'Service not found', detail:'This link does not exist or has changed. Browse our service catalog for available options.',
    catalog:'View services', home:'Back to home',
  } : {
    heading:'Không tìm thấy dịch vụ', detail:'Đường dẫn bạn truy cập không tồn tại hoặc đã được thay đổi. Vui lòng xem danh mục dịch vụ để tìm nội dung phù hợp.',
    catalog:'Xem danh mục dịch vụ', home:'Về trang chủ',
  };
  return (
  <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
    <div className="max-w-md w-full text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-[var(--vidc-color-background-subtle)] text-[var(--vidc-color-brand-red)] flex items-center justify-center mx-auto">
        <SearchX className="w-8 h-8" />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold text-[var(--vidc-color-text-primary)] tracking-tight">
          {copy.heading}
        </h1>
        <p className="text-sm text-[var(--vidc-color-text-secondary)] leading-relaxed">
          {copy.detail}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <VIDCAnchor
          href={getFullPath("/services/")}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--vidc-color-brand-red)] text-white font-bold text-sm min-h-[44px]"
        >
          {copy.catalog}
        </VIDCAnchor>
        <VIDCNativeButton
          type="button"
          onClick={onNavigateHome}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[var(--vidc-color-border-default)] text-[var(--vidc-color-text-primary)] font-bold text-sm min-h-[44px] cursor-pointer"
        >
          <Home className="w-4 h-4" />
          {copy.home}
        </VIDCNativeButton>
      </div>
    </div>
  </section>
);
};
