export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  mode: 'ai' | 'consultant';
  text: string;
  timestamp: string;
  actions?: {
    label: string;
    actionType: 'quote' | 'tour' | 'callback' | 'link';
    payload?: string;
  }[];
}

export const VIDA_PRESETS = [
  '⚡ Báo giá Cloud Server & RAM/CPU',
  '🛡️ Tiêu chuẩn Data Center ANSI/TIA-942',
  '☁️ Tư vấn kiến trúc Hybrid Cloud',
  '💾 So sánh S3 Object Storage & Block Storage',
  '🔐 Bảo mật Nghị định 13 & ISO 27001'
];

export const MINH_THU_PRESETS = [
  '🏢 Đặt lịch tham quan Data Center Hòa Lạc',
  '📄 Lập báo giá hạ tầng cho Doanh nghiệp',
  '📞 Yêu cầu Chuyên viên gọi lại ngay',
  '🎁 Đăng ký dùng thử Viettel Cloud 14 ngày',
  '🤝 Tư vấn chính sách Đối tác & Đại lý'
];

export const VIDA_KNOWLEDGE_BASE: { keywords: string[]; response: string; actions?: ChatMessage['actions'] }[] = [
  {
    keywords: ['báo giá', 'giá', 'chi phí', 'cloud server', 'bảng giá', 'ram', 'cpu'],
    response: `**ViDa AI Assistant:** Bảng giá dịch vụ **Viettel Cloud Server** được chuẩn hóa theo cấu hình linh hoạt:

- **Gói Small (1 vCPU / 2GB RAM / 50GB SSD):** ~120.000 VNĐ / tháng
- **Gói Medium (2 vCPU / 4GB RAM / 100GB SSD):** ~280.000 VNĐ / tháng
- **Gói Enterprise (4 vCPU / 8GB RAM / 200GB NVMe):** ~590.000 VNĐ / tháng

*Ưu đãi đặc biệt:* Giảm trực tiếp 20% khi thanh toán từ 12 tháng trở lên + Miễn phí 100GB Băng thông nội bộ.

Bạn muốn tùy chỉnh cấu hình chi tiết hay cần chuyển sang **Chuyên viên Minh Thư** để nhận Báo giá chính thức có con dấu doanh nghiệp?`,
    actions: [
      { label: '📄 Tạo Báo giá Nhanh', actionType: 'quote' },
      { label: '🎧 Chuyển sang tư vấn Minh Thư', actionType: 'callback' }
    ]
  },
  {
    keywords: ['data center', 'trung tâm dữ liệu', 'tia-942', 'rated 3', 'hòa lạc', 'chuẩn'],
    response: `**ViDa AI Assistant:** Viettel IDC sở hữu hệ sinh thái **9 Trung tâm Dữ liệu đạt chuẩn ANSI/TIA-942 Rated 3** quy mô lớn nhất Việt Nam:

1. **Hòa Lạc Data Center (Hà Nội):** DC Xanh quy mô 2.400 racks, đạt PUE < 1.35, làm mát bằng chất lỏng.
2. **Pháp Vân DC & Hoàng Hoa Thám DC:** Đáp ứng tiêu chuẩn bảo mật cho Ngân hàng & Tài chính.
3. **Sóng Thần DC & Bình Dương DC:** Cụm DC kết nối băng thông cực lớn khu vực phía Nam.
4. **Đà Nẵng DC:** Trạm kết nối hạ tầng dữ liệu khu vực Miền Trung.

**Tiêu chuẩn nổi bật:** ANSI/TIA-942 Rated 3 Constructed Facility, ISO 27001, ISO 9001, PCI DSS v4.0.`,
    actions: [
      { label: '🏢 Đặt lịch tham quan Data Center', actionType: 'tour' }
    ]
  },
  {
    keywords: ['hybrid cloud', 'đám mây', 'kiến trúc', 'kết nối', 'aws', 'azure'],
    response: `**ViDa AI Assistant:** Giải pháp **Viettel Hybrid Cloud** kết nối mượt mà giữa hạ tầng Private Cloud / On-Premise của Doanh nghiệp với hệ sinh thái Viettel Cloud & các hyperscaler toàn cầu (AWS, Azure, GCP):

- **Đường truyền băng thông riêng:** Viettel Direct Connect tốc độ lên tới 10Gbps, độ trễ < 2ms.
- **Tuân thủ Luật An ninh mạng:** Dữ liệu người dùng Việt Nam được lưu giữ an toàn nội địa.
- **Quản trị tập trung:** Viettel Cloud Management Platform (CMP) điều phối đa đám mây trên một giao diện đơn nhất.`,
    actions: [
      { label: '📞 Yêu cầu tư vấn Giải pháp Hybrid', actionType: 'callback' }
    ]
  },
  {
    keywords: ['s3', 'object storage', 'lưu trữ', 'block storage', 'drive'],
    response: `**ViDa AI Assistant:** So sánh **vStorage (S3 Object Storage)** và **Block Storage (vVolume)**:

- **vStorage (S3 Compatible):** Tối ưu cho dữ liệu phi cấu trúc (Ảnh, Video, Backup, Big Data), mở rộng không giới hạn, chi phí chỉ từ 250đ/GB/tháng, sẵn sàng API S3 standard.
- **Block Storage (vVolume NVMe/SSD):** Dùng cho Hệ điều hành, Cơ sở dữ liệu SQL/NoSQL đòi hỏi IOPS cực cao (up to 50.000 IOPS), độ trễ thấp < 1ms.`,
    actions: [
      { label: '🎁 Đăng ký dùng thử vStorage', actionType: 'quote' }
    ]
  },
  {
    keywords: ['bảo mật', 'nghị định 13', 'iso 27001', 'pci dss', 'pháp lý', 'an toàn'],
    response: `**ViDa AI Assistant:** Viettel IDC tuân thủ đầy đủ các tiêu chuẩn bảo mật khắt khe nhất:

- **Nghị định 13/2023/NĐ-CP:** Đảm bảo bảo vệ dữ liệu cá nhân cho doanh nghiệp Việt Nam.
- **Chứng nhận Quốc tế:** ISO 27001 (An toàn thông tin), ISO 27017 (Security Cloud), ISO 27018 (Privacy Cloud), PCI DSS Level 1 (Thanh toán tài chính).
- **Hệ thống SOC 24/7:** Giám sát an ninh mạng liên tục, phòng chống tấn công DDoS đa tầng.`,
    actions: [
      { label: '📄 Tải Whitepaper Bảo mật', actionType: 'link', payload: '/resources' }
    ]
  }
];

export const MINH_THU_RESPONSES: { keywords: string[]; response: string; actions?: ChatMessage['actions'] }[] = [
  {
    keywords: ['báo giá', 'giá', 'chi phí', 'hợp đồng', 'chiết khấu', 'ưu đãi'],
    response: `Dạ chào Anh/Chị! Em là **Nguyễn Minh Thư - Chuyên viên tư vấn giải pháp Viettel IDC**. 🌸

Em rất vui được hỗ trợ Anh/Chị lập **Báo giá chính thức** với mức chiết khấu doanh nghiệp tốt nhất (lên đến **25%** cho hợp đồng năm) kèm theo các gói quà tặng băng thông & hỗ trợ migration miễn phí.

Anh/Chị vui lòng để lại **Số điện thoại** hoặc **Email**, em Thư sẽ gửi bảng Báo giá kèm file PDF cấu hình chi tiết qua Zalo/Email trong vòng **5 phút** ạ!`,
    actions: [
      { label: '📞 Nhận tư vấn Báo giá qua Zalo/SĐT', actionType: 'callback' },
      { label: '🏢 Đặt lịch tham quan DC', actionType: 'tour' }
    ]
  },
  {
    keywords: ['tham quan', 'đặt lịch', 'hòa lạc', 'dc', 'xem data center'],
    response: `Dạ vâng ạ! Em Minh Thư có thể hỗ trợ Anh/Chị đặt lịch **Tham quan thực tế Trung tâm Dữ liệu Viettel IDC** (Hòa Lạc, Pháp Vân hoặc Sóng Thần).

**Trải nghiệm tour gồm:**
- Khám phá khu vực phòng máy Server, hệ thống làm mát bằng chất lỏng tân tiến.
- Kiểm tra quy trình an ninh 5 lớp (xác thực sinh trắc học, thẻ từ, camera AI).
- Gặp gỡ đội ngũ kỹ sư vận hành Tier III 24/7.

Anh/Chị dự định tham quan vào thời gian nào ạ? Em Thư sẽ hoàn tất thủ tục đăng ký thẻ ra vào cho đoàn ngay!`,
    actions: [
      { label: '📅 Đăng ký Lịch Tham Quan', actionType: 'tour' },
      { label: '📞 Gọi lại cho tôi', actionType: 'callback' }
    ]
  },
  {
    keywords: ['gọi lại', 'sđt', 'liên hệ', 'tư vấn', 'số điện thoại'],
    response: `Dạ vâng! Anh/Chị để lại **Số điện thoại** hoặc bấm nút bên dưới, em Minh Thư hoặc đội ngũ chuyên viên giải pháp sẽ chủ động gọi điện hỗ trợ trực tiếp cho Anh/Chị ngay trong **15 phút** tới ạ!`,
    actions: [
      { label: '📞 Nhập SĐT để Minh Thư gọi lại', actionType: 'callback' }
    ]
  },
  {
    keywords: ['dùng thử', '14 ngày', 'test', 'trải nghiệm'],
    response: `Dạ tuyệt vời quá ạ! Viettel IDC dành tặng gói **Trải nghiệm dùng thử 14 ngày MIỄN PHÍ** trọn bộ tài nguyên Cloud Server, RAM, CPU & SSD Enterprise cho doanh nghiệp.

Em Thư sẽ hỗ trợ khởi tạo tài khoản Portal ngay cho Anh/Chị nhé! Anh/Chị cho em xin Tên Doanh nghiệp & Email để kích hoạt ạ.`,
    actions: [
      { label: '🎁 Kích hoạt Dùng thử ngay', actionType: 'quote' }
    ]
  }
];
