import React from 'react';
import { Database, Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudConnectUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: (notes?: string) => void;
}

export const CloudConnectUseCases: React.FC<CloudConnectUseCasesProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'APPLICATIONS & SCENARIOS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos
      ? 'Realistic Implementation Scenarios for Viettel Cloud Connect'
      : 'Kịch Bản Ứng Dụng Thực Tế Của Viettel Cloud Connect',
  };

  const useCases = [
    {
      id: 'big-data',
      title: isLaos ? 'Big Data Transfer & Cloud Migration' : 'Truyền Tải & Di Chuyển Dữ Liệu Lớn',
      badge: isLaos ? 'Data Migration & Backup' : 'Di chuyển & Sao lưu dữ liệu',
      icon: Database,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      problem: isLaos
        ? 'Migrating terabytes/petabytes between on-premise data centers and global clouds with slow internet connections.'
        : 'Doanh nghiệp cần di chuyển khối lượng dữ liệu khổng lồ (Migration, Backup định kỳ, DR) giữa On-premise và Cloud quốc tế.',
      solution: isLaos
        ? 'High-speed private link reduces transit hours, avoids egress overcharges, and secures data replication.'
        : 'Kênh riêng tốc độ cao với băng thông lớn giúp rút ngắn thời gian sao lưu, bảo đảm an toàn dữ liệu và tối ưu chi phí truyền tải.',
    },
    {
      id: 'real-time',
      title: isLaos ? 'Real-time Financial & AI/ML Applications' : 'Ứng Dụng Dữ Liệu Thời Gian Thực',
      badge: isLaos ? 'Transactions & AI/ML' : 'Giao dịch tài chính & AI/ML',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      problem: isLaos
        ? 'Financial transaction engines, streaming, and AI pipelines require deterministic latency and zero jitter.'
        : 'Vận hành các hệ thống giao dịch tài chính, thanh toán, streaming media hoặc AI/ML đòi hỏi độ trễ cực thấp và ổn định tuyệt đối.',
      solution: isLaos
        ? 'Dedicated optical channel with latency < 10ms eliminates jitter and keeps real-time streams reliable 24/7.'
        : 'Đường truyền chuyên dụng với độ trễ < 10ms giúp triệt tiêu hiện tượng trễ gói tin (jitter), duy trì kết nối thời gian thực ổn định 24/7.',
    },
    {
      id: 'hybrid-compliance',
      title: isLaos ? 'Hybrid Cloud Architecture & Data Compliance' : 'Kiến Trúc Hybrid Cloud & Tuân Thủ Pháp Lý',
      badge: isLaos ? 'Legal Compliance & Security' : 'Tuân thủ luật an ninh mạng',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      problem: isLaos
        ? 'Leveraging Hyperscale Cloud power while legally required to store sensitive citizen data locally in-country.'
        : 'Doanh nghiệp cần tận dụng sức mạnh xử lý của Hyperscale Cloud nhưng bắt buộc phải lưu trữ dữ liệu nhạy cảm tại Việt Nam.',
      solution: isLaos
        ? 'Seamlessly interconnect local data centers with Hyperscale Cloud, maintaining strict data sovereignty.'
        : 'Thiết lập mô hình Hybrid Cloud an toàn, kết nối liền mạch trung tâm dữ liệu trong nước với Hyperscale Cloud mà vẫn bảo đảm tuân thủ luật.',
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
        </div>

        {/* 3 Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img alt={item.title} src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-white/95 text-slate-900 shadow-sm">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                      <div className="w-7 h-7 rounded-lg bg-[var(--vidc-color-brand-red)] flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-xs font-bold text-slate-100">Use Case kịch bản</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3.5">
                    <h3 className="text-base font-bold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                      {item.title}
                    </h3>

                    {/* Problem */}
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 space-y-1">
                      <div className="text-[10px] font-extrabold uppercase text-slate-500">
                        {isLaos ? 'Challenge:' : 'Thách thức doanh nghiệp:'}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-3 rounded-xl bg-red-50/50 border border-red-100 space-y-1">
                      <div className="text-[10px] font-extrabold uppercase text-[var(--vidc-color-brand-red)]">
                        {isLaos ? 'Viettel Solution:' : 'Giải pháp từ Cloud Connect:'}
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-6 pt-0">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult && onOpenConsult(`Tư vấn ứng dụng: ${item.title}`)}
                    className="w-full py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-bold text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{isLaos ? 'Consult Solution' : 'Xem chi tiết giải pháp'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
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

