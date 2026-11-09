import React from 'react';
import { 
  DollarSign, 
  Zap, 
  Code2, 
  ShieldCheck,
  Award,
  Headset
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface OpenDedicatedPrivateCloudBenefitsComplianceProps {
  currentMarket?: SEAMarket;
}

export const OpenDedicatedPrivateCloudBenefitsCompliance: React.FC<OpenDedicatedPrivateCloudBenefitsComplianceProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH DỊCH VỤ',
    headline: isLaos 
      ? 'Why Choose Viettel Open Dedicated Private Cloud?' 
      : 'Tại Sao Lựa Chọn Viettel Open Dedicated Private Cloud?',
    subtitle: isLaos
      ? 'The perfect combination of dedicated private hardware security and open-source cost efficiency.'
      : 'Sự kết hợp hoàn hảo giữa tính bảo mật của hạ tầng phần cứng dùng riêng và tính tự chủ, tiết kiệm chi phí của mã nguồn mở.',
  };

  const benefits = [
    {
      icon: DollarSign,
      title: 'Tối ưu TCO lên đến 45%',
      desc: 'Cắt giảm hoàn toàn chi phí bản quyền ảo hóa đóng đắt đỏ. Tận dụng tối đa tài nguyên với hệ sinh thái vLB, vFW, VKS, VDBS đi kèm hoàn toàn miễn phí.',
    },
    {
      icon: Zap,
      title: '100% Tài nguyên Dedicated vật lý',
      desc: '100% tài nguyên CPU, RAM và SSD phân tán dùng riêng biệt, loại bỏ hoàn toàn hiện tượng tranh chấp tài nguyên và đảm bảo hiệu năng luôn đạt mức cao nhất.',
    },
    {
      icon: Code2,
      title: 'Làm chủ công nghệ - No Vendor Lock-in',
      desc: 'Tự do xây dựng, tùy biến và mở rộng theo tiêu chuẩn mở OpenStack quốc tế. Loại bỏ rủi ro phụ thuộc vào một nhà cung cấp phần mềm độc quyền.',
    },
    {
      icon: ShieldCheck,
      title: 'An toàn bảo mật & Tuân thủ pháp lý',
      desc: 'Hạ tầng đặt tại Data Center Viettel IDC chuẩn ANSI/TIA-942 Rated 3, đáp ứng trọn vẹn tiêu chuẩn ISO 27001, PCI-DSS và luật an ninh mạng tại Việt Nam.',
    },
    {
      icon: Award,
      title: 'Cam kết chất lượng SLA 99.99%',
      desc: 'Hệ thống phần cứng máy chủ dự phòng N+1, nguồn điện và điều hòa kép 2N, cam kết dịch vụ hoạt động liên tục với chính sách bồi thường minh bạch.',
    },
    {
      icon: Headset,
      title: 'Hỗ trợ kỹ thuật OpenStack 24/7/365',
      desc: 'Đội ngũ chuyên gia kỹ sư OpenStack giàu kinh nghiệm tư vấn kiến trúc, hỗ trợ di chuyển dữ liệu (Migration) và trực tiếp xử lý sự cố 24/7/365.',
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
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Grid 6 Card Lợi ích chuẩn CloudServerBenefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 hover:border-[var(--vidc-color-brand-red)] hover:shadow-md transition-all duration-300"
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
