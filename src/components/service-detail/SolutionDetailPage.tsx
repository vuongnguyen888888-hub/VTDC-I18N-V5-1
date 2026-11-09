'use client';

import React, { useState } from 'react';
import { SOLUTION_CATEGORIES, SolutionItem } from '../../data/sitemapData';
import { useLanguage } from '../../context/LanguageContext';
import { SEAMarket } from '../layout/UtilityBar';
import { 
  ShieldCheck, 
  Layers, 
  Terminal, 
  Globe2, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Home, 
  Sparkles,
  PhoneCall,
  FileText,
  Lock,
  Cpu,
  Server,
  Cloud
} from 'lucide-react';
import dynamic from 'next/dynamic';
import type { QuoteModalDetails } from '../common/EnterpriseQuoteModal';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



const EnterpriseQuoteModal = dynamic(
  () => import('../common/EnterpriseQuoteModal').then((m) => m.EnterpriseQuoteModal),
  { ssr: false }
);

interface SolutionDetailPageProps {
  solutionId: string;
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigatePath?: (path: string) => void;
}

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({
  solutionId,
  currentMarket = 'vn',
  onNavigateHome,
  onNavigatePath,
}) => {
  const { t, currentLanguage, getFullPath } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Find solution in SOLUTION_CATEGORIES
  let foundCategory: typeof SOLUTION_CATEGORIES[0] | null = null;
  let foundSolution: SolutionItem | null = null;

  for (const cat of SOLUTION_CATEGORIES) {
    const item = cat.items.find((i) => i.id === solutionId);
    if (item) {
      foundCategory = cat;
      foundSolution = item;
      break;
    }
  }

  if (!foundSolution || !foundCategory) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          {isNonVn ? 'Solution Not Found' : 'Không tìm thấy giải pháp'}
        </h1>
        <p className="text-sm text-slate-600 mb-6 max-w-md">
          {isNonVn 
            ? 'The solution you are looking for does not exist or has been relocated.' 
            : 'Giải pháp bạn đang tìm kiếm không tồn tại hoặc đã được cập nhật đường dẫn.'}
        </p>
        <VIDCNativeButton
          onClick={onNavigateHome || (() => window.location.href = '/')}
          className="px-6 py-2.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] text-white text-sm font-semibold hover:opacity-90 transition-all cursor-pointer"
        >
          {isNonVn ? 'Return Home' : 'Về trang chủ'}
        </VIDCNativeButton>
      </div>
    );
  }

  const cleanTitle = foundSolution.title.replace(/\s*\([^)]*\)/g, '').trim();
  const categoryTitle = isNonVn ? (
    foundCategory.id === 'infrastructure-cloud' ? 'Infrastructure & Hybrid Cloud' :
    foundCategory.id === 'devops-ai' ? 'DevOps, Big Data & AI' :
    foundCategory.id === 'connectivity-workspace' ? 'Connectivity & Digital Workplace' :
    foundCategory.id === 'industries' ? 'Industry Solutions' : foundCategory.title
  ) : foundCategory.title;

  const highlightsList = foundSolution.highlights
    ? foundSolution.highlights.split('·').map((h) => h.trim()).filter(Boolean)
    : [];

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-800">
      {/* 1. Breadcrumb Bar */}
      <div className="border-b border-slate-200/80 bg-white sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
          <VIDCAnchor
            href={getFullPath('/')}
            className="hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-1 shrink-0"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{isNonVn ? 'Home' : 'Trang chủ'}</span>
          </VIDCAnchor>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <VIDCAnchor
            href={getFullPath('/solutions')}
            className="hover:text-[var(--vidc-color-brand-red)] transition-colors shrink-0"
          >
            {isNonVn ? 'Solutions' : 'Giải pháp'}
          </VIDCAnchor>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="text-slate-400 shrink-0">{categoryTitle}</span>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-900 truncate">{cleanTitle}</span>
        </div>
      </div>

      {/* 2. Hero Section with Crimson Satin Aesthetic */}
      <section className="relative bg-gradient-to-br from-[var(--vidc-legacy-hex-1e293b)] via-[var(--vidc-legacy-hex-0f172a)] to-[var(--vidc-legacy-hex-020617)] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--vidc-color-brand-red)]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>{categoryTitle}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {foundSolution.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              {foundSolution.description}
            </p>

            {foundSolution.expandedDescription && (
              <p className="text-sm text-slate-400 max-w-3xl leading-relaxed pt-2 border-t border-slate-700/60">
                {foundSolution.expandedDescription}
              </p>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <VIDCNativeButton
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:opacity-95 text-white text-sm font-bold shadow-lg shadow-rose-900/30 flex items-center gap-2 transition-all cursor-pointer active:scale-95"
              >
                <span>{foundSolution.ctaText || (isNonVn ? 'Request Consultation' : 'Tư vấn giải pháp')}</span>
                <ArrowRight className="w-4 h-4" />
              </VIDCNativeButton>
              <VIDCAnchor
                href={getFullPath('/pricing')}
                className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white text-sm font-semibold border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>{isNonVn ? 'Estimate Pricing' : 'Ước tính chi phí'}</span>
              </VIDCAnchor>
            </div>
          </div>

          {/* Highlights Card */}
          <div className="lg:col-span-4 bg-slate-800/60 backdrop-blur-md border border-slate-700/80 rounded-2xl p-6 sm:p-7 text-white shadow-xl space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-rose-400 border-b border-slate-700 pb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{isNonVn ? 'Key Highlights' : 'Điểm nổi bật'}</span>
            </h3>

            {highlightsList.length > 0 ? (
              <ul className="space-y-3">
                {highlightsList.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-slate-400 leading-relaxed">
                {isNonVn
                  ? 'High availability, enterprise SLA 99.99%, ISO 27001 & Rated 3 DC certified.'
                  : 'Cam kết Uptime 99.99%, bảo mật đa lớp đạt chuẩn ISO 27001 và hạ tầng Rated 3.'}
              </p>
            )}

            <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
              <span>{isNonVn ? 'Enterprise SLA' : 'Cam kết SLA'}</span>
              <span className="font-bold text-white">99.99%</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Architecture & Value Overview */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {isNonVn ? 'Why Choose Viettel IDC Solutions?' : 'Tại sao chọn giải pháp của Viettel IDC?'}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {isNonVn
              ? 'Comprehensive cloud ecosystems, high-security data centers, and dedicated 24/7 expert operational support.'
              : 'Hệ sinh thái Cloud toàn diện, trung tâm dữ liệu đạt chuẩn quốc tế và đội ngũ chuyên gia vận hành 24/7.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center font-bold">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              {isNonVn ? 'Rated 3 Tier Standard Data Centers' : 'Hạ tầng Data Center Rated 3'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isNonVn
                ? '5 enterprise-grade data centers across Vietnam, multi-zone connectivity with ultra-low latency.'
                : 'Hệ thống 5 TTDL đạt chuẩn Rated 3 trên toàn quốc, kết nối đa vùng với độ trễ siêu thấp.'}
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              {isNonVn ? 'End-to-End Security & Compliance' : 'An toàn thông tin & Tuân thủ'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isNonVn
                ? 'Fully compliant with PCI DSS, ISO 27001, ISO 27017, and National Cybersecurity standards.'
                : 'Đáp ứng đầy đủ tiêu chuẩn PCI DSS, ISO 27001, ISO 27017 và các quy định an toàn thông tin quốc gia.'}
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 space-y-3 shadow-xs hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center font-bold">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              {isNonVn ? '24/7/365 Expert Support' : 'Đội ngũ hỗ trợ 24/7/365'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isNonVn
                ? 'Local engineers with premier certifications (CCIE, VCIX, CKA, CISSP) ready to assist round the clock.'
                : 'Kỹ sư chuyên gia đạt chứng chỉ quốc tế (CCIE, VCIX, CKA, CISSP) trực tiếp hỗ trợ 24/7.'}
            </p>
          </div>
        </div>

        {/* Related Solutions in the same category */}
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">
              {isNonVn ? `Other ${categoryTitle}` : `Các giải pháp khác trong ${categoryTitle}`}
            </h3>
            <VIDCAnchor
              href={getFullPath('/solutions')}
              className="text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline flex items-center gap-1"
            >
              <span>{isNonVn ? 'View all' : 'Xem tất cả'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </VIDCAnchor>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {foundCategory.items
              .filter((item) => item.id !== solutionId)
              .slice(0, 3)
              .map((item) => (
                <VIDCAnchor
                  key={item.id}
                  href={getFullPath(item.path)}
                  className="block p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[var(--vidc-color-brand-red)]/50 hover:shadow-md transition-all group cursor-pointer"
                >
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <span className="text-xs font-semibold text-[var(--vidc-color-brand-red)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>{isNonVn ? 'Learn more' : 'Tìm hiểu thêm'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </VIDCAnchor>
              ))}
          </div>
        </div>
      </section>

      {/* 4. Footer CTA Banner */}
      <section className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-bold">
              {isNonVn ? 'Ready to architect your solution?' : 'Sẵn sàng triển khai giải pháp cho doanh nghiệp?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {isNonVn
                ? 'Contact our cloud architects for a free assessment and architecture proposal.'
                : 'Liên hệ chuyên gia kiến trúc giải pháp của Viettel IDC để được tư vấn miễn phí.'}
            </p>
          </div>
          <VIDCNativeButton
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] text-white text-xs sm:text-sm font-bold hover:opacity-95 shadow-lg transition-all shrink-0 cursor-pointer"
          >
            {isNonVn ? 'Contact Specialist' : 'Liên hệ chuyên gia'}
          </VIDCNativeButton>
        </div>
      </section>

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <EnterpriseQuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          initialDetails={{ serviceName: foundSolution.title }}
        />
      )}
    </div>
  );
};
