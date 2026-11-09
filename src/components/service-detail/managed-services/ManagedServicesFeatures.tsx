import React, { useState } from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Network, 
  Terminal, 
  CheckCircle2, 
  RefreshCw,
  HardDrive
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ManagedServicesFeaturesProps {
  currentMarket?: SEAMarket;
}

export const ManagedServicesFeatures: React.FC<ManagedServicesFeaturesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'monitoring' | 'system' | 'security' | 'database'>('monitoring');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'KEY CAPABILITIES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos ? 'Advanced IT Management Features & Capabilities' : 'Tính năng hạ tầng & Năng lực quản trị vượt trội',
    tabMonitoring: isLaos ? '24/7 Monitoring' : 'Giám sát 24/7 & Cảnh báo',
    tabSystem: isLaos ? 'OS & Middleware' : 'Hệ điều hành & Ứng dụng',
    tabSecurity: isLaos ? 'Security & Patching' : 'An ninh mạng & Vá lỗi',
    tabDatabase: isLaos ? 'DB & Storage' : 'Cơ sở dữ liệu & Sao lưu',
  };

  const tabContents = {
    monitoring: [
      {
        icon: Activity,
        title: 'Giám sát đa tầng tài nguyên hệ thống',
        desc: 'Theo dõi chi tiết 24/7 các tham số tài nguyên: CPU Load, RAM usage, Dung lượng đĩa I/O (Disk IOPS), Băng thông mạng Network Traffic In/Out.',
      },
      {
        icon: Terminal,
        title: 'Giám sát dịch vụ cốt lõi (Service Check)',
        desc: 'Kiểm tra liên tục tính sẵn sàng của các port và dịch vụ thiết yếu: Ping/ICMP, HTTP/HTTPS (Port 80/443), SSH, RDP, MySQL, Postgres, MSSQL.',
      },
      {
        icon: RefreshCw,
        title: 'Cơ chế cảnh báo tự động tức thì',
        desc: 'Gửi cảnh báo sự cố ngay lập tức qua SMS, Telegram, Email và còi báo động tại phòng NOC trung tâm khi vượt ngưỡng an toàn thiết lập.',
      },
    ],
    system: [
      {
        icon: Cpu,
        title: 'Cài đặt, cấu hình chuẩn hóa OS',
        desc: 'Triển khai chuẩn hóa trên tất cả hệ điều hành Linux (Ubuntu, CentOS, Rocky Linux, AlmaLinux) và Windows Server bản quyền.',
      },
      {
        icon: Terminal,
        title: 'Cấu hình tối ưu Web Server & Runtime',
        desc: 'Thiết lập và tinh chỉnh hiệu năng cao cho Nginx, Apache, IIS, NodeJS, PHP-FPM, Python Gunicorn, Tomcat và chứng chỉ bảo mật SSL/TLS.',
      },
      {
        icon: HardDrive,
        title: 'Phân vùng và quản trị Storage/LVM',
        desc: 'Mở rộng phân vùng đĩa cứng trực tuyến, cấu hình RAID phần mềm, LVM, tự động dọn dẹp dung lượng tạm và quản lý Swap tối ưu.',
      },
    ],
    security: [
      {
        icon: ShieldCheck,
        title: 'Cập nhật bản vá bảo mật định kỳ',
        desc: 'Chủ động cập nhật các Security Patches mới nhất của hệ điều hành và phần mềm dịch vụ để ngăn chặn các lỗ hổng zero-day nguy hiểm.',
      },
      {
        icon: Network,
        title: 'Cấu hình Firewall & Hardening an ninh',
        desc: 'Thiết lập quy tắc tường lửa (Iptables/UFW/Firewalld/Windows Firewall), đổi cổng mặc định, vô hiệu hóa tài khoản rủi ro và giới hạn IP truy cập.',
      },
      {
        icon: Activity,
        title: 'Tự động rà soát mã độc & lỗ hổng',
        desc: 'Quét định kỳ phát hiện mã độc (Malware scan), kiểm tra cổng mở bất thường và báo cáo phân tích rủi ro an toàn thông tin.',
      },
    ],
    database: [
      {
        icon: Database,
        title: 'Quản trị chuyên sâu MySQL / PostgreSQL',
        desc: 'Cài đặt, phân quyền truy cập, cấu hình bộ đệm Buffer Pool, kết nối Connection Pool và định kỳ tối ưu bảng dữ liệu (Table Optimization).',
      },
      {
        icon: RefreshCw,
        title: 'Cấu hình nhân bản dữ liệu Replication',
        desc: 'Thiết lập mô hình Master-Slave / Master-Master để phân tải đọc ghi và đảm bảo dự phòng nóng khi xảy ra sự cố phần cứng.',
      },
      {
        icon: HardDrive,
        title: 'Chính sách sao lưu & Diễn tập DR',
        desc: 'Lập lịch sao lưu tự động Full/Incremental hàng ngày, mã hóa file backup, lưu trữ off-site an toàn và diễn tập khôi phục định kỳ.',
      },
    ],
  };

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Tab Buttons Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 mb-10 pb-2">
          <VIDCNativeButton
            type="button"
            onClick={() => setActiveTab('monitoring')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'monitoring'
                ? 'bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {t.tabMonitoring}
          </VIDCNativeButton>
          <VIDCNativeButton
            type="button"
            onClick={() => setActiveTab('system')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'system'
                ? 'bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {t.tabSystem}
          </VIDCNativeButton>
          <VIDCNativeButton
            type="button"
            onClick={() => setActiveTab('security')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'security'
                ? 'bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {t.tabSecurity}
          </VIDCNativeButton>
          <VIDCNativeButton
            type="button"
            onClick={() => setActiveTab('database')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'database'
                ? 'bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {t.tabDatabase}
          </VIDCNativeButton>
        </div>

        {/* Tab 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tabContents[activeTab].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[var(--vidc-color-brand-red)] hover:shadow-lg transition-all duration-300 space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Scope of Work Table */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 md:p-8">
          <h3 className="text-base sm:text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] mb-4 text-center">
            Ma trận trách nhiệm & Quy trình phối hợp vận hành (RACI Matrix)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-700 bg-slate-100/70">
                  <th className="py-3 px-4 font-extrabold">Hạng mục công việc</th>
                  <th className="py-3 px-4 font-extrabold text-center text-[var(--vidc-color-brand-red)]">Kỹ sư Viettel IDC</th>
                  <th className="py-3 px-4 font-extrabold text-center">Phía Khách hàng</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                <tr>
                  <td className="py-3 px-4 font-medium">Giám sát 24/7 phần cứng & đường truyền mạng</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-600">Chịu trách nhiệm chính (A/R)</td>
                  <td className="py-3 px-4 text-center">Nhận thông báo (I)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Cài đặt, cập nhật bản vá bảo mật OS & Web/DB</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-600">Thực hiện định kỳ (R)</td>
                  <td className="py-3 px-4 text-center">Phê duyệt lịch bảo trì (A)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Thiết lập chính sách sao lưu & Diễn tập phục hồi</td>
                  <td className="py-3 px-4 text-center font-bold text-emerald-600">Cấu hình & Giám sát (R)</td>
                  <td className="py-3 px-4 text-center">Xác nhận dữ liệu (C)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Phát triển mã nguồn ứng dụng & Logic phần mềm</td>
                  <td className="py-3 px-4 text-center">Hỗ trợ hạ tầng chạy mã nguồn</td>
                  <td className="py-3 px-4 text-center font-bold text-slate-800">Chịu trách nhiệm chính (A/R)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
