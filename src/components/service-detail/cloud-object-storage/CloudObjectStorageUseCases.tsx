import React from 'react';
import { PlaySquare, Globe2, Archive, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudObjectStorageUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CloudObjectStorageUseCases: React.FC<CloudObjectStorageUseCasesProps> = ({ 
  currentMarket,
  onOpenConsult 
}) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD USE CASES' : 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Real-World Deployment Scenarios' : 'Kịch Bản Ứng Dụng Thực Tế',
    desc: isLaos
      ? 'Flexible unstructured data storage architecture meeting high-performance processing, global CDN delivery, and regulatory compliance requirements.'
      : 'Kiến trúc lưu trữ đối tượng linh hoạt đáp ứng từ các ứng dụng truyền phát tốc độ cao, mạng phân phối nội dung đến yêu cầu tuân thủ lưu trữ dữ liệu dài hạn.',
    consultCta: isLaos ? 'Consult this solution' : 'Tư vấn giải pháp này',
  };

  const useCases = [
    {
      icon: PlaySquare,
      title: isLaos ? 'Digital Media Assets & Streaming Services' : 'Kho Nội Dung Số & Dịch Vụ Truyền Phát (Media Streaming)',
      badge: isLaos ? 'GOLD Tier' : 'Phân Lớp GOLD',
      problemTitle: isLaos ? 'Challenge:' : 'Bài toán:',
      problem: isLaos
        ? 'OTT platforms, online music, video news portals need to store massive volumes of high-res videos and audio files to serve live and on-demand streaming smoothly for millions of simultaneous viewers.'
        : 'Các nền tảng OTT, âm nhạc trực tuyến, website báo chí truyền thông cần lưu trữ khối lượng khổng lồ hình ảnh, video độ phân giải cao phục vụ phát trực tiếp/theo yêu cầu mượt mà cho hàng triệu người dùng.',
      solutionTitle: isLaos ? 'Solution:' : 'Giải pháp:',
      solution: isLaos
        ? 'Utilize GOLD Tier with high-throughput domestic bandwidth and unlimited scalability to ingest, store, and stream high-bitrate media content with sub-second latency.'
        : 'Sử dụng phân lớp Gold với băng thông cao và khả năng mở rộng không giới hạn để tải và streaming nội dung tức thì.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: Globe2,
      title: isLaos ? 'Origin Storage for Content Delivery Networks (CDN)' : 'Kho Dữ Liệu Gốc Cho Mạng Phân Phối Nội Dung (Origin Storage for CDN)',
      badge: isLaos ? 'GOLD / SILVER' : 'Phân Lớp GOLD / SILVER',
      problemTitle: isLaos ? 'Challenge:' : 'Bài toán:',
      problem: isLaos
        ? 'E-commerce enterprises, large web portals require a rock-solid, low-latency static origin storage repository to feed their edge CDN distribution nodes worldwide.'
        : 'Doanh nghiệp thương mại điện tử, cổng thông tin cần một kho lưu trữ tĩnh ổn định, độ trễ thấp để làm nguồn phân phối cho mạng lưới CDN.',
      solutionTitle: isLaos ? 'Solution:' : 'Giải pháp:',
      solution: isLaos
        ? 'Direct S3 API integration feeding CDN caches with Multi-AZ redundancy ensuring origin media assets are always available and cached at peak performance.'
        : 'Tích hợp chuẩn S3 API làm việc trực tiếp với hệ thống CDN, đồng bộ đa vùng đảm bảo nội dung luôn sẵn sàng phân phối ở mọi điểm chạm.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: Archive,
      title: isLaos ? 'Long-Term Archiving, Backups & Big Data Lake' : 'Lưu Trữ Dài Hạn, Sao Lưu & Big Data (Backup, Archive & Analytics)',
      badge: isLaos ? 'SILVER / ARCHIVE' : 'Phân Lớp SILVER / ARCHIVE',
      problemTitle: isLaos ? 'Challenge:' : 'Bài toán:',
      problem: isLaos
        ? 'Healthcare institutions, banks, fintechs, large enterprises must retain electronic medical records, transaction logs, and audit trails for 5–10+ years at minimal cost.'
        : 'Các tổ chức y tế, ngân hàng, tài chính, doanh nghiệp lớn cần lưu giữ hồ sơ bệnh án, log giao dịch, dữ liệu hồ sơ kiểm toán trong nhiều năm với chi phí thấp nhất.',
      solutionTitle: isLaos ? 'Solution:' : 'Giải pháp:',
      solution: isLaos
        ? 'Deploy Silver & Archive tiers for compliant, tamper-proof long-term retention secured by STS tokens, readily queryable on demand.'
        : 'Sử dụng phân lớp Silver / Archive để lưu trữ an toàn, bảo mật bằng chứng chỉ STS và dễ dàng truy xuất khi cần kiểm toán.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Grid 3 Card Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Banner Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img alt={item.title} src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white/90 text-slate-900 backdrop-blur-md shadow-sm">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white">
                      <div className="w-8 h-8 rounded-lg bg-[var(--vidc-color-brand-red)] flex items-center justify-center shrink-0 shadow-md">
                        <IconComp className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight drop-shadow-sm">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body: Problem & Solution */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-1.5">
                      <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                        {item.problemTitle}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-red-50/70 border border-red-100 space-y-1">
                      <div className="text-xs font-extrabold text-[var(--vidc-color-brand-red)] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{item.solutionTitle}</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <VIDCNativeButton
                    type="button"
                    onClick={onOpenConsult}
                    className="w-full py-2.5 rounded-xl bg-white hover:bg-red-50 text-slate-800 hover:text-[var(--vidc-color-brand-red)] border border-slate-200 hover:border-[var(--vidc-color-brand-red)] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t.consultCta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
