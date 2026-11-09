import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Users, HardDrive } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface ManagedPrivateCloudOverviewProps {
  currentMarket: SEAMarket;
  onOpenQuote?: () => void;
}

export const ManagedPrivateCloudOverview: React.FC<ManagedPrivateCloudOverviewProps> = ({ currentMarket, onOpenQuote }) => {
  const isLaos = currentMarket.code === 'la';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos
      ? 'Dedicated On-Premises Private Cloud at Your Data Center'
      : 'Hạ tầng đám mây riêng biệt lập tại Data Center của bạn',
    desc1: isLaos
      ? 'Viettel Managed Private Cloud (vMPC) is a dedicated private cloud solution deployed directly at the customer\'s on-premises data center, built on the enterprise-grade VMware Private Cloud platform.'
      : 'Viettel Managed Private Cloud (vMPC) là giải pháp điện toán đám mây riêng được triển khai trực tiếp tại trung tâm dữ liệu (On-premises) của chính khách hàng, xây dựng trên nền tảng VMware Private Cloud tiên tiến nhất.',
    desc2: isLaos
      ? 'With vMPC, enterprises own a fully isolated cloud infrastructure, meeting the strictest internal data sovereignty while Viettel IDC assumes full 24/7 delegated management and monitoring.'
      : 'Doanh nghiệp sở hữu hạ tầng đám mây biệt lập hoàn toàn, đáp ứng tiêu chuẩn khắt khe về chủ quyền dữ liệu trong khi Viettel IDC đảm nhận toàn bộ trách nhiệm ủy thác vận hành và giám sát chuyên sâu 24/7.',
    highlight1Title: isLaos ? 'Continuous Expert Partnership' : 'Chuyên gia đồng hành xuyên suốt',
    highlight1Desc: isLaos
      ? 'High-level technical support privileges from Viettel IDC experts combined with VMware across the service lifecycle.'
      : 'Đặc quyền hỗ trợ kỹ thuật cấp cao từ đội ngũ chuyên gia Viettel IDC kết hợp VMware trong toàn bộ vòng đời dịch vụ.',
    highlight2Title: isLaos ? 'Directly Hosted on Customer DC' : 'Đặt trực tiếp tại hạ tầng khách hàng',
    highlight2Desc: isLaos
      ? 'Ensures maximum data control, fully meeting Sovereign Cloud standards and strict internal cybersecurity policies.'
      : 'Đảm bảo tối đa quyền kiểm soát dữ liệu, đáp ứng tiêu chuẩn Sovereign Cloud và các chính sách an toàn thông tin nội bộ.',
    highlight3Title: isLaos ? 'Ready for Cloud-Native Applications' : 'Sẵn sàng cho ứng dụng Cloud-native',
    highlight3Desc: isLaos
      ? 'Comprehensive support for Kubernetes, Database Services, and modern Microservices architectures.'
      : 'Hỗ trợ toàn diện cho Kubernetes, Database Services và các kiến trúc Microservices hiện đại.',
  };

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Eyebrow Badge & H2 Headline */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột Trái (Mô tả giải pháp) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 3 Key Highlights */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight1Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight1Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight2Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight2Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight3Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight3Desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Cột Phải (Video YouTube nhúng) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Managed Private Cloud Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
