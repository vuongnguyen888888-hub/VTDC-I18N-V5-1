'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  ChevronRight, 
  ChevronLeft,
  ChevronDown,
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layers, 
  CheckCircle2, 
  Building2,
  Server,
  ArrowRight,
  ExternalLink,
  Users,
  Network,
  Target,
  Award,
  Phone,
  Mail,
  FileText,
  Clock,
  Coins,
  Handshake,
  Bot,
  BrainCircuit,
  Database,
  Code2,
  Radio,
  Home,
  Check,
  Globe
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface QualcommPartnerPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  onNavigate?: (path: string) => void;
}

export const QualcommPartnerPage: React.FC<QualcommPartnerPageProps> = ({
  currentMarket: propMarket,
  onNavigateHome,
  onNavigate
}) => {
  const { currentMarket: ctxMarket, currentLanguage, getFullPath } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';
  const isLaos = isNonVn;

  // Auto scroll to hash section on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 30);
      }
    }
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    company: '',
    workEmail: '',
    phone: '',
    website: '',
    solutionInterest: 'Phát triển AI Application',
    goals: {
      cloudNpu: true,
      aiInferenceSuite: false,
      cameraAiVms: false,
      longTermPartner: false,
      programUpdates: false
    },
    projectDescription: '',
    agreeTerms: true
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [caseStudyIndex, setCaseStudyIndex] = useState(0);
  const [activeProductIndex, setActiveProductIndex] = useState<number>(0);

  // 3 Expandable Product Cards
  const productCards = [
    {
      id: 'cloudnpu',
      icon: Cpu,
      shortTitle: 'CLOUDNPU SERVER',
      category: 'Hạ tầng Máy chủ AI',
      title: 'CloudNPU - Tăng tốc suy luận AI',
      desc: 'Tăng tốc xử lý dữ liệu với sức mạnh từ chip AI Qualcomm NPU trên nền tảng đám mây Viettel IDC. Tiết kiệm điện năng vượt trội, hiệu suất suy luận cực cao, tối ưu chi phí vận hành cho các mô hình AI lớn và Deep Learning.',
      badge: 'Viettel IDC × Qualcomm',
      image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Đăng ký dùng thử',
      ctaLink: '#register-form'
    },
    {
      id: 'inference-suite',
      icon: BrainCircuit,
      shortTitle: 'AI INFERENCE SUITE',
      category: 'Framework & Phần mềm tối ưu',
      title: 'AI Inference Suite',
      desc: 'Bộ công cụ và framework phần mềm hoàn chỉnh của Qualcomm giúp tối ưu hóa trọng số mô hình, giảm độ trễ tối đa và tăng tốc suy luận đa luồng cho các bài toán Computer Vision, NLP và Generative AI.',
      badge: 'Qualcomm AI Stack',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Trải nghiệm ngay',
      ctaLink: '#register-form'
    },
    {
      id: 'camera-ai',
      icon: Radio,
      shortTitle: 'CAMERA AI (VMS)',
      category: 'Nền tảng Thị giác máy tính',
      title: 'Nền tảng quản trị Camera AI VMS',
      desc: 'Hệ thống giám sát và phân tích video thông minh tập trung, hỗ trợ nhận diện khuôn mặt, đếm lưu lượng, phát hiện hành vi bất thường và phân tích đám đông theo thời gian thực với độ chính xác cao.',
      badge: 'Computer Vision Platform',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      ctaText: 'Tìm hiểu thêm',
      ctaLink: '#register-form'
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleGoalChange = (key: keyof typeof formData.goals) => {
    setFormData(prev => ({
      ...prev,
      goals: {
        ...prev.goals,
        [key]: !prev.goals[key]
      }
    }));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Vui lòng nhập họ và tên';
    if (!formData.jobTitle.trim()) errors.jobTitle = 'Vui lòng nhập chức danh';
    if (!formData.company.trim()) errors.company = 'Vui lòng nhập công ty/tổ chức';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.workEmail.trim()) {
      errors.workEmail = 'Vui lòng nhập email công việc';
    } else if (!emailRegex.test(formData.workEmail)) {
      errors.workEmail = 'Email không hợp lệ';
    }

    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!phoneRegex.test(formData.phone.replace(/[\s.-]/g, ''))) {
      errors.phone = 'Số điện thoại không đúng định dạng';
    }

    if (!formData.website.trim()) {
      errors.website = 'Vui lòng nhập website hoặc tên sản phẩm';
    }

    if (!formData.agreeTerms) {
      errors.agreeTerms = 'Bạn cần đồng ý với điều khoản và chính sách bảo mật';
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

  // Highlights 4 items
  const programHighlights = [
    {
      icon: Users,
      title: 'Mở rộng cơ hội hợp tác với các đối tác phát triển ứng dụng AI',
      desc: 'Kết nối mạng lưới các nhà phát triển và doanh nghiệp công nghệ hàng đầu.'
    },
    {
      icon: Network,
      title: 'Kết nối công nghệ và hạ tầng để tăng tốc phát triển AI',
      desc: 'Tận dụng sức mạnh phần cứng chuyên dụng kết hợp hạ tầng đám mây chuẩn quốc tế.'
    },
    {
      icon: Layers,
      title: 'Tạo môi trường phù hợp cho huấn luyện, đánh giá và tối ưu mô hình AI',
      desc: 'Hệ thống máy chủ tối ưu hóa giúp tăng tốc kiểm thử và giảm chi phí điện toán.'
    },
    {
      icon: Target,
      title: 'Hướng tới xây dựng những ứng dụng AI có khả năng giải quyết những bài toán thực tế',
      desc: 'Tập trung vào các giải pháp có thể ứng dụng trực tiếp vào hoạt động kinh doanh.'
    }
  ];

  // Target audience 5 cards
  const targetAudience = [
    {
      icon: Code2,
      title: 'Đơn vị phát triển phần mềm độc lập (ISV)',
      desc: 'Muốn tích hợp AI vào sản phẩm hiện có.'
    },
    {
      icon: Bot,
      title: 'Đơn vị xây dựng giải pháp AI',
      desc: 'Chatbot, AI assistant, AI automation hoặc các ứng dụng xử lý dữ liệu.'
    },
    {
      icon: BrainCircuit,
      title: 'Đối tác tích hợp hệ thống (SI), tư vấn chuyển đổi số',
      desc: 'Đang triển khai giải pháp AI cho khách hàng doanh nghiệp.'
    },
    {
      icon: Building2,
      title: 'Doanh nghiệp số',
      desc: 'Đang có bài toán AI cụ thể và cần kiểm chứng hướng triển khai.'
    },
    {
      icon: Sparkles,
      title: 'AI Startups',
      desc: 'Đang phát triển sản phẩm và cần môi trường phù hợp để thử nghiệm.'
    }
  ];

  // Why join us 5 columns
  const whyJoin = [
    {
      icon: Server,
      title: 'Tiếp cận hạ tầng chuyên dụng cho AI',
      desc: 'Đánh giá và thử nghiệm mô hình của bạn trên hệ sinh thái đám mây của Viettel IDC, kết hợp sức mạnh của Qualcomm.'
    },
    {
      icon: Clock,
      title: 'Rút ngắn thời gian triển khai',
      desc: 'Loại bỏ rào cản chi phí hạ tầng, nhanh chóng bắt đầu kiểm thử và đánh giá giải pháp trên nền tảng sẵn sàng.'
    },
    {
      icon: Coins,
      title: 'Tối ưu chi phí phát triển ứng dụng AI',
      desc: 'Đo lường chính xác hiệu năng và độ phù hợp của ứng dụng theo từng kịch bản kinh doanh, từ đó tối ưu hóa chi phí đầu tư.'
    },
    {
      icon: Handshake,
      title: 'Đồng hành xây dựng ứng dụng thực tiễn cho AI',
      desc: 'Đội ngũ chuyên gia của Viettel IDC và Qualcomm sẽ giúp bạn làm rõ bài toán thực tế và xác định hướng triển khai AI mang lại giá trị cao nhất.'
    },
    {
      icon: Award,
      title: 'Mở rộng cơ hội hợp tác dài hạn',
      desc: 'Cơ hội phát triển sau PoC, phối hợp truyền thông thương hiệu hoặc mở rộng cơ hội hợp tác trong hệ sinh thái đối tác, khách hàng của chúng tôi.'
    }
  ];

  // AI Use cases 3 cards
  const aiUseCases = [
    {
      title: 'Tối ưu trải nghiệm khách hàng',
      desc: 'Các mô hình AI thế hệ mới như Chatbot thông minh, trợ lý ảo hỗ trợ khách hàng đa kênh với khả năng tự động phản hồi cá nhân hóa.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      tag: 'Customer Experience AI'
    },
    {
      title: 'Nâng cao hiệu suất nội bộ (AI Assistant)',
      desc: 'Giải pháp tra cứu thông minh, hỗ trợ thực thi quy trình nghiệp vụ và tìm kiếm tài liệu nội bộ một cách nhanh chóng, chính xác.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      tag: 'Enterprise AI Assistant'
    },
    {
      title: 'Khai thác tri thức và xử lý tài liệu',
      desc: 'Các ứng dụng có khả năng tự động đọc, phân loại, tìm kiếm và trích xuất thông tin có giá trị từ các kho tài liệu và dữ liệu tri thức khổng lồ.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      tag: 'Document & Knowledge AI'
    }
  ];

  // 5 Step Registration Roadmap
  const stepsRoadmap = [
    {
      step: '01',
      title: 'Đăng ký thông tin',
      desc: 'Gửi thông tin cơ bản qua biểu mẫu trực tuyến'
    },
    {
      step: '02',
      title: 'Trao đổi sơ bộ',
      desc: 'Liên hệ tìm hiểu nhu cầu & mục tiêu thử nghiệm'
    },
    {
      step: '03',
      title: 'Đánh giá mức độ phù hợp',
      desc: 'Thống nhất phạm vi kỹ thuật & kế hoạch PoC'
    },
    {
      step: '04',
      title: 'Kết nối môi trường thử nghiệm',
      desc: 'Cấp phát tài nguyên CloudNPU & kiểm chứng mô hình'
    },
    {
      step: '05',
      title: 'Đề xuất lộ trình mở rộng',
      desc: 'Đánh giá kết quả PoC, tối ưu chi phí & thương mại hóa'
    }
  ];

  // International Certifications
  const certifications = [
    { name: 'ANSI/TIA-942-B Rated-3', badge: 'TIA-942 Rated 3', sub: 'Hạ tầng Data Center Quốc tế', color: 'border-emerald-600/60 bg-emerald-50 text-emerald-700' },
    { name: 'PCI DSS v4.0 Level 1', badge: 'PCI-DSS', sub: 'Bảo mật thẻ thanh toán', color: 'border-teal-600/60 bg-teal-50 text-teal-700' },
    { name: 'ISO/IEC 27001:2022', badge: 'ISO 27001', sub: 'An toàn thông tin', color: 'border-red-600/60 bg-red-50 text-red-700' },
    { name: 'ISO/IEC 27017:2015', badge: 'ISO 27017', sub: 'An toàn đám mây Cloud', color: 'border-rose-600/60 bg-rose-50 text-rose-700' },
    { name: 'ISO/IEC 27018:2019', badge: 'ISO 27018', sub: 'Quyền riêng tư dữ liệu', color: 'border-sky-600/60 bg-sky-50 text-sky-700' },
    { name: 'ISO 22301:2019', badge: 'ISO 22301', sub: 'Kinh doanh liên tục BCP', color: 'border-amber-600/60 bg-amber-50 text-amber-700' },
    { name: 'ISO 50001:2018', badge: 'ISO 50001', sub: 'Quản lý năng lượng Green DC', color: 'border-green-600/60 bg-green-50 text-green-700' }
  ];

  // FAQ list
  const faqList = [
    {
      q: 'Khi tham gia chương trình, tôi có mất thêm chi phí nào không?',
      a: 'Hoàn toàn không. Chương trình tài trợ môi trường thử nghiệm PoC (Proof of Concept) miễn phí trên hạ tầng CloudNPU của Viettel IDC kết hợp bộ xử lý AI của Qualcomm trong thời gian thử nghiệm được phê duyệt, bao gồm cả hỗ trợ kỹ thuật từ đội ngũ chuyên gia.'
    },
    {
      q: 'Tôi có thể đăng ký chỉ để tìm hiểu trước không?',
      a: 'Có. Bạn hoàn toàn có thể đăng ký để trao đổi cùng đội ngũ chuyên gia Viettel IDC và Qualcomm nhằm tìm hiểu khả năng tương thích, định hướng ứng dụng và đánh giá tiềm năng trước khi chính thức bắt đầu thử nghiệm kỹ thuật.'
    },
    {
      q: 'Tôi cần có sản phẩm hoàn chỉnh mới có thể tham gia không?',
      a: 'Không bắt buộc. Chương trình chào đón các đối tác ở mọi giai đoạn: từ ý tưởng ban đầu, thử nghiệm PoC mô hình, đến giai đoạn mở rộng sản phẩm và thương mại hóa giải pháp.'
    },
    {
      q: 'Sau khi đăng ký, tôi sẽ được hỗ trợ như thế nào?',
      a: 'Đội ngũ phụ trách sẽ liên hệ trao đổi trực tiếp trong vòng 24–48h làm việc. Bạn sẽ được hỗ trợ thiết lập tài nguyên Cloud NPU, tích hợp bộ SDK AI Inference Suite, tối ưu hóa trọng số mô hình và đồng hành kiểm thử xuyên suốt.'
    },
    {
      q: 'Tôi có cần chuẩn bị yêu cầu kỹ thuật chi tiết ngay từ đầu không?',
      a: 'Bạn chỉ cần mô tả bài toán kinh doanh hoặc giải pháp AI dự kiến. Các thông số kỹ thuật chi tiết (như kiến trúc mô hình, latency mục tiêu, throughput) sẽ được các chuyên gia hỗ trợ bạn làm rõ trong buổi trao đổi sơ bộ.'
    },
    {
      q: 'Chương trình có giới hạn theo ngành không?',
      a: 'Chương trình không giới hạn lĩnh vực. Chúng tôi ưu tiên mọi bài toán có tính ứng dụng thực tiễn cao như Tài chính - Ngân hàng, Y tế, Giáo dục, Bán lẻ, Sản xuất công nghiệp, Đô thị thông minh, Logistics...'
    }
  ];

  return (
    <div className="w-full bg-[var(--vidc-color-background-subtle)] text-[var(--vidc-color-text-primary)] font-sans pb-16">
      
      {/* 1. BREADCRUMB BAR (Standardized across Viettel IDC Portal) */}
      <div className="border-b border-slate-200/80 bg-white sticky top-0 z-20 shadow-xs">
        <div className="vidc-container py-3 flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
          <VIDCAnchor
            href={getFullPath('/')}
            className="hover:text-[var(--vidc-color-brand-red)] transition-colors flex items-center gap-1 shrink-0"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{isLaos ? 'Home' : 'Trang chủ'}</span>
          </VIDCAnchor>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <VIDCAnchor
            href={getFullPath('/partners/featured/')}
            className="hover:text-[var(--vidc-color-brand-red)] transition-colors shrink-0"
          >
            {isLaos ? 'Partners' : 'Đối tác'}
          </VIDCAnchor>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="font-semibold text-slate-900 truncate">
            Viettel IDC × Qualcomm
          </span>
        </div>
      </div>

      {/* 2. HERO SECTION (Matching Homepage HeroSection high-tech styling & banner graphic) */}
      <section className="relative overflow-hidden bg-slate-50 text-slate-900 py-14 md:py-20 vidc-tech-grid border-b border-slate-200/80">
        {/* Hero Background Banner Graphic */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="https://res.cloudinary.com/dpyizq1m2/image/upload/v1790319772/banner_hero-2_hung6e.png"
            alt="Viettel IDC × Qualcomm Hero Banner"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="vidc-container relative z-10 space-y-8">
          <div className="max-w-[880px] space-y-6 animate-in fade-in slide-in-from-right-2 duration-300">
            
            {/* Top Eyebrow Badge & Partner Logo Pair */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50/90 backdrop-blur-md border border-red-200/80 shadow-2xs">
                <span className="text-xs font-black uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
                  CHƯƠNG TRÌNH ĐỒNG HÀNH DOANH NGHIỆP CÔNG NGHỆ 2026
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-slate-200/80 shadow-2xs">
                <div className="flex items-center">
                  <span className="text-xs font-black text-red-600 tracking-tight">viettel</span>
                  <span className="text-[9px] font-bold bg-red-600 text-white px-1 py-0.2 rounded ml-0.5">IDC</span>
                </div>
                <span className="text-xs font-light text-slate-400">×</span>
                <span className="text-xs font-black text-sky-800 tracking-tight">Qualcomm</span>
              </div>
            </div>

            {/* H1 Display Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
              Đồng hành cùng doanh nghiệp <br className="hidden sm:inline" />
              <span className="text-[color:var(--vidc-color-brand-red)]">Việt Nam đưa AI vào thực chiến</span>
            </h1>

            {/* Sub-heading Description */}
            <p className="text-base md:text-lg text-slate-700 font-medium leading-relaxed max-w-[var(--vidc-layout-container-reading)]">
              Hiện thực hóa ý tưởng AI của bạn với sức mạnh từ nền tảng tăng tốc AI của Qualcomm trên hệ sinh thái đám mây của Viettel IDC. Đăng ký tham gia để bắt đầu trải nghiệm hạ tầng chuyên biệt và nhận hỗ trợ kỹ thuật chuyên sâu ngay hôm nay!
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <VIDCAnchor
                href="#register-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-[var(--vidc-button-height-md)] rounded-[var(--vidc-button-radius)] bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-sm font-bold shadow-none transition-all transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Nhận dùng thử 1 tháng miễn phí</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </VIDCAnchor>

              <VIDCAnchor
                href={getFullPath('/services/compute/cloud-npu/')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-[var(--vidc-button-height-md)] rounded-[var(--vidc-button-radius)] border border-slate-300 hover:border-slate-400 bg-white/90 hover:bg-white text-slate-800 hover:text-slate-900 text-sm font-bold shadow-none backdrop-blur-md transition-all cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
                <span>Tìm hiểu Viettel Cloud NPU</span>
              </VIDCAnchor>
            </div>
          </div>

          {/* 4 Value Stats Cards (Matching Homepage Hero style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-6 md:pt-8 animate-in fade-in duration-300">
            {[
              {
                icon: Cpu,
                label: 'Hạ tầng chuyên dụng',
                sublabel: 'Nền tảng tăng tốc AI từ chip Qualcomm (CloudNPU, AI Inference)'
              },
              {
                icon: Handshake,
                label: 'Đồng hành xuyên suốt',
                sublabel: 'Hỗ trợ từ ý tưởng, PoC đến thương mại hóa toàn diện'
              },
              {
                icon: Zap,
                label: 'Tối ưu thời gian & chi phí',
                sublabel: 'Rút ngắn khoảng cách xây dựng ứng dụng AI thực tế'
              },
              {
                icon: Layers,
                label: 'Môi trường toàn diện',
                sublabel: 'Phù hợp huấn luyện, đánh giá và tối ưu hóa thuật toán AI'
              }
            ].map((stat, index) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-[var(--vidc-radius-lg)] bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] hover:bg-white/70 hover:border-red-200/80 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-slate-500 mb-2">
                      <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)]">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SECTION: NỀN TẢNG CHUYÊN BIỆT DÀNH CHO AI & ĐIỂM NHẤN */}
      <section className="py-16 md:py-20 border-b border-[var(--vidc-color-border-default)] bg-white">
        <div className="vidc-container space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Strategic Partnership Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <img 
                  alt="Strategic Partnership between Qualcomm and Viettel IDC" 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80" 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2 w-fit">
                    HỢP TÁC CHIẾN LƯỢC
                  </div>
                  <h4 className="text-base font-bold text-white">Lễ ký kết Hợp tác Chiến lược Qualcomm & Viettel IDC</h4>
                  <p className="text-xs text-slate-200 mt-1 font-medium">Shaping the AI Future in Vietnam & Southeast Asia</p>
                </div>
              </div>
            </div>

            {/* Right: Content & Mission */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
                  HẠ TẦNG & CHUYÊN GIA ĐỒNG HÀNH
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Nền tảng chuyên biệt dành cho AI
              </h2>
              
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Việc hiện thực hóa ý tưởng AI luôn cần một hạ tầng đủ mạnh mẽ và sự hỗ trợ kỹ thuật chuyên sâu. Hiểu rõ những khó khăn này, Viettel IDC cùng Qualcomm mang đến cho bạn chương trình chuyên biệt dành cho các đơn vị phát triển AI tại Việt Nam.
              </p>
              
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Không chỉ cung cấp hạ tầng máy chủ, chúng tôi còn là người đồng hành với bạn xuyên suốt từ khâu chuẩn bị, thử nghiệm Proof of Concept (PoC), tối ưu thuật toán đến khi triển khai thực tế, hướng tới rút ngắn khoảng cách từ xây dựng tới ra mắt thị trường với chi phí tối ưu.
              </p>
            </div>
          </div>

          {/* 4 Program Highlights */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--vidc-color-brand-red)]" />
              <h3 className="text-lg font-bold text-slate-900">
                Điểm nhấn chương trình hợp tác
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {programHighlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-red-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed mt-3">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: CƠ HỘI TRẢI NGHIỆM CÁC SẢN PHẨM, DỊCH VỤ (Interactive Expanding Cards) */}
      <section className="py-16 md:py-20 border-b border-[var(--vidc-color-border-default)] bg-[var(--vidc-color-background-subtle)]">
        <div className="vidc-container space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
                HỆ SINH THÁI GIẢI PHÁP AI
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Cơ hội trải nghiệm các sản phẩm, dịch vụ
            </h2>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Viettel IDC kết hợp cùng Qualcomm thiết kế kiến trúc hạ tầng chuyên biệt đáp ứng đúng bài toán chịu tải, tính tuân thủ pháp lý và an toàn dữ liệu.
            </p>
          </div>

          {/* 3 Expandable Cards Accordion */}
          <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[500px] lg:h-[520px] w-full select-none">
            {productCards.map((card, idx) => {
              const isActive = activeProductIndex === idx;
              const IconComponent = card.icon;

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveProductIndex(idx)}
                  onMouseEnter={() => setActiveProductIndex(idx)}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                    isActive 
                      ? 'md:flex-[3] lg:flex-[3.4] h-[480px] md:h-full border-2 border-[var(--vidc-color-brand-red)] shadow-xl shadow-red-950/20' 
                      : 'md:flex-[0.7] lg:flex-[0.6] h-[190px] md:h-full border border-slate-300 shadow-sm hover:border-slate-400'
                  }`}
                >
                  {/* Background Image */}
                  <img 
                    alt={card.title} 
                    src={card.image} 
                    className={`w-full h-full object-cover transition-transform duration-700 ${ isActive ? 'scale-105' : 'scale-100 opacity-75' }`} 
                  />

                  {/* Dark Gradient Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive 
                      ? 'bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-950/25' 
                      : 'bg-slate-950/75 hover:bg-slate-950/60'
                  }`} />

                  {/* Collapsed State Content */}
                  {!isActive && (
                    <div className="absolute inset-0 flex flex-col justify-between items-center p-6 text-white">
                      <div className="w-12 h-12 rounded-full border border-white/25 bg-black/40 backdrop-blur-md flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="text-center px-1">
                        <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white drop-shadow-md">
                          {card.shortTitle}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Expanded (Active) State Content */}
                  {isActive && (
                    <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                      <div className="w-12 h-12 rounded-full bg-[var(--vidc-color-brand-red)] border border-red-400 text-white flex items-center justify-center shadow-lg shadow-red-600/40">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div className="max-w-2xl text-white space-y-3.5 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-2">
                        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-red-500/30 border border-red-400/50 text-[10px] font-bold uppercase text-red-200 tracking-wider">
                          {card.badge}
                        </div>

                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                          {card.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed max-w-xl drop-shadow">
                          {card.desc}
                        </p>

                        <div className="pt-2 flex items-center gap-3">
                          <VIDCAnchor 
                            href={card.ctaLink}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all hover:gap-2.5 cursor-pointer"
                          >
                            <span>{card.ctaText}</span>
                            <ArrowRight className="w-4 h-4" />
                          </VIDCAnchor>
                          <VIDCAnchor 
                            href={getFullPath('/services/compute/cloud-npu/')}
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white font-semibold text-xs sm:text-sm backdrop-blur-md transition-colors cursor-pointer"
                          >
                            <span>Chi tiết giải pháp</span>
                            <ChevronRight className="w-4 h-4" />
                          </VIDCAnchor>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SECTION: CHƯƠNG TRÌNH NÀY DÀNH CHO AI? */}
      <section className="py-16 md:py-20 border-b border-[var(--vidc-color-border-default)] bg-white">
        <div className="vidc-container space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
                ĐỐI TƯỢNG PHÙ HỢP
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Chương trình này dành cho ai?
            </h2>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Viettel IDC và Qualcomm tìm kiếm những đối tác đang phát triển các ứng dụng AI có tiềm năng triển khai thực tế, từ giai đoạn ý tưởng, Proof of Concept (PoC) đến mở rộng triển khai và thương mại hóa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {targetAudience.map((target, idx) => {
              const IconComp = target.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200 hover:border-[var(--vidc-color-brand-red)] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between text-center group"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-[var(--vidc-color-brand-red)] mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                      {target.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-3">
                    {target.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SECTION: TẠI SAO NÊN THAM GIA CHƯƠNG TRÌNH? */}
      <section className="py-16 md:py-20 border-b border-[var(--vidc-color-border-default)] bg-[var(--vidc-color-background-subtle)]">
        <div className="vidc-container space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
                LỢI THẾ VƯỢT TRỘI
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tại sao bạn nên lựa chọn tham gia chương trình?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {whyJoin.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-red-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mt-4">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. SECTION: CÁC BÀI TOÁN AI TIÊU BIỂU */}
      <section className="py-16 md:py-20 border-b border-[var(--vidc-color-border-default)] bg-white">
        <div className="vidc-container space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
                  USE CASES THỰC TIỄN
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Các bài toán AI tiêu biểu
              </h2>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Chương trình ưu tiên các ứng dụng AI có khả năng triển khai thực tế, dễ dàng kiểm chứng hiệu quả và tạo ra giá trị đo lường rõ ràng cho doanh nghiệp.
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <VIDCNativeButton 
                onClick={() => setCaseStudyIndex(prev => (prev === 0 ? aiUseCases.length - 1 : prev - 1))}
                className="w-9 h-9 rounded-full border border-slate-300 hover:border-slate-800 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </VIDCNativeButton>
              <VIDCNativeButton 
                onClick={() => setCaseStudyIndex(prev => (prev === aiUseCases.length - 1 ? 0 : prev + 1))}
                className="w-9 h-9 rounded-full border border-slate-300 hover:border-slate-800 flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Sau"
              >
                <ChevronRight className="w-4 h-4" />
              </VIDCNativeButton>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiUseCases.map((useCase, idx) => (
              <div 
                key={idx}
                className="bg-slate-50/50 rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    alt={useCase.title} 
                    src={useCase.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                    {useCase.tag}
                  </div>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2">
                      {useCase.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-500 italic text-center">
            Các nhóm giải pháp trên đóng vai trò tham khảo để bạn bắt đầu ý tưởng, chương trình không giới hạn ở các lĩnh vực này.
          </p>
        </div>
      </section>

      {/* 8. SECTION: THAM GIA CHƯƠNG TRÌNH HÔM NAY (5 Steps Roadmap & Lead Form) */}
      <section id="register-form" className="py-16 md:py-20 border-b border-[var(--vidc-color-border-default)] bg-[var(--vidc-color-background-subtle)] scroll-mt-12">
        <div className="vidc-container">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              
              {/* Left: 5 Steps Roadmap */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-200/80 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
                      LỘ TRÌNH 5 BƯỚC
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Tham gia chương trình hôm nay
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
                    Quy trình tiếp nhận & triển khai thử nghiệm tinh gọn, chuyên nghiệp
                  </p>
                </div>

                {/* Steps List */}
                <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-200 before:pointer-events-none">
                  {stepsRoadmap.map((st, idx) => (
                    <div key={idx} className="relative flex items-start gap-4">
                      <span className="relative z-10 w-8 h-8 rounded-full bg-white border-2 border-[var(--vidc-color-brand-red)] text-[var(--vidc-color-brand-red)] font-extrabold text-xs flex items-center justify-center shadow-xs">
                        {st.step}
                      </span>
                      <div className="pt-0.5">
                        <h4 className="text-sm font-bold text-slate-900">{st.title}</h4>
                        <p className="text-xs text-slate-500 font-medium mt-0.5">{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-red-50/70 border border-red-200/80 text-xs text-slate-700 leading-relaxed">
                  <span className="font-bold text-red-700">Lưu ý:</span> Phạm vi hỗ trợ và cách thức phối hợp có thể điều chỉnh theo nhu cầu thực tế của đối tác và định hướng của chương trình.
                </div>
              </div>

              {/* Right: Registration Form */}
              <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl p-6 sm:p-8 border border-slate-200/80">
                {submitSuccess ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Đăng ký thành công!</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Cảm ơn bạn đã quan tâm đến chương trình hợp tác Viettel IDC & Qualcomm. Đội ngũ chuyên gia AI sẽ chủ động liên hệ lại trong thời gian sớm nhất để trao đổi chi tiết.
                    </p>
                    <VIDCNativeButton 
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      Gửi thêm đăng ký mới
                    </VIDCNativeButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Họ và tên <span className="text-red-500">*</span>
                        </label>
                        <VIDCNativeInput 
                          type="text"
                          value={formData.fullName}
                          onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Nguyễn Văn A"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-xs text-slate-900 bg-white"
                        />
                        {formErrors.fullName && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Chức danh <span className="text-red-500">*</span>
                        </label>
                        <VIDCNativeInput 
                          type="text"
                          value={formData.jobTitle}
                          onChange={e => setFormData({ ...formData, jobTitle: e.target.value })}
                          placeholder="CTO / AI Lead / Product Manager"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-xs text-slate-900 bg-white"
                        />
                        {formErrors.jobTitle && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.jobTitle}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Công ty / Tổ chức <span className="text-red-500">*</span>
                      </label>
                      <VIDCNativeInput 
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Tên doanh nghiệp, startup hoặc đơn vị"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-xs text-slate-900 bg-white"
                      />
                      {formErrors.company && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.company}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email công việc <span className="text-red-500">*</span>
                        </label>
                        <VIDCNativeInput 
                          type="email"
                          value={formData.workEmail}
                          onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                          placeholder="contact@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-xs text-slate-900 bg-white"
                        />
                        {formErrors.workEmail && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.workEmail}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Số điện thoại <span className="text-red-500">*</span>
                        </label>
                        <VIDCNativeInput 
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0912 345 678"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-xs text-slate-900 bg-white"
                        />
                        {formErrors.phone && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Website / Sản phẩm đang phát triển <span className="text-red-500">*</span>
                      </label>
                      <VIDCNativeInput 
                        type="text"
                        value={formData.website}
                        onChange={e => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourproduct.ai hoặc mô tả ngắn gọn"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-xs text-slate-900 bg-white"
                      />
                      {formErrors.website && <p className="text-[10px] text-red-500 font-bold mt-1">{formErrors.website}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Giải pháp đang quan tâm <span className="text-red-500">*</span>
                      </label>
                      <VIDCNativeSelect
                        value={formData.solutionInterest}
                        onChange={e => setFormData({ ...formData, solutionInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-xs text-slate-900 bg-white"
                      >
                        <option value="Phát triển AI Application">Phát triển AI Application</option>
                        <option value="Tối ưu hóa mô hình AI (Model Optimization)">Tối ưu hóa mô hình AI (Model Optimization)</option>
                        <option value="Hạ tầng Cloud NPU Qualcomm">Hạ tầng Cloud NPU Qualcomm</option>
                        <option value="AI Inference Suite">AI Inference Suite</option>
                        <option value="Nền tảng quản trị Camera AI VMS">Nền tảng quản trị Camera AI VMS</option>
                        <option value="Khác">Khác</option>
                      </VIDCNativeSelect>
                    </div>

                    {/* Checkboxes: Mục tiêu đăng ký */}
                    <div className="pt-2">
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Mục tiêu đăng ký
                      </label>
                      <div className="space-y-2">
                        {[
                          { key: 'cloudNpu', label: 'Dùng thử Cloud NPU' },
                          { key: 'aiInferenceSuite', label: 'Dùng thử AI Inference Suite' },
                          { key: 'cameraAiVms', label: 'Dùng thử Nền tảng quản trị Camera AI VMS' },
                          { key: 'longTermPartner', label: 'Tư vấn hợp tác dài hạn' },
                          { key: 'programUpdates', label: 'Cập nhật thông báo về chương trình ưu đãi hợp tác' }
                        ].map((item) => (
                          <label key={item.key} className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer select-none">
                            <VIDCNativeInput 
                              type="checkbox"
                              checked={formData.goals[item.key as keyof typeof formData.goals]}
                              onChange={() => handleGoalChange(item.key as keyof typeof formData.goals)}
                              className="w-4 h-4 rounded text-red-600 focus:ring-red-500 border-slate-300"
                            />
                            <span>{item.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mô tả chi tiết về dự án / nhu cầu
                      </label>
                      <VIDCNativeTextarea 
                        rows={3}
                        value={formData.projectDescription}
                        onChange={e => setFormData({ ...formData, projectDescription: e.target.value })}
                        placeholder="Mô tả ngắn gọn về mô hình AI, framework đang sử dụng, bài toán kinh doanh cần giải quyết..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-xs text-slate-900 resize-none bg-white"
                      />
                    </div>

                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Thông tin của bạn sẽ được tiếp nhận bởi đội ngũ phụ trách chương trình để phục vụ cho việc liên hệ và trao đổi nhu cầu hợp tác. Chúng tôi sẽ chủ động liên hệ lại trong thời gian phù hợp để trao đổi chi tiết hơn.
                    </p>

                    <label className="flex items-start gap-2 text-xs text-slate-700 cursor-pointer pt-1">
                      <VIDCNativeInput 
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={e => setFormData({ ...formData, agreeTerms: e.target.checked })}
                        className="w-4 h-4 mt-0.5 rounded text-red-600 focus:ring-red-500 border-slate-300"
                      />
                      <span>
                        Bằng việc gửi form, bạn đồng ý với <VIDCAnchor href="#" className="text-red-600 font-bold hover:underline">điều khoản và chính sách bảo mật</VIDCAnchor> của Viettel IDC
                      </span>
                    </label>
                    {formErrors.agreeTerms && <p className="text-[10px] text-red-500 font-bold">{formErrors.agreeTerms}</p>}

                    <VIDCNativeButton
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      {isSubmitting ? (
                        <span>Đang xử lý thông tin...</span>
                      ) : (
                        <>
                          <span>Gửi đăng ký</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </VIDCNativeButton>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION: VỀ CHÚNG TÔI (QUALCOMM & VIETTEL IDC) */}
      <section className="py-16 md:py-20 border-b border-[var(--vidc-color-border-default)] bg-white">
        <div className="vidc-container space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
                TIÊN PHONG CÔNG NGHỆ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Về chúng tôi
            </h2>
          </div>

          <div className="space-y-8">
            {/* Qualcomm Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200">
              <div className="lg:col-span-6 rounded-xl overflow-hidden shadow-sm">
                <img 
                  alt="Qualcomm Headquarters" 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80" 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-2xl font-extrabold text-sky-800 tracking-tight">
                  Qualcomm
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">
                  Là nhịp đập của hệ sinh thái công nghệ toàn cầu, Qualcomm không chỉ là một cái tên, mà là tiêu chuẩn vàng trong lĩnh vực kết nối và xử lý thông minh.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Qualcomm không ngừng đổi mới để mang đến khả năng tính toán thông minh ở mọi nơi, giúp thế giới giải quyết những thách thức trọng yếu nhất. Dẫn đầu về trí tuệ nhân tạo biên, tính toán hiệu năng cao và tiêu thụ năng lượng thấp.
                </p>
                <VIDCAnchor 
                  href="https://www.qualcomm.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 hover:text-sky-900"
                >
                  <span>Tìm hiểu thêm về Qualcomm</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </VIDCAnchor>
              </div>
            </div>

            {/* Viettel IDC Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200">
              <div className="lg:col-span-6 space-y-4 order-2 lg:order-1">
                <h3 className="text-2xl font-extrabold text-[var(--vidc-color-brand-red)] tracking-tight">
                  Viettel IDC
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 font-bold leading-relaxed">
                  Với vị thế là nhà cung cấp hạ tầng số dẫn đầu tại Việt Nam, Viettel IDC đã vận hành hệ thống Trung tâm dữ liệu đạt tiêu chuẩn quốc tế ANSI/TIA-942 Rated 3.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Cam kết duy trì chỉ số sẵn sàng dịch vụ ở mức 99,99%, đồng thời thiết lập các hàng rào bảo mật chuyên sâu nhằm đảm bảo tính toàn vẹn và ổn định cho các hệ thống trí tuệ nhân tạo vận hành. Hệ thống siêu trung tâm dữ liệu xanh tại Hoà Lạc sẵn sàng đáp ứng mọi tải điện toán AI quy mô lớn.
                </p>
                <VIDCAnchor 
                  href={getFullPath('/about/')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:text-red-700 cursor-pointer"
                >
                  <span>Tìm hiểu thêm về Viettel IDC</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </VIDCAnchor>
              </div>
              <div className="lg:col-span-6 rounded-xl overflow-hidden shadow-sm order-1 lg:order-2">
                <img 
                  alt="Viettel IDC Mega Data Center" 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80" 
                  className="w-full h-64 object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SECTION: CHỨNG CHỈ QUỐC TẾ */}
      <section className="py-16 md:py-20 border-b border-[var(--vidc-color-border-default)] bg-[var(--vidc-color-background-subtle)]">
        <div className="vidc-container space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
                TIÊU CHUẨN TOÀN CẦU
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Chứng chỉ quốc tế
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Hạ tầng đám mây và trung tâm dữ liệu Viettel IDC đạt các tiêu chuẩn quốc tế khắt khe nhất
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="bg-white p-4 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-center space-y-1.5 shadow-2xs hover:shadow-md transition-shadow"
              >
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${cert.color}`}>
                  {cert.badge}
                </span>
                <span className="text-[10px] font-bold text-slate-800">{cert.name}</span>
                <span className="text-[9px] text-slate-500 font-medium">{cert.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SECTION: CÂU HỎI THƯỜNG GẶP (FAQ) */}
      <section className="py-16 md:py-20 border-b border-[var(--vidc-color-border-default)] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
                FAQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Câu hỏi thường gặp
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Giải đáp những thắc mắc phổ biến về chương trình hợp tác AI giữa Viettel IDC và Qualcomm
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-colors"
              >
                <VIDCNativeButton
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-[var(--vidc-color-brand-red)] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180 text-[var(--vidc-color-brand-red)]' : ''}`} />
                </VIDCNativeButton>

                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 text-xs text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3 bg-white">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. SECTION: CÒN THẮC MẮC CẦN GIẢI ĐÁP? (BOTTOM CTA) */}
      <section className="py-16 md:py-20 bg-[var(--vidc-color-background-subtle)]">
        <div className="vidc-container">
          <div className="relative rounded-3xl bg-gradient-to-br from-[var(--vidc-legacy-hex-8a001a)] via-[var(--vidc-legacy-hex-660011)] to-[var(--vidc-legacy-hex-3b0007)] text-white p-8 sm:p-12 border border-[var(--vidc-legacy-hex-37404c)] shadow-2xl overflow-hidden">
            <div className="absolute inset-0 vidc-tech-grid pointer-events-none opacity-40" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative max-w-2xl space-y-4 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  TƯ VẤN KỸ THUẬT 24/7
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Còn thắc mắc cần giải đáp?
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                Đội ngũ chuyên gia của Viettel IDC và Qualcomm luôn sẵn sàng lắng nghe và giải quyết mọi câu hỏi từ bạn. Đừng ngần ngại kết nối để chúng tôi có thể tư vấn lộ trình tối ưu nhất cho dự án AI của bạn ngay hôm nay.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <VIDCAnchor 
                  href="#register-form"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[var(--vidc-color-brand-red)] hover:bg-slate-100 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-black/20"
                >
                  <span>Liên hệ với chúng tôi</span>
                  <ArrowRight className="w-4 h-4" />
                </VIDCAnchor>

                <VIDCAnchor 
                  href="tel:18008088"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hotline: 1800 8088</span>
                </VIDCAnchor>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default QualcommPartnerPage;
