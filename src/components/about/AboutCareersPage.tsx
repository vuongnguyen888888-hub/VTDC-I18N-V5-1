import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Briefcase, 
  Sparkles, 
  GraduationCap, 
  Heart, 
  TrendingUp, 
  MapPin, 
  Clock, 
  Search, 
  Filter, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Upload, 
  FileText, 
  Send,
  Building2,
  Calendar
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { AboutSubNav } from './AboutSubNav';
import { careerOpenings, CareerOpening } from '../../data/aboutData';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect } from '@/components/ui/VIDCNativeControls';


interface AboutCareersPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const AboutCareersPage: React.FC<AboutCareersPageProps> = ({
  currentMarket,
  onNavigateHome,
  currentPath = '/about/careers/',
  onNavigate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedJob, setSelectedJob] = useState<CareerOpening | null>(null);
  const [cvSubmitted, setCvSubmitted] = useState(false);
  const [cvForm, setCvForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'Senior Cloud Solutions Architect',
    linkedin: '',
    cvFileName: ''
  });

  const departments = useMemo(() => {
    const depts = new Set(careerOpenings.map(j => j.department));
    return ['All', ...Array.from(depts)];
  }, []);

  const filteredJobs = useMemo(() => {
    return careerOpenings.filter((job) => {
      const matchDept = selectedDept === 'All' || job.department === selectedDept;
      const matchQuery = !searchQuery.trim() || 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDept && matchQuery;
    });
  }, [searchQuery, selectedDept]);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCvSubmitted(true);
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* 4 Core Pillars of Working at Viettel IDC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
            <span className="text-xs font-black uppercase tracking-wider text-red-700">
              MÔI TRƯỜNG LÀM VIỆC
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Tại Sao Nên Chọn Khởi Lập Sự Nghiệp Tại Viettel IDC?
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            Chúng tôi tạo dựng không gian để mỗi cá nhân phát huy tối đa tiềm năng sáng tạo và khẳng định bản lĩnh công nghệ.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">Dự Án Quy Mô Quốc Gia</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Trực tiếp tham gia thiết kế, triển khai hạ tầng số cho Chính phủ, các ngân hàng hàng đầu và các kỳ lân công nghệ.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">Đào Tạo Liên Tục</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Tham gia các khóa đào tạo trực tiếp từ các chuyên gia NVIDIA, Microsoft, VMware, Qualcomm và Cisco toàn cầu.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">Đãi Ngộ Cạnh Tranh</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Gói thu nhập hấp dẫn bao gồm lương cứng, thưởng hiệu quả kinh doanh, thưởng sáng kiến kỹ thuật định kỳ.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">Chăm Sóc Toàn Diện</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Du lịch nghỉ dưỡng hằng năm, câu lạc bộ thể thao, teambuilding và môi trường văn hóa gắn kết người Viettel.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Job Openings List */}
      <section id="job-list" className="bg-white border-y border-slate-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-3.5">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
                <span className="text-xs font-black uppercase tracking-wider text-red-700">
                  CƠ HỘI NGHỀ NGHIỆP ĐANG MỞ
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Vị Trí Tuyển Dụng Nổi Bật 2026
              </h2>
              <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
                Tìm kiếm cơ hội phù hợp với chuyên môn của bạn và ứng tuyển ngay hôm nay.
              </p>
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => (
                <VIDCNativeButton
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedDept === dept
                      ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-[var(--vidc-color-brand-red)] hover:border-red-200'
                  }`}
                >
                  {dept === 'All' ? 'Tất cả phòng ban' : dept}
                </VIDCNativeButton>
              ))}
            </div>
          </div>

          {/* Search bar */}
          <div className="relative mb-8 max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <VIDCNativeInput
              type="text"
              placeholder="Tìm kiếm theo vị trí (Cloud, AI, Security, Facility, Sales...)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Jobs List */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:shadow-lg hover:border-red-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-[var(--vidc-color-brand-red)] bg-[var(--vidc-color-background-brand-subtle)] px-2.5 py-0.5 rounded-full border border-[var(--vidc-color-border-brand-subtle)]">
                      {job.department}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-200/70 px-2.5 py-0.5 rounded-full">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      {job.experience}
                    </span>
                    <span className="flex items-center gap-1.5 text-[var(--vidc-color-brand-red)] font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      Hạn nộp: {job.deadline}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {job.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <VIDCNativeButton
                    onClick={() => {
                      setCvForm(prev => ({ ...prev, position: job.title }));
                      const element = document.getElementById('quick-apply');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-8f0027)] text-white text-xs font-bold shadow-md shadow-red-600/20 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Ứng tuyển ngay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </VIDCNativeButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick CV Application Form */}
      <section id="quick-apply" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--vidc-color-background-brand-subtle)] text-[var(--vidc-color-brand-red)] text-xs font-bold border border-[var(--vidc-color-border-brand-subtle)] uppercase tracking-wider mb-2">
              <Upload className="w-3.5 h-3.5" />
              <span>NỘP HỒ SƠ ỨNG TUYỂN NHANH</span>
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              Gửi CV Cho Ban Tuyển Dụng Viettel IDC
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Bộ phận nhân sự sẽ liên hệ phản hồi Quý Ứng viên trong vòng 48 giờ làm việc sau khi nhận hồ sơ.
            </p>
          </div>

          {cvSubmitted ? (
            <div className="max-w-lg mx-auto p-8 rounded-2xl bg-red-50 border border-red-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-100 text-[var(--vidc-color-brand-red)] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Nộp Hồ Sơ Thành Công!</h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Cảm ơn bạn đã quan tâm đến cơ hội nghề nghiệp tại Viettel IDC. Ban Tuyển dụng sẽ xem xét hồ sơ và liên hệ phỏng vấn trong thời gian sớm nhất.
              </p>
              <VIDCNativeButton
                onClick={() => setCvSubmitted(false)}
                className="text-xs text-[var(--vidc-color-brand-red)] font-bold underline hover:no-underline pt-2 block mx-auto"
              >
                Gửi thêm hồ sơ khác
              </VIDCNativeButton>
            </div>
          ) : (
            <form onSubmit={handleApplySubmit} className="max-w-2xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Họ và tên Ứng viên *
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={cvForm.fullName}
                    onChange={(e) => setCvForm({ ...cvForm, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Vị trí ứng tuyển *
                  </label>
                  <VIDCNativeSelect
                    value={cvForm.position}
                    onChange={(e) => setCvForm({ ...cvForm, position: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                  >
                    {careerOpenings.map(j => (
                      <option key={j.id} value={j.title}>{j.title}</option>
                    ))}
                    <option value="Khác / Ứng tuyển vị trí tương lai">Khác / Lưu hồ sơ nhân tài tương lai</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Số điện thoại liên hệ *
                  </label>
                  <VIDCNativeInput
                    type="tel"
                    required
                    placeholder="0988xxxxxx"
                    value={cvForm.phone}
                    onChange={(e) => setCvForm({ ...cvForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email cá nhân *
                  </label>
                  <VIDCNativeInput
                    type="email"
                    required
                    placeholder="name@gmail.com"
                    value={cvForm.email}
                    onChange={(e) => setCvForm({ ...cvForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Đường dẫn LinkedIn / Portfolio / GitHub (Nếu có)
                </label>
                <VIDCNativeInput
                  type="url"
                  placeholder="https://linkedin.com/in/..."
                  value={cvForm.linkedin}
                  onChange={(e) => setCvForm({ ...cvForm, linkedin: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                />
              </div>

              {/* Upload CV Dropzone */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Đính kèm CV (PDF, DOCX, tối đa 10MB) *
                </label>
                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center bg-slate-50 hover:bg-slate-100/60 transition-colors cursor-pointer relative">
                  <VIDCNativeInput
                    type="file"
                    required={!cvForm.cvFileName}
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setCvForm({ ...cvForm, cvFileName: e.target.files[0].name });
                      }
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <Upload className="w-8 h-8 text-[var(--vidc-color-brand-red)] mx-auto mb-2" />
                  {cvForm.cvFileName ? (
                    <div className="text-xs font-bold text-[var(--vidc-color-brand-red)] flex items-center justify-center gap-1.5">
                      <FileText className="w-4 h-4" />
                      <span>{cvForm.cvFileName}</span>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs font-bold text-slate-700">Kéo thả file CV vào đây hoặc bấm để chọn</p>
                      <p className="text-[11px] text-slate-400 mt-1">Định dạng hỗ trợ: PDF, DOC, DOCX</p>
                    </div>
                  )}
                </div>
              </div>

              <VIDCNativeButton
                type="submit"
                className="w-full py-3 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-8f0027)] text-white text-xs font-bold shadow-md shadow-red-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Gửi Hồ Sơ Ứng Tuyển Tới Viettel IDC</span>
              </VIDCNativeButton>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
