import React from 'react';
import { Check, ArrowRight, Sparkles, HelpCircle, ShieldAlert } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CsmpPricingProps {
  currentMarket?: SEAMarket;
  onOpenConsult: (notes?: string) => void;
}

export const CsmpPricing: React.FC<CsmpPricingProps> = ({ onOpenConsult }) => {
  const plans = [
    {
      id: 'silver',
      name: 'Phiên bản Silver',
      price: '1.750.000.000',
      period: 'VNĐ / Năm',
      popular: false,
      tagline: 'Phù hợp doanh nghiệp SME & Growth mở rộng nhanh',
      specs: {
        duration: '1 năm',
        monitoring: 'Tối đa 50 máy chủ',
        response247: '✔ Có',
        tiPackage: 'CSMP Starter',
        maturityAssessment: '✔ Có (Chuẩn NIST-CSF)',
        awarenessTraining: '✔ Có (Toàn bộ nhân sự)',
      },
    },
    {
      id: 'gold',
      name: 'Phiên bản Gold',
      price: '2.830.000.000',
      period: 'VNĐ / Năm',
      popular: true,
      tagline: 'Lựa chọn tiêu chuẩn cho Doanh nghiệp TMĐT & Đa dịch vụ',
      specs: {
        duration: '1 năm',
        monitoring: 'Tối đa 150 máy chủ',
        response247: '✔ Có',
        tiPackage: 'CSMP Starter',
        maturityAssessment: '✔ Có (Chuẩn NIST-CSF)',
        awarenessTraining: '✔ Có (Toàn bộ nhân sự)',
      },
    },
    {
      id: 'diamond',
      name: 'Phiên bản Diamond',
      price: '4.510.000.000',
      period: 'VNĐ / Năm',
      popular: false,
      tagline: 'Dành riêng cho Tổ chức BFSI & Tập đoàn quy mô lớn',
      specs: {
        duration: '1 năm',
        monitoring: 'Tối đa 300 máy chủ',
        response247: '✔ Có',
        tiPackage: 'CSMP Elite',
        maturityAssessment: '✔ Có (Chuẩn NIST-CSF)',
        awarenessTraining: '✔ Có (Toàn diện & Đào tạo chuyên sâu)',
      },
    },
  ];

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-semibold text-[color:var(--vidc-color-brand-red)] uppercase tracking-wider mb-2">
            Bảng giá hội viên
          </div>
          <h2 
            id="csmp-pricing-h2"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--vidc-legacy-hex-222225)] mb-4"
          >
            Bảng Giá Các Gói Hội Viên Viettel CSMP
          </h2>
          <p className="text-sm text-gray-600">
            Bảng giá chưa bao gồm thuế VAT (nếu có). Áp dụng hợp đồng chu kỳ 1 năm với cam kết SLA & quyền lợi hội viên đồng hành.
          </p>
        </div>

        {/* Desktop Comparison Table (Hidden on small screens) */}
        <div className="hidden lg:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/80">
                <th className="py-5 px-6 text-sm font-bold text-[var(--vidc-legacy-hex-222225)] w-1/4">
                  Nhóm quyền lợi / Thông số
                </th>
                {plans.map((p) => (
                  <th 
                    key={p.id}
                    className={`py-5 px-6 text-center w-1/4 ${
                      p.popular ? 'bg-red-50/50 border-x border-red-200' : ''
                    }`}
                  >
                    {p.popular && (
                      <span className="inline-block mb-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[color:var(--vidc-color-brand-red)] text-white">
                        Khuyên dùng
                      </span>
                    )}
                    <div className="text-lg font-bold text-[var(--vidc-legacy-hex-222225)]">{p.name}</div>
                    <div className="text-xs text-gray-500 font-normal mt-0.5">{p.tagline}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {/* Row 1: Giá gói */}
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 font-semibold text-gray-900">
                  Giá gói dịch vụ (VNĐ / Năm)
                </td>
                {plans.map((p) => (
                  <td 
                    key={p.id} 
                    className={`py-4 px-6 text-center ${p.popular ? 'bg-red-50/30 border-x border-red-200' : ''}`}
                  >
                    <span className="text-xl font-extrabold text-[color:var(--vidc-color-brand-red)]">{p.price}</span>
                    <span className="text-xs text-gray-500 block font-normal">VNĐ / Năm</span>
                  </td>
                ))}
              </tr>

              {/* Row 2: Thời hạn gói */}
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 text-gray-700">Thời hạn gói</td>
                {plans.map((p) => (
                  <td 
                    key={p.id} 
                    className={`py-4 px-6 text-center font-medium text-gray-800 ${p.popular ? 'bg-red-50/30 border-x border-red-200' : ''}`}
                  >
                    {p.specs.duration}
                  </td>
                ))}
              </tr>

              {/* Row 3: Giám sát ATTT ứng dụng */}
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 text-gray-700">Giám sát ATTT ứng dụng</td>
                {plans.map((p) => (
                  <td 
                    key={p.id} 
                    className={`py-4 px-6 text-center font-semibold text-gray-900 ${p.popular ? 'bg-red-50/30 border-x border-red-200' : ''}`}
                  >
                    {p.specs.monitoring}
                  </td>
                ))}
              </tr>

              {/* Row 4: Thời gian xử lý sự cố 24/7 */}
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 text-gray-700">Thời gian xử lý sự cố 24/7</td>
                {plans.map((p) => (
                  <td 
                    key={p.id} 
                    className={`py-4 px-6 text-center ${p.popular ? 'bg-red-50/30 border-x border-red-200' : ''}`}
                  >
                    <span className="inline-flex items-center justify-center gap-1.5 text-emerald-600 font-semibold text-sm">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Có (24/7/365)</span>
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row 5: Threat Intelligence */}
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 text-gray-700">Threat Intelligence</td>
                {plans.map((p) => (
                  <td 
                    key={p.id} 
                    className={`py-4 px-6 text-center ${p.popular ? 'bg-red-50/30 border-x border-red-200' : ''}`}
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                      p.id === 'diamond' 
                        ? 'bg-purple-100 text-purple-800 border border-purple-200' 
                        : 'bg-blue-50 text-blue-800 border border-blue-200'
                    }`}>
                      {p.specs.tiPackage}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row 6: Đánh giá trưởng thành ATTT */}
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 text-gray-700">Đánh giá trưởng thành ATTT</td>
                {plans.map((p) => (
                  <td 
                    key={p.id} 
                    className={`py-4 px-6 text-center ${p.popular ? 'bg-red-50/30 border-x border-red-200' : ''}`}
                  >
                    <span className="inline-flex items-center justify-center gap-1.5 text-emerald-600 font-semibold text-sm">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>Chuẩn NIST-CSF</span>
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row 7: Đào tạo nhận thức về ATTT */}
              <tr className="hover:bg-gray-50/50">
                <td className="py-4 px-6 text-gray-700">Đào tạo nhận thức về ATTT</td>
                {plans.map((p) => (
                  <td 
                    key={p.id} 
                    className={`py-4 px-6 text-center ${p.popular ? 'bg-red-50/30 border-x border-red-200' : ''}`}
                  >
                    <span className="inline-flex items-center justify-center gap-1.5 text-emerald-600 font-semibold text-sm">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>{p.id === 'diamond' ? 'Chuyên sâu & Toàn diện' : 'Toàn bộ nhân viên'}</span>
                    </span>
                  </td>
                ))}
              </tr>

              {/* Action Buttons */}
              <tr className="bg-gray-50/80">
                <td className="py-5 px-6 font-semibold text-gray-700">Nút hành động (CTA)</td>
                {plans.map((p) => (
                  <td 
                    key={p.id} 
                    className={`py-5 px-6 text-center ${p.popular ? 'bg-red-50/50 border-x border-red-200' : ''}`}
                  >
                    <VIDCNativeButton
                      id={`csmp-btn-register-${p.id}`}
                      onClick={() => onOpenConsult(`Đăng ký gói Viettel CSMP: ${p.name} (${p.price} VNĐ/Năm)`)}
                      className={`w-full max-w-[200px] mx-auto py-2.5 px-4 rounded-md font-semibold text-xs transition-all duration-200 cursor-pointer shadow-sm ${
                        p.popular
                          ? 'bg-[color:var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002b)] text-white shadow'
                          : 'bg-white hover:bg-gray-100 text-[color:var(--vidc-color-brand-red)] border border-[color:var(--vidc-color-brand-red)]'
                      }`}
                    >
                      ĐĂNG KÝ GÓI
                    </VIDCNativeButton>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Cards View */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`bg-white rounded-xl p-6 border shadow-sm flex flex-col justify-between ${
                p.popular ? 'border-[color:var(--vidc-color-brand-red)] ring-2 ring-[color:var(--vidc-color-brand-red)]/20 relative' : 'border-gray-200'
              }`}
            >
              <div>
                {p.popular && (
                  <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[color:var(--vidc-color-brand-red)] text-white">
                    Khuyên dùng
                  </span>
                )}
                <h3 className="text-xl font-bold text-[var(--vidc-legacy-hex-222225)]">{p.name}</h3>
                <p className="text-xs text-gray-500 mt-1 mb-4">{p.tagline}</p>
                <div className="mb-6 pb-4 border-b border-gray-100">
                  <span className="text-2xl font-extrabold text-[color:var(--vidc-color-brand-red)]">{p.price}</span>
                  <span className="text-xs text-gray-500 block">VNĐ / Năm (Chu kỳ 1 năm)</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-gray-700 mb-6">
                  <li className="flex items-start justify-between">
                    <span className="text-gray-500">Giám sát ATTT:</span>
                    <span className="font-semibold text-right">{p.specs.monitoring}</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span className="text-gray-500">Xử lý sự cố 24/7:</span>
                    <span className="font-semibold text-emerald-600">✔ Có (24/7/365)</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span className="text-gray-500">Threat Intelligence:</span>
                    <span className="font-bold text-[color:var(--vidc-color-brand-red)]">{p.specs.tiPackage}</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span className="text-gray-500">Đánh giá trưởng thành:</span>
                    <span className="font-semibold text-emerald-600">✔ Chuẩn NIST-CSF</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span className="text-gray-500">Đào tạo nhận thức:</span>
                    <span className="font-semibold text-emerald-600">✔ Có đầy đủ</span>
                  </li>
                </ul>
              </div>

              <VIDCNativeButton
                id={`csmp-btn-mobile-${p.id}`}
                onClick={() => onOpenConsult(`Đăng ký gói Viettel CSMP: ${p.name} (${p.price} VNĐ/Năm)`)}
                className={`w-full py-3 px-4 rounded-md font-semibold text-xs transition-all duration-200 cursor-pointer ${
                  p.popular
                    ? 'bg-[color:var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002b)] text-white shadow'
                    : 'bg-white hover:bg-gray-50 text-[color:var(--vidc-color-brand-red)] border border-[color:var(--vidc-color-brand-red)]'
                }`}
              >
                ĐĂNG KÝ GÓI
              </VIDCNativeButton>
            </div>
          ))}
        </div>

        {/* Custom Configurator CTA Banner */}
        <div 
          id="csmp-custom-config-cta"
          className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">
                💡 Doanh nghiệp có quy mô hạ tầng lớn hơn hoặc muốn may đo lộ trình riêng biệt?
              </p>
              <p className="text-xs text-gray-500">
                Viettel IDC cung cấp gói Enterprise Custom với quy mô trên 500+ máy chủ và thiết kế chương trình theo đặc thù ngành.
              </p>
            </div>
          </div>
          <VIDCNativeButton
            id="csmp-custom-consult-btn"
            onClick={() => onOpenConsult('Yêu cầu khảo sát & Nhận báo giá may đo Viettel CSMP (> 300 máy chủ)')}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gray-900 hover:bg-black text-white text-xs font-semibold transition-colors cursor-pointer shadow-sm"
          >
            <span>Yêu Cầu Khảo Sát & Nhận Báo Giá May Đo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </VIDCNativeButton>
        </div>
      </div>
    </section>
  );
};
