import React, { useState } from 'react';
import { Activity, Search, Server, CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VAPMCapabilitiesProps {
  currentMarket?: SEAMarket;
}

export const VAPMCapabilities: React.FC<VAPMCapabilitiesProps> = ({ currentMarket }) => {
  const [activeTab, setActiveTab] = useState<'telemetry' | 'diagnostics' | 'integration'>('telemetry');
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'KEY FEATURES' : 'TÍNH NĂNG NỔI BẬT',
    headline: isLaos 
      ? 'Outstanding Technology Capabilities & Deep Observability'
      : 'Tính năng công nghệ & Năng lực quan sát chuyên sâu',
  };

  const tabs = [
    { id: 'telemetry', label: isLaos ? 'Telemetry & Tracing' : 'Telemetry & Tracing phân tán', icon: Activity },
    { id: 'diagnostics', label: isLaos ? 'Diagnostics & Code Profiling' : 'Chẩn đoán dòng mã & SQL', icon: Search },
    { id: 'integration', label: isLaos ? 'Ecosystem & Management' : 'Hệ sinh thái & Quản trị', icon: Server },
  ];

  const tabContents = {
    telemetry: [
      {
        title: isLaos ? 'Distributed Transaction Tracing' : 'Trace giao dịch phân tán từ đầu đến cuối',
        desc: isLaos 
          ? 'Track every single user transaction across microservices, asynchronous queues, and database backends with visual latency waterfalls.'
          : 'Theo dõi từng giao dịch từ trình duyệt, mobile app qua các cụm microservices, queue bất đồng bộ và cơ sở dữ liệu với biểu đồ phân rã độ trễ trực quan.',
      },
      {
        title: isLaos ? 'Real-Time Metrics & Live Service Maps' : 'Chỉ số thời gian thực & Bản đồ dịch vụ động',
        desc: isLaos 
          ? 'Continuously calculate throughput (RPM), error rate (5xx), Apdex index, and automatically generate dynamic topology maps.'
          : 'Liên tục cập nhật chỉ số Throughput (RPM), tỉ lệ lỗi HTTP 5xx, chỉ số hài lòng Apdex và tự động hiển thị sơ đồ liên kết giữa các node dịch vụ.',
      },
      {
        title: isLaos ? 'Real User Browser & Mobile Monitoring (RUM)' : 'Giám sát trải nghiệm người dùng thực (RUM)',
        desc: isLaos 
          ? 'Capture actual page load speeds, Core Web Vitals (FCP, LCP, CLS), JavaScript errors, and mobile network API latencies.'
          : 'Đo lường thời gian tải trang thực tế, chỉ số Core Web Vitals, lỗi JavaScript trên trình duyệt và độ trễ gọi API từ ứng dụng Android/iOS.',
      },
    ],
    diagnostics: [
      {
        title: isLaos ? 'Code-Level Method & Thread Profiling' : 'Định vị điểm nghẽn mức Method & Dòng mã',
        desc: isLaos 
          ? 'Isolate CPU-intensive methods, thread locks, uncaught exceptions, and memory leaks directly in source code execution stacks.'
          : 'Chỉ điểm phương thức chiếm dụng nhiều CPU, hiện tượng khóa luồng (Thread locking), ngoại lệ chưa bắt và rò rỉ bộ nhớ trong stack trace.',
      },
      {
        title: isLaos ? 'Slow Database Query & Index Profiling' : 'Phân tích câu lệnh SQL chậm & Cơ sở dữ liệu',
        desc: isLaos 
          ? 'Automatically detect slow queries, missing database indexes, connection pool exhaustion across PostgreSQL, MySQL, Oracle, MongoDB.'
          : 'Tự động phát hiện câu lệnh SQL tắc nghẽn, thiếu index bảng, cạn kiệt Connection Pool trên PostgreSQL, MySQL, Oracle, MongoDB, Redis.',
      },
      {
        title: isLaos ? 'AI-Powered Anomaly Alerts & Baselining' : 'Cảnh báo thông minh AI & Dynamic Baselining',
        desc: isLaos 
          ? 'Dynamic baselines automatically detect performance deviations and send instant alerts via SMS, Telegram, Slack, Email.'
          : 'Tự động học ngưỡng tải bình thường của ứng dụng để cảnh báo sự cố bất thường qua SMS Brandname, Telegram, Slack, Webhook và Email.',
      },
    ],
    integration: [
      {
        title: isLaos ? 'Multi-Language SDK & Framework Support' : 'Hỗ trợ đa ngôn ngữ lập trình & Frameworks',
        desc: isLaos 
          ? 'Pre-built auto-instrumentation agents for Java (Spring), .NET Core, Node.js, Python (Django, FastAPI), Golang, PHP, Ruby.'
          : 'Tự động thu thập dữ liệu với Agent may đo riêng cho Java (Spring Boot), .NET Core, Node.js, Python (Django, FastAPI), Golang, PHP.',
      },
      {
        title: isLaos ? 'Kubernetes Helm & Cloud-Native Injection' : 'Tích hợp Kubernetes Helm Chart & Container',
        desc: isLaos 
          ? 'Deploy effortlessly via Kubernetes Helm charts or DaemonSets, auto-injecting monitoring into pods without code modifications.'
          : 'Triển khai dễ dàng qua Helm Chart hoặc DaemonSet trên Viettel Kubernetes Service (VKS), tự động tích hợp pod mà không cần sửa code.',
      },
      {
        title: isLaos ? '24/7 Managed Operations & Incident Triage' : 'Ủy thác vận hành & Tư vấn tối ưu 24/7',
        desc: isLaos 
          ? 'Viettel IDC certified engineers monitor applications 24/7/365, triaging root causes and proposing code optimization roadmaps.'
          : 'Đội ngũ kỹ sư cấp cao của Viettel IDC trực giám sát 24/7/365, hỗ trợ khoanh vùng sự cố và tư vấn kiến trúc tối ưu hiệu năng định kỳ.',
      },
    ],
  };

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      </div>
    </section>
  );
};
