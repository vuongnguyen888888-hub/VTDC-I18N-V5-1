import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface AntiDdosUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: (notes?: string) => void;
}

export const AntiDdosUseCases: React.FC<AntiDdosUseCasesProps> = ({ 
  currentMarket,
  onOpenConsult 
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'TARGET INDUSTRIES & SCENARIOS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos 
      ? 'Mission-Critical Industries Protected by Viettel Anti-DDoS' 
      : 'Các kịch bản ứng dụng tiêu biểu',
    desc: isLaos
      ? 'Tailored protection ensuring continuous, unbreakable network transit for sensitive online sectors.'
      : 'Đáp ứng hoàn hảo mọi nhu cầu bảo vệ kênh truyền từ game online, sàn TMĐT đến cổng thông tin chính phủ.',
    viewDetails: isLaos ? 'View details' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      id: 'gaming',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
      title: isLaos ? 'Online Gaming & Esports' : 'Trò chơi trực tuyến & Thể thao điện tử (Gaming)',
      desc: isLaos 
        ? 'Defends against disruptive UDP/SYN floods that spike in-game pings, trigger severe latency jitter, or disconnect competitive players. Guarantees filtering latency stays under 3 ms.'
        : 'Chống lại các cuộc tấn công UDP/SYN Flood làm tăng ping, giật lag hoặc rớt kết nối của game thủ, đảm bảo độ trễ duy trì dưới 3 ms.',
    },
    {
      id: 'media',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop',
      title: isLaos ? 'Digital Media & High-Traffic Portals' : 'Báo điện tử & Cổng thông tin tin tức (Digital Media)',
      desc: isLaos 
        ? 'Stops malicious transit bandwidth saturation during viral news updates, breaking live events, or peak readership cycles.'
        : 'Ngăn chặn nguy cơ quá tải băng thông kênh truyền vào các khung giờ tin tức nóng, các sự kiện phát sóng trực tiếp hoặc đợt truy cập đỉnh điểm.',
    },
    {
      id: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=800&auto=format&fit=crop',
      title: isLaos ? 'E-Commerce Platforms & Mega Sales' : 'Sàn thương mại điện tử & Bán lẻ (E-Commerce)',
      desc: isLaos 
        ? 'Safeguards IP ranges serving payment gateways, cart checkouts, and promotional campaigns throughout high-velocity Mega Sale shopping festivals.'
        : 'Bảo vệ dải IP máy chủ thanh toán và cổng đặt hàng luôn thông suốt trong các dịp lễ hội mua sắm Mega Sale, chống đối thủ chơi xấu.',
    },
    {
      id: 'government',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      title: isLaos ? 'Public Portals & Ministerial Systems' : 'Cổng dịch vụ công & Cơ quan bộ ngành',
      desc: isLaos 
        ? 'Defeats coordinated malicious sabotage campaigns, maintaining continuous government operational command and uninterrupted public access.'
        : 'Triệt tiêu các chiến dịch phá hoại hạ tầng mạng internet diện rộng nhằm đảm bảo kết nối chỉ đạo điều hành và cung cấp dịch vụ công 24/7.',
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
            {t.desc}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item) => (
            <div 
              key={item.id}
              className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
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

              {/* Bottom Action */}
              <div className="p-5 pt-0">
                <VIDCAnchor
                  href="#pricing"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>{t.viewDetails}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </VIDCAnchor>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
