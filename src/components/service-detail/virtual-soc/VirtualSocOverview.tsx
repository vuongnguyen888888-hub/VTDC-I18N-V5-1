import React from 'react';
import { CheckCircle2, ShieldCheck, Cpu, Database, Globe } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface VirtualSocOverviewProps {
  currentMarket?: SEAMarket;
}

export const VirtualSocOverview: React.FC<VirtualSocOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SOLUTION OVERVIEW' : 'TỔNG QUAN GIẢI PHÁP',
    headline: isLaos 
      ? 'Architecture & Operational Capabilities of Viettel Virtual SOC'
      : 'Tổng Quan Kiến Trúc & Năng Lực Vận Hành Viettel Virtual SOC',
    desc1: isLaos
      ? 'A Security Operation Center (SOC) is a centralized capability dedicated to continuously monitoring and analyzing an organization\'s security posture to detect, analyze, react, mitigate, and conduct forensic investigations into cybersecurity incidents, ensuring maximum operational safety.'
      : 'Security Operation Center (S.O.C) là hệ thống có chức năng giám sát, xử lý các vấn đề về an toàn thông tin (ATTT) để phát hiện, phân tích, phản ứng, ngăn chặn và điều tra truy vết sự cố, đảm bảo an toàn tối đa cho tổ chức.',
    desc2: isLaos
      ? 'Viettel Virtual SOC combines the state-of-the-art cloud and data center infrastructure of Viettel IDC with the top-tier cybersecurity intelligence and certified incident response experts of Viettel Cyber Security (VCS).'
      : 'Dịch vụ của Viettel kết hợp sức mạnh từ hạ tầng công nghệ hiện đại của Viettel IDC cùng đội ngũ chuyên gia an toàn thông tin hàng đầu của Công ty An ninh mạng Viettel (VCS).',
    
    highlight1Title: isLaos ? '3 Core Pillars' : '3 Trụ cột cốt lõi',
    highlight1Desc: isLaos
      ? 'Seamless synchronization across International Standardized Processes, Certified Security Specialists, and Automated Technologies.'
      : 'Kết hợp đồng bộ giữa Quy trình chuẩn quốc tế, Con người chuyên gia và Công nghệ tự động hóa.',
    highlight2Title: isLaos ? '24/7 Incident Response' : 'Phản hồi sự cố 24/7',
    highlight2Desc: isLaos
      ? 'Immediate containment, network isolation, and escalation prevention triggered the moment any breach or intrusion is identified.'
      : 'Ngay khi phát hiện xâm nhập, chuyên gia tiến hành khoanh vùng, cô lập và ngăn chặn leo thang trên toàn mạng.',
    highlight3Title: isLaos ? 'Centralized Log Analytics' : 'Quản lý log tập trung',
    highlight3Desc: isLaos
      ? 'Unified data platform collecting, normalizing, and correlating security telemetry across endpoints and network perimeters in real time.'
      : 'Nền tảng thu thập, chuẩn hóa, phân tích tương quan các sự kiện ATTT theo thời gian thực.',
    highlight4Title: isLaos ? 'Threat Intelligence' : 'Tri thức mối đe dọa (Threat Intelligence)',
    highlight4Desc: isLaos
      ? 'Continuously ingesting up-to-the-minute global and regional threat feeds to actively boost enterprise defensive posture.'
      : 'Cập nhật dữ liệu tấn công toàn cầu liên tục để nâng cao năng lực phòng thủ.',
  };

  const highlights = [
    {
      title: t.highlight1Title,
      desc: t.highlight1Desc,
      icon: ShieldCheck,
    },
    {
      title: t.highlight2Title,
      desc: t.highlight2Desc,
      icon: Cpu,
    },
    {
      title: t.highlight3Title,
      desc: t.highlight3Desc,
      icon: Database,
    },
    {
      title: t.highlight4Title,
      desc: t.highlight4Desc,
      icon: Globe,
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
          
          {/* Cột Trái (Nội dung giải pháp & 4 Key Highlights) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 4 Key Highlights */}
            <div className="space-y-3.5 pt-2">
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

          {/* Cột Phải (Khung Video 16:9) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/gLgI6b47oWk?autoplay=0&rel=0"
                title="Viettel Virtual SOC Architecture & Operational Flow"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-slate-500 text-center italic mt-3">
              {isLaos 
                ? 'Operational model & real-time monitoring architecture of Viettel Virtual SOC' 
                : 'Mô hình kiến trúc & quy trình vận hành giám sát thời gian thực của Viettel Virtual SOC'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
