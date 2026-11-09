import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Newspaper, 
  Sparkles, 
  Calendar, 
  Tag, 
  ArrowRight, 
  Download, 
  FileText, 
  Share2, 
  Search, 
  ExternalLink, 
  Mail, 
  Phone, 
  Building2,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { AboutSubNav } from './AboutSubNav';
import { pressReleases, PressRelease } from '../../data/aboutData';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface AboutPressPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const AboutPressPage: React.FC<AboutPressPageProps> = ({
  currentMarket,
  onNavigateHome,
  currentPath = '/about/press/',
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadMediaKitSuccess, setDownloadMediaKitSuccess] = useState(false);

  const categories = ['All', 'Sự kiện nổi bật', 'Hợp tác quốc tế', 'Giải thưởng', 'Chứng chỉ & Tiêu chuẩn'];

  const filteredPress = useMemo(() => {
    return pressReleases.filter((pr) => {
      const matchCategory = selectedCategory === 'All' || pr.category === selectedCategory;
      const matchSearch = !searchQuery.trim() ||
        pr.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pr.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleDownloadMediaKit = () => {
    setDownloadMediaKitSuccess(true);
    setTimeout(() => setDownloadMediaKitSuccess(false), 3000);
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Featured Press Release Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase text-[var(--vidc-text-brand)] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                Sự Kiện Nổi Bật Mới Nhất
              </span>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[var(--vidc-text-brand)]" />
                10/04/2024
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              Viettel IDC khai trương Đại Trung tâm Dữ liệu xanh lớn nhất Việt Nam tại Hòa Lạc
            </h3>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Quy mô 21.000m² với công suất 30MW, TTDL Viettel Hòa Lạc đánh dấu bước ngoặt lớn về hạ tầng Green Data Center và tính toán AI hiệu năng cao tại Việt Nam.
            </p>
          </div>

          <div className="shrink-0">
            <VIDCAnchor
              href="/about/data-centers/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('/about/data-centers/');
              }}
              className="px-6 py-3.5 rounded-xl bg-[var(--vidc-text-brand)] hover:bg-[var(--vidc-legacy-hex-a00022)] text-white text-xs sm:text-sm font-bold shadow-md shadow-red-500/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Xem chi tiết Đại TTDL Hòa Lạc</span>
              <ArrowRight className="w-4 h-4" />
            </VIDCAnchor>
          </div>
        </div>
      </section>

      {/* Press Releases List Section */}
      <section id="press-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3.5">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-red-700">
                DANH SÁCH BẢN TIN CHÍNH THỨC
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Tất Cả Thông Cáo Báo Chí &amp; Sự Kiện
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Cập nhật các hoạt động hợp tác chiến lược, thành tựu công nghệ và thông tin báo chí mới nhất từ Viettel IDC.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <VIDCNativeButton
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[var(--vidc-text-brand)] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-[var(--vidc-text-brand)] hover:border-red-200'
                }`}
              >
                {cat === 'All' ? 'Tất cả tin bài' : cat}
              </VIDCNativeButton>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-8 max-w-xl">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <VIDCNativeInput
            type="text"
            placeholder="Tìm kiếm thông cáo báo chí (Hòa Lạc, Qualcomm, Frost & Sullivan, PCI-DSS...)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Press Releases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPress.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[var(--vidc-text-brand)] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                    {item.category}
                  </span>
                  <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[var(--vidc-text-brand)]" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                <span className="text-slate-500 italic">Nguồn: {item.source}</span>
                <span className="text-[var(--vidc-text-brand)] font-bold flex items-center gap-1">
                  <span>Toàn văn bài viết</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Kit Download Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-red-900/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-500/30">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>TÀI NGUYÊN TRUYỀN THÔNG (MEDIA ASSETS)</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Tải Bộ Nhận Diện Thương Hiệu &amp; Media Kit
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
              Bao gồm trọn bộ logo chuẩn (AI, EPS, PNG), hình ảnh phối cảnh phòng máy Data Center độ phân giải cao và hồ sơ năng lực chính thức của Viettel IDC dành riêng cho báo chí.
            </p>
          </div>

          <div className="shrink-0">
            <VIDCNativeButton
              onClick={handleDownloadMediaKit}
              className="px-6 py-3.5 rounded-xl bg-[var(--vidc-text-brand)] hover:bg-[var(--vidc-legacy-hex-8f0027)] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-red-600/20 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{downloadMediaKitSuccess ? 'Đang xuất tệp Media Kit...' : 'Tải Trọn Bộ Media Kit (.ZIP)'}</span>
            </VIDCNativeButton>
          </div>
        </div>
      </section>
    </div>
  );
};
