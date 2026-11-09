import React from 'react';
import { Zap, ShieldCheck, Monitor, Clock, CheckCircle2 } from 'lucide-react';

export const CloudServerVMwareCapabilities: React.FC = () => {
  const coreFeatures = [
    {
      icon: Zap,
      title: 'Triển khai tức thì & Mở rộng linh hoạt',
      desc: 'Khởi tạo máy chủ ảo trong vài giây, nâng cấp CPU, RAM, Storage linh hoạt theo nhu cầu thực tế mà không cần downtime.',
    },
    {
      icon: ShieldCheck,
      title: 'Bảo mật VXLAN & Cô lập đa lớp',
      desc: 'Bảo mật nâng cao theo công nghệ VXLAN tạo mạng ảo độc lập, đảm bảo khách hàng không bị ảnh hưởng chéo hay truy cập trái phép từ bên ngoài.',
    },
    {
      icon: Monitor,
      title: 'Quản trị dễ dàng qua Web Portal',
      desc: 'Toàn quyền kiểm soát, cấu hình, cài đặt lại hệ điều hành và giám sát chi tiết hệ thống máy chủ chỉ từ một giao diện duy nhất.',
    },
    {
      icon: Clock,
      title: 'Độ sẵn sàng cao & Vận hành liên tục',
      desc: 'Kiến trúc dự phòng mạnh mẽ trên nền tảng VMware, cam kết hệ thống vận hành không gián đoạn với SLA 99,99%.',
    },
  ];

  const specRows = [
    { category: 'Nền tảng ảo hóa', detail: 'Công nghệ ảo hóa VMware Enterprise chuyên dụng' },
    { category: 'Hiệu năng vi xử lý (vCPU)', detail: 'Cấp phát tài nguyên tính toán độc lập, xung nhịp ổn định' },
    { category: 'Hiệu năng lưu trữ', detail: '100% Ổ cứng Enterprise SSD tốc độ đọc/ghi cao, bảo vệ dữ liệu toàn vẹn' },
    { category: 'Băng thông mạng & IP', detail: '300 Mbps Băng thông trong nước & quốc tế, Không giới hạn lưu lượng (Unlimited), 01 IPv4 tĩnh' },
    { category: 'Hạ tầng Trung tâm dữ liệu', detail: 'Đạt chuẩn quốc tế Data Center Tier III (Miền Bắc & Miền Nam)' },
    { category: 'Tiêu chuẩn An toàn thông tin', detail: 'ISO 27001:2022, ISO 27017, ISO 27018, ISO 20000-1:2018, ISO 22301:2019, Chứng nhận ATTT Cấp độ 3' },
    { category: 'Cam kết chất lượng (SLA)', detail: '99.99% thời gian khả dụng hàng năm' },
  ];

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            TÍNH NĂNG VƯỢT TRỘI &amp; SPEC SHEET
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            Năng Lực Công Nghệ &amp; Tính Năng Chuyên Sâu
          </h2>
        </div>

        {/* Grid 4 Card Tính Năng Cốt Lõi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreFeatures.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                  <IconComp className="w-6 h-6" />
                </div>

                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bảng Thông Số Kỹ Thuật (Technical Spec Table) */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] mb-6 text-center">
            Bảng Thông Số Kỹ Thuật
          </h3>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-xs font-black uppercase text-slate-800 tracking-wider border-b border-slate-200">
                  <th className="py-4 px-6 w-1/3">Hạng Mục Kỹ Thuật</th>
                  <th className="py-4 px-6 w-2/3">Chi Tiết Thông Số Tiêu Chuẩn</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {specRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-[var(--vidc-legacy-hex-222225)] bg-slate-50/50">
                      {row.category}
                    </td>
                    <td className="py-4 px-6 leading-relaxed font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                        <span>{row.detail}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
