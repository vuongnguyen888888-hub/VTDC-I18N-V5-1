import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudConnectOverviewProps {
  currentMarket?: SEAMarket;
}

export const CloudConnectOverview: React.FC<CloudConnectOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos 
      ? 'Dedicated high-speed & secure Hybrid Cloud connectivity infrastructure'
      : 'Hạ tầng kết nối chuyên dụng Hybrid Cloud tốc độ cao & bảo mật',
    desc1: isLaos
      ? 'Viettel Cloud Connect provides dedicated private high-speed network channels from enterprise on-premises infrastructure directly to leading Hyperscale Clouds (AWS, Google Cloud, Microsoft Azure, Alibaba Cloud).'
      : 'Viettel Cloud Connect là dịch vụ kết nối chuyên dụng, cho phép doanh nghiệp thiết lập kênh truyền riêng tốc độ cao trực tiếp từ hạ tầng On-Premise hoặc Data Center tới các nền tảng đám mây lớn (AWS, Google Cloud, Azure, Alibaba Cloud).',
    desc2: isLaos
      ? 'Operated on Viettel IDC Tier 3 standard Data Centers and high-performance telecom backbone, completely bypassing public Internet risks, ensuring SLA 99.95% and ultra-low latency <10ms.'
      : 'Vận hành trên hạ tầng Data Center đạt chuẩn Tier 3 của Viettel IDC kết hợp mạng trục viễn thông dung lượng lớn, giải pháp loại bỏ hoàn toàn rủi ro nghẽn mạng Internet công cộng, đảm bảo SLA 99,95% và độ trễ dưới 10ms.',
    highlight1Title: isLaos ? 'Dedicated & Isolated Channel' : 'Kênh truyền riêng biệt & Cô lập',
    highlight1Desc: isLaos
      ? '100% isolated Layer 2 / Layer 3 channel, eliminating network congestion and public cyber threats.'
      : 'Kênh truyền Layer 2 / Layer 3 cô lập hoàn toàn, triệt tiêu rủi ro nghẽn mạng và nguy cơ tấn công mạng công cộng.',
    highlight2Title: isLaos ? 'Ultra-Low Latency & High SLA' : 'Độ trễ siêu thấp & SLA 99,95%',
    highlight2Desc: isLaos
      ? 'Guaranteed latency under 10ms with prioritized routing, perfectly supporting real-time workloads and big data.'
      : 'Cam kết độ trễ dưới 10ms với định tuyến ưu tiên, phục vụ hoàn hảo các giao dịch thời gian thực và xử lý dữ liệu lớn.',
    highlight3Title: isLaos ? 'Legal Compliance & Hybrid Cloud' : 'Tuân thủ pháp luật & Chuẩn Hybrid Cloud',
    highlight3Desc: isLaos
      ? 'Fully compliant with Vietnam Cybersecurity Law while seamlessly leveraging global hyperscale compute power.'
      : 'Đáp ứng toàn diện quy định Luật An ninh mạng Việt Nam, hỗ trợ tối ưu kiến trúc đám mây lai (Hybrid Cloud).',
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
          
          {/* Left Column (Solution Description) */}
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

          {/* Right Column: 16:9 Architecture Topology Media */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group p-6 flex flex-col justify-between text-white">
              
              {/* Architecture Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                    Multi-Cloud High-Speed Fabric
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-emerald-400 border border-emerald-500/30">
                  SLA 99.95% · &lt; 10ms
                </span>
              </div>

              {/* Topology Nodes */}
              <div className="grid grid-cols-3 gap-2 items-center my-auto">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-[10px] uppercase font-bold text-red-400 mb-1">On-Premises / IDC</div>
                  <div className="text-xs font-extrabold text-white">Doanh Nghiệp</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Viettel Data Center</div>
                </div>

                <div className="flex flex-col items-center px-1">
                  <div className="w-full h-0.5 bg-gradient-to-r from-red-500 via-amber-400 to-emerald-400 relative mb-1">
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white border border-red-500 shadow" />
                  </div>
                  <span className="px-2 py-0.5 rounded bg-red-600 text-[9px] font-black text-white uppercase tracking-wider shadow whitespace-nowrap">
                    Cloud Connect
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono mt-0.5">Dedicated L2/L3</span>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-[10px] uppercase font-bold text-blue-400 mb-1">Hyperscalers</div>
                  <div className="text-xs font-extrabold text-white">Public Cloud</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">AWS · Azure · GCP · Ali</div>
                </div>
              </div>

              {/* Bottom Specs Bar */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-white/10">
                <span className="text-slate-300">Băng thông: <strong className="text-white">50Mbps - 100Gbps+</strong></span>
                <span className="text-emerald-400">Tiết kiệm 50% chi phí Data Transfer</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

