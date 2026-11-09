'use client';

import React, { useState, lazy, Suspense } from 'react';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


const DualModeChatWindow = lazy(() =>
  import('./DualModeChatWindow').then((m) => ({ default: m.DualModeChatWindow }))
);

const VIDA_ICON_URL = "https://res.cloudinary.com/dpyizq1m2/image/upload/v1786467848/vida-01_lcsarq.svg";
const MINH_THU_AVATAR = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80";

export function DualModeChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [initialMode, setInitialMode] = useState<'ai' | 'consultant'>('ai');

  const handleOpenChat = (mode: 'ai' | 'consultant') => {
    setInitialMode(mode);
    setIsOpen(true);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none pointer-events-auto">
        {!isOpen && (
          <div className="flex flex-col items-end gap-3">
            {/* 1. Consultant Mode Launcher Button */}
            <div className="group relative flex items-center">
              <div className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md pointer-events-none border border-slate-800 backdrop-blur-md">
                Tư vấn viên Nguyễn Minh Thư
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900/90" />
              </div>

              <VIDCNativeButton
                type="button"
                onClick={() => handleOpenChat('consultant')}
                className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[color:var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] text-white transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer p-0 shadow-lg"
                aria-label="Tư vấn viên Nguyễn Minh Thư"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img alt="Nguyễn Minh Thư" src={MINH_THU_AVATAR} className="w-full h-full object-cover" />
                </div>
              </VIDCNativeButton>
            </div>

            {/* 2. ViDa AI Launcher Button */}
            <div className="group relative flex items-center">
              <div className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md pointer-events-none border border-slate-800 backdrop-blur-md">
                ViDa - Trợ lý AI thông minh
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900/90" />
              </div>

              <VIDCNativeButton
                type="button"
                onClick={() => handleOpenChat('ai')}
                className="relative flex items-center justify-center w-12 h-12 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer p-0 shadow-lg"
                aria-label="Trò chuyện với AI ViDa 24/7"
              >
                <img alt="ViDa AI" src={VIDA_ICON_URL} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </VIDCNativeButton>
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <Suspense fallback={null}>
          <DualModeChatWindow
            isOpen={isOpen}
            initialMode={initialMode}
            onClose={() => setIsOpen(false)}
          />
        </Suspense>
      )}
    </>
  );
}
