import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const VpcOverview: React.FC = () => {
  const highlights = [
    {
      title: 'Tự chủ kiến trúc vDC Pool',
      desc: 'Tự do phân bổ tài nguyên vCPU, vRAM, vStorage thành nhiều môi trường (Prod, Staging, Dev) độc lập.'
    },
    {
      title: 'Mạng ảo hóa SDN cô lập 100%',
      desc: 'Thiết lập vRouter, Subnet, Virtual Firewall (vFW), NAT Gateway & IPsec VPN bảo mật tuyệt đối.'
    },
    {
      title: 'Đạt chuẩn Chính phủ & TIA-942 Rated 3',
      desc: 'Vận hành trên hạ tầng Data Center tiêu chuẩn quốc tế với SLA độ sẵn sàng cam kết 99.99%.'
    },
    {
      title: 'Tự động hóa qua OpenStack API & Terraform',
      desc: 'Quản trị hạ tầng dạng mã (IaC), mở rộng quy mô linh hoạt và tích hợp mượt mà vào luồng CI/CD.'
    }
  ];

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            TỔNG QUAN DỊCH VỤ
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            Trung tâm dữ liệu ảo độc lập cho doanh nghiệp &amp; khối Chính phủ
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột trái (Mô tả giải pháp) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              <strong className="text-[var(--vidc-legacy-hex-222225)]">Viettel Virtual Private Cloud (vVPC)</strong> là giải pháp Trung tâm dữ liệu ảo (Virtual Data Center - vDC) trọn gói trên nền tảng Public Cloud quy mô lớn của Viettel IDC. Khách hàng toàn quyền sở hữu không gian tài nguyên tính toán (vCPU, vRAM), lưu trữ phân tầng tốc độ cao và mạng ảo hóa SDN cô lập hoàn toàn.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Giải pháp cho phép doanh nghiệp tự thiết kế kiến trúc mạng, khởi tạo nhiều máy ảo, cấu hình Virtual Firewall (vFW), Load Balancer (vLB) và kết nối VPN bảo mật về trung tâm dữ liệu hiện hữu, đảm bảo tính sẵn sàng cao và an toàn dữ liệu tuyệt đối.
            </p>

            {/* 4 Key Highlights */}
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

          {/* Cột phải (Video YouTube nhúng / Hình ảnh kiến trúc 16:9) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Virtual Private Cloud (vVPC) Overview"
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

