import React from 'react';
import { TrendingUp, Landmark, ShoppingBag, Building2, CheckCircle } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CsmpUseCasesProps {
  currentMarket?: SEAMarket;
}

export const CsmpUseCases: React.FC<CsmpUseCasesProps> = () => {
  const useCases = [
    {
      id: 'sme-growth',
      title: 'Doanh Nghiệp Đang Chuyển Đổi Số Nhanh (SME & Growth)',
      icon: TrendingUp,
      recommendedPlan: 'Gói CSMP Silver (≤ 50 Máy chủ)',
      problem: 'Hệ thống số hóa mở rộng nhanh nhưng thiếu hụt đội ngũ chuyên trách bảo mật, ngân sách đầu tư có hạn.',
      solution: 'Gói CSMP Silver hỗ trợ giám sát tới 50 máy chủ, cung cấp Threat Intelligence Starter và đào tạo nhận thức nhân sự với chi phí tối ưu.',
    },
    {
      id: 'bfsi',
      title: 'Tổ Chức Tài Chính, Ngân Hàng, Chứng Khoán (BFSI)',
      icon: Landmark,
      recommendedPlan: 'Gói CSMP Diamond (≤ 300 Máy chủ)',
      problem: 'Đối mặt với các đợt tấn công có chủ đích tinh vi, yêu cầu cao về kiểm toán và tiêu chuẩn tuân thủ nghiêm ngặt.',
      solution: 'Gói CSMP Diamond với dữ liệu tình báo CSMP Elite, giám sát tới 300 máy chủ và cơ chế phản ứng sự cố 24/7.',
    },
    {
      id: 'ecommerce',
      title: 'Doanh Nghiệp Thương Mại Điện Tử & Đa Dịch Vụ',
      icon: ShoppingBag,
      recommendedPlan: 'Gói CSMP Gold (≤ 150 Máy chủ)',
      problem: 'Ứng dụng web/app vận hành liên tục, nguy cơ bị rò rỉ dữ liệu hoặc mã độc tống tiền gây gián đoạn kinh doanh.',
      solution: 'Gói CSMP Gold bảo vệ 150 máy chủ kết hợp kiểm thử xâm nhập định kỳ để chủ động bịt kín mọi lỗ hổng bảo mật.',
    },
    {
      id: 'enterprise-group',
      title: 'Tập Đoàn Cần Chuẩn Hóa Lộ Trình ATTT Dài Hạn',
      icon: Building2,
      recommendedPlan: 'Tư Vấn Chuyên Sâu & Chuẩn Hóa NIST-CSF',
      problem: 'Đã triển khai nhiều công cụ bảo mật rời rạc nhưng thiếu bức tranh tổng thể và chưa đánh giá được mức độ trưởng thành.',
      solution: 'Tư vấn đánh giá theo chuẩn NIST-CSF, xây dựng kế hoạch chuyển dịch dài hạn và đào tạo chuyên sâu đội ngũ vận hành nội bộ.',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-20 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs font-semibold text-[color:var(--vidc-color-brand-red)] uppercase tracking-wider mb-2">
            Mô hình ứng dụng thực tiễn
          </div>
          <h2 
            id="csmp-usecases-h2"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--vidc-legacy-hex-222225)] mb-4"
          >
            Lộ Trình Triển Khai Phù Hợp Từng Quy Mô Doanh Nghiệp
          </h2>
          <p className="text-sm text-gray-600">
            Mỗi tổ chức có một hiện trạng hạ tầng và yêu cầu tuân thủ riêng biệt. 
            CSMP linh hoạt thích ứng với từng bài toán kinh doanh cụ thể.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="p-6 sm:p-7 rounded-xl bg-gray-50/70 border border-gray-100 hover:border-red-200 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-100 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[color:var(--vidc-color-brand-red)] bg-red-50 border border-red-200 px-3 py-1 rounded-full text-right">
                      {item.recommendedPlan}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--vidc-legacy-hex-222225)] mb-4">
                    {item.title}
                  </h3>

                  <div className="space-y-3.5 text-xs sm:text-sm">
                    <div className="p-3 bg-white rounded-lg border border-gray-100">
                      <span className="font-semibold text-rose-600 block mb-1 text-xs">
                        ⚠️ Bài toán thực tế:
                      </span>
                      <p className="text-gray-600 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>

                    <div className="p-3 bg-red-50/40 rounded-lg border border-red-100/60">
                      <span className="font-semibold text-[color:var(--vidc-color-brand-red)] block mb-1 text-xs">
                        ✅ Giải pháp Viettel CSMP:
                      </span>
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-200/60 flex items-center gap-2 text-xs text-emerald-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cam kết nâng bậc trưởng thành sau 12 tháng</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
