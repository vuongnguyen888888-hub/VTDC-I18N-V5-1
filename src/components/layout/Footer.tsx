import React, { useState } from 'react';
import { SEAMarket } from './UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { VcloudiaLogo } from '../common/VcloudiaLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Globe, 
  ExternalLink, 
  Sliders, 
  RotateCcw, 
  CheckCircle2, 
  X, 
  Facebook, 
  Linkedin, 
  Youtube, 
  MessageCircle, 
  Lock, 
  Award,
  Info
} from 'lucide-react';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface FooterProps {
  currentMarket: SEAMarket;
}

// 5 Footer Navigation Groups per Spec VIDC-CMP-551 Section 5
export interface FooterLinkItem {
  id: string;
  label: string;
  path: string;
  isExternal?: boolean;
  verificationStatus?: 'approved' | 'unverified' | 'conflicted';
}

export interface FooterGroup {
  id: string;
  title: string;
  links: FooterLinkItem[];
}

export const Footer: React.FC<FooterProps> = ({ currentMarket }) => {
  const { t, currentLanguage, getFullPath } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';

  // Interactive states for Cookie Consent Manager & Personalization Service
  const [isCookieModalOpen, setIsCookieModalOpen] = useState<boolean>(false);
  const [resetAnnouncement, setResetAnnouncement] = useState<string | null>(null);

  // Cookie Preference Categories State (3 categories: essential, analytics, personalization)
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always required
    analytics: true,
    personalization: false,
  });

  const currentYear = new Date().getFullYear();

  // Save Cookie Preferences in ConsentManager
  const handleSaveCookiePreferences = () => {
    // 1. Cập nhật Google Consent Mode v2
    if (typeof window.__vidc_gtag === 'function') {
      window.__vidc_gtag('consent', 'update', {
        'analytics_storage': cookiePreferences.analytics ? 'granted' : 'denied',
        'ad_storage': cookiePreferences.personalization ? 'granted' : 'denied',
        'ad_user_data': cookiePreferences.personalization ? 'granted' : 'denied',
        'ad_personalization': cookiePreferences.personalization ? 'granted' : 'denied',
      });
    }

    // 2. Push consent event vào dataLayer để GTM trigger
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'consent_update',
      consent_analytics: cookiePreferences.analytics ? 'granted' : 'denied',
      consent_ad_storage: cookiePreferences.personalization ? 'granted' : 'denied',
      consent_ad_user_data: cookiePreferences.personalization ? 'granted' : 'denied',
      consent_ad_personalization: cookiePreferences.personalization ? 'granted' : 'denied',
    });

    // 3. UI feedback
    setIsCookieModalOpen(false);
    setResetAnnouncement(isNonVn ? 'Cookie preferences updated successfully.' : 'Đã cập nhật tùy chọn Cookie thành công.');
    setTimeout(() => {
      setResetAnnouncement(null);
    }, 4000);
  };

  return (
    <footer
      id="main-footer"
      data-component="footer"
      className="bg-[var(--vidc-footer-bg)] text-[var(--vidc-footer-text)] border-t border-[var(--vidc-footer-border)] pt-14 pb-8 font-sans relative z-[var(--vidc-z-base)]"
    >
      {/* Live Region Announcement for Accessibility (WCAG 2.2 AA) */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      >
        {resetAnnouncement}
      </div>

      {/* Visual Toast Notification for User Feedback */}
      {resetAnnouncement && (
        <div className="fixed bottom-6 right-6 z-[var(--vidc-z-dropdown)] p-4 rounded-xl bg-[var(--vidc-color-background-inverse-surface)] text-[var(--vidc-color-text-inverse)] border border-[var(--vidc-color-brand-red)] shadow-2xl flex items-center gap-3 animate-fade-in max-w-md">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <p className="text-xs font-semibold leading-relaxed">{resetAnnouncement}</p>
          <VIDCNativeButton 
            onClick={() => setResetAnnouncement(null)} 
            className="text-slate-400 hover:text-white p-1"
            aria-label={isNonVn ? "Close notification" : "Đóng thông báo"}
          >
            <X className="w-4 h-4" />
          </VIDCNativeButton>
        </div>
      )}

      <div className="vidc-container space-y-10">
        
        {/* TOP SECTION: 5 Columns Grid matching the screenshot layout */}
        <nav aria-label="Footer Navigation">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
            
            {/* Column 1: VỀ VIETTEL IDC */}
            <div className="space-y-3.5">
              <h3 className="text-xs font-bold uppercase text-white tracking-wider">
                {t.footer.colAboutTitle}
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <VIDCAnchor href={getFullPath('/about/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkAbout}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor href={getFullPath('/about/data-centers/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkDataCenters}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor href={getFullPath('/about/esg/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkEsg}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor href={getFullPath('/about/csr/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkCsr}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor href={getFullPath('/about/certifications/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkCertifications}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor href={getFullPath('/about/press/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkPress}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor href={getFullPath('/about/careers/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkCareers}
                  </VIDCAnchor>
                </li>
              </ul>
            </div>

            {/* Column 2: DỊCH VỤ & TÀI NGUYÊN */}
            <div className="space-y-3.5">
              <h3 className="text-xs font-bold uppercase text-white tracking-wider">
                {t.footer.colServicesTitle}
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <VIDCAnchor href={getFullPath('/services/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkServiceCatalog}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor href={getFullPath('/pricing/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkPricingCenter}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor href={getFullPath('/resources/documentation/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkDocs}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor href={getFullPath('/services/data-center-colocation/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkDcColocation}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor href={getFullPath('/partners/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkPartners}
                  </VIDCAnchor>
                </li>
              </ul>
            </div>

            {/* Column 3: HỖ TRỢ & LIÊN HỆ */}
            <div className="space-y-3.5">
              <h3 className="text-xs font-bold uppercase text-white tracking-wider">
                {t.footer.colSupportTitle}
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <VIDCAnchor href={getFullPath('/contact/request-quote/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkSalesContact}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor href={getFullPath('/support/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkSupportTicket}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor href={getFullPath('/pricing/calculator/')} className="hover:text-white transition-colors block py-0.5">
                    {isNonVn ? 'Cloud Price Calculator' : 'Công cụ tính giá dịch vụ'}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor href={getFullPath('/support/')} className="hover:text-white transition-colors block py-0.5">
                    {t.footer.linkFaq}
                  </VIDCAnchor>
                </li>
                <li className="pt-1 text-slate-400">
                  Email: <VIDCAnchor href={currentMarket.code === 'vcloudia' ? "mailto:support@vcloudia.com" : "mailto:support@viettelidc.com.vn"} className="hover:text-white transition-colors">
                    {currentMarket.code === 'vcloudia' ? 'support@vcloudia.com' : 'support@viettelidc.com.vn'}
                  </VIDCAnchor>
                </li>
                <li className="font-bold text-[var(--vidc-color-brand-red)]">
                  Hotline: <VIDCAnchor href={currentMarket.code === 'vcloudia' ? "tel:+855888556608" : "tel:18008088"} className="hover:underline">
                    {currentMarket.code === 'vcloudia' ? '+855 888 55 66 08' : `1800 8088 (${isNonVn ? 'Toll-free' : 'Miễn phí'})`}
                  </VIDCAnchor>
                </li>
              </ul>
            </div>

            {/* Column 4: CỔNG KHÁCH HÀNG */}
            <div className="space-y-3.5">
              <h3 className="text-xs font-bold uppercase text-white tracking-wider">
                {isNonVn ? 'Customer Portal' : 'Cổng khách hàng'}
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <VIDCAnchor 
                    href="https://auth.vtidc-test.com/?redirect_uri=https://vconsole.vtidc-test.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {isNonVn ? 'Management Console' : 'Bảng điều khiển (Console)'}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor 
                    href="https://auth.vtidc-test.com/?redirect_uri=https://vconsole.vtidc-test.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {isNonVn ? 'Cloud Resource Manager' : 'Quản lý tài nguyên Cloud'}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor 
                    href="https://auth.vtidc-test.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {isNonVn ? 'Billing & Invoicing' : 'Trung tâm thanh toán cước'}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCAnchor 
                    href="https://status.vtidc-test.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {isNonVn ? 'System Status & Notifications' : 'Hộp thư thông báo hệ thống'}
                  </VIDCAnchor>
                </li>
                <li>
                  <VIDCNativeButton 
                    onClick={() => window.dispatchEvent(new CustomEvent('open-register-modal'))}
                    className="hover:text-white transition-colors block py-0.5 text-left cursor-pointer"
                  >
                    {isNonVn ? 'Create New Account' : 'Đăng ký tài khoản mới'}
                  </VIDCNativeButton>
                </li>
              </ul>
            </div>

            {/* Column 5: KẾT NỐI */}
            <div className="space-y-3.5">
              <h3 className="text-xs font-bold uppercase text-white tracking-wider">
                {t.footer.colConnectTitle}
              </h3>
              <div className="flex items-center gap-2.5 pt-1">
                <VIDCAnchor
                  href="https://facebook.com/viettelidc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-lg border border-slate-700/80 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </VIDCAnchor>

                <VIDCAnchor
                  href="https://linkedin.com/company/viettelidc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg border border-slate-700/80 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </VIDCAnchor>

                <VIDCAnchor
                  href="https://youtube.com/viettelidc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-lg border border-slate-700/80 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                >
                  <Youtube className="w-4 h-4" />
                </VIDCAnchor>
              </div>
            </div>

          </div>
        </nav>

        {/* MIDDLE SECTION: Logo & Legal Info */}
        <div className="pt-8 border-t border-slate-800/80 space-y-4">
          {/* Logo Viettel IDC / vCloudia */}
          <div>
            <VIDCAnchor 
              href={getFullPath('/')} 
              className="inline-block hover:opacity-90 transition-opacity"
              aria-label={currentMarket.code === 'vcloudia' ? "vCloudia" : "Viettel IDC"}
            >
              {currentMarket.code === 'vcloudia' ? (
                <VcloudiaLogo className="h-9 w-auto object-contain" variant="white" />
              ) : (
                <img alt="Viettel IDC Logo" src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1782053913/logo-IDC_2_up2gqp.svg" className="h-9 w-auto object-contain brightness-0 invert" referrerPolicy="no-referrer" />
              )}
            </VIDCAnchor>
          </div>

          {/* Legal Heading & Paragraphs */}
          <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
            <p className="max-w-4xl">
              {currentMarket.code === 'vcloudia'
                ? 'Governing Body: Viettel (Cambodia) Pte. Ltd. (Metfone), member of Viettel Military Industry and Telecoms Group.'
                : isNonVn 
                  ? 'Governing Body: Viettel - CHT Joint Stock Company (Viettel IDC), member of Viettel Military Industry and Telecoms Group.' 
                  : 'Cơ quan chủ quản: Công ty Cổ phần Viettel - CHT (Viettel IDC), trực thuộc Tập đoàn Công nghiệp - Viễn thông Quân đội.'}
            </p>
            <p className="max-w-4xl">
              {currentMarket.code === 'vcloudia'
                ? 'Address: 6th floor, Royal K Plaza building, #234 Mao Tse Tong Blvd, Tumnob Tuek, Boeng Keng Kang, Phnom Penh, Cambodia'
                : isNonVn
                  ? 'Business Code: 0500589150 first issued by Hanoi Industrial and High-Tech Zones Management Authority - Hanoi People\'s Committee on April 11, 2008, 13th amendment on June 10, 2026.'
                  : 'Mã số doanh nghiệp: 0500589150 do Ban Quản lý các Khu công nghệ cao và Khu công nghiệp - UBND thành phố Hà Nội cấp lần đầu ngày 11/04/2008, sửa đổi lần thứ 13 ngày 10/06/2026.'}
            </p>
            <p>
              {currentMarket.code === 'vcloudia'
                ? 'Customer Service Hotline: +855 888 55 66 08 • Email: support@vcloudia.com • 24/7 Technical Support.'
                : isNonVn
                  ? 'Content Responsible Person: Mr. Le Ba Tan'
                  : 'Chịu trách nhiệm nội dung: Ông Lê Bá Tân.'}
            </p>
          </div>
        </div>

        {/* BOTTOM FOOTER BAR: Copyright & Policy Links */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {currentMarket.code === 'vcloudia' ? 'vCloudia' : 'Viettel IDC'}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-400">
            <VIDCAnchor 
              href={getFullPath('/legal/privacy-policy/')} 
              className="hover:text-white transition-colors"
            >
              {t.footer.linkPrivacy}
            </VIDCAnchor>
            <span className="text-slate-700">|</span>
            <VIDCAnchor 
              href={getFullPath('/legal/terms-of-service/')} 
              className="hover:text-white transition-colors"
            >
              {t.footer.linkTerms}
            </VIDCAnchor>
            <span className="text-slate-700">|</span>
            <VIDCNativeButton
              onClick={() => setIsCookieModalOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.cookieSettings}
            </VIDCNativeButton>
          </div>
        </div>

      </div>

      {/* Cookie Consent Manager Preferences Modal */}
      {isCookieModalOpen && (
        <div className="fixed inset-0 z-[var(--vidc-z-modal)] flex items-center justify-center bg-black/70 p-4">
          <div className="bg-[var(--vidc-navigation-mega-menu-background)] border border-slate-700 p-6 md:p-8 rounded-2xl max-w-lg w-full space-y-6 text-white relative shadow-2xl">
            <VIDCNativeButton
              onClick={() => setIsCookieModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
              aria-label={isNonVn ? "Close cookie preferences" : "Đóng cửa sổ quản lý Cookie"}
            >
              <X className="w-5 h-5" />
            </VIDCNativeButton>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[var(--vidc-color-brand-pink)]">
                <ShieldCheck className="w-6 h-6" />
                <h3 className="text-lg font-extrabold text-white">
                  {isNonVn ? 'Manage Privacy & Cookie Preferences' : 'Quản Lý Tùy Chọn Quyền Riêng Tư & Cookie'}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isNonVn 
                  ? 'We use cookies to optimize your browsing experience, analyze service performance, and personalize content.' 
                  : 'Chúng tôi sử dụng cookie để tối ưu trải nghiệm dịch vụ, phân tích lưu lượng và cá nhân hóa nội dung theo quy định pháp lý Việt Nam.'}
              </p>
            </div>

            <div className="space-y-4 text-xs">
              {/* Category 1: Essential (Required) */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white flex items-center gap-2">
                    <span>{isNonVn ? 'Essential Cookies' : 'Cookie Thiết Yếu'}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                      {isNonVn ? 'Required' : 'Bắt buộc'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {isNonVn ? 'Maintains secure sessions and core infrastructure services.' : 'Duy trì phiên đăng nhập và bảo mật hệ thống.'}
                  </p>
                </div>
                <VIDCNativeInput type="checkbox" checked disabled className="rounded bg-slate-800 text-[var(--vidc-color-brand-red)]" />
              </div>

              {/* Category 2: Analytics */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">
                    {isNonVn ? 'Analytics Cookies' : 'Cookie Phân Tích Dịch Vụ'}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {isNonVn ? 'Measures application performance and service improvements.' : 'Đo lường hiệu năng và cải tiến tính năng sản phẩm.'}
                  </p>
                </div>
                <VIDCNativeInput
                  type="checkbox"
                  checked={cookiePreferences.analytics}
                  onChange={e => setCookiePreferences({ ...cookiePreferences, analytics: e.target.checked })}
                  className="rounded bg-slate-800 text-[var(--vidc-color-brand-red)] cursor-pointer"
                />
              </div>

              {/* Category 3: Personalization */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">
                    {isNonVn ? 'Personalization Cookies' : 'Cookie Cá Nhân Hóa'}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {isNonVn ? 'Tailors cloud recommendations and industry-specific quotes.' : 'Gợi ý sản phẩm và báo giá theo quy mô ngành.'}
                  </p>
                </div>
                <VIDCNativeInput
                  type="checkbox"
                  checked={cookiePreferences.personalization}
                  onChange={e => setCookiePreferences({ ...cookiePreferences, personalization: e.target.checked })}
                  className="rounded bg-slate-800 text-[var(--vidc-color-brand-red)] cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <VIDCNativeButton
                onClick={() => setIsCookieModalOpen(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white"
              >
                {isNonVn ? 'Cancel' : 'Hủy'}
              </VIDCNativeButton>
              <VIDCNativeButton
                onClick={handleSaveCookiePreferences}
                className="px-5 py-2.5 rounded-lg bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs font-bold transition-colors shadow-lg"
              >
                {isNonVn ? 'Save Preferences' : 'Lưu cài đặt'}
              </VIDCNativeButton>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
