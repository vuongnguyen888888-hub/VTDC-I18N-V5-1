import type { Metadata } from 'next';
import { AdminFeedbackClient } from './AdminFeedbackClient';

export const metadata: Metadata = {
  title: 'Feedback Administration | Viettel IDC',
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminFeedbackPage() {
  return <AdminFeedbackClient />;
}
