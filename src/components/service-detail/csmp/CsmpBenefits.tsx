import React from 'react';
import { DollarSign, ShieldCheck, Award, Network } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CsmpBenefitsProps {
  currentMarket?: SEAMarket;
}

export const CsmpBenefits: React.FC<CsmpBenefitsProps> = () => {
  const benefits = [
    {
      id: 'cost-optimization',
      title: 'Tối Ưu Chi Phí Lên Tới 60%',
      description: 'Nhận trọn bộ giải pháp ATTT toàn diện theo dạng combo đồng hành, tối ưu hơn 60% ngân sách so với việc tự đầu tư hạ tầng và mua lẻ dịch vụ.',
      stat: 'Tiết kiệm >60%',
      statLabel: 'Ngân sách đầu tư & vận hành',
      icon: DollarSign,
    },
    {
      id: 'proactive-defense',
      title: 'Bảo Vệ Chủ Động & Toàn Trình',
      description: 'Kết hợp hoàn hảo giữa công nghệ giám sát SOC 24/7 và tình báo an ninh mạng Threat Intelligence, chuyển từ thế bị động sang chủ động phòng ngừa.',
      stat: '24/7/365',
      statLabel: 'Phòng ngừa & Phản ứng tức thì',
      icon: ShieldCheck,
    },
    {
      id: 'compliance-standardization',
      title: 'Chuẩn Hóa Quốc Tế & Tuân Thủ Pháp Lý',
      description: 'Lộ trình phát triển bài bản theo khung NIST-CSF, giúp tổ chức dễ dàng vượt qua các kỳ kiểm toán và tuân thủ các quy định nhà nước.',
      stat: 'NIST-CSF 2.0',
      statLabel: 'Tuân thủ luật An toàn thông tin mạng',
      icon: Award,
    },
    {
      id: 'cxo-network',
      title: 'Mở Rộng Mạng Lưới Kết Nối Cấp Cao',
      description: 'Tham gia cộng đồng hội viên CSMP khắp Việt Nam, liên tục cập nhật xu hướng và chia sẻ tri thức an ninh mạng qua các workshop định kỳ.',
      stat: 'Cộng Đồng Hội Viên',
      statLabel: 'Đặc quyền Workshop & Kết nối CXO',
      icon: Network,
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs font-semibold text-[color:var(--vidc-color-brand-red)] uppercase tracking-wider mb-2">
            Giá trị cam kết
          </div>
          <h2 
            id="csmp-benefits-h2"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--vidc-legacy-hex-222225)] mb-4"
          >
            Giá Trị Đột Phá Dành Cho Hội Viên Tham Gia CSMP
          </h2>
          <p className="text-sm text-gray-600">
            Không chỉ là dịch vụ kỹ thuật đơn thuần, CSMP là chiến lược đồng hành nâng tầm 
            năng lực bảo mật toàn diện cho tổ chức trong dài hạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                className="bg-white p-7 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-red-50 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-[color:var(--vidc-color-brand-red)] block">{b.stat}</span>
                      <span className="text-[11px] text-gray-500 font-medium">{b.statLabel}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--vidc-legacy-hex-222225)] mb-3">
                    {b.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
