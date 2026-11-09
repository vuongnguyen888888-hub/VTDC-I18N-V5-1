import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface ManagedServicesOverviewProps {
  currentMarket?: SEAMarket;
}

export const ManagedServicesOverview: React.FC<ManagedServicesOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos 
      ? 'Comprehensive 24/7/365 Managed IT Infrastructure Operations & Security'
      : 'Quản trị hạ tầng CNTT toàn diện & Bảo đảm an toàn vận hành 24/7/365',
    desc1: isLaos
      ? 'Viettel Managed Services delivers professional outsourced IT operations for enterprises, eliminating shift stress and reducing in-house operational manpower overhead by up to 50%.'
      : 'Viettel Managed Services mang lại giải pháp quản trị ủy thác hạ tầng CNTT chuyên nghiệp cho doanh nghiệp, giúp xóa bỏ gánh nặng trực ca, tinh gọn bộ máy và giảm tới 50% chi phí nhân sự vận hành.',
    desc2: isLaos
      ? 'Directly managed and monitored by Viettel IDC’s Tier 3 Network Operations Center (NOC) engineers with multi-layered monitoring, proactive vulnerability scanning, periodic patch management, and 99.99% SLA commitment.'
      : 'Hệ thống được trực tiếp quản lý và giám sát bởi đội ngũ kỹ sư NOC chuyên trách tại các Trung tâm dữ liệu Tier 3 của Viettel IDC, với cơ chế giám sát đa tầng, tự động quét lỗ hổng, vá lỗi định kỳ và cam kết SLA 99.99%.',
    highlight1Title: isLaos ? '24/7/365 Dedicated NOC Monitoring' : 'Giám sát chủ động 24/7/365 từ NOC',
    highlight1Desc: isLaos
      ? 'Continuous multi-channel health monitoring (Ping, HTTP, CPU, RAM, Disk, Traffic) with instant automated SMS, sound, and visual alert dispatch.'
      : 'Theo dõi liên tục các chỉ số trạng thái (Ping, HTTP, CPU, RAM, Disk, Traffic) với cảnh báo tự động qua SMS, âm thanh và giao diện trực quan tức thì.',
    highlight2Title: isLaos ? 'Proactive Maintenance & Security Hardening' : 'Bảo trì định kỳ & Tự động quét an ninh',
    highlight2Desc: isLaos
      ? 'Regular OS and service security patching, configuration reviews, malware checks, and periodic optimization reports.'
      : 'Định kỳ cập nhật bản vá bảo mật OS/dịch vụ, kiểm tra trạng thái sao lưu, rà soát lỗ hổng và lập báo cáo tối ưu định kỳ.',
    highlight3Title: isLaos ? 'Flexible Scope & Full IT Stack' : 'Phạm vi hỗ trợ toàn diện đa nền tảng',
    highlight3Desc: isLaos
      ? 'Supports Cloud Servers, Dedicated Physical Servers, Routers, Firewalls, Web servers (Nginx/Apache), and Database clusters.'
      : 'Hỗ trợ máy chủ ảo Cloud Server, máy chủ vật lý, thiết bị mạng Router/Firewall, Web server (Nginx/Apache) và cụm cơ sở dữ liệu.',
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

          {/* Cột Phải (Video YouTube nhúng hoặc Hình ảnh) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Managed Services Overview"
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
