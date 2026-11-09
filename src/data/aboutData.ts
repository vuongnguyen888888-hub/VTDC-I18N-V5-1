export interface Milestone {
  year: string;
  title: string;
  description: string;
  tag?: string;
  highlights?: string[];
}

export interface CoreValue {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface LeadershipRole {
  name: string;
  position: string;
  bio: string;
  avatarUrl: string;
}

export interface DCFacility {
  id: string;
  name: string;
  code: string;
  location: string;
  region: 'Bắc' | 'Trung' | 'Nam';
  area: string;
  racks: string;
  tier: string;
  pue: string;
  highlights: string[];
}

export interface ESGPillar {
  title: string;
  category: 'Environmental' | 'Social' | 'Governance';
  target: string;
  description: string;
  metrics: string[];
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  deadline: string;
  tags: string[];
}

export interface PressRelease {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  source: string;
  url?: string;
  featured?: boolean;
}

export interface CertificationItem {
  name: string;
  code: string;
  category: string;
  issuedBy: string;
  description: string;
  scope: string;
}

// 1. STATS BANNER
export const aboutKeyStats = [
  { value: '18', label: 'Năm tiên phong', desc: 'Thành lập từ 2008, đồng hành chuyển đổi số quốc gia' },
  { value: '09', label: 'Data Centers', desc: 'Đạt chứng chỉ quốc tế ANSI/TIA-942 Rated 3 toàn quốc' },
  { value: '32.000m²', label: 'Diện tích sàn phòng máy', desc: 'Quy mô hạ tầng Data Center lớn nhất Việt Nam' },
  { value: '13.000+', label: 'Rack tiêu chuẩn', desc: 'Hỗ trợ Rack mật độ cao phục vụ siêu máy chủ AI' },
  { value: '25.000+', label: 'Khách hàng tin chọn', desc: 'Doanh nghiệp FDI, Ngân hàng, Cơ quan Chính phủ' },
  { value: '99.99%', label: 'Cam kết SLA Uptime', desc: 'Hạ tầng dự phòng 2N đảm bảo hoạt động liên tục' },
];

// 2. LỊCH SỬ HÌNH THÀNH & PHÁT TRIỂN
export const historyMilestones: Milestone[] = [
  {
    year: '2008',
    title: 'Thành lập Viettel IDC',
    description: 'Thành lập ngày 06/03/2008 (Pháp nhân: Công ty TNHH Viettel – CHT), định vị là nhà cung cấp dẫn đầu thị trường Data Center Việt Nam về cơ sở hạ tầng và chất lượng dịch vụ.',
    tag: 'Khởi đầu',
    highlights: [
      'Thành lập ngày 06/03/2008 (Pháp nhân được ghi nhận: Công ty TNHH Viettel – CHT).',
      'Định vị là một trong những nhà cung cấp dẫn đầu thị trường Data Center Việt Nam về cơ sở hạ tầng và chất lượng dịch vụ.',
      'Hạ tầng và giải pháp sử dụng công nghệ từ nhiều hãng quốc tế như: VMware, Cisco, Juniper, EMC, IBM…'
    ]
  },
  {
    year: '2009',
    title: 'Pháp Vân & Hoàng Hoa Thám',
    description: 'Đưa vào vận hành 2 trung tâm dữ liệu chuẩn Tier 3 tại Hà Nội, bố trí linh hoạt tại trung tâm và ngoại ô phục vụ phương án phòng ngừa thảm họa.',
    highlights: [
      'Trung tâm dữ liệu Pháp Vân: Diện tích 2.000 m², sức chứa 400 rack.',
      'Trung tâm dữ liệu Hoàng Hoa Thám: Diện tích 1.500 m², sức chứa 250 rack.',
      'Các Trung tâm dữ liệu được xây dựng theo tiêu chuẩn quốc tế Tier 3.',
      'Bố trí các Data Center tại cả khu vực trung tâm và ngoài trung tâm thành phố nhằm đảm bảo khoảng cách địa lý phục vụ phương án phòng ngừa thảm họa.'
    ]
  },
  {
    year: '2010',
    title: 'Thuê chỗ đặt và Kênh truyền',
    description: 'Cung cấp dịch vụ Thuê chỗ đặt thiết bị (Colocation) và Kênh truyền kết nối tốc độ cao, đảm bảo môi trường vận hành hạ tầng CNTT chuẩn quốc tế.',
    highlights: [
      'Thuê chỗ đặt – Colocation: Cung cấp không gian đặt thiết bị, hệ thống điện, điều hòa, hạ tầng phụ trợ, môi trường triển khai hệ thống CNTT của khách hàng tại Data Center.',
      'Kênh truyền: Cung cấp kết nối nhanh và ổn định giữa Data Center ↔ Data Center, Data Center ↔ Văn phòng khách hàng, Hệ thống khách hàng ↔ Người dùng cuối.'
    ]
  },
  {
    year: '2011',
    title: 'Xây dựng Trung tâm dữ liệu Bình Dương',
    description: 'Xây dựng và đưa vào vận hành Trung tâm dữ liệu Bình Dương quy mô 9.000 m² với 1.550 rack, mở rộng mạnh mẽ năng lực hạ tầng tại khu vực phía Nam.',
    highlights: [
      'Xây dựng Trung tâm dữ liệu Bình Dương với diện tích 9.000 m².',
      'Quy mô sức chứa: 1.550 rack tiêu chuẩn.',
      'Thiết kế theo tiêu chuẩn quốc tế Tier 3, áp dụng hệ thống quản lý ISO 27001:2013.',
      'Mở rộng vượt bậc năng lực Trung tâm dữ liệu tại khu vực kinh tế trọng điểm phía Nam.'
    ]
  },
  {
    year: '2012',
    title: 'Xây dựng Trung tâm dữ liệu Hòa Lạc',
    description: 'Xây dựng Trung tâm dữ liệu Hòa Lạc diện tích 4.000 m² theo tiêu chuẩn Tier 3, mở rộng hạ tầng phòng máy phục vụ nhu cầu ngày càng tăng tại khu vực Hà Nội.',
    highlights: [
      'Xây dựng Trung tâm dữ liệu Hòa Lạc với diện tích 4.000 m².',
      'Thiết kế theo tiêu chuẩn Tier 3, áp dụng ISO 27001:2013.',
      'Mở rộng hạ tầng phòng máy quy mô lớn tại khu vực Hà Nội.',
      'Đáp ứng nhu cầu ngày càng tăng và mở rộng năng lực phục vụ khách hàng doanh nghiệp & chính phủ.'
    ]
  },
  {
    year: '2013',
    title: 'Máy chủ Đám mây – Cloud Server',
    description: 'Chính thức cung cấp dịch vụ Cloud Server, tiên phong giúp doanh nghiệp tối ưu chi phí đầu tư máy chủ vật lý và linh hoạt đáp ứng nhu cầu kinh doanh.',
    highlights: [
      'Cung cấp dịch vụ Máy chủ Đám mây – Cloud Server, cho phép khách hàng sử dụng tài nguyên máy chủ trên nền tảng Cloud.',
      'Giảm nhu cầu đầu tư trực tiếp vào máy chủ vật lý, chi phí bảo trì và chi phí vận hành hạ tầng.',
      'Tăng khả năng đáp ứng linh hoạt theo nhu cầu sử dụng thực tế của doanh nghiệp.'
    ]
  },
  {
    year: '2014',
    title: 'Xây dựng Trung tâm dữ liệu Đà Nẵng',
    description: 'Xây dựng Trung tâm dữ liệu Đà Nẵng chuẩn Tier 3, đáp ứng trọn vẹn nhu cầu lưu trữ và hạ tầng số cho khu vực Đà Nẵng và miền Trung.',
    highlights: [
      'Xây dựng Trung tâm dữ liệu Đà Nẵng với diện tích 500 m², sức chứa 100 rack.',
      'Thiết kế theo tiêu chuẩn quốc tế Tier 3, áp dụng tiêu chuẩn an toàn thông tin ISO 27001:2013.',
      'Phục vụ nhu cầu khách hàng tại khu vực Đà Nẵng và miền Trung.'
    ]
  },
  {
    year: '2015',
    title: 'Cloud PC, Cloud Storage & CDN',
    description: 'Ra mắt bộ 3 giải pháp công nghệ: máy tính ảo Cloud PC, lưu trữ dữ liệu đám mây Cloud Storage và mạng phân phối nội dung CDN phủ rộng 5 TTDL.',
    highlights: [
      'Cloud PC: Ứng dụng công nghệ ảo hóa và điện toán đám mây, tăng khả năng bảo mật, kiểm soát và quản lý tập trung.',
      'Cloud Storage: Giải pháp lưu trữ trực tuyến cho cá nhân và doanh nghiệp trên nền tảng Cloud, hỗ trợ dung lượng lớn, tốc độ cao và tối ưu chi phí.',
      'CDN: Sử dụng Cache Server và Service Node tại 5 Trung tâm dữ liệu trên cả nước, giúp giảm tải hệ thống máy chủ, lưu cache dữ liệu và phân tải nội dung tĩnh hoặc ít thay đổi.'
    ]
  },
  {
    year: '2016',
    title: 'Cloud Camera',
    description: 'Cung cấp dịch vụ Cloud Camera, đưa toàn bộ dữ liệu giám sát lên nền tảng đám mây, đảm bảo an toàn dữ liệu và truy cập xem lại trực tuyến 24/7.',
    highlights: [
      'Cung cấp dịch vụ Cloud Camera, đưa dữ liệu camera giám sát lên nền tảng Cloud.',
      'Cho phép xem camera trực tiếp, lưu trữ dữ liệu an toàn, xem lại dữ liệu đã ghi và truy cập trực tuyến.',
      'Dữ liệu được đồng bộ lên Cloud, giúp giảm nguy cơ mất dữ liệu khi thiết bị camera bị hỏng hoặc bị đánh cắp.'
    ]
  },
  {
    year: '2017',
    title: 'Cloud Security & Private Cloud',
    description: 'Cung cấp Cloud Security bảo vệ trước tấn công mạng và Private Cloud chuyên biệt cho doanh nghiệp cần hạ tầng điện toán đám mây riêng biệt.',
    highlights: [
      'Cung cấp Cloud Security, bảo vệ hệ thống CNTT trước các nguy cơ tấn công mạng.',
      'Cung cấp Private Cloud, cho phép doanh nghiệp sử dụng hạ tầng Cloud qua Internet hoặc mạng nội bộ riêng.',
      'Tăng khả năng bảo mật, kiểm soát dữ liệu toàn diện và đảm bảo tính riêng tư tối đa.'
    ]
  },
  {
    year: '2018',
    title: 'Backup – DR as a Service',
    description: 'Cung cấp dịch vụ Sao lưu & Phòng chống thảm họa Backup – DR as a Service, khôi phục hệ thống tức thì khi xảy ra sự cố.',
    highlights: [
      'Cung cấp dịch vụ Backup – DR as a Service sử dụng tài nguyên Cloud.',
      'Sao lưu ứng dụng và sao lưu dữ liệu tự động, an toàn.',
      'Tạo các bản sao hệ thống và khôi phục hệ thống khi xảy ra lỗi hoặc thảm họa.',
      'Duy trì khả năng hoạt động liên tục khi hệ thống chính gặp sự cố.'
    ]
  },
  {
    year: '2019',
    title: 'Nhà đăng ký tên miền quốc gia “.vn”',
    description: 'Nhận chứng nhận của VNNIC – Bộ TT&TT, trở thành Nhà đăng ký tên miền quốc gia “.vn” hỗ trợ doanh nghiệp xây dựng thương hiệu số.',
    highlights: [
      'Nhận chứng nhận chính thức của VNNIC – Bộ Thông tin và Truyền thông.',
      'Trở thành nhà đăng ký tên miền quốc gia “.vn”.',
      'Cung cấp dịch vụ tên miền nhằm hỗ trợ doanh nghiệp bảo vệ thương hiệu, nâng cao uy tín và xây dựng hình ảnh website chuyên nghiệp.'
    ]
  },
  {
    year: '2020',
    title: 'Cung cấp 4 dịch vụ mới đột phá',
    description: 'Đột phá năng lực với Cloud GPU tính toán chuyên sâu, Dedicated Private Cloud, cơ sở dữ liệu Viettel StartDB và hạ tầng Viettel Kubernetes.',
    highlights: [
      '02/2020: Ra mắt Cloud GPU phục vụ tính toán hiệu năng cao và AI.',
      '04/2020: Cung cấp Dedicated Private Cloud cho doanh nghiệp.',
      '07/2020: Ra mắt cơ sở dữ liệu đám mây Viettel StartDB.',
      '12/2020: Triển khai nền tảng điều phối container Viettel Kubernetes.'
    ]
  },
  {
    year: '2021',
    title: 'Thay đổi nhận diện thương hiệu & Ra mắt 6 dịch vụ mới',
    description: 'Tái định vị thương hiệu với sứ mệnh “Tiên phong kiến tạo xã hội số”, làm chủ Cloud người Việt và ra mắt đồng loạt 6 dịch vụ mới.',
    highlights: [
      'Tái định vị thương hiệu với sứ mệnh “Tiên phong kiến tạo xã hội số”.',
      'Tập trung phát triển và làm chủ nền tảng Cloud của người Việt; cung cấp các giải pháp tối ưu, đáng tin cậy, tạo nền tảng cho sáng tạo và phát triển của khách hàng, doanh nghiệp và đối tác.',
      '01/2021: Viettel Cloud Firewall | 04/2021: Viettel Hybrid Connect',
      '09/2021: Cloud Managed Service | 10/2021: Viettel Open Private Cloud',
      '11/2021: Viettel SD-WAN | 11/2021: Viettel Endpoint Security'
    ]
  },
  {
    year: '2022',
    title: 'Hoàn thiện hệ sinh thái Cloud',
    description: 'Hệ sinh thái vượt 40 sản phẩm/dịch vụ, đạt chứng nhận SAP Cloud Operations và tiên phong đáp ứng tiêu chuẩn an ninh thẻ thanh toán PCI DSS.',
    highlights: [
      'Hoàn thiện hệ sinh thái với hơn 40 sản phẩm/dịch vụ.',
      'Mở rộng các nhóm: Dịch vụ quản trị, Dịch vụ vận hành, Dịch vụ an toàn thông tin, MSSP, Các không gian công nghệ mới, Ứng dụng Blockchain.',
      'Đạt chứng nhận SAP Cloud and Infrastructure Operations.',
      'Tiên phong cung cấp Cloud đáp ứng PCI DSS – tiêu chuẩn bảo mật an ninh dữ liệu thẻ thanh toán.'
    ]
  },
  {
    year: '2023',
    title: 'Tăng tốc — Giữ vị thế số 1 kép Data Center & Cloud',
    description: 'Thị phần số 1 kép, hoàn thiện bộ giải pháp PaaS, đạt chứng chỉ ISO/IEC 22301:2019 và thắng giải thưởng quốc tế Datacloud Global Awards.',
    highlights: [
      'Giữ thị phần số 1 cả Data Center và Cloud tại Việt Nam.',
      'Hoàn thiện nhóm sản phẩm thuộc lớp PaaS (Platform as a Service), gồm: Viettel Open Kubernetes Service, Viettel Database Service, Viettel Container Registry, DevSecOps Suite, API Gateway.',
      'Phát triển hệ sinh thái lên hơn 50 sản phẩm, dịch vụ, hướng tới cung cấp hệ sinh thái toàn trình cho khách hàng.',
      'Đạt chứng chỉ ISO/IEC 22301:2019 – Business Continuity Management Systems.',
      'Là nhà cung cấp đến từ Việt Nam thắng Datacloud Global Awards.',
      'Đưa phát triển bền vững trở thành một định hướng trong chiến lược kinh doanh DC & Cloud.'
    ]
  },
  {
    year: '2024',
    title: 'Xanh và Bền vững — Khai trương TTDL Hòa Lạc 3',
    description: 'Khai trương TTDL Hòa Lạc 3 quy mô hàng đầu, giữ 49% thị phần DC, 39% thị phần Cloud và phát hành Báo cáo Phát triển bền vững đầu tiên.',
    tag: 'Đột phá',
    highlights: [
      'Khai trương Viettel IDC Hòa Lạc 3, được định vị là Trung tâm dữ liệu xanh, có quy mô và công suất điện lớn tại Việt Nam.',
      'Tiếp tục giữ vị trí số 1 về quy mô Data Center với 49% thị phần DC tại Việt Nam.',
      'Củng cố năng lực MSSP – Managed Security Service Provider, hướng tới cung cấp dịch vụ MSSP toàn trình.',
      'Hoàn thiện hệ sinh thái với hơn 60 sản phẩm/dịch vụ.',
      'Tiếp tục giữ vị trí số 1 về Cloud với 39% thị phần Cloud tại Việt Nam.',
      'Trở thành nhà cung cấp DC & Cloud đầu tiên tại Việt Nam phát hành Báo cáo Phát triển bền vững.'
    ]
  },
  {
    year: '2025',
    title: 'Dấu ấn quốc tế — Khẳng định vị thế tiên phong',
    description: 'Mở rộng quy mô hạ tầng DC dẫn đầu, duy trì Cloud đa nền tảng, trở thành Broadcom Pinnacle Partner và mở rộng quốc tế với thương hiệu Vcloudia.',
    tag: 'Dẫn đầu',
    highlights: [
      'Tiếp tục mở rộng năng lực và quy mô hạ tầng Trung tâm dữ liệu, giữ vị trí dẫn đầu thị trường.',
      'Duy trì hệ sinh thái Cloud đa nền tảng gồm VMware, OpenStack và Open Source.',
      'Trở thành Pinnacle Partner của Broadcom, tăng lợi thế kinh doanh Cloud VMware tại Việt Nam và khu vực.',
      'Mở rộng Cloud ra thị trường quốc tế với thương hiệu Vcloudia tại Campuchia.'
    ]
  },
];

// 3. TẦM NHÌN - SỨ MỆNH - GIÁ TRỊ CỐT LÕI
export const coreValuesData: CoreValue[] = [
  {
    title: 'Tiên Phong & Đột Phá',
    subtitle: 'Dẫn dắt xu hướng công nghệ',
    description: 'Luôn đi đầu trong việc đầu tư công nghệ mới nhất về Cloud, AI và Trung tâm Dữ liệu Xanh, mang tiêu chuẩn quốc tế đến doanh nghiệp Việt.',
    iconName: 'Sparkles'
  },
  {
    title: 'An Toàn & Bền Vững',
    subtitle: 'Bảo vệ dữ liệu toàn diện',
    description: 'Hạ tầng đạt chuẩn bảo mật cao nhất, hướng tới Net Zero và phát triển bền vững với môi trường và xã hội.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Thấu Hiểu & Tận Tâm',
    subtitle: 'Đồng hành cùng khách hàng',
    description: 'Đội ngũ kỹ sư chuyên gia túc trực 24/7/365, lấy sự hài lòng và thành công của khách hàng làm thước đo cao nhất.',
    iconName: 'HeartHandshake'
  },
  {
    title: 'Chuẩn Mực Quốc Tế',
    subtitle: 'Chất lượng không thỏa hiệp',
    description: 'Quy trình vận hành, bảo mật và chất lượng dịch vụ tuân thủ nghiêm ngặt các chứng chỉ quốc tế khắt khe nhất thế giới.',
    iconName: 'Award'
  },
];

// 4. HẠ TẦNG 9 DATA CENTERS
export const nineDataCenters: DCFacility[] = [
  {
    id: 'dc-hoa-lac-1',
    name: 'TTDL Viettel Hòa Lạc 1',
    code: 'HL1',
    location: 'Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội',
    region: 'Bắc',
    area: '21.000 m²',
    racks: '2.400 Racks',
    tier: 'ANSI/TIA-942 Rated 3',
    pue: '< 1.4 (Green DC)',
    highlights: ['Làm mát Chiller giải nhiệt nước thế hệ mới', 'Hỗ trợ Rack AI công suất cao tới 30kW/rack', 'Hệ thống điện mặt trời áp mái tự cung tự cấp']
  },
  {
    id: 'dc-hoa-lac-2',
    name: 'TTDL Viettel Hòa Lạc 2',
    code: 'HL2',
    location: 'Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội',
    region: 'Bắc',
    area: '8.500 m²',
    racks: '1.200 Racks',
    tier: 'ANSI/TIA-942 Rated 3',
    pue: '< 1.45',
    highlights: ['Hạ tầng Private Cloud cô lập an toàn', 'Kết nối đường trục đôi 100Gbps', 'Phòng chống cháy khí sạch Novec 1230']
  },
  {
    id: 'dc-hoa-lac-3',
    name: 'TTDL Viettel Hòa Lạc 3',
    code: 'HL3',
    location: 'Khu Công nghệ cao Hòa Lạc, Thạch Thất, Hà Nội',
    region: 'Bắc',
    area: '10.000 m²',
    racks: '1.500 Racks',
    tier: 'ANSI/TIA-942 Rated 3',
    pue: '< 1.42',
    highlights: ['Cụm siêu máy chủ GPU AI & Cloud Storage', 'Kiểm soát truy cập sinh trắc học 5 lớp', 'Hệ thống giám sát DCIM tự động']
  },
  {
    id: 'dc-phap-van',
    name: 'TTDL Viettel Pháp Vân',
    code: 'PV',
    location: 'Khu đô thị Pháp Vân, Hoàng Mai, Hà Nội',
    region: 'Bắc',
    area: '5.000 m²',
    racks: '1.000 Racks',
    tier: 'ANSI/TIA-942 Rated 3',
    pue: '< 1.5',
    highlights: ['Vị trí trung tâm nội thành Hà Nội', 'Trạm biến áp trung thế chuyên dụng', 'Điểm trung chuyển mạng viễn thông quốc tế']
  },
  {
    id: 'dc-da-nang',
    name: 'TTDL Viettel Đà Nẵng',
    code: 'DN',
    location: 'KCN An Đồn, Quận Sơn Trà, TP. Đà Nẵng',
    region: 'Trung',
    area: '4.500 m²',
    racks: '800 Racks',
    tier: 'ANSI/TIA-942 Rated 3',
    pue: '< 1.48',
    highlights: ['Trung tâm dữ liệu trọng điểm miền Trung', 'Cửa ngõ cáp quang biển quốc tế APG & AAG', 'Cung cấp giải pháp Disaster Recovery đa vùng']
  },
  {
    id: 'dc-hht-1',
    name: 'TTDL Viettel Hoàng Hoa Thám 1',
    code: 'HHT1',
    location: '158 Hoàng Hoa Thám, Quận Tân Bình, TP. Hồ Chí Minh',
    region: 'Nam',
    area: '6.000 m²',
    racks: '1.200 Racks',
    tier: 'ANSI/TIA-942 Rated 3',
    pue: '< 1.46',
    highlights: ['Trung tâm dữ liệu trọng điểm khu vực phía Nam', 'Gần sân bay Tân Sơn Nhất, hạ tầng giao thông thuận tiện', 'Chứng nhận an ninh PCI-DSS cho ngành tài chính']
  },
  {
    id: 'dc-hht-2',
    name: 'TTDL Viettel Hoàng Hoa Thám 2',
    code: 'HHT2',
    location: '158 Hoàng Hoa Thám, Quận Tân Bình, TP. Hồ Chí Minh',
    region: 'Nam',
    area: '5.500 m²',
    racks: '1.100 Racks',
    tier: 'ANSI/TIA-942 Rated 3',
    pue: '< 1.45',
    highlights: ['Hạ tầng máy chủ chuyên dụng cho ngân hàng & thương mại điện tử', 'Hệ thống máy phát điện dự phòng N+1 hoạt động 72h liên tục', 'Đường truyền Internet đa hướng chống đứt cáp']
  },
  {
    id: 'dc-hht-3',
    name: 'TTDL Viettel Hoàng Hoa Thám 3',
    code: 'HHT3',
    location: '158 Hoàng Hoa Thám, Quận Tân Bình, TP. Hồ Chí Minh',
    region: 'Nam',
    area: '7.000 m²',
    racks: '1.400 Racks',
    tier: 'ANSI/TIA-942 Rated 3',
    pue: '< 1.43',
    highlights: ['Cung cấp hạ tầng Cloud thế hệ mới', 'Hệ thống làm mát thông minh tự động điều áp', 'Đáp ứng quy định an ninh an toàn cấp độ 4']
  },
  {
    id: 'dc-binh-duong',
    name: 'TTDL Viettel Bình Dương',
    code: 'BD',
    location: 'Khu công nghiệp Sóng Thần 2, Dĩ An, Tỉnh Bình Dương',
    region: 'Nam',
    area: '10.000 m²',
    racks: '1.600 Racks',
    tier: 'ANSI/TIA-942 Rated 3',
    pue: '< 1.42 (Green DC)',
    highlights: ['Khuôn viên rộng độc lập, an ninh tuyệt đối', 'Hạ tầng kết nối trực tiếp các khu công nghiệp trọng điểm phía Nam', 'Trung tâm dự phòng thảm họa lớn nhất khu vực phía Nam']
  }
];

// 5. ESG & TRÁCH NHIỆM XÃ HỘI (CSR)
export const esgPillars: ESGPillar[] = [
  {
    category: 'Environmental',
    title: 'Môi Trường & Phát Triển Bền Vững (Green Data Center)',
    target: 'Hướng tới Net Zero Carbon vào năm 2040',
    description: 'Chuyển đổi toàn diện sang năng lượng sạch, ứng dụng công nghệ làm mát bằng chất lỏng và trí tuệ nhân tạo (AI DCIM) để tối ưu hiệu suất sử dụng năng lượng.',
    metrics: [
      'PUE thiết kế đạt < 1.4 tại Đại TTDL Hòa Lạc',
      'Tái sử dụng 100% nhiệt lượng thải cho các hệ thống phụ trợ',
      'Điện mặt trời áp mái cung cấp 10% năng lượng chiếu sáng và văn phòng',
      'Giảm thiểu hơn 15.000 tấn CO2 phát thải mỗi năm'
    ]
  },
  {
    category: 'Social',
    title: 'Trách Nhiệm Xã Hội & Phụng Sự Cộng Đồng (CSR)',
    target: 'Vì một xã hội số không để ai bị bỏ lại phía sau',
    description: 'Đồng hành cùng Chính phủ và cộng đồng trong việc phổ cập kỹ năng số, hỗ trợ hạ tầng công nghệ thông tin cho ngành y tế, giáo dục và cứu trợ thiên tai.',
    metrics: [
      'Tài trợ 100% hạ tầng Cloud cho các nghiên cứu AI của các trường Đại học lớn',
      'Bảo trợ hạ tầng CNTT cho 2.000+ bệnh viện và cơ sở y tế trên toàn quốc',
      'Chương trình học bổng "Thắp sáng Tài năng Trẻ Cloud & Security"',
      'Chung tay cứu trợ đồng bào vùng lũ lụt và thiên tai hàng năm'
    ]
  },
  {
    category: 'Governance',
    title: 'Quản Trị Minh Bạch & An Toàn Dữ Liệu',
    target: 'Tuân thủ 100% chuẩn bảo mật quốc tế và pháp luật Việt Nam',
    description: 'Xây dựng hệ thống quản trị rủi ro đa tầng, bảo vệ quyền riêng tư người dùng theo Nghị định 13/2023/NĐ-CP và các chuẩn mực kiểm toán khắt khe nhất.',
    metrics: [
      'Đạt đầy đủ chứng chỉ ISO 27001, ISO 27017, ISO 22301, PCI-DSS v4.0',
      'Kiểm toán an ninh độc lập định kỳ bởi Big 4 và các tổ chức quốc tế',
      '100% nhân sự được đào tạo nâng cao ý thức an toàn thông tin định kỳ',
      'Quy trình bảo mật thông tin khách hàng tuyệt đối theo chuẩn Zero Trust'
    ]
  }
];

// 6. CƠ HỘI NGHỀ NGHIỆP
export const careerOpenings: CareerOpening[] = [
  {
    id: 'job-01',
    title: 'Senior Cloud Solutions Architect',
    department: 'Khối Giải pháp Doanh nghiệp',
    location: 'Hà Nội / TP.HCM',
    type: 'Toàn thời gian',
    experience: '4+ năm kinh nghiệm',
    deadline: '30/09/2026',
    tags: ['Cloud Architecture', 'OpenStack', 'Kubernetes', 'Presales']
  },
  {
    id: 'job-02',
    title: 'Chuyên viên Kỹ thuật Vận hành Data Center (Tier 3)',
    department: 'Khối Hạ tầng Trung tâm Dữ liệu',
    location: 'Hà Nội (Hòa Lạc) / TP.HCM (Tân Bình)',
    type: 'Toàn thời gian (Ca kíp)',
    experience: '2+ năm kinh nghiệm',
    deadline: '15/10/2026',
    tags: ['Data Center Facility', 'HVAC/Chiller', 'UPS System', 'TIA-942']
  },
  {
    id: 'job-03',
    title: 'Chuyên gia An ninh Mạng & SOC L3 Analyst',
    department: 'Khối An toàn Thông tin (Security)',
    location: 'Hà Nội',
    type: 'Toàn thời gian',
    experience: '3+ năm kinh nghiệm',
    deadline: '20/10/2026',
    tags: ['SOC Analyst', 'Threat Hunting', 'SIEM/SOAR', 'CISSP/CEH']
  },
  {
    id: 'job-04',
    title: 'Kỹ sư Hạ tầng Điện toán AI / GPU Clusters',
    department: 'Khối Nghiên cứu & Phát triển AI',
    location: 'Hà Nội (Hòa Lạc)',
    type: 'Toàn thời gian',
    experience: '3+ năm kinh nghiệm',
    deadline: '31/10/2026',
    tags: ['NVIDIA GPU', 'HPC/Slurm', 'RDMA/InfiniBand', 'AI Infrastructure']
  },
  {
    id: 'job-05',
    title: 'Enterprise Account Manager (Khách hàng Tài chính - Ngân hàng)',
    department: 'Khối Kinh doanh Giải pháp',
    location: 'Hà Nội / TP.HCM',
    type: 'Toàn thời gian',
    experience: '3+ năm kinh nghiệm',
    deadline: '15/10/2026',
    tags: ['B2B Sales', 'Banking & Finance', 'Cloud Solution', 'Key Account']
  }
];

// 7. THÔNG CÁO BÁO CHÍ & TRUYỀN THÔNG
export const pressReleases: PressRelease[] = [
  {
    id: 'pr-01',
    title: 'Viettel IDC khai trương Đại Trung tâm Dữ liệu xanh lớn nhất Việt Nam tại Hòa Lạc',
    date: '10/04/2024',
    category: 'Sự kiện nổi bật',
    excerpt: 'Với quy mô 21.000m² và 2.400 rack tiêu chuẩn, TTDL Viettel Hòa Lạc là trung tâm dữ liệu đầu tiên tại Việt Nam thiết kế theo tiêu chuẩn công trình xanh, sẵn sàng phục vụ các cụm siêu máy chủ AI công suất cao.',
    source: 'Báo Đầu Tư & Cổng TTĐT Viettel',
    featured: true
  },
  {
    id: 'pr-02',
    title: 'Viettel IDC và Qualcomm hợp tác chiến lược thúc đẩy giải pháp tính toán biên AI Edge và 5G Private',
    date: '28/05/2024',
    category: 'Hợp tác quốc tế',
    excerpt: 'Hai bên ký kết thỏa thuận hợp tác nhằm tích hợp nền tảng vi xử lý AI Snapdragon và hạ tầng Cloud của Viettel IDC, triển khai các giải pháp Nhà máy thông minh (Smart Factory) và Đô thị thông minh tại Việt Nam.',
    source: 'Tạp chí CNTT & Truyền thông',
    featured: true
  },
  {
    id: 'pr-03',
    title: 'Viettel IDC lần thứ 5 liên tiếp nhận giải thưởng "Nhà cung cấp Dịch vụ Data Center của năm" từ Frost & Sullivan',
    date: '15/11/2024',
    category: 'Giải thưởng',
    excerpt: 'Tổ chức nghiên cứu thị trường quốc tế Frost & Sullivan tiếp tục ghi nhận Viettel IDC dẫn đầu thị trường Việt Nam về năng lực hạ tầng, đổi mới công nghệ và cam kết chất lượng dịch vụ khách hàng.',
    source: 'Frost & Sullivan Asia-Pacific'
  },
  {
    id: 'pr-04',
    title: 'Viettel IDC đạt chứng nhận bảo mật thanh toán quốc tế PCI-DSS phiên bản mới nhất v4.0',
    date: '22/01/2025',
    category: 'Chứng chỉ & Tiêu chuẩn',
    excerpt: 'Chứng chỉ khẳng định năng lực bảo mật hạ tầng Cloud và Trung tâm dữ liệu của Viettel IDC đáp ứng các tiêu chuẩn an ninh nghiêm ngặt nhất cho hệ thống ngân hàng, ví điện tử và cổng thanh toán quốc tế.',
    source: 'Thời báo Ngân hàng'
  }
];

// 8. CHỨNG CHỈ & TIÊU CHUẨN QUỐC TẾ
export const certificationsList: CertificationItem[] = [
  {
    name: 'ANSI/TIA-942 Rated 3 (Design & Facility)',
    code: 'TIA-942 Rated 3',
    category: 'Hạ tầng Data Center',
    issuedBy: 'Tổ chức Tiêu chuẩn Viễn thông Quốc tế (TIA/EPI)',
    description: 'Chứng nhận toàn diện về thiết kế và cơ sở hạ tầng vật lý của Data Center, đảm bảo độ sẵn sàng 99.982%, có khả năng bảo trì đồng thời (Concurrently Maintainable) không làm gián đoạn hệ thống.',
    scope: 'Áp dụng cho 9 Data Center của Viettel IDC trên toàn quốc'
  },
  {
    name: 'ISO/IEC 27001:2022',
    code: 'ISO 27001',
    category: 'An toàn Thông tin',
    issuedBy: 'Tổ chức Tiêu chuẩn Hóa Quốc tế (ISO)',
    description: 'Hệ thống quản lý an toàn thông tin toàn diện, đảm bảo tính bảo mật, toàn vẹn và sẵn sàng của dữ liệu khách hàng theo chuẩn quốc tế mới nhất.',
    scope: 'Toàn bộ hạ tầng Cloud, Data Center và dịch vụ Quản trị CNTT'
  },
  {
    name: 'ISO/IEC 27017:2015',
    code: 'ISO 27017',
    category: 'Bảo mật Điện toán Đám mây',
    issuedBy: 'Tổ chức Tiêu chuẩn Hóa Quốc tế (ISO)',
    description: 'Bộ quy tắc thực hành bảo mật chuyên biệt cho các nhà cung cấp dịch vụ điện toán đám mây và khách hàng sử dụng dịch vụ đám mây.',
    scope: 'Hệ sinh thái Viettel Cloud (Public Cloud, Private Cloud, Hybrid Cloud)'
  },
  {
    name: 'PCI-DSS v4.0 (Payment Card Industry Data Security Standard)',
    code: 'PCI-DSS v4.0',
    category: 'An ninh Dữ liệu Thanh toán',
    issuedBy: 'PCI Security Standards Council (Visa, Mastercard, JCB, Amex)',
    description: 'Chuẩn bảo mật dữ liệu thẻ thanh toán quốc tế cao cấp nhất, yêu cầu kiểm soát an ninh mạng nghiêm ngặt chống rò rỉ và tấn công dữ liệu tài chính.',
    scope: 'Hạ tầng Colocation & Cloud phục vụ khối Ngân hàng và Fintech'
  },
  {
    name: 'ISO 22301:2019',
    code: 'ISO 22301',
    category: 'Kinh doanh Liên tục (BCM)',
    issuedBy: 'Tổ chức Tiêu chuẩn Hóa Quốc tế (ISO)',
    description: 'Hệ thống quản lý tính liên tục trong kinh doanh, bảo đảm năng lực ứng phó, khôi phục hệ thống tức thì khi xảy ra sự cố thảm họa tự nhiên hoặc kỹ thuật.',
    scope: 'Quy trình vận hành Data Center và Trung tâm Hỗ trợ Kỹ thuật 24/7'
  },
  {
    name: 'ISO 50001:2018 & ISO 14001:2015',
    code: 'ISO 50001 / 14001',
    category: 'Năng lượng & Môi trường',
    issuedBy: 'Tổ chức Tiêu chuẩn Hóa Quốc tế (ISO)',
    description: 'Tiêu chuẩn quản lý năng lượng và quản lý môi trường, tối ưu hóa tiêu thụ điện năng và giảm thiểu lượng phát thải carbon trong toàn bộ chuỗi vận hành.',
    scope: 'Hệ thống Trung tâm Dữ liệu Xanh (Green Data Center)'
  }
];

// 9. THÔNG TIN LIÊN HỆ & VĂN PHÒNG
export const officeLocations = [
  {
    city: 'Hà Nội',
    address: 'Tầng 16, Hapulico Center Building, Số 85 Vũ Trọng Phụng, P.Thanh Xuân, TP. Hà Nội',
    phones: ['024 6272 8866', '024 6269 2129'],
    phone: '024 6272 8866',
    email: 'sales@viettelidc.com.vn',
    isHeadquarter: true
  },
  {
    city: 'Đà Nẵng',
    address: 'Tầng 2, Tòa nhà Viettel Hải Châu, Số 58 Xô Viết Nghệ Tĩnh, P.Hòa Cường, TP. Đà Nẵng',
    phones: ['0236 651 0011', '0236 651 0022'],
    phone: '0236 651 0011',
    email: 'sales.danang@viettelidc.com.vn',
    isHeadquarter: false
  },
  {
    city: 'TP. Hồ Chí Minh',
    address: 'Tầng 23, Tòa nhà Viettel Complex, Số 285 Cách mạng Tháng 8, P. Hòa Hưng, TP. HCM',
    phones: ['028 6288 5335', '028 6292 5224'],
    phone: '028 6288 5335',
    email: 'sales.hcm@viettelidc.com.vn',
    isHeadquarter: false
  }
];
