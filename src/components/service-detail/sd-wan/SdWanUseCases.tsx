import React from 'react';
import { 
  ShoppingBag, 
  Cloud, 
  Landmark, 
  Truck, 
  AlertCircle, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface SdWanUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const SdWanUseCases: React.FC<SdWanUseCasesProps> = ({ currentMarket, onOpenConsult }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD ENTERPRISE SCENARIOS' : 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
    headline: isLaos
      ? 'In-Depth Viettel SD-WAN Deployment Scenarios for Modern Businesses'
      : 'Các Kịch Bản Triển Khai Tiêu Biểu Của Viettel SD-WAN',
    subtitle: isLaos
      ? 'Delivering resilient, ultra-fast, and secure connectivity across diverse industry sectors.'
      : 'Đáp ứng toàn diện các bài toán kết nối từ chuỗi bán lẻ đa điểm đến hạ tầng giao dịch tài chính nhạy cảm.',
    problemLabel: isLaos ? 'Challenge:' : 'Bài toán thách thức:',
    solutionLabel: isLaos ? 'SD-WAN Solution:' : 'Giải pháp Viettel SD-WAN:',
    exploreDetail: isLaos ? 'Explore solution architecture' : 'Xem chi tiết giải pháp',
  };

  const useCases = [
    {
      id: 'retail',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=800&auto=format&fit=crop',
      title: isLaos
        ? 'Retail Chains, F&B & Branch POS Networks'
        : 'Chuỗi Bán Lẻ, F&B & Cửa Hàng Giao Dịch',
      subtitle: isLaos ? 'Rapid Multi-Store Onboarding' : 'Khai trương điểm bán siêu tốc & POS ổn định',
      problem: isLaos
        ? 'Retailers rapidly expanding dozens of new storefronts need stable POS/ERP backhaul to HQ, but leased MPLS lines are cost-prohibitive and take weeks to install.'
        : 'Doanh nghiệp mở rộng liên tục hàng chục điểm bán mới, cần đường truyền kết nối POS/ERP về trụ sở ổn định nhưng chi phí MPLS quá cao và mất nhiều tuần kéo cáp.',
      solution: isLaos
        ? 'Deploy Viettel SD-WAN utilizing dual cost-effective FTTH/4G links with IPsec encryption, enabling full store rollout within 24 hours.'
        : 'Triển khai Viettel SD-WAN gom 2 đường FTTH/4G giá rẻ, bảo mật IPsec và kích hoạt hoạt động cho điểm bán mới chỉ trong 24 giờ.',
    },
    {
      id: 'cloud-first',
      icon: Cloud,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
      title: isLaos
        ? 'Cloud-First Enterprises & SaaS Acceleration'
        : 'Doanh Nghiệp Đa Chi Nhánh (Cloud-First & SaaS)',
      subtitle: isLaos ? 'Direct Internet Breakout' : 'Tăng tốc ứng dụng M365, CRM & Cloud ERP',
      problem: isLaos
        ? 'Branch staff accessing Microsoft 365, Salesforce, and Cloud ERP face severe latency bottlenecks due to backhauling traffic through HQ Data Center (Tromboning effect).'
        : 'Chi nhánh truy cập trực tiếp Microsoft 365, Salesforce, Cloud ERP thường xuyên bị nghẽn mạng do phải vòng lưu lượng về DC trung tâm (Tromboning effect).',
      solution: isLaos
        ? 'Enable Direct Internet Breakout locally at every branch edge with smart QoS and caching, offloading the central DC while drastically speeding up SaaS response.'
        : 'Kích hoạt định tuyến Direct Internet Breakout tại từng chi nhánh, giải phóng tải cho DC và tối ưu tốc độ truy cập ứng dụng Cloud với QoS thông minh.',
    },
    {
      id: 'banking',
      icon: Landmark,
      image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=800&auto=format&fit=crop',
      title: isLaos
        ? 'Banking, Financial Entities & Transaction Outlets'
        : 'Ngân Hàng, Tài Chính & Phòng Giao Dịch',
      subtitle: isLaos ? 'Zero-Packet-Loss Transaction Routing' : 'Giao dịch thông suốt không gián đoạn (SLA 99.99%)',
      problem: isLaos
        ? 'ATM sites and financial transaction outlets demand stringent security and cannot tolerate even a few seconds of link outage.'
        : 'Các điểm ATM, phòng giao dịch tài chính yêu cầu bảo mật cao và không được phép gián đoạn kết nối giao dịch tài chính dù chỉ vài giây.',
      solution: isLaos
        ? 'Hybrid SD-WAN combines primary MPLS with redundant FTTH, instantly steering transaction sessions the moment jitter or degradation is detected.'
        : 'Mô hình Hybrid WAN kết hợp MPLS với đường FTTH dự phòng, tự động chuyển luồng sub-second ngay khi phát hiện suy hao trên kênh chính.',
    },
    {
      id: 'mobile',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop',
      title: isLaos
        ? 'Mobile Deployments, Construction Sites & Events'
        : 'Công Trường Xây Dựng, Hội Chợ & Điểm Di Động',
      subtitle: isLaos ? 'Cellular Instant WAN (4G/5G)' : 'Thiết lập mạng WAN tức thì qua SIM 4G/5G',
      problem: isLaos
        ? 'Temporary network requirements for construction field offices, pop-up events, or remote survey sites where physical fiber is unfeasible.'
        : 'Nhu cầu thiết lập mạng nội bộ tạm thời cho văn phòng công trường hoặc sự kiện hội chợ tại các khu vực chưa thể kéo cáp quang vật lý.',
      solution: isLaos
        ? 'SD-WAN appliance equipped with multi-carrier 4G/LTE/5G SIM slots instantly sets up an encrypted mesh back to central DC with zero cable wait.'
        : 'Thiết bị SD-WAN hỗ trợ khe cắm đa SIM 4G/LTE/5G, thiết lập kết nối mã hóa an toàn về trung tâm tức thì chỉ sau 5 phút cắm điện.',
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Grid 4 Card Use Cases with 16:9 Image Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc) => {
            const IconComp = uc.icon;
            return (
              <div 
                key={uc.id}
                className="group rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Visual Header Image */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img alt={uc.title} src={uc.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-300 block">
                        {uc.subtitle}
                      </span>
                      <h3 className="text-sm font-extrabold text-white leading-snug line-clamp-1">
                        {uc.title}
                      </h3>
                    </div>
                  </div>

                  {/* Problem & Solution Tags */}
                  <div className="p-5 space-y-3">
                    <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/70 text-xs text-amber-900 leading-relaxed">
                      <div className="flex items-center gap-1.5 font-bold mb-1 text-amber-800 text-[11px]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{t.problemLabel}</span>
                      </div>
                      <p className="line-clamp-3 text-[11px]">{uc.problem}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/70 text-xs text-emerald-900 leading-relaxed">
                      <div className="flex items-center gap-1.5 font-bold mb-1 text-emerald-800 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{t.solutionLabel}</span>
                      </div>
                      <p className="line-clamp-3 text-[11px]">{uc.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-5 pt-0">
                  <VIDCNativeButton
                    type="button"
                    onClick={onOpenConsult}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-[var(--vidc-color-brand-red)] border border-slate-200/80 hover:border-red-200 text-xs font-bold transition-all flex items-center justify-between"
                  >
                    <span>{t.exploreDetail}</span>
                    <ArrowUpRight className="w-4 h-4" />
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

