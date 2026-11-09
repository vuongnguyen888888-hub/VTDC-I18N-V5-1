import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface InterconnectionUseCasesProps {
  currentMarket?: SEAMarket;
}

export const InterconnectionUseCases: React.FC<InterconnectionUseCasesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Typical Interconnection Scenarios' : 'Các kịch bản ứng dụng tiêu biểu',
    subtitle: isLaos 
      ? 'Fulfilling mission-critical requirements from high-speed DC-to-DC replication to enterprise branch WAN and global leased lines.'
      : 'Đáp ứng hoàn hảo mọi nhu cầu kết nối từ đồng bộ dữ liệu DC-to-DC tốc độ cao đến mạng diện rộng WAN chi nhánh và kênh quốc tế.',
    viewDetails: isLaos ? 'View details' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      title: isLaos ? 'Data Center to Data Center (DC-to-DC)' : 'Kết nối Data Center tới Data Center',
      desc: isLaos 
        ? 'Dedicated dark-fiber & optical links for low-latency active-active database replication and real-time Disaster Recovery synchronization.'
        : 'Kênh quang trắng Dark-Fibre độ trễ tiệm cận 0ms phục vụ sao lưu phân tán, đồng bộ dữ liệu thời gian thực và Trung tâm dự phòng (DR).',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Data Center to Enterprise Office (WAN)' : 'Kết nối TTDL tới Trụ sở & Chi nhánh',
      desc: isLaos 
        ? 'Secure high-speed enterprise intranet connecting Viettel IDC racks to corporate headquarters, branch networks, and production plants.'
        : 'Liên kết mạng nội bộ bảo mật cao từ tủ rack TTDL Viettel IDC về trụ sở hội sở, chuỗi phòng giao dịch và nhà máy trên toàn quốc.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Carrier-grade Internet Gateway (IP Transit)' : 'Cổng Internet Cấp Nhà Mạng (IP Transit)',
      desc: isLaos 
        ? 'High-volume international and domestic transit bandwidth with multi-homed BGP routing for ISPs, CDNs, and digital platforms.'
        : 'Cung cấp lưu lượng Internet băng thông rộng dung lượng lớn cho các nhà cung cấp dịch vụ viễn thông, mạng CDN và sàn TMĐT lớn.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'International Leased Circuit (IPLC)' : 'Kênh Thuê Riêng Quốc Tế (IPLC)',
      desc: isLaos 
        ? 'Secure point-to-point leased lines connecting domestic branches with global corporate headquarters via resilient submarine cables.'
        : 'Kết nối mạng nội bộ chi nhánh trong nước với văn phòng toàn cầu và trung tâm tài chính quốc tế qua đa tuyến cáp quang biển.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered like CloudServerUseCases) */}
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

        {/* Grid 4 Card Ứng dụng (Exact CloudServer 4-Card Grid) */}
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
                    <img alt={item.title} src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" loading="lazy" />
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
