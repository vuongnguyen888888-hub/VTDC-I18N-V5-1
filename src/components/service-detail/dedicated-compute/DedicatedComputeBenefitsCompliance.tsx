import React from 'react';
import { 
  Zap, 
  DollarSign, 
  ShieldCheck, 
  Headset, 
  Award, 
  Building2 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface DedicatedComputeBenefitsComplianceProps {
  currentMarket?: SEAMarket;
}

export const DedicatedComputeBenefitsCompliance: React.FC<DedicatedComputeBenefitsComplianceProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos ? 'Why Choose Viettel Server Leasing?' : 'Tại sao lựa chọn Viettel Server Leasing?',
  };

  const benefits = [
    {
      icon: DollarSign,
      title: isLaos ? 'Zero Upfront CapEx & Depreciation' : 'Không gánh nặng vốn đầu tư ban đầu & khấu hao',
      desc: isLaos 
        ? 'Eliminate large initial server procurement capital, convert CapEx to predictable monthly OpEx, and avoid hardware depreciation risks.'
        : 'Loại bỏ hoàn toàn chi phí mua sắm thiết bị đắt đỏ ban đầu, chuyển dịch sang chi phí vận hành (OpEx) linh hoạt hàng tháng mà không lo khấu hao.',
    },
    {
      icon: Zap,
      title: isLaos ? '100% Dedicated Peak Hardware Performance' : 'Hiệu năng phần cứng đỉnh cao & Độc lập tuyệt đối',
      desc: isLaos 
        ? 'Full processing power of multi-core enterprise CPUs, high RAM density, and hardware RAID without multi-tenant bottlenecks.'
        : 'Tận dụng 100% sức mạnh tính toán thực tế của vi xử lý đa nhân, RAM ECC dung lượng lớn và card RAID không lo nghẽn tài nguyên.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Comprehensive Physical & Network Isolation' : 'An toàn dữ liệu & Cách ly môi trường riêng biệt',
      desc: isLaos 
        ? 'Independent hardware chassis, isolated network subnets, and strict data center physical access control protect business data.'
        : 'Không gian máy chủ vật lý riêng biệt cùng các dải IP tĩnh độc lập, bảo vệ tuyệt đối cơ sở dữ liệu quan trọng trước các rủi ro chia sẻ.',
    },
    {
      icon: Building2,
      title: isLaos ? 'Tier 3 / Rated 3 Certified DC Facilities' : 'Hạ tầng Data Center chuẩn quốc tế TIA-942 Rated 3',
      desc: isLaos 
        ? 'Housed within 5 modern data centers nationwide with 99.99% SLA power availability, precision cooling, and automated BMS monitoring.'
        : 'Vận hành tại các Trung tâm Dữ liệu chuẩn quốc tế TIA-942 Rated 3 với nguồn điện dự phòng 2N, điều hòa chính xác và giám sát tự động 24/7.',
    },
    {
      icon: Headset,
      title: isLaos ? '24/7/365 On-Site Technical Maintenance' : 'Bảo trì & Thay thế linh kiện 24/7/365 tại chỗ',
      desc: isLaos 
        ? 'Viettel IDC engineers take full responsibility for hardware troubleshooting and fast spare part swap without extra maintenance costs.'
        : 'Viettel IDC chịu toàn bộ trách nhiệm bảo trì, khắc phục sự cố và thay mới linh kiện chính hãng ngay lập tức mà không phát sinh thêm chi phí.',
    },
    {
      icon: Award,
      title: isLaos ? 'Enterprise Compliance & Full SLA Commitment' : 'Cam kết SLA 99.99% & Đạt chuẩn chứng chỉ quốc tế',
      desc: isLaos 
        ? 'Compliant with ISO 27001, ISO 9001, PCI-DSS, ISO 27017, and certified uptime SLA ensuring continuous business operation.'
        : 'Tuân thủ các tiêu chuẩn bảo mật quốc tế ISO 27001, PCI-DSS, ISO 9001 cùng cam kết SLA 99.99%, đảm bảo tính liên tục cho doanh nghiệp.',
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

        {/* Grid 6 Card Lợi ích */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:border-red-200 hover:shadow-md transition-all"
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
