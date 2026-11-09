'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Handshake, 
  Users, 
  Award, 
  ShieldCheck, 
  Cpu, 
  ChevronRight, 
  HelpCircle, 
  Building2, 
  Send, 
  CheckCircle2, 
  Check, 
  Clock, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  Star, 
  Target, 
  DollarSign, 
  BookOpen, 
  Layers,
  ChevronDown,
  ChevronUp,
  FileText,
  Briefcase,
  Phone,
  Mail,
  User,
  MapPin
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { useLanguage } from '../../context/LanguageContext';
import { FeaturedPartnersOverview } from './FeaturedPartnersOverview';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface PartnersPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

interface PartnerTab {
  id: string;
  path: string;
  title: string;
  shortDesc: string;
  icon: React.ComponentType<any>;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({
  currentMarket,
  onNavigateHome,
  currentPath = typeof window !== 'undefined' ? window.location.pathname : '/',
  onNavigate,
}) => {
  const { currentLanguage, getFullPath } = useLanguage();
  const isNonVn = currentLanguage !== 'vn' && currentLanguage !== 'vi';

  // Mapping paths to corresponding partner program tabs
  const tabs: PartnerTab[] = useMemo(() => [
    {
      id: 'featured',
      path: '/partners/featured/',
      title: isNonVn ? 'Featured Partners' : 'Đối tác tiêu biểu',
      shortDesc: 'Qualcomm, NVIDIA, Microsoft, VMware...',
      icon: Building2
    },
    {
      id: 'reseller',
      path: '/partners/reseller/',
      title: isNonVn ? 'Reseller Partners' : 'Đại lý Reseller',
      shortDesc: isNonVn ? 'Up to 35% discount & dedicated support' : 'Chiết khấu tới 35% & Hỗ trợ chuyên sâu',
      icon: Handshake
    },
    {
      id: 'distributor',
      path: '/partners/distributor/',
      title: isNonVn ? 'Distributor Program' : 'Chương trình đối tác',
      shortDesc: isNonVn ? 'Co-selling & MDF growth funds' : 'Hợp tác phát triển kinh doanh & Quỹ MDF',
      icon: Users
    },
    {
      id: 'affiliate',
      path: '/partners/affiliate/',
      title: isNonVn ? 'Affiliate Marketing' : 'Tiếp thị Affiliate',
      shortDesc: isNonVn ? '15% lifetime commission & auto payout' : 'Hoa hồng 15% trọn đời & Rút ví tự động',
      icon: Award
    },
    {
      id: 'alliance',
      path: '/partners/pinnacle-alliance/',
      title: isNonVn ? 'Pinnacle Alliance' : 'Liên minh Pinnacle',
      shortDesc: isNonVn ? 'Global tech collaboration (Nvidia, Microsoft...)' : 'Hợp tác công nghệ toàn cầu (Nvidia, Microsoft...)',
      icon: ShieldCheck
    },
    {
      id: 'qualcomm',
      path: '/partners/qualcomm/',
      title: isNonVn ? 'Qualcomm Collaboration' : 'Hợp tác Qualcomm',
      shortDesc: isNonVn ? 'Edge AI Computing & 5G Private solutions' : 'Tính toán AI biên & Giải pháp 5G Private',
      icon: Cpu
    }
  ], [isNonVn]);

  // Derive active tab from currentPath
  const activeTabId = useMemo(() => {
    if (currentPath.toLowerCase().includes('featured') || currentPath.toLowerCase().includes('tieu-bieu')) {
      return 'featured';
    }
    const found = tabs.find(tab => currentPath.toLowerCase().includes(tab.id) || currentPath.toLowerCase().includes(tab.path));
    return found ? found.id : 'featured';
  }, [currentPath]);

  // Lead registration state
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    programType: activeTabId,
    estimatedRevenue: 'under-500m',
    message: '',
    acceptTerms: true
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync program type selection in form when active tab changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, programType: activeTabId }));
  }, [activeTabId]);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTabId]);

  const handleTabChange = (tabId: string) => {
    const selectedTab = tabs.find(t => t.id === tabId);
    if (selectedTab && onNavigate) {
      onNavigate(selectedTab.path);
    }
  };

  // FAQ list tailored for partners
  const faqs = [
    {
      q: 'Chính sách chiết khấu của chương trình Đại lý Reseller được áp dụng như thế nào?',
      a: 'Chiết khấu đại lý được tính dựa trên doanh số cam kết hàng tháng hoặc lũy kế năm của đối tác. Mức chiết khấu khởi điểm là 15% và tăng dần lên tới 35% đối với các nhóm dịch vụ đám mây cốt lõi như Viettel Cloud Server, vK8s và Cloud Storage. Hoa hồng được trừ trực tiếp vào hóa đơn hoặc hoàn trả định kỳ hàng tháng.'
    },
    {
      q: 'Cá nhân không có tư cách pháp nhân công ty có tham gia làm đối tác được không?',
      a: 'Hoàn toàn được. Cá nhân hoặc nhà phát triển tự do có thể tham gia chương trình Tiếp thị liên kết (Affiliate) để chia sẻ link giới thiệu và nhận hoa hồng trọn đời lên tới 15%. Đối với chương trình Đại lý (Reseller) và Nhà phân phối (Distributor), chúng tôi yêu cầu đối tác cần có tư cách pháp nhân (doanh nghiệp đăng ký hợp pháp) để thực hiện ký hợp đồng dịch vụ thương mại.'
    },
    {
      q: 'Viettel IDC hỗ trợ đào tạo và cấp chứng chỉ cho đối tác như thế nào?',
      a: 'Chúng tôi cung cấp chương trình đào tạo miễn phí (Viettel Cloud Academy) định kỳ hàng quý gồm 2 lộ trình: Đào tạo kinh doanh (Sales Enablement) giúp hiểu rõ giải pháp, và Đào tạo kỹ thuật chuyên sâu (Technical Certification) giúp đối tác có khả năng tự triển khai, cấu hình và khắc phục sự cố ban đầu cho khách hàng. Các kỹ sư hoàn thành bài thi kiểm tra sẽ được cấp chứng nhận Đối tác Kỹ thuật chính thức từ Viettel IDC.'
    },
    {
      q: 'Thời hạn đối soát hoa hồng tiếp thị liên kết (Affiliate) diễn ra trong bao lâu?',
      a: 'Hệ thống tiếp thị liên kết của chúng tôi đối soát tự động từ ngày 1 đến ngày 5 hàng tháng cho toàn bộ giao dịch phát sinh trong tháng trước đó. Đối tác có số dư ví tích lũy đạt từ 200,000 VND có thể thực hiện lệnh yêu cầu thanh toán chuyển khoản trực tiếp về tài khoản ngân hàng liên kết, thời gian xử lý giao dịch trong vòng 48h làm việc.'
    },
    {
      q: 'Quỹ tiếp thị phát triển chung (MDF) dành cho Nhà phân phối hoạt động ra sao?',
      a: 'Quỹ MDF (Market Development Funds) được cấp hàng năm dựa trên đề xuất kế hoạch phát triển thị trường của Nhà phân phối. Viettel IDC hỗ trợ tài trợ lên tới 50% tổng chi phí tổ chức hội thảo, workshop khách hàng, quảng cáo digital, hoặc sản xuất ấn phẩm quảng cáo chung, nhằm thúc đẩy nhận diện và doanh số thương mại tại khu vực.'
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Vui lòng nhập họ và tên của bạn';
    if (!formData.companyName.trim() && formData.programType !== 'affiliate') {
      errors.companyName = 'Vui lòng nhập tên công ty hoặc tổ chức';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Vui lòng nhập email liên hệ';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Địa chỉ email không hợp lệ';
    }

    // Phone validation
    const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
    if (!formData.phone.trim()) {
      errors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!phoneRegex.test(formData.phone.replace(/[\s.-]/g, ''))) {
      errors.phone = 'Số điện thoại không đúng định dạng Việt Nam';
    }

    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // Scroll to the first error
      const firstErrorKey = Object.keys(errors)[0];
      const element = document.getElementsByName(firstErrorKey)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form (except programType)
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        programType: activeTabId,
        estimatedRevenue: 'under-500m',
        message: '',
        acceptTerms: true
      });
    }, 1500);
  };

  return (
    <div id="partners-portal-page" className="w-full bg-slate-50/30 min-h-screen text-slate-800 font-sans pb-20">
      {/* SECTION 1: HERO SECTION */}
      <div className="relative bg-slate-900 overflow-hidden py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-950/40 via-slate-900 to-slate-950" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0H0V30H30V0ZM1 1V29H29V1H1Z' fill='white'/%3E%3C/svg%3E")`
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <div className="flex justify-center items-center gap-1.5 text-xs font-black uppercase tracking-widest text-red-500 mb-6">
            <VIDCNativeButton onClick={onNavigateHome} className="hover:text-red-400 transition-colors cursor-pointer">{isNonVn ? 'Home' : 'Trang chủ'}</VIDCNativeButton>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-slate-400">{isNonVn ? 'Partners' : 'Đối tác'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none max-w-4xl mx-auto">
            {isNonVn ? (
              <>Viettel IDC <span className="text-[var(--vidc-color-brand-red)]">Partner Ecosystem</span></>
            ) : (
              <>Hệ Sinh Thái Đối Tác <br className="sm:hidden" /><span className="text-[var(--vidc-color-brand-red)]">Viettel IDC</span></>
            )}
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            {isNonVn
              ? 'Partner with Vietnam\'s leading Cloud Computing and Data Center service provider. Grow your revenue, scale your tech stack, and create breakthrough value.'
              : 'Hợp tác cùng nhà cung cấp dịch vụ Điện toán đám mây và Trung tâm dữ liệu hàng đầu Việt Nam. Chia sẻ doanh thu, nâng tầm công nghệ và kiến tạo giá trị đột phá.'}
          </p>

          {/* Core Stat Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 pt-10 border-t border-slate-800/80">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-5 backdrop-blur-xs text-center">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-white">500+</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 block">{isNonVn ? 'Global Partners' : 'Đối tác toàn cầu'}</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-5 backdrop-blur-xs text-center">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-white">35%</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 block">{isNonVn ? 'Max Reseller Discount' : 'Chiết khấu Đại lý tối đa'}</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-5 backdrop-blur-xs text-center">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-white">15+ Years</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 block">{isNonVn ? 'Operating Experience' : 'Kinh nghiệm vận hành'}</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sm:p-5 backdrop-blur-xs text-center">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-white">24/7/365</span>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 block">{isNonVn ? 'Dedicated Support' : 'Hỗ trợ kỹ thuật Dedicated'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: DYNAMIC TABBED NAVIGATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white border border-slate-200/60 rounded-3xl p-2.5 shadow-sm overflow-x-auto custom-scrollbar flex gap-1.5 md:grid md:grid-cols-6 min-w-full">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTabId === tab.id;
            return (
              <VIDCNativeButton
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-[20px] transition-all duration-300 cursor-pointer select-none shrink-0 md:shrink w-[150px] sm:w-[170px] md:w-full ${
                  isActive 
                    ? 'bg-red-50 text-red-600 border border-red-100 shadow-xs' 
                    : 'text-slate-600 hover:text-red-500 hover:bg-slate-50 border border-transparent'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2.5 transition-all ${
                  isActive ? 'bg-red-500 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-red-500'
                }`}>
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <span className="text-xs sm:text-sm font-bold block leading-tight">{tab.title}</span>
                <span className="text-[10px] text-slate-400 mt-1 font-medium leading-normal hidden sm:line-clamp-1">{tab.shortDesc}</span>
              </VIDCNativeButton>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: PROGRAM SPECIFIC DETAIL DISPLAY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-slate-200/40 rounded-[32px] p-6 sm:p-8 md:p-12 shadow-sm"
          >
            {/* 0. FEATURED PARTNERS OVERVIEW PAGE */}
            {activeTabId === 'featured' && (
              <FeaturedPartnersOverview />
            )}

            {/* 1. RESELLER PROGRAM */}
            {activeTabId === 'reseller' && (
              <div className="space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[10px] font-black uppercase text-red-600 tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" /> CHƯƠNG TRÌNH ĐẠI LÝ RESELLER
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                      Cơ Hội Kinh Doanh Dịch Vụ Đám Mây Đột Phá Lợi Nhuận
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Chương trình đại lý ủy quyền của Viettel IDC thiết kế riêng cho các doanh nghiệp tích hợp hệ thống (SI), phát triển phần mềm, tư vấn chuyển đổi số hoặc cá nhân có năng lực giới thiệu dịch vụ. Đại lý được cung cấp tài khoản quản trị (Partner Portal) riêng biệt để chủ động khởi tạo, gia hạn và nâng cấp gói cước cho khách hàng.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-3">
                      <VIDCAnchor href="#partner-registration-form" className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors shadow-lg shadow-red-600/15">
                        Đăng ký Đại lý ngay
                      </VIDCAnchor>
                      <VIDCAnchor href="#partner-faq" className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors">
                        Tìm hiểu quy trình
                      </VIDCAnchor>
                    </div>
                  </div>
                  <div className="lg:col-span-5 relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img alt="Reseller collaboration" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>

                {/* Key Benefits of Reseller */}
                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-base font-black text-slate-800 uppercase tracking-wider mb-6">QUYỀN LỢI ĐẶC QUYỀN ĐẠI LÝ</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Chiết khấu cực hấp dẫn</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Hưởng mức chiết khấu trực tiếp trên giá trị hợp đồng lên tới 35% cho mỗi chu kỳ thanh toán dịch vụ. Doanh số càng cao, mức chiết khấu càng lớn.
                      </p>
                    </div>

                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Tự chủ quản lý Partner Portal</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Hệ thống điều khiển trung tâm giúp Đại lý tự quản lý thông tin khách hàng, phân chia gói cước, trực tiếp xuất tài nguyên không cần qua bộ phận kỹ thuật.
                      </p>
                    </div>

                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Đào tạo & Hỗ trợ kỹ thuật</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Tham gia các khóa đào tạo công nghệ chuyên sâu từ Viettel Cloud Academy, hỗ trợ kỹ thuật Level 2/Level 3 trực tiếp 24/7 giải quyết triệt để sự cố.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Process Steps */}
                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-base font-black text-slate-800 uppercase tracking-wider mb-6">4 BƯỚC ĐĂNG KÝ TRỞ THÀNH ĐẠI LÝ</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { step: '01', title: 'Điền form đăng ký', desc: 'Gửi hồ sơ thông tin doanh nghiệp hoặc cá nhân quan tâm hợp tác thông qua form liên hệ phía dưới.' },
                      { step: '02', title: 'Thẩm định & Ký kết', desc: 'Đội ngũ chuyên viên kinh doanh của Viettel IDC sẽ liên hệ tư vấn, đàm phán chính sách và tiến hành ký kết hợp đồng.' },
                      { step: '03', title: 'Đào tạo & Bàn giao', desc: 'Đại lý được cấp tài khoản Partner Portal, cung cấp bộ tài liệu kỹ thuật, tài liệu bán hàng (Sales Kit) và tham gia đào tạo.' },
                      { step: '04', title: 'Triển khai kinh doanh', desc: 'Bắt đầu giới thiệu khách hàng, chủ động cấp phát dịch vụ trực tiếp và nhận hoa hồng chiết khấu định kỳ mượt mà.' }
                    ].map((step, idx) => (
                      <div key={idx} className="relative p-5 bg-white border border-slate-200/60 rounded-2xl">
                        <span className="absolute top-4 right-4 text-3xl font-black text-slate-100 select-none">{step.step}</span>
                        <h4 className="text-sm font-bold text-slate-900 mt-2">{step.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed mt-2 font-medium">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. DISTRIBUTOR PROGRAM */}
            {activeTabId === 'distributor' && (
              <div className="space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[10px] font-black uppercase text-red-600 tracking-wider">
                      <Users className="w-3.5 h-3.5" /> MẠNG LƯỚI NHÀ PHÂN PHỐI DISTRIBUTOR
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                      Phân Phối Toàn Diện Giải Pháp Hạ Tầng Quy Mô Lớn
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Dành riêng cho các tổng công ty, tập đoàn công nghệ có tiềm lực tài chính lớn, mạng lưới đại lý phụ (Sub-resellers) rộng khắp cả nước hoặc sở hữu tập khách hàng lớn có nhu cầu chuyển đổi số đồng bộ. Nhà phân phối có thẩm quyền phân phối gói sản phẩm theo vùng địa lý hoặc theo nhóm ngành chiến lược đặc thù.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-3">
                      <VIDCAnchor href="#partner-registration-form" className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors shadow-lg shadow-red-600/15">
                        Hợp tác phân phối
                      </VIDCAnchor>
                    </div>
                  </div>
                  <div className="lg:col-span-5 relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img alt="Distributor network" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>

                {/* Key Benefits of Distributor */}
                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-base font-black text-slate-800 uppercase tracking-wider mb-6">QUYỀN LỢI ĐẶC QUYỀN NHÀ PHÂN PHỐI</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <Target className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Chiết khấu phân phối đặc thù</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Cơ chế định giá sỉ cạnh tranh cao, tối đa tỷ suất lợi nhuận khi phân phối lại cho mạng lưới đại lý con. Cam kết công nợ tài chính linh hoạt định kỳ.
                      </p>
                    </div>

                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Quỹ Tiếp thị Phát triển (MDF)</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Được tài trợ tài chính và nhân sự lên tới 50% chi phí cho các hoạt động tiếp thị, hội thảo kỹ thuật chuyên sâu, workshop cùng đối tác cấp vùng.
                      </p>
                    </div>

                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <User className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Dedicated Account Manager (PAM)</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Chuyên viên quản lý đối tác (Partner Account Manager) hỗ trợ trực tiếp 1-1 về mặt giải pháp, chính sách và đồng hành đi tư vấn các dự án lớn của khách hàng.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3. AFFILIATE MARKETING */}
            {activeTabId === 'affiliate' && (
              <div className="space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[10px] font-black uppercase text-red-600 tracking-wider">
                      <Award className="w-3.5 h-3.5" /> TIẾP THỊ LIÊN KẾT AFFILIATE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                      Kiếm Tiền Trực Tuyến Từ Link Giới Thiệu Khách Hàng
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Chương trình tiếp thị liên kết (Affiliate) của Viettel IDC là cách đơn giản nhất để tăng thu nhập thụ động bền vững. Dành cho tất cả mọi người: từ các blogger công nghệ, KOLs, quản trị viên diễn đàn, giảng viên CNTT đến lập trình viên tự do. Đăng ký tài khoản trực tuyến hoàn toàn miễn phí, nhận ngay link giới thiệu riêng độc quyền.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-3">
                      <VIDCAnchor href="#partner-registration-form" className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors shadow-lg shadow-red-600/15">
                        Kích hoạt Link Tiếp thị ngay
                      </VIDCAnchor>
                    </div>
                  </div>
                  <div className="lg:col-span-5 relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img alt="Affiliate program" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>

                {/* Key Benefits of Affiliate */}
                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-base font-black text-slate-800 uppercase tracking-wider mb-6">ĐẶC ĐIỂM CHƯƠNG TRÌNH AFFILIATE</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <Star className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Hoa hồng 15% trọn đời</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Hưởng hoa hồng lên tới 15% trên giá trị mỗi giao dịch thành công. Hoa hồng được tính trọn đời cho toàn bộ thời gian khách hàng tiếp tục duy trì sử dụng máy chủ ảo.
                      </p>
                    </div>

                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <Clock className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Cookie lưu trữ 90 ngày</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Cơ chế tracking lưu giữ cookie của người dùng lên tới 90 ngày. Khách hàng nhấp vào link tiếp thị nhưng mua dịch vụ sau đó 2 tháng vẫn được ghi nhận hoa hồng cho bạn.
                      </p>
                    </div>

                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Đối soát tự động & Rút tiền nhanh</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Theo dõi chi tiết số click, tỷ lệ chuyển đổi trực tiếp trên hệ thống dashboard trực quan. Đối soát minh bạch hàng tháng và hỗ trợ rút tiền nhanh chóng về ví.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. PINNACLE ALLIANCE */}
            {activeTabId === 'alliance' && (
              <div className="space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[10px] font-black uppercase text-red-600 tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5" /> PINNACLE ALLIANCE PARTNERSHIP
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                      Hợp Tác Chiến Lược Cùng Các Hãng Công Nghệ Global dẫn đầu
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Mạng lưới liên minh Pinnacle Alliance quy tụ các đối tác công nghệ và nhà cung cấp giải pháp lớn toàn cầu như Nvidia, Microsoft, Amazon Web Services (AWS), VMware by Broadcom, Veeam, Cisco và Kaspersky. Sự phối hợp chặt chẽ này nhằm đảm bảo hạ tầng đám mây Viettel IDC luôn được chuẩn hóa tối ưu theo cấu trúc kỹ thuật thế giới.
                    </p>
                  </div>
                  <div className="lg:col-span-5 relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img alt="Pinnacle alliance global" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>

                {/* Alliance Pillars */}
                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-base font-black text-slate-800 uppercase tracking-wider mb-6">3 TRỤ CỘT LIÊN MINH CHÍNH</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <Layers className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Co-Innovation (Đồng kiến tạo)</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Phối hợp kỹ thuật với các nhóm chuyên gia R&D của hãng để tinh chỉnh cấu trúc phần mềm, ảo hóa tính toán, tối ưu hóa phần cứng mạng để tối đa hiệu năng.
                      </p>
                    </div>

                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <Award className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Đào tạo chuẩn chuyên gia</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Hàng trăm kỹ sư của Viettel IDC sở hữu chứng chỉ quốc tế cao cấp nhất (như VCAP của VMware, AWS Solutions Architect, Nvidia DLI...) trực tiếp vận hành hệ thống.
                      </p>
                    </div>

                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Chủ quyền Dữ liệu & Tuân thủ pháp lý</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Kết hợp các giải pháp của hãng công nghệ quốc tế vận hành trực tiếp trên hạ tầng trung tâm dữ liệu đặt tại Việt Nam, đáp ứng hoàn hảo Luật An ninh mạng.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual grid of international partners */}
                <div className="pt-8 border-t border-slate-100 text-center">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">MẠNG LƯỚI THƯƠNG HIỆU LIÊN MINH TOÀN CẦU</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center opacity-65">
                    <div className="flex items-center justify-center h-12 p-2.5 border border-slate-200 rounded-xl text-xs font-black tracking-widest text-slate-500 uppercase">NVIDIA</div>
                    <div className="flex items-center justify-center h-12 p-2.5 border border-slate-200 rounded-xl text-xs font-black tracking-widest text-slate-500 uppercase">MICROSOFT</div>
                    <div className="flex items-center justify-center h-12 p-2.5 border border-slate-200 rounded-xl text-xs font-black tracking-widest text-slate-500 uppercase">VMWARE</div>
                    <div className="flex items-center justify-center h-12 p-2.5 border border-slate-200 rounded-xl text-xs font-black tracking-widest text-slate-500 uppercase">AWS</div>
                    <div className="flex items-center justify-center h-12 p-2.5 border border-slate-200 rounded-xl text-xs font-black tracking-widest text-slate-500 uppercase">VEEAM</div>
                    <div className="flex items-center justify-center h-12 p-2.5 border border-slate-200 rounded-xl text-xs font-black tracking-widest text-slate-500 uppercase">CISCO</div>
                  </div>
                </div>
              </div>
            )}

            {/* 5. QUALCOMM ALLIANCE */}
            {activeTabId === 'qualcomm' && (
              <div className="space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[10px] font-black uppercase text-red-600 tracking-wider">
                      <Cpu className="w-3.5 h-3.5" /> QUALCOMM STRATEGIC ALLIANCE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                      Kiến Tạo Kỷ Nguyên AI Biên &amp; Điện Toán Xanh Tiết Kiệm Năng Lượng
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Liên minh chiến lược đột phá giữa Qualcomm &amp; Viettel IDC nhằm ứng dụng các công nghệ chip xử lý thông minh, vi mạch thế hệ mới và nền tảng máy học tiên tiến hàng đầu trực tiếp lên hệ sinh thái đám mây của chúng tôi. Hướng tới thúc đẩy hạ tầng AI Edge Compute, hệ thống Smart Camera phân tích thông minh và xây dựng Trung tâm dữ liệu xanh bền vững đạt chuẩn ESG.
                    </p>
                  </div>
                  <div className="lg:col-span-5 relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img alt="Qualcomm partnership" src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>

                {/* Areas of Cooperation with Qualcomm */}
                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-base font-black text-slate-800 uppercase tracking-wider mb-6">CÁC LĨNH VỰC HỢP TÁC CHÍNH</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">AI Edge Compute (Điện toán biên AI)</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Tích hợp các dòng vi xử lý tăng tốc thần kinh (NPU) chuyên dụng của Qualcomm vào thiết bị đầu cuối để giải quyết ngay lập tức các bài toán thị giác máy tính với độ trễ cực thấp.
                      </p>
                    </div>

                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Mạng di động 5G Private</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Kết hợp mô-đun thu phát 5G thế hệ mới của Qualcomm với trung tâm dữ liệu Viettel IDC để triển khai mô hình mạng viễn thông dùng riêng, vận hành tự động cho các tổ chức lớn.
                      </p>
                    </div>

                    <div className="bg-slate-50/50 border border-slate-200/40 p-6 rounded-2xl space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">Phát triển bền vững ESG</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        Sử dụng các dòng chip SoC có tỷ suất xử lý tính toán trên mỗi Watt điện năng tiêu thụ cực thấp, giúp cắt giảm hiệu quả lượng phát thải Carbon cho hạ tầng đám mây.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* SECTION 4: INTERACTIVE REGISTRATION FORM */}
      <div id="partner-registration-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-28">
        <div className="bg-white border border-slate-200/40 rounded-[32px] p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-red-600" />
          
          <div className="text-center space-y-3 mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">Đăng Ký Tham Gia Chương Trình</h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto font-medium">
              Vui lòng điền đầy đủ các thông tin chi tiết dưới đây. Đội ngũ phát triển đối tác của Viettel IDC sẽ liên hệ phản hồi tư vấn trong vòng 24h làm việc.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!submitSuccess ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit} 
                className="space-y-6"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400" /> Họ và tên người liên hệ <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeInput
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50/50 border ${formErrors.fullName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-slate-200 focus:ring-red-500/20 focus:border-red-500'} rounded-xl p-3 text-sm font-semibold text-slate-800 transition-all outline-hidden`}
                      placeholder="Nguyễn Văn A"
                    />
                    {formErrors.fullName && (
                      <p className="text-[11px] font-bold text-red-500">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" /> Tên công ty / Tổ chức {formData.programType !== 'affiliate' && <span className="text-red-500">*</span>}
                    </label>
                    <VIDCNativeInput
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50/50 border ${formErrors.companyName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-slate-200 focus:ring-red-500/20 focus:border-red-500'} rounded-xl p-3 text-sm font-semibold text-slate-800 transition-all outline-hidden`}
                      placeholder="Công ty TNHH Giải pháp Số ABC"
                    />
                    {formErrors.companyName && (
                      <p className="text-[11px] font-bold text-red-500">{formErrors.companyName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-slate-400" /> Email liên hệ <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeInput
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50/50 border ${formErrors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-slate-200 focus:ring-red-500/20 focus:border-red-500'} rounded-xl p-3 text-sm font-semibold text-slate-800 transition-all outline-hidden`}
                      placeholder="email@doanhnghiep.com"
                    />
                    {formErrors.email && (
                      <p className="text-[11px] font-bold text-red-500">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-slate-400" /> Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeInput
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full bg-slate-50/50 border ${formErrors.phone ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-slate-200 focus:ring-red-500/20 focus:border-red-500'} rounded-xl p-3 text-sm font-semibold text-slate-800 transition-all outline-hidden`}
                      placeholder="0987654321"
                    />
                    {formErrors.phone && (
                      <p className="text-[11px] font-bold text-red-500">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* Program type selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" /> Chương trình quan tâm <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeSelect
                      name="programType"
                      value={formData.programType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-800 transition-all outline-hidden focus:ring-red-500/20 focus:border-red-500 cursor-pointer"
                    >
                      <option value="reseller">Chương trình Đại lý Reseller</option>
                      <option value="distributor">Chương trình Nhà phân phối Distributor</option>
                      <option value="affiliate">Tiếp thị liên kết Affiliate</option>
                      <option value="alliance">Liên minh Pinnacle Alliance Partnership</option>
                      <option value="qualcomm">Hợp tác chiến lược Qualcomm</option>
                    </VIDCNativeSelect>
                  </div>

                  {/* Estimated revenue */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-slate-400" /> Doanh thu dự kiến hàng năm <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeSelect
                      name="estimatedRevenue"
                      value={formData.estimatedRevenue}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3 text-sm font-semibold text-slate-800 transition-all outline-hidden focus:ring-red-500/20 focus:border-red-500 cursor-pointer"
                    >
                      <option value="under-500m">Dưới 500 triệu VND</option>
                      <option value="500m-2b">Từ 500 triệu - 2 tỷ VND</option>
                      <option value="2b-5b">Từ 2 tỷ - 5 tỷ VND</option>
                      <option value="above-5b">Trên 5 tỷ VND</option>
                    </VIDCNativeSelect>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase text-slate-500 tracking-wider flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-slate-400" /> Lời nhắn / Đề xuất hợp tác cụ thể
                  </label>
                  <VIDCNativeTextarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-slate-50/50 border border-slate-200 focus:ring-red-500/20 focus:border-red-500 rounded-xl p-3.5 text-sm font-semibold text-slate-800 transition-all outline-hidden resize-none"
                    placeholder="Mô tả sơ lược về hoạt động kinh doanh hiện tại của bạn, thế mạnh thị trường hoặc những giải pháp đám mây bạn muốn tập trung phân phối..."
                  />
                </div>

                {/* Terms and conditions */}
                <div className="flex items-start gap-2.5">
                  <VIDCNativeInput
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleCheckboxChange}
                    className="mt-1 rounded bg-slate-100 border-slate-200 text-red-600 focus:ring-red-500/20 cursor-pointer"
                  />
                  <label htmlFor="acceptTerms" className="text-xs text-slate-500 leading-normal font-medium cursor-pointer select-none">
                    Tôi đồng ý để Viettel IDC thu thập và lưu trữ dữ liệu liên hệ trên nhằm phục vụ cho mục đích tư vấn, thẩm định năng lực đối tác theo đúng <span className="text-red-600 font-bold hover:underline">Chính sách Bảo mật</span> của công ty.
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <VIDCNativeButton
                    type="submit"
                    disabled={isSubmitting || !formData.acceptTerms}
                    className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                      isSubmitting 
                        ? 'bg-slate-400 cursor-not-allowed shadow-none' 
                        : 'bg-red-600 hover:bg-red-700 shadow-red-600/15'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Đang gửi hồ sơ...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Gửi Hồ Sơ Đăng Ký Đối Tác</span>
                      </>
                    )}
                  </VIDCNativeButton>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900">Gửi Hồ Sơ Đăng Ký Thành Công!</h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed font-medium">
                    Cảm ơn bạn đã quan tâm đến hệ sinh thái đối tác của Viettel IDC. Đội ngũ phụ trách phát triển đại lý và liên minh đã tiếp nhận hồ sơ liên hệ của bạn và sẽ chủ động liên hệ phản hồi tư vấn trong vòng 24h làm việc.
                  </p>
                </div>
                <div className="pt-4 flex justify-center gap-3">
                  <VIDCNativeButton
                    onClick={() => setSubmitSuccess(false)}
                    className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Gửi thêm yêu cầu
                  </VIDCNativeButton>
                  <VIDCNativeButton
                    onClick={onNavigateHome}
                    className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors shadow-lg shadow-red-600/15 cursor-pointer"
                  >
                    Quay lại Trang chủ
                  </VIDCNativeButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* SECTION 5: FAQS ACCORDION */}
      <div id="partner-faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 scroll-mt-28">
        <div className="text-center space-y-3 mb-10">
          <span className="text-[10px] font-black uppercase text-red-600 tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
            HỎI ĐÁP & CHIA SẺ
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">Giải Đáp Thắc Mắc Thường Gặp</h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto font-medium">
            Giải đáp tất cả các băn khoăn về quy chế ký hợp đồng thương mại, tỷ lệ đối soát hoa hồng và phân chia tài nguyên hệ thống.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200/40 rounded-2xl overflow-hidden shadow-2xs transition-all duration-300"
              >
                <VIDCNativeButton
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 cursor-pointer select-none"
                >
                  <span className="text-xs sm:text-sm md:text-base font-bold text-slate-900 tracking-tight leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-red-50 text-red-600' : 'bg-slate-50 text-slate-400'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </VIDCNativeButton>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-500 font-medium leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/20">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
