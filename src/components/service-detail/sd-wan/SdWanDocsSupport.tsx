import React from 'react';
import { 
  FileText, 
  BookOpen, 
  HelpCircle, 
  Headphones, 
  ArrowRight, 
  PhoneCall, 
  Clock, 
  ShieldAlert, 
  Download,
  ExternalLink
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface SdWanDocsSupportProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const SdWanDocsSupport: React.FC<SdWanDocsSupportProps> = ({ currentMarket, onOpenConsult }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'TECHNICAL DOCUMENTATION & SUPPORT' : 'TÀI LIỆU KỸ THUẬT & TRỢ GIÚP',
    headline: isLaos 
      ? 'Comprehensive Resources & 24/7 Dedicated Support' 
      : 'Tài Liệu & Trung Tâm Hỗ Trợ 24/7',
    subtitle: isLaos
      ? 'Full access to SD-WAN quickstart manuals, deployment guides, and expert network engineers.'
      : 'Đầy đủ tài liệu cấu hình thiết bị đầu cuối CPE, tài liệu API bộ điều khiển và đội ngũ chuyên gia mạng NOC hỗ trợ 24/7.',
    quickDocs: isLaos ? 'Quick Documentation' : 'Tài liệu hướng dẫn nhanh',
    supportChannels: isLaos ? '24/7 Support Channels' : 'Kênh hỗ trợ kỹ thuật 24/7/365',
    hotline: '1800 8088 (Nhánh 1)',
    hotlineSub: isLaos ? 'Free 24/7 Hotline' : 'Tổng đài hỗ trợ miễn phí 24/7',
    ticket: isLaos ? 'Submit Technical Ticket' : 'Gửi yêu cầu hỗ trợ (Ticket)',
    ticketSub: isLaos ? 'SLA Response < 15 mins' : 'Phản hồi cam kết dưới 15 phút',
    contactConsultant: isLaos ? 'Contact Network Solutions Expert' : 'Liên hệ chuyên gia tư vấn SD-WAN',
  };

  const docLinks = [
    {
      icon: BookOpen,
      title: isLaos ? 'SD-WAN Edge Quickstart Guide' : 'Hướng dẫn đấu nối & kích hoạt thiết bị SD-WAN Edge',
      desc: isLaos 
        ? 'Step-by-step physical cabling, zero-touch provisioning (ZTP) setup, and tunnel registration.'
        : 'Quy trình đấu nối dây cáp, khởi chạy Zero-Touch Provisioning (ZTP) và đăng ký Edge về Controller.',
      tag: 'PDF Guide',
    },
    {
      icon: FileText,
      title: isLaos ? 'Application QoS & Path Steering Manual' : 'Cấu hình chính sách QoS & Định tuyến thông minh',
      desc: isLaos 
        ? 'Configure dynamic link prioritization, SLA triggers for failover, and SaaS acceleration policies.'
        : 'Thiết lập ngưỡng SLA tự động chuyển mạch (Jitter, Packet loss, Latency) và ưu tiên ứng dụng kinh doanh.',
      tag: 'Technical Spec',
    },
    {
      icon: Download,
      title: isLaos ? 'Viettel SD-WAN Orchestrator REST API' : 'Tài liệu API tích hợp hệ thống điều khiển (Orchestrator API)',
      desc: isLaos 
        ? 'Automate branch configuration, pull real-time telemetry metrics, and integrate with enterprise SIEM.'
        : 'API tự động hóa provisioning chi nhánh, truy xuất log giám sát mạng thời gian thực và tích hợp SIEM/SOC.',
      tag: 'API Reference',
    },
  ];

  return (
    <section 
      id="docs-support" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column High-Impact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Documentation List (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
                  <span>{t.quickDocs}</span>
                </h3>
                <span className="text-xs font-bold text-slate-400 uppercase">Cập nhật v2025.2</span>
              </div>

              <div className="space-y-4">
                {docLinks.map((doc, idx) => {
                  const IconC = doc.icon;
                  return (
                    <VIDCAnchor
                      key={idx}
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onOpenConsult) onOpenConsult();
                      }}
                      className="group p-4 rounded-xl border border-slate-200/80 hover:border-red-300 hover:bg-red-50/30 transition-all flex items-start justify-between gap-4 cursor-pointer block"
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-red-100 transition-colors">
                          <IconC className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                              {doc.title}
                            </h4>
                            <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-slate-100 text-slate-600">
                              {doc.tag}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal">
                            {doc.desc}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[var(--vidc-color-brand-red)] shrink-0 mt-1 transition-colors" />
                    </VIDCAnchor>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Cần thêm tài liệu kỹ thuật chuyên biệt?</span>
              <VIDCNativeButton
                type="button"
                onClick={onOpenConsult}
                className="text-[var(--vidc-color-brand-red)] font-bold hover:underline flex items-center gap-1"
              >
                <span>Yêu cầu tài liệu PDF / Architecture Pack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </VIDCNativeButton>
            </div>
          </div>

          {/* Right Column: Support Channels (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[var(--vidc-legacy-hex-1e293b)] to-[var(--vidc-legacy-hex-0f172a)] p-6 sm:p-8 rounded-2xl text-white shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/30 text-red-400 border border-red-500/40 flex items-center justify-center">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white">
                      {t.supportChannels}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-emerald-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Đội ngũ Network NOC trực tuyến</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Cards */}
              <div className="space-y-3">
                <VIDCAnchor
                  href="tel:18008088"
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-between block cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">{t.hotlineSub}</div>
                      <div className="text-base font-mono font-bold text-white tracking-wide">{t.hotline}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </VIDCAnchor>

                <div 
                  onClick={onOpenConsult}
                  className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">{t.ticketSub}</div>
                      <div className="text-sm font-bold text-white">{t.ticket}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-xs text-red-200 leading-relaxed flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  Hệ thống NOC/SOC của Viettel IDC theo dõi băng thông và sự cố đường truyền liên tục 24/7/365, tự động thông báo và hỗ trợ ứng cứu tức thì.
                </span>
              </div>
            </div>

            <VIDCNativeButton
              type="button"
              onClick={onOpenConsult}
              className="w-full py-3 px-4 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-red-700 text-white font-extrabold text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.contactConsultant}</span>
              <ArrowRight className="w-4 h-4" />
            </VIDCNativeButton>
          </div>

        </div>

      </div>
    </section>
  );
};
