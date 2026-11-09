import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface HybridConnectOverviewProps {
  currentMarket?: SEAMarket;
}

export const HybridConnectOverview: React.FC<HybridConnectOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos 
      ? 'Overview of Viettel Hybrid Connect Dedicated Solution'
      : 'Tổng Quan Về Giải Pháp Kết Nối Viettel Hybrid Connect',
    desc1: isLaos
      ? 'Viettel Hybrid Connect enables enterprises to establish dedicated, highly secure private channels from on-premises networks (On-Premises Data Centers, corporate offices, or Colocation server rooms) directly into Viettel IDC’s Cloud ecosystem, or between disparate Cloud services.'
      : 'Viettel Hybrid Connect là dịch vụ cho phép doanh nghiệp thiết lập các kênh kết nối riêng biệt, bảo mật từ hệ thống mạng tại chỗ (On-Premises Data Center, văn phòng, phòng máy Colocation) đến hệ sinh thái đám mây của Viettel IDC hoặc giữa các dịch vụ Cloud với nhau.',
    desc2: isLaos
      ? 'The service guarantees peak transmission stability, scalable bandwidth, minimized network expenses, and delivers an incomparably consistent user experience compared to public Internet VPN tunnels. In addition to Viettel’s core network, Viettel IDC cooperates with leading ISPs (VNPT, FPT, CMC) for nationwide reach and future-ready multi-cloud routing to AWS, Azure, and Google Cloud.'
      : 'Dịch vụ đảm bảo độ ổn định đường truyền tối đa, mở rộng lưu lượng băng thông, giảm thiểu chi phí mạng và mang lại trải nghiệm sử dụng nhất quán hơn hẳn so với kết nối dựa trên Internet công cộng. Bên cạnh hạ tầng của Viettel, Viettel IDC phối hợp cùng các ISP hàng đầu (VNPT, FPT, CMC) mang đến mạng lưới kết nối toàn diện trong nước và sẵn sàng mở rộng tới các Public Cloud quốc tế (AWS, Azure, Google Cloud) trong tương lai.',
    highlight1Title: isLaos ? 'End-to-End Dedicated Channel' : 'Kênh kết nối riêng tư, End-to-End tin cậy',
    highlight1Desc: isLaos
      ? '100% physically or logically isolated transmission without sharing public Internet infrastructure.'
      : 'Hoàn toàn không chia sẻ hạ tầng Internet công cộng, đảm bảo an toàn tuyệt đối.',
    highlight2Title: isLaos ? 'Flexible Network Topologies' : 'Đa dạng cấu trúc kết nối',
    highlight2Desc: isLaos
      ? 'Supports Point-to-Point, Hub-and-Spoke, and multi-branch enterprise networks.'
      : 'Hỗ trợ linh hoạt Điểm nối Điểm (Point-to-Point) và Điểm - Đa điểm (Hub-and-Spoke).',
    highlight3Title: isLaos ? 'Seamless Viettel Cloud Compatibility' : 'Tương thích liền mạch hệ sinh thái Cloud',
    highlight3Desc: isLaos
      ? 'Direct native integration with vCS, vVPC, vDPC, vCG, and Cloud Storage.'
      : 'Tương thích hoàn hảo với toàn bộ hệ sinh thái dịch vụ Cloud của Viettel IDC.',
    highlight4Title: isLaos ? 'Zero Packet Loss & Anti-MAC Spoofing' : 'Chống giả mạo MAC & Triệt tiêu rớt gói',
    highlight4Desc: isLaos
      ? 'Layer 2 security guards against MAC spoofing with ultra-low latency and zero packet drop.'
      : 'Bảo vệ an toàn tầng liên kết, tối ưu độ trễ và triệt tiêu tỉ lệ rớt gói (packet loss).',
  };

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột Trái (Mô tả giải pháp & Key Highlights) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 4 Key Highlights */}
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

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight4Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight4Desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Cột Phải (Video YouTube nhúng hoặc Sơ đồ kiến trúc 16:9 chuẩn) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Hybrid Connect Architecture Overview"
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
