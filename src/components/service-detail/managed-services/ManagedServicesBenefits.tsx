import React from 'react';
import { 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Award 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface ManagedServicesBenefitsProps {
  currentMarket?: SEAMarket;
}

export const ManagedServicesBenefits: React.FC<ManagedServicesBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos ? 'Why Choose Viettel Managed Services?' : 'Tại sao lựa chọn Viettel Managed Services?',
    subtitle: isLaos
      ? 'Empowering your organization to focus 100% on business innovation while leaving IT operational complexity to Viettel experts.'
      : 'Giải phóng toàn diện đội ngũ CNTT nội bộ để tập trung phát triển kinh doanh, ủy thác vận hành cho chuyên gia Viettel.',
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Tiết kiệm tới 50% chi phí nhân sự',
      desc: 'Cắt giảm đáng kể ngân sách tuyển dụng, đào tạo và duy trì đội ngũ IT trực ca 24/7/365 nội bộ đắt đỏ.',
    },
    {
      icon: Clock,
      title: 'Đảm bảo tính sẵn sàng 99.99%',
      desc: 'Giám sát 24/7 và phát hiện sự cố từ sớm, giảm thiểu tối đa thời gian gián đoạn (Downtime) của hệ thống.',
    },
    {
      icon: ShieldCheck,
      title: 'Tăng cường an ninh & bảo mật chuyên sâu',
      desc: 'Hạ tầng được bảo vệ đa tầng theo quy chuẩn quốc tế ISO 27001, PCI-DSS và cập nhật bản vá bảo mật liên tục.',
    },
    {
      icon: Users,
      title: 'Đội ngũ chuyên gia L2/L3 thường trực',
      desc: 'Kỹ sư giàu kinh nghiệm đạt chứng chỉ quốc tế (CCIE, CISSP, AWS, RedHat, Oracle) hỗ trợ xử lý sự cố phức tạp.',
    },
    {
      icon: TrendingUp,
      title: 'Mở rộng linh hoạt theo quy mô',
      desc: 'Dễ dàng điều chỉnh tăng/giảm phạm vi và số lượng thiết bị quản trị theo sự biến động quy mô kinh doanh.',
    },
    {
      icon: Award,
      title: 'Cam kết chất lượng SLA minh bạch',
      desc: 'Bồi thường rõ ràng nếu vi phạm cam kết thời gian phản hồi (Response Time) và thời gian khôi phục (MTTR).',
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Grid 6 Card Lợi Ích */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[var(--vidc-color-brand-red)] hover:shadow-md transition-all duration-300 space-y-3 group"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                  <IconComp className="w-5 h-5" />
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

      </div>
    </section>
  );
};
