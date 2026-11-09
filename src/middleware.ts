import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getRedirectTarget } from './data/redirectManifest';
import { buildLocalizedRedirectPath, parsePathToMarketAndLanguage } from './utils/routingMatrix';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const parsed = parsePathToMarketAndLanguage(pathname);
  const redirectEntry = getRedirectTarget(pathname) || getRedirectTarget(parsed.pureSlug);

  if (redirectEntry) {
    const targetPath = buildLocalizedRedirectPath(pathname, redirectEntry.targetPath);
    const cleanPath = pathname.replace(/\/+$/, '') || '/';
    if (cleanPath !== (targetPath.replace(/\/+$/, '') || '/')) {
      const url = request.nextUrl.clone();
      url.pathname = targetPath;
      return NextResponse.redirect(url, redirectEntry.statusCode || 308);
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-vidc-pathname', pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\..*).*)'],
};
