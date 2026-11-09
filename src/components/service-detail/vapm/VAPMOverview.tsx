import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface VAPMOverviewProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const VAPMOverview: React.FC<VAPMOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos 
      ? 'Comprehensive Application Performance Observability & Root-Cause Analysis'
      : 'Giải pháp giám sát hiệu năng ứng dụng toàn diện & phân tích nguyên nhân gốc rễ',
    desc1: isLaos
      ? 'Viettel Application Performance Monitoring (vAPM) provides deep real-time observability across distributed microservices, containers, and multi-cloud environments. The solution continuously collects and analyzes Telemetry data (Metrics, Logs, Events, Traces) to deliver actionable insights and automatic incident alerts.'
      : 'Viettel Application Performance Monitoring (vAPM) mang lại năng lực quan sát chuyên sâu theo thời gian thực trên toàn bộ hệ thống microservices, container và môi trường đa đám mây phân tán. Dịch vụ liên tục thu thập và xử lý dữ liệu Telemetry (Metrics, Logs, Events, Traces) để cung cấp bức tranh hiệu năng trực quan và cảnh báo sự cố tự động.',
    desc2: isLaos
      ? 'Backed by Viettel IDC certified enterprise engineers and world-class APM technology, vAPM pinpoints bottlenecks down to specific code lines and slow SQL queries, reducing MTTR by up to 80% while preserving peak application uptime.'
      : 'Kết hợp nền tảng công nghệ APM tiên tiến cùng đội ngũ kỹ sư vận hành ủy thác 24/7/365 của Viettel IDC, vAPM định vị chính xác điểm nghẽn tới từng dòng mã nguồn và câu truy vấn CSDL chậm, giảm tới 80% thời gian xử lý sự cố (MTTR) và bảo vệ trải nghiệm người dùng.',
    highlight1Title: isLaos ? 'Real-Time Telemetry & Visual Service Map' : 'Telemetry thời gian thực & Service Map trực quan',
    highlight1Desc: isLaos
      ? 'Continuous ingestion of distributed traces, metrics, and logs with automated service topology mapping across microservices.'
      : 'Thu thập liên tục dữ liệu đo từ xa, tự động vẽ bản đồ tô pô phân tán thể hiện mối quan hệ giữa các dịch vụ và cơ sở dữ liệu.',
    highlight2Title: isLaos ? 'Deep Code-Level & Database Profiling' : 'Định vị sự cố mức dòng mã & Tối ưu Database',
    highlight2Desc: isLaos
      ? 'Pinpoint slow methods, uncaught exceptions, memory leaks, and inefficient SQL queries with sub-second accuracy.'
      : 'Chỉ điểm chính xác method gây chậm trễ, ngoại lệ chưa bắt được, rò rỉ bộ nhớ và các câu lệnh SQL tắc nghẽn tức thì.',
    highlight3Title: isLaos ? 'Lightweight Agent & 24/7 Managed Support' : 'Agent siêu nhẹ & Hỗ trợ kỹ sư ủy thác 24/7',
    highlight3Desc: isLaos
      ? 'Negligible CPU overhead (<4%) and network footprint, accompanied by Viettel IDC 24/7 monitoring and advisory services.'
      : 'Tiêu thụ CPU cực thấp (<4%), lưu lượng mạng tối thiểu, đi kèm đội ngũ chuyên gia Viettel IDC trực vận hành ủy thác 24/7/365.',
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

          {/* Cột Phải (Video YouTube nhúng chuẩn 16:9) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Application Performance Monitoring Overview"
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
