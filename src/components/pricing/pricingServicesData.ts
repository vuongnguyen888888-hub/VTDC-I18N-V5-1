export interface PricingServiceOption {
  id: string;
  name: string;
  priceMonthly: number;
  description?: string;
  badge?: string;
}

export interface PricingServiceSpec {
  id: string;
  label: string;
  type: 'slider' | 'select' | 'counter' | 'toggle';
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  defaultValue: number | string;
  unitPriceMonthly?: number; // per unit cost
  options?: PricingServiceOption[];
}

export interface PricingServiceItem {
  id: string;
  code: string;
  numId: number; // 1 to 28
  name: string;
  group: string; // Group Name in Vietnamese
  groupId: string;
  description: string;
  startingPriceMonthly: number;
  priceUnit: string; // 'tháng' | 'năm' | 'dự án' | 'GB/tháng' | 'RACK/tháng'
  badge?: string;
  features: string[];
  canonicalPath?: string;
  specs: PricingServiceSpec[];
  // Helper formula function signature or calculation logic override
  customCalculate?: (specsState: Record<string, any>) => number;
}

export const PRICING_GROUPS = [
  { id: 'all', name: 'Tất cả dịch vụ (28)' },
  { id: 'cloud-compute', name: 'Điện toán đám mây' },
  { id: 'data-center', name: 'Trung tâm dữ liệu' },
  { id: 'cloud-storage', name: 'Lưu trữ đám mây' },
  { id: 'cloud-security', name: 'Bảo mật đám mây' },
  { id: 'container', name: 'Container' },
  { id: 'hosting', name: 'Hosting & Tên miền' },
  { id: 'enterprise-app', name: 'Ứng dụng doanh nghiệp' },
  { id: 'cloud-database', name: 'Cơ sở dữ liệu đám mây' },
  { id: 'integration', name: 'Tích hợp & Messaging' },
];

export const ALL_PRICING_SERVICES: PricingServiceItem[] = [
  // ----------------------------------------------------
  // NHÓM 1: ĐIỆN TOÁN ĐÁM MÂY (1 - 3)
  // ----------------------------------------------------
  {
    id: 'cloud-server',
    code: 'SVC-CS-01',
    numId: 1,
    name: 'Viettel Cloud Server',
    group: 'Điện toán đám mây',
    groupId: 'cloud-compute',
    description: 'Máy chủ ảo dùng riêng trên hạ tầng Cloud Enterprise tiêu chuẩn PCI-DSS & ISO 27001.',
    startingPriceMonthly: 290000,
    priceUnit: 'tháng',
    badge: 'POPULAR',
    features: ['100% SSD NVMe Enterprise', 'SLA 99.99% Khả dụng', 'Băng thông 100Mbps miễn phí', 'Khởi tạo tức thì trong 30s'],
    canonicalPath: '/services/compute/cloud-server/',
    specs: [
      { id: 'vcpu', label: 'vCPU (Cores)', type: 'slider', min: 1, max: 64, step: 1, unit: 'Cores', defaultValue: 2, unitPriceMonthly: 120000 },
      { id: 'ram', label: 'Dung lượng RAM', type: 'slider', min: 1, max: 256, step: 1, unit: 'GB', defaultValue: 4, unitPriceMonthly: 80000 },
      { id: 'storage', label: 'Lưu trữ SSD NVMe', type: 'slider', min: 20, max: 2000, step: 10, unit: 'GB', defaultValue: 50, unitPriceMonthly: 2500 },
      { id: 'ip', label: 'Số lượng IP Public', type: 'counter', min: 1, max: 10, step: 1, unit: 'IP', defaultValue: 1, unitPriceMonthly: 80000 },
    ],
  },
  {
    id: 'virtual-private-cloud',
    code: 'SVC-VPC-02',
    numId: 2,
    name: 'Viettel Virtual Private Cloud (VPC)',
    group: 'Điện toán đám mây',
    groupId: 'cloud-compute',
    description: 'Đám mây dùng riêng ảo hóa (Private Cloud) với vRouter, Security Group và IP riêng biệt.',
    startingPriceMonthly: 1500000,
    priceUnit: 'tháng',
    badge: 'ENTERPRISE',
    features: ['Hạ tầng dành riêng isolated', 'Tùy chỉnh vRouter/vFirewall', 'Kết nối Direct Connect/VPN', 'Quản trị vCloud Director'],
    canonicalPath: '/services/compute/virtual-private-cloud/',
    specs: [
      { id: 'vcpu_pool', label: 'Tổng vCPU Pool', type: 'slider', min: 4, max: 128, step: 2, unit: 'Cores', defaultValue: 8, unitPriceMonthly: 110000 },
      { id: 'ram_pool', label: 'Tổng RAM Pool', type: 'slider', min: 8, max: 512, step: 8, unit: 'GB', defaultValue: 16, unitPriceMonthly: 75000 },
      { id: 'storage_pool', label: 'Lưu trữ NVMe Pool', type: 'slider', min: 100, max: 5000, step: 50, unit: 'GB', defaultValue: 200, unitPriceMonthly: 2200 },
      { id: 'gateway', label: 'Gói vGateway & vRouter', type: 'select', defaultValue: 'standard', options: [
        { id: 'standard', name: 'Standard Router (1Gbps)', priceMonthly: 500000 },
        { id: 'high_perf', name: 'High-Perf Router (10Gbps)', priceMonthly: 1800000 },
      ]},
    ],
  },
  {
    id: 'cloud-gpu',
    code: 'SVC-GPU-03',
    numId: 3,
    name: 'Viettel Cloud GPU',
    group: 'Điện toán đám mây',
    groupId: 'cloud-compute',
    description: 'Máy chủ tính năng cao tích hợp card đồ họa NVIDIA A10G, L40S & H100 cho AI/ML, LLM & Rendering.',
    startingPriceMonthly: 2500000,
    priceUnit: 'tháng',
    badge: 'AI READY',
    features: ['NVIDIA Tensor Core GPUs', 'Tăng tốc huấn luyện mô hình AI', 'PCIe Gen 4/Gen 5 Ultra Speed', 'CUDA, PyTorch & TensorFlow pre-installed'],
    canonicalPath: '/services/compute/cloud-gpu/',
    specs: [
      { id: 'gpu_type', label: 'Loại Card GPU NVIDIA', type: 'select', defaultValue: 'a10g', options: [
        { id: 'a10g', name: 'NVIDIA A10G (24GB VRAM) - AI/3D', priceMonthly: 2500000 },
        { id: 'l40s', name: 'NVIDIA L40S (48GB VRAM) - Generative AI', priceMonthly: 5800000 },
        { id: 'h100', name: 'NVIDIA H100 SXM5 (80GB VRAM) - Deep Learning', priceMonthly: 18500000 },
      ]},
      { id: 'gpu_count', label: 'Số lượng Card GPU', type: 'counter', min: 1, max: 8, step: 1, unit: 'Card', defaultValue: 1, unitPriceMonthly: 0 },
      { id: 'vcpu', label: 'vCPU kèm theo', type: 'slider', min: 8, max: 64, step: 4, unit: 'Cores', defaultValue: 16, unitPriceMonthly: 100000 },
      { id: 'ram', label: 'Dung lượng RAM', type: 'slider', min: 32, max: 256, step: 16, unit: 'GB', defaultValue: 64, unitPriceMonthly: 70000 },
    ],
    customCalculate: (specs) => {
      let gpuBase = 2500000;
      if (specs.gpu_type === 'l40s') gpuBase = 5800000;
      if (specs.gpu_type === 'h100') gpuBase = 18500000;
      const count = Number(specs.gpu_count || 1);
      const vcpu = Number(specs.vcpu || 16);
      const ram = Number(specs.ram || 64);
      return (gpuBase * count) + (vcpu * 100000) + (ram * 70000);
    }
  },

  // ----------------------------------------------------
  // NHÓM 2: TRUNG TÂM DỮ LIỆU (4)
  // ----------------------------------------------------
  {
    id: 'colocation',
    code: 'SVC-DC-04',
    numId: 4,
    name: 'Thuê chỗ đặt thiết bị Colocation',
    group: 'Trung tâm dữ liệu',
    groupId: 'data-center',
    description: 'Chỗ đặt máy chủ vật lý tại 9 Data Center Viettel chuẩn ANSI/TIA-942 Rated 3 toàn quốc.',
    startingPriceMonthly: 1800000,
    priceUnit: 'tháng',
    badge: 'TIA-942 RATED 3',
    features: ['Điện kép N+1/2N & Máy phát 100%', 'Điều hòa chính xác N+2 Precision Cooling', 'Giám sát An ninh 6 lớp 24/7/365', 'Cam kết uptime 99.99%'],
    canonicalPath: '/services/data-center/colocation/',
    specs: [
      { id: 'rack_unit', label: 'Không gian Rack', type: 'select', defaultValue: '1u', options: [
        { id: '1u', name: '1 U Rack Space (Power 350W)', priceMonthly: 1800000 },
        { id: '2u', name: '2 U Rack Space (Power 600W)', priceMonthly: 2800000 },
        { id: '4u', name: '4 U Rack Space (Power 1000W)', priceMonthly: 4800000 },
        { id: 'full_rack_3kw', name: 'Trọn tủ Rack 42U (Công suất 3KW)', priceMonthly: 16500000 },
        { id: 'full_rack_5kw', name: 'Trọn tủ Rack 42U (Công suất 5KW)', priceMonthly: 22000000 },
      ]},
      { id: 'extra_power', label: 'Công suất điện bổ sung', type: 'counter', min: 0, max: 10, step: 1, unit: 'kW', defaultValue: 0, unitPriceMonthly: 1800000 },
      { id: 'location', label: 'Khu vực Data Center', type: 'select', defaultValue: 'hoalac', options: [
        { id: 'hoalac', name: 'TTDL Hòa Lạc (Green DC - Hà Nội)', priceMonthly: 0 },
        { id: 'phapvan', name: 'TTDL Pháp Vân (Hà Nội)', priceMonthly: 0 },
        { id: 'tanbinh', name: 'TTDL Tân Bình (TP. Hồ Chí Minh)', priceMonthly: 0 },
        { id: 'binhduong', name: 'TTDL Bình Dương (Bình Dương)', priceMonthly: 0 },
        { id: 'danang', name: 'TTDL Đà Nẵng (Đà Nẵng)', priceMonthly: 0 },
      ]},
    ],
  },

  // ----------------------------------------------------
  // NHÓM 3: LƯU TRỮ ĐÁM MÂY (5 - 8)
  // ----------------------------------------------------
  {
    id: 'cloud-object-storage',
    code: 'SVC-COS-05',
    numId: 5,
    name: 'Viettel Cloud Object Storage',
    group: 'Lưu trữ đám mây',
    groupId: 'cloud-storage',
    description: 'Lưu trữ đối tượng chuẩn S3 API, không giới hạn dung lượng, thích hợp cho Backup, Media & Data Lake.',
    startingPriceMonthly: 45000,
    priceUnit: 'tháng',
    badge: 'S3 COMPATIBLE',
    features: ['Chuẩn S3 API tương thích 100%', 'Độ bền dữ liệu 99.999999999% (11 số 9)', 'Mã hóa dữ liệu AES-256', 'Miễn phí Egress 1TB đầu tiên'],
    canonicalPath: '/services/storage/object-storage/',
    specs: [
      { id: 'capacity', label: 'Dung lượng lưu trữ', type: 'slider', min: 100, max: 50000, step: 100, unit: 'GB', defaultValue: 500, unitPriceMonthly: 450 },
      { id: 'tier', label: 'Cấp độ lưu trữ', type: 'select', defaultValue: 'standard', options: [
        { id: 'standard', name: 'Standard (Truy xuất thường xuyên)', priceMonthly: 0 },
        { id: 'infrequent', name: 'Infrequent Access (Lưu lâu dài - Giảm 30%)', priceMonthly: -100 },
      ]},
    ],
    customCalculate: (specs) => {
      const cap = Number(specs.capacity || 500);
      let rate = 450;
      if (specs.tier === 'infrequent') rate = 320;
      return cap * rate;
    }
  },
  {
    id: 'cloud-file-storage',
    code: 'SVC-CFS-06',
    numId: 6,
    name: 'Viettel Cloud File Storage',
    group: 'Lưu trữ đám mây',
    groupId: 'cloud-storage',
    description: 'Hệ thống lưu trữ tệp chia sẻ NFS / CIFS tốc độ cao dành cho ứng dụng Enterprise, CMS & Database.',
    startingPriceMonthly: 120000,
    priceUnit: 'tháng',
    badge: 'HIGH IOPS',
    features: ['Hỗ trợ giao thức NFSv3/v4 & SMB/CIFS', 'Tự động co giãn theo nhu cầu', 'Truy xuất đồng thời từ hàng nghìn VM', 'Snapshots phục hồi dữ liệu tức thì'],
    canonicalPath: '/services/storage/file-storage/',
    specs: [
      { id: 'file_capacity', label: 'Dung lượng File Storage', type: 'slider', min: 100, max: 10000, step: 50, unit: 'GB', defaultValue: 200, unitPriceMonthly: 1200 },
      { id: 'iops_level', label: 'Cấp độ Performance IOPS', type: 'select', defaultValue: 'std_iops', options: [
        { id: 'std_iops', name: 'Standard IOPS (3,000 IOPS)', priceMonthly: 0 },
        { id: 'high_iops', name: 'Ultra High IOPS (10,000 IOPS)', priceMonthly: 300000 },
      ]},
    ],
  },
  {
    id: 'cloud-dr',
    code: 'SVC-DR-07',
    numId: 7,
    name: 'Viettel Cloud DR (Disaster Recovery - DRaaS)',
    group: 'Lưu trữ đám mây',
    groupId: 'cloud-storage',
    description: 'Giải pháp khôi phục sau thảm họa tự động, đồng bộ dữ liệu thời gian thực giữa 2 Data Center.',
    startingPriceMonthly: 810000,
    priceUnit: 'tháng',
    badge: 'DISASTER RECOVERY',
    features: ['RPO dưới vài giây & RTO dưới 15 phút', 'Chuyển đổi dự phòng Failover 1-Click', 'Đồng bộ giữa các Data Center khác nhau', 'Hỗ trợ VMware, Hyper-V & Physical Server'],
    canonicalPath: '/services/storage/disaster-recovery/',
    specs: [
      { id: 'vm_count', label: 'Số lượng VM cần bảo vệ', type: 'counter', min: 1, max: 50, step: 1, unit: 'VMs', defaultValue: 2, unitPriceMonthly: 650000 },
      { id: 'replica_storage', label: 'Kho lưu trữ Replication', type: 'slider', min: 200, max: 5000, step: 100, unit: 'GB', defaultValue: 500, unitPriceMonthly: 800 },
    ],
  },
  {
    id: 'cloud-migration',
    code: 'SVC-MIG-08',
    numId: 8,
    name: 'Viettel Cloud Migration',
    group: 'Lưu trữ đám mây',
    groupId: 'cloud-storage',
    description: 'Dịch vụ chuyển đổi hạ tầng On-premise lên Viettel Cloud an toàn, không gián đoạn dịch vụ.',
    startingPriceMonthly: 3500000,
    priceUnit: 'dự án',
    badge: 'EXPERT MANAGED',
    features: ['Khảo sát & lập phương án kiến trúc', 'Chuyển đổi dữ liệu 0-Downtime', 'Thử nghiệm nghiệm thu trước Cut-over', 'Đội ngũ chuyên gia hỗ trợ 24/7'],
    canonicalPath: '/services/managed-services/cloud-migration/',
    specs: [
      { id: 'migration_package', label: 'Gói Chuyển Đổi Hạ Tầng', type: 'select', defaultValue: 'basic', options: [
        { id: 'basic', name: 'Gói Starter (1 - 5 VMs / Hệ thống nhỏ)', priceMonthly: 3500000 },
        { id: 'medium', name: 'Gói Professional (6 - 20 VMs / Hệ thống vừa)', priceMonthly: 12000000 },
        { id: 'enterprise', name: 'Gói Enterprise (> 20 VMs / Hybrid Cloud)', priceMonthly: 28000000 },
      ]},
    ],
  },

  // ----------------------------------------------------
  // NHÓM 4: BẢO MẬT ĐÁM MÂY (9 - 15)
  // ----------------------------------------------------
  {
    id: 'cloudrity',
    code: 'SVC-SEC-09',
    numId: 9,
    name: 'Viettel Cloudrity (vCloudrity)',
    group: 'Bảo mật đám mây',
    groupId: 'cloud-security',
    description: 'Bộ giải pháp an toàn thông tin toàn diện tích hợp trên Đám mây dành cho Doanh nghiệp.',
    startingPriceMonthly: 1200000,
    priceUnit: 'tháng',
    badge: 'SECURITY SUITE',
    features: ['Phòng chống độc hại Virus/Malware', 'Quản lý lỗ hổng bảo mật Vulnerability Management', 'Giám sát tuân thủ ATTT', 'Cảnh báo mối đe dọa sớm'],
    canonicalPath: '/services/security/cloudrity/',
    specs: [
      { id: 'cloudrity_plan', label: 'Gói Dịch Vụ vCloudrity', type: 'select', defaultValue: 'basic', options: [
        { id: 'basic', name: 'Gói Basic Protection (Dưới 10 VMs)', priceMonthly: 1200000 },
        { id: 'adv', name: 'Gói Advanced Threat Defense (10 - 50 VMs)', priceMonthly: 3500000 },
        { id: 'ent', name: 'Gói Enterprise All-in-one (> 50 VMs)', priceMonthly: 8000000 },
      ]},
    ],
  },
  {
    id: 'cloud-firewall',
    code: 'SVC-SEC-10',
    numId: 10,
    name: 'Viettel Cloud Firewall',
    group: 'Bảo mật đám mây',
    groupId: 'cloud-security',
    description: 'Tường lửa thế hệ mới (NGFW) bảo vệ lưu lượng mạng ứng dụng Cloud khỏi tấn công xâm nhập.',
    startingPriceMonthly: 1500000,
    priceUnit: 'tháng',
    badge: 'NEXT-GEN FIREWALL',
    features: ['Deep Packet Inspection (DPI)', 'Phòng chống xâm nhập IPS/IDS', 'Phân tích ứng dụng L7', 'Chính sách bảo mật linh hoạt'],
    canonicalPath: '/services/security/cloud-firewall/',
    specs: [
      { id: 'throughput', label: 'Băng thông kiểm soát (Throughput)', type: 'select', defaultValue: '100m', options: [
        { id: '100m', name: '100 Mbps Throughput', priceMonthly: 1500000 },
        { id: '500m', name: '500 Mbps Throughput', priceMonthly: 3800000 },
        { id: '1g', name: '1 Gbps Throughput', priceMonthly: 7200000 },
        { id: '5g', name: '5 Gbps High-Speed Throughput', priceMonthly: 18000000 },
      ]},
    ],
  },
  {
    id: 'endpoint-security',
    code: 'SVC-SEC-11',
    numId: 11,
    name: 'Viettel Endpoint Security',
    group: 'Bảo mật đám mây',
    groupId: 'cloud-security',
    description: 'Giải pháp bảo vệ điểm cuối EDR/XDR ngăn chặn Ransomware, Malware trên máy tính & server.',
    startingPriceMonthly: 450000,
    priceUnit: 'tháng',
    badge: 'EDR / XDR',
    features: ['Ngăn chặn Ransomware mã hóa dữ liệu', 'Phân tích hành vi AI Behavioral Engine', 'Cách ly thiết bị nhiễm độc tức thì', 'Quản trị tập trung Cloud Console'],
    canonicalPath: '/services/security/endpoint-security/',
    specs: [
      { id: 'device_count', label: 'Số lượng thiết bị (Máy trạm / Server)', type: 'slider', min: 10, max: 500, step: 5, unit: 'máy', defaultValue: 20, unitPriceMonthly: 45000 },
      { id: 'edr_type', label: 'Cấp độ bảo vệ', type: 'select', defaultValue: 'edr_std', options: [
        { id: 'edr_std', name: 'EDR Standard Protection', priceMonthly: 0 },
        { id: 'xdr_adv', name: 'XDR Advanced + Threat Hunting', priceMonthly: 20000 },
      ]},
    ],
    customCalculate: (specs) => {
      const count = Number(specs.device_count || 20);
      let perDevice = 45000;
      if (specs.edr_type === 'xdr_adv') perDevice = 65000;
      return count * perDevice;
    }
  },
  {
    id: 'virtual-soc',
    code: 'SVC-SEC-12',
    numId: 12,
    name: 'Viettel Virtual SOC (vSOC)',
    group: 'Bảo mật đám mây',
    groupId: 'cloud-security',
    description: 'Trung tâm giám sát điều hành an toàn thông tin 24/7/365 phát hiện và ứng cứu sự cố khẩn cấp.',
    startingPriceMonthly: 5000000,
    priceUnit: 'tháng',
    badge: 'SOC 24/7',
    features: ['Chuyên gia ATTT trực ca 24/7', 'Tích hợp AI SIEM & Threat Intelligence', 'Cam kết thời gian phản ứng SLA 15 phút', 'Báo cáo vi phạm & khuyến nghị vá lỗi'],
    canonicalPath: '/services/security/soc/',
    specs: [
      { id: 'log_sources', label: 'Số lượng Nguồn Log / Thiết bị', type: 'counter', min: 5, max: 100, step: 5, unit: 'nguồn', defaultValue: 10, unitPriceMonthly: 250000 },
      { id: 'sla_level', label: 'Mức độ SLA Phản Ứng', type: 'select', defaultValue: 'sla_std', options: [
        { id: 'sla_std', name: 'SLA Standard (30 phút)', priceMonthly: 2500000 },
        { id: 'sla_vip', name: 'SLA Critical (15 phút)', priceMonthly: 5000000 },
      ]},
    ],
  },
  {
    id: 'anti-ddos',
    code: 'SVC-SEC-13',
    numId: 13,
    name: 'Viettel Anti-DDoS',
    group: 'Bảo mật đám mây',
    groupId: 'cloud-security',
    description: 'Hệ thống lọc rửa lưu lượng tấn công DDoS Layer 3/4/7 quy mô hơn 100Gbps tự động trong vài giây.',
    startingPriceMonthly: 2800000,
    priceUnit: 'tháng',
    badge: '100+ GBPS MITIGATION',
    features: ['Hạ tầng Scrubbing Center tại Việt Nam', 'Phòng chống DDoS L3/L4 & L7 Volumetric', 'Giữ kết nối người dùng thật 100%', 'Báo cáo chi tiết cuộc tấn công'],
    canonicalPath: '/services/security/anti-ddos/',
    specs: [
      { id: 'clean_bandwidth', label: 'Băng thông Bão Hòa / Lọc Rửa', type: 'select', defaultValue: '10g', options: [
        { id: '10g', name: 'Gói 10 Gbps Anti-DDoS Clean', priceMonthly: 2800000 },
        { id: '50g', name: 'Gói 50 Gbps Anti-DDoS Clean', priceMonthly: 8500000 },
        { id: '100g', name: 'Gói 100+ Gbps High-Availability', priceMonthly: 22000000 },
      ]},
    ],
  },
  {
    id: 'cwaf',
    code: 'SVC-SEC-14',
    numId: 14,
    name: 'Viettel CWAF (Cloud Web Application Firewall)',
    group: 'Bảo mật đám mây',
    groupId: 'cloud-security',
    description: 'Tường lửa bảo vệ ứng dụng Web & API chống OWASP Top 10, Botnet và gian lận trực tuyến.',
    startingPriceMonthly: 850000,
    priceUnit: 'tháng',
    badge: 'OWASP TOP 10',
    features: ['Bảo vệ chống SQL Injection, XSS, CSRF', 'Kiểm soát Botnet & Rate Limiting', 'Chứng chỉ SSL/TLS miễn phí', 'Tích hợp CDN gia tăng tốc độ'],
    canonicalPath: '/services/security/cwaf/',
    specs: [
      { id: 'domains', label: 'Số lượng Tên miền Website', type: 'select', defaultValue: '1dom', options: [
        { id: '1dom', name: '1 Domain Website', priceMonthly: 850000 },
        { id: '5dom', name: 'Tối đa 5 Domains Website', priceMonthly: 3200000 },
        { id: 'unlimited', name: 'Unlimited Domains Enterprise', priceMonthly: 9500000 },
      ]},
      { id: 'traffic_limit', label: 'Lưu lượng sạch quét / tháng', type: 'select', defaultValue: '100gb', options: [
        { id: '100gb', name: '100 GB Traffic', priceMonthly: 0 },
        { id: '1tb', name: '1 TB Traffic', priceMonthly: 500000 },
        { id: '5tb', name: '5 TB Traffic', priceMonthly: 1800000 },
      ]},
    ],
  },
  {
    id: 'vcsmp',
    code: 'SVC-SEC-15',
    numId: 15,
    name: 'Viettel Cyber Security Maturity Program (vCSMP)',
    group: 'Bảo mật đám mây',
    groupId: 'cloud-security',
    description: 'Chương trình kiểm thử xâm nhập (Penetration Testing) & tư vấn đánh giá mức độ trưởng thành an toàn thông tin.',
    startingPriceMonthly: 15000000,
    priceUnit: 'dự án',
    badge: 'PEN-TESTING',
    features: ['Kiểm thử Penetration Testing Web/Mobile/API', 'Rà soát lỗ hổng hệ thống & mã nguồn', 'Tư vấn chứng chỉ ISO 27001 & PCI-DSS', 'Cấp chứng nhận An toàn thông tin'],
    canonicalPath: '/services/security/csmp/',
    specs: [
      { id: 'assessment_scope', label: 'Quy mô Đánh giá & Kiểm thử', type: 'select', defaultValue: 'basic_pentest', options: [
        { id: 'basic_pentest', name: 'Đánh giá an toàn thông tin cơ bản (1 System)', priceMonthly: 15000000 },
        { id: 'deep_pentest', name: 'Chuyên sâu Penetration Testing (Web + App + API)', priceMonthly: 45000000 },
        { id: 'iso_consult', name: 'Tư vấn tuân thủ ISO 27001 / PCI-DSS trọn gói', priceMonthly: 85000000 },
      ]},
    ],
  },

  // ----------------------------------------------------
  // NHÓM 5: CONTAINER (16)
  // ----------------------------------------------------
  {
    id: 'voks',
    code: 'SVC-K8S-16',
    numId: 16,
    name: 'Viettel Open Kubernetes Service (vOKS)',
    group: 'Container',
    groupId: 'container',
    description: 'Dịch vụ Kubernetes quản trị (Managed K8s) tự động hóa triển khai, mở rộng microservices.',
    startingPriceMonthly: 1200000,
    priceUnit: 'tháng',
    badge: 'CNCF CERTIFIED',
    features: ['Tự động Auto-scaling Pods & Nodes', 'Tích hợp Load Balancer & Storage Class', 'CNCF Certified Kubernetes', 'Control Plane High Availability'],
    canonicalPath: '/services/containers/kubernetes-service/',
    specs: [
      { id: 'control_plane', label: 'Cấu hình Master Node (Control Plane)', type: 'select', defaultValue: 'std_cp', options: [
        { id: 'std_cp', name: 'Single Master (Phù hợp Dev/Test)', priceMonthly: 1200000 },
        { id: 'ha_cp', name: 'High-Availability 3 Masters (Phù hợp Production)', priceMonthly: 2800000 },
      ]},
      { id: 'worker_nodes', label: 'Số lượng Worker Nodes (Cloud Server)', type: 'counter', min: 1, max: 32, step: 1, unit: 'Nodes', defaultValue: 3, unitPriceMonthly: 450000 },
    ],
  },

  // ----------------------------------------------------
  // NHÓM 6: HOSTING (17 - 20)
  // ----------------------------------------------------
  {
    id: 'domain',
    code: 'SVC-HST-17',
    numId: 17,
    name: 'Viettel Domain (Tên miền)',
    group: 'Hosting & Tên miền',
    groupId: 'hosting',
    description: 'Đăng ký và quản lý tên miền quốc gia .VN & quốc tế chính thức từ Nhà cung cấp Viettel IDC.',
    startingPriceMonthly: 280000,
    priceUnit: 'năm',
    badge: 'VNNIC REGISTRAR',
    features: ['Đại lý chính thức VNNIC & ICANN', 'DNS Anycast tốc độ truy cập cao', 'Bảo mật Privacy Protection', 'Bảng điều khiển quản trị tự động'],
    canonicalPath: '/services/domain-hosting/domain/',
    specs: [
      { id: 'tld', label: 'Đuôi tên miền (TLD)', type: 'select', defaultValue: 'dot_vn', options: [
        { id: 'dot_com', name: '.COM (Tên miền quốc tế)', priceMonthly: 280000 },
        { id: 'dot_net', name: '.NET (Tên miền mạng)', priceMonthly: 320000 },
        { id: 'dot_vn', name: '.VN (Tên miền quốc gia Việt Nam)', priceMonthly: 550000 },
        { id: 'dot_com_vn', name: '.COM.VN (Tên miền thương mại VN)', priceMonthly: 450000 },
      ]},
      { id: 'years', label: 'Thời hạn đăng ký', type: 'counter', min: 1, max: 5, step: 1, unit: 'Năm', defaultValue: 1, unitPriceMonthly: 0 },
    ],
    customCalculate: (specs) => {
      let base = 550000;
      if (specs.tld === 'dot_com') base = 280000;
      if (specs.tld === 'dot_net') base = 320000;
      if (specs.tld === 'dot_com_vn') base = 450000;
      const yrs = Number(specs.years || 1);
      return base * yrs;
    }
  },
  {
    id: 'web-hosting',
    code: 'SVC-HST-18',
    numId: 18,
    name: 'Viettel Web Hosting',
    group: 'Hosting & Tên miền',
    groupId: 'hosting',
    description: 'Dịch vụ lưu trữ Website NVMe tốc độ cao tích hợp cPanel / DirectAdmin, SSL miễn phí.',
    startingPriceMonthly: 35000,
    priceUnit: 'tháng',
    badge: 'NVME POWERED',
    features: ['Lưu trữ SSD NVMe siêu tốc', 'Miễn phí chứng chỉ SSL Let\'s Encrypt', 'Tự động Backup hàng ngày', 'Hỗ trợ PHP 8.x, Node.js & Python'],
    canonicalPath: '/services/domain-hosting/web-hosting/',
    specs: [
      { id: 'hosting_plan', label: 'Gói Web Hosting', type: 'select', defaultValue: 'biz', options: [
        { id: 'personal', name: 'Gói Cá Nhân (1GB SSD NVMe)', priceMonthly: 35000 },
        { id: 'biz', name: 'Gói Doanh Nghiệp (5GB SSD NVMe)', priceMonthly: 95000 },
        { id: 'pro', name: 'Gói Chuyên Nghiệp (15GB SSD NVMe)', priceMonthly: 195000 },
        { id: 'ecom', name: 'Gói E-Commerce Pro (30GB NVMe)', priceMonthly: 390000 },
      ]},
    ],
  },
  {
    id: 'email-hosting',
    code: 'SVC-HST-19',
    numId: 19,
    name: 'Viettel Email Hosting',
    group: 'Hosting & Tên miền',
    groupId: 'hosting',
    description: 'Email doanh nghiệp theo tên miền riêng uy tín, chống Spam/Virus 99.9%, không rơi vào Inbox rác.',
    startingPriceMonthly: 120000,
    priceUnit: 'tháng',
    badge: 'HIGH DELIVERABILITY',
    features: ['IP sạch gửi mail vào Inbox 99.9%', 'Tích hợp SpamAssassin & Antivirus', 'Webmail hiện đại & đồng bộ Outlook', 'Hỗ trợ cấu hình DKIM, SPF, DMARC'],
    canonicalPath: '/services/domain-hosting/email-hosting/',
    specs: [
      { id: 'email_package', label: 'Gói Dung Lượng Email', type: 'select', defaultValue: 'm20', options: [
        { id: 'm5', name: 'Gói 5 Mailbox (Tổng 10GB Storage)', priceMonthly: 120000 },
        { id: 'm20', name: 'Gói 20 Mailbox (Tổng 40GB Storage)', priceMonthly: 380000 },
        { id: 'm50', name: 'Gói 50 Mailbox (Tổng 100GB Storage)', priceMonthly: 850000 },
        { id: 'm100', name: 'Gói 100 Mailbox Enterprise', priceMonthly: 1500000 },
      ]},
    ],
  },
  {
    id: 'ssl',
    code: 'SVC-HST-20',
    numId: 20,
    name: 'Viettel SSL (Chứng thư số)',
    group: 'Hosting & Tên miền',
    groupId: 'hosting',
    description: 'Chứng thư số bảo mật SSL/TLS mã hóa HTTPS từ Sectigo, DigiCert cho Website & Portal.',
    startingPriceMonthly: 250000,
    priceUnit: 'năm',
    badge: 'HTTPS SECURE',
    features: ['Mã hóa SHA-256 / 2048-bit', 'Bảo hiểm giao dịch lên tới $1,750,000', 'Tăng điểm xanh độ tin cậy SEO Google', 'Cấp phát tức thì trong 5 phút'],
    canonicalPath: '/services/security/ssl/',
    specs: [
      { id: 'ssl_type', label: 'Loại Chứng Thư Số SSL', type: 'select', defaultValue: 'sectigo_dv', options: [
        { id: 'sectigo_dv', name: 'Sectigo DV Single Domain', priceMonthly: 250000 },
        { id: 'sectigo_wildcard', name: 'Sectigo Wildcard DV (*.domain.com)', priceMonthly: 1200000 },
        { id: 'digicert_ov', name: 'DigiCert Organization Validation (OV)', priceMonthly: 3800000 },
        { id: 'digicert_ev', name: 'DigiCert Extended Validation (EV Green Bar)', priceMonthly: 7500000 },
      ]},
    ],
  },

  // ----------------------------------------------------
  // NHÓM 7: ỨNG DỤNG DOANH NGHIỆP (21 - 24)
  // ----------------------------------------------------
  {
    id: 'microsoft-365',
    code: 'SVC-APP-21',
    numId: 21,
    name: 'Microsoft 365',
    group: 'Ứng dụng doanh nghiệp',
    groupId: 'enterprise-app',
    description: 'Bộ ứng dụng văn phòng đám mây chính hãng Microsoft (Word, Excel, Teams, Outlook, Exchange).',
    startingPriceMonthly: 72000,
    priceUnit: 'user/tháng',
    badge: 'OFFICIAL PARTNER',
    features: ['Bản quyền Microsoft chính hãng', 'Tặng 1TB OneDrive Cloud Storage/User', 'Họp trực tuyến Microsoft Teams 300 người', 'Hỗ trợ kỹ thuật & xuất hóa đơn VAT'],
    canonicalPath: '/services/digital-workplace/microsoft-365/',
    specs: [
      { id: 'm365_plan', label: 'Gói Bản Quyền Microsoft 365', type: 'select', defaultValue: 'basic', options: [
        { id: 'basic', name: 'M365 Business Basic (Web + Mobile App)', priceMonthly: 72000 },
        { id: 'standard', name: 'M365 Business Standard (Đầy đủ Desktop App)', priceMonthly: 265000 },
        { id: 'premium', name: 'M365 Business Premium (Bảo mật nâng cao)', priceMonthly: 48000 },
      ]},
      { id: 'user_count', label: 'Số lượng Người dùng (Users)', type: 'counter', min: 1, max: 200, step: 1, unit: 'Users', defaultValue: 5, unitPriceMonthly: 0 },
    ],
    customCalculate: (specs) => {
      let perUser = 72000;
      if (specs.m365_plan === 'standard') perUser = 265000;
      if (specs.m365_plan === 'premium') perUser = 480000;
      const users = Number(specs.user_count || 5);
      return perUser * users;
    }
  },
  {
    id: 'viettel-drive',
    code: 'SVC-APP-22',
    numId: 22,
    name: 'Viettel Drive',
    group: 'Ứng dụng doanh nghiệp',
    groupId: 'enterprise-app',
    description: 'Kho lưu trữ và chia sẻ tệp tin doanh nghiệp bảo mật nội địa, đáp ứng quy định an toàn dữ liệu.',
    startingPriceMonthly: 150000,
    priceUnit: 'tháng',
    badge: 'DATA SOVEREIGNTY',
    features: ['Lưu trữ trên Data Center Viettel', 'Phân quyền thư mục & mật khẩu link chia sẻ', 'Đồng bộ đa thiết bị Windows, macOS, iOS, Android', 'Tích hợp đăng nhập Single Sign-On (SSO)'],
    canonicalPath: '/services/digital-workplace/drive/',
    specs: [
      { id: 'drive_capacity', label: 'Dung lượng Kho Lưu Trữ', type: 'select', defaultValue: '500gb', options: [
        { id: '100gb', name: '100 GB Storage', priceMonthly: 150000 },
        { id: '500gb', name: '500 GB Storage', priceMonthly: 550000 },
        { id: '1tb', name: '1 TB Storage', priceMonthly: 980000 },
        { id: '5tb', name: '5 TB Storage', priceMonthly: 3900000 },
      ]},
    ],
  },
  {
    id: 'cloud-pc',
    code: 'SVC-APP-23',
    numId: 23,
    name: 'Viettel Cloud PC',
    group: 'Ứng dụng doanh nghiệp',
    groupId: 'enterprise-app',
    description: 'Máy tính ảo công nghệ đám mây làm việc từ xa mượt mà trên mọi thiết bị di động hay Thin Client.',
    startingPriceMonthly: 320000,
    priceUnit: 'máy/tháng',
    badge: 'REMOTE WORK',
    features: ['Truy cập từ bất kỳ trình duyệt / App', 'Dữ liệu lưu an toàn tại Data Center', 'Sẵn sàng Windows 10/11 Pro pre-installed', 'Tiết kiệm chi phí đầu tư phần cứng'],
    canonicalPath: '/services/digital-workplace/cloud-pc/',
    specs: [
      { id: 'pc_config', label: 'Cấu hình Máy Tính Ảo Cloud PC', type: 'select', defaultValue: 'std', options: [
        { id: 'entry', name: 'Gói Cơ bản (2 vCPU / 4GB RAM / 60GB SSD)', priceMonthly: 320000 },
        { id: 'std', name: 'Gói Văn phòng (4 vCPU / 8GB RAM / 100GB SSD)', priceMonthly: 580000 },
        { id: 'pro', name: 'Gói Hiệu năng (8 vCPU / 16GB RAM / 200GB SSD)', priceMonthly: 1150000 },
      ]},
      { id: 'pc_count', label: 'Số lượng Cloud PC', type: 'counter', min: 1, max: 100, step: 1, unit: 'máy', defaultValue: 2, unitPriceMonthly: 0 },
    ],
    customCalculate: (specs) => {
      let perPC = 580000;
      if (specs.pc_config === 'entry') perPC = 320000;
      if (specs.pc_config === 'pro') perPC = 1150000;
      const count = Number(specs.pc_count || 2);
      return perPC * count;
    }
  },
  {
    id: 'cloud-desktop',
    code: 'SVC-APP-24',
    numId: 24,
    name: 'Viettel Cloud Desktop (DaaS)',
    group: 'Ứng dụng doanh nghiệp',
    groupId: 'enterprise-app',
    description: 'Giải pháp hạ tầng màn hình ảo hóa chuyên sâu (Desktop as a Service) tích hợp GPU đồ họa 3D.',
    startingPriceMonthly: 450000,
    priceUnit: 'user/tháng',
    badge: 'GRAPHICS GPU',
    features: ['Hỗ trợ ứng dụng Đồ họa AutoCad, Photoshop', 'Tối ưu cho kỹ sư, kiến trúc sư & thiết kế', 'Quản trị Centralized Management Console', 'Tích hợp vGPU NVIDIA Virtual Workstation'],
    canonicalPath: '/services/digital-workplace/cloud-desktop/',
    specs: [
      { id: 'daas_tier', label: 'Loại Desktop DaaS', type: 'select', defaultValue: 'gpu_daas', options: [
        { id: 'std_daas', name: 'Standard Desktop (2 vCPU / 8GB RAM)', priceMonthly: 450000 },
        { id: 'gpu_daas', name: 'Graphics GPU Desktop (4 vCPU / 16GB RAM + vGPU 4GB)', priceMonthly: 1450000 },
      ]},
      { id: 'daas_users', label: 'Số lượng User Desktop', type: 'counter', min: 1, max: 50, step: 1, unit: 'Users', defaultValue: 1, unitPriceMonthly: 0 },
    ],
    customCalculate: (specs) => {
      let rate = 1450000;
      if (specs.daas_tier === 'std_daas') rate = 450000;
      const count = Number(specs.daas_users || 1);
      return rate * count;
    }
  },

  // ----------------------------------------------------
  // NHÓM 8: CƠ SỞ DỮ LIỆU ĐÁM MÂY (25)
  // ----------------------------------------------------
  {
    id: 'vdbs',
    code: 'SVC-DB-25',
    numId: 25,
    name: 'Viettel Database Service (vDBS)',
    group: 'Cơ sở dữ liệu đám mây',
    groupId: 'cloud-database',
    description: 'Cơ sở dữ liệu đám mây quản trị tự động (PostgreSQL, MySQL, MariaDB, MongoDB) sẵn sàng High-Availability.',
    startingPriceMonthly: 850000,
    priceUnit: 'tháng',
    badge: 'MANAGED DB',
    features: ['Tự động Backup & Restore điểm thời gian PITR', 'Sẵn sàng High Availability 99.99%', 'Tự động nâng cấp bản vá & giám sát Performance', 'Mã hóa dữ liệu nghỉ At-Rest'],
    canonicalPath: '/services/database/database-service/',
    specs: [
      { id: 'db_engine', label: 'Engine CSDL', type: 'select', defaultValue: 'postgres', options: [
        { id: 'postgres', name: 'PostgreSQL Enterprise', priceMonthly: 0 },
        { id: 'mysql', name: 'MySQL Community / Enterprise', priceMonthly: 0 },
        { id: 'mariadb', name: 'MariaDB Managed', priceMonthly: 0 },
        { id: 'mongodb', name: 'MongoDB NoSQL Document', priceMonthly: 200000 },
      ]},
      { id: 'instance_size', label: 'Cấu hình Instance DB', type: 'select', defaultValue: 'small', options: [
        { id: 'small', name: 'Small (2 vCPU / 4GB RAM)', priceMonthly: 850000 },
        { id: 'medium', name: 'Medium (4 vCPU / 8GB RAM)', priceMonthly: 1650000 },
        { id: 'large', name: 'Large (8 vCPU / 16GB RAM)', priceMonthly: 3200000 },
        { id: 'xlarge', name: 'X-Large (16 vCPU / 32GB RAM)', priceMonthly: 6300000 },
      ]},
      { id: 'db_storage', label: 'Lưu trữ SSD High-IOPS', type: 'slider', min: 50, max: 2000, step: 25, unit: 'GB', defaultValue: 100, unitPriceMonthly: 3000 },
      { id: 'ha_mode', label: 'Mô hình triển khai', type: 'select', defaultValue: 'single', options: [
        { id: 'single', name: 'Single Node (Phù hợp Dev/Staging)', priceMonthly: 1 },
        { id: 'ha_cluster', name: 'High Availability (Multi-AZ Cluster HA +100%)', priceMonthly: 2 },
      ]},
    ],
    customCalculate: (specs) => {
      let instancePrice = 850000;
      if (specs.instance_size === 'medium') instancePrice = 1650000;
      if (specs.instance_size === 'large') instancePrice = 3200000;
      if (specs.instance_size === 'xlarge') instancePrice = 6300000;
      if (specs.db_engine === 'mongodb') instancePrice += 200000;

      const storagePrice = Number(specs.db_storage || 100) * 3000;
      const multiplier = specs.ha_mode === 'ha_cluster' ? 2 : 1;
      return (instancePrice + storagePrice) * multiplier;
    }
  },

  // ----------------------------------------------------
  // NHÓM 9: TÍCH HỢP & MESSAGING (26 - 28)
  // ----------------------------------------------------
  {
    id: 'api-gateway',
    code: 'SVC-INT-26',
    numId: 26,
    name: 'Viettel API Gateway',
    group: 'Tích hợp & Messaging',
    groupId: 'integration',
    description: 'Cổng giao tiếp API tập trung quản lý Authentication, Rate Limiting, Logging & Quota cho Microservices.',
    startingPriceMonthly: 350000,
    priceUnit: 'tháng',
    badge: 'MICROSERVICES',
    features: ['Quản lý API Key, OAuth2 & JWT Token', 'Tự động kiểm soát lưu lượng Rate Limiting', 'Giám sát chi tiết Latency & Error Rate', 'Tích hợp WAF bảo mật API'],
    canonicalPath: '/services/database/api-gateway/',
    specs: [
      { id: 'api_calls', label: 'Gói Số Lượng API Calls / Tháng', type: 'select', defaultValue: 'm1', options: [
        { id: 'm1', name: 'Gói 1 Triệu API Calls', priceMonthly: 350000 },
        { id: 'm5', name: 'Gói 5 Triệu API Calls', priceMonthly: 1400000 },
        { id: 'm20', name: 'Gói 20 Triệu API Calls Enterprise', priceMonthly: 4800000 },
      ]},
    ],
  },
  {
    id: 'search-engine',
    code: 'SVC-INT-27',
    numId: 27,
    name: 'Viettel Search Engine (vSE)',
    group: 'Tích hợp & Messaging',
    groupId: 'integration',
    description: 'Công cụ tìm kiếm & phân tích dữ liệu tập trung dựa trên Elasticsearch managed.',
    startingPriceMonthly: 950000,
    priceUnit: 'tháng',
    badge: 'ELASTICSEARCH',
    features: ['Tìm kiếm Full-text Search siêu tốc', 'Phân tích & trực quan hóa dữ liệu Kibana', 'Cụm Cluster tự động mở rộng', 'Hỗ trợ Tiếng Việt chính xác'],
    canonicalPath: '/services/database/search-engine/',
    specs: [
      { id: 'search_node', label: 'Cấu hình Node Search', type: 'select', defaultValue: 'small_node', options: [
        { id: 'small_node', name: 'Node Small (2 vCPU / 4GB RAM)', priceMonthly: 950000 },
        { id: 'med_node', name: 'Node Medium (4 vCPU / 8GB RAM)', priceMonthly: 1850000 },
        { id: 'large_node', name: 'Node Large (8 vCPU / 16GB RAM)', priceMonthly: 3600000 },
      ]},
      { id: 'search_storage', label: 'Dung lượng Lưu trữ Index', type: 'slider', min: 100, max: 2000, step: 50, unit: 'GB', defaultValue: 100, unitPriceMonthly: 2500 },
    ],
  },
  {
    id: 'queue-service',
    code: 'SVC-INT-28',
    numId: 28,
    name: 'Viettel Queue Service (vKQS)',
    group: 'Tích hợp & Messaging',
    groupId: 'integration',
    description: 'Dịch vụ hàng đợi tin nhắn Apache Kafka & RabbitMQ quản trị giúp phân tán xử lý sự kiện Event-Driven.',
    startingPriceMonthly: 1100000,
    priceUnit: 'tháng',
    badge: 'KAFKA / RABBITMQ',
    features: ['Hỗ trợ Apache Kafka & RabbitMQ Engine', 'Tốc độ truyền tải hàng chục nghìn msg/s', 'Đảm bảo thứ tự tin nhắn Exactly-Once', 'Sẵn sàng Cluster HA 99.95%'],
    canonicalPath: '/services/database/queue-service/',
    specs: [
      { id: 'queue_engine', label: 'Loại Message Broker Engine', type: 'select', defaultValue: 'kafka', options: [
        { id: 'kafka', name: 'Apache Kafka Managed', priceMonthly: 0 },
        { id: 'rabbitmq', name: 'RabbitMQ Managed', priceMonthly: 0 },
      ]},
      { id: 'throughput_tier', label: 'Băng thông Thông Điệp (Throughput)', type: 'select', defaultValue: 't1k', options: [
        { id: 't1k', name: 'Gói 1,000 msg/s (Standard)', priceMonthly: 1100000 },
        { id: 't5k', name: 'Gói 5,000 msg/s (High-Throughput)', priceMonthly: 2800000 },
        { id: 't20k', name: 'Gói 20,000 msg/s (Ultra Enterprise)', priceMonthly: 8200000 },
      ]},
    ],
  },
];

// Helper calculation function for default price computation
export function calculateServicePrice(service: PricingServiceItem, specsState: Record<string, any>): number {
  if (service.customCalculate) {
    return service.customCalculate(specsState);
  }

  let basePrice = service.startingPriceMonthly;
  let addedCost = 0;

  for (const spec of service.specs) {
    const val = specsState[spec.id] ?? spec.defaultValue;

    if (spec.type === 'slider' || spec.type === 'counter') {
      const numVal = Number(val);
      if (spec.unitPriceMonthly) {
        // Check if starting price already includes default min or default value
        addedCost += numVal * spec.unitPriceMonthly;
      }
    } else if (spec.type === 'select' && spec.options) {
      const selectedOpt = spec.options.find(o => o.id === val);
      if (selectedOpt) {
        addedCost += selectedOpt.priceMonthly;
      }
    }
  }

  // If unitPriceMonthly was used on slider/counter specs, use addedCost as total or added to base
  // For specs like vCPU/RAM/Storage where base startingPrice is min config, let's normalize
  if (addedCost > 0 && service.specs.some(s => s.unitPriceMonthly)) {
    return Math.max(basePrice, addedCost);
  }

  return basePrice + addedCost;
}

// Commitment Discounts
export const COMMITMENT_DISCOUNTS = [
  { months: 1, label: 'Thanh toán 1 tháng', discount: 0 },
  { months: 6, label: 'Thanh toán 6 tháng (Giảm 5%)', discount: 0.05 },
  { months: 12, label: 'Thanh toán 12 tháng (Giảm 10%)', discount: 0.10 },
  { months: 24, label: 'Thanh toán 24 tháng (Giảm 15%)', discount: 0.15 },
  { months: 36, label: 'Thanh toán 36 tháng (Giảm 20%)', discount: 0.20 },
];
