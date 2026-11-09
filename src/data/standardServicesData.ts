import { ServiceDetailConfig } from '../types/serviceDetail';

export const STANDARD_SERVICES_DATA: Record<string, ServiceDetailConfig> = {
  // =========================================================================
  // 1. VIETTEL KUBERNETES SERVICE (vKS)
  // =========================================================================
  'vks': {
    id: 'vks',
    sku: 'SVC-036A',
    pillar: 'paas-containers',
    pageTitle: 'Viettel Kubernetes Service (vKS) – Nền Tảng Đám Mây Tự Động Hóa Microservices & DevOps | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Nền tảng PaaS & Container', path: '/services/containers' },
        { name: 'Viettel Kubernetes Service (vKS)' },
      ],
      eyebrow: 'NỀN TẢNG ĐIỀU PHỐI CONTAINER CHUẨN CNCF DOANH NGHIỆP',
      headline: 'Viettel Kubernetes Service (vKS) – Nền Tảng Đám Mây Tự Động Hóa Cho Ứng Dụng Microservices & DevOps Hiện Đại',
      subheading: 'Giải pháp dịch vụ nền tảng (PaaS) được phát triển trên mã nguồn mở Kubernetes tiêu chuẩn CNCF. Cung cấp môi trường ảo hóa lớp OS hoàn chỉnh giúp doanh nghiệp dễ dàng đóng gói, tự động triển khai, mở rộng và quản lý vòng đời ứng dụng container ở quy mô lớn mà không cần tự đầu tư và vận hành cụm hạ tầng phức tạp.',
      primaryCta: { text: 'Dùng Thử Miễn Phí / Đăng Ký Tư Vấn', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá Chi Tiết', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Nền Tảng Container Hóa Toàn Diện – Tăng Tốc Chuyển Đổi Số Doanh Nghiệp',
      leftDescription: [
        'Viettel Kubernetes Service (vKS / vOKS / vDKS) là dịch vụ ở lớp nền tảng (Platform-as-a-Service - PaaS) cung cấp cho các nhà phát triển phần mềm và doanh nghiệp môi trường ảo hóa ở lớp hệ điều hành (OS) hoàn chỉnh. Dịch vụ cho phép xây dựng, kiểm thử, triển khai và phân phối các ứng dụng đóng gói theo hình thái container một cách nhanh chóng, tự động và bảo mật tuyệt đối.',
        'Được triển khai trên nền tảng Public Cloud mạnh mẽ, ổn định của Viettel IDC, dịch vụ đáp ứng đầy đủ các tiêu chuẩn kỹ thuật phục vụ Chính phủ điện tử (G-Cloud), an toàn thông tin Cấp độ 3 cùng các chứng chỉ quốc tế uy tín (ISO 9001:2015, ISO 27001:2013, ISO 27017:2015). Khách hàng có thể tập trung toàn bộ nguồn lực vào việc tối ưu mã nguồn và phát triển sản phẩm, trong khi Viettel IDC chịu trách nhiệm quản trị, giám sát, bảo mật và duy trì SLA cho toàn bộ hạ tầng cụm Kubernetes.',
      ],
      highlights: [
        {
          title: 'Tự động mở rộng đa tầng',
          description: 'Tự cấu hình co giãn Pod và Node thông minh với HPA, VPA và Cluster Autoscaler theo tải thực tế.',
        },
        {
          title: 'Tự chữa lành (Self-healing)',
          description: 'Tự động phát hiện lỗi, khởi động lại Pod và di chuyển (reschedule) workload sang node khỏe mạnh khi xảy ra sự cố.',
        },
        {
          title: 'Khởi tạo và cấu hình tức thì',
          description: 'Tạo cụm Kubernetes hoàn chỉnh chỉ trong vài phút, cấp phát Kubeconfig chủ động theo từng Namespace/User.',
        },
        {
          title: 'Bảo mật đa lớp theo chuẩn Enterprise',
          description: 'Phân quyền RBAC, mã hóa bí mật trong etcd, TLS 1.3, Network Policy và tích hợp quét lỗ hổng Workload CVE/Runtime Security.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & GÓI DỊCH VỤ',
      headline: 'Bảng Giá Linh Hoạt & Tối Ưu Chi Phí Theo Nhu Cầu Vận Hành',
      controls: [
        {
          id: 'region',
          label: 'Khu vực hạ tầng',
          options: [
            { id: 'north', label: 'Miền Bắc' },
            { id: 'south', label: 'Miền Nam' },
          ],
          defaultSelected: 'north',
        },
        {
          id: 'billingMode',
          label: 'Hình thức thanh toán',
          options: [
            { id: 'saving', label: 'Saving Plan (Trọn gói theo tháng 24/7)' },
            { id: 'payg', label: 'Pay-as-you-go (Theo giờ)' },
          ],
          defaultSelected: 'saving',
        },
        {
          id: 'masterMode',
          label: 'Mô hình Control Plane',
          options: [
            { id: '1master', label: '1 Master Node' },
            { id: '3master', label: '3 Master Nodes (HA)' },
          ],
          defaultSelected: '1master',
        },
      ],
      note: 'Bảng giá dưới đây chưa bao gồm thuế VAT (nếu có). Cấu hình tài nguyên vCPU, RAM, Storage và IP của mỗi node trong cụm là đồng nhất.',
      tables: [
        {
          id: 'saving_plan_table',
          title: 'BẢNG 1: GÓI SAVING PLAN (Thanh Toán Trọn Gói Theo Tháng 24/7)',
          subtitle: 'Cấu hình sử dụng 1 Master Node, tối thiểu 2–3 Worker Nodes đảm bảo tính sẵn sàng cao',
          applicableCondition: { billingMode: 'saving' },
          columns: [
            { header: 'Tên Gói Dịch Vụ', key: 'name', width: '22%' },
            { header: 'Master Node', key: 'master', width: '12%', align: 'center' },
            { header: 'Worker Node', key: 'worker', width: '12%', align: 'center' },
            { header: 'IP Public', key: 'ip', width: '10%', align: 'center' },
            { header: 'Dung Lượng PV', key: 'pv', width: '12%', align: 'center' },
            { header: 'Băng Thông', key: 'bandwidth', width: '12%', align: 'center' },
            { header: 'Đơn Giá / Tháng', key: 'price', width: '12%', align: 'right', isPrice: true },
            { header: 'Tùy Chọn', key: 'action', width: '10%', align: 'center', isAction: true },
          ],
          rows: [
            { name: 'T2.VOKS 1 HIGH MEMORY', master: '1 Node', worker: '2 Nodes', ip: '2 IP', pv: '100 GB', bandwidth: '300 Mbps', price: '6.200.000 đ' },
            { name: 'T2.VOKS 2', master: '1 Node', worker: '3 Nodes', ip: '2 IP', pv: '200 GB', bandwidth: '300 Mbps', price: '9.500.000 đ' },
            { name: 'T2.VOKS 2 HIGH MEMORY', master: '1 Node', worker: '3 Nodes', ip: '2 IP', pv: '200 GB', bandwidth: '300 Mbps', price: '12.900.000 đ' },
            { name: 'T2.VOKS 3', master: '1 Node', worker: '3 Nodes', ip: '2 IP', pv: '200 GB', bandwidth: '300 Mbps', price: '14.500.000 đ' },
            { name: 'T2.VOKS 3 HIGH MEMORY', master: '1 Node', worker: '3 Nodes', ip: '2 IP', pv: '200 GB', bandwidth: '300 Mbps', price: '22.000.000 đ' },
          ],
        },
        {
          id: 'payg_1master_table',
          title: 'BẢNG 2.1: GÓI PAY AS YOU GO – NHÓM 1 MASTER NODE',
          subtitle: 'Bao gồm 1 Ingress Controller, 2 IP Public tĩnh và 300 Mbps Băng thông',
          applicableCondition: { billingMode: 'payg', masterMode: '1master' },
          columns: [
            { header: 'Tên Gói Dịch Vụ', key: 'name', width: '25%' },
            { header: 'Master Node', key: 'master', width: '12%', align: 'center' },
            { header: 'Dung Lượng PV', key: 'pv', width: '13%', align: 'center' },
            { header: 'Giá Cluster Tham Khảo', key: 'clusterPrice', width: '20%', align: 'right' },
            { header: 'Giá Worker Node', key: 'workerPrice', width: '15%', align: 'right' },
            { header: 'Tổng Đơn Giá / Giờ', key: 'totalPrice', width: '15%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'T2.VOKS 1', master: '1 Node', pv: '100 GB', clusterPrice: '4.700 đ/giờ', workerPrice: 'từ 1.430 đ/giờ', totalPrice: '5.300 đ/giờ' },
            { name: 'T2.VOKS 2', master: '1 Node', pv: '200 GB', clusterPrice: '5.400 đ/giờ', workerPrice: 'từ 1.430 đ/giờ', totalPrice: '6.600 đ/giờ' },
            { name: 'T2.VOKS 3 HIGH MEMORY', master: '1 Node', pv: '200 GB', clusterPrice: '8.900 đ/giờ', workerPrice: 'từ 1.430 đ/giờ', totalPrice: '10.100 đ/giờ' },
            { name: 'T2.VOKS 4', master: '1 Node', pv: '300 GB', clusterPrice: '10.500 đ/giờ', workerPrice: 'từ 1.430 đ/giờ', totalPrice: '12.300 đ/giờ' },
            { name: 'T2.VOKS 4 HIGH MEMORY', master: '1 Node', pv: '300 GB', clusterPrice: '16.000 đ/giờ', workerPrice: 'từ 1.430 đ/giờ', totalPrice: '17.800 đ/giờ' },
          ],
        },
        {
          id: 'payg_3master_table',
          title: 'BẢNG 2.2: GÓI PAY AS YOU GO – NHÓM CHUẨN DOANH NGHIỆP (HA - 3 MASTER NODES)',
          subtitle: 'Đạt chuẩn High Availability với cụm Master Node phân tán và Load Balancer tự động',
          applicableCondition: { billingMode: 'payg', masterMode: '3master' },
          columns: [
            { header: 'Tên Gói Dịch Vụ', key: 'name', width: '25%' },
            { header: 'Master Node', key: 'master', width: '12%', align: 'center' },
            { header: 'Dung Lượng PV', key: 'pv', width: '13%', align: 'center' },
            { header: 'Giá Cluster Tham Khảo', key: 'clusterPrice', width: '20%', align: 'right' },
            { header: 'Giá Worker Node', key: 'workerPrice', width: '15%', align: 'right' },
            { header: 'Tổng Đơn Giá / Giờ', key: 'totalPrice', width: '15%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'T2.VOKS 1 HA', master: '3 Nodes', pv: '100 GB', clusterPrice: '8.700 đ/giờ', workerPrice: 'từ 1.430 đ/giờ', totalPrice: '9.300 đ/giờ' },
            { name: 'T2.VOKS 2 HA', master: '3 Nodes', pv: '200 GB', clusterPrice: '9.300 đ/giờ', workerPrice: 'từ 1.430 đ/giờ', totalPrice: '10.500 đ/giờ' },
            { name: 'T2.VOKS 3 HIGH MEMORY HA', master: '3 Nodes', pv: '200 GB', clusterPrice: '14.800 đ/giờ', workerPrice: 'từ 1.430 đ/giờ', totalPrice: '16.000 đ/giờ' },
            { name: 'T2.VOKS 4 HA', master: '3 Nodes', pv: '300 GB', clusterPrice: '16.400 đ/giờ', workerPrice: 'từ 1.430 đ/giờ', totalPrice: '18.200 đ/giờ' },
            { name: 'T2.VOKS 4 HIGH MEMORY HA', master: '3 Nodes', pv: '300 GB', clusterPrice: '26.000 đ/giờ', workerPrice: 'từ 1.430 đ/giờ', totalPrice: '27.800 đ/giờ' },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp cần thiết kế cụm Kubernetes chuyên dụng (GPU Node Groups, cụm Bare Metal hoặc mở rộng Multi-region)?',
        buttonText: 'Yêu Cầu Tư Vấn Kiến Trúc & Báo Giá Doanh Nghiệp',
        notesPlaceholder: 'Đăng ký tư vấn kiến trúc cụm vKS chuyên biệt',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET',
      headline: 'Năng Lực Công Nghệ & Thông Số Kỹ Thuật Chuyên Sâu',
      cards: [
        {
          id: 'vks-feat-1',
          title: 'Quản Trị Node Group & Hạ Tầng Linh Hoạt',
          description: 'Thêm/bớt node nhanh chóng; quản lý worker nodes theo label, taints; phân tách rõ ràng môi trường Dev/Test/Prod; tính năng Auto Repair tự thay thế/reset node bị lỗi.',
        },
        {
          id: 'vks-feat-2',
          title: 'Triển Khai Zero-Downtime & Phục Hồi Tự Động',
          description: 'Hỗ trợ đa dạng chiến lược phát hành: Rolling Update, Blue-Green, Canary. Tính năng Self-healing tự khởi động lại Pod, điều phối workload sang Node mới không gián đoạn.',
        },
        {
          id: 'vks-feat-3',
          title: 'Lưu Trữ Persistent Volume & NFS Server Độc Lập',
          description: 'Tích hợp sẵn 01 NFS Node phục vụ lưu trữ dữ liệu dài hạn (Persistent Storage). Hỗ trợ Block Storage, NFS, Snapshot/restore qua giao thức chuẩn CSI Driver.',
        },
        {
          id: 'vks-feat-4',
          title: 'Giám Sát, Logging & Tích Hợp 1-Click Dashboard',
          description: 'Cài đặt nhanh Kubernetes Dashboard, Prometheus, Grafana chỉ bằng 1 click trên Portal. Tích hợp Viettel CloudWatch theo dõi CPU, RAM, Network, Storage và Audit Trail thời gian thực.',
        },
        {
          id: 'vks-feat-5',
          title: 'Bảo Mật Nâng Cao Đạt Chuẩn CIS Benchmark',
          description: 'Phân quyền RBAC theo User/Namespace; mã hóa Secret trong etcd; giao thức kết nối TLS 1.3; kiểm soát luồng mạng với Network Policy và cơ chế Runtime Security phát hiện hành vi độc hại.',
        },
        {
          id: 'vks-feat-6',
          title: 'Đồng Bộ Hoàn Chỉnh Cùng DevOps & Cloud Ecosystem',
          description: 'Tích hợp liền mạch với Viettel Database Service (MySQL, PostgreSQL, MongoDB, Redis), Viettel Container Registry (quét CVE) và bộ công cụ Viettel DevOps CI/CD.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật Tiêu Chuẩn (Technical Spec Table)',
      specs: [
        { category: 'Phiên bản Kubernetes', details: 'Hỗ trợ tối đa 1.31.x (Cập nhật phiên bản mới liên tục, Zero-downtime)' },
        { category: 'Hệ điều hành & Kernel', details: 'Ubuntu 20.04.5 LTS / Kernel 6.13.4-x-generic' },
        { category: 'Container Runtime', details: 'Containerd – v1.7.25' },
        { category: 'Hạ tầng mạng CNI & Ingress', details: 'Calico, Cilium, Nginx Ingress Controller' },
        { category: 'Giao diện lưu trữ CSI', details: 'CSI Driver / Storage Class (Hỗ trợ Block Storage, NFS Storage, Snapshot)' },
        { category: 'Bộ nhớ đệm Node Storage', details: '50 GB SSD cố định trên mỗi node phục vụ cache và chạy hệ thống' },
        { category: 'Mô hình Control Plane', details: 'Tùy chọn 1 Master Node hoặc 3 Master Nodes HA kèm Load Balancer' },
        { category: 'Công cụ Giám sát tích hợp', details: 'Prometheus, Grafana, Kubernetes Dashboard, Viettel CloudWatch' },
        { category: 'Tiêu chuẩn An toàn thông tin', details: 'ISO 27001:2013, ISO 27017:2015, ISO 9001:2015, ATTT Cấp độ 3, G-Cloud' },
        { category: 'Hạ tầng Trung tâm Dữ liệu', details: 'Trung tâm Dữ liệu chuẩn quốc tế ANSI/TIA-942 Rated 3 Constructed Level' },
        { category: 'Cam kết chất lượng (SLA)', details: '99.99% độ sẵn sàng vận hành liên tục' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH DOANH NGHIỆP',
      headline: 'Giá Trị Đột Phá Cho Doanh Nghiệp Phát Triển Phần Mềm Số',
      pillars: [
        {
          number: '01',
          title: 'Tối Ưu Chi Phí & Nguồn Lực CNTT (TCO)',
          description: 'Loại bỏ hoàn toàn gánh nặng đầu tư phần cứng, bản quyền và chi phí duy trì đội ngũ kỹ sư vận hành K8s chuyên trách; chi trả linh hoạt theo tài nguyên thực tế sử dụng.',
        },
        {
          number: '02',
          title: 'Tự Động Hóa Vận Hành Siêu Đơn Giản',
          description: 'Khởi tạo cluster chỉ trong vài phút, tự động nâng cấp phiên bản không downtime, tự động thay thế node hỏng (Auto Repair) và tự phục hồi Pod khi có sự cố.',
        },
        {
          number: '03',
          title: 'Tăng Tốc Chu Kỳ Phát Hành Sản Phẩm (Time-to-Market)',
          description: 'Chuẩn hóa quy trình CI/CD, phân tách môi trường phát triển độc lập giúp đội ngũ lập trình viên tập trung phát triển tính năng, kiểm thử và deploy ứng dụng liên tục.',
        },
        {
          number: '04',
          title: 'Bảo Mật Cấp Doanh Nghiệp & Chủ Quyền Dữ Liệu',
          description: 'Hạ tầng đám mây nội địa đặt 100% tại Việt Nam, đáp ứng các tiêu chuẩn khắt khe về an toàn thông tin của Chính phủ, ngân hàng và các tổ chức tài chính.',
        },
      ],
    },
    useCases: {
      eyebrow: 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
      headline: 'Kịch Bản Triển Khai Tiêu Biểu Của Viettel Kubernetes Service',
      items: [
        {
          id: 'vks-uc-1',
          title: '1. Triển Khai Kiến Trúc Ứng Dụng Microservices',
          context: 'Ngân hàng, Fintech, TMĐT, Viễn thông cần chia tách ứng dụng nguyên khối (Monolith) thành hàng trăm dịch vụ nhỏ độc lập về dữ liệu và vận hành.',
          solution: 'vKS tự động điều phối container, cấu hình Auto Scaling thích ứng tức thời khi lưu lượng truy cập tăng vọt và hỗ trợ cập nhật tính năng mới không gián đoạn người dùng.',
        },
        {
          id: 'vks-uc-2',
          title: '2. Xây Dựng Nền Tảng Tự Động Hóa DevOps & CI/CD Pipeline',
          context: 'Doanh nghiệp phần mềm, Startup công nghệ cần quy trình đóng gói, kiểm thử và phân phối ứng dụng tự động, bảo mật và đồng nhất.',
          solution: 'Tích hợp bộ công cụ Viettel DevOps và Container Registry, cấp phát quyền truy cập theo từng Namespace/Team và hỗ trợ Rollback tức thì khi có lỗi phát sinh.',
        },
        {
          id: 'vks-uc-3',
          title: '3. Vận Hành Hệ Thống Trọng Yếu Đòi Hỏi Tính Sẵn Sàng Cao 24/7',
          context: 'Các hệ thống Y tế, Giáo dục, Cổng dịch vụ công, Core Banking yêu cầu duy trì hoạt động không ngừng nghỉ.',
          solution: 'Áp dụng cụm Master Node HA 3 nodes, cơ chế Auto Repair tự động sửa node hỏng, tự reschedule ứng dụng sang node khỏe để đảm bảo zero-downtime.',
        },
        {
          id: 'vks-uc-4',
          title: '4. Chuyển Dịch Ứng Dụng (Cloud Migration) & Triển Khai AI/ML',
          context: 'Di chuyển hệ thống container từ Cloud quốc tế (AWS, GCP, Azure), Cloud nội địa hoặc On-premises về hạ tầng đám mây Viettel IDC.',
          solution: 'vKS tương thích 100% với chuẩn K8s mở, cho phép di chuyển mượt mà không cần sửa code. Sẵn sàng tích hợp cụm GPU Node Group cho các tác vụ tính toán AI, Camera AI và Big Data Analytics.',
        },
      ],
    },
    faq: {
      eyebrow: 'CÂU HỎI THƯỜNG GẶP',
      headline: 'Câu Hỏi Thường Gặp Về Viettel Kubernetes Service (vKS)',
      items: [
        {
          question: 'Sự khác nhau cơ bản giữa Container, Docker và Kubernetes là gì?',
          answer: [
            'Container là đơn vị phần mềm được tiêu chuẩn hóa chứa mã nguồn và toàn bộ các thành phần phụ thuộc cần thiết để chạy một ứng dụng.',
            'Docker là nền tảng và công cụ giúp đóng gói ứng dụng vào container, tự động hóa việc phân phối ứng dụng giữa các môi trường một cách đồng nhất.',
            'Kubernetes (K8s) là hệ thống điều phối, lập lịch chạy, tự động hóa mở rộng và quản lý trạng thái của hàng loạt container chạy cùng nhau trên hạ tầng ảo hóa/vật lý.',
          ],
        },
        {
          question: 'Cụm dịch vụ vKS của Viettel IDC cung cấp những thành phần nào cho khách hàng?',
          answer: [
            'Master Node (Control Plane): Lựa chọn 01 Master Node hoặc 03 Master Nodes kèm Load Balancer đạt chuẩn High Availability (HA) chứa đầy đủ các logic điều phối.',
            'Worker Nodes: Nơi trực tiếp chạy các container ứng dụng (tối thiểu từ 2–3 Worker Nodes tùy gói).',
            'NFS Server Node (Persistent Storage): Cung cấp không gian lưu trữ dữ liệu bền vững, tự động chia sẻ giữa các nodes qua giao thức CSI Driver.',
          ],
        },
        {
          question: 'Khác biệt giữa Node Storage và Persistent Storage trong cụm Kubernetes là gì?',
          answer: [
            'Node Storage: Có dung lượng mặc định 50 GB SSD trên mỗi node, dùng làm bộ nhớ đệm (cache) tạm thời; dữ liệu sẽ bị xóa khi container bị khởi động lại hoặc điều phối sang node khác.',
            'Persistent Storage (Persistent Volume): Là vùng lưu trữ dữ liệu độc lập (qua NFS Server hoặc Block Storage); toàn bộ dữ liệu được lưu giữ toàn vẹn khi Pod bị restart/reschedule và có thể chuyển giao linh hoạt giữa các Pod.',
          ],
        },
        {
          question: 'Dịch vụ vKS có tương thích với các ứng dụng container đang chạy trên Cloud khác không?',
          answer: 'Có, tương thích hoàn toàn. Do tuân thủ 100% chuẩn mã nguồn mở CNCF Kubernetes, khách hàng có thể sử dụng tất cả các công cụ, plugin cộng đồng và dễ dàng di chuyển ứng dụng từ AWS EKS, Azure AKS, Google GKE hay On-premises về Viettel IDC mà không gặp bất kỳ trở ngại nào.',
        },
        {
          question: 'Tôi có thể cấu hình tự động mở rộng (Autoscaling) cho ứng dụng như thế nào?',
          answer: 'Khách hàng có thể chủ động thiết lập HPA (tự động co giãn số lượng Pod theo CPU/RAM), VPA (tự động tăng giảm cấu hình tài nguyên cho Pod) và Cluster Autoscaler (tự động thêm/bớt số lượng Worker Node trong Node Group theo tải thực tế).',
        },
      ],
    },
    footerCta: {
      headline: 'Sẵn Sàng Tối Ưu Hóa Quy Trình Vận Hành Ứng Dụng Container Cùng Viettel IDC?',
      subtext: 'Đội ngũ chuyên gia và kiến trúc sư giải pháp Cloud Native của chúng tôi luôn sẵn sàng tư vấn thiết kế hạ tầng cụm Kubernetes đạt chuẩn quốc tế, bảo mật và tối ưu chi phí cho doanh nghiệp của bạn.',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
      buttonText: 'ĐĂNG KÝ NHẬN TƯ VẤN & TRẢI NGHIỆM CLUSTER NGAY',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU KỸ THUẬT & TRỢ GIÚP',
      headline: 'Tài Nguyên Kỹ Thuật & Kênh Hỗ Trợ Chuyên Sâu',
      documentation: {
        title: 'Trung Tâm Tài Liệu & Hướng Dẫn Sử Dụng (Documentation)',
        desc: 'Cung cấp tài liệu kỹ thuật chi tiết về kết nối Kubeconfig, hướng dẫn triển khai Ingress Controller, cấu hình StorageClass Persistent Volume và tích hợp CI/CD Pipeline.',
        linkText: 'Xem Tài Liệu Kỹ Thuật',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Kỹ Thuật 24/7/365 (Support Center)',
        desc: 'Đội ngũ chuyên gia Cloud Native thường trực sẵn sàng hỗ trợ giải quyết sự cố, tư vấn tối ưu cluster 24/7 qua Hotline 1800 8088 hoặc hệ thống Ticket Portal.',
        linkText: 'Gửi Yêu Cầu Hỗ Trợ Kỹ Thuật',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI GIẢI PHÁP LIÊN QUAN',
      headline: 'Hệ Sinh Thái Giải Pháp Đám Mây Doanh Nghiệp Bổ Trợ',
      items: [
        {
          title: 'Viettel Virtual Private Cloud (vVPC)',
          description: 'Trung tâm dữ liệu ảo an toàn, cung cấp mạng SDN, Load Balancer L4-L7 và Security Group bảo vệ cụm Kubernetes.',
          path: '/services/compute/virtual-private-cloud/',
          sku: 'SVC-003',
        },
        {
          title: 'Viettel Database Service (vDBS)',
          description: 'Cơ sở dữ liệu tự động hóa quản trị (MySQL, PostgreSQL, MongoDB, Redis) kết nối bảo mật nội bộ với cụm vKS.',
          path: '/services/database/database-service/',
          sku: 'SVC-019',
        },
        {
          title: 'Viettel Container Registry (vCR)',
          description: 'Dịch vụ lưu trữ và phân phối Docker Image tốc độ cao, tích hợp tính năng tự động quét lỗ hổng bảo mật Image trước khi deploy.',
          path: '/services/containers/container-registry/',
          sku: 'SVC-017',
        },
        {
          title: 'Viettel Application Performance Monitoring (vAPM)',
          description: 'Giám sát hiệu năng giao dịch microservices, theo dõi luồng ứng dụng và phát hiện nguyên nhân gốc rễ (Root-cause) thời gian thực.',
          path: '/services/managed-services/vapm/',
          sku: 'SVC-066',
        },
      ],
    },
  },

  // =========================================================================
  // 2. VIETTEL CONTAINER REGISTRY (vCR)
  // =========================================================================
  'vcr': {
    id: 'vcr',
    sku: 'SVC-017',
    pillar: 'paas-containers',
    pageTitle: 'Viettel Container Registry (vCR) – Lưu Trữ, Quản Lý & Bảo Mật Container Images | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Nền tảng PaaS & Container', path: '/services/containers' },
        { name: 'Viettel Container Registry (vCR)' },
      ],
      eyebrow: 'DỊCH VỤ LƯU TRỮ & QUẢN LÝ TẬP TRUNG CONTAINER IMAGES CHUẨN DOANH NGHIỆP',
      headline: 'Viettel Container Registry (vCR) – Lưu Trữ, Quản Lý Và Bảo Mật Toàn Diện Cho Container Images',
      subheading: 'Giải pháp PaaS cung cấp không gian lưu trữ và quản lý Container Image tập trung, nhanh chóng, an toàn và trực quan. Tích hợp liền mạch trong chu trình DevOps CI/CD, tương thích tiêu chuẩn OCI và kết nối trực tiếp với các nền tảng Docker, Kubernetes (K8s).',
      primaryCta: { text: 'Dùng Thử Miễn Phí', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá & Đăng Ký', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Tổng Quan Vận Hành & Kiến Trúc Viettel Container Registry (vCR)',
      leftDescription: [
        'Viettel Container Registry (vCR) là dịch vụ ở lớp nền tảng (PaaS) cung cấp nơi lưu trữ, quản lý các container images một cách nhanh chóng, an toàn và trực quan. vCR đóng vai trò trọng tâm trong chu trình DevOps, hỗ trợ tối đa quy trình phát triển ứng dụng Cloud-native thông qua cơ chế Push/Pull images mượt mà giữa các hệ thống, giúp các lập trình viên tiết kiệm đáng kể thời gian và công sức vận hành.',
        'Được lưu trữ trên hạ tầng Trung tâm Dữ liệu đạt chuẩn quốc tế của Viettel IDC, dịch vụ cam kết tốc độ truyền tải cực nhanh, độ sẵn sàng cao và tuân thủ chặt chẽ các chính sách bảo mật nội bộ.',
      ],
      highlights: [
        {
          title: 'Quản lý Repository linh hoạt',
          description: 'Hỗ trợ cả 2 chế độ Public (chia sẻ rộng rãi) và Private (chỉ Root User và IAM User sở hữu mới có quyền truy cập).',
        },
        {
          title: 'Bảo mật Image chuyên sâu',
          description: 'Tích hợp công cụ Trivy quét lỗ hổng mã độc, định danh chính xác từng bản build bằng mã hash SHA256.',
        },
        {
          title: 'Tích hợp CLI Secret an toàn',
          description: 'Quản lý cơ chế xác thực an toàn qua CLI Secret (tự động hết hạn sau 01 ngày), dễ dàng làm mới khi cần.',
        },
        {
          title: 'Kết nối liền mạch CI/CD',
          description: 'Đồng bộ trực tiếp với Jenkins, GitLab CI và hệ sinh thái Viettel Open Kubernetes Service (vKS), Virtual Private Cloud (vVPC).',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & GÓI DỊCH VỤ',
      headline: 'Bảng Giá Gói Dịch Vụ Viettel Container Registry (vCR)',
      note: 'Bảng giá chưa bao gồm thuế VAT (nếu có). Lưu trữ dữ liệu an toàn trên hạ tầng Enterprise SSD.',
      tables: [
        {
          id: 'vcr_pricing_table',
          title: 'BẢNG GIÁ TIÊU CHUẨN VIETTEL CONTAINER REGISTRY (vCR)',
          columns: [
            { header: 'Gói Dịch Vụ', key: 'name', width: '25%' },
            { header: 'Dung Lượng (Storage)', key: 'storage', width: '25%', align: 'center' },
            { header: 'Giới Hạn Tải (Pull Limit)', key: 'pullLimit', width: '25%', align: 'center' },
            { header: 'Phí Duy Trì (VNĐ/tháng)', key: 'price', width: '25%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'Basic', storage: '10 GB', pullLimit: '50 lượt', price: '380.000 đ' },
            { name: 'Standard', storage: '100 GB', pullLimit: '200 lượt', price: '490.000 đ' },
            { name: 'Team', storage: '500 GB', pullLimit: 'Unlimited', price: '920.000 đ' },
            { name: 'Business', storage: '2000 GB (2 TB)', pullLimit: 'Unlimited', price: '2.600.000 đ' },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp có nhu cầu lưu trữ dung lượng lớn hơn 2 TB hoặc tích hợp mạng nội bộ Dedicated?',
        buttonText: 'Yêu Cầu Tư Vấn Gói Doanh Nghiệp',
        notesPlaceholder: 'Đăng ký tư vấn kho lưu trữ Container Image dung lượng lớn',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG VƯỢT TRỘI & THÔNG SỐ',
      headline: 'Năng Lực Quản Lý & Bảo Vệ Container Image Chuyên Sâu',
      cards: [
        {
          id: 'vcr-feat-1',
          title: 'Quản Lý Repository Phân Quyền',
          description: 'Khởi tạo repository trước khi push image với 2 chế độ Public (mọi user có thể Pull) và Private (chỉ Root User/IAM User được cấp quyền mới có thể Push/Pull).',
        },
        {
          id: 'vcr-feat-2',
          title: 'Hỗ Trợ Đa Dạng OCI-Compatible Images',
          description: 'Lưu trữ và quản lý linh hoạt nhiều loại định dạng đóng gói theo chuẩn OCI như Docker Image, Helm Chart (yêu cầu Helm v3 trở lên), CNAB, OPA bundle...',
        },
        {
          id: 'vcr-feat-3',
          title: 'Quét & Quản Lý Lỗ Hổng (Trivy Scan)',
          description: 'Tự động phân tích, phát hiện và quản lý các lỗ hổng phần mềm (CVE) của container image thông qua công cụ quét Trivy tích hợp sẵn.',
        },
        {
          id: 'vcr-feat-4',
          title: 'Xác Thực Bảo Mật Bằng CLI Secret',
          description: 'Cung cấp CLI Secret thay cho mật khẩu khi đăng nhập vào vCR từ Docker, Containerd, K8s, Helm CLI. Secret tự động hết hạn sau 24h để nâng cao an toàn.',
        },
        {
          id: 'vcr-feat-5',
          title: 'Phân Quyền Chi Tiết Dựa Trên IAM Policy',
          description: 'Root User toàn quyền kiểm soát, cấp phát và phân quyền xác thực cho từng IAM User truy cập vào các tài nguyên vCR nhất định.',
        },
        {
          id: 'vcr-feat-6',
          title: 'Tự Động Hóa Vòng Đời Với CI/CD',
          description: 'Kết nối nhanh với các công cụ Jenkins, GitLab CI, tự động hóa toàn diện các bước build, scan, push và deploy lên các cụm Kubernetes.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật (Technical Spec Table)',
      specs: [
        { category: 'Mô hình dịch vụ', details: 'Nền tảng dịch vụ PaaS (Platform-as-a-Service)' },
        { category: 'Chuẩn Artifact hỗ trợ', details: 'OCI-compatible, Docker Images, Helm Charts (v3+), CNAB, OPA bundle' },
        { category: 'Công cụ quét lỗ hổng', details: 'Tích hợp công cụ quét bảo mật Trivy Scanner' },
        { category: 'Cơ chế định danh Image', details: 'Mã hash SHA256 & Image Tagging' },
        { category: 'Phương thức xác thực', details: 'IAM User Policy, CLI Secret (hiệu lực 01 ngày/lần làm mới)' },
        { category: 'Giao thức tương thích', details: 'Docker CLI, Containerd, Kubernetes (K8s), Helm CLI' },
        { category: 'Tích hợp CI/CD', details: 'Jenkins, GitLab CI, GitHub Actions, Viettel DevOps Tools' },
        { category: 'Hệ sinh thái liên kết', details: 'Viettel Open Kubernetes Service (vKS), Viettel Virtual Private Cloud (vVPC)' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH DOANH NGHIỆP',
      headline: 'Giá Trị Gia Tăng Khi Vận Hành Trên Viettel Container Registry',
      pillars: [
        {
          number: '01',
          title: 'Tăng Tốc Chu Kỳ Phát Triển (Time-to-Market)',
          description: 'Đơn giản hóa quá trình chia sẻ và phân phối container images giữa các nhóm phát triển, đẩy nhanh chu kỳ phát hành sản phẩm Cloud-native.',
        },
        {
          number: '02',
          title: 'Bảo Mật & Tuân Thủ Vững Chắc',
          description: 'Ngăn ngừa rủi ro rò rỉ mã nguồn và triển khai các image chứa lỗ hổng bảo mật nhờ hệ thống quét Trivy và quản lý IAM nghiêm ngặt.',
        },
        {
          number: '03',
          title: 'Tối Ưu Chi Phí & Tài Nguyên',
          description: 'Mô hình gói cước phân tầng rõ ràng từ Basic đến Business, không phụ thuộc vào các Registry ngoại quốc giúp tiết kiệm băng thông và chi phí duy trì.',
        },
        {
          number: '04',
          title: 'Hạ Tầng Trong Nước Ổn Định & Tốc Độ Cao',
          description: 'Đặt tại Trung tâm dữ liệu Viettel IDC đạt chuẩn quốc tế, tốc độ Push/Pull cực nhanh, không lo ảnh hưởng từ các sự cố cáp quang biển.',
        },
      ],
    },
    useCases: {
      eyebrow: 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
      headline: 'Kịch Bản Triển Khai Thực Tế Của Viettel Container Registry',
      items: [
        {
          id: 'vcr-uc-1',
          title: '1. Đường Ống CI/CD Tự Động Hóa',
          context: 'Doanh nghiệp cần nơi lưu trữ đích cho các luồng build tự động từ Jenkins/GitLab CI.',
          solution: 'vCR đóng vai trò repository trung gian, tự động quét Trivy và kích hoạt deploy an toàn sang cụm máy chủ Dev/Staging/Production.',
        },
        {
          id: 'vcr-uc-2',
          title: '2. Kho Chứa Helm Chart & OPA Chính Hãng',
          context: 'Cần quản lý phiên bản tập trung các gói Helm charts v3 và các chính sách OPA bundle.',
          solution: 'vCR hỗ trợ đầy đủ chuẩn OCI, lưu trữ và đồng bộ hóa các bản phát hành Helm chart cho toàn bộ cụm hạ tầng Kubernetes nội bộ.',
        },
        {
          id: 'vcr-uc-3',
          title: '3. Triển Khai Đa Môi Trường Microservices',
          context: 'Nhiều nhóm lập trình viên độc lập cùng phát triển và chia sẻ các module microservices.',
          solution: 'Phân phối các bản đóng gói microservices cho nhiều nhóm phát triển với quyền phân cấp rạch ròi qua IAM Policy.',
        },
        {
          id: 'vcr-uc-4',
          title: '4. Kiểm Soát An Ninh Chuỗi Cung Ứng Phần Mềm',
          context: 'Yêu cầu phòng chống lỗ hổng bảo mật zero-day trước khi đưa ứng dụng vào vận hành thực tế.',
          solution: 'Tự động chặn các container images chứa lỗ hổng nghiêm trọng được phát hiện bởi Trivy trước khi đưa vào môi trường Production.',
        },
      ],
    },
    faq: {
      eyebrow: 'CÂU HỎI THƯỜNG GẶP',
      headline: 'Câu Hỏi Thường Gặp Về Viettel Container Registry (vCR)',
      items: [
        {
          question: 'Tại sao doanh nghiệp cần sử dụng Container Registry?',
          answer: 'Container Registry cung cấp một giải pháp tập trung và an toàn để lưu trữ, quản lý và phân phối các container images, giúp quản lý hiệu quả và đồng nhất toàn bộ vòng đời phát triển, triển khai của ứng dụng dựa trên container.',
        },
        {
          question: 'Sự khác biệt giữa Public Registry và Private Registry là gì?',
          answer: 'Public Registry là nơi lưu trữ các container images mở mà mọi người dùng đều có thể truy cập và tải về (Pull) qua Internet. Trong khi đó, Private Registry chỉ cho phép những Root User hoặc IAM User sở hữu và được cấp quyền mới có thể thực hiện Push/Pull Image.',
        },
        {
          question: 'vCR giúp bảo mật các container images như thế nào?',
          answer: 'vCR bảo mật thông qua việc phân quyền IAM Policies chặt chẽ, cơ chế CLI Secret tự hết hạn sau 1 ngày, mã hóa khi lưu trữ và tự động quét các lỗ hổng phần mềm của image thông qua ứng dụng phân tích Trivy.',
        },
        {
          question: 'Làm thế nào để tự động hóa việc xây dựng và triển khai hình ảnh container lên Registry?',
          answer: 'Khách hàng có thể dễ dàng sử dụng các công cụ CI/CD phổ biến như Jenkins, GitLab CI, GitHub Actions kết hợp cùng CLI Secret của vCR để tự động hóa trọn gói quy trình Build, Scan, Push và Deploy container images.',
        },
        {
          question: 'vCR hỗ trợ những định dạng đóng gói nào khác ngoài Docker Image?',
          answer: 'Ngoài Docker Image, vCR hỗ trợ đa dạng các định dạng đóng gói OCI-compatible như Helm chart (từ phiên bản Helm v3 trở lên), CNAB (Cloud Native Application Bundle), OPA bundle...',
        },
      ],
    },
    footerCta: {
      headline: 'Sẵn Sàng Tối Ưu Hóa Quy Trình Quản Lý Container Image Cho Doanh Nghiệp?',
      subtext: 'Đội ngũ chuyên gia Cloud-native của Viettel IDC luôn sẵn sàng tư vấn, hỗ trợ thiết lập kho lưu trữ container images bảo mật, tối ưu quy trình DevOps của bạn.',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
      buttonText: 'ĐĂNG KÝ TƯ VẤN & TRẢI NGHIỆM NGAY',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU KỸ THUẬT & TRỢ GIÚP',
      headline: 'Tài Nguyên Kỹ Thuật & Kênh Hỗ Trợ Chuyên Sâu',
      documentation: {
        title: 'Trung Tâm Tài Liệu & Hướng Dẫn vCR',
        desc: 'Cẩm nang kết nối Docker/Containerd CLI, hướng dẫn tạo và làm mới CLI Secret, cấu hình Trivy Vulnerability Scan và tích hợp CI/CD Pipeline.',
        linkText: 'Xem Tài Liệu Kỹ Thuật',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Kỹ Thuật 24/7/365',
        desc: 'Đội ngũ chuyên gia DevOps tiếp nhận yêu cầu, hỗ trợ kết nối hệ thống và xử lý vướng mắc kỹ thuật 24/7/365.',
        linkText: 'Gửi Yêu Cầu Hỗ Trợ',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI DỊCH VỤ LIÊN QUAN',
      headline: 'Hệ Sinh Thái Điện Toán Đám Mây & Cloud-Native Tích Hợp',
      items: [
        {
          title: 'Viettel Open Kubernetes Service (vKS)',
          description: 'Nền tảng điều phối container đạt chuẩn CNCF, pull image trực tiếp từ vCR an toàn và nhanh chóng.',
          path: '/services/containers/kubernetes-service/',
          sku: 'SVC-036A',
        },
        {
          title: 'Viettel Virtual Private Cloud (vVPC)',
          description: 'Trung tâm dữ liệu ảo bảo mật cao, thiết lập hạ tầng chạy ứng dụng container cô lập.',
          path: '/services/compute/virtual-private-cloud/',
          sku: 'SVC-003',
        },
        {
          title: 'Viettel Cloud Object Storage',
          description: 'Không gian lưu trữ đối tượng dung lượng lớn chuẩn S3 API cho các khối dữ liệu tĩnh.',
          path: '/services/storage/cloud-object-storage/',
          sku: 'SVC-013',
        },
        {
          title: 'Viettel Cloud Management Platform (vCMP)',
          description: 'Giao diện quản trị, điều phối và giám sát tập trung tài nguyên đa đám mây.',
          path: '/services/cloud-operations/vcmp/',
          sku: 'SVC-042',
        },
      ],
    },
  },

  // =========================================================================
  // 3. VIETTEL MANAGED KUBERNETES SERVICE (vMKS)
  // =========================================================================
  'vmks': {
    id: 'vmks',
    sku: 'SVC-036B',
    pillar: 'paas-containers',
    pageTitle: 'Viettel Managed Kubernetes Service (vMKS) – Quản Trị Ủy Thác Container | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Nền tảng PaaS & Container', path: '/services/containers' },
        { name: 'Viettel Managed Kubernetes Service (vMKS)' },
      ],
      eyebrow: 'NỀN TẢNG KUBERNETES ỦY THÁC TOÀN DIỆN CHO DOANH NGHIỆP',
      headline: 'Viettel Managed Kubernetes Service (vMKS) – Đơn Giản Hóa Vận Hành, Tự Động Hóa Triển Khai Microservices & Container',
      subheading: 'Giải pháp nền tảng Kubernetes giúp doanh nghiệp và nhà phát triển dễ dàng xây dựng, triển khai, mở rộng và quản lý vòng đời ứng dụng container. Viettel IDC thay bạn quản lý toàn diện Control Plane 24/7, giúp bạn an tâm tập trung tối đa vào mã nguồn và phát triển sản phẩm cốt lõi.',
      primaryCta: { text: 'Đăng Ký Tư Vấn / Dùng Thử', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá Gói', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Nền Tảng Điều Phối Container Ủy Thác – Tăng Tốc Vận Hành Cho Nhà Phát Triển',
      leftDescription: [
        'Viettel Managed Kubernetes Service (vMKS) là dịch vụ nền tảng giúp các nhà phát triển và doanh nghiệp triển khai, vận hành và mở rộng các ứng dụng đóng gói theo hình thái container một cách tự động và dễ dàng. Với vMKS, Viettel IDC thay bạn quản lý toàn diện lớp điều khiển (Control Plane / Master Nodes), đảm nhận từ giám sát, vá lỗi bảo mật đến xử lý sự cố.',
        'Sở hữu đội ngũ chuyên gia giàu kinh nghiệm cùng hạ tầng đạt chuẩn quốc tế (ISO 9001, ISO 27001, ISO 27017), vMKS mang đến môi trường container chuẩn hóa, tính sẵn sàng cao và an toàn tuyệt đối.',
      ],
      highlights: [
        {
          title: 'Ủy thác quản lý Control Plane',
          description: 'Viettel IDC vận hành, nâng cấp và xử lý sự cố Master Node 24/7, khách hàng không cần can thiệp kỹ thuật phức tạp.',
        },
        {
          title: 'Tự động hóa & Phục hồi thông minh',
          description: 'Pod bị lỗi hoặc không phản hồi được tự động thay thế; duy trì Zero-downtime khi cập nhật ứng dụng.',
        },
        {
          title: 'Quản trị Node Group linh hoạt',
          description: 'Tùy biến Worker Nodes theo nhóm với Label, Taints và thiết lập chính sách Auto-scaling thích ứng theo tải.',
        },
        {
          title: 'Lưu trữ NFS bền vững',
          description: 'Tích hợp NFS Server độc lập làm Persistent Storage, chia sẻ dữ liệu liên tục và an toàn giữa các Node.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & GÓI DỊCH VỤ',
      headline: 'Bảng Giá Dịch Vụ Viettel Managed Kubernetes Service',
      controls: [
        {
          id: 'region',
          label: 'Khu vực hạ tầng',
          options: [
            { id: 'south', label: 'Miền Nam' },
            { id: 'north', label: 'Miền Bắc' },
          ],
          defaultSelected: 'south',
        },
        {
          id: 'segment',
          label: 'Phân khúc',
          options: [
            { id: 'premium', label: 'Cao Cấp' },
          ],
          defaultSelected: 'premium',
        },
      ],
      note: 'Đăng ký sử dụng theo các gói cấu hình có sẵn hoặc tùy chỉnh cấu hình theo nhu cầu thực tế. Bảng giá chưa bao gồm thuế VAT.',
      tables: [
        {
          id: 'vmks_pricing_table',
          title: 'BẢNG CẤU HÌNH GÓI vMKS TIÊU CHUẨN',
          columns: [
            { header: 'Gói Dịch Vụ', key: 'name', width: '20%' },
            { header: 'vCPU', key: 'vcpu', width: '12%', align: 'center' },
            { header: 'RAM', key: 'ram', width: '12%', align: 'center' },
            { header: 'Lưu Trữ (Storage)', key: 'storage', width: '16%', align: 'center' },
            { header: 'Load Balancer', key: 'lb', width: '14%', align: 'center' },
            { header: 'Elastic IP', key: 'ip', width: '12%', align: 'center' },
            { header: 'Đơn Giá / Tháng', key: 'price', width: '14%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'BASIC', vcpu: '6 vCPU', ram: '12 GB', storage: '150 GB Storage', lb: '1 Load Balancer', ip: '1 Elastic IP', price: '3.600.000 đ' },
            { name: 'STANDARD', vcpu: '12 vCPU', ram: '24 GB', storage: '300 GB Storage', lb: '1 Load Balancer', ip: '1 Elastic IP', price: '6.200.000 đ' },
            { name: 'CẤU HÌNH TÙY CHỈNH', vcpu: 'Tùy chọn', ram: 'Tùy chọn', storage: 'Mở rộng theo nhu cầu', lb: 'Tùy chọn', ip: 'Tùy chọn', price: 'Liên hệ báo giá' },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp cần tùy chỉnh cấu hình quy mô lớn hơn hoặc thiết kế cụm HA theo kiến trúc riêng?',
        buttonText: 'Yêu Cầu Tư Vấn Cấu Hình Tùy Chỉnh',
        notesPlaceholder: 'Đăng ký tư vấn cấu hình tùy chỉnh vMKS',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG VƯỢT TRỘI & THÔNG SỐ',
      headline: 'Năng Lực Vận Hành & Tính Năng Nòng Cốt Của vMKS',
      cards: [
        {
          id: 'vmks-feat-1',
          title: 'Quản Trị Control Plane Toàn Diện',
          description: 'Viettel IDC chịu trách nhiệm giám sát, vá lỗi, cập nhật và xử lý sự cố cho Master Node 24/7 mà bạn không cần bận tâm can thiệp kỹ thuật.',
        },
        {
          id: 'vmks-feat-2',
          title: 'Quản Lý Node Group Linh Hoạt',
          description: 'Nhóm các Worker Nodes theo nhu cầu hạ tầng riêng biệt; hỗ trợ cấu hình gán nhãn (label), taints và thiết lập tự động co giãn tài nguyên (Auto-scaling).',
        },
        {
          id: 'vmks-feat-3',
          title: 'Hỗ Trợ Phiên Bản Kubernetes Mới Nhất',
          description: 'Quy trình cập nhật và nâng cấp phiên bản K8s được tối ưu hóa, đảm bảo hệ thống luôn thừa hưởng tính năng mới nhất mà không gián đoạn dịch vụ.',
        },
        {
          id: 'vmks-feat-4',
          title: 'Lưu Trữ Bền Vững Với NFS Storage',
          description: 'Tích hợp sẵn giải pháp lưu trữ NFS Node làm Persistent Storage, kết nối chia sẻ dữ liệu an toàn giữa các Node và mở rộng dung lượng trực tiếp trên portal.',
        },
        {
          id: 'vmks-feat-5',
          title: 'Tự Động Hóa & Phục Hồi Thông Minh (Auto-healing)',
          description: 'Tự động phát hiện và thay thế các Pod bị lỗi hoặc không phản hồi healthcheck; đảm bảo ứng dụng luôn chạy liên tục với Zero-downtime.',
        },
        {
          id: 'vmks-feat-6',
          title: 'Tích Hợp Giám Sát "One-Click"',
          description: 'Khởi tạo nhanh chóng các công cụ trực quan hóa và giám sát chuẩn công nghiệp như Kubernetes Dashboard, Prometheus và Grafana chỉ với 1 cú click chuột.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật (Technical Spec Table)',
      specs: [
        { category: 'Mô hình dịch vụ', details: 'Managed Kubernetes (Platform-as-a-Service - PaaS)' },
        { category: 'Hệ điều hành & Kiến trúc', details: 'Linux (Ubuntu) tối ưu trên nền tảng kiến trúc x86_64' },
        { category: 'Cấu hình Master Node', details: 'Tùy chọn 01 Master Node hoặc 03 Master Nodes kèm Load Balancer (HA)' },
        { category: 'Cấu hình Worker Node', details: 'Cung cấp tối thiểu 03 Worker Nodes trong mỗi gói; mở rộng không giới hạn' },
        { category: 'Lưu trữ Persistent Storage', details: 'NFS Node (Persistent Storage) kết nối độc lập qua giao thức NFS chuẩn' },
        { category: 'Bộ công cụ Giám sát', details: 'Kubernetes Dashboard, Prometheus, Grafana (Kích hoạt 1-click)' },
        { category: 'Cơ chế Co giãn & Phục hồi', details: 'Auto-scaling Worker Node, Auto-healing Pod, Zero-downtime update' },
        { category: 'Chứng nhận & Tiêu chuẩn', details: 'ISO 9001, ISO 27001, ISO 27017, Data Center chuẩn quốc tế Tier III' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH DOANH NGHIỆP',
      headline: 'Tối Ưu Nguồn Lực & Bứt Phá Tốc Độ Phát Triển Sản Phẩm',
      pillars: [
        {
          number: '01',
          title: 'Triển Khai Thần Tốc',
          description: 'Khởi tạo cụm Kubernetes hoàn chỉnh chỉ trong vài phút với vài thao tác chọn cấu hình, thay vì mất hàng giờ tự dựng hạ tầng thủ công.',
        },
        {
          number: '02',
          title: 'An Tâm Tuyệt Đối',
          description: 'Viettel IDC giám sát và vận hành Control Plane 24/7; cơ chế Auto-healing và HA giúp ứng dụng luôn sẵn sàng và ổn định.',
        },
        {
          number: '03',
          title: 'Tối Ưu Chi Phí Đầu Tư',
          description: 'Chỉ trả tiền cho tài nguyên Worker Node thực tế sử dụng; loại bỏ hoàn toàn gánh nặng duy trì đội ngũ kỹ sư chuyên sâu về hạ tầng K8s.',
        },
        {
          number: '04',
          title: 'Mở Rộng Không Giới Hạn',
          description: 'Chủ động Auto-scaling theo nhu cầu thực tế của ứng dụng, đảm bảo hệ thống phản hồi mượt mà trong các khung giờ cao điểm.',
        },
      ],
    },
    useCases: {
      eyebrow: 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
      headline: 'Kịch Bản Triển Khai Tiêu Biểu Cho vMKS',
      items: [
        {
          id: 'vmks-uc-1',
          title: '1. Triển Khai Kiến Trúc Ứng Dụng Microservices',
          context: 'Doanh nghiệp muốn chuyển đổi từ kiến trúc Monolith sang Microservices để tăng tốc độ phát triển và độc lập giữa các module dữ liệu.',
          solution: 'vMKS chuẩn hóa cách thức phát triển thành các bộ service độc lập, điều phối container tự động và dễ dàng co giãn tài nguyên theo từng tác vụ.',
        },
        {
          id: 'vmks-uc-2',
          title: '2. Triển Khai API & Backend Services',
          context: 'Đội ngũ kỹ sư cần môi trường xây dựng, kiểm thử và release các phiên bản Backend/API độc lập mà không ảnh hưởng tới toàn bộ hệ thống chung.',
          solution: 'Vận hành trên vMKS giúp deploy và update phiên bản mới không làm gián đoạn dịch vụ, nâng cao tính khả dụng và hiệu năng tổng thể.',
        },
      ],
    },
    faq: {
      eyebrow: 'CÂU HỎI THƯỜNG GẶP',
      headline: 'Câu Hỏi Thường Gặp Về Viettel Managed Kubernetes Service (vMKS)',
      items: [
        {
          question: 'Khi nào tôi nên sử dụng dịch vụ Viettel Managed Kubernetes Service (vMKS)?',
          answer: 'vMKS là lựa chọn hoàn hảo khi bạn muốn tập trung hoàn toàn vào việc phát triển ứng dụng (Code & Deploy) mà không muốn tốn nhân sự và thời gian để quản lý hạ tầng phía dưới (Control Plane, Network, OS). Dịch vụ đặc biệt phù hợp cho các doanh nghiệp cần triển khai Microservices nhanh chóng và ổn định.',
        },
        {
          question: 'Dịch vụ vMKS cung cấp những thành phần nào trong một cụm?',
          answer: [
            'Master Node (Control Plane): Cung cấp lựa chọn 01 Master Node hoặc 03 Master Nodes kèm Load Balancer chứa toàn bộ logic điều phối vòng đời container.',
            'Worker Node: Nơi triển khai các ứng dụng container; mỗi gói vMKS cung cấp tối thiểu 03 Worker Node để tối ưu khả năng chịu lỗi và tính sẵn sàng.',
            'NFS Node (Persistent Storage): Máy chủ NFS độc lập được dùng làm vùng lưu trữ dữ liệu bền vững kết nối trực tiếp đến các container.',
          ],
        },
        {
          question: 'vMKS hỗ trợ những hệ điều hành và kiến trúc nào?',
          answer: 'Hiện tại, dịch vụ vMKS hỗ trợ tối ưu trên hệ điều hành Linux (Ubuntu) với kiến trúc phần cứng x86_64.',
        },
        {
          question: 'Kubernetes là gì và mang lại lợi ích gì cho việc vận hành container?',
          answer: 'Kubernetes là hệ thống điều phối container mã nguồn mở, cho phép triển khai và quản lý container ở quy mô lớn. Kubernetes tổ chức container thành các nhóm logic, tự động điều phối trên hạ tầng máy chủ của Viettel IDC, giúp vận hành Microservices đồng nhất và dễ dàng mở rộng.',
        },
        {
          question: 'Tôi có thể mở rộng dung lượng lưu trữ NFS khi ứng dụng phát triển không?',
          answer: 'Hoàn toàn được. Bạn có thể chủ động cấu hình và mở rộng thêm dung lượng NFS Persistent Storage trực tiếp trên giao diện trang quản trị dịch vụ bất cứ lúc nào.',
        },
      ],
    },
    footerCta: {
      headline: 'Khởi Tạo Cụm Kubernetes Quản Trị Toàn Diện Cùng Viettel IDC Ngay Hôm Nay!',
      subtext: 'Giải phóng đội ngũ kỹ sư khỏi gánh nặng quản trị hạ tầng, nâng cao hiệu năng và đảm bảo tính liên tục cho ứng dụng của bạn.',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
      buttonText: 'ĐĂNG KÝ TRẢI NGHIỆM vMKS NGAY',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU KỸ THUẬT & TRỢ GIÚP',
      headline: 'Tài Liệu Kỹ Thuật & Trung Tâm Hỗ Trợ',
      documentation: {
        title: 'Cẩm Nang & Tài Liệu Quản Trị vMKS',
        desc: 'Hướng dẫn kết nối Kubeconfig, hướng dẫn quản lý Node Group, cấu hình NFS Persistent Storage và thiết lập công cụ giám sát Prometheus/Grafana.',
        linkText: 'Xem Tài Liệu Kỹ Thuật',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Kỹ Thuật 24/7',
        desc: 'Đội ngũ chuyên gia Cloud Native thường trực đồng hành giải đáp thắc mắc, xử lý sự cố hạ tầng 24/7 qua Hotline 1800 8088 hoặc hệ thống Ticket.',
        linkText: 'Gửi Yêu Cầu Hỗ Trợ',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI DỊCH VỤ LIÊN QUAN',
      headline: 'Hệ Sinh Thái Đám Mây Mở Rộng Đi Kèm',
      items: [
        {
          title: 'Viettel Container Registry',
          description: 'Kho lưu trữ và quét lỗ hổng bảo mật cho Docker Images trước khi deploy lên cụm vMKS.',
          path: '/services/containers/container-registry/',
          sku: 'SVC-017',
        },
        {
          title: 'Viettel Database Service (vDBS)',
          description: 'Quản trị tự động cơ sở dữ liệu (MySQL, PostgreSQL, Redis...), dễ dàng kết nối nội bộ an toàn với cụm container.',
          path: '/services/database/database-service/',
          sku: 'SVC-019',
        },
        {
          title: 'Viettel DevOps Tools',
          description: 'Bộ công cụ CI/CD hoàn chỉnh giúp tự động hóa toàn bộ quy trình Build - Test - Deploy lên Kubernetes.',
          path: '/services/managed-services/devops/',
          sku: 'SVC-052',
        },
        {
          title: 'Viettel Cloudrity & Cloud Firewall',
          description: 'Giải pháp tường lửa và bảo vệ ứng dụng Web, ngăn chặn tấn công mạng lớp 4 - lớp 7.',
          path: '/services/security/cloud-waf/',
          sku: 'SVC-031',
        },
      ],
    },
  },

  // =========================================================================
  // 4. VIETTEL DATABASE SERVICE (vDBS)
  // =========================================================================
  'vdbs': {
    id: 'vdbs',
    sku: 'SVC-019',
    pillar: 'database',
    pageTitle: 'Viettel Database Service (vDBS) – Quản Trị CSDL Đám Mây Tự Động Hóa | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Nền tảng Đám mây (PaaS)', path: '/services/database' },
        { name: 'Viettel Database Service (vDBS)' },
      ],
      eyebrow: 'DỊCH VỤ CƠ SỞ DỮ LIỆU TRÊN NỀN TẢNG ĐÁM MÂY TỰ ĐỘNG HÓA',
      headline: 'Viettel Database Service (vDBS) – Quản Trị Cơ Sở Dữ Liệu Đám Mây Tốc Độ Cao, Sẵn Sàng Vượt Trội',
      subheading: 'Giải pháp cơ sở dữ liệu dạng nền tảng (PaaS) trên Public Cloud Viettel IDC. Hỗ trợ đa dạng hệ quản trị Relational và NoSQL, tự động hóa thiết lập & vận hành, mở rộng linh hoạt theo nhu cầu với cam kết SLA uptime ≥ 99,95%.',
      primaryCta: { text: 'Dùng Thử Miễn Phí / Đăng Ký Tư Vấn', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá Chi Tiết', action: 'pricing' },
      statRow: [
        { number: '≥ 99,95%', label: 'Uptime', desc: 'Cam kết SLA hoạt động liên tục chuẩn Enterprise' },
        { number: 'Multi-DBMS', label: 'Đa Nền Tảng', desc: 'Hỗ trợ CSDL Relational & NoSQL phổ biến' },
        { number: 'Auto-Deploy', label: 'Tự Động Hóa', desc: 'Khởi tạo cụm DB tự động chỉ trong vài phút' },
        { number: 'NĐ 53/2022', label: 'Chủ Quyền Số', desc: 'Lưu trữ 100% dữ liệu tại Việt Nam' },
      ],
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Tổng Quan Nền Tảng Viettel Database Service (vDBS)',
      leftDescription: [
        'Viettel Database Service (vDBS) là dịch vụ thuộc lớp nền tảng (PaaS) cung cấp cho doanh nghiệp các cơ sở dữ liệu trên đám mây với nhiều tùy chọn hệ quản trị Relational (MySQL, MariaDB, PostgreSQL) và NoSQL (Redis, MongoDB, Cassandra). Được phát triển trên nền tảng Public Cloud mạnh mẽ của Viettel IDC, vDBS giúp loại bỏ hoàn toàn gánh nặng cài đặt, cấu hình, vá lỗi và tối ưu hóa hạ tầng cơ sở dữ liệu thủ công.',
        'Hỗ trợ 2 mô hình kết nối chuẩn: Public Access (kết nối trực tiếp an toàn qua Access Port cho ứng dụng bên ngoài) và Private Access (DB Instance nằm trọn vẹn trong cùng dải VPC Network, liên kết nội bộ an toàn với Cloud Server vCS, vOKS, vOPC).',
      ],
      highlights: [
        {
          title: 'Khởi tạo DB hoàn toàn tự động',
          description: 'Cấp phát tài nguyên và cấu hình tham số DB sẵn sàng sử dụng chỉ sau vài phút.',
        },
        {
          title: 'Đầy đủ kiến trúc Standalone, Replication, Cluster',
          description: 'Hỗ trợ mô hình 1 Node (Dev/Test), 2 Node Master-Slave và 3 Node Active/Active High Availability.',
        },
        {
          title: 'Kiểm soát an toàn đường truyền mạng',
          description: 'VPC cô lập, thiết lập Security Group và cơ chế phân quyền truy cập chặt chẽ.',
        },
        {
          title: 'Chứng nhận tiêu chuẩn quốc tế',
          description: 'Đáp ứng ISO 9001:2015, ISO 27001:2013, ISO 27017:2015 và chứng nhận Cloud Việt Nam (G-Cloud).',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
      headline: 'Bảng Giá Dịch Vụ Viettel Database Service (vDBS)',
      controls: [
        {
          id: 'arch',
          label: 'Mô hình kiến trúc',
          options: [
            { id: 'standalone', label: '1. Standalone (1 Node - Dev/Test)' },
            { id: 'replication', label: '2. Replication (2 Node - Master/Slave)' },
            { id: 'cluster', label: '3. Cluster (3 Node - HA Active/Active)' },
          ],
          defaultSelected: 'standalone',
        },
        {
          id: 'region',
          label: 'Khu vực Data Center',
          options: [
            { id: 'south', label: 'Miền Nam' },
            { id: 'north', label: 'Miền Bắc' },
          ],
          defaultSelected: 'south',
        },
        {
          id: 'dbms',
          label: 'Hệ quản trị CSDL',
          options: [
            { id: 'mysql', label: 'MySQL v5.7 / v8.0' },
            { id: 'mariadb', label: 'MariaDB' },
            { id: 'postgres', label: 'PostgreSQL' },
            { id: 'redis', label: 'Redis' },
            { id: 'mongodb', label: 'MongoDB' },
            { id: 'cassandra', label: 'Cassandra' },
          ],
          defaultSelected: 'mysql',
        },
      ],
      note: 'Bảng giá duy trì theo tháng, chưa bao gồm thuế VAT (nếu có).',
      tables: [
        {
          id: 'vdbs_standalone_table',
          title: '1. MÔ HÌNH STANDALONE (1 NODE - DÀNH CHO MÔI TRƯỜNG DEV/TEST)',
          applicableCondition: { arch: 'standalone' },
          columns: [
            { header: 'Mã gói cấu hình', key: 'name', width: '25%' },
            { header: 'Số vCPU', key: 'vcpu', width: '12%', align: 'center' },
            { header: 'Dung lượng RAM', key: 'ram', width: '15%', align: 'center' },
            { header: 'Ổ cứng SSD', key: 'ssd', width: '15%', align: 'center' },
            { header: 'Số Node', key: 'nodes', width: '10%', align: 'center' },
            { header: 'Phí duy trì (VNĐ/tháng)', key: 'price', width: '15%', align: 'right', isPrice: true },
            { header: 'Dùng thử', key: 'trial', width: '8%', align: 'center' },
          ],
          rows: [
            { name: 'T2.VDBS 1 Standalone', vcpu: '2 vCPU', ram: '2 GB', ssd: '20 GB', nodes: '1 Node', price: '450.000 đ', trial: 'Có' },
            { name: 'T2.VDBS 2 Standalone', vcpu: '2 vCPU', ram: '4 GB', ssd: '40 GB', nodes: '1 Node', price: '800.000 đ', trial: 'Không' },
            { name: 'T2.VDBS 3 Standalone', vcpu: '4 vCPU', ram: '4 GB', ssd: '40 GB', nodes: '1 Node', price: '1.100.000 đ', trial: 'Không' },
            { name: 'T2.VDBS 4 Standalone', vcpu: '4 vCPU', ram: '8 GB', ssd: '60 GB', nodes: '1 Node', price: '1.400.000 đ', trial: 'Không' },
            { name: 'T2.VDBS 5 Standalone', vcpu: '8 vCPU', ram: '8 GB', ssd: '80 GB', nodes: '1 Node', price: '1.800.000 đ', trial: 'Không' },
            { name: 'T2.VDBS 6 Standalone', vcpu: '8 vCPU', ram: '16 GB', ssd: '100 GB', nodes: '1 Node', price: '2.500.000 đ', trial: 'Không' },
          ],
        },
        {
          id: 'vdbs_replication_table',
          title: '2. MÔ HÌNH REPLICATION (2 NODE - ACTIVE/STANDBY MASTER-SLAVE)',
          applicableCondition: { arch: 'replication' },
          columns: [
            { header: 'Mã gói cấu hình', key: 'name', width: '25%' },
            { header: 'Số vCPU', key: 'vcpu', width: '12%', align: 'center' },
            { header: 'Dung lượng RAM', key: 'ram', width: '15%', align: 'center' },
            { header: 'Ổ cứng SSD', key: 'ssd', width: '15%', align: 'center' },
            { header: 'Số Node', key: 'nodes', width: '10%', align: 'center' },
            { header: 'Phí duy trì (VNĐ/tháng)', key: 'price', width: '15%', align: 'right', isPrice: true },
            { header: 'Dùng thử', key: 'trial', width: '8%', align: 'center' },
          ],
          rows: [
            { name: 'T2.VDBS 1 Replication', vcpu: '2 vCPU', ram: '2 GB', ssd: '20 GB', nodes: '2 Node', price: '810.000 đ', trial: 'Có' },
            { name: 'T2.VDBS 2 Replication', vcpu: '2 vCPU', ram: '4 GB', ssd: '40 GB', nodes: '2 Node', price: '1.440.000 đ', trial: 'Không' },
            { name: 'T2.VDBS 3 Replication', vcpu: '4 vCPU', ram: '4 GB', ssd: '40 GB', nodes: '2 Node', price: '1.980.000 đ', trial: 'Không' },
            { name: 'T2.VDBS 4 Replication', vcpu: '4 vCPU', ram: '8 GB', ssd: '60 GB', nodes: '2 Node', price: '2.520.000 đ', trial: 'Không' },
            { name: 'T2.VDBS 5 Replication', vcpu: '8 vCPU', ram: '8 GB', ssd: '80 GB', nodes: '2 Node', price: '3.240.000 đ', trial: 'Không' },
            { name: 'T2.VDBS 6 Replication', vcpu: '8 vCPU', ram: '16 GB', ssd: '100 GB', nodes: '2 Node', price: '4.500.000 đ', trial: 'Không' },
          ],
        },
        {
          id: 'vdbs_cluster_table',
          title: '3. MÔ HÌNH CLUSTER (3 NODE - ACTIVE/ACTIVE HIGH AVAILABILITY)',
          applicableCondition: { arch: 'cluster' },
          columns: [
            { header: 'Mã gói cấu hình', key: 'name', width: '25%' },
            { header: 'Số vCPU', key: 'vcpu', width: '12%', align: 'center' },
            { header: 'Dung lượng RAM', key: 'ram', width: '15%', align: 'center' },
            { header: 'Ổ cứng SSD', key: 'ssd', width: '15%', align: 'center' },
            { header: 'Số Node', key: 'nodes', width: '10%', align: 'center' },
            { header: 'Phí duy trì (VNĐ/tháng)', key: 'price', width: '15%', align: 'right', isPrice: true },
            { header: 'Dùng thử', key: 'trial', width: '8%', align: 'center' },
          ],
          rows: [
            { name: 'T2.VDBS 1 Cluster', vcpu: '2 vCPU', ram: '2 GB', ssd: '20 GB', nodes: '3 Node', price: '1.080.000 đ', trial: 'Có' },
            { name: 'T2.VDBS 2 Cluster', vcpu: '2 vCPU', ram: '4 GB', ssd: '40 GB', nodes: '3 Node', price: '1.920.000 đ', trial: 'Không' },
            { name: 'T2.VDBS 3 Cluster', vcpu: '4 vCPU', ram: '4 GB', ssd: '40 GB', nodes: '3 Node', price: '2.640.000 đ', trial: 'Không' },
            { name: 'T2.VDBS 4 Cluster', vcpu: '4 vCPU', ram: '8 GB', ssd: '60 GB', nodes: '3 Node', price: '3.360.000 đ', trial: 'Không' },
            { name: 'T2.VDBS 5 Cluster', vcpu: '8 vCPU', ram: '8 GB', ssd: '80 GB', nodes: '3 Node', price: '4.320.000 đ', trial: 'Không' },
            { name: 'T2.VDBS 6 Cluster', vcpu: '8 vCPU', ram: '16 GB', ssd: '100 GB', nodes: '3 Node', price: '6.000.000 đ', trial: 'Không' },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp cần thiết kế cụm cơ sở dữ liệu lớn (Big Data, Sharding, Multi-region hoặc cấu hình RAM chuyên biệt)?',
        buttonText: 'Yêu Cầu Tư Vấn Kiến Trúc CSDL & Báo Giá',
        notesPlaceholder: 'Đăng ký tư vấn kiến trúc Database vDBS chuyên sâu',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET',
      headline: 'Tính Năng Nổi Bật & Thông Số Kỹ Thuật Chuyên Sâu',
      cards: [
        {
          id: 'vdbs-feat-1',
          title: 'Đa dạng Hệ Quản Trị CSDL',
          description: 'Hỗ trợ đầy đủ cơ sở dữ liệu quan hệ (MySQL, MariaDB, PostgreSQL) và phi quan hệ/NoSQL (Redis, Cassandra, MongoDB).',
        },
        {
          id: 'vdbs-feat-2',
          title: 'Khởi tạo dịch vụ tự động',
          description: 'Quá trình cấp phát tài nguyên, cài đặt phần mềm và cấu hình tham số DB diễn ra tự động hoàn toàn chỉ trong vài phút.',
        },
        {
          id: 'vdbs-feat-3',
          title: 'Cơ chế Database Replication & Failover',
          description: 'Khởi tạo mô hình Master-Slave/Multi-Node nâng cao hiệu năng Read-Write và tự động chuyển đổi dự phòng khi có node gặp sự cố.',
        },
        {
          id: 'vdbs-feat-4',
          title: 'Tùy chỉnh tham số linh động',
          description: 'Cho phép quản trị viên tinh chỉnh các tham số cấu hình Database Instance phù hợp với từng bài toán truy vấn đặc thù.',
        },
        {
          id: 'vdbs-feat-5',
          title: 'Kết nối an toàn đa phân lớp',
          description: 'Tích hợp mạng riêng ảo VPC, phân tách dải mạng private và kiểm soát kết nối bảo mật theo đúng best-practice ngành.',
        },
        {
          id: 'vdbs-feat-6',
          title: 'Mô hình thanh toán Pay-as-you-go',
          description: 'Thanh toán linh hoạt theo tài nguyên thực tế sử dụng (PAYG), hạn chế tối đa lãng phí tài nguyên dư thừa.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật Tiêu Chuẩn (Technical Spec Table)',
      specs: [
        { category: 'Mô hình kiến trúc', details: 'Standalone (1 Node), Replication (2 Nodes), Cluster (3 Nodes)' },
        { category: 'Hệ quản trị CSDL hỗ trợ', details: 'MySQL (5.7, 8.0), MariaDB (10.5, 10.6), PostgreSQL (12.0, 15.0), Redis (6.0.9, 6.2.7), Cassandra (3.11.16, 4.1.3), MongoDB (6.0)' },
        { category: 'Loại ổ cứng lưu trữ', details: '100% Enterprise SSD tốc độ cao' },
        { category: 'Mô hình kết nối mạng', details: 'Public Access (qua Access Port) & Private Access (nội bộ VPC)' },
        { category: 'Cam kết chất lượng (SLA)', details: 'Uptime ≥ 99,95%' },
        { category: 'Hình thức thanh toán', details: 'Thuê bao tháng cố định hoặc Pay-as-you-go (PAYG)' },
        { category: 'Chứng nhận ATTT & Tiêu chuẩn', details: 'ISO 9001:2015, ISO 27001:2013, ISO 27017:2015, Tiêu chuẩn G-Cloud' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH DOANH NGHIỆP',
      headline: 'Giá Trị Vượt Trội Cho Doanh Nghiệp Số',
      pillars: [
        {
          number: '01',
          title: 'Tối ưu nguồn lực & Giảm tải vận hành',
          description: 'Tiết kiệm thời gian thiết lập ban đầu; hệ thống được đội ngũ chuyên gia DBA giàu kinh nghiệm của Viettel IDC giám sát và bảo trì liên tục.',
        },
        {
          number: '02',
          title: 'Hiệu năng cao & Độ trễ thấp',
          description: 'Hạ tầng đặt trực tiếp tại các Trung tâm dữ liệu Viettel IDC tại Việt Nam, tối ưu đường truyền nội địa và không lo rủi ro đứt cáp quang biển.',
        },
        {
          number: '03',
          title: 'Mở rộng quy mô tức thì',
          description: 'Dễ dàng nâng cấp dung lượng lưu trữ, vCPU và RAM theo đà tăng trưởng của dữ liệu mà không làm gián đoạn hệ thống.',
        },
        {
          number: '04',
          title: 'Bảo đảm chủ quyền & Tuân thủ pháp lý',
          description: 'Dữ liệu được lưu trữ 100% tại Việt Nam, đáp ứng hoàn toàn Nghị định 53/2022/NĐ-CP và Luật An ninh mạng.',
        },
      ],
    },
    useCases: {
      eyebrow: 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
      headline: 'Kịch Bản Triển Khai vDBS Thực Tế',
      items: [
        {
          id: 'vdbs-uc-1',
          title: '1. Chuyển Dịch Hệ Thống Database Lên Đám Mây (Cloud Migration & DR)',
          context: 'Doanh nghiệp muốn tinh gọn đội ngũ vận hành CSDL On-Premise cồng kềnh và thiết lập site dự phòng dữ liệu an toàn.',
          solution: 'Chuyển dịch CSDL lên vDBS tự động hóa để tiết kiệm chi phí, đồng thời làm lớp dữ liệu trọng yếu cho các giải pháp Disaster Recovery.',
        },
        {
          id: 'vdbs-uc-2',
          title: '2. Ứng Dụng Ngành Tài Chính – Ngân Hàng (BFSI)',
          context: 'Hệ thống giao dịch đòi hỏi tính toàn vẹn dữ liệu, độ sẵn sàng cao và tiêu chuẩn an toàn thông tin khắt khe nhất.',
          solution: 'Ứng dụng mô hình Cluster (3 Nodes) kết hợp Private VPC, đảm bảo thời gian chuyển đổi dự phòng tức thì và bảo mật tuyệt đối.',
        },
        {
          id: 'vdbs-uc-3',
          title: '3. Website Thương Mại Điện Tử & Bán Lẻ Quy Mô Lớn',
          context: 'Lưu lượng truy cập và khối lượng truy vấn tăng đột biến trong các khung giờ flash sale, sự kiện khuyến mại lớn.',
          solution: 'Tận dụng cơ chế Replication tách biệt cụm Read/Write và khả năng mở rộng tài nguyên linh hoạt để không nghẽn cơ sở dữ liệu.',
        },
        {
          id: 'vdbs-uc-4',
          title: '4. Nền Tảng Trò Chơi Trực Tuyến (Gaming & Real-Time Apps)',
          context: 'Cần tốc độ phản hồi cực nhanh, độ trễ thấp và khả năng ghi nhận dữ liệu người chơi theo thời gian thực.',
          solution: 'Kết hợp mô hình cơ sở dữ liệu quan hệ (MySQL) lưu trữ thông tin tài khoản cùng NoSQL In-memory (Redis) làm bộ nhớ đệm tốc độ cao.',
        },
      ],
    },
    faq: {
      eyebrow: 'CÂU HỎI THƯỜNG GẶP',
      headline: 'Câu Hỏi Thường Gặp Về Viettel Database Service (vDBS)',
      items: [
        {
          question: 'Mức độ dự phòng nào của dịch vụ vDBS phù hợp với nhu cầu của tôi?',
          answer: [
            'Standalone (01 Node): Mức độ dự phòng cơ bản, chi phí tối ưu, phù hợp môi trường Dev/Test.',
            'Active/Standby (Replication ≥ 02 Nodes): Mức độ dự phòng trung bình, tự động fail-over sang node standby trong 10–30 giây, phù hợp môi trường Production.',
            'Active/Active (Clustering ≥ 03 Nodes): Mức độ dự phòng cao nhất, dịch vụ luôn sẵn sàng và gần như không có gián đoạn.',
          ],
        },
        {
          question: 'Dịch vụ vDBS hiện đang hỗ trợ những hệ quản trị CSDL nào?',
          answer: 'vDBS hỗ trợ đa dạng DBMS với các phiên bản ổn định nhất: MySQL (5.7, 8.0), MariaDB (10.5, 10.6), PostgreSQL (12.0, 15.0), Redis (6.0.9, 6.2.7), Cassandra (3.11.16, 4.1.3), MongoDB (6.0).',
        },
        {
          question: 'Hệ quản trị CSDL tôi cần chưa có trong danh mục hỗ trợ thì phải làm sao?',
          answer: 'Viettel IDC liên tục cập nhật và bổ sung các phiên bản DBMS mới. Khách hàng có thể gửi yêu cầu trực tiếp qua cổng hỗ trợ để đội ngũ kỹ sư tiếp nhận và có phương án tùy biến hạ tầng riêng.',
        },
        {
          question: 'Dữ liệu trên vDBS được bảo mật và cách ly như thế nào?',
          answer: 'Mỗi cụm DB Instance được triển khai độc lập trong dải mạng riêng (VPC), cô lập với các khách hàng khác và hỗ trợ thiết lập Security Group/Firewall để giới hạn IP truy cập.',
        },
        {
          question: 'Dịch vụ vDBS có hỗ trợ sao lưu (Backup) dữ liệu tự động không?',
          answer: 'Có. vDBS tích hợp sẵn cơ chế sao lưu định kỳ tự động và cho phép khách hàng tạo điểm khôi phục nhanh chóng trước khi thực hiện các đợt cập nhật lớn.',
        },
      ],
    },
    footerCta: {
      headline: 'Sẵn Sàng Tự Động Hóa & Tăng Tốc Cơ Sở Dữ Liệu Của Bạn?',
      subtext: 'Đội ngũ chuyên gia DBA của Viettel IDC luôn sẵn sàng hỗ trợ tư vấn kiến trúc CSDL, lập kế hoạch di chuyển dữ liệu và tối ưu chi phí 24/7.',
      hotline: '1800 8088',
      email: 'support@viettelidc.com.vn | sales@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
      buttonText: 'ĐĂNG KÝ NHẬN TƯ VẤN & DÙNG THỬ NGAY',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU KỸ THUẬT & TRỢ GIÚP',
      headline: 'Tài Nguyên Kỹ Thuật & Cổng Trợ Giúp',
      documentation: {
        title: 'Tài Liệu Hướng Dẫn Kỹ Thuật (vDBS Documentation)',
        desc: 'Hướng dẫn cấu hình kết nối qua Private/Public Port, thiết lập cụm Replication Master-Slave, tối ưu tham số my.cnf và mẫu script kết nối.',
        linkText: 'Khám Phá Tài Liệu',
      },
      supportCenter: {
        title: 'Trung Tâm Chăm Sóc Khách Hàng (Support Center 24/7)',
        desc: 'Đội ngũ kỹ sư DBA giàu kinh nghiệm thường trực hỗ trợ xử lý sự cố khẩn cấp và tối ưu câu lệnh truy vấn qua Hotline 1800 8088.',
        linkText: 'Gửi Yêu Cầu Hỗ Trợ',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI DỊCH VỤ LIÊN KẾT',
      headline: 'Hệ Sinh Thái Giải Pháp Đám Mây Tích Hợp',
      items: [
        {
          title: 'Viettel Virtual Private Cloud (vVPC)',
          description: 'Trung tâm dữ liệu ảo bảo mật cao, kết nối trực tiếp với DB qua đường truyền private không mất phí.',
          path: '/services/compute/virtual-private-cloud/',
          sku: 'SVC-003',
        },
        {
          title: 'Viettel Open Kubernetes Service (vOKS)',
          description: 'Nền tảng điều phối container kết nối cụm microservices với cơ sở dữ liệu vDBS.',
          path: '/services/containers/kubernetes-service/',
          sku: 'SVC-036A',
        },
        {
          title: 'Viettel Cloud Backup (BaaS)',
          description: 'Giải pháp sao lưu dữ liệu tự động lưu trữ dài hạn và chống mã độc an toàn.',
          path: '/services/storage/cloud-backup/',
          sku: 'SVC-016',
        },
        {
          title: 'Viettel Cloud Security (Cloudrity)',
          description: 'Lớp tường lửa bảo vệ ứng dụng Web (WAF) và ngăn chặn tấn công vào lớp dịch vụ.',
          path: '/services/security/cloud-waf/',
          sku: 'SVC-031',
        },
      ],
    },
  },

  // =========================================================================
  // 5. VIETTEL DOMAIN
  // =========================================================================
  'domain': {
    id: 'domain',
    sku: 'SVC-053',
    pillar: 'domain-hosting',
    pageTitle: 'Viettel Domain – Kiểm Tra & Đăng Ký Tên Miền Quốc Gia & Quốc Tế | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Ứng dụng & Dịch vụ Web', path: '/services/domain-hosting' },
        { name: 'Viettel Domain (Tên miền)' },
      ],
      eyebrow: 'BẢO VỆ & ĐỊNH DANH THƯƠNG HIỆU DOANH NGHIỆP TRÊN INTERNET',
      headline: 'Viettel Domain – Kiểm Tra & Đăng Ký Tên Miền Quốc Gia & Quốc Tế Trực Tuyến',
      subheading: 'Tra cứu và đăng ký tên miền nhanh chóng để xác lập chủ quyền số và bảo vệ thương hiệu trên môi trường trực tuyến. Sở hữu địa chỉ web tin cậy, giúp doanh nghiệp tiếp cận khách hàng tiềm năng không giới hạn về thời gian và vị trí địa lý.',
      primaryCta: { text: 'Tra Cứu & Đăng Ký Ngay', action: 'link', link: '#pricing' },
      secondaryCta: { text: 'Xem Bảng Giá Tên Miền', action: 'pricing' },
      hasDomainSearch: true,
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Tổng Quan Về Dịch Vụ Tên Miền Viettel IDC',
      leftDescription: [
        'Tên miền (Domain) là tên của một website hoạt động trên internet, đóng vai trò là một địa chỉ vật lý – tương tự như địa chỉ nhà hay zip code giúp các thiết bị định tuyến dẫn đường. Trình duyệt web sử dụng tên miền để điều hướng người dùng tới website của bạn.',
        'Khi sở hữu một tên miền, đối tượng khách hàng của bạn không còn bị giới hạn về mặt địa lý hay thời gian, sẵn sàng truy cập và mua hàng online trên website mọi lúc mọi nơi. Viettel IDC cung cấp đa dạng các đuôi tên miền chuyên nghiệp theo đúng mục đích sử dụng và nhu cầu của doanh nghiệp.',
      ],
      highlights: [
        {
          title: 'Xác lập sự hiện diện số chính chủ',
          description: 'Bảo vệ quyền sở hữu thương hiệu và tài sản số của doanh nghiệp trên không gian mạng.',
        },
        {
          title: 'Hệ thống tên miền Quốc gia & Quốc tế',
          description: 'Cung cấp toàn diện tên miền Quốc gia (.vn) chuẩn VNNIC và Tên miền Quốc tế (.com, .net, .org...).',
        },
        {
          title: 'Kết nối hệ sinh thái Viettel IDC',
          description: 'Đồng bộ trực tiếp với Web Hosting, Email Server doanh nghiệp và chứng chỉ số SSL.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
      headline: 'Bảng Giá Đăng Ký & Duy Trì Tên Miền',
      controls: [
        {
          id: 'domainType',
          label: 'Phân loại tên miền',
          options: [
            { id: 'vn', label: 'Tên miền quốc gia (.vn)' },
            { id: 'intl', label: 'Tên miền quốc tế (.com, .net, ...)' },
          ],
          defaultSelected: 'vn',
        },
      ],
      note: 'Đơn vị tính: VNĐ. Bảng giá quy định theo thông tư và biểu phí quản lý của VNNIC / ICANN.',
      tables: [
        {
          id: 'vn_domains_table',
          title: '1. BẢNG GIÁ TÊN MIỀN QUỐC GIA (.VN)',
          applicableCondition: { domainType: 'vn' },
          columns: [
            { header: 'Đuôi tên miền', key: 'ext', width: '22%' },
            { header: 'Lệ phí đăng ký (k.VAT)', key: 'regFee', width: '15%', align: 'right' },
            { header: 'Phí duy trì/năm (k.VAT)', key: 'renewFee', width: '15%', align: 'right' },
            { header: 'QTr/Khóa năm đầu (chưa VAT)', key: 'lockYear1', width: '16%', align: 'right' },
            { header: 'Tổng năm đầu (có VAT)', key: 'totalYear1', width: '16%', align: 'right', isPrice: true },
            { header: 'Tổng mỗi năm sau (có VAT)', key: 'totalAfter', width: '16%', align: 'right', isPrice: true },
          ],
          rows: [
            { ext: '.vn', regFee: '100.000 đ', renewFee: '350.000 đ', lockYear1: '200.000 đ', totalYear1: '670.000 đ', totalAfter: '460.000 đ' },
            { ext: '.com.vn, .net.vn, .biz.vn', regFee: '100.000 đ', renewFee: '250.000 đ', lockYear1: '200.000 đ', totalYear1: '570.000 đ', totalAfter: '360.000 đ' },
            { ext: '.edu.vn, .gov.vn, .org.vn, .pro.vn', regFee: '50.000 đ', renewFee: '100.000 đ', lockYear1: '200.000 đ', totalYear1: '370.000 đ', totalAfter: '210.000 đ' },
            { ext: 'Tên miền địa giới (vd: .hanoi.vn)', regFee: '10.000 đ', renewFee: '40.000 đ', lockYear1: '200.000 đ', totalYear1: '250.000 đ', totalAfter: '150.000 đ' },
            { ext: '.name.vn', regFee: '10.000 đ', renewFee: '20.000 đ', lockYear1: '20.000 đ', totalYear1: '52.000 đ', totalAfter: '42.000 đ' },
          ],
        },
        {
          id: 'intl_domains_table',
          title: '2. BẢNG GIÁ TÊN MIỀN QUỐC TẾ',
          subtitle: 'Đơn vị tính: VNĐ - Đơn giá chưa bao gồm thuế VAT',
          applicableCondition: { domainType: 'intl' },
          columns: [
            { header: 'Tên miền', key: 'ext', width: '30%' },
            { header: 'Đăng ký & duy trì năm đầu', key: 'year1', width: '25%', align: 'right', isPrice: true },
            { header: 'Duy trì năm tiếp theo', key: 'renew', width: '25%', align: 'right' },
            { header: 'Phí chuyển về Viettel IDC', key: 'transfer', width: '20%', align: 'right' },
          ],
          rows: [
            { ext: '.com', year1: '360.000 đ', renew: '360.000 đ', transfer: '360.000 đ' },
            { ext: '.net', year1: '375.000 đ', renew: '375.000 đ', transfer: '375.000 đ' },
            { ext: '.org', year1: '440.000 đ', renew: '440.000 đ', transfer: '440.000 đ' },
            { ext: '.biz', year1: '420.000 đ', renew: '420.000 đ', transfer: '420.000 đ' },
            { ext: '.info', year1: '355.000 đ', renew: '355.000 đ', transfer: '355.000 đ' },
            { ext: '.asia', year1: '390.000 đ', renew: '390.000 đ', transfer: '390.000 đ' },
            { ext: '.shop', year1: '850.000 đ', renew: '850.000 đ', transfer: '850.000 đ' },
            { ext: '.site', year1: '740.000 đ', renew: '740.000 đ', transfer: '740.000 đ' },
            { ext: '.xyz', year1: '270.000 đ', renew: '270.000 đ', transfer: '270.000 đ' },
            { ext: '.pro', year1: '360.000 đ', renew: '360.000 đ', transfer: '360.000 đ' },
            { ext: '.online', year1: '790.000 đ', renew: '790.000 đ', transfer: '790.000 đ' },
            { ext: '.company', year1: '420.000 đ', renew: '420.000 đ', transfer: '420.000 đ' },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp cần chuyển nhượng hoặc chuyển giao tên miền số lượng lớn về Viettel IDC?',
        buttonText: 'Yêu Cầu Hỗ Trợ Đăng Ký / Chuyển Nhượng',
        notesPlaceholder: 'Đăng ký hỗ trợ quản lý/chuyển giao danh mục tên miền',
      },
    },
    features: {
      eyebrow: 'NGUYÊN TẮC ĐẶT TÊN MIỀN & QUY CHUẨN KỸ THUẬT',
      headline: 'Quy Chuẩn Cấu Trúc & Nguyên Tắc Đặt Tên Miền Chuẩn Hóa',
      cards: [
        {
          id: 'dom-feat-1',
          title: 'Quy Định Ký Tự Hợp Lệ',
          description: 'Tên miền chỉ gồm các ký tự chữ cái (a-z), chữ số (0-9) và dấu gạch ngang (-). Toàn bộ khoảng trắng và ký tự đặc biệt khác đều không hợp lệ.',
        },
        {
          id: 'dom-feat-2',
          title: 'Giới Hạn Độ Dài Kỹ Thuật',
          description: 'Chuỗi tên miền không được vượt quá 63 ký tự, bao gồm cả phần đuôi mở rộng (.com, .vn, .net...).',
        },
        {
          id: 'dom-feat-3',
          title: 'Quy Chuẩn Dấu Gạch Ngang',
          description: 'Không thể bắt đầu hoặc kết thúc cấu trúc tên miền bằng dấu gạch ngang (-).',
        },
        {
          id: 'dom-feat-4',
          title: 'Tính Nhận Diện & Thương Hiệu',
          description: 'Tên miền nên ngắn gọn, dễ nhớ, dễ hình dung, tránh gây nhầm lẫn và cần liên quan trực tiếp đến tên chủ thể/lĩnh vực hoạt động.',
        },
      ],
      specTableTitle: 'Bảng Thông Số & Tiêu Chuẩn Kỹ Thuật (Technical Spec Table)',
      specs: [
        { category: 'Cơ quan cấp phép Tên miền .VN', details: 'Trung tâm Internet Việt Nam (VNNIC) – Bộ Thông tin và Truyền thông' },
        { category: 'Cơ quan quản lý Tên miền Quốc tế', details: 'ICANN (Internet Corporation for Assigned Names and Numbers)' },
        { category: 'Thời hạn đăng ký tối thiểu', details: '01 năm (Hỗ trợ duy trì liên tục nhiều năm)' },
        { category: 'Hệ thống DNS Anycast', details: 'Phân giải tên miền độ trễ cực thấp, chống tấn công DNS Flood' },
        { category: 'Tính năng Quản trị & DNS Record', details: 'Hỗ trợ cấu hình nhanh A, CNAME, MX, TXT, SRV, NS qua Web Portal' },
        { category: 'Tính năng Bảo vệ Khóa tên miền', details: 'Hỗ trợ Registry Lock / Khóa quản trị tên miền chống thay đổi trái phép' },
        { category: 'Thời gian gia hạn ân hạn (.vn)', details: '30 ngày sau ngày hết hạn trước khi chuyển sang trạng thái thu hồi' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH DOANH NGHIỆP',
      headline: 'Giá Trị Vượt Trội Khi Đăng Ký Tên Miền Tại Viettel IDC',
      pillars: [
        {
          number: '01',
          title: 'Bảo Vệ Chủ Quyền & Thương Hiệu Số',
          description: 'Xác lập quyền sở hữu pháp lý duy nhất trên môi trường Internet, ngăn chặn đối thủ đầu cơ tên miền thương hiệu.',
        },
        {
          number: '02',
          title: 'Nâng Cao Uy Tín Doanh Nghiệp',
          description: 'Tên miền chuẩn quốc gia (.vn) và quốc tế khẳng định tính chuyên nghiệp, gia tăng chỉ số tin cậy trong mắt khách hàng và đối tác B2B.',
        },
        {
          number: '03',
          title: 'Tối Ưu Hiệu Quả SEO & Marketing',
          description: 'Tên miền ngắn gọn, chuẩn hóa giúp nâng cao thứ hạng tìm kiếm trên Google, tăng tỷ lệ nhấp chuột (CTR) của chiến dịch quảng cáo.',
        },
        {
          number: '04',
          title: 'Tích Hợp Hệ Sinh Thái Dịch Vụ Liền Mạch',
          description: 'Dễ dàng kết nối đồng bộ với dịch vụ Web Hosting, máy chủ Cloud Server, Email doanh nghiệp và chứng chỉ bảo mật SSL.',
        },
      ],
    },
    useCases: {
      eyebrow: 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
      headline: 'Kịch Bản Khai Thác & Bảo Vệ Tên Miền Hiệu Quả',
      items: [
        {
          id: 'dom-uc-1',
          title: '1. Xây Dựng Cổng Thông Tin & Website Doanh Nghiệp (Corporate Portal)',
          context: 'Doanh nghiệp thành lập mới cần định vị thương hiệu và xây dựng kênh tiếp thị chính thống.',
          solution: 'Đăng ký cặp tên miền chính .vn và .com.vn hoặc .com để bảo hộ thương hiệu toàn diện.',
        },
        {
          id: 'dom-uc-2',
          title: '2. Kinh Doanh Thương Mại Điện Tử & Bán Hàng Trực Tuyến (E-Commerce)',
          context: 'Nhà bán lẻ cần tiếp cận người mua trên internet không giới hạn khoảng cách và thời gian.',
          solution: 'Lựa chọn các đuôi tên miền chuyên ngành như .shop, .biz, .vn tạo ấn tượng mua sắm tin cậy.',
        },
        {
          id: 'dom-uc-3',
          title: '3. Thiết Lập Hệ Thống Email Doanh Nghiệp Theo Tên Miền (Corporate Email)',
          context: 'Nâng cao tính bảo mật và uy tín giao dịch đối ngoại thay vì sử dụng email miễn phí.',
          solution: 'Trỏ MX Record tên miền về hệ thống Viettel Email Hosting để sở hữu định dạng user@tencongty.vn.',
        },
        {
          id: 'dom-uc-4',
          title: '4. Bảo Hộ Thương Hiệu & Phòng Ngừa Rủi Ro Đầu Cơ (Brand Protection)',
          context: 'Tập đoàn, nhãn hàng lớn cần ngăn chặn việc đối thủ hoặc bên thứ ba đăng ký trước tên thương mại.',
          solution: 'Đăng ký bao vây danh mục tên miền liên quan (các đuôi mở rộng phổ biến và biến thể phát âm).',
        },
      ],
    },
    faq: {
      eyebrow: 'CÂU HỎI THƯỜNG GẶP',
      headline: 'Câu Hỏi Thường Gặp Về Dịch Vụ Viettel Domain',
      items: [
        {
          question: 'Khi đăng ký sai tên miền có thể hủy hoặc thay đổi đăng ký không?',
          answer: 'Khi bạn đăng ký sai tên miền thì không thể hủy hoặc thay đổi. Tên miền có tính chất duy nhất trên toàn cầu, vì vậy việc khởi tạo đăng ký phải đảm bảo chính xác tuyệt đối.',
        },
        {
          question: 'Có thể đăng ký tên miền mà chưa mua dịch vụ lưu trữ Website (Hosting/Server) không?',
          answer: 'Có. Bạn hoàn toàn có thể đăng ký tên miền trước để giữ quyền sở hữu định danh. Sau khi website hoàn tất thiết kế, bạn mới cần đăng ký thêm dịch vụ lưu trữ (Web Hosting hoặc máy chủ Cloud) để xuất bản trang web.',
        },
        {
          question: 'Nếu không nộp phí duy trì thì khi nào tên miền bị thu hồi?',
          answer: 'Đối với tên miền quốc gia “.vn”, sau 30 ngày kể từ ngày hết hạn mà không nộp phí duy trì, tên miền sẽ được chuyển sang trạng thái xử lý thu hồi. Sau khi cơ quan quản lý xem xét và xác định tên miền không vi phạm quy định, tên miền sẽ được đưa về trạng thái tự do để các tổ chức, cá nhân khác đăng ký.',
        },
        {
          question: 'Khi tên miền hết hạn thì tôi có được đóng phí gia hạn cho tên miền nữa không?',
          answer: 'Kể từ ngày tên miền .vn hết hạn, bạn có thêm 30 ngày để thực hiện đóng phí gia hạn. Sau khoảng thời gian này, tên miền sẽ bị thu hồi và bạn không thể đóng phí duy trì được nữa.',
        },
        {
          question: 'Làm thế nào để tôi đăng ký mua dịch vụ Viettel Domain và nhận tài liệu hỗ trợ?',
          answer: 'Quý khách có thể trực tiếp nhập tên miền vào thanh tra cứu trên trang chủ để đăng ký trực tuyến, hoặc tham khảo tài liệu hướng dẫn chi tiết tại mục Hướng dẫn Kỹ thuật của Viettel IDC.',
        },
      ],
    },
    footerCta: {
      headline: 'Bảo Vệ & Khẳng Định Thương Hiệu Trực Tuyến Ngay Hôm Nay',
      subtext: 'Tra cứu và sở hữu ngay tên miền thương hiệu với sự đồng hành và hỗ trợ thủ tục nhanh gọn từ Viettel IDC.',
      hotline: '1800 8088',
      email: 'sales@viettelidc.com.vn | support@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
      buttonText: 'TRA CỨU & ĐĂNG KÝ TÊN MIỀN NGAY',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU KỸ THUẬT & TRỢ GIÚP',
      headline: 'Tài Nguyên Kỹ Thuật & Trung Tâm Hỗ Trợ',
      documentation: {
        title: 'Hướng Dẫn Quản Trị & Cấu Hình DNS (Domain Docs)',
        desc: 'Tài liệu hướng dẫn trỏ bản ghi DNS (A, CNAME, MX, TXT), kích hoạt Registry Lock và thủ tục chuyển đổi/chuyển nhượng tên miền.',
        linkText: 'Xem Hướng Dẫn Kỹ Thuật',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Thủ Tục & Pháp Lý 24/7 (Support Center)',
        desc: 'Hỗ trợ kiểm tra hồ sơ đăng ký tên miền .VN theo chuẩn VNNIC, hỗ trợ khai báo tên miền quốc tế và giải quyết tranh chấp.',
        linkText: 'Gửi Yêu Cầu Hỗ Trợ',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI SẢN PHẨM LIÊN QUAN',
      headline: 'Hệ Sinh Thái Dịch Vụ Số Bổ Trợ',
      items: [
        {
          title: 'Viettel Web Hosting',
          description: 'Dịch vụ lưu trữ website tốc độ cao, tối ưu chi phí và tương thích toàn diện với mọi tên miền.',
          path: '/services/domain-hosting/web-hosting/',
          sku: 'SVC-054',
        },
        {
          title: 'Viettel Email Hosting',
          description: 'Giải pháp email theo tên miền doanh nghiệp chuyên nghiệp, bảo mật và phòng chống spam hiệu quả.',
          path: '/services/domain-hosting/email-hosting/',
          sku: 'SVC-055',
        },
        {
          title: 'Viettel SSL',
          description: 'Chứng chỉ bảo mật số mã hóa dữ liệu website, nâng cao thứ hạng SEO và gia tăng uy tín thương hiệu.',
          path: '/services/security/ssl/',
          sku: 'SVC-035',
        },
        {
          title: 'Microsoft Office 365',
          description: 'Bộ ứng dụng văn phòng đám mây và cộng tác hiện đại tích hợp xác thực theo tên miền riêng.',
          path: '/services/digital-workplace/microsoft-365/',
          sku: 'SVC-047',
        },
      ],
    },
  },

  // =========================================================================
  // 6. VIETTEL WEB HOSTING
  // =========================================================================
  'web-hosting': {
    id: 'web-hosting',
    sku: 'SVC-054',
    pillar: 'domain-hosting',
    pageTitle: 'Viettel Web Hosting – Lưu Trữ Website Tốc Độ Cao & Ổn Định | Viettel IDC',
    hero: {
      breadcrumb: [
        { name: 'Trang chủ', path: '/' },
        { name: 'Dịch vụ', path: '/services' },
        { name: 'Lưu trữ Đám mây', path: '/services/domain-hosting' },
        { name: 'Viettel Web Hosting' },
      ],
      eyebrow: 'KHÔNG GIAN LƯU TRỮ WEBSITE DOANH NGHIỆP TRÊN HẠ TẦNG CLOUD CHUẨN QUỐC TẾ',
      headline: 'Viettel Web Hosting – Không Gian Lưu Trữ Website Tốc Độ Cao, Ổn Định & Tối Ưu Chi Phí',
      subheading: 'Dịch vụ lưu trữ website chuyên nghiệp xây dựng trên nền tảng điện toán đám mây hiện đại, tối ưu hoàn hảo cho các trang tin tức, giới thiệu doanh nghiệp và sàn thương mại điện tử. Hệ thống tương thích linh hoạt trên cả Windows và Linux, hỗ trợ đa dạng mã nguồn với cam kết SLA 99.95%.',
      primaryCta: { text: 'Dùng Thử Miễn Phí / Đăng Ký Tư Vấn', action: 'quote' },
      secondaryCta: { text: 'Xem Bảng Giá Gói HostPro', action: 'pricing' },
    },
    overview: {
      eyebrow: 'TỔNG QUAN DỊCH VỤ',
      headline: 'Tổng Quan Kiến Trúc & Năng Lực Vận Hành Của Viettel Web Hosting',
      leftDescription: [
        'Web Hosting là gói dịch vụ cung cấp không gian lưu trữ website trên Internet giúp website có thể vận hành ổn định 24/7. Dịch vụ hoạt động trên nguyên lý lưu trữ toàn bộ mã nguồn, cơ sở dữ liệu và hình ảnh của website lên hệ thống cụm máy chủ điện toán đám mây có hiệu năng xử lý cao (high-powered computers) kết nối vào mạng Internet toàn cầu.',
        'Khi người dùng nhập tên miền, hệ thống DNS sẽ định tuyến kết nối đến máy chủ Viettel IDC để truy xuất dữ liệu và truyền tải nội dung website hiển thị mượt mà trên trình duyệt của người dùng. Nền tảng được tối ưu hóa toàn diện cho cả môi trường Windows Server và Linux, tương thích với hầu hết các hệ quản trị nội dung (CMS) và cơ sở dữ liệu hiện nay.',
      ],
      highlights: [
        {
          title: 'Hạ tầng Cloud chuẩn quốc tế',
          description: 'Vận hành trên hạ tầng Cloud đạt chuẩn ISO 27017:2015, ISO 27001:2013 và ISO 9001:2015.',
        },
        {
          title: 'Control Panel chuyên nghiệp',
          description: 'Cung cấp toàn quyền quản trị website và cơ sở dữ liệu thông qua cPanel (Linux) và Plesk (Windows).',
        },
        {
          title: 'Bảo vệ dữ liệu với RAID 10',
          description: 'Bảo vệ dữ liệu an toàn với cơ chế mảng ổ cứng RAID 10 và lịch sao lưu tự động định kỳ hàng tuần.',
        },
        {
          title: 'Nâng cấp không gián đoạn',
          description: 'Mở rộng dung lượng và nâng cấp thông số tức thì mà không làm gián đoạn truy cập của người dùng.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BẢNG GIÁ & DỰ TOÁN CHI PHÍ',
      headline: 'Bảng Giá Gói Dịch Vụ Web Hosting Linh Hoạt & Tiết Kiệm',
      controls: [
        {
          id: 'os',
          label: 'Nền tảng hệ điều hành',
          options: [
            { id: 'linux', label: 'LINUX (cPanel)' },
            { id: 'windows', label: 'WINDOWS (Plesk)' },
          ],
          defaultSelected: 'linux',
        },
        {
          id: 'region',
          label: 'Khu vực Data Center',
          options: [
            { id: 'north', label: 'Miền Bắc' },
            { id: 'south', label: 'Miền Nam' },
          ],
          defaultSelected: 'north',
        },
      ],
      note: 'Bảng giá niêm yết chưa bao gồm thuế VAT (nếu có).',
      tables: [
        {
          id: 'hostpro_pricing_table',
          title: 'BẢNG GIÁ GÓI HOSTPRO TIÊU CHUẨN',
          columns: [
            { header: 'Gói dịch vụ', key: 'name', width: '15%' },
            { header: 'Dung lượng', key: 'storage', width: '12%', align: 'center' },
            { header: 'Băng thông', key: 'bandwidth', width: '12%', align: 'center' },
            { header: 'Subdomain / FTP', key: 'subdomain', width: '12%', align: 'center' },
            { header: 'Email', key: 'email', width: '8%', align: 'center' },
            { header: 'Database', key: 'db', width: '8%', align: 'center' },
            { header: 'Alias/Park', key: 'alias', width: '10%', align: 'center' },
            { header: 'Addon domain', key: 'addon', width: '10%', align: 'center' },
            { header: 'Phí duy trì/tháng', key: 'price', width: '13%', align: 'right', isPrice: true },
          ],
          rows: [
            { name: 'HostPro 01', storage: '1.000 MB', bandwidth: 'Unlimited GB', subdomain: 'Unlimited', email: '1', db: '1', alias: 'Unlimited', addon: '-', price: '45.000 đ' },
            { name: 'HostPro 02', storage: '2.000 MB', bandwidth: 'Unlimited GB', subdomain: 'Unlimited', email: '3', db: '2', alias: 'Unlimited', addon: '1', price: '85.000 đ' },
            { name: 'HostPro 03', storage: '3.000 MB', bandwidth: 'Unlimited GB', subdomain: 'Unlimited', email: '5', db: '3', alias: 'Unlimited', addon: '1', price: '110.000 đ' },
            { name: 'HostPro 04', storage: '4.000 MB', bandwidth: 'Unlimited GB', subdomain: 'Unlimited', email: '10', db: '5', alias: 'Unlimited', addon: '2', price: '145.000 đ' },
            { name: 'HostPro 05', storage: '6.000 MB', bandwidth: 'Unlimited GB', subdomain: 'Unlimited', email: '15', db: '6', alias: 'Unlimited', addon: '3', price: '210.000 đ' },
            { name: 'HostPro 06', storage: '10.000 MB', bandwidth: 'Unlimited GB', subdomain: 'Unlimited', email: '30', db: '8', alias: 'Unlimited', addon: '4', price: '300.000 đ' },
          ],
        },
      ],
      customCta: {
        text: 'Doanh nghiệp có nhu cầu lưu trữ dung lượng lớn hơn 10.000 MB hoặc triển khai cụm Hosting chuyên dụng?',
        buttonText: 'Yêu Cầu Thiết Kế Cấu Hình Riêng & Nhận Báo Giá',
        notesPlaceholder: 'Đăng ký tư vấn gói Hosting dung lượng lớn',
      },
    },
    features: {
      eyebrow: 'TÍNH NĂNG VƯỢT TRỘI & SPEC SHEET',
      headline: 'Năng Lực Công Nghệ & Thông Số Kỹ Thuật Chuyên Sâu',
      cards: [
        {
          id: 'host-feat-1',
          title: 'Hạ tầng lý tưởng & Ổn định',
          description: 'Vận hành trên cụm máy chủ hiệu năng cao đặt tại 5 Trung tâm dữ liệu chuẩn TIA-942 Rated 3 với độ sẵn sàng đạt 99.95%.',
        },
        {
          id: 'host-feat-2',
          title: 'Băng thông kết nối Gbps không giới hạn',
          description: 'Đường truyền Internet tốc độ cao trong nước và quốc tế, đảm bảo website tải trang tức thì ngay cả trong khung giờ cao điểm.',
        },
        {
          id: 'host-feat-3',
          title: 'An toàn, bảo mật & Giám sát 24/7',
          description: 'Giải pháp bảo mật website toàn diện, tích hợp giám sát ATTT tự động, phòng chống tấn công mã độc.',
        },
        {
          id: 'host-feat-4',
          title: 'Giao diện quản trị cPanel & Plesk chuyên nghiệp',
          description: 'Công cụ trực quan giúp người dùng dễ dàng cài đặt ứng dụng, quản lý tên miền, cấu hình Email và phân quyền cơ sở dữ liệu.',
        },
      ],
      specTableTitle: 'Bảng Thông Số Kỹ Thuật Chuẩn (Technical Spec Table)',
      specs: [
        { category: 'Nền tảng hệ điều hành', details: 'Linux (CloudLinux/CentOS) hoặc Windows Server' },
        { category: 'Bảng điều khiển (Control Panel)', details: 'cPanel (dành cho Linux) / Plesk (dành cho Windows)' },
        { category: 'Hỗ trợ ngôn ngữ & Framework', details: 'Multi selector PHP (PHP 5.x – 8.x), ASP.NET, Multi .NET Core' },
        { category: 'Hỗ trợ CMS', details: 'WordPress, Joomla, Drupal, Magento, WooCommerce, v.v.' },
        { category: 'Hệ cơ sở dữ liệu (DBMS)', details: 'MySQL, MSSQL (Microsoft SQL Server)' },
        { category: 'Phương thức truyền file', details: 'FTP Account (hỗ trợ FileZilla, CuteFTP, WS_FTP), File Manager Web' },
        { category: 'Hạ tầng lưu trữ & Sao lưu', details: 'Ổ cứng Enterprise mảng RAID 10, Tự động Backup định kỳ hàng tuần' },
        { category: 'Hạ tầng Trung tâm dữ liệu', details: '5 TTDL đạt chuẩn quốc tế ANSI/TIA-942 Rated 3 / Tier III' },
        { category: 'Tiêu chuẩn An toàn thông tin', details: 'ISO 27001:2013, ISO 27017:2015, ISO 9001:2015, ISO 50001:2018' },
        { category: 'Cam kết sẵn sàng (SLA)', details: 'Uptime 99.95%' },
      ],
    },
    benefits: {
      eyebrow: 'LỢI ÍCH DOANH NGHIỆP',
      headline: 'Giá Trị Khác Biệt Của Viettel Web Hosting Có Phí Tại Việt Nam',
      pillars: [
        {
          number: '01',
          title: 'Định vị thương hiệu & Quyền kiểm soát 100%',
          description: 'Sử dụng tên miền riêng, không bị chèn quảng cáo ép buộc như hosting miễn phí, kiểm soát tuyệt đối mã nguồn và nội dung.',
        },
        {
          number: '02',
          title: 'Tốc độ tối đa & Miễn trừ rủi ro cáp quang biển',
          description: 'Máy chủ đặt trực tiếp tại Việt Nam giúp tốc độ truy cập nội địa nhanh hơn 3-5 lần, mang lại trải nghiệm mượt mà cho khách hàng.',
        },
        {
          number: '03',
          title: 'Mở rộng tài nguyên không gián đoạn',
          description: 'Nâng cấp gói cước linh hoạt tức thì mà không cần tắt website, toàn bộ chi phí chưa sử dụng ở gói cũ được khấu trừ sang gói mới.',
        },
        {
          number: '04',
          title: 'Pháp lý an toàn & Hỗ trợ bản địa 24/7',
          description: 'Thủ tục thanh toán hóa đơn VAT minh bạch, quyền lợi được pháp luật Việt Nam bảo vệ toàn diện, đội ngũ kỹ sư hỗ trợ 24/7 không rào cản ngôn ngữ.',
        },
      ],
    },
    useCases: {
      eyebrow: 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
      headline: 'Giải Pháp Lưu Trữ Tối Ưu Cho Mọi Mô Hình Website',
      items: [
        {
          id: 'host-uc-1',
          title: '1. Website Giới Thiệu Doanh Nghiệp & Tổ Chức',
          context: 'Doanh nghiệp cần xây dựng trang web hồ sơ năng lực, giới thiệu sản phẩm/dịch vụ với độ sẵn sàng cao, bảo mật và chi phí hợp lý.',
          solution: 'Gói HostPro 01 & HostPro 02 đáp ứng hoàn hảo nhu cầu tải trang nhanh, miễn phí SSL, tích hợp email theo tên miền doanh nghiệp.',
        },
        {
          id: 'host-uc-2',
          title: '2. Sàn Thương Mại Điện Tử & Bán Hàng Trực Tuyến',
          context: 'Shop bán hàng trực tuyến có lượng truy cập lớn trong các đợt khuyến mãi, phát sinh đơn hàng và giao dịch thanh toán liên tục.',
          solution: 'Gói HostPro 04 – HostPro 06 cung cấp dung lượng lưu trữ lớn, băng thông Unlimited GB và hỗ trợ nhiều database giúp giỏ hàng luôn xử lý mượt mà.',
        },
        {
          id: 'host-uc-3',
          title: '3. Trang Tin Tức, Tạp Chí Số & Blog Chuyên Nghiệp',
          context: 'Website tin tức xuất bản hàng nghìn bài viết, hình ảnh độ phân giải cao và yêu cầu tốc độ phản hồi trang tức thời.',
          solution: 'Hosting tối ưu hóa bộ nhớ đệm cache, hỗ trợ CMS WordPress/Joomla, kết nối đường truyền Gbps giúp bài viết tải nhanh chóng.',
        },
        {
          id: 'host-uc-4',
          title: '4. Đơn Vị Phát Triển Web Quản Lý Nhiều Tên Miền (Multi-sites)',
          context: 'Các lập trình viên hoặc agency cần quản lý nhiều website khách hàng trên cùng một gói lưu trữ để tiết kiệm chi phí.',
          solution: 'Sử dụng tính năng Addon Domain (lên đến 4 website độc lập) và Subdomain Unlimited trên một tài khoản cPanel/Plesk duy nhất.',
        },
      ],
    },
    faq: {
      eyebrow: 'CÂU HỎI THƯỜNG GẶP',
      headline: 'Câu Hỏi Thường Gặp Về Dịch Vụ Web Hosting',
      items: [
        {
          question: 'Lợi ích của việc sử dụng Web Hosting có phí so với Web Hosting miễn phí là gì?',
          answer: 'Hosting có phí cho phép sử dụng tên miền riêng giúp tăng uy tín thương hiệu, kiểm soát 100% nội dung (không bị nhà cung cấp chèn quảng cáo), đồng thời được mở rộng dung lượng và băng thông không giới hạn để đảm bảo trải nghiệm khách hàng.',
        },
        {
          question: 'Tại sao doanh nghiệp nên ưu tiên sử dụng Web Hosting đặt tại Việt Nam?',
          answer: 'Tốc độ truy cập của người dùng trong nước sẽ nhanh hơn rõ rệt, không bị ảnh hưởng khi có sự cố đứt cáp quang biển quốc tế. Quy trình thanh toán xuất hóa đơn VAT dễ dàng, không gặp rào cản ngôn ngữ và quyền lợi được bảo vệ bởi pháp luật Việt Nam.',
        },
        {
          question: 'Tôi có thể nâng cấp gói Hosting trong quá trình sử dụng không?',
          answer: 'Bạn hoàn toàn có thể nâng cấp gói Hosting đang sử dụng bất kỳ lúc nào mà không làm gián đoạn website. Khoản tiền chưa sử dụng hết của gói cũ sẽ được hệ thống tính toán và khấu trừ trực tiếp vào chi phí của gói nâng cấp mới.',
        },
        {
          question: 'Làm thế nào để tải toàn bộ mã nguồn website của tôi lên Hosting?',
          answer: 'Sau khi đăng ký thành công, bạn sẽ nhận được thông tin tài khoản FTP. Bạn chỉ cần sử dụng các phần mềm miễn phí phổ biến như FileZilla, CuteFTP hoặc WS_FTP để đăng nhập, sau đó kéo-thả thư mục mã nguồn từ máy tính lên máy chủ là website sẽ hoạt động trực tuyến.',
        },
        {
          question: 'Dịch vụ Hosting của Viettel IDC có chính sách sao lưu dữ liệu như thế nào?',
          answer: 'Hệ thống lưu trữ sử dụng công nghệ RAID 10 chống lỗi phần cứng, kết hợp cơ chế sao lưu tự động định kỳ hàng tuần giúp khôi phục dữ liệu nhanh chóng khi khách hàng có yêu cầu.',
        },
      ],
    },
    footerCta: {
      headline: 'Sẵn Sàng Xây Dựng Sự Hiện Diện Trực Tuyến Chuyên Nghiệp Cùng Viettel Web Hosting?',
      subtext: 'Khởi tạo website ngay hôm nay trên hạ tầng đám mây chuẩn quốc tế TIA-942 Rated 3 với tốc độ vượt trội, an toàn dữ liệu và hỗ trợ kỹ thuật 24/7.',
      hotline: '1800 8088',
      email: 'support@viettelidc.com.vn | sales@viettelidc.com.vn',
      website: 'https://viettelidc.com.vn',
      buttonText: 'ĐĂNG KÝ MUA GÓI WEB HOSTING NGAY',
    },
    docsSupport: {
      eyebrow: 'TÀI LIỆU KỸ THUẬT & TRỢ GIÚP',
      headline: 'Tài Nguyên Kỹ Thuật & Kênh Hỗ Trợ 24/7',
      documentation: {
        title: 'Trung Tâm Tài Liệu Hướng Dẫn (Documentation)',
        desc: 'Cung cấp tài liệu hướng dẫn đăng ký dịch vụ, kết nối FTP, trỏ DNS tên miền, cấu hình Email doanh nghiệp và thao tác quản trị cPanel/Plesk.',
        linkText: 'Xem Tài Liệu Hướng Dẫn',
      },
      supportCenter: {
        title: 'Trung Tâm Hỗ Trợ Kỹ Thuật 24/7 (Support Center)',
        desc: 'Đội ngũ kỹ sư Viettel IDC trực 24/7/365 tiếp nhận giải quyết sự cố kỹ thuật qua hệ thống Ticket Portal, Hotline 1800 8088.',
        linkText: 'Gửi Yêu Cầu Hỗ Trợ Ngay',
      },
    },
    relatedProducts: {
      eyebrow: 'HỆ SINH THÁI SẢN PHẨM LIÊN QUAN',
      headline: 'Hệ Sinh Thái Dịch Vụ Web & Đám Mây Tích Hợp',
      items: [
        {
          title: 'Viettel Domain (Tên Miền)',
          description: 'Đăng ký tên miền Quốc gia (.vn) và Quốc tế (.com, .net...) để đồng bộ thương hiệu trực tuyến.',
          path: '/services/domain-hosting/domain/',
          sku: 'SVC-053',
        },
        {
          title: 'Chứng Chỉ SSL (SSL Certificate)',
          description: 'Mã hóa đường truyền HTTPS, nâng cao uy tín và cải thiện thứ hạng SEO cho website.',
          path: '/services/security/ssl/',
          sku: 'SVC-035',
        },
        {
          title: 'Viettel Cloud Server',
          description: 'Máy chủ ảo hiệu năng cao khi website phát triển vượt qua giới hạn dung lượng của Shared Hosting.',
          path: '/services/compute/cloud-server/',
          sku: 'SVC-001A',
        },
        {
          title: 'Viettel Cloud WAF',
          description: 'Tường lửa bảo vệ ứng dụng Web và API, chống tấn công DDoS và lỗ hổng OWASP Top 10.',
          path: '/services/security/cloud-waf/',
          sku: 'SVC-031',
        },
      ],
    },
  },
};
