import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  FileCheck, 
  Lock, 
  Globe, 
  ArrowRight, 
  ExternalLink, 
  Layers, 
  Building2, 
  Server,
  Trophy,
  Star,
  Download
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { AboutSubNav } from './AboutSubNav';
import { certificationsList, CertificationItem } from '../../data/aboutData';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface AboutCertificationsPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const AboutCertificationsPage: React.FC<AboutCertificationsPageProps> = ({
  currentMarket,
  onNavigateHome,
  currentPath = '/about/certifications/',
  onNavigate,
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Security' | 'Facility' | 'Quality'>('All');

  const awardsList = [
    {
      title: 'Vietnam Data Center Services Provider of the Year',
      organization: 'Frost & Sullivan Asia-Pacific Awards',
      years: '2020 - 2024 (5 năm liên tiếp)',
      description: 'Ghi nhận vị thế số 1 tại Việt Nam về năng lực mở rộng hạ tầng phòng máy, chất lượng dịch vụ khách hàng và ứng dụng công nghệ làm mát Xanh.',
      badge: 'Quốc tế'
    },
    {
      title: 'Giải Nhất "Sản Phẩm Số Xuất Sắc Make in Viet Nam"',
      organization: 'Bộ Thông tin và Truyền thông',
      years: 'Vinh danh chính thức',
      description: 'Trao tặng cho Nền tảng Điện toán Đám mây Viettel Cloud vì năng lực làm chủ 100% công nghệ lõi và bảo đảm an toàn chủ quyền dữ liệu quốc gia.',
      badge: 'Quốc gia'
    },
    {
      title: 'Danh Hiệu Sao Khuê Xuất Sắc',
      organization: 'Hiệp hội Phần mềm và Dịch vụ CNTT Việt Nam (VINASA)',
      years: '10+ năm liên tục đạt danh hiệu',
      description: 'Vinh danh cho các dịch vụ Trung tâm dữ liệu, Viettel Cloud Server, Giải pháp An toàn thông tin và Dịch vụ Quản trị Multi-Cloud.',
      badge: 'VINASA'
    },
    {
      title: 'Cloud Initiative of the Year - Vietnam',
      organization: 'Asian Telecom Awards',
      years: 'Khu vực Châu Á',
      description: 'Vinh danh sáng kiến phát triển hạ tầng AI Native và trung tâm dữ liệu thông minh PUE < 1.4 tại Đại TTDL Hòa Lạc.',
      badge: 'Châu Á'
    }
  ];

  const filteredCerts = certificationsList.filter(cert => {
    if (activeFilter === 'Security') return cert.category.includes('An toàn') || cert.category.includes('Bảo mật') || cert.category.includes('Thanh toán');
    if (activeFilter === 'Facility') return cert.category.includes('Data Center') || cert.category.includes('Năng lượng');
    if (activeFilter === 'Quality') return cert.category.includes('Chất lượng') || cert.category.includes('Kinh doanh');
    return true;
  });

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Certifications Grid Section */}
      <section id="certifications-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3.5">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-red-700">
                DANH MỤC TIÊU CHUẨN ĐÃ ĐẠT ĐƯỢC
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Hệ Thống Chứng Chỉ Chất Lượng &amp; Bảo Mật Quốc Tế
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-3xl">
              Được cấp và đánh giá kiểm toán định kỳ bởi các tổ chức uy tín hàng đầu thế giới.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'All', label: 'Tất cả chứng chỉ' },
              { id: 'Security', label: 'Bảo mật & An toàn' },
              { id: 'Facility', label: 'Hạ tầng Data Center' },
              { id: 'Quality', label: 'Chất lượng & Vận hành' },
            ].map((f) => (
              <VIDCNativeButton
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[var(--vidc-text-brand)] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-[var(--vidc-text-brand)] hover:border-red-200'
                }`}
              >
                {f.label}
              </VIDCNativeButton>
            ))}
          </div>
        </div>

        {/* Grid of Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[var(--vidc-text-brand)] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                    {cert.category}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {cert.code}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                  {cert.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {cert.description}
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs sm:text-sm text-slate-500">
                  <div>
                    <span className="font-bold text-slate-700">Tổ chức cấp:</span> {cert.issuedBy}
                  </div>
                  <div>
                    <span className="font-bold text-slate-700">Phạm vi áp dụng:</span> {cert.scope}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-700 font-bold">
                <span className="flex items-center gap-1.5 text-[var(--vidc-text-brand)]">
                  <CheckCircle2 className="w-4 h-4" />
                  Đang có hiệu lực
                </span>
                <span className="text-slate-400 font-normal">Kiểm toán định kỳ</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Showcase Section */}
      <section id="awards-section" className="bg-white border-y border-slate-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-red-700">
                BẢNG VÀNG DANH HIỆU
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Giải Thưởng Uy Tín Quốc Tế &amp; Trong Nước
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
              Sự ghi nhận từ các tổ chức nghiên cứu thị trường uy tín quốc tế và các cơ quan quản lý nhà nước.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awardsList.map((award, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase text-[var(--vidc-text-brand)] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                      {award.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {award.years}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                    {award.title}
                  </h3>

                  <div className="text-xs sm:text-sm font-bold text-[var(--vidc-text-brand)]">
                    {award.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {award.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
                  <Star className="w-4 h-4 text-[var(--vidc-text-brand)] fill-[var(--vidc-text-brand)]" />
                  <span>Chứng nhận thành tựu xuất sắc</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-red-900/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30">
              <Lock className="w-3.5 h-3.5" />
              <span>CHỦ QUYỀN DỮ LIỆU SỐ VIỆT NAM</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Cam Kết Tuân Thủ An Ninh Mạng &amp; Nghị Định 13
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
              Mọi dữ liệu của khách hàng lưu trữ trên hạ tầng Viettel IDC đều được bảo vệ trong lãnh thổ Việt Nam, tuân thủ nghiêm ngặt Luật An toàn thông tin mạng và quy định bảo vệ dữ liệu cá nhân.
            </p>
          </div>

          <div className="shrink-0">
            <VIDCAnchor
              href="/contact/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('/contact/');
              }}
              className="px-6 py-3.5 rounded-xl bg-[var(--vidc-text-brand)] hover:bg-[var(--vidc-legacy-hex-8f0027)] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-red-600/25 transition-all cursor-pointer"
            >
              <span>Liên hệ Tư vấn Tuân thủ</span>
              <ArrowRight className="w-4 h-4" />
            </VIDCAnchor>
          </div>
        </div>
      </section>
    </div>
  );
};
