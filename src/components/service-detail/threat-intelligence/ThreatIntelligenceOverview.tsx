import React, { useState } from 'react';
import { Rss, Gauge, Search, Play, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ThreatIntelligenceOverviewProps {
  currentMarket?: SEAMarket;
}

export const ThreatIntelligenceOverview: React.FC<ThreatIntelligenceOverviewProps> = ({
  currentMarket,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CYBER THREAT INTELLIGENCE ECOSYSTEM' : 'HỆ THỐNG TÌNH BÁO MỐI ĐE DỌA TOÀN DIỆN',
    headline: isLaos
      ? 'Architectural Overview & Viettel Threat Intelligence Network'
      : 'Tổng Quan Kiến Trúc & Mạng Lưới Tình Báo Viettel Threat Intelligence',
    leftDesc1: isLaos
      ? 'Viettel Threat Intelligence is a comprehensive cyber threat intelligence network providing deep contextual telemetry on emerging adversaries. Data is harvested across diverse multi-tiered pipelines: the region’s largest telecom ISP backbone, global malware & vulnerability consortiums (VirusTotal, APWG, FIRST), underground Dark Web monitoring, and proprietary APT campaign research conducted by Viettel Cyber Security.'
      : 'Viettel Threat Intelligence là mạng lưới tình báo an ninh mạng toàn diện, cung cấp thông tin chuyên sâu về các mối đe dọa được thu thập từ nhiều nguồn đa tầng: hệ thống giám sát ISP viễn thông lớn nhất khu vực, cơ sở dữ liệu mã độc/lỗ hổng toàn cầu (VirusTotal, APWG, FIRST), mạng lưới Dark Web/diễn đàn ngầm và dữ liệu nghiên cứu chiến dịch APT độc quyền của Viettel.',
    leftDesc2: isLaos
      ? 'The platform seamlessly injects actionable feeds into enterprise SIEM, Network IDS/IPS, Next-Gen Firewalls, and EDR solutions to intercept threats instantly without human friction.'
      : 'Hệ thống cho phép tự động bổ sung dữ liệu phân tích (feeds) vào các giải pháp SIEM, Network IDS, EDR nhằm phát hiện và ngăn chặn nguy cơ tức thì.',
    card1Title: isLaos ? 'Real-Time Threat Feeds' : 'Nguồn cấp dữ liệu thời gian thực',
    card1Desc: isLaos 
      ? 'Delivers Machine Readable Threat Intelligence (IP, Domain, Hash, IoC) updated hourly via open international STIX/TAXII standards.'
      : 'Cung cấp MRTI (IP, Domain, Hash, IoC) cập nhật tự động hàng giờ theo chuẩn quốc tế STIX/TAXII.',
    card2Title: isLaos ? 'Expert Threat Scoring' : 'Thang điểm rủi ro Threat Scoring',
    card2Desc: isLaos
      ? 'Evaluates severity indexes backed by senior analysts, empowering security teams to prioritize urgent exploits.'
      : 'Đánh giá mức độ nghiêm trọng từ chuyên gia giúp doanh nghiệp ưu tiên xử lý mối nguy cốt lõi.',
    card3Title: isLaos ? 'Custom Keyword Monitoring' : 'Theo dõi từ khóa chuyên biệt (Keyword Monitoring)',
    card3Desc: isLaos
      ? 'Configures tailor-made brand keywords, alerting instantly whenever sensitive credentials, domains, or customer data leak.'
      : 'Thiết lập và cảnh báo ngay lập tức mọi thông tin lộ lọt liên quan đến thương hiệu, tài sản số.',
    badgeStix: isLaos ? 'STIX/TAXII 2.1 Ready' : 'Chuẩn kết nối STIX/TAXII 2.1',
    badgeDarkweb: isLaos ? 'Dark Web & Underground Crawling' : 'Giám sát Dark Web & Chợ Đen',
  };

  return (
    <section 
      id="overview" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-222225)]"
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
        </div>

        {/* 2-Column Architecture Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Solution Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {t.leftDesc1}
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.leftDesc2}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-bold text-slate-800 border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
                {t.badgeStix}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-bold text-slate-800 border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
                {t.badgeDarkweb}
              </span>
            </div>
          </div>

          {/* Right Column: 16:9 Architecture Video / Conceptual Frame */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 group">
              {!isPlaying ? (
                <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--vidc-legacy-hex-111113)] via-[var(--vidc-legacy-hex-1f1f24)] to-[var(--vidc-legacy-hex-121214)] opacity-95" />
                  
                  {/* Cyber Grid Lines */}
                  <div className="absolute inset-0 bg-[radial-gradient(var(--vidc-color-brand-red)_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

                  <div className="relative z-10 space-y-4">
                    <VIDCNativeButton
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      className="w-16 h-16 rounded-full bg-[var(--vidc-color-brand-red)] text-white flex items-center justify-center shadow-lg shadow-red-500/40 hover:scale-105 active:scale-95 transition-all mx-auto cursor-pointer"
                      aria-label="Xem video kiến trúc Viettel Threat Intelligence"
                    >
                      <Play className="w-6 h-6 fill-white translate-x-0.5" />
                    </VIDCNativeButton>
                    <div>
                      <h4 className="text-sm font-extrabold text-white">Viettel Threat Intelligence Architecture</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Mô hình thu thập đa tầng & nạp IoC tự động</p>
                    </div>
                  </div>

                  {/* Corner Watermarks */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[10px] font-mono text-red-400 border border-red-500/20">
                    CTI PIPELINE 2.1
                  </div>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Viettel Threat Intelligence Overview Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>

        </div>

        {/* 3 Key Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[var(--vidc-color-brand-red)] hover:shadow-md transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
              <Rss className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                {t.card1Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.card1Desc}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[var(--vidc-color-brand-red)] hover:shadow-md transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
              <Gauge className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                {t.card2Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.card2Desc}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[var(--vidc-color-brand-red)] hover:shadow-md transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                {t.card3Title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.card3Desc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
