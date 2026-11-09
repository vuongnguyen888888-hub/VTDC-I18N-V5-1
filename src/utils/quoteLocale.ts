/** Quote form copy: exact Vietnamese/English translations for the public indexed locales.
 * Planned SEA locales use explicitly identified English fallback until editorial approval.
 */
export const QUOTE_COPY = {
  vn: {
    heading: 'Yêu Cầu Báo Giá Dịch Vụ Doanh Nghiệp', close: 'Đóng cửa sổ',
    success: 'Gửi Yêu Cầu Báo Giá Thành Công!', thanks: 'Cảm ơn Quý khách',
    followUpPhone: '. Chuyên viên tư vấn kỹ thuật Viettel IDC sẽ liên hệ trực tiếp qua số điện thoại',
    followUpMail: 'và gửi bảng phân tích chi phí dịch vụ qua email',
    responsePromise: 'Cam kết thời gian phản hồi:', responseMinutes: '15–30 phút', responseHours: '2 giờ', businessHours: '• Trong giờ hành chính: Phản hồi trong vòng',
    offHours: '• Ngoài giờ & Ngày nghỉ: Đội ngũ trực ca 24/7/365 sẽ tiếp nhận và liên hệ trong vòng',
    complete: 'Hoàn thành', name: 'Họ và tên Quý khách', namePlaceholder: 'Nguyễn Văn A',
    phone: 'Số điện thoại / Zalo', email: 'Email công việc', company: 'Tên Doanh nghiệp / Tổ chức',
    companyPlaceholder: 'Tập đoàn / Công ty ABC', group: 'Lọc theo Nhóm dịch vụ',
    service: 'Dịch vụ cần báo giá', serviceSearch: 'Tìm kiếm dịch vụ nhanh...',
    noService: 'Không tìm thấy dịch vụ phù hợp', region: 'Khu vực Datacenter ưu tiên',
    details: 'Mô tả cấu hình hoặc yêu cầu kỹ thuật chi tiết', detailsPlaceholder: 'Nhập thông tin tại đây...',
    consentIntro: 'Tôi đồng ý để Viettel IDC thu thập và xử lý thông tin liên hệ phục vụ mục đích tư vấn dịch vụ, báo giá theo quy định tại',
    consentOutro: 'về bảo vệ dữ liệu cá nhân.', trust: 'Bảo mật tuyệt đối • Tiêu chuẩn Rated 3',
    cancel: 'Hủy bỏ', processing: 'Đang xử lý...', submit: 'Gửi Yêu Cầu Báo Giá',
    missingFields: 'Vui lòng nhập đầy đủ Họ tên, Số điện thoại và Email công việc (*).',
    noConsent: 'Vui lòng đồng ý với Điều khoản Bảo vệ dữ liệu cá nhân (Nghị định 13/2023/NĐ-CP).',
  },
  en: {
    heading: 'Request an Enterprise Service Quote', close: 'Close dialog',
    success: 'Your Quote Request Was Submitted!', thanks: 'Thank you',
    followUpPhone: '. A Viettel IDC technical consultant will contact you at',
    followUpMail: 'and send a detailed service cost estimate to',
    responsePromise: 'Expected response times:', responseMinutes: '15–30 minutes', responseHours: '2 hours', businessHours: '• During business hours: We respond within',
    offHours: '• Outside business hours and on holidays: Our 24/7/365 team responds within',
    complete: 'Done', name: 'Full name', namePlaceholder: 'Your full name',
    phone: 'Phone number / Zalo', email: 'Work email', company: 'Company / Organization',
    companyPlaceholder: 'Company name', group: 'Filter by service category',
    service: 'Service to quote', serviceSearch: 'Search services...',
    noService: 'No matching services found', region: 'Preferred data center region',
    details: 'Configuration details or technical requirements', detailsPlaceholder: 'Enter requirements here...',
    consentIntro: 'I consent to Viettel IDC collecting and processing my contact details for service consultation and quotations in accordance with',
    consentOutro: 'on personal data protection.', trust: 'Secure handling • Rated 3 standard',
    cancel: 'Cancel', processing: 'Processing...', submit: 'Request a Quote',
    missingFields: 'Please enter your full name, phone number, and work email (*).',
    noConsent: 'Please accept the personal data protection consent under Decree 13/2023/ND-CP.',
  },
} as const;
export type QuoteCopy = { [K in keyof typeof QUOTE_COPY.vn]: string };
export function getQuoteLocale(language: string): 'vn' | 'en' {
  return language === 'vn' || language === 'vi' || language === 'vi-VN' ? 'vn' : 'en';
}

const CATEGORY_EN: Record<string, string> = {
  all: 'All categories', 'cloud-compute': 'Cloud Compute & Virtual Servers',
  'data-center': 'Data Centers & Colocation', storage: 'Storage & Data Protection',
  'data-platform': 'Databases & Data Platforms', security: 'Cybersecurity & SOC',
  networking: 'Networking & CDN', 'digital-services': 'Digital Services & Applications',
  'managed-services': 'Managed Services & Cloud Migration',
};
const SERVICE_EN: Record<string, string> = {
  cloud_server: 'Viettel Cloud Server (Enterprise Virtual Servers)',
  gpu_ai: 'Viettel Cloud GPU (AI & Deep Learning Compute)',
  private_cloud: 'Dedicated Private Cloud', bare_metal: 'Bare Metal Server',
  kubernetes_vks: 'Managed Kubernetes — vK8s', container_registry: 'Container Registry & CI/CD Pipeline',
  colocation_rack: 'Server Colocation / Rack Rental', dedicated_cage: 'Dedicated Cage Data Center',
  datacenter_hands: 'Remote Hands 24/7', object_storage: 'Cloud Object Storage (S3)',
  block_storage: 'Cloud Block Storage (NVMe SSD)', cloud_backup: 'Cloud Backup (BaaS)',
  cloud_dr: 'Disaster Recovery (DRaaS)', managed_db: 'Cloud Database — vDBS (PostgreSQL / MySQL)',
  redis_cache: 'Cloud In-Memory Cache (Redis)', event_streaming: 'Managed Apache Kafka & Event Streaming',
  soc_security: 'Security Operations Center as a Service (24/7)', cloud_waf: 'Cloud WAF (Web & API Protection)',
  anti_ddos: 'Anti-DDoS Protection (L3/L4/L7)', ssl_tls: 'SSL/TLS & PKI Certificates',
  cloud_cdn: 'Cloud CDN (Content & Media Delivery)', load_balancer: 'Cloud Load Balancer',
  direct_connect: 'Direct Connect & Megaport', sd_wan: 'Software-Defined WAN (SD-WAN)',
  cloud_pc_vdi: 'Cloud PC / VDI (Secure Remote Desktop)', vcontract: 'vContract (Digital Contracts)',
  enterprise_email: 'Cloud Email for Enterprises', managed_operations: 'Managed Cloud Operations (24/7)',
  cloud_migration: 'Cloud Migration & Consulting', finops_consulting: 'Cloud FinOps & Architecture Consulting',
};
const REGION_EN: Record<string, string> = {
  north: 'North — Hoa Lac / Phap Van DC (Hanoi)', central: 'Central — Da Nang DC',
  south: 'South — Binh Duong / Hoang Hoa Tham DC (HCMC)',
  multi_region: 'Multiple regions (Active-Active / Disaster Recovery)',
};
export function localizeQuoteCategory(id: string, fallback: string, lang: 'vn' | 'en'): string {
  return lang === 'vn' ? fallback : (CATEGORY_EN[id] || fallback);
}
export function localizeQuoteService(id: string, fallback: string, lang: 'vn' | 'en'): string {
  return lang === 'vn' ? fallback : (SERVICE_EN[id] || fallback);
}
export function localizeQuoteRegion(id: string, fallback: string, lang: 'vn' | 'en'): string {
  return lang === 'vn' ? fallback : (REGION_EN[id] || fallback);
}
