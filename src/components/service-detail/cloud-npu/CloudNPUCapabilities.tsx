import React, { useState } from 'react';
import { 
  HardDrive, 
  Cpu, 
  Server, 
  Code, 
  Layers, 
  Zap, 
  Boxes, 
  Monitor, 
  CheckCircle2, 
  Table as TableIcon,
  ShieldCheck
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudNPUCapabilitiesProps {
  currentMarket: SEAMarket;
}

export const CloudNPUCapabilities: React.FC<CloudNPUCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'hardware' | 'software' | 'framework'>('hardware');
  const isLaos = currentMarket.code === 'la';

  const t = {
    eyebrow: isLaos ? 'CORE FEATURES & TECHNOLOGY' : 'TÍNH NĂNG NỔI BẬT & CÔNG NGHỆ',
    headline: isLaos
      ? 'Outstanding Technology & Operational Capabilities'
      : 'Tính năng hạ tầng & Công nghệ NPU vượt trội',
    subtitle: isLaos
      ? 'Specialized architecture designed specifically for AI Inference acceleration with maximum power efficiency and flexible scalability.'
      : 'Kiến trúc tối ưu chuyên biệt cho bài toán suy luận AI (Inference) với hiệu quả năng lượng cao nhất và khả năng mở rộng linh hoạt.',
    specTableTitle: isLaos ? 'Detailed Technical Specifications (Spec Sheet)' : 'Bảng Thông Số Kỹ Thuật Chi Tiết (Spec Sheet)',
    specTableSubtitle: isLaos
      ? 'Comprehensive technical parameters of Qualcomm Cloud AI 100 Ultra on Viettel Cloud NPU.'
      : 'Thông số kiến trúc toàn diện của chip Qualcomm Cloud AI 100 Ultra trên nền tảng Viettel Cloud NPU.',
    tab1Label: isLaos ? 'Hardware & Qualcomm NPU' : 'Hạ tầng & NPU Qualcomm',
    tab2Label: isLaos ? 'AI Core & Software SDK' : 'Quản lý AI Core & SDK',
    tab3Label: isLaos ? 'Containers & AI Frameworks' : 'Container K8s & Frameworks',
  };

  const tabs = [
    { id: 'hardware', label: t.tab1Label, icon: Cpu },
    { id: 'software', label: t.tab2Label, icon: Code },
    { id: 'framework', label: t.tab3Label, icon: Boxes },
  ];

  const tabContents = {
    hardware: [
      {
        title: isLaos ? 'Dedicated ASIC AI Inference Chip' : 'Vi mạch ASIC chuyên dụng cho AI Inference',
        desc: isLaos 
          ? 'Equipped with Qualcomm Cloud AI 100 Ultra NPU cards designed specifically for deep neural network matrix multiplications.'
          : 'Trang bị dòng Card NPU Qualcomm Cloud AI 100 Ultra chuyên dụng cho các phép toán ma trận suy luận mạng nơ-ron sâu.',
      },
      {
        title: isLaos ? 'Scalable from 1 to 6 NPU Cards/VM' : 'Mở rộng linh hoạt từ 01 đến 06 Card NPU/VM',
        desc: isLaos 
          ? 'Attach up to 6 Qualcomm Cloud AI 100 cards per virtual server, easily scaling compute capacity according to workload.'
          : 'Hỗ trợ gắn tối đa tới 06 card NPU Qualcomm Cloud AI 100 trên mỗi máy chủ ảo, dễ dàng co giãn năng lực xử lý.',
      },
      {
        title: isLaos ? 'Optimal Performance/Watt Efficiency' : 'Hiệu suất Performance/Watt vượt trội',
        desc: isLaos 
          ? 'Low power consumption per inference calculation, delivering major TCO cost savings compared to traditional GPGPUs.'
          : 'Tiêu thụ điện năng cực thấp trên mỗi phép tính suy luận, giúp tiết kiệm chi phí TCO vượt trội so với GPU truyền thống.',
      },
    ],
    software: [
      {
        title: isLaos ? 'Granular AI Core Allocation & Smart Scheduler' : 'Phân bổ AI Core đích danh & Scheduler tự động',
        desc: isLaos 
          ? 'Assign dedicated processing cores to individual models running concurrently or let the automatic scheduler distribute load.'
          : 'Gắn đích danh nhân xử lý cho từng model hoặc dùng bộ lập lịch (Scheduler) tự động điều phối các nhân đang trống.',
      },
      {
        title: isLaos ? 'Qualcomm Cloud AI Apps & Platform SDK' : 'Bộ Qualcomm Cloud AI Apps & Platform SDK',
        desc: isLaos 
          ? 'Continuously updated toolsets facilitating compilation, optimization, and seamless model conversion from GPU to NPU.'
          : 'Bộ công cụ SDK được cập nhật liên tục, hỗ trợ biên dịch, tối ưu và chuyển đổi mã nguồn dễ dàng từ GPU sang NPU.',
      },
      {
        title: isLaos ? 'Intuitive CLI & GUI Management Tools' : 'Bộ công cụ quản trị CLI & GUI miễn phí',
        desc: isLaos 
          ? 'Full Command Line Interface and Graphical User Interface to monitor real-time operational parameters and pipeline health.'
          : 'Cung cấp đầy đủ giao diện dòng lệnh (CLI) và giao diện đồ họa (GUI) theo dõi thông số, tinh chỉnh luồng hoạt động thời gian thực.',
      },
    ],
    framework: [
      {
        title: isLaos ? 'Native Kubernetes Device Plugin' : 'Tích hợp Kubernetes Device Plugin gốc',
        desc: isLaos 
          ? 'Seamlessly maps NPU resources directly to containers and individual AI cores within Kubernetes clusters without extra licenses.'
          : 'Device plugin cho Kubernetes sẵn sàng mapping tài nguyên tới từng Container và từng AI core mà không tốn phí bản quyền.',
      },
      {
        title: isLaos ? 'Comprehensive Framework Support' : 'Hỗ trợ toàn diện các AI Framework phổ biến',
        desc: isLaos 
          ? 'Full standard compatibility with TensorFlow, PyTorch, and ONNX Runtime for modern CV, NLP, and GenAI models.'
          : 'Tương thích 100% với TensorFlow, PyTorch và ONNX Runtime cho các mô hình Thị giác máy tính, Xử lý ngôn ngữ và GenAI.',
      },
      {
        title: isLaos ? 'Diverse OS & Enterprise Environment' : 'Đa dạng Hệ điều hành & Môi trường doanh nghiệp',
        desc: isLaos 
          ? 'Runs smoothly on Ubuntu LTS, Windows Server, and connects securely with internal VPCs, Storage, and Backup systems.'
          : 'Chạy mượt mà trên các bản phân phối Ubuntu LTS, Windows Server, kết nối an toàn với hạ tầng VPC, Storage và Backup.',
      },
    ],
  };

  const technicalSpecs = [
    {
      parameter: 'Chipset gia tốc AI',
      spec: 'NPU Qualcomm Cloud AI 100 Ultra (Kiến trúc ASIC chuyên dụng)',
      note: 'Tối ưu chuyên sâu cho phép toán ma trận suy luận AI',
    },
    {
      parameter: 'Khả năng mở rộng NPU',
      spec: 'Hỗ trợ từ 01 đến 06 Cards NPU / Máy chủ ảo (VM)',
      note: 'Dễ dàng mở rộng năng lực xử lý theo nhu cầu tải',
    },
    {
      parameter: 'Hệ điều hành hỗ trợ',
      spec: 'Ubuntu (18.04, 20.04, 22.04 LTS), Windows Server',
      note: 'Tương thích 100% môi trường Linux / Windows chuẩn',
    },
    {
      parameter: 'AI Framework tương thích',
      spec: 'TensorFlow, PyTorch, ONNX Runtime',
      note: 'Hỗ trợ xuất khẩu và biên dịch qua ONNX chuẩn hóa',
    },
    {
      parameter: 'AI Model thông dụng',
      spec: 'ResNet, YOLO, BERT, GPT, CNN-Text, Diffusion Models, LLMs',
      note: 'Đáp ứng toàn diện CV, NLP, GenAI, Speech',
    },
    {
      parameter: 'Công cụ & SDK đi kèm',
      spec: 'Qualcomm Cloud AI Apps SDK, Platform SDK, K8s Device Plugin, CLI & GUI tools',
      note: 'Cung cấp đầy đủ, miễn phí giấy phép bản quyền',
    },
    {
      parameter: 'Hạ tầng Trung tâm Dữ liệu',
      spec: 'Đạt chuẩn quốc tế ANSI/TIA-942 Rated 3',
      note: 'ISO 27001, ISO 27017, PCI-DSS, dự phòng N+1/2N',
    },
    {
      parameter: 'Cam kết chất lượng (SLA)',
      spec: '≥ 99.5% độ sẵn sàng hoạt động của VM',
      note: 'Cam kết bằng hợp đồng dịch vụ Service Level Agreement',
    },
  ];

  return (
    <section 
      id="specs" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)] scroll-mt-24"
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
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t.subtitle}
          </p>
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
                className={`inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all min-h-[44px] cursor-pointer ${
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
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

        {/* Spec Sheet / Technical Specifications Table */}
        <div className="pt-6 border-t border-slate-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-slate-100 text-slate-700 mb-2">
              <TableIcon className="w-3.5 h-3.5 text-[var(--vidc-color-brand-red)]" />
              <span>SPECIFICATION SHEET</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
              {t.specTableTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
              {t.specTableSubtitle}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                    <th className="py-3.5 px-5 font-extrabold w-1/4">Thông số / Hạng mục</th>
                    <th className="py-3.5 px-5 font-extrabold w-1/2">Chi tiết kiến trúc Qualcomm Cloud AI 100 Ultra</th>
                    <th className="py-3.5 px-5 font-extrabold w-1/4">Ghi chú vận hành</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {technicalSpecs.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3.5 px-5 font-extrabold text-slate-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--vidc-color-brand-red)]" />
                        <span>{row.parameter}</span>
                      </td>
                      <td className="py-3.5 px-5 text-slate-700 font-medium">{row.spec}</td>
                      <td className="py-3.5 px-5 text-slate-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
