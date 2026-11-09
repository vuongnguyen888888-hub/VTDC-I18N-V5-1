export interface RuntimeFeedbackContext {
  pageUrl: string;
  pagePath: string;
  pageTitle: string | null;
  pageId: string | null;
  sectionId: string | null;
  componentId: string | null;
  viewportWidth: number;
  viewportHeight: number;
  deviceType: 'desktop' | 'tablet' | 'mobile';
  browser: string | null;
  userAgent: string | null;
}

export function detectBrowser(ua: string): string {
  if (!ua) return 'Unknown';
  if (ua.includes('Edg/')) return 'Microsoft Edge';
  if (ua.includes('Chrome/') && !ua.includes('Chromium')) return 'Google Chrome';
  if (ua.includes('Safari/') && !ua.includes('Chrome/')) return 'Apple Safari';
  if (ua.includes('Firefox/')) return 'Mozilla Firefox';
  if (ua.includes('OPR/') || ua.includes('Opera/')) return 'Opera';
  return 'Browser';
}

export function detectDeviceType(width: number, ua: string): 'desktop' | 'tablet' | 'mobile' {
  const isMobileUA = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isTabletUA = /iPad|Android(?!.*Mobile)|Tablet/i.test(ua);

  if (width < 640 || isMobileUA) {
    return 'mobile';
  }
  if (width < 1024 || isTabletUA) {
    return 'tablet';
  }
  return 'desktop';
}

export function getRuntimeFeedbackContext(): RuntimeFeedbackContext {
  if (typeof window === 'undefined') {
    return {
      pageUrl: '',
      pagePath: '',
      pageTitle: null,
      pageId: null,
      sectionId: null,
      componentId: null,
      viewportWidth: 0,
      viewportHeight: 0,
      deviceType: 'desktop',
      browser: null,
      userAgent: null,
    };
  }

  const width = window.innerWidth || document.documentElement.clientWidth || 0;
  const height = window.innerHeight || document.documentElement.clientHeight || 0;
  const ua = navigator.userAgent || '';
  const browser = detectBrowser(ua);
  const deviceType = detectDeviceType(width, ua);

  // Check if page has meta tag or data attribute for pageId
  const metaPageId = document.querySelector('meta[name="vidc-page-id"]')?.getAttribute('content');
  const bodyPageId = document.body.getAttribute('data-page-id');
  const pageId = metaPageId || bodyPageId || null;

  return {
    pageUrl: window.location.href,
    pagePath: window.location.pathname,
    pageTitle: document.title || window.location.pathname || null,
    pageId: pageId,
    sectionId: null,
    componentId: null,
    viewportWidth: width,
    viewportHeight: height,
    deviceType,
    browser,
    userAgent: ua,
  };
}
