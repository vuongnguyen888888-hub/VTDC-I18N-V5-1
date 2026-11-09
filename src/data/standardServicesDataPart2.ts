import { ServiceDetailConfig } from '../types/serviceDetail';

export const STANDARD_SERVICES_DATA_PART2: Record<string, ServiceDetailConfig> = {
  // =========================================================================
  // 7. VIETTEL EMAIL HOSTING
  // =========================================================================
  'email-hosting': {
    id: 'email-hosting',
    sku: 'SVC-055',
    pillar: 'domain-hosting',
    pageTitle: 'Viettel Email Hosting – Giải Pháp Email Doanh Nghiệp Theo Tên Miền Riêng | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Lưu trữ & Ứng dụng Web', path: '/services/domain-hosting' },
        { name: 'Viettel Email Hosting' },
      ],
      eyebrow: 'HỆ THỐNG THƯ ĐIỆN TỬ DOANH NGHIỆP THEO TÊN MIỀN RIÊNG BẢO MẬT CAO',
      headline: 'Viettel Email Hosting – Giải Pháp Email Doanh Nghiệp Chuyên Nghiệp, Ổn Định & An Toàn 2 Chiều',
      subheading: 'Hệ thống thư điện tử chuyên biệt theo tên miền riêng của doanh nghiệp (dangky@tenmien.vn), vận hành trên hạ tầng máy chủ điện toán đám mây đạt chuẩn quốc tế TIA-942. Tích hợp công nghệ bảo mật cao cấp ngăn chặn 99% thư rác và mã độc, cam kết độ sẵn sàng 99.99%.',
      primaryCta: { text: 'Dùng Thử Miễn Phí / Đăng Ký Tư Vấn', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá Gói MailPro', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Tổng Quan Hệ Thống & Năng Lực Dịch Vụ Viettel Email Hosting',
      leftDescription: [
        'Email Hosting là giải pháp cung cấp dịch vụ thư điện tử chuyên nghiệp theo tên miền riêng của doanh nghiệp (ví dụ: hotro@viettelidc.com.vn) hoạt động trên nền tảng máy chủ độc lập. Thay vì sử dụng các dịch vụ email miễn phí thiếu kiểm soát, Email Hosting mang đến không gian lưu trữ riêng tư, tính năng quản trị hộp thư tập trung và khả năng kiểm soát luồng thông tin nội bộ chặt chẽ.',
        'Hệ thống của Viettel IDC được cấu hình với dải địa chỉ IP sạch uy tín, hỗ trợ trọn gói các giao thức xác thực thư điện tử quốc tế (SPF, DKIM, DMARC) nhằm đảm bảo email gửi đi luôn vào đúng Hộp thư đến (Inbox) của đối tác, giảm thiểu tối đa tình trạng bị đánh dấu Spam.',
      ],
      highlights: [
        {
          title: 'Khẳng định nhận diện thương hiệu',
          description: 'Sử dụng địa chỉ email theo tên miền riêng nâng cao tính chuyên nghiệp và sự tin cậy trong mắt khách hàng.',
        },
        {
          title: 'Bảo mật đa lớp tối ưu',
          description: 'Tích hợp hệ thống Antivirus và Antispam phát hiện mã độc, lọc 99% thư rác gửi đến.',
        },
        {
          title: 'Khả năng gửi thư vào Inbox cao',
          description: 'Hạ tầng IP uy tín cao, cấu hình SPF/DKIM/DMARC chuẩn hóa giúp hạn chế rủi ro rơi vào hộp thư rác.',
        },
        {
          title: 'Quản trị tập trung, linh hoạt',
          description: 'Dễ dàng tạo mới, sửa đổi dung lượng, thu hồi tài khoản nhân sự khi có biến động nhân sự.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
      headline: 'Bảng Giá Gói Cước MailPro – Linh Hoạt Cho Mọi Quy Mô Doanh Nghiệp',
      note: 'Bảng giá niêm yết chưa bao gồm thuế VAT (nếu có).',
      tables: [
        {
          id: 'mailpro_pricing_table',
          title: 'BẢNG GIÁ DỊCH VỤ EMAIL HOSTING (GÓI MAILPRO)',
          columns: [
            { header: 'Tên Gói', key: 'name', width: '15%' },
            { header: 'Số Lượng Email Tối Đa', key: 'emails', width: '18%', align: 'center' },
            { header: 'Dung Lượng Lưu Trữ', key: 'storage', width: '18%', align: 'center' },
            { header: 'Băng Thông', key: 'bandwidth', width: '15%', align: 'center' },
            { header: 'Email Forwarder', key: 'forwarder', width: '15%', align: 'center' },
            { header: 'Đơn Giá / Tháng', key: 'price', width: '19%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'MailPro 01', emails: '10', storage: '5 GB', bandwidth: 'Unlimited', forwarder: 'Unlimited', price: '50.000 đ' },
            { name: 'MailPro 01+', emails: '10', storage: '10 GB', bandwidth: 'Unlimited', forwarder: 'Unlimited', price: '80.000 đ' },
            { name: 'MailPro 02', emails: '20', storage: '10 GB', bandwidth: 'Unlimited', forwarder: 'Unlimited', price: '100.000 đ' },
            { name: 'MailPro 02+', emails: '20', storage: '20 GB', bandwidth: 'Unlimited', forwarder: 'Unlimited', price: '150.000 đ' },
            { name: 'MailPro 03', emails: '30', storage: '15 GB', bandwidth: 'Unlimited', forwarder: 'Unlimited', price: '180.000 đ' },
            { name: 'MailPro 03+', emails: '30', storage: '30 GB', bandwidth: 'Unlimited', forwarder: 'Unlimited', price: '280.000 đ' },
            { name: 'MailPro 04', emails: '50', storage: '25 GB', bandwidth: 'Unlimited', forwarder: 'Unlimited', price: '350.000 đ' },
            { name: 'MailPro 04+', emails: '50', storage: '50 GB', bandwidth: 'Unlimited', forwarder: 'Unlimited', price: '500.000 đ' },
            { name: 'MailPro 05', emails: '100', storage: '50 GB', bandwidth: 'Unlimited', forwarder: 'Unlimited', price: '650.000 đ' },
            { name: 'MailPro 05+', emails: '100', storage: '100 GB', bandwidth: 'Unlimited', forwarder: 'Unlimited', price: '950.000 đ' },
            { name: 'MailPro 06', emails: '200', storage: '100 GB', bandwidth: 'Unlimited', forwarder: 'Unlimited', price: '950.000 đ' },
            { name: 'MailPro 06+', emails: '200', storage: '200 GB', bandwidth: 'Unlimited', forwarder: 'Unlimited', price: '1.350.000 đ' },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp có quy mô trên 200 hộp thư hoặc cần thiết lập máy chủ Email Server chuyên dụng?',
        buttonText: 'Yêu Cầu Tư Vấn Cấu Hình Email Server Doanh Nghiệp',
        notesPlaceholder: 'Đăng ký tư vấn giải pháp Email Server doanh nghiệp quy mô lớn',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET',
      headline: 'Năng Lực Công Nghệ & Tiêu Chuẩn Kỹ Thuật Email Chuyên Sâu',
      cards: [
        {
          id: 'mail-feat-1',
          title: 'Hạ tầng máy chủ chuyên dụng & Sẵn sàng cao',
          description: 'Hệ thống vận hành trên cụm máy chủ Cloud độc lập, không bị ảnh hưởng bởi lưu lượng website, cam kết SLA 99.99%.',
        },
        {
          id: 'mail-feat-2',
          title: 'Bộ lọc Antivirus & Antispam thông minh',
          description: 'Quét sạch mã độc, chặn đứng liên kết lừa đảo (Phishing) và loại bỏ thư rác tự động trước khi tới hộp thư người dùng.',
        },
        {
          id: 'mail-feat-3',
          title: 'Đa dạng giao thức truy cập & Đồng bộ thiết bị',
          description: 'Hỗ trợ đồng thời Webmail trực quan và các giao thức IMAP/POP3/SMTP kết nối mượt mà trên Outlook, Thunderbird, iOS, Android.',
        },
        {
          id: 'mail-feat-4',
          title: 'Công cụ quản trị người dùng phân quyền chi tiết',
          description: 'Giao diện Control Panel trực quan giúp quản trị viên dễ dàng tạo hòm thư, phân bổ dung lượng, tạo Email Group và đổi mật khẩu.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật (Technical Spec Table)',
      specs: [
        { category: 'Định dạng tên miền email', details: 'Hỗ trợ 100% tên miền riêng của doanh nghiệp (ví dụ: user@congty.com.vn)' },
        { category: 'Giao thức truyền & nhận mail', details: 'SMTP, POP3, IMAP, SSL/TLS Encryption' },
        { category: 'Hệ thống Webmail tích hợp', details: 'Giao diện Webmail tiếng Việt & tiếng Anh, thân thiện trên trình duyệt' },
        { category: 'Công nghệ bảo mật tích hợp', details: 'Antivirus, Antispam đa tầng, bộ lọc Real-time Blackhole List (RBL)' },
        { category: 'Cấu hình bản ghi bảo mật', details: 'SPF Record, DKIM Signature, DMARC Policy' },
        { category: 'Giới hạn dung lượng tệp đính kèm', details: 'Lên tới 25 MB – 50 MB / thư' },
        { category: 'Hạ tầng máy chủ lưu trữ', details: 'Cụm Cloud Server SSD phân tán đặt tại Data Center chuẩn Tier III' },
        { category: 'Tiêu chuẩn quản lý chất lượng', details: 'ISO 27001:2013, ISO 27017:2015, ISO 9001:2015' },
        { category: 'Cam kết sẵn sàng (SLA)', details: '99.99% thời gian hoạt động ổn định liên tục' },
      ],
    },
    benefits: {
      eyebrow: 'SO SÁNH HIỆU QUẢ & LỢI ÍCH',
      headline: 'Tại Sao Doanh Nghiệp Nên Chọn Viettel Email Hosting Chuyên Dụng?',
      pillars: [
        {
          number: '01',
          title: 'Khẳng Định Tính Chuyên Nghiệp & Nhận Diện Thương Hiệu',
          description: 'Tạo dựng lòng tin vững chắc khi giao dịch với đối tác và khách hàng bằng địa chỉ email gắn liền với tên miền thương hiệu chính thức.',
        },
        {
          number: '02',
          title: 'Bảo Vệ Dữ Liệu & Kiểm Soát Tài Nguyên Tập Trung',
          description: 'Khi nhân sự nghỉ việc, quản trị viên dễ dàng đổi mật khẩu hoặc chuyển giao toàn bộ lịch sử thư từ công việc cho người kế nhiệm.',
        },
        {
          number: '03',
          title: 'Tỷ Lệ Vào Inbox Vượt Trội',
          description: 'Hạ tầng IP sạch, uy tín cao kết hợp với các bản ghi định danh SPF/DKIM giúp thư không bị chặn hoặc đẩy vào hòm thư Spam.',
        },
        {
          number: '04',
          title: 'Tiết Kiệm Chi Phí Tối Đa',
          description: 'Chi phí chỉ từ 50.000 đ/tháng cho 10 hộp thư, thấp hơn rất nhiều so với việc thuê dịch vụ mail ngoại quốc tính theo đầu người.',
        },
      ],
    },
    useCases: {
      eyebrow: 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
      headline: 'Kịch Bản Khai Thác Email Doanh Nghiệp Hiệu Quả',
      items: [
        {
          id: 'mail-uc-1',
          title: '1. Doanh Nghiệp Mới Thành Lập & Nhóm Khởi Nghiệp (SME / Startup)',
          context: 'Doanh nghiệp cần thiết lập kênh liên lạc chính thức với khách hàng, cơ quan thuế và nhà cung cấp.',
          solution: 'Gói MailPro 01 & MailPro 02 chi phí cực thấp, cung cấp 10-20 hộp thư đầy đủ tính năng.',
        },
        {
          id: 'mail-uc-2',
          title: '2. Công Ty Đang Sử Dụng Email Kèm Web Hosting Bị Quá Tải',
          context: 'Hệ thống email dùng chung máy chủ web thường xuyên bị nghẽn, gửi thư trễ và IP hay bị liệt vào Blacklist quốc tế.',
          solution: 'Tách riêng luồng Email sang Viettel Email Hosting chuyên dụng để bảo đảm tốc độ và độ tin cậy.',
        },
        {
          id: 'mail-uc-3',
          title: '3. Doanh Nghiệp Thương Mại & Dịch Vụ Khách Hàng',
          context: 'Đội ngũ sales và chăm sóc khách hàng cần các hòm thư nhóm chung (sales@, contact@, support@) chuyển tiếp đồng thời cho nhiều nhân sự.',
          solution: 'Tận dụng tính năng Email Forwarder và Email Group không giới hạn để phân phối yêu cầu tức thời.',
        },
        {
          id: 'mail-uc-4',
          title: '4. Doanh Nghiệp Đòi Hỏi Khắt Khe Về Bảo Mật Dữ Liệu & Pháp Lý',
          context: 'Tuân thủ các quy định về an ninh mạng tại Việt Nam, dữ liệu thư từ kinh doanh phải được lưu trữ trong nước.',
          solution: 'Dữ liệu được lưu trữ 100% tại trung tâm dữ liệu Viettel IDC, tuân thủ Luật An ninh mạng Việt Nam.',
        },
      ],
    },
    faq: {
      eyebrow: 'CÂU HỎI THƯỜNG GẶP',
      headline: 'Câu Hỏi Thường Gặp Về Dịch Vụ Viettel Email Hosting',
      items: [
        {
          question: 'Email Hosting khác gì so với dịch vụ Email miễn phí (như Gmail cá nhân)?',
          answer: 'Email cá nhân miễn phí có đuôi @gmail.com thiếu tính chuyên nghiệp, không thể quản lý tập trung tài khoản nhân viên khi nghỉ việc, và dung lượng dữ liệu thuộc về cá nhân. Email Hosting sử dụng tên miền riêng của công ty, cung cấp quyền quản trị tập trung và bảo mật chuyên sâu.',
        },
        {
          question: 'Tại sao không nên dùng email tích hợp sẵn trong gói Web Hosting?',
          answer: 'Email dùng chung Web Hosting chia sẻ chung tài nguyên CPU/RAM và IP với website. Nếu website bị mã độc hoặc gửi spam, IP máy chủ sẽ bị đưa vào danh sách đen (Blacklist), khiến toàn bộ email của bạn gửi đi đều bị rơi vào hòm rác. Email Hosting độc lập loại bỏ triệt để rủi ro này.',
        },
        {
          question: 'Tôi có thể cài đặt Email Hosting lên phần mềm Outlook hoặc điện thoại không?',
          answer: 'Hoàn toàn được. Hệ thống hỗ trợ đầy đủ các giao thức POP3 và IMAP (kèm mã hóa SSL/TLS), cho phép đồng bộ mượt mà trên phần mềm Microsoft Outlook, Thunderbird cũng như các ứng dụng Mail trên điện thoại iOS và Android.',
        },
        {
          question: 'Doanh nghiệp có thể nâng cấp gói Email khi mở rộng quy mô nhân sự không?',
          answer: 'Bạn có thể nâng cấp lên các gói MailPro cao hơn bất kỳ lúc nào chỉ bằng vài thao tác trên hệ thống quản lý. Quá trình nâng cấp diễn ra tự động, không làm gián đoạn việc gửi nhận email của nhân viên.',
        },
        {
          question: 'Viettel Email Hosting bảo vệ hệ thống khỏi thư rác và virus như thế nào?',
          answer: 'Hệ thống tích hợp các công nghệ Antivirus và Antispam tiên tiến liên tục cập nhật dữ liệu mã độc toàn cầu, kết hợp cùng các bản ghi bảo mật SPF, DKIM giúp lọc sạch tới 99% thư rác trước khi đến hộp thư của người dùng.',
        },
      ],
    },
    footerCta: {
      headline: 'Sẵn Sàng Nâng Tầm Giao Tiếp Doanh Nghiệp Chuyên Nghiệp & Bảo Mật?',
      subtext: 'Trải nghiệm ngay hệ thống Email Hosting theo tên miền riêng trên nền tảng hạ tầng đám mây chuẩn quốc tế TIA-942 của Viettel IDC.',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
      buttonText: 'ĐĂNG KÝ MUA GÓI EMAIL HOSTING NGAY',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU KỸ THUẬT & TRỢ GIÚP',
      headline: 'Tài Liệu Hướng Dẫn & Kênh Hỗ Trợ 24/7',
      documentation: {
        title: 'Trung Tâm Tài Liệu & Hướng Dẫn Kỹ Thuật (Email Docs)',
        desc: 'Tài liệu hướng dẫn cấu hình bản ghi MX, SPF, DKIM, DMARC; hướng dẫn cài đặt trên Microsoft Outlook, ứng dụng di động iOS/Android và quản trị Webmail.',
        linkText: 'Xem Hướng Dẫn Cấu Hình',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Kỹ Thuật 24/7/365 (Support Center)',
        desc: 'Đội ngũ chuyên gia Viettel IDC luôn sẵn sàng đồng hành hỗ trợ xử lý luồng thư, gỡ Blacklist và tối ưu tỷ lệ gửi thư 24/7 qua Hotline 1800 8088.',
        linkText: 'Gửi Yêu Cầu Hỗ Trợ',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI GIẢI PHÁP LIÊN QUAN',
      headline: 'Hệ Sinh Thái Dịch Vụ Doanh Nghiệp Đồng Bộ',
      items: [
        {
          title: 'Viettel Domain (Tên Miền)',
          description: 'Đăng ký tên miền Quốc gia (.vn) và Quốc tế làm nền tảng định danh cho hệ thống email công ty.',
          path: '/services/domain-hosting/domain/',
          sku: 'SVC-053',
        },
        {
          title: 'Viettel Web Hosting',
          description: 'Không gian lưu trữ website tốc độ cao, tương thích hoàn hảo khi kết hợp cùng Email Hosting.',
          path: '/services/domain-hosting/web-hosting/',
          sku: 'SVC-054',
        },
        {
          title: 'Viettel SSL',
          description: 'Chứng chỉ bảo mật số mã hóa dữ liệu truyền tải web và đường truyền máy chủ thư điện tử.',
          path: '/services/security/ssl/',
          sku: 'SVC-035',
        },
        {
          title: 'Viettel Endpoint Security',
          description: 'Bảo vệ toàn diện thiết bị đầu cuối của nhân viên trước các mã độc đính kèm trong thư điện tử.',
          path: '/services/security/endpoint-security/',
          sku: 'SVC-033',
        },
      ],
    },
  },

  // =========================================================================
  // 8. VIETTEL SSL
  // =========================================================================
  'ssl': {
    id: 'ssl',
    sku: 'SVC-035',
    pillar: 'security',
    pageTitle: 'Viettel SSL – Chứng Thư Số Bảo Mật Website Chuẩn Quốc Tế | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'An toàn Thông tin', path: '/services/security' },
        { name: 'Viettel SSL' },
      ],
      eyebrow: 'CHỨNG THƯ SỐ BẢO MẬT WEBSITE CHUẨN QUỐC TẾ',
      headline: 'Viettel SSL – Chứng Thư Số Cho Kết Nối Bảo Mật An Toàn & Khẳng Định Uy Tín Doanh Nghiệp',
      subheading: 'Giải pháp bảo mật website toàn diện hợp tác cùng các Tổ chức Chứng thực số (CA) hàng đầu thế giới (Sectigo, GlobalSign, DigiCert...). Mã hóa luồng dữ liệu truyền tải qua giao thức HTTPS, ngăn chặn nguy cơ đánh cắp thông tin, nâng cao thứ hạng SEO và gia tăng niềm tin tối đa cho khách hàng.',
      primaryCta: { text: 'Dùng Thử Miễn Phí / Đăng Ký Tư Vấn', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá Chứng Thư SSL', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Tổng Quan Về Chứng Chỉ Số Viettel SSL',
      leftDescription: [
        'SSL (Secure Sockets Layer) là tiêu chuẩn an ninh công nghệ toàn cầu tạo ra một liên kết được mã hóa an toàn giữa máy chủ web (Web Server) và trình duyệt của người dùng (Browser). Liên kết mã hóa này bảo vệ toàn bộ dữ liệu trao đổi – như thông tin tài khoản, mật khẩu, số thẻ tín dụng và giao dịch trực tuyến – luôn ở trạng thái riêng tư và an toàn tuyệt đối.',
        'Sử dụng chứng thư số SSL là tiêu chuẩn bắt buộc cho mọi website hiện đại, giúp trình duyệt hiển thị ổ khóa xanh an toàn, không bị cảnh báo "Không bảo mật" (Not Secure) và được Google ưu tiên xếp hạng cao trong kết quả tìm kiếm.',
      ],
      highlights: [
        {
          title: 'Mã hóa kết nối chuẩn 256-bit',
          description: 'Bảo vệ toàn vẹn dữ liệu truyền tải giữa người dùng và máy chủ website.',
        },
        {
          title: 'Xác thực chủ thể doanh nghiệp',
          description: 'Khẳng định tính pháp lý và chủ quyền sở hữu website chính hãng.',
        },
        {
          title: 'Tương thích 99.9% trình duyệt',
          description: 'Hỗ trợ mượt mà trên tất cả các trình duyệt máy tính và thiết bị di động phổ biến.',
        },
        {
          title: 'Bảo hiểm giao dịch cao',
          description: 'Chính sách bồi thường tài chính uy tín từ các tổ chức CA toàn cầu khi có rủi ro.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
      headline: 'Bảng Giá Chứng Thư Số SSL Quốc Tế',
      note: 'Đơn vị tính: VNĐ/năm. Đơn giá chưa bao gồm thuế VAT (10%).',
      tables: [
        {
          id: 'ssl_pricing_table',
          title: 'BẢNG GIÁ CHỨNG THƯ SỐ SSL TIÊU CHUẨN',
          columns: [
            { header: 'Tên Sản Phẩm SSL', key: 'name', width: '25%' },
            { header: 'Phân Loại Xác Thực', key: 'type', width: '15%', align: 'center' },
            { header: 'Tùy Chọn Tên Miền (SAN / Wildcard)', key: 'domainOpt', width: '22%', align: 'center' },
            { header: 'Mức Bảo Hiểm Giao Dịch', key: 'warranty', width: '18%', align: 'center' },
            { header: 'Đơn Giá / Năm', key: 'price', width: '20%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'Alpha SSL (AV)', type: 'DV (Domain Validation)', domainOpt: '1 Tên miền chính', warranty: '$10,000', price: '915.000 đ' },
            { name: 'Alpha SSL Wildcard', type: 'DV (Domain Validation)', domainOpt: 'Tên miền chính + *.domain', warranty: '$10,000', price: '2.850.000 đ' },
            { name: 'Domain SSL (DV)', type: 'DV (Domain Validation)', domainOpt: '1 Tên miền chính', warranty: '$10,000', price: '4.450.000 đ' },
            { name: 'Domain SSL Wildcard', type: 'DV (Domain Validation)', domainOpt: 'Tên miền chính + *.domain', warranty: '$10,000', price: '15.180.000 đ' },
            { name: 'Organization SSL (OV)', type: 'OV (Organization Validation)', domainOpt: '1 Tên miền + Xác thực cty', warranty: '$1,250,000', price: '6.200.000 đ' },
            { name: 'Organization SSL Wildcard', type: 'OV (Organization Validation)', domainOpt: 'Tên miền chính + *.domain', warranty: '$1,250,000', price: '16.900.000 đ' },
            { name: 'Extended Validation SSL (EV)', type: 'EV (Extended Validation)', domainOpt: '1 Tên miền + Xác thực cao cấp', warranty: '$1,750,000', price: '16.500.000 đ' },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp cần đăng ký chứng thư số SSL Multi-Domain (SAN) hoặc số lượng lớn cho tập đoàn?',
        buttonText: 'Yêu Cầu Tư Vấn Gói SSL Doanh Nghiệp',
        notesPlaceholder: 'Đăng ký tư vấn chứng thư số SSL doanh nghiệp',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG VƯỢT TRỘI & QUY TRÌNH CẤP PHÁT',
      headline: 'Phân Loại Chứng Thư & Quy Trình Cấp Phát Chuẩn Quốc Tế',
      cards: [
        {
          id: 'ssl-feat-1',
          title: 'Xác thực tên miền (DV - Domain Validation)',
          description: 'Cấp phát tức thì trong vài phút qua xác thực email hoặc DNS, phù hợp website cá nhân, blog, trang tin tức nhỏ.',
        },
        {
          id: 'ssl-feat-2',
          title: 'Xác thực doanh nghiệp (OV - Organization Validation)',
          description: 'Thẩm định hồ sơ pháp lý công ty, hiển thị tên doanh nghiệp trong chi tiết chứng thư, khẳng định vị thế chính thống.',
        },
        {
          id: 'ssl-feat-3',
          title: 'Xác thực mở rộng cao cấp (EV - Extended Validation)',
          description: 'Cấp độ bảo mật cao nhất, thẩm định giấy phép kinh doanh nghiêm ngặt, chuyên biệt cho cổng thanh toán và ngân hàng.',
        },
        {
          id: 'ssl-feat-4',
          title: 'Tùy chọn Wildcard SSL (*.domain.com)',
          description: 'Bảo vệ không giới hạn số lượng tên miền con (subdomains) chỉ với một chứng chỉ duy nhất, tiết kiệm chi phí và công sức quản lý.',
        },
        {
          id: 'ssl-feat-5',
          title: 'Tùy chọn Multi-Domain (SAN SSL)',
          description: 'Tích hợp bảo vệ nhiều tên miền khác nhau trên cùng một địa chỉ IP máy chủ duy nhất một cách linh hoạt.',
        },
        {
          id: 'ssl-feat-6',
          title: 'Mã hóa đường truyền an toàn tuyệt đối',
          description: 'Mã hóa khóa RSA 2048-bit hoặc ECC tiên tiến, thuật toán băm SHA-256 chống giả mạo và nghe lén dữ liệu.',
        },
      ],
      processSteps: [
        { step: 1, title: 'Chọn gói chứng thư', desc: 'Xác định loại chứng thư phù hợp (DV, OV, EV, Wildcard) theo mô hình website.' },
        { step: 2, title: 'Tạo mã CSR', desc: 'Khởi tạo mã Certificate Signing Request (CSR) trên máy chủ chứa website.' },
        { step: 3, title: 'Gửi yêu cầu & Xác thực', desc: 'Thực hiện xác thực quyền sở hữu tên miền (DNS/Email) và hồ sơ pháp lý (với OV/EV).' },
        { step: 4, title: 'Tổ chức CA thẩm định', desc: 'Tổ chức CA quốc tế kiểm tra tính hợp lệ của thông tin đăng ký.' },
        { step: 5, title: 'Cấp phát chứng thư số', desc: 'Nhận file chứng thư số chính thức qua email kèm Intermediate CA.' },
        { step: 6, title: 'Cài đặt & Kích hoạt HTTPS', desc: 'Đội ngũ kỹ thuật hỗ trợ cài đặt lên máy chủ và kích hoạt giao thức HTTPS hoàn tất.' },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật (Technical Spec Table)',
      specs: [
        { category: 'Độ dài khóa mã hóa (Key Length)', details: 'Mã hóa chuẩn 256-bit, Khóa RSA 2048-bit hoặc ECC' },
        { category: 'Thuật toán chữ ký số', details: 'SHA-256 Hash Algorithm' },
        { category: 'Độ tương thích trình duyệt (Compatibility)', details: '≥ 99.9% trên tất cả các trình duyệt Web và thiết bị di động' },
        { category: 'Tổ chức chứng thực (CA)', details: 'Sectigo (Comodo), GlobalSign, DigiCert, GeoTrust' },
        { category: 'Chính sách cấp lại (Re-issuance)', details: 'Cấp lại chứng thư miễn phí không giới hạn trong suốt thời hạn sử dụng' },
        { category: 'Thời hạn bản quyền chứng thư', details: '01 năm (Quy định tiêu chuẩn toàn cầu từ ngày 01/09/2020)' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH DOANH NGHIỆP',
      headline: 'Tại Sao Doanh Nghiệp Phải Trang Bị Chứng Chỉ SSL?',
      pillars: [
        {
          number: '01',
          title: 'Mã Hóa Dữ Liệu & Chống Đánh Cắp Thông Tin',
          description: 'Ngăn chặn tin tặc tấn công nghe lén (Man-in-the-Middle) và đánh cắp tài khoản, mật khẩu, số thẻ ngân hàng của khách hàng.',
        },
        {
          number: '02',
          title: 'Xóa Bỏ Cảnh Báo "Không Bảo Mật" Của Trình Duyệt',
          description: 'Tránh việc khách hàng thoát trang ngay lập tức khi thấy cảnh báo nguy hiểm màu đỏ từ Google Chrome, Edge hoặc Safari.',
        },
        {
          number: '03',
          title: 'Nâng Cao Thứ Hạng SEO Trên Công Cụ Tìm Kiếm',
          description: 'Google chính thức công nhận giao thức HTTPS là một trong những tiêu chí quan trọng để ưu tiên xếp hạng vị trí hiển thị tìm kiếm.',
        },
        {
          number: '04',
          title: 'Khẳng Định Uy Tín & Tăng Tỷ Lệ Chuyển Đổi Bán Hàng',
          description: 'Biểu tượng ổ khóa an toàn mang lại sự yên tâm tuyệt đối cho khách hàng khi điền thông tin và thực hiện giao dịch thanh toán trực tuyến.',
        },
      ],
    },
    useCases: {
      eyebrow: 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
      headline: 'Kịch Bản Ứng Dụng Thực Tế Theo Quy Mô Website',
      items: [
        {
          id: 'ssl-uc-1',
          title: '1. Website Tin Tức, Blog & Trang Giới Thiệu Doanh Nghiệp',
          context: 'Chủ yếu cung cấp thông tin, không có giao dịch thanh toán tài chính phức tạp.',
          solution: 'Sử dụng chứng thư DV (Alpha SSL) để mã hóa dữ liệu cơ bản, hiển thị HTTPS và tối ưu điểm SEO nhanh chóng.',
        },
        {
          id: 'ssl-uc-2',
          title: '2. Cổng Thông Tin Doanh Nghiệp & Website B2B',
          context: 'Cần khẳng định danh tính pháp lý của tổ chức để tạo sự tin cậy với đối tác và khách hàng.',
          solution: 'Sử dụng chứng thư OV (Organization SSL) xác thực tên công ty hiển thị trong chứng thư số.',
        },
        {
          id: 'ssl-uc-3',
          title: '3. Website Thương Mại Điện Tử, Ngân Hàng & Cổng Thanh Toán Trực Tuyến',
          context: 'Xử lý các giao dịch tài chính, thông tin thẻ tín dụng và dữ liệu cá nhân nhạy cảm.',
          solution: 'Trang bị chứng thư EV (Extended Validation) mức độ tin cậy cao nhất kèm bảo hiểm giao dịch lên tới 1.750.000 USD.',
        },
        {
          id: 'ssl-uc-4',
          title: '4. Hệ Thống Ứng Dụng Có Nhiều Phân Hệ Con (Subdomains)',
          context: 'Doanh nghiệp vận hành song song nhiều trang như app.domain.com, mail.domain.com, api.domain.com.',
          solution: 'Sử dụng chứng thư Wildcard SSL (*.domain.com) để bảo vệ toàn bộ tên miền con không giới hạn.',
        },
      ],
    },
    faq: {
      eyebrow: 'CÂU HỎI THƯỜNG GẶP',
      headline: 'Câu Hỏi Thường Gặp Về Dịch Vụ Chứng Thư Số Viettel SSL',
      items: [
        {
          question: 'Chứng thư số SSL là gì và tại sao website của tôi bắt buộc phải có?',
          answer: 'SSL là tiêu chuẩn an ninh mã hóa liên kết giữa máy chủ web và trình duyệt. Website không có SSL sẽ bị các trình duyệt như Chrome, Firefox cảnh báo "Không an toàn", gây mất uy tín nghiêm trọng và bị tụt hạng trên kết quả tìm kiếm Google.',
        },
        {
          question: 'Sự khác biệt cốt lõi giữa các loại SSL: DV, OV và EV là gì?',
          answer: 'DV (Domain Validation) chỉ xác thực quyền sở hữu tên miền, cấp trong vài phút. OV (Organization Validation) thẩm định tính pháp lý của doanh nghiệp. EV (Extended Validation) là cấp độ bảo mật cao nhất, xác minh pháp lý nghiêm ngặt của tổ chức, mang lại uy tín tuyệt đối cho các tổ chức tài chính.',
        },
        {
          question: 'Wildcard SSL là gì và khi nào tôi nên sử dụng?',
          answer: 'Wildcard SSL là chứng chỉ bảo mật cho tên miền chính và toàn bộ các tên miền con cấp 1 không giới hạn số lượng (ví dụ: *.tenmien.vn sẽ bảo vệ được mail.tenmien.vn, portal.tenmien.vn, v.v.). Đây là giải pháp tiết kiệm chi phí vượt trội khi vận hành nhiều dịch vụ.',
        },
        {
          question: 'Tại sao chứng thư số SSL hiện nay chỉ có thời hạn bản quyền tối đa 1 năm?',
          answer: 'Theo quy định chung của Diễn đàn Trình duyệt và Tổ chức Chứng thực (CA/Browser Forum) có hiệu lực từ ngày 01/09/2020, mọi chứng thư SSL công khai trên thế giới đều có thời hạn tối đa là 398 ngày (1 năm) nhằm nâng cao mức độ an toàn mật mã.',
        },
        {
          question: 'Viettel IDC có hỗ trợ cài đặt chứng thư SSL lên máy chủ của tôi không?',
          answer: 'Có. Đội ngũ kỹ sư chuyên môn của Viettel IDC luôn sẵn sàng hỗ trợ khách hàng khởi tạo mã CSR và cài đặt hoàn tất chứng thư SSL lên các nền tảng web server như Nginx, Apache, IIS, cPanel, Plesk hoàn toàn miễn phí.',
        },
      ],
    },
    footerCta: {
      headline: 'Bảo Vệ Website & Khẳng Định Uy Tín Doanh Nghiệp Ngay Hôm Nay',
      subtext: 'Trang bị chứng thư số SSL chuẩn quốc tế để bảo vệ thông tin khách hàng, nâng cao thứ hạng tìm kiếm và thúc đẩy doanh thu trực tuyến.',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
      buttonText: 'ĐĂNG KÝ CHỨNG THƯ SỐ SSL NGAY',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU KỸ THUẬT & TRỢ GIÚP',
      headline: 'Tài Liệu Hướng Dẫn & Cổng Trợ Giúp Kỹ Thuật',
      documentation: {
        title: 'Cẩm Nang Kỹ Thuật Cài Đặt SSL (SSL Docs)',
        desc: 'Hướng dẫn tạo mã CSR trên IIS, Nginx, Apache; quy trình xác thực bản ghi DNS/Email cho CA và cách cấu hình chuyển hướng HTTP sang HTTPS.',
        linkText: 'Xem Hướng Dẫn Cài Đặt',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Kỹ Thuật Chuyên Sâu 24/7 (Support Center)',
        desc: 'Đội ngũ kỹ sư an toàn thông tin hỗ trợ thẩm định hồ sơ doanh nghiệp và xử lý các lỗi cảnh báo chứng thư 24/7 qua Hotline 1800 8088.',
        linkText: 'Gửi Yêu Cầu Hỗ Trợ',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI BẢO MẬT LIÊN QUAN',
      headline: 'Hệ Sinh Thái An Toàn Thông Tin Bổ Trợ',
      items: [
        {
          title: 'Viettel Domain (Tên Miền)',
          description: 'Đăng ký và bảo vệ thương hiệu tên miền quốc gia và quốc tế chính hãng.',
          path: '/services/domain-hosting/domain/',
          sku: 'SVC-053',
        },
        {
          title: 'Viettel Web Hosting',
          description: 'Không gian lưu trữ website tốc độ cao, hỗ trợ tích hợp SSL chỉ với 1 click.',
          path: '/services/domain-hosting/web-hosting/',
          sku: 'SVC-054',
        },
        {
          title: 'Viettel Cloud Server',
          description: 'Hạ tầng máy chủ ảo hiệu năng cao, linh hoạt cài đặt mọi loại chứng thư số chuyên dụng.',
          path: '/services/compute/cloud-server/',
          sku: 'SVC-001A',
        },
        {
          title: 'Viettel Cloudrity (Cloud WAF)',
          description: 'Tường lửa bảo vệ ứng dụng Web và API, chống tấn công DDoS và giải mã SSL/TLS tại vùng biên.',
          path: '/services/security/cloud-waf/',
          sku: 'SVC-031',
        },
      ],
    },
  },

  // =========================================================================
  // 9. MICROSOFT 365
  // =========================================================================
  'microsoft-365': {
    id: 'microsoft-365',
    sku: 'SVC-047',
    pillar: 'digital-workplace',
    pageTitle: 'Microsoft 365 – Bộ Ứng Dụng Văn Phòng & Cộng Tác Đám Mây Doanh Nghiệp | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Ứng dụng Doanh nghiệp', path: '/services/digital-workplace' },
        { name: 'Microsoft 365' },
      ],
      eyebrow: 'BỘ ỨNG DỤNG VĂN PHÒNG & CỘNG TÁC ĐÁM MÂY DÀNH CHO DOANH NGHIỆP',
      headline: 'Microsoft 365 – Bộ Ứng Dụng Làm Việc Nhóm, Cộng Tác Trực Tuyến & Nâng Cao Hiệu Suất',
      subheading: 'Giải pháp năng suất đám mây hàng đầu thế giới từ Microsoft, được phân phối và hỗ trợ kỹ thuật chính hãng bởi Viettel IDC. Tích hợp trọn bộ công cụ văn phòng Microsoft Teams, Word, Excel, PowerPoint, Outlook cùng không gian lưu trữ OneDrive bảo mật cao, giúp doanh nghiệp làm việc an toàn mọi lúc, mọi nơi.',
      primaryCta: { text: 'Dùng Thử Miễn Phí / Đăng Ký Tư Vấn', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá Bản Quyền M365', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Tổng Quan Nền Tảng Không Gian Làm Việc Số Microsoft 365',
      leftDescription: [
        'Microsoft 365 (trước đây là Office 365) là nền tảng đám mây được thiết kế tối ưu hóa cho doanh nghiệp hiện đại. Dịch vụ kết hợp bộ ứng dụng Office kinh điển cùng các dịch vụ đám mây tiên tiến như email doanh nghiệp Exchange Online, họp trực tuyến Microsoft Teams và lưu trữ đám mây OneDrive for Business.',
        'Được cung cấp qua mạng lưới đối tác ủy quyền cấp cao của Viettel IDC, khách hàng nhận được dịch vụ bản quyền chính hãng với quy trình xuất hóa đơn tài chính minh bạch, hỗ trợ kỹ thuật bản địa 24/7 và giải pháp tích hợp đám mây toàn diện.',
      ],
      highlights: [
        {
          title: 'Ứng dụng Office luôn cập nhật',
          description: 'Luôn sử dụng phiên bản mới nhất của Word, Excel, PowerPoint trên cả máy tính, máy tính bảng và điện thoại.',
        },
        {
          title: 'Họp và cộng tác với Teams',
          description: 'Họp trực tuyến lên đến 300 người, gọi thoại, chat và làm việc nhóm theo thời gian thực trên cùng tài liệu.',
        },
        {
          title: 'Email doanh nghiệp 50 GB',
          description: 'Hộp thư dung lượng lớn 50 GB theo tên miền riêng, tích hợp lịch làm việc và bảo mật lọc thư rác.',
        },
        {
          title: 'Lưu trữ 1 TB OneDrive',
          description: 'Không gian lưu trữ và chia sẻ file an toàn 1 TB/người dùng, tự động đồng bộ trên mọi thiết bị.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & GÓI BẢN QUYỀN',
      headline: 'Bảng Giá Bản Quyền Microsoft 365 Cho Doanh Nghiệp',
      note: 'Đơn vị tính: VNĐ/người dùng/tháng. Đơn giá chưa bao gồm thuế VAT (nếu có).',
      tables: [
        {
          id: 'm365_pricing_table',
          title: 'BẢNG GIÁ CÁC GÓI MICROSOFT 365 DOANH NGHIỆP TIÊU CHUẨN',
          columns: [
            { header: 'Gói Bản Quyền', key: 'name', width: '22%' },
            { header: 'Bộ Ứng Dụng Cài Đặt (Desktop Apps)', key: 'desktopApps', width: '22%', align: 'center' },
            { header: 'Dịch Vụ Đám Mây (Cloud Services)', key: 'cloudServices', width: '22%', align: 'center' },
            { header: 'Lưu Trữ & Email', key: 'storageEmail', width: '18%', align: 'center' },
            { header: 'Đơn Giá / Người Dùng / Tháng', key: 'price', width: '16%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'Microsoft 365 Apps for Business', desktopApps: 'Word, Excel, PowerPoint, Outlook, OneNote, Access (PC)', cloudServices: 'OneDrive for Business', storageEmail: '1 TB OneDrive (Không gồm Email)', price: '190.000 đ' },
            { name: 'Microsoft 365 Business Basic', desktopApps: 'Bản Web & Di động (Không gồm Desktop)', cloudServices: 'Teams, Exchange, OneDrive, SharePoint', storageEmail: '50 GB Mail + 1 TB OneDrive', price: '140.000 đ' },
            { name: 'Microsoft 365 Business Standard', desktopApps: 'Đầy đủ Desktop + Web + Di động', cloudServices: 'Teams, Exchange, OneDrive, SharePoint', storageEmail: '50 GB Mail + 1 TB OneDrive', price: '290.000 đ' },
            { name: 'Microsoft 365 Business Premium', desktopApps: 'Đầy đủ Desktop + Web + Di động', cloudServices: 'Teams, Intune, Defender, Entra ID P1', storageEmail: '50 GB Mail + 1 TB + An ninh nâng cao', price: '510.000 đ' },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp có nhu cầu trang bị gói Microsoft 365 Enterprise (E3, E5) hoặc số lượng trên 300 người dùng?',
        buttonText: 'Yêu Cầu Tư Vấn Gói Doanh Nghiệp Lớn (Enterprise)',
        notesPlaceholder: 'Đăng ký tư vấn Microsoft 365 Enterprise',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG VƯỢT TRỘI & NĂNG LỰC CÔNG NGHỆ',
      headline: 'Hệ Sinh Thái Công Cụ Toàn Diện Của Microsoft 365',
      cards: [
        {
          id: 'm365-feat-1',
          title: 'Ứng Dụng Văn Phòng Office Đỉnh Cao',
          description: 'Trọn bộ Word, Excel, PowerPoint, Outlook hoạt động mượt mà trên Windows, macOS, iOS và Android với tính năng đồng biên tập (co-authoring) thời gian thực.',
        },
        {
          id: 'm365-feat-2',
          title: 'Làm Việc Nhóm Với Microsoft Teams',
          description: 'Tập hợp tất cả các cuộc trò chuyện, cuộc họp trực tuyến video HD, tệp chia sẻ và ứng dụng làm việc vào một không gian duy nhất.',
        },
        {
          id: 'm365-feat-3',
          title: 'Lưu Trữ & Chia Sẻ File Bền Vững Với OneDrive',
          description: 'Mỗi người dùng sở hữu 1 TB dung lượng lưu trữ đám mây cá nhân, tự động sao lưu dữ liệu máy tính và hỗ trợ khôi phục phiên bản khi bị mã độc mã hóa.',
        },
        {
          id: 'm365-feat-4',
          title: 'Email Doanh Nghiệp Hạng Doanh Nhân Exchange Online',
          description: 'Hộp thư 50 GB theo tên miền riêng, tích hợp bộ lọc thư rác và mã độc cao cấp, đồng bộ danh bạ và lịch làm việc tức thời.',
        },
        {
          id: 'm365-feat-5',
          title: 'Mạng Nội Bộ & Quản Lý Tài Liệu SharePoint',
          description: 'Xây dựng cổng thông tin nội bộ (Intranet), chia sẻ quy trình làm việc và lưu trữ thư viện tài liệu chung cho từng phòng ban trong công ty.',
        },
        {
          id: 'm365-feat-6',
          title: 'Bảo Mật Cấp Doanh Nghiệp & Quản Lý Thiết Bị',
          description: 'Bảo vệ danh tính với xác thực đa yếu tố (MFA), kiểm soát quyền truy cập và quản lý thiết bị di động nhân viên từ xa qua Microsoft Intune.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật (Technical Spec Table)',
      specs: [
        { category: 'Số lượng thiết bị cài đặt / người dùng', details: 'Cài đặt tối đa trên 5 máy tính (PC/Mac) + 5 máy tính bảng + 5 điện thoại thông minh' },
        { category: 'Dung lượng hộp thư email cá nhân', details: '50 GB / người dùng (Exchange Online)' },
        { category: 'Dung lượng lưu trữ đám mây cá nhân', details: '1 TB / người dùng (OneDrive for Business)' },
        { category: 'Giới hạn người tham gia họp trực tuyến', details: 'Lên đến 300 người tham gia đồng thời trong một cuộc họp Teams' },
        { category: 'Công nghệ bảo mật tích hợp', details: 'Exchange Online Protection, Xác thực 2 bước (MFA), Mã hóa dữ liệu SSL/TLS' },
        { category: 'Cam kết chất lượng dịch vụ (SLA)', details: 'Cam kết thời gian hoạt động 99.9% có ràng buộc tài chính từ Microsoft' },
        { category: 'Phương thức thanh toán', details: 'Thanh toán linh hoạt theo tháng hoặc theo năm, xuất hóa đơn VAT Việt Nam đầy đủ' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH DOANH NGHIỆP',
      headline: 'Giá Trị Chuyển Đổi Không Gian Làm Việc Cùng Microsoft 365',
      pillars: [
        {
          number: '01',
          title: 'Nâng Cao Năng Suất & Khả Năng Cộng Tác',
          description: 'Nhân sự có thể làm việc cùng nhau trên một tài liệu theo thời gian thực từ bất kỳ đâu, phá bỏ mọi rào cản về khoảng cách địa lý.',
        },
        {
          number: '02',
          title: 'Tối Ưu Chi Phí & Dự Toán Tài Chính',
          description: 'Chuyển đổi chi phí đầu tư phần cứng (CapEx) sang chi phí vận hành linh hoạt (OpEx); dễ dàng tăng giảm số lượng license theo biến động nhân sự.',
        },
        {
          number: '03',
          title: 'An Toàn Dữ Liệu & Tuân Thủ Bảo Mật',
          description: 'Dữ liệu doanh nghiệp được bảo vệ bởi tiêu chuẩn an ninh toàn cầu của Microsoft, giảm thiểu rủi ro mất mát dữ liệu do hỏng thiết bị phần cứng.',
        },
        {
          number: '04',
          title: 'Hỗ Trợ Toàn Diện Từ Viettel IDC',
          description: 'Đội ngũ chuyên gia Viettel IDC hỗ trợ chuyển đổi dữ liệu từ hệ thống cũ sang M365, đào tạo sử dụng và giải đáp kỹ thuật 24/7.',
        },
      ],
    },
    useCases: {
      eyebrow: 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
      headline: 'Kịch Bản Triển Khai Cho Mọi Mô Hình Doanh Nghiệp',
      items: [
        {
          id: 'm365-uc-1',
          title: '1. Doanh Nghiệp Áp Dụng Mô Hình Làm Việc Từ Xa & Hybrid Work',
          context: 'Nhân viên thường xuyên làm việc tại nhà, công tác hoặc chi nhánh mà vẫn cần truy cập tài liệu công việc liên tục.',
          solution: 'Sử dụng bộ công cụ Microsoft Teams và OneDrive giúp kết nối nhân viên và cộng tác tài liệu liền mạch trên mọi thiết bị.',
        },
        {
          id: 'm365-uc-2',
          title: '2. Doanh Nghiệp Muốn Chuẩn Hóa Bản Quyền Phần Mềm Văn Phòng',
          context: 'Loại bỏ rủi ro pháp lý và nguy cơ nhiễm virus/ransomware khi sử dụng các bản Office bẻ khóa (crack).',
          solution: 'Trang bị Microsoft 365 chính hãng giúp doanh nghiệp tuân thủ quyền sở hữu trí tuệ và luôn nhận các bản vá an ninh mới nhất.',
        },
        {
          id: 'm365-uc-3',
          title: '3. Doanh Nghiệp Cần Hệ Thống Email Doanh Nghiệp Chuyên Nghiệp',
          context: 'Hệ thống email cũ thường xuyên bị lỗi, dung lượng hạn chế và thiếu tính năng đồng bộ lịch họp.',
          solution: 'Chuyển đổi sang Exchange Online hộp thư 50 GB, đồng bộ lịch làm việc và danh bạ trên mọi thiết bị.',
        },
        {
          id: 'm365-uc-4',
          title: '4. Doanh Nghiệp Đòi Hỏi Tiêu Chuẩn Bảo Vệ Dữ Liệu Nghiêm Ngặt',
          context: 'Quản lý thông tin mật, tài liệu tài chính, đề phòng nguy cơ nhân viên làm rò rỉ dữ liệu ra bên ngoài.',
          solution: 'Áp dụng gói Business Premium với công nghệ bảo vệ chống thất thoát dữ liệu (DLP) và quản lý thiết bị Intune.',
        },
      ],
    },
    faq: {
      eyebrow: 'CÂU HỎI THƯỜNG GẶP',
      headline: 'Câu Hỏi Thường Gặp Về Dịch Vụ Microsoft 365',
      items: [
        {
          question: 'Sự khác biệt giữa Office vĩnh viễn (Office Home & Business) và Microsoft 365 là gì?',
          answer: 'Office vĩnh viễn chỉ được cài đặt trên 1 máy tính duy nhất và không được cập nhật các tính năng mới sau khi mua. Microsoft 365 là gói dịch vụ đám mây cho phép 1 người dùng cài đặt trên tối đa 5 máy tính + 5 máy tính bảng + 5 điện thoại, luôn được cập nhật tính năng mới nhất và đi kèm 1 TB OneDrive cùng hộp thư doanh nghiệp 50 GB.',
        },
        {
          question: 'Doanh nghiệp có thể mua kết hợp nhiều gói Microsoft 365 khác nhau không?',
          answer: 'Hoàn toàn được. Doanh nghiệp có thể linh hoạt phân bổ: ví dụ nhân viên văn phòng dùng Business Standard, nhân viên hiện trường dùng Business Basic và cấp quản lý dùng Business Premium để tối ưu hóa ngân sách.',
        },
        {
          question: 'Viettel IDC có hỗ trợ di chuyển (migration) dữ liệu email từ hệ thống cũ sang M365 không?',
          answer: 'Có. Viettel IDC có đội ngũ kỹ sư chuyên môn hỗ trợ lập kế hoạch và thực hiện chuyển đổi trọn gói dữ liệu thư từ hệ thống email cũ (Google Workspace, cPanel, Zimbra...) sang Microsoft 365 đảm bảo không gián đoạn liên lạc.',
        },
        {
          question: 'Dữ liệu lưu trên OneDrive có an toàn khi máy tính của nhân viên bị hỏng hoặc mất cắp không?',
          answer: 'Tuyệt đối an toàn. Toàn bộ dữ liệu được đồng bộ liên tục lên đám mây bảo mật của Microsoft. Khi nhân viên đổi máy mới, chỉ cần đăng nhập lại tài khoản là toàn bộ tài liệu sẽ được phục hồi tức thì.',
        },
        {
          question: 'Doanh nghiệp có nhận được hóa đơn giá trị gia tăng (VAT) hợp lệ khi mua qua Viettel IDC không?',
          answer: 'Có. Khách hàng mua bản quyền Microsoft 365 qua Viettel IDC sẽ được xuất hóa đơn tài chính VAT hợp lệ tại Việt Nam theo đúng quy định của Bộ Tài chính, giúp doanh nghiệp dễ dàng hạch toán chi phí hợp lệ.',
        },
      ],
    },
    footerCta: {
      headline: 'Sẵn Sàng Chuyển Đổi Không Gian Làm Việc Số Hiện Đại Cùng Microsoft 365?',
      subtext: 'Đội ngũ chuyên gia đám mây của Viettel IDC sẵn sàng tư vấn gói bản quyền tối ưu chi phí và hỗ trợ chuyển đổi dữ liệu toàn diện cho doanh nghiệp của bạn.',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
      buttonText: 'ĐĂNG KÝ TƯ VẤN & BÁO GIÁ MICROSOFT 365',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU KỸ THUẬT & TRỢ GIÚP',
      headline: 'Tài Nguyên Hướng Dẫn & Kênh Hỗ Trợ 24/7',
      documentation: {
        title: 'Cẩm Nang Quản Trị & Đào Tạo Sử Dụng (M365 Docs)',
        desc: 'Hướng dẫn quản trị tài khoản qua Admin Center, hướng dẫn cấu hình bảo mật 2 lớp (MFA), thiết lập nhóm làm việc trên Teams và đồng bộ thư viện SharePoint.',
        linkText: 'Xem Cẩm Nang Quản Trị',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Kỹ Thuật Viettel IDC 24/7 (Support Center)',
        desc: 'Đội ngũ kỹ sư Microsoft Certified đồng hành hỗ trợ cấu hình hệ thống, xử lý lỗi vận hành và tối ưu hóa chi phí bản quyền 24/7/365.',
        linkText: 'Gửi Yêu Cầu Hỗ Trợ',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI GIẢI PHÁP LIÊN QUAN',
      headline: 'Hệ Sinh Thái Dịch Vụ Doanh Nghiệp Tích Hợp',
      items: [
        {
          title: 'Viettel Cloud Backup (BaaS)',
          description: 'Sao lưu dự phòng dữ liệu Office 365 độc lập, bảo vệ chống xóa nhầm và mã độc ransomware.',
          path: '/services/storage/cloud-backup/',
          sku: 'SVC-016',
        },
        {
          title: 'Viettel Endpoint Security',
          description: 'Giải pháp bảo mật và kiểm soát thiết bị đầu cuối thông minh cho toàn thể nhân sự.',
          path: '/services/security/endpoint-security/',
          sku: 'SVC-033',
        },
        {
          title: 'Viettel Domain (Tên Miền)',
          description: 'Đăng ký tên miền riêng để thiết lập nhận diện thương hiệu cho email và dịch vụ đám mây.',
          path: '/services/domain-hosting/domain/',
          sku: 'SVC-053',
        },
        {
          title: 'Viettel Cloud Server',
          description: 'Hạ tầng máy chủ ảo đám mây lưu trữ các phần mềm kế toán, ERP và cơ sở dữ liệu doanh nghiệp.',
          path: '/services/compute/cloud-server/',
          sku: 'SVC-001A',
        },
      ],
    },
  },
};
