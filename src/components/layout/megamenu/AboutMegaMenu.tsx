import React from 'react';
import { Building, Server, Leaf, Users, ArrowRight, X, Newspaper, Award, Briefcase } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface AboutMegaMenuProps {
  onClose: () => void;
  currentMarketPath: string;
}

export const AboutMegaMenu: React.FC<AboutMegaMenuProps> = ({ onClose, currentMarketPath }) => {
  const { isNonVn, getFullPath: localizedPath } = useLanguage();

  const getFullPath = (path: string) => {
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
        className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-all z-10 cursor-pointer"
      >
        <X className="w-5 h-5" />
      </VIDCNativeButton>

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-4 pr-10">
        <div>
          <h3 className="text-lg font-bold text-slate-900 tracking-wide">
            {isNonVn 
              ? 'Leading Data Center & Cloud Services Ecosystem in Vietnam' 
              : 'Hệ sinh thái dịch vụ TTDL và Đám mây hàng đầu Việt Nam'}
          </h3>
          <p className="text-xs text-slate-500">
            {isNonVn 
              ? '18+ years architecting digital infrastructure, international tier standards, and powering digital transformation' 
              : '18 năm kiến tạo hạ tầng số, trung tâm dữ liệu chuẩn quốc tế và tiên phong đồng hành chuyển đổi số'}
          </p>
        </div>
        <VIDCAnchor
          href={getFullPath('/about/')}
          onClick={onClose}
          className="text-xs text-[var(--vidc-color-brand-red)] hover:text-[var(--vidc-button-primary-background-hover)] font-bold flex items-center gap-1 group shrink-0 transition-colors"
        >
          <span>{isNonVn ? 'Explore company overview' : 'Xem tổng quan giới thiệu'}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </VIDCAnchor>
      </div>

      {/* 4 Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Nhóm 1: Doanh nghiệp & Phát triển bền vững */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)] border-l-2 border-[var(--vidc-color-brand-red)] pl-2">
            <Building className="w-4 h-4" />
            {isNonVn ? 'Enterprise & Sustainability' : 'Doanh Nghiệp & Bền Vững'}
          </div>
          <div className="space-y-2">
            <VIDCAnchor
              href={getFullPath('/about/')}
              onClick={onClose}
              className="group block p-3.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all cursor-pointer"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Building className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'About Us, History & Mission' : 'Về Viettel IDC, Lịch Sử & Sứ Mệnh'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5 leading-relaxed">
                {isNonVn ? '18+ years engineering digital infrastructure, leading digital sovereignty across ASEAN.' : '18 năm kiến tạo hạ tầng số, tiên phong đồng hành cùng chuyển đổi số quốc gia.'}
              </p>
            </VIDCAnchor>

            <VIDCAnchor
              href={getFullPath('/about/esg/')}
              onClick={onClose}
              className="group block p-3.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all cursor-pointer"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Leaf className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'ESG & Green Standards' : 'ESG & Tiêu Chuẩn Xanh'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5 leading-relaxed">
                {isNonVn ? 'Net Zero 2040 roadmap, Green Data Center PUE < 1.4, and clean renewable energy.' : 'Lộ trình Net Zero 2040, Green Data Center PUE < 1.4 và năng lượng sạch.'}
              </p>
            </VIDCAnchor>

            <VIDCAnchor
              href={getFullPath('/about/csr/')}
              onClick={onClose}
              className="group block p-3.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all cursor-pointer"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'Social Responsibility (CSR)' : 'Trách Nhiệm Xã Hội (CSR)'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5 leading-relaxed">
                {isNonVn ? 'Healthcare sponsorships, university partnerships, and community technology initiatives.' : 'Bảo trợ y tế, tài trợ giáo dục đại học và các hoạt động vì cộng đồng nhân văn.'}
              </p>
            </VIDCAnchor>
          </div>
        </div>

        {/* Nhóm 2: Hạ tầng & Tiêu chuẩn */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)] border-l-2 border-[var(--vidc-color-brand-red)] pl-2">
            <Server className="w-4 h-4" />
            {isNonVn ? 'Infrastructure & Standards' : 'Hạ Tầng & Tiêu Chuẩn'}
          </div>
          <div className="space-y-2">
            <VIDCAnchor
              href={getFullPath('/about/data-centers/')}
              onClick={onClose}
              className="group block p-3.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all cursor-pointer"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Server className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? '9 Tier-3 Data Centers' : 'Hạ Tầng 9 Data Center'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5 leading-relaxed">
                {isNonVn ? 'Network of 9 TIA-942 Rated 3 facilities across 32,000+ m² in Northern, Central & Southern regions.' : 'Hệ thống 9 TTDL chuẩn TIA-942 Rated 3 rộng hơn 32.000m² tại 3 miền Bắc - Trung - Nam.'}
              </p>
            </VIDCAnchor>

            <VIDCAnchor
              href={getFullPath('/about/certifications/')}
              onClick={onClose}
              className="group block p-3.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all cursor-pointer"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'Certifications & Accreditations' : 'Chứng Nhận & Giải Thưởng'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5 leading-relaxed">
                ANSI/TIA-942 Rated 3, ISO 27001, ISO 27017, PCI-DSS v4.0, Frost &amp; Sullivan.
              </p>
            </VIDCAnchor>
          </div>
        </div>

        {/* Nhóm 3: Truyền Thông & Báo Chí */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)] border-l-2 border-[var(--vidc-color-brand-red)] pl-2">
            <Newspaper className="w-4 h-4" />
            {isNonVn ? 'Press & Media' : 'Truyền Thông & Báo Chí'}
          </div>
          <div className="space-y-2">
            <VIDCAnchor
              href={getFullPath('/about/press/')}
              onClick={onClose}
              className="group block p-3.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all cursor-pointer"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Newspaper className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'Press Releases' : 'Thông Cáo Báo Chí'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5 leading-relaxed">
                {isNonVn ? 'Corporate milestones, strategic announcements, and official brand press kit.' : 'Tin tức hoạt động, công bố hợp tác chiến lược và tài liệu Media Kit chính thức.'}
              </p>
            </VIDCAnchor>
          </div>
        </div>

        {/* Nhóm 4: Cơ Hội Nghề Nghiệp */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)] border-l-2 border-[var(--vidc-color-brand-red)] pl-2">
            <Briefcase className="w-4 h-4" />
            {isNonVn ? 'Careers' : 'Cơ Hội Nghề Nghiệp'}
          </div>
          <div className="space-y-2">
            <VIDCAnchor
              href={getFullPath('/about/careers/')}
              onClick={onClose}
              className="group block p-3.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/60 transition-all cursor-pointer"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                <span>{isNonVn ? 'Careers at Viettel IDC' : 'Cơ Hội Nghề Nghiệp'}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 pl-6.5 leading-relaxed">
                {isNonVn ? 'Join our mission powering digital transformation with competitive benefits and global-standard engineering teams.' : 'Gia nhập đội ngũ kiến tạo hạ tầng số quốc gia với chế độ đãi ngộ hàng đầu, môi trường quốc tế.'}
              </p>
            </VIDCAnchor>
          </div>
        </div>

      </div>
    </div>
  );
};


