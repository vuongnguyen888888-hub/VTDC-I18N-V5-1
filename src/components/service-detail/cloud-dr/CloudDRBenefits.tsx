import React from 'react';
import { TrendingDown, Zap, ShieldCheck, Clock, Award, Headset } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudDRBenefitsProps {
  currentMarket?: SEAMarket;
}

export const CloudDRBenefits: React.FC<CloudDRBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos ? 'Why Choose Viettel Cloud DR (DRaaS)?' : 'Tại sao lựa chọn Viettel Cloud DR (DRaaS)?',
  };

  const benefits = [
    {
      icon: TrendingDown,
      title: isLaos ? 'TCO Cost Reduction ≤ 50%' : 'Tiết kiệm chi phí đầu tư (TCO ≤ 50%)',
      desc: isLaos 
        ? 'Eliminates upfront CAPEX for secondary data center builds. DR maintenance costs do not exceed 50% of the primary system.'
        : 'Loại bỏ chi phí đầu tư hàng tỷ đồng xây dựng trung tâm dữ liệu thứ cấp; tổng chi phí duy trì DR không vượt quá 50% hệ thống chính.',
    },
    {
      icon: Clock,
      title: isLaos ? 'Ultra-fast RTO ~ 10 Minutes' : 'Khôi phục dịch vụ siêu tốc (RTO ~ 10 phút)',
      desc: isLaos 
        ? 'Restores core application workloads in ~10 minutes, minimizing business downtime and revenue loss.'
        : 'Thời gian khôi phục hoàn tất dịch vụ chỉ trong vòng 10 phút, giảm thiểu tổn thất doanh thu do ngưng trệ hệ thống.',
    },
    {
      icon: Zap,
      title: isLaos ? '1-Click Automated Failover' : 'Đơn giản hóa vận hành & 1-Click Failover',
      desc: isLaos 
        ? 'Automated failover execution with a single click, eliminating complex manual reconfigurations.'
        : 'Chuyển đổi dự phòng tự động chỉ bằng một cú click chuột theo kịch bản tùy chọn, không cần cấu hình thủ công phức tạp.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Multi-Hypervisor Compatibility' : 'Tương thích đa nền tảng VMware & Hyper-V',
      desc: isLaos 
        ? 'Seamless synchronization across enterprise virtualization platforms VMware vSphere and Microsoft Hyper-V.'
        : 'Nhân bản đồng bộ dữ liệu mượt mà giữa các hệ thống máy chủ ảo hóa hàng đầu VMware vSphere và Microsoft Hyper-V.',
    },
    {
      icon: Award,
      title: isLaos ? 'SLA 99.99% Tier 3 Data Centers' : 'Cam kết SLA 99.99% tại DC Tier 3',
      desc: isLaos 
        ? 'Operated on nationwide TIA-942 Rated 3 Data Centers with 99.99% uptime availability and carrier-grade power.'
        : 'Vận hành trên hệ thống Data Center tiêu chuẩn quốc tế TIA-942 Rated 3 phủ sóng toàn quốc với độ sẵn sàng SLA 99.99%.',
    },
    {
      icon: Headset,
      title: isLaos ? '24/7 Expert DR Drills & Support' : 'Hỗ trợ kỹ thuật & Diễn tập DR 24/7/365',
      desc: isLaos 
        ? 'Dedicated engineering team supporting periodic disaster drills, replication monitoring, and 24/7 incident response.'
        : 'Đội ngũ chuyên gia kỹ sư trực tiếp hỗ trợ diễn tập DR định kỳ, giám sát tiến trình sao chép và đồng hành xử lý sự cố 24/7.',
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

        {/* Grid 6 Card Lợi ích chuẩn CloudServer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:shadow-md hover:border-slate-300 transition-all"
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
