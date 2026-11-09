import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface DedicatedPrivateCloudOverviewProps {
  currentMarket: SEAMarket;
  onOpenQuote: () => void;
}

export const DedicatedPrivateCloudOverview: React.FC<DedicatedPrivateCloudOverviewProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  const isLaos = currentMarket.code === 'la';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos
      ? 'Isolated High-Performance Cloud Computing Infrastructure (Tier HPC)'
      : 'Hạ tầng điện toán đám mây dùng riêng hiệu năng cực cao Tier HPC',
    desc1: isLaos
      ? 'Viettel Dedicated Private Cloud (Tier High Performance Computing - HPC) provides specialized dedicated server clusters capable of extreme computation, complex engineering models, and petabyte-scale high-throughput data processing.'
      : 'Viettel Dedicated Private Cloud (Tier High Performance Computing - HPC) là dịch vụ máy chủ dùng riêng cao cấp, mang lại cụm tài nguyên hạ tầng với hiệu suất cực cao và tách biệt hoàn toàn về phần cứng vật lý (Single-Tenant).',
    desc2: isLaos
      ? 'Architected as a dedicated Virtual Data Center with isolated Software-Defined Network (SDN), ultra-fast 200 Gbps InfiniBand cluster fabric, and NVMe All-Flash storage arrays, fully meeting AI/LLM training and scientific workloads with 99.99% SLA commitment.'
      : 'Hệ thống thiết lập như một Trung tâm dữ liệu ảo riêng biệt gồm đầy đủ lớp mạng SDN, mạng kết nối liên cụm InfiniBand 200 Gbps, lớp tính toán máy chủ vật lý độc lập và hệ thống lưu trữ NVMe tốc độ cao, cam kết SLA 99.99%.',
    highlight1Title: isLaos ? '100% Isolated Physical Bare-Metal' : 'Tài nguyên vật lý cô lập 100%',
    highlight1Desc: isLaos
      ? 'Completely independent physical hardware with zero resource sharing for compute, memory, firewall, and storage.'
      : 'Máy chủ vật lý độc lập hoàn toàn, không chia sẻ firewall, load balancer, compute hay lưu trữ với bất kỳ bên nào.',
    highlight2Title: isLaos ? 'Ultra-High Computing Power & GPU' : 'Năng lực xử lý cực đại & Hỗ trợ GPU',
    highlight2Desc: isLaos
      ? 'Powered by latest AMD EPYC / Intel Xeon Platinum, up to 3–6 TB RAM per server, with seamless NVIDIA GPU acceleration.'
      : 'Trang bị CPU AMD EPYC / Intel Xeon Platinum, RAM DDR5 lên đến 3–6 TB/máy chủ, hỗ trợ tích hợp cụm GPU AI chuyên sâu.',
    highlight3Title: isLaos ? '200 Gbps InfiniBand & Multi-AZ SDN' : 'Mạng InfiniBand 200 Gbps & Multi-AZ SDN',
    highlight3Desc: isLaos
      ? 'High-throughput cluster interconnect, inter-region latency < 5ms, and inline machine learning firewall protection.'
      : 'Băng thông liên kết cụm 200 Gbps, độ trễ liên vùng < 5ms và tích hợp tường lửa bảo vệ Inline Machine Learning.',
  };

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Eyebrow Badge & H2 Headline */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột Trái (Mô tả giải pháp) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 3 Key Highlights */}
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
            </div>

            <div className="pt-2">
              <VIDCNativeButton
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline group cursor-pointer"
              >
                <span>{isLaos ? 'Consult with HPC Solution Architects' : 'Tư vấn trực tiếp với Kiến trúc sư giải pháp HPC'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </VIDCNativeButton>
            </div>

          </div>

          {/* Cột Phải: Khung video 16:9 */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Dedicated Private Cloud HPC Overview"
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
