import React from 'react';
import { Zap, ShieldCheck, DollarSign, Headset, Award, Network } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface InterconnectionBenefitsProps {
  currentMarket?: SEAMarket;
}

export const InterconnectionBenefits: React.FC<InterconnectionBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE BENEFITS' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos 
      ? 'Why Choose Viettel Interconnection?' 
      : 'Tại sao lựa chọn Viettel Interconnection?',
  };

  const benefits = [
    {
      icon: Zap,
      title: isLaos ? 'Speed & Continuous Stability' : 'Tốc độ & Ổn định liên tục',
      desc: isLaos 
        ? 'High-speed dedicated optical leased lines guarantee uninterrupted real-time enterprise data flows with near-zero latency.'
        : 'Đường truyền Internet và kênh quang tốc độ cao, độ khả dụng vượt trội, đảm bảo dữ liệu thông suốt và độ trễ cực thấp.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? 'Maximized Information Security' : 'Tối đa hóa an toàn thông tin',
      desc: isLaos 
        ? 'Dedicated, physically isolated channels protect sensitive corporate data from eavesdropping, sniffing, and wide-area DDoS attacks.'
        : 'Kênh truyền dẫn riêng biệt giúp cách ly dữ liệu khỏi nguy cơ nghe lén, rò rỉ và tấn công mạng diện rộng.',
    },
    {
      icon: DollarSign,
      title: isLaos ? 'Flexible & Cost-Efficient' : 'Chi phí linh hoạt & Tối ưu',
      desc: isLaos 
        ? 'No bandwidth sharing bottlenecks, rapid software-defined bandwidth upgrades, and transparent committed pricing tiers.'
        : 'Không chia sẻ băng thông, dễ dàng nâng cấp dung lượng và tối ưu hóa ngân sách truyền thông hàng tháng.',
    },
    {
      icon: Headset,
      title: isLaos ? '24/7/365 Dedicated NOC Support' : 'Hỗ trợ kỹ thuật NOC 24/7/365',
      desc: isLaos 
        ? 'A dedicated team of network engineers providing on-site optical attenuation testing, proactive monitoring, and instant support.'
        : 'Đội ngũ kỹ sư mạng chuyên trách hỗ trợ đo kiểm suy hao tuyến cáp, giám sát băng thông và xử lý sự cố 24/7.',
    },
    {
      icon: Award,
      title: isLaos ? 'SLA 99.95% Quality Commitment' : 'Cam kết chất lượng SLA 99.95%',
      desc: isLaos 
        ? 'Guaranteed continuous optical line availability with transparent compensation policies and carrier-grade SLAs.'
        : 'Đảm bảo kênh truyền hoạt động liên tục 24/7 với chính sách bồi thường rõ ràng theo chuẩn viễn thông.',
    },
    {
      icon: Network,
      title: isLaos ? 'Carrier-Neutral Freedom' : 'Tự do lựa chọn đối tác mạng',
      desc: isLaos 
        ? 'Avoid vendor lock-in with Viettel IDC’s carrier-neutral policy, easily establishing diverse multi-carrier active/passive routes.'
        : 'Không phụ thuộc một nhà cung cấp duy nhất, dễ dàng triển khai phương án đường truyền dự phòng đa nhà mạng.',
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered like CloudServerBenefits) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 6 Card Lợi ích (Exact CloudServer 6-Card Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>

                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
