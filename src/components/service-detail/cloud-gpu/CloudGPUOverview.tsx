import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CloudGPUOverviewProps {
  currentMarket: SEAMarket;
  onOpenQuote?: () => void;
}

export const CloudGPUOverview: React.FC<CloudGPUOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket.code === 'la';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos
      ? 'International Standard AI & HPC Accelerated GPU Cloud Infrastructure'
      : 'Hạ tầng máy chủ ảo GPU tăng tốc AI & HPC chuẩn quốc tế',
    desc1: isLaos
      ? 'Viettel Cloud GPU (vCGPU) provides high-performance virtual servers integrated with dedicated NVIDIA enterprise GPUs (Tesla T4, A30, L40S, H200), dedicated to AI Training, Inference, Deep Learning, and Intensive 3D Graphics.'
      : 'Viettel Cloud GPU (vCGPU) là giải pháp máy chủ ảo tích hợp bộ xử lý đồ họa (GPU) chuyên dụng thế hệ mới của NVIDIA (Tesla T4, A30, L40S, H200), tối ưu chuyên sâu cho các bài toán Đào tạo mô hình AI (Training), Suy luận (Inference), Deep Learning và Xử lý đồ họa kỹ xảo 3D.',
    desc2: isLaos
      ? 'Built on Intel Xeon Gold Gen 4 AMX processors and ultra-high IOPS enterprise NVMe U.2 storage, operated in ANSI/TIA-942 Rated 3 Data Centers with ISO 27001, ISO 27017, and PCI-DSS international security certifications.'
      : 'Hệ thống vận hành trên nền tảng vi xử lý Intel Xeon Gold Gen 4 AMX, lưu trữ NVMe U.2 Enterprise với tốc độ IOPS vượt trội, đặt tại Trung tâm Dữ liệu đạt chuẩn ANSI/TIA-942 Rated 3 cùng chứng chỉ an toàn thông tin ISO 27001 và ISO 27017.',
    highlight1Title: isLaos ? 'Breakthrough AI Computing Acceleration' : 'Đột phá tốc độ tính toán AI 10–30x',
    highlight1Desc: isLaos
      ? 'Powerful NVIDIA GPU lineup accelerating Deep Learning and AI model inference up to 30 times faster compared to traditional CPU-only architectures.'
      : 'Trang bị các dòng card GPU NVIDIA chuyên dụng giúp rút ngắn thời gian huấn luyện mô hình và suy luận dữ liệu gấp 10–30 lần so với kiến trúc chỉ dùng CPU.',
    highlight2Title: isLaos ? 'Pre-configured AI & ML Software Ecosystem' : 'Hệ sinh thái phần mềm AI/ML tích hợp sẵn',
    highlight2Desc: isLaos
      ? 'Pre-installed with official NVIDIA Drivers, CUDA Toolkit, cuDNN, fully compatible with PyTorch, TensorFlow, TensorRT, and Docker Container.'
      : 'Cài đặt sẵn NVIDIA Driver, CUDA Toolkit, cuDNN, tương thích tối đa với các framework hàng đầu như PyTorch, TensorFlow, TensorRT và container hóa GPU.',
    highlight3Title: isLaos ? 'Ultra-High IOPS Enterprise NVMe U.2' : 'Lưu trữ NVMe U.2 IOPS cao & Mạng 10 Gbps',
    highlight3Desc: isLaos
      ? 'Eliminates data loading bottlenecks when processing large datasets, combined with up to 10 Gbps high-speed private networking.'
      : 'Loại bỏ hoàn toàn nghẽn cổ chai khi nạp dataset dung lượng lớn, kết hợp băng thông mạng nội bộ tốc độ cao lên tới 10 Gbps.',
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
          
          {/* Cột Trái (Mô tả giải pháp & 3 Highlights) */}
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

          </div>

          {/* Cột Phải (Video 16:9 nhúng) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Cloud GPU Overview & Architecture"
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

