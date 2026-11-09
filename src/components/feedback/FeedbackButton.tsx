'use client';

import React from 'react';
import { MessageSquarePlus } from 'lucide-react';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface FeedbackButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const FeedbackButton: React.FC<FeedbackButtonProps> = ({ onClick, isOpen }) => {
  if (isOpen) return null;

  return (
    <VIDCNativeButton
      id="global-feedback-trigger-btn"
      type="button"
      onClick={onClick}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d6002c)] text-white font-bold text-xs uppercase tracking-wider py-3 px-2 sm:px-2.5 rounded-l-xl shadow-lg hover:shadow-xl hover:-translate-x-0.5 transition-all duration-200 flex flex-col items-center gap-1.5 cursor-pointer border-l-2 border-y border-white/20 group focus:outline-none focus:ring-2 focus:ring-red-400"
      aria-label="Mở cửa sổ gửi góp ý phản hồi (Feedback)"
      title="Gửi góp ý & Phản hồi"
    >
      <MessageSquarePlus className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
      <span className="[writing-mode:vertical-lr] text-[11px] font-extrabold tracking-widest uppercase rotate-180 py-0.5">
        Feedback
      </span>
    </VIDCNativeButton>
  );
};
