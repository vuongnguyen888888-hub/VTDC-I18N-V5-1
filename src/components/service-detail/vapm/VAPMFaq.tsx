import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VAPMFaqProps {
  currentMarket?: SEAMarket;
}

export const VAPMFaq: React.FC<VAPMFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    title: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos
      ? 'Comprehensive answers to common questions regarding Viettel Application Performance Monitoring (vAPM)'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về giải pháp Giám sát hiệu năng ứng dụng Viettel Application Performance Monitoring (vAPM)',
  };

  const faqs = [
    {
      q: isLaos
        ? 'What is vAPM and how does it differ from traditional server monitoring (NMS)?'
        : 'Viettel vAPM là gì và khác biệt như thế nào so với giám sát máy chủ/hạ tầng truyền thống (NMS)?',
      a: isLaos
        ? 'Traditional Infrastructure Monitoring (NMS) only tracks host-level metrics such as CPU, RAM, Disk, and Network I/O. Viettel vAPM goes much deeper into application runtime code, tracking individual end-user transactions, distributed microservice calls, method latency bottlenecks, uncaught code exceptions, and slow SQL queries in real time.'
        : 'Giám sát hạ tầng truyền thống (NMS/Infra Monitoring) chỉ đo lường tài nguyên phần cứng máy chủ (CPU, RAM, Disk, Network). Viettel vAPM đi sâu vào tầng mã nguồn (Application Runtime), tự động bóc tách từng giao dịch người dùng cuối, theo dõi chuỗi gọi API phân tán giữa các microservices, định vị chính xác hàm bị nghẽn (Method Profiling) và câu lệnh SQL chậm mà hạ tầng thông thường không thể nhìn thấy.',
    },
    {
      q: isLaos
        ? 'Does the vAPM Agent cause significant overhead or slow down production applications?'
        : 'Việc cài đặt vAPM Agent có làm chậm ứng dụng hay tiêu tốn nhiều tài nguyên hệ thống không?',
      a: isLaos
        ? 'No. The vAPM Agent is engineered with intelligent bytecode instrumentation and asynchronous data streaming, keeping CPU overhead strictly under 1%–4% and negligible memory consumption, ensuring safe continuous operation in high-throughput production environments.'
        : 'Không. vAPM Agent được thiết kế tối ưu với kỹ thuật Bytecode Instrumentation thông minh và truyền dữ liệu bất đồng bộ. Mức độ chiếm dụng tài nguyên luôn được duy trì cực thấp (dưới 1% - 4% CPU và dung lượng RAM không đáng kể), hoàn toàn an toàn khi chạy trên môi trường Production phục vụ hàng triệu người dùng thực.',
    },
    {
      q: isLaos
        ? 'What programming languages, frameworks, and databases are supported by vAPM?'
        : 'Viettel vAPM hỗ trợ những ngôn ngữ lập trình, framework và cơ sở dữ liệu nào?',
      a: isLaos
        ? 'vAPM supports major modern application stacks including Java (Spring Boot, Tomcat, JBoss), .NET / .NET Core, Node.js, Python (Django, Flask, FastAPI), Golang, PHP, and Ruby. It also auto-profiles databases such as Oracle, PostgreSQL, MySQL, MS SQL Server, Redis, MongoDB, and message queues like Kafka and RabbitMQ.'
        : 'vAPM hỗ trợ hầu hết các ngôn ngữ và framework phổ biến hiện nay: Java (Spring Boot, Tomcat), .NET / .NET Core, Node.js (Express, NestJS), Python (Django, FastAPI), Golang, PHP. Về CSDL, hệ thống tự động phân tích truy vấn trên Oracle, PostgreSQL, MySQL, Microsoft SQL Server, MongoDB, Redis và các Message Queue như Apache Kafka, RabbitMQ.',
    },
    {
      q: isLaos
        ? 'How does Viettel ensure telemetry data security and source code privacy?'
        : 'Dữ liệu Telemetry và mã nguồn của doanh nghiệp được bảo mật như thế nào?',
      a: isLaos
        ? 'vAPM agents only capture execution execution metadata, traces, and performance timings. Sensitive user data (passwords, credit card numbers, PII) is automatically masked and sanitized at the agent level before transmission. All telemetry data is stored securely in Viettel IDC Tier 3 certified data centers conforming to ISO 27001 and PCI-DSS.'
        : 'vAPM Agent chỉ thu thập metadata thực thi, thời gian phản hồi và stack trace. Các dữ liệu nhạy cảm của người dùng (như mật khẩu, số thẻ ngân hàng, thông tin cá nhân PII) được tự động che giấu (Data Masking) ngay tại Agent trước khi gửi đi. Toàn bộ dữ liệu được lưu trữ trên hạ tầng Trung tâm dữ liệu đạt chuẩn Tier 3 của Viettel IDC, tuân thủ nghiêm ngặt ISO 27001 và PCI-DSS.',
    },
    {
      q: isLaos
        ? 'Can vAPM monitor Kubernetes clusters and Hybrid Cloud deployments?'
        : 'vAPM có hỗ trợ triển khai trên cụm Kubernetes (K8s) và môi trường Hybrid Cloud không?',
      a: isLaos
        ? 'Yes. vAPM provides seamless Kubernetes auto-instrumentation via Helm Charts and DaemonSets for Viettel Kubernetes Service (VKS), OpenShift, and vanilla K8s. It unifies telemetry across on-premises data centers, private clouds, and multi-cloud environments in a single management console.'
        : 'Có. vAPM hỗ trợ triển khai trên Kubernetes thông qua Helm Chart hoặc DaemonSet, tự động chèn Agent vào các Container/Pod khi khởi chạy. Hệ thống cho phép hợp nhất giám sát từ hạ tầng On-Premises, Viettel Cloud cho tới môi trường Hybrid Cloud trên một màn hình quản trị duy nhất.',
    },
    {
      q: isLaos
        ? 'How long does it take to deploy and start monitoring with Viettel vAPM?'
        : 'Thời gian triển khai và bắt đầu thu thập dữ liệu với vAPM mất bao lâu?',
      a: isLaos
        ? 'Standard deployment takes under 15–30 minutes per service node. After installing the agent or deploying the Helm chart, performance metrics, service topology, and transaction traces begin populating dashboards immediately in real time.'
        : 'Quy trình triển khai tiêu chuẩn chỉ mất từ 15 đến 30 phút cho mỗi dịch vụ. Ngay sau khi tích hợp Agent hoặc triển khai Helm Chart, dữ liệu Telemetry, bản đồ phân rã microservice và các chỉ số giao dịch sẽ xuất hiện trực quan trên Dashboard theo thời gian thực.',
    },
    {
      q: isLaos
        ? 'What does the 24/7/365 Viettel IDC Managed Operations service include?'
        : 'Đội ngũ kỹ sư Viettel IDC hỗ trợ những gì trong gói dịch vụ vận hành ủy thác 24/7?',
      a: isLaos
        ? 'Viettel IDC IT engineers provide 24/7 continuous system monitoring, early threshold warning detection, code-level root-cause triage during incidents, proactive alert tuning, and periodic application optimization consultation reports.'
        : 'Đội ngũ chuyên gia của Viettel IDC trực vận hành 24/7/365, chủ động theo dõi chỉ số hiệu năng, hỗ trợ khoanh vùng nguyên nhân gốc rễ (Root-Cause Triage) khi có sự cố, tinh chỉnh cấu hình ngưỡng cảnh báo và gửi báo cáo phân tích tối ưu hiệu năng định kỳ cho doanh nghiệp.',
    },
  ];

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-111827)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors">
                <VIDCNativeButton
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 sm:py-6 text-left flex items-center justify-between gap-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vidc-color-brand-red)] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-slate-800 group-hover:text-slate-900 transition-colors leading-snug">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75] text-slate-400 group-hover:text-slate-600 shrink-0 transition-colors" />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75] text-slate-400 group-hover:text-slate-600 shrink-0 transition-colors" />
                  )}
                </VIDCNativeButton>
                {isOpen && (
                  <div className="pb-6 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
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
