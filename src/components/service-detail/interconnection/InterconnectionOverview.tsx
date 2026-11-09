import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface InterconnectionOverviewProps {
  currentMarket?: SEAMarket;
}

export const InterconnectionOverview: React.FC<InterconnectionOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos 
      ? 'Overview of Viettel Interconnection High-Speed Networking'
      : 'Tổng Quan Về Dịch Vụ Kết Nối Viettel Interconnection',
    desc1: isLaos
      ? 'Viettel Interconnection provides dedicated transmission channels and high-grade Internet gateways to establish secure, ultra-high-speed networks between Data Centers, from Data Centers to enterprise branch offices, and directly to end-users.'
      : 'Viettel Interconnection là dịch vụ cung cấp các kênh truyền dẫn chuyên dụng và cổng kết nối Internet nhằm thiết lập mạng truyền thông tin an toàn, tốc độ cao giữa các Data Center, giữa Data Center với văn phòng chi nhánh của doanh nghiệp và tới người dùng cuối.',
    desc2: isLaos
      ? 'Enterprise IT infrastructure is allocated fully isolated physical or logical channels with zero bandwidth sharing at all times, perfectly fulfilling requirements for voice, data, VPNs, and high-throughput broadband applications.'
      : 'Toàn bộ hệ thống CNTT của khách hàng được phân bổ kênh truyền vật lý/logic riêng biệt, tuyệt đối không bị chia sẻ băng thông tại mọi thời điểm, đáp ứng hoàn hảo nhu cầu truyền tải thoại, dữ liệu, mạng riêng ảo VPN và các ứng dụng Internet băng thông rộng.',
    highlight1Title: isLaos ? 'Dedicated Transmission Channel' : 'Kênh truyền riêng biệt',
    highlight1Desc: isLaos
      ? 'Completely independent bandwidth, eliminating network congestion or shared throughput bottlenecks.'
      : 'Băng thông độc lập hoàn toàn, không bị nghẽn mạng hay chia sẻ dung lượng.',
    highlight2Title: isLaos ? 'Ideal Tier 3 Infrastructure' : 'Hạ tầng lý tưởng',
    highlight2Desc: isLaos
      ? 'Located at international Rated 3 - TIA-942 Data Centers with redundant power and precision cooling.'
      : 'Đặt tại hệ thống TTDL đạt chuẩn quốc tế Rated 3 - TIA-942 với hạ tầng phụ trợ tối ưu.',
    highlight3Title: isLaos ? 'Multi-Layer Security' : 'Bảo mật đa tầng',
    highlight3Desc: isLaos
      ? '24/7 CCTV surveillance, biometric access control, and dedicated on-site network operations center.'
      : 'Giám sát an ninh 24/7 bởi hệ thống camera và đội ngũ kỹ thuật viên chuyên trách.',
    highlight4Title: isLaos ? 'Elastic Bandwidth Scaling' : 'Mở rộng linh hoạt',
    highlight4Desc: isLaos
      ? 'Seamless on-demand capacity upgrades from 1 Gbps up to 10 Gbps+ as business data grows.'
      : 'Dễ dàng nâng cấp và co giãn tài nguyên băng thông theo nhu cầu thực tế.',
  };

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Eyebrow Badge & H2 Headline (Center-aligned like CloudServerOverview) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột Trái (Mô tả giải pháp & Key Highlights) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 4 Key Highlights */}
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

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight4Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight4Desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Cột Phải (Video YouTube nhúng hoặc Sơ đồ kiến trúc 16:9 chuẩn) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Interconnection Overview"
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
