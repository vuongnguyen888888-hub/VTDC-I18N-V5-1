import { ServiceDetailConfig } from '../types/serviceDetail';

export const STANDARD_SERVICES_DATA_PART3: Record<string, ServiceDetailConfig> = {
  // =========================================================================
  // 13. VIETTEL CLOUD DESKTOP (DaaS)
  // =========================================================================
  'cloud-desktop': {
    id: 'cloud-desktop',
    sku: 'SVC-024',
    pillar: 'compute',
    pageTitle: 'Viettel Cloud Desktop (DaaS) – Không Gian Làm Việc Số Linh Hoạt & An Toàn | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Điện toán Đám mây', path: '/services/compute' },
        { name: 'Viettel Cloud Desktop (DaaS)' },
      ],
      eyebrow: 'DỊCH VỤ MÁY TÍNH ĐỂ BÀN ẢO ĐÁM MÂY DOANH NGHIỆP THẾ HỆ MỚI',
      headline: 'Viettel Cloud Desktop (DaaS) – Không Gian Làm Việc Số Linh Hoạt, Quản Trị Tập Trung & An Toàn Tuyệt Đối',
      subheading: 'Giải pháp cung cấp máy tính desktop Windows dưới dạng dịch vụ (Desktop as a Service) trên nền tảng đám mây của Viettel IDC. Tối ưu chi phí đầu tư phần cứng, đơn giản hóa quản trị hệ thống và trao quyền cho nhân sự làm việc liền mạch mọi lúc, mọi nơi, trên mọi thiết bị với độ sẵn sàng cao.',
      primaryCta: { text: 'Dùng Thử Miễn Phí / Đăng Ký Ngay', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá Gói Dịch Vụ', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Tổng Quan Năng Lực Kiến Trúc & Vận Hành Của Viettel Cloud Desktop',
      leftDescription: [
        'Viettel Cloud Desktop (DaaS) được xây dựng trực tiếp trên hạ tầng và nền tảng điện toán đám mây của Viettel IDC, đơn giản hóa quy trình cung cấp máy tính desktop Windows dưới dạng dịch vụ điện toán đám mây hoàn chỉnh. Bộ phận IT doanh nghiệp có thể tiết kiệm tối đa thời gian và chi phí vận hành thông qua cổng quản trị tập trung Horizon Cloud.',
        'Người dùng cuối nâng cao năng suất làm việc vượt trội nhờ không gian làm việc số linh hoạt, cho phép kết nối an toàn vào môi trường làm việc từ bất kỳ thiết bị nào qua Internet. Toàn bộ phiên làm việc chạy trong môi trường sandbox cô lập trên Cloud, tách biệt hoàn toàn với thiết bị đầu cuối, bảo vệ tối đa dữ liệu doanh nghiệp.',
      ],
      highlights: [
        {
          title: 'Portal quản trị tập trung (Horizon Cloud)',
          description: 'Quản lý máy ảo người dùng, user truy cập, tiến trình, cấp phát và giám sát tài nguyên RAM/CPU/IOPS/Bandwidth trên một giao diện duy nhất.',
        },
        {
          title: 'Kết nối đa nền tảng linh hoạt',
          description: 'Hỗ trợ ứng dụng truy cập cài đặt trên Windows, macOS, Linux, iOS, Android hoặc truy cập trực tiếp qua trình duyệt web hỗ trợ HTML5.',
        },
        {
          title: 'Bảo mật & Kênh truyền chuyên dụng',
          description: 'Mỗi khách hàng được cung cấp kèm hệ thống tường lửa (Routing, NAT, VPN, Load Balancing) cùng đường truyền Internet trong nước và quốc tế tốc độ cao.',
        },
        {
          title: 'Dễ dàng tích hợp hệ thống',
          description: 'Kết nối mượt mà với các hệ thống CNTT hiện hữu của doanh nghiệp như Active Directory, DNS Server, Email Server và File Server.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
      headline: 'Bảng Giá Gói Dịch Vụ Viettel Cloud Desktop Tiêu Chuẩn',
      note: 'Quý khách hàng đăng ký sử dụng theo cách chọn cấu hình có sẵn hoặc tùy biến theo nhu cầu riêng. Bảng giá niêm yết chưa bao gồm thuế VAT (nếu có).',
      tables: [
        {
          id: 'daas_pricing_table',
          title: 'BẢNG GIÁ DỊCH VỤ VIETTEL CLOUD DESKTOP THEO TỔNG TÀI NGUYÊN',
          columns: [
            { header: 'Tên Gói Dịch Vụ', key: 'name', width: '25%' },
            { header: 'Năng Lực vCPU', key: 'vcpu', width: '18%', align: 'center' },
            { header: 'Bộ Nhớ RAM', key: 'ram', width: '18%', align: 'center' },
            { header: 'Lưu Trữ SSD', key: 'ssd', width: '18%', align: 'center' },
            { header: 'Phí Duy Trì / Tháng', key: 'price', width: '21%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'Bronze', vcpu: '40 vCPU', ram: '40 GB RAM', ssd: '1.024 GB SSD', price: '7.900.000 đ' },
            { name: 'Silver', vcpu: '100 vCPU', ram: '100 GB RAM', ssd: '2.560 GB SSD', price: '19.990.000 đ' },
            { name: 'Gold', vcpu: '200 vCPU', ram: '200 GB RAM', ssd: '5.120 GB SSD', price: '39.990.000 đ' },
            { name: 'Platinum', vcpu: '400 vCPU', ram: '400 GB RAM', ssd: '10.240 GB SSD', price: '78.990.000 đ' },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp cần mở rộng cấu hình vượt khung tiêu chuẩn hoặc tùy chỉnh tỷ lệ vCPU/RAM/SSD riêng biệt?',
        buttonText: 'Yêu Cầu Cấu Hình Tùy Chỉnh & Báo Giá',
        notesPlaceholder: 'Đăng ký nhận tư vấn và báo giá gói Viettel Cloud Desktop cấu hình theo yêu cầu',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG NỔI BẬT',
      headline: 'Năng Lực Công Nghệ & Tính Năng Quản Trị Chuyên Sâu Của DaaS',
      cards: [
        {
          id: 'ft-1',
          title: 'Thiết Lập & Mở Rộng Môi Trường Chủ Động',
          description: 'Hỗ trợ khởi tạo, tùy biến khuôn mẫu (Template Master Image), triển khai nhanh hàng trăm máy trạm ảo hóa chỉ trong vài cú click chuột, mở rộng tài nguyên tức thì.',
        },
        {
          id: 'ft-2',
          title: 'Quản Trị Dịch Vụ Tập Trung & Hỗ Trợ Từ Xa',
          description: 'Phân quyền ủy quyền quản trị chi tiết, hỗ trợ kỹ thuật viên IT can thiệp Remote Desktop hỗ trợ người dùng cuối kịp thời ngay trên web portal.',
        },
        {
          id: 'ft-3',
          title: 'Giám Sát Tài Nguyên Thời Gian Thực',
          description: 'Báo cáo chi tiết tải CPU, dung lượng bộ nhớ RAM, lưu lượng băng thông mạng và hiệu suất đọc ghi ổ đĩa IOPS theo thời gian thực trực quan.',
        },
        {
          id: 'ft-4',
          title: 'Truy Cập Đa Kênh Mọi Lúc Mọi Nơi',
          description: 'Tương thích hoàn hảo ứng dụng Horizon Client trên thiết bị chuyên dụng và trình duyệt web HTML5, không cần cài đặt phần mềm phức tạp.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật Viettel Cloud Desktop',
      specs: [
        { category: 'Hệ điều hành máy tính ảo', details: 'Windows 10 / Windows 11 Enterprise hoặc Windows Server chuyên dụng' },
        { category: 'Giao thức & Phương thức truy cập', details: 'Giao thức hiển thị Blast Extreme, PCoIP tối ưu độ trễ và hỗ trợ truy cập HTML5 Web' },
        { category: 'Thiết bị đầu cuối tương thích', details: 'PC, Laptop, Thin Client, Zero Client, Tablet, Smartphone (Windows, macOS, Linux, iOS, Android)' },
        { category: 'Tính năng an ninh mạng đi kèm', details: 'Tường lửa Edge Gateway chuyên dụng (Routing, NAT, IPsec/SSL VPN, Load Balancing)' },
        { category: 'Kết nối mạng & Băng thông', details: 'Trang bị sẵn IP Public và kết nối mạng nội bộ Private LAN tốc độ Gigabit ổn định cao' },
        { category: 'Khả năng tích hợp hệ thống', details: 'Đồng bộ trực tiếp với Active Directory (AD), DNS Server, LDAP và File Server hiện có' },
        { category: 'Tiêu chuẩn Trung tâm Dữ liệu', details: 'Vận hành tại chuỗi Data Center chuẩn quốc tế TIA-942 Rated 3 của Viettel IDC' },
        { category: 'Chứng chỉ An toàn & Vận hành', details: 'ISO 27001, ISO 9001, ISO 27017, An toàn thông tin Cấp độ 3 Nhà nước' },
        { category: 'Độ sẵn sàng dịch vụ (SLA)', details: 'Cam kết Uptime đạt 99.99% dịch vụ hạ tầng điện toán đám mây' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH CỐT LÕI',
      headline: 'Giá Trị Vượt Trội Dành Cho Doanh Nghiệp Số Khi Triển Khai DaaS',
      pillars: [
        {
          number: '01',
          title: 'Quản Lý Đơn Giản & Tập Trung',
          description: 'Cắt giảm tối đa nhân lực và thời gian bảo trì máy trạm vật lý phân tán, cập nhật bản vá bảo mật và phần mềm chỉ từ một điểm duy nhất.',
        },
        {
          number: '02',
          title: 'Tích Hợp Sâu Rộng Hệ Thống CNTT',
          description: 'Dễ dàng kết nối với hệ thống người dùng doanh nghiệp Active Directory, kế thừa toàn bộ chính sách bảo mật nội bộ hiện hành.',
        },
        {
          number: '03',
          title: 'Giảm Thiểu Chi Phí & Rủi Ro Vận Hành',
          description: 'Tiết kiệm chi phí đầu tư phần cứng ban đầu (CapEx), loại bỏ chi phí sửa chữa hỏng hóc vật lý và nâng cao tuổi thọ máy tính trạm.',
        },
        {
          number: '04',
          title: 'Một Desktop Trên Mọi Thiết Bị',
          description: 'Chuyển đổi liền mạch giữa máy tính bàn văn phòng, laptop cá nhân và máy tính bảng mà không làm đứt đoạn tiến trình công việc.',
        },
        {
          number: '05',
          title: 'Tiếp Nối Công Việc 24/7 Không Gián Đoạn',
          description: 'Duy trì trạng thái làm việc liên tục ngay cả khi thiết bị đầu cuối bị sự cố phần cứng hoặc mất kết nối mạng tạm thời.',
        },
        {
          number: '06',
          title: 'Tăng Cường An Toàn Tuyệt Đối',
          description: 'Không lưu dữ liệu nhạy cảm trên máy tính người dùng, kiểm soát chặt chẽ chính sách sao chép, USB và rò rỉ thông tin.',
        },
      ],
    },
    useCases: {
      eyebrow: 'ỨNG DỤNG THỰC TẾ',
      headline: 'Kịch Bản & Bài Toán Ứng Dụng Thực Tế Của Viettel Cloud Desktop',
      items: [
        {
          id: 'case-1',
          title: 'Quản lý nguồn nhân lực Outsource & Đơn vị phát triển phần mềm',
          context: 'Doanh nghiệp thuê ngoài lập trình viên hoặc chuyên gia tư vấn cần truy cập vào mã nguồn và hệ thống cơ sở dữ liệu nội bộ, đối mặt nguy cơ thất thoát dữ liệu và khó khăn trong việc thu hồi quyền truy cập khi kết thúc hợp đồng.',
          solution: 'Viettel Cloud Desktop cấp phát môi trường máy tính ảo độc lập có cài sẵn công cụ phát triển cần thiết, khóa cổng USB, chặn copy dữ liệu ra ngoài thiết bị cá nhân và thu hồi tài nguyên ngay lập tức khi hoàn thành dự án.',
        },
        {
          id: 'case-2',
          title: 'Tách biệt môi trường mạng & Ngăn chặn rò rỉ dữ liệu nhạy cảm',
          context: 'Các tổ chức tài chính, ngân hàng, viễn thông và cơ quan chính phủ cần cách ly tuyệt đối luồng dữ liệu nghiệp vụ quan trọng khỏi mạng Internet công cộng để phòng tránh tấn công mạng và mã độc tống tiền (Ransomware).',
          solution: 'Triển khai mô hình máy ảo Cloud Desktop hoạt động hoàn toàn trên mạng nội bộ được kiểm soát nghiêm ngặt. Người dùng truy cập Internet qua máy ảo cách ly, bảo vệ 100% mạng lõi của đơn vị an toàn.',
        },
      ],
    },
    faq: {
      eyebrow: 'HỎI ĐÁP DỊCH VỤ',
      headline: 'Các Câu Hỏi Thường Gặp Về Viettel Cloud Desktop (DaaS)',
      items: [
        {
          question: 'Viettel Cloud Desktop khác gì so với hình thức Remote Desktop (RDP) thông thường?',
          answer: 'RDP thông thường chỉ là giao thức kết nối từ xa vào máy chủ vật lý hoặc máy tính đang bật tại văn phòng. Trong khi đó, Viettel Cloud Desktop là giải pháp DaaS hoàn chỉnh chạy trên hạ tầng đám mây phân tán chuẩn Enterprise, cung cấp cổng quản trị tập trung Horizon Cloud, tự động sao lưu, mã hóa đường truyền chuyên dụng, cân bằng tải và cam kết SLA 99.99% không phụ thuộc vào máy trạm vật lý.',
        },
        {
          question: 'Người dùng có thể sử dụng thiết bị cá nhân (BYOD) để làm việc không?',
          answer: 'Có. Nhân viên có thể sử dụng bất kỳ thiết bị cá nhân nào như laptop, máy tính bảng hoặc smartphone để đăng nhập vào Cloud Desktop qua ứng dụng hoặc trình duyệt HTML5. Toàn bộ dữ liệu doanh nghiệp được xử lý và lưu trữ tập trung tại Datacenter của Viettel IDC, không lưu bất kỳ file nào trên thiết bị cá nhân, đảm bảo an toàn tuyệt đối.',
        },
        {
          question: 'Viettel Cloud Desktop có tích hợp được với Active Directory hiện tại của công ty chúng tôi không?',
          answer: 'Hoàn toàn được. Viettel Cloud Desktop hỗ trợ kết nối mạng riêng L2/L3 (Direct Connect / VPN) trực tiếp về Data Center hoặc trụ sở doanh nghiệp của quý khách, cho phép máy ảo DaaS tham gia Domain Controller (Active Directory) hiện hành và thừa hưởng đầy đủ Group Policy (GPO).',
        },
        {
          question: 'Nếu kết nối Internet của người dùng bị rớt thì phiên làm việc có bị mất dữ liệu không?',
          answer: 'Không. Do máy tính desktop ảo chạy 24/7 trên Cloud của Viettel IDC, khi kết nối Internet của thiết bị đầu cuối bị gián đoạn, phiên làm việc của bạn vẫn duy trì nguyên vẹn ở trạng thái hiện tại. Ngay khi có mạng trở lại, bạn chỉ cần đăng nhập lại là có thể tiếp tục làm việc bình thường.',
        },
      ],
    },
    footerCta: {
      headline: 'Sẵn Sàng Hiện Đại Hóa Không Gian Làm Việc Cùng Viettel Cloud Desktop?',
      subtext: 'Trải nghiệm giải pháp máy tính để bàn ảo an toàn, linh hoạt, tối ưu chi phí và nâng cao năng suất làm việc cho tổ chức của bạn ngay hôm nay.',
      buttonText: 'Đăng Ký Tư Vấn & Nhận Báo Giá',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU & HỖ TRỢ',
      headline: 'Đồng Hành Cùng Doanh Nghiệp 24/7/365',
      documentation: {
        title: 'Cẩm Nang Cài Đặt & Hướng Dẫn Quản Trị (User Guide & Docs)',
        desc: 'Tài liệu hướng dẫn chi tiết về cấu hình Horizon Client, quản lý template máy ảo, phân quyền người dùng và chính sách bảo mật mạng.',
        linkText: 'Xem tài liệu hướng dẫn kỹ thuật',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Kỹ Thuật Doanh Nghiệp 24/7/365',
        desc: 'Đội ngũ chuyên gia kỹ sư điện toán đám mây Viettel IDC luôn thường trực hỗ trợ giải quyết sự cố, đảm bảo phiên làm việc thông suốt.',
        linkText: 'Yêu cầu hỗ trợ kỹ thuật chuyên sâu',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI GIẢI PHÁP LIÊN QUAN',
      headline: 'Giải Pháp Tích Hợp Hoàn Hảo Cùng Viettel Cloud Desktop',
      items: [
        {
          sku: 'SVC-028',
          title: 'Viettel Hybrid Connect L2/L3',
          description: 'Kênh truyền riêng kết nối máy trạm Cloud Desktop trực tiếp về hạ tầng mạng nội bộ doanh nghiệp với độ trễ siêu thấp.',
          path: '/services/network/cloud-connect',
        },
        {
          sku: 'SVC-050',
          title: 'Bản Quyền Phần Mềm (Licenses)',
          description: 'Cung cấp và cho thuê bản quyền Windows 10/11 Enterprise và Microsoft 365 chính hãng tích hợp sẵn vào Cloud Desktop.',
          path: '/services/digital-workplace/license-leasing',
        },
        {
          sku: 'SVC-065',
          title: 'Viettel Endpoint Security',
          description: 'Giải pháp bảo vệ điểm cuối toàn diện chống virus, mã độc tống tiền ransomware và kiểm soát luồng dữ liệu nhạy cảm.',
          path: '/services/security',
        },
        {
          sku: 'SVC-012',
          title: 'Viettel Cloud Backup',
          description: 'Dịch vụ sao lưu tự động định kỳ cho toàn bộ máy tính ảo DaaS, bảo đảm khôi phục dữ liệu tức thì khi cần thiết.',
          path: '/services/storage',
        },
      ],
    },
  },

  // =========================================================================
  // 14. VIETTEL API GATEWAY (vAPIG)
  // =========================================================================
  'vapig': {
    id: 'vapig',
    sku: 'SVC-038',
    pillar: 'paas-containers',
    pageTitle: 'Viettel API Gateway (vAPIG) – Quản Lý & Bảo Mật API Doanh Nghiệp | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Nền tảng PaaS & Phát triển', path: '/services/compute' },
        { name: 'Viettel API Gateway (vAPIG)' },
      ],
      eyebrow: 'BỘ ĐIỀU KHIỂN & QUẢN LÝ TẬP TRUNG API DOANH NGHIỆP',
      headline: 'Viettel API Gateway (vAPIG) – Quản Lý, Điều Phối & Bảo Mật Toàn Diện Giao Tiếp Giữa Các Ứng Dụng',
      subheading: 'Bộ điều khiển trung gian tối ưu trên nền tảng điện toán đám mây Viettel IDC, giúp các ứng dụng giao tiếp dễ dàng, an toàn và đồng nhất. Đóng vai trò làm trung tâm tiếp nhận, kiểm soát lưu lượng, xác thực người dùng và phân phối yêu cầu chính xác đến các dịch vụ backend với hiệu năng cao và độ trễ tối thiểu.',
      primaryCta: { text: 'Dùng Thử Miễn Phí / Đăng Ký Tư Vấn', action: 'quote' },
      secondaryCta: { text: 'Khám Phá Bảng Giá / Tài Liệu API', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Tổng Quan Kiến Trúc & Cơ Chế Vận Hành Của Viettel API Gateway',
      leftDescription: [
        'Viettel API Gateway (vAPIG) là sản phẩm dịch vụ tối ưu trong việc quản lý và điều phối các API, đóng vai trò như một trung tâm tiếp nhận và xử lý yêu cầu từ phía người dùng đến các dịch vụ backend. Dịch vụ cung cấp một bộ điều khiển trung gian giữa các ứng dụng khác nhau, giúp các ứng dụng giao tiếp một cách dễ dàng và bảo mật.',
        'vAPIG hỗ trợ toàn diện cả HTTP API và REST API, xử lý yêu cầu từ phía client hiệu quả và an toàn. Các tính năng của dịch vụ bao gồm quản lý lưu lượng yêu cầu, cung cấp bộ nhớ đệm, quản lý phiên bản API, xác thực và kiểm soát truy cập bằng JWT token. Nhờ vậy, việc triển khai dịch vụ trên nền tảng điện toán đám mây của Viettel IDC trở nên nhanh chóng và hiệu quả hơn, đồng thời nâng cao tính bảo mật cho toàn bộ hệ thống.',
      ],
      highlights: [
        {
          title: 'Điểm truy cập duy nhất (Single Entrypoint)',
          description: 'Hợp nhất mọi cổng kết nối Microservices vào một endpoint duy nhất, đơn giản hóa việc quản trị và tích hợp từ ứng dụng di động, web và bên thứ ba.',
        },
        {
          title: 'Bảo mật & Kiểm soát toàn diện',
          description: 'Tích hợp xác thực hiện đại OAuth2/OIDC, kiểm tra tính hợp lệ của JWT token, ngăn chặn rò rỉ thông tin hạ tầng backend nhạy cảm.',
        },
        {
          title: 'Tăng tốc độ phản hồi vượt trội',
          description: 'Bộ nhớ đệm (Caching) thông minh cho phép lưu trữ kết quả của các endpoint phản hồi thường xuyên, giảm tải tối đa cho cơ sở dữ liệu và máy chủ ứng dụng.',
        },
        {
          title: 'Dịch chuyển & Mở rộng linh hoạt',
          description: 'Dễ dàng triển khai trên Viettel Public Cloud, cụm tài nguyên chuyên dụng Private Resource hoặc kết nối liên thông Multi-Cloud mở rộng.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
      headline: 'Bảng Giá Dịch Vụ Viettel API Gateway Linh Hoạt & Tối Ưu Chi Phí',
      controls: [
        {
          id: 'env',
          label: 'Môi trường triển khai',
          options: [
            { id: 'public', label: 'Viettel Public Cloud' },
            { id: 'private', label: 'Viettel Private Resource / Multi-Cloud' },
          ],
          defaultSelected: 'public',
        },
        {
          id: 'billing',
          label: 'Chu kỳ thanh toán',
          options: [
            { id: 'monthly', label: 'Theo tháng (PAYG)' },
            { id: 'annual', label: 'Gói cam kết năm (Ưu đãi)' },
          ],
          defaultSelected: 'monthly',
        },
      ],
      note: 'Bảng giá chưa bao gồm thuế VAT (nếu có). Chi phí được tính toán dựa trên số lượng request xử lý và tài nguyên hạ tầng gateway.',
      tables: [
        {
          id: 'vapig_table',
          title: 'BẢNG CÁC GÓI VIETTEL API GATEWAY TIÊU CHUẨN',
          columns: [
            { header: 'Gói Dịch Vụ', key: 'name', width: '20%' },
            { header: 'Đối Tượng Phù Hợp', key: 'target', width: '25%' },
            { header: 'Đặc Điểm & Tính Năng Nổi Bật', key: 'features', width: '35%' },
            { header: 'Hình Thức Cước', key: 'price', width: '20%', align: 'right', isPrice: true },
          ],
          rows: [
            {
              name: 'vAPIG Starter',
              target: 'Dự án thử nghiệm, Startup, môi trường Dev/Test',
              features: 'Hỗ trợ HTTP/REST API, xác thực JWT/API Key, URL Versioning, kiểm soát Throttling cơ bản',
              price: 'Dùng thử / Báo giá',
            },
            {
              name: 'vAPIG Standard (Phổ biến nhất)',
              target: 'Hệ thống Web/App doanh nghiệp, E-commerce vừa và lớn',
              features: 'Tất cả tính năng Starter + Caching nâng cao TTL, chuyển đổi Request/Response JSON, chống DDoS Lớp 7',
              price: 'Báo giá theo nhu cầu',
            },
            {
              name: 'vAPIG Enterprise',
              target: 'Tổ chức tài chính, Ngân hàng, Viễn thông, Siêu ứng dụng',
              features: 'Cụm Dedicated Cluster riêng biệt, tùy biến Plugin bảo mật chuyên sâu, SLA 99.99% & Kỹ sư 24/7',
              price: 'Tư vấn thiết kế riêng',
            },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp có nhu cầu thiết lập API Gateway riêng biệt với lưu lượng hàng triệu request/giây hoặc tích hợp hệ thống Core Banking/Enterprise phức tạp?',
        buttonText: 'Yêu Cầu Tư Vấn Thiết Kế Kiến Trúc & Báo Giá Riêng',
        notesPlaceholder: 'Đăng ký nhận tư vấn kiến trúc giải pháp và báo giá dịch vụ Viettel API Gateway',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG NỔI BẬT',
      headline: 'Năng Lực Công Nghệ & Tính Năng Kỹ Thuật Chuyên Sâu Của vAPIG',
      cards: [
        {
          id: 'ft-1',
          title: 'Định Tuyến Linh Hoạt (Routing & Dispatching)',
          description: 'Định tuyến request thông minh theo đường dẫn URL path, header, method, query parameters hoặc host domain đến các backend microservices chính xác.',
        },
        {
          id: 'ft-2',
          title: 'Tích Hợp Xác Thực Chuyên Sâu (Authentication & Authorization)',
          description: 'Hỗ trợ đa dạng phương thức bảo vệ API: JSON Web Token (JWT) validation, API Keys, Basic Auth, OAuth 2.0 và OpenID Connect mượt mà.',
        },
        {
          id: 'ft-3',
          title: 'Điều Tiết Lưu Lượng Truy Cập (Rate Limiting & Throttling)',
          description: 'Chủ động giới hạn số lượng request theo giây/phút cho từng client IP hoặc tài khoản người dùng, bảo vệ hệ thống backend khỏi quá tải.',
        },
        {
          id: 'ft-4',
          title: 'Bảo Mật Kết Nối & Tường Lửa (TLS Termination & Web Security)',
          description: 'Quản lý tập trung chứng chỉ SSL/TLS, giải mã dữ liệu tại gateway để giảm tải CPU cho máy chủ backend và tích hợp lọc request độc hại.',
        },
        {
          id: 'ft-5',
          title: 'Chuyển Đổi Dữ Liệu Thông Minh (Data Transformation)',
          description: 'Sửa đổi, thêm bớt headers, tham số truy vấn hoặc chuyển đổi cấu trúc payload JSON/XML giữa client và backend tự động.',
        },
        {
          id: 'ft-6',
          title: 'Quản Lý Phiên Bản API (Versioning & Blue-Green)',
          description: 'Dễ dàng quản lý song song nhiều phiên bản API (v1, v2, Canary Release, Blue/Green Deployment) mà không làm gián đoạn người dùng hiện hữu.',
        },
        {
          id: 'ft-7',
          title: 'Bộ Nhớ Đệm (Caching) Tối Ưu Tốc Độ',
          description: 'Lưu trữ đệm kết quả của các endpoint dữ liệu ít thay đổi với cơ chế thời gian sống (TTL) linh hoạt, tăng tốc phản hồi từ mili-giây.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật Viettel API Gateway',
      specs: [
        { category: 'Giao thức API hỗ trợ', details: 'HTTP/1.1, HTTP/2, RESTful API, WebSocket, gRPC' },
        { category: 'Bảo mật kết nối & Truyền dẫn', details: 'TLS 1.2 / TLS 1.3 Termination, mã hóa dữ liệu đầu cuối HTTPS' },
        { category: 'Tiêu chuẩn xác thực & Phân quyền', details: 'JWT Token Validation, API Key, OAuth 2.0, OpenID Connect, HMAC' },
        { category: 'Cơ chế kiểm soát lưu lượng', details: 'Rate Limiting (Token Bucket / Leaky Bucket), Throttling, IP Whitelisting / Blacklisting' },
        { category: 'Quản lý phiên bản API', details: 'Path-based (e.g. /api/v1), Header-based, Query-based, Canary Testing, Blue-Green' },
        { category: 'Khả năng chuyển đổi dữ liệu', details: 'Header Rewriting, Request/Response Payload Transformation (JSON to JSON/XML)' },
        { category: 'Cơ chế Caching dữ liệu', details: 'In-memory Cache tích hợp, cấu hình TTL theo từng Route/Method' },
        { category: 'Hạ tầng TTDL', details: 'Hệ thống Data Center Viettel IDC đạt chuẩn quốc tế TIA-942 Rated 3' },
        { category: 'Tiêu chuẩn ATTT', details: 'Đạt chứng chỉ an ninh thông tin ISO 27001, ISO 27017, PCI DSS và An toàn cấp độ 3' },
        { category: 'Mức độ cam kết chất lượng (SLA)', details: 'Cam kết Uptime đạt tối thiểu 99.99%' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH CỐT LÕI',
      headline: 'Giá Trị Chiến Lược Cho Kiến Trúc Microservices & Chuyển Đổi Số',
      pillars: [
        {
          number: '01',
          title: 'Tăng Cường Bảo Mật Tuyệt Đối',
          description: 'Ẩn toàn bộ địa chỉ IP và cấu trúc nội bộ của hệ thống máy chủ ứng dụng, kiểm soát và xác thực 100% request trước khi vào mạng lõi.',
        },
        {
          number: '02',
          title: 'Tối Ưu Hóa Hiệu Suất Hệ Thống',
          description: 'Giảm tải đáng kể cho các máy chủ backend nhờ giải phóng tác vụ giải mã mã hóa TLS/SSL, xác thực token và phản hồi cache siêu tốc.',
        },
        {
          number: '03',
          title: 'Kết Nối Đa Dạng & Mở Rộng Linh Hoạt',
          description: 'Dễ dàng tích hợp các hệ thống phân tán, hỗ trợ ứng dụng trên nhiều nền tảng đám mây khác nhau mà không phải thay đổi mã nguồn.',
        },
        {
          number: '04',
          title: 'Tập Trung Phát Triển Nghiệp Vụ Cốt Lõi',
          description: 'Các đội ngũ phát triển không cần lập trình lặp lại các tính năng xác thực, rate limit hay logging ở từng microservice đơn lẻ.',
        },
      ],
    },
    useCases: {
      eyebrow: 'ỨNG DỤNG THỰC TẾ',
      headline: 'Kịch Bản Ứng Dụng Thực Tiễn Của Viettel API Gateway',
      items: [
        {
          id: 'case-1',
          title: 'Chuyển đổi kiến trúc Monolith sang Microservices',
          context: 'Doanh nghiệp đang phân rã hệ thống nguyên khối lớn thành hàng chục microservices nhỏ lẻ. Ứng dụng client gặp khó khăn khi phải theo dõi và gọi trực tiếp đến quá nhiều endpoint phân tán.',
          solution: 'Sử dụng vAPIG làm cổng đại diện duy nhất (Facade Pattern), định tuyến thông minh theo từng URL endpoint đến các microservice tương ứng mà không ảnh hưởng tới trải nghiệm người dùng.',
        },
        {
          id: 'case-2',
          title: 'Nền tảng E-Commerce, Siêu ứng dụng & IoT',
          context: 'Lưu lượng truy cập tăng đột biến vào các dịp khuyến mại hoặc đợt flash-sale, gây nghẽn và sập các máy chủ cơ sở dữ liệu nghiệp vụ.',
          solution: 'Áp dụng bộ đệm Caching TTL tại vAPIG cho các thông tin sản phẩm và danh mục, kết hợp cơ chế Rate Limiting ngăn chặn bot tự động spam đơn hàng.',
        },
        {
          id: 'case-3',
          title: 'Ứng dụng Streaming, Media & Dịch vụ số',
          context: 'Cần phân phối nội dung với tốc độ cao, xử lý hàng triệu phiên gọi đồng thời từ các thiết bị thông minh (Smart TV, Mobile App).',
          solution: 'vAPIG tiếp nhận các request truy vấn meta-data, xác thực phiên người dùng bằng JWT tức thì và định tuyến tải phân tán tối ưu.',
        },
        {
          id: 'case-4',
          title: 'Hệ thống Ngân hàng, FinTech & Bảo hiểm (BFSI)',
          context: 'Yêu cầu mở cổng Open Banking API kết nối với các đối tác trung gian thanh toán nhưng phải bảo đảm an toàn dữ liệu và tuân thủ PCI DSS.',
          solution: 'vAPIG thực hiện xác thực chữ ký điện tử, mã hóa đường truyền kép mTLS, kiểm soát chặt chẽ dải IP đối tác được phép truy cập.',
        },
        {
          id: 'case-5',
          title: 'Chuyển dịch hệ thống từ On-Premises lên Cloud',
          context: 'Doanh nghiệp đang vận hành hệ thống Hybrid, một phần chạy tại máy chủ nội bộ và một phần đã chuyển lên Viettel Cloud.',
          solution: 'vAPIG định tuyến linh hoạt giữa hạ tầng On-Premises và Viettel Cloud thông qua kênh truyền riêng, giúp quá trình chuyển dịch diễn ra mượt mà không gián đoạn dịch vụ.',
        },
      ],
    },
    faq: {
      eyebrow: 'HỎI ĐÁP DỊCH VỤ',
      headline: 'Các Câu Hỏi Thường Gặp Về Viettel API Gateway (vAPIG)',
      items: [
        {
          question: 'Tại sao doanh nghiệp tôi cần sử dụng API Gateway thay vì để Client gọi trực tiếp Backend?',
          answer: 'Nếu client gọi trực tiếp đến từng backend microservice, bạn sẽ phải đối mặt với nhiều rủi ro: lộ cấu trúc hạ tầng nội bộ, phải cài đặt xác thực/bảo mật lặp đi lặp lại ở mọi service, khó quản lý phiên bản khi nâng cấp, và client phải thực hiện quá nhiều kết nối mạng gây chậm trễ. API Gateway đóng vai trò làm lớp bảo vệ và tối ưu tập trung, giải quyết triệt để các vấn đề trên.',
        },
        {
          question: 'Viettel API Gateway có gì khác biệt so với một máy chủ Nginx Reverse Proxy thông thường?',
          answer: 'Nginx là một web server/reverse proxy hiệu năng cao, tuy nhiên để đạt được các tính năng nâng cao như xác thực OAuth2/JWT token validation động, kiểm soát hạn ngạch lưu lượng theo người dùng, quản lý phiên bản API với giao diện quản trị đồ họa trực quan và tích hợp sẵn bảo mật chuyên sâu thì vAPIG cung cấp giải pháp PaaS hoàn chỉnh, được Viettel IDC vận hành, nâng cấp và cam kết SLA 99.99%.',
        },
        {
          question: 'vAPIG hỗ trợ những tính năng bảo mật nào để phòng chống tấn công?',
          answer: 'vAPIG tích hợp xác thực JWT, cơ chế Rate Limiting chống spam/DDoS ở tầng ứng dụng, kiểm soát truy cập theo IP Whitelist/Blacklist, quản lý chứng chỉ SSL/TLS tập trung, ẩn giấu hạ tầng backend và có thể kết hợp với dịch vụ Cloud WAF của Viettel IDC để quét các lỗ hổng OWASP Top 10.',
        },
        {
          question: 'Hệ thống của tôi có thể sử dụng đồng thời cả máy chủ tại Viettel IDC và máy chủ On-Premises không?',
          answer: 'Hoàn toàn được. vAPIG có thể định tuyến các request đến bất kỳ địa chỉ IP hoặc tên miền nào có thể kết nối được, bao gồm cả máy chủ nội bộ (thông qua mạng riêng Viettel Direct Connect / VPN) và các dịch vụ trên nền tảng đám mây công cộng.',
        },
        {
          question: 'Làm thế nào để vAPIG quản lý nhiều phiên bản API cùng một lúc?',
          answer: 'vAPIG cho phép cấu hình URL Versioning (ví dụ: /api/v1/users và /api/v2/users). Mỗi phiên bản có thể được trỏ tới một nhóm máy chủ backend riêng biệt. Bạn có thể phân luồng thử nghiệm (Canary Release) cho 10% người dùng sang phiên bản v2 trước khi chuyển đổi toàn bộ.',
        },
      ],
    },
    footerCta: {
      headline: 'Sẵn Sàng Tối Ưu Hóa & Bảo Mật Hệ Thống API Cùng Viettel IDC?',
      subtext: 'Đăng ký ngay hôm nay để trải nghiệm dịch vụ Viettel API Gateway hiệu năng cao, bảo mật vững chắc và đội ngũ chuyên gia hỗ trợ 24/7.',
      buttonText: 'Đăng Ký Tư Vấn & Nhận Báo Giá',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU & HỖ TRỢ',
      headline: 'Tài Liệu Kỹ Thuật & Trung Tâm Hỗ Trợ 24/7',
      documentation: {
        title: 'Trung Tâm Tài Liệu & Hướng Dẫn Kỹ Thuật vAPIG',
        desc: 'Xem hướng dẫn chi tiết về cấu hình định tuyến Route, thiết lập bộ lọc Rate Limiting, tích hợp JWT token và cấu hình Caching.',
        linkText: 'Xem tài liệu hướng dẫn kỹ thuật',
      },
      supportCenter: {
        title: 'Trung Tâm Chăm Sóc & Hỗ Trợ Doanh Nghiệp 24/7/365',
        desc: 'Đội ngũ kỹ sư mạng và kiến trúc sư đám mây Viettel IDC luôn sẵn sàng hỗ trợ bạn tối ưu hóa luồng giao tiếp API.',
        linkText: 'Yêu cầu hỗ trợ kỹ thuật chuyên sâu',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI GIẢI PHÁP LIÊN QUAN',
      headline: 'Giải Pháp Tích Hợp Hoàn Hảo Cho Ứng Dụng Hiện Đại',
      items: [
        {
          sku: 'SVC-003',
          title: 'Viettel Open Kubernetes Service (vOKS)',
          description: 'Nền tảng container điều phối các microservices backend kết nối trực tiếp phía sau API Gateway.',
          path: '/services/compute/vks',
        },
        {
          sku: 'SVC-001',
          title: 'Viettel Cloud Server',
          description: 'Hạ tầng máy chủ ảo hóa OpenStack hiệu năng cao vận hành các dịch vụ ứng dụng cốt lõi.',
          path: '/services/compute/cloud-server',
        },
        {
          sku: 'SVC-015',
          title: 'Viettel Cloud WAF',
          description: 'Tường lửa ứng dụng web đám mây bảo vệ API Gateway và hệ thống ứng dụng khỏi các cuộc tấn công mạng.',
          path: '/services/security',
        },
        {
          sku: 'SVC-036',
          title: 'Viettel Database Service (vDBS)',
          description: 'Dịch vụ cơ sở dữ liệu quản trị tự động phục vụ lưu trữ dữ liệu an toàn cho các microservices.',
          path: '/services/database/vdbs',
        },
      ],
    },
  },

  // =========================================================================
  // 15. VIETTEL CLOUDWATCH
  // =========================================================================
  'cloudwatch': {
    id: 'cloudwatch',
    sku: 'SVC-042',
    pillar: 'management',
    pageTitle: 'Viettel CloudWatch – Giám Sát Hiệu Suất Đa Chiều & Cảnh Báo Thời Gian Thực | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Quản trị & Giám sát', path: '/services/compute' },
        { name: 'Viettel CloudWatch' },
      ],
      eyebrow: 'DỊCH VỤ THEO DÕI VÀ GIÁM SÁT TÀI NGUYÊN ĐÁM MÂY THỜI GIAN THỰC',
      headline: 'Viettel CloudWatch – Giám Sát Hiệu Suất Đa Chiều, Cảnh Báo Đa Kênh Tức Thì Cho Hạ Tầng Đám Mây',
      subheading: 'Giải pháp thu thập dữ liệu và giám sát tài nguyên máy chủ ảo (VM) theo thời gian thực. Giúp doanh nghiệp chủ động theo dõi các metrics trọng yếu của hệ thống, thiết lập ngưỡng cảnh báo đa kênh linh hoạt và tối ưu hóa hiệu năng ứng dụng liên tục.',
      primaryCta: { text: 'Nhận Tư Vấn Miễn Phí', action: 'quote' },
      secondaryCta: { text: 'Trải Nghiệm Demo', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Giám Sát Tài Nguyên Tập Trung & Chủ Động Nắm Bắt Trạng Thái Hệ Thống',
      leftDescription: [
        'Viettel CloudWatch là giải pháp giám sát hiệu năng và tài nguyên đám mây chuyên sâu, cung cấp khả năng quan sát toàn diện đối với toàn bộ máy chủ ảo và dịch vụ vận hành trên nền tảng Viettel Cloud.',
        'Hệ thống tự động thu thập các chỉ số hiệu năng quan trọng (CPU, RAM, Disk I/O, Network Traffic) với tần suất liên tục, lưu trữ và trực quan hóa qua biểu đồ thời gian thực. Doanh nghiệp có thể dễ dàng thiết lập ngưỡng cảnh báo tùy biến để nhận thông báo tức thì qua Telegram, Slack hoặc Email ngay khi hệ thống có dấu hiệu bất thường.',
      ],
      highlights: [
        {
          title: 'Giám sát toàn diện tài nguyên',
          description: 'Theo dõi chi tiết hiệu suất của từng máy ảo VM: tỷ lệ sử dụng CPU, dung lượng RAM khả dụng, tốc độ đọc ghi ổ cứng và lưu lượng băng thông mạng.',
        },
        {
          title: 'Cảnh báo đa kênh thông minh',
          description: 'Gửi thông báo tức thì qua Telegram, Slack, Email hoặc Webhook khi các chỉ số vượt quá ngưỡng cảnh báo được thiết lập sẵn.',
        },
        {
          title: 'Quản lý tập trung Single-Pane-of-Glass',
          description: 'Quan sát toàn bộ cụm máy chủ và tài nguyên trên một bảng điều khiển duy nhất, hỗ trợ phân loại theo dự án, khu vực và mức độ ưu tiên.',
        },
        {
          title: 'Tích hợp linh hoạt hệ sinh thái Cloud',
          description: 'Hoạt động mượt mà cùng Viettel Cloud Server, Kubernetes Service, Load Balancer và các dịch vụ cơ sở dữ liệu đám mây.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
      headline: 'Bảng Giá Linh Hoạt & Tối Ưu Theo Quy Mô Hạ Tầng',
      controls: [
        {
          id: 'scale',
          label: 'Quy mô giám sát',
          options: [
            { id: 'small', label: '< 10 VMs' },
            { id: 'medium', label: '10 - 50 VMs' },
            { id: 'large', label: '> 50 VMs' },
          ],
          defaultSelected: 'small',
        },
        {
          id: 'billing',
          label: 'Chu kỳ thanh toán',
          options: [
            { id: 'monthly', label: 'Theo tháng' },
            { id: 'yearly', label: 'Cam kết năm (Tiết kiệm 15%)' },
          ],
          defaultSelected: 'monthly',
        },
      ],
      note: 'Bảng giá chưa bao gồm thuế VAT (nếu có). Áp dụng tính phí linh hoạt dựa trên số lượng tài nguyên giám sát và tần suất thu thập chỉ số.',
      tables: [
        {
          id: 'cloudwatch_pricing_table',
          title: 'BẢNG GIÁ CÁC GÓI DỊCH VỤ VIETTEL CLOUDWATCH',
          columns: [
            { header: 'Gói Dịch Vụ', key: 'name', width: '22%' },
            { header: 'Quy Mô Giám Sát', key: 'capacity', width: '25%' },
            { header: 'Tính Năng & Kênh Cảnh Báo', key: 'features', width: '33%' },
            { header: 'Chi Phí Ước Tính', key: 'price', width: '20%', align: 'right', isPrice: true },
          ],
          rows: [
            {
              name: 'CloudWatch Starter',
              capacity: 'Từ 1 – 5 Máy chủ ảo (VM)',
              features: 'Thu thập chỉ số CPU, RAM, Disk; Cảnh báo Email & Telegram; Tần suất 1 phút',
              price: 'Miễn phí kèm Cloud',
            },
            {
              name: 'CloudWatch Pro',
              capacity: 'Từ 6 – 30 Máy chủ ảo (VM)',
              features: 'Giám sát chi tiết Process, Network I/O; Đa kênh Telegram/Slack/Email; Lưu trữ log 30 ngày',
              price: 'Liên hệ báo giá',
            },
            {
              name: 'CloudWatch Enterprise',
              capacity: 'Không giới hạn máy chủ / Multi-Region',
              features: 'Tùy biến Custom Metrics, Webhook tích hợp hệ thống nội bộ, lưu trữ log 90 ngày, hỗ trợ 24/7',
              price: 'Tư vấn thiết kế riêng',
            },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp cần tích hợp giải pháp giám sát chuyên sâu cho hệ thống hàng trăm máy chủ phân tán hoặc cụm Hybrid Cloud?',
        buttonText: 'Nhận Tư Vấn & Báo Giá Hệ Thống Giám Sát Chuyên Biệt',
        notesPlaceholder: 'Đăng ký tư vấn triển khai hệ sinh thái giám sát Viettel CloudWatch cho doanh nghiệp',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG NỔI BẬT',
      headline: 'Năng Lực Kỹ Thuật & Tính Năng Chuyên Sâu Của Viettel CloudWatch',
      cards: [
        {
          id: 'ft-1',
          title: 'Dashboard Theo Dõi Real-Time',
          description: 'Trực quan hóa toàn bộ chỉ số hiệu năng CPU, Memory, Disk, Network qua các biểu đồ tương tác thời gian thực với độ trễ tối thiểu.',
        },
        {
          id: 'ft-2',
          title: 'Cảnh Báo Tùy Chỉnh Đa Kênh',
          description: 'Cấu hình quy tắc cảnh báo linh hoạt theo điều kiện (Thresholds), gửi tin nhắn thông báo tức thời qua Telegram, Slack, Email hoặc SMS.',
        },
        {
          id: 'ft-3',
          title: 'Quản Lý Tập Trung',
          description: 'Theo dõi toàn bộ các máy ảo và tài nguyên đám mây tại các Trung tâm Dữ liệu khác nhau trên một màn hình quản trị duy nhất.',
        },
        {
          id: 'ft-4',
          title: 'Giám Sát Đa Chiều Toàn Diện',
          description: 'Hỗ trợ thu thập chỉ số ở cả mức máy chủ ảo (Hypervisor level) và bên trong hệ điều hành (Guest OS metrics) chi tiết.',
        },
        {
          id: 'ft-5',
          title: 'Phát Hiện Sự Cố Nhanh Chóng',
          description: 'Xác định chính xác nút thắt cổ chai (bottleneck) về hiệu năng, các tiến trình chiếm dụng tài nguyên bất thường để xử lý kịp thời.',
        },
        {
          id: 'ft-6',
          title: 'Tương Thích & Tích Hợp Linh Hoạt',
          description: 'Dễ dàng tích hợp với các công cụ CI/CD, hệ thống quản trị tự động hóa và các giải pháp mã nguồn mở như Grafana, Prometheus.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật Dịch Vụ Viettel CloudWatch',
      specs: [
        { category: 'Tài nguyên giám sát', details: 'CPU Usage (%), Memory Usage (%), Disk Read/Write (IOPS & Throughput), Network Traffic In/Out' },
        { category: 'Tần suất thu thập dữ liệu', details: 'Hỗ trợ tần suất từ 10 giây, 30 giây đến 1 phút hoặc 5 phút tùy cấu hình' },
        { category: 'Phương thức cảnh báo', details: 'Telegram Bot, Slack Channel, Email, HTTP/HTTPS Webhook' },
        { category: 'Thời gian lưu trữ lịch sử metrics', details: 'Tùy chọn từ 7 ngày, 30 ngày đến 90 ngày phục vụ phân tích xu hướng' },
        { category: 'Giao diện quản trị', details: 'Cổng quản trị web trực quan, hỗ trợ tùy biến widget theo sở thích người dùng' },
        { category: 'Cơ chế triển khai', details: 'Agentless (thu thập trực tiếp từ Hypervisor) hoặc Agent-based (thu thập chuyên sâu bên trong OS)' },
        { category: 'Đội ngũ hỗ trợ vận hành', details: 'Kỹ sư chuyên trách Viettel IDC túc trực 24/7/365 theo dõi và phản ứng nhanh sự cố' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH CỐT LÕI',
      headline: 'Giá Trị Thiết Thực Viettel CloudWatch Mang Lại Cho Doanh Nghiệp',
      pillars: [
        {
          number: '01',
          title: 'Phát Hiện Sự Cố Chủ Động',
          description: 'Nhận diện nguy cơ quá tải và sự cố phần cứng trước khi ảnh hưởng đến người dùng cuối, giảm thiểu tối đa thời gian gián đoạn (downtime).',
        },
        {
          number: '02',
          title: 'Tối Ưu Hóa Hiệu Suất Hệ Thống',
          description: 'Nắm bắt chính xác mức độ sử dụng tài nguyên thực tế để kịp thời nâng cấp hoặc tinh chỉnh cấu hình máy chủ ảo hợp lý.',
        },
        {
          number: '03',
          title: 'Tiết Kiệm Chi Phí & Nguồn Lực',
          description: 'Loại bỏ chi phí đầu tư xây dựng và bảo trì hạ tầng máy chủ giám sát riêng biệt, giải phóng thời gian cho đội ngũ kỹ sư CNTT.',
        },
        {
          number: '04',
          title: 'Bảo Mật & Độc Lập Tài Nguyên',
          description: 'Toàn bộ dữ liệu giám sát được lưu trữ an toàn trong nước tại hạ tầng Data Center Viettel IDC, tuân thủ Luật An ninh mạng.',
        },
      ],
    },
    useCases: {
      eyebrow: 'ỨNG DỤNG THỰC TẾ',
      headline: 'Các Bài Toán Ứng Dụng Điển Hình Của Viettel CloudWatch',
      items: [
        {
          id: 'case-1',
          title: 'Đội ngũ DevOps & Các Công ty Phát Triển Công Nghệ',
          context: 'Cần theo dõi sát sao hiệu năng ứng dụng trong các đợt phát hành phiên bản mới (Release deployment) hoặc kiểm thử tải trọng (Load testing).',
          solution: 'CloudWatch cung cấp các biểu đồ thời gian thực trực quan, giúp các kỹ sư phát hiện ngay lập tức tình trạng rò rỉ bộ nhớ (Memory leak) hoặc tắc nghẽn CPU.',
        },
        {
          id: 'case-2',
          title: 'Sàn Thương Mại Điện Tử & Hệ Thống Giao Dịch Trực Tuyến',
          context: 'Lưu lượng khách truy cập tăng đột biến vào các khung giờ vàng hoặc chiến dịch khuyến mại lớn, đe dọa làm sập hệ thống bán hàng.',
          solution: 'Thiết lập cảnh báo tự động gửi tin nhắn Telegram tới nhóm On-call khi tài nguyên chạm ngưỡng 80%, giúp chủ động nâng cấp dung lượng kịp thời.',
        },
        {
          id: 'case-3',
          title: 'Ngân Hàng, Tài Chính & Doanh Nghiệp Cần Tính Sẵn Sàng Cao',
          context: 'Các ứng dụng lõi yêu cầu độ sẵn sàng dịch vụ 99.99%, mọi sự cố tiềm ẩn đều phải được cảnh báo và xử lý trong vài phút.',
          solution: 'Triển khai CloudWatch kết hợp kênh Webhook kích hoạt kịch bản khắc phục tự động và thông báo tức thời cho đội ngũ vận hành 24/7.',
        },
        {
          id: 'case-4',
          title: 'Doanh Nghiệp Chuyển Dịch Từ AWS/Azure Về Đám Mây Việt Nam',
          context: 'Quen thuộc với việc sử dụng công cụ Amazon CloudWatch hoặc Azure Monitor và cần một giải pháp giám sát tương đương tại Việt Nam.',
          solution: 'Viettel CloudWatch cung cấp đầy đủ các tính năng giám sát cơ bản và cảnh báo đa kênh quen thuộc với chi phí tối ưu hơn đáng kể.',
        },
      ],
    },
    faq: {
      eyebrow: 'HỎI ĐÁP DỊCH VỤ',
      headline: 'Các Câu Hỏi Thường Gặp Về Viettel CloudWatch',
      items: [
        {
          question: 'Viettel CloudWatch có đảm bảo an toàn bảo mật thông tin dữ liệu của tôi không?',
          answer: 'Hoàn toàn an toàn. Viettel CloudWatch chỉ thu thập các chỉ số phần cứng (CPU, RAM, Disk I/O, Network Traffic) mà không can thiệp hay đọc bất kỳ dữ liệu nội dung nhạy cảm nào lưu trữ trên máy chủ ảo của bạn. Mọi luồng truyền dữ liệu giám sát đều được mã hóa theo tiêu chuẩn nghiêm ngặt.',
        },
        {
          question: 'Dịch vụ này khác gì so với việc tự cài đặt công cụ giám sát như Zabbix hay Prometheus?',
          answer: 'Việc tự dựng Zabbix hoặc Prometheus đòi hỏi bạn phải tốn chi phí thuê máy chủ riêng, cấu hình lưu trữ cơ sở dữ liệu time-series phức tạp, duy trì bảo mật và nâng cấp hệ thống liên tục. Viettel CloudWatch là dịch vụ được quản trị hoàn chỉnh (Fully-managed), bạn chỉ cần kích hoạt và sử dụng ngay lập tức mà không tốn công vận hành.',
        },
        {
          question: 'Dịch vụ có phù hợp cho doanh nghiệp có quy mô nhỏ không?',
          answer: 'Có. Viettel CloudWatch được thiết kế với cơ chế tính phí linh hoạt theo tài nguyên thực tế sử dụng. Doanh nghiệp sở hữu từ 1 đến vài máy chủ ảo hoàn toàn có thể sử dụng với mức chi phí cực kỳ tiết kiệm.',
        },
        {
          question: 'Tôi có thể nhận cảnh báo qua các ứng dụng OTT như Telegram không?',
          answer: 'Hoàn toàn được. Viettel CloudWatch hỗ trợ tích hợp sẵn bot Telegram, Slack, bên cạnh phương thức gửi Email truyền thống và Webhook cho các hệ thống quản trị chuyên dụng.',
        },
      ],
    },
    footerCta: {
      headline: 'Sẵn Sàng Làm Chủ Hiệu Năng Đám Mây Cùng Viettel CloudWatch?',
      subtext: 'Chủ động giám sát hạ tầng, nắm bắt từng biến động hệ thống và đảm bảo trải nghiệm thông suốt cho khách hàng của bạn ngay hôm nay.',
      buttonText: 'Đăng Ký Tư Vấn & Nhận Hướng Dẫn Kỹ Thuật',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU & HỖ TRỢ',
      headline: 'Tài Liệu Hướng Dẫn & Đội Ngũ Chuyên Gia Thường Trực',
      documentation: {
        title: 'Hướng Dẫn Cấu Hình Metrics & Cảnh Báo CloudWatch',
        desc: 'Xem tài liệu hướng dẫn từng bước kích hoạt giám sát máy ảo, tạo rule cảnh báo và tích hợp webhook gửi tin nhắn Telegram/Slack.',
        linkText: 'Xem hướng dẫn cấu hình chi tiết',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Kỹ Thuật Đám Mây 24/7/365',
        desc: 'Đội ngũ chuyên gia hệ thống Viettel IDC sẵn sàng đồng hành tư vấn kiến trúc giám sát và xử lý mọi vướng mắc kỹ thuật của khách hàng.',
        linkText: 'Yêu cầu hỗ trợ kỹ thuật chuyên sâu',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI GIẢI PHÁP LIÊN QUAN',
      headline: 'Giải Pháp Đồng Bộ Cùng Viettel CloudWatch',
      items: [
        {
          sku: 'SVC-001',
          title: 'Viettel Cloud Server',
          description: 'Hạ tầng máy chủ ảo hóa OpenStack hiệu năng cao, tích hợp giám sát CloudWatch nguyên bản.',
          path: '/services/compute/cloud-server',
        },
        {
          sku: 'SVC-005',
          title: 'Viettel Virtual Private Cloud (vVPC)',
          description: 'Môi trường mạng đám mây biệt lập an toàn, cho phép kiểm soát luồng dữ liệu và giám sát mạng chi tiết.',
          path: '/services/network',
        },
        {
          sku: 'SVC-041',
          title: 'Viettel Application Performance Monitoring (vAPM)',
          description: 'Giám sát chuyên sâu hiệu năng mã nguồn ứng dụng (APM) kết hợp cùng giám sát hạ tầng CloudWatch.',
          path: '/services/monitoring',
        },
        {
          sku: 'SVC-004',
          title: 'Viettel Managed Kubernetes Service (vMKS)',
          description: 'Cụm điều phối container tự động hóa kết nối giám sát metrics tài nguyên toàn diện.',
          path: '/services/compute/vmks',
        },
      ],
    },
  },
};
