import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface CloudFirewallUseCasesProps {
  currentMarket?: SEAMarket;
}

export const CloudFirewallUseCases: React.FC<CloudFirewallUseCasesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Typical Application Scenarios' : 'Các kịch bản ứng dụng tiêu biểu',
    subtitle: isLaos 
      ? 'Providing robust next-generation cyber defense for critical enterprise workloads and multi-cloud topologies.'
      : 'Bảo vệ toàn diện mọi môi trường từ máy chủ ảo IaaS, đám mây riêng VPC/DPC đến hạ tầng lai Hybrid Cloud.',
    viewDetails: isLaos ? 'View details' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      title: isLaos ? 'Protect Cloud Server Infrastructure' : 'Bảo vệ hệ thống Cloud Server',
      desc: isLaos
        ? 'Safeguard Web/App portals, databases, and ERPs against zero-day exploits and brute force attacks.'
        : 'Thiết lập lá chắn phía trước các máy chủ Cloud Server, kiểm soát sâu tầng L7 và chống khai thác lỗ hổng.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Micro-segmentation for VPC & DPC' : 'Phân vùng bảo mật VPC / DPC',
      desc: isLaos
        ? 'Isolate DMZ, Application, and Database tiers to prevent East-West lateral movement of threats.'
        : 'Tách biệt các phân vùng DMZ, Application, Database nội bộ với 40 Security Zones, ngăn chặn lây nhiễm chéo.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Secure Site-to-Site & Remote VPN' : 'Kết nối VPN Trụ sở & Từ xa',
      desc: isLaos
        ? 'High-throughput IPSec VPN tunnels connecting branch offices and encrypted SSL VPN for remote workforces.'
        : 'Cung cấp tới 2.000 đường hầm IPSec VPN Site-to-Site và SSL VPN mã hóa mạnh mẽ cho nhân viên làm việc từ xa.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'High-Availability (HA) Clustering' : 'Kiến trúc Dự phòng Sẵn sàng cao (HA)',
      desc: isLaos
        ? 'Active-Passive clustering with instant stateful failover dedicated to financial, banking, and e-commerce cores.'
        : 'Mô hình Active-Passive HA tự động chuyển mạch dự phòng tức thì, bảo đảm không gián đoạn dịch vụ tài chính, ngân hàng.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Grid 4 Card Ứng dụng */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, idx) => {
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Banner Image */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img alt={item.title} src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" loading="lazy" onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-2.5">
                    <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <VIDCAnchor
                    href="#pricing"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </VIDCAnchor>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

