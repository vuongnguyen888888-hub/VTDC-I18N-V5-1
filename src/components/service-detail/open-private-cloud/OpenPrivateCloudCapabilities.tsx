import React from 'react';
import { Shield, LayoutDashboard, Cpu, CheckCircle2, Network, HardDrive, Server, Layers, Sliders, Activity, Lock } from 'lucide-react';

export const OpenPrivateCloudCapabilities: React.FC = () => {
  const specRows = [
    { category: 'Nền tảng công nghệ lõi', detail: 'Nền tảng mã nguồn mở OpenStack Enterprise Hardened' },
    { category: 'Mô hình kiến trúc', detail: 'Single-Tenant Dedicated Private Cloud (Tách biệt hoàn toàn phần cứng)' },
    { category: 'Hạ tầng vi xử lý & RAM', detail: 'Chipset Enterprise thế hệ mới, tài nguyên tính toán độc lập, không chia sẻ' },
    { category: 'Công nghệ lưu trữ', detail: '100% Software Defined Storage (SDS), ổ đĩa Enterprise SSD Gold (NVMe)' },
    { category: 'Mạng định nghĩa phần mềm', detail: 'SDN Layer 2 Switching, Dynamic/Static Routing, vFirewall, vLoad Balancer, Security Group' },
    { category: 'Tính năng PaaS tích hợp', detail: 'Tích hợp sẵn Kubernetes Service (K8S) và Database Service (DBS)' },
    { category: 'Cổng quản trị & Vận hành', detail: 'Portal Self-Service, Giám sát Metrics thời gian thực, Quản trị phân quyền IAM' },
    { category: 'Tiêu chuẩn Tuân thủ', detail: 'Đạt tiêu chuẩn kỹ thuật Chính phủ điện tử theo Thông tư 1145/BTTTT-CATTT' },
    { category: 'Cam kết độ sẵn sàng (SLA)', detail: '99.99% Uptime cho toàn bộ hệ sinh thái dịch vụ' },
  ];

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            TÍNH NĂNG VƯỢT TRỘI &amp; BẢNG THÔNG SỐ KỸ THUẬT
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            Năng Lực Công Nghệ &amp; Tính Năng Chuyên Sâu
          </h2>
        </div>

        {/* Grid 3 Khối Tính Năng Trọng Tâm */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          
          {/* Card 1: Thiết lập Trung tâm Dữ liệu Ảo bảo mật */}
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between space-y-5 shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[var(--vidc-legacy-hex-222225)] leading-snug">
                Thiết lập Trung tâm Dữ liệu Ảo bảo mật
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--vidc-color-brand-red)] mt-2 shrink-0" />
                  <p>
                    <strong className="text-slate-900">Hệ thống mạng (Networking):</strong> Đầy đủ thiết bị ảo hóa mạng cơ bản như Internet Gateway, Subnet, Router, Public IP, Security Group; được bảo vệ và cân bằng tải bởi vFirewall và vLoad Balancer ảo.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--vidc-color-brand-red)] mt-2 shrink-0" />
                  <p>
                    <strong className="text-slate-900">Lớp xử lý tính toán (Compute):</strong> Năng lực CPU và RAM độc lập được cung cấp dưới dạng các máy chủ ảo (Virtual Machine – VM) linh hoạt.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--vidc-color-brand-red)] mt-2 shrink-0" />
                  <p>
                    <strong className="text-slate-900">Hệ thống lưu trữ (Storage):</strong> Công nghệ lưu trữ SSD Gold (NVMe) tốc độ cao tích hợp trực tiếp vào máy chủ ảo, hỗ trợ sao lưu dự phòng (Backup) linh hoạt.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--vidc-color-brand-red)] mt-2 shrink-0" />
                  <p>
                    <strong className="text-slate-900">Dịch vụ mở rộng (PaaS):</strong> Tích hợp sẵn sàng Kubernetes (K8S) và Database như một tính năng có sẵn trên cụm tài nguyên.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Giao diện Quản trị Self-Service Thân thiện & Tập trung */}
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between space-y-5 shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[var(--vidc-legacy-hex-222225)] leading-snug">
                Giao diện Quản trị Self-Service Thân thiện &amp; Tập trung
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--vidc-color-brand-red)] mt-2 shrink-0" />
                  <p>
                    Cung cấp Web Portal self-service cho phép chủ động thanh toán, gia hạn, mua thêm tài nguyên và quản lý vòng đời VM (Console, bật/tắt/reboot/rebuild).
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--vidc-color-brand-red)] mt-2 shrink-0" />
                  <p>
                    Chủ động cấu hình mạng ảo, vFirewall, vLoad Balancer, Auto Scaling và phân nhóm máy chủ (Instance Group).
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--vidc-color-brand-red)] mt-2 shrink-0" />
                  <p>
                    Giám sát hiệu suất thời gian thực (CPU, RAM, IOPS, Băng thông mạng), quản lý chính sách sao lưu và phân quyền người dùng đa cấp (IAM).
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--vidc-color-brand-red)] mt-2 shrink-0" />
                  <p>
                    Quản trị tập trung toàn bộ tài nguyên cụm và tính năng nâng cao trên một giao diện duy nhất.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Giải pháp SDN & SDS Mạnh mẽ */}
          <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between space-y-5 shadow-sm">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[var(--vidc-legacy-hex-222225)] leading-snug">
                Giải pháp SDN &amp; SDS Mạnh mẽ
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--vidc-color-brand-red)] mt-2 shrink-0" />
                  <p>
                    <strong className="text-slate-900">Mạng SDN:</strong> Hỗ trợ chuyển mạch Switching Layer 2 linh hoạt, kết nối mở rộng an toàn qua Router/Firewall liên vùng và liên Data Center.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--vidc-color-brand-red)] mt-2 shrink-0" />
                  <p>
                    <strong className="text-slate-900">Lưu trữ SDS:</strong> Cơ chế lưu trữ định nghĩa bằng phần mềm mang lại khả năng mở rộng dung lượng không giới hạn và tự động cân bằng tải thông minh trên toàn cụm.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bảng Thông Số Kỹ Thuật Tiêu Chuẩn (Technical Spec Table) */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] mb-6 text-center">
            Bảng Thông Số Kỹ Thuật Tiêu Chuẩn (Technical Spec Sheet)
          </h3>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-xs font-black uppercase text-slate-800 tracking-wider border-b border-slate-200">
                  <th className="py-4 px-6 w-1/3">Hạng Mục Kỹ Thuật</th>
                  <th className="py-4 px-6 w-2/3">Chi Tiết Tiêu Chuẩn Viettel Open Private Cloud</th>
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
