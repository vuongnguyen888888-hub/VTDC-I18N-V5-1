import React from 'react';
import { 
  Rss, 
  Globe, 
  ShieldAlert, 
  ShieldCheck, 
  Gauge, 
  FileText, 
  CheckCircle2, 
  Network 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface ThreatIntelligenceFeaturesProps {
  currentMarket?: SEAMarket;
}

export const ThreatIntelligenceFeatures: React.FC<ThreatIntelligenceFeaturesProps> = ({
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE CAPABILITIES & TECHNOLOGY' : 'TÍNH NĂNG VƯỢT TRỘI & NĂNG LỰC CÔNG NGHỆ',
    headline: isLaos
      ? 'Technological Superiority & Core Cyber Threat Modules'
      : 'Năng Lực Công Nghệ & Các Tầng Tính Năng Trọng Tâm',
    subtitle: isLaos
      ? 'End-to-end telemetry ingestion, machine learning correlation, and expert contextualization powering proactive threat defense.'
      : 'Hệ thống năng lực toàn diện từ thu thập dữ liệu, phân tích trí tuệ nhân tạo đến hỗ trợ phản ứng ngăn chặn tức thì.',
  };

  const features = [
    {
      title: 'Threat Feeds & Tích Hợp Chuẩn STIX/TAXII',
      desc: 'Cung cấp tri thức đe dọa máy đọc được (MRTI) dạng IP, Domain, Hash, URL độc hại, tự động nạp vào SIEM, Firewall, EDR không cần can thiệp thủ công.',
      icon: Rss,
      badge: 'AUTOMATED INGESTION',
      tag: 'Chuẩn quốc tế STIX/TAXII v2.1',
    },
    {
      title: 'Giám Sát Bề Mặt Tấn Công Bên Ngoài (EASM)',
      desc: 'Liên tục rà quét và định danh các tài sản trôi nổi trên Internet (Unmanaged Assets), các cổng mở bất thường và lỗ hổng công khai từ góc nhìn của hacker.',
      icon: Globe,
      badge: 'EXTERNAL SURFACE',
      tag: 'Phát hiện Shadow IT & Lỗ hổng mở',
    },
    {
      title: 'Bảo Vệ Rủi Ro Kỹ Thuật Số (DRP)',
      desc: 'Giám sát Dark Web, chợ đen và diễn đàn ngầm nhằm phát hiện sớm việc rao bán dữ liệu rò rỉ (Data Leak), thông tin thẻ tín dụng và tài khoản nhân viên bị lộ lọt.',
      icon: ShieldAlert,
      badge: 'DARK WEB MONITORING',
      tag: 'Chống rò rỉ dữ liệu thẻ & tài khoản',
    },
    {
      title: 'Chống Lừa Đảo & Bảo Vệ Thương Hiệu (Brand Abuse)',
      desc: 'Phát hiện tức thì các tên miền giả mạo, ứng dụng lừa đảo nhắm vào khách hàng và thương hiệu của doanh nghiệp để kịp thời ngăn chặn và gỡ bỏ (Takedown).',
      icon: ShieldCheck,
      badge: 'BRAND DEFENSE',
      tag: 'Dập tắt Phishing & Giả mạo Portal',
    },
    {
      title: 'Hệ Thống Đánh Điểm Mối Đe Dọa (Threat Scoring)',
      desc: 'Tự động phân cấp độ nghiêm trọng dựa trên AI và nhận định chuyên gia, loại bỏ cảnh báo rác, tập trung xử lý mối nguy cấp bách nhất cho hạ tầng.',
      icon: Gauge,
      badge: 'AI SCORING ENGINE',
      tag: 'Triệt tiêu tới 85% cảnh báo giả',
    },
    {
      title: 'Global Threat Report & Keyword Tracking',
      desc: 'Cung cấp bức tranh toàn cảnh về các nhóm tin tặc APT, mã độc mới và cho phép doanh nghiệp thiết lập từ khóa riêng để nhận cảnh báo theo ngữ cảnh đặc thù.',
      icon: FileText,
      badge: 'APT INTELLIGENCE',
      tag: 'Theo dõi từ khóa & Báo cáo chuyên sâu',
    },
  ];

  return (
    <section 
      id="features" 
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
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Core Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-[var(--vidc-color-brand-red)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[var(--vidc-color-brand-red)] group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[var(--vidc-color-brand-red)] shrink-0" />
                  <span>{item.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
