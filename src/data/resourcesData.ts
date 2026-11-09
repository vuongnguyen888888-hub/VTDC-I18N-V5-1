export interface ResourceItem {
  id: string;
  title: string;
  category: 'events' | 'blog' | 'news' | 'case-studies' | 'whitepapers';
  categoryLabel: string;
  badge?: string;
  badgeColor?: 'red' | 'blue' | 'emerald' | 'purple';
  bannerImage: string;
  description: string;
  content: string;
  publishDate: string;
  readTime: string;
  author: string;
  authorRole: string;
  downloadable?: boolean;
  downloadSize?: string;
}

export const RESOURCE_CATEGORIES = [
  { id: 'all', label: 'Tất cả tài nguyên', dotColor: 'bg-slate-500' },
  { id: 'blog', label: 'Bài viết chuyên gia', dotColor: 'bg-red-500' },
  { id: 'news', label: 'Tin tức & Xu hướng', dotColor: 'bg-cyan-500' },
  { id: 'events', label: 'Sự kiện & Hội thảo', dotColor: 'bg-blue-500' },
  { id: 'case-studies', label: 'Case Studies', dotColor: 'bg-purple-500' },
  { id: 'whitepapers', label: 'Báo cáo & Whitepapers', dotColor: 'bg-emerald-500' },
];

export const CATEGORY_LABELS: Record<ResourceItem['category'], string> = {
  blog: 'Bài viết chuyên gia',
  news: 'Tin tức & Xu hướng',
  events: 'Sự kiện & Hội thảo',
  'case-studies': 'Case Studies',
  whitepapers: 'Báo cáo & Whitepapers',
};

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'edge-hybrid-cloud-2026',
    title: 'Báo cáo Xu hướng Hybrid Cloud & Điện toán biên (Edge Computing) 2026 tại Việt Nam',
    category: 'whitepapers',
    categoryLabel: 'Báo cáo & Whitepapers',
    badge: 'BÁO CÁO THỊ TRƯỜNG',
    badgeColor: 'emerald',
    bannerImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    description: 'Nghiên cứu toàn diện về tốc độ chuyển dịch hạ tầng hybrid, bài toán kết nối độ trễ cực thấp tại các chi nhánh ngoại tỉnh và giải pháp tối ưu tài nguyên cho doanh nghiệp lớn.',
    publishDate: '15/07/2026',
    readTime: '25 phút đọc',
    author: 'Viettel IDC Cloud Lab',
    authorRole: 'Phòng Nghiên cứu Công nghệ Đám mây',
    downloadable: true,
    downloadSize: '4.8 MB',
    content: `
# Báo cáo Xu hướng Hybrid Cloud & Điện toán biên (Edge Computing) 2026 tại Việt Nam

Hạ tầng số tại Việt Nam đang bước vào giai đoạn chuyển đổi thứ hai, nơi các giải pháp đám mây công cộng (Public Cloud) thuần túy không còn là câu trả lời duy nhất cho mọi bài toán của doanh nghiệp. Đòi hỏi khắt khe về **độ trễ cực thấp**, **chủ quyền dữ liệu**, và **khả năng tối ưu chi phí vận hành** đã thúc đẩy mô hình **Hybrid Cloud** kết hợp **Edge Computing** lên ngôi.

## 1. Bức tranh toàn cảnh chuyển dịch đám mây 2026
Theo số liệu thống kê từ Viettel Cloud Lab, tính đến quý II năm 2026, hơn **62% doanh nghiệp tài chính, ngân hàng** và **bán lẻ quy mô lớn** tại Việt Nam đã chuyển đổi hoặc có kế hoạch chuyển dịch sang mô hình Hybrid Cloud trong vòng 12 tháng tới. 

Sự kết hợp giữa hạ tầng On-premise (tại chỗ) của doanh nghiệp với các nền tảng đám mây công cộng chuẩn quốc tế trong nước như Viettel Cloud giúp giải quyết hài hòa hai mục tiêu cốt lõi:
*   **Tuân thủ pháp lý khắt khe:** Lưu trữ dữ liệu khách hàng nhạy cảm tại máy chủ dùng riêng hoặc On-premise theo Luật An ninh mạng.
*   **Khả năng mở rộng vô hạn:** Đưa các workload không nhạy cảm hoặc có tính thời vụ (Campaign) lên Public Cloud để tiết kiệm chi phí phần cứng.

## 2. Trọng tâm của Điện toán biên (Edge Computing)
Điện toán biên không thay thế Điện toán đám mây trung tâm mà là cánh tay nối dài đắc lực. Với mạng lưới hơn 13 Trung tâm dữ liệu chuẩn Rated 3 trải dài khắp Việt Nam của Viettel IDC, chúng tôi đưa năng lực tính toán và xử lý AI đến sát khách hàng hơn bao giờ hết.

### Các lợi thế vượt trội từ Edge Computing:
1.  **Độ trễ tối thiểu (< 5ms):** Phù hợp tuyệt đối cho các hệ thống thanh toán thời gian thực, IoT công nghiệp, camera AI giám sát giao thông và đô thị thông minh.
2.  **Tối ưu băng thông truyền dẫn:** Giảm tải tới 70% lưu lượng dữ liệu thô cần truyền về Datacenter trung tâm nhờ việc xử lý, chọn lọc thông tin ngay tại biên địa phương.
3.  **Khả năng hoạt động ngoại tuyến (Offline Resiliency):** Các chi nhánh hoặc nhà máy thông minh vẫn có thể duy trì vận hành ổn định ngay cả khi gặp sự cố gián đoạn đường truyền cáp quang biển quốc tế.

## 3. Khuyến nghị kiến trúc chuyển đổi cho doanh nghiệp
Để triển khai thành công mô hình này, doanh nghiệp cần chú ý 3 yếu tố nền tảng:
*   **Đồng bộ hóa dữ liệu thời gian thực:** Sử dụng các giải pháp kết nối chuyên dụng độ trễ thấp như Viettel Cloud Express kết nối trực tiếp các trung tâm dữ liệu.
*   **Quản trị tập trung:** Triển khai các công cụ điều phối (Orchestration) hiện đại để giám sát tài nguyên Hybrid Cloud trên một giao diện duy nhất (Single Pane of Glass).
*   **Kiến trúc bảo mật Zero Trust:** Coi mọi điểm kết nối biên là các rủi ro bảo mật tiềm tàng, áp dụng xác thực đa lớp liên tục cho mọi tác vụ truy cập dữ liệu.
    `
  },
  {
    id: 'case-study-smart-banking',
    title: 'Hành trình Chuyển đổi Cloud Native nâng cao trải nghiệm ứng dụng Ngân hàng Số hàng đầu Việt Nam',
    category: 'case-studies',
    categoryLabel: 'Case Studies',
    badge: 'TÀI CHÍNH - NGÂN HÀNG',
    badgeColor: 'purple',
    bannerImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    description: 'Khám phá cách một ngân hàng thương mại cổ phần top đầu đã hiện đại hóa kiến trúc Core Banking từ monolithic sang microservices, đạt độ sẵn sàng dịch vụ 99.99%.',
    publishDate: '28/06/2026',
    readTime: '15 phút đọc',
    author: 'Viettel Cloud Enterprise',
    authorRole: 'Đội ngũ Triển khai Giải pháp Số',
    content: `
# Hành trình Chuyển đổi Cloud Native nâng cao trải nghiệm ứng dụng Ngân hàng Số hàng đầu Việt Nam

Ngành tài chính - ngân hàng là một trong những lĩnh vực có đòi hỏi khắt khe nhất về tính bảo mật, sự ổn định liên tục của hạ tầng, và tốc độ phản hồi dịch vụ khách hàng. Để đáp ứng khối lượng giao dịch số bùng nổ lên tới hàng chục triệu giao dịch mỗi ngày, một ngân hàng thương mại lớn tại Việt Nam đã phối hợp cùng Viettel IDC thực hiện chiến dịch tái cấu trúc toàn diện sang hệ sinh thái Cloud Native.

## Thách thức trước chuyển đổi
Hệ thống cũ của Ngân hàng vận hành theo mô hình kiến trúc khối nguyên bản (Monolithic) đặt tại trung tâm dữ liệu vật lý tự quản (On-Premises):
*   **Quá tải giờ cao điểm:** Hệ thống thường xuyên gặp hiện tượng nghẽn giao dịch, chậm phản hồi vào các khung giờ vàng thanh toán hoặc cuối tháng khi lượng truy cập tăng vọt 5-10 lần ngày thường.
*   **Khó khăn khi cập nhật:** Mỗi lần nâng cấp phiên bản ứng dụng đều yêu cầu bảo trì hệ thống và ngắt kết nối tạm thời vào lúc nửa đêm, gây bất tiện lớn cho người dùng.
*   **Chi phí dự phòng lãng phí:** Phải đầu tư mua sẵn lượng lớn phần cứng đắt đỏ chỉ để dự phòng cho các ngày cao điểm, trong khi 90% thời gian thông thường tài nguyên này ở trạng thái nhàn rỗi.

## Giải pháp đột phá từ Viettel Cloud
Sau khi khảo sát, đội ngũ kiến trúc sư trưởng của Viettel IDC đã đề xuất lộ trình chuyển đổi 3 bước sang mô hình Hybrid Cloud & Microservices:

1.  **Phân rã dịch vụ:** Tách lõi Core Banking truyền thống và các dịch vụ tiện ích bên ngoài (Thanh toán hóa đơn, ví điện tử, chuyển tiền nhanh) thành các cụm microservices độc lập hoạt động trên môi trường Container.
2.  **Triển khai vK8s Đa vùng (Multi-Region Kubernetes):** Triển khai ứng dụng chạy đồng thời trên 2 cụm Datacenter Rate 3 độc lập của Viettel IDC tại Hà Nội và Bình Dương, thiết lập cân bằng tải thông minh mức độ Global Load Balancing (GLB).
3.  **Tự động hóa sao lưu và an toàn thông tin:** Áp dụng hệ thống bảo mật Firewall thế hệ mới, cơ chế phát hiện xâm nhập chủ động (IDS/IPS) và lưu trữ dữ liệu sao lưu tự động theo thời gian thực sang Cloud Storage chuyên dụng.

## Kết quả vượt trội ngoài mong đợi
*   **Độ sẵn sàng (Uptime) vượt trội:** Đạt mức **99.99%**, hệ thống tự động định tuyến giao dịch thông minh sang vùng dự phòng ngay lập tức nếu một cụm hạ tầng gặp sự cố phần cứng đột xuất.
*   **Cải thiện 200% tốc độ phản hồi:** Thời gian phản hồi API trung bình cho các giao dịch chuyển tiền giảm từ 400ms xuống còn **120ms**.
*   **Tối ưu 45% chi phí hạ tầng:** Loại bỏ hoàn toàn lãng phí chi phí phần cứng nhàn rỗi nhờ tính năng tự co giãn Pod linh hoạt theo tải thực tế của Viettel Kubernetes Service.
*   **Cập nhật liên tục không gián đoạn:** Ngân hàng hiện có thể nâng cấp, triển khai các tính năng mới bất kỳ lúc nào trong ngày mà hoàn toàn không ảnh hưởng đến giao dịch hiện hành của hàng triệu người dùng.
    `
  },
  {
    id: 'webinar-startup-cloud-optimization',
    title: 'Hội thảo Trực tuyến: Tối ưu Chi phí Hạ tầng Cloud Server cho Khởi nghiệp & Doanh nghiệp vừa và nhỏ',
    category: 'events',
    categoryLabel: 'Sự kiện & Hội thảo',
    badge: 'WEBINAR TRỰC TUYẾN',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    description: 'Tìm hiểu các kỹ thuật tối ưu hóa tài nguyên máy chủ ảo, phương pháp lựa chọn cấu hình CPU/RAM phù hợp và cách tận dụng chính sách Pay-as-you-go để tiết kiệm 30% ngân sách hạ tầng.',
    publishDate: '15/08/2026',
    readTime: '09:00 - 11:30',
    author: 'Ban Tổ chức Sự kiện Viettel Cloud',
    authorRole: 'Phòng Phát triển Đối tác & Thị trường',
    content: `
# Hội thảo Trực tuyến: Tối ưu Chi phí Hạ tầng Cloud Server cho Khởi nghiệp & Doanh nghiệp vừa và nhỏ

Chi phí hạ tầng công nghệ thông tin luôn là một trong những áp lực tài chính hàng đầu đối với các doanh nghiệp khởi nghiệp (Startups) và doanh nghiệp vừa và nhỏ (SMEs). Làm sao để sở hữu một hệ thống Cloud mạnh mẽ, ổn định, có tính sẵn sàng cao nhưng vẫn nằm trong tầm kiểm soát chặt chẽ của ngân sách vận hành?

Hãy đăng ký tham dự ngay buổi Webinar độc quyền chia sẻ kinh nghiệm thực tế cùng chuyên gia Viettel Cloud!

---

## Thông tin chi tiết sự kiện
*   **Thời gian:** 09:00 - 11:30, Thứ Bảy ngày 15/08/2026.
*   **Hình thức:** Livestream trực tuyến qua nền tảng Zoom & Microsoft Teams.
*   **Phí tham dự:** Miễn phí hoàn toàn (Yêu cầu đăng ký trước để nhận liên kết phòng họp bảo mật).

---

## Nội dung chính của buổi chia sẻ
1.  **Nhận diện 5 sai lầm phổ biến gây lãng phí tài nguyên Cloud:** Phân tích thực tế các lỗi cấu hình thừa thãi vCPU/RAM, bỏ quên bộ nhớ lưu trữ không sử dụng, hoặc lựa chọn sai gói băng thông mạng.
2.  **Kiến thuật tối ưu chi phí thông qua cơ chế Pay-as-you-go:** Cách tính toán chi phí tài nguyên thực tế theo giờ hoặc theo tháng, thiết lập chu kỳ bật/tắt tự động cho các máy chủ môi trường Development/Testing vào ban đêm hoặc ngày cuối tuần.
3.  **Tích hợp Auto-scaling & Serverless:** Giảm thiểu tối đa đầu tư cố định ban đầu, chỉ chi trả cho những gì thực sự tạo ra giá trị kinh doanh cho khách hàng.
4.  **Hỏi đáp trực tiếp (Q&A):** Các chuyên gia giải pháp hạ tầng hàng đầu của Viettel IDC sẽ tư vấn trực tiếp cấu hình kiến trúc tối ưu nhất dựa trên các câu hỏi và sơ đồ hệ thống do chính các doanh nghiệp gửi về ban tổ chức.

---

## Diễn giả khách mời
*   **Mr. Lê Hoàng Nam:** Giám đốc Giải pháp Hạ tầng Viettel IDC, với hơn 15 năm kinh nghiệm thiết kế hệ thống cho các doanh nghiệp Fortune 500 tại Việt Nam.
*   **Mr. Trần Tiến Đạt:** CTO kiêm Co-founder của một Fintech Startup vừa gọi vốn thành công vòng Series A, sẽ chia sẻ thực tế hành trình cắt giảm thành công 40% chi phí vận hành hạ tầng đám mây nhờ chuyển dịch sang Viettel Cloud.
    `
  },
  {
    id: 'database-migration-guide-no-downtime',
    title: 'Cẩm nang Di chuyển Cơ sở dữ liệu lớn (Database Migration) lên Đám mây không gián đoạn dịch vụ',
    category: 'whitepapers',
    categoryLabel: 'Báo cáo & Whitepapers',
    badge: 'WHITEPAPERS',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
    description: 'Tài liệu hướng dẫn chuyên sâu về các bước lập kế hoạch di trú cơ sở dữ liệu lớn (MySQL, PostgreSQL, Oracle) sang Viettel Cloud DB, sử dụng công nghệ đồng bộ CDC thời gian thực.',
    publishDate: '10/06/2026',
    readTime: '35 phút đọc',
    author: 'Viettel Cloud Database Team',
    authorRole: 'Đội ngũ Chuyên gia Cơ sở dữ liệu',
    downloadable: true,
    downloadSize: '5.2 MB',
    content: `
# Cẩm nang Di chuyển Cơ sở dữ liệu lớn lên Đám mây không gián đoạn dịch vụ

Việc di chuyển cơ sở dữ liệu (Database Migration) luôn được coi là một trong những tác vụ rủi ro nhất trong các dự án dịch chuyển hạ tầng đám mây. Đối với những hệ thống lưu trữ hàng Terabyte dữ liệu của các doanh nghiệp đang hoạt động liên tục 24/7, yêu cầu tiên quyết là: **Không làm mất mát bất kỳ bản ghi dữ liệu nào (Zero Data Loss)** và **Không làm gián đoạn dịch vụ hoặc tối thiểu hóa thời gian bảo trì (Near Zero Downtime)**.

Tài liệu hướng dẫn này cung cấp quy trình chuẩn đã được áp dụng và kiểm chứng qua hàng trăm dự án di chuyển cơ sở dữ liệu lớn thành công lên nền tảng Viettel Cloud.

---

## 1. Ba phương pháp di chuyển phổ biến

### A. Phương pháp Di chuyển Ngoại tuyến (Offline Migration - Backup/Restore)
*   **Cách hoạt động:** Dừng hoàn toàn ứng dụng ghi dữ liệu, tiến hành sao lưu (Dump), truyền file backup lên đám mây và khôi phục (Restore). Sau khi hoàn thành, cấu hình lại ứng dụng kết nối tới Database mới.
*   **Ưu điểm:** Đơn giản, an toàn tuyệt đối, tránh được mọi xung đột dữ liệu trong quá trình di chuyển.
*   **Nhược điểm:** Yêu cầu một khoảng thời gian dừng dịch vụ (Downtime) khá lớn, tỷ lệ thuận với dung lượng dữ liệu và tốc độ truyền file. Chỉ phù hợp với các hệ thống nội bộ hoặc ứng dụng có thể tạm ngừng hoạt động ban đêm.

### B. Phương pháp Di chuyển Trực tuyến (Online Migration - Live Replication)
*   **Cách hoạt động:** Khởi tạo một phiên bản sao chép (Replica) trên Viettel Cloud và đồng bộ hóa liên tục dữ liệu từ cơ sở dữ liệu gốc đang chạy On-premise thông qua luồng Replication chuẩn (ví dụ: Master-Slave). Khi dữ liệu hai bên đạt trạng thái đồng bộ hoàn toàn, thực hiện chuyển mạch kết nối của ứng dụng (Switchover) với downtime chỉ tính bằng giây.
*   **Ưu điểm:** Thời gian ngừng hoạt động tối thiểu, trải nghiệm người dùng cuối không bị ảnh hưởng đáng kể.
*   **Nhược điểm:** Yêu cầu đường truyền mạng có băng thông lớn và cực kỳ ổn định. Hai phiên bản cơ sở dữ liệu phải có tính tương thích cao về phiên bản động cơ lưu trữ.

### C. Đồng bộ hóa Thay đổi Thời gian thực (Change Data Capture - CDC)
*   **Cách hoạt động:** Sử dụng các công cụ chuyên dụng đọc trực tiếp các log thay đổi dữ liệu (Transaction Log) từ Database nguồn và áp dụng ngay lập tức vào Database đích trên Cloud. Phương pháp này cho phép di chuyển các hệ thống cơ sở dữ liệu khổng lồ, dị thể (ví dụ: từ Oracle sang PostgreSQL) một cách mượt mà nhất.

---

## 2. Quy trình 5 bước chuẩn hóa quốc tế

1.  **Đánh giá & Khảo sát (Assess):** Phân tích kích thước cơ sở dữ liệu, tốc độ tăng trưởng, các ràng buộc dữ liệu, độ phức tạp của các Stored Procedures và tính tương thích với hạ tầng đám mây mới.
2.  **Chuẩn bị Môi trường (Prepare):** Thiết lập kết nối mạng chuyên dụng bảo mật cao VPN hoặc kênh truyền leased-line Viettel Cloud Express. Khởi tạo và tối ưu hóa cấu hình tài nguyên phần cứng, thông số mạng của Database Server đích trên đám mây.
3.  **Đồng bộ Ban đầu (Initial Load):** Thực hiện sao chép toàn bộ khối lượng dữ liệu tĩnh hiện tại sang môi trường mới.
4.  **Đồng bộ Chênh lệch (Incremental Sync - CDC):** Chạy công cụ ghi nhận và đồng bộ liên tục toàn bộ các giao dịch cập nhật mới phát sinh từ khi hoàn thành bước đồng bộ ban đầu.
5.  **Chuyển mạch & Xác thực (Cutover):** Thực hiện chuyển đổi cấu hình kết nối của ứng dụng sang Database mới, tiến hành chạy các kịch bản kiểm tra chất lượng dữ liệu để đảm bảo tính toàn vẹn thông tin hoàn hảo.
    `
  },
  {
    id: 'cybersecurity-next-gen-firewall',
    title: 'Kiến trúc Bảo mật Đa lớp Multi-Layer Security với Firewall Thế hệ mới trên Viettel Cloud',
    category: 'blog',
    categoryLabel: 'Bài viết chuyên gia',
    badge: 'AN NINH MẠNG',
    badgeColor: 'red',
    bannerImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    description: 'Cách bảo vệ hạ tầng máy chủ ảo trước các cuộc tấn công DDoS quy mô lớn, tấn công mã độc tống tiền (Ransomware) và khai thác lỗ hổng bảo mật zero-day phổ biến.',
    publishDate: '25/07/2026',
    readTime: '10 phút đọc',
    author: 'Đỗ Hoàng Anh',
    authorRole: 'Head of Cybersecurity & Compliance',
    content: `
# Kiến trúc Bảo mật Đa lớp Multi-Layer Security với Firewall Thế hệ mới trên Viettel Cloud

Trong không gian mạng hiện đại, các mối đe dọa an ninh thông tin ngày càng trở nên tinh vi, tự động hóa cao và nguy hiểm hơn. Các giải pháp tường lửa cổng mạng (Network Firewall) truyền thống chỉ kiểm tra các thông tin ở lớp 3 và lớp 4 (IP/Port) đã trở nên bất lực trước những cuộc tấn công có mục tiêu (APT), mã độc tống tiền (Ransomware) hay các lỗ hổng khai thác chưa được công bố (Zero-day).

Bài viết này chia sẻ mô hình **Kiến trúc Bảo mật Đa lớp (Multi-Layer Security)** tích hợp thế hệ tường lửa ứng dụng thông minh **Next-Generation Firewall (NGFW)** và **Web Application Firewall (WAF)** được phát triển trên hạ tầng đám mây Viettel Cloud.

---

## Khái niệm Bảo mật Đa lớp (Defense-in-Depth)
Mục tiêu cốt lõi của Defense-in-Depth là tạo ra nhiều rào cản phòng thủ độc lập chồng lớp lên nhau. Ngay cả khi tin tặc vượt qua được một lớp phòng vệ, các lớp tiếp theo vẫn sẽ ngăn chặn, phát hiện và cô lập cuộc tấn công kịp thời, không để xảy ra rò rỉ dữ liệu nghiêm trọng.

### Lớp 1: Phòng vệ Cổng biên mạng (Network Edge Security)
*   **Chống tấn công từ chối dịch vụ (DDoS):** Sử dụng hệ thống lọc lưu lượng tự động với năng lực hấp thụ tải cực lớn của Viettel IDC. Toàn bộ các yêu cầu truy cập dị thường, botnet tấn công dồn dập sẽ bị chặn đứng ngay từ cổng biên mạng của nhà mạng trước khi chạm tới máy chủ ảo Cloud Server của bạn.
*   **Virtual Private Cloud (VPC):** Cách ly hoàn toàn hạ tầng của từng doanh nghiệp vào các phân vùng mạng ảo riêng biệt, ngăn chặn tuyệt đối rủi ro tấn công bắc cầu chéo giữa các tài khoản khách hàng khác nhau.

### Lớp 2: Tường lửa Ứng dụng Web thế hệ mới (WAF/NGFW)
*   **Phân tích sâu gói tin (Deep Packet Inspection):** Tường lửa NGFW không chỉ xem IP nguồn và đích, mà mở gói tin để phân tích nội dung bên trong, phát hiện các mã độc ẩn giấu hoặc mã khai thác lỗ hổng (SQL Injection, Cross-Site Scripting - XSS) gửi tới ứng dụng web.
*   **Nhận diện ứng dụng và kiểm soát hành vi:** Cho phép thiết lập các quy tắc chính sách bảo mật thông minh, ví dụ: Chỉ cho phép lưu lượng SSH từ dải IP văn phòng công ty truy cập vào máy chủ quản trị.

### Lớp 3: Bảo vệ mức Máy chủ (Host & OS Level Security)
*   **Cập nhật bản vá tự động (Patch Management):** Quét và cảnh báo các lỗ hổng hệ điều hành (Linux/Windows) chưa được vá lỗi trên các máy chủ ảo.
*   **Endpoint Detection & Response (EDR):** Triển khai các tác nhân giám sát hành vi tiến trình hệ thống, chặn đứng tức thời các hoạt động mã hóa file trái phép của Ransomware.

## Khuyến nghị triển khai nhanh trên Viettel Cloud Portal
Chỉ với vài thao tác kéo thả trên trang quản trị trực tuyến Viettel Cloud Portal, doanh nghiệp có thể thiết lập ngay lập tức nhóm bảo mật **Security Groups** kết hợp thiết lập ảo WAF để kích hoạt lớp giáp phòng thủ ban đầu tối ưu, đảm bảo hệ thống luôn sẵn sàng vận hành an toàn trước mọi cơn bão bảo mật toàn cầu.
    `
  },
  // ==================== 10 EVENTS ====================
  {
    id: 'event-clouddb-pgrx-2026',
    title: 'Hội thảo: Tối ưu hóa PostgreSQL hiệu năng cao trên Viettel Cloud DB',
    category: 'events',
    categoryLabel: 'Sự kiện & Hội thảo',
    badge: 'WEBINAR TRỰC TUYẾN',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Chương trình đào tạo chuyên sâu về kỹ thuật phân vùng bảng (Partitioning), cấu hình indexing thông minh và tối ưu hóa pool kết nối giúp nâng cấp 200% hiệu năng hệ thống.',
    publishDate: '18/08/2026',
    readTime: '08:30 - 11:30',
    author: 'Viettel Cloud Database Lab',
    authorRole: 'Nhóm Nghiên cứu Cơ sở dữ liệu',
    content: 'Hội thảo trực tuyến hướng dẫn tối ưu cơ sở dữ liệu PostgreSQL quy mô lớn trên nền tảng điện toán đám mây.'
  },
  {
    id: 'event-cybersecurity-banking-2026',
    title: 'Tọa đàm: Bảo mật thông tin & Phòng chống mã độc tống tiền trong Ngành Ngân hàng 2026',
    category: 'events',
    categoryLabel: 'Sự kiện & Hội thảo',
    badge: 'SUMMIT / HỘI NGHỊ',
    badgeColor: 'red',
    bannerImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    description: 'Nơi quy tụ các chuyên gia an ninh mạng hàng đầu chia sẻ các kịch bản thực tế phòng chống mã độc mã hóa dữ liệu (Ransomware) và tuân thủ các chỉ thị an toàn thông tin quốc gia.',
    publishDate: '20/08/2026',
    readTime: '14:00 - 17:00',
    author: 'Viettel Cyber Security',
    authorRole: 'Đội ngũ chuyên gia ATTT',
    content: 'Sự kiện chia sẻ giải pháp bảo mật nâng cao và quản trị rủi ro thông tin cho các tổ chức tài chính.'
  },
  {
    id: 'event-kubernetes-hands-on-2026',
    title: 'Workshop: Thực hành triển khai Microservices với Viettel Kubernetes Service (vK8s)',
    category: 'events',
    categoryLabel: 'Sự kiện & Hội thảo',
    badge: 'WORKSHOP THỰC HÀNH',
    badgeColor: 'purple',
    bannerImage: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    description: 'Lớp học thực hành (Hands-on Lab) hướng dẫn đóng gói ứng dụng bằng Docker và cấu hình hệ thống điều phối, tự động co giãn Pod trên Kubernetes cluster thực tế.',
    publishDate: '25/08/2026',
    readTime: '09:00 - 16:30',
    author: 'Nguyễn Minh Tuấn',
    authorRole: 'Senior Cloud Solution Architect',
    content: 'Buổi thực hành trực tiếp từ cấu hình cơ bản đến nâng cao trên môi trường Kubernetes dùng riêng.'
  },
  {
    id: 'event-devops-automation-vietnam',
    title: 'Webinar: Tự động hóa hạ tầng DevOps & CI/CD cho Doanh nghiệp Phần mềm Việt Nam',
    category: 'events',
    categoryLabel: 'Sự kiện & Hội thảo',
    badge: 'WEBINAR TRỰC TUYẾN',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    description: 'Giải pháp tích hợp tự động hóa từ viết code, kiểm thử bảo mật tự động đến triển khai trực tiếp lên cloud không gây gián đoạn dịch vụ của doanh nghiệp phát triển phần mềm.',
    publishDate: '29/08/2026',
    readTime: '10:00 - 11:30',
    author: 'DevOps Community VN',
    authorRole: 'Ban Phát triển Hạ tầng Số',
    content: 'Hội thảo chia sẻ các mẫu pipeline CI/CD tiên tiến giúp rút ngắn 50% thời gian triển khai ứng dụng.'
  },
  {
    id: 'event-cloud-migration-healthcare',
    title: 'Hội thảo: Xu hướng chuyển đổi số & Ứng dụng Cloud-Native trong Y tế và Chăm sóc Sức khỏe',
    category: 'events',
    categoryLabel: 'Sự kiện & Hội thảo',
    badge: 'SUMMIT / HỘI NGHỊ',
    badgeColor: 'red',
    bannerImage: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    description: 'Nghiên cứu cách áp dụng công nghệ điện toán đám mây để chuẩn hóa dữ liệu bệnh án điện tử, nâng cao hiệu năng hệ thống đặt lịch khám trực tuyến và bảo vệ dữ liệu bệnh nhân.',
    publishDate: '02/09/2026',
    readTime: '09:00 - 11:30',
    author: 'Medical Cloud Initiative',
    authorRole: 'Ban giải pháp Chuyển đổi số Y tế',
    content: 'Tọa đàm chuyên sâu bàn thảo về xu hướng hiện đại hóa hệ thống quản lý bệnh viện thời đại số.'
  },
  {
    id: 'event-ai-genai-viettel-gpu',
    title: 'Tọa đàm: Trí tuệ nhân tạo (Generative AI) & Hạ tầng tính toán hiệu năng cao GPU Viettel',
    category: 'events',
    categoryLabel: 'Sự kiện & Hội thảo',
    badge: 'SUMMIT / HỘI NGHỊ',
    badgeColor: 'purple',
    bannerImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description: 'Ra mắt cụm hạ tầng tính toán AI mới chuyên dụng cho huấn luyện mô hình ngôn ngữ lớn (LLM), tích hợp các chip GPU NVIDIA Tensor Core tiên tiến hàng đầu.',
    publishDate: '10/09/2026',
    readTime: '14:00 - 16:30',
    author: 'Viettel AI Lab',
    authorRole: 'Phòng Phát triển Trí tuệ Nhân tạo',
    content: 'Tìm hiểu hạ tầng máy chủ ảo GPU mạnh mẽ hỗ trợ tối đa việc nghiên cứu và ứng dụng trí tuệ nhân tạo.'
  },
  {
    id: 'event-green-datacenter-sustainability',
    title: 'Webinar: Xây dựng Trung tâm Dữ liệu Xanh & Tiêu chuẩn Bền vững ESG tại Việt Nam',
    category: 'events',
    categoryLabel: 'Sự kiện & Hội thảo',
    badge: 'WEBINAR TRỰC TUYẾN',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    description: 'Cách các doanh nghiệp công nghệ áp dụng các chỉ số tiết kiệm điện năng PUE tối ưu và chuyển đổi sang sử dụng năng lượng tái tạo cho các trung tâm dữ liệu khổng lồ.',
    publishDate: '15/09/2026',
    readTime: '15:00 - 16:30',
    author: 'ESG Tech Committee',
    authorRole: 'Ban Phát triển Bền vững',
    content: 'Định hướng kiến trúc xanh nhằm bảo vệ môi trường và tối ưu hóa năng lượng tiêu thụ tại Việt Nam.'
  },
  {
    id: 'event-saas-scaling-global',
    title: 'Workshop: Kiến trúc mở rộng hệ thống SaaS Việt Nam hướng ra thị trường quốc tế',
    category: 'events',
    categoryLabel: 'Sự kiện & Hội thảo',
    badge: 'WORKSHOP THỰC HÀNH',
    badgeColor: 'purple',
    bannerImage: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    description: 'Kế hoạch thiết kế cơ sở hạ tầng Multi-region toàn cầu, định tuyến thông minh qua Anycast IP và tối ưu hóa hệ thống thanh toán quốc tế hiệu quả.',
    publishDate: '22/09/2026',
    readTime: '09:00 - 11:30',
    author: 'Global SaaS Network',
    authorRole: 'Nhóm Kiến trúc sư trưởng',
    content: 'Bảo đảm hệ thống SaaS của bạn có thể hoạt động ổn định và mở rộng mượt mà trên môi trường quốc tế.'
  },
  {
    id: 'event-hybrid-cloud-retail',
    title: 'Tọa đàm: Tối ưu hóa chuỗi cung ứng bán lẻ với mô hình Edge & Hybrid Cloud',
    category: 'events',
    categoryLabel: 'Sự kiện & Hội thảo',
    badge: 'SUMMIT / HỘI NGHỊ',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    description: 'Ứng dụng giải pháp Edge Server tại các điểm bán vật lý kết hợp xử lý đồng bộ dữ liệu tồn kho thời gian thực lên trung tâm đám mây để loại bỏ hoàn toàn đứt gãy cung ứng.',
    publishDate: '28/09/2026',
    readTime: '14:00 - 16:30',
    author: 'Retail Tech VN',
    authorRole: 'Ban giải pháp bán lẻ hiện đại',
    content: 'Tối ưu hóa hành trình mua sắm đa kênh của khách hàng bằng việc kết hợp sức mạnh của Cloud và Edge.'
  },
  {
    id: 'event-cloud-storage-backup-disaster',
    title: 'Webinar: Chiến lược Sao lưu dữ liệu & Chống thảm họa (Disaster Recovery) toàn diện',
    category: 'events',
    categoryLabel: 'Sự kiện & Hội thảo',
    badge: 'WEBINAR TRỰC TUYẾN',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    description: 'Hướng dẫn xây dựng kịch bản ứng phó sự cố thiên tai, đứt cáp hoặc tấn công mạng bằng giải pháp Cloud Backup tự động và nhân bản dữ liệu đa vùng địa lý.',
    publishDate: '05/10/2026',
    readTime: '10:00 - 11:30',
    author: 'Disaster Recovery Lab',
    authorRole: 'Bộ phận quản trị rủi ro hạ tầng',
    content: 'Đảm bảo hoạt động kinh doanh liên tục (BCP) của doanh nghiệp nhờ chiến lược DR vững chắc.'
  },

  // ==================== 10 BÀI VIẾT CHUYÊN GIA ====================
  {
    id: 'blog-postgresql-optimization-tips',
    title: '10 Thủ thuật tối ưu hóa truy vấn PostgreSQL trên Cloud Database hiệu quả nhất',
    category: 'blog',
    categoryLabel: 'Bài viết chuyên gia',
    badge: 'CƠ SỞ DỮ LIỆU',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    description: 'Khám phá các phương pháp tối ưu hóa câu lệnh SELECT, cấu hình thông số work_mem và tối ưu hóa bộ nhớ đệm cache giúp rút ngắn 90% thời gian phản hồi của hệ thống cơ sở dữ liệu.',
    publishDate: '02/08/2026',
    readTime: '10 phút đọc',
    author: 'Trần Văn Hoàng',
    authorRole: 'Database Administrator Specialists',
    content: 'Chia sẻ các kinh nghiệm cấu hình và tối ưu hóa hệ quản trị cơ sở dữ liệu PostgreSQL cho các ứng dụng web tốc độ cao.'
  },
  {
    id: 'blog-serverless-architecture-cost',
    title: 'So sánh chi phí: Serverless Architecture vs Cloud Server truyền thống',
    category: 'blog',
    categoryLabel: 'Bài viết chuyên gia',
    badge: 'TỐI ƯU CHI PHÍ',
    badgeColor: 'emerald',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Phân tích chi tiết mô hình tài chính giữa kiến trúc không máy chủ (FaaS) và máy chủ ảo truyền thống (IaaS) giúp doanh nghiệp đưa ra lựa chọn đầu tư hạ tầng thông minh nhất.',
    publishDate: '04/08/2026',
    readTime: '8 phút đọc',
    author: 'Lê Thảo Vy',
    authorRole: 'Cloud Financial Architect',
    content: 'Tìm ra điểm hòa vốn và phương án phân chia tài nguyên tối ưu nhất để tiết kiệm tối đa chi phí vận hành.'
  },
  {
    id: 'blog-docker-security-best-practices',
    title: 'Cẩm nang Bảo mật Docker Container trong môi trường Production',
    category: 'blog',
    categoryLabel: 'Bài viết chuyên gia',
    badge: 'BẢO MẬT ĐÁM MÂY',
    badgeColor: 'red',
    bannerImage: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
    description: 'Các nguyên tắc vàng để bảo vệ Dockerfile, quét mã độc trong base image, quản lý secrets an toàn và thiết lập quyền truy cập tối giản tránh lỗ hổng đặc quyền (privilege escalation).',
    publishDate: '06/08/2026',
    readTime: '12 phút đọc',
    author: 'Phạm Minh Đức',
    authorRole: 'DevSecOps Engineer',
    content: 'Hướng dẫn toàn diện về bảo mật hệ thống container hóa từ khâu thiết kế đến khâu triển khai thực tế.'
  },
  {
    id: 'blog-datacenter-tier3-rated3-standards',
    title: 'Tiêu chuẩn Thiết kế & Vận hành Trung tâm Dữ liệu Rated 3 TIA-942 tại Việt Nam',
    category: 'blog',
    categoryLabel: 'Bài viết chuyên gia',
    badge: 'HẠ TẦNG DC',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    description: 'Phân tích các tiêu chí khắt khe về độ dự phòng nguồn điện 2N+1, hệ thống làm mát chính xác Chiller và tiêu chuẩn phòng cháy chữa cháy khí sạch trong các Datacenter quy mô lớn của Viettel IDC.',
    publishDate: '07/08/2026',
    readTime: '11 phút đọc',
    author: 'Lê Hoàng Nam',
    authorRole: 'Giám đốc Kỹ thuật Hạ tầng DC Viettel IDC',
    content: 'Tổng hợp kiến thức kỹ thuật chuyên sâu về tiêu chuẩn thiết kế cơ sở hạ tầng phòng máy chủ và trung tâm dữ liệu tiêu chuẩn quốc tế.'
  },
  {
    id: 'blog-prometheus-grafana-monitoring',
    title: 'Giám sát hệ thống Real-time toàn diện với Prometheus và Grafana trên vK8s',
    category: 'blog',
    categoryLabel: 'Bài viết chuyên gia',
    badge: 'DEVOPS & K8S',
    badgeColor: 'purple',
    bannerImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    description: 'Cách thiết lập thu thập metric tự động từ các Kubernetes pod, cấu hình bảng điều khiển Grafana trực quan và gửi cảnh báo tức thì qua Telegram/Slack khi hệ thống gặp lỗi.',
    publishDate: '08/08/2026',
    readTime: '15 phút đọc',
    author: 'Nguyễn Văn Hải',
    authorRole: 'System Reliability Engineer',
    content: 'Cải thiện 300% khả năng giám sát và xử lý sự cố hạ tầng nhờ luồng công cụ nguồn mở phổ biến.'
  },
  {
    id: 'blog-ci-cd-security-scanning',
    title: 'Tích hợp rà soát mã lỗi và quét bảo mật SAST/DAST vào luồng CI/CD tự động',
    category: 'blog',
    categoryLabel: 'Bài viết chuyên gia',
    badge: 'BẢO MẬT ĐÁM MÂY',
    badgeColor: 'red',
    bannerImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    description: 'Hướng dẫn tích hợp các công cụ quét bảo mật tĩnh SonarQube, Trivy vào quy trình xây dựng phần mềm tự động nhằm phát hiện sớm mọi lỗ hổng bảo mật nghiêm trọng.',
    publishDate: '10/08/2026',
    readTime: '11 phút đọc',
    author: 'Vũ Minh Thành',
    authorRole: 'Senior Security Engineer',
    content: 'Đảm bảo chất lượng phần mềm hoàn hảo và an toàn tuyệt đối trước khi đẩy mã nguồn ra thị trường.'
  },
  {
    id: 'blog-cloud-native-database-migration',
    title: 'Lựa chọn cơ sở dữ liệu phù hợp cho kiến trúc Microservices: SQL hay NoSQL?',
    category: 'blog',
    categoryLabel: 'Bài viết chuyên gia',
    badge: 'KIẾN TRÚC & HẠ TẦNG',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    description: 'Phân tích thấu đáo mô hình dữ liệu quan hệ truyền thống và cơ sở dữ liệu phi quan hệ, giúp các lập trình viên lựa chọn đúng công nghệ phù hợp nhất cho từng dịch vụ.',
    publishDate: '12/08/2026',
    readTime: '9 phút đọc',
    author: 'Đặng Thúy Quỳnh',
    authorRole: 'Microservices Architect',
    content: 'Giải pháp hài hòa tính nhất quán dữ liệu ACID và khả năng mở rộng quy mô lớn của hệ thống.'
  },
  {
    id: 'blog-cdn-speed-optimization-vn',
    title: 'Tối ưu tốc độ tải trang ứng dụng Web tại Việt Nam bằng công nghệ Cloud CDN',
    category: 'blog',
    categoryLabel: 'Bài viết chuyên gia',
    badge: 'TỐI ƯU HIỆU NĂNG',
    badgeColor: 'emerald',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Tận dụng mạng lưới máy chủ bộ nhớ đệm phân tán rộng khắp cả nước của Viettel CDN để tăng tốc độ phản hồi trang web và giảm tải đến 80% băng thông cho máy chủ gốc.',
    publishDate: '14/08/2026',
    readTime: '7 phút đọc',
    author: 'Bùi Thế Duy',
    authorRole: 'CDN Solution Specialist',
    content: 'Giải pháp nâng cao điểm số SEO và trải nghiệm mượt mà cho hàng triệu người tiêu dùng trực tuyến.'
  },
  {
    id: 'blog-redis-cache-strategies',
    title: 'Chiến lược thiết lập Caching thông minh với Cloud Redis nâng cấp hiệu suất hệ thống',
    category: 'blog',
    categoryLabel: 'Bài viết chuyên gia',
    badge: 'CƠ SỞ DỮ LIỆU',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80',
    description: 'Các mô hình lưu trữ cache Cache-Aside, Write-Through, Write-Behind và kỹ thuật ngăn ngừa hiện tượng Cache Stampede/Cache Avalanche trên môi trường phân tán.',
    publishDate: '16/08/2026',
    readTime: '13 phút đọc',
    author: 'Lâm Hoài Nam',
    authorRole: 'Core Team Tech Lead',
    content: 'Tối đa tốc độ đọc dữ liệu tĩnh và giảm thiểu áp lực trực tiếp lên cơ sở dữ liệu SQL truyền thống.'
  },
  {
    id: 'blog-iaac-terraform-viettel-cloud',
    title: 'Quản lý hạ tầng dưới dạng mã nguồn (IaC) với Terraform trên nền tảng Viettel Cloud',
    category: 'blog',
    categoryLabel: 'Bài viết chuyên gia',
    badge: 'HƯỚNG DẪN',
    badgeColor: 'purple',
    bannerImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    description: 'Hướng dẫn viết kịch bản Terraform tự động hóa việc cấp phát hàng chục cụm máy chủ ảo VPC, cấu hình quy tắc định tuyến mạng và quản lý vòng đời tài nguyên đồng nhất.',
    publishDate: '18/08/2026',
    readTime: '14 phút đọc',
    author: 'Trịnh Gia Bảo',
    authorRole: 'Cloud DevOps Expert',
    content: 'Loại bỏ hoàn toàn sai số thao tác thủ công, đồng bộ thiết lập môi trường DEV, STAGING và PRODUCTION hoàn hảo.'
  },
  {
    id: 'blog-zero-trust-network-access-ztna',
    title: 'Hướng dẫn xây dựng kiến trúc mạng Zero Trust (ZTNA) cho doanh nghiệp làm việc từ xa',
    category: 'blog',
    categoryLabel: 'Bài viết chuyên gia',
    badge: 'AN NINH MẠNG',
    badgeColor: 'red',
    bannerImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    description: 'Bỏ qua giải pháp VPN truyền thống kém an toàn, chuyển đổi sang xác thực định danh liên tục, kiểm soát đặc quyền truy cập tối thiểu theo nguyên tắc "Không bao giờ tin tưởng, luôn luôn xác minh".',
    publishDate: '20/08/2026',
    readTime: '11 phút đọc',
    author: 'Nguyễn Bích Ngọc',
    authorRole: 'Cybersecurity Analyst',
    content: 'Bảo vệ tài nguyên thông tin nhạy cảm của doanh nghiệp an toàn tuyệt đối trong thời đại chuyển dịch số linh hoạt.'
  },

  // ==================== TIN TỨC & XU HƯỚNG CÔNG NGHỆ ====================
  {
    id: 'news-ai-supercomputing-vietnam',
    title: 'Việt Nam bứt phá trong làn sóng đầu tư hạ tầng tính toán AI & GPU Cloud năm 2026',
    category: 'news',
    categoryLabel: 'Tin tức & Xu hướng',
    badge: 'XU HƯỚNG TECH',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    description: 'Nhu cầu huấn luyện mô hình ngôn ngữ lớn (LLM) nội địa và ứng dụng thị giác máy tính đang thúc đẩy các tập đoàn công nghệ nâng cấp hạ tầng cụm GPU chuyên dụng tại các trung tâm dữ liệu chuẩn Rated 3.',
    publishDate: '12/08/2026',
    readTime: '5 phút đọc',
    author: 'Ban Biên tập Công nghệ',
    authorRole: 'Tin tức & Xu hướng 24/7',
    content: `
# Việt Nam bứt phá trong làn sóng đầu tư hạ tầng tính toán AI & GPU Cloud năm 2026

Làn sóng Trí tuệ Nhân tạo tạo sinh (Generative AI) và học máy sâu (Deep Learning) đang định hình lại chiến lược hạ tầng số của các doanh nghiệp Việt Nam. Với cam kết làm chủ công nghệ và bảo vệ chủ quyền dữ liệu số quốc gia, thị trường điện toán đám mây trong nước đang chứng kiến sự tăng trưởng vượt bậc về nhu cầu GPU Server hiệu năng cao.

## Xu hướng bùng nổ hạ tầng AI nội địa
Các tổ chức tài chính, ngân hàng số và thương mại điện tử hàng đầu tại Việt Nam đang chủ động xây dựng các mô hình AI riêng biệt để cá nhân hóa trải nghiệm khách hàng, tự động hóa xử lý văn bản pháp lý và phòng chống gian lận thẻ tín dụng. Việc sử dụng hạ tầng GPU Cloud đặt tại các trung tâm dữ liệu trong nước như Viettel IDC giúp:
- Đảm bảo độ trễ siêu thấp dưới 5ms khi suy luận (Inference).
- Tuân thủ toàn diện các quy định về an ninh mạng và bảo vệ dữ liệu cá nhân theo Nghị định 13/2023/NĐ-CP.
- Tiết kiệm tới 40% chi phí so với việc thuê cụm tính toán ở các Datacenter quốc tế.
    `
  },
  {
    id: 'news-green-datacenter-esg-standards',
    title: 'Tiêu chuẩn Trung tâm dữ liệu Xanh (Green Data Center) trở thành thước đo mới của doanh nghiệp',
    category: 'news',
    categoryLabel: 'Tin tức & Xu hướng',
    badge: 'HẠ TẦNG DC',
    badgeColor: 'emerald',
    bannerImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    description: 'Chỉ số hiệu quả sử dụng năng lượng PUE dưới 1.4 và ứng dụng hệ thống làm mát chính xác bằng nước đang trở thành tiêu chuẩn bắt buộc cho các Datacenter thế hệ mới phục vụ mục tiêu Net Zero.',
    publishDate: '10/08/2026',
    readTime: '6 phút đọc',
    author: 'Ban Phân tích Thị trường',
    authorRole: 'Chuyên đề ESG & Hạ tầng Xanh',
    content: `
# Tiêu chuẩn Trung tâm dữ liệu Xanh (Green Data Center) trở thành thước đo mới của doanh nghiệp

Khi lượng dữ liệu toàn cầu tiếp tục bùng nổ theo cấp số nhân, áp lực về tiêu thụ điện năng và lượng phát thải carbon của các trung tâm dữ liệu đang trở thành tâm điểm của các chiến lược phát triển bền vững (ESG).

## Giải pháp tối ưu năng lượng tại các Datacenter hiện đại
- Ứng dụng công nghệ làm mát bằng chất lỏng (Liquid Cooling) trực tiếp cho các cụm chip máy chủ AI mật độ cao.
- Tận dụng năng lượng tái tạo và hệ thống pin lưu trữ năng lượng mặt trời công nghiệp.
- Giám sát tự động chỉ số PUE thời gian thực thông qua thuật toán AI điều khiển luồng khí lạnh thông minh.
    `
  },
  {
    id: 'news-quantum-safe-encryption-readiness',
    title: 'Mã hóa hậu lượng tử (Post-Quantum Cryptography): Doanh nghiệp cần chuẩn bị gì?',
    category: 'news',
    categoryLabel: 'Tin tức & Xu hướng',
    badge: 'THÔNG CÁO BÁO CHÍ',
    badgeColor: 'purple',
    bannerImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
    description: 'NIST chính thức công bố bộ tiêu chuẩn thuật toán mã hóa an toàn trước máy tính lượng tử, mở ra lộ trình nâng cấp hạ tầng bảo mật thông tin tài chính và dữ liệu quốc gia.',
    publishDate: '08/08/2026',
    readTime: '7 phút đọc',
    author: 'Trung tâm Giám sát SOC',
    authorRole: 'Phòng An ninh Mạng',
    content: `
# Mã hóa hậu lượng tử: Doanh nghiệp cần chuẩn bị gì?

Máy tính lượng tử đang tiến gần hơn tới khả năng bẻ gãy các thuật toán mã hóa công khai phổ biến như RSA hay ECC. Các tổ chức tài chính và cơ quan nhà nước đang bắt đầu lộ trình đánh giá và chuyển dịch sang các giải pháp bảo mật kháng lượng tử (Quantum-Safe Security).
    `
  },
  {
    id: 'news-sovereign-cloud-regulation-sea',
    title: 'Xu hướng Điện toán Đám mây Chủ quyền (Sovereign Cloud) định hình thị trường Đông Nam Á',
    category: 'news',
    categoryLabel: 'Tin tức & Xu hướng',
    badge: 'HỢP TÁC & ĐỐI TÁC',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    description: 'Các quốc gia ASEAN đồng loạt siết chặt quy định lưu trữ dữ liệu tại bản địa, thúc đẩy các nhà cung cấp nội địa nâng tầm năng lực cạnh tranh với các Hyperscalers toàn cầu.',
    publishDate: '05/08/2026',
    readTime: '6 phút đọc',
    author: 'Ban Nghiên cứu Chiến lược',
    authorRole: 'Phân tích Chính sách Số',
    content: `
# Xu hướng Điện toán Đám mây Chủ quyền (Sovereign Cloud) định hình thị trường Đông Nam Á

Chủ quyền số (Digital Sovereignty) không chỉ là vấn đề pháp lý mà đã trở thành yếu tố cốt lõi đảm bảo an ninh kinh tế và tự chủ công nghệ của mỗi quốc gia trong kỷ nguyên số.
    `
  },

  // ==================== 10 CASE STUDIES ====================
  {
    id: 'case-study-ecommerce-black-friday',
    title: 'Cách một ví điện tử hàng đầu xử lý 50.000 giao dịch/giây trong đêm Siêu khuyến mãi',
    category: 'case-studies',
    categoryLabel: 'Case Studies',
    badge: 'BÁN LẺ & E-COMMERCE',
    badgeColor: 'emerald',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    description: 'Tìm hiểu cách hệ thống thanh toán điện tử tối ưu hóa luồng ghi đệm dữ liệu thông minh, kết hợp tính năng tự động nhân bản tải vô hạn để vượt qua đợt bùng nổ giao dịch.',
    publishDate: '28/07/2026',
    readTime: '12 phút đọc',
    author: 'Viettel Cloud Enterprise',
    authorRole: 'Đội ngũ hỗ trợ kỹ thuật khách hàng',
    content: 'Hệ thống hoàn thành xuất sắc mục tiêu xử lý lượng tải kỷ lục mà không xảy ra bất kỳ gián đoạn dịch vụ nào.'
  },
  {
    id: 'case-study-logistics-iot-tracking',
    title: 'Hành trình số hóa chuỗi cung ứng và định vị IoT thời gian thực của tập đoàn Logistics Việt',
    category: 'case-studies',
    categoryLabel: 'Case Studies',
    badge: 'DOANH NGHIỆP SẢN XUẤT',
    badgeColor: 'purple',
    bannerImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    description: 'Khám phá giải pháp xử lý hơn 10 triệu gói tin định vị GPS mỗi phút gửi về từ hàng vạn xe vận chuyển, tối ưu lộ trình giao nhận và tiết kiệm 15% chi phí nhiên liệu.',
    publishDate: '30/07/2026',
    readTime: '14 phút đọc',
    author: 'IoT Solutions Team',
    authorRole: 'Nhóm phát triển giải pháp thông minh',
    content: 'Đồng bộ hóa dữ liệu định vị IoT siêu mượt mà nhờ hệ thống xử lý phân tán thời gian thực độ trễ cực thấp.'
  },
  {
    id: 'case-study-edtech-elearning-cloud',
    title: 'Hệ thống Elearning phục vụ hơn 5 triệu học sinh cả nước chuyển dịch 100% lên Cloud',
    category: 'case-studies',
    categoryLabel: 'Case Studies',
    badge: 'Y TẾ & GIÁO DỤC',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    description: 'Cách nền tảng giáo dục trực tuyến nâng cao năng lực truyền phát video bài giảng chất lượng HD mượt mà, tự động mở rộng cụm máy chủ ảo khi số lượng học sinh trực tuyến tăng vọt.',
    publishDate: '01/08/2026',
    readTime: '15 phút đọc',
    author: 'EdTech Vietnam Lab',
    authorRole: 'Ban công nghệ giáo dục',
    content: 'Xây dựng một nền tảng học tập trực tuyến bền bỉ, an toàn và dễ dàng tiếp cận cho học sinh khắp mọi vùng miền.'
  },
  {
    id: 'case-study-retail-omnichannel-viettel',
    title: 'Chuyển đổi số đa kênh Omnichannel giúp chuỗi bán lẻ 300 cửa hàng tăng 150% doanh số',
    category: 'case-studies',
    categoryLabel: 'Case Studies',
    badge: 'BÁN LẺ & E-COMMERCE',
    badgeColor: 'emerald',
    bannerImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    description: 'Kết hợp đồng nhất dữ liệu khách hàng từ Website, Facebook, và cửa hàng vật lý về một hệ thống Big Data duy nhất để thực hiện các chiến dịch gợi ý mua sắm thông minh cá nhân hóa.',
    publishDate: '03/08/2026',
    readTime: '11 phút đọc',
    author: 'Omnichannel Growth Lab',
    authorRole: 'Đội ngũ Chuyên gia Tối ưu hóa Doanh số',
    content: 'Hiện thực hóa mô hình bán hàng tương lai bằng công nghệ kết nối dữ liệu đám mây tập trung.'
  },
  {
    id: 'case-study-manufacturing-smart-factory',
    title: 'Ứng dụng Điện toán biên (Edge Computing) vận hành nhà máy sản xuất thông minh tại Bình Dương',
    category: 'case-studies',
    categoryLabel: 'Case Studies',
    badge: 'DOANH NGHIỆP SẢN XUẤT',
    badgeColor: 'purple',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    description: 'Kiểm soát chất lượng sản phẩm bằng hệ thống camera AI phân tích hình ảnh lỗi tại dây chuyền với độ trễ dưới 2ms, giảm tỷ lệ sản phẩm lỗi hỏng xuất xưởng xuống 0.1%.',
    publishDate: '05/08/2026',
    readTime: '13 phút đọc',
    author: 'Smart Factory Advisory',
    authorRole: 'Chuyên gia Giải pháp Sản xuất Số',
    content: 'Cách mạng hóa quy trình quản lý chất lượng và nâng cao năng suất nhà máy nhờ xử lý dữ liệu ngay tại biên mạng.'
  },
  {
    id: 'case-study-telehealth-medical-records',
    title: 'Nền tảng Y tế từ xa phục vụ hàng nghìn lượt khám mỗi ngày vận hành bảo mật trên Private Cloud',
    category: 'case-studies',
    categoryLabel: 'Case Studies',
    badge: 'Y TẾ & GIÁO DỤC',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    description: 'Tuân thủ tuyệt đối các quy định pháp luật về lưu trữ dữ liệu y học nhạy cảm, xây dựng kênh mã hóa video call tư vấn sức khỏe đạt tiêu chuẩn quốc tế bảo mật tối đa.',
    publishDate: '07/08/2026',
    readTime: '12 phút đọc',
    author: 'HealthTech Group VN',
    authorRole: 'Ban Công nghệ thông tin Y khoa',
    content: 'Mang dịch vụ y tế chất lượng cao đến sát người dân một cách tiện lợi, nhanh chóng và an toàn tuyệt mật.'
  },
  {
    id: 'case-study-fintech-p2p-lending',
    title: 'Kiến trúc bảo mật đạt chuẩn PCI-DSS của một tổ chức cho vay ngang hàng Fintech Việt',
    category: 'case-studies',
    categoryLabel: 'Case Studies',
    badge: 'TÀI CHÍNH - NGÂN HÀNG',
    badgeColor: 'purple',
    bannerImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    description: 'Sử dụng hệ thống bảo mật Firewall WAF, Tokenization bảo vệ thông tin thẻ tín dụng và thiết lập hệ thống rà soát giao dịch gian lận tự động liên tục.',
    publishDate: '09/08/2026',
    readTime: '16 phút đọc',
    author: 'Fintech Sec Team',
    authorRole: 'Phòng Phát triển Hệ thống Bảo mật',
    content: 'Đạt chứng nhận uy tín quốc tế mở ra cơ hội hợp tác sâu rộng với các quỹ đầu tư lớn.'
  },
  {
    id: 'case-study-fmcg-data-lakehouse',
    title: 'Xây dựng hệ thống Data Lakehouse trên Viettel Cloud giúp tập đoàn FMCG tối ưu hóa dữ liệu',
    category: 'case-studies',
    categoryLabel: 'Case Studies',
    badge: 'DOANH NGHIỆP SẢN XUẤT',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    description: 'Phối hợp dữ liệu phân tích thị trường tiêu dùng phức tạp, giúp bộ phận kinh doanh rút ngắn 70% thời gian ra quyết định định giá sản phẩm và phân phối hàng hóa hiệu quả.',
    publishDate: '11/08/2026',
    readTime: '15 phút đọc',
    author: 'Data Science Division',
    authorRole: 'Nhóm nghiên cứu khoa học dữ liệu',
    content: 'Chuyển hóa dữ liệu thô khổng lồ thành các phân tích thị trường sắc bén có giá trị kinh tế trực tiếp.'
  },
  {
    id: 'case-study-insurance-claims-ai',
    title: 'Hệ thống tự động duyệt hồ sơ bảo hiểm bằng AI xử lý nhanh gấp 5 lần trên hạ tầng GPU',
    category: 'case-studies',
    categoryLabel: 'Case Studies',
    badge: 'TÀI CHÍNH - NGÂN HÀNG',
    badgeColor: 'purple',
    bannerImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    description: 'Sử dụng các thuật toán máy học thị giác máy tính phân tích ảnh chụp tai nạn xe cộ để tự động định mức bồi thường thiệt hại chính xác tới 95% và duyệt hồ sơ chi trả siêu tốc.',
    publishDate: '13/08/2026',
    readTime: '14 phút đọc',
    author: 'InsurTech Lab VN',
    authorRole: 'Phòng Giải pháp Trí tuệ Nhân tạo',
    content: 'Giảm đáng kể thủ tục giấy tờ phiền hà và gia tăng vượt trội điểm số hài lòng của khách hàng.'
  },
  {
    id: 'case-study-government-public-services',
    title: 'Nâng cấp cổng dịch vụ công trực tuyến phục vụ người dân với giải pháp an toàn thông tin tối đa',
    category: 'case-studies',
    categoryLabel: 'Case Studies',
    badge: 'DOANH NGHIỆP SẢN XUẤT',
    badgeColor: 'emerald',
    bannerImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    description: 'Hiện đại hóa cổng giao dịch hành chính phục vụ người dân, đảm bảo khả năng sẵn sàng phục vụ hàng chục triệu người dân đồng thời và mã hóa dữ liệu định danh hoàn hảo.',
    publishDate: '15/08/2026',
    readTime: '18 phút đọc',
    author: 'E-Gov Solutions VN',
    authorRole: 'Nhóm Chuyên gia Tư vấn Chính phủ số',
    content: 'Góp phần đẩy mạnh tiến trình chuyển đổi số quốc gia mượt mà, hiệu quả và an toàn tuyệt đối.'
  },

  // ==================== 10 WHITEPAPERS ====================
  {
    id: 'whitepaper-vietnam-cloud-market-2026',
    title: 'Báo cáo Tổng quan Thị trường Điện toán đám mây Việt Nam năm 2026 và Dự phóng 2030',
    category: 'whitepapers',
    categoryLabel: 'Báo cáo & Whitepapers',
    badge: 'BÁO CÁO THỊ TRƯỜNG',
    badgeColor: 'emerald',
    bannerImage: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
    description: 'Nghiên cứu thị trường toàn diện về tốc độ tăng trưởng, quy mô đầu tư hạ tầng đám mây và xu hướng dịch chuyển từ On-premise lên Cloud của doanh nghiệp nội địa.',
    publishDate: '01/08/2026',
    readTime: '30 phút đọc',
    author: 'Viettel IDC Research',
    authorRole: 'Phòng nghiên cứu thị trường công nghệ',
    downloadable: true,
    downloadSize: '5.6 MB',
    content: 'Bản phân tích chuyên sâu về bức tranh tăng trưởng hạ tầng số tại Việt Nam trong vòng 5 năm tới.'
  },
  {
    id: 'whitepaper-security-standards-iso-27001',
    title: 'Cẩm nang Tuân thủ Tiêu chuẩn Bảo mật ISO 27001 cho doanh nghiệp chuyển dịch Cloud',
    category: 'whitepapers',
    categoryLabel: 'Báo cáo & Whitepapers',
    badge: 'WHITEPAPERS',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    description: 'Hướng dẫn chi tiết quy trình xây dựng hệ thống quản lý an toàn thông tin (ISMS) đáp ứng các điều khoản bảo mật khắt khe nhất của tiêu chuẩn ISO 27001 quốc tế.',
    publishDate: '03/08/2026',
    readTime: '25 phút đọc',
    author: 'Compliance Advisory Group',
    authorRole: 'Bộ phận tư vấn tuân thủ tiêu chuẩn',
    downloadable: true,
    downloadSize: '3.4 MB',
    content: 'Tài liệu gối đầu giường giúp doanh nghiệp nhanh chóng hoàn thành quy trình đánh giá chứng nhận bảo mật.'
  },
  {
    id: 'whitepaper-sovereign-cloud-vietnam-law',
    title: 'Khảo sát Chủ quyền Dữ liệu & Tuân thủ Luật An ninh mạng Việt Nam trong kỷ nguyên số',
    category: 'whitepapers',
    categoryLabel: 'Báo cáo & Whitepapers',
    badge: 'WHITEPAPERS',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    description: 'Làm rõ các quy định lưu trữ dữ liệu người dùng trong nước, phân tích rủi ro pháp lý khi chọn các nhà cung cấp đám mây quốc tế không có pháp nhân tại Việt Nam.',
    publishDate: '05/08/2026',
    readTime: '28 phút đọc',
    author: 'Legal Tech Committee',
    authorRole: 'Hội đồng tư vấn pháp luật số',
    downloadable: true,
    downloadSize: '4.1 MB',
    content: 'Định hướng giải pháp lưu trữ an toàn, đúng pháp lý và nâng cao năng lực kiểm soát dữ liệu doanh nghiệp.'
  },
  {
    id: 'whitepaper-ai-adoption-trends-vietnam',
    title: 'Báo cáo Xu hướng Ứng dụng Trí tuệ nhân tạo (AI) trong doanh nghiệp Việt năm 2026',
    category: 'whitepapers',
    categoryLabel: 'Báo cáo & Whitepapers',
    badge: 'BÁO CÁO THỊ TRƯỜNG',
    badgeColor: 'emerald',
    bannerImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    description: 'Phân tích thực tế tỷ lệ triển khai AI, các rào cản kỹ thuật về hạ tầng tính toán dữ liệu lớn và các cơ hội đột phá doanh số nhờ áp dụng AI tạo sinh vào vận hành kinh doanh.',
    publishDate: '07/08/2026',
    readTime: '32 phút đọc',
    author: 'Viettel AI Lab Research',
    authorRole: 'Bộ phận nghiên cứu ứng dụng AI',
    downloadable: true,
    downloadSize: '6.2 MB',
    content: 'Tổng hợp số liệu khảo sát từ hơn 1000 CEO, CTO các doanh nghiệp lớn tại Việt Nam.'
  },
  {
    id: 'whitepaper-fintech-compliance-framework',
    title: 'Khung hướng dẫn Bảo mật thông tin & Thiết lập hạ tầng cho các tổ chức Fintech tại Việt Nam',
    category: 'whitepapers',
    categoryLabel: 'Báo cáo & Whitepapers',
    badge: 'WHITEPAPERS',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
    description: 'Các yêu cầu bắt buộc và khuyến nghị kiến trúc bảo vệ dữ liệu khách hàng giao dịch, kết nối API ngân hàng mở (Open Banking) an toàn tối đa.',
    publishDate: '09/08/2026',
    readTime: '35 phút đọc',
    author: 'Fintech Advisory Board',
    authorRole: 'Ban công nghệ tài chính',
    downloadable: true,
    downloadSize: '5.0 MB',
    content: 'Xây dựng một nền tảng hạ tầng vững chắc, sẵn sàng vượt qua các đợt thanh tra bảo mật ngân hàng khắt khe.'
  },
  {
    id: 'whitepaper-multi-cloud-strategy-guide',
    title: 'Chiến lược Multi-Cloud: Lợi ích, thách thức và mô hình quản trị hiệu quả cho doanh nghiệp',
    category: 'whitepapers',
    categoryLabel: 'Báo cáo & Whitepapers',
    badge: 'WHITEPAPERS',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    description: 'Hướng dẫn kết hợp song song nhiều nhà cung cấp đám mây khác nhau để tránh rủi ro phụ thuộc độc quyền (Vendor lock-in) và nâng cao tính chịu lỗi của toàn hệ thống.',
    publishDate: '11/08/2026',
    readTime: '24 phút đọc',
    author: 'Multi-Cloud Specialists',
    authorRole: 'Kiến trúc sư giải pháp đám mây',
    downloadable: true,
    downloadSize: '3.8 MB',
    content: 'Giải pháp kiểm soát chi phí và quản lý tập trung tài nguyên Multi-cloud trên một bảng điều khiển duy nhất.'
  },
  {
    id: 'whitepaper-disaster-recovery-rto-rpo',
    title: 'Thiết lập chỉ số RTO/RPO tối ưu: Cẩm nang xây dựng kế hoạch chống thảm họa Datacenter',
    category: 'whitepapers',
    categoryLabel: 'Báo cáo & Whitepapers',
    badge: 'WHITEPAPERS',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    description: 'Phương pháp tính toán giá trị tổn thất tài chính khi dừng hệ thống để thiết kế kịch bản sao lưu dữ liệu nóng/lạnh với chi phí đầu tư hợp lý nhất.',
    publishDate: '13/08/2026',
    readTime: '22 phút đọc',
    author: 'Disaster Recovery Advisory',
    authorRole: 'Nhóm quản trị rủi ro vận hành',
    downloadable: true,
    downloadSize: '2.9 MB',
    content: 'Đảm bảo khả năng phục hồi dữ liệu trong thời gian ngắn nhất khi xảy ra sự cố đột xuất ngoài mong muốn.'
  },
  {
    id: 'whitepaper-green-it-carbon-reduction',
    title: 'Hướng dẫn giảm thiểu phát thải Carbon thông qua hạ tầng CNTT tối ưu và Trung tâm dữ liệu xanh',
    category: 'whitepapers',
    categoryLabel: 'Báo cáo & Whitepapers',
    badge: 'BÁO CÁO THỊ TRƯỜNG',
    badgeColor: 'emerald',
    bannerImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    description: 'Lộ trình chuyển đổi số bền vững giúp doanh nghiệp đạt mục tiêu Net-Zero thông qua việc tối ưu hóa hiệu suất máy chủ ảo và lựa chọn đối tác cung cấp hạ tầng đạt chuẩn ESG.',
    publishDate: '15/08/2026',
    readTime: '26 phút đọc',
    author: 'Green IT Council VN',
    authorRole: 'Hội đồng công nghệ xanh bền vững',
    downloadable: true,
    downloadSize: '3.5 MB',
    content: 'Kết hợp hài hòa hai mục tiêu: Tăng tốc hiệu năng kinh doanh số và thực hiện trách nhiệm bảo vệ môi trường.'
  },
  {
    id: 'whitepaper-enterprise-api-gateway',
    title: 'Kiến trúc API Gateway quản trị tập trung cho các doanh nghiệp lớn đa chi nhánh',
    category: 'whitepapers',
    categoryLabel: 'Báo cáo & Whitepapers',
    badge: 'WHITEPAPERS',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
    description: 'Giải pháp quản lý, phân quyền và bảo mật toàn bộ các cổng kết nối API nội bộ và đối tác bên ngoài, giúp loại bỏ hoàn toàn rủi ro rò rỉ dữ liệu qua các API không được bảo vệ.',
    publishDate: '17/08/2026',
    readTime: '29 phút đọc',
    author: 'Enterprise Solution Architects',
    authorRole: 'Đội ngũ thiết kế hệ thống lớn',
    downloadable: true,
    downloadSize: '4.5 MB',
    content: 'Xây dựng một cổng API duy nhất bảo mật cao, hỗ trợ đắc lực cho kiến trúc Microservices phức tạp.'
  },
  {
    id: 'whitepaper-cloud-finops-saving-guide',
    title: 'Cẩm nang Thực thi Cloud FinOps: Quản trị và tối ưu chi phí sử dụng đám mây thông minh',
    category: 'whitepapers',
    categoryLabel: 'Báo cáo & Whitepapers',
    badge: 'WHITEPAPERS',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    description: 'Thiết lập văn hóa cộng tác giữa bộ phận Tài chính, Kinh doanh và Kỹ thuật công nghệ để phân bổ hóa đơn hạ tầng Cloud chính xác theo từng sản phẩm.',
    publishDate: '19/08/2026',
    readTime: '27 phút đọc',
    author: 'Cloud FinOps Community VN',
    authorRole: 'Hội đồng tư vấn tối ưu chi phí hạ tầng',
    downloadable: true,
    downloadSize: '4.2 MB',
    content: 'Cắt giảm hiệu quả các lãng phí tài nguyên đám mây vô hình giúp gia tăng đáng kể lợi nhuận biên của doanh nghiệp.'
  }
];

