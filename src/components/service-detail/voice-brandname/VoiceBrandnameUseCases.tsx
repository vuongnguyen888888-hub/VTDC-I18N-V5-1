import React from 'react';
import { 
  ArrowUpRight
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VoiceBrandnameUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const VoiceBrandnameUseCases: React.FC<VoiceBrandnameUseCasesProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Typical Application Scenarios' : 'Các kịch bản ứng dụng tiêu biểu',
    subtitle: isLaos 
      ? 'Perfectly meeting all customer engagement needs from telesales campaigns to critical customer service notifications.'
      : 'Đáp ứng hoàn hảo mọi nhu cầu tương tác từ chiến dịch telesales tiếp thị đến thông báo chăm sóc khách hàng trọng yếu.',
    viewDetails: isLaos ? 'Request industry solution' : 'Nhận tư vấn theo ngành',
  };

  const useCases = [
    {
      title: isLaos ? 'Banking, Finance & Insurance' : 'Tài chính, Ngân hàng & Bảo hiểm (BFSI)',
      desc: isLaos 
        ? 'Crucial for transaction confirmations, debt notifications, and wealth management calls, ensuring zero impersonation risk.'
        : 'Tối ưu cho nhắc lịch thanh toán, xác thực giao dịch và tư vấn bảo hiểm, xóa bỏ hoàn toàn nguy cơ lừa đảo mạo danh.',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
      badge: 'Bảo mật & Xác thực',
    },
    {
      title: isLaos ? 'E-Commerce & Multi-Channel Retail' : 'Thương mại điện tử & Chuỗi bán lẻ',
      desc: isLaos 
        ? 'Rapid order confirmations, flash promo announcements, and delivery coordination with immediate 90%+ pickup rates.'
        : 'Xác nhận đơn hàng tức thì, thông báo ưu đãi thành viên và điều phối vận chuyển với tỉ lệ nghe máy đạt trên 90%.',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80',
      badge: 'CSKH & Chốt đơn',
    },
    {
      title: isLaos ? 'Education, Healthcare & Academies' : 'Giáo dục, Y tế & Đào tạo',
      desc: isLaos 
        ? 'Enrollment counseling, student timetable updates, clinic appointment reminders with verified medical institution identity.'
        : 'Tư vấn tuyển sinh khóa học, thông báo lịch thi và nhắc lịch khám chữa bệnh định kỳ với tên định danh cơ sở y tế uy tín.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      badge: 'Tuyển sinh & Khám chữa',
    },
    {
      title: isLaos ? 'Real Estate & High-Value Services' : 'Bất động sản & Dịch vụ cao cấp',
      desc: isLaos 
        ? 'Telesales outbound campaigns reaching verified VIP investors without carrier spam flags or number blacklisting.'
        : 'Chiến dịch telesales tiếp cận nhà đầu tư tiềm năng và khách hàng VIP mà không lo bị hệ thống chặn số hay đánh dấu spam.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      badge: 'Telesales & BĐS',
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
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-slate-900 shadow-sm backdrop-blur-xs">
                        {item.badge}
                      </span>
                    </div>
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

                {/* Card Action Link */}
                <div className="p-5 pt-0">
                  <VIDCNativeButton
                    type="button"
                    onClick={onOpenConsult}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[var(--vidc-color-brand-red)] group-hover:underline cursor-pointer"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </VIDCNativeButton>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
