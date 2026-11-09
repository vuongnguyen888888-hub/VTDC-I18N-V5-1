import React, { useState } from 'react';
import { ShieldCheck, Trophy, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export const StandardsAwardsTabsSection: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const [activeTab, setActiveTab] = useState<'certifications' | 'awards'>('certifications');

  // 10 Certifications
  const certifications = isNonVn ? [
    { name: 'ANSI/TIA-942-B:2017 Rated-3 Constructed Facilities', org: 'EPI Global', desc: 'Constructed data center infrastructure certified to highest global standards.' },
    { name: 'ANSI/TIA-942-B:2017 Rated-4 – Telecommunications', org: 'EPI Global', desc: 'Highest redundancy and availability for telecommunication and network fabric.' },
    { name: 'TIA-942 Rated 3', org: 'EPI Global', desc: '9 Viettel IDC data centers nationwide meeting international Rated 3 standards.' },
    { name: 'PCI DSS', org: 'PCI SSC', desc: 'Payment Card Industry Data Security Standard for cloud and digital services.' },
    { name: 'ISO/IEC 27001', org: 'BSI Compliance', desc: 'Information security management system certification.' },
    { name: 'ISO/IEC 27017:2015', org: 'BSI Compliance', desc: 'Cloud-specific information security controls.' },
    { name: 'ISO/IEC 22301:2019', org: 'BSI Compliance', desc: 'Business continuity management system.' },
    { name: 'SAP Cloud and Infrastructure Operations', org: 'SAP SE', desc: 'Certified infrastructure and cloud operations for SAP environments.' },
    { name: 'ISO 9001:2015', org: 'BSI Compliance', desc: 'Quality management system certification.' },
    { name: 'ISO 50001:2018', org: 'BSI Compliance', desc: 'Energy management system for green sustainable infrastructure.' },
  ] : [
    { name: 'ANSI/TIA-942-B:2017 Rated-3 Constructed Facilities', org: 'EPI Global', desc: 'Chứng nhận hạ tầng trung tâm dữ liệu đạt chuẩn quốc tế.' },
    { name: 'ANSI/TIA-942-B:2017 Rated-4 – Telecommunications Category', org: 'EPI Global', desc: 'Ghi nhận năng lực dự phòng và sẵn sàng cao của hệ thống viễn thông/mạng.' },
    { name: 'TIA-942 Rated 3', org: 'EPI Global', desc: '9 trung tâm dữ liệu Viettel IDC đạt chuẩn quốc tế Rated 3.' },
    { name: 'PCI DSS', org: 'PCI SSC', desc: 'Tiêu chuẩn bảo mật dữ liệu thẻ thanh toán cho hệ thống Cloud và dịch vụ số.' },
    { name: 'ISO/IEC 27001', org: 'BSI Compliance', desc: 'Hệ thống quản lý an toàn thông tin.' },
    { name: 'ISO/IEC 27017:2015', org: 'BSI Compliance', desc: 'Kiểm soát an toàn thông tin chuyên biệt cho dịch vụ Cloud.' },
    { name: 'ISO/IEC 22301:2019', org: 'BSI Compliance', desc: 'Hệ thống quản lý kinh doanh liên tục.' },
    { name: 'SAP Cloud and Infrastructure Operations', org: 'SAP SE', desc: 'Chứng nhận vận hành hạ tầng và Cloud cho môi trường SAP.' },
    { name: 'ISO 9001:2015', org: 'BSI Compliance', desc: 'Hệ thống quản lý chất lượng.' },
    { name: 'ISO 50001:2018', org: 'BSI Compliance', desc: 'Hệ thống quản lý năng lượng cho hạ tầng bền vững.' },
  ];

  // 10 Awards
  const awards = isNonVn ? [
    { name: 'Sao Khue Award 2024', category: 'Excellent Cloud Computing Platform', org: 'VINASA' },
    { name: 'Make in Viet Nam Award', category: 'Outstanding Digital Product for Enterprises', org: 'MIC' },
    { name: 'Vietnam Digital Awards 2023', category: 'Outstanding Digital Transformation Enterprise', org: 'VDCA' },
    { name: 'Frost & Sullivan Award', category: 'Vietnam Data Center Service Provider of the Year', org: 'Frost & Sullivan' },
    { name: 'Asia Pacific Enterprise Award', category: 'Asia Outstanding Enterprise', org: 'Enterprise Asia' },
    { name: 'Top 10 ICT Enterprises', category: '#1 Cloud Infrastructure Enterprise in Vietnam', org: 'VINASA' },
    { name: 'ASEAN Digital Awards', category: 'Digital Service Innovation of the Year', org: 'ASEAN Digital Ministers' },
    { name: 'National Brand Award', category: 'Vietnam National Brand 2022 - 2024', org: 'Ministry of Industry & Trade' },
    { name: 'Asian Technology Excellence', category: 'Vietnam Infrastructure Technology Award', org: 'Asian Business Review' },
    { name: 'Press Golden Cup', category: 'Trusted Digital Infrastructure for National Media', org: 'Vietnam Journalists Association' },
  ] : [
    { name: 'Giải thưởng Sao Khuê 2024', category: 'Nền tảng Điện toán Đám mây Xuất sắc', org: 'VINASA' },
    { name: 'Giải thưởng Make in Viet Nam', category: 'Sản phẩm Số Xuất sắc cho Khối Doanh nghiệp', org: 'Bộ Thông tin & Truyền thông' },
    { name: 'Vietnam Digital Awards 2023', category: 'Doanh nghiệp Chuyển đổi số Xuất sắc', org: 'VDCA' },
    { name: 'Frost & Sullivan Award', category: 'Vietnam Data Center Service Provider of the Year', org: 'Frost & Sullivan' },
    { name: 'Asia Pacific Enterprise Award', category: 'Doanh nghiệp Xuất sắc Châu Á', org: 'Enterprise Asia' },
    { name: 'Top 10 Doanh nghiệp ICT', category: 'Top 1 Doanh nghiệp Hạ tầng Đám mây Việt Nam', org: 'VINASA' },
    { name: 'ASEAN Digital Awards', category: 'Digital Service Innovation of the Year', org: 'ASEAN Digital Ministers' },
    { name: 'Giải Thương hiệu Quốc gia', category: 'Thương hiệu Quốc gia Việt Nam 2022 - 2024', org: 'Bộ Công Thương' },
    { name: 'Asian Technology Excellence', category: 'Vietnam Infrastructure Technology Award', org: 'Asian Business Review' },
    { name: 'Cúp Vàng Báo chí', category: 'Hạ tầng số tin cậy cho Khối Báo chí Quốc gia', org: 'Hội Nhà báo Việt Nam' },
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-slate-200/80 relative">
      <div className="vidc-container space-y-12">
        {/* Header & Tabs */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
              {isNonVn ? 'PRESTIGE & HIGHEST COMPLIANCE' : 'UY TÍN & TUÂN THỦ CAO NHẤT'}
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-center">
            {t.standardsSection.title}
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed text-center max-w-2xl">
            {t.standardsSection.subtitle}
          </p>

          {/* 2 Tabs Toggle (DS-V8 Segmented Control - Compact) */}
          <div className="inline-flex p-1 rounded-full bg-slate-100 border border-slate-200 shrink-0">
            <VIDCNativeButton
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeTab === 'certifications'
                  ? 'bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-reference-hover)] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 font-medium'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>{isNonVn ? '10 International Certifications' : 'Chứng nhận Quốc tế'}</span>
            </VIDCNativeButton>
            <VIDCNativeButton
              onClick={() => setActiveTab('awards')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeTab === 'awards'
                  ? 'bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-reference-hover)] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 font-medium'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 shrink-0" />
              <span>{isNonVn ? 'Prestigious Awards' : 'Giải thưởng Danh giá'}</span>
            </VIDCNativeButton>
          </div>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'certifications' ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)]">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-2">
              <VIDCAnchor
                href="#all-certifications"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-red-50 hover:bg-[var(--vidc-color-brand-red)] text-[var(--vidc-color-brand-red)] hover:text-white border border-red-200/80 text-xs font-bold transition-all group cursor-pointer"
              >
                <span>{isNonVn ? 'View all certifications' : 'Xem tất cả chứng chỉ'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </VIDCAnchor>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)]">
                        <Trophy className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {award.name}
                    </h3>
                    <p className="text-xs text-[var(--vidc-color-text-brand)] font-medium leading-relaxed">
                      {award.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center pt-2">
              <VIDCAnchor
                href="#all-awards"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-red-50 hover:bg-[var(--vidc-color-brand-red)] text-[var(--vidc-color-brand-red)] hover:text-white border border-red-200/80 text-xs font-bold transition-all group cursor-pointer"
              >
                <span>{isNonVn ? 'View all awards' : 'Xem tất cả giải thưởng'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </VIDCAnchor>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

