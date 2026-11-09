import type { Metadata } from 'next';
import { LocalizedNotFound } from '@/components/routing/LocalizedNotFound';

export const metadata: Metadata = {
  title: '404 | Viettel IDC',
  description: 'Page not found / Không tìm thấy trang.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <LocalizedNotFound />;
}
