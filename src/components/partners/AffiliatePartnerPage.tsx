import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  ChevronRight, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  DollarSign, 
  TrendingUp, 
  ExternalLink,
  Users,
  Layers,
  Globe2,
  CircleHelp,
  BarChart3,
  Server,
  ArrowRight,
  UserCheck,
  Share2,
  FileText,
  MousePointerClick,
  Headphones,
  Cpu,
  Check,
  ChevronDown
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface AffiliatePartnerPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigate?: (path: string) => void;
}

export const AffiliatePartnerPage: React.FC<AffiliatePartnerPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigate
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    channelType: 'Website',
    channelUrl: '',
    roleCategory: 'Admin',
    message: '',
    acceptTerms: true
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'camket' | 'hoahong' | 'congcu' | 'quangba'>('camket');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Vui lòng nhập họ và tên của bạn';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Vui lòng nhập địa chỉ email';
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

  const targetAudiences = [
    {
      role: 'Admin',
      title: 'Bạn quản lý Website, Group, Forum, Fanpage có khách hàng tiềm năng',
      desc: 'Tận dụng lượng độc giả trung thành để chia sẻ giải pháp Cloud, Hosting chất lượng cao.',
      icon: Users
    },
    {
      role: 'Member',
      title: 'Bạn đang tham gia các cộng đồng trên Internet, Social có sự tương tác tốt',
      desc: 'Chia sẻ kinh nghiệm thực chiến và giới thiệu công nghệ số đến các thành viên trong nhóm.',
      icon: Globe2
    },
    {
      role: 'Influencer',
      title: 'Bạn là người có sự ảnh hưởng: KOL, Blogger, Streamer, YouTuber, Reviewer',
      desc: 'Sáng tạo các video, bài đánh giá sản phẩm công nghệ để chuyển hóa sức ảnh hưởng thành thu nhập.',
      icon: TrendingUp
    },
    {
      role: 'Specialist',
      title: 'Bạn là chuyên viên, chuyên gia trong lĩnh vực Sales, Marketing, IT, Technology',
      desc: 'Tư vấn trực tiếp giải pháp hạ tầng máy chủ cho khách hàng doanh nghiệp và đối tác dự án.',
      icon: Award
    }
  ];

  const whyChooseUs = [
    {
      title: 'Mức hoa hồng hấp dẫn',
      desc: 'Hoa hồng được tính theo cả chu kỳ thanh toán đầu tiên và không giới hạn mức thu nhập tối đa có thể nhận được.',
      icon: DollarSign
    },
    {
      title: 'Dễ dàng tiếp cận thị trường',
      desc: 'Hệ sinh thái lên đến 30 sản phẩm, dịch vụ cùng hơn 15.000 khách hàng trong và ngoài nước tin dùng.',
      icon: Layers
    },
    {
      title: 'Phương thức ghi nhận ưu việt',
      desc: 'Ghi nhận lượt click thực tế của khách hàng vào liên kết tiếp thị và lưu trữ Cookie đến 60 ngày.',
      icon: Clock
    },
    {
      title: 'Thương hiệu quốc gia uy tín',
      desc: 'Thương hiệu Viettel, đảm bảo lượng traffic bạn gửi về Viettel IDC đạt tỉ lệ chuyển đổi cao.',
      icon: ShieldCheck
    },
    {
      title: 'Hỗ trợ nhiệt tình',
      desc: 'Được hướng dẫn nghiệp vụ từ các tài liệu hiệu quả và từ chính các chuyên gia của chúng tôi.',
      icon: Headphones
    },
    {
      title: 'Hệ thống thông minh',
      desc: 'Chủ động theo dõi dữ liệu kết quả, công cụ hỗ trợ, đối soát số liệu, lập yêu cầu thanh toán tiện lợi.',
      icon: BarChart3
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Đăng ký tài khoản',
      badge: 'Chỉ hơn 1 phút',
      icon: UserCheck,
      desc: 'Đăng ký, kích hoạt tài khoản Affiliate và hoàn thiện hồ sơ một cách đơn giản và nhanh chóng. Chỉ hơn 1 phút.'
    },
    {
      step: '02',
      title: 'Nhận công cụ tiếp thị',
      badge: 'Tài nguyên có sẵn',
      icon: Layers,
      desc: 'Sử dụng công cụ từ chương trình Affiliate như tạo liên kết, email, banner theo nhu cầu của bạn. Không còn phải tự tay làm từ số 0.'
    },
    {
      step: '03',
      title: 'Chia sẻ & Quảng bá',
      badge: '30+ Dịch vụ Cloud',
      icon: Share2,
      desc: 'Đặt chia sẻ, liên kết về Viettel IDC & 30 dịch vụ, cùng các chương trình khuyến mại vào nội dung của bạn trên Internet.'
    },
    {
      step: '04',
      title: 'Theo dõi & Nhận hoa hồng',
      badge: 'Minh bạch 24/7',
      icon: DollarSign,
      desc: 'Theo dõi dữ liệu trên Dashboard. Dễ dàng tối ưu chiến dịch và nhận hoa hồng khi khách hàng click, giao dịch thành công với Viettel IDC.'
    }
  ];

  const rulesContent = {
    camket: [
      'Bạn cung cấp thông tin chính xác và đầy đủ theo yêu cầu.',
      'Việc đăng ký hợp tác cùng Viettel IDC là hoàn toàn tự nguyện.',
      'Bạn chấp nhận chính sách, nguyên tắc theo thỏa thuận khi thực hiện hợp tác.',
      'Không sử dụng hệ thống ngoài mục đích tiếp thị liên kết.',
      'Tuân thủ các quy định, luật pháp của Nhà nước.'
    ],
    hoahong: [
      'Hoa hồng được tính trên toàn bộ giá trị chu kỳ thanh toán đầu tiên của đơn hàng.',
      'Không giới hạn mức thu nhập tối đa của đối tác Publisher.',
      'Thời gian đối soát và thanh toán định kỳ minh bạch hàng tháng.',
      'Linh hoạt nhận tiền mặt qua ngân hàng hoặc quy đổi thành số dư thanh toán dịch vụ.'
    ],
    congcu: [
      'Hệ thống cung cấp sẵn đường dẫn tracking liên kết riêng biệt cho từng sản phẩm.',
      'Bộ banner tĩnh và động chuẩn kích thước truyền thông.',
      'Mẫu email marketing và nội dung bài viết mẫu hỗ trợ chiến dịch.',
      'Dashboard theo dõi lượt click, tỷ lệ chuyển đổi và doanh thu theo thời gian thực.'
    ],
    quangba: [
      'Nghiêm cấm hành vi gian lận (fraud click), spam tin nhắn hoặc email rác.',
      'Nghiêm cấm chạy quảng cáo đấu thầu trực tiếp từ khóa thương hiệu độc quyền "Viettel IDC".',
      'Đảm bảo cung cấp thông tin sản phẩm trung thực, đúng quy chuẩn kỹ thuật của Viettel IDC.'
    ]
  };

  const faqs = [
    {
      q: 'Hệ thống Affiliate của Viettel IDC là gì?',
      a: 'Là chương trình tiếp thị liên kết do Viettel IDC xây dựng nhằm tạo cơ hội hợp tác cho các cá nhân, tổ chức gia tăng thu nhập thông qua việc giới thiệu các dịch vụ hạ tầng điện toán đám mây và trung tâm dữ liệu.'
    },
    {
      q: 'Liên kết Affiliate là gì?',
      a: 'Là đường link dẫn đến trang dịch vụ của Viettel IDC được gắn mã định danh riêng biệt (tracking code) của bạn. Khi người dùng bấm vào link này, hệ thống sẽ ghi nhận và tính hoa hồng cho bạn khi có đơn hàng phát sinh.'
    },
    {
      q: 'Tôi có thể quảng cáo cho ai?',
      a: 'Bạn có thể quảng bá tới bất kỳ cá nhân, doanh nghiệp, tổ chức nào có nhu cầu thuê máy chủ ảo Cloud Server, lưu trữ Hosting, tên miền, giải pháp sao lưu Backup hay an toàn thông tin trên toàn cầu.'
    },
    {
      q: 'Lượt click thực tế của khách hàng là gì?',
      a: 'Là lượt nhấp chuột hợp lệ từ người dùng thật vào liên kết tiếp thị của bạn. Hệ thống sử dụng thuật toán lọc bot tự động để đảm bảo dữ liệu ghi nhận luôn trung thực và minh bạch.'
    },
    {
      q: 'Chính sách cookie giới thiệu?',
      a: 'Viettel IDC áp dụng cơ chế lưu Cookie lên đến 60 ngày. Trong vòng 60 ngày kể từ lần nhấp cuối, nếu khách hàng quay lại mua bất kỳ dịch vụ nào, hoa hồng vẫn được ghi nhận trọn vẹn cho bạn.'
    },
    {
      q: 'Cách nhận được hoa hồng?',
      a: 'Khi đơn hàng được kích hoạt và thanh toán thành công, hoa hồng sẽ hiển thị trên Dashboard. Bạn có thể yêu cầu rút tiền về tài khoản ngân hàng nội địa hoặc đổi thành số dư dịch vụ Viettel IDC dễ dàng.'
    }
  ];

  return (
    <div className="w-full bg-slate-50/40 min-h-screen text-slate-800 font-sans pb-24">
      {/* HERO BANNER */}
      <div className="relative bg-slate-900 overflow-hidden py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-950/50 via-slate-900 to-slate-950" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-red-500 mb-6">
            <VIDCNativeButton onClick={onNavigateHome} className="hover:text-red-400 transition-colors cursor-pointer">Trang chủ</VIDCNativeButton>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <VIDCNativeButton type="button" className="text-slate-400 hover:text-red-400 transition-colors cursor-pointer text-left" onClick={() => onNavigate?.('/partners/featured/')}>Đối tác</VIDCNativeButton>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-white">Tiếp thị liên kết (Affiliate)</span>
          </div>

          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-black uppercase text-red-400 tracking-wider">
              <Award className="w-4 h-4 text-red-400" /> CHƯƠNG TRÌNH DÀNH RIÊNG CHO BẠN - PUBLISHER
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Tiếp Thị Liên Kết <br />
              <span className="text-[var(--vidc-color-brand-red)]">Viettel IDC Affiliate</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-3xl">
              Chương trình dành riêng cho bạn - các đối tác tiếp thị liên kết (Publisher) với mức hoa hồng hấp dẫn thông qua việc đăng tải các ấn phẩm, nội dung tiếp thị chứa thông tin giới thiệu dịch vụ, giải pháp từ Viettel IDC đang được tin dùng bởi hàng nghìn khách hàng trong nước và quốc tế.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <VIDCAnchor 
                href="#affiliate-form" 
                className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>Đăng ký tham gia ngay</span>
                <ArrowRight className="w-4 h-4" />
              </VIDCAnchor>
              <VIDCAnchor 
                href="https://auth.vtidc-test.com/" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>Đăng nhập Cổng Publisher</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </VIDCAnchor>
            </div>
          </div>
        </div>
      </div>

      {/* CHƯƠNG TRÌNH NÀY DÀNH CHO AI? (BG WHITE) */}
      <section className="w-full bg-white py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[10px] font-black uppercase text-red-600 tracking-widest bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
              ĐỐI TƯỢNG THAM GIA
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              Chương Trình Này Dành Cho Ai?
            </h2>
            <p className="text-sm text-slate-600 font-medium mt-2 leading-relaxed">
              Không giới hạn đối tượng tham gia hợp tác cùng Viettel IDC, miễn là bạn đam mê kinh doanh, đam mê công nghệ, có sự ảnh hưởng trên Internet hay đang muốn có thêm nguồn thu nhập mới.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((aud, idx) => {
              const Icon = aud.icon;
              return (
                <div key={idx} className="bg-slate-50/70 border border-slate-200/80 p-7 rounded-3xl space-y-4 hover:bg-white hover:border-red-300 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-black uppercase text-red-600 tracking-wider block">{aud.role}</span>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">{aud.title}</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium pt-2 border-t border-slate-200/60">
                    {aud.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TẠI SAO CHỌN CHÚNG TÔI? (BG SLATE-50) */}
      <section className="w-full bg-slate-50/80 py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[10px] font-black uppercase text-red-600 tracking-widest bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
              LỢI THẾ HỢP TÁC
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              Tại Sao Chọn Chúng Tôi?
            </h2>
            <p className="text-sm text-slate-600 font-medium mt-2 leading-relaxed">
              Hãy yên tâm khi bạn hợp tác cùng một nhà cung cấp CNTT, Điện toán đám mây và Trung tâm dữ liệu hàng đầu Việt Nam. Chúng tôi có tiềm lực và sự hỗ trợ cao nhất giúp bạn hoàn toàn yên tâm khi hợp tác.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200/80 p-8 rounded-3xl space-y-4 hover:border-slate-300 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CÁC BƯỚC ĐỂ BẮT ĐẦU (BG WHITE) */}
      <section className="w-full bg-white py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12">
            <span className="text-[10px] font-black uppercase text-red-600 tracking-widest bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
              QUY TRÌNH HỢP TÁC
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              Các Bước Để Bắt Đầu
            </h2>
            <p className="text-sm text-slate-600 font-medium mt-2 leading-relaxed max-w-2xl">
              Tham gia hệ thống Affiliate của Viettel IDC chỉ với 4 bước đơn giản, nhanh chóng và hoàn toàn miễn phí.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* CỘT TRÁI: CÁC BƯỚC XẾP THEO HÀNG DỌC CÓ ĐƯỜNG NỐI */}
            <div className="lg:col-span-7 relative pl-2 sm:pl-4">
              <div className="space-y-0">
                {steps.map((st, idx) => {
                  const isLast = idx === steps.length - 1;
                  return (
                    <div 
                      key={idx}
                      className="relative flex items-start gap-4 sm:gap-6 pb-10 last:pb-2 group"
                    >
                      {/* Đường nối dọc giữa các bước */}
                      {!isLast && (
                        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-slate-200 group-hover:bg-red-200 transition-colors z-0" />
                      )}

                      {/* Vòng tròn số bước */}
                      <div className="relative z-10 w-12 h-12 rounded-2xl bg-white border-2 border-red-500/80 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white text-red-600 flex items-center justify-center font-black text-sm shrink-0 transition-all duration-300">
                        {st.step}
                      </div>

                      {/* Nội dung chi tiết bước */}
                      <div className="space-y-2 flex-1 pt-1">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                            {st.title}
                          </h4>
                          {st.badge && (
                            <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                              {st.badge}
                            </span>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xl">
                          {st.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CỘT PHẢI: CARD MÔ TẢ CHUNG */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-6">
                <div>
                  <span className="text-[10px] font-black uppercase text-red-600 tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 inline-block mb-3">
                    TỔNG QUAN CHƯƠNG TRÌNH
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                    Đồng hành cùng Viettel IDC để tối ưu thu nhập
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 leading-relaxed">
                    Chỉ cần đăng ký và kích hoạt tài khoản hoàn toàn miễn phí, bạn đã có ngay một tài khoản quản lý và Link Affiliate để giới thiệu Viettel IDC với mọi người trên Internet.
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-3.5 pt-2 border-t border-slate-200/70">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-900">Kích hoạt nhanh chóng</span>
                      <span className="text-[11px] text-slate-500">Hoàn thiện hồ sơ chỉ hơn 1 phút, duyệt tự động</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-900">Lưu trữ Cookie 60 ngày</span>
                      <span className="text-[11px] text-slate-500">Ghi nhận hoa hồng tối đa cho mọi phát sinh mua sắm</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-900">Hoa hồng hấp dẫn &amp; Minh bạch</span>
                      <span className="text-[11px] text-slate-500">Không giới hạn thu nhập, đối soát định kỳ</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <VIDCAnchor 
                    href="#affiliate-form"
                    className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <UserCheck className="w-4 h-4" />
                    Đăng ký tham gia ngay
                  </VIDCAnchor>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUY ĐỊNH HỢP TÁC (BG SLATE-50) */}
      <section className="w-full bg-slate-50/80 py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-[10px] font-black uppercase text-red-600 tracking-widest bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
                CHÍNH SÁCH BẢO ĐẢM
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
                Quy Định Hợp Tác Từ Những Chính Sách Tốt Nhất
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-relaxed">
                Những chính sách, nguyên tắc sẽ giúp việc hợp tác giữa Viettel IDC và bạn trở nên thuận tiện, hiệu quả hơn. Cùng nhau đạt những kết quả như mong muốn.
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-slate-100 pb-4">
              {[
                { id: 'camket', label: 'Cam kết' },
                { id: 'hoahong', label: 'Hoa hồng' },
                { id: 'congcu', label: 'Công cụ' },
                { id: 'quangba', label: 'Quảng bá' }
              ].map((tab) => (
                <VIDCNativeButton
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-red-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </VIDCNativeButton>
              ))}
            </div>

            {/* Tab Content List */}
            <div className="max-w-3xl mx-auto space-y-3">
              {rulesContent[activeTab].map((rule, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM (BG WHITE) */}
      <section id="affiliate-form" className="w-full bg-white py-16 sm:py-24 border-b border-slate-200/80 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-8 sm:p-12">
            <div className="text-center space-y-2 mb-8">
              <span className="text-[10px] font-black uppercase text-red-600 tracking-widest bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
                ĐĂNG KÝ ONLINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Đăng Ký, Hợp Tác Cùng Viettel IDC Ngay Từ Hôm Nay!
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                Hoàn toàn miễn phí. Chỉ trong 01 phút. Để có thêm nguồn thu nhập mới từ sự ảnh hưởng của bạn trên Internet. Với sự bảo đảm và hỗ trợ chuyên nghiệp từ thương hiệu Viettel.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Họ và tên *</label>
                      <VIDCNativeInput
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:border-red-500 focus:outline-hidden font-medium"
                      />
                      {formErrors.fullName && <p className="text-[11px] text-red-500 font-bold mt-1">{formErrors.fullName}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Địa chỉ Email *</label>
                      <VIDCNativeInput
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="publisher@example.com"
                        className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:border-red-500 focus:outline-hidden font-medium"
                      />
                      {formErrors.email && <p className="text-[11px] text-red-500 font-bold mt-1">{formErrors.email}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Số điện thoại liên hệ *</label>
                      <VIDCNativeInput
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0988888888"
                        className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:border-red-500 focus:outline-hidden font-medium"
                      />
                      {formErrors.phone && <p className="text-[11px] text-red-500 font-bold mt-1">{formErrors.phone}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Vai trò của bạn</label>
                      <VIDCNativeSelect
                        value={formData.roleCategory}
                        onChange={(e) => setFormData({ ...formData, roleCategory: e.target.value })}
                        className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:border-red-500 focus:outline-hidden font-medium cursor-pointer"
                      >
                        <option value="Admin">Admin (Quản lý Website, Group, Forum, Fanpage)</option>
                        <option value="Member">Member (Thành viên cộng đồng Internet/Social)</option>
                        <option value="Influencer">Influencer (KOL, Blogger, Streamer, YouTuber, Reviewer)</option>
                        <option value="Specialist">Specialist (Chuyên viên Sales, Marketing, IT, Technology)</option>
                      </VIDCNativeSelect>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-xs font-bold text-slate-700 block mb-1">Link Kênh / Website / Fanpage (nếu có)</label>
                      <VIDCNativeInput
                        type="url"
                        value={formData.channelUrl}
                        onChange={(e) => setFormData({ ...formData, channelUrl: e.target.value })}
                        placeholder="https://mywebsite.com hoặc facebook.com/..."
                        className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:border-red-500 focus:outline-hidden font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Nội dung tiếp thị hoặc sản phẩm quan tâm</label>
                    <VIDCNativeTextarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mô tả tóm tắt dịch vụ bạn muốn ưu tiên giới thiệu..."
                      className="w-full p-3 text-sm bg-white border border-slate-200 rounded-xl focus:border-red-500 focus:outline-hidden font-medium resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <VIDCNativeInput
                      type="checkbox"
                      id="affiliate-terms"
                      checked={formData.acceptTerms}
                      onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                      className="mt-0.5 rounded-sm border-slate-300 text-red-600 focus:ring-red-500 cursor-pointer"
                    />
                    <label htmlFor="affiliate-terms" className="text-xs text-slate-600 cursor-pointer font-medium">
                      Tôi đồng ý với các Quy định hợp tác và Điều khoản dịch vụ của Viettel IDC Affiliate.
                    </label>
                  </div>

                  <div className="pt-2">
                    <VIDCNativeButton
                      type="submit"
                      disabled={isSubmitting || !formData.acceptTerms}
                      className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:bg-slate-300 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Đang gửi thông tin...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Kích Hoạt Tài Khoản Affiliate Ngay</span>
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
                  <h3 className="text-lg font-bold text-slate-900">Đăng Ký Thành Công!</h3>
                  <p className="text-xs text-slate-500 font-medium max-w-md mx-auto">
                    Cảm ơn bạn đã đăng ký tham gia chương trình Affiliate của Viettel IDC. Hệ thống đã ghi nhận hồ sơ và sẽ gửi liên kết kích hoạt qua email trong ít phút.
                  </p>
                  <div className="pt-2">
                    <VIDCAnchor
                      href="https://auth.vtidc-test.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:underline"
                    >
                      <span>Truy cập Cổng Publisher Viettel IDC</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </VIDCAnchor>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CÂU HỎI THƯỜNG GẶP (FAQ) (BG SLATE-50) */}
      <section className="w-full bg-slate-50/80 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-black uppercase text-red-600 tracking-widest bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
              HỎI ĐÁP
            </span>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-3">
              Câu Hỏi Thường Gặp
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2 leading-relaxed">
              Mọi thứ đã hoàn tất để bạn kiếm thêm thu nhập. Chúng tôi luôn sẵn sàng giải đáp những thắc mắc từ bạn. Hãy tìm hiểu thêm những câu hỏi thường gặp.
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
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <CircleHelp className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-red-600' : ''}`} />
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
