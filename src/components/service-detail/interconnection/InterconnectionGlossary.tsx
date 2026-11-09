import React from 'react';
import { 
  Cable, 
  Globe2, 
  Network, 
  Share2, 
  ShieldCheck, 
  Wifi, 
  ArrowRight 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface InterconnectionGlossaryProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: (notes?: string) => void;
}

export const InterconnectionGlossary: React.FC<InterconnectionGlossaryProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CONNECTIVITY GLOSSARY & TECH' : 'TỪ ĐIỂN THUẬT NGỮ & CÔNG NGHỆ KẾT NỐI',
    headline: isLaos
      ? 'Core Transmission Concepts & Networking Technologies'
      : 'Các Khái Niệm & Công Nghệ Truyền Dẫn Cốt Lõi',
    subheading: isLaos
      ? 'Explore essential networking protocols, fiber architectures, and international communication models powering enterprise interconnections.'
      : 'Tổng hợp các thuật ngữ công nghệ viễn thông và kiến trúc mạng chuẩn mực được triển khai tại Viettel IDC.',
  };

  const glossaryItems = [
    {
      term: 'Dark-Fibre',
      tag: isLaos ? 'Optical Fiber' : 'Cáp quang trắng',
      icon: Cable,
      definition: isLaos
        ? 'A method of transmitting information using light pulses over dedicated optical fibers. Light acts as the electromagnetic carrier wave, providing superior throughput, long distance transmission, and total immunity to electromagnetic interference.'
        : 'Phương pháp truyền tải thông tin bằng các xung ánh sáng qua sợi quang. Ánh sáng đóng vai trò sóng tải điện từ mang thông tin, đem lại ưu thế vượt trội về băng thông lớn, cự ly dài và triệt tiêu hoàn toàn hiện tượng nhiễu điện từ.',
      scope: 'DC-to-DC / Core Network',
    },
    {
      term: 'IP Transit',
      tag: isLaos ? 'Tier-1 Internet' : 'Cổng Internet cấp nhà mạng',
      icon: Globe2,
      definition: isLaos
        ? 'A direct commercial connectivity method allowing ISPs, content delivery networks, and enterprises to route traffic directly across domestic and global Internet backbones via carrier gateway peering.'
        : 'Phương thức kết nối trực tiếp các ISP và nhà cung cấp dịch vụ tới mạng Internet trong nước và quốc tế, truyền tải khối lượng dữ liệu lớn qua cổng Gateway quốc tế của nhà cung cấp.',
      scope: 'ISP / Global Internet',
    },
    {
      term: 'IPLC',
      tag: isLaos ? 'Intl Leased Circuit' : 'Kênh thuê riêng quốc tế',
      icon: Network,
      definition: isLaos
        ? 'International Private Leased Circuit used to securely transmit data across internal corporate networks from domestic branches to global overseas offices via point-to-point or point-to-multipoint topologies.'
        : 'Kênh truyền dẫn thuê riêng quốc tế dùng để truyền thông tin trong mạng nội bộ từ chi nhánh trong nước đến các văn phòng toàn cầu theo mô hình điểm-điểm hoặc điểm-đa điểm.',
      scope: 'Global Enterprise HQ',
    },
    {
      term: 'WAN',
      tag: isLaos ? 'Wide Area Network' : 'Mạng diện rộng',
      icon: Share2,
      definition: isLaos
        ? 'A telecommunications network extending over large geographical distances, interconnecting metropolitan area networks (MAN) across provinces, regions, and nations (GAN > WAN > MAN > LAN).'
        : 'Mạng diện rộng được thiết kế để liên kết các mạng đô thị (MAN) giữa các khu vực địa lý cách xa nhau (GAN > WAN > MAN > LAN).',
      scope: 'Nationwide Branches',
    },
    {
      term: 'VPN',
      tag: isLaos ? 'Virtual Private Network' : 'Mạng riêng ảo',
      icon: ShieldCheck,
      definition: isLaos
        ? 'An encrypted virtual tunnel established over public or private networks, protecting communications from intercept and enabling secure remote branch/client connectivity across disparate locations.'
        : 'Mạng riêng ảo cho phép thiết lập kết nối mã hóa an toàn qua Internet, bảo vệ duyệt web công cộng và vượt qua các giới hạn định tuyến vị trí địa lý.',
      scope: 'Site-to-Site / Remote Access',
    },
    {
      term: 'FTTx',
      tag: isLaos ? 'Fiber to the X' : 'Cáp quang chặng cuối',
      icon: Wifi,
      definition: isLaos
        ? 'A broadband network architecture utilizing optical fiber cables to replace metallic copper wires in the final mile of telecommunication distribution networks (FTTH, FTTB, FTTC).'
        : 'Thuật ngữ kiến trúc mạng băng rộng sử dụng cáp quang thay thế hoàn toàn hoặc một phần cáp kim loại ở chặng cuối của mạng viễn thông.',
      scope: 'Last-Mile Access',
    },
  ];

  return (
    <section 
      id="glossary" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {glossaryItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {item.scope}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] flex items-center gap-2">
                      <span>{item.term}</span>
                      <span className="text-xs font-semibold text-slate-500">({item.tag})</span>
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    {item.definition}
                  </p>
                </div>

                {onOpenConsult && (
                  <div className="pt-3 border-t border-slate-200/60">
                    <VIDCNativeButton
                      type="button"
                      onClick={() => onOpenConsult(`Tư vấn giải pháp ${item.term} (${item.tag})`)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline"
                    >
                      <span>{isLaos ? 'Consult this technology' : 'Tư vấn công nghệ này'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </VIDCNativeButton>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
