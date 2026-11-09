import React from 'react';
import { BookOpen, Newspaper, FileCode, ExternalLink, ArrowRight, Calendar, Award, FileText, X } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface ResourcesMegaMenuProps {
  onClose: () => void;
  currentMarketPath: string;
}

export const ResourcesMegaMenu: React.FC<ResourcesMegaMenuProps> = ({ onClose, currentMarketPath }) => {
  const { isNonVn, getFullPath: localizedPath } = useLanguage();

  const getFullPath = (path: string) => {
    if (path.startsWith('http')) return path;
    if (localizedPath) return localizedPath(path);
    if (currentMarketPath === '/') return path;
    return `${currentMarketPath}${path.startsWith('/') ? path.slice(1) : path}`;
  };

  return (
    <div className="relative w-full mx-auto text-slate-800 p-7 md:p-9 rounded-2xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden min-h-[420px]">
      {/* Top Right Close Button */}
      <VIDCNativeButton 
        onClick={onClose}
        aria-label={isNonVn ? 'Close menu' : 'Đóng menu'}
        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all z-10"
      >
        <X className="w-5 h-5" />
      </VIDCNativeButton>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-4 pr-10">
        <div>
          <h3 className="text-lg font-bold text-slate-900 tracking-wide">
            {isNonVn ? 'Technology Resource & Knowledge Center' : 'Trung tâm Tài nguyên & Tri thức Công nghệ'}
          </h3>
          <p className="text-xs text-slate-500">
            {isNonVn ? 'Technical documentation, industry whitepapers, research reports, and Cloud tech news' : 'Tài liệu kỹ thuật, báo cáo nghiên cứu và tin tức công nghệ Đám mây'}
          </p>
        </div>
        <VIDCAnchor
          href={getFullPath('/resources/')}
          onClick={onClose}
          className="text-xs text-[var(--vidc-color-brand-red)] hover:text-[var(--vidc-button-primary-background-hover)] font-bold flex items-center gap-1 group shrink-0"
        >
          {isNonVn ? 'Explore all resources' : 'Khám phá tất cả tài nguyên'}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </VIDCAnchor>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Section 1: Tri thức & Tin tức */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)] border-l-2 border-[var(--vidc-color-brand-red)] pl-2">
            <Newspaper className="w-4 h-4" />
            {isNonVn ? 'Knowledge & Insights' : 'Tri thức & Tin tức'}
          </div>
          <div className="space-y-2">
            <VIDCAnchor
              href={getFullPath('/resources/blog/')}
              onClick={onClose}
              className="group block p-3.5 rounded-xl hover:bg-slate-50 transition-all cursor-pointer border border-transparent hover:border-slate-200/60"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'Expert Technical Articles' : 'Bài viết chuyên gia'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5">
                {isNonVn ? 'Architectural blueprints, cloud migrations, and deep-dive technical tutorials.' : 'Phân tích kiến trúc, hướng dẫn giải pháp và chia sẻ kinh nghiệm kỹ thuật chuyên sâu.'}
              </p>
            </VIDCAnchor>

            <VIDCAnchor
              href={getFullPath('/resources/news/')}
              onClick={onClose}
              className="group block p-3.5 rounded-xl hover:bg-slate-50 transition-all cursor-pointer border border-transparent hover:border-slate-200/60"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Newspaper className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'Industry Trends & News' : 'Tin tức & Xu hướng công nghệ'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5">
                {isNonVn ? 'Latest cloud ecosystem news, telecommunication infrastructure, and digital transformation trends.' : 'Cập nhật thông tin công nghệ mới nhất, chuyển động thị trường và xu hướng số hóa.'}
              </p>
            </VIDCAnchor>

            <VIDCAnchor
              href={getFullPath('/resources/events/')}
              onClick={onClose}
              className="group block p-3.5 rounded-xl hover:bg-slate-50 transition-all cursor-pointer border border-transparent hover:border-slate-200/60"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'Conferences & Webinars' : 'Sự kiện & Hội thảo'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5">
                {isNonVn ? 'Join online workshops, enterprise summits, and technical training events.' : 'Đăng ký tham dự các buổi hội thảo, workshop và chương trình đào tạo trực tuyến.'}
              </p>
            </VIDCAnchor>
          </div>
        </div>

        {/* Section 2: Case Studies & Whitepapers */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)] border-l-2 border-[var(--vidc-color-brand-red)] pl-2">
            <Award className="w-4 h-4" />
            Case Studies &amp; Whitepapers
          </div>
          <div className="space-y-2.5">
            <VIDCAnchor
              href={getFullPath('/resources/case-studies/')}
              onClick={onClose}
              className="group block p-4 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'Customer Success Stories' : 'Câu chuyện Khách hàng Thành công'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5">
                {isNonVn ? 'Proven migration and optimization blueprints from tier-1 enterprise customers.' : 'Kinh nghiệm chuyển đổi số và tối ưu hóa hạ tầng từ các doanh nghiệp tiêu biểu.'}
              </p>
            </VIDCAnchor>

            <VIDCAnchor
              href={getFullPath('/resources/whitepapers/')}
              onClick={onClose}
              className="group block p-4 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'Technical Whitepapers' : 'Báo cáo Chuyên sâu Whitepaper'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5">
                {isNonVn ? 'Strategic research, compliance checklists, and high-performance cloud whitepapers.' : 'Tài liệu nghiên cứu, cẩm nang kiến trúc và báo cáo phân tích công nghệ.'}
              </p>
            </VIDCAnchor>
          </div>
        </div>

        {/* Section 3: Technical Docs Hub (External) */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)] border-l-2 border-[var(--vidc-color-brand-red)] pl-2">
            <FileCode className="w-4 h-4" />
            {isNonVn ? 'Technical Documentation' : 'Cổng Tài liệu Kỹ thuật'}
          </div>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-800 hover:border-red-200 hover:bg-white hover:shadow-md transition-all">
            <div className="w-8 h-8 rounded-xl text-[var(--vidc-color-brand-red)] flex items-center justify-center mb-3 border border-slate-200/60">
              <FileText className="w-4 h-4" />
            </div>

            <h4 className="text-sm font-bold text-slate-900">
              {isNonVn ? 'Technical Documentation' : 'Tài liệu kỹ thuật'}
            </h4>

            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              {isNonVn ? 'API references, CLI, SDK libraries, and secure cloud architectural blueprints.' : 'API guides, CLI, SDK tools và sơ đồ kiến trúc mây an toàn.'}
            </p>

            <VIDCAnchor
              href="https://docs.vtidc-test.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] mt-3 hover:underline"
            >
              <span>docs.vtidc-test.com</span>
              <ExternalLink className="w-3 h-3" />
            </VIDCAnchor>
          </div>
        </div>
      </div>
    </div>
  );
};

