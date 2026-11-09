import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudServerUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenQuote?: () => void;
}

export const CloudServerUseCases: React.FC<CloudServerUseCasesProps> = ({ currentMarket, onOpenQuote }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Typical Application Scenarios' : 'Các kịch bản ứng dụng tiêu biểu',
    subtitle: isLaos 
      ? 'Perfectly meeting all workloads from coding & testing environments to critical corporate production systems.'
      : 'Đáp ứng hoàn hảo mọi nhu cầu tải từ môi trường lập trình thử nghiệm đến hệ thống sản xuất cốt lõi của doanh nghiệp.',
    viewDetails: isLaos ? 'Register Consultation' : 'Đăng ký tư vấn',
  };

  const useCases = [
    {
      title: '1. Cổng Thông Tin & Website Thương Mại Điện Tử Chịu Tải Cao',
      problem: 'Doanh nghiệp đối mặt với lưu lượng truy cập biến động đột biến trong các chiến dịch quảng cáo, sự kiện flash sale và khung giờ cao điểm bán hàng trực tuyến. Hệ thống thường xuyên đối mặt với nguy cơ sụt giảm tốc độ tải trang hoặc nghẽn mạng cục bộ.',
      solution: 'Triển khai Viettel Cloud Server trên nền tảng OpenStack kết hợp băng thông trong nước mặc định 300 Mbps không giới hạn lưu lượng truyền tải. Quản trị viên dễ dàng chủ động kích hoạt mở rộng nóng (Hot-add) vCPU và RAM tức thì để duy trì tốc độ phản hồi dịch vụ xuyên suốt đợt cao điểm mà không phải khởi động lại máy ảo.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '2. Hệ Thống Ứng Dụng Quản Trị Doanh Nghiệp (ERP, CRM, HRM)',
      problem: 'Doanh nghiệp cần môi trường vận hành bảo mật và độ trễ thấp cho các phần mềm nghiệp vụ lõi (SAP, Oracle RAC, Bravo, Fast, Bitrix24), yêu cầu dữ liệu phải lưu trữ tập trung, truy xuất liên tục và đáp ứng tiêu chuẩn an toàn thông tin nội địa.',
      solution: 'Tùy biến cấu hình máy chủ ảo sử dụng dòng chip Intel Gold Gen 1 – Gen 3, RAM DDR4 mở rộng lên đến 128 GB/VM kết hợp ổ cứng SAN Storage SSD dự phòng cấu hình RAID Controller đa lớp. Nền tảng phân cụm (Cluster) tự động san tải giữa các node vật lý, loại bỏ hoàn toàn hiện tượng tranh chấp tài nguyên và bảo đảm SLA 99,99%.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '3. Môi Trường Lập Trình & Kiểm Thử Phần Mềm (Dev / Test / Staging & CI/CD)',
      problem: 'Đội ngũ kỹ thuật phần mềm cần cấp phát nhanh các môi trường kiểm thử độc lập, có thể cấu hình linh hoạt theo từng vòng đời dự án và nhanh chóng giải phóng tài nguyên sau khi nghiệm thu để tránh lãng phí chi phí.',
      solution: 'Tận dụng công nghệ Fast-Provisioning để khởi tạo máy ảo dưới 5 phút từ kho Template đóng gói sẵn (Docker, GitLab CE, LAMP, LEMP) trên giao diện Web Portal hoặc qua chuẩn API OpenStack/AWS. Mô hình thanh toán linh hoạt theo giờ (Pay-as-you-go) giúp doanh nghiệp kiểm soát tối đa chi phí sử dụng tài nguyên ngắn hạn.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: '4. Kiến Trúc Đa Đám Mây & Trung Tâm Dự Phòng Thảm Họa (Multi-Cloud & DR)',
      problem: 'Khối doanh nghiệp tài chính, ngân hàng, thương mại điện tử cần thiết lập hạ tầng dự phòng độc lập cách ly về mặt địa lý hoặc muốn kết nối đồng bộ dữ liệu giữa hệ thống tại chỗ (On-premises) với các đám mây công cộng quốc tế.',
      solution: 'Xây dựng cụm máy chủ ảo dự phòng tại 2 vùng Trung tâm dữ liệu độc lập (Pháp Vân và Bình Dương) đạt chuẩn ANSI/TIA-942 Rated 3. Hệ thống kết nối liền mạch qua mạng riêng ảo Viettel Hybrid Connect L3, VPN và tương thích hoàn toàn với API AWS (EC2, S3), sẵn sàng chuyển mạch dự phòng tức thì khi hạ tầng chính phát sinh sự cố.',
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

        {/* Grid 4 Card Ứng dụng */}
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

                    <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                      <div>
                        <strong className="text-slate-900 font-bold">Bài toán:</strong> {item.problem}
                      </div>
                      <div>
                        <strong className="text-slate-900 font-bold">Giải pháp:</strong> {item.solution}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <VIDCNativeButton
                    type="button"
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </VIDCNativeButton>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
