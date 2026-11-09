import React from 'react';
import { CheckCircle2, Play } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface EndpointSecurityOverviewProps {
  currentMarket?: SEAMarket;
}

export const EndpointSecurityOverview: React.FC<EndpointSecurityOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SOLUTION OVERVIEW' : 'TỔNG QUAN GIẢI PHÁP',
    headline: isLaos 
      ? 'Next-Generation Endpoint Security Architecture & Operation'
      : 'Tổng Quan Kiến Trúc & Cơ Chế Hoạt Động Của Viettel Endpoint Security',
    desc1: isLaos
      ? 'Viettel Endpoint Security is an advanced, enterprise-grade next-generation endpoint security solution co-engineered by Viettel IDC and global cybersecurity leader Bitdefender. The platform provides unified multi-vector defense across all endpoints, physical servers, and cloud virtual machines.'
      : 'Viettel Endpoint Security là giải pháp bảo mật điểm cuối thế hệ mới kết hợp giữa Viettel IDC và tập đoàn an ninh mạng hàng đầu thế giới Bitdefender. Giải pháp bảo vệ toàn diện các thiết bị đầu cuối, máy tính văn phòng, máy chủ vật lý và máy chủ ảo hóa trên Cloud trước mọi cuộc tấn công có chủ đích.',
    desc2: isLaos
      ? 'Powered by machine learning heuristics and centralized Security Virtual Appliances (SVA), the solution neutralizes ransomware, zero-days, and fileless exploits while offloading 98% of resource consumption away from production host machines.'
      : 'Ứng dụng công nghệ máy học (Machine Learning) và máy chủ quét tập trung chuyên dụng SVA, giải pháp triệt tiêu hoàn toàn mã độc tống tiền (Ransomware), lỗ hổng Zero-day, tấn công không file (Fileless) đồng thời giải phóng tới 98% tài nguyên CPU/RAM cho máy tính và máy chủ doanh nghiệp.',
    highlight1Title: isLaos ? 'Unified Management Console' : 'Quản trị tập trung (GravityZone Cloud Control Center)',
    highlight1Desc: isLaos
      ? 'Single-pane-of-glass cloud dashboard to orchestrate policies, monitor security posture, and push instantaneous updates to all endpoints.'
      : 'Đặt trên nền tảng Cloud, cung cấp giao diện duy nhất để thiết lập Policy, cấu hình tập trung và đẩy bản cập nhật xuống toàn bộ Endpoint.',
    highlight2Title: isLaos ? 'Centralized Scan Engine (SVA)' : 'Máy chủ quét tập trung (Security Server - SVA)',
    highlight2Desc: isLaos
      ? 'Dedicated virtual appliance offloads heavy deduplicated scan routines from virtual machines, freeing up to 98% host CPU and memory.'
      : 'Tự động cập nhật cơ sở dữ liệu mẫu độc hại, chịu trách nhiệm xử lý các tác vụ quét nặng từ máy ảo (Central Scan), giải phóng 98% tài nguyên CPU/RAM.',
    highlight3Title: isLaos ? 'Ultra-Lightweight Agent BEST' : 'Agent BEST (Bitdefender Endpoint Security Tool)',
    highlight3Desc: isLaos
      ? 'Single unified installer operating with an ultra-light footprint (10–20 MB RAM), delivering continuous real-time proactive protection.'
      : 'Cài đặt duy nhất một lần trên từng thiết bị đầu cuối, hoạt động siêu nhẹ (10–20 MB RAM), bảo vệ thời gian thực không gây gián đoạn.',
  };

  const highlights = [
    {
      title: t.highlight1Title,
      desc: t.highlight1Desc,
    },
    {
      title: t.highlight2Title,
      desc: t.highlight2Desc,
    },
    {
      title: t.highlight3Title,
      desc: t.highlight3Desc,
    },
  ];

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
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
        </div>

        {/* 2-Column Grid: Text & Highlights + Video Frame */}
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
              {highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cột Phải (Video YouTube nhúng / Kiến trúc) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/gLgI6b47oWk?autoplay=0&rel=0"
                title="Viettel Endpoint Security Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-slate-500 text-center italic mt-3">
              {isLaos 
                ? 'Architecture overview & live operational flow of Viettel Endpoint Security powered by Bitdefender GravityZone & SVA' 
                : 'Sơ đồ kiến trúc & luồng vận hành của Viettel Endpoint Security tích hợp công nghệ Bitdefender GravityZone & SVA'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
