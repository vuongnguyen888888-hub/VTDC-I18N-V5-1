import React from 'react';
import { 
  DollarSign, 
  ShieldCheck, 
  Headset, 
  Zap, 
  Clock, 
  Cloud 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudMigrationBenefitsProps {
  currentMarket?: SEAMarket;
}

export const CloudMigrationBenefits: React.FC<CloudMigrationBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos ? 'Why Choose Viettel Cloud Migration?' : 'Tại sao lựa chọn Viettel Cloud Migration?',
  };

  const benefits = [
    {
      icon: DollarSign,
      title: isLaos ? 'Capex & Opex Cost Optimization' : 'Tối ưu chi phí đầu tư (Capex / Opex)',
      desc: isLaos 
        ? 'Cut massive upfront hardware purchases, stop hardware depreciation risks, and avoid high foreign exchange cross-border cloud fees.'
        : 'Cắt giảm chi phí đầu tư phần cứng ban đầu, loại bỏ rủi ro khấu hao thiết bị vật lý và triệt tiêu các phụ phí ngoại tệ từ Cloud nước ngoài.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Full Decree 13/2023/ND-CP Compliance' : 'Tuân thủ pháp luật & Nghị định 13/2023/NĐ-CP',
      desc: isLaos 
        ? 'All databases and personal information are stored securely on Vietnamese soil, complying with the Cybersecurity Law and Personal Data Protection.'
        : 'Toàn bộ dữ liệu doanh nghiệp và thông tin khách hàng được lưu trữ an toàn trong nước, đáp ứng chuẩn quy định về an ninh mạng và dữ liệu.',
    },
    {
      icon: Headset,
      title: isLaos ? 'Dedicated 24/7/365 Technical Engineers' : 'Đội ngũ chuyên gia kỹ thuật túc trực 24/7/365',
      desc: isLaos 
        ? 'Direct support from experienced Vietnamese solution architects from initial readiness assessment to live cutover.'
        : 'Đội ngũ chuyên gia kỹ thuật người Việt đồng hành trực tiếp từ khâu khảo sát, lập kế hoạch đến trực chiến cutover xuyên suốt 24/7.',
    },
    {
      icon: Zap,
      title: isLaos ? 'Zero-Loss Guarantee & Data Integrity' : 'Cam kết Zero-Loss & Toàn vẹn dữ liệu',
      desc: isLaos 
        ? 'Stringent block-level hash verification and test rehearsals ensure 100% data integrity without any lost transactions.'
        : 'Quy trình kiểm tra mã băm đối soát SHA-256 và diễn tập thử nghiệm đảm bảo 100% dữ liệu không thất thoát hay sai lệch.',
    },
    {
      icon: Clock,
      title: isLaos ? 'Minimized Business Downtime' : 'Tối thiểu hóa Downtime kinh doanh',
      desc: isLaos 
        ? 'Incremental delta background syncing allows live systems to run continuously, only needing minimal off-peak minutes for final cutover.'
        : 'Công nghệ đồng bộ dữ liệu vi sai chạy ngầm cho phép hệ thống cũ hoạt động bình thường, chỉ gián đoạn vài phút vào khung giờ đêm khi cutover.',
    },
    {
      icon: Cloud,
      title: isLaos ? 'Multi-Cloud & Hybrid Interoperability' : 'Tương thích Đa nền tảng (Multi-Cloud & Hybrid)',
      desc: isLaos 
        ? 'Effortlessly bridges and shifts workloads between On-Premise, Private Cloud, and public hyperscalers via dedicated high-speed channels.'
        : 'Linh hoạt dịch chuyển và kết nối giữa hạ tầng On-Premise, máy chủ ảo hóa VMware/Hyper-V và các nền tảng AWS, Azure, GCP qua kênh truyền tốc độ cao.',
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header matching Cloud Server */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 6 Card Lợi ích matching Cloud Server */}
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

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
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
