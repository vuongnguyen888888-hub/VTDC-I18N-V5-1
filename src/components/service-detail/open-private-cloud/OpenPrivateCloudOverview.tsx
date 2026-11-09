import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const OpenPrivateCloudOverview: React.FC = () => {
  const highlights = [
    {
      title: 'Tự chủ công nghệ, loại bỏ Vendor Lock-in',
      desc: 'Xây dựng trên nền tảng mã nguồn mở OpenStack chuẩn hóa quốc tế, loại bỏ hoàn toàn chi phí bản quyền và rủi ro phụ thuộc nhà cung cấp.',
    },
    {
      title: 'Hạ tầng vật lý chuyên biệt 100%',
      desc: 'Tài nguyên tính toán (CPU, RAM), lưu trữ và mạng độc lập tuyệt đối, không chia sẻ với bất kỳ khách hàng nào khác.',
    },
    {
      title: 'Tích hợp sẵn PaaS (K8s, Database, vLB, vFW)',
      desc: 'Sẵn sàng triển khai Kubernetes (VKS), Database (VDBS), tường lửa ảo vFirewall và cân bằng tải vLoad Balancer mà không phát sinh thêm chi phí bản quyền tính năng.',
    },
    {
      title: 'Lưu trữ NVMe SSD Gold & Mạng SDN Mesh',
      desc: 'Hỗ trợ công nghệ SDS Ceph All-Flash SSD Gold siêu tốc và kết nối mạng SDN Layer 2/3 linh hoạt liên vùng, liên Data Center.',
    },
  ];

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            TỔNG QUAN DỊCH VỤ
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            Tổng Quan Kiến Trúc &amp; Năng Lực Vận Hành Viettel Open Private Cloud
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột trái (Nội dung giải pháp) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              <strong className="text-[var(--vidc-legacy-hex-222225)]">Viettel Open Private Cloud (Open Dedicated Private Cloud)</strong> là dịch vụ điện toán đám mây chuyên dụng được xây dựng riêng cho từng khách hàng trên nền tảng mã nguồn mở OpenStack, cung cấp môi trường hạ tầng tách biệt hoàn toàn về tài nguyên tính toán, mạng và lưu trữ. Doanh nghiệp có thể chủ động thiết kế kiến trúc theo nhu cầu, kiểm soát toàn diện hệ thống, đồng thời đáp ứng các yêu cầu khắt khe nhất về an toàn bảo mật, tính tuân thủ và vận hành ổn định.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Ứng dụng giải pháp Mạng định nghĩa bằng phần mềm (SDN) và Lưu trữ định nghĩa bằng phần mềm (SDS) hiện đại, dịch vụ mang đến hiệu năng tính toán mạnh mẽ, khả năng mở rộng linh hoạt và tính sẵn sàng cao cho các hệ thống trọng yếu. Cổng quản trị Self-Service trực quan giúp doanh nghiệp quản lý tập trung, giám sát thời gian thực và tối ưu việc sử dụng tài nguyên.
            </p>

            {/* 4 Key Highlights chuẩn style Viettel Cloud Server */}
            <div className="space-y-3.5 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                  <div className="p-1.5 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cột phải (Video YouTube nhúng 16:9 chuẩn style Viettel Cloud Server) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Open Private Cloud Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
