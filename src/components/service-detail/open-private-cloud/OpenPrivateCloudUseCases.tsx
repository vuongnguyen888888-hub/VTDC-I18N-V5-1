import React from 'react';
import { ArrowUpRight, ShieldCheck, Database, GitBranch, Globe2 } from 'lucide-react';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


export const OpenPrivateCloudUseCases: React.FC = () => {
  const useCases = [
    {
      icon: ShieldCheck,
      title: 'Hạ Tầng Chuyên Dụng Cho Khối Tài Chính, Ngân Hàng (BFSI) & Cơ Quan Nhà Nước',
      problem: 'Doanh nghiệp cần hạ tầng cô lập mức vật lý, đáp ứng các tiêu chuẩn khắt khe về kiểm toán, bảo mật dữ liệu và tuân thủ quy định pháp lý chuyên ngành.',
      solution: 'Triển khai cụm Open Private Cloud độc lập, kích hoạt vFirewall bảo vệ phân lớp và kiểm soát phân quyền IAM chặt chẽ.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: Database,
      title: 'Hệ Thống Nghiệp Vụ Lõi & Ứng Dụng Doanh Nghiệp (ERP, CRM, Core Banking)',
      problem: 'Yêu cầu tài nguyên xử lý tính toán mạnh mẽ, độ trễ cực thấp và lưu trữ NVMe tốc độ đọc/ghi cao để xử lý khối lượng giao dịch lớn liên tục.',
      solution: 'Tận dụng năng lực lưu trữ SSD Gold NVMe và cơ chế tối ưu tài nguyên của OpenStack đảm bảo hiệu suất xử lý ổn định 24/7.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: GitBranch,
      title: 'Môi Trường Phát Triển Hiện Đại, Microservices & DevOps CI/CD',
      problem: 'Tăng tốc độ đưa ứng dụng ra thị trường, cần nền tảng hỗ trợ co giãn tự động và đóng gói container linh hoạt.',
      solution: 'Tận dụng tính năng Auto Scaling và dịch vụ nền tảng Kubernetes (K8S) được tích hợp sẵn trên cụm tài nguyên để triển khai và mở rộng microservices nhanh chóng.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: Globe2,
      title: 'Mô Hình Đám Mây Mở Rộng Liên Vùng & Dự Phòng Thảm Họa (DR)',
      problem: 'Doanh nghiệp cần kết nối mở rộng giữa nhiều Data Center hoặc xây dựng môi trường dự phòng dữ liệu an toàn.',
      solution: 'Sử dụng giải pháp mạng SDN hỗ trợ chuyển mạch Layer 2 và định tuyến mở rộng liên Data Center để đồng bộ dữ liệu theo thời gian thực.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            KỊCH BẢN ỨNG DỤNG THỰC TẾ
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            Kịch Bản &amp; Bài Toán Ứng Dụng Thực Tế
          </h2>
        </div>

        {/* Grid 4 Card Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Banner Image */}
                  <div className="relative h-40 overflow-hidden bg-slate-900">
                    <img alt={item.title} src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <div className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm text-[var(--vidc-color-brand-red)] flex items-center justify-center shadow-sm">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-sm sm:text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    
                    <div className="space-y-2 text-xs text-slate-600 leading-relaxed font-medium">
                      <p>
                        <strong className="text-slate-900">Bài toán:</strong> {item.problem}
                      </p>
                      <p>
                        <strong className="text-slate-900">Giải pháp:</strong> {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <VIDCAnchor
                    href="#pricing"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>Xem giải pháp triển khai</span>
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
