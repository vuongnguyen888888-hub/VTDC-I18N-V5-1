import React from 'react';
import { Cpu, HardDrive, Network, ShieldCheck, Check } from 'lucide-react';

export const VpcFeatures: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-100">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[color:var(--vidc-color-brand-red)] bg-red-50 px-3 py-1 rounded-full border border-red-100">
            02. TÍNH NĂNG NÂNG CAO
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--vidc-legacy-hex-0f172a)] tracking-tight mt-3">
            Năng lực kỹ thuật chuyên sâu
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Khám phá kiến trúc chi tiết của Virtual Private Cloud trên nền tảng OpenStack Enterprise
          </p>
        </div>

        {/* Phân nhóm tính năng kỹ thuật chuyên sâu */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Group 1: vCompute */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-red-200 transition-all shadow-none">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center font-bold border border-red-100 shrink-0">
                  <Cpu className="w-5 h-5 text-[color:var(--vidc-color-brand-red)]" />
                </div>
                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-0f172a)]">
                  Tài nguyên tính toán (vCompute)
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <span>Xây dựng trên nền tảng ảo hóa mã nguồn mở <strong>OpenStack chuẩn Enterprise</strong>, giúp doanh nghiệp làm chủ công nghệ và không bị phụ thuộc nhà cung cấp (No Vendor Lock-in).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <span>Hỗ trợ tính năng <strong>Live Migration</strong> (chuyển đổi máy ảo trực tiếp không gián đoạn) khi cần bảo trì phần cứng.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <span>Hỗ trợ đa dạng hệ điều hành: Ubuntu, CentOS, RedHat Enterprise Linux, Debian, Windows Server... cùng khả năng import Custom OS Image của khách hàng.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <span>Tính năng tạo bản sao nhanh (Snapshot) và quản lý vòng đời máy chủ ảo tức thì.</span>
                </li>
              </ul>
            </div>

            {/* Group 2: vStorage */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-red-200 transition-all shadow-none">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center font-bold border border-red-100 shrink-0">
                  <HardDrive className="w-5 h-5 text-[color:var(--vidc-color-brand-red)]" />
                </div>
                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-0f172a)]">
                  Lưu trữ phân tầng (vStorage)
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <span>Phân tán đa cụm (<strong>Distributed Storage</strong>) đảm bảo tính toàn vẹn dữ liệu ngay cả khi có sự cố phần cứng.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <span>Đa dạng phân lớp lưu trữ từ Standard SAS, Enterprise SSD đến Ultra-fast NVMe, dễ dàng gán trực tiếp (Hot-plug Volume) vào máy ảo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <span>Tích hợp dịch vụ Lưu trữ hướng đối tượng (<strong>Object Storage S3-compatible</strong>) cho dữ liệu phi cấu trúc.</span>
                </li>
              </ul>
            </div>

            {/* Group 3: SDN Networking */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-red-200 transition-all shadow-none">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center font-bold border border-red-100 shrink-0">
                  <Network className="w-5 h-5 text-[color:var(--vidc-color-brand-red)]" />
                </div>
                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-0f172a)]">
                  Mạng định nghĩa bằng phần mềm (SDN & Advanced Networking)
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <span><strong>Virtual Router & Multi-Subnet:</strong> Tự do thiết lập dải mạng riêng (Private CIDR: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <span><strong>Virtual Load Balancer (vLB):</strong> Cân bằng tải L4 (TCP/UDP) và L7 (HTTP/HTTPS) với tính năng SSL Offloading / SSL Termination, Health Check tự động.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <span><strong>NAT Gateway & Floating IP:</strong> Quản lý địa chỉ IP Public linh hoạt, bảo vệ máy chủ ứng dụng nội bộ không bị lộ trực tiếp ra Internet.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <span><strong>VPN Site-to-Site (IPsec):</strong> Thiết lập đường hầm bảo mật kết nối trực tiếp văn phòng, chi nhánh hoặc Trung tâm dữ liệu vật lý (On-premise) của khách hàng với vVPC.</span>
                </li>
              </ul>
            </div>

            {/* Group 4: Security & Governance */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-red-200 transition-all shadow-none">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center font-bold border border-red-100 shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[color:var(--vidc-color-brand-red)]" />
                </div>
                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-0f172a)]">
                  An toàn thông tin & Quản trị bảo mật
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <span><strong>Security Group & Network ACL:</strong> Tường lửa lớp mạng kiểm soát luồng traffic vào/ra (Inbound/Outbound) theo từng Port và Protocol.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <span><strong>Virtual Firewall (vFW):</strong> Hỗ trợ tích hợp các giải pháp tường lửa thế hệ mới (Next-Gen Firewall) từ các hãng bảo mật hàng đầu.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[color:var(--vidc-color-brand-red)] shrink-0 mt-0.5" />
                  <span><strong>Identity & Access Management (IAM):</strong> Phân quyền chi tiết (RBAC) theo vai trò quản trị viên, kiểm soát nhật ký truy vết (Audit Logs).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const VpcSpecs: React.FC = () => {
  return (
    <section id="specs" className="py-16 md:py-24 bg-slate-50 text-slate-900 border-b border-slate-200/80">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[color:var(--vidc-color-brand-red)] bg-red-50 px-3 py-1 rounded-full border border-red-100">
            04. THÔNG SỐ KỸ THUẬT
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--vidc-legacy-hex-0f172a)] tracking-tight mt-3">
            Bảng thông số kỹ thuật tiêu chuẩn (Spec Sheet)
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Cam kết chi tiết phần cứng, phần mềm và hạ tầng vận hành Viettel Virtual Private Cloud
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider font-extrabold border-b border-slate-800">
                <th className="py-4 px-6 w-1/3">Tiêu chí</th>
                <th className="py-4 px-6 w-2/3">Thông số kỹ thuật chi tiết</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-800">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-bold text-[var(--vidc-legacy-hex-0f172a)]">Nền tảng công nghệ</td>
                <td className="py-4 px-6 font-medium text-slate-700">OpenStack Platform (Enterprise Hardened)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-bold text-[var(--vidc-legacy-hex-0f172a)]">Hạ tầng máy chủ</td>
                <td className="py-4 px-6 font-medium text-slate-700">CPU Intel Xeon Gold / Platinum đời mới nhất, RAM DDR4/DDR5 ECC</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-bold text-[var(--vidc-legacy-hex-0f172a)]">Hạ tầng lưu trữ</td>
                <td className="py-4 px-6 font-medium text-slate-700">Pure SSD / NVMe Storage Cluster, cơ chế dự phòng N+1 hoặc 2N</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-bold text-[var(--vidc-legacy-hex-0f172a)]">Độ sẵn sàng (SLA)</td>
                <td className="py-4 px-6 font-bold text-[color:var(--vidc-color-brand-red)]">99.99% Cam kết dịch vụ hàng tháng</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-bold text-[var(--vidc-legacy-hex-0f172a)]">Cổng kết nối Internet</td>
                <td className="py-4 px-6 font-medium text-slate-700">Cổng mạng DC 10 Gbps – 40 Gbps, kết nối đa hướng tới các ISP lớn</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-bold text-[var(--vidc-legacy-hex-0f172a)]">Giao diện quản lý</td>
                <td className="py-4 px-6 font-medium text-slate-700">Web Portal tiếng Việt / tiếng Anh, RESTful API, OpenStack CLI, Terraform</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-bold text-[var(--vidc-legacy-hex-0f172a)]">Cơ chế sao lưu</td>
                <td className="py-4 px-6 font-medium text-slate-700">Hỗ trợ Snapshot tức thời và tích hợp hệ thống sao lưu tự động</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export const VpcCapabilitiesSpecs: React.FC = () => {
  return (
    <>
      <VpcFeatures />
      <VpcSpecs />
    </>
  );
};
