import React from 'react';
import { Network, Server, Cloud, Shield, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export const CloudServerArchitecture: React.FC = () => {
  const models = [
    {
      title: '1. Public Cloud Instance',
      subtitle: 'Tối ưu chi phí & Khởi tạo tức thì',
      desc: 'Máy chủ ảo chia sẻ hạ tầng vật lý đã được ảo hóa an toàn, cách ly hoàn toàn ở tầng Hypervisor. Phù hợp cho website, ứng dụng di động, môi trường Testing/Staging.',
      features: ['Khởi tạo tự động < 30s', 'Thanh toán linh hoạt theo tháng', 'Quản trị self-service Web Portal'],
    },
    {
      title: '2. Virtual Private Cloud (vVPC)',
      subtitle: 'Mạng riêng ảo cách ly logic 100%',
      desc: 'Xây dựng trung tâm dữ liệu ảo riêng biệt trên mây với dải mạng IP riêng, phân chia Subnet, Route Table và thiết lập tường lửa Security Group riêng cho Doanh nghiệp.',
      features: ['Cách ly mạng logic hoàn toàn', 'Thiết lập IP Subnet tùy chỉnh', 'Tích hợp vVPN Site-to-Site'],
    },
    {
      title: '3. Hybrid Cloud Architecture',
      subtitle: 'Kết nối trực tiếp On-Premises & Viettel Cloud',
      desc: 'Giải pháp kết nối đường truyền kênh truyền riêng (Viettel Cloud Connect vCC) giữa trung tâm dữ liệu riêng của doanh nghiệp và Viettel Cloud với độ trễ siêu thấp < 2ms.',
      features: ['Đường truyền riêng Dedicated Direct', 'Độ trễ thấp < 2ms', 'Bảo mật truyền tải dữ liệu'],
    },
  ];

  return (
    <section 
      id="architecture" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-0f1217)] text-white border-b border-[var(--vidc-legacy-hex-2d3748)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-900/30 text-[var(--vidc-color-brand-pink)] border border-red-500/30 mb-3">
            <Network className="w-3.5 h-3.5" />
            SECTION 6: MÔ HÌNH TRIỂN KHAI &amp; KIẾN TRÚC
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Linh Hoạt Lựa Chọn Mô Hình Kiến Trúc Hạ Tầng
          </h2>
          <p className="text-sm sm:text-base text-[var(--vidc-legacy-hex-94a3b8)]">
            Viettel Cloud Server hỗ trợ đầy đủ các mô hình kiến trúc hạ tầng từ đơn lẻ đến đa vùng Multi-AZ và Hybrid Cloud mở rộng.
          </p>
        </div>

        {/* 3 Deployment Models Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[var(--vidc-legacy-hex-161b22)] border border-[var(--vidc-legacy-hex-30363d)] hover:border-[var(--vidc-color-brand-red)]/50 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-red-900/30 text-[var(--vidc-color-brand-pink)] flex items-center justify-center font-bold text-sm font-mono border border-red-500/30">
                  0{idx + 1}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{model.title}</h3>
                  <div className="text-xs font-medium text-[var(--vidc-color-brand-red)]">{model.subtitle}</div>
                </div>

                <p className="text-xs text-[var(--vidc-legacy-hex-94a3b8)] leading-relaxed">
                  {model.desc}
                </p>

                <ul className="space-y-2 pt-2 border-t border-[var(--vidc-legacy-hex-21262d)]">
                  {model.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-[var(--vidc-legacy-hex-c9d1d9)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[var(--vidc-legacy-hex-21262d)] text-xs text-[var(--vidc-legacy-hex-8b949e)] font-mono flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
                <span>Chuẩn TIA-942 Rated 3</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
