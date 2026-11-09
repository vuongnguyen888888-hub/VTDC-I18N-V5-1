import { ServiceDetailConfig } from '../types/serviceDetail';

export const STANDARD_SERVICES_DATA_PART4: Record<string, ServiceDetailConfig> = {
  // =========================================================================
  // 16. VIETTEL QUEUE SERVICE (vKQS)
  // =========================================================================
  'vkqs': {
    id: 'vkqs',
    sku: 'SVC-037',
    pillar: 'paas-containers',
    pageTitle: 'Viettel Queue Service (vKQS) – Dịch Vụ Hàng Đợi Tin Nhắn Apache Kafka | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Nền tảng Đám mây (PaaS)', path: '/services/compute' },
        { name: 'Viettel Queue Service (vKQS)' },
      ],
      eyebrow: 'DỊCH VỤ HÀNG ĐỢI DỮ LIỆU THỜI GIAN THỰC NỀN TẢNG APACHE KAFKA',
      headline: 'Viettel Queue Service (vKQS) – Dịch Vụ Hàng Đợi Tin Nhắn Thời Gian Thực, Xử Lý Dữ Liệu Tốc Độ Cao & Ổn Định',
      subheading: 'Nền tảng hàng đợi tin nhắn được xây dựng trên Apache Kafka, giúp các hệ thống gửi – nhận – xử lý dữ liệu thời gian thực nhanh chóng, tin cậy và không gián đoạn. Tối ưu cho kiến trúc Microservices, Big Data, AI và phân tích Log trên hạ tầng Viettel Cloud.',
      primaryCta: { text: 'Nhận Tư Vấn / Đăng Ký Trải Nghiệm', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá Chi Tiết', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Tổng Quan Năng Lực Kiến Trúc & Vận Hành Của Viettel Queue Service',
      leftDescription: [
        'Viettel Queue Service (vKQS) là dịch vụ hàng đợi tin nhắn thời gian thực được phát triển trên nền tảng mã nguồn mở Apache Kafka – tiêu chuẩn công nghiệp về xử lý luồng dữ liệu phân tán tốc độ cao. Dịch vụ giải quyết bài toán giao tiếp bất đồng bộ giữa các thành phần ứng dụng, phân tách các dịch vụ độc lập và xử lý các luồng dữ liệu khổng lồ với độ trễ cực thấp.',
        'Được vận hành trên hạ tầng điện toán đám mây đạt chuẩn quốc tế của Viettel IDC, vKQS cung cấp môi trường cụm Kafka sẵn sàng sử dụng (Fully-managed), loại bỏ hoàn toàn gánh nặng cài đặt cụm ZooKeeper/KRaft, tinh chỉnh thông số phần cứng và giám sát vận hành cho doanh nghiệp.',
      ],
      highlights: [
        {
          title: 'Nền tảng Apache Kafka chuẩn mở',
          description: 'Xử lý hàng triệu thông điệp mỗi giây với độ trễ tính bằng mili-giây, tương thích hoàn toàn với hệ sinh thái ứng dụng Kafka hiện hành.',
        },
        {
          title: 'Quản trị cụm tự động hóa',
          description: 'Tự động cấp phát tài nguyên, cân bằng tải phân tán và tự phục hồi khi có sự cố broker mà không gây gián đoạn hệ thống.',
        },
        {
          title: 'Lưu trữ an toàn & Bền bỉ',
          description: 'Dữ liệu được nhân bản an toàn trên nhiều broker với cơ chế Leader-Follower, đảm bảo không bao giờ bị thất thoát bản tin.',
        },
        {
          title: 'Tích hợp mạng nội bộ an toàn',
          description: 'Kết nối thông suốt với các dịch vụ Compute, Kubernetes và Database trong mạng riêng oVPC với độ bảo mật cao nhất.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
      headline: 'Bảng Giá Dịch Vụ Viettel Queue Service Linh Hoạt & Tối Ưu',
      controls: [
        {
          id: 'region',
          label: 'Khu vực hạ tầng',
          options: [
            { id: 'south', label: 'Miền Nam (Bình Dương Data Center)' },
            { id: 'north', label: 'Miền Bắc (Hòa Lạc Data Center)' },
          ],
          defaultSelected: 'south',
        },
      ],
      note: 'Bảng giá chưa bao gồm thuế VAT (nếu có). Áp dụng hình thức thuê bao trọn gói theo tháng cho toàn bộ cụm Broker.',
      tables: [
        {
          id: 'vkqs_table',
          title: 'BẢNG GIÁ CÁC GÓI VIETTEL QUEUE SERVICE TIÊU CHUẨN',
          columns: [
            { header: 'Gói Dịch Vụ', key: 'name', width: '20%' },
            { header: 'Số Broker', key: 'brokers', width: '12%', align: 'center' },
            { header: 'Cấu Hình / Broker', key: 'spec', width: '20%', align: 'center' },
            { header: 'Lưu Trữ SSD', key: 'storage', width: '16%', align: 'center' },
            { header: 'Băng Thông', key: 'bandwidth', width: '14%', align: 'center' },
            { header: 'Đơn Giá / Tháng', key: 'price', width: '18%', align: 'right', isPrice: true },
          ],
          rows: [
            {
              name: 'Gói Cơ Bản',
              brokers: '3 Brokers',
              spec: '2 vCPU / 8 GB RAM',
              storage: '20 GB SSD / Broker',
              bandwidth: '300 Mbps',
              price: '4.500.000 đ',
            },
            {
              name: 'Gói Tiêu Chuẩn',
              brokers: '5 Brokers',
              spec: '4 vCPU / 16 GB RAM',
              storage: '100 GB SSD / Broker',
              bandwidth: '300 Mbps',
              price: '14.000.000 đ',
            },
            {
              name: 'Gói Nâng Cao',
              brokers: '7 Brokers',
              spec: '8 vCPU / 32 GB RAM',
              storage: '200 GB SSD / Broker',
              bandwidth: '300 Mbps',
              price: '36.500.000 đ',
            },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp cần cụm Kafka chuyên biệt với hàng chục Brokers hoặc dung lượng lưu trữ hàng chục TB?',
        buttonText: 'Yêu Cầu Thiết Kế Cụm Kafka Riêng & Nhận Báo Giá',
        notesPlaceholder: 'Đăng ký nhận tư vấn cụm Apache Kafka chuyên dụng theo yêu cầu hạ tầng doanh nghiệp',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG NỔI BẬT',
      headline: 'Năng Lực Công Nghệ & Tính Năng Nổi Bật Của Viettel Queue Service',
      cards: [
        {
          id: 'ft-1',
          title: 'Quản Lý Cluster Tự Động',
          description: 'Hệ thống tự động khởi tạo, cấu hình và tối ưu hóa các thông số Broker, ZooKeeper/KRaft chỉ trong vài phút trên giao diện quản trị đồ họa trực quan.',
        },
        {
          id: 'ft-2',
          title: 'Mở Rộng Quy Mô Linh Hoạt (Elastic Scaling)',
          description: 'Dễ dàng bổ sung thêm số lượng Broker hoặc nâng cấp cấu hình CPU/RAM/Storage khi lưu lượng truyền tin tăng đột biến mà không cần dừng dịch vụ.',
        },
        {
          id: 'ft-3',
          title: 'Cơ Chế Xuất Bản & Đăng Ký (Pub/Sub)',
          description: 'Mô hình Publisher-Subscriber phân tán cho phép một nhà sản xuất (Producer) gửi thông điệp tới hàng ngàn ứng dụng tiêu thụ (Consumer) độc lập.',
        },
        {
          id: 'ft-4',
          title: 'Quản Lý Consumer Group Thông Minh',
          description: 'Phân phối tải song song mượt mà giữa các Consumer trong cùng một nhóm, đảm bảo thứ tự bản tin nghiêm ngặt theo từng Partition.',
        },
        {
          id: 'ft-5',
          title: 'Cơ Chế Dự Phòng Leader-Follower',
          description: 'Mỗi phân vùng dữ liệu (Partition) đều có một Partition Leader và nhiều In-Sync Replicas (ISR) đảm bảo khả năng chịu lỗi (Fault-Tolerance) cao nhất.',
        },
        {
          id: 'ft-6',
          title: 'Bảo Mật Mã Hóa Đa Phân Lớp',
          description: 'Mã hóa kết nối SSL/TLS từ client đến cluster, kiểm soát quyền truy cập chi tiết qua Access Control Lists (ACLs) và cô lập mạng oVPC.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật Viettel Queue Service',
      specs: [
        { category: 'Nền tảng công nghệ', details: 'Apache Kafka phiên bản mới nhất (3.8.x), hỗ trợ đầy đủ Kafka API chuẩn' },
        { category: 'Số lượng Broker tối thiểu', details: 'Cấu hình cụm khả dụng cao từ 3 đến 7 Brokers (Master-Worker)' },
        { category: 'Thời gian lưu trữ bản tin (Retention)', details: 'Mặc định lưu trữ 7 ngày (có thể tùy chỉnh theo dung lượng ổ cứng)' },
        { category: 'Cơ chế chịu lỗi & Nhân bản', details: 'Replication Factor từ 2 đến 3, cơ chế Leader-Follower failover tự động' },
        { category: 'Kết nối mạng & Truy cập', details: 'Kết nối mạng riêng nội bộ Private Network (oVPC), tích hợp VPN và Kênh truyền riêng' },
        { category: 'Giao thức kết nối', details: 'Kafka Native TCP Protocol, hỗ trợ Kafka REST Proxy cho các ứng dụng web' },
        { category: 'Đội ngũ kỹ sư vận hành', details: 'Hỗ trợ giám sát 24/7/365 từ các chuyên gia Big Data và Cloud của Viettel IDC' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH CỐT LÕI',
      headline: 'Lợi Ích Đột Phá Khi Sử Dụng Dịch Vụ Hàng Đợi vKQS',
      pillars: [
        {
          number: '01',
          title: 'Tự Động Hóa Vận Hành Toàn Diện',
          description: 'Loại bỏ hoàn toàn công sức tự thiết lập, vá lỗi, sao lưu và bảo trì cụm Kafka phức tạp, giúp kỹ sư tập trung 100% vào logic nghiệp vụ.',
        },
        {
          number: '02',
          title: 'Giảm Độ Trễ Hệ Thống Đột Phá',
          description: 'Kiến trúc phân tán siêu tốc cho phép xử lý hàng triệu message mỗi giây với độ trễ thấp dưới 10 mili-giây, giải phóng tắc nghẽn backend.',
        },
        {
          number: '03',
          title: 'Tối Ưu Chi Phí Đầu Tư & Nhân Sự',
          description: 'Không cần duy trì đội ngũ kỹ sư chuyên trách vận hành Big Data đắt đỏ, thanh toán linh hoạt theo tài nguyên thực tế sử dụng.',
        },
        {
          number: '04',
          title: 'Bảo Mật & Toàn Vẹn Dữ Liệu Tuyệt Đối',
          description: 'Vận hành tại các Trung tâm dữ liệu tiêu chuẩn quốc tế TIA-942 Rated 3, cam kết không mất mát dữ liệu với cơ chế nhân bản đa node.',
        },
      ],
    },
    useCases: {
      eyebrow: 'ỨNG DỤNG THỰC TẾ',
      headline: 'Các Bài Toán Ứng Dụng Thực Tiễn Của Viettel Queue Service',
      items: [
        {
          id: 'case-1',
          title: 'Giao tiếp bất đồng bộ trong kiến trúc Microservices',
          context: 'Khi người dùng đặt hàng trên website thương mại điện tử, các tác vụ như trừ tồn kho, gửi email hóa đơn, tích điểm thưởng và thông báo vận chuyển nếu thực hiện đồng bộ sẽ làm website bị đơ và chậm chạp.',
          solution: 'Ứng dụng gửi sự kiện Đặt Hàng Thành Công vào vKQS. Các dịch vụ kho, email, kế toán độc lập lắng nghe hàng đợi và xử lý bất đồng bộ, giúp người dùng nhận phản hồi ngay lập tức trong 0.1 giây.',
        },
        {
          id: 'case-2',
          title: 'Pipeline phân tích dữ liệu lớn (Big Data & AI)',
          context: 'Hệ thống cần thu thập liên tục dữ liệu hành vi người dùng, thông số giao dịch tài chính từ hàng triệu thiết bị để phân tích chống gian lận trong thời gian thực.',
          solution: 'vKQS đóng vai trò làm kênh trung chuyển dữ liệu đệm tốc độ cao, nhận luồng dữ liệu thô và truyền trực tiếp vào các công cụ xử lý như Apache Flink, Apache Spark hoặc Viettel Search Engine.',
        },
        {
          id: 'case-3',
          title: 'Tập hợp Log & Giám sát hệ thống tập trung',
          context: 'Hàng trăm máy chủ ứng dụng ghi log liên tục, gây quá tải ổ đĩa cục bộ và khó khăn trong việc điều tra nguyên nhân sự cố.',
          solution: 'Sử dụng Filebeat/Logstash đẩy toàn bộ log ứng dụng vào vKQS, sau đó phân phối an toàn vào OpenSearch hoặc hệ sinh thái SIEM để phân tích tập trung.',
        },
        {
          id: 'case-4',
          title: 'Internet vạn vật (IoT) & Cập nhật thời gian thực',
          context: 'Hàng chục ngàn cảm biến thông minh gửi thông số định vị GPS, nhiệt độ liên tục theo chu kỳ vài giây đòi hỏi hệ thống tiếp nhận không bao giờ bị nghẽn mạng.',
          solution: 'vKQS tiếp nhận luồng dữ liệu khổng lồ từ các thiết bị IoT một cách mượt mà, lưu trữ đệm an toàn trước khi đẩy xuống cơ sở dữ liệu chuyên dụng.',
        },
      ],
    },
    faq: {
      eyebrow: 'HỎI ĐÁP DỊCH VỤ',
      headline: 'Các Câu Hỏi Thường Gặp Về Viettel Queue Service (vKQS)',
      items: [
        {
          question: 'Doanh nghiệp tôi có cần tự quản lý ZooKeeper khi sử dụng vKQS không?',
          answer: 'Hoàn toàn không. Viettel IDC cung cấp dịch vụ Managed Kafka hoàn chỉnh, toàn bộ việc quản trị ZooKeeper hoặc KRaft metadata đều do hệ thống tự động xử lý. Quý khách chỉ cần kết nối Producer/Consumer trực tiếp vào danh sách Broker được cung cấp.',
        },
        {
          question: 'vKQS sử dụng phiên bản Apache Kafka nào?',
          answer: 'vKQS được triển khai trên nền tảng Apache Kafka phiên bản ổn định mới nhất (3.8.x), tương thích hoàn toàn với tất cả các Kafka Client SDK phổ biến (Java, Python, Go, Node.js, C#/.NET).',
        },
        {
          question: 'Tôi có thể kết nối vào cụm Kafka từ bên ngoài Internet được không?',
          answer: 'Vì lý do bảo mật và tối ưu hóa độ trễ theo chuẩn Enterprise, vKQS mặc định được kết nối trong mạng riêng nội bộ oVPC của Viettel IDC. Tuy nhiên, khách hàng có thể tùy chọn cấu hình mở cổng truy cập Public qua Internet kèm xác thực bảo mật SSL/TLS và Whitelist IP nghiêm ngặt khi có nhu cầu.',
        },
        {
          question: 'Dữ liệu trong hàng đợi được lưu trữ tối đa bao lâu?',
          answer: 'Mặc định thời gian lưu trữ tin nhắn (Message Retention) là 7 ngày. Khách hàng có thể dễ dàng điều chỉnh thời gian lưu trữ dài hơn hoặc tính theo dung lượng tối đa của từng Topic thông qua giao diện quản trị.',
        },
        {
          question: 'Khả năng chịu lỗi khi một Broker bị sự cố như thế nào?',
          answer: 'Cụm vKQS luôn được thiết lập tối thiểu 3 Brokers với hệ số nhân bản Replication Factor là 2 hoặc 3. Khi một Broker gặp sự cố, các Broker còn lại sẽ tự động bầu cử Leader mới cho Partition ngay lập tức, ứng dụng tiếp tục gửi nhận tin nhắn bình thường mà không bị gián đoạn.',
        },
        {
          question: 'Cụm vKQS có hỗ trợ dự phòng Multi-Zone không?',
          answer: 'Có. Viettel IDC hỗ trợ triển khai các Broker trên nhiều vùng khả dụng độc lập (Multi-AZ) tại các Data Center khác nhau, đảm bảo mức độ sẵn sàng SLA cao nhất cho các ứng dụng ngân hàng và tài chính.',
        },
      ],
    },
    footerCta: {
      headline: 'Sẵn Sàng Tăng Tốc Dữ Liệu Thời Gian Thực Cùng Viettel Queue Service?',
      subtext: 'Trải nghiệm nền tảng hàng đợi tin nhắn Apache Kafka mạnh mẽ, tin cậy và hoàn toàn tự động hóa dành riêng cho doanh nghiệp của bạn ngay hôm nay.',
      buttonText: 'Đăng Ký Tư Vấn & Trải Nghiệm vKQS',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU & HỖ TRỢ',
      headline: 'Tài Liệu Kỹ Thuật & Đội Ngũ Chuyên Gia 24/7',
      documentation: {
        title: 'Cẩm Nang Tích Hợp Kafka SDK & Hướng Dẫn Kỹ Thuật',
        desc: 'Xem hướng dẫn chi tiết cách kết nối Producer/Consumer trong Java, Python, Go, cấu hình ACL bảo mật và các mẫu kiến trúc microservices.',
        linkText: 'Xem tài liệu kỹ thuật Kafka',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Kỹ Thuật Doanh Nghiệp 24/7/365',
        desc: 'Đội ngũ chuyên gia kiến trúc dữ liệu và kỹ sư điện toán đám mây Viettel IDC luôn thường trực hỗ trợ xử lý mọi thắc mắc và sự cố hệ thống.',
        linkText: 'Yêu cầu hỗ trợ kỹ thuật chuyên sâu',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI GIẢI PHÁP LIÊN QUAN',
      headline: 'Giải Pháp Tích Hợp Hoàn Hảo Cùng Viettel Queue Service',
      items: [
        {
          sku: 'SVC-003',
          title: 'Viettel Open Kubernetes Service (vOKS)',
          description: 'Môi trường triển khai các ứng dụng Microservices kết nối trực tiếp với cụm Kafka độ trễ cực thấp.',
          path: '/services/compute/vks',
        },
        {
          sku: 'SVC-036',
          title: 'Viettel Database Service (vDBS)',
          description: 'Cơ sở dữ liệu quản trị tự động phục vụ lưu trữ lâu dài dữ liệu sau khi được xử lý từ hàng đợi.',
          path: '/services/database/vdbs',
        },
        {
          sku: 'SVC-005',
          title: 'Viettel Virtual Private Cloud (oVPC)',
          description: 'Mạng riêng ảo cách ly an toàn cho phép cụm vKQS và các máy chủ ứng dụng giao tiếp tốc độ cao.',
          path: '/services/network',
        },
        {
          sku: 'SVC-040',
          title: 'Viettel Search Engine (vSE)',
          description: 'Công cụ tìm kiếm và phân tích log phân tán OpenSearch nhận dữ liệu trực tiếp từ luồng Kafka.',
          path: '/services/database/vse',
        },
      ],
    },
  },

  // =========================================================================
  // 17. VIETTEL SEARCH ENGINE (vSE)
  // =========================================================================
  'vse': {
    id: 'vse',
    sku: 'SVC-040',
    pillar: 'ai-data',
    pageTitle: 'Viettel Search Engine (vSE) – Tìm Kiếm & Phân Tích Dữ Liệu Lớn Thời Gian Thực | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Phân tích Dữ liệu & AI', path: '/services/compute' },
        { name: 'Viettel Search Engine (vSE)' },
      ],
      eyebrow: 'DỊCH VỤ PHÂN TÍCH DỮ LIỆU PHÂN TÁN TỐC ĐỘ CAO TRÊN NỀN TẢNG OPENSEARCH',
      headline: 'Viettel Search Engine (vSE) – Tìm Kiếm & Phân Tích Dữ Liệu Lớn Thời Gian Thực',
      subheading: 'Khai thác giá trị từ khối lượng dữ liệu khổng lồ với sức mạnh tìm kiếm và phân tích thời gian thực trên nền tảng OpenSearch phân tán. Tự động hóa triển khai, tối ưu chi phí hạ tầng và đảm bảo tính sẵn sàng cao khi dữ liệu tăng trưởng theo cấp số nhân.',
      primaryCta: { text: 'Dùng Thử Miễn Phí / Đăng Ký', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá Dịch Vụ', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Khai Thác Sức Mạnh Dữ Liệu Lớn Phân Tán Cùng Viettel Search Engine',
      leftDescription: [
        'Viettel Search Engine (vSE) là dịch vụ tìm kiếm và phân tích dữ liệu phân tán tốc độ cao được xây dựng trên nền tảng mã nguồn mở OpenSearch. Giải pháp cho phép doanh nghiệp dễ dàng lưu trữ, lập chỉ mục (indexing), tìm kiếm toàn văn bản (full-text search) và trực quan hóa các luồng dữ liệu khổng lồ từ nhật ký hệ thống (logs), số liệu giám sát (metrics) và dữ liệu nghiệp vụ thời gian thực.',
        'Được quản trị hoàn chỉnh (Fully-managed) trên hạ tầng đám mây Viettel IDC, vSE giúp doanh nghiệp loại bỏ hoàn toàn sự phức tạp trong việc xây dựng, cấu hình cụm máy chủ và duy trì tính khả dụng của hệ thống phân tán, từ đó rút ngắn chu kỳ phát triển ứng dụng và khai phóng tiềm năng dữ liệu.',
      ],
      highlights: [
        {
          title: 'Khởi tạo cụm tự động chỉ trong vài phút',
          description: 'Hệ thống tự động cấp phát tài nguyên, cài đặt cụm OpenSearch đa node và cấu hình cân bằng tải hoàn chỉnh.',
        },
        {
          title: 'Tìm kiếm toàn văn bản siêu tốc',
          description: 'Công cụ tìm kiếm thông minh hỗ trợ xử lý ngôn ngữ tự nhiên, gợi ý từ khóa và lọc dữ liệu với độ trễ dưới 1 giây.',
        },
        {
          title: 'Trực quan hóa dữ liệu trực quan',
          description: 'Tích hợp sẵn OpenSearch Dashboards giúp thiết kế các biểu đồ phân tích xu hướng và theo dõi chỉ số nghiệp vụ sinh động.',
        },
        {
          title: 'Tự động mở rộng linh hoạt',
          description: 'Dễ dàng bổ sung thêm node dữ liệu hoặc mở rộng dung lượng ổ cứng khi khối lượng dữ liệu doanh nghiệp tăng trưởng.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
      headline: 'Bảng Giá Dịch Vụ Viettel Search Engine Minh Bạch & Linh Hoạt',
      controls: [
        {
          id: 'region',
          label: 'Khu vực Trung tâm Dữ liệu',
          options: [
            { id: 'north', label: 'Miền Bắc (Hòa Lạc)' },
            { id: 'south', label: 'Miền Nam (Bình Dương)' },
          ],
          defaultSelected: 'north',
        },
        {
          id: 'cycle',
          label: 'Chu kỳ thanh toán',
          options: [
            { id: 'monthly', label: 'Theo tháng' },
            { id: 'yearly', label: '12 Tháng (Tiết kiệm)' },
            { id: 'twoYear', label: '24 Tháng (Tối ưu nhất)' },
          ],
          defaultSelected: 'monthly',
        },
      ],
      note: 'Bảng giá chưa bao gồm thuế VAT (nếu có). Áp dụng tính phí trọn gói theo tháng cho cấu hình cụm OpenSearch Cluster hoàn chỉnh.',
      tables: [
        {
          id: 'vse_table',
          title: 'BẢNG GIÁ CẤU HÌNH CỤM VIETTEL SEARCH ENGINE TIÊU CHUẨN',
          columns: [
            { header: 'Gói Cấu Hình', key: 'name', width: '22%' },
            { header: 'Năng Lực Tính Toán', key: 'compute', width: '22%', align: 'center' },
            { header: 'Quy Mô Cụm', key: 'cluster', width: '18%', align: 'center' },
            { header: 'Lưu Trữ & Network', key: 'storage', width: '20%', align: 'center' },
            { header: 'Đơn Giá / Tháng', key: 'price', width: '18%', align: 'right', isPrice: true },
          ],
          rows: [
            {
              name: 'vSE Basic Cluster',
              compute: '2 vCPU / 4 GB RAM mỗi Node',
              cluster: '3 Nodes (1 Master + 2 Data)',
              storage: '50 GB SSD / Node + 1 vLB',
              price: '4.200.000 đ',
            },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp có nhu cầu mở rộng tài nguyên tính toán và dung lượng lưu trữ phân tán quy mô lớn hàng chục TB?',
        buttonText: 'Yêu Cầu Thiết Kế Cụm vSE Tùy Biến & Nhận Báo Giá',
        notesPlaceholder: 'Đăng ký nhận tư vấn kiến trúc và báo giá cụm Viettel Search Engine dung lượng lớn',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG NỔI BẬT',
      headline: 'Năng Lực Công Nghệ & Tính Năng Chuyên Sâu Của vSE',
      cards: [
        {
          id: 'ft-1',
          title: 'Triển Khai Tự Động Hóa (Automated Provisioning)',
          description: 'Hỗ trợ khởi tạo cụm OpenSearch đa node kèm cấu hình cân bằng tải và kết nối mạng riêng biệt chỉ sau vài cú click chuột trên cổng CMP.',
        },
        {
          id: 'ft-2',
          title: 'Thu Thập & Tiếp Nhận Log Đa Nguồn',
          description: 'Tương thích hoàn hảo với các công cụ thu thập log phổ biến như Logstash, Fluentd, Beats, Kafka và tiếp nhận trực tiếp qua REST API.',
        },
        {
          id: 'ft-3',
          title: 'Phân Tích Dữ Liệu Thời Gian Thực',
          description: 'Tích hợp sẵn bộ công cụ OpenSearch Dashboards cho phép xây dựng các báo cáo phân tích tương tác, biểu đồ nhiệt và bảng theo dõi trạng thái.',
        },
        {
          id: 'ft-4',
          title: 'Công Cụ Truy Vấn Mạnh Mẽ (SQL & PPL)',
          description: 'Hỗ trợ ngôn ngữ tìm kiếm phong phú bao gồm OpenSearch Query DSL, truy vấn SQL chuẩn và ngôn ngữ đường ống PPL dễ sử dụng.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật Dịch Vụ Viettel Search Engine',
      specs: [
        { category: 'Nền tảng công nghệ cốt lõi', details: 'OpenSearch phân tán phiên bản ổn định mới nhất, hoàn toàn chuẩn mở' },
        { category: 'Cấu trúc cụm khả dụng cao', details: 'Tối thiểu 3 Nodes kiến trúc Master-Data đảm bảo không có điểm lỗi đơn (SPOF)' },
        { category: 'Phương thức nạp dữ liệu (Ingestion)', details: 'RESTful API, HTTP/HTTPS, Logstash, Fluentd, Kafka Beats, OpenTelemetry' },
        { category: 'Loại dữ liệu hỗ trợ', details: 'Dữ liệu phi cấu trúc, bán cấu trúc, JSON, văn bản dạng Text, số liệu Metric, Geolocation' },
        { category: 'Cân bằng tải tích hợp', details: 'Trang bị sẵn Viettel Load Balancer (vLB) tự động điều phối các truy vấn đọc/ghi' },
        { category: 'Giao diện trực quan hóa', details: 'Tích hợp sẵn OpenSearch Dashboards quản lý trực quan trên nền tảng Web' },
        { category: 'Hạ tầng Trung tâm Dữ liệu', details: 'Hệ thống Data Center Viettel IDC đạt tiêu chuẩn quốc tế TIA-942 Rated 3' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH CỐT LÕI',
      headline: 'Giá Trị Thiết Thực vSE Mang Lại Cho Hoạt Động Doanh Nghiệp',
      pillars: [
        {
          number: '01',
          title: 'Tiết Kiệm Thời Gian Vận Hành',
          description: 'Giải phóng đội ngũ kỹ sư khỏi các tác vụ cấu hình hạ tầng phức tạp, mở rộng cụm tự động không làm gián đoạn hệ thống.',
        },
        {
          number: '02',
          title: 'Phát Hiện Sự Cố Tức Thì',
          description: 'Truy vấn hàng triệu dòng log trong chớp mắt giúp nhận diện lỗi phần mềm, hành vi xâm nhập mạng bất thường chỉ trong vài giây.',
        },
        {
          number: '03',
          title: 'Quản Lý Dữ Liệu Tập Trung',
          description: 'Hợp nhất toàn bộ nhật ký hoạt động từ máy chủ, container, ứng dụng và thiết bị mạng về một kho dữ liệu duy nhất.',
        },
        {
          number: '04',
          title: 'Ra Quyết Định Dựa Trên Dữ Liệu',
          description: 'Biến dữ liệu thô thành các chỉ số kinh doanh trực quan hỗ trợ ban lãnh đạo đưa ra các quyết định chiến lược kịp thời.',
        },
      ],
    },
    useCases: {
      eyebrow: 'ỨNG DỤNG THỰC TẾ',
      headline: 'Kịch Bản Ứng Dụng Điển Hình Của Viettel Search Engine',
      items: [
        {
          id: 'case-1',
          title: 'Quản lý & Phân tích Log tập trung (Centralized Log Management)',
          context: 'Doanh nghiệp vận hành hàng trăm máy chủ ảo và dịch vụ microservices, việc truy cập từng máy chủ để đọc log khi có sự cố rất tốn thời gian và dễ bỏ sót lỗi.',
          solution: 'Tập trung toàn bộ log ứng dụng và hạ tầng về cụm vSE. Kỹ sư tìm kiếm nguyên nhân sự cố tức thì qua giao diện trực quan chỉ bằng một từ khóa mã lỗi.',
        },
        {
          id: 'case-2',
          title: 'Giám sát an ninh thông tin & Điều tra sự cố (SIEM / Security Analytics)',
          context: 'Các cuộc tấn công mạng diễn ra tinh vi, cần thu thập và tương quan hóa log truy cập mạng, log xác thực người dùng để phát hiện xâm nhập.',
          solution: 'vSE lập chỉ mục các sự kiện bảo mật theo thời gian thực, thiết lập các quy tắc cảnh báo tự động khi phát hiện đăng nhập trái phép hoặc quét cổng.',
        },
        {
          id: 'case-3',
          title: 'Công cụ tìm kiếm thông minh cho ứng dụng & Website (Application Search)',
          context: 'Website thương mại điện tử, cổng thông tin điện tử cần tính năng tìm kiếm sản phẩm, bài viết nhanh chóng với độ chính xác cao.',
          solution: 'Tích hợp vSE làm bộ máy tìm kiếm backend, cung cấp khả năng tự động hoàn thành từ khóa (Auto-complete), lọc theo danh mục và tìm kiếm mờ (Fuzzy search).',
        },
        {
          id: 'case-4',
          title: 'Trung tâm phân tích dữ liệu đám mây lai (Hybrid Cloud Data Hub)',
          context: 'Dữ liệu phát sinh từ nhiều nguồn khác nhau (On-Premises, Viettel Cloud, Public Cloud) cần được đồng bộ và phân tích chung.',
          solution: 'vSE đóng vai trò làm hồ lưu trữ và phân tích dữ liệu tập trung, cho phép truy vấn dữ liệu đa nền tảng một cách đồng nhất.',
        },
      ],
    },
    faq: {
      eyebrow: 'HỎI ĐÁP DỊCH VỤ',
      headline: 'Các Câu Hỏi Thường Gặp Về Viettel Search Engine (vSE)',
      items: [
        {
          question: 'Khách hàng có thể thao tác những gì trên giao diện quản trị CMP của Viettel IDC?',
          answer: 'Thông qua giao diện portal CMP, quý khách có thể chủ động khởi tạo cụm vSE mới, theo dõi trạng thái sức khỏe của cụm (Cluster Health), mở rộng tài nguyên tính toán/dung lượng ổ đĩa, truy cập trực tiếp vào OpenSearch Dashboards và quản lý cấu hình cân bằng tải vLB một cách nhanh chóng.',
        },
        {
          question: 'Doanh nghiệp có thể mua bổ sung tài nguyên khi dữ liệu tăng đột biến không?',
          answer: 'Có. Dịch vụ hỗ trợ mở rộng linh hoạt (Scale-up cấu hình từng node hoặc Scale-out bổ sung thêm node dữ liệu vào cụm) theo nhu cầu thực tế mà không gây gián đoạn các truy vấn tìm kiếm đang chạy.',
        },
        {
          question: 'vSE hỗ trợ những phương thức thu thập log nào?',
          answer: 'vSE tương thích với hầu hết các log shipper mã nguồn mở thông dụng hiện nay như Logstash, Fluentd, Filebeat, Metricbeat, rsyslog và hỗ trợ nạp dữ liệu qua chuẩn RESTful API hoặc từ luồng message queue Viettel Queue Service (vKQS).',
        },
        {
          question: 'vSE có giúp tiết kiệm chi phí so với việc tự triển khai cụm Elasticsearch riêng không?',
          answer: 'Chắc chắn có. Việc tự duy trì cụm Elasticsearch đòi hỏi chi phí bản quyền thương mại đắt đỏ và chi phí nhân sự vận hành hệ thống phân tán. vSE sử dụng nền tảng OpenSearch chuẩn mở hoàn toàn miễn phí bản quyền, kết hợp mô hình Managed Service giúp doanh nghiệp tiết kiệm đến 40% chi phí.',
        },
        {
          question: 'Giao diện phân tích OpenSearch Dashboards có được cài đặt sẵn không?',
          answer: 'Có. Mỗi cụm vSE được kích hoạt đều đi kèm giao diện web OpenSearch Dashboards tích hợp sẵn, người dùng chỉ cần đăng nhập qua trình duyệt để bắt đầu tạo Dashboard và khám phá dữ liệu ngay lập tức.',
        },
      ],
    },
    footerCta: {
      headline: 'Sẵn Sàng Làm Chủ Dữ Liệu Lớn Cùng Viettel Search Engine?',
      subtext: 'Trải nghiệm giải pháp tìm kiếm và phân tích dữ liệu thời gian thực mạnh mẽ, tối ưu hóa chi phí và nâng cao năng lực cạnh tranh cho doanh nghiệp của bạn ngay hôm nay.',
      buttonText: 'Đăng Ký Tư Vấn & Trải Nghiệm vSE',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU & HỖ TRỢ',
      headline: 'Đồng Hành Cùng Doanh Nghiệp 24/7/365',
      documentation: {
        title: 'Cẩm Nang Hướng Dẫn Kỹ Thuật OpenSearch & vSE',
        desc: 'Xem hướng dẫn chi tiết cách kết nối ứng dụng qua REST API, cấu hình log pipeline với Logstash/Fluentd và thiết kế biểu đồ trên Dashboards.',
        linkText: 'Xem tài liệu hướng dẫn kỹ thuật',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Kỹ Thuật Doanh Nghiệp 24/7/365',
        desc: 'Đội ngũ chuyên gia kiến trúc dữ liệu Viettel IDC luôn sẵn sàng tư vấn giải pháp tối ưu chỉ mục và hỗ trợ xử lý sự cố cho khách hàng.',
        linkText: 'Yêu cầu hỗ trợ kỹ thuật chuyên sâu',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI GIẢI PHÁP LIÊN QUAN',
      headline: 'Giải Pháp Tích Hợp Hoàn Hảo Cùng Viettel Search Engine',
      items: [
        {
          sku: 'SVC-003',
          title: 'Viettel Open Kubernetes Service (vOKS)',
          description: 'Môi trường vận hành ứng dụng hiện đại, đẩy log trực tiếp vào cụm vSE để phân tích tập trung.',
          path: '/services/compute/vks',
        },
        {
          sku: 'SVC-011',
          title: 'Viettel Cloud Object Storage',
          description: 'Lưu trữ dài hạn các bản snapshot chỉ mục (Index Snapshots) với chi phí tối ưu nhất.',
          path: '/services/storage',
        },
        {
          sku: 'SVC-001',
          title: 'Viettel Cloud Server',
          description: 'Hạ tầng máy chủ ảo hóa OpenStack hiệu năng cao cho các ứng dụng nghiệp vụ.',
          path: '/services/compute/cloud-server',
        },
        {
          sku: 'SVC-037',
          title: 'Viettel Queue Service (vKQS)',
          description: 'Hàng đợi tin nhắn phân tán Apache Kafka làm bộ đệm tiếp nhận log trước khi đẩy vào vSE.',
          path: '/services/database/vkqs',
        },
      ],
    },
  },

  // =========================================================================
  // 18. VIETTEL CACHING SERVICE (vCAS)
  // =========================================================================
  'vcas': {
    id: 'vcas',
    sku: 'SVC-039',
    pillar: 'paas-containers',
    pageTitle: 'Viettel Caching Service (vCAS) – Bộ Nhớ Đệm In-Memory Siêu Tốc | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Nền tảng PaaS & Container', path: '/services/compute' },
        { name: 'Viettel Caching Service (vCAS)' },
      ],
      eyebrow: 'GIẢI PHÁP LƯU TRỮ BỘ NHỚ ĐỆM IN-MEMORY SIÊU TỐC',
      headline: 'Viettel Caching Service (vCAS) – Tăng Tốc Ứng Dụng Toàn Diện, Giảm Tải Cơ Sở Dữ Liệu',
      subheading: 'Tối ưu hóa hiệu năng ứng dụng với Viettel Caching Service (vCAS) – giải pháp lưu trữ đệm in-memory siêu tốc. Giúp bạn xử lý mượt mà lượng request khổng lồ, quản lý session store, hoạt động như một message broker linh hoạt trên Kubernetes và Microservices, loại bỏ hoàn toàn các điểm nghẽn trong vận hành cơ sở dữ liệu.',
      primaryCta: { text: 'Dùng Thử Miễn Phí / Đăng Ký Tư Vấn', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá Chi Tiết', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Tổng Quan Năng Lực Kiến Trúc & Vận Hành Của Viettel Caching Service',
      leftDescription: [
        'Viettel Caching Service (vCAS) là dịch vụ lưu trữ bộ nhớ đệm trong bộ nhớ RAM (In-memory Caching) hiệu năng cao, được thiết kế chuyên biệt để tăng tốc độ phản hồi của ứng dụng và giải phóng áp lực truy vấn cho hệ thống cơ sở dữ liệu quan hệ (RDBMS).',
        'Hoạt động như một lớp đệm trung gian tốc độ cao, vCAS lưu trữ các kết quả truy vấn thường xuyên hoặc phiên làm việc người dùng (Session Store) trực tiếp trên RAM, cho phép truy xuất dữ liệu với độ trễ chỉ tính bằng phần nghìn giây (sub-millisecond), đáp ứng tức thì hàng chục ngàn yêu cầu truy cập đồng thời.',
      ],
      highlights: [
        {
          title: 'Tốc độ truy xuất siêu tốc',
          description: 'Dữ liệu được lưu trữ trực tiếp trên bộ nhớ RAM tốc độ cao, mang lại thời gian phản hồi cực nhanh dưới 1 mili-giây.',
        },
        {
          title: 'Khởi tạo và cấu hình tức thì',
          description: 'Triển khai cụm Caching hoàn chỉnh chỉ trong vài phút, tích hợp liền mạch với các ứng dụng PHP, Java, Python, Node.js.',
        },
        {
          title: 'Giảm tải tới 80% cho Database',
          description: 'Ngăn chặn các truy vấn lặp lại làm cạn kiệt CPU của hệ thống cơ sở dữ liệu chính, đảm bảo ứng dụng luôn ổn định.',
        },
        {
          title: 'Tối ưu cho kiến trúc Microservices',
          description: 'Hoạt động hoàn hảo như một kho lưu trữ trạng thái phiên làm việc (Stateful/Session) cho các cụm Kubernetes phân tán.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
      headline: 'Bảng Giá Gói Dịch Vụ Viettel Caching Service Tiêu Chuẩn',
      note: 'Bảng giá chưa bao gồm thuế VAT (nếu có). Áp dụng tính phí thuê bao trọn gói theo tháng.',
      tables: [
        {
          id: 'vcas_table',
          title: 'BẢNG GIÁ CÁC GÓI VIETTEL CACHING SERVICE THEO DUNG LƯỢNG RAM',
          columns: [
            { header: 'Gói Dịch Vụ', key: 'name', width: '25%' },
            { header: 'Năng Lực vCPU', key: 'vcpu', width: '20%', align: 'center' },
            { header: 'Dung Lượng Bộ Nhớ RAM', key: 'ram', width: '25%', align: 'center' },
            { header: 'Đơn Giá / Tháng', key: 'price', width: '30%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'vCAS Basic', vcpu: '2 vCPU', ram: '4 GB RAM', price: '750.000 đ' },
            { name: 'vCAS Standard', vcpu: '2 vCPU', ram: '8 GB RAM', price: '1.350.000 đ' },
            { name: 'vCAS Team', vcpu: '4 vCPU', ram: '16 GB RAM', price: '2.500.000 đ' },
            { name: 'vCAS Business', vcpu: '4 vCPU', ram: '32 GB RAM', price: '4.500.000 đ' },
          ],
        },
      ],
      customCta: {
        text: 'Bạn cần tư vấn cấu hình RAM lớn hơn hoặc thiết lập mô hình Caching Cluster phân tán chuyên biệt?',
        buttonText: 'Yêu Cầu Tư Vấn Cấu Hình Riêng & Nhận Báo Giá',
        notesPlaceholder: 'Đăng ký nhận tư vấn kiến trúc giải pháp và báo giá dịch vụ Viettel Caching Service dung lượng cao',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG NỔI BẬT',
      headline: 'Năng Lực Công Nghệ & Tính Năng Chuyên Sâu Của vCAS',
      cards: [
        {
          id: 'ft-1',
          title: 'Triển Khai Nhanh Chóng',
          description: 'Hỗ trợ thiết lập dịch vụ caching tự động hoàn chỉnh, cung cấp thông tin kết nối an toàn ngay trên giao diện portal quản trị.',
        },
        {
          id: 'ft-2',
          title: 'Công Nghệ Memcached / In-Memory Chuẩn Quốc Tế',
          description: 'Tương thích hoàn hảo với các thư viện Memcached và Key-Value store phổ biến trong mọi ngôn ngữ lập trình hiện đại.',
        },
        {
          id: 'ft-3',
          title: 'Giao Diện Quản Lý Thông Minh',
          description: 'Theo dõi tỷ lệ trúng bộ nhớ đệm (Cache Hit Rate), số lượng kết nối đồng thời và dung lượng RAM đã sử dụng qua biểu đồ trực quan.',
        },
        {
          id: 'ft-4',
          title: 'Hỗ Trợ Kiến Trúc Microservices Tối Ưu',
          description: 'Chia sẻ phiên làm việc giữa hàng trăm container phân tán một cách mượt mà, hỗ trợ giải thuật băm nhất quán (Consistent Hashing).',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật Viettel Caching Service',
      specs: [
        { category: 'Công nghệ lưu trữ cốt lõi', details: 'Hệ thống lưu trữ In-Memory phân tán tốc độ cao (Memcached / Key-Value Store)' },
        { category: 'Độ trễ truy xuất dữ liệu', details: 'Độ trễ trung bình < 1 mili-giây (Sub-millisecond latency)' },
        { category: 'Thuật toán quản lý bộ nhớ đệm', details: 'LRU (Least Recently Used) tự động giải phóng vùng nhớ cũ khi đầy dung lượng' },
        { category: 'Giao thức & Cổng kết nối', details: 'TCP Native Protocol tiêu chuẩn, hỗ trợ mã hóa và bảo mật trong mạng nội bộ' },
        { category: 'Khả năng tương thích', details: 'Hỗ trợ 100% các ngôn ngữ: PHP (Laravel, WordPress), Python (Django), Java, Node.js, Go' },
        { category: 'Hạ tầng Data Center', details: 'Vận hành tại chuỗi Trung tâm Dữ liệu đạt chuẩn quốc tế TIA-942 Rated 3 của Viettel IDC' },
        { category: 'Tiêu chuẩn bảo mật thông tin', details: 'Đạt chứng nhận ISO 27001, ISO 27017, ISO 9001 và An toàn thông tin Cấp độ 3' },
        { category: 'Cam kết mức độ dịch vụ (SLA)', details: 'Cam kết Uptime đạt tối thiểu 99.99%' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH CỐT LÕI',
      headline: 'Giá Trị Vượt Trội vCAS Đem Lại Cho Ứng Dụng Doanh Nghiệp',
      pillars: [
        {
          number: '01',
          title: 'Tăng Tốc Truy Xuất Dữ Liệu',
          description: 'Thời gian tải trang và xử lý API giảm từ hàng giây xuống còn vài mili-giây, nâng cao vượt bậc trải nghiệm của người dùng cuối.',
        },
        {
          number: '02',
          title: 'Giảm Tải Cho Backend & Database',
          description: 'Chặn đứng các truy vấn đọc lặp đi lặp lại tới MySQL, PostgreSQL hoặc SQL Server, giúp cơ sở dữ liệu hoạt động nhẹ nhàng và ổn định.',
        },
        {
          number: '03',
          title: 'Tối Ưu Chi Phí Tài Nguyên',
          description: 'Tránh việc phải nâng cấp cấu hình máy chủ cơ sở dữ liệu đắt đỏ, chỉ cần đầu tư một cụm Caching chi phí hợp lý để tăng gấp 10 lần tải.',
        },
        {
          number: '04',
          title: 'Đẩy Nhanh Tiến Độ Dự Án',
          description: 'Tích hợp đơn giản vào mã nguồn có sẵn chỉ với vài dòng lệnh kết nối, không đòi hỏi thay đổi cấu trúc bảng dữ liệu phức tạp.',
        },
      ],
    },
    useCases: {
      eyebrow: 'ỨNG DỤNG THỰC TẾ',
      headline: 'Các Bài Toán Ứng Dụng Điển Hình Của Viettel Caching Service',
      items: [
        {
          id: 'case-1',
          title: 'Lưu trữ đệm dữ liệu thống kê & Báo cáo Dashboard',
          context: 'Các báo cáo doanh thu, thống kê lượt truy cập đòi hỏi phải tính toán từ hàng triệu bản ghi trong cơ sở dữ liệu, gây nghẽn toàn bộ hệ thống khi nhiều quản lý cùng xem.',
          solution: 'Tính toán trước kết quả và lưu vào vCAS với thời gian sống (TTL) 15 phút. Các lần truy vấn tiếp theo trả về kết quả ngay lập tức từ bộ nhớ đệm mà không cần chạm vào DB.',
        },
        {
          id: 'case-2',
          title: 'Quản lý phiên đăng nhập người dùng phân tán (Distributed Session Store)',
          context: 'Ứng dụng chạy trên cụm nhiều máy chủ web phía sau bộ cân bằng tải (Load Balancer). Nếu một máy chủ bị khởi động lại, người dùng trên máy đó sẽ bị mất phiên và phải đăng nhập lại.',
          solution: 'Lưu trữ toàn bộ thông tin phiên làm việc vào vCAS tập trung. Mọi máy chủ web đều có thể truy cập phiên làm việc chung, đảm bảo người dùng không bao giờ bị ngắt quãng.',
        },
        {
          id: 'case-3',
          title: 'Tích hợp API của bên thứ ba (Third-party API Caching)',
          context: 'Ứng dụng gọi đến các API tính phí hoặc có giới hạn lượt gọi (Rate-limit) như API tỷ giá hối đoái, thời tiết, chứng khoán hoặc cổng thanh toán.',
          solution: 'Lưu kết quả gọi API vào vCAS để tái sử dụng cho các người dùng khác, vừa tiết kiệm chi phí gọi API bên thứ ba vừa giảm độ trễ kết nối mạng ra Internet.',
        },
        {
          id: 'case-4',
          title: 'Tăng tốc độ tải trang thương mại điện tử vào giờ cao điểm',
          context: 'Vào các dịp Flash-sale, hàng trăm ngàn khách hàng cùng truy cập xem danh mục sản phẩm, dẫn đến tình trạng máy chủ sập và mất đơn hàng.',
          solution: 'Toàn bộ thông tin mô tả và danh mục sản phẩm được nạp sẵn vào vCAS. Ứng dụng đáp ứng mượt mà lưu lượng truy cập khổng lồ mà cơ sở dữ liệu vẫn an toàn.',
        },
      ],
    },
    faq: {
      eyebrow: 'HỎI ĐÁP DỊCH VỤ',
      headline: 'Các Câu Hỏi Thường Gặp Về Viettel Caching Service (vCAS)',
      items: [
        {
          question: 'vCAS là gì và hoạt động như thế nào?',
          answer: 'vCAS là dịch vụ lưu trữ dữ liệu tạm thời trên bộ nhớ RAM (In-memory). Khi ứng dụng cần một mẩu dữ liệu, nó sẽ kiểm tra trong vCAS trước (Cache Lookup). Nếu có (Cache Hit), dữ liệu được trả về ngay lập tức với tốc độ mili-giây. Nếu chưa có (Cache Miss), ứng dụng mới truy vấn cơ sở dữ liệu rồi lưu kết quả vào vCAS cho các lần gọi sau.',
        },
        {
          question: 'vCAS có thể giúp cải thiện hiệu năng cơ sở dữ liệu của tôi như thế nào?',
          answer: 'Trong hầu hết các ứng dụng, khoảng 80-90% các truy vấn là truy vấn Đọc (Read queries) với nội dung lặp lại. vCAS giúp hấp thụ toàn bộ các truy vấn đọc này trên bộ nhớ RAM, giúp cơ sở dữ liệu chính giảm đến 80% tải CPU và chỉ cần tập trung xử lý các thao tác Ghi (Write queries).',
        },
        {
          question: 'Tôi có thể sử dụng vCAS như một Message Queue không?',
          answer: 'vCAS được tối ưu tốt nhất cho tác vụ Key-Value Caching và Session Store. Nếu quý khách có nhu cầu xây dựng hệ thống hàng đợi thông điệp chuyên sâu với khả năng lưu trữ bền bỉ và cơ chế Pub/Sub phức tạp, chúng tôi khuyến nghị sử dụng dịch vụ Viettel Queue Service (vKQS) của Viettel IDC.',
        },
        {
          question: 'Làm thế nào để tôi giám sát hiệu quả của dịch vụ Caching?',
          answer: 'Viettel IDC cung cấp bảng theo dõi trực quan trên portal quản trị, hiển thị chi tiết các thông số quan trọng như: Tỷ lệ trúng bộ nhớ đệm (Cache Hit Rate), dung lượng RAM đang sử dụng, số lượng kết nối đồng thời và lưu lượng mạng In/Out theo thời gian thực.',
        },
      ],
    },
    footerCta: {
      headline: 'Sẵn Sàng Tăng Tốc Ứng Dụng Cùng Viettel Caching Service?',
      subtext: 'Trải nghiệm giải pháp bộ nhớ đệm In-memory siêu tốc, loại bỏ hoàn toàn các điểm nghẽn hiệu năng và nâng cao trải nghiệm khách hàng của bạn ngay hôm nay.',
      buttonText: 'Đăng Ký Tư Vấn & Nhận Báo Giá vCAS',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU & HỖ TRỢ',
      headline: 'Tài Liệu Hướng Dẫn Kỹ Thuật & Đội Ngũ Chuyên Gia 24/7',
      documentation: {
        title: 'Cẩm Nang Tích Hợp Thư Viện Caching Cho Lập Trình Viên',
        desc: 'Xem hướng dẫn chi tiết cách kết nối vCAS trong Laravel, WordPress, Django, Spring Boot, Node.js và các mẫu thiết kế kiến trúc Cache-Aside.',
        linkText: 'Xem tài liệu hướng dẫn kỹ thuật',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Doanh Nghiệp Viettel IDC 24/7/365',
        desc: 'Đội ngũ kiến trúc sư giải pháp đám mây luôn sẵn sàng tư vấn cấu hình tối ưu và đồng hành cùng quý khách trong suốt quá trình vận hành.',
        linkText: 'Yêu cầu hỗ trợ kỹ thuật chuyên sâu',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI GIẢI PHÁP LIÊN QUAN',
      headline: 'Giải Pháp Tích Hợp Hoàn Hảo Cùng Viettel Caching Service',
      items: [
        {
          sku: 'SVC-036',
          title: 'Viettel Database Service (vDBS)',
          description: 'Cơ sở dữ liệu quản trị tự động, kết hợp cùng vCAS tạo nên giải pháp lưu trữ toàn diện và tối ưu.',
          path: '/services/database/vdbs',
        },
        {
          sku: 'SVC-003',
          title: 'Viettel Open Kubernetes Service (vOKS)',
          description: 'Nền tảng container điều phối các ứng dụng microservices kết nối bộ nhớ đệm phân tán vCAS.',
          path: '/services/compute/vks',
        },
        {
          sku: 'SVC-038',
          title: 'Viettel API Gateway (vAPIG)',
          description: 'Bộ điều khiển API tập trung hỗ trợ kết nối và bảo mật các luồng truy vấn ứng dụng.',
          path: '/services/compute/vapig',
        },
        {
          sku: 'SVC-001',
          title: 'Viettel Cloud Server',
          description: 'Hạ tầng máy chủ ảo hóa OpenStack hiệu năng cao vận hành các ứng dụng cốt lõi.',
          path: '/services/compute/cloud-server',
        },
      ],
    },
  },
};
