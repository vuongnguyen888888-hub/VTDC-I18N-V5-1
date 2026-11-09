'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { AdminFeedbackDashboard } from '@/components/admin/AdminFeedbackDashboard';

export function AdminFeedbackClient() {
  const router = useRouter();
  const { currentMarket } = useLanguage();
  return <AdminFeedbackDashboard currentMarket={currentMarket} onNavigateHome={() => router.push('/')} />;
}
