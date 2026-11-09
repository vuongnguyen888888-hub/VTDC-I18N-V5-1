import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  ChevronRight, 
  Target, 
  Briefcase, 
  User, 
  Send, 
  CheckCircle2, 
  Building2,
  Globe2,
  PieChart,
  Shield,
  Layers,
  Handshake,
  Award,
  Cpu,
  TrendingUp,
  Headphones,
  Check,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Rocket,
  CircleHelp,
  ChevronDown
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface DistributorPartnerPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigate?: (path: string) => void;
}

export const DistributorPartnerPage: React.FC<DistributorPartnerPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigate
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    partnerTrack: 'si',
    region: 'Toàn quốc',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Điều kiện để trở thành Đối tác Tích hợp Hệ thống (SI) hoặc Đối tác Công nghệ của Viettel IDC là gì?',
      a: 'Doanh nghiệp cần có tư cách pháp nhân hợp lệ, hoạt động trong lĩnh vực CNTT, viễn thông, tích hợp hệ thống hoặc phát triển phần mềm, giải pháp số. Đối với từng cấp độ đối tác, Viettel IDC sẽ có tiêu chí cụ thể về năng lực triển khai kỹ thuật và cam kết doanh số hàng năm.'
    },
    {
      q: 'Chính sách chiết khấu và cơ chế bảo vệ cơ hội kinh doanh (Deal Registration) hoạt động như thế nào?',
      a: 'Đối tác được hưởng chiết khấu trực tiếp trên giá dịch vụ lên tới 30%+, cùng các mức thưởng quý/năm hấp dẫn. Khi đối tác đăng ký cơ hội kinh doanh (Deal Registration) thành công trên hệ thống Partner Portal, cơ hội đó sẽ được bảo vệ độc quyền trong suốt thời hạn dự án nhằm bảo đảm tối đa quyền lợi của đối tác.'
    },
    {
      q: 'Viettel IDC hỗ trợ những gì cho đối tác trong các dự án đấu thầu và thử nghiệm (POC)?',
      a: 'Đội ngũ Kiến trúc sư Giải pháp (Solution Architect - SA) của Viettel IDC sẽ đồng hành 1-1 để tư vấn thiết kế hạ tầng tối ưu, hỗ trợ xây dựng hồ sơ kỹ thuật đấu thầu, cung cấp môi trường Lab/POC miễn phí lên tới 3 tháng và cấp thư bảo lãnh cung cấp dịch vụ chính hãng.'
    },
    {
      q: 'Quỹ Phát triển Tiếp thị Chung (MDF) được đăng ký và giải ngân ra sao?',
      a: 'Đối tác đạt cấp độ tiêu chuẩn có thể nộp đề xuất kế hoạch tiếp thị hàng quý. Viettel IDC hỗ trợ tài trợ lên đến 50% chi phí cho các hoạt động hội thảo khách hàng (Seminar/Workshop), sự kiện ra mắt sản phẩm, chiến dịch truyền thông và tài liệu đồng thương hiệu (Co-branding).'
    },
    {
      q: 'Thời gian thẩm định hồ sơ và cấp tài khoản Partner Portal mất bao lâu?',
      a: 'Sau khi gửi biểu mẫu đăng ký, chuyên viên Partner Manager sẽ liên hệ trực tiếp trong vòng 24 giờ làm việc để tư vấn chính sách và hoàn tất thủ tục. Tài khoản Cổng quản trị Partner Portal sẽ được kích hoạt ngay sau khi ký kết thỏa thuận hợp tác.'
    },
    {
      q: 'Viettel IDC có tổ chức các khóa đào tạo và cấp chứng chỉ chuyên môn cho đối tác không?',
      a: 'Có. Viettel IDC thường xuyên tổ chức các khóa đào tạo chuyên sâu về Cloud Computing, Data Center TIA-942, Kubernetes, An toàn thông tin và AI. Đội ngũ kỹ sư của đối tác sau khi hoàn thành khóa đào tạo sẽ được cấp chứng nhận chuyên gia Viettel IDC Certified Partner.'
    }
  ];

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Vui lòng nhập họ và tên của bạn';
    if (!formData.companyName.trim()) errors.companyName = 'Vui lòng nhập tên công ty / tổ chức';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Vui lòng nhập email liên hệ';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Địa chỉ email không hợp lệ';
    }

    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!phoneRegex.test(formData.phone.replace(/[\s.-]/g, ''))) {
      errors.phone = 'Số điện thoại không đúng định dạng';
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  const partnerTracks = [
    {
      id: 'si',
      title: 'Đối tác Tích hợp Hệ thống (SI & Solutions)',
      tag: 'DOANH NGHIỆP & GIẢI PHÁP',
      icon: Layers,
      desc: 'Dành cho các đơn vị tích hợp hệ thống, công ty phát triển phần mềm ERP/CRM, bảo mật hoặc chuyển đổi số trọn gói cho khối khách hàng doanh nghiệp, tài chính, chính phủ.',
      benefits: [
        'Tư vấn kiến trúc giải pháp chuyên sâu (SA 1-1 đồng hành dự án)',
        'Môi trường Lab thử nghiệm & POC miễn phí lên đến 3 tháng',
        'Hỗ trợ hồ sơ năng lực đấu thầu & chứng nhận chuyên gia Viettel IDC',
        'Chính sách giá dự án và bảo vệ cơ hội kinh doanh (Deal Registration)'
      ],
      link: '#partner-form',
      actionLabel: 'Đăng ký đối tác SI'
    },
    {
      id: 'technology',
      title: 'Đối tác Công nghệ & Liên minh Chiến lược',
      tag: 'TOÀN CẦU & ĐỔI MỚI SÁNG TẠO',
      icon: Cpu,
      desc: 'Hợp tác phát triển giải pháp AI, GPU Cloud, Edge Computing, 5G Private, IoT và Big Data cùng hệ sinh thái công nghệ hàng đầu khu vực.',
      benefits: [
        'Hạ tầng GPU Cloud & AI Data Center thế hệ mới với hiệu năng cực đại',
        'Tiếp cận mạng lưới 25.000+ khách hàng doanh nghiệp đa ngành',
        'Quỹ phát triển thị trường chung (MDF) tài trợ tới 50% chi phí sự kiện',
        'Đồng thương hiệu (Co-branding) & bảo chứng công nghệ cấp quốc tế'
      ],
      link: '#partner-form',
      actionLabel: 'Đăng ký liên minh công nghệ'
    }
  ];

  return (
    <div className="w-full bg-slate-50/30 min-h-screen text-slate-800 font-sans">
      {/* HERO BANNER */}
      <div className="relative bg-slate-900 overflow-hidden py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-950/40 via-slate-900 to-slate-950" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[var(--vidc-text-brand)] mb-6">
            <VIDCNativeButton onClick={onNavigateHome} className="hover:text-red-400 transition-colors cursor-pointer">Trang chủ</VIDCNativeButton>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <VIDCNativeButton type="button" className="text-slate-400 hover:text-red-400 transition-colors cursor-pointer text-left" onClick={() => onNavigate?.('/partners/featured/')}>Đối tác</VIDCNativeButton>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-white">Chương trình đối tác</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--vidc-text-brand)]/10 border border-[var(--vidc-text-brand)]/20 text-xs font-black uppercase text-[var(--vidc-color-brand-pink)] tracking-wider">
              <Users className="w-4 h-4 text-[var(--vidc-color-brand-pink)]" /> CHƯƠNG TRÌNH ĐỐI TÁC TOÀN DIỆN
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Chương Trình Đối Tác <br />
              <span className="text-[var(--vidc-color-brand-red)]">Viettel IDC Partner Program</span>
            </h1>
            <p className="text-base text-slate-300 font-medium leading-relaxed max-w-2xl">
              Đồng hành phát triển và mở rộng kinh doanh cùng nhà cung cấp Cloud &amp; Trung tâm dữ liệu hàng đầu Việt Nam. Hợp tác chuyên sâu dành cho Đối tác Tích hợp Hệ thống (SI) và Đối tác Công nghệ &amp; Liên minh Chiến lược.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <VIDCAnchor 
                href="#partner-form" 
                className="px-6 py-3.5 rounded-xl bg-[var(--vidc-text-brand)] hover:bg-[var(--vidc-legacy-hex-8f0027)] active:bg-[var(--vidc-legacy-hex-510016)] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[var(--vidc-text-brand)]/20 flex items-center gap-2 cursor-pointer"
              >
                <Rocket className="w-4 h-4" />
                Đăng ký tham gia ngay
              </VIDCAnchor>
              <VIDCAnchor 
                href="#partner-tracks" 
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Khám phá 2 mô hình hợp tác
              </VIDCAnchor>
            </div>
          </div>
        </div>
      </div>

      {/* 1. SECTION: CÁC MÔ HÌNH HỢP TÁC TRONG CHƯƠNG TRÌNH (BG WHITE) */}
      <section id="partner-tracks" className="w-full bg-white py-16 sm:py-20 border-b border-slate-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-black uppercase text-[var(--vidc-text-brand)] tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
              MÔ HÌNH HỢP TÁC
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              Lựa Chọn Mô Hình Phù Hợp Với Doanh Nghiệp Của Bạn
            </h2>
            <p className="text-sm text-slate-600 font-medium mt-2">
              Chương trình đối tác chuyên sâu dành cho các đơn vị Tích hợp Hệ thống (SI) và các Nhà phát triển Công nghệ &amp; Liên minh Chiến lược.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {partnerTracks.map((track) => {
              const Icon = track.icon;
              return (
                <div 
                  key={track.id}
                  className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-red-200 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold text-[var(--vidc-text-brand)] bg-red-50 px-3 py-1 rounded-full border border-red-100 uppercase tracking-wider">
                        {track.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[var(--vidc-text-brand)] transition-colors">
                        {track.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-medium">
                        {track.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 space-y-2">
                      {track.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <Check className="w-3.5 h-3.5 text-[var(--vidc-text-brand)] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-200/60">
                    <VIDCAnchor
                      href="#partner-form"
                      onClick={() => setFormData({ ...formData, partnerTrack: track.id })}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-text-brand)] hover:text-[var(--vidc-legacy-hex-8f0027)] uppercase tracking-wider transition-colors"
                    >
                      <span>{track.actionLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </VIDCAnchor>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. SECTION: QUYỀN LỢI ĐẶC QUYỀN KHI LÀ ĐỐI TÁC (BG SLATE-50) */}
      <section className="w-full bg-slate-50/80 py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-black uppercase text-[var(--vidc-text-brand)] tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
              QUYỀN LỢI ĐỐI TÁC
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              Giá Trị Khác Biệt Khi Hợp Tác Cùng Viettel IDC
            </h2>
            <p className="text-sm text-slate-600 font-medium mt-2">
              Cam kết đồng hành lâu dài, chia sẻ lợi ích và hỗ trợ tối đa để đối tác phát triển bền vững.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white border border-slate-200/90 p-7 rounded-3xl space-y-3 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Chiết khấu cao &amp; Tăng trưởng lũy tiến</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Chính sách chiết khấu trực tiếp tới 30%+, thưởng quý theo doanh số và cơ chế bảo lưu khách hàng minh bạch.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 p-7 rounded-3xl space-y-3 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Hạ tầng Data Center TIA-942 Rated 3</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Chất lượng hạ tầng quốc tế đạt chuẩn bảo mật hàng đầu, cam kết SLA 99.99% giúp gia tăng uy tín của đối tác.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 p-7 rounded-3xl space-y-3 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center font-bold">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Hỗ trợ Pre-sales &amp; Kỹ thuật 24/7</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Đội ngũ Kiến trúc sư Giải pháp (SA) hỗ trợ thiết kế kiến trúc, làm hồ sơ thầu và trực tiếp tham gia tư vấn khách hàng.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 p-7 rounded-3xl space-y-3 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Quỹ Tiếp thị Chung (MDF)</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Tài trợ lên đến 50% kinh phí tổ chức sự kiện, hội thảo chuyên đề và các chiến dịch quảng bá chung cùng thương hiệu Viettel IDC.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 p-7 rounded-3xl space-y-3 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center font-bold">
                <User className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Dedicated Partner Manager</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Chuyên viên phụ trách riêng đồng hành 1-1 hỗ trợ chính sách giá, đào tạo sản phẩm và quản lý hợp đồng linh hoạt.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 p-7 rounded-3xl space-y-3 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center font-bold">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Partner Portal Tự Động Hóa</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Hệ thống quản lý dịch vụ hiện đại: Đăng ký dịch vụ tức thì, theo dõi trạng thái máy chủ và đối soát hoa hồng thời gian thực.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: QUY TRÌNH 4 BƯỚC & FORM ĐĂNG KÝ HỢP TÁC (BG WHITE) */}
      <section id="partner-form" className="w-full bg-white py-16 sm:py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* BÊN TRÁI: 4 BƯỚC LỘ TRÌNH ĐỒNG HÀNH */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-black uppercase text-[var(--vidc-text-brand)] tracking-wider">
                  LỘ TRÌNH ĐỒNG HÀNH
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mt-2.5 leading-tight">
                  4 Bước Trở Thành Đối Tác Viettel IDC
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 leading-relaxed">
                  Quy trình đơn giản, thẩm định nhanh chóng để bắt đầu kinh doanh trong thời gian sớm nhất.
                </p>
              </div>

              {/* Vertical timeline steps */}
              <div className="relative pl-1 space-y-0">
                {/* Bước 01 */}
                <div className="relative flex items-start gap-4 pb-8 group">
                  <div className="absolute left-[21px] top-11 bottom-0 w-0.5 bg-slate-200" />
                  <div className="relative z-10 w-11 h-11 rounded-full bg-white border-2 border-[var(--vidc-text-brand)] text-[var(--vidc-text-brand)] flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                    01
                  </div>
                  <div className="pt-1 space-y-1 flex-1">
                    <h4 className="text-base font-bold text-slate-900">Đăng ký thông tin</h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      Gửi thông tin cơ bản qua form trực tuyến về năng lực và mô hình hợp tác.
                    </p>
                  </div>
                </div>

                {/* Bước 02 */}
                <div className="relative flex items-start gap-4 pb-8 group">
                  <div className="absolute left-[21px] top-11 bottom-0 w-0.5 bg-slate-200" />
                  <div className="relative z-10 w-11 h-11 rounded-full bg-white border-2 border-[var(--vidc-text-brand)] text-[var(--vidc-text-brand)] flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                    02
                  </div>
                  <div className="pt-1 space-y-1 flex-1">
                    <h4 className="text-base font-bold text-slate-900">Tư vấn &amp; Thẩm định</h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      Chuyên viên Partner Manager liên hệ tư vấn chính sách và định mức chiết khấu phù hợp trong 24h.
                    </p>
                  </div>
                </div>

                {/* Bước 03 */}
                <div className="relative flex items-start gap-4 pb-8 group">
                  <div className="absolute left-[21px] top-11 bottom-0 w-0.5 bg-slate-200" />
                  <div className="relative z-10 w-11 h-11 rounded-full bg-white border-2 border-[var(--vidc-text-brand)] text-[var(--vidc-text-brand)] flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                    03
                  </div>
                  <div className="pt-1 space-y-1 flex-1">
                    <h4 className="text-base font-bold text-slate-900">Ký kết &amp; Cấp quyền</h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      Hoàn tất thỏa thuận hợp tác và cấp tài khoản truy cập Cổng quản trị Partner Portal.
                    </p>
                  </div>
                </div>

                {/* Bước 04 */}
                <div className="relative flex items-start gap-4 group">
                  <div className="relative z-10 w-11 h-11 rounded-full bg-white border-2 border-[var(--vidc-text-brand)] text-[var(--vidc-text-brand)] flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                    04
                  </div>
                  <div className="pt-1 space-y-1 flex-1">
                    <h4 className="text-base font-bold text-slate-900">Đào tạo &amp; Kinh doanh</h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      Tham gia đào tạo chuyên sâu về giải pháp và bắt đầu triển khai dịch vụ tới khách hàng.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BÊN PHẢI: CARD FORM ĐĂNG KÝ HỢP TÁC (XÓA BÓNG ĐỔ) */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 sm:p-9 lg:p-10">
                <div className="space-y-2 mb-8">
                  <span className="text-[10px] font-black uppercase text-[var(--vidc-text-brand)] tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
                    KẾT NỐI HỢP TÁC
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    Đăng Ký Tham Gia Chương Trình Đối Tác
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Vui lòng để lại thông tin, bộ phận Phát triển Đối tác của Viettel IDC sẽ liên hệ trong vòng 24 giờ làm việc.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {!submitSuccess ? (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-700 block mb-1">Họ và tên người liên hệ *</label>
                          <VIDCNativeInput
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="Nguyễn Văn A"
                            className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:border-[var(--vidc-text-brand)] focus:ring-1 focus:ring-[var(--vidc-text-brand)] focus:outline-hidden font-medium"
                          />
                          {formErrors.fullName && <p className="text-[11px] text-red-500 font-bold mt-1">{formErrors.fullName}</p>}
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-700 block mb-1">Tên Công ty / Đơn vị *</label>
                          <VIDCNativeInput
                            type="text"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            placeholder="Công ty Cổ phần Công nghệ XYZ"
                            className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:border-[var(--vidc-text-brand)] focus:ring-1 focus:ring-[var(--vidc-text-brand)] focus:outline-hidden font-medium"
                          />
                          {formErrors.companyName && <p className="text-[11px] text-red-500 font-bold mt-1">{formErrors.companyName}</p>}
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-700 block mb-1">Email doanh nghiệp *</label>
                          <VIDCNativeInput
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="partner@company.vn"
                            className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:border-[var(--vidc-text-brand)] focus:ring-1 focus:ring-[var(--vidc-text-brand)] focus:outline-hidden font-medium"
                          />
                          {formErrors.email && <p className="text-[11px] text-red-500 font-bold mt-1">{formErrors.email}</p>}
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-700 block mb-1">Số điện thoại *</label>
                          <VIDCNativeInput
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="0912345678"
                            className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:border-[var(--vidc-text-brand)] focus:ring-1 focus:ring-[var(--vidc-text-brand)] focus:outline-hidden font-medium"
                          />
                          {formErrors.phone && <p className="text-[11px] text-red-500 font-bold mt-1">{formErrors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-700 block mb-1">Mô hình hợp tác quan tâm *</label>
                          <VIDCNativeSelect
                            value={formData.partnerTrack}
                            onChange={(e) => setFormData({ ...formData, partnerTrack: e.target.value })}
                            className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:border-[var(--vidc-text-brand)] focus:ring-1 focus:ring-[var(--vidc-text-brand)] focus:outline-hidden font-medium text-slate-800 cursor-pointer"
                          >
                            <option value="si">Đối tác Tích hợp Hệ thống (SI &amp; Solutions)</option>
                            <option value="technology">Đối tác Công nghệ &amp; Liên minh Chiến lược</option>
                          </VIDCNativeSelect>
                        </div>

                        <div>
                          <label className="text-xs font-bold text-slate-700 block mb-1">Khu vực hoạt động</label>
                          <VIDCNativeSelect
                            value={formData.region}
                            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                            className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:border-[var(--vidc-text-brand)] focus:ring-1 focus:ring-[var(--vidc-text-brand)] focus:outline-hidden font-medium text-slate-800 cursor-pointer"
                          >
                            <option value="Toàn quốc">Toàn quốc</option>
                            <option value="Miền Bắc (Hà Nội & lân cận)">Miền Bắc (Hà Nội &amp; lân cận)</option>
                            <option value="Miền Trung (Đà Nẵng & lân cận)">Miền Trung (Đà Nẵng &amp; lân cận)</option>
                            <option value="Miền Nam (TP.HCM & lân cận)">Miền Nam (TP.HCM &amp; lân cận)</option>
                            <option value="Quốc tế (Đông Nam Á / Toàn cầu)">Quốc tế (Đông Nam Á / Toàn cầu)</option>
                          </VIDCNativeSelect>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">Nhu cầu hợp tác / Sản phẩm dịch vụ trọng tâm</label>
                        <VIDCNativeTextarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Ví dụ: Nhu cầu tích hợp hạ tầng Cloud Server, Kubernetes và giải pháp AI cho khách hàng doanh nghiệp, cần tư vấn chính sách hợp tác..."
                          className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:border-[var(--vidc-text-brand)] focus:ring-1 focus:ring-[var(--vidc-text-brand)] focus:outline-hidden font-medium resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <VIDCNativeButton
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 rounded-xl bg-[var(--vidc-text-brand)] hover:bg-[var(--vidc-legacy-hex-8f0027)] active:bg-[var(--vidc-legacy-hex-510016)] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-[var(--vidc-text-brand)]/15 cursor-pointer flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <span>Đang xử lý...</span>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Gửi Đăng Ký Hợp Tác Đối Tác</span>
                            </>
                          )}
                        </VIDCNativeButton>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-100">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">Gửi Hồ Sơ Đối Tác Thành Công!</h3>
                      <p className="text-xs text-slate-500 font-medium max-w-md mx-auto">
                        Bộ phận Phát triển Kênh Đối tác của Viettel IDC sẽ liên hệ trực tiếp với quý doanh nghiệp trong vòng 24 giờ làm việc.
                      </p>
                      <VIDCNativeButton
                        onClick={() => {
                          setSubmitSuccess(false);
                          setFormData({
                            fullName: '',
                            companyName: '',
                            email: '',
                            phone: '',
                            partnerTrack: 'si',
                            region: 'Toàn quốc',
                            message: ''
                          });
                        }}
                        className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                      >
                        Gửi đăng ký khác
                      </VIDCNativeButton>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: CÂU HỎI THƯỜNG GẶP (FAQ) (BG SLATE-50) */}
      <section className="w-full bg-slate-50/80 py-16 sm:py-24 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-black uppercase text-[var(--vidc-text-brand)] tracking-widest bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
              HỎI ĐÁP ĐỐI TÁC
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              Câu Hỏi Thường Gặp
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed">
              Giải đáp các thắc mắc phổ biến về chính sách, quy trình thẩm định và quyền lợi hợp tác đối tác cùng Viettel IDC.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-colors"
                >
                  <VIDCNativeButton
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-[var(--vidc-text-brand)] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <CircleHelp className="w-4 h-4 text-[var(--vidc-text-brand)] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[var(--vidc-text-brand)]' : ''}`} />
                  </VIDCNativeButton>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
