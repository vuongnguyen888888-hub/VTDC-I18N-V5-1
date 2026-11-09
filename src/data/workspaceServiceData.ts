import { ServiceDetailConfig } from '../types/serviceDetail';

export const VIETTEL_WORKSPACE_SERVICE_DATA: ServiceDetailConfig = {
  id: 'workspace',
  sku: 'SVC-WS-01',
  pillar: 'digital-workplace',
  pageTitle: 'Viettel Workspace – Nền Tảng Làm Việc Số Toàn Diện Cho Doanh Nghiệp | Viettel IDC',

  // STICKY NAVIGATION ITEMS
  navItems: [
    { id: 'overview', label: 'Tổng quan', href: '#overview', sectionId: 'overview', order: 1, enabled: true },
    { id: 'features', label: 'Tính năng', href: '#features', sectionId: 'features', order: 2, enabled: true },
    { id: 'benefits', label: 'Lợi ích', href: '#benefits', sectionId: 'benefits', order: 3, enabled: true },
    { id: 'use-cases', label: 'Kịch bản', href: '#use-cases', sectionId: 'use-cases', order: 4, enabled: true },
    { id: 'faq', label: 'Hỏi đáp', href: '#faq', sectionId: 'faq', order: 5, enabled: true },
    { id: 'docs-support', label: 'Tài liệu & Hỗ trợ', href: '#docs-support', sectionId: 'docs-support', order: 6, enabled: true },
  ],

  // SECTION 0: HERO SECTION (Mở đầu & Định vị giá trị)
  hero: {
    breadcrumb: [
      { name: 'Trang chủ', path: '/' },
      { name: 'Dịch vụ', path: '/services' },
      { name: 'Ứng dụng Doanh nghiệp', path: '/services/digital-workplace' },
      { name: 'Viettel Workspace' },
    ],
    eyebrow: 'NỀN TẢNG LÀM VIỆC SỐ TOÀN DIỆN & TẬP TRUNG CHO DOANH NGHIỆP',
    headline: 'Viettel Workspace – Nền Tảng Làm Việc Số Toàn Diện Cho Doanh Nghiệp, Triển Khai Linh Hoạt Theo Nhu Cầu',
    subheading: 'Nền tảng làm việc số tập trung tích hợp trọn bộ công cụ cốt lõi: Web Hosting, Email doanh nghiệp, Cloud Drive, Office trực tuyến và Quản lý công việc (Task Management). Vận hành vững chắc trên cụm hạ tầng Data Center chuẩn quốc tế ANSI/TIA-942 Tier III của Viettel IDC, giúp tối ưu chi phí đầu tư và tuân thủ tuyệt đối quy định an toàn dữ liệu tại Việt Nam.',
    primaryCta: {
      text: 'Nhận Tư Vấn Ngay',
      action: 'quote',
    },
    secondaryCta: {
      text: 'Khám Phá Tính Năng',
      action: 'features',
    },
    statRow: [
      {
        number: 'TIA-942 Tier III',
        label: 'Chuẩn Quốc Tế',
        desc: 'Trung tâm dữ liệu Viettel IDC đạt chuẩn quốc tế khắt khe',
      },
      {
        number: 'All-in-One',
        label: '5 Công Cụ Cốt Lõi',
        desc: 'Trọn bộ 5 công cụ: Hosting, Email, Drive, Office & Tasks',
      },
      {
        number: '100% In-Country',
        label: 'Chủ Quyền Dữ Liệu',
        desc: 'Lưu trữ dữ liệu an toàn tại Việt Nam, đáp ứng pháp lý',
      },
      {
        number: '24/7/365 Support',
        label: 'Hỗ Trợ Kỹ Thuật',
        desc: 'Đội ngũ kỹ sư chuyên môn cao giám sát và hỗ trợ kỹ thuật liên tục',
      },
    ],
  },

  // SECTION 1: TỔNG QUAN DỊCH VỤ (#overview - Nền Trắng #FFFFFF)
  overview: {
    eyebrow: 'TỔNG QUAN GIẢI PHÁP',
    headline: 'Nền Tảng Làm Việc Số Hợp Nhất & Tối Ưu Vận Hành Doanh Nghiệp',
    leftDescription: [
      'Viettel Workspace là nền tảng làm việc số tập trung, tích hợp sẵn các công cụ: Hosting, Email, Drive, Office và Task Management. Giải pháp giúp loại bỏ sự rời rạc trong vận hành, cho phép doanh nghiệp dễ dàng quản lý dữ liệu và cộng tác từ xa trên mọi thiết bị, đồng thời tối ưu hóa chi phí đầu tư. Sở hữu hạ tầng trung tâm dữ liệu đạt tiêu chuẩn ANSI/TIA-942 Tier III từ Viettel IDC, hệ thống đảm bảo không gian làm việc số luôn vận hành thông suốt, an toàn và đáp ứng hoàn hảo các quy định pháp luật về lưu trữ dữ liệu trong nước.',
    ],
    architectureAscii: `+-------------------------------------------------------------------------+
|                  NGƯỜI DÙNG DOANH NGHIỆP / THIẾT BỊ ĐẦU CUỐI             |
|          (PC / Laptop / Tablet / Smartphone - Web Browser & App)        |
+-------------------------------------------------------------------------+
                                     │ (Kết nối bảo mật SSL/TLS đa kênh)
                                     ▼
+-------------------------------------------------------------------------+
|                    VIETTEL WORKSPACE UNIFIED PLATFORM                   |
| ┌───────────────┬──────────────┬──────────────┬──────────────┬────────┐ |
| │  Web Hosting  │ Email Domain │ Viettel Drive│ Online Office│  Tasks │ |
| └───────────────┴──────────────┴──────────────┴──────────────┴────────┘ |
+-------------------------------------------------------------------------+
                                     │
                                     ▼
+-------------------------------------------------------------------------+
|           HẠ TẦNG DATA CENTER VIETTEL IDC (TIA-942 TIER III)            |
| ├── Lưu trữ phân tán, phân quyền IAM & Mã hóa bảo mật dữ liệu           |
| ├── Cổng Antivirus / Antispam Gateway & Giám sát vận hành 24/7/365      |
| └── Đáp ứng 100% quy định lưu trữ dữ liệu tại lãnh thổ Việt Nam         |
+-------------------------------------------------------------------------+`,
    highlights: [
      {
        title: 'Trọn bộ công cụ làm việc tập trung',
        description: 'Kết nối liền mạch các tác vụ từ lưu trữ, gửi nhận email đến soạn thảo và theo dõi tiến độ công việc.',
      },
      {
        title: 'Triển khai theo module',
        description: 'Tự do tùy biến quy mô từng công cụ và nâng cấp không ảnh hưởng tới tiến trình hoạt động hiện tại.',
      },
      {
        title: 'Đảm bảo chủ quyền số',
        description: 'Hệ thống đặt tại Data Center Việt Nam, tuân thủ nghiêm ngặt Luật An ninh mạng và các tiêu chuẩn bảo mật.',
      },
      {
        title: 'Đồng bộ đa nền tảng',
        description: 'Hỗ trợ truy cập và xử lý tài liệu đồng thời trên máy tính, máy tính bảng và điện thoại mọi lúc, mọi nơi.',
      },
    ],
  },

  // SECTION 3: TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET (#features - Nền Trắng #FFFFFF)
  features: {
    eyebrow: 'TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET',
    headline: 'Năng Lực Vận Hành & Tính Năng Chuyên Sâu Của Viettel Workspace',
    cards: [
      {
        id: 'feat-hosting',
        title: 'Web Hosting hiệu năng cao, sẵn sàng vận hành',
        description: 'Hỗ trợ đa dạng hệ điều hành (Windows/Linux), tương thích đa ngôn ngữ lập trình và cơ sở dữ liệu phổ biến; đi kèm gói SSL cơ bản giúp tăng cường bảo mật website.',
      },
      {
        id: 'feat-email',
        title: 'Email doanh nghiệp theo tên miền riêng',
        description: 'Nâng cao uy tín và độ chuyên nghiệp với hệ thống Email Hosting theo Domain riêng (vd: @tencongty.com), tích hợp công nghệ chống spam/virus hai chiều, đảm bảo giao tiếp thông suốt.',
      },
      {
        id: 'feat-drive-office',
        title: 'Lưu trữ & Cộng tác trực tuyến (Drive & Office)',
        description: 'Chia sẻ dữ liệu bảo mật, đồng chỉnh sửa văn bản, bảng tính theo thời gian thực; tích hợp lịch làm việc và quản lý tác vụ (Task Management) giúp tăng cường tính phối hợp nhóm.',
      },
      {
        id: 'feat-access-iam',
        title: 'Quản trị truy cập & Phân quyền chặt chẽ',
        description: 'Cho phép phân quyền linh hoạt theo người dùng, phòng ban hoặc nhóm dự án; kiểm soát quyền đọc/ghi/xóa dữ liệu, loại bỏ hoàn toàn nguy cơ rò rỉ thông tin nội bộ.',
      },
    ],
    specTableTitle: 'Bảng Thông Số Kỹ Thuật (Technical Spec Table)',
    specs: [
      {
        category: 'Kiến trúc nền tảng',
        details: 'Nền tảng làm việc số hợp nhất (All-in-One Cloud Workspace)',
      },
      {
        category: 'Công cụ tích hợp sẵn',
        details: 'Web Hosting, Email Hosting, Cloud Drive, Online Office, Task Management',
      },
      {
        category: 'Tương thích hệ điều hành',
        details: 'Windows Server, Linux (hỗ trợ đa ngôn ngữ lập trình & CSDL)',
      },
      {
        category: 'Tiêu chuẩn thư điện tử',
        details: 'Email Hosting theo Domain riêng, tích hợp bộ lọc Anti-spam/Anti-virus 2 chiều',
      },
      {
        category: 'Bảo mật kết nối',
        details: 'Tích hợp chứng chỉ SSL cơ bản, mã hóa đường truyền truyền dữ liệu HTTPS',
      },
      {
        category: 'Thiết bị đầu cuối hỗ trợ',
        details: 'PC, Laptop, Tablet, Smartphone (Trình duyệt Web và App chuyên dụng)',
      },
      {
        category: 'Cơ chế phân quyền',
        details: 'Quản trị tài khoản, phân quyền theo User/Nhóm/Phòng ban (Role-based Access)',
      },
      {
        category: 'Hạ tầng Trung tâm dữ liệu',
        details: 'Data Center Viettel IDC đạt chuẩn quốc tế ANSI/TIA-942 Tier III / Rated 3',
      },
      {
        category: 'Quy định lưu trữ dữ liệu',
        details: 'Lưu trữ 100% trong nước, tuân thủ quy định pháp luật Việt Nam',
      },
      {
        category: 'Giám sát & Hỗ trợ kỹ thuật',
        details: 'Giám sát an toàn thông tin và kỹ sư hỗ trợ thường trực 24/7/365',
      },
    ],
  },

  // SECTION 4: LỢI ÍCH DOANH NGHIỆP (#benefits - Nền Xám #F4F4F4)
  benefits: {
    eyebrow: 'LỢI ÍCH DOANH NGHIỆP',
    headline: 'Giá Trị Đột Phá Khi Ứng Dụng Viettel Workspace',
    pillars: [
      {
        title: 'Giải Pháp Làm Việc Trọn Bộ Cho Doanh Nghiệp',
        description: 'Tích hợp đầy đủ các dịch vụ từ hosting, email, lưu trữ, soạn thảo văn bản trực tuyến, quản lý công việc trên nền tảng dịch vụ tập trung của Viettel IDC, loại bỏ hoàn toàn sự phân mảnh công cụ.',
      },
      {
        title: 'Triển Khai Linh Hoạt Theo Nhu Cầu',
        description: 'Lựa chọn và triển khai từng thành phần phù hợp với quy mô và mục tiêu sử dụng, dễ dàng nâng cấp hoặc mở rộng quy mô khi nhu cầu tăng trưởng mà không làm gián đoạn hệ thống.',
      },
      {
        title: 'Cộng Tác Hiệu Quả, Tối Ưu Năng Suất',
        description: 'Tăng cường tính gắn kết nội bộ thông qua các công cụ chia sẻ tài liệu, chỉnh sửa đồng thời và giám sát tiến độ công việc minh bạch theo thời gian thực.',
      },
      {
        title: 'Bảo Mật Tiêu Chuẩn & Tuân Thủ Pháp Lý',
        description: 'Bảo vệ tài sản số với cơ chế mã hóa, phân quyền sâu rộng, lọc mã độc chuyên dụng trên hạ tầng TTDL nội địa đạt chuẩn Tier III, đáp ứng quy chuẩn an toàn thông tin tại Việt Nam.',
      },
    ],
  },

  // SECTION 5: KỊCH BẢN ỨNG DỤNG THỰC TẾ (#use-cases - Nền Trắng #FFFFFF)
  useCases: {
    eyebrow: 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
    headline: 'Kịch Bản Triển Khai Viettel Workspace Tiêu Biểu',
    items: [
      {
        id: 'usecase-sme',
        title: 'Doanh nghiệp Khởi nghiệp & SME',
        context: 'Khởi tạo sự hiện diện trực tuyến nhanh chóng với chi phí tối ưu, quản lý email và website trên một cổng tập trung.',
        solution: 'Kích hoạt ngay gói Web Hosting đi kèm SSL và Email Hosting theo tên miền riêng để giao tiếp chuyên nghiệp với khách hàng.',
      },
      {
        id: 'usecase-hybrid',
        title: 'Mô hình Làm việc Từ xa & Hybrid Work',
        context: 'Cần môi trường chia sẻ tài liệu an toàn, xử lý văn bản và báo cáo tiến độ công việc giữa các nhân sự làm việc tại nhà hoặc văn phòng.',
        solution: 'Tận dụng bộ công cụ Drive, Office trực tuyến và Task Management để quản lý công việc và đồng chỉnh sửa tài liệu mọi lúc, mọi nơi.',
      },
      {
        id: 'usecase-standardization',
        title: 'Tổ chức & Doanh nghiệp Cần Chuẩn Hóa Quản Trị Dữ Liệu',
        context: 'Xóa bỏ tình trạng lưu trữ dữ liệu phân tán trên thiết bị cá nhân gây rủi ro thất thoát bí mật kinh doanh.',
        solution: 'Quy hoạch kho lưu trữ chung trên Viettel Drive, phân quyền chi tiết theo phòng ban và kiểm soát quyền truy cập tập trung.',
      },
    ],
  },

  // SECTION 6: CÂU HỎI THƯỜNG GẶP (#faq - Nền Xám #F4F4F4)
  faq: {
    eyebrow: 'CÂU HỎI THƯỜNG GẶP',
    headline: 'Câu Hỏi Thường Gặp Về Viettel Workspace',
    items: [
      {
        question: 'Doanh nghiệp của tôi có thể nâng cấp hoặc mở rộng Workspace khi nhu cầu tăng không?',
        answer: 'Có. Dịch vụ Viettel Workspace cho phép mở rộng dịch vụ tương ứng với từng thành phần, bao gồm: bổ sung dung lượng lưu trữ (Storage), tăng số lượng người dùng (User), thêm domain (Addon domain) hoặc các tùy chọn như Backup. Việc nâng cấp được thực hiện linh hoạt, nhanh chóng và không ảnh hưởng đến dữ liệu hay hệ thống đang vận hành.',
      },
      {
        question: 'Dịch vụ Viettel Workspace có hỗ trợ sử dụng trên nhiều thiết bị không?',
        answer: 'Có. Người dùng có thể truy cập và sử dụng các ứng dụng (Email, Drive…) trên nhiều thiết bị như máy tính, điện thoại, tablet thông qua trình duyệt web hoặc ứng dụng tương ứng, đảm bảo làm việc mọi lúc, mọi nơi.',
      },
      {
        question: 'Tôi có thể sử dụng tên miền riêng cho email doanh nghiệp không?',
        answer: 'Có. Doanh nghiệp có thể sử dụng custom domain (vd: @tencongty.com) để thiết lập email, giúp tăng tính chuyên nghiệp và nhận diện thương hiệu khi giao tiếp với khách hàng và đối tác. Hệ thống hỗ trợ cấu hình domain và các bản ghi DNS liên quan.',
      },
      {
        question: 'Dữ liệu trên Viettel Workspace có được bảo mật không?',
        answer: 'Có. Dữ liệu được lưu trữ tại hệ thống Data Center của Viettel IDC đặt tại Việt Nam, đáp ứng các tiêu chuẩn an toàn thông tin và tuân thủ quy định pháp luật về lưu trữ dữ liệu. Hệ thống được trang bị các cơ chế bảo mật như phân quyền truy cập, mã hóa, chống spam/virus (đối với email) và giám sát vận hành 24/7.',
      },
    ],
  },

  // SECTION 7: KHỐI CHUYỂN ĐỔI CHÍNH (Bottom CTA - Nền Đỏ var(--vidc-color-brand-red))
  footerCta: {
    headline: 'Khởi Lập Môi Trường Làm Việc Số Chuyên Nghiệp Cùng Viettel Workspace',
    subtext: 'Hợp nhất công cụ, tối ưu chi phí vận hành và bảo vệ an toàn tuyệt đối dữ liệu doanh nghiệp của bạn ngay hôm nay.',
    hotline: '1800 8088',
    email: 'support@viettelidc.com.vn | sales@viettelidc.com.vn',
    website: 'https://viettelidc.com.vn',
    buttonText: 'NHẬN TƯ VẤN GIẢI PHÁP NGAY',
  },

  // SECTION 8: TÀI LIỆU KỸ THUẬT & TRỢ GIÚP (#docs-support - Nền Xám #F4F4F4)
  docsSupport: {
    eyebrow: 'TÀI NGUYÊN KỸ THUẬT & TRỢ GIÚP',
    headline: 'Tài Nguyên Kỹ Thuật & Cổng Trợ Giúp Vận Hành',
    documentation: {
      title: 'Tài Liệu Hướng Dẫn Cấu Hình (User Guides)',
      desc: 'Cung cấp tài liệu hướng dẫn thiết lập tên miền riêng, cấu hình DNS bản ghi Email, kích hoạt chứng chỉ SSL và phân quyền tài nguyên làm việc nhóm.',
      linkText: 'Xem Hướng Dẫn Kỹ Thuật →',
    },
    supportCenter: {
      title: 'Trung Tâm Hỗ Trợ Kỹ Thuật 24/7/365',
      desc: 'Đội ngũ chuyên gia CNTT và kỹ sư Viettel IDC luôn sẵn sàng giải đáp thắc mắc và hỗ trợ xử lý sự cố trực tiếp qua Hotline 1800 8088.',
      linkText: 'Gửi Yêu Cầu Hỗ Trợ →',
    },
  },

  // SECTION 9: HỆ SINH THÁI DỊCH VỤ LIÊN QUAN (Nền Trắng #FFFFFF)
  relatedProducts: {
    eyebrow: 'HỆ SINH THÁI DỊCH VỤ LIÊN QUAN',
    headline: 'Hệ Sinh Thái Giải Pháp Số Bổ Trợ Đề Xuất',
    items: [
      {
        title: 'Viettel Domain',
        sku: 'SVC-DOM-01',
        description: 'Đăng ký tên miền quốc gia (.vn) và quốc tế (.com, .net...) giúp nhận diện thương hiệu cho email và website.',
        path: '/services/domain-hosting/domain',
      },
      {
        title: 'Viettel SSL',
        sku: 'SVC-SSL-01',
        description: 'Chứng chỉ số bảo mật đường truyền HTTPS cho cổng làm việc trực tuyến và website doanh nghiệp.',
        path: '/services/security/ssl',
      },
      {
        title: 'Viettel Web Hosting',
        sku: 'SVC-HOST-01',
        description: 'Gói lưu trữ chuyên biệt tốc độ cao cho website doanh nghiệp trên hạ tầng điện toán đám mây.',
        path: '/services/domain-hosting/web-hosting',
      },
      {
        title: 'Viettel Email Hosting',
        sku: 'SVC-MAIL-01',
        description: 'Hệ thống thư điện tử chuyên dụng theo tên miền riêng với bộ lọc thư rác và virus đa tầng.',
        path: '/services/domain-hosting/email-hosting',
      },
      {
        title: 'Viettel Drive',
        sku: 'SVC-DRIVE-01',
        description: 'Không gian lưu trữ, đồng bộ và chia sẻ dữ liệu trực tuyến an toàn theo chuẩn quốc tế.',
        path: '/services/digital-workplace/drive',
      },
    ],
  },
};
