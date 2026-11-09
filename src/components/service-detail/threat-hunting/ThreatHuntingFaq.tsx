import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ThreatHuntingFaqProps {
  currentMarket?: SEAMarket;
}

export const ThreatHuntingFaq: React.FC<ThreatHuntingFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos
      ? 'Detailed answers to common questions about Viettel Threat Hunting services'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ rà soát & săn lùng mối nguy Viettel Threat Hunting',
  };

  const faqs = [
    {
      q: isLaos
        ? 'How does Threat Hunting differ from traditional SOC monitoring?'
        : 'Threat Hunting khác gì so với hệ thống giám sát SOC truyền thống?',
      a: isLaos
        ? 'Traditional SOC is primarily alert-driven, reacting when automated systems trigger warnings. Threat Hunting is hypothesis-driven and proactive, operating under the assumption that attackers are already inside the perimeter to uncover stealthy intrusions that never generated an alert.'
        : 'SOC truyền thống chủ yếu phản ứng khi có cảnh báo từ hệ thống (Alert-driven). Ngược lại, Threat Hunting mang tính chủ động (Hypothesis-driven), hoạt động dựa trên giả định kẻ tấn công đã lọt vào bên trong để truy vết những mối nguy chưa hề phát sinh cảnh báo.',
    },
    {
      q: isLaos
        ? 'Does the threat hunting process cause any disruption to enterprise IT operations?'
        : 'Dịch vụ có gây gián đoạn hoạt động của hệ thống công nghệ thông tin không?',
      a: isLaos
        ? 'No. Hunting operations rely on passive telemetry ingestion, optimized read-only queries, and lightweight agents designed not to impact CPU or network throughput of production environments.'
        : 'Không. Quá trình săn lùng mối nguy được thực hiện thông qua thu thập và phân tích telemetry, log và dữ liệu bộ nhớ một cách thụ động hoặc qua các truy vấn tối ưu, đảm bảo không gây tải và tuyệt đối không làm gián đoạn hiệu năng hạ tầng sản xuất của doanh nghiệp.',
    },
    {
      q: isLaos
        ? 'How does Threat Hunting help alleviate SOC alert fatigue?'
        : 'Threat Hunting có giúp giảm bớt tình trạng cảnh báo rác (Alert Fatigue) không?',
      a: isLaos
        ? 'Yes. By conducting deep contextual analysis on anomalous activities, specialists help organizations tune SIEM and EDR rules, eliminating false positives and allowing internal teams to focus on verified critical threats.'
        : 'Có. Bằng cách phân tích sâu các hành vi bất thường và xác định đúng bản chất sự kiện, chuyên gia sẽ giúp tinh chỉnh lại hệ thống luật (Rules) của SIEM/EDR, loại bỏ cảnh báo giả và giảm tải tối đa cho đội ngũ SOC.',
    },
    {
      q: isLaos
        ? 'What deliverables and reports are provided after each hunting campaign?'
        : 'Kết quả bàn giao sau mỗi đợt Threat Hunting gồm những gì?',
      a: isLaos
        ? 'Deliverables include comprehensive executive and technical security assessment reports, full lists of discovered IoCs/IoAs, root-cause analysis, tactical remediation guidance, and customized incident response playbooks.'
        : 'Báo cáo chi tiết về hiện trạng an toàn hệ thống, danh sách các mối nguy/cửa sau được phát hiện, phân tích nguyên nhân gốc rễ (Root cause), khuyến nghị xử lý và bộ đề xuất cải tiến Playbook/quy trình phòng thủ nội bộ.',
    },
    {
      q: isLaos
        ? 'Which frameworks and standards guide the Viettel Threat Hunting methodology?'
        : 'Phương pháp luận săn lùng của Viettel tuân theo khung tiêu chuẩn nào?',
      a: isLaos
        ? 'Our hunters strictly follow the MITRE ATT&CK enterprise matrix, NIST SP 800-61 incident handling guidelines, and ISO 27001 data protection standards.'
        : 'Toàn bộ chiến dịch săn lùng mối nguy tuân thủ ma trận kỹ thuật MITRE ATT&CK toàn cầu, quy trình điều tra xử lý sự cố NIST SP 800-61 và hệ thống quản lý an toàn thông tin ISO 27001.',
    },
    {
      q: isLaos
        ? 'How fast can Viettel mobilize an emergency incident hunting team?'
        : 'Viettel có thể kích hoạt đội ngũ ứng cứu khẩn cấp trong bao lâu?',
      a: isLaos
        ? 'For emergency incident hunting requests, our elite rapid response team mobilizes within 60 minutes, immediately initiating perimeter triage, lateral movement containment, and forensic evidence preservation.'
        : 'Đối với kịch bản khẩn cấp khi doanh nghiệp nghi ngờ có sự cố xâm nhập nghiêm trọng, đội ngũ phản ứng nhanh của Viettel có thể kích hoạt và tiếp cận hệ thống trong vòng 60 phút để khoanh vùng và bảo toàn chứng cứ.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-111827)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Section Title matching CloudServerFaq */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* FAQ Accordion List matching CloudServerFaq */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <VIDCNativeButton
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex items-center justify-between w-full text-left font-bold text-base sm:text-lg text-slate-900 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4 group-hover:text-[var(--vidc-color-brand-red)] transition-colors">
                    {faq.q}
                  </span>
                  <div className="shrink-0 p-1">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[var(--vidc-color-brand-red)] transition-transform duration-200" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-transform duration-200" />
                    )}
                  </div>
                </VIDCNativeButton>

                {isOpen && (
                  <div className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed pr-8 animate-fadeIn">
                    <p>{faq.a}</p>
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
