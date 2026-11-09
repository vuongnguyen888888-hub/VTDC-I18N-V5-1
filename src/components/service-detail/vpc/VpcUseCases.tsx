import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface VpcUseCasesProps {
  currentMarket?: SEAMarket;
}

export const VpcUseCases: React.FC<VpcUseCasesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  // Thay thế đường dẫn hình ảnh tại biến vpcArchitectureImage bên dưới
  const vpcArchitectureImage = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80";

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Typical Application Scenarios' : 'Các kịch bản ứng dụng tiêu biểu',
    subtitle: isLaos
      ? 'Optimized for enterprise infrastructure modernization, flexible scaling, and high-standard data protection.'
      : 'Giải pháp tối ưu cho nhu cầu hiện đại hóa hạ tầng, linh hoạt mở rộng và bảo vệ dữ liệu tối đa.',
    viewDetails: isLaos ? 'View solution details' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      badge: isLaos ? 'Case 1' : 'Trường hợp 1',
      title: isLaos
        ? 'Data Center Migration (vDC Migration)'
        : 'Chuyển đổi toàn diện Trung tâm Dữ liệu (vDC Migration)',
      context: isLaos
        ? 'Enterprises want to decommission obsolete on-premises server systems, reducing power, operating, and IT personnel costs.'
        : 'Doanh nghiệp muốn thanh lý hệ thống máy chủ On-premise đã lỗi thời, giảm chi phí điện năng, vận hành và nhân sự IT.',
      solution: isLaos
        ? 'Initialize a Virtual Data Center on Viettel vVPC, partitioning internal network topology identical to physical systems and migrating servers (P2V / V2V) quickly.'
        : 'Khởi tạo một Virtual Data Center trên Viettel vVPC, phân chia cấu trúc mạng nội bộ tương tự hệ thống vật lý và chuyển đổi máy chủ (P2V / V2V) nhanh chóng.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    },
    {
      badge: isLaos ? 'Case 2' : 'Trường hợp 2',
      title: isLaos
        ? 'Core Business, Finance & Large E-Commerce Systems'
        : 'Hệ thống Nghiệp vụ lõi, Tài chính & TMĐT quy mô lớn',
      context: isLaos
        ? 'ERP (SAP, Oracle), Core Banking, and high-traffic e-commerce systems require superior stability and absolute security.'
        : 'Các hệ thống ERP (SAP, Oracle), Core Banking, sàn TMĐT có lượng truy cập lớn, đòi hỏi độ ổn định cao và an toàn tuyệt đối.',
      solution: isLaos
        ? 'Leverage dedicated Compute Pools, integrated virtual load balancer (vLB), and Auto-scaling mechanisms to automatically handle peak-season traffic bursts.'
        : 'Tận dụng cụm Compute Pool riêng biệt, tích hợp cân bằng tải ảo vLB và cơ chế Auto-scaling để tự động thích ứng với các đợt bùng nổ lưu lượng mùa cao điểm.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    },
    {
      badge: isLaos ? 'Case 3' : 'Trường hợp 3',
      title: isLaos
        ? 'Modern Software Development & DevOps Environment'
        : 'Môi trường Phát triển Phần mềm & DevOps Hiện đại',
      context: isLaos
        ? 'Technology companies need flexible, automated CI/CD, Microservices, and multi-partition testing environments.'
        : 'Doanh nghiệp công nghệ cần môi trường CI/CD, Microservices, kiểm thử đa phân vùng linh hoạt và tự động hóa.',
      solution: isLaos
        ? 'Leverage vVPC API/Terraform interfaces to provision Dev/Test/Staging/Production environments automatically in minutes without physical hardware constraints.'
        : 'Tận dụng giao diện API/Terraform của vVPC để tạo lập môi trường Dev/Test/Staging/Production tự động trong vài phút mà không phụ thuộc hạ tầng vật lý.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      badge: isLaos ? 'Case 4' : 'Trường hợp 4',
      title: isLaos
        ? 'Hybrid Cloud Architecture & Disaster Recovery (DR)'
        : 'Kiến trúc Lai (Hybrid Cloud) & Dự phòng thảm họa (DR)',
      context: isLaos
        ? 'Enterprises retain sensitive data on-premises while scaling computing power and establishing secondary DR sites.'
        : 'Doanh nghiệp giữ dữ liệu nhạy cảm tại On-premise nhưng cần mở rộng năng lực tính toán và lập phương án DR dự phòng sự cố DC chính.',
      solution: isLaos
        ? 'Securely interconnect On-premises with Viettel vVPC via dedicated links (Direct Connect / IPsec VPN) for real-time data replication.'
        : 'Kết nối bảo mật On-premise với Viettel vVPC qua kênh truyền riêng (Direct Connect / IPsec VPN) để đồng bộ dữ liệu theo thời gian thực.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Khối Hình ảnh Sơ đồ Kiến trúc Kết nối (Architecture Diagram Image) */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-950">
          <img alt="Mô hình kiến trúc kết nối Viettel IDC Virtual Private Cloud" src={vpcArchitectureImage} className="w-full h-auto max-h-[560px] object-cover object-center" referrerPolicy="no-referrer" />
        </div>

        {/* Grid 4 Card Ứng dụng theo phong cách Viettel Cloud Server */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, idx) => {
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Banner Image */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img alt={item.title} src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" loading="lazy" onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    
                    <div className="space-y-2.5 text-xs">
                      {/* Bối cảnh */}
                      <div className="p-3 rounded-xl bg-white border border-slate-200/80">
                        <span className="font-extrabold text-slate-900 block mb-1">
                          {isLaos ? 'Context:' : 'Bối cảnh:'}
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {item.context}
                        </p>
                      </div>

                      {/* Giải pháp vVPC */}
                      <div className="p-3 rounded-xl bg-red-50/70 border border-red-100">
                        <span className="font-extrabold text-[var(--vidc-color-brand-red)] block mb-1">
                          {isLaos ? 'vVPC Solution:' : 'Giải pháp vVPC:'}
                        </span>
                        <p className="text-slate-700 leading-relaxed font-medium">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="p-5 pt-0">
                  <VIDCAnchor
                    href="#pricing"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </VIDCAnchor>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

