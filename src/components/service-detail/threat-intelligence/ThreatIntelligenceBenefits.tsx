import React from 'react';
import { ShieldCheck, Network, Cpu, Award } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface ThreatIntelligenceBenefitsProps {
  currentMarket?: SEAMarket;
}

export const ThreatIntelligenceBenefits: React.FC<ThreatIntelligenceBenefitsProps> = ({
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'BUSINESS VALUE & ADVANTAGES' : 'LỢI ÍCH DOANH NGHIỆP',
    headline: isLaos
      ? 'Superior Value Delivered by Viettel Threat Intelligence'
      : 'Giá Trị Vượt Trội Viettel Threat Intelligence Mang Lại',
    subtitle: isLaos
      ? 'Transforming reactive incident defense into proactive threat preemptive posture with telco-scale intelligence.'
      : 'Chuyển hóa vị thế bảo mật từ phản ứng bị động sau sự cố sang chủ động phát hiện và ngăn chặn sớm mọi rủi ro tiềm ẩn.',
  };

  const benefits = [
    {
      title: 'Chuyển Từ Phòng Thủ Bị Động Sang Chủ Động',
      desc: 'Nhận diện dấu hiệu tấn công từ khi kẻ địch đang chuẩn bị chiến dịch, đón đầu trước khi mã độc xâm nhập vào hạ tầng nội bộ của tổ chức.',
      icon: ShieldCheck,
      stat: '90%',
      statLabel: 'Ngăn chặn trước khi xâm nhập',
    },
    {
      title: 'Tận Dụng Nguồn Dữ Liệu Độc Quyền',
      desc: 'Lợi thế mạng lưới ISP viễn thông số 1 khu vực kết hợp nguồn nghiên cứu mã độc Zero-day, 1-day và phân tích sự cố thực tế từ chuyên gia Viettel.',
      icon: Network,
      stat: 'Top 1',
      statLabel: 'Mạng lưới viễn thông & Sensor',
    },
    {
      title: 'Tối Ưu Vận Hành & Giảm Tải Đội Ngũ SOC',
      desc: 'Triệt tiêu cảnh báo giả nhờ Threat Scoring, tự động hóa cập nhật IoC vào thiết bị bảo mật sẵn có, giúp đội ngũ an ninh mạng tập trung vào rủi ro lớn.',
      icon: Cpu,
      stat: '85%',
      statLabel: 'Giảm khối lượng cảnh báo rác',
    },
    {
      title: 'Đồng Hành Cùng Chuyên Gia Đẳng Cấp Quốc Tế',
      desc: 'Được trực tiếp hỗ trợ điều tra truy vết, phân tích hành vi tấn công và đề xuất phương án ứng phó từ đội ngũ vô địch Pwn2Own 2023.',
      icon: Award,
      stat: '24/7/365',
      statLabel: 'Đội ngũ chuyên gia quốc tế',
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[var(--vidc-color-brand-red)] transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-baseline justify-between">
                  <span className="text-2xl font-extrabold text-[var(--vidc-color-brand-red)]">
                    {item.stat}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 text-right">
                    {item.statLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
