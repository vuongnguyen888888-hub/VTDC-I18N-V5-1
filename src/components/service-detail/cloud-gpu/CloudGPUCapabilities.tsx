import React, { useState } from 'react';
import { 
  HardDrive, 
  Cpu, 
  Layers, 
  Zap, 
  CheckCircle2, 
  Table, 
  ShieldCheck, 
  Terminal 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudGPUCapabilitiesProps {
  currentMarket: SEAMarket;
}

export const CloudGPUCapabilities: React.FC<CloudGPUCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'hardware' | 'compute' | 'network'>('hardware');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'TECHNOLOGY & FEATURES' : 'NĂNG LỰC CÔNG NGHỆ & TÍNH NĂNG',
    headline: isLaos 
      ? 'Outstanding GPU Technology & Enterprise Infrastructure Capabilities'
      : 'Năng lực công nghệ & Tính năng vượt trội của Viettel Cloud GPU',
  };

  const tabs = [
    { id: 'hardware', label: isLaos ? 'Hardware & GPU Lineup' : 'Hạ tầng & Phần cứng GPU', icon: Cpu },
    { id: 'compute', label: isLaos ? 'AI Compute & Software' : 'Tính toán AI & Phần mềm', icon: Zap },
    { id: 'network', label: isLaos ? 'Storage & Enterprise Security' : 'Lưu trữ & Bảo mật', icon: HardDrive },
  ];

  const tabContents = {
    hardware: [
      {
        title: isLaos ? 'NVIDIA Flagship Enterprise GPUs' : 'Dòng GPU NVIDIA chuyên dụng đa dạng',
        desc: isLaos 
          ? 'Equipped with NVIDIA Tesla T4, A30, L40S and H200 Super GPU meeting all AI & HPC workload demands.'
          : 'Trang bị đầy đủ các dòng card chuyên dụng NVIDIA Tesla T4, A30, L40S và siêu GPU NVIDIA H200.',
      },
      {
        title: isLaos ? 'Intel Xeon Gold Gen 4 AMX' : 'Vi xử lý Intel Xeon Gold Gen 4 AMX',
        desc: isLaos 
          ? 'Integrated Intel Advanced Matrix Extensions (AMX) accelerating deep learning training & inference natively.'
          : 'Tích hợp tập lệnh tăng tốc ma trận Intel AMX giúp bứt phá hiệu năng học sâu ngay từ cấp độ CPU máy chủ.',
      },
      {
        title: isLaos ? 'Flexible Fractional vGPU Mechanism' : 'Cơ chế phân mảnh ảo hóa vGPU linh hoạt',
        desc: isLaos 
          ? 'Supports slicing physical GPUs into isolated virtual vGPU instances, optimizing cost for development teams.'
          : 'Hỗ trợ chia sẻ tài nguyên card GPU vật lý thành nhiều phân vùng ảo vGPU, tối ưu chi phí cho đội ngũ lập trình.',
      },
    ],
    compute: [
      {
        title: isLaos ? '10–30x Faster Processing Speed' : 'Tăng tốc xử lý AI 10–30 lần',
        desc: isLaos 
          ? 'Breakthrough AI Training & Inference performance, reducing compute time from days down to hours.'
          : 'Đột phá hiệu suất đào tạo (Training) và suy luận (Inference), rút ngắn thời gian tính toán từ ngày xuống còn vài giờ.',
      },
      {
        title: isLaos ? 'Turnkey Ready AI Environment' : 'Môi trường AI sẵn sàng sử dụng (Turnkey)',
        desc: isLaos 
          ? 'Pre-installed with official NVIDIA Driver, CUDA Toolkit, cuDNN, 100% compatible with PyTorch & TensorFlow.'
          : 'Cài đặt sẵn hệ điều hành, NVIDIA Driver, CUDA Toolkit, cuDNN; tương thích hoàn hảo PyTorch, TensorFlow, TensorRT.',
      },
      {
        title: isLaos ? 'Multi-Node & Distributed Clustering' : 'Liên kết cụm Multi-Node & Phân tán',
        desc: isLaos 
          ? 'Effortlessly interconnect multiple Cloud GPU VMs over secure high-speed network for Distributed AI workloads.'
          : 'Khởi tạo nhiều máy chủ ảo Cloud GPU ghép nối liên thông nội bộ để phân tán tải huấn luyện mô hình quy mô lớn.',
      },
    ],
    network: [
      {
        title: isLaos ? 'Ultra-High IOPS NVMe U.2 Storage' : 'Lưu trữ Enterprise NVMe U.2 IOPS cao',
        desc: isLaos 
          ? 'Ultra-fast data access, completely eliminating bottlenecks when loading massive AI datasets and weights.'
          : 'Khối lưu trữ NVMe U.2 tốc độ cao loại bỏ hoàn toàn nghẽn cổ chai khi nạp các tập dữ liệu (dataset) khổng lồ.',
      },
      {
        title: isLaos ? 'High-Speed 10 Gbps Private Network' : 'Băng thông mạng nội bộ lên tới 10 Gbps',
        desc: isLaos 
          ? 'Supports high-speed internal local network bandwidth and Internet connection up to 10 Gbps.'
          : 'Hỗ trợ băng thông kết nối mạng riêng nội bộ VPC và kênh truyền cáp quang tốc độ cao lên tới 10 Gbps.',
      },
      {
        title: isLaos ? 'Enterprise Security & SLA 99.99%' : 'An toàn bảo mật & Cam kết SLA 99.99%',
        desc: isLaos 
          ? 'Certified under ISO 27001, ISO 27017, PCI-DSS standards, operating in ANSI/TIA-942 Rated 3 Data Centers.'
          : 'Đạt chứng chỉ quốc tế ISO 27001, ISO 27017, PCI-DSS; vận hành an toàn trên TTDL chuẩn Rated 3 với SLA 99.99%.',
      },
    ],
  };

  const specRows = [
    { label: 'Kiến trúc GPU', t4: 'Turing', a30: 'Ampere', l40s: 'Ada Lovelace', h200: 'Hopper' },
    { label: 'Giao tiếp Bus', t4: 'PCIe Gen 3', a30: 'PCIe Gen 4', l40s: 'PCIe Gen 4', h200: 'PCIe Gen 5 / SXM5' },
    { label: 'Dung lượng VRAM', t4: '16 GB GDDR6', a30: '24 GB HBM2', l40s: '48 GB GDDR6 ECC', h200: '141 GB HBM3e' },
    { label: 'Memory Bandwidth', t4: '300 GB/s', a30: '933 GB/s', l40s: '864 GB/s', h200: '4.8 TB/s' },
    { label: 'TDP (Điện năng)', t4: '70W', a30: '165W', l40s: '350W', h200: 'Upto 700W' },
    { label: 'Hiệu năng FP16 (Peak)', t4: '65 TFLOPS', a30: '165 TFLOPS (330*)', l40s: '362 TFLOPS (733*)', h200: '1.979 TFLOPS*' },
    { label: 'Hiệu năng INT8 (Peak)', t4: '130 TOPS', a30: '330 TOPS (660*)', l40s: '733 TOPS (1466*)', h200: '3.958 TOPS*' },
    { label: 'Công nghệ Interconnect', t4: 'PCIe Gen 3', a30: 'NVLink (200 GB/s)', l40s: 'PCIe Gen 4', h200: 'NVLink Gen 4 (900 GB/s)' },
    { label: 'Mục đích chính', t4: 'Inference, Transcoding', a30: 'Inference, Fine-tuning, HPC', l40s: 'GenAI, 3D Render, Inference', h200: 'LLM Pre-training, Large GenAI' },
  ];

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 mb-8">
          {tabs.map((tab) => {
            const IconComp = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <VIDCNativeButton
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all min-h-[44px] ${
                  isActive
                    ? 'border-[var(--vidc-color-brand-red)] text-[var(--vidc-color-brand-red)] bg-red-50/50'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{tab.label}</span>
              </VIDCNativeButton>
            );
          })}
        </div>

        {/* Active Tab Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tabContents[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-[var(--vidc-legacy-hex-222225)]">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Spec Comparison Table */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-lg font-extrabold text-[var(--vidc-legacy-hex-222225)] flex items-center gap-2">
                <Table className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
                <span>Bảng Thông Số Kỹ Thuật So Sánh Các Dòng GPU (Technical Spec Sheet)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Chi tiết kiến trúc, giao tiếp, bộ nhớ VRAM và hiệu năng tính toán AI/HPC.
              </p>
            </div>
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-700 self-start sm:self-auto">
              NVIDIA Enterprise Verified
            </span>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white text-[11px] sm:text-xs font-extrabold uppercase tracking-wider">
                    <th className="py-4 px-4 sm:px-5">Thông Số Kỹ Thuật</th>
                    <th className="py-4 px-4 sm:px-5 text-slate-200">NVIDIA Tesla T4</th>
                    <th className="py-4 px-4 sm:px-5 text-blue-300">NVIDIA A30</th>
                    <th className="py-4 px-4 sm:px-5 text-emerald-300">NVIDIA L40S</th>
                    <th className="py-4 px-4 sm:px-5 text-amber-300 bg-slate-950">NVIDIA H200</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm font-medium">
                  {specRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 sm:px-5 font-bold text-slate-900 bg-slate-50/60 whitespace-nowrap">
                        {row.label}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 text-slate-700 whitespace-nowrap">
                        {row.t4}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 text-slate-800 font-semibold whitespace-nowrap">
                        {row.a30}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 text-emerald-800 font-bold whitespace-nowrap">
                        {row.l40s}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 text-amber-900 font-extrabold bg-amber-50/40 whitespace-nowrap">
                        {row.h200}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 mt-3 italic">
            (Ghi chú: * Thông số tính toán khi kích hoạt cơ chế Structural Sparsity của NVIDIA Tensor Cores).
          </p>
        </div>

      </div>
    </section>
  );
};

