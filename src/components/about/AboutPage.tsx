'use client';

import React, { useMemo } from 'react';
import { Sparkles, Server, ArrowRight, Award } from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { AboutSubNav } from './AboutSubNav';
import { AboutOverviewPage } from './AboutOverviewPage';
import { AboutESGPage } from './AboutESGPage';
import { AboutCSRPage } from './AboutCSRPage';
import { AboutDataCentersPage } from './AboutDataCentersPage';
import { AboutCareersPage } from './AboutCareersPage';
import { AboutPressPage } from './AboutPressPage';
import { AboutCertificationsPage } from './AboutCertificationsPage';
import { AboutContactPage } from './AboutContactPage';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface AboutPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  currentMarket,
  onNavigateHome,
  currentPath = '/about/',
  onNavigate,
}) => {
  const { currentLanguage, getFullPath } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';

  // Normalize path and detect active tab ID
  const activePage = useMemo(() => {
    const normalizedPath = currentPath.toLowerCase();
    if (normalizedPath.includes('/esg')) return 'esg';
    if (normalizedPath.includes('/csr')) return 'csr';
    if (
      normalizedPath.includes('/data-center') ||
      normalizedPath.includes('/datacenter') ||
      normalizedPath.includes('/infrastructure') ||
      normalizedPath.includes('/he-sinh-thai')
    ) {
      return 'datacenters';
    }
    if (
      normalizedPath.includes('/certification') ||
      normalizedPath.includes('/award') ||
      normalizedPath.includes('/giai-thuong') ||
      normalizedPath.includes('/chung-chi')
    ) {
      return 'certifications';
    }
    if (
      normalizedPath.includes('/press') ||
      normalizedPath.includes('/tin-tuc') ||
      normalizedPath.includes('/thong-cao')
    ) {
      return 'press';
    }
    if (
      normalizedPath.includes('/career') ||
      normalizedPath.includes('/tuyen-dung')
    ) {
      return 'careers';
    }
    if (
      normalizedPath.includes('/contact') ||
      normalizedPath.includes('/lien-he')
    ) {
      return 'contact';
    }
    return 'overview';
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Unified Persistent Hero Header Section - Không đổi khi chuyển tab */}
      <section id="about-hero-section" className="relative bg-slate-950 text-white overflow-hidden py-16 lg:py-24">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img alt="Viettel IDC Data Center" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover object-center opacity-30" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
          <div className="absolute inset-0 bg-[radial-gradient(#C5002A_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        </div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="vidc-container relative z-10">
          <div className="max-w-3xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isNonVn ? 'ABOUT VIETTEL IDC — NATIONAL DIGITAL INFRASTRUCTURE' : 'VỀ VIETTEL IDC — HẠ TẦNG SỐ QUỐC GIA'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {isNonVn ? (
                <>Building <span className="text-[color:var(--vidc-color-brand-red)]">Digital Infrastructure</span> for Enterprises</>
              ) : (
                <>Kiến Tạo <span className="text-[color:var(--vidc-color-brand-red)]">Hạ Tầng Số</span> Cho Doanh Nghiệp Việt</>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal text-justify">
              {isNonVn
                ? 'Established in 2008 as an international joint venture, Viettel IDC is currently the leading Data Center and Cloud Computing service provider in Vietnam, owning the largest and most advanced digital infrastructure ecosystem meeting international ANSI/TIA-942 Rated 3 standards.'
                : 'Thành lập từ năm 2008 theo mô hình liên doanh quốc tế, Viettel IDC hiện là nhà cung cấp dịch vụ Trung tâm Dữ liệu và Điện toán Đám mây dẫn đầu thị phần tại Việt Nam, sở hữu hệ sinh thái hạ tầng số quy mô lớn nhất và hiện đại nhất đạt chuẩn quốc tế ANSI/TIA-942 Rated 3.'}
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4 pt-2">
              <VIDCAnchor
                href={getFullPath('/about/data-centers/')}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('/about/data-centers/');
                }}
                className="px-6 py-3.5 rounded-xl bg-[var(--vidc-text-brand)] hover:bg-[var(--vidc-legacy-hex-a00022)] text-white text-sm font-bold shadow-lg shadow-red-600/30 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Server className="w-4 h-4" />
                <span>{isNonVn ? 'Explore 9 Data Centers' : 'Khám phá 9 Data Center'}</span>
                <ArrowRight className="w-4 h-4" />
              </VIDCAnchor>

              <VIDCAnchor
                href={getFullPath('/about/certifications/')}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('/about/certifications/');
                }}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-bold flex items-center gap-2 backdrop-blur-md transition-all cursor-pointer"
              >
                <Award className="w-4 h-4 text-red-400" />
                <span>{isNonVn ? 'Certificates & Awards' : 'Chứng nhận & Giải thưởng'}</span>
              </VIDCAnchor>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Sub Navigation Bar DƯỚI HERO - Cố định & đồng bộ trạng thái */}
      <AboutSubNav activePage={activePage} onNavigate={onNavigate} />

      {/* Sub Tab Content Area */}
      <main id="about-tab-content" className="relative z-0">
        {activePage === 'overview' && (
          <AboutOverviewPage
            currentMarket={currentMarket}
            onNavigateHome={onNavigateHome}
            currentPath={currentPath}
            onNavigate={onNavigate}
          />
        )}
        {activePage === 'esg' && (
          <AboutESGPage
            currentMarket={currentMarket}
            onNavigateHome={onNavigateHome}
            currentPath={currentPath}
            onNavigate={onNavigate}
          />
        )}
        {activePage === 'csr' && (
          <AboutCSRPage
            currentMarket={currentMarket}
            onNavigateHome={onNavigateHome}
            currentPath={currentPath}
            onNavigate={onNavigate}
          />
        )}
        {activePage === 'datacenters' && (
          <AboutDataCentersPage
            currentMarket={currentMarket}
            onNavigateHome={onNavigateHome}
            currentPath={currentPath}
            onNavigate={onNavigate}
          />
        )}
        {activePage === 'certifications' && (
          <AboutCertificationsPage
            currentMarket={currentMarket}
            onNavigateHome={onNavigateHome}
            currentPath={currentPath}
            onNavigate={onNavigate}
          />
        )}
        {activePage === 'press' && (
          <AboutPressPage
            currentMarket={currentMarket}
            onNavigateHome={onNavigateHome}
            currentPath={currentPath}
            onNavigate={onNavigate}
          />
        )}
        {activePage === 'careers' && (
          <AboutCareersPage
            currentMarket={currentMarket}
            onNavigateHome={onNavigateHome}
            currentPath={currentPath}
            onNavigate={onNavigate}
          />
        )}
        {activePage === 'contact' && (
          <AboutContactPage
            currentMarket={currentMarket}
            onNavigateHome={onNavigateHome}
            currentPath={currentPath}
            onNavigate={onNavigate}
          />
        )}
      </main>
    </div>
  );
};

export {
  AboutOverviewPage,
  AboutESGPage,
  AboutCSRPage,
  AboutDataCentersPage,
  AboutCareersPage,
  AboutPressPage,
  AboutCertificationsPage,
};
