export interface FeaturedPartner {
  id: string;
  name: string;
  category: 'Hạ tầng tính toán & Ảo hóa' | 'Điện toán AI & Bán dẫn' | 'Mạng & Viễn thông' | 'Bảo mật & An toàn thông tin' | 'Sao lưu & Phục hồi dữ liệu' | 'Cơ sở dữ liệu & Ứng dụng Doanh nghiệp';
  logoUrl: string;
  badge: string;
  collaborationYear: string;
  summary: string;
  highlights: string[];
  scope: string;
}

export const FEATURED_PARTNERS: FeaturedPartner[] = [
  {
    id: 'qualcomm',
    name: 'Qualcomm',
    category: 'Điện toán AI & Bán dẫn',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Qualcomm-Logo.svg',
    badge: 'Đối tác Chiến lược AI Edge',
    collaborationYear: '2024 - Nay',
    summary: 'Hợp tác chiến lược thúc đẩy hệ sinh thái AI Edge Computing, hệ thống Smart Camera AI và trung tâm dữ liệu xanh tiết kiệm điện năng thế hệ mới.',
    highlights: [
      'Tích hợp chip NPU xử lý trí tuệ nhân tạo biên với độ trễ siêu thấp',
      'Đồng phát triển giải pháp 5G Private cho khu công nghiệp thông minh',
      'Tiết kiệm điện năng tới 40% cho các tác vụ AI Inference'
    ],
    scope: 'AI Edge Compute, 5G Private, Green Data Center'
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    category: 'Cơ sở dữ liệu & Ứng dụng Doanh nghiệp',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    badge: 'Đối tác SPLA & Cloud Solutions',
    collaborationYear: '2012 - Nay',
    summary: 'Cung cấp bản quyền phần mềm doanh nghiệp Microsoft SPLA, tích hợp kiến trúc Hybrid Cloud cùng Microsoft Azure và giải pháp bảo mật đám mây.',
    highlights: [
      'Cung cấp bản quyền Windows Server, SQL Server, Microsoft 365 chính hãng',
      'Tích hợp hạ tầng Hybrid Cloud giữa Viettel Cloud và Azure',
      'Đội ngũ chuyên gia đạt chứng chỉ kiến trúc sư giải pháp Microsoft'
    ],
    scope: 'SPLA Licensing, Hybrid Cloud, Enterprise Database'
  },
  {
    id: 'nvidia',
    name: 'NVIDIA',
    category: 'Điện toán AI & Bán dẫn',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg',
    badge: 'Đối tác Hạ tầng Tính toán AI',
    collaborationYear: '2020 - Nay',
    summary: 'Triển khai cụm siêu máy chủ GPU thế hệ mới (H100, A100, L40S) phục vụ huấn luyện mô hình ngôn ngữ lớn (LLM), xử lý đồ họa và Generative AI.',
    highlights: [
      'Cung cấp hạ tầng GPU Cloud mạnh mẽ nhất tại Việt Nam',
      'Được chuẩn hóa theo kiến trúc NVIDIA DGX SuperPOD và TensorRT',
      'Hỗ trợ toàn diện các startup và viện nghiên cứu trí tuệ nhân tạo'
    ],
    scope: 'GPU Cloud, LLM Training, Computer Vision, GenAI'
  },
  {
    id: 'vmware',
    name: 'VMware by Broadcom',
    category: 'Hạ tầng tính toán & Ảo hóa',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/VMware_logo.svg',
    badge: 'Premier Cloud Provider',
    collaborationYear: '2010 - Nay',
    summary: 'Nền tảng ảo hóa hạ tầng nòng cốt của Viettel IDC, triển khai VMware Cloud Foundation (VCF) đạt tiêu chuẩn Enterprise Grade.',
    highlights: [
      'Vận hành hàng chục nghìn máy chủ ảo trên nền tảng VMware vSphere/NSX',
      'Cam kết SLA 99.99% cùng khả năng co giãn tài nguyên tức thì',
      'Đội ngũ kỹ sư sở hữu chứng chỉ VCAP (VMware Certified Advanced Professional)'
    ],
    scope: 'Private Cloud, Virtualization, Software-Defined DC'
  },
  {
    id: 'intel',
    name: 'Intel',
    category: 'Điện toán AI & Bán dẫn',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg',
    badge: 'Đối tác Phần cứng & Vi xử lý',
    collaborationYear: '2008 - Nay',
    summary: 'Trang bị các dòng vi xử lý Intel Xeon Scalable thế hệ mới nhất cho toàn bộ hệ thống máy chủ vật lý và nền tảng điện toán đám mây.',
    highlights: [
      'Tích hợp công nghệ tăng tốc AI Intel AMX (Advanced Matrix Extensions)',
      'Tối ưu hóa hiệu năng tính toán và độ bền bỉ hoạt động 24/7/365',
      'Hỗ trợ kiểm thử công nghệ mới nhất trước khi ra mắt thị trường'
    ],
    scope: 'Server Processors, Intel Xeon Scalable, Confidential Computing'
  },
  {
    id: 'cisco',
    name: 'Cisco Systems',
    category: 'Mạng & Viễn thông',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg',
    badge: 'Đối tác Mạng & Trung tâm Dữ liệu',
    collaborationYear: '2008 - Nay',
    summary: 'Cung cấp hạ tầng thiết bị mạng chuyển mạch Core Switch, giải pháp định tuyến thông minh và kiến trúc ACI cho toàn bộ 9 trung tâm dữ liệu Viettel IDC.',
    highlights: [
      'Băng thông kết nối trục truyền dẫn nội địa và quốc tế lên tới hàng Tbps',
      'Kiến trúc mạng Zero Trust Security bảo vệ toàn diện dữ liệu khách hàng',
      'Hệ thống chuyển mạch dự phòng kép N+1 không gián đoạn dịch vụ'
    ],
    scope: 'Data Center Networking, Cisco ACI, Spine-Leaf Architecture'
  },
  {
    id: 'dell',
    name: 'Dell Technologies',
    category: 'Hạ tầng tính toán & Ảo hóa',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.svg',
    badge: 'Đối tác Máy chủ & Lưu trữ Enterprise',
    collaborationYear: '2008 - Nay',
    summary: 'Đối tác cung cấp hệ thống máy chủ Dell PowerEdge và giải pháp lưu trữ Dell EMC chuẩn doanh nghiệp phục vụ khối Ngân hàng, Tài chính.',
    highlights: [
      'Hệ thống lưu trữ All-Flash SAN hiệu năng đọc ghi siêu tốc IOPS cao',
      'Tích hợp tính năng quản trị từ xa iDRAC bảo mật và tự động hóa',
      'Thời gian đáp ứng thay thế linh kiện phần cứng vật lý trong vòng 2h'
    ],
    scope: 'PowerEdge Servers, Enterprise SAN/NAS Storage'
  },
  {
    id: 'fortinet',
    name: 'Fortinet',
    category: 'Bảo mật & An toàn thông tin',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Fortinet_logo.svg',
    badge: 'Đối tác An ninh Mạng & Tường lửa',
    collaborationYear: '2015 - Nay',
    summary: 'Cung cấp giải pháp tường lửa thế hệ mới FortiGate NGFW, Cloud WAF và phòng chống tấn công phân tán DDoS đa lớp chuyên dụng.',
    highlights: [
      'Hệ thống lọc lưu lượng tấn công mạng tự động thời gian thực',
      'Bảo vệ ứng dụng web và API (WAAP) đạt chuẩn an toàn thông tin cấp độ 4',
      'Tích hợp giám sát tập trung tại Trung tâm điều hành an ninh SOC'
    ],
    scope: 'Next-Gen Firewall, Anti-DDoS, WAF, Cloud Security'
  },
  {
    id: 'veeam',
    name: 'Veeam',
    category: 'Sao lưu & Phục hồi dữ liệu',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Veeam_logo.svg',
    badge: 'Veeam Cloud & Service Provider (VCSP)',
    collaborationYear: '2016 - Nay',
    summary: 'Giải pháp sao lưu dữ liệu tự động (Cloud Backup) và khôi phục sau thảm họa (Cloud Disaster Recovery - DRaaS) tiêu chuẩn vàng thế giới.',
    highlights: [
      'Sao lưu bất biến (Immutable Backup) ngăn ngừa tuyệt đối mã độc Ransomware',
      'Khôi phục hoạt động hệ thống RTO < 15 phút, RPO < 5 phút',
      'Hỗ trợ nhân bản dữ liệu linh hoạt giữa On-premise và Viettel Cloud'
    ],
    scope: 'Cloud Backup, DRaaS, Ransomware Protection'
  },
  {
    id: 'oracle',
    name: 'Oracle',
    category: 'Cơ sở dữ liệu & Ứng dụng Doanh nghiệp',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    badge: 'Đối tác Cơ sở Dữ liệu Doanh nghiệp',
    collaborationYear: '2014 - Nay',
    summary: 'Triển khai hệ thống cơ sở dữ liệu Oracle Database Enterprise Edition và giải pháp Oracle Real Application Clusters (RAC) cho các ngân hàng lớn.',
    highlights: [
      'Tối ưu hóa hiệu năng truy vấn giao dịch khối lượng lớn (OLTP)',
      'Hỗ trợ dịch chuyển CSDL từ On-Premise lên Cloud không gián đoạn',
      'Đội ngũ kỹ sư chuyên gia cơ sở dữ liệu có chứng chỉ OCP/OCM'
    ],
    scope: 'Oracle Database, Enterprise RAC, Data Guard'
  }
];
