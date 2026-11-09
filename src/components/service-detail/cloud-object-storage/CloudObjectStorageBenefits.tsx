import React from 'react';
import { HardDrive, Zap, ShieldCheck, DollarSign, CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudObjectStorageBenefitsProps {
  currentMarket?: SEAMarket;
}

export const CloudObjectStorageBenefits: React.FC<CloudObjectStorageBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'BUSINESS BENEFITS' : 'LỢI ÍCH DOANH NGHIỆP',
    headline: isLaos ? 'Superior Value Delivered to Customers' : 'Giá Trị Vượt Trội Dành Cho Khách Hàng',
    desc: isLaos
      ? 'Viettel Cloud Object Storage helps enterprises liberate data storage capacity, ensure operational continuity, and dramatically optimize total cost of ownership (TCO).'
      : 'Viettel Cloud Object Storage giúp doanh nghiệp giải phóng dung lượng lưu trữ, đảm bảo tính liên tục của dữ liệu và tối ưu hóa vượt bậc tổng chi phí sở hữu (TCO).',
  };

  const benefits = [
    {
      icon: HardDrive,
      title: isLaos ? 'Unlimited Capacity & Zero Downtime' : 'Dung Lượng Không Giới Hạn & Không Downtime',
      desc: isLaos
        ? 'Flexibly expand up to Petabytes on demand without system interruptions or application reconfiguration; unit rental price optimizes as storage scale increases.'
        : 'Mở rộng linh hoạt lên tới hàng Petabyte theo nhu cầu mà không làm gián đoạn hệ thống, không cần thay đổi cấu hình ứng dụng; quy mô lưu trữ càng lớn chi phí thuê càng tối ưu.',
      highlight: isLaos ? 'Scale to Petabytes on demand' : 'Mở rộng linh hoạt đến cấp PB',
    },
    {
      icon: Zap,
      title: isLaos ? 'Superior Speed & Absolute Stability' : 'Tốc Độ Vượt Trội & Ổn Định Tuyệt Đối',
      desc: isLaos
        ? 'Unlimited domestic network speeds, drastically cutting data loading time, maximizing end-user bandwidth, and eliminating international undersea cable cut disruptions.'
        : 'Không giới hạn tốc độ đường truyền nội địa, rút ngắn tối đa thời gian tải dữ liệu, tận dụng tối đa băng thông đầu cuối và triệt tiêu nguy cơ gián đoạn do đứt cáp quang biển.',
      highlight: isLaos ? 'Direct domestic backbone' : 'Hạ tầng kết nối mạng nội địa',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Data Integrity & Disaster Resilience' : 'Bảo Mật Toàn Vẹn & Kháng Thảm Họa',
      desc: isLaos
        ? 'Multi Availability Zone (Multi-AZ) automatic replication combined with encryption and STS authorization safeguards your digital assets from physical data center incidents.'
        : 'Công nghệ đồng bộ dữ liệu đa vùng (Multi AZ) cùng cơ chế mã hóa và phân quyền STS bảo vệ tài sản số an toàn trước mọi rủi ro sự cố tại phòng máy.',
      highlight: isLaos ? 'Multi-AZ continuous sync' : 'Đồng bộ đa vùng Multi AZ',
    },
    {
      icon: DollarSign,
      title: isLaos ? 'CapEx to OpEx Investment Optimization' : 'Tối Ưu Chi Phí Đầu Tư (CapEx sang OpEx)',
      desc: isLaos
        ? 'Eliminate 100% upfront hardware purchase expenditures, remove ongoing server maintenance costs, and enjoy zero hidden after-sales support surcharges.'
        : 'Cắt giảm 100% chi phí đầu tư mua sắm phần cứng lưu trữ ban đầu, loại bỏ chi phí vận hành, bảo dưỡng thiết bị và không phát sinh phụ phí hỗ trợ sau bán hàng.',
      highlight: isLaos ? 'Pay-as-you-scale model' : 'Chi trả theo nhu cầu thực tế',
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* 4 Trụ Cột Giá Trị Cốt Lõi Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-2xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-all shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
