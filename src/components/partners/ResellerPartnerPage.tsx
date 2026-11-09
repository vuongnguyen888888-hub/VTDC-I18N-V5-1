import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Handshake, 
  ChevronRight, 
  Sparkles, 
  DollarSign, 
  Layers, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Headphones,
  Award,
  Users,
  Server,
  Globe,
  Mail,
  Database,
  Phone,
  MapPin,
  LogIn,
  ExternalLink,
  FileText,
  Check,
  TrendingUp,
  Cpu,
  Lock,
  Building2,
  HelpCircle,
  X
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface ResellerPartnerPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigate?: (path: string) => void;
}

export const ResellerPartnerPage: React.FC<ResellerPartnerPageProps> = ({
  currentMarket,
  onNavigateHome,
  onNavigate
}) => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceInterest: 'Tất cả các dịch vụ (Cloud, Hosting, Colocation...)',
    businessType: 'Doanh nghiệp IT / Tích hợp hệ thống',
    estimatedRevenue: 'Từ 20 - 50 triệu/tháng',
    message: '',
    agreeTerms: true
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedPartnerModal, setSelectedPartnerModal] = useState<any | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginSuccess, setLoginSuccess] = useState(false);

  // 6 Lợi ích khi trở thành đại lý của Viettel IDC
  const resellerBenefits = [
    {
      icon: Layers,
      title: 'Hợp tác phát triển',
      desc: 'Được hợp tác phát triển nhiều loại dịch vụ khác nhau với Viettel IDC: Cloud Server, Backup as a Service, Colocation, Hosting, Email, Tên miền,…'
    },
    {
      icon: DollarSign,
      title: 'Chiết khấu lên đến 30%',
      desc: 'Được hưởng chiết khấu dịch vụ cao lên tới 30%, cơ chế lũy tiến hấp dẫn gia tăng biên lợi nhuận cho đại lý.'
    },
    {
      icon: TrendingUp,
      title: 'Quyết định giá bán',
      desc: 'Hoàn toàn chủ động đưa ra giá bán dịch vụ đến khách hàng theo chiến lược kinh doanh riêng của doanh nghiệp bạn.'
    },
    {
      icon: FileText,
      title: 'Thủ tục đăng ký dễ dàng',
      desc: 'Được hỗ trợ thủ tục đăng ký dễ dàng, nhanh chóng với quy trình thẩm định và kích hoạt tài khoản tinh gọn.'
    },
    {
      icon: Cpu,
      title: 'Phần mềm quản lý chuyên nghiệp',
      desc: 'Chủ động đăng ký dịch vụ cũng như đối soát giao dịch thời gian thực với hệ thống Portal chuyên biệt của Viettel IDC.'
    },
    {
      icon: Headphones,
      title: 'Đào tạo, hỗ trợ kỹ thuật 24/7',
      desc: 'Đào tạo kiến thức về dịch vụ, đồng thời hỗ trợ kỹ thuật 24/7/365 để bạn hoàn toàn an tâm tập trung vào việc phát triển kinh doanh.'
    }
  ];

  // Chính sách Đại lý - 5 Dịch vụ chính
  const discountPolicies = [
    {
      rate: '30%+',
      name: 'Web Hosting',
      category: 'Dịch vụ lưu trữ web',
      desc: 'Hạ tầng máy chủ NVMe siêu tốc, bảo mật tối ưu cho website doanh nghiệp và cá nhân.',
      icon: Globe,
      features: ['Uptime 99.99%', 'Bảo mật DDoS', 'Quản trị cPanel/DirectAdmin', 'SSL miễn phí']
    },
    {
      rate: '15%+',
      name: 'Viettel Start Cloud',
      category: 'Điện toán đám mây thế hệ mới',
      desc: 'Máy chủ ảo Cloud Server chuyên nghiệp, tài nguyên linh hoạt, khởi tạo trong 30 giây.',
      icon: Server,
      features: ['Hạ tầng OpenStack/VMware', 'Khởi tạo tự động', 'Tùy biến cấu hình', 'Backup tự động']
    },
    {
      rate: '20%+',
      name: 'Email Hosting',
      category: 'Hệ thống thư điện tử',
      desc: 'Hệ thống Email doanh nghiệp theo tên miền riêng, chống spam và virus 99.9%.',
      icon: Mail,
      features: ['Bảo mật chuẩn quốc tế', 'IP sạch uy tín', 'Dung lượng linh hoạt', 'Đồng bộ đa thiết bị']
    },
    {
      rate: '15%+',
      name: 'Colocation',
      category: 'Thuê chỗ đặt máy chủ',
      desc: 'Không gian chỗ đặt máy chủ tại Trung tâm dữ liệu chuẩn TIA-942 Rated 3 hàng đầu Việt Nam.',
      icon: Database,
      features: ['Chuẩn TIA-942 Rated 3', 'Nguồn điện N+1, 2N', 'Điều hòa chính xác', 'Camera an ninh 24/7']
    },
    {
      rate: '6%+',
      name: 'Tên miền',
      category: 'Đăng ký Domain Quốc gia & Quốc tế',
      desc: 'Cung cấp tên miền .VN và quốc tế nhanh chóng, quyền quản trị DNS chủ động hoàn toàn.',
      icon: Sparkles,
      features: ['Tên miền .VN chính hãng', 'Domain quốc tế .COM, .NET', 'DNS Anycast nhanh', 'Khóa tên miền an toàn']
    }
  ];

  // Những đại lý tiêu biểu
  const featuredResellers = [
    {
      name: 'Công ty Cổ Phần Giải Pháp Jupitek',
      address: 'Tầng 8, 20/126 Mễ Trì Hạ, Từ Liêm, Hà Nội',
      phone: '0961082327',
      email: 'contact@jupitek.vn',
      website: 'jupitek.vn',
      tags: ['Cloud Server', 'Web Hosting', 'Chuyển đổi số'],
      desc: 'Đối tác chiến lược chuyên cung cấp giải pháp chuyển đổi số toàn diện, tối ưu hóa hạ tầng đám mây và hệ thống website cho hàng trăm doanh nghiệp.'
    },
    {
      name: 'Công Ty Cổ Phần Công Nghệ Và Giải Pháp Trực Tuyến IDC',
      address: 'Tầng 10, tòa nhà Đại Phát, 82 Duy Tân, Cầu Giấy, Hà Nội',
      phone: '02466528338',
      email: 'info@idconline.vn',
      website: 'idconline.vn',
      tags: ['Colocation', 'Cloud VPS', 'Dedicated Server'],
      desc: 'Đơn vị uy tín hàng đầu trong lĩnh vực phân phối hạ tầng phần cứng máy chủ, chỗ đặt server và dịch vụ lưu trữ dữ liệu trực tuyến tại miền Bắc.'
    },
    {
      name: 'Công ty Cổ Phần Nstech Việt Nam',
      address: 'P.606, tòa nhà Mỹ Đình Plaza, 138 Trần Bình, Mỹ Đình, Nam Từ Liêm, Hà Nội',
      phone: '0987763113',
      email: 'info@nstech.vn',
      website: 'nstech.vn',
      tags: ['Tên miền', 'Email Server', 'An toàn thông tin'],
      desc: 'Chuyên gia tư vấn và cung cấp các dịch vụ bảo mật thông tin, giải pháp Email Hosting chuyên nghiệp và hệ thống lưu trữ điện toán đám mây cho doanh nghiệp.'
    },
    {
      name: 'Công ty Cổ Phần Công nghệ Phần mềm vnCloud',
      address: 'Tầng 16, Daeha Business Center, 360 Kim Mã, Hà Nội',
      phone: '02473001168',
      email: 'sales@vncloud.vn',
      website: 'vncloud.vn',
      tags: ['Cloud Computing', 'SaaS Solutions', 'Backup as a Service'],
      desc: 'Đại lý phân phối dịch vụ Cloud Computing và các giải pháp phần mềm dạng dịch vụ (SaaS) quy mô lớn trên nền tảng hạ tầng của Viettel IDC.'
    }
  ];

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Vui lòng nhập họ và tên';
    if (!formData.companyName.trim()) errors.companyName = 'Vui lòng nhập tên công ty hoặc tổ chức';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Vui lòng nhập email liên hệ';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Địa chỉ email không đúng định dạng';
    }

    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!phoneRegex.test(formData.phone.replace(/[\s.-]/g, ''))) {
      errors.phone = 'Số điện thoại không đúng định dạng';
    }

    if (!formData.agreeTerms) {
      errors.agreeTerms = 'Bạn cần đồng ý với chính sách và quy chế đại lý';
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

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      setIsLoginModalOpen(false);
    }, 1500);
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans pb-20">
      
      {/* 1. HERO BANNER: TRỞ THÀNH ĐẠI LÝ CỦA VIETTEL IDC */}
      <div className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden py-16 sm:py-20 lg:py-24 border-b border-slate-800">
        
        {/* Tech Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
        <div className="absolute -top-24 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-8">
            <VIDCNativeButton onClick={onNavigateHome} className="hover:text-red-400 transition-colors cursor-pointer">Trang chủ</VIDCNativeButton>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <VIDCNativeButton onClick={() => onNavigate?.('/partners/featured/')} className="hover:text-red-400 transition-colors cursor-pointer">Đối tác</VIDCNativeButton>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-red-500 font-bold">Trở thành Đại lý của Viettel IDC</span>
          </div>

          <div className="max-w-3xl space-y-6">
            
            {/* Left Content */}
            <div className="space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-xs font-bold uppercase text-red-400 tracking-wider">
                <Handshake className="w-4 h-4 text-red-400" />
                <span>CHƯƠNG TRÌNH HỢP TÁC ĐẠI LÝ VIETTEL IDC</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white">
                Trở thành Đại lý <br />
                <span className="text-red-500">Viettel IDC</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Đồng hành cùng nhà cung cấp Cloud & Data Center hàng đầu Việt Nam. Hưởng chiết khấu hấp dẫn lên đến 30%+, tự chủ giá bán và nhận hỗ trợ kỹ thuật chuyên sâu 24/7.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <VIDCAnchor 
                  href="#reseller-form"
                  className="px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide shadow-xl shadow-red-600/30 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Trở thành đại lý</span>
                  <ArrowRight className="w-4 h-4" />
                </VIDCAnchor>

                <VIDCNativeButton 
                  onClick={() => setIsLoginModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <LogIn className="w-4 h-4 text-red-400" />
                  <span>Cổng đăng nhập Đại lý</span>
                </VIDCNativeButton>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* 1. SECTION: TỔNG QUAN VỀ CHƯƠNG TRÌNH ĐẠI LÝ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] font-black uppercase text-red-600 tracking-widest bg-red-100/70 px-3.5 py-1 rounded-full border border-red-200">
                TỔNG QUAN CHƯƠNG TRÌNH
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Chương trình Đại lý của Viettel IDC
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Với 18 năm dẫn đầu thị trường Data Center &amp; Cloud Computing tại Việt Nam, Viettel IDC hiện đồng hành cùng gần <strong>200 đại lý</strong> phục vụ hơn <strong>25.000+ khách hàng</strong>.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Với phương châm <em>"Chia sẻ thành công"</em>, Viettel IDC trân trọng kính mời các doanh nghiệp CNTT, đơn vị tích hợp hệ thống và cá nhân hợp tác triển khai dịch vụ với chính sách chiết khấu cao, đào tạo chuyên sâu và cam kết quyền lợi tốt nhất.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <Handshake className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Mô hình Hợp tác Linh hoạt</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Phù hợp cho cả đại lý phân phối, đại lý giới thiệu (Referral) và tích hợp giải pháp.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Gia tăng Doanh thu Bền vững</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Chiết khấu trực tiếp tới 30%+, thưởng lũy tiến theo doanh số và mở rộng tệp khách hàng.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Hạ tầng Chuẩn Quốc tế</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trung tâm dữ liệu TIA-942 Rated 3, cam kết SLA 99.99% đảm bảo uy tín thương hiệu của bạn.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Đào tạo & Hỗ trợ 24/7</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Đội ngũ chuyên gia Viettel IDC đồng hành từ kỹ thuật, pre-sales đến xử lý sự cố 24/7/365.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECTION: LỢI ÍCH KHI TRỞ THÀNH ĐẠI LÝ CỦA VIETTEL IDC */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-black uppercase text-red-600 tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
            QUYỀN LỢI ĐỐI TÁC
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Lợi ích khi trở thành đại lý của Viettel IDC
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Chính sách hợp tác toàn diện mang đến nền tảng phát triển doanh thu bền vững và sự tự chủ tối đa cho Quý đại lý.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resellerBenefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="bg-white p-7 rounded-3xl border border-slate-200/90 hover:border-red-500 shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-red-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 3. SECTION: CHÍNH SÁCH ĐẠI LÝ (DISCOUNT TIERS) */}
      <div id="policy-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 lg:p-14 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-black uppercase text-red-400 tracking-widest bg-red-950/80 px-3.5 py-1.5 rounded-full border border-red-800">
              CHÍNH SÁCH CHIẾT KHẤU
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mt-3">
              Chính sách Đại lý
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-medium">
              Mức chiết khấu trực tiếp cao cùng cơ chế đối soát minh bạch hàng tháng cho từng nhóm dịch vụ chủ lực.
            </p>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {discountPolicies.map((policy, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/90 border border-slate-700/80 hover:border-red-500 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/10"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
                      <policy.icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl lg:text-3xl font-black text-red-500 tracking-tight">
                      {policy.rate}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-black text-white group-hover:text-red-400 transition-colors">
                      {policy.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                      {policy.category}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed pt-2 border-t border-slate-700/80">
                    {policy.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-700/60 space-y-1.5">
                  {policy.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <Check className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick CTA inside policy */}
          <div className="relative mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-sm font-bold text-white">Bạn cần tư vấn bảng tính hoa hồng chi tiết cho doanh nghiệp?</h4>
              <p className="text-xs text-slate-400">Đội ngũ phát triển đối tác của Viettel IDC sẵn sàng hỗ trợ bạn 24/7.</p>
            </div>
            <VIDCAnchor 
              href="#reseller-form"
              className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
            >
              Liên hệ tư vấn chính sách
            </VIDCAnchor>
          </div>

        </div>

      </div>

      {/* 4. SECTION: NHỮNG ĐẠI LÝ TIÊU BIỂU */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-black uppercase text-red-600 tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
            ĐỐI TÁC ĐỒNG HÀNH
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Những đại lý tiêu biểu
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-medium">
            Gần 200 đối tác chiến lược và đại lý đang đồng hành cùng Viettel IDC cung cấp giải pháp đến hàng ngàn doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredResellers.map((reseller, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-500 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header with icon & tags */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold border border-slate-200 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">Đại lý Ủy quyền</span>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                        {reseller.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {reseller.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Contact info */}
                <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100 font-medium">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span><strong>Địa chỉ:</strong> {reseller.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <span><strong>Số điện thoại:</strong> {reseller.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <span><strong>Email:</strong> {reseller.email}</span>
                  </div>
                </div>

              </div>

              {/* Action Button: XEM THÊM */}
              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Website: {reseller.website}</span>
                <VIDCNativeButton 
                  onClick={() => setSelectedPartnerModal(reseller)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>XEM THÊM</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </VIDCNativeButton>
              </div>

            </div>
          ))}
        </div>

      </div>



      {/* 6. SECTION: FORM ĐĂNG KÝ: HỢP TÁC VỚI VIETTEL IDC / TRỞ THÀNH ĐẠI LÝ */}
      <div id="reseller-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 scroll-mt-28">
        
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl">
          
          <div className="text-center space-y-3 mb-10">
            <span className="text-[11px] font-black uppercase text-red-600 tracking-widest bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
              ĐĂNG KÝ HỢP TÁC
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Hợp tác với Viettel IDC
            </h2>
            <h3 className="text-lg font-bold text-red-600">
              Trở thành Đại lý của Viettel IDC
            </h3>
            <p className="text-sm text-slate-600 font-medium max-w-xl mx-auto">
              Hãy tham gia vào mạng lưới đại lý của Viettel IDC ngay từ hôm nay. Vui lòng để lại thông tin để bộ phận Phát triển Đối tác liên hệ và gửi hợp đồng chính sách chi tiết.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Họ và tên người đại diện *
                    </label>
                    <VIDCNativeInput
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full p-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-red-500 focus:outline-hidden font-medium"
                    />
                    {formErrors.fullName && <p className="text-[11px] text-red-500 font-bold mt-1">{formErrors.fullName}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Tên công ty / Doanh nghiệp / Tổ chức *
                    </label>
                    <VIDCNativeInput
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Công ty CP Công Nghệ ABC"
                      className="w-full p-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-red-500 focus:outline-hidden font-medium"
                    />
                    {formErrors.companyName && <p className="text-[11px] text-red-500 font-bold mt-1">{formErrors.companyName}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Email công việc *
                    </label>
                    <VIDCNativeInput
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@company.vn"
                      className="w-full p-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-red-500 focus:outline-hidden font-medium"
                    />
                    {formErrors.email && <p className="text-[11px] text-red-500 font-bold mt-1">{formErrors.email}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Số điện thoại liên hệ *
                    </label>
                    <VIDCNativeInput
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0988888888"
                      className="w-full p-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-red-500 focus:outline-hidden font-medium"
                    />
                    {formErrors.phone && <p className="text-[11px] text-red-500 font-bold mt-1">{formErrors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Loại hình tổ chức / Doanh nghiệp
                    </label>
                    <VIDCNativeSelect
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full p-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-red-500 focus:outline-hidden font-medium"
                    >
                      <option>Doanh nghiệp IT / Tích hợp hệ thống</option>
                      <option>Công ty thiết kế Website / Agency</option>
                      <option>Nhà cung cấp giải pháp phần mềm (ISV)</option>
                      <option>Tư vấn Chuyển đổi số</option>
                      <option>Cá nhân / Freelancer công nghệ</option>
                    </VIDCNativeSelect>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Dịch vụ trọng tâm muốn phân phối
                    </label>
                    <VIDCNativeSelect
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full p-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-red-500 focus:outline-hidden font-medium"
                    >
                      <option>Tất cả các dịch vụ (Cloud, Hosting, Colocation...)</option>
                      <option>Web Hosting & Tên miền (Chiết khấu tới 30%)</option>
                      <option>Viettel Start Cloud / Cloud Server (Chiết khấu 15%+)</option>
                      <option>Email Hosting chuyên nghiệp (Chiết khấu 20%+)</option>
                      <option>Chỗ đặt máy chủ Colocation (Chiết khấu 15%+)</option>
                    </VIDCNativeSelect>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Ghi chú / Nhu cầu triển khai hoặc tệp khách hàng dự kiến
                  </label>
                  <VIDCNativeTextarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Mô tả tóm tắt kinh nghiệm kinh doanh, quy mô khách hàng hoặc các yêu cầu hỗ trợ kỹ thuật..."
                    className="w-full p-3.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-red-500 focus:outline-hidden font-medium resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5">
                  <VIDCNativeInput
                    type="checkbox"
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded text-red-600 focus:ring-red-500 border-slate-300"
                  />
                  <label htmlFor="agreeTerms" className="text-xs text-slate-600 font-medium leading-relaxed">
                    Tôi đồng ý với các <span className="text-red-600 font-semibold cursor-pointer">Điều khoản chính sách đối tác</span> và cam kết thông tin cung cấp là chính xác.
                  </label>
                </div>
                {formErrors.agreeTerms && <p className="text-[11px] text-red-500 font-bold">{formErrors.agreeTerms}</p>}

                <div className="pt-2">
                  <VIDCNativeButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm uppercase tracking-wider transition-all shadow-xl shadow-red-600/25 hover:shadow-red-600/35 cursor-pointer flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <span>Đang xử lý hồ sơ...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Trở thành đại lý của Viettel IDC</span>
                      </>
                    )}
                  </VIDCNativeButton>
                </div>

              </motion.form>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Gửi Hồ Sơ Đăng Ký Thành Công!</h3>
                <p className="text-sm text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
                  Cảm ơn Quý đối tác đã đăng ký trở thành Đại lý của Viettel IDC. Chuyên viên Phát triển Đối tác sẽ liên hệ trực tiếp trong vòng 24 giờ làm việc để tư vấn và hoàn tất hợp đồng.
                </p>
                <VIDCNativeButton
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Đăng ký thêm hồ sơ
                </VIDCNativeButton>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

      {/* MODAL: CHI TIẾT ĐẠI LÝ TIÊU BIỂU (XEM THÊM) */}
      <AnimatePresence>
        {selectedPartnerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 relative"
            >
              <VIDCNativeButton 
                onClick={() => setSelectedPartnerModal(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </VIDCNativeButton>

              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-red-600 tracking-wider">ĐẠI LÝ CHIẾN LƯỢC TIÊU BIỂU</span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                    {selectedPartnerModal.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <p className="text-slate-600 leading-relaxed font-normal bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {selectedPartnerModal.desc}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span><strong>Địa chỉ:</strong> {selectedPartnerModal.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-red-600 shrink-0" />
                    <span><strong>Hotline:</strong> {selectedPartnerModal.phone}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-red-600 shrink-0" />
                    <span><strong>Email:</strong> {selectedPartnerModal.email}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-red-600 shrink-0" />
                    <span><strong>Website:</strong> {selectedPartnerModal.website}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold text-slate-800 block mb-1.5">Lĩnh vực hợp tác nổi bật:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPartnerModal.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="text-[11px] font-bold bg-red-50 text-red-700 px-3 py-1 rounded-full border border-red-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end">
                <VIDCNativeButton
                  onClick={() => setSelectedPartnerModal(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Đóng
                </VIDCNativeButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL: CỔNG ĐĂNG NHẬP ĐẠI LÝ (PARTNER PORTAL LOGIN) */}
      <AnimatePresence>
        {isLoginModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 text-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-700 relative space-y-5"
            >
              <VIDCNativeButton 
                onClick={() => setIsLoginModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </VIDCNativeButton>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/30 text-red-500 flex items-center justify-center mx-auto">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white">Cổng Đăng Nhập Đại Lý</h3>
                <p className="text-xs text-slate-400 font-medium">
                  Hệ thống quản trị và đối soát doanh thu Viettel IDC Partner Portal
                </p>
              </div>

              {!loginSuccess ? (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Mã Đại lý hoặc Email</label>
                    <VIDCNativeInput
                      type="text"
                      required
                      placeholder="reseller@viettelidc.com.vn"
                      value={loginForm.username}
                      onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                      className="w-full p-3 text-sm bg-slate-800 border border-slate-700 rounded-xl focus:border-red-500 focus:outline-hidden font-medium text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Mật khẩu</label>
                    <VIDCNativeInput
                      type="password"
                      required
                      placeholder="••••••••"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="w-full p-3 text-sm bg-slate-800 border border-slate-700 rounded-xl focus:border-red-500 focus:outline-hidden font-medium text-white"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <VIDCNativeInput type="checkbox" defaultChecked className="rounded text-red-600 focus:ring-red-500" />
                      <span>Ghi nhớ đăng nhập</span>
                    </label>
                    <VIDCAnchor href="#reseller-form" onClick={() => setIsLoginModalOpen(false)} className="text-red-400 hover:underline">
                      Quên mật khẩu?
                    </VIDCAnchor>
                  </div>

                  <VIDCNativeButton
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-red-600/30 cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Đăng nhập Partner Portal</span>
                  </VIDCNativeButton>
                </form>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-emerald-400">Đăng nhập thành công!</p>
                  <p className="text-xs text-slate-400">Đang chuyển hướng vào hệ thống quản lý đại lý...</p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
