import { ServiceDetailConfig } from '../types/serviceDetail';

export const STANDARD_SERVICES_DATA_PART2B: Record<string, ServiceDetailConfig> = {
  // =========================================================================
  // 10. VIETTEL LICENSE LEASING
  // =========================================================================
  'license-leasing': {
    id: 'license-leasing',
    sku: 'SVC-050',
    pillar: 'digital-workplace',
    pageTitle: 'Viettel License Leasing – Cho Thuê Bản Quyền Phần Mềm Chính Hãng | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Bản quyền Phần mềm', path: '/services/digital-workplace' },
        { name: 'Viettel License Leasing' },
      ],
      eyebrow: 'DỊCH VỤ CHO THUÊ BẢN QUYỀN PHẦN MỀM CHÍNH HÃNG',
      headline: 'Viettel License Leasing – Dịch Vụ Cho Thuê License Bản Quyền Microsoft, Plesk, DirectAdmin Chính Hãng',
      subheading: 'Giải pháp cung cấp và cho thuê bản quyền phần mềm chính hãng theo tháng/năm, giúp doanh nghiệp tối ưu chi phí đầu tư ban đầu, chủ động quản lý vòng đời phần mềm và loại bỏ 100% rủi ro pháp lý về quyền sở hữu trí tuệ.',
      primaryCta: { text: 'Nhận Báo Giá Bản Quyền', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá Cho Thuê', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Tổng Quan Dịch Vụ Cho Thuê Bản Quyền Viettel License Leasing',
      leftDescription: [
        'Viettel License Leasing là dịch vụ cung cấp quyền sử dụng các phần mềm hệ điều hành, cơ sở dữ liệu và bảng điều khiển máy chủ theo hình thức thuê bao định kỳ (theo tháng hoặc năm). Thông qua chương trình đối tác dịch vụ cấp phép phần mềm (như Microsoft SPLA, Plesk Partner...), Viettel IDC mang đến cho khách hàng sự linh hoạt tối đa trong việc trang bị license chính hãng.',
        'Khách hàng có thể tăng giảm số lượng bản quyền linh hoạt theo quy mô hoạt động thực tế của từng dự án, không cần phải chi trả khoản tiền lớn mua bản quyền vĩnh viễn (Perpetual License) và luôn được nâng cấp miễn phí lên các phiên bản phần mềm mới nhất.',
      ],
      highlights: [
        {
          title: '100% Bản quyền chính hãng',
          description: 'Hợp tác chính thức với các hãng công nghệ hàng đầu thế giới: Microsoft, Plesk, DirectAdmin, RedHat.',
        },
        {
          title: 'Tối ưu dòng tiền doanh nghiệp',
          description: 'Chuyển đổi hoàn toàn chi phí mua sắm ban đầu (CapEx) sang chi phí vận hành linh hoạt (OpEx) theo tháng.',
        },
        {
          title: 'Nâng cấp phiên bản miễn phí',
          description: 'Luôn được quyền cập nhật lên các phiên bản phần mềm mới nhất trong suốt thời gian thuê dịch vụ.',
        },
        {
          title: 'Hợp thức hóa pháp lý & Kiểm toán',
          description: 'Cung cấp đầy đủ giấy chứng nhận cấp phép và hóa đơn VAT hợp pháp, phục vụ tốt các đợt kiểm toán phần mềm.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
      headline: 'Bảng Giá Cho Thuê Bản Quyền Phần Mềm Tiêu Chuẩn',
      controls: [
        {
          id: 'licenseGroup',
          label: 'Nhóm sản phẩm bản quyền',
          options: [
            { id: 'ms_os', label: '1. Hệ Điều Hành & App Microsoft (SPLA)' },
            { id: 'ms_sql', label: '2. Microsoft SQL Server (SPLA)' },
            { id: 'panel', label: '3. Web Panel (Plesk & DirectAdmin)' },
          ],
          defaultSelected: 'ms_os',
        },
      ],
      note: 'Bảng giá chưa bao gồm thuế VAT (nếu có). Áp dụng tính phí theo chu kỳ hàng tháng.',
      tables: [
        {
          id: 'ms_os_pricing_table',
          title: '1. NHÓM HỆ ĐIỀU HÀNH & ỨNG DỤNG MICROSOFT (CHƯƠNG TRÌNH SPLA)',
          applicableCondition: { licenseGroup: 'ms_os' },
          columns: [
            { header: 'Tên Sản Phẩm Bản Quyền', key: 'name', width: '35%' },
            { header: 'Đơn Vị Tính Cấp Phép', key: 'unit', width: '25%', align: 'center' },
            { header: 'Quy Chuẩn Cấp Tối Thiểu', key: 'minRule', width: '22%', align: 'center' },
            { header: 'Đơn Giá / Tháng', key: 'price', width: '18%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'Windows Server Standard Core ALNG', unit: 'Core License', minRule: 'Tối thiểu 8 Cores / máy chủ', price: '65.000 đ' },
            { name: 'Windows Server Datacenter Core ALNG', unit: 'Core License', minRule: 'Tối thiểu 8 Cores / máy chủ', price: '390.000 đ' },
            { name: 'Remote Desktop Services SAL (RDS CAL)', unit: 'User SAL', minRule: 'Theo số lượng người dùng kết nối', price: '195.000 đ' },
            { name: 'Office Standard SAL ALNG', unit: 'User SAL', minRule: 'Theo số lượng người dùng cài đặt', price: '440.000 đ' },
            { name: 'Office Professional Plus SAL ALNG', unit: 'User SAL', minRule: 'Theo số lượng người dùng cài đặt', price: '580.000 đ' },
          ],
        },
        {
          id: 'ms_sql_pricing_table',
          title: '2. NHÓM CƠ SỞ DỮ LIỆU MICROSOFT SQL SERVER (CHƯƠNG TRÌNH SPLA)',
          applicableCondition: { licenseGroup: 'ms_sql' },
          columns: [
            { header: 'Phiên Bản SQL Server', key: 'name', width: '35%' },
            { header: 'Phương Thức Cấp Phép', key: 'unit', width: '25%', align: 'center' },
            { header: 'Quy Chuẩn Cấp Phép', key: 'minRule', width: '22%', align: 'center' },
            { header: 'Đơn Giá / Tháng', key: 'price', width: '18%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'SQL Server Web Edition', unit: 'Core License', minRule: 'Tối thiểu 4 Cores / máy chủ ảo', price: '110.000 đ' },
            { name: 'SQL Server Standard Edition', unit: 'Core License', minRule: 'Tối thiểu 4 Cores / máy chủ ảo', price: '490.000 đ' },
            { name: 'SQL Server Enterprise Edition', unit: 'Core License', minRule: 'Tối thiểu 4 Cores / máy chủ ảo', price: '1.850.000 đ' },
          ],
        },
        {
          id: 'panel_pricing_table',
          title: '3. BẢNG GIÁ BẢN QUYỀN WEB PANEL (PLESK & DIRECTADMIN)',
          applicableCondition: { licenseGroup: 'panel' },
          columns: [
            { header: 'Tên Gói Bản Quyền', key: 'name', width: '35%' },
            { header: 'Môi Trường Triển Khai', key: 'env', width: '25%', align: 'center' },
            { header: 'Giới Hạn Tên Miền Quản Lý', key: 'domainLimit', width: '22%', align: 'center' },
            { header: 'Đơn Giá / Tháng', key: 'price', width: '18%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'Plesk Web Admin Edition', env: 'VPS / Cloud Server', domainLimit: 'Tối đa 10 Domains', price: '280.000 đ' },
            { name: 'Plesk Web Pro Edition', env: 'VPS / Cloud Server', domainLimit: 'Tối đa 30 Domains', price: '420.000 đ' },
            { name: 'Plesk Web Host Edition', env: 'VPS / Dedicated Server', domainLimit: 'Không giới hạn Domains', price: '750.000 đ' },
            { name: 'DirectAdmin VPS License', env: 'Cloud Server / VPS', domainLimit: 'Không giới hạn Domains', price: '150.000 đ' },
            { name: 'DirectAdmin Dedicated License', env: 'Máy chủ vật lý Dedicated', domainLimit: 'Không giới hạn Domains', price: '350.000 đ' },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp cần cấp phép phần mềm bản quyền theo mô hình Enterprise Agreement hoặc số lượng lớn?',
        buttonText: 'Yêu Cầu Báo Giá License Chuyên Biệt',
        notesPlaceholder: 'Đăng ký tư vấn bản quyền phần mềm doanh nghiệp',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG VƯỢT TRỘI & QUY CHUẨN CẤP PHÉP',
      headline: 'Đặc Quyền Của Dịch Vụ Cho Thuê Bản Quyền Phần Mềm',
      cards: [
        {
          id: 'lic-feat-1',
          title: 'Mô Hình Cấp Phép Linh Hoạt Theo Nhu Cầu',
          description: 'Dễ dàng mở rộng hoặc thu hẹp số lượng license theo từng tháng tương ứng với số lượng máy chủ hoặc nhân viên thực tế đang sử dụng.',
        },
        {
          id: 'lic-feat-2',
          title: 'Luôn Được Sử Dụng Phiên Bản Mới Nhất',
          description: 'Hưởng quyền nâng cấp tự động lên các bản phát hành mới nhất từ nhà sản xuất mà không phải tốn thêm bất kỳ chi phí mua phiên bản nâng cấp.',
        },
        {
          id: 'lic-feat-3',
          title: 'Hỗ Trợ Kỹ Thuật Kích Hoạt Nhanh Chóng',
          description: 'Khóa bản quyền (License Key) được cung cấp và kích hoạt tự động lên hệ thống chỉ trong vài phút sau khi hoàn tất đăng ký.',
        },
        {
          id: 'lic-feat-4',
          title: 'Đầy Đủ Chứng Nhận & Hồ Sơ Pháp Lý Hợp Chuẩn',
          description: 'Cung cấp hợp đồng kinh tế và hóa đơn VAT điện tử minh bạch, đảm bảo doanh nghiệp hoàn toàn vượt qua các đợt rà soát bản quyền.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Quy Chuẩn Cấp Phép (Technical Spec Table)',
      specs: [
        { category: 'Cơ chế cấp phép Microsoft SPLA', details: 'Tính theo số lượng Core vật lý/vCPU (Core-based) hoặc theo tài khoản người dùng (User-based SAL)' },
        { category: 'Số lượng Core tối thiểu (Windows Server)', details: 'Tối thiểu 8 Cores cho mỗi máy chủ ảo Cloud Server' },
        { category: 'Số lượng Core tối thiểu (SQL Server)', details: 'Tối thiểu 4 Cores cho mỗi máy chủ cơ sở dữ liệu' },
        { category: 'Phương thức bàn giao License', details: 'Kích hoạt qua hệ thống KMS Server nội bộ của Viettel IDC hoặc cấp License Key trực tiếp' },
        { category: 'Hình thức thanh toán', details: 'Thuê bao theo tháng, theo quý hoặc theo năm' },
        { category: 'Chính sách gia hạn & Hủy dịch vụ', details: 'Linh hoạt báo tăng/giảm số lượng bản quyền vào cuối chu kỳ thanh toán' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH DOANH NGHIỆP',
      headline: 'Lợi Ích Chiến Lược Khi Thuê License Tại Viettel IDC',
      pillars: [
        {
          number: '01',
          title: 'Không Cần Vốn Đầu Tư Ban Đầu (Zero CapEx)',
          description: 'Tránh việc phải bỏ ra hàng trăm triệu đồng mua license vĩnh viễn, giải phóng nguồn vốn lưu động để đầu tư vào kinh doanh cốt lõi.',
        },
        {
          number: '02',
          title: 'Triệt Tiêu Hoàn Toàn Rủi Ro Vi Phạm Bản Quyền',
          description: 'Bảo vệ thương hiệu và người đại diện pháp luật của doanh nghiệp khỏi các chế tài xử phạt nặng nề về quyền sở hữu trí tuệ.',
        },
        {
          number: '03',
          title: 'Phòng Ngừa Mã Độc & An Toàn Hệ Thống',
          description: 'Loại bỏ việc sử dụng các bản vá lỗi bẻ khóa (crack) trôi nổi chứa mã độc gián điệp, ransomware xâm nhập vào hạ tầng công ty.',
        },
        {
          number: '04',
          title: 'Hạch Toán Chi Phí Hợp Lệ Dễ Dàng',
          description: 'Chi phí thuê bao bản quyền được tính trực tiếp vào chi phí hoạt động kinh doanh (OpEx) có đầy đủ hóa đơn VAT hợp pháp.',
        },
      ],
    },
    useCases: {
      eyebrow: 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
      headline: 'Kịch Bản Khai Thác Bản Quyền Tối Ưu Cho Doanh Nghiệp',
      items: [
        {
          id: 'lic-uc-1',
          title: '1. Doanh Nghiệp Chạy Dự Án Ngắn Hạn & Môi Trường Thử Nghiệm',
          context: 'Triển khai dự án phần mềm kéo dài từ 3 đến 6 tháng, cần môi trường Windows Server và SQL Server hoàn chỉnh.',
          solution: 'Thuê license theo tháng trong thời gian thực hiện dự án và dừng thanh toán ngay khi dự án kết thúc.',
        },
        {
          id: 'lic-uc-2',
          title: '2. Doanh Nghiệp Cần Môi Trường Làm Việc Từ Xa Qua Remote Desktop (RDS)',
          context: 'Nhân viên kế toán, văn phòng cần truy cập phần mềm MISA, Bravo chạy trên máy chủ tập trung từ xa.',
          solution: 'Thuê gói bản quyền Windows Server kèm license Remote Desktop Services (RDS CAL) theo đúng số lượng nhân sự.',
        },
        {
          id: 'lic-uc-3',
          title: '3. Nhà Phát Triển Web & Công Ty Digital Agency Quản Lý Nhiều Website',
          context: 'Vận hành hàng chục website khách hàng trên máy chủ VPS mà không muốn tốn nhiều thời gian cấu hình dòng lệnh Linux.',
          solution: 'Thuê bản quyền bảng điều khiển Plesk Web Pro hoặc DirectAdmin giúp tự động hóa toàn bộ việc quản trị web hosting.',
        },
        {
          id: 'lic-uc-4',
          title: '4. Doanh Nghiệp Chuẩn Bị Thực Hiện Kiểm Toán Bản Quyền Phần Mềm (Audit)',
          context: 'Cần chuẩn hóa gấp toàn bộ hệ điều hành và cơ sở dữ liệu trên các máy chủ đang sử dụng phần mềm chưa có bản quyền.',
          solution: 'Chuyển đổi ngay sang hình thức thuê license chính hãng qua Viettel IDC để sở hữu đầy đủ chứng chỉ hợp lệ.',
        },
      ],
    },
    faq: {
      eyebrow: 'CÂU HỎI THƯỜNG GẶP',
      headline: 'Câu Hỏi Thường Gặp Về Dịch Vụ Cho Thuê Bản Quyền Phần Mềm',
      items: [
        {
          question: 'Chương trình cấp phép Microsoft SPLA là gì?',
          answer: 'SPLA (Services Provider License Agreement) là chương trình cấp phép chính thức của Microsoft cho phép các nhà cung cấp dịch vụ như Viettel IDC cho khách hàng thuê quyền sử dụng các phần mềm Microsoft trên nền tảng điện toán đám mây theo hình thức thuê bao định kỳ hàng tháng.',
        },
        {
          question: 'Tôi có thể mang license bản quyền đã mua trước đây lên máy chủ của Viettel IDC không?',
          answer: 'Có. Theo chính sách License Mobility thông qua gói Software Assurance (SA) của Microsoft hoặc chính sách Bring Your Own License (BYOL), bạn hoàn toàn có thể mang các bản quyền hợp lệ của mình lên triển khai trên hạ tầng máy chủ của Viettel IDC.',
        },
        {
          question: 'Tại sao Windows Server và SQL Server lại có quy định số Core cấp phép tối thiểu?',
          answer: 'Đây là quy tắc cấp phép bản quyền toàn cầu bắt buộc của hãng Microsoft: Windows Server quy định tối thiểu 8 Cores/máy chủ và SQL Server quy định tối thiểu 4 Cores/máy chủ ảo dù máy chủ thực tế có thể cấu hình ít số core hơn.',
        },
        {
          question: 'Khi tôi dừng thuê máy chủ tại Viettel IDC thì license phần mềm có tiếp tục duy trì không?',
          answer: 'License cho thuê theo chương trình SPLA chỉ có hiệu lực khi gắn liền với hạ tầng dịch vụ lưu trữ (Cloud Server, Dedicated Server) được cung cấp bởi Viettel IDC. Khi chấm dứt dịch vụ máy chủ, quyền sử dụng license cũng sẽ kết thúc.',
        },
        {
          question: 'Doanh nghiệp có nhận được hóa đơn VAT và giấy chứng nhận bản quyền không?',
          answer: 'Có. Toàn bộ dịch vụ cho thuê bản quyền tại Viettel IDC đều được cung cấp hợp đồng pháp lý, giấy tờ xác nhận cấp phép chính hãng và xuất hóa đơn giá trị gia tăng (VAT) hợp lệ theo quy định của pháp luật.',
        },
      ],
    },
    footerCta: {
      headline: 'Chuẩn Hóa Bản Quyền Phần Mềm & Tối Ưu Chi Phí Cho Doanh Nghiệp Ngay Hôm Nay',
      subtext: 'Trang bị ngay hệ sinh thái phần mềm chính hãng từ Microsoft, Plesk, DirectAdmin với chi phí thuê bao linh hoạt và hỗ trợ kích hoạt tức thì từ Viettel IDC.',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
      buttonText: 'ĐĂNG KÝ THUÊ BẢN QUYỀN NGAY',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU KỸ THUẬT & TRỢ GIÚP',
      headline: 'Tài Liệu Hướng Dẫn Kỹ Thuật & Cổng Trợ Giúp',
      documentation: {
        title: 'Hướng Dẫn Kích Hoạt Bản Quyền (License Docs)',
        desc: 'Tài liệu hướng dẫn kết nối máy chủ KMS nội bộ, kích hoạt khóa bản quyền Plesk/DirectAdmin và xử lý các thông báo gia hạn bản quyền.',
        linkText: 'Xem Hướng Dẫn Kỹ Thuật',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Kỹ Thuật Viettel IDC 24/7 (Support Center)',
        desc: 'Đội ngũ kỹ sư hỗ trợ tư vấn quy chuẩn cấp phép, hỗ trợ kích hoạt và giải quyết sự cố kỹ thuật 24/7 qua Hotline 1800 8088.',
        linkText: 'Gửi Yêu Cầu Hỗ Trợ',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI GIẢI PHÁP LIÊN QUAN',
      headline: 'Hệ Sinh Thái Hạ Tầng & Dịch Vụ Tích Hợp',
      items: [
        {
          title: 'Viettel Cloud Server',
          description: 'Máy chủ ảo đám mây tốc độ cao, tích hợp sẵn bản quyền Windows và SQL Server chính hãng.',
          path: '/services/compute/cloud-server/',
          sku: 'SVC-001A',
        },
        {
          title: 'Microsoft 365',
          description: 'Bộ ứng dụng văn phòng và cộng tác đám mây cho doanh nghiệp tích hợp Teams và OneDrive.',
          path: '/services/digital-workplace/microsoft-365/',
          sku: 'SVC-047',
        },
        {
          title: 'Viettel SSL',
          description: 'Chứng thư số bảo mật website, xác thực doanh nghiệp và nâng cao độ tin cậy trực tuyến.',
          path: '/services/security/ssl/',
          sku: 'SVC-035',
        },
        {
          title: 'Viettel Managed Services',
          description: 'Dịch vụ quản trị ủy thác hạ tầng, vận hành hệ thống máy chủ và ứng dụng chuyên nghiệp 24/7.',
          path: '/services/managed-services/sysadmin/',
          sku: 'SVC-065',
        },
      ],
    },
  },

  // =========================================================================
  // 11. VIETTEL DRIVE
  // =========================================================================
  'drive': {
    id: 'drive',
    sku: 'SVC-048',
    pillar: 'digital-workplace',
    pageTitle: 'Viettel Drive – Không Gian Lưu Trữ & Chia Sẻ Dữ Liệu Doanh Nghiệp | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Lưu trữ Đám mây', path: '/services/digital-workplace' },
        { name: 'Viettel Drive' },
      ],
      eyebrow: 'GIẢI PHÁP LƯU TRỮ, ĐỒNG BỘ & CHIA SẺ DỮ LIỆU ĐÁM MÂY CHO DOANH NGHIỆP',
      headline: 'Viettel Drive – Không Gian Lưu Trữ & Chia Sẻ Dữ Liệu Doanh Nghiệp Trực Tuyến An Toàn, Tiện Lợi',
      subheading: 'Giải pháp lưu trữ và cộng tác tệp tin trên đám mây chuyên biệt cho doanh nghiệp. Lưu trữ 100% dữ liệu tại các Data Center chuẩn quốc tế TIA-942 của Viettel IDC, đồng bộ đa nền tảng, mã hóa đầu cuối và kiểm soát quyền truy cập chặt chẽ.',
      primaryCta: { text: 'Dùng Thử Miễn Phí / Đăng Ký Tư Vấn', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá Gói VDrive', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Tổng Quan Nền Tảng Lưu Trữ & Đồng Bộ Số Viettel Drive',
      leftDescription: [
        'Viettel Drive là dịch vụ lưu trữ đám mây (Cloud Storage) được thiết kế chuyên biệt cho các cơ quan, tổ chức và doanh nghiệp. Dịch vụ cho phép người dùng lưu trữ, đồng bộ và chia sẻ tài liệu, hình ảnh, video và tệp tin công việc mọi lúc, mọi nơi thông qua giao diện Web, ứng dụng máy tính (Windows/macOS) và ứng dụng di động (iOS/Android).',
        'Với việc dữ liệu được lưu trữ hoàn toàn tại các Trung tâm dữ liệu của Viettel IDC tại Việt Nam, Viettel Drive bảo đảm tối đa tốc độ truy xuất nội địa, loại bỏ rủi ro gián đoạn do đứt cáp quang biển quốc tế và đáp ứng tuyệt đối các quy định của Nhà nước về an toàn thông tin mạng.',
      ],
      highlights: [
        {
          title: 'Đồng bộ đa nền tảng tức thời',
          description: 'Hỗ trợ đồng bộ dữ liệu tự động giữa máy tính cá nhân, điện thoại thông minh và trình duyệt web.',
        },
        {
          title: 'Chủ quyền dữ liệu 100% tại Việt Nam',
          description: 'Hạ tầng đặt tại TTDL chuẩn TIA-942 Rated 3, tuân thủ Luật An ninh mạng và Nghị định 53/2022/NĐ-CP.',
        },
        {
          title: 'Bảo mật & Phân quyền chuyên sâu',
          description: 'Mã hóa dữ liệu khi truyền tải và lưu trữ; phân quyền chia sẻ theo nhóm, phòng ban hoặc từng cá nhân.',
        },
        {
          title: 'Khôi phục lịch sử phiên bản tệp',
          description: 'Tự động lưu lịch sử các phiên bản sửa đổi của tệp tin, giúp khôi phục dễ dàng khi có thao tác nhầm lẫn.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & GÓI DỊCH VỤ',
      headline: 'Bảng Giá Gói Dịch Vụ Viettel Drive (VDrive)',
      note: 'Bảng giá niêm yết chưa bao gồm thuế VAT (nếu có).',
      tables: [
        {
          id: 'vdrive_pricing_table',
          title: 'BẢNG GIÁ CÁC GÓI CƯỚC VIETTEL DRIVE DOANH NGHIỆP',
          columns: [
            { header: 'Tên Gói Dịch Vụ', key: 'name', width: '20%' },
            { header: 'Dung Lượng Lưu Trữ', key: 'storage', width: '22%', align: 'center' },
            { header: 'Số Lượng Tài Khoản (Users)', key: 'users', width: '22%', align: 'center' },
            { header: 'Đơn Giá / Tháng', key: 'price', width: '18%', align: 'right', isPrice: true },
            { header: 'Đơn Giá / Năm', key: 'priceYear', width: '18%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'VDrive 1', storage: '500 GB', users: '10 Users', price: '500.000 đ', priceYear: '6.000.000 đ' },
            { name: 'VDrive 2', storage: '1.000 GB (1 TB)', users: '20 Users', price: '950.000 đ', priceYear: '11.400.000 đ' },
            { name: 'VDrive 3', storage: '2.000 GB (2 TB)', users: '40 Users', price: '1.800.000 đ', priceYear: '21.600.000 đ' },
            { name: 'VDrive 4', storage: '5.000 GB (5 TB)', users: '100 Users', price: '4.300.000 đ', priceYear: '51.600.000 đ' },
            { name: 'VDrive 5', storage: '10.000 GB (10 TB)', users: '200 Users', price: '8.500.000 đ', priceYear: '102.000.000 đ' },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp có nhu cầu dung lượng lưu trữ trên 10 TB hoặc cần tích hợp giải pháp Private Drive On-Premise?',
        buttonText: 'Yêu Cầu Thiết Kế Gói Doanh Nghiệp Riêng Biệt',
        notesPlaceholder: 'Đăng ký tư vấn giải pháp Viettel Drive quy mô lớn',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG VƯỢT TRỘI & NĂNG LỰC HẠ TẦNG',
      headline: 'Hệ Tính Năng Toàn Diện Của Nền Tảng Viettel Drive',
      cards: [
        {
          id: 'drive-feat-1',
          title: 'Lưu Trữ Tập Trung & Phân Quyền Thư Mục',
          description: 'Tạo cấu trúc thư mục chung cho phòng ban, thiết lập quyền chỉ đọc (Read-only), chỉnh sửa (Edit) hoặc tải xuống cho từng nhân viên.',
        },
        {
          id: 'drive-feat-2',
          title: 'Chia Sẻ Tệp Tin An Toàn Bằng Liên Kết',
          description: 'Tạo link chia sẻ ra bên ngoài có đặt mật khẩu bảo vệ, giới hạn thời gian hết hạn của link và chặn quyền tải xuống tệp tin.',
        },
        {
          id: 'drive-feat-3',
          title: 'Đồng Bộ Hóa Hai Chiều Tự Động',
          description: 'Ứng dụng cài trên máy tính tự động đồng bộ hóa thư mục làm việc lên đám mây, cho phép truy cập tệp ngay cả khi ngoại tuyến (Offline).',
        },
        {
          id: 'drive-feat-4',
          title: 'Quản Lý Lịch Sử Phiên Bản (File Versioning)',
          description: 'Lưu giữ chi tiết các bản chỉnh sửa trước đó của tài liệu, cho phép so sánh và hoàn tác lại phiên bản cũ chỉ với 1 cú nhấp chuột.',
        },
        {
          id: 'drive-feat-5',
          title: 'Thùng Rác Phục Hồi & Chống Xóa Nhầm',
          description: 'Tệp tin bị xóa được lưu tạm trong thùng rác hệ thống trong 30 ngày, người dùng hoặc quản trị viên có thể phục hồi lại toàn vẹn.',
        },
        {
          id: 'drive-feat-6',
          title: 'Nhật Ký Truy Cập Chi Tiết (Audit Logs)',
          description: 'Ghi nhận chi tiết lịch sử đăng nhập, tải lên, tải xuống và chia sẻ của toàn bộ người dùng, phục vụ công tác giám sát an ninh nội bộ.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật (Technical Spec Table)',
      specs: [
        { category: 'Nền tảng hỗ trợ', details: 'Web Portal, Windows Client, macOS Client, Ứng dụng di động iOS & Android' },
        { category: 'Giao thức mã hóa đường truyền', details: 'Mã hóa SSL/TLS 1.3 trong toàn bộ quá trình truyền tải tệp tin' },
        { category: 'Mã hóa dữ liệu lưu trữ (At-rest)', details: 'Mã hóa chuẩn AES 256-bit tại lớp ổ cứng lưu trữ' },
        { category: 'Tính năng bảo vệ liên kết chia sẻ', details: 'Đặt mật khẩu truy cập, hẹn ngày hết hạn liên kết, cấm quyền download' },
        { category: 'Cơ chế lưu trữ dự phòng', details: 'Mảng lưu trữ phân tán Distributed Storage với cơ chế nhân bản 3 bản sao dữ liệu' },
        { category: 'Hạ tầng Trung tâm Dữ liệu', details: 'Trung tâm Dữ liệu chuẩn quốc tế TIA-942 Rated 3 đặt tại Hà Nội và TP.HCM' },
        { category: 'Cam kết chất lượng dịch vụ (SLA)', details: 'Độ sẵn sàng dịch vụ đạt 99.99%' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH DOANH NGHIỆP',
      headline: 'Giá Trị Chuyển Đổi Không Gian Lưu Trữ Doanh Nghiệp',
      pillars: [
        {
          number: '01',
          title: 'Làm Việc Linh Hoạt Mọi Lúc Mọi Nơi',
          description: 'Xóa bỏ rào cản phụ thuộc vào máy tính bàn tại văn phòng, nhân viên dễ dàng xử lý công việc và duyệt tài liệu trên đường công tác.',
        },
        {
          number: '02',
          title: 'Bảo Vệ Tài Sản Trí Tuệ Doanh Nghiệp',
          description: 'Chấm dứt tình trạng tài liệu quan trọng nằm rải rác trên máy tính cá nhân hoặc USB dễ bị thất lạc, hỏng hóc hay nhiễm virus.',
        },
        {
          number: '03',
          title: 'Kiểm Soát Quyền Truy Cập Tuyệt Đối',
          description: 'Người quản trị có toàn quyền thu hồi tài khoản, ngắt kết nối thiết bị từ xa khi nhân viên nghỉ việc để tránh rò rỉ dữ liệu mật.',
        },
        {
          number: '04',
          title: 'Tốc Độ Vượt Trội Nhờ Hạ Tầng Nội Địa',
          description: 'Băng thông kết nối trong nước tốc độ cao giúp tải lên và tải xuống các tệp tin dung lượng lớn (video, bản vẽ CAD) cực nhanh.',
        },
      ],
    },
    useCases: {
      eyebrow: 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
      headline: 'Kịch Bản Khai Thác Viettel Drive Trong Doanh Nghiệp',
      items: [
        {
          id: 'drive-uc-1',
          title: '1. Thay Thế Hệ Thống Máy Chủ Tệp Tin Cục Bộ (File Server / NAS)',
          context: 'Doanh nghiệp đang tốn nhiều chi phí mua sắm và bảo trì thiết bị lưu trữ NAS tại văn phòng, khó truy cập từ xa an toàn.',
          solution: 'Chuyển toàn bộ dữ liệu lên Viettel Drive giúp tiết kiệm chi phí phần cứng và cho phép truy cập bảo mật từ mọi nơi.',
        },
        {
          id: 'drive-uc-2',
          title: '2. Lưu Trữ & Chia Sẻ Tài Liệu Cho Doanh Nghiệp Nhiều Chi Nhánh',
          context: 'Tập đoàn có các chi nhánh, nhà máy đặt tại nhiều tỉnh thành cần đồng bộ báo cáo và biểu mẫu công việc chung.',
          solution: 'Tạo các thư mục dùng chung (Shared Folders) phân quyền theo từng phòng ban, tự động cập nhật bản sửa đổi mới nhất.',
        },
        {
          id: 'drive-uc-3',
          title: '3. Công Ty Thiết Kế, Xây Dựng & Truyền Thông (Media / Design)',
          context: 'Thường xuyên phải gửi các tệp tin thiết kế nặng, video quảng cáo chất lượng cao cho đối tác và khách hàng nghiệm thu.',
          solution: 'Sử dụng liên kết chia sẻ Viettel Drive không giới hạn dung lượng tải, đặt mật khẩu và thời hạn link chuyên nghiệp.',
        },
        {
          id: 'drive-uc-4',
          title: '4. Doanh Nghiệp Khối Nhà Nước, Tài Chính Yêu Cầu Dữ Liệu Trong Nước',
          context: 'Cần tuân thủ quy định pháp luật không được lưu trữ dữ liệu nghiệp vụ quan trọng trên các nền tảng đám mây nước ngoài.',
          solution: 'Viettel Drive cam kết 100% dữ liệu nằm trên lãnh thổ Việt Nam, đáp ứng các tiêu chuẩn khắt khe về an toàn thông tin quốc gia.',
        },
      ],
    },
    faq: {
      eyebrow: 'CÂU HỎI THƯỜNG GẶP',
      headline: 'Câu Hỏi Thường Gặp Về Dịch Vụ Viettel Drive',
      items: [
        {
          question: 'Viettel Drive khác gì so với các dịch vụ Google Drive hay Dropbox cá nhân?',
          answer: 'Viettel Drive là giải pháp thiết kế chuyên biệt cho doanh nghiệp với tính năng quản trị tài khoản tập trung, phân quyền chi tiết, lưu trữ 100% dữ liệu tại Việt Nam giúp tốc độ tải cực nhanh và bảo đảm tuân thủ Luật An ninh mạng mà các dịch vụ đám mây ngoại quốc khó đáp ứng.',
        },
        {
          question: 'Dữ liệu của doanh nghiệp tôi trên Viettel Drive có bị quét hay đọc trộm không?',
          answer: 'Tuyệt đối không. Viettel IDC cam kết bảo mật quyền riêng tư của khách hàng theo hợp đồng pháp lý. Toàn bộ dữ liệu được mã hóa hai chiều và chỉ có người dùng sở hữu tài khoản mới có quyền mở và xem nội dung tệp tin.',
        },
        {
          question: 'Tôi có thể chia sẻ tệp tin cho người không có tài khoản Viettel Drive không?',
          answer: 'Hoàn toàn được. Bạn có thể tạo đường link chia sẻ công khai hoặc đặt mật khẩu bảo vệ để gửi cho bất kỳ đối tác bên ngoài nào. Người nhận chỉ cần nhấp vào link là có thể xem hoặc tải tài liệu trực tiếp trên trình duyệt mà không cần đăng ký tài khoản.',
        },
        {
          question: 'Khi dung lượng lưu trữ sắp hết, doanh nghiệp có thể nâng cấp thêm không?',
          answer: 'Có. Bạn có thể dễ dàng nâng cấp lên các gói cước dung lượng cao hơn hoặc mua thêm từng khối dung lượng lưu trữ bất kỳ lúc nào trực tiếp trên cổng quản trị dịch vụ mà không làm ảnh hưởng đến tệp tin đang lưu.',
        },
        {
          question: 'Dịch vụ có hỗ trợ khôi phục dữ liệu nếu máy tính của nhân viên bị mã độc tấn công không?',
          answer: 'Nhờ tính năng File Versioning lưu giữ lịch sử các phiên bản tệp, nếu máy tính của nhân viên bị mã độc mã hóa dữ liệu cục bộ, bạn chỉ cần truy cập vào Viettel Drive trên trình duyệt và khôi phục lại phiên bản tệp ở thời điểm trước khi bị tấn công.',
        },
      ],
    },
    footerCta: {
      headline: 'Nâng Cấp Không Gian Lưu Trữ Dữ Liệu Số Cho Doanh Nghiệp Của Bạn',
      subtext: 'Bảo vệ dữ liệu tập trung, làm việc cộng tác hiệu quả trên nền tảng đám mây Viettel Drive với tốc độ vượt trội và an toàn tuyệt đối.',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
      buttonText: 'ĐĂNG KÝ TRẢI NGHIỆM VIETTEL DRIVE NGAY',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU KỸ THUẬT & TRỢ GIÚP',
      headline: 'Tài Liệu Hướng Dẫn & Kênh Hỗ Trợ Kỹ Thuật',
      documentation: {
        title: 'Cẩm Nang Cài Đặt & Sử Dụng Viettel Drive (Docs)',
        desc: 'Hướng dẫn cài đặt ứng dụng máy tính và di động, cách tạo thư mục chia sẻ phòng ban, quản lý phân quyền người dùng và thiết lập bảo vệ link chia sẻ.',
        linkText: 'Xem Cẩm Nang Hướng Dẫn',
      },
      supportCenter: {
        title: 'Trung Tâm Chăm Sóc Khách Hàng Viettel IDC 24/7 (Support Center)',
        desc: 'Đội ngũ kỹ thuật viên trực 24/7 sẵn sàng hướng dẫn cấu hình, chuyển đổi dữ liệu và xử lý mọi yêu cầu qua Hotline 1800 8088.',
        linkText: 'Gửi Yêu Cầu Hỗ Trợ',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI LƯU TRỮ LIÊN QUAN',
      headline: 'Hệ Sinh Thái Dịch Vụ Lưu Trữ & Điện Toán Bổ Trợ',
      items: [
        {
          title: 'Viettel Cloud File Storage (vCFS)',
          description: 'Hệ thống lưu trữ tệp tin chia sẻ hiệu năng cao qua giao thức NFS/CIFS cho máy chủ đám mây.',
          path: '/services/storage/cloud-file-storage/',
          sku: 'SVC-014',
        },
        {
          title: 'Viettel Cloud Object Storage',
          description: 'Kho lưu trữ đối tượng dung lượng không giới hạn chuẩn S3 API dành cho dữ liệu lớn.',
          path: '/services/storage/cloud-object-storage/',
          sku: 'SVC-013',
        },
        {
          title: 'Viettel Cloud Backup (BaaS)',
          description: 'Sao lưu và bảo vệ dữ liệu tự động cho máy chủ, máy tính văn phòng và ứng dụng.',
          path: '/services/storage/cloud-backup/',
          sku: 'SVC-016',
        },
        {
          title: 'Viettel Cloud Server',
          description: 'Máy chủ ảo hiệu năng cao vận hành các hệ thống ứng dụng và cơ sở dữ liệu doanh nghiệp.',
          path: '/services/compute/cloud-server/',
          sku: 'SVC-001A',
        },
      ],
    },
  },

  // =========================================================================
  // 12. VIETTEL CLOUD PC
  // =========================================================================
  'cloud-pc': {
    id: 'cloud-pc',
    sku: 'SVC-049',
    pillar: 'digital-workplace',
    pageTitle: 'Viettel Cloud PC – Máy Tính Ảo Đám Mây Doanh Nghiệp Hiện Đại | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Điện toán Đám mây', path: '/services/digital-workplace' },
        { name: 'Viettel Cloud PC' },
      ],
      eyebrow: 'GIẢI PHÁP MÁY TÍNH ẢO DOANH NGHIỆP THẾ HỆ MỚI',
      headline: 'Viettel Cloud PC – Máy Tính Ảo Đám Mây Hiện Đại, Linh Hoạt & An Toàn Tuyệt Đối',
      subheading: 'Giải pháp cung cấp môi trường máy tính làm việc ảo (Virtual Desktop) cá nhân hóa vận hành trên nền tảng điện toán đám mây Viettel IDC. Cho phép nhân sự truy cập không gian làm việc Windows đầy đủ từ bất kỳ thiết bị nào (Laptop, Thin Client, Tablet, Smartphone) với tốc độ xử lý mượt mà và an ninh dữ liệu cấp độ Enterprise.',
      primaryCta: { text: 'Dùng Thử Miễn Phí / Đăng Ký Tư Vấn', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá Gói Cloud PC', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Tổng Quan Giải Pháp Máy Tính Ảo Đám Mây Viettel Cloud PC',
      leftDescription: [
        'Viettel Cloud PC là dịch vụ đưa toàn bộ hệ điều hành, phần mềm ứng dụng và dữ liệu máy tính để bàn của người dùng lên vận hành trên cụm máy chủ đám mây tập trung tại Trung tâm Dữ liệu Viettel IDC. Người dùng chỉ cần một thiết bị đầu cuối cơ bản kết nối Internet là có thể trải nghiệm môi trường máy tính Windows cá nhân hóa với hiệu năng tương đương máy tính vật lý cấu hình cao.',
        'Mô hình này giúp doanh nghiệp quản trị toàn bộ máy trạm của nhân viên từ một bảng điều khiển trung tâm duy nhất, ngăn chặn triệt để nguy cơ rò rỉ dữ liệu mật ra bên ngoài và tiết kiệm tới 40% chi phí đầu tư, bảo trì phần cứng máy tính.',
      ],
      highlights: [
        {
          title: 'Truy cập linh hoạt từ mọi thiết bị',
          description: 'Làm việc mượt mà từ PC cũ, Laptop cá nhân, máy trạm Thin Client hay máy tính bảng iPad/Android.',
        },
        {
          title: 'Dữ liệu không rời khỏi Data Center',
          description: 'Tài liệu và tệp tin kinh doanh được lưu trữ tập trung trên máy chủ an toàn, loại bỏ nguy cơ mất cắp từ máy cá nhân.',
        },
        {
          title: 'Khởi tạo & Cấp phát trong 5 phút',
          description: 'Triển khai máy tính làm việc cho nhân viên mới tức thì từ các mẫu ảnh hệ điều hành (Golden Image) chuẩn hóa.',
        },
        {
          title: 'Tiết kiệm chi phí đầu tư phần cứng',
          description: 'Kéo dài vòng đời thiết bị đầu cuối lên tới 7-10 năm, chuyển chi phí mua sắm CapEx sang chi phí thuê bao OpEx.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
      headline: 'Bảng Giá Gói Dịch Vụ Máy Tính Ảo Viettel Cloud PC',
      note: 'Bảng giá niêm yết chưa bao gồm thuế VAT (nếu có). Cấu hình sử dụng 100% ổ cứng Enterprise SSD tốc độ cao.',
      tables: [
        {
          id: 'cloud_pc_pricing_table',
          title: 'BẢNG GIÁ CÁC CẤU HÌNH CLOUD PC TIÊU CHUẨN',
          columns: [
            { header: 'Gói Cấu Hình', key: 'name', width: '20%' },
            { header: 'vCPU', key: 'vcpu', width: '15%', align: 'center' },
            { header: 'Dung Lượng RAM', key: 'ram', width: '18%', align: 'center' },
            { header: 'Ổ Cứng SSD', key: 'storage', width: '18%', align: 'center' },
            { header: 'Đối Tượng Phù Hợp', key: 'target', width: '29%', align: 'center' },
            { header: 'Đơn Giá / Tháng', key: 'price', width: '20%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'Office User', vcpu: '4 vCPU', ram: '4 GB RAM', storage: '100 GB SSD', target: 'Nhân viên văn phòng, kế toán, lễ tân, telesales', price: '690.000 đ' },
            { name: 'Power User', vcpu: '6 vCPU', ram: '8 GB RAM', storage: '150 GB SSD', target: 'Lập trình viên, phân tích dữ liệu, quản lý', price: '1.090.000 đ' },
            { name: 'Super User', vcpu: '8 vCPU', ram: '16 GB RAM', storage: '200 GB SSD', target: 'Kỹ sư đồ họa, thiết kế 2D/3D, biên tập video', price: '1.690.000 đ' },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp cần trang bị cấu hình chuyên dụng có card đồ họa GPU hoặc triển khai số lượng lớn trên 100 máy?',
        buttonText: 'Yêu Cầu Tư Vấn Giải Pháp & Báo Giá Số Lượng Lớn',
        notesPlaceholder: 'Đăng ký tư vấn triển khai máy tính ảo Cloud PC quy mô lớn',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG VƯỢT TRỘI & MA TRẬN KỸ THUẬT',
      headline: 'Đặc Quyền Vận Hành Của Nền Tảng Viettel Cloud PC',
      cards: [
        {
          id: 'cpc-feat-1',
          title: 'Giao Thức Truyền Màn Hình Tối Ưu Độ Trễ',
          description: 'Ứng dụng các giao thức hiển thị hiện đại (Blast Extreme, PCoIP, RDP) mang lại trải nghiệm thao tác chuột, bàn phím và xem video HD mượt mà.',
        },
        {
          id: 'cpc-feat-2',
          title: 'Quản Lý Chính Sách Bảo Mật Đầu Cuối Chặt Chẽ',
          description: 'Quản trị viên dễ dàng khóa cổng USB, cấm sao chép/dán clipboard giữa máy thật và máy ảo, ngăn chặn việc nhân viên mang dữ liệu ra ngoài.',
        },
        {
          id: 'cpc-feat-3',
          title: 'Quản Trị Tập Trung Qua Golden Image',
          description: 'Cập nhật hệ điều hành, cài đặt thêm phần mềm mới cho hàng trăm máy tính ảo đồng thời chỉ bằng việc chỉnh sửa trên một bản mẫu (Master Image).',
        },
        {
          id: 'cpc-feat-4',
          title: 'Khả Năng Tái Phục Hồi Tức Thì (Instant Recovery)',
          description: 'Khi máy tính ảo gặp lỗi hệ điều hành hoặc xung đột phần mềm, chỉ mất 1 phút để reset máy về trạng thái ban đầu mà không mất tệp cá nhân.',
        },
      ],
      specTableTitle: 'Ma Trận Thông Số Kỹ Thuật (Technical Spec Matrix)',
      specs: [
        { category: 'Hệ điều hành hỗ trợ', details: 'Windows 10 / Windows 11 Pro Enterprise, Ubuntu Desktop' },
        { category: 'Thiết bị đầu cuối hỗ trợ', details: 'Máy tính PC, Laptop, Thin Client, Zero Client, iPad, Máy tính bảng Android, Mac' },
        { category: 'Giao thức kết nối màn hình', details: 'Blast Extreme, PCoIP, RDP tối ưu đường truyền băng thông thấp' },
        { category: 'Cơ chế kiểm soát ngoại vi', details: 'Kiểm soát chặt chẽ USB Redirection, Microphone, Webcam, Máy in, Clipboard' },
        { category: 'Hạ tầng máy chủ ảo hóa', details: 'Cụm máy chủ Enterprise Dell/HPE, SAN Storage All-Flash tại TTDL Tier III' },
        { category: 'Bảo mật & Chứng nhận', details: 'ISO 27001:2013, ISO 27017:2015, Tiêu chuẩn an toàn thông tin Cấp độ 3' },
        { category: 'Cam kết chất lượng dịch vụ (SLA)', details: 'Cam kết độ sẵn sàng hoạt động 99.95%' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH DOANH NGHIỆP',
      headline: 'Tại Sao Doanh Nghiệp Nên Chuyển Đổi Sang Viettel Cloud PC?',
      pillars: [
        {
          number: '01',
          title: 'Bảo Mật Tuyệt Đối Dữ Liệu Doanh Nghiệp',
          description: 'Dữ liệu chỉ nằm trong Trung tâm dữ liệu của Viettel IDC, thiết bị cá nhân của nhân viên bị mất cắp hoặc hỏng hóc cũng không gây rò rỉ thông tin.',
        },
        {
          number: '02',
          title: 'Tối Ưu Chi Phí Đầu Tư & Vận Hành (TCO)',
          description: 'Tiết kiệm tới 40% chi phí mua sắm thiết bị mới; sử dụng các thiết bị phần cứng cũ làm màn hình hiển thị mà không lo giảm hiệu năng.',
        },
        {
          number: '03',
          title: 'Giải Phóng Đội Ngũ IT Nội Bộ',
          description: 'Không còn cảnh kỹ thuật viên phải chạy từng phòng ban để cài lại Windows hay sửa lỗi phần mềm, toàn bộ quản trị thực hiện từ xa trên portal.',
        },
        {
          number: '04',
          title: 'Hỗ Trợ Hoàn Hảo Xu Hướng Làm Việc Hybrid',
          description: 'Nhân viên có thể làm việc tại công ty, tại nhà hay quán cafe mà vẫn sử dụng đúng một màn hình máy tính làm việc quen thuộc.',
        },
      ],
    },
    useCases: {
      eyebrow: 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
      headline: 'Kịch Bản Khai Thác Máy Tính Ảo Thực Tế',
      items: [
        {
          id: 'cpc-uc-1',
          title: '1. Trung Tâm Chăm Sóc Khách Hàng & Call Center / BPO',
          context: 'Môi trường làm việc theo ca kíp, số lượng nhân viên đông, yêu cầu bảo mật cao không cho phép lưu trữ dữ liệu trên máy trạm.',
          solution: 'Trang bị máy trạm Thin Client giá rẻ kết nối vào Viettel Cloud PC, khóa toàn bộ cổng USB và cấm tải dữ liệu khách hàng.',
        },
        {
          id: 'cpc-uc-2',
          title: '2. Khối Tài Chính – Ngân Hàng, Bảo Hiểm & Công Ty Chứng Khoán',
          context: 'Nhân viên cần truy cập hệ thống phần mềm kế toán, giao dịch bảo mật cao với quy chuẩn tuân thủ an toàn thông tin khắt khe.',
          solution: 'Sử dụng Cloud PC đặt trong phân vùng mạng riêng (VPC), cô lập dữ liệu tuyệt đối và giám sát truy cập tập trung.',
        },
        {
          id: 'cpc-uc-3',
          title: '3. Doanh Nghiệp Thuê Nhân Sự Tạm Thời & Chuyên Gia Tư Vấn Thuê Ngoài',
          context: 'Cần cấp máy tính làm việc cho cộng tác viên bên ngoài trong vài tuần nhưng không muốn đưa dữ liệu dự án cho họ mang về nhà.',
          solution: 'Cấp phát tài khoản Cloud PC chỉ trong vài phút và thu hồi tài khoản ngay khi hợp đồng kết thúc.',
        },
        {
          id: 'cpc-uc-4',
          title: '4. Trường Học, Viện Nghiên Cứu & Trung Tâm Đào Tạo Tin Học',
          context: 'Phòng thực hành máy tính liên tục bị học viên cài đặt phần mềm lung tung hoặc nhiễm virus.',
          solution: 'Áp dụng tính năng Non-persistent Desktop: Tự động đưa máy tính về trạng thái sạch ban đầu sau mỗi buổi học kết thúc.',
        },
      ],
    },
    faq: {
      eyebrow: 'CÂU HỎI THƯỜNG GẶP',
      headline: 'Câu Hỏi Thường Gặp Về Dịch Vụ Viettel Cloud PC',
      items: [
        {
          question: 'Viettel Cloud PC có yêu cầu tốc độ đường truyền Internet cao không?',
          answer: 'Nhờ các giao thức nén màn hình tiên tiến, Viettel Cloud PC chỉ tiêu thụ lượng băng thông rất thấp (khoảng 150 Kbps – 500 Kbps cho các tác vụ văn phòng cơ bản). Mạng Internet cáp quang thông thường hoặc sóng 4G/5G đều có thể sử dụng mượt mà.',
        },
        {
          question: 'Tôi có thể dùng máy tính bảng iPad hoặc điện thoại để truy cập Cloud PC không?',
          answer: 'Hoàn toàn được. Bạn chỉ cần tải ứng dụng client miễn phí trên App Store hoặc Google Play, kết nối thêm bàn phím và chuột Bluetooth là có thể biến chiếc máy tính bảng thành một chiếc máy tính Windows hoàn chỉnh.',
        },
        {
          question: 'Nếu thiết bị vật lý của tôi bị hỏng hoặc mất cắp, dữ liệu trên Cloud PC có bị mất không?',
          answer: 'Không. Toàn bộ dữ liệu, ứng dụng và trạng thái làm việc của bạn đều được lưu giữ an toàn trên máy chủ tại Trung tâm Dữ liệu Viettel IDC. Bạn chỉ cần mượn một thiết bị khác đăng nhập lại tài khoản là tiếp tục công việc ngay tại màn hình đang mở.',
        },
        {
          question: 'Doanh nghiệp có thể nâng cấp cấu hình CPU/RAM cho từng máy tính ảo không?',
          answer: 'Có. Quá trình nâng cấp tài nguyên (CPU, RAM, Ổ cứng) diễn ra tức thì trên hệ thống portal quản trị mà không cần phải tháo lắp phần cứng như máy tính để bàn truyền thống.',
        },
        {
          question: 'Doanh nghiệp cần tối thiểu bao nhiêu máy tính ảo để triển khai dịch vụ?',
          answer: 'Viettel IDC hỗ trợ cung cấp dịch vụ linh hoạt từ quy mô nhỏ (chỉ từ 1 máy cho cá nhân/doanh nghiệp nhỏ) cho đến hàng nghìn máy tính ảo cho các tập đoàn lớn.',
        },
      ],
    },
    footerCta: {
      headline: 'Sẵn Sàng Chuyển Đổi Hạ Tầng Máy Tính Để Bàn Sang Đám Mây Hiện Đại?',
      subtext: 'Trải nghiệm ngay không gian làm việc số thế hệ mới cùng Viettel Cloud PC: Tiết kiệm chi phí, bảo mật tuyệt đối và quản trị tập trung dễ dàng.',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
      buttonText: 'ĐĂNG KÝ TRẢI NGHIỆM CLOUD PC NGAY',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU KỸ THUẬT & TRỢ GIÚP',
      headline: 'Tài Liệu Hướng Dẫn Kỹ Thuật & Cổng Trợ Giúp',
      documentation: {
        title: 'Cẩm Nang Cài Đặt & Kết Nối Cloud PC (Docs)',
        desc: 'Hướng dẫn cài đặt ứng dụng Client trên Windows, macOS, iOS, Android; hướng dẫn kết nối máy in, thiết bị ngoại vi và cấu hình độ phân giải màn hình.',
        linkText: 'Xem Cẩm Nang Cài Đặt',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Kỹ Thuật Viettel IDC 24/7 (Support Center)',
        desc: 'Đội ngũ chuyên gia ảo hóa hỗ trợ khởi tạo máy ảo mẫu (Golden Image), cấu hình đường truyền và xử lý sự cố 24/7 qua Hotline 1800 8088.',
        linkText: 'Gửi Yêu Cầu Hỗ Trợ',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI GIẢI PHÁP LIÊN QUAN',
      headline: 'Hệ Sinh Thái Hạ Tầng & Dịch Vụ Số Tích Hợp',
      items: [
        {
          title: 'Viettel Cloud File Storage',
          description: 'Hệ thống ổ đĩa mạng chia sẻ tập trung dữ liệu cho toàn bộ các máy tính ảo Cloud PC.',
          path: '/services/storage/cloud-file-storage/',
          sku: 'SVC-014',
        },
        {
          title: 'Viettel Cloud Backup (BaaS)',
          description: 'Sao lưu tự động định kỳ hình ảnh hệ điều hành và dữ liệu người dùng phòng chống sự cố.',
          path: '/services/storage/cloud-backup/',
          sku: 'SVC-016',
        },
        {
          title: 'Viettel Hybrid Connect',
          description: 'Đường truyền kênh riêng kết nối an toàn bảo mật giữa văn phòng doanh nghiệp và cụm Cloud PC.',
          path: '/services/network/hybrid-connect/',
          sku: 'SVC-028',
        },
        {
          title: 'Viettel Endpoint Security',
          description: 'Giải pháp phòng chống mã độc và kiểm soát an ninh đa lớp cho môi trường máy tính ảo.',
          path: '/services/security/endpoint-security/',
          sku: 'SVC-033',
        },
      ],
    },
  },
};
