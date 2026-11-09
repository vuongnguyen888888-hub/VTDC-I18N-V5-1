import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Landmark, 
  CheckCircle2, 
  Lock, 
  Server, 
  FileCheck2, 
  Coins, 
  Clock, 
  Building2, 
  ChevronRight, 
  Shield, 
  Leaf, 
  DownloadCloud, 
  HelpCircle,
  ExternalLink,
  Sparkles,
  Layers,
  FileText
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface CertificationDetail {
  id: string;
  code: string;
  name: string;
  category: 'security' | 'financial' | 'facility' | 'quality';
  authority: string;
  scope: string;
  description: string;
  keyHighlights: string[];
  applicableFor: string[];
  badgeColor: string;
}

interface VpcBenefitsComplianceProps {
  currentMarket?: SEAMarket;
}

export const VpcBenefitsCompliance: React.FC<VpcBenefitsComplianceProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';
  const [selectedCert, setSelectedCert] = useState<CertificationDetail | null>(null);

  // 1. Dữ liệu Trụ cột Lợi thế Cạnh tranh Chiến lược
  const strategicAdvantages = [
    {
      id: 'egov',
      icon: Landmark,
      color: 'red',
      tag: 'Chuẩn Chính phủ số',
      title: 'Đạt chuẩn Kỹ thuật Chính phủ Điện tử',
      citation: 'Văn bản số 1145 & 2612/BTTTT-CATTT',
      description: 'Nền tảng Cloud đầu tiên tại Việt Nam đáp ứng trọn vẹn bộ tiêu chí kỹ thuật phục vụ Chính phủ điện tử/Chính quyền số do Bộ Thông tin & Truyền thông ban hành.',
      benefits: [
        'Sẵn sàng tích hợp cổng dịch vụ công, CSDL quốc gia và bộ ngành',
        'Đáp ứng quy định thẩm định an toàn hệ thống thông tin Cấp độ 3 & 4',
        'Kiến trúc đáp ứng khung kiến trúc Chính phủ điện tử Việt Nam 2.0'
      ],
      metricLabel: 'Tiêu chuẩn BTTTT',
      metricValue: '100% Đạt chuẩn',
    },
    {
      id: 'sovereignty',
      icon: ShieldCheck,
      color: 'emerald',
      tag: 'Chủ quyền Dữ liệu',
      title: 'Chủ quyền Dữ liệu 100% Tại Lãnh thổ Việt Nam',
      citation: 'Luật An ninh mạng 2018 | NĐ 13/2023/NĐ-CP & NĐ 53/2022/NĐ-CP',
      description: 'Toàn bộ dữ liệu được lưu trữ, mã hóa và bảo vệ tại hệ thống Trung tâm Dữ liệu nội địa, triệt tiêu hoàn toàn rủi ro pháp lý về chuyển giao dữ liệu xuyên biên giới.',
      benefits: [
        'Tuân thủ tuyệt đối quy định lưu trữ dữ liệu cá nhân theo Nghị định 13 (PDPD)',
        'Không chịu ảnh hưởng bởi các đạo luật ngoại lãnh thổ như US CLOUD Act',
        'Bảo mật tuyệt đối thông tin kinh doanh và bí mật nhà nước'
      ],
      metricLabel: 'Lưu trữ nội địa',
      metricValue: '100% Trong nước',
    },
    {
      id: 'datacenter',
      icon: Server,
      color: 'blue',
      tag: 'Hạ tầng Quốc tế',
      title: 'Hạ tầng Data Center TIA-942 Rated 3 Constructed',
      citation: 'Chứng chỉ ANSI/TIA-942-B Constructed Facility (EPI)',
      description: 'Vận hành trên 14 tổ hợp Data Center quy mô lớn nhất Việt Nam, đạt chứng nhận khắt khe về công trình thực tế (Constructed Facility) chứ không chỉ trên bản vẽ thiết kế.',
      benefits: [
        'Hệ thống điện, làm mát, viễn thông dự phòng N+1 và 2N độc lập',
        'Bảo trì, nâng cấp thiết bị 100% không làm gián đoạn dịch vụ',
        'Mạng lưới cáp quang đa hướng kết nối trực tiếp đến các trạm cập bờ quốc tế'
      ],
      metricLabel: 'Cam kết Uptime SLA',
      metricValue: '99.99%',
    },
    {
      id: 'tco',
      icon: Coins,
      color: 'amber',
      tag: 'Tối ưu Chi phí',
      title: 'Tối ưu TCO & Không Rủi ro Biến động Tỷ giá Ngoại tệ',
      citation: 'Báo giá & Thanh toán 100% VNĐ | Hóa đơn tài chính VAT',
      description: 'Cắt giảm 35% - 45% tổng chi phí sở hữu hạ tầng so với tự đầu tư phần cứng (CapEx), thanh toán minh bạch bằng VNĐ, không chịu phụ phí băng thông ẩn hay trượt giá USD.',
      benefits: [
        'Hạch toán chi phí hợp lệ theo quy định kế toán - kiểm toán Việt Nam',
        'Mô hình chi phí linh hoạt theo nhu cầu thực tế (Pay-as-you-grow / Monthly)',
        'Miễn phí hoàn toàn lưu lượng băng thông nội địa (Egress Traffic)'
      ],
      metricLabel: 'Tiết kiệm TCO',
      metricValue: 'Đến 40%',
    },
    {
      id: 'support',
      icon: Clock,
      color: 'purple',
      tag: 'Chuyên gia Tại chỗ',
      title: 'Hỗ trợ Kỹ thuật Chuyên sâu 24/7/365 Trực tiếp (On-site & Remote)',
      citation: 'Đội ngũ 500+ Kỹ sư Chứng chỉ Quốc tế',
      description: 'Lực lượng chuyên gia kỹ thuật người Việt tại 3 miền, phản hồi sự cố khẩn cấp dưới 15 phút, giải quyết trực tiếp bài toán kiến trúc phức tạp mà không qua trung gian.',
      benefits: [
        'Sở hữu chứng chỉ chuyên sâu hàng đầu: CCIE, VCP/VCAP, CISSP, TOGAF, CISA',
        'Quy trình vận hành chuẩn ITIL v4 và ISO 20000-1',
        'Hỗ trợ khảo sát, tư vấn di chuyển dữ liệu (Migration) tận nơi không phụ phí'
      ],
      metricLabel: 'Thời gian phản hồi',
      metricValue: '< 15 Phút',
    },
    {
      id: 'ecosystem',
      icon: Layers,
      color: 'indigo',
      tag: 'Hệ sinh thái Tích hợp',
      title: 'Hệ sinh thái Số Toàn diện & Tích hợp Liền mạch',
      citation: 'Giải pháp Đa đám mây (Multi-Cloud & Hybrid Cloud)',
      description: 'Tích hợp sẵn các giải pháp An toàn thông tin (Managed SOC, Anti-DDoS, WAF), Sao lưu dự phòng (Cloud Backup & DR), Kubernetes (VKS) và hạ tầng AI/GPU trên cùng một nền tảng.',
      benefits: [
        'Kết nối an toàn Direct Connect / Cloud Interconnect băng thông siêu lớn',
        'Một cổng quản trị tập trung (Unified Portal) quản lý mọi tài nguyên',
        'Mở rộng nhanh chóng không giới hạn khi quy mô doanh nghiệp tăng trưởng'
      ],
      metricLabel: 'Hệ sinh thái dịch vụ',
      metricValue: '60+ Dịch vụ',
    },
  ];

  // 2. Dữ liệu Khung Tiêu chuẩn & Chứng chỉ Quốc tế
  const certifications: CertificationDetail[] = [
    {
      id: 'iso-27001',
      code: 'ISO/IEC 27001:2022',
      name: 'Hệ thống Quản lý An toàn Thông tin Toàn cầu (ISMS)',
      category: 'security',
      authority: 'Tổ chức Tiêu chuẩn hóa Quốc tế (ISO) / Đánh giá bởi TÜV Rheinland & BSI',
      scope: 'Toàn bộ quy trình vận hành trung tâm dữ liệu, nền tảng điện toán đám mây và hệ thống hỗ trợ khách hàng của Viettel IDC.',
      description: 'Tiêu chuẩn quốc tế cao nhất và mới nhất về thiết lập, thực thi, duy trì và liên tục cải tiến Hệ thống Quản lý An toàn Thông tin, bảo vệ toàn diện dữ liệu khách hàng trước các hiểm họa không gian mạng.',
      keyHighlights: [
        'Đạt phiên bản mới nhất ISO/IEC 27001:2022 với 93 biện pháp kiểm soát bảo mật khắt khe',
        'Định kỳ kiểm toán và tái cấp chứng nhận độc lập hàng năm',
        'Quy trình quản lý sự cố và kiểm soát rủi ro an ninh thông tin chuẩn quốc tế'
      ],
      applicableFor: ['Tất cả doanh nghiệp', 'Tài chính - Ngân hàng', 'Cơ quan Nhà nước', 'Thương mại Điện tử'],
      badgeColor: 'red',
    },
    {
      id: 'iso-27017',
      code: 'ISO/IEC 27017:2015',
      name: 'Kiểm soát An toàn Bảo mật Chuyên biệt cho Dịch vụ Cloud',
      category: 'security',
      authority: 'ISO / IEC',
      scope: 'Nền tảng Public Cloud, Virtual Private Cloud (vVPC) và các dịch vụ lưu trữ đám mây của Viettel IDC.',
      description: 'Bộ quy tắc thực hành mở rộng từ ISO 27002, bổ sung các biện pháp kiểm soát an toàn bảo mật dành riêng cho cả Nhà cung cấp dịch vụ đám mây (Cloud Service Provider) và Khách hàng sử dụng dịch vụ đám mây.',
      keyHighlights: [
        'Phân định ranh giới trách nhiệm bảo mật rõ ràng giữa bên cung cấp và khách hàng',
        'Bảo đảm sự cô lập tuyệt đối (Isolation) giữa các môi trường khách hàng',
        'Quy trình xóa sạch dữ liệu an toàn khi hủy dịch vụ (Secure Asset Disposal)'
      ],
      applicableFor: ['Doanh nghiệp chuyển dịch lên Cloud', 'Fintech & Thanh toán', 'SaaS Providers'],
      badgeColor: 'blue',
    },
    {
      id: 'iso-27018',
      code: 'ISO/IEC 27018:2019',
      name: 'Bảo vệ Dữ liệu Định danh Cá nhân (PII) trên Public Cloud',
      category: 'security',
      authority: 'ISO / IEC',
      scope: 'Toàn bộ hệ thống lưu trữ và xử lý thông tin định danh cá nhân trên nền tảng Viettel Cloud.',
      description: 'Tiêu chuẩn quốc tế đầu tiên về quyền riêng tư và bảo vệ dữ liệu cá nhân (PII) trên môi trường điện toán đám mây công cộng, phù hợp hoàn hảo với Nghị định 13/2023/NĐ-CP của Việt Nam và chuẩn GDPR quốc tế.',
      keyHighlights: [
        'Cam kết không sử dụng dữ liệu khách hàng cho mục đích thương mại hoặc quảng cáo',
        'Quy trình minh bạch khi xử lý yêu cầu trích xuất dữ liệu từ cơ quan có thẩm quyền',
        'Mã hóa dữ liệu định danh khi lưu trữ và truyền dẫn trên mạng'
      ],
      applicableFor: ['Y tế & Bệnh viện', 'Bảo hiểm & Tài chính', 'EdTech', 'Bán lẻ & Khách hàng cá nhân'],
      badgeColor: 'purple',
    },
    {
      id: 'pci-dss',
      code: 'PCI-DSS v4.0 (Level 1)',
      name: 'Chuẩn Bảo mật Dữ liệu Thẻ Thanh toán Quốc tế Cao nhất',
      category: 'financial',
      authority: 'Hội đồng Tiêu chuẩn Bảo mật Thẻ thanh toán (PCI SSC) - Đánh giá bởi ControlCase / CrossBow',
      scope: 'Hạ tầng máy chủ, hệ thống mạng, trung tâm dữ liệu và phần mềm lõi hỗ trợ giao dịch thẻ tín dụng/ghi nợ.',
      description: 'Chứng nhận bảo mật bắt buộc đối với mọi tổ chức lưu trữ, xử lý hoặc truyền thông tin thẻ thanh toán (Visa, Mastercard, JCB, v.v.). Cấp độ Level 1 là cấp độ nghiêm ngặt nhất dành cho các nhà cung cấp dịch vụ hạ tầng giao dịch lớn.',
      keyHighlights: [
        'Đã nâng cấp lên phiên bản PCI-DSS v4.0 mới nhất với các yêu cầu bảo mật nâng cao',
        'Bảo đảm phân đoạn mạng nghiêm ngặt (Network Segmentation) và chống rò rỉ dữ liệu thẻ',
        'Quét lỗ hổng bảo mật hàng quý và đánh giá thâm nhập (Penetration Testing) định kỳ'
      ],
      applicableFor: ['Ngân hàng thương mại', 'Cổng thanh toán & Ví điện tử', 'Sàn TMĐT', 'Công ty Tài chính'],
      badgeColor: 'emerald',
    },
    {
      id: 'sbv-circular',
      code: 'Thông tư 09/2020 & 11/2021/TT-NHNN',
      name: 'Quy định An toàn Hệ thống Thông tin trong Hoạt động Ngân hàng',
      category: 'financial',
      authority: 'Ngân hàng Nhà nước Việt Nam (SBV)',
      scope: 'Nền tảng hạ tầng Cloud, giải pháp Disaster Recovery (DR) và dịch vụ Data Center cho các tổ chức tín dụng.',
      description: 'Đáp ứng 100% các tiêu chí kỹ thuật và quy định pháp lý bắt buộc đối với việc thuê ngoài dịch vụ công nghệ thông tin và lưu trữ dữ liệu của các ngân hàng thương mại, tổ chức tài chính tại Việt Nam.',
      keyHighlights: [
        'Bảo đảm sẵn sàng hệ thống sao lưu và phục hồi thảm họa (RTO/RPO tối ưu)',
        'Kiểm soát quyền truy cập đặc quyền và ghi nhật ký kiểm toán (Audit Log) đầy đủ',
        'Sẵn sàng tiếp đón các đoàn thanh tra, kiểm toán độc lập của Ngân hàng Nhà nước'
      ],
      applicableFor: ['Ngân hàng', 'Tổ chức Tín dụng', 'Công ty Chứng khoán', 'Quỹ Đầu tư'],
      badgeColor: 'emerald',
    },
    {
      id: 'tia-942',
      code: 'ANSI/TIA-942-B Rated 3 Constructed',
      name: 'Chuẩn Thiết kế & Xây dựng Trung tâm Dữ liệu Quốc tế',
      category: 'facility',
      authority: 'Hiệp hội Công nghiệp Viễn thông Hoa Kỳ (TIA) / Chứng nhận bởi Enterprise Parkway International (EPI)',
      scope: 'Hệ thống Trung tâm Dữ liệu Viettel IDC (Hòa Lạc, Hoàng Hoa Thám, Tân Bình, Bình Dương, v.v.).',
      description: 'Chứng nhận cấp độ 3 về công trình xây dựng thực tế (Constructed Facility), bảo đảm mọi thành phần nguồn điện, làm mát, cáp viễn thông đều có cấu hình dự phòng và khả năng bảo trì đồng thời (Concurrently Maintainable).',
      keyHighlights: [
        'Cấp độ "Constructed Level" kiểm định thực địa khắt khe hơn cấp độ "Design Level"',
        'Khả năng chống chịu sự cố thiên tai, cháy nổ và mất điện lưới kéo dài',
        'Hệ thống giám sát môi trường trung tâm dữ liệu thông minh BMS 24/7'
      ],
      applicableFor: ['Hạ tầng Doanh nghiệp Trọng yếu', 'Hệ thống Core Banking', 'Cloud Scale Lớn'],
      badgeColor: 'blue',
    },
    {
      id: 'iso-9001',
      code: 'ISO 9001:2015',
      name: 'Hệ thống Quản lý Chất lượng Dịch vụ Quốc tế',
      category: 'quality',
      authority: 'ISO / Đánh giá bởi DAS / TÜV',
      scope: 'Toàn bộ quy trình cung cấp, tư vấn, triển khai và chăm sóc khách hàng các dịch vụ Viettel IDC.',
      description: 'Chuẩn mực toàn cầu chứng minh cam kết nhất quán về chất lượng sản phẩm dịch vụ, sự thỏa mãn của khách hàng và quy trình cải tiến chất lượng liên tục.',
      keyHighlights: [
        'Quy trình cung ứng dịch vụ được tiêu chuẩn hóa rõ ràng theo chuẩn quốc tế',
        'Hệ thống đo lường mức độ hài lòng khách hàng (CSAT/NPS) định kỳ',
        'Cam kết xử lý khiếu nại và cam kết dịch vụ theo chuẩn SLA đã thỏa thuận'
      ],
      applicableFor: ['Tất cả doanh nghiệp & đối tác chiến lược'],
      badgeColor: 'amber',
    },
    {
      id: 'iso-50001',
      code: 'ISO 50001:2018 & ISO 14001:2015',
      name: 'Quản lý Năng lượng Hiệu quả & Bảo vệ Môi trường Xanh',
      category: 'quality',
      authority: 'ISO',
      scope: 'Vận hành hệ thống trung tâm dữ liệu và văn phòng điều hành Viettel IDC.',
      description: 'Đảm bảo hệ thống Data Center và Cloud vận hành bền vững với hiệu quả năng lượng cao, giảm thiểu phát thải Carbon (Green Cloud), chỉ số PUE tối ưu dưới 1.4.',
      keyHighlights: [
        'Ứng dụng công nghệ làm mát tiên tiến và năng lượng tái tạo',
        'Giảm tiêu thụ điện năng không phục vụ IT, tối ưu chi phí vận hành cho khách hàng',
        'Đáp ứng mục tiêu Net-Zero và tiêu chuẩn ESG của các tập đoàn đa quốc gia'
      ],
      applicableFor: ['Tập đoàn Đa quốc gia', 'Doanh nghiệp FDI', 'Tổ chức cam kết ESG'],
      badgeColor: 'emerald',
    },
    {
      id: 'soc-reports',
      code: 'SOC 1 & SOC 2 Type II',
      name: 'Báo cáo Kiểm toán Độc lập về Hệ thống Kiểm soát & Độ tin cậy',
      category: 'security',
      authority: 'Viện Kế toán Công chứng Hoa Kỳ (AICPA) / Kiểm toán độc lập bởi Big 4',
      scope: 'Hệ thống kiểm soát an ninh, tính khả dụng, tính toàn vẹn và bảo mật dữ liệu của Viettel Cloud.',
      description: 'Báo cáo kiểm toán khắt khe đánh giá hiệu quả hoạt động thực tế của các chốt kiểm soát bảo mật trong khoảng thời gian 6-12 tháng, là tài liệu tin cậy cho các cuộc kiểm toán độc lập của doanh nghiệp niêm yết.',
      keyHighlights: [
        'Được các kiểm toán viên Big 4 kiểm tra và xác nhận định kỳ',
        'Cung cấp bằng chứng tuân thủ chi tiết cho các bộ phận Kiểm toán Nội bộ & Quản trị Rủi ro',
        'Bảo đảm tính khả dụng, bảo mật và tính toàn vẹn của dữ liệu trong quá trình xử lý'
      ],
      applicableFor: ['Công ty Niêm yết (HOSE/HNX)', 'Tập đoàn Toàn cầu', 'Tổ chức Tài chính'],
      badgeColor: 'purple',
    },
  ];

  const getCategoryName = (cat: string) => {
    switch(cat) {
      case 'security': return 'An toàn & Bảo mật';
      case 'financial': return 'Tài chính & Ngân hàng';
      case 'facility': return 'Hạ tầng Data Center';
      case 'quality': return 'Chất lượng & Môi trường';
      default: return 'Tiêu chuẩn';
    }
  };

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f8fafc)] text-slate-900 border-b border-slate-200 relative overflow-hidden"
    >
      {/* Background Decorative Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-red-500/5 via-slate-100/50 to-transparent pointer-events-none -z-10" />

      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/60 mb-3.5 shadow-xs">
            <Shield className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
            <span>{isLaos ? 'COMPETITIVE ADVANTAGES & GLOBAL STANDARDS' : 'LỢI THẾ CẠNH TRANH & TIÊU CHUẨN QUỐC TẾ'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-111827)] tracking-tight leading-tight">
            {isLaos ? 'Competitive Advantages & International Standards' : 'Lợi thế cạnh tranh & tiêu chuẩn quốc tế'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {isLaos
              ? 'Ensuring legal security, data sovereignty, and the highest operational quality commitments for mission-critical enterprise IT systems.'
              : 'Đảm bảo an ninh pháp lý, chủ quyền dữ liệu và cam kết chất lượng vận hành ở mức cao nhất cho các hệ thống công nghệ thông tin trọng yếu của doanh nghiệp.'}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. TRỤ CỘT LỢI THẾ CẠNH TRANH CHIẾN LƯỢC                                 */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-200/80">
            <div>
              <span className="text-xs font-extrabold tracking-wider uppercase text-[var(--vidc-color-brand-red)] block mb-1">
                Chiến lược &amp; Năng lực
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                6 Trụ cột Giá trị Vượt trội cho Doanh nghiệp
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Được thiết kế nhằm tối ưu hóa chi phí, bảo vệ chủ quyền dữ liệu và đáp ứng hoàn hảo các yêu cầu thanh kiểm tra khắt khe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicAdvantages.map((adv) => {
              const IconComp = adv.icon;
              return (
                <div
                  key={adv.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-red-300/80 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Top row: Icon */}
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center font-bold border border-red-100 group-hover:scale-105 transition-transform duration-200">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h4 className="text-base font-extrabold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                        {adv.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {adv.description}
                    </p>

                    {/* Bullet Benefits */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {adv.benefits.map((bItem, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{bItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. KHUNG TIÊU CHUẨN & CHỨNG CHỈ QUỐC TẾ                                  */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-200/80">
            <div>
              <span className="text-xs font-extrabold tracking-wider uppercase text-[var(--vidc-color-brand-red)] block mb-1">
                Chứng chỉ &amp; Tuân thủ
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Khung Tiêu chuẩn &amp; Chứng nhận Chất lượng Quốc tế
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Hệ thống chứng chỉ độc lập được đánh giá định kỳ bởi các tổ chức kiểm toán quốc tế uy tín (TÜV, BSI, EPI, ControlCase, AICPA).
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <VIDCAnchor
                key={cert.id}
                href="/about/certifications/"
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[var(--vidc-color-brand-red)] transition-all duration-200 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-3">
                  {/* Top line: Category and Icon */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                      {getCategoryName(cert.category)}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center font-bold">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Cert Code & Name */}
                  <div>
                    <div className="text-base font-extrabold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                      {cert.code}
                    </div>
                    <div className="text-xs font-semibold text-slate-700 mt-0.5 line-clamp-1">
                      {cert.name}
                    </div>
                  </div>

                  {/* Description preview */}
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Card footer: Click to view details */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[var(--vidc-color-brand-red)] font-bold">
                  <span>Xem chi tiết</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </VIDCAnchor>
            ))}
          </div>

          {/* Compliance Assurance Box / CTA */}
          <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-white/10 text-slate-200 border border-white/15">
                <FileCheck2 className="w-3.5 h-3.5 text-red-400" />
                <span>Hồ sơ Chứng thực Tuân thủ Dành cho Doanh nghiệp</span>
              </div>
              <h4 className="text-lg sm:text-xl font-extrabold text-white">
                Cần cung cấp Chứng chỉ &amp; Báo cáo Đánh giá Tuân thủ cho Hồ sơ Thầu?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Viettel IDC sẵn sàng cung cấp bản sao có chứng thực các chứng chỉ ISO, PCI-DSS, TIA-942 Rated 3 và Báo cáo Kiểm toán Độc lập SOC 1 / SOC 2 phục vụ công tác thanh kiểm tra hoặc hoàn thiện hồ sơ dự thầu của Quý khách.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <VIDCAnchor
                href="#pricing"
                className="px-5 py-3 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-red-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer text-center whitespace-nowrap"
              >
                <FileText className="w-4 h-4" />
                <span>Yêu cầu Bộ Hồ sơ Tuân thủ</span>
              </VIDCAnchor>
              <VIDCAnchor
                href="#docs-support"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer text-center whitespace-nowrap"
              >
                <span>Tài liệu Kỹ thuật</span>
                <ChevronRight className="w-4 h-4" />
              </VIDCAnchor>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. MODAL CHI TIẾT CHỨNG CHỈ (INTERACTIVE CERT MODAL)                      */}
      {/* ========================================================================= */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-8 space-y-6 text-slate-900 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header modal */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center font-bold shrink-0 border border-red-100">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--vidc-color-brand-red)]">
                    {getCategoryName(selectedCert.category)}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                    {selectedCert.code}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {selectedCert.name}
                  </p>
                </div>
              </div>

              <VIDCNativeButton
                onClick={() => setSelectedCert(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer shrink-0"
              >
                ✕
              </VIDCNativeButton>
            </div>

            {/* Scope & Authority */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div>
                <span className="text-slate-500 font-medium block">Tổ chức cấp &amp; Kiểm toán:</span>
                <span className="font-bold text-slate-900 mt-0.5 block">{selectedCert.authority}</span>
              </div>
              <div>
                <span className="text-slate-500 font-medium block">Phạm vi áp dụng:</span>
                <span className="font-bold text-slate-900 mt-0.5 block">{selectedCert.scope}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Mô tả chi tiết tiêu chuẩn
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedCert.description}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Điểm nổi bật &amp; Cơ chế kiểm soát
              </h4>
              <div className="space-y-2">
                {selectedCert.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applicable for */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Phù hợp cho khối ngành
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCert.applicableFor.map((item, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
              <VIDCNativeButton
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Đóng
              </VIDCNativeButton>
              <VIDCAnchor
                href="#pricing"
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-red-700 text-white text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Nhận tư vấn tuân thủ</span>
                <ChevronRight className="w-4 h-4" />
              </VIDCAnchor>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
