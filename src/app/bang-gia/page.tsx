import { permanentRedirect } from 'next/navigation';

export default function BangGiaRedirectPage() {
  permanentRedirect('/pricing/');
}
