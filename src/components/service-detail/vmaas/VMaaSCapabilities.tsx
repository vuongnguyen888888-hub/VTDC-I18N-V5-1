import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  Check, 
  HardDrive, 
  Server, 
  Code2, 
  Zap,
  Table as TableIcon
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VMaaSCapabilitiesProps {
  currentMarket: SEAMarket;
}

export const VMaaSCapabilities: React.FC<VMaaSCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'infrastructure' | 'models' | 'integration'>('infrastructure');
  const [codeLang, setCodeLang] = useState<'python' | 'curl' | 'nodejs'>('python');
  const [copiedCode, setCopiedCode] = useState(false);
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos 
      ? 'Outstanding Platform Features & AI Capabilities'
      : 'Tính năng nền tảng & Công nghệ AI vượt trội',
    subheading: isLaos
      ? 'High-performance AI inference infrastructure with localized data sovereignty and 100% OpenAI API compatibility'
      : 'Hạ tầng tính toán AI hiệu năng cao, chủ quyền dữ liệu 100% nội địa và tương thích hoàn toàn chuẩn OpenAI SDK',
    quickstartTitle: isLaos ? 'Developer Quickstart (OpenAI Compatible)' : 'Tích hợp nhanh chóng với OpenAI SDK',
    modelTableTitle: isLaos ? 'Foundation AI Models Catalog' : 'Danh mục mô hình AI nền tảng sẵn có',
    modelTableDesc: isLaos
      ? 'Pre-deployed State-of-the-Art foundation models optimized for ultra-low latency inference'
      : 'Hệ thống mô hình SOTA được triển khai sẵn, tối ưu hóa tốc độ phản hồi và độ trễ cực thấp',
  };

  const tabs = [
    { id: 'infrastructure', label: isLaos ? 'Infrastructure & Acceleration' : 'Hạ tầng & Gia tốc NPU/GPU', icon: HardDrive },
    { id: 'models', label: isLaos ? 'AI Models & MLOps' : 'Mô hình AI & MLOps', icon: Cpu },
    { id: 'integration', label: isLaos ? 'Security & API Integration' : 'Bảo mật & Tương thích API', icon: ShieldCheck },
  ];

  const tabContents = {
    infrastructure: [
      {
        title: isLaos ? 'ANSI/TIA-942 Rated 3 Data Centers' : 'Hạ tầng TTDL Rated 3 Nội địa',
        desc: isLaos 
          ? 'Securely operated in Viettel IDC Rated 3 standard Data Centers across Hanoi and Ho Chi Minh City.'
          : 'Vận hành an toàn tại TTDL tiêu chuẩn quốc tế ANSI/TIA-942 Rated 3 của Viettel IDC tại Hòa Lạc, Hoàng Hoa Thám và Bình Dương.',
      },
      {
        title: isLaos ? 'Qualcomm AI Inference Suite' : 'Gia tốc chuyên biệt Qualcomm AI Suite',
        desc: isLaos 
          ? 'Dedicated AI inference accelerator hardware maximizing token throughput and ultra-low TTFT response.'
          : 'Trang bị phần cứng gia tốc AI chuyên dụng và Qualcomm AI Inference Suite mang lại thông lượng cao và thời gian phản hồi token đầu tiên < 50ms.',
      },
      {
        title: isLaos ? 'Multi-Cluster Load Balancing' : 'Cân bằng tải & Tự động định tuyến đa cụm',
        desc: isLaos 
          ? 'Automatic routing across inference clusters ensuring 99.9% high availability and zero downtime during peak traffic.'
          : 'Hệ thống Gateway thông minh tự động phân phối tải giữa các cụm inference, đảm bảo độ sẵn sàng dịch vụ ≥ 99.9% kể cả khi tải đột biến.',
      },
    ],
    models: [
      {
        title: isLaos ? 'State-of-the-Art Multi-Task Models' : 'Đa dạng dòng mô hình SOTA',
        desc: isLaos 
          ? 'Full catalog of LLMs (Qwen3, Llama 3.1, SEA-LION), Vision-Language (Qwen-VL), and Text-to-Image (SDXL Turbo).'
          : 'Cung cấp đầy đủ các dòng mô hình hàng đầu: Xử lý ngôn ngữ tự nhiên (Qwen3, Llama 3.1), Thị giác máy tính (Qwen-VL) và Tạo ảnh (SDXL Turbo).',
      },
      {
        title: isLaos ? 'Deep Vietnamese Optimization' : 'Tối ưu chuyên sâu tiếng Việt & Đông Nam Á',
        desc: isLaos 
          ? 'Fine-tuned models with deep cultural and lingual understanding of Vietnamese banking, retail, and public sectors.'
          : 'Các mô hình được tinh chỉnh hiểu sâu sắc ngữ cảnh văn hóa và ngôn ngữ tiếng Việt, tối ưu cho bài toán tài chính, bán lẻ và hành chính công.',
      },
      {
        title: isLaos ? 'Bring Your Own Model (BYOM)' : 'Hỗ trợ mô hình tùy biến (BYOM)',
        desc: isLaos 
          ? 'Deploy private fine-tuned enterprise models on dedicated isolated endpoints.'
          : 'Sẵn sàng triển khai mô hình riêng của doanh nghiệp (Custom Fine-tuned LLM) lên cụm Dedicated Endpoint biệt lập với cam kết SLA cao cấp.',
      },
    ],
    integration: [
      {
        title: isLaos ? '100% OpenAI-Compatible API' : 'API tương thích 100% chuẩn OpenAI',
        desc: isLaos 
          ? 'Drop-in replacement for OpenAI SDK (Python, NodeJS, Go, C#). Just change base_url and api_key.'
          : 'Tương thích hoàn toàn với thư viện OpenAI SDK. Lập trình viên chỉ cần thay đổi base_url và api_key là có thể vận hành ngay.',
      },
      {
        title: isLaos ? 'Strict In-Country Data Sovereignty' : 'Chủ quyền dữ liệu & Không train mô hình',
        desc: isLaos 
          ? 'Enterprise data is strictly kept within Vietnam and never used to train third-party public models.'
          : '100% dữ liệu được xử lý nội địa, tuân thủ Nghị định 13/2023/NĐ-CP và cam kết tuyệt đối không dùng dữ liệu khách hàng để huấn luyện AI.',
      },
      {
        title: isLaos ? 'Framework Ecosystem Support' : 'Hệ sinh thái Frameworks & RAG',
        desc: isLaos 
          ? 'Seamlessly integrates with LangChain, LlamaIndex, Dify, Flowise, and enterprise Vector Databases.'
          : 'Tích hợp mượt mà với các framework AI hàng đầu: LangChain, LlamaIndex, Dify, Flowise và các cơ sở dữ liệu Vector (Milvus, Qdrant).',
      },
    ],
  };

  const modelCatalog = [
    {
      name: 'Qwen/Qwen3-32B',
      type: 'LLM Reasoning & Agent',
      context: '32.768 tokens (32K)',
      strengths: 'Suy luận logic sâu, phân tích hợp đồng phức tạp, Tool Calling, RAG nâng cao.',
      badge: 'Phổ Biến',
    },
    {
      name: 'Qwen/Qwen3-14B',
      type: 'LLM Chat & CSKH',
      context: '32.768 tokens (32K)',
      strengths: 'Cân bằng tối ưu giữa hiệu năng và chi phí, lý tưởng cho Chatbot CSKH, tóm tắt.',
      badge: 'Khuyên Dùng',
    },
    {
      name: 'Meta-llama/Llama-3.1-8B',
      type: 'LLM Đa Ngữ Cảnh Dài',
      context: '128.000 tokens (128K)',
      strengths: 'Hỏi đáp tài liệu siêu dài, coding và xử lý văn bản đa ngôn ngữ.',
      badge: 'Meta SOTA',
    },
    {
      name: 'Aisingapore/Llama-SEA-LION-v3.5-8B',
      type: 'LLM Ngữ Cảnh Tiếng Việt & ĐNÁ',
      context: '8.192 tokens (8K)',
      strengths: 'Tối ưu sâu cho tiếng Việt, văn hóa bản địa, dịch thuật ngữ nghĩa địa phương.',
      badge: 'SEA Focus',
    },
    {
      name: 'Qwen/Qwen 2.5-VL-7B-Instruct',
      type: 'Vision-Language Model (VLM)',
      context: '16.384 tokens (16K)',
      strengths: 'Đọc hiểu hình ảnh, bóc tách biểu đồ, hóa đơn, nhận diện văn bản OCR chữ viết tay.',
      badge: 'Multimodal',
    },
    {
      name: 'BAAI/bge-m3 & bge-reranker-v2-m3',
      type: 'Embedding & Reranker',
      context: '8.192 tokens (8K)',
      strengths: 'Embedding đa ngôn ngữ cho hệ thống tìm kiếm ngữ nghĩa và Enterprise RAG.',
      badge: 'RAG Essential',
    },
  ];

  const codeSnippets = {
    python: `from openai import OpenAI

# Khởi tạo client tương thích chuẩn OpenAI với Endpoint Viettel vMaaS
client = OpenAI(
    base_url="https://api.vmaas.viettelidc.com.vn/v1",
    api_key="vmaas_sec_xxxxxxxxxxxxxxxxxxxx"
)

response = client.chat.completions.create(
    model="Qwen/Qwen3-14B",
    messages=[
        {"role": "system", "content": "Bạn là trợ lý AI chuyên nghiệp của Viettel IDC."},
        {"role": "user", "content": "Tư vấn cho tôi giải pháp Cloud Server bảo mật cao."}
    ],
    temperature=0.7,
    max_tokens=1024
)

print(response.choices[0].message.content)`,
    curl: `curl -X POST "https://api.vmaas.viettelidc.com.vn/v1/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer vmaas_sec_xxxxxxxxxxxxxxxxxxxx" \\
  -d '{
    "model": "Qwen/Qwen3-14B",
    "messages": [
      {"role": "system", "content": "Bạn là trợ lý AI Viettel IDC."},
      {"role": "user", "content": "Xin chào!"}
    ],
    "temperature": 0.7
  }'`,
    nodejs: `import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.vmaas.viettelidc.com.vn/v1",
  apiKey: "vmaas_sec_xxxxxxxxxxxxxxxxxxxx",
});

async function main() {
  const completion = await client.chat.completions.create({
    model: "Qwen/Qwen3-14B",
    messages: [{ role: "user", content: "Tư vấn giải pháp vMaaS cho doanh nghiệp." }],
  });
  console.log(completion.choices[0].message.content);
}

main();`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[codeLang]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            {t.subheading}
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
                className={`inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-extrabold border-b-2 transition-all min-h-[44px] cursor-pointer ${
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {tabContents[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>

              <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Developer Integration Code Box */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-[var(--vidc-legacy-hex-090d16)] text-white shadow-xl border border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
              </div>
              <h3 className="text-base font-extrabold text-white tracking-tight">
                {t.quickstartTitle}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex p-1 bg-slate-800/80 rounded-lg text-xs font-extrabold">
                {(['python', 'curl', 'nodejs'] as const).map((lang) => (
                  <VIDCNativeButton
                    key={lang}
                    type="button"
                    onClick={() => setCodeLang(lang)}
                    className={`px-3 py-1 rounded-md uppercase transition-all cursor-pointer ${
                      codeLang === lang ? 'bg-[var(--vidc-color-brand-red)] text-white shadow-xs' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {lang}
                  </VIDCNativeButton>
                ))}
              </div>

              <VIDCNativeButton
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 text-xs font-extrabold transition-colors cursor-pointer border border-slate-700"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Đã sao chép' : 'Sao chép'}</span>
              </VIDCNativeButton>
            </div>
          </div>

          <pre className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 overflow-x-auto mt-4 leading-relaxed border border-slate-800/80">
            <code>{codeSnippets[codeLang]}</code>
          </pre>
        </div>

        {/* Model Spec Sheet Catalog Table */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <TableIcon className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
                {t.modelTableTitle}
              </h3>
            </div>
            <p className="text-xs text-slate-500 italic">
              {t.modelTableDesc}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
            <table className="w-full text-left text-xs">
              <thead className="bg-[var(--vidc-legacy-hex-1e232a)] text-white font-extrabold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Tên Mô Hình</th>
                  <th className="py-3.5 px-4">Phân Loại</th>
                  <th className="py-3.5 px-4">Độ Dài Ngữ Cảnh</th>
                  <th className="py-3.5 px-4">Năng Lực & Ứng Dụng Nổi Bật</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {modelCatalog.map((model, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-extrabold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span>{model.name}</span>
                        {model.badge && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200/60 whitespace-nowrap">
                            {model.badge}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 font-extrabold text-[11px] uppercase tracking-wide">{model.type}</td>
                    <td className="py-3.5 px-4 text-slate-700 font-mono font-medium">{model.context}</td>
                    <td className="py-3.5 px-4 text-slate-600 font-normal leading-relaxed">{model.strengths}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
