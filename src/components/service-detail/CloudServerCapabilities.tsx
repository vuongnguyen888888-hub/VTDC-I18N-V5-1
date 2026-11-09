import React from 'react';
import { HardDrive, Server, Cpu, Sparkles, CheckCircle2, Activity, Lock } from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';

interface CloudServerCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const CloudServerCapabilities: React.FC<CloudServerCapabilitiesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES & TECH SPECS' : 'TÍNH NĂNG & THÔNG SỐ KỸ THUẬT',
    headline: isLaos 
      ? 'Technology Capabilities & Technical Specifications'
      : 'Năng Lực Công Nghệ & Bảng Thông Số Kỹ Thuật',
    tableTitle: isLaos ? 'Technical Specifications' : 'Bảng Thông Số Kỹ Thuật Tiêu Chuẩn',
    col1: isLaos ? 'Technical Category' : 'Hạng mục kỹ thuật',
    col2: isLaos ? 'Viettel Cloud Server Standard Specification' : 'Chi tiết thông số tiêu chuẩn Viettel Cloud Server',
  };

  const coreFeatures = [
    {
      title: 'Cấp phát tự động dưới 5 phút',
      desc: 'Công nghệ Fast-Provisioning tự động phân bổ máy ảo mới lên các máy chủ vật lý có mức tải thấp, đồng thời kích hoạt cơ chế tự di chuyển khi phát hiện máy chủ vật lý quá tải để đảm bảo tính sẵn sàng cao.',
      icon: Cpu,
    },
    {
      title: 'Mở rộng nóng (Hot-add) không dừng dịch vụ',
      desc: 'Hỗ trợ tính năng tăng (resize) vCPU, RAM và mở rộng (extend) dung lượng ổ đĩa SSD trực tiếp khi hệ thống đang vận hành mà không cần khởi động lại máy ảo.',
      icon: HardDrive,
    },
    {
      title: 'Cân bằng tài nguyên & Phân cụm ổn định',
      desc: 'Nền tảng phân cụm (Cluster) tự động san tải giữa các node và phát hiện máy ảo lỗi để ngừng điều hướng tải, loại bỏ hoàn toàn nguy cơ nghẽn mạng và tranh chấp tài nguyên vật lý.',
      icon: Server,
    },
    {
      title: 'Hạ tầng lưu trữ SAN SSD chuyên dụng',
      desc: 'Toàn bộ dữ liệu đặt trên hệ thống lưu trữ mạng SAN Enterprise với cơ chế dự phòng mức ổ đĩa và RAID Controller, đảm bảo hiệu năng đọc/ghi ổn định đạt mức mặc định 3000 IOPS/VM.',
      icon: HardDrive,
    },
    {
      title: 'Giám sát hiệu năng thời gian thực',
      desc: 'Cổng quản trị cung cấp biểu đồ trực quan theo dõi tức thời các chỉ số vCPU, RAM, IOPS và băng thông; tự động gửi cảnh báo khi hiệu suất tài nguyên vượt ngưỡng cho phép.',
      icon: Activity,
    },
    {
      title: 'Cổng quản trị tự phục vụ (Self-service Portal)',
      desc: 'Tích hợp Web Console điều khiển máy ảo trực tiếp, chủ động bật/tắt/reboot, đổi hệ điều hành vẫn giữ nguyên IP, kiểm tra nhật ký tác động và phân quyền kiểm soát truy cập (IAM).',
      icon: Lock,
    },
  ];

  const specsTable = [
    { category: 'Nền tảng ảo hóa', detail: 'Mã nguồn mở OpenStack IaaS thế hệ mới, tương thích chuẩn API OpenStack & AWS' },
    { category: 'Vi xử lý (Compute)', detail: 'Chip Intel x86 chuyên dụng cho Data Center (Intel Gold Gen 1 – Gen 3)' },
    { category: 'Quy mô tính toán tối đa', detail: 'Lên đến 48 vCPU/VM (tỷ lệ 1 vCPU = 1 thread)' },
    { category: 'Bộ nhớ (RAM)', detail: 'Chuẩn DDR4 tốc độ cao, hỗ trợ mở rộng tối đa lên đến 128 GB/VM' },
    { category: 'Hạ tầng lưu trữ (Storage)', detail: '100% Enterprise SSD trên hạ tầng SAN Storage, IOPS mặc định 3000 IOPS/VM' },
    { category: 'Băng thông mạng', detail: '300 Mbps trong nước mặc định (nâng cấp tối đa 1 Gbps), kết nối quốc tế 10 Mbps' },
    { category: 'Địa chỉ IP', detail: 'Cấp sẵn 01 IPv4 tĩnh riêng biệt, hỗ trợ định tuyến IPv6' },
    { category: 'Lưu lượng dữ liệu (Data Transfer)', detail: 'Không giới hạn lưu lượng truyền tải (Unlimited)' },
    { category: 'Hệ thống Data Center', detail: 'Đạt chuẩn ANSI/TIA-942 Rated 3 Constructed Facilities tại Hà Nội (Pháp Vân) và Bình Dương' },
    { category: 'Tiêu chuẩn An toàn thông tin', detail: 'Đạt chứng nhận ISO 27001:2013, ISO 27017:2015, Tiêu chuẩn BTTTT số 1145 & 2612' },
    { category: 'Cam kết chất lượng dịch vụ (SLA)', detail: 'Độ sẵn sàng hoạt động đạt 99.99%' },
  ];

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)]">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 6 Core Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3.5 hover:border-[var(--vidc-color-brand-red)] transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                  <IconComp className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-[var(--vidc-legacy-hex-222225)]">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Technical Specification Table */}
        <div className="space-y-6 pt-6">
          <div className="border-l-4 border-[var(--vidc-color-brand-red)] pl-4">
            <h3 className="text-xl font-bold text-[var(--vidc-legacy-hex-222225)]">
              {t.tableTitle}
            </h3>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200/80 shadow-xs bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-800 text-xs uppercase font-extrabold tracking-wider">
                  <th className="py-3.5 px-5 w-1/3">{t.col1}</th>
                  <th className="py-3.5 px-5 w-2/3">{t.col2}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                {specsTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                    <td className="py-3.5 px-5 font-bold text-slate-950 align-top">{row.category}</td>
                    <td className="py-3.5 px-5 text-slate-700 leading-relaxed align-top">{row.detail}</td>
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
