/**
 * Comprehensive Multilingual Localization Dictionaries for Viettel IDC Portal
 * Supported Language Codes:
 * - 'vn' / 'vi': Tiếng Việt (Vietnamese)
 * - 'en': English (Global / US / SEA International)
 * - 'la' / 'lo': ພາສາລາວ (Lao)
 * - 'ph' / 'fil': Filipino / Tagalog
 * - 'mm' / 'my': မြန်မာ (Burmese)
 */

export type SupportedLanguage = 'vn' | 'en' | 'la' | 'ph' | 'mm' | 'kh';

export interface Translations {
  // Navigation & Header
  nav: {
    services: string;
    solutions: string;
    pricing: string;
    promotions: string;
    resources: string;
    partners: string;
    about: string;
    contact: string;
    requestQuote: string;
    login: string;
    register: string;
    searchPlaceholder: string;
    quickSearch: string;
    viewAllServices: string;
    viewAllSolutions: string;
    needConsulting: string;
    callHotline: string;
    hotlineLabel: string;
    support247: string;
    allRightsReserved: string;
    freeTrial: string;
    exploreNow: string;
    learnMore: string;
    closeMenu: string;
  };

  // Hero Section
  hero: {
    eyebrow: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    description: string;
    ctaTrial: string;
    ctaLearnMore: string;
    stat1Label: string;
    stat1Sublabel: string;
    stat2Label: string;
    stat2Sublabel: string;
    stat3Label: string;
    stat3Sublabel: string;
    stat4Label: string;
    stat4Sublabel: string;
  };

  // Social Proof Marquee
  socialProof: {
    title: string;
    tagline: string;
  };

  // Services Tabs Section
  servicesSection: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    filterBy: string;
    viewDetail: string;
    getTrial: string;
    quoteRequest: string;
    slaTitle: string;
    slaValue: string;
    badgeNew: string;
    badgeHot: string;
    badgeEnterprise: string;
    pricingStartsFrom: string;
    contactForPricing: string;
  };

  // Solutions Carousel Section
  solutionsSection: {
    title: string;
    subtitle: string;
    exploreSolution: string;
    readCaseStudy: string;
    architectureDiagram: string;
  };

  // Industries Accordion Section
  industriesSection: {
    title: string;
    subtitle: string;
    exploreIndustry: string;
    complianceGuaranteed: string;
  };

  // Data Center Bento Section
  dataCenterSection: {
    title: string;
    subtitle: string;
    statsDcCount: string;
    statsDcCountLabel: string;
    statsRacks: string;
    statsRacksLabel: string;
    statsPower: string;
    statsPowerLabel: string;
    statsSla: string;
    statsSlaLabel: string;
    tiaCertified: string;
    tiaCertifiedDesc: string;
    greenDc: string;
    greenDcDesc: string;
    securityNocSoc: string;
    securityNocSocDesc: string;
  };

  // Standards & Awards
  standardsSection: {
    title: string;
    subtitle: string;
    tabTechStandards: string;
    tabSecurity: string;
    tabAwards: string;
  };

  // Tech Partners
  techPartnersSection: {
    title: string;
    subtitle: string;
  };

  // CTA Form Section
  ctaSection: {
    title: string;
    subtitle: string;
    fullNamePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    companyPlaceholder: string;
    serviceNeedPlaceholder: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    privacyNote: string;
  };

  // Footer
  footer: {
    colAboutTitle: string;
    colServicesTitle: string;
    colSupportTitle: string;
    colLegalTitle: string;
    colConnectTitle: string;
    linkAbout: string;
    linkDataCenters: string;
    linkEsg: string;
    linkCsr: string;
    linkCertifications: string;
    linkPress: string;
    linkCareers: string;
    linkServiceCatalog: string;
    linkPricingCenter: string;
    linkDocs: string;
    linkDcColocation: string;
    linkPartners: string;
    linkSalesContact: string;
    linkSupportTicket: string;
    linkFaq: string;
    linkTerms: string;
    linkPrivacy: string;
    linkSla: string;
    linkSecurityCompliance: string;
    cookieSettings: string;
    headquarters: string;
    hanoiBranch: string;
    hcmBranch: string;
    danangBranch: string;
    contactCenter: string;
  };

  // Modals & Chat
  modals: {
    quoteTitle: string;
    quoteSubtitle: string;
    registerTitle: string;
    registerSubtitle: string;
    chatWelcome: string;
    chatInputPlaceholder: string;
    send: string;
    cancel: string;
    confirm: string;
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, Translations> = {
  vn: {
    nav: {
      services: 'Dịch vụ',
      solutions: 'Giải pháp',
      pricing: 'Bảng giá',
      promotions: 'Khuyến mại',
      resources: 'Tài nguyên',
      partners: 'Đối tác',
      about: 'Giới thiệu',
      contact: 'Liên hệ',
      requestQuote: 'Nhận báo giá',
      login: 'Đăng nhập',
      register: 'Đăng ký',
      searchPlaceholder: 'Tìm kiếm dịch vụ, giải pháp, tài liệu...',
      quickSearch: 'Tìm nhanh',
      viewAllServices: 'Xem tất cả dịch vụ',
      viewAllSolutions: 'Xem tất cả giải pháp',
      needConsulting: 'Cần tư vấn kiến trúc giải pháp?',
      callHotline: 'Gọi ngay Hotline',
      hotlineLabel: 'Hotline tư vấn 24/7',
      support247: 'Hỗ trợ kỹ thuật 24/7/365',
      allRightsReserved: 'Bản quyền thuộc về Viettel IDC. Bảo lưu mọi quyền.',
      freeTrial: 'Dùng thử miễn phí',
      exploreNow: 'Khám phá ngay',
      learnMore: 'Tìm hiểu thêm',
      closeMenu: 'Đóng menu',
    },
    hero: {
      eyebrow: 'ĐỒNG HÀNH CÙNG DOANH NGHIỆP ĐƯA AI VÀO THỰC CHIẾN',
      headlinePart1: 'Hiện thực hóa ý tưởng',
      headlineHighlight: 'AI của bạn',
      headlinePart2: 'với hạ tầng đám mây tối ưu',
      description: 'Khám phá sức mạnh từ nền tảng tăng tốc AI của Qualcomm trên hệ sinh thái đám mây của Viettel IDC. Không chỉ cung cấp hạ tầng máy chủ chuyên biệt, chúng tôi còn là người đồng hành cùng bạn xuyên suốt từ khâu chuẩn bị, thử nghiệm PoC đến khi ra mắt thị trường',
      ctaTrial: 'Nhận dùng thử 1 tháng miễn phí',
      ctaLearnMore: 'Tìm hiểu thêm',
      stat1Label: 'Hạ tầng chuyên dụng',
      stat1Sublabel: 'Nền tảng tăng tốc AI từ chip Qualcomm (CloudNPU, AI Inference)',
      stat2Label: 'Đồng hành xuyên suốt',
      stat2Sublabel: 'Hỗ trợ từ ý tưởng, PoC đến thương mại hóa toàn diện',
      stat3Label: 'Tối ưu thời gian & chi phí',
      stat3Sublabel: 'Rút ngắn khoảng cách xây dựng ứng dụng AI thực tế',
      stat4Label: 'Môi trường toàn diện',
      stat4Sublabel: 'Phù hợp huấn luyện, đánh giá và tối ưu hóa thuật toán AI',
    },
    socialProof: {
      title: 'Viettel IDC - Thương hiệu được tin dùng bởi 40.000+ doanh nghiệp trong nước và Quốc tế',
      tagline: 'Đồng hành cùng các ngân hàng, tập đoàn đa quốc gia và tổ chức chính phủ',
    },
    servicesSection: {
      title: 'Hệ sinh thái sản phẩm & dịch vụ toàn diện',
      subtitle: 'Hơn 50+ dịch vụ Cloud, Data Center, Bảo mật và AI sẵn sàng đáp ứng mọi quy mô doanh nghiệp với SLA cam kết tới 99.99%',
      searchPlaceholder: 'Tìm kiếm nhanh dịch vụ theo tên, mã hoặc tính năng...',
      allCategories: 'Tất cả danh mục',
      filterBy: 'Lọc dịch vụ',
      viewDetail: 'Xem chi tiết',
      getTrial: 'Dùng thử',
      quoteRequest: 'Nhận báo giá',
      slaTitle: 'Cam kết SLA',
      slaValue: '99.99%',
      badgeNew: 'MỚI',
      badgeHot: 'NỔI BẬT',
      badgeEnterprise: 'DOANH NGHIỆP',
      pricingStartsFrom: 'Chỉ từ',
      contactForPricing: 'Liên hệ báo giá',
    },
    solutionsSection: {
      title: 'Giải pháp chuyên sâu theo nhu cầu kiến trúc',
      subtitle: 'Thiết kế tối ưu cho hiệu năng cao, bảo mật tuyệt đối và tiết kiệm chi phí vận hành cho doanh nghiệp hiện đại',
      exploreSolution: 'Khám phá giải pháp',
      readCaseStudy: 'Đọc Case Study',
      architectureDiagram: 'Sơ đồ kiến trúc mẫu',
    },
    industriesSection: {
      title: 'Giải pháp số hóa chuyên biệt theo ngành nghề',
      subtitle: 'Đáp ứng nghiêm ngặt tiêu chuẩn bảo mật quốc tế và quy chuẩn đặc thù của từng lĩnh vực trọng điểm',
      exploreIndustry: 'Xem chi tiết giải pháp ngành',
      complianceGuaranteed: 'Đảm bảo tuân thủ tiêu chuẩn ngành 100%',
    },
    dataCenterSection: {
      title: 'Hạ tầng Trung tâm Dữ liệu chuẩn quốc tế hàng đầu khu vực',
      subtitle: 'Hệ thống 9 Trung tâm dữ liệu thế hệ mới đạt chuẩn TIA-942 Rated 3 Constructed Facility lớn nhất Việt Nam',
      statsDcCount: '9+',
      statsDcCountLabel: 'Trung tâm Dữ liệu lớn',
      statsRacks: '15.000+',
      statsRacksLabel: 'Tổng số Rack tiêu chuẩn',
      statsPower: '85+ MW',
      statsPowerLabel: 'Tổng công suất điện nguồn',
      statsSla: '99.99%',
      statsSlaLabel: 'Cam kết Uptime SLA',
      tiaCertified: 'Đạt chuẩn TIA-942 Rated 3',
      tiaCertifiedDesc: 'Chứng nhận cho toàn bộ thiết kế và hạ tầng thực tế đã hoàn công.',
      greenDc: 'Trung tâm Dữ liệu Xanh (Green DC)',
      greenDcDesc: 'Chỉ số PUE tối ưu < 1.4, ứng dụng công nghệ làm mát tiên tiến và năng lượng tái tạo.',
      securityNocSoc: 'Vận hành 24/7/365 NOC & SOC',
      securityNocSocDesc: 'Đội ngũ chuyên gia an ninh mạng giám sát liên tục, ứng cứu sự cố tức thì.',
    },
    standardsSection: {
      title: 'Tiêu chuẩn & Chứng nhận Quốc tế',
      subtitle: 'Khẳng định uy tín và chất lượng dịch vụ với đầy đủ các chứng nhận khắt khe nhất toàn cầu',
      tabTechStandards: 'Tiêu chuẩn kỹ thuật',
      tabSecurity: 'Bảo mật & Tuân thủ',
      tabAwards: 'Giải thưởng & Danh hiệu',
    },
    techPartnersSection: {
      title: 'Đối tác công nghệ chiến lược toàn cầu',
      subtitle: 'Hợp tác chặt chẽ cùng các tập đoàn công nghệ hàng đầu thế giới để mang đến giải pháp tối ưu nhất',
    },
    ctaSection: {
      title: 'Sẵn sàng nâng tầm hạ tầng số cho doanh nghiệp của bạn?',
      subtitle: 'Đội ngũ chuyên gia kiến trúc giải pháp của Viettel IDC luôn sẵn sàng tư vấn giải pháp tối ưu chi phí và hiệu năng 24/7.',
      fullNamePlaceholder: 'Họ và tên của bạn *',
      emailPlaceholder: 'Email công việc / doanh nghiệp *',
      phonePlaceholder: 'Số điện thoại liên hệ *',
      companyPlaceholder: 'Tên công ty / tổ chức',
      serviceNeedPlaceholder: 'Chọn dịch vụ hoặc nhu cầu cần tư vấn...',
      submitButton: 'Gửi yêu cầu tư vấn miễn phí',
      submitting: 'Đang gửi thông tin...',
      successMessage: 'Cảm ơn bạn! Đội ngũ chuyên gia Viettel IDC sẽ liên hệ lại trong vòng 15 phút.',
      privacyNote: 'Thông tin của bạn được bảo mật tuyệt đối theo chính sách bảo vệ dữ liệu của Viettel IDC.',
    },
    footer: {
      colAboutTitle: 'VỀ VIETTEL IDC',
      colServicesTitle: 'DỊCH VỤ & TÀI NGUYÊN',
      colSupportTitle: 'HỖ TRỢ & LIÊN HỆ',
      colLegalTitle: 'PHÁP LÝ & BẢO MẬT',
      colConnectTitle: 'KẾT NỐI TOÀN CẦU',
      linkAbout: 'Tổng quan & Sứ mệnh',
      linkDataCenters: 'Hạ tầng 9 Data Center',
      linkEsg: 'ESG & Tiêu chuẩn Xanh',
      linkCsr: 'Trách nhiệm Xã hội (CSR)',
      linkCertifications: 'Chứng nhận & Giải thưởng',
      linkPress: 'Thông cáo Báo chí & Tin tức',
      linkCareers: 'Cơ hội nghề nghiệp & Tuyển dụng',
      linkServiceCatalog: 'Danh mục dịch vụ số',
      linkPricingCenter: 'Trung tâm bảng giá',
      linkDocs: 'Tài liệu kỹ thuật (Docs)',
      linkDcColocation: 'Hạ tầng Trung tâm dữ liệu',
      linkPartners: 'Hệ sinh thái đối tác',
      linkSalesContact: 'Liên hệ kinh doanh',
      linkSupportTicket: 'Gửi yêu cầu hỗ trợ (Ticket)',
      linkFaq: 'Câu hỏi thường gặp (FAQ)',
      linkTerms: 'Điều khoản dịch vụ',
      linkPrivacy: 'Chính sách bảo mật',
      linkSla: 'Cam kết chất lượng (SLA)',
      linkSecurityCompliance: 'Tuân thủ bảo mật thông tin',
      cookieSettings: 'Tùy chọn Cookie',
      headquarters: 'Tòa nhà Viettel, Số 01 Giang Văn Minh, Ba Đình, Hà Nội',
      hanoiBranch: 'Chi nhánh Hà Nội: Tầng 16, Tòa nhà Viettel, Cầu Giấy, Hà Nội',
      hcmBranch: 'Chi nhánh TP.HCM: Tầng 3, Số 285 Cách Mạng Tháng Tám, Quận 10, TP.HCM',
      danangBranch: 'Chi nhánh Đà Nẵng: Số 02 Quang Trung, Quận Hải Châu, TP. Đà Nẵng',
      contactCenter: 'Tổng đài chăm sóc khách hàng: 1800 8088 (Miễn phí cước)',
    },
    modals: {
      quoteTitle: 'Yêu cầu Báo giá & Tư vấn Doanh nghiệp',
      quoteSubtitle: 'Vui lòng cung cấp thông tin để chuyên gia Viettel IDC thiết kế giải pháp và gửi bảng giá chi tiết',
      registerTitle: 'Đăng ký tài khoản Viettel IDC Cloud Portal',
      registerSubtitle: 'Trải nghiệm hệ sinh thái đám mây hàng đầu Đông Nam Á',
      chatWelcome: 'Xin chào! Tôi là ViDa - Trợ lý ảo Viettel IDC. Tôi có thể giúp gì cho bạn hôm nay?',
      chatInputPlaceholder: 'Nhập câu hỏi của bạn tại đây...',
      send: 'Gửi tin nhắn',
      cancel: 'Hủy bỏ',
      confirm: 'Xác nhận',
    },
  },

  en: {
    nav: {
      services: 'Services',
      solutions: 'Solutions',
      pricing: 'Pricing',
      promotions: 'Promotions',
      resources: 'Resources',
      partners: 'Partners',
      about: 'About Us',
      contact: 'Contact',
      requestQuote: 'Request Quote',
      login: 'Sign In',
      register: 'Register',
      searchPlaceholder: 'Search services, solutions, technical docs...',
      quickSearch: 'Quick search',
      viewAllServices: 'View all services',
      viewAllSolutions: 'View all solutions',
      needConsulting: 'Need solution architecture advisory?',
      callHotline: 'Call 24/7 Hotline',
      hotlineLabel: '24/7 Enterprise Hotline',
      support247: '24/7/365 Technical Support',
      allRightsReserved: 'Copyright © Viettel IDC. All rights reserved.',
      freeTrial: 'Free Trial',
      exploreNow: 'Explore Now',
      learnMore: 'Learn More',
      closeMenu: 'Close Menu',
    },
    hero: {
      eyebrow: 'PARTNERING WITH ENTERPRISES TO BRING AI TO ACTION',
      headlinePart1: 'Realize your',
      headlineHighlight: 'AI ideas',
      headlinePart2: 'with optimized cloud infrastructure',
      description: "Explore the power of Qualcomm's AI acceleration platform on Viettel IDC's cloud ecosystem. We not only provide dedicated high-performance computing infrastructure, but also partner with you through every step from planning, Proof of Concept (PoC) testing, to full market launch.",
      ctaTrial: 'Get 1-month free trial',
      ctaLearnMore: 'Learn more',
      stat1Label: 'Dedicated Infrastructure',
      stat1Sublabel: 'AI acceleration platform powered by Qualcomm chips (CloudNPU, AI Inference)',
      stat2Label: 'End-to-end Partnership',
      stat2Sublabel: 'Full lifecycle support from ideation, PoC to enterprise commercialization',
      stat3Label: 'Time & Cost Optimization',
      stat3Sublabel: 'Shorten time-to-market for building real-world AI applications',
      stat4Label: 'Comprehensive Environment',
      stat4Sublabel: 'Optimized for training, evaluating, and accelerating AI algorithms',
    },
    socialProof: {
      title: 'Viettel IDC - Trusted by 40,000+ domestic and international enterprises',
      tagline: 'Partnering with top banks, multinational corporations, and government organizations',
    },
    servicesSection: {
      title: 'Comprehensive Product & Service Ecosystem',
      subtitle: '50+ Cloud, Data Center, Cybersecurity, and AI services built to empower enterprises of all scales with up to 99.99% SLA guarantee',
      searchPlaceholder: 'Quickly search services by name, code, or capability...',
      allCategories: 'All Categories',
      filterBy: 'Filter Services',
      viewDetail: 'View Details',
      getTrial: 'Free Trial',
      quoteRequest: 'Get Quote',
      slaTitle: 'SLA Guarantee',
      slaValue: '99.99%',
      badgeNew: 'NEW',
      badgeHot: 'FEATURED',
      badgeEnterprise: 'ENTERPRISE',
      pricingStartsFrom: 'Starting from',
      contactForPricing: 'Contact for pricing',
    },
    solutionsSection: {
      title: 'Specialized Enterprise & Architectural Solutions',
      subtitle: 'Engineered for high performance, uncompromising security, and optimized operational expenditure for modern enterprises',
      exploreSolution: 'Explore Solution',
      readCaseStudy: 'Read Case Study',
      architectureDiagram: 'Sample Architecture Blueprint',
    },
    industriesSection: {
      title: 'Industry-specific Digital Transformation Solutions',
      subtitle: 'Compliant with rigorous international security frameworks and vertical regulatory mandates',
      exploreIndustry: 'View Industry Solutions',
      complianceGuaranteed: '100% Industry Compliance Guaranteed',
    },
    dataCenterSection: {
      title: 'World-Class Data Center Infrastructure in Southeast Asia',
      subtitle: 'Network of 9 next-generation Data Centers certified to TIA-942 Rated 3 Constructed Facility standards',
      statsDcCount: '9+',
      statsDcCountLabel: 'Hyperscale Data Centers',
      statsRacks: '15,000+',
      statsRacksLabel: 'Standard Server Racks',
      statsPower: '85+ MW',
      statsPowerLabel: 'Total Power Capacity',
      statsSla: '99.99%',
      statsSlaLabel: 'Guaranteed Uptime SLA',
      tiaCertified: 'TIA-942 Rated 3 Certified',
      tiaCertifiedDesc: 'Dual-certified for both architectural design and constructed facilities.',
      greenDc: 'Eco-friendly Green Data Center',
      greenDcDesc: 'Optimal PUE < 1.4 with advanced cooling technologies and renewable energy integration.',
      securityNocSoc: '24/7/365 NOC & SOC Operations',
      securityNocSocDesc: 'Dedicated cybersecurity teams providing round-the-clock monitoring and rapid incident response.',
    },
    standardsSection: {
      title: 'International Standards & Certifications',
      subtitle: 'Affirming global excellence with the most stringent security, operational, and quality credentials',
      tabTechStandards: 'Technical Standards',
      tabSecurity: 'Security & Compliance',
      tabAwards: 'Awards & Accolades',
    },
    techPartnersSection: {
      title: 'Global Strategic Technology Partners',
      subtitle: 'Collaborating closely with world-leading technology corporations to deliver best-in-class cloud solutions',
    },
    ctaSection: {
      title: 'Ready to elevate your enterprise digital infrastructure?',
      subtitle: 'Viettel IDC solution architects are ready 24/7 to design your optimal cloud and data center roadmap.',
      fullNamePlaceholder: 'Your full name *',
      emailPlaceholder: 'Work / corporate email *',
      phonePlaceholder: 'Contact phone number *',
      companyPlaceholder: 'Company / Organization name',
      serviceNeedPlaceholder: 'Select service or project requirements...',
      submitButton: 'Request Free Consultation',
      submitting: 'Submitting request...',
      successMessage: 'Thank you! A Viettel IDC solution architect will reach out to you within 15 minutes.',
      privacyNote: 'Your information is strictly protected under Viettel IDC global data privacy policy.',
    },
    footer: {
      colAboutTitle: 'ABOUT VIETTEL IDC',
      colServicesTitle: 'SERVICES & RESOURCES',
      colSupportTitle: 'SUPPORT & CONTACT',
      colLegalTitle: 'LEGAL & COMPLIANCE',
      colConnectTitle: 'GLOBAL REACH',
      linkAbout: 'Overview & Mission',
      linkDataCenters: '9 Hyperscale Data Centers',
      linkEsg: 'ESG & Green Standards',
      linkCsr: 'Corporate Social Responsibility',
      linkCertifications: 'Certifications & Awards',
      linkPress: 'Press Releases & Media',
      linkCareers: 'Careers & Opportunities',
      linkServiceCatalog: 'Digital Service Catalog',
      linkPricingCenter: 'Pricing Calculator Hub',
      linkDocs: 'Technical Documentation',
      linkDcColocation: 'Data Center Colocation',
      linkPartners: 'Partner Ecosystem',
      linkSalesContact: 'Enterprise Sales Inquiry',
      linkSupportTicket: 'Submit Support Ticket',
      linkFaq: 'Frequently Asked Questions',
      linkTerms: 'Terms of Service',
      linkPrivacy: 'Privacy Policy',
      linkSla: 'Service Level Agreement (SLA)',
      linkSecurityCompliance: 'Information Security Compliance',
      cookieSettings: 'Cookie Preferences',
      headquarters: 'Viettel Building, No. 01 Giang Van Minh, Ba Dinh, Hanoi, Vietnam',
      hanoiBranch: 'Hanoi Branch: 16th Floor, Viettel Tower, Cau Giay, Hanoi',
      hcmBranch: 'HCMC Branch: 3rd Floor, 285 Cach Mang Thang Tam, Dist 10, HCMC',
      danangBranch: 'Danang Branch: No. 02 Quang Trung, Hai Chau Dist, Danang',
      contactCenter: '24/7 Enterprise Customer Care: 1800 8088 (Toll Free)',
    },
    modals: {
      quoteTitle: 'Enterprise Consultation & Quote Request',
      quoteSubtitle: 'Please share your workload requirements so our architects can prepare a customized blueprint and price proposal',
      registerTitle: 'Create Viettel IDC Cloud Portal Account',
      registerSubtitle: 'Experience Southeast Asia’s premier cloud and data center platform',
      chatWelcome: 'Hello! I am ViDa - Viettel IDC Virtual Assistant. How can I assist you today?',
      chatInputPlaceholder: 'Type your message or inquiry here...',
      send: 'Send Message',
      cancel: 'Cancel',
      confirm: 'Confirm',
    },
  },

  la: {
    nav: {
      services: 'ບໍລິການ',
      solutions: 'ວິທີແກ້ໄຂ',
      pricing: 'ລາຄາ',
      promotions: 'ໂປຣໂມຊັນ',
      resources: 'ຊັບພະຍາກອນ',
      partners: 'ຄູ່ຮ່ວມງານ',
      about: 'ກ່ຽວກັບພວກເຮົາ',
      contact: 'ຕິດຕໍ່',
      requestQuote: 'ຂໍໃບສະເໜີລາຄາ',
      login: 'ເຂົ້າສູ່ລະບົບ',
      register: 'ລົງທະບຽນ',
      searchPlaceholder: 'ຄົ້ນຫາບໍລິການ, ວິທີແກ້ໄຂ, ເອກະສານ...',
      quickSearch: 'ຄົ້ນຫາດ່ວນ',
      viewAllServices: 'ເບິ່ງບໍລິການທັງໝົດ',
      viewAllSolutions: 'ເບິ່ງວິທີແກ້ໄຂທັງໝົດ',
      needConsulting: 'ຕ້ອງການຄຳປຶກສາດ້ານສະຖາປັດຕະຍະກຳ?',
      callHotline: 'ໂທຫາສາຍດ່ວນ 24/7',
      hotlineLabel: 'ສາຍດ່ວນວິສາຫະກິດ 24/7',
      support247: 'ສະໜັບສະໜູນດ້ານເຕັກນິກ 24/7/365',
      allRightsReserved: 'ສະຫງວນລິຂະສິດ © Viettel IDC. ທຸກໆສິດທິໄດ້ຮັບການປົກປ້ອງ.',
      freeTrial: 'ທົດລອງໃຊ້ຟຣີ',
      exploreNow: 'ສຳຫຼວດຕອນນີ້',
      learnMore: 'ຮຽນຮູ້ເພີ່ມເຕີມ',
      closeMenu: 'ປິດເມນູ',
    },
    hero: {
      eyebrow: 'ຮ່ວມມືກັບວິສາຫະກິດເພື່ອນຳໃຊ້ AI ເຂົ້າສູ່ການປະຕິບັດຕົວຈິງ',
      headlinePart1: 'ເຮັດໃຫ້ຄວາມຄິດ',
      headlineHighlight: 'AI ຂອງທ່ານ',
      headlinePart2: 'ເປັນຈິງດ້ວຍໂຄງສ້າງພື້ນຖານຄລາວທີ່ດີທີ່ສຸດ',
      description: 'ສຳຫຼວດພະລັງຈາກແພລດຟອມເລັ່ງຄວາມໄວ AI ຂອງ Qualcomm ເທິງລະບົບນິເວດຄລາວຂອງ Viettel IDC. ພວກເຮົາບໍ່ພຽງແຕ່ສະໜອງໂຄງສ້າງພື້ນຖານເຊີບເວີເທົ່ານັ້ນ, ແຕ່ຍັງເປັນຄູ່ຮ່ວມງານກັບທ່ານຕັ້ງແຕ່ເລີ່ມຕົ້ນ, ການທົດລອງ PoC ຈົນຮອດການນຳໃຊ້ອອກສູ່ຕະຫຼາດ.',
      ctaTrial: 'ຮັບການທົດລອງໃຊ້ຟຣີ 1 ເດືອນ',
      ctaLearnMore: 'ຮຽນຮູ້ເພີ່ມເຕີມ',
      stat1Label: 'ໂຄງສ້າງພື້ນຖານສະເພາະ',
      stat1Sublabel: 'ແພລດຟອມເລັ່ງຄວາມໄວ AI ຈາກຊິບ Qualcomm (CloudNPU, AI Inference)',
      stat2Label: 'ຄູ່ຮ່ວມງານຕະຫຼອດເສັ້ນທາງ',
      stat2Sublabel: 'ສະໜັບສະໜູນຕັ້ງແຕ່ແນວຄິດ, PoC ຈົນຮອດການຄ້າເຕັມຮູບແບບ',
      stat3Label: 'ຫຼຸດເວລາ ແລະ ຕົ້ນທຶນ',
      stat3Sublabel: 'ຫຼຸດໄລຍະຫ່າງໃນການສ້າງແອັບພລິເຄຊັນ AI ຕົວຈິງ',
      stat4Label: 'ສະພາບແວດລ້ອມຄົບວົງຈອນ',
      stat4Sublabel: 'ເໝາະສຳລັບການຝຶກອົບຮົມ, ປະເມີນ ແລະ ປັບປຸງລະບົບ AI',
    },
    socialProof: {
      title: 'ໄດ້ຮັບຄວາມໄວ້ວາງໃຈຈາກ 30,000+ ວິສາຫະກິດຊັ້ນນໍາໃນອາຊີຕາເວັນອອກສຽງໃຕ້',
      tagline: 'ຮ່ວມມືກັບທະນາຄານຊັ້ນນໍາ, ບໍລິສັດຂ້າມຊາດ ແລະ ອົງການຈັດຕັ້ງລັດຖະບານ',
    },
    servicesSection: {
      title: 'ລະບົບນິເວດຜະລິດຕະພັນ ແລະ ບໍລິການຄົບວົງຈອນ',
      subtitle: 'ຫຼາຍກວ່າ 50+ ບໍລິການ Cloud, Data Center, ຄວາມປອດໄພ ແລະ AI ພ້ອມຕອບສະໜອງທຸກຂະໜາດວິສາຫະກິດດ້ວຍ SLA ສູງເຖິງ 99.99%',
      searchPlaceholder: 'ຄົ້ນຫາບໍລິການດ່ວນຕາມຊື່ ຫຼື ຄຸນສົມບັດ...',
      allCategories: 'ທຸກໝວດໝູ່',
      filterBy: 'ກັ່ນຕອງບໍລິການ',
      viewDetail: 'ເບິ່ງລາຍລະອຽດ',
      getTrial: 'ທົດລອງໃຊ້',
      quoteRequest: 'ຂໍໃບສະເໜີລາຄາ',
      slaTitle: 'ມາດຕະຖານ SLA',
      slaValue: '99.99%',
      badgeNew: 'ໃໝ່',
      badgeHot: 'ໂດດເດັ່ນ',
      badgeEnterprise: 'ວິສາຫະກິດ',
      pricingStartsFrom: 'ເລີ່ມຕົ້ນພຽງ',
      contactForPricing: 'ຕິດຕໍ່ເພື່ອຂໍລາຄາ',
    },
    solutionsSection: {
      title: 'ວິທີແກ້ໄຂສະເພາະດ້ານຕາມຄວາມຕ້ອງການສະຖາປັດຕະຍະກຳ',
      subtitle: 'ອອກແບບໃຫ້ມີປະສິດທິພາບສູງ, ຄວາມປອດໄພສູງສຸດ ແລະ ປະຢັດຕົ້ນທຶນການດຳເນີນງານ',
      exploreSolution: 'ສຳຫຼວດວິທີແກ້ໄຂ',
      readCaseStudy: 'ອ່ານ Case Study',
      architectureDiagram: 'ແຜນວາດສະຖາປັດຕະຍະກຳຕົວຢ່າງ',
    },
    industriesSection: {
      title: 'ວິທີແກ້ໄຂການຫັນປ່ຽນດິຈິຕອນຕາມຂະແໜງການ',
      subtitle: 'ຕອບສະໜອງມາດຕະຖານຄວາມປອດໄພສາກົນ ແລະ ລະບຽບການສະເພາະຂອງແຕ່ລະຂະແໜງການ',
      exploreIndustry: 'ເບິ່ງວິທີແກ້ໄຂຕາມຂະແໜງ',
      complianceGuaranteed: 'ຮັບປະກັນການປະຕິບັດຕາມມາດຕະຖານ 100%',
    },
    dataCenterSection: {
      title: 'ໂຄງສ້າງພື້ນຖານສູນຂໍ້ມູນມາດຕະຖານສາກົນຊັ້ນນໍາໃນພາກພື້ນ',
      subtitle: 'ເຄືອຂ່າຍສູນຂໍ້ມູນ 9 ແຫ່ງ ມາດຕະຖານ TIA-942 Rated 3 Constructed Facility',
      statsDcCount: '9+',
      statsDcCountLabel: 'ສູນຂໍ້ມູນຂະໜາດໃຫຍ່',
      statsRacks: '15,000+',
      statsRacksLabel: 'ຈຳນວນ Rack ມາດຕະຖານ',
      statsPower: '85+ MW',
      statsPowerLabel: 'ກຳລັງໄຟຟ້າທັງໝົດ',
      statsSla: '99.99%',
      statsSlaLabel: 'ມາດຕະຖານ Uptime SLA',
      tiaCertified: 'ມາດຕະຖານ TIA-942 Rated 3',
      tiaCertifiedDesc: 'ໄດ້ຮັບການຢັ້ງຢືນທັງການອອກແບບ ແລະ ໂຄງສ້າງສູນຂໍ້ມູນຕົວຈິງ.',
      greenDc: 'ສູນຂໍ້ມູນສີຂຽວ (Green DC)',
      greenDcDesc: 'ຄ່າ PUE < 1.4 ພ້ອມເຕັກໂນໂລຢີລະບາຍຄວາມຮ້ອນຂັ້ນສູງ ແລະ ພະລັງງານທົດແທນ.',
      securityNocSoc: 'ດຳເນີນງານ 24/7/365 NOC & SOC',
      securityNocSocDesc: 'ທີມງານຊ່ຽວຊານດ້ານຄວາມປອດໄພໄຊເບີ ຕິດຕາມ ແລະ ແກ້ໄຂເຫດສຸກເສີນຕະຫຼອດເວລາ.',
    },
    standardsSection: {
      title: 'ມາດຕະຖານ ແລະ ໃບຢັ້ງຢືນສາກົນ',
      subtitle: 'ຢືນຢັນຄຸນນະພາບ ແລະ ຄວາມປອດໄພລະດັບສາກົນດ້ວຍໃບຢັ້ງຢືນທີ່ເຄັ່ງຄັດທີ່ສຸດ',
      tabTechStandards: 'ມາດຕະຖານເຕັກນິກ',
      tabSecurity: 'ຄວາມປອດໄພ & ການປະຕິບັດຕາມ',
      tabAwards: 'ລາງວັນ & ກຽດຕິຍົດ',
    },
    techPartnersSection: {
      title: 'ຄູ່ຮ່ວມງານເຕັກໂນໂລຢີຍຸດທະສາດລະດັບໂລກ',
      subtitle: 'ຮ່ວມມືຢ່າງໃກ້ຊິດກັບບັນດາກຸ່ມບໍລິສັດເຕັກໂນໂລຢີຊັ້ນນໍາຂອງໂລກ',
    },
    ctaSection: {
      title: 'ພ້ອມທີ່ຈະຍົກລະດັບໂຄງສ້າງພື້ນຖານດິຈິຕອນຂອງວິສາຫະກິດທ່ານແລ້ວບໍ?',
      subtitle: 'ທີມງານຊ່ຽວຊານສະຖາປັດຕະຍະກຳຂອງ Viettel IDC ພ້ອມໃຫ້ຄຳປຶກສາຕະຫຼອດ 24/7.',
      fullNamePlaceholder: 'ຊື່ ແລະ ນາມສະກຸນຂອງທ່ານ *',
      emailPlaceholder: 'ອີເມວທຸລະກິດ *',
      phonePlaceholder: 'ເບີໂທລະສັບຕິດຕໍ່ *',
      companyPlaceholder: 'ຊື່ບໍລິສັດ / ອົງກອນ',
      serviceNeedPlaceholder: 'ເລືອກບໍລິການ ຫຼື ຄວາມຕ້ອງການ...',
      submitButton: 'ສົ່ງຄຳຮ້ອງຂໍຄຳປຶກສາຟຣີ',
      submitting: 'ກຳລັງສົ່ງຂໍ້ມູນ...',
      successMessage: 'ຂອບໃຈ! ທີມງານ Viettel IDC ຈະຕິດຕໍ່ກັບພາຍໃນ 15 ນາທີ.',
      privacyNote: 'ຂໍ້ມູນຂອງທ່ານຖືກຮັກສາຄວາມປອດໄພຕາມນະໂຍບາຍຂອງ Viettel IDC.',
    },
    footer: {
      colAboutTitle: 'ກ່ຽວກັບ VIETTEL IDC',
      colServicesTitle: 'ບໍລິການ & ຊັບພະຍາກອນ',
      colSupportTitle: 'ສະໜັບສະໜູນ & ຕິດຕໍ່',
      colLegalTitle: 'ກົດໝາຍ & ຄວາມປອດໄພ',
      colConnectTitle: 'ການເຊື່ອມຕໍ່ສາກົນ',
      linkAbout: 'ພາບລວມ & ພາລະກິດ',
      linkDataCenters: 'ໂຄງສ້າງ 9 ສູນຂໍ້ມູນ',
      linkEsg: 'ESG & ມາດຕະຖານສີຂຽວ',
      linkCsr: 'ຄວາມຮັບຜິດຊອບຕໍ່ສັງຄົມ (CSR)',
      linkCertifications: 'ໃບຢັ້ງຢືນ & ລາງວັນ',
      linkPress: 'ຂ່າວສານ & ສື່ມວນຊົນ',
      linkCareers: 'ໂອກາດວຽກງານ & ການຮັບສະໝັກ',
      linkServiceCatalog: 'ລາຍການບໍລິການດິຈິຕອນ',
      linkPricingCenter: 'ສູນຄິດໄລ່ລາຄາ',
      linkDocs: 'ເອກະສານເຕັກນິກ (Docs)',
      linkDcColocation: 'ບໍລິການຝາກເຊີບເວີ (Colocation)',
      linkPartners: 'ລະບົບນິເວດຄູ່ຮ່ວມງານ',
      linkSalesContact: 'ຕິດຕໍ່ຝ່າຍຂາຍ',
      linkSupportTicket: 'ສົ່ງຄຳຮ້ອງຂໍຊ່ວຍເຫຼືອ (Ticket)',
      linkFaq: 'ຄຳຖາມທີ່ຖາມເລື້ອຍໆ (FAQ)',
      linkTerms: 'ເງື່ອນໄຂການບໍລິການ',
      linkPrivacy: 'ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ',
      linkSla: 'ຂໍ້ຕົກລົງລະດັບການບໍລິການ (SLA)',
      linkSecurityCompliance: 'ການປະຕິບັດຕາມຄວາມປອດໄພ',
      cookieSettings: 'ການຕັ້ງຄ່າ Cookie',
      headquarters: 'ອາຄານ Viettel, ເລກທີ 01 Giang Van Minh, Ba Dinh, Hanoi, Vietnam',
      hanoiBranch: 'ສາຂາຮ່າໂນ້ຍ: ຊັ້ນ 16, ອາຄານ Viettel, Cau Giay, Hanoi',
      hcmBranch: 'ສາຂານະຄອນໂຮ່ຈິມິນ: ຊັ້ນ 3, 285 Cach Mang Thang Tam, Q10, HCMC',
      danangBranch: 'ສາຂາດານັງ: ເລກທີ 02 Quang Trung, Hai Chau, Danang',
      contactCenter: 'ສາຍດ່ວນລູກຄ້າສຳພັນ: 1800 8088 (ໂທຟຣີ)',
    },
    modals: {
      quoteTitle: 'ຂໍໃບສະເໜີລາຄາ & ຄຳປຶກສາວິສາຫະກິດ',
      quoteSubtitle: 'ກະລຸນາລະບຸຄວາມຕ້ອງການເພື່ອໃຫ້ຜູ້ຊ່ຽວຊານ Viettel IDC ອອກແບບວິທີແກ້ໄຂ ແລະ ສົ່ງໃບສະເໜີລາຄາລະອຽດ',
      registerTitle: 'ສ້າງບັນຊີ Viettel IDC Cloud Portal',
      registerSubtitle: 'ສຳຜັດກັບລະບົບນິເວດຄລາວຊັ້ນນໍາໃນອາຊີຕາເວັນອອກສຽງໃຕ້',
      chatWelcome: 'ສະບາຍດີ! ຂ້ອຍແມ່ນ ViDa - ຜູ້ຊ່ວຍສະເໝືອນ Viettel IDC. ມີຫຍັງໃຫ້ຂ້ອຍຊ່ວຍມື້ນີ້?',
      chatInputPlaceholder: 'ພິມຂໍ້ຄວາມຂອງທ່ານທີ່ນີ້...',
      send: 'ສົ່ງຂໍ້ຄວາມ',
      cancel: 'ຍົກເລີກ',
      confirm: 'ຢືນຢັນ',
    },
  },

  ph: {
    nav: {
      services: 'Mga Serbisyo',
      solutions: 'Mga Solusyon',
      pricing: 'Presyo',
      promotions: 'Mga Promosyon',
      resources: 'Mga Mapagkukunan',
      partners: 'Mga Kasosyo',
      about: 'Tungkol sa Amin',
      contact: 'Makipag-ugnayan',
      requestQuote: 'Humingi ng Presyo',
      login: 'Mag-login',
      register: 'Magrehistro',
      searchPlaceholder: 'Maghanap ng mga serbisyo, solusyon, dokumento...',
      quickSearch: 'Mabilis na paghahanap',
      viewAllServices: 'Tingnan ang lahat ng serbisyo',
      viewAllSolutions: 'Tingnan ang lahat ng solusyon',
      needConsulting: 'Kailangan ng payo sa arkitektura ng solusyon?',
      callHotline: 'Tumawag sa 24/7 Hotline',
      hotlineLabel: '24/7 Enterprise Hotline',
      support247: '24/7/365 Teknikal na Suporta',
      allRightsReserved: 'Karapatang-ari © Viettel IDC. Nakalaan ang lahat ng karapatan.',
      freeTrial: 'Libreng Pagsubok',
      exploreNow: 'Tuklasin Ngayon',
      learnMore: 'Alamin Pa',
      closeMenu: 'Isara ang Menu',
    },
    hero: {
      eyebrow: 'KASAMA NG MGA NEGOSYO UPANG DALHIN ANG AI SA AKSIYON',
      headlinePart1: 'Gawing katotohanan ang iyong',
      headlineHighlight: 'mga ideya sa AI',
      headlinePart2: 'gamit ang pinakamahusay na cloud infrastructure',
      description: 'Tuklasin ang lakas ng AI acceleration platform ng Qualcomm sa cloud ecosystem ng Viettel IDC. Hindi lamang kami nagbibigay ng nakatuong imprastraktura ng server, kundi kasama mo rin kami sa bawat hakbang mula sa pagpaplano, pagsubok ng PoC, hanggang sa paglulunsad sa merkado.',
      ctaTrial: 'Kumuha ng 1-buwang libreng pagsubok',
      ctaLearnMore: 'Alamin pa',
      stat1Label: 'Nakalaang Imprastraktura',
      stat1Sublabel: 'AI acceleration platform gamit ang Qualcomm chips (CloudNPU, AI Inference)',
      stat2Label: 'Pagtutulungan sa Lahat ng Yugto',
      stat2Sublabel: 'Suporta mula sa ideya, PoC hanggang sa komersyalisasyon',
      stat3Label: 'Pagtitipid sa Oras at Gastos',
      stat3Sublabel: 'Pabilisin ang pagbuo ng tunay na AI applications',
      stat4Label: 'Komprehensibong Kapaligiran',
      stat4Sublabel: 'Angkop para sa pagsasanay, pagsusuri, at pag-optimize ng mga algorithm ng AI',
    },
    socialProof: {
      title: 'Pinagkakatiwalaan ng 30,000+ nangungunang negosyo sa Timog-silangang Asya',
      tagline: 'Katuwang ng mga nangungunang bangko, multinasyunal na kumpanya, at ahensya ng gobyerno',
    },
    servicesSection: {
      title: 'Komprehensibong Ecosystem ng Produkto at Serbisyo',
      subtitle: 'Higit sa 50+ serbisyo sa Cloud, Data Center, Seguridad, at AI na handang tumugon sa mga negosyo ng anumang laki na may hanggang 99.99% SLA guarantee',
      searchPlaceholder: 'Mabilisang maghanap ng serbisyo ayon sa pangalan o tampok...',
      allCategories: 'Lahat ng Kategorya',
      filterBy: 'I-filter ang mga Serbisyo',
      viewDetail: 'Tingnan ang Detalye',
      getTrial: 'Subukan',
      quoteRequest: 'Humingi ng Presyo',
      slaTitle: 'Garantiyang SLA',
      slaValue: '99.99%',
      badgeNew: 'BAGO',
      badgeHot: 'TAMPOC',
      badgeEnterprise: 'NEGOSYO',
      pricingStartsFrom: 'Nagsisimula sa',
      contactForPricing: 'Makipag-ugnayan para sa presyo',
    },
    solutionsSection: {
      title: 'Mga Dalubhasang Solusyon para sa Arkitektura ng Negosyo',
      subtitle: 'Idinisenyo para sa mataas na pagganap, ganap na seguridad, at pagtitipid sa operational cost',
      exploreSolution: 'Tuklasin ang Solusyon',
      readCaseStudy: 'Basahin ang Case Study',
      architectureDiagram: 'Halimbawang Arkitektura',
    },
    industriesSection: {
      title: 'Mga Solusyon sa Digital Transformation ayon sa Industriya',
      subtitle: 'Sumusunod sa mahigpit na pandaigdigang pamantayan sa seguridad at mga regulasyon ng bawat industriya',
      exploreIndustry: 'Tingnan ang Solusyon sa Industriya',
      complianceGuaranteed: '100% Garantisadong Pagsunod sa Industriya',
    },
    dataCenterSection: {
      title: 'World-Class Data Center Infrastructure sa Timog-silangang Asya',
      subtitle: 'Network ng 9 modernong Data Center na sertipikado sa TIA-942 Rated 3 Constructed Facility',
      statsDcCount: '9+',
      statsDcCountLabel: 'Malalaking Data Centers',
      statsRacks: '15,000+',
      statsRacksLabel: 'Karaniwang Server Racks',
      statsPower: '85+ MW',
      statsPowerLabel: 'Kabuuang Kapasidad ng Kuryente',
      statsSla: '99.99%',
      statsSlaLabel: 'Garantisadong Uptime SLA',
      tiaCertified: 'Sertipikadong TIA-942 Rated 3',
      tiaCertifiedDesc: 'Sertipikado para sa parehong disenyo at aktwal na pasilidad.',
      greenDc: 'Luntiang Data Center (Green DC)',
      greenDcDesc: 'Optimal na PUE < 1.4 na may advanced cooling at renewable energy.',
      securityNocSoc: '24/7/365 NOC & SOC Operations',
      securityNocSocDesc: 'Nakatuong cybersecurity team na nagbabantay at tumutugon sa mga insidente 24/7.',
    },
    standardsSection: {
      title: 'Pandaigdigang Pamantayan at Sertipikasyon',
      subtitle: 'Pinatutunayan ang kalidad at seguridad gamit ang pinakamahigpit na pandaigdigang pamantayan',
      tabTechStandards: 'Teknikal na Pamantayan',
      tabSecurity: 'Seguridad at Pagsunod',
      tabAwards: 'Mga Parangal at Pagkilala',
    },
    techPartnersSection: {
      title: 'Pandaigdigang Madiskarteng Kasosyo sa Teknolohiya',
      subtitle: 'Nakikipagtulungan nang malapit sa mga nangungunang kumpanya ng teknolohiya sa mundo',
    },
    ctaSection: {
      title: 'Handa ka na bang itaas ang antas ng digital infrastructure ng iyong kumpanya?',
      subtitle: 'Ang mga dalubhasang arkitekto ng solusyon ng Viettel IDC ay handang magpayo 24/7.',
      fullNamePlaceholder: 'Buong Pangalan *',
      emailPlaceholder: 'Email ng Negosyo *',
      phonePlaceholder: 'Numero ng Telepono *',
      companyPlaceholder: 'Pangalan ng Kumpanya / Organisasyon',
      serviceNeedPlaceholder: 'Pumili ng serbisyo o pangangailangan...',
      submitButton: 'Humingi ng Libreng Konsultasyon',
      submitting: 'Ipinapadala ang impormasyon...',
      successMessage: 'Salamat! Makikipag-ugnayan ang eksperto ng Viettel IDC sa loob ng 15 minuto.',
      privacyNote: 'Ang iyong impormasyon ay protektado alinsunod sa patakaran ng Viettel IDC.',
    },
    footer: {
      colAboutTitle: 'TUNGKOL SA VIETTEL IDC',
      colServicesTitle: 'MGA SERBISYO AT MAPAGKUKUNAN',
      colSupportTitle: 'SUPORTA AT KONTAK',
      colLegalTitle: 'LEGAL AT SEGURIDAD',
      colConnectTitle: 'PANDAIGDIGANG KONEKSYON',
      linkAbout: 'Pangkalahatang-ideya at Misyon',
      linkDataCenters: '9 Hyperscale Data Centers',
      linkEsg: 'ESG at Green Standards',
      linkCsr: 'Responsibilidad Panlipunan (CSR)',
      linkCertifications: 'Mga Sertipikasyon at Parangal',
      linkPress: 'Balita at Media',
      linkCareers: 'Mga Oportunidad sa Trabaho',
      linkServiceCatalog: 'Katalogo ng Digital Services',
      linkPricingCenter: 'Sentro ng Presyo',
      linkDocs: 'Teknikal na Dokumentasyon',
      linkDcColocation: 'Data Center Colocation',
      linkPartners: 'Ecosystem ng Kasosyo',
      linkSalesContact: 'Makipag-ugnayan sa Sales',
      linkSupportTicket: 'Magsumite ng Support Ticket',
      linkFaq: 'Mga Madalas Itanong (FAQ)',
      linkTerms: 'Mga Tuntunin ng Serbisyo',
      linkPrivacy: 'Patakaran sa Privacy',
      linkSla: 'Kasunduan sa Antas ng Serbisyo (SLA)',
      linkSecurityCompliance: 'Pagsunod sa Seguridad ng Impormasyon',
      cookieSettings: 'Mga Setting ng Cookie',
      headquarters: 'Viettel Building, No. 01 Giang Van Minh, Ba Dinh, Hanoi, Vietnam',
      hanoiBranch: 'Hanoi Branch: 16th Floor, Viettel Tower, Cau Giay, Hanoi',
      hcmBranch: 'HCMC Branch: 3rd Floor, 285 Cach Mang Thang Tam, Dist 10, HCMC',
      danangBranch: 'Danang Branch: No. 02 Quang Trung, Hai Chau Dist, Danang',
      contactCenter: 'Customer Support Hotline: 1800 8088 (Libreng Tawag)',
    },
    modals: {
      quoteTitle: 'Hiling sa Konsultasyon at Presyo ng Negosyo',
      quoteSubtitle: 'Mangyaring magbigay ng impormasyon upang maihanda ng aming mga eksperto ang customized na solusyon at presyo',
      registerTitle: 'Gumawa ng Viettel IDC Cloud Portal Account',
      registerSubtitle: 'Maranasan ang nangungunang cloud platform sa Timog-silangang Asya',
      chatWelcome: 'Kumusta! Ako si ViDa - Viettel IDC Virtual Assistant. Paano kita matutulungan ngayon?',
      chatInputPlaceholder: 'I-type ang iyong mensahe dito...',
      send: 'Ipadala',
      cancel: 'Kanselahin',
      confirm: 'Kumpirmahin',
    },
  },

  mm: {
    nav: {
      services: 'ဝန်ဆောင်မှုများ',
      solutions: 'ဖြေရှင်းချက်များ',
      pricing: 'စျေးနှုန်း',
      promotions: 'ပရိုမိုးရှင်းများ',
      resources: 'အရင်းအမြစ်များ',
      partners: 'မိတ်ဖက်များ',
      about: 'ကျွန်ုပ်တို့အကြောင်း',
      contact: 'ဆက်သွယ်ရန်',
      requestQuote: 'စျေးနှုန်းတောင်းဆိုရန်',
      login: 'အကောင့်ဝင်ရန်',
      register: 'စာရင်းသွင်းရန်',
      searchPlaceholder: 'ဝန်ဆောင်မှုများ၊ ဖြေရှင်းချက်များကို ရှာဖွေပါ...',
      quickSearch: 'အမြန်ရှာဖွေမှု',
      viewAllServices: 'ဝန်ဆောင်မှုအားလုံးကို ကြည့်ရှုရန်',
      viewAllSolutions: 'ဖြေရှင်းချက်အားလုံးကို ကြည့်ရှုရန်',
      needConsulting: 'ဗိသုကာဆိုင်ရာ အကြံဉာဏ် လိုအပ်ပါသလား?',
      callHotline: '24/7 ဟော့လိုင်းသို့ ဖုန်းခေါ်ပါ',
      hotlineLabel: '24/7 လုပ်ငန်းသုံး ဟော့လိုင်း',
      support247: '24/7/365 နည်းပညာ အထောက်အပံ့',
      allRightsReserved: 'မူပိုင်ခွင့် © Viettel IDC. မူပိုင်ခွင့်များ ရယူထားပြီးဖြစ်သည်။',
      freeTrial: 'အခမဲ့ စမ်းသပ်သုံးစွဲရန်',
      exploreNow: 'ယခု လေ့လာရန်',
      learnMore: 'ပိုမိုသိရှိရန်',
      closeMenu: 'မီနူးပိတ်ရန်',
    },
    hero: {
      eyebrow: 'လုပ်ငန်းများအတွက် AI ကို လက်တွေ့အသုံးချနိုင်ရန် လက်တွဲဆောင်ရွက်ခြင်း',
      headlinePart1: 'သင်၏',
      headlineHighlight: 'AI စိတ်ကူးများကို',
      headlinePart2: 'အကောင်းဆုံး cloud အခြေခံအဆောက်အအုံဖြင့် အကောင်အထည်ဖော်ပါ',
      description: 'Viettel IDC ၏ cloud စနစ်တွင် Qualcomm ၏ AI အရှိန်မြှင့် platform ၏ စွမ်းအားကို လေ့လာပါ။ ကျွန်ုပ်တို့သည် server အခြေခံအဆောက်အအုံသာမက စီမံကိန်းရေးဆွဲခြင်း၊ PoC စမ်းသပ်ခြင်းမှ စျေးကွက်သို့ မိတ်ဆက်ခြင်းအထိ သင်နှင့်အတူ လက်တွဲဆောင်ရွက်ပါသည်။',
      ctaTrial: '၁ လ အခမဲ့ စမ်းသပ်သုံးစွဲခွင့် ရယူပါ',
      ctaLearnMore: 'ပိုမိုသိရှိရန်',
      stat1Label: 'သီးသန့် အခြေခံအဆောက်အအုံ',
      stat1Sublabel: 'Qualcomm ချစ်ပ်များမှ AI အရှိန်မြှင့် platform (CloudNPU, AI Inference)',
      stat2Label: 'အစအဆုံး လက်တွဲဆောင်ရွက်မှု',
      stat2Sublabel: 'စိတ်ကူးမှ PoC နှင့် စီးပွားဖြစ်ထုတ်လုပ်မှုအထိ အပြည့်အဝ အထောက်အပံ့',
      stat3Label: 'အချိန်နှင့် ကုန်ကျစရိတ် သက်သာစေခြင်း',
      stat3Sublabel: 'လက်တွေ့ကျသော AI application များကို ပိုမိုမြန်ဆန်စွာ တည်ဆောက်နိုင်ခြင်း',
      stat4Label: 'ပြည့်စုံသော ပတ်ဝန်းကျင်',
      stat4Sublabel: 'AI algorithm များကို လေ့ကျင့်ခြင်း၊ အကဲဖြတ်ခြင်းနှင့် ပိုမိုကောင်းမွန်အောင် ပြုလုပ်ခြင်းအတွက် အထူးသင့်လျော်ပါသည်',
    },
    socialProof: {
      title: 'အရှေ့တောင်အာရှရှိ ထိပ်တန်းလုပ်ငန်းပေါင်း ၃၀,၀၀၀+ ၏ ယုံကြည်စိတ်ချမှုကို ရရှိထားပါသည်',
      tagline: 'ထိပ်တန်းဘဏ်များ၊ နိုင်ငံစုံကော်ပိုရေးရှင်းများနှင့် အစိုးရအဖွဲ့အစည်းများနှင့် လက်တွဲဆောင်ရွက်လျက်ရှိသည်',
    },
    servicesSection: {
      title: 'ပြည့်စုံသော ထုတ်ကုန်နှင့် ဝန်ဆောင်မှု ဂေဟစနစ်',
      subtitle: '99.99% SLA အာမခံချက်ဖြင့် မည်သည့် လုပ်ငန်းအရွယ်အစားအတွက်မဆို အသင့်ရှိသော Cloud, Data Center, လုံခြုံရေးနှင့် AI ဝန်ဆောင်မှု ၅၀ ကျော်',
      searchPlaceholder: 'အမည် သို့မဟုတ် လုပ်ဆောင်ချက်ဖြင့် ဝန်ဆောင်မှုများကို အမြန်ရှာဖွေပါ...',
      allCategories: 'အမျိုးအစား အားလုံး',
      filterBy: 'ဝန်ဆောင်မှုများကို စစ်ထုတ်ပါ',
      viewDetail: 'အသေးစိတ် ကြည့်ရှုရန်',
      getTrial: 'စမ်းသပ်သုံးစွဲရန်',
      quoteRequest: 'စျေးနှုန်းတောင်းဆိုရန်',
      slaTitle: 'SLA အာမခံချက်',
      slaValue: '99.99%',
      badgeNew: 'အသစ်',
      badgeHot: 'အထူး',
      badgeEnterprise: 'လုပ်ငန်းသုံး',
      pricingStartsFrom: 'အနည်းဆုံး',
      contactForPricing: 'စျေးနှုန်းအတွက် ဆက်သွယ်ရန်',
    },
    solutionsSection: {
      title: 'ခေတ်မီလုပ်ငန်းများအတွက် သီးသန့်ဗိသုကာ ဖြေရှင်းချက်များ',
      subtitle: 'စွမ်းဆောင်ရည်မြင့်မားမှု၊ အပြည့်အဝ လုံခြုံမှုနှင့် လည်ပတ်မှုကုန်ကျစရိတ် သက်သာစေရန် ဒီဇိုင်းထုတ်ထားသည်',
      exploreSolution: 'ဖြေရှင်းချက်ကို လေ့လာရန်',
      readCaseStudy: 'Case Study ဖတ်ရှုရန်',
      architectureDiagram: 'နမူနာ ဗိသုကာပုံစံ',
    },
    industriesSection: {
      title: 'ကဏ္ဍအလိုက် ဒစ်ဂျစ်တယ် အသွင်ကူးပြောင်းရေး ဖြေရှင်းချက်များ',
      subtitle: 'နိုင်ငံတကာ လုံခြုံရေးစံနှုန်းများနှင့် သက်ဆိုင်ရာ ကဏ္ဍစည်းမျဉ်းများကို တိကျစွာ လိုက်နာထားပါသည်',
      exploreIndustry: 'ကဏ္ဍဆိုင်ရာ ဖြေရှင်းချက်များကို ကြည့်ရှုရန်',
      complianceGuaranteed: 'စက်မှုလုပ်ငန်းဆိုင်ရာ လိုက်နာမှု ၁၀၀% အာမခံပါသည်',
    },
    dataCenterSection: {
      title: 'အရှေ့တောင်အာရှရှိ ကမ္ဘာ့အဆင့်မီ Data Center အခြေခံအဆောက်အအုံ',
      subtitle: 'TIA-942 Rated 3 Constructed Facility အဆင့်မီ Data Center ၉ ခု ကွန်ရက်',
      statsDcCount: '9+',
      statsDcCountLabel: 'အဆင့်မြင့် Data Centers',
      statsRacks: '15,000+',
      statsRacksLabel: 'စံချိန်မီ Server Racks',
      statsPower: '85+ MW',
      statsPowerLabel: 'စုစုပေါင်း လျှပ်စစ်ဓာတ်အား ပမာဏ',
      statsSla: '99.99%',
      statsSlaLabel: 'Uptime SLA အာမခံချက်',
      tiaCertified: 'TIA-942 Rated 3 လက်မှတ်ရရှိထားခြင်း',
      tiaCertifiedDesc: 'ဒီဇိုင်းနှင့် တည်ဆောက်ပြီးစီးမှု နှစ်ခုစလုံးအတွက် အသိအမှတ်ပြုလက်မှတ် ရရှိထားပါသည်။',
      greenDc: 'သဘာဝပတ်ဝန်းကျင်ထိန်းသိမ်းရေး Data Center (Green DC)',
      greenDcDesc: 'အဆင့်မြင့် အအေးပေးနည်းပညာနှင့် ပြန်လည်ပြည့်ဖြိုးမြဲစွမ်းအင်သုံး PUE < 1.4 စနစ်။',
      securityNocSoc: '24/7/365 NOC & SOC လည်ပတ်မှုစနစ်',
      securityNocSocDesc: 'ကျွမ်းကျင်သော cybersecurity အဖွဲ့မှ အချိန်ပြည့် စောင့်ကြည့်ပြီး အရေးပေါ်တုံ့ပြန်မှုများ ပေးဆောင်ပါသည်။',
    },
    standardsSection: {
      title: 'နိုင်ငံတကာ စံနှုန်းများနှင့် အသိအမှတ်ပြု လက်မှတ်များ',
      subtitle: 'အပြည့်စုံဆုံး နိုင်ငံတကာ လုံခြုံရေးနှင့် အရည်အသွေး လက်မှတ်များဖြင့် ကမ္ဘာ့အဆင့်မီ အရည်အသွေးကို သက်သေပြခြင်း',
      tabTechStandards: 'နည်းပညာဆိုင်ရာ စံနှုန်းများ',
      tabSecurity: 'လုံခြုံရေးနှင့် လိုက်နာမှု',
      tabAwards: 'ဆုတံဆိပ်များနှင့် ဂုဏ်ပြုမှုများ',
    },
    techPartnersSection: {
      title: 'ကမ္ဘာလုံးဆိုင်ရာ မဟာဗျူဟာမြောက် နည်းပညာမိတ်ဖက်များ',
      subtitle: 'အကောင်းဆုံး cloud ဖြေရှင်းချက်များ ပေးအပ်နိုင်ရန် ကမ္ဘာ့ထိပ်တန်း နည်းပညာကုမ္ပဏီများနှင့် နီးကပ်စွာ ပူးပေါင်းဆောင်ရွက်လျက်ရှိသည်',
    },
    ctaSection: {
      title: 'သင်၏ လုပ်ငန်းဒစ်ဂျစ်တယ် အခြေခံအဆောက်အအုံကို အဆင့်မြှင့်တင်ရန် အသင့်ဖြစ်ပြီလား?',
      subtitle: 'Viettel IDC ၏ ဗိသုကာပညာရှင်များသည် အကောင်းဆုံးဖြေရှင်းချက်ကို ၂၄ နာရီပတ်လုံး အကြံပေးရန် အသင့်ရှိနေပါသည်။',
      fullNamePlaceholder: 'သင်၏ အမည်အပြည့်အစုံ *',
      emailPlaceholder: 'လုပ်ငန်းသုံး အီးမေးလ် *',
      phonePlaceholder: 'ဆက်သွယ်ရန် ဖုန်းနံပါတ် *',
      companyPlaceholder: 'ကုမ္ပဏီ / အဖွဲ့အစည်း အမည်',
      serviceNeedPlaceholder: 'ဝန်ဆောင်မှု သို့မဟုတ် လိုအပ်ချက်ကို ရွေးချယ်ပါ...',
      submitButton: 'အခမဲ့ အကြံဉာဏ် ရယူရန် တောင်းဆိုပါ',
      submitting: 'အချက်အလက် ပေးပို့နေပါသည်...',
      successMessage: 'ကျေးဇူးတင်ပါသည်။ Viettel IDC ကျွမ်းကျင်သူတစ်ဦးသည် ၁၅ မိနစ်အတွင်း သင့်ထံ ဆက်သွယ်ပါမည်။',
      privacyNote: 'သင်၏ အချက်အလက်များကို Viettel IDC ၏ မူဝါဒအရ လုံခြုံစွာ ထိန်းသိမ်းထားပါသည်။',
    },
    footer: {
      colAboutTitle: 'VIETTEL IDC အကြောင်း',
      colServicesTitle: 'ဝန်ဆောင်မှုများနှင့် အရင်းအမြစ်များ',
      colSupportTitle: 'အကူအညီနှင့် ဆက်သွယ်ရန်',
      colLegalTitle: 'ဥပဒေရေးရာနှင့် လုံခြုံရေး',
      colConnectTitle: 'ကမ္ဘာလုံးဆိုင်ရာ ချိတ်ဆက်မှု',
      linkAbout: 'ခြုံငုံသုံးသပ်ချက်နှင့် ရည်မှန်းချက်',
      linkDataCenters: 'Data Center ၉ ခု',
      linkEsg: 'ESG နှင့် သဘာဝပတ်ဝန်းကျင် စံနှုန်းများ',
      linkCsr: 'လူမှုရေး တာဝန်ယူမှု (CSR)',
      linkCertifications: 'လက်မှတ်များနှင့် ဆုတံဆိပ်များ',
      linkPress: 'သတင်းထုတ်ပြန်ချက်များ',
      linkCareers: 'အလုပ်အကိုင် အခွင့်အလမ်းများ',
      linkServiceCatalog: 'ဒစ်ဂျစ်တယ် ဝန်ဆောင်မှုများ ကတ်တလောက်',
      linkPricingCenter: 'စျေးနှုန်းတွက်ချက်မှု စင်တာ',
      linkDocs: 'နည်းပညာဆိုင်ရာ စာရွက်စာတမ်းများ',
      linkDcColocation: 'Data Center Colocation',
      linkPartners: 'မိတ်ဖက်ဂေဟစနစ်',
      linkSalesContact: 'အရောင်းဌာနသို့ ဆက်သွယ်ရန်',
      linkSupportTicket: 'အကူအညီတောင်းခံလွှာ ပေးပို့ရန်',
      linkFaq: 'မကြာခဏ မေးလေ့ရှိသော မေးခွန်းများ',
      linkTerms: 'ဝန်ဆောင်မှု စည်းကမ်းချက်များ',
      linkPrivacy: 'ကိုယ်ရေးကိုယ်တာ မူဝါဒ',
      linkSla: 'ဝန်ဆောင်မှုအဆင့် သဘောတူညီချက် (SLA)',
      linkSecurityCompliance: 'အချက်အလက် လုံခြုံရေး လိုက်နာမှု',
      cookieSettings: 'Cookie ဆက်တင်များ',
      headquarters: 'Viettel Building, No. 01 Giang Van Minh, Ba Dinh, Hanoi, Vietnam',
      hanoiBranch: 'ဟနွိုင်းရုံးခွဲ: 16th Floor, Viettel Tower, Cau Giay, Hanoi',
      hcmBranch: 'ဟိုချီမင်းရုံးခွဲ: 3rd Floor, 285 Cach Mang Thang Tam, Dist 10, HCMC',
      danangBranch: 'ဒါနန်းရုံးခွဲ: No. 02 Quang Trung, Hai Chau Dist, Danang',
      contactCenter: 'ဖောက်သည်ဝန်ဆောင်မှု ဟော့လိုင်း: 1800 8088 (အခမဲ့)',
    },
    modals: {
      quoteTitle: 'လုပ်ငန်းသုံး စျေးနှုန်းနှင့် အကြံဉာဏ် တောင်းဆိုရန်',
      quoteSubtitle: 'အသေးစိတ် စျေးနှုန်းနှင့် ဖြေရှင်းချက် ရေးဆွဲနိုင်ရန် သင်၏ လိုအပ်ချက်များကို ဖြည့်သွင်းပေးပါ',
      registerTitle: 'Viettel IDC Cloud Portal အကောင့်ဖွင့်ရန်',
      registerSubtitle: 'အရှေ့တောင်အာရှ၏ ထိပ်တန်း cloud platform ကို တွေ့ကြုံခံစားပါ',
      chatWelcome: 'မင်္ဂလာပါ! ကျွန်ုပ်သည် ViDa - Viettel IDC Virtual Assistant ဖြစ်ပါသည်။ ယနေ့ သင့်အား မည်သို့ ကူညီပေးရမည်နည်း။',
      chatInputPlaceholder: 'သင်၏ မေးခွန်းကို ဤနေရာတွင် ရိုက်ထည့်ပါ...',
      send: 'မက်ဆေ့ခ်ျ ပို့ရန်',
      cancel: 'ပယ်ဖျက်ရန်',
      confirm: 'အတည်ပြုရန်',
    },
  },
  kh: {
    nav: {
      services: 'សេវាកម្ម',
      solutions: 'ដំណោះស្រាយ',
      pricing: 'តារាងតម្លៃ',
      promotions: 'ការផ្តល់ជូនពិសេស',
      resources: 'ធនធាន',
      partners: 'ដៃគូ',
      about: 'អំពីយើង',
      contact: 'ទំនាក់ទំនង',
      requestQuote: 'ស្នើសុំតម្លៃ',
      login: 'ចូល',
      register: 'ចុះឈ្មោះ',
      searchPlaceholder: 'ស្វែងរកសេវាកម្ម ដំណោះស្រាយ ឯកសារ...',
      quickSearch: 'ស្វែងរករហ័ស',
      viewAllServices: 'មើលសេវាកម្មទាំងអស់',
      viewAllSolutions: 'មើលដំណោះស្រាយទាំងអស់',
      needConsulting: 'ត្រូវការប្រឹក្សាដំណោះស្រាយ?',
      callHotline: 'ទូរស័ព្ទមកកាន់ Hotline',
      hotlineLabel: 'Hotline ប្រឹក្សា ២៤/៧',
      support247: 'ជំនួយបច្ចេកទេស ២៤/៧/៣៦៥',
      allRightsReserved: 'រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ Viettel IDC។',
      freeTrial: 'សាកល្បងឥតគិតថ្លៃ',
      exploreNow: 'ស្វែងយល់ឥឡូវនេះ',
      learnMore: 'ស្វែងយល់បន្ថែម',
      closeMenu: 'បិទម៉ឺនុយ',
    },
    hero: {
      eyebrow: 'ដៃគូយុទ្ធសាស្ត្រក្នុងការអនុវត្ត AI សម្រាប់អាជីវកម្ម',
      headlinePart1: 'ប្រែក្លាយគំនិត',
      headlineHighlight: 'AI របស់អ្នក',
      headlinePart2: 'ជាមួយនឹងហេដ្ឋារចនាសម្ព័ន្ធ Cloud ដ៏ប្រសើរ',
      description: 'ស្វែងយល់ពីថាមពលនៃវេទិកា AI Accelerator ពី Qualcomm នៅលើប្រព័ន្ធអេកូឡូស៊ី Viettel IDC Cloud។ គាំទ្រយ៉ាងពេញលេញចាប់ពីគំនិត ការធ្វើតេស្ត PoC រហូតដល់ការដាក់ឱ្យប្រើប្រាស់ពាណិជ្ជកម្ម។',
      ctaTrial: 'ទទួលបានការសាកល្បងឥតគិតថ្លៃ ១ ខែ',
      ctaLearnMore: 'ស្វែងយល់បន្ថែម',
      stat1Label: 'ហេដ្ឋារចនាសម្ព័ន្ធពិសេស',
      stat1Sublabel: 'វេទិកាបង្កើនល្បឿន AI ពីបន្ទះឈីប Qualcomm (CloudNPU, AI Inference)',
      stat2Label: 'ការគាំទ្រជាបន្តបន្ទាប់',
      stat2Sublabel: 'ការគាំទ្រចាប់ពីគំនិតរហូតដល់ពាណិជ្ជកម្មពេញលេញ',
      stat3Label: 'សន្សំសំចៃពេលវេលានិងការចំណាយ',
      stat3Sublabel: 'កាត់បន្ថយពេលវេលាក្នុងការបង្កើតកម្មវិធី AI ជាក់ស្តែង',
      stat4Label: 'បរិស្ថានគ្រប់ជ្រុងជ្រោយ',
      stat4Sublabel: 'សមស្របសម្រាប់ការបណ្តុះបណ្តាល និងបង្កើនប្រសិទ្ធភាពក្បួនដោះស្រាយ AI',
    },
    socialProof: {
      title: 'ទទួលបានការជឿទុកចិត្តពីសហគ្រាសឈានមុខជាង ៤០,០០០+ នៅតំបន់អាស៊ីអាគ្នេយ៍',
      tagline: 'ដៃគូជាមួយធនាគារឈានមុខ សាជីវកម្មពហុជាតិ និងស្ថាប័នរដ្ឋាភិបាល',
    },
    servicesSection: {
      title: 'ប្រព័ន្ធអេកូឡូស៊ីផលិតផល និងសេវាកម្មគ្រប់ជ្រុងជ្រោយ',
      subtitle: 'សេវាកម្ម Cloud, Data Center, សុវត្ថិភាព និង AI ជាង ៥០+ ត្រៀមខ្លួនជាស្រេចសម្រាប់អាជីវកម្មគ្រប់ទំហំ ជាមួយ SLA ៩៩.៩៩%',
      searchPlaceholder: 'ស្វែងរកសេវាកម្មរហ័សតាមឈ្មោះ ឬមុខងារ...',
      allCategories: 'ប្រភេទទាំងអស់',
      filterBy: 'ត្រងសេវាកម្ម',
      viewDetail: 'មើលព័ត៌មានលម្អិត',
      getTrial: 'សាកល្បង',
      quoteRequest: 'ស្នើសុំតម្លៃ',
      slaTitle: 'ការធានា SLA',
      slaValue: '៩៩.៩៩%',
      badgeNew: 'ថ្មី',
      badgeHot: 'លេចធ្លោ',
      badgeEnterprise: 'សហគ្រាស',
      pricingStartsFrom: 'ចាប់ពី',
      contactForPricing: 'ទាក់ទងសម្រាប់តម្លៃ',
    },
    solutionsSection: {
      title: 'ដំណោះស្រាយស្ថាបត្យកម្មកម្រិតខ្ពស់សម្រាប់សហគ្រាស',
      subtitle: 'រចនាឡើងសម្រាប់ប្រសិទ្ធភាពខ្ពស់ សុវត្ថិភាពដាច់ខាត និងសន្សំការចំណាយប្រតិបត្តិការ',
      exploreSolution: 'ស្វែងយល់ពីដំណោះស្រាយ',
      readCaseStudy: 'អាន Case Study',
      architectureDiagram: 'ដ្យាក្រាមស្ថាបត្យកម្មគំរូ',
    },
    industriesSection: {
      title: 'ដំណោះស្រាយបរិវត្តកម្មឌីជីថលតាមវិស័យឧស្សាហកម្ម',
      subtitle: 'អនុលោមតាមស្តង់ដារសុវត្ថិភាពអន្តរជាតិ និងបទប្បញ្ញត្តិជាក់លាក់នៃវិស័យនីមួយៗ',
      exploreIndustry: 'មើលដំណោះស្រាយតាមវិស័យ',
      complianceGuaranteed: 'ធានាការអនុលោមតាមស្តង់ដារឧស្សាហកម្ម ១០០%',
    },
    dataCenterSection: {
      title: 'ហេដ្ឋារចនាសម្ព័ន្ធ Data Center កម្រិតពិភពលោកឈានមុខគេក្នុងតំបន់',
      subtitle: 'បណ្តាញមជ្ឈមណ្ឌលទិន្នន័យចំនួន ៩ ដែលទទួលបានវិញ្ញាបនប័ត្រ TIA-942 Rated 3 Constructed Facility',
      statsDcCount: '9+',
      statsDcCountLabel: 'Data Center កម្រិតខ្ពស់',
      statsRacks: '15,000+',
      statsRacksLabel: 'Server Racks ស្តង់ដារ',
      statsPower: '85+ MW',
      statsPowerLabel: 'ថាមពលអគ្គិសនីសរុប',
      statsSla: '99.99%',
      statsSlaLabel: 'ការធានា Uptime SLA',
      tiaCertified: 'ស្តង់ដារ TIA-942 Rated 3',
      tiaCertifiedDesc: 'ការបញ្ជាក់សម្រាប់ការរចនា និងហេដ្ឋារចនាសម្ព័ន្ធជាក់ស្តែងទាំងមូល។',
      greenDc: 'មជ្ឈមណ្ឌលទិន្នន័យបៃតង (Green DC)',
      greenDcDesc: 'សន្ទស្សន៍ PUE ប្រសើរ < 1.4 បច្ចេកវិទ្យាត្រជាក់ទំនើប និងថាមពលកកើតឡើងវិញ។',
      securityNocSoc: 'ប្រតិបត្តិការ ២៤/៧/៣៦៥ NOC & SOC',
      securityNocSocDesc: 'ក្រុមអ្នកជំនាញសន្តិសុខតាមអ៊ីនធឺណិតត្រួតពិនិត្យ និងឆ្លើយតបបន្ទាន់ជាបន្តបន្ទាប់។',
    },
    standardsSection: {
      title: 'ស្តង់ដារ និងវិញ្ញាបនប័ត្រអន្តរជាតិ',
      subtitle: 'បញ្ជាក់ពីគុណភាព និងកិត្យានុភាពជាមួយនឹងវិញ្ញាបនប័ត្រអន្តរជាតិដ៏តឹងរ៉ឹងបំផុត',
      tabTechStandards: 'ស្តង់ដារបច្ចេកទេស',
      tabSecurity: 'សុវត្ថិភាព និងការអនុលោមតាម',
      tabAwards: 'ពានរង្វាន់ និងការទទួលស្គាល់',
    },
    techPartnersSection: {
      title: 'ដៃគូបច្ចេកវិទ្យាយុទ្ធសាស្ត្រសកល',
      subtitle: 'សហការយ៉ាងជិតស្និទ្ធជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យាឈានមុខគេលើពិភពលោក ដើម្បីផ្តល់ដំណោះស្រាយល្អបំផុត',
    },
    ctaSection: {
      title: 'ត្រៀមខ្លួនដើម្បីបង្កើនហេដ្ឋារចនាសម្ព័ន្ធឌីជីថលសម្រាប់អាជីវកម្មរបស់អ្នកហើយឬនៅ?',
      subtitle: 'ក្រុមអ្នកជំនាញស្ថាបត្យកម្មដំណោះស្រាយរបស់ Viettel IDC ត្រៀមខ្លួនជាស្រេចដើម្បីប្រឹក្សាយោបល់ ២៤/៧។',
      fullNamePlaceholder: 'ឈ្មោះពេញរបស់អ្នក *',
      emailPlaceholder: 'អ៊ីមែលអាជីវកម្ម *',
      phonePlaceholder: 'លេខទូរស័ព្ទទំនាក់ទំនង *',
      companyPlaceholder: 'ឈ្មោះក្រុមហ៊ុន / ស្ថាប័ន',
      serviceNeedPlaceholder: 'ជ្រើសរើសសេវាកម្ម ឬតម្រូវការ...',
      submitButton: 'ផ្ញើសំណើសុំការប្រឹក្សាឥតគិតថ្លៃ',
      submitting: 'កំពុងផ្ញើព័ត៌មាន...',
      successMessage: 'សូមអរគុណ! អ្នកជំនាញ Viettel IDC នឹងទាក់ទងអ្នកក្នុងរយៈពេល ១៥ នាទី។',
      privacyNote: 'ព័ត៌មានរបស់អ្នកត្រូវបានរក្សាការសម្ងាត់យ៉ាងតឹងរ៉ឹងស្របតាមគោលការណ៍របស់ Viettel IDC។',
    },
    footer: {
      colAboutTitle: 'អំពី VIETTEL IDC',
      colServicesTitle: 'សេវាកម្ម និងធនធាន',
      colSupportTitle: 'ជំនួយ និងទំនាក់ទំនង',
      colLegalTitle: 'ច្បាប់ និងសុវត្ថិភាព',
      colConnectTitle: 'ការតភ្ជាប់ជាសកល',
      linkAbout: 'ទិដ្ឋភាពទូទៅ និងបេសកកម្ម',
      linkDataCenters: 'ហេដ្ឋារចនាសម្ព័ន្ធ ៩ Data Center',
      linkEsg: 'ESG និងស្តង់ដារបៃតង',
      linkCsr: 'ទំនួលខុសត្រូវសង្គម (CSR)',
      linkCertifications: 'វិញ្ញាបនប័ត្រ និងពានរង្វាន់',
      linkPress: 'សេចក្តីប្រកាសព័ត៌មាន',
      linkCareers: 'ឱកាសការងារ',
      linkServiceCatalog: 'កាតាឡុកសេវាកម្មឌីជីថល',
      linkPricingCenter: 'មជ្ឈមណ្ឌលគណនាតម្លៃ',
      linkDocs: 'ឯកសារបច្ចេកទេស (Docs)',
      linkDcColocation: 'សេវាកម្ម Colocation',
      linkPartners: 'ប្រព័ន្ធអេកូឡូស៊ីដៃគូ',
      linkSalesContact: 'ទាក់ទងផ្នែកលក់',
      linkSupportTicket: 'ផ្ញើសំបុត្រស្នើសុំជំនួយ',
      linkFaq: 'សំណួរដែលសួរញឹកញាប់ (FAQ)',
      linkTerms: 'លក្ខខណ្ឌនៃសេវាកម្ម',
      linkPrivacy: 'គោលការណ៍ឯកជនភាព',
      linkSla: 'កិច្ចព្រមព្រៀងកម្រិតសេវាកម្ម (SLA)',
      linkSecurityCompliance: 'ការអនុលោមតាមសុវត្ថិភាពព័ត៌មាន',
      cookieSettings: 'ការកំណត់ Cookie',
      headquarters: '6th floor, Royal K Plaza building, #234 Mao Tse Tong Blvd, Tumnob Tuek, Boeng Keng Kang, Phnom Penh, Cambodia',
      hanoiBranch: 'Email: support@vcloudia.com',
      hcmBranch: 'Website: https://vcloudia.com',
      danangBranch: 'Operated by Viettel (Cambodia) Pte. Ltd. (Metfone)',
      contactCenter: 'Hotline: +855 888 55 66 08 • Email: support@vcloudia.com',
    },
    modals: {
      quoteTitle: 'ស្នើសុំតម្លៃ និងការប្រឹក្សាសម្រាប់សហគ្រាស',
      quoteSubtitle: 'សូមបំពេញតម្រូវការរបស់អ្នក ដើម្បីទទួលបានការប៉ាន់ស្មានតម្លៃលម្អិត',
      registerTitle: 'ចុះឈ្មោះគណនី Viettel IDC Cloud Portal',
      registerSubtitle: 'ទទួលបានបទពិសោធន៍វេទិកា Cloud ឈានមុខគេនៅអាស៊ីអាគ្នេយ៍',
      chatWelcome: 'សួស្តី! ខ្ញុំគឺ ViDa - ជំនួយការនិម្មិត Viettel IDC។ តើខ្ញុំអាចជួយអ្នកយ៉ាងដូចម្តេចនៅថ្ងៃនេះ?',
      chatInputPlaceholder: 'វាយបញ្ចូលសំណួររបស់អ្នកនៅទីនេះ...',
      send: 'ផ្ញើ',
      cancel: 'បោះបង់',
      confirm: 'បញ្ជាក់',
    },
  },
};

/**
 * Helper to get active translations for any language code
 */
export function getTranslation(langCode: string = 'vn'): Translations {
  const norm = (langCode || 'vn').toLowerCase();
  if (norm.startsWith('fr')) {
    return {
      ...TRANSLATIONS.en,
      nav: {
        ...TRANSLATIONS.en.nav,
        services: 'Services',
        solutions: 'Solutions',
        pricing: 'Tarifs',
        promotions: 'Offres',
        resources: 'Ressources',
        partners: 'Partenaires',
        about: 'À propos',
        contact: 'Contact',
        requestQuote: 'Demander un devis',
        login: 'Connexion',
        register: 'S\'inscrire',
        searchPlaceholder: 'Rechercher services, solutions, documentation...',
        quickSearch: 'Recherche rapide',
        viewAllServices: 'Tous les services',
        viewAllSolutions: 'Toutes les solutions',
        needConsulting: 'Besoin de conseils en architecture ?',
        callHotline: 'Hotline 24/7',
        hotlineLabel: 'Ligne directe entreprise 24/7',
        support247: 'Support technique 24/7/365',
        allRightsReserved: 'Copyright © Viettel IDC. Tous droits réservés.',
        freeTrial: 'Essai gratuit',
        exploreNow: 'Explorer',
        learnMore: 'En savoir plus',
        closeMenu: 'Fermer le menu',
      },
      hero: {
        ...TRANSLATIONS.en.hero,
        eyebrow: 'PARTENARIAT AVEC LES ENTREPRISES POUR L\'IA',
        headlinePart1: 'Concrétisez vos',
        headlineHighlight: 'idées d\'IA',
        headlinePart2: 'avec une infrastructure cloud optimisée',
        description: 'Découvrez la puissance de la plateforme d\'accélération d\'IA Qualcomm sur le cloud Viettel IDC.',
        ctaTrial: 'Essai gratuit d\'un mois',
        ctaLearnMore: 'En savoir plus',
      },
    };
  }
  if (norm.startsWith('es')) {
    return {
      ...TRANSLATIONS.en,
      nav: {
        ...TRANSLATIONS.en.nav,
        services: 'Servicios',
        solutions: 'Soluciones',
        pricing: 'Precios',
        promotions: 'Promociones',
        resources: 'Recursos',
        partners: 'Socios',
        about: 'Acerca de',
        contact: 'Contacto',
        requestQuote: 'Solicitar cotización',
        login: 'Iniciar sesión',
        register: 'Registrarse',
        searchPlaceholder: 'Buscar servicios, soluciones, documentación...',
        quickSearch: 'Búsqueda rápida',
        viewAllServices: 'Ver todos los servicios',
        viewAllSolutions: 'Ver todas las soluciones',
        needConsulting: '¿Necesita asesoramiento de arquitectura?',
        callHotline: 'Línea directa 24/7',
        hotlineLabel: 'Línea directa empresarial 24/7',
        support247: 'Soporte técnico 24/7/365',
        allRightsReserved: 'Copyright © Viettel IDC. Todos los derechos reservados.',
        freeTrial: 'Prueba gratuita',
        exploreNow: 'Explorar ahora',
        learnMore: 'Más información',
        closeMenu: 'Cerrar menú',
      },
      hero: {
        ...TRANSLATIONS.en.hero,
        eyebrow: 'ALIANZA CON EMPRESAS PARA IMPULSAR LA IA',
        headlinePart1: 'Haga realidad sus',
        headlineHighlight: 'ideas de IA',
        headlinePart2: 'con infraestructura cloud optimizada',
        description: 'Descubra la potencia de la plataforma de aceleración de IA de Qualcomm en la nube de Viettel IDC.',
        ctaTrial: 'Prueba gratuita de 1 mes',
        ctaLearnMore: 'Más información',
      },
    };
  }
  if (norm.startsWith('en')) return TRANSLATIONS.en;
  if (norm.startsWith('la') || norm.startsWith('lo')) return TRANSLATIONS.la;
  if (norm.startsWith('ph') || norm.startsWith('fil')) return TRANSLATIONS.ph;
  if (norm.startsWith('mm') || norm.startsWith('my')) return TRANSLATIONS.mm;
  if (norm.startsWith('kh') || norm.startsWith('km')) return TRANSLATIONS.kh;
  return TRANSLATIONS.vn;
}
