export interface PromotionItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  content: string;
  category: 'cloud-server' | 'hosting-domain' | 'storage-backup' | 'security' | 'enterprise' | 'voucher';
  categoryLabel: string;
  badge: 'HOT DEAL' | 'MỚI' | 'SẮP HẾT HẠN' | 'ĐẶC BIỆT' | 'ĐANG DIỄN RA';
  badgeColor: 'red' | 'blue' | 'amber' | 'emerald' | 'purple';
  bannerImage: string;
  discountValue: string;
  code?: string;
  startDate: string;
  endDate: string;
  featured?: boolean;
  terms: string[];
  applicableServices: string[];
  viewsCount?: number;
}

export const PROMOTION_CATEGORIES = [
  { id: 'all', label: 'Tất Cả Ưu Đãi', count: 12 },
  { id: 'cloud-server', label: 'Cloud Server & Container', count: 4 },
  { id: 'storage-backup', label: 'Storage & Backup', count: 3 },
  { id: 'hosting-domain', label: 'Hosting & Domain', count: 2 },
  { id: 'security', label: 'An Toàn Thông Tin', count: 2 },
  { id: 'enterprise', label: 'Gói Doanh Nghiệp', count: 1 },
];

export const PROMOTIONS_DATA: PromotionItem[] = [
  {
    id: 'promo-01',
    slug: 'mung-sinh-nhat-viettel-37-nam-uu-dai-cuc-da',
    title: 'Mừng sinh nhật Viettel 37 năm: Sáng tạo bứt phá - Ưu đãi cực đã',
    shortDescription: 'Nhân dịp chào mừng sinh nhật Viettel 2026, Viettel IDC tổ chức chương trình khuyến mãi vô cùng hấp dẫn dành tặng tới quý khách hàng đã luôn tin tưởng và đồng hành cùng Viettel trong suốt 37 năm qua.',
    content: `Nhân dịp chào mừng sinh nhật Viettel 2026, Viettel IDC tổ chức chương trình khuyến mãi vô cùng hấp dẫn dành tặng tới quý khách hàng đã luôn tin tưởng và đồng hành cùng Viettel trong suốt 37 năm qua.

Chương trình được áp dụng cho hàng loạt các dịch vụ hạ tầng quan trọng: Colocation, Cloud Server, Virtual Private Cloud, Viettel Managed Kubernetes Service (vMKS), Viettel Dedicated Kubernetes Service (vDKS), Viettel Container Registry, Viettel Database Service, Email Hosting, Cloudrity, Web Hosting, SOC, Cloud Backup, Cloud Storage, Cloud Firewall,...

### Sáng tạo bứt phá - Ưu đãi cực đã
- **Thời gian áp dụng:** Từ 01/06/2026 - 08/06/2026
- **Hình thức khuyến mãi:** Giảm cước phí dịch vụ và Tặng thêm dịch vụ

### Chi tiết chương trình khuyến mại:
[ANNIVERSARY_PROMO_TABLE]`,
    category: 'cloud-server',
    categoryLabel: 'Mừng Sinh Nhật',
    badge: 'ĐẶC BIỆT',
    badgeColor: 'red',
    bannerImage: 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1786010053/dreamina-2026-08-06-5484-chuy%E1%BB%83n_%E1%BA%A3nh_n%C3%A0y_v%E1%BB%81_gi%E1%BA%A3m_30_lwkjxo.jpg',
    discountValue: 'ƯU ĐÃI 37 NĂM',
    startDate: '01/06/2026',
    endDate: '08/06/2026',
    featured: true,
    terms: [
      'Phí dịch vụ được giảm trừ trực tiếp vào tổng số tiền thanh toán đơn hàng.',
      'Chương trình không quy đổi thành tiền mặt.',
      'Để được hưởng chương trình ưu đãi, Quý khách vui lòng điền đúng Mã voucher khi thanh toán dịch vụ.',
      'Đăng ký thông tin ngay tại đây để nhận mã khuyến mại độc quyền và được đội ngũ tư vấn hỗ trợ chi tiết.'
    ],
    applicableServices: ['Colocation', 'Cloud Server', 'vMKS', 'Cloud Firewall', 'Threat Intelligence', 'Cloud Backup'],
    viewsCount: 4120
  },
  {
    id: 'promo-02',
    slug: 'mien-phi-trai-nghiem-viettel-drive-object-storage',
    title: 'Trải Nghiệm Miễn Phí 3 Tháng Viettel Cloud Object Storage S3 Compatible',
    shortDescription: 'Lưu trữ dữ liệu lớn không giới hạn chuẩn S3 với độ tin cậy 99.999999999%. Đăng ký dùng thử 300GB không tốn chi phí khởi tạo.',
    content: `Khám phá giải pháp lưu trữ đối tượng chuẩn S3 hiệu năng cao, chi phí tối ưu hàng đầu Việt Nam. Tích hợp sẵn băng thông nội bộ tốc độ cực cao với hệ sinh thái Viettel Cloud.

### Quyền lợi gói trải nghiệm:
- Miễn phí 300GB dung lượng Object Storage trong 90 ngày.
- Không giới hạn số lượng request GET/PUT/DELETE trong thời gian trải nghiệm.
- Miễn phí băng thông truyền tải dữ liệu nội bộ trong Data Center Viettel IDC.`,
    category: 'storage-backup',
    categoryLabel: 'Storage & Backup',
    badge: 'ĐẶC BIỆT',
    badgeColor: 'purple',
    bannerImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    discountValue: 'MIỄN PHÍ 3 THÁNG',
    code: 'FREE3MSTORAGE',
    startDate: '10/08/2026',
    endDate: '15/09/2026',
    featured: false,
    terms: [
      'Mỗi tài khoản doanh nghiệp được đăng ký trải nghiệm 01 lần.',
      'Sau thời gian dùng thử, hệ thống sẽ tự động gửi thông báo chuyển đổi gói trả phí.',
      'Dữ liệu lưu trữ được cam kết an toàn tuyệt đối theo tiêu chuẩn ISO 27001.'
    ],
    applicableServices: ['Viettel Object Storage', 'S3 Compatible Storage'],
    viewsCount: 2150
  },
  {
    id: 'promo-03',
    slug: 'combo-khoi-nghiep-so-digitization-starter-pack',
    title: 'Gói Chuyển Đổi Số "Startup Digitalization Pack" - Tiết Kiệm Tới 70% Chi Phí',
    shortDescription: 'Giải pháp trọn gói dành riêng cho doanh nghiệp SME & Startup: Cloud Server + Tên miền .VN + SSL + Email Doanh nghiệp chỉ từ 399.000đ/tháng.',
    content: `Viettel IDC đồng hành cùng cộng đồng Startup Việt Nam mở rộng hạ tầng số số 1. Trọn gói giải pháp đầy đủ hạ tầng CNTT khởi chạy ngay chỉ trong 15 phút.

### Gói bao gồm:
- 01 Viettel Cloud Server (2 vCPU, 4GB RAM, 80GB SSD NVMe).
- 01 Tên miền quốc tế hoặc hỗ trợ 50% phí tên miền .VN.
- 01 Chứng chỉ SSL bảo mật Digicert DV 1 năm.
- 05 Account Email doanh nghiệp theo tên miền riêng.`,
    category: 'enterprise',
    categoryLabel: 'Gói Doanh Nghiệp',
    badge: 'MỚI',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80',
    discountValue: 'TIẾT KIỆM 70%',
    code: 'STARTUP2026',
    startDate: '05/08/2026',
    endDate: '30/09/2026',
    featured: false,
    terms: [
      'Áp dụng cho doanh nghiệp mới thành lập dưới 3 năm hoặc doanh nghiệp khởi nghiệp.',
      'Yêu cầu cung cấp Giấy đăng ký kinh doanh khi kích hoạt dịch vụ.'
    ],
    applicableServices: ['Viettel Cloud Server', 'Web Hosting', 'SSL Certificate', 'Domain .VN'],
    viewsCount: 1890
  },
  {
    id: 'promo-04',
    slug: 'tang-cuong-bao-mat-tang-50-percent-dung-luong-ddos-protection',
    title: 'Tặng 50% Dung Lượng Băng Thông Chống DDoS Cho Hệ Thống Thương Mại Điện Tử',
    shortDescription: 'Bảo vệ toàn diện hệ thống Web/App trước các cuộc tấn công DDoS quy mô lớn với giải pháp Viettel Anti-DDoS & Cloud Firewall chuyên dụng.',
    content: `Đảm bảo tính sẵn sàng 99.99% cho các website thương mại điện tử, cổng thanh toán và ứng dụng ngân hàng. Hệ thống tự động phát hiện và chặn lọc tấn công Layer 3/4/7 trong 3 giây.`,
    category: 'security',
    categoryLabel: 'An Toàn Thông Tin',
    badge: 'SẮP HẾT HẠN',
    badgeColor: 'amber',
    bannerImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    discountValue: 'TẶNG 50% CAPACITY',
    code: 'SECURE2026',
    startDate: '15/07/2026',
    endDate: '15/08/2026',
    featured: false,
    terms: [
      'Áp dụng cho hợp đồng đăng ký mới gói Anti-DDoS từ 10Gbps trở lên.',
      'Tặng kèm 1 buổi diễn tập ứng cứu sự cố ATTT miễn phí bởi chuyên gia Viettel IDC.'
    ],
    applicableServices: ['Viettel Anti-DDoS Pro', 'Cloud WAF', 'SOC Managed Service'],
    viewsCount: 1420
  },
  {
    id: 'promo-05',
    slug: 'chuyen-datacenter-colocation-tang-3-thang-dat-rack',
    title: 'Ưu Đãi Thuê Chỗ Đặt Server (Colocation): Đặt 12 Tháng Tặng Ngay 3 Tháng',
    shortDescription: 'Đặt máy chủ tại Trung tâm dữ liệu chuẩn Tier III Quốc tế duy nhất tại Việt Nam đạt tiêu chuẩn ANSI/TIA-942 Rated 3 Constructed Facility.',
    content: `Tối ưu hóa chi phí vận hành hạ tầng phần cứng của bạn tại Trung tâm dữ liệu tiêu chuẩn xanh ANSI/TIA-942 Rated 3 tối tân của Viettel IDC tại Hòa Lạc & Bình Dương.`,
    category: 'cloud-server',
    categoryLabel: 'Cloud Server & Container',
    badge: 'ĐANG DIỄN RA',
    badgeColor: 'emerald',
    bannerImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
    discountValue: 'TẶNG 3 THÁNG',
    code: 'COLOCATE2026',
    startDate: '01/08/2026',
    endDate: '31/10/2026',
    featured: false,
    terms: [
      'Áp dụng khi ký hợp đồng thuê chỗ đặt Server từ 1U đến trọn Rack 42U.',
      'Miễn phí 100% chi phí di dời máy chủ từ Data Center cũ sang Viettel IDC.'
    ],
    applicableServices: ['Colocation Service', 'Dedicated Server', 'Private Cage'],
    viewsCount: 2980
  },
  {
    id: 'promo-06',
    slug: 'uu-dai-ten-mien-vn-va-cloud-hosting',
    title: 'Đăng Ký Tên Miền .VN Tặng Miễn Phí NVMe Cloud Hosting 1 Năm',
    shortDescription: 'Xây dựng thương hiệu số uy tín chuẩn quốc gia với tên miền .VN và trải nghiệm tốc độ tải trang vượt trội với Cloud Hosting ổ cứng SSD NVMe siêu tốc.',
    content: `Khẳng định uy tín thương hiệu Việt trên môi trường số. Khi đăng ký mới tên miền .VN hoặc .COM.VN tại Viettel IDC, nhận ngay gói NVMe Cloud Hosting dung lượng 3GB miễn phí trong 12 tháng.`,
    category: 'hosting-domain',
    categoryLabel: 'Hosting & Domain',
    badge: 'HOT DEAL',
    badgeColor: 'red',
    bannerImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    discountValue: 'TẶNG HOSTING 1 NĂM',
    code: 'DOMINHOST2026',
    startDate: '01/08/2026',
    endDate: '30/09/2026',
    featured: false,
    terms: [
      'Áp dụng cho mọi đơn hàng tên miền cấp cao .VN.',
      'Tự động tích hợp bảng điều khiển cPanel / DirectAdmin tiếng Việt.'
    ],
    applicableServices: ['Tên miền .VN', 'WordPress NVMe Hosting', 'Business Hosting'],
    viewsCount: 1650
  },
  {
    id: 'promo-07',
    slug: 'uu-dai-managed-kubernetes-vMKS',
    title: 'Giải Pháp Kubernetes (vMKS): Giảm Ngay 40% Chi Phí Tài Nguyên Cloud Server',
    shortDescription: 'Triển khai và vận hành container hiệu quả hơn bao giờ hết. Miễn phí phí khởi tạo cluster, giảm 40% chi phí tài nguyên node chạy trong 6 tháng đầu.',
    content: `Viettel Managed Kubernetes Service (vMKS) giúp doanh nghiệp chuẩn hóa quy trình DevOps, triển khai ứng dụng microservices nhanh chóng, tự động scale theo tải trọng thực tế.
    
### Ưu đãi cụ thể:
- Giảm 40% chi phí cho Worker Nodes chạy trên hạ tầng Viettel Cloud Server.
- Miễn phí vận hành Master Nodes (do Viettel IDC quản lý an toàn tuyệt đối).
- Miễn phí 1 năm sử dụng Viettel Container Registry để lưu trữ docker images.`,
    category: 'cloud-server',
    categoryLabel: 'Cloud Server & Container',
    badge: 'MỚI',
    badgeColor: 'blue',
    bannerImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    discountValue: 'GIẢM NGAY 40%',
    code: 'VMKS40OFF',
    startDate: '10/08/2026',
    endDate: '15/10/2026',
    featured: false,
    terms: [
      'Áp dụng cho khách hàng đăng ký mới dịch vụ vMKS thời hạn tối thiểu 6 tháng.',
      'Worker Nodes được khởi tạo phải đạt cấu hình tối thiểu 2 vCPU / 4GB RAM.'
    ],
    applicableServices: ['vMKS', 'Container Registry', 'Viettel Cloud Server'],
    viewsCount: 1120
  },
  {
    id: 'promo-08',
    slug: 'uu-dai-cloud-firewall-bao-mat-ung-dung',
    title: 'Cloud Firewall Thế Hệ Mới: Giảm 35% Phí Đăng Ký Cho Doanh Nghiệp',
    shortDescription: 'Bảo vệ website và hệ thống thông tin nội bộ trước các mối đe dọa không gian mạng. Tự động cập nhật mẫu tấn công mới, kiểm soát cổng truy cập thông minh.',
    content: `Dịch vụ bức tường lửa đám mây bảo mật chuyên sâu cho doanh nghiệp, ngăn chặn các cuộc tấn công khai thác lỗ hổng và rò rỉ dữ liệu nhạy cảm của tổ chức.
    
### Lợi ích nổi bật:
- Giảm 35% phí thuê bao hàng tháng cho các gói Cloud Firewall cơ bản và nâng cao.
- Quản trị dễ dàng qua giao diện Web Portal trực quan.
- Hỗ trợ cấu hình chính sách (Ruleset) miễn phí từ chuyên gia bảo mật.`,
    category: 'security',
    categoryLabel: 'An Toàn Thông Tin',
    badge: 'HOT DEAL',
    badgeColor: 'red',
    bannerImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    discountValue: 'GIẢM 35% CHI PHÍ',
    code: 'FIREWALL35',
    startDate: '01/08/2026',
    endDate: '15/09/2026',
    featured: false,
    terms: [
      'Khuyến mại áp dụng cho doanh nghiệp thanh toán trước từ 6 tháng trở lên.',
      'Hỗ trợ chuyển đổi cấu hình chính sách từ hệ thống firewall cũ.'
    ],
    applicableServices: ['Cloud Firewall', 'Threat Intelligence', 'SOC Managed Service'],
    viewsCount: 980
  },
  {
    id: 'promo-09',
    slug: 'dung-luong-cloud-backup-sao-luu-tu-dong',
    title: 'Sao Lưu Đám Mây Viettel Cloud Backup: Tặng Thêm 50% Dung Lượng Lưu Trữ',
    shortDescription: 'An tâm tuyệt đối trước mã độc tống tiền Ransomware. Giải pháp sao lưu dữ liệu tự động định kỳ, bảo vệ an toàn tệp tin quan trọng của doanh nghiệp.',
    content: `Phòng chống mất mát dữ liệu do lỗi phần cứng hoặc bị mã hóa độc hại. Viettel Cloud Backup hỗ trợ sao lưu đa nền tảng từ máy chủ vật lý, máy ảo VMware, Hyper-V đến cơ sở dữ liệu SQL.
    
### Gói khuyến mại:
- Mua 2TB dung lượng lưu trữ Cloud Backup tặng thêm ngay 1TB dung lượng hoàn toàn miễn phí.
- Miễn phí bản quyền phần mềm đại lý cài đặt (Backup Agent) trên tối đa 5 máy chủ.
- Hỗ trợ cấu hình kịch bản khôi phục thảm họa (Disaster Recovery) sơ bộ.`,
    category: 'storage-backup',
    categoryLabel: 'Storage & Backup',
    badge: 'ĐANG DIỄN RA',
    badgeColor: 'emerald',
    bannerImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    discountValue: 'TẶNG 50% DUNG LƯỢNG',
    code: 'BACKUP50FREE',
    startDate: '05/08/2026',
    endDate: '31/10/2026',
    featured: false,
    terms: [
      'Không giới hạn băng thông đường truyền tải file sao lưu.',
      'Dung lượng tặng thêm có thời hạn sử dụng tương đương với gói chính được đăng ký.'
    ],
    applicableServices: ['Viettel Cloud Backup', 'Viettel Object Storage', 'Cloud Disaster Recovery'],
    viewsCount: 1540
  },
  {
    id: 'promo-10',
    slug: 'giam-gia-vdatabase-service-quan-tri-tu-dong',
    title: 'Viettel Database Service (vDatabase): Tặng Voucher Trị Giá 2.000.000đ',
    shortDescription: 'Cơ sở dữ liệu được quản trị tự động hoàn toàn (MySQL, PostgreSQL, MongoDB). Tiết kiệm tối đa thời gian vận hành và tối ưu hóa truy vấn SQL.',
    content: `Trải nghiệm dịch vụ cơ sở dữ liệu được quản trị chuyên nghiệp (Managed Database) chuẩn doanh nghiệp lớn. Tự động vá lỗi bảo mật, tự động backup hàng ngày và phân tách node đọc/ghi (Read Replica).
    
### Ưu đãi nhận được:
- Nhận ngay Voucher 2.000.000đ trừ trực tiếp vào hóa đơn sử dụng vDatabase.
- Miễn phí chuyển đổi dữ liệu (Database Migration) từ AWS RDS hoặc hạ tầng tự quản về Viettel IDC.`,
    category: 'enterprise',
    categoryLabel: 'Gói Doanh Nghiệp',
    badge: 'ĐẶC BIỆT',
    badgeColor: 'purple',
    bannerImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    discountValue: 'VOUCHER 2 TRIỆU',
    code: 'VDATABASE2M',
    startDate: '10/08/2026',
    endDate: '30/11/2026',
    featured: false,
    terms: [
      'Voucher áp dụng cho các đơn hàng vDatabase thanh toán tối thiểu 12 tháng.',
      'Không áp dụng cộng dồn với các voucher giảm giá khác.'
    ],
    applicableServices: ['Viettel Database Service', 'Cloud Server', 'Private Cloud'],
    viewsCount: 1250
  }
];

export const NEWSROOM_PRESS_RELEASE = [
  {
    id: 'press-01',
    title: 'Viettel IDC Đạt Chứng Nhận An Toàn Thông Tin ISO/IEC 27017 & 27018 Cho Dịch Vụ Đám Mây',
    date: '02 Tháng 8, 2026',
    category: 'Thông cáo báo chí',
    summary: 'Khẳng định vị thế nhà cung cấp dịch vụ Điện toán đám mây đạt tiêu chuẩn bảo mật dữ liệu cá nhân & đám mây nghiêm ngặt nhất tại Việt Nam.',
    link: '#'
  },
  {
    id: 'press-02',
    title: 'Khai Trương Trung Tâm Dữ Liệu Xanh Viettel Hòa Lạc Đạt Tiêu Chuẩn Tiết Kiệm Năng Lượng PUE < 1.3',
    date: '25 Tháng 7, 2026',
    category: 'Sự kiện & Hạ tầng',
    summary: 'Data Center xanh quy mô lớn nhất Việt Nam được trang bị hệ thống làm mát bằng chất lỏng tiên tiến phục vụ các cụm máy chủ AI & High Performance Computing (HPC).',
    link: '#'
  },
  {
    id: 'press-03',
    title: 'Viettel Cloud Hợp Tác Chiến Lược Cùng NVIDIA Triển Khai Hạ Tầng Siêu Máy Chủ AI Cloud tại Đông Nam Á',
    date: '18 Tháng 6, 2026',
    category: 'Hợp tác chiến lược',
    summary: 'Cung cấp hạ tầng GPU H100/A100 cho các viện nghiên cứu, fintech và tập đoàn công nghệ phát triển mô hình trí tuệ nhân tạo thế hệ mới.',
    link: '#'
  }
];
