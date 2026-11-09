import React from 'react';
import { Clock, ShieldCheck, TrendingUp, DollarSign, Sliders, Award } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudBackupBenefitsProps {
  currentMarket?: SEAMarket;
}

export const CloudBackupBenefits: React.FC<CloudBackupBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH DỊCH VỤ',
    headline: isLaos ? 'Why Choose Viettel Cloud Backup (BaaS)?' : 'Lợi ích vượt trội cho doanh nghiệp số',
  };

  const benefits = [
    {
      icon: Clock,
      title: isLaos ? 'High Availability & Rapid Recovery' : 'Tính sẵn sàng cao & Khôi phục tức thời',
      desc: isLaos 
        ? 'Minimize RTO and RPO metrics to minutes, ensuring continuous business operations without data disruption.'
        : 'Tối ưu hóa chỉ số RTO (thời gian khôi phục) và RPO (điểm khôi phục) xuống mức tối thiểu, bảo đảm hoạt động sản xuất kinh doanh liên tục.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Immunity to Ransomware Extortion' : 'Miễn nhiễm với hiểm họa Ransomware',
      desc: isLaos 
        ? 'Immutable Object Lock prevents backup files from being encrypted or deleted, providing clean restoration points at any time.'
        : 'Công nghệ lưu trữ bất biến (Immutable Object Lock) ngăn chặn triệt để virus mã hóa hoặc xóa tệp sao lưu, luôn có sẵn bản sạch để phục hồi.',
    },
    {
      icon: TrendingUp,
      title: isLaos ? 'Zero-Downtime Elastic Scalability' : 'Mở rộng không gián đoạn dịch vụ',
      desc: isLaos 
        ? 'Easily scale from a few gigabytes to petabytes on demand without interrupting running production workloads.'
        : 'Linh hoạt mở rộng dung lượng lưu trữ từ vài GB đến hàng trăm TB theo nhu cầu thực tế mà không cần tắt máy hay gián đoạn hệ thống đang chạy.',
    },
    {
      icon: DollarSign,
      title: isLaos ? 'Optimal Resource & TCO Savings' : 'Tối ưu nguồn lực & Tiết kiệm chi phí đầu tư',
      desc: isLaos 
        ? 'Eliminate upfront CAPEX for SAN/tape hardware, reduce maintenance overhead, and pay only for actual provisioned capacity.'
        : 'Chuyển đổi hoàn toàn chi phí đầu tư ban đầu (CAPEX) sang chi phí vận hành (OPEX), loại bỏ gánh nặng mua sắm thiết bị lưu trữ vật lý tại chỗ đắt đỏ.',
    },
    {
      icon: Sliders,
      title: isLaos ? 'Centralized Self-Service Automation' : 'Quản trị tập trung, tự động hóa hoàn toàn',
      desc: isLaos 
        ? 'Intuitive web console for unified policy scheduling, automated health monitoring, and instant self-service restoration.'
        : 'Giao diện Web Portal thân thiện, tự động lập lịch sao lưu, theo dõi trạng thái công việc và chủ động thực hiện khôi phục dữ liệu 24/7.',
    },
    {
      icon: Award,
      title: isLaos ? '99.99% SLA & International Compliance' : 'Cam kết SLA 99.99% & Đạt chuẩn quốc tế',
      desc: isLaos 
        ? 'Tier 3 TIA-942 infrastructure standard, ISO 27001/27017, PCI-DSS compliance, and Vietnamese Personal Data Protection decree.'
        : 'Hạ tầng Data Center đạt chuẩn quốc tế TIA-942 Rated 3, cam kết SLA khả dụng 99.99%, đáp ứng đầy đủ tiêu chuẩn ISO 27001 và Nghị định 13/NĐ-CP.',
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 6 Card Lợi ích Chuẩn TDV-01 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>

                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
