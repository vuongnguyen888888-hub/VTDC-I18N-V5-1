import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  History, 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Cpu, 
  Globe, 
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Calendar,
  TrendingUp,
  Server,
  Leaf,
  Users,
  Copy,
  Check,
  Clock,
  Send,
  Headphones,
  Layers,
  Activity,
  Database
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { AboutSubNav } from './AboutSubNav';
import { 
  historyMilestones, 
  coreValuesData, 
  officeLocations 
} from '../../data/aboutData';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface AboutOverviewPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const AboutOverviewPage: React.FC<AboutOverviewPageProps> = ({
  currentMarket,
  onNavigateHome,
  currentPath = '/about/',
  onNavigate,
}) => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(historyMilestones.length - 1);
  const milestoneTabsRef = useRef<HTMLDivElement>(null);
  const milestoneButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeBtn = milestoneButtonsRef.current[activeMilestoneIndex];
    if (activeBtn && milestoneTabsRef.current) {
      const container = milestoneTabsRef.current;
      const left = activeBtn.offsetLeft - container.offsetWidth / 2 + activeBtn.offsetWidth / 2;
      container.scrollTo({
        left: Math.max(0, left),
        behavior: 'smooth'
      });
    }
  }, [activeMilestoneIndex]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    requirement: 'Hạ tầng Data Center & Điện toán đám mây'
  });

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Section: Tổng Quan Doanh Nghiệp & Năng Lực Cốt Lõi (Corporate Overview) - Bento Grid DS */}
      <section className="bg-white py-16 md:py-24 border-b border-slate-200/80 relative">
        <div className="vidc-container space-y-10 sm:space-y-12">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center space-y-3.5 max-w-5xl mx-auto">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-red-700">
                TỔNG QUAN DOANH NGHIỆP &amp; NĂNG LỰC CỐT LÕI
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-center leading-tight whitespace-normal lg:whitespace-nowrap">
              Nền Tảng Hạ Tầng Số Vững Chắc Cho Kỷ Nguyên AI
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto text-center">
              Công ty Cổ phần Viettel - CHT (Viettel IDC) – thành viên của Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel), là đơn vị tiên phong cung cấp giải pháp Hạ tầng Trung tâm Dữ liệu, Điện toán Đám mây, AI Computing và An toàn Thông tin dẫn đầu tại Việt Nam.
            </p>
          </div>

          {/* Bento Grid Layout (Inspired by Reference Image & Viettel Brand Design System) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1 (Left Tall Card - 4 Cols on LG, spanning 2 rows) */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
              <img alt="40.000+ Khách hàng doanh nghiệp Viettel IDC" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              {/* Smooth gradient fade to bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

            </div>

            <div className="p-6 sm:p-8 -mt-6 relative z-10 space-y-3">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                40.000+ Khách Hàng
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Đồng hành và phục vụ hơn 40.000 tổ chức, cơ quan Chính phủ, ngân hàng, tổ chức tài chính, doanh nghiệp đa quốc gia và tập đoàn FDI trên hành trình chuyển đổi số và phát triển bền vững.
              </p>
            </div>
          </div>

          {/* Right Bento Area (8 Cols on LG) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6">
            {/* Card 2 (Top-Left Stat: 09 Trung tâm dữ liệu - 5 Cols on SM/LG) */}
            <div className="sm:col-span-5 bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-red-50/40 rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-sans tracking-tight group-hover:text-[var(--vidc-text-brand)] transition-colors">
                  09
                </div>
                <div className="text-sm sm:text-base font-extrabold text-slate-800 mt-3 font-sans">
                  Trung tâm dữ liệu
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal font-sans">
                  Chuẩn ANSI/TIA-942 Rated 3 toàn quốc
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[var(--vidc-text-brand)] font-sans">
                <Server className="w-4 h-4" />
                <span>Quy mô lớn nhất Việt Nam</span>
              </div>
            </div>

            {/* Card 3 (Top-Right: 300+ Chứng chỉ & Giải thưởng Quốc tế - 7 Cols on SM/LG) */}
            <div className="sm:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-2">
                <span className="text-[11px] font-black uppercase text-[var(--vidc-text-brand)] tracking-wider block font-sans">
                  Tiêu Chuẩn &amp; Uy Tín Toàn Cầu
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug font-sans">
                  300+ Chứng Chỉ &amp; Giải Thưởng Quốc Tế
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal font-sans">
                  Đạt trọn bộ chứng chỉ khắt khe hàng đầu thế giới: ISO 27001, ISO 27017, ISO 27018, PCI-DSS Level 1, CSA STAR, SOC 1/2/3 cùng hàng trăm giải thưởng danh giá.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">
                <VIDCAnchor
                  href="/about/certifications/"
                  className="text-xs font-bold text-[var(--vidc-text-brand)] hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform font-sans"
                >
                  <span>Xem tất cả chứng chỉ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </VIDCAnchor>
              </div>
            </div>

            {/* Card 4 (Bottom-Left: Hệ Sinh Thái 60+ Dịch Vụ - 8 Cols on SM/LG) */}
            <div className="sm:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
              {/* Atmospheric background mesh gradient */}
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-tr from-red-100/60 via-indigo-100/40 to-transparent rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <span className="text-[11px] font-black uppercase text-[var(--vidc-text-brand)] tracking-wider block font-sans">
                  Hạ Tầng Số Hóa Thế Hệ Mới
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug font-sans">
                  Hệ Sinh Thái 60+ Dịch Vụ
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl font-sans">
                  Cung cấp toàn diện từ Hạ tầng Trung tâm Dữ liệu, Viettel Cloud (IaaS, PaaS, SaaS, Hybrid &amp; Multi-Cloud), giải pháp An toàn thông tin cho đến Hạ tầng Siêu tính toán GPU Cloud phục vụ AI, LLM và Phân tích dữ liệu lớn.
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium font-sans">
                <span>Đáp ứng toàn diện mọi nhu cầu hạ tầng số doanh nghiệp</span>
                <VIDCAnchor
                  href="/services"
                  className="font-bold text-[var(--vidc-text-brand)] hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Khám phá dịch vụ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </VIDCAnchor>
              </div>
            </div>

            {/* Card 5 (Bottom-Right: 600+ Nhân sự chất lượng cao - 4 Cols on SM/LG) */}
            <div className="sm:col-span-4 bg-gradient-to-br from-rose-50/70 via-red-50/40 to-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center items-center group">
              <div className="my-auto py-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-sans tracking-tight group-hover:text-[var(--vidc-text-brand)] transition-colors whitespace-nowrap">
                  600+
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-slate-800 mt-2 font-sans">
                  Nhân sự chất lượng cao
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-2 leading-relaxed font-normal font-sans">
                  Đội ngũ kỹ sư và chuyên gia hàng đầu sở hữu các chứng chỉ quốc tế chuyên sâu về Cloud, AI, Security và Data Center.
                </p>
              </div>

              <div className="w-full mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-bold text-[var(--vidc-text-brand)] font-sans">
                CDCE • CISSP • AWS/Azure
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Section: Tầm Nhìn - Sứ Mệnh - Giá Trị Cốt Lõi */}
      <section className="bg-slate-50/60 border-b border-slate-200/80 py-16 md:py-24 relative">
        <div className="vidc-container space-y-12">
          <div className="flex flex-col items-center text-center space-y-3.5 max-w-5xl mx-auto">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-red-700">
                ĐỊNH HƯỚNG PHÁT TRIỂN
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-center leading-tight whitespace-normal lg:whitespace-nowrap">
              Tầm Nhìn, Sứ Mệnh &amp; Giá Trị Cốt Lõi
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto text-center">
              Viettel IDC không chỉ cung cấp dịch vụ hạ tầng công nghệ, mà là người bạn đồng hành tin cậy, bảo đảm an toàn tuyệt đối cho dòng chảy dữ liệu của đất nước.
            </p>
          </div>

          {/* 2 Big Cards: Tầm Nhìn & Sứ Mệnh */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tầm Nhìn */}
            <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 hover:border-red-200 transition-all group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-50/60 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-[var(--vidc-text-brand)] group-hover:bg-[var(--vidc-text-brand)] group-hover:text-white flex items-center justify-center transition-colors">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[var(--vidc-text-brand)]">
                  TẦM NHÌN
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  Dẫn đầu về dịch vụ Trung tâm dữ liệu &amp; Điện toán đám mây
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Tiên phong về giải pháp, công nghệ mới phục vụ xã hội số.
                </p>
              </div>
            </div>

            {/* Sứ Mệnh */}
            <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 hover:border-red-200 transition-all group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-50/60 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-[var(--vidc-text-brand)] group-hover:bg-[var(--vidc-text-brand)] group-hover:text-white flex items-center justify-center transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-[var(--vidc-text-brand)]">
                  SỨ MỆNH
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                  Phát triển và làm chủ nền tảng Cloud của người Việt
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Mang đến những giải pháp tối ưu, đáng tin cậy nhất cho khách hàng, tạo nền tảng cho sự sáng tạo và phát triển của đối tác và doanh nghiệp.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValuesData.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-text-brand)] group-hover:bg-[var(--vidc-text-brand)] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                  {idx === 0 && <Sparkles className="w-6 h-6" />}
                  {idx === 1 && <ShieldCheck className="w-6 h-6" />}
                  {idx === 2 && <HeartHandshake className="w-6 h-6" />}
                  {idx === 3 && <Award className="w-6 h-6" />}
                </div>
                <div className="text-xs font-black text-[var(--vidc-text-brand)] uppercase tracking-wider">
                  {item.subtitle}
                </div>
                <h4 className="text-base font-black text-slate-900 mt-1 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Lịch Sử Hình Thành & Các Mốc Son Phát Triển (Dạng Click Tab Gọn Gàng) */}
      <section className="bg-white border-y border-slate-200 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3.5">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-red-700">
                HÀNH TRÌNH 18 NĂM TIÊN PHONG
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Lịch Sử Hình Thành &amp; Dấu Ấn Phát Triển
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
              Chọn từng mốc thời gian bên dưới để xem chi tiết dấu ấn phát triển của Viettel IDC.
            </p>
          </div>

          {/* Tab Selection Bar - 1 Hàng Có Thanh Cuộn (2008 bên trái -> 2025 bên phải) */}
          <div className="relative mb-8 max-w-5xl mx-auto">
            {/* Scrollable 1-row container */}
            <div
              ref={milestoneTabsRef}
              className="flex items-center gap-2 overflow-x-auto whitespace-nowrap px-1 sm:px-2 py-2 pb-3 scroll-smooth [scrollbar-width:thin] [scrollbar-color:#cbd5e1_#f1f5f9]"
            >
              {historyMilestones.map((item, idx) => {
                const isActive = activeMilestoneIndex === idx;
                return (
                  <VIDCNativeButton
                    key={idx}
                    ref={(el) => { milestoneButtonsRef.current[idx] = el; }}
                    type="button"
                    onClick={() => setActiveMilestoneIndex(idx)}
                    className={`inline-flex shrink-0 items-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[var(--vidc-text-brand)] text-white border border-[var(--vidc-text-brand)] shadow-md shadow-red-900/25 scale-[1.03]'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 shadow-2xs'
                    }`}
                  >
                    <span className="tracking-tight">{item.year}</span>
                  </VIDCNativeButton>
                );
              })}
            </div>
          </div>

          {/* Active Milestone Card */}
          {(() => {
            const currentItem = historyMilestones[activeMilestoneIndex] || historyMilestones[0];
            return (
              <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden transition-all">
                {/* Decorative Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-100/40 rounded-full blur-3xl -z-0 pointer-events-none" />

                <div className="relative z-10">
                  {/* Top metadata bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-200/80">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--vidc-text-brand)] text-white text-xs sm:text-sm font-black tracking-tight">
                        <Calendar className="w-3.5 h-3.5" />
                        Năm {currentItem.year}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500">
                      Giai đoạn {activeMilestoneIndex + 1} / {historyMilestones.length}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 leading-snug">
                    {currentItem.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
                    {currentItem.description}
                  </p>

                  {/* Highlights list */}
                  {currentItem.highlights && currentItem.highlights.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-slate-200/80">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                        Chi tiết dấu ấn nổi bật:
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {currentItem.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs text-xs sm:text-sm text-slate-700 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[var(--vidc-text-brand)] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Navigation controls */}
                  <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center justify-between gap-4">
                    <VIDCNativeButton
                      type="button"
                      disabled={activeMilestoneIndex === 0}
                      onClick={() => setActiveMilestoneIndex((prev) => Math.max(0, prev - 1))}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[var(--vidc-text-brand)] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer px-3 py-1.5 rounded-lg hover:bg-slate-200/60"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Giai đoạn trước</span>
                    </VIDCNativeButton>

                    {/* Step Indicator Dots */}
                    <div className="flex items-center gap-1.5">
                      {historyMilestones.map((_, dotIdx) => (
                        <VIDCNativeButton
                          key={dotIdx}
                          type="button"
                          onClick={() => setActiveMilestoneIndex(dotIdx)}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            activeMilestoneIndex === dotIdx
                              ? 'w-6 bg-[var(--vidc-text-brand)]'
                              : 'w-2 bg-slate-300 hover:bg-slate-400'
                          }`}
                          aria-label={`Chuyển sang mốc ${historyMilestones[dotIdx].year}`}
                        />
                      ))}
                    </div>

                    <VIDCNativeButton
                      type="button"
                      disabled={activeMilestoneIndex === historyMilestones.length - 1}
                      onClick={() => setActiveMilestoneIndex((prev) => Math.min(historyMilestones.length - 1, prev + 1))}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[var(--vidc-text-brand)] disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer px-3 py-1.5 rounded-lg hover:bg-slate-200/60"
                    >
                      <span>Giai đoạn sau</span>
                      <ChevronRight className="w-4 h-4" />
                    </VIDCNativeButton>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Section: Global Technology Alliances (2-Row Marquee Animation) */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-16 sm:py-20 overflow-hidden">
        <div className="vidc-container text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-[var(--vidc-text-brand)] text-xs font-bold border border-red-100 uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>LIÊN MINH CHIẾN LƯỢC TOÀN CẦU</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Hợp Tác Chiến Lược Cùng Các Tập Đoàn Công Nghệ Toàn Cầu
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto mt-3">
            Viettel IDC liên tục hợp tác sâu rộng cùng các hãng công nghệ hàng đầu thế giới để làm chủ công nghệ, chuyển giao tri thức và đem lại hệ sinh thái giải pháp số tân tiến nhất.
          </p>
        </div>

        {/* 2-Row Marquee Container (No Background, Clean Homepage Style) */}
        <div className="space-y-6">
          {/* Row 1 - Marquee left */}
          <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 sm:before:w-32 before:bg-gradient-to-r before:from-slate-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 sm:after:w-32 after:bg-gradient-to-l after:from-slate-50 after:to-transparent">
            <div className="animate-marquee-smooth flex items-center gap-8 sm:gap-12 py-2">
              {[
                { name: 'NVIDIA', code: 'NVDA', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
                { name: 'Microsoft', code: 'MSFT', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
                { name: 'VMware', code: 'VMW', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/VMware_logo.svg' },
                { name: 'Cisco Systems', code: 'CSCO', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
                { name: 'Qualcomm', code: 'QCOM', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Qualcomm-Logo.svg' },
                { name: 'Amazon Web Services', code: 'AWS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
                { name: 'Intel', code: 'INTC', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg' },
                { name: 'Dell Technologies', code: 'DELL', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.svg' },
                { name: 'NVIDIA', code: 'NVDA-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
                { name: 'Microsoft', code: 'MSFT-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
                { name: 'VMware', code: 'VMW-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/VMware_logo.svg' },
                { name: 'Cisco Systems', code: 'CSCO-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
                { name: 'Qualcomm', code: 'QCOM-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Qualcomm-Logo.svg' },
                { name: 'Amazon Web Services', code: 'AWS-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
                { name: 'Intel', code: 'INTC-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg' },
                { name: 'Dell Technologies', code: 'DELL-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.svg' }
              ].map((partner, idx) => (
                <div
                  key={`r1-${partner.code}-${idx}`}
                  className="group flex items-center justify-center shrink-0 h-12 min-w-[130px] cursor-pointer"
                  title={partner.name}
                >
                  <img alt={partner.name} src={partner.logoUrl} className="h-6 sm:h-7 w-auto max-w-[120px] object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" loading="lazy" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Marquee reverse / right */}
          <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 sm:before:w-32 before:bg-gradient-to-r before:from-slate-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 sm:after:w-32 after:bg-gradient-to-l after:from-slate-50 after:to-transparent">
            <div className="animate-marquee-smooth-reverse flex items-center gap-8 sm:gap-12 py-2">
              {[
                { name: 'Red Hat', code: 'RHT', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg' },
                { name: 'Fortinet', code: 'FTNT', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Fortinet_logo.svg' },
                { name: 'Veeam', code: 'VEEM', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Veeam_logo.svg' },
                { name: 'Oracle', code: 'ORCL', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
                { name: 'SAP', code: 'SAP', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
                { name: 'HPE', code: 'HPE', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg' },
                { name: 'IBM', code: 'IBM', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
                { name: 'Palo Alto Networks', code: 'PANW', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Palo_Alto_Networks_2020_Logo.svg' },
                { name: 'Red Hat', code: 'RHT-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg' },
                { name: 'Fortinet', code: 'FTNT-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Fortinet_logo.svg' },
                { name: 'Veeam', code: 'VEEM-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Veeam_logo.svg' },
                { name: 'Oracle', code: 'ORCL-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
                { name: 'SAP', code: 'SAP-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
                { name: 'HPE', code: 'HPE-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg' },
                { name: 'IBM', code: 'IBM-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
                { name: 'Palo Alto Networks', code: 'PANW-2', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Palo_Alto_Networks_2020_Logo.svg' }
              ].map((partner, idx) => (
                <div
                  key={`r2-${partner.code}-${idx}`}
                  className="group flex items-center justify-center shrink-0 h-12 min-w-[130px] cursor-pointer"
                  title={partner.name}
                >
                  <img alt={partner.name} src={partner.logoUrl} className="h-6 sm:h-7 w-auto max-w-[120px] object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" loading="lazy" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Trụ Sở & Chi Nhánh Viettel IDC (Standalone 3-Column Section with Images) */}
      <section className="bg-white border-b border-slate-200 py-16 md:py-24">
        <div className="vidc-container space-y-12">
          <div className="flex flex-col items-center text-center space-y-3.5 max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-red-700">
                MẠNG LƯỚI VĂN PHÒNG TOÀN QUỐC
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight text-center leading-tight whitespace-normal lg:whitespace-nowrap">
              Trụ Sở &amp; Chi Nhánh Viettel IDC
            </h2>
            <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed text-center">
              Hiện diện trực tiếp tại 3 trung tâm kinh tế trọng điểm của đất nước, sẵn sàng hỗ trợ và tư vấn giải pháp trực tiếp cho Quý doanh nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Hà Nội */}
            <div className="rounded-3xl bg-white border border-slate-200/90 hover:border-red-300 hover:shadow-xl transition-all flex flex-col justify-between group overflow-hidden">
              <div>
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img alt="Trụ sở Viettel IDC Hà Nội - Hapulico Center Building" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-black uppercase px-3 py-1.5 rounded-full bg-[var(--vidc-text-brand)] text-white shadow-md">
                      Trụ sở chính
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-bold text-slate-200">Khu vực Miền Bắc</span>
                    <span className="text-[11px] font-medium text-slate-300 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">Hapulico Center</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900">Hà Nội</h3>
                      <span className="text-[11px] text-slate-500 font-medium">Trụ sở Tổng Công ty Viettel IDC</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-2.5">
                    <div className="text-xs font-bold text-slate-700">Điện thoại / Hotline:</div>
                    <div className="space-y-1.5">
                      <VIDCAnchor
                        href="tel:02462728866"
                        className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[var(--vidc-text-brand)] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[var(--vidc-text-brand)]" />
                        <span>024 6272 8866</span>
                      </VIDCAnchor>
                      <VIDCAnchor
                        href="tel:02462692129"
                        className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[var(--vidc-text-brand)] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-slate-400" />
                        <span>024 6269 2129</span>
                      </VIDCAnchor>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <div className="text-xs font-bold text-slate-700">Địa chỉ văn phòng:</div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Tầng 16, Hapulico Center Building, Số 85 Vũ Trọng Phụng, P.Thanh Xuân, TP. Hà Nội
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">Miền Bắc</span>
                <VIDCNativeButton
                  onClick={() => handleCopy('Tầng 16, Hapulico Center Building, Số 85 Vũ Trọng Phụng, P.Thanh Xuân, TP. Hà Nội')}
                  className="text-xs text-[var(--vidc-text-brand)] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                >
                  {copiedAddress === 'Tầng 16, Hapulico Center Building, Số 85 Vũ Trọng Phụng, P.Thanh Xuân, TP. Hà Nội' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
                      <span className="text-[var(--vidc-color-brand-red)]">Đã sao chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép địa chỉ</span>
                    </>
                  )}
                </VIDCNativeButton>
              </div>
            </div>

            {/* Đà Nẵng */}
            <div className="rounded-3xl bg-white border border-slate-200/90 hover:border-red-300 hover:shadow-xl transition-all flex flex-col justify-between group overflow-hidden">
              <div>
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img alt="Chi nhánh Viettel IDC Đà Nẵng - Tòa nhà Viettel Hải Châu" src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
                      Chi nhánh Miền Trung
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-bold text-slate-200">Khu vực Miền Trung</span>
                    <span className="text-[11px] font-medium text-slate-300 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">Viettel Hải Châu</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900">Đà Nẵng</h3>
                      <span className="text-[11px] text-slate-500 font-medium">Chi nhánh Viettel IDC Miền Trung</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-2.5">
                    <div className="text-xs font-bold text-slate-700">Điện thoại / Hotline:</div>
                    <div className="space-y-1.5">
                      <VIDCAnchor
                        href="tel:02366510011"
                        className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[var(--vidc-text-brand)] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[var(--vidc-text-brand)]" />
                        <span>0236 651 0011</span>
                      </VIDCAnchor>
                      <VIDCAnchor
                        href="tel:02366510022"
                        className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[var(--vidc-text-brand)] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-slate-400" />
                        <span>0236 651 0022</span>
                      </VIDCAnchor>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <div className="text-xs font-bold text-slate-700">Địa chỉ văn phòng:</div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Tầng 2, Tòa nhà Viettel Hải Châu, Số 58 Xô Viết Nghệ Tĩnh, P.Hòa Cường, TP. Đà Nẵng
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">Miền Trung</span>
                <VIDCNativeButton
                  onClick={() => handleCopy('Tầng 2, Tòa nhà Viettel Hải Châu, Số 58 Xô Viết Nghệ Tĩnh, P.Hòa Cường, TP. Đà Nẵng')}
                  className="text-xs text-[var(--vidc-text-brand)] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                >
                  {copiedAddress === 'Tầng 2, Tòa nhà Viettel Hải Châu, Số 58 Xô Viết Nghệ Tĩnh, P.Hòa Cường, TP. Đà Nẵng' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
                      <span className="text-[var(--vidc-color-brand-red)]">Đã sao chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép địa chỉ</span>
                    </>
                  )}
                </VIDCNativeButton>
              </div>
            </div>

            {/* TP. Hồ Chí Minh */}
            <div className="rounded-3xl bg-white border border-slate-200/90 hover:border-red-300 hover:shadow-xl transition-all flex flex-col justify-between group overflow-hidden">
              <div>
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img alt="Chi nhánh Viettel IDC TP. Hồ Chí Minh - Tòa nhà Viettel Complex 285 CMT8" src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold uppercase px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
                      Chi nhánh Miền Nam
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-bold text-slate-200">Khu vực Miền Nam</span>
                    <span className="text-[11px] font-medium text-slate-300 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">Viettel Complex</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900">TP. Hồ Chí Minh</h3>
                      <span className="text-[11px] text-slate-500 font-medium">Chi nhánh Viettel IDC Miền Nam</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-2.5">
                    <div className="text-xs font-bold text-slate-700">Điện thoại / Hotline:</div>
                    <div className="space-y-1.5">
                      <VIDCAnchor
                        href="tel:02862885335"
                        className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[var(--vidc-text-brand)] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-[var(--vidc-text-brand)]" />
                        <span>028 6288 5335</span>
                      </VIDCAnchor>
                      <VIDCAnchor
                        href="tel:02862925224"
                        className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[var(--vidc-text-brand)] transition-colors"
                      >
                        <Phone className="w-4 h-4 text-slate-400" />
                        <span>028 6292 5224</span>
                      </VIDCAnchor>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <div className="text-xs font-bold text-slate-700">Địa chỉ văn phòng:</div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Tầng 23, Tòa nhà Viettel Complex, Số 285 Cách mạng Tháng 8, P. Hòa Hưng, TP. HCM
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">Miền Nam</span>
                <VIDCNativeButton
                  onClick={() => handleCopy('Tầng 23, Tòa nhà Viettel Complex, Số 285 Cách mạng Tháng 8, P. Hòa Hưng, TP. HCM')}
                  className="text-xs text-[var(--vidc-text-brand)] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                >
                  {copiedAddress === 'Tầng 23, Tòa nhà Viettel Complex, Số 285 Cách mạng Tháng 8, P. Hòa Hưng, TP. HCM' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
                      <span className="text-[var(--vidc-color-brand-red)]">Đã sao chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép địa chỉ</span>
                    </>
                  )}
                </VIDCNativeButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Gửi Yêu Cầu Hợp Tác & Tư Vấn (Dedicated Section Below Offices) */}
      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background decorative patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5002A_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="vidc-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content / Commitments */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Gửi Yêu Cầu Hợp Tác &amp; Tư Vấn
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                Đội ngũ chuyên gia kỹ thuật và tư vấn giải pháp Viettel IDC sẽ liên hệ lại trong vòng 15 phút.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Khảo sát &amp; Tư vấn Miễn Phí</div>
                    <p className="text-xs text-slate-400 mt-0.5">Đánh giá hiện trạng hạ tầng và xây dựng giải pháp đo ni đóng giày theo từng doanh nghiệp.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Cam kết SLA &amp; Hỗ Trợ 24/7</div>
                    <p className="text-xs text-slate-400 mt-0.5">Đội ngũ kỹ sư Level 3 túc trực 24/7/365, cam kết Uptime lên tới 99.99%.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div className="w-8 h-8 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Tổng đài CSKH Toàn Quốc</div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Hotline miễn cước: <span className="text-white font-bold">1800 8088</span> (Nhánh 1 - Tư vấn dịch vụ, Nhánh 2 - Hỗ trợ kỹ thuật).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Consultation Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-7 sm:p-9 text-slate-900 shadow-2xl border border-slate-100">
                {formSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[var(--vidc-color-background-brand-subtle)] text-[var(--vidc-color-brand-red)] mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900">Tiếp Nhận Thông Tin Thành Công!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Cảm ơn Quý khách. Chuyên viên kỹ thuật &amp; tư vấn giải pháp Viettel IDC sẽ liên hệ lại trực tiếp qua số điện thoại <span className="font-bold text-slate-900">{formData.phone}</span> trong vòng <span className="font-bold text-[var(--vidc-text-brand)]">15 phút</span>.
                    </p>
                    <VIDCNativeButton
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Gửi thêm yêu cầu khác
                    </VIDCNativeButton>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="border-b border-slate-100 pb-4 mb-2">
                      <h3 className="text-lg font-black text-slate-900">
                        Thông Tin Liên Hệ &amp; Nhu Cầu Doanh Nghiệp
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Vui lòng điền thông tin bên dưới để nhận báo giá và tư vấn kỹ thuật nhanh nhất.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Họ và tên Quý khách *
                        </label>
                        <VIDCNativeInput
                          type="text"
                          required
                          placeholder="Nguyễn Văn A"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Số điện thoại liên hệ *
                        </label>
                        <VIDCNativeInput
                          type="tel"
                          required
                          placeholder="0988xxxxxx"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Email doanh nghiệp *
                        </label>
                        <VIDCNativeInput
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Tên Công ty / Cơ quan
                        </label>
                        <VIDCNativeInput
                          type="text"
                          placeholder="Tập đoàn / Doanh nghiệp ABC"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Dịch vụ &amp; Giải pháp quan tâm *
                      </label>
                      <VIDCNativeSelect
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-slate-50/50 font-medium"
                      >
                        <option value="Hạ tầng Data Center (Colocation / Dedicated Server / Private Room)">Hạ tầng Data Center (Colocation / Thuê chỗ đặt máy chủ / Thuê máy chủ dùng riêng)</option>
                        <option value="Điện toán đám mây Viettel Cloud (Public / Private / Hybrid Cloud)">Điện toán đám mây Viettel Cloud (Public / Private / Hybrid Cloud)</option>
                        <option value="Hạ tầng Siêu máy chủ AI & GPU Computing (Nvidia H100/L40S)">Hạ tầng Siêu máy chủ AI & GPU Computing (Nvidia H100/L40S)</option>
                        <option value="Giải pháp An toàn thông tin & Dịch vụ SOC Giám sát 24/7">Giải pháp An toàn thông tin & Dịch vụ SOC Giám sát 24/7</option>
                        <option value="Dịch vụ Quản trị Hệ thống & Di chuyển lên Cloud (Cloud Migration)">Dịch vụ Quản trị Hệ thống & Di chuyển lên Cloud (Cloud Migration)</option>
                        <option value="Hợp tác Chiến lược & Kinh doanh Đại lý">Hợp tác Chiến lược & Kinh doanh Đại lý</option>
                      </VIDCNativeSelect>
                    </div>

                    <VIDCNativeButton
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[var(--vidc-text-brand)] hover:bg-[var(--vidc-legacy-hex-a00022)] text-white text-sm font-bold shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Gửi Yêu Cầu Tư Vấn Ngay</span>
                    </VIDCNativeButton>

                    <p className="text-[11px] text-slate-400 text-center pt-1">
                      Bằng việc gửi biểu mẫu, Quý khách đồng ý với Chính sách Bảo mật Thông tin của Viettel IDC.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
