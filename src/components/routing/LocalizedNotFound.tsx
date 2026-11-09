'use client';

import React from 'react';
import Link from '@/components/ui/VIDCNextLink';
import { SearchX, Home } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function LocalizedNotFound() {
  const { currentLanguage, t } = useLanguage();
  const isVietnamese = currentLanguage === 'vn' || currentLanguage === 'vi';
  const title = isVietnamese ? 'Không tìm thấy trang' : 'Page not found';
  const description = isVietnamese
    ? 'Đường dẫn bạn truy cập không tồn tại hoặc đã được thay đổi. Vui lòng quay lại trang chủ hoặc tìm dịch vụ phù hợp.'
    : 'The page you requested may have moved or does not exist. Return home or explore our services.';
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[var(--vidc-color-background-subtle)] text-[var(--vidc-color-brand-red)] flex items-center justify-center mx-auto shadow-sm">
          <SearchX className="w-8 h-8" aria-hidden="true" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-[var(--vidc-color-text-primary)] tracking-tight">{title}</h1>
          <p className="text-sm text-[var(--vidc-color-text-secondary)] leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--vidc-color-brand-red)] text-white font-bold text-sm min-h-[44px] hover:opacity-95 transition-opacity">
            <Home className="w-4 h-4" aria-hidden="true" />
            {isVietnamese ? 'Về trang chủ' : 'Back to home'}
          </Link>
          <Link href="/#services" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[var(--vidc-color-border-default)] text-[var(--vidc-color-text-primary)] font-bold text-sm min-h-[44px] hover:bg-slate-50 transition-colors">
            {t.nav.viewAllServices}
          </Link>
        </div>
      </div>
    </main>
  );
}
