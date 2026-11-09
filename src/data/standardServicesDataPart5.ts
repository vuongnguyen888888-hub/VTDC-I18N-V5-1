import { ServiceDetailConfig } from '../types/serviceDetail';

export const STANDARD_SERVICES_DATA_PART5: Record<string, ServiceDetailConfig> = {
  // =========================================================================
  // 1. TƯ VẤN THIẾT KẾ DATA CENTER (DATA CENTER CONSULTING)
  // =========================================================================
  'data-center-consulting': {
    id: 'data-center-consulting',
    sku: 'SVC-053',
    pillar: 'data-center',
    pageTitle: 'Dịch Vụ Tư Vấn Thiết Kế & Xây Dựng Data Center Chuẩn Quốc Tế TIA-942 | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Trung tâm dữ liệu', path: '/services/data-center' },
        { name: 'Tư vấn Data Center' },
      ],
      eyebrow: 'TIÊU CHUẨN QUỐC TẾ ANSI/TIA-942 & UPTIME TIER III/IV',
      headline: 'Dịch Vụ Tư Vấn Thiết Kế, Thẩm Định & Xây Dựng Trung Tâm Dữ Liệu Chuyên Nghiệp',
      subheading: 'Đội ngũ chuyên gia hàng đầu sở hữu các chứng chỉ quốc tế uy tín (CDCE, CDCS, CDCP, ATS) từ Viettel IDC tư vấn trọn gói từ quy hoạch kiến trúc, cơ điện (MEP), tối ưu hiệu suất năng lượng (PUE) đến đồng hành lấy chứng nhận quốc tế cho doanh nghiệp.',
      primaryCta: { text: 'Đăng Ký Tư Vấn Khảo Sát', action: 'quote' },
      secondaryCta: { text: 'Năng Lực & Tiêu Chuẩn', action: 'features' },
      statRow: [
        { number: '16+', label: 'Năm Kinh Nghiệm', desc: 'Dẫn đầu thị trường Data Center Việt Nam' },
        { number: '14', label: 'Trung Tâm Dữ Liệu', desc: 'Quy mô lớn nhất toàn quốc do Viettel vận hành' },
        { number: 'TIA-942', label: 'Rated 3 & 4', desc: 'Đầy đủ chứng chỉ thiết kế và xây dựng cơ sở' },
        { number: '100%', label: 'Đạt Chứng Nhận', desc: 'Tất cả dự án tư vấn đều đạt chứng chỉ quốc tế' },
      ],
    },
    overview: {
      eyebrow: 'TỔNG QUAN NĂNG LỰC TƯ VẤN',
      headline: 'Hiện Thực Hóa Phòng Máy Chủ & Trung Tâm Dữ Liệu Chuẩn Quốc Tế',
      leftDescription: [
        'Xây dựng phòng máy chủ (Server Room) hoặc Trung tâm dữ liệu (Data Center) riêng đòi hỏi kiến thức chuyên sâu đa ngành: từ kết cấu chịu tải, điện động lực, hệ thống làm mát chính xác, PCCC khí sạch, đến an ninh kiểm soát phân lớp và hệ thống quản trị năng lượng thông minh DCIM.',
        'Viettel IDC cung cấp dịch vụ tư vấn toàn diện theo tiêu chuẩn ANSI/TIA-942 và Uptime Institute, giúp các cơ quan chính phủ, ngân hàng, tập đoàn viễn thông và doanh nghiệp tối ưu chi phí đầu tư ban đầu (CAPEX), giảm thiểu chi phí vận hành (OPEX) và đảm bảo tính liên tục của hệ thống CNTT trong suốt vòng đời dự án.',
      ],
      diagramNote: 'Quy trình tư vấn 5 bước khép kín: Khảo sát hiện trạng -> Thiết kế cơ sở -> Thẩm định mô phỏng -> Giám sát thi công -> Hỗ trợ đánh giá chứng chỉ độc lập.',
      highlights: [
        {
          title: 'Khảo sát & Lập Báo Cáo Khả Thi (FS)',
          description: 'Đánh giá điều kiện địa lý, tải trọng sàn, nguồn điện lưới, rủi ro thiên tai và lập bài toán quy hoạch tổng thể công suất cho 5-10 năm.',
        },
        {
          title: 'Thiết Kế Cơ Điện MEP & Mô Phỏng CFD',
          description: 'Thiết kế 3D BIM, tính toán dòng khí động học CFD buồng nóng/buồng lạnh, tối ưu hóa hệ thống máy lạnh chính xác giải nhiệt gió hoặc nước.',
        },
        {
          title: 'Tối Ưu Chỉ Số Hiệu Quả Năng Lượng (PUE)',
          description: 'Ứng dụng công nghệ biến tần, Free Cooling và năng lượng tái tạo giúp hạ PUE xuống dưới 1.4, tiết kiệm hàng tỷ đồng tiền điện mỗi năm.',
        },
        {
          title: 'Đồng Hành Đạt Chứng Chỉ TIA-942 / Uptime Tier',
          description: 'Hỗ trợ chuẩn bị hồ sơ kỹ thuật, làm việc trực tiếp với các tổ chức chứng nhận độc lập quốc tế (EPI, Uptime) đến khi nhận chứng chỉ chính thức.',
        },
      ],
    },
    pricing: {
      eyebrow: 'GÓI DỊCH VỤ TƯ VẤN',
      headline: 'Phạm Vi Triển Khai Linh Hoạt Theo Nhu Cầu Dự Án',
      note: 'Chi phí tư vấn được tính toán dựa trên quy mô số tủ Rack, diện tích phòng máy (m2) và cấp độ chứng chỉ mục tiêu (Tier II, III, IV hoặc TIA-942 Rated 2, 3, 4).',
      tables: [
        {
          id: 'consulting_packages',
          title: 'Các Gói Tư Vấn Doanh Nghiệp',
          columns: [
            { header: 'Gói Dịch Vụ', key: 'planName', width: '30%' },
            { header: 'Phạm Vi Triển Khai', key: 'specs', width: '45%' },
            { header: 'Hình Thức', key: 'billingCycle', width: '15%', align: 'center' },
            { header: 'Chi Phí', key: 'price', width: '10%', align: 'right', isPrice: true },
          ],
          rows: [
            {
              planName: 'Gói 1: Khảo Sát & Đánh Giá Hiện Trạng',
              specs: 'Phòng máy chủ hiện hữu 5 - 30 Rack, đo đạc nhiệt độ, độ ẩm, chất lượng điện năng, lập báo cáo khuyến nghị khắc phục',
              billingCycle: 'Theo dự án',
              price: 'Liên hệ khảo sát',
            },
            {
              planName: 'Gói 2: Thiết Kế Cơ Sở & Chi Tiết (MEP)',
              specs: 'Thiết kế hệ thống điện dự phòng UPS/Máy phát, điều hòa chính xác, PCCC FM200/Novec 1230, kiểm soát an ninh BMS/DCIM',
              billingCycle: 'Theo dự án',
              price: 'Báo giá thiết kế',
            },
            {
              planName: 'Gói 3: Tư Vấn Chứng Nhận TIA-942 Rated 3',
              specs: 'Trọn gói từ thẩm tra thiết kế, giám sát quá trình xây dựng, chạy thử tải nghiệm thu (Commissioning) và đánh giá chứng chỉ',
              billingCycle: 'Theo dự án',
              price: 'Báo giá trọn gói',
            },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp đang chuẩn bị đầu tư phòng máy chủ hoặc nâng cấp trung tâm dữ liệu?',
        buttonText: 'Kết Nối Với Chuyên Gia Tư Vấn TIA-942',
        notesPlaceholder: 'Đăng ký tư vấn khảo sát hiện trạng hoặc thiết kế trung tâm dữ liệu mới',
      },
    },
    features: {
      eyebrow: 'TIÊU CHUẨN KỸ THUẬT',
      headline: 'Phương Pháp Luận Chuẩn Quốc Tế Cho Từng Khâu Triển Khai',
      cards: [
        {
          id: 'ft-1',
          title: 'Quy Hoạch Công Suất & Mở Rộng Linh Hoạt',
          description: 'Tính toán tải tiêu thụ dài hạn từ 5–10 năm, cho phép phân kỳ đầu tư (Modular DC) mà không gây gián đoạn tải đang chạy.',
        },
        {
          id: 'ft-2',
          title: 'Thiết Kế Hệ Thống Điện Độc Lập N+1 hoặc 2N',
          description: 'Đảm bảo khả năng bảo trì định kỳ mà không cần tắt nguồn thiết bị CNTT (Concurrently Maintainable), loại bỏ điểm nghẽn đơn độc.',
        },
        {
          id: 'ft-3',
          title: 'Giải Pháp Làm Mát Thông Minh Chuyên Biệt',
          description: 'Bố trí luồng khí lạnh/nóng khép kín (Cold/Hot Aisle Containment), ngăn ngừa hiện tượng điểm nóng (Hot-spots) cục bộ trong tủ Rack.',
        },
        {
          id: 'ft-4',
          title: 'Quản Trị Tích Hợp Tòa Nhà DC (DCIM)',
          description: 'Quy chuẩn hệ thống giám sát DCIM tập trung đo lường công suất, nhiệt độ, độ ẩm và cảnh báo sự cố tức thời 24/7.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật & Tiêu Chuẩn Tư Vấn Data Center',
      specs: [
        { category: 'Tiêu chuẩn tham chiếu', details: 'ANSI/TIA-942-B/C (Rated 1-4), Uptime Institute Tier I-IV, ISO/IEC 22237' },
        { category: 'Hạng mục tư vấn', details: 'Quy hoạch kiến trúc, thiết kế MEP, lựa chọn công nghệ làm mát, tối ưu PUE' },
        { category: 'Đội ngũ chuyên gia', details: 'Chuyên gia chứng chỉ quốc tế CDCP, CDCS, CDCE, CTDC, ATS từ Viettel IDC' },
        { category: 'Chứng nhận hỗ trợ', details: 'Tư vấn và đồng hành đánh giá chứng chỉ TIA-942 Rated 3 Facility & Design' },
        { category: 'Hồ sơ bàn giao', details: 'Báo cáo khảo sát, thiết kế cơ sở, dự toán CAPEX/OPEX, mô hình CFD mô phỏng dòng khí' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH CỐT LÕI',
      headline: 'Giá Trị Thực Tiễn Cho Dự Án Trung Tâm Dữ Liệu Doanh Nghiệp',
      pillars: [
        {
          number: '01',
          title: 'Tiết Kiệm Chi Phí Đầu Tư Ban Đầu (CAPEX)',
          description: 'Quy hoạch công suất chuẩn xác, tránh lãng phí ngân sách mua sắm trang thiết bị dư thừa quá lớn trong giai đoạn đầu.',
        },
        {
          number: '02',
          title: 'Tối Ưu Hóa Chi Phí Vận Hành Điện Năng (OPEX)',
          description: 'Thiết kế khí động học thông minh hạ chỉ số PUE, giúp doanh nghiệp tiết kiệm 20% - 35% chi phí tiêu thụ điện hàng tháng.',
        },
        {
          number: '03',
          title: 'Đảm Bảo An Toàn & Sẵn Sàng 99.982%+',
          description: 'Loại bỏ hoàn toàn các điểm lỗi đơn (Single Point of Failure), đảm bảo bảo trì định kỳ mà không gây gián đoạn dịch vụ.',
        },
        {
          number: '04',
          title: 'Uy Tín Thương Hiệu Chuẩn Quốc Tế',
          description: 'Sở hữu chứng chỉ TIA-942 Rated 3 được công nhận toàn cầu, tạo lợi thế cạnh tranh tuyệt đối khi đấu thầu và phục vụ khách hàng.',
        },
      ],
    },
    useCases: {
      eyebrow: 'ĐỐI TƯỢNG PHÙ HỢP',
      headline: 'Các Dự Án Thường Ứng Dụng Dịch Vụ Tư Vấn Viettel IDC',
      items: [
        {
          id: 'case-1',
          title: 'Ngân hàng & Tổ chức Tài chính xây dựng DC nội bộ',
          context: 'Yêu cầu khắt khe từ Ngân hàng Nhà nước và chuẩn PCI DSS về phòng máy chủ an toàn, dự phòng thảm họa độc lập.',
          solution: 'Viettel IDC tư vấn thiết kế trung tâm dữ liệu chính và DC dự phòng theo kiến trúc Active-Active chuẩn TIA-942 Rated 3.',
        },
        {
          id: 'case-2',
          title: 'Tập đoàn, Doanh nghiệp lớn nâng cấp phòng máy chủ cũ',
          context: 'Phòng máy chủ hoạt động nhiều năm xuất hiện tình trạng nóng cục bộ, quá tải điện, chập cháy và thiếu diện tích mở rộng.',
          solution: 'Khảo sát đo đạc nhiệt độ CFD, cải tạo hệ thống làm mát hành lang kín và nâng cấp phân phối nguồn điện PDU an toàn.',
        },
        {
          id: 'case-3',
          title: 'Các đơn vị cung cấp dịch vụ hạ tầng & ISP mới',
          context: 'Cần xây dựng trạm phân phối mạng hoặc Data Center thương mại phục vụ khách hàng tại các vùng kinh tế trọng điểm.',
          solution: 'Tư vấn trọn gói thiết kế kiến trúc, đánh giá hiệu quả đầu tư và hồ sơ dự thầu thi công đạt chuẩn quốc tế.',
        },
      ],
    },
    faq: {
      eyebrow: 'CÂU HỎI THƯỜNG GẶP',
      headline: 'Giải Đáp Thắc Mắc Về Dịch Vụ Tư Vấn Data Center',
      items: [
        {
          question: 'Sự khác biệt giữa chứng chỉ TIA-942 và Uptime Institute Tier là gì?',
          answer: 'Uptime Institute tập trung vào tiêu chí cơ điện (Điện và Làm mát), trong khi chuẩn ANSI/TIA-942 bao quát toàn diện 4 trụ cột: Kiến trúc & Xây dựng, Điện, Làm mát cơ điện, và Mạng Viễn thông cáp quang.',
        },
        {
          question: 'Thời gian tư vấn thiết kế một Data Center mất bao lâu?',
          answer: 'Tùy thuộc vào quy mô dự án. Đối với phòng Server Room (10-30 tủ rack), thời gian thiết kế khoảng 4-6 tuần. Đối với Data Center quy mô lớn (100-500 tủ rack), giai đoạn quy hoạch và thiết kế chi tiết mất khoảng 3-6 tháng.',
        },
        {
          question: 'Viettel IDC có hỗ trợ giám sát thi công và nghiệm thu không?',
          answer: 'Có. Viettel IDC cung cấp dịch vụ giám sát tác giả và kiểm thử nghiệm thu toàn tải Commissioning (IST - Integrated System Test) đảm bảo nhà thầu thi công đúng thiết kế.',
        },
      ],
    },
    footerCta: {
      headline: 'Xây Dựng Data Center Chuẩn Quốc Tế Cùng Chuyên Gia Viettel IDC',
      subtext: 'Liên hệ ngay với đội ngũ kỹ sư trưởng giàu kinh nghiệm để được tư vấn khảo sát và hoạch định dự án tối ưu nhất.',
      buttonText: 'Đặt Lịch Tư Vấn Dự Án',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU KỸ THUẬT',
      headline: 'Tiêu Chuẩn & Cẩm Nang Thiết Kế Phòng Máy Chủ',
      documentation: {
        title: 'Tài Liệu Hướng Dẫn Quy Chuẩn ANSI/TIA-942',
        desc: 'Tổng quan các yêu cầu kỹ thuật về nguồn điện, làm mát và an ninh phòng máy chủ theo tiêu chuẩn quốc tế mới nhất.',
        linkText: 'Xem tài liệu TIA-942',
      },
      supportCenter: {
        title: 'Trung Tâm Chuyên Gia Data Center 24/7',
        desc: 'Hỗ trợ giải đáp các thắc mắc chuyên sâu về tính toán tải nhiệt, phụ tải điện và lựa chọn giải pháp thiết bị.',
        linkText: 'Liên hệ chuyên gia tư vấn',
      },
    },
    relatedProducts: {
      eyebrow: 'DỊCH VỤ LIÊN QUAN',
      headline: 'Hạ Tầng Trung Tâm Dữ Liệu Bổ Trợ',
      items: [
        {
          sku: 'SVC-005',
          title: 'Thuê Chỗ Đặt Máy Chủ (Colocation)',
          description: 'Không gian tủ Rack tiêu chuẩn TIA-942 Rated 3 với nguồn điện ổn định và băng thông internet tốc độ cao.',
          path: '/services/data-center/colocation',
        },
        {
          sku: 'SVC-008',
          title: 'Thuê Máy Chủ Dùng Riêng (Dedicated Server)',
          description: 'Hạ tầng máy chủ phần cứng chính hãng cấu hình mạnh mẽ, đặt tại hệ thống 14 Data Center của Viettel.',
          path: '/services/data-center/server-leasing',
        },
      ],
    },
  },

  // =========================================================================
  // 2. VIETTEL CLOUD DATA ARCHIVING
  // =========================================================================
  'data-archiving': {
    id: 'data-archiving',
    sku: 'SVC-018',
    pillar: 'storage',
    pageTitle: 'Viettel Cloud Data Archiving – Dịch Vụ Lưu Trữ Dài Hạn & Bảo Toàn Dữ Liệu Doanh Nghiệp | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Lưu trữ & Dữ liệu', path: '/services/storage' },
        { name: 'Cloud Data Archiving' },
      ],
      eyebrow: 'LƯU TRỮ DÀI HẠN CHI PHÍ SIÊU THẤP CHO ENTERPRISE',
      headline: 'Viettel Cloud Data Archiving – Lưu Trữ Dài Hạn, Bảo Toàn Hồ Sơ & Tuân Thủ Pháp Lý Chi Phí Siêu Tối Ưu',
      subheading: 'Giải pháp lưu trữ đám mây tầng sâu (Cold/Archive Storage) dành cho dữ liệu ít truy cập, hồ sơ y tế, hồ sơ ngân hàng, video giám sát và sao lưu dự phòng với độ bền vững dữ liệu 99.999999999% (11 số 9).',
      primaryCta: { text: 'Dùng Thử & Nhận Báo Giá', action: 'quote' },
      secondaryCta: { text: 'Bảng Giá Lưu Trữ', action: 'pricing' },
      statRow: [
        { number: '11 số 9', label: '99.999999999%', desc: 'Độ bền vững dữ liệu an toàn tuyệt đối' },
        { number: '70%', label: 'Tiết Kiệm Chi Phí', desc: 'So với các dịch vụ lưu trữ nóng thông thường' },
        { number: 'S3 API', label: 'Tương Thích Chuẩn', desc: 'Dễ dàng tích hợp với Veeam, Commvault, Bacula' },
        { number: 'WORM', label: 'Khóa Dữ Liệu Bất Biến', desc: 'Chống mã hóa ransomware và xóa nhầm' },
      ],
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Kho Lưu Trữ Tầng Sâu Cho Dữ Liệu Pháp Lý & Hồ Sơ Lịch Sử',
      leftDescription: [
        'Doanh nghiệp thường xuyên phải đối mặt với bài toán dung lượng lưu trữ tăng trưởng theo cấp số nhân: video camera an ninh, hồ sơ bệnh án điện tử, chứng từ kế toán 10 năm, dữ liệu sao lưu database định kỳ. Việc duy trì những dữ liệu này trên các hệ thống lưu trữ nóng (Hot Storage) đắt đỏ gây lãng phí ngân sách lớn.',
        'Viettel Cloud Data Archiving cung cấp giải pháp lưu trữ lạnh chuyên dụng với chi phí chỉ bằng một phần nhỏ lưu trữ thông thường. Dữ liệu được bảo toàn nguyên vẹn trên hạ tầng đám mây phân tán của Viettel IDC, tuân thủ nghiêm ngặt các quy định pháp luật về bảo mật và lưu giữ hồ sơ điện tử tại Việt Nam.',
      ],
      diagramNote: 'Chuyển đổi dữ liệu thông minh qua Lifecycle Policy: Dữ liệu nóng (Hot) tự động dịch chuyển sang Tầng lưu trữ lạnh (Cold Archive) sau 30/90 ngày để tối ưu chi phí.',
      highlights: [
        {
          title: 'Chi Phí Siêu Tiết Kiệm Theo Dung Lượng',
          description: 'Chỉ trả tiền cho dung lượng lưu trữ thực tế với đơn giá thấp hơn tới 70% so với lưu trữ Object Storage thông thường.',
        },
        {
          title: 'Bảo Vệ Kháng Ransomware (Object Lock)',
          description: 'Hỗ trợ tính năng Write Once Read Many (WORM), khóa file bất biến trong số năm định trước, không ai có thể sửa đổi hay xóa bỏ.',
        },
        {
          title: 'Khôi Phục Linh Hoạt Theo Nhu Cầu',
          description: 'Hỗ trợ các cấp độ phục hồi: Siêu tốc (Expedited 1-5 phút) khi cần kiểm toán khẩn cấp, hoặc Chuẩn (Standard 3-5 giờ) tối ưu chi phí.',
        },
        {
          title: 'Mã Hóa Đa Lớp & Đạt Chuẩn An Toàn',
          description: 'Mã hóa tự động chuẩn AES-256 ở trạng thái nghỉ, chứng chỉ bảo mật ISO 27001, ISO 27017, PCI DSS và tuân thủ Luật An ninh mạng.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ DỊCH VỤ',
      headline: 'Biểu Phí Lưu Trữ Dài Hạn Rẻ Nhất Cho Doanh Nghiệp',
      note: 'Dung lượng tính theo Gigabyte/tháng (GB/tháng). Giá chưa bao gồm thuế VAT.',
      tables: [
        {
          id: 'archiving_rates',
          title: 'Đơn Giá Lưu Trữ & Truy Xuất',
          columns: [
            { header: 'Gói Dịch Vụ', key: 'planName', width: '35%' },
            { header: 'Đặc Điểm Kỹ Thuật', key: 'specs', width: '40%' },
            { header: 'Đơn Vị', key: 'billingCycle', width: '12%', align: 'center' },
            { header: 'Đơn Giá', key: 'price', width: '13%', align: 'right', isPrice: true },
          ],
          rows: [
            {
              planName: 'Lưu Trữ Dài Hạn (Archive Tier)',
              specs: 'Lưu trữ tối thiểu 90 ngày, độ bền 11 số 9, hỗ trợ tính năng WORM Object Lock',
              billingCycle: 'Theo GB/tháng',
              price: 'Từ 150 đ/GB/tháng',
            },
            {
              planName: 'Lưu Trữ Siêu Sâu (Deep Archive Tier)',
              specs: 'Lưu trữ tối thiểu 180 ngày cho hồ sơ lịch sử, thời gian phục hồi 5 - 12 giờ',
              billingCycle: 'Theo GB/tháng',
              price: 'Từ 90 đ/GB/tháng',
            },
            {
              planName: 'Khôi Phục Dữ Liệu Chuẩn (Standard Retrieval)',
              specs: 'Thời gian phục hồi 3 - 5 giờ, chi phí phục hồi theo dung lượng yêu cầu',
              billingCycle: 'Theo GB phục hồi',
              price: 'Từ 60 đ/GB',
            },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp có nhu cầu lưu trữ hồ sơ nhiều Petabyte cần phương án trọn gói?',
        buttonText: 'Nhận Đề Xuất Tối Ưu Chi Phí Lưu Trữ Dài Hạn',
        notesPlaceholder: 'Đăng ký nhận báo giá dự toán kho lưu trữ tài liệu số và sao lưu dự phòng dài hạn',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG VƯỢT TRỘI',
      headline: 'Đảm Bảo An Toàn & Bảo Mật Tuyệt Đối Cho Dữ Liệu Doanh Nghiệp',
      cards: [
        {
          id: 'ft-1',
          title: 'Mã Hóa Dữ Liệu Đầu Cuối (AES-256)',
          description: 'Toàn bộ dữ liệu được mã hóa tự động ở trạng thái nghỉ (At-rest) và trong quá trình truyền tải (In-transit) qua giao thức SSL/TLS.',
        },
        {
          id: 'ft-2',
          title: 'Khóa Dữ Liệu Bất Biến (Object Lock)',
          description: 'Kích hoạt cơ chế WORM để ngăn chặn việc sửa đổi hoặc xóa file trước thời hạn tuân thủ pháp lý, vô hiệu hóa mã độc tống tiền.',
        },
        {
          id: 'ft-3',
          title: 'Tương Thích Chuẩn AWS S3 API',
          description: 'Dễ dàng tích hợp với các phần mềm sao lưu nổi tiếng như Veeam, Commvault, Bacula, Veritas mà không cần chỉnh sửa mã nguồn.',
        },
        {
          id: 'ft-4',
          title: 'Băng Thông Truyền Tải Tốc Độ Cao',
          description: 'Hạ tầng mạng trục 100 Gbps của Viettel IDC đảm bảo nạp và khôi phục dữ liệu dung lượng lớn nhanh chóng khi cần kiểm toán.',
        },
      ],
      specTableTitle: 'Thông Số Kỹ Thuật Viettel Cloud Data Archiving',
      specs: [
        { category: 'Độ bền dữ liệu (Durability)', details: '99.999999999% (11 số 9) bảo toàn tuyệt đối không suy thoái dữ liệu' },
        { category: 'Giao thức truy xuất', details: 'RESTful API tương thích hoàn toàn chuẩn AWS S3 Glacier API' },
        { category: 'Thời gian phục hồi', details: 'Expedited (1-5 phút), Standard (3-5 giờ), Bulk (5-12 giờ)' },
        { category: 'Mã hóa lưu trữ', details: 'Chuẩn AES-256 mã hóa tự động ở trạng thái nghỉ (at-rest) và SSL/TLS trên đường truyền' },
        { category: 'Tính năng bảo vệ', details: 'WORM (Write Once Read Many), Object Lock, Immutability chống Ransomware' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH DÀNH CHO ENTERPRISE',
      headline: 'Tại Sao Doanh Nghiệp Chọn Viettel Cloud Data Archiving',
      pillars: [
        {
          number: '01',
          title: 'Tiết Kiệm Chi Phí Tối Đa',
          description: 'Cắt giảm 70% ngân sách lưu trữ dữ liệu so với lưu trữ nóng và loại bỏ hoàn toàn chi phí bảo trì băng từ LTO.',
        },
        {
          number: '02',
          title: 'Tuân Thủ Quy Định Pháp Lý Việt Nam',
          description: 'Dữ liệu được lưu trữ tại các trung tâm dữ liệu trong lãnh thổ Việt Nam, đáp ứng 100% Luật An ninh mạng và Nghị định 13/2023/NĐ-CP.',
        },
        {
          number: '03',
          title: 'Chống Mất Mát Dữ Liệu Tuyệt Đối',
          description: 'Hệ thống lưu trữ phân tán đa vùng (Multi-AZ) với độ bền dữ liệu 11 số 9, cam kết không suy thoái hay hư hại dữ liệu.',
        },
        {
          number: '04',
          title: 'Tự Động Hóa Vòng Đời Dữ Liệu',
          description: 'Thiết lập quy tắc Lifecycle Policy tự động chuyển file sang tầng lạnh sau thời gian cấu hình mà không cần can thiệp thủ công.',
        },
      ],
    },
    useCases: {
      eyebrow: 'ỨNG DỤNG THỰC TẾ',
      headline: 'Các Trường Hợp Sử Dụng Phổ Biến Của Data Archiving',
      items: [
        {
          id: 'case-1',
          title: 'Lưu trữ hồ sơ bệnh án điện tử (EMR) ngành Y tế',
          context: 'Quy định ngành y tế yêu cầu bệnh viện phải lưu trữ hồ sơ bệnh án và phim chụp X-quang/MRI từ 10 đến 20 năm.',
          solution: 'Tự động đồng bộ hình ảnh PACS và hồ sơ bệnh nhân vào Viettel Data Archiving, giúp bệnh viện tiết kiệm hàng trăm triệu tiền ổ cứng mỗi năm.',
        },
        {
          id: 'case-2',
          title: 'Chứng từ giao dịch tài chính & Ngân hàng',
          context: 'Các ngân hàng và công ty chứng khoán bắt buộc phải lưu trữ log giao dịch và chứng từ kiểm toán tối thiểu 5 - 10 năm.',
          solution: 'Áp dụng tính năng Object Lock WORM đảm bảo tính toàn vẹn tuyệt đối, sẵn sàng xuất trình báo cáo khi cơ quan kiểm toán yêu cầu.',
        },
        {
          id: 'case-3',
          title: 'Lưu trữ video giám sát camera an ninh (CCTV)',
          context: 'Các chuỗi cửa hàng, nhà máy và khu công nghiệp cần lưu trữ dữ liệu video từ hàng trăm camera trong 30-90 ngày.',
          solution: 'Đẩy dữ liệu video nén lên Data Archiving giúp truy xuất lại bất cứ đoạn video nào khi có sự cố phát sinh.',
        },
      ],
    },
    faq: {
      eyebrow: 'HỎI ĐÁP THƯỜNG GẶP',
      headline: 'Câu Hỏi Phổ Biến Về Dịch Vụ Lưu Trữ Dài Hạn',
      items: [
        {
          question: 'Thời gian phục hồi dữ liệu từ Data Archiving mất bao lâu?',
          answer: 'Viettel IDC hỗ trợ 3 mức phục hồi: Expedited (1 - 5 phút cho trường hợp khẩn cấp), Standard (3 - 5 giờ cho quy trình thông thường), và Bulk (5 - 12 giờ cho các lô dữ liệu lớn hàng Terabyte).',
        },
        {
          question: 'Dữ liệu lưu trữ có thể bị sửa đổi hoặc xóa bởi virus tống tiền không?',
          answer: 'Không thể. Khi kích hoạt chế độ Object Lock với chính sách Compliance Mode, dữ liệu không thể bị chỉnh sửa hay xóa bởi bất kỳ ai (kể cả tài khoản quản trị Root) cho đến khi hết hạn bảo quản.',
        },
        {
          question: 'Có công cụ nào hỗ trợ tải dữ liệu tự động lên Data Archiving không?',
          answer: 'Có. Dịch vụ tương thích 100% với AWS CLI, S3 Browser, Cyberduck, Rclone và các phần mềm sao lưu doanh nghiệp như Veeam Backup & Replication.',
        },
      ],
    },
    footerCta: {
      headline: 'Bảo Toàn Dữ Liệu Doanh Nghiệp Với Chi Phí Tiết Kiệm Nhất',
      subtext: 'Bắt đầu dùng thử Viettel Cloud Data Archiving ngay hôm nay để trải nghiệm độ an toàn và tốc độ vượt trội.',
      buttonText: 'Đăng Ký Trải Nghiệm Miễn Phí',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
    },
    docsSupport: {
      eyebrow: 'HƯỚNG DẪN KỸ THUẬT',
      headline: 'Tài Liệu Tích Hợp Data Archiving',
      documentation: {
        title: 'Hướng Dẫn Kết Nối S3 Glacier API',
        desc: 'Xem hướng dẫn chi tiết cách cấu hình phần mềm sao lưu Veeam và tập lệnh tự động hóa nạp dữ liệu vào kho lưu trữ.',
        linkText: 'Xem tài liệu API',
      },
      supportCenter: {
        title: 'Hỗ Trợ Kỹ Thuật Chuyên Sâu 24/7',
        desc: 'Đội ngũ chuyên gia lưu trữ Viettel IDC luôn sẵn sàng tư vấn cấu hình chính sách lưu trữ tối ưu.',
        linkText: 'Yêu cầu hỗ trợ kỹ thuật',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI LƯU TRỮ',
      headline: 'Các Giải Pháp Lưu Trữ Đám Mây Khác Của Viettel IDC',
      items: [
        {
          sku: 'SVC-004',
          title: 'Viettel Cloud Object Storage (vStorage)',
          description: 'Lưu trữ đối tượng đám mây tốc độ cao cho ứng dụng web, di động và phân phối tài nguyên trực tuyến.',
          path: '/services/storage/cloud-object-storage',
        },
        {
          sku: 'SVC-017',
          title: 'Viettel Cloud Backup (vBackup)',
          description: 'Giải pháp sao lưu và phục hồi thảm họa tự động toàn diện cho máy chủ ảo và máy chủ vật lý.',
          path: '/services/storage/cloud-backup',
        },
      ],
    },
  },

  // =========================================================================
  // 3. VIETTEL MEDIA CDN
  // =========================================================================
  'media-cdn': {
    id: 'media-cdn',
    sku: 'SVC-028',
    pillar: 'networking',
    pageTitle: 'Viettel Media CDN – Mạng Phân Phối Nội Dung Video & Đa Phương Tiện Tốc Độ Cao | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Mạng & Truyền tải', path: '/services/networking' },
        { name: 'Media CDN' },
      ],
      eyebrow: 'BĂNG THÔNG NỘI ĐỊA 4.5+ TBPS & ĐỘ TRỄ DƯỚI 20MS',
      headline: 'Viettel Media CDN – Tối Ưu Truyền Phát Video Trực Tuyến & Livestream Siêu Tốc Toàn Quốc',
      subheading: 'Mạng phân phối nội dung đa phương tiện tận dụng hạ tầng mạng viễn thông Viettel lớn nhất Việt Nam. Đảm bảo trải nghiệm xem video mượt mà, không giật lag (buffering), tối ưu độ phân giải thích ứng (ABR) cho nền tảng OTT, Giáo dục trực tuyến và Truyền hình số.',
      primaryCta: { text: 'Dùng Thử Băng Thông CDN', action: 'trial' },
      secondaryCta: { text: 'Bảng Giá & Gói Cước', action: 'pricing' },
      statRow: [
        { number: '4.5+ Tbps', label: 'Băng Thông CDN', desc: 'Hạ tầng mạng phân phối lớn nhất Việt Nam' },
        { number: '< 20ms', label: 'Độ Trễ Trung Bình', desc: 'Trải nghiệm video tức thời tại 63 tỉnh thành' },
        { number: '99.99%', label: 'Cam Kết Uptime', desc: 'Hệ thống máy chủ Edge phân tán dự phòng' },
        { number: '100%', label: 'Kháng Cáp Biển', desc: 'Không bị ảnh hưởng khi đứt cáp quang quốc tế' },
      ],
    },
    overview: {
      eyebrow: 'TỔNG QUAN GIẢI PHÁP',
      headline: 'Đưa Nội Dung Video Đến Hàng Triệu Khán Giả Cùng Lúc',
      leftDescription: [
        'Truyền phát video chất lượng cao (HD, 4K) và Livestream các trận đấu thể thao, sự kiện âm nhạc hay lớp học trực tuyến đòi hỏi năng lực băng thông khổng lồ và khả năng mở rộng đột biến trong vài giây để không làm sập máy chủ gốc (Origin Server).',
        'Viettel Media CDN đưa nội dung video đến gần người xem nhất thông qua hàng chục điểm Edge Server đặt tại khắp các tỉnh thành trên mạng trục Viettel. Thuật toán cân bằng tải thông minh và hỗ trợ đầy đủ các giao thức HLS, DASH, WebRTC mang lại trải nghiệm xem không độ trễ, hình ảnh sắc nét tuyệt đối.',
      ],
      diagramNote: 'Mô hình phân phối Edge Caching: 95%+ lượt xem được phục vụ trực tiếp từ máy chủ biên Viettel CDN gần nhất, giảm tải 90% cho máy chủ gốc của doanh nghiệp.',
      highlights: [
        {
          title: 'Hỗ Trợ Video On Demand (VOD) & Livestream',
          description: 'Tương thích hoàn hảo với mọi định dạng phát trực tiếp (RTMP, HLS, CMAF) và video theo yêu cầu với tính năng tua nhanh mượt mà.',
        },
        {
          title: 'Bảo Vệ Bản Quyền Video Chuyên Nghiệp (DRM)',
          description: 'Tích hợp mã hóa bảo vệ bản quyền số Widevine, FairPlay, PlayReady cùng tính năng chống chia sẻ liên kết trộm (Token Auth & Geo-block).',
        },
        {
          title: 'Chuyển Đổi Định Dạng Động (Transcoding On-the-fly)',
          description: 'Hỗ trợ tính năng nén và xuất luồng video đa cấu hình (Adaptive Bitrate) phù hợp với tốc độ kết nối của thiết bị di động.',
        },
        {
          title: 'Bảng Thống Kê & Phân Tích Khán Giả Thời Gian Thực',
          description: 'Báo cáo chi tiết số lượng người xem đồng thời (CCU), băng thông tiêu thụ, tỷ lệ cache hit và phân bố người xem theo vùng miền.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ DỊCH VỤ',
      headline: 'Chi Phí Linh Hoạt Theo Lưu Lượng Hoặc Băng Thông Đỉnh',
      note: 'Hỗ trợ 2 hình thức thanh toán: Theo dung lượng truyền tải (GB Traffic) hoặc Theo băng thông đỉnh (Mbps 95th Percentile).',
      tables: [
        {
          id: 'media_cdn_rates',
          title: 'Gói Cước Phân Phối Video Media CDN',
          columns: [
            { header: 'Gói Cước', key: 'planName', width: '30%' },
            { header: 'Quy Mô & Tính Năng', key: 'specs', width: '45%' },
            { header: 'Hình Thức', key: 'billingCycle', width: '12%', align: 'center' },
            { header: 'Đơn Giá', key: 'price', width: '13%', align: 'right', isPrice: true },
          ],
          rows: [
            {
              planName: 'Gói Lưu Lượng Cơ Bản (Pay-as-you-go)',
              specs: 'Dưới 10 TB/tháng, đầy đủ tính năng Live/VOD, hỗ trợ giao thức HTTP/3 & SSL miễn phí',
              billingCycle: 'Theo GB/tháng',
              price: 'Từ 350 đ/GB',
            },
            {
              planName: 'Gói Doanh Nghiệp (High Volume)',
              specs: 'Từ 50 TB đến 500 TB/tháng, hỗ trợ DRM bản quyền, kỹ sư hỗ trợ riêng khi diễn ra sự kiện',
              billingCycle: 'Theo GB/tháng',
              price: 'Từ 180 đ/GB',
            },
            {
              planName: 'Gói Băng Thông Chuyên Dụng (Commit Bandwidth)',
              specs: 'Cam kết băng thông đỉnh từ 1 Gbps đến 50 Gbps, phù hợp đài truyền hình & OTT',
              billingCycle: 'Theo tháng',
              price: 'Liên hệ giá tốt nhất',
            },
          ],
        },
      ],
      customCta: {
        text: 'Nền tảng OTT, Livestream của doanh nghiệp sắp ra mắt chiến dịch lớn?',
        buttonText: 'Nhận Tư Vấn Cấu Hình CDN & PoC Thử Nghiệm',
        notesPlaceholder: 'Đăng ký tư vấn giải pháp tăng tốc video streaming và phân phối nội dung trực tuyến',
      },
    },
    features: {
      eyebrow: 'CÔNG NGHỆ ĐỘT PHÁ',
      headline: 'Hạ Tầng Tối Tân Đảm Bảo Trải Nghiệm Xem Liền Mạch',
      cards: [
        {
          id: 'ft-1',
          title: 'Tự Động Chuyển Đổi Độ Phân Giải (ABR)',
          description: 'Tương thích hoàn hảo với Adaptive Bitrate Streaming, tự động điều chỉnh độ nét video theo tốc độ mạng của người dùng.',
        },
        {
          id: 'ft-2',
          title: 'Cơ Chế Dynamic Caching Thông Minh',
          description: 'Thuật toán lưu đệm tối tân nhận diện thông minh các đoạn video phân mảnh (Chunks) được xem nhiều nhất để giữ lại ở bộ nhớ RAM biên.',
        },
        {
          id: 'ft-3',
          title: 'Chống Tấn Công DDoS Tích Hợp',
          description: 'Hạ tầng CDN hoạt động như một lá chắn phân tán, hấp thụ và lọc sạch các đợt tấn công DDoS lớp 3/4/7 nhắm vào Origin Server.',
        },
        {
          id: 'ft-4',
          title: 'Hỗ Trợ Giao Thức Mới Nhất HTTP/3 & QUIC',
          description: 'Ứng dụng HTTP/3 qua giao thức UDP giúp rút ngắn thời gian thiết lập kết nối (0-RTT), giảm độ trễ tối đa cho mạng di động.',
        },
      ],
      specTableTitle: 'Thông Số Kỹ Thuật Viettel Media CDN',
      specs: [
        { category: 'Băng thông mạng phân phối', details: 'Hơn 4.5+ Tbps kết nối trực tiếp vào mạng trục viễn thông Viettel' },
        { category: 'Giao thức hỗ trợ', details: 'HLS, DASH, CMAF, RTMP, HTTP-FLV, WebRTC Low Latency' },
        { category: 'Bảo mật truyền phát', details: 'Token Authentication, Geo-blocking, Referrer Protection, DRM (Widevine, FairPlay)' },
        { category: 'Tính năng tối ưu', details: 'Live-to-VOD tự động, Adaptive Bitrate (ABR) Streaming, Dynamic Caching' },
        { category: 'Độ trễ trung bình', details: '< 20ms đến các người dùng cuối tại 63 tỉnh thành Việt Nam' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI THẾ CẠNH TRANH',
      headline: 'Tại Sao Các Đơn Vị Truyền Thông Lựa Chọn Viettel Media CDN',
      pillars: [
        {
          number: '01',
          title: 'Khả Năng Chịu Tải Hàng Triệu CCU',
          description: 'Sẵn sàng phục vụ đồng thời hàng triệu khán giả theo dõi các trận cầu đỉnh cao mà không xảy ra hiện tượng đứng hình hay nghẽn mạng.',
        },
        {
          number: '02',
          title: 'Bảo Vệ Máy Chủ Gốc (Origin Shield)',
          description: 'Hấp thụ hơn 95% yêu cầu truy cập tại tầng biên, giúp máy chủ gốc luôn hoạt động nhẹ nhàng và an toàn.',
        },
        {
          number: '03',
          title: 'Tối Ưu Trải Nghiệm Người Dùng (QoE)',
          description: 'Rút ngắn thời gian khởi phát video (Startup Time) xuống dưới 1 giây, nâng cao sự hài lòng và tỷ lệ giữ chân người xem.',
        },
        {
          number: '04',
          title: 'Hỗ Trợ Kỹ Thuật Trực Tuyến 24/7',
          description: 'Đội ngũ kỹ sư trực chiến giám sát luồng phát thời gian thực trong suốt các khung giờ vàng diễn ra sự kiện.',
        },
      ],
    },
    useCases: {
      eyebrow: 'ỨNG DỤNG ĐIỂN HÌNH',
      headline: 'Các Mô Hình Nền Tảng Đang Sử Dụng Viettel Media CDN',
      items: [
        {
          id: 'case-1',
          title: 'Nền tảng Truyền hình OTT & Xem phim trực tuyến',
          context: 'Các đơn vị phát hành nội dung số phục vụ hàng triệu thuê bao xem phim chất lượng 4K/Full HD trên TV thông minh và điện thoại.',
          solution: 'Phân phối phim và video qua CDN với cơ chế Dynamic Byte-range Caching giúp tua nhanh tức thì không có độ trễ.',
        },
        {
          id: 'case-2',
          title: 'Livestream Thể thao, Gameshow & Bán hàng trực tiếp',
          context: 'Các sự kiện có lượng người xem tăng vọt đột biến từ vài ngàn lên hàng trăm ngàn chỉ trong vài phút bắt đầu chương trình.',
          solution: 'Sử dụng giao thức Low-latency HLS và WebRTC phân tải qua hạ tầng 4.5+ Tbps của Viettel CDN đảm bảo phát sóng mượt mà.',
        },
        {
          id: 'case-3',
          title: 'Giáo dục trực tuyến (E-Learning) & Hội nghị',
          context: 'Các trường đại học và nền tảng EdTech giảng dạy trực tuyến yêu cầu bảo vệ bản quyền bài giảng và đường truyền ổn định.',
          solution: 'Tích hợp DRM mã hóa video và giới hạn quyền truy cập theo tài khoản học viên, ngăn ngừa tải lậu nội dung.',
        },
      ],
    },
    faq: {
      eyebrow: 'HỎI ĐÁP MEDIA CDN',
      headline: 'Các Câu Hỏi Phổ Biến Về Dịch Vụ Mạng Phân Phối Video',
      items: [
        {
          question: 'Viettel Media CDN có hỗ trợ phát Livestream độ trễ siêu thấp không?',
          answer: 'Có. Dịch vụ hỗ trợ giao thức LL-HLS (Low Latency HLS) và WebRTC giúp rút ngắn độ trễ phát trực tiếp xuống chỉ còn 2 - 3 giây so với thời gian thực tế.',
        },
        {
          question: 'Tôi có thể ngăn chặn các website khác nhúng trộm link video của tôi không?',
          answer: 'Hoàn toàn được. Viettel Media CDN tích hợp sẵn cơ chế Token Authentication (chữ ký số kèm thời gian hết hạn) và Referrer Whitelist để ngăn chặn triệt để hành vi hotlinking và đánh cắp băng thông.',
        },
        {
          question: 'Dịch vụ có hỗ trợ chứng chỉ bảo mật HTTPS miễn phí không?',
          answer: 'Có. Viettel IDC hỗ trợ cấp phát chứng chỉ SSL Let’s Encrypt tự động gia hạn miễn phí hoặc hỗ trợ cài đặt chứng chỉ SSL trả phí của khách hàng.',
        },
      ],
    },
    footerCta: {
      headline: 'Bứt Phá Trải Nghiệm Truyền Phát Video Cùng Viettel Media CDN',
      subtext: 'Đăng ký nhận ngay gói dùng thử băng thông CDN miễn phí để đánh giá tốc độ và chất lượng thực tế.',
      buttonText: 'Bắt Đầu Dùng Thử Ngay',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU HỖ TRỢ',
      headline: 'Cẩm Nang Cấu Hình CDN Cho Nhà Phát Triển',
      documentation: {
        title: 'Hướng Dẫn Cấu Hình Tên Miền & Origin Server',
        desc: 'Xem hướng dẫn chi tiết cách trỏ CNAME, cấu hình Cache-Control headers và tích hợp Video Player.',
        linkText: 'Xem tài liệu hướng dẫn',
      },
      supportCenter: {
        title: 'Trung Tâm Điều Hành NOC 24/7',
        desc: 'Đội ngũ chuyên gia kỹ thuật viễn thông túc trực giám sát đường truyền và hỗ trợ cấu hình tối ưu.',
        linkText: 'Yêu cầu hỗ trợ trực tiếp',
      },
    },
    relatedProducts: {
      eyebrow: 'GIẢI PHÁP MẠNG LIÊN QUAN',
      headline: 'Hệ Sinh Thái Truyền Dẫn & Bảo Mật Viettel IDC',
      items: [
        {
          sku: 'SVC-029',
          title: 'Viettel Multi-CDN',
          description: 'Nền tảng điều phối đa CDN thông minh kết hợp mạng lưới toàn cầu đảm bảo uptime 100%.',
          path: '/services/networking/multi-cdn',
        },
        {
          sku: 'SVC-023',
          title: 'Viettel Cloud WAF',
          description: 'Tường lửa bảo vệ ứng dụng web chống tấn công mã độc, SQL Injection và khai thác lỗ hổng.',
          path: '/services/security/cloud-waf',
        },
      ],
    },
  },

  // =========================================================================
  // 4. VIETTEL MULTI-CDN
  // =========================================================================
  'multi-cdn': {
    id: 'multi-cdn',
    sku: 'SVC-029',
    pillar: 'networking',
    pageTitle: 'Viettel Multi-CDN – Nền Tảng Điều Phối Đa CDN Thông Minh Toàn Cầu | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Mạng & Truyền tải', path: '/services/networking' },
        { name: 'Multi-CDN' },
      ],
      eyebrow: 'ĐIỀU PHỐI ĐA NỀN TẢNG THÔNG MINH QUA RUM TELEMETRY',
      headline: 'Viettel Multi-CDN – Tối Ưu Độ Trễ Toàn Cầu & Đảm Bảo Khả Dụng Tuyệt Đối 100%',
      subheading: 'Hợp nhất sức mạnh vượt trội của hạ tầng CDN nội địa hàng đầu từ Viettel cùng các mạng lưới CDN quốc tế hàng đầu (Cloudflare, Akamai, Fastly). Thuật toán AI tự động điều phối lưu lượng theo chất lượng mạng thực tế từng mili-giây, xóa bỏ hoàn toàn rủi ro nghẽn mạng hay sự cố đứt cáp biển.',
      primaryCta: { text: 'Tư Vấn Giải Pháp Multi-CDN', action: 'quote' },
      secondaryCta: { text: 'Kiến Trúc & Tính Năng', action: 'features' },
      statRow: [
        { number: '100%', label: 'Cam Kết Uptime', desc: 'Không bao giờ gián đoạn dịch vụ nhờ cơ chế Failover' },
        { number: '300+ PoPs', label: 'Điểm Phân Phối Toàn Cầu', desc: 'Bao phủ khắp châu Á, châu Âu, châu Mỹ và Việt Nam' },
        { number: 'AI Routing', label: 'Điều Phối Thông Minh', desc: 'Chọn CDN có tốc độ nhanh nhất theo từng người dùng' },
        { number: 'Single API', label: 'Quản Trị Tập Trung', desc: 'Một bảng điều khiển duy nhất cho toàn bộ các CDN' },
      ],
    },
    overview: {
      eyebrow: 'TỔNG QUAN KIẾN TRÚC',
      headline: 'Không Còn Phụ Thuộc Vào Một Nhà Cung Cấp CDN Đơn Lẻ',
      leftDescription: [
        'Một mạng CDN đơn lẻ dù lớn đến đâu vẫn có thể gặp sự cố kỹ thuật (Outage), nghẽn mạng cục bộ tại một số khu vực hoặc suy giảm tốc độ nghiêm trọng khi các tuyến cáp quang biển quốc tế bị đứt. Đối với các doanh nghiệp thương mại điện tử, tài chính ngân hàng hay game trực tuyến, mỗi giây gián đoạn đều gây thiệt hại hàng trăm triệu đồng doanh thu.',
        'Viettel Multi-CDN giải quyết triệt để bài toán này bằng cách kết hợp nhiều mạng CDN độc lập thành một khối thống nhất. Hệ thống liên tục đo lường trải nghiệm người dùng thực (Real User Measurement - RUM) và tự động định tuyến yêu cầu truy cập đến CDN đang có độ trễ thấp nhất và trạng thái tốt nhất.',
      ],
      diagramNote: 'Cơ chế định tuyến thông minh DNS/Anycast: Người dùng tại Việt Nam được phục vụ qua Viettel CDN tốc độ cao, người dùng tại Mỹ/Châu Âu được tự động chuyển hướng qua Cloudflare/Akamai.',
      highlights: [
        {
          title: 'Thuật Toán Điều Phối RUM Telemetry Thời Gian Thực',
          description: 'Đo lường độ trễ mạng thực tế từ chính trình duyệt của người dùng để quyết định chuyển mạch lưu lượng tối ưu từng giây.',
        },
        {
          title: 'Tự Động Chuyển Mạch Dự Phòng Tức Thì (Instant Failover)',
          description: 'Khi một nhà cung cấp CDN gặp sự cố hoặc suy giảm chất lượng, 100% lưu lượng tự động chuyển sang CDN đối tác trong dưới 1 giây.',
        },
        {
          title: 'Quản Lý Cấu Hình Tập Trung Duy Nhất (Single Pane)',
          description: 'Cấu hình quy tắc Cache, xóa bộ đệm (Purge Cache) và đồng bộ chứng chỉ SSL trên tất cả các mạng CDN chỉ bằng một cú nhấp chuột.',
        },
        {
          title: 'Bảo Vệ Chống Tấn Công DDoS Đa Lớp',
          description: 'Sức mạnh hấp thụ tấn công khổng lồ từ tổng băng thông hàng chục Terabit/giây của mạng lưới liên minh các nhà cung cấp CDN.',
        },
      ],
    },
    pricing: {
      eyebrow: 'PHƯƠNG THỨC TÍNH PHÍ',
      headline: 'Tối Ưu Ngân Sách Với Hợp Đồng Hợp Nhất Đơn Giản',
      note: 'Doanh nghiệp chỉ cần ký một hợp đồng duy nhất với Viettel IDC để sử dụng toàn bộ hạ tầng Multi-CDN toàn cầu.',
      tables: [
        {
          id: 'multicdn_rates',
          title: 'Gói Cước Điều Phối Multi-CDN',
          columns: [
            { header: 'Mô Hình Triển Khai', key: 'planName', width: '35%' },
            { header: 'Mạng Lưới CDN Tích Hợp', key: 'specs', width: '40%' },
            { header: 'Cách Tính', key: 'billingCycle', width: '12%', align: 'center' },
            { header: 'Chi Phí', key: 'price', width: '13%', align: 'right', isPrice: true },
          ],
          rows: [
            {
              planName: 'Multi-CDN Hybrid (Trong Nước + Quốc Tế)',
              specs: 'Kết hợp Viettel CDN (Việt Nam) + Global CDN (quốc tế), tối ưu chi phí và tốc độ tuyệt đối',
              billingCycle: 'Theo dung lượng GB',
              price: 'Báo giá theo quy mô',
            },
            {
              planName: 'Multi-CDN Enterprise High Availability',
              specs: 'Tích hợp 3+ CDN đồng thời (Viettel, Cloudflare, Akamai), cam kết SLA 100% Uptime',
              billingCycle: 'Theo tháng / GB',
              price: 'Tùy biến theo nhu cầu',
            },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp thương mại điện tử, game hoặc tài chính cần uptime tuyệt đối?',
        buttonText: 'Liên Hệ Chuyên Gia Kiến Trúc Multi-CDN',
        notesPlaceholder: 'Đăng ký nhận báo giá và thiết kế kiến trúc điều phối Multi-CDN tối ưu',
      },
    },
    features: {
      eyebrow: 'LỢI THẾ VƯỢT TRỘI',
      headline: 'Sự Kết Hợp Hoàn Hảo Giữa Năng Lực Nội Địa & Sức Mạnh Toàn Cầu',
      cards: [
        {
          id: 'ft-1',
          title: 'Thuật Toán Điều Phối Thông Minh (Smart DNS/Anycast)',
          description: 'Điều phối lưu lượng linh hoạt qua hạ tầng Anycast DNS phân tán toàn cầu với độ trễ chuyển mạch tính bằng mili-giây.',
        },
        {
          id: 'ft-2',
          title: 'Giám Sát Trải Nghiệm Thực (RUM Telemetry)',
          description: 'Thu thập hàng tỷ điểm dữ liệu từ các phiên truy cập thực tế của người dùng để đánh giá chính xác chất lượng mạng từng giây.',
        },
        {
          id: 'ft-3',
          title: 'Kháng Lỗi Cáp Quang Biển Quốc Tế',
          description: 'Tự động giữ 100% lưu lượng nội địa trên hạ tầng Viettel CDN khi các tuyến cáp quang biển quốc tế (AAG, APG, IA) gặp sự cố.',
        },
        {
          id: 'ft-4',
          title: 'Đồng Bộ Hóa Chứng Chỉ SSL/TLS Tự Động',
          description: 'Hỗ trợ quản lý và cấp phát chứng chỉ SSL tự động, đồng bộ cài đặt tức thời lên toàn bộ các mạng CDN vệ tinh.',
        },
      ],
      specTableTitle: 'Thông Số Kỹ Thuật Viettel Multi-CDN',
      specs: [
        { category: 'Mạng lưới tích hợp', details: 'Kết hợp Viettel CDN cùng các đối tác toàn cầu (Akamai, Cloudflare, Fastly)' },
        { category: 'Cơ chế điều phối thông minh', details: 'DNS Routing dựa trên RUM (Real User Measurement), Synthetic Monitoring và Health-Check' },
        { category: 'Thời gian chuyển mạch dự phòng', details: 'Tự động chuyển mạch Failover tức thì dưới 1 giây khi có sự cố PoP' },
        { category: 'Quản trị tập trung', details: 'Bảng điều khiển duy nhất (Single Pane of Glass) giám sát lưu lượng và độ trễ toàn cầu' },
        { category: 'Bảo vệ tầng mạng', details: 'Tích hợp Anti-DDoS Layer 3/4/7 phân tán trên toàn bộ mạng lưới Multi-CDN' },
      ],
    },
    benefits: {
      eyebrow: 'GIÁ TRỊ DOANH NGHIỆP',
      headline: 'Bảo Vệ Doanh Thu & Uy Tín Thương Hiệu Tuyệt Đối',
      pillars: [
        {
          number: '01',
          title: 'Cam Kết Uptime 100% Tuyệt Đối',
          description: 'Loại bỏ hoàn toàn rủi ro hệ thống bị sập do nhà cung cấp CDN gặp sự cố hạ tầng.',
        },
        {
          number: '02',
          title: 'Trải Nghiệm Khách Hàng Tốt Nhất Mọi Lúc',
          description: 'Người dùng tại bất kỳ quốc gia nào cũng được kết nối đến máy chủ CDN có tốc độ nhanh nhất tại khu vực đó.',
        },
        {
          number: '03',
          title: 'Không Bị Ràng Buộc Nhà Cung Cấp (No Vendor Lock-in)',
          description: 'Linh hoạt thêm hoặc bớt các nhà cung cấp CDN mà không cần sửa đổi mã nguồn ứng dụng.',
        },
        {
          number: '04',
          title: 'Hóa Đơn & Hợp Đồng Đơn Giản Hóa',
          description: 'Thanh toán trực tiếp bằng Việt Nam Đồng với hóa đơn tài chính hợp lệ từ Viettel IDC, không cần thanh toán thẻ tín dụng quốc tế.',
        },
      ],
    },
    useCases: {
      eyebrow: 'BÀI TOÁN THỰC TẾ',
      headline: 'Doanh Nghiệp Nào Cần Ứng Dụng Multi-CDN',
      items: [
        {
          id: 'case-1',
          title: 'Sàn Thương Mại Điện Tử & Siêu Ứng Dụng',
          context: 'Các đợt Flash Sale lớn (11.11, 12.12, Black Friday) có hàng triệu lượt truy cập đồng thời, nếu web chậm 1 giây doanh số giảm 10%.',
          solution: 'Multi-CDN phân tải đều lưu lượng trên nhiều nhà cung cấp, đảm bảo trang thanh toán và hình ảnh sản phẩm luôn phản hồi tức thì.',
        },
        {
          id: 'case-2',
          title: 'Nhà Phát Hành Game Trực Tuyến Toàn Cầu',
          context: 'Khi cập nhật bản vá game (Patch Update) dung lượng vài Gigabyte cho hàng triệu game thủ trên toàn thế giới cùng lúc.',
          solution: 'Hạ tầng Multi-CDN cung cấp tổng băng thông hàng chục Tbps giúp tải bản cập nhật với tốc độ tối đa không bị nghẽn.',
        },
        {
          id: 'case-3',
          title: 'Tổ Chức Tài Chính & Chứng Khoán',
          context: 'Yêu cầu bảng giá chứng khoán và thông tin thị trường phải cập nhật thời gian thực không sai lệch dù chỉ một phần mười giây.',
          solution: 'Định tuyến thông minh liên tục chọn tuyến cáp có độ trễ thấp nhất để truyền tải dữ liệu tài chính.',
        },
      ],
    },
    faq: {
      eyebrow: 'HỎI ĐÁP DỊCH VỤ',
      headline: 'Các Thắc Mắc Thường Gặp Về Multi-CDN',
      items: [
        {
          question: 'Làm thế nào để hệ thống biết được CDN nào đang hoạt động nhanh nhất?',
          answer: 'Hệ thống sử dụng các bài kiểm tra Synthetic Monitoring liên tục từ hàng ngàn điểm kiểm tra toàn cầu kết hợp mã đo lường RUM nhúng nhẹ vào website để thu thập độ trễ thực tế của người dùng.',
        },
        {
          question: 'Việc xóa bộ nhớ đệm (Purge Cache) có được đồng bộ đồng thời không?',
          answer: 'Có. Khi bạn thực hiện lệnh Purge Cache từ cổng quản trị Viettel IDC hoặc qua API, lệnh sẽ được phát đồng thời tới tất cả các nhà cung cấp CDN trong cụm Multi-CDN.',
        },
        {
          question: 'Doanh nghiệp tôi có cần ký hợp đồng riêng với từng hãng CDN không?',
          answer: 'Không cần. Viettel IDC đóng vai trò đối tác giải pháp trọn gói, cung cấp dịch vụ Multi-CDN với hợp đồng và thanh toán tập trung duy nhất tại Việt Nam.',
        },
      ],
    },
    footerCta: {
      headline: 'Nâng Cấp Hệ Thống Của Bạn Lên Chuẩn Multi-CDN Ngay Hôm Nay',
      subtext: 'Trò chuyện với các chuyên gia giải pháp hạ tầng của Viettel IDC để nhận bản thiết kế kiến trúc Multi-CDN tối ưu nhất.',
      buttonText: 'Yêu Cầu Tư Vấn Kiến Trúc',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU KỸ THUẬT',
      headline: 'Hướng Dẫn Tích Hợp Multi-CDN',
      documentation: {
        title: 'Cẩm Nang Cấu Hình Smart DNS Routing',
        desc: 'Hướng dẫn ủy quyền DNS và cấu hình các chính sách chuyển mạch Failover tự động.',
        linkText: 'Xem tài liệu kỹ thuật',
      },
      supportCenter: {
        title: 'Hỗ Trợ Kỹ Thuật Doanh Nghiệp 24/7/365',
        desc: 'Đội ngũ chuyên gia an ninh mạng và hạ tầng mạng Viettel IDC luôn sẵn sàng giải quyết sự cố tức thời.',
        linkText: 'Liên hệ đội ngũ hỗ trợ',
      },
    },
    relatedProducts: {
      eyebrow: 'DỊCH VỤ BỔ TRỢ',
      headline: 'Hệ Sinh Thái Hạ Tầng & Bảo Mật Mạng',
      items: [
        {
          sku: 'SVC-024',
          title: 'Viettel Cloud Anti-DDoS',
          description: 'Hệ thống phòng chống tấn công từ chối dịch vụ quy mô lớn bảo vệ máy chủ ứng dụng.',
          path: '/services/security/anti-ddos',
        },
        {
          sku: 'SVC-028',
          title: 'Viettel Media CDN',
          description: 'Giải pháp tối ưu hóa truyền phát video và livestream tốc độ cao nội địa.',
          path: '/services/networking/media-cdn',
        },
      ],
    },
  },

  // =========================================================================
  // 5. VIETTEL CLOUD CAMERA
  // =========================================================================
  'cloud-camera': {
    id: 'cloud-camera',
    sku: 'SVC-049',
    pillar: 'digital-services',
    pageTitle: 'Viettel Cloud Camera – Giải Pháp Giám Sát Hình Ảnh Đám Mây & AI Thông Minh | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Ứng dụng & Dịch vụ số', path: '/services/digital-services' },
        { name: 'Cloud Camera' },
      ],
      eyebrow: 'GIẢI PHÁP CAMERA AN NINH ĐÁM MÂY TÍCH HỢP TRÍ TUỆ NHÂN TẠO AI',
      headline: 'Viettel Cloud Camera – Giám Sát Tập Trung Đa Điểm, Lưu Trữ Đám Mây An Toàn & Phân Tích AI Thông Minh',
      subheading: 'Giải pháp chuyển đổi toàn diện hệ thống giám sát an ninh lên nền tảng điện toán đám mây Viettel. Loại bỏ hoàn toàn sự cố hỏng đầu ghi, mất cắp ổ cứng, hỗ trợ quản trị tập trung hàng ngàn mắt camera trên một giao diện duy nhất kèm các tính năng nhận diện AI tiên tiến.',
      primaryCta: { text: 'Trải Nghiệm Cloud Camera', action: 'trial' },
      secondaryCta: { text: 'Xem Báo Giá Gói Cước', action: 'pricing' },
      statRow: [
        { number: '100% An Toàn', label: 'Không Lo Mất Dữ Liệu', desc: 'Lưu trữ đám mây thay thế đầu ghi truyền thống' },
        { number: 'Tích Hợp AI', label: 'Nhận Diện Thông Minh', desc: 'Nhận diện khuôn mặt, cảnh báo xâm nhập, đếm người' },
        { number: 'Đa Nền Tảng', label: 'Xem Mọi Lúc Mọi Nơi', desc: 'Ứng dụng mượt mà trên Web, iOS và Android' },
        { number: 'Tương Thích', label: 'Chuẩn ONVIF/RTSP', desc: 'Tận dụng lại toàn bộ mắt camera hiện có' },
      ],
    },
    overview: {
      eyebrow: 'TỔNG QUAN GIẢI PHÁP',
      headline: 'Hiện Đại Hóa Hệ Thống Camera Doanh Nghiệp Lên Đám Mây',
      leftDescription: [
        'Hệ thống camera giám sát truyền thống sử dụng đầu ghi hình (DVR/NVR) và ổ cứng cục bộ bộc lộ nhiều điểm yếu chí mạng: ổ cứng dễ hư hỏng dẫn đến mất dữ liệu khi cần điều tra, đầu ghi có thể bị kẻ gian đập phá hoặc đánh cắp, việc quản trị phân tán tại hàng chục chi nhánh cực kỳ phức tạp và thiếu khả năng cảnh báo thông minh.',
        'Viettel Cloud Camera đưa toàn bộ luồng video mã hóa lên lưu trữ tại các Data Center tiêu chuẩn quốc tế của Viettel IDC. Khách hàng có thể dễ dàng quản trị tập trung không giới hạn số lượng camera, phân quyền xem linh hoạt cho nhân viên và ứng dụng công nghệ AI để biến camera an ninh thông thường thành trợ thủ kinh doanh đắc lực.',
      ],
      diagramNote: 'Mô hình kết nối linh hoạt: Camera IP kết nối trực tiếp Internet hoặc qua thiết bị Gateway mã hóa luồng hình ảnh trước khi đẩy lên Viettel Cloud.',
      highlights: [
        {
          title: 'Lưu Trữ Đám Mây An Toàn Tuyệt Đối',
          description: 'Dữ liệu được lưu trữ phân tán, mã hóa nhiều lớp, loại bỏ hoàn toàn nguy cơ cháy nổ, hỏng ổ cứng hoặc mất cắp đầu ghi.',
        },
        {
          title: 'Quản Lý Tập Trung Đa Điểm Không Giới Hạn',
          description: 'Theo dõi đồng thời hàng trăm chi nhánh, cửa hàng, kho bãi trên một màn hình duy nhất với tính năng chia nhóm thông minh.',
        },
        {
          title: 'Trí Tuệ Nhân Tạo AI Phân Tích Hình Ảnh',
          description: 'Nhận diện khuôn mặt VIP/Khách lạ, nhận diện biển số xe, cảnh báo xâm nhập vùng cấm theo khung giờ và đếm lưu lượng khách ra vào.',
        },
        {
          title: 'Tận Dụng Lại Hệ Thống Camera Sẵn Có',
          description: 'Hỗ trợ chuẩn ONVIF/RTSP quốc tế, tương thích với hầu hết các thương hiệu camera phổ biến (Hikvision, Dahua, Uniview, Axis).',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ DỊCH VỤ',
      headline: 'Chi Phí Linh Hoạt Theo Số Lượng Camera & Thời Gian Lưu Trữ',
      note: 'Gói cước tính theo mắt camera/tháng, bao gồm phần mềm quản lý, ứng dụng di động và dung lượng lưu trữ đám mây.',
      tables: [
        {
          id: 'cloud_cam_plans',
          title: 'Gói Cước Lưu Trữ Video Cloud Camera',
          columns: [
            { header: 'Gói Dịch Vụ', key: 'planName', width: '35%' },
            { header: 'Tính Năng & Thời Gian Lưu Trữ', key: 'specs', width: '40%' },
            { header: 'Đơn Vị', key: 'billingCycle', width: '12%', align: 'center' },
            { header: 'Giá Cước', key: 'price', width: '13%', align: 'right', isPrice: true },
          ],
          rows: [
            {
              planName: 'Gói Lưu Trữ 7 Ngày (Live & Playback 7 Days)',
              specs: 'Xem trực tiếp Full HD, xem lại video trong 7 ngày gần nhất, cảnh báo chuyển động qua app',
              billingCycle: 'Camera/tháng',
              price: 'Từ 45.000 đ/cam',
            },
            {
              planName: 'Gói Lưu Trữ 15 Ngày (Playback 15 Days)',
              specs: 'Xem lại video 15 ngày, phân quyền tài khoản đa cấp, tải video đoạn cắt chất lượng cao',
              billingCycle: 'Camera/tháng',
              price: 'Từ 70.000 đ/cam',
            },
            {
              planName: 'Gói Lưu Trữ 30 Ngày (Playback 30 Days)',
              specs: 'Xem lại video 30 ngày, phù hợp tiêu chuẩn an ninh ngân hàng, chuỗi bán lẻ, kho bãi',
              billingCycle: 'Camera/tháng',
              price: 'Từ 110.000 đ/cam',
            },
            {
              planName: 'Gói Phân Tích Trí Tuệ Nhân Tạo (AI Module)',
              specs: 'Tính năng nhận diện khuôn mặt, cảnh báo xâm nhập thông minh, báo cáo đếm người',
              billingCycle: 'Camera/tháng',
              price: 'Từ 50.000 đ/cam',
            },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp chuỗi cần triển khai trên 50 camera hoặc tích hợp hệ thống camera có sẵn?',
        buttonText: 'Yêu Cầu Khảo Sát & Nhận Báo Giá Dự Án',
        notesPlaceholder: 'Đăng ký tư vấn triển khai Cloud Camera cho văn phòng, nhà xưởng hoặc chuỗi bán lẻ',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG NỔI BẬT',
      headline: 'Công Nghệ Điện Toán Đám Mây & AI Cho Trải Nghiệm Giám Sát Hiện Đại',
      cards: [
        {
          id: 'ft-1',
          title: 'Tương Thích Mọi Dòng Camera IP Chuẩn ONVIF',
          description: 'Hỗ trợ kết nối các dòng camera IP thông dụng (Hikvision, Dahua, Uniview, Bosch, Axis) qua giao thức ONVIF/RTSP.',
        },
        {
          id: 'ft-2',
          title: 'Mã Hóa Video Hai Lớp End-to-End',
          description: 'Mọi luồng dữ liệu hình ảnh được mã hóa bảo mật từ thiết bị đầu cuối tới máy chủ đám mây, chống xem trộm và rò rỉ dữ liệu riêng tư.',
        },
        {
          id: 'ft-3',
          title: 'Cảnh Báo Thông Minh Thời Gian Thực (Push Notification)',
          description: 'Nhận thông báo kèm hình ảnh chụp sự kiện chuyển động ngay trên điện thoại thông minh chỉ trong vài giây.',
        },
        {
          id: 'ft-4',
          title: 'Băng Thông Tối Ưu Với Chuẩn Nén H.265/H.265+',
          description: 'Tiết kiệm tới 50% dung lượng đường truyền internet mà vẫn duy trì chất lượng hình ảnh sắc nét, mượt mà.',
        },
      ],
      specTableTitle: 'Thông Số Kỹ Thuật Viettel Cloud Camera',
      specs: [
        { category: 'Giao thức kết nối thiết bị', details: 'ONVIF Profile S/G/T, RTSP, RTMP, WebRTC, P2P' },
        { category: 'Độ phân giải hỗ trợ', details: 'HD 720p, Full HD 1080p, 2K, 4K Ultra HD tốc độ 25-30fps' },
        { category: 'Tính năng phân tích AI', details: 'Nhận diện khuôn mặt, cảnh báo xâm nhập vùng cấm, đếm người, nhận diện biển số xe (ANPR)' },
        { category: 'Lưu trữ đám mây', details: 'Lưu trữ theo gói ngày (7, 15, 30 ngày) trên nền tảng Viettel Cloud Storage bảo mật cao' },
        { category: 'Nền tảng ứng dụng', details: 'Web Portal quản trị tập trung, ứng dụng di động iOS và Android hỗ trợ xem trực tiếp đa màn hình' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH VẬN HÀNH',
      headline: 'Tối Đa Hiệu Quả Quản Trị & Tiết Kiệm Chi Phí Cho Doanh Nghiệp',
      pillars: [
        {
          number: '01',
          title: 'Không Lo Hỏng Ổ Cứng Hay Mất Đầu Ghi',
          description: 'Dữ liệu được bảo toàn an toàn trên Cloud, ngay cả khi camera bị tháo dỡ hoặc phá hoại thì video trước đó vẫn còn nguyên.',
        },
        {
          number: '02',
          title: 'Tiết Kiệm Chi Phí Đầu Tư Ban Đầu',
          description: 'Không cần mua đầu ghi đắt tiền, không mất chi phí thay thế ổ cứng định kỳ 1-2 năm/lần.',
        },
        {
          number: '03',
          title: 'Quản Trị Chuỗi Cửa Hàng Dễ Dàng',
          description: 'Chủ doanh nghiệp dễ dàng mở ứng dụng kiểm tra đồng thời tình hình kinh doanh của toàn bộ các chi nhánh từ xa.',
        },
        {
          number: '04',
          title: 'Tối Ưu Kinh Doanh Với Dữ Liệu AI',
          description: 'Biết chính xác lượng khách vào cửa hàng theo từng khung giờ và nhận diện khách hàng thân thiết để nâng cao chất lượng dịch vụ.',
        },
      ],
    },
    useCases: {
      eyebrow: 'MÔ HÌNH TRIỂN KHAI',
      headline: 'Các Lĩnh Vực Ứng Dụng Hiệu Quả Viettel Cloud Camera',
      items: [
        {
          id: 'case-1',
          title: 'Chuỗi Cửa Hàng Bán Lẻ, Siêu Thị & F&B',
          context: 'Có hàng chục đến hàng trăm điểm bán hàng cần giám sát chất lượng phục vụ và phòng chống thất thoát tài sản.',
          solution: 'Quản lý toàn bộ camera trên một tài khoản phân quyền cho quản lý vùng và ban giám đốc theo dõi tập trung.',
        },
        {
          id: 'case-2',
          title: 'Văn Phòng Doanh Nghiệp, Tòa Nhà & Khu Đô Thị',
          context: 'Cần kiểm soát an ninh ra vào, chấm công nhân viên qua nhận diện khuôn mặt và cảnh báo đột nhập ban đêm.',
          solution: 'Tích hợp camera AI phát hiện xâm nhập ngoài giờ làm việc và tự động gửi tin nhắn báo động cho bảo vệ.',
        },
        {
          id: 'case-3',
          title: 'Nhà Xưởng, Kho Bãi & Khu Công Nghiệp',
          context: 'Diện tích rộng lớn, môi trường nhiều bụi bặm gây hại đầu ghi và yêu cầu thời gian lưu trữ dài để phục vụ kiểm kê hàng hóa.',
          solution: 'Đẩy dữ liệu video trực tiếp lên Viettel Cloud qua kết nối cáp quang hoặc 4G/5G chuyên dụng ổn định 24/7.',
        },
      ],
    },
    faq: {
      eyebrow: 'CÂU HỎI THƯỜNG GẶP',
      headline: 'Giải Đáp Thắc Mắc Về Dịch Vụ Viettel Cloud Camera',
      items: [
        {
          question: 'Camera của tôi đang có sẵn ở cửa hàng có dùng được Viettel Cloud Camera không?',
          answer: 'Có. Hầu hết các camera IP trên thị trường hỗ trợ chuẩn ONVIF hoặc RTSP đều có thể kết nối trực tiếp lên dịch vụ mà không cần thay mới mắt camera.',
        },
        {
          question: 'Khi mất mạng Internet thì camera có ghi hình được không?',
          answer: 'Nếu camera có khe cắm thẻ nhớ, camera sẽ tự động lưu tạm vào thẻ nhớ trong thời gian mất kết nối và tự động đẩy bù dữ liệu lên đám mây ngay khi có mạng trở lại.',
        },
        {
          question: 'Dữ liệu video có bị người khác xem trộm không?',
          answer: 'Hoàn toàn không. Luồng video được mã hóa đầu cuối và chỉ duy nhất tài khoản được khách hàng phân quyền mới có thể giải mã và xem hình ảnh.',
        },
      ],
    },
    footerCta: {
      headline: 'Chuyển Đổi Hệ Thống Giám Sát Của Doanh Nghiệp Lên Viettel Cloud Camera',
      subtext: 'Đăng ký ngay hôm nay để nhận ưu đãi dùng thử miễn phí và hỗ trợ khảo sát lắp đặt tận nơi.',
      buttonText: 'Đăng Ký Khảo Sát & Dùng Thử',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
    },
    docsSupport: {
      eyebrow: 'HƯỚNG DẪN SỬ DỤNG',
      headline: 'Tài Liệu Cài Đặt & Kết Nối Thiết Bị',
      documentation: {
        title: 'Hướng Dẫn Kết Nối Camera IP Chuẩn ONVIF',
        desc: 'Xem hướng dẫn chi tiết cách quét tìm thiết bị, mở luồng RTSP và cài đặt ứng dụng trên điện thoại di động.',
        linkText: 'Xem tài liệu hướng dẫn',
      },
      supportCenter: {
        title: 'Tổng Đài Kỹ Thuật Hỗ Trợ Khách Hàng 24/7',
        desc: 'Đội ngũ kỹ thuật viên Viettel IDC sẵn sàng hướng dẫn cấu hình từ xa hoặc hỗ trợ trực tiếp tại công trình.',
        linkText: 'Yêu cầu kỹ thuật viên hỗ trợ',
      },
    },
    relatedProducts: {
      eyebrow: 'DỊCH VỤ SỐ ĐI KÈM',
      headline: 'Các Giải Pháp Chuyển Đổi Số Cho Doanh Nghiệp',
      items: [
        {
          sku: 'SVC-004',
          title: 'Viettel Cloud Object Storage (vStorage)',
          description: 'Hạ tầng lưu trữ đối tượng đám mây dung lượng lớn mở rộng không giới hạn.',
          path: '/services/storage/cloud-object-storage',
        },
        {
          sku: 'SVC-018',
          title: 'Viettel Cloud Data Archiving',
          description: 'Lưu trữ video giám sát tầng sâu dài hạn phục vụ công tác thanh tra kiểm toán.',
          path: '/services/storage/data-archiving',
        },
      ],
    },
  },
};
export default STANDARD_SERVICES_DATA_PART5;
