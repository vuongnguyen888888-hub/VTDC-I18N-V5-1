import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface AntiDdosOverviewProps {
  currentMarket?: SEAMarket;
}

export const AntiDdosOverview: React.FC<AntiDdosOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos 
      ? 'Carrier-grade volumetric DDoS mitigation on Vietnam’s premier Tier 1 backbone'
      : 'Hạ tầng phòng vệ & làm sạch bão mạng DDoS quy mô lớn trên nền tảng ISP Tier 1',
    desc1: isLaos
      ? 'Viettel Anti-DDoS Volume-Based is an enterprise cyber defense solution designed to absorb and neutralize massive distributed denial-of-service barrages targeting IP addresses and internet transit channels.'
      : 'Viettel Anti-DDoS Volume-Based là giải pháp an toàn thông tin chuyên biệt bảo vệ hạ tầng mạng và kênh truyền internet của doanh nghiệp trước các đợt tấn công từ chối dịch vụ phân tán (DDoS) băng thông lớn.',
    desc2: isLaos
      ? 'Operated directly across Viettel national Scrubbing Centers and Tier 1 ISP backbone with scrubbing capacity exceeding 100 Gbps, guaranteeing 99.99% network availability and < 3 ms latency overhead.'
      : 'Hệ thống vận hành trực tiếp trên các trung tâm làm sạch dữ liệu (Scrubbing Center) và mạng trục ISP Viettel với công suất hấp thụ trên 100 Gbps, cam kết độ sẵn sàng 99.99% và độ trễ bổ sung dưới 3 ms.',
    highlight1Title: isLaos ? 'Massive Mitigation Scaling > 100 Gbps' : 'Công suất lọc bão mạng > 100 Gbps',
    highlight1Desc: isLaos
      ? 'Completely neutralizes Layer 4 volumetric attacks (UDP/ICMP Flood, TCP SYN/ACK/RST Flood, Reflection Amplification).'
      : 'Triệt tiêu hoàn toàn các cuộc tấn công Layer 4 băng thông khủng (UDP/ICMP Flood, TCP SYN Flood, Reflection Amplification qua DNS, NTP, SSDP).',
    highlight2Title: isLaos ? 'Zero Latency Overhead (< 3 ms)' : 'Độ trễ gần như bằng không (< 3 ms)',
    highlight2Desc: isLaos
      ? 'Clean traffic diversion through scrubbing engines maintains latency strictly below 3 ms, preserving seamless gaming and transactional pings.'
      : 'Lưu lượng sạch sau khi qua bộ lọc Scrubbing duy trì độ trễ trễ dưới 3 ms, không làm gián đoạn trải nghiệm người dùng hay giật lag game trực tuyến.',
    highlight3Title: isLaos ? '100% Full-Lifecycle Automation' : 'Tự động hóa toàn trình < 3 phút',
    highlight3Desc: isLaos
      ? 'Anomaly detection, dynamic BGP diversion, and packet purification execute autonomously in under 3 minutes with zero customer hardware changes.'
      : 'Quy trình phát hiện bất thường, chuyển hướng luồng BGP và làm sạch gói tin vận hành hoàn toàn tự động chỉ trong vòng 3 phút mà không cần thay đổi phần cứng.',
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
          
          {/* Cột Trái (Mô tả giải pháp & 3 Highlights) */}
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

          {/* Cột Phải (Video nhúng 16:9) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Anti-DDoS Solution Overview"
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
