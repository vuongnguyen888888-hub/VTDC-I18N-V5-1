import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface AntiDdosFaqProps {
  currentMarket?: SEAMarket;
}

export const AntiDdosFaq: React.FC<AntiDdosFaqProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const t = {
    headline: isLaos 
      ? 'Frequently Asked Questions' 
      : 'Câu hỏi thường gặp',
    subtitle: isLaos
      ? 'Clear, transparent answers regarding Viettel Anti-DDoS protection and deployment'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ Viettel Anti-DDoS',
  };

  const faqs = [
    {
      q: isLaos 
        ? 'What is a DDoS attack and how does it negatively impact businesses?' 
        : 'Tấn công DDoS là gì và gây ảnh hưởng thế nào tới doanh nghiệp?',
      a: isLaos
        ? 'A Distributed Denial-of-Service (DDoS) attack overwhelms infrastructure capacity or internet transit pipes with massive malicious traffic, preventing servers from serving legitimate users. DDoS causes operational downtime, direct financial losses, reputational damage, and is frequently deployed as a smokescreen to mask secondary data exfiltration intrusions.'
        : 'Tấn công DDoS (Distributed Denial-of-Service) là hình thức tấn công làm tràn ngập tài nguyên hạ tầng hoặc kênh truyền internet, khiến máy chủ tê liệt không thể phản hồi người dùng thực. DDoS gây đình trệ hoạt động kinh doanh, tổn thất doanh thu, suy giảm uy tín thương hiệu và thường bị tin tặc lợi dụng làm bình phong đánh lạc hướng để xâm nhập đánh cắp dữ liệu.',
    },
    {
      q: isLaos 
        ? 'Is the Viettel Anti-DDoS Volume-Based fee billed based on clean traffic or attack traffic?' 
        : 'Gói cước Viettel Anti-DDoS Volume-Based được tính dựa trên traffic sạch hay traffic tấn công?',
      a: isLaos
        ? 'Anti-DDoS subscription tiers are calculated based on the maximum Peak Attack Traffic volume that the system absorbs and scrubs.'
        : 'Các gói dịch vụ Anti-DDoS được tính toán dựa trên tổng lưu lượng tấn công (Attack Traffic) cao nhất mà hệ thống tiếp nhận và xử lý làm sạch.',
    },
    {
      q: isLaos 
        ? 'If a DDoS attack exceeds the subscribed bandwidth limit, will Viettel continue protection?' 
        : 'Nếu bị tấn công DDoS vượt quá mức băng thông đã mua thì Viettel có tiếp tục bảo vệ không?',
      a: isLaos
        ? 'Viettel IDC continues actively protecting customer infrastructure even when attacks exceed the contracted threshold. For the first incident, mitigation is provided free of charge along with an upgrade recommendation; subsequent overages are billed according to service policy.'
        : 'Viettel IDC vẫn tiếp tục bảo vệ hệ thống của khách hàng khi bị tấn công vượt ngưỡng đã đăng ký. Trong lần đầu tiên, quý khách được hỗ trợ xử lý miễn phí kèm khuyến nghị nâng cấp gói; từ lần thứ hai trở đi, mức phí vượt ngưỡng sẽ được áp dụng theo chính sách dịch vụ.',
    },
    {
      q: isLaos 
        ? 'Does our enterprise need to install any on-premises hardware appliance or modify local topology?' 
        : 'Doanh nghiệp có cần lắp đặt thêm thiết bị phần cứng nào tại văn phòng/data center không?',
      a: isLaos
        ? 'No. The service is integrated and executed directly at the Viettel ISP backbone and national Scrubbing Centers. Customers require zero hardware procurement and zero alterations to existing on-premises server architecture.'
        : 'Không. Dịch vụ được tích hợp và xử lý trực tiếp trên hạ tầng mạng ISP và các trung tâm lọc dữ liệu (Scrubbing Center) của Viettel, do đó khách hàng hoàn toàn không cần đầu tư thêm phần cứng hay thay đổi cấu trúc hạ tầng hiện hữu.',
    },
    {
      q: isLaos 
        ? 'How does Viettel Anti-DDoS Volume-Based differ from Cloud WAF?' 
        : 'Viettel Anti-DDoS Volume-Based khác gì so với dịch vụ Cloud WAF?',
      a: isLaos
        ? 'Anti-DDoS Volume-Based focuses on Layer 4 network transit attacks (such as UDP Flood, ICMP Flood, and SYN Flood), whereas Cloud WAF specializes in Layer 7 application defense (protecting web applications and APIs against OWASP Top 10 exploits, SQLi, XSS, malicious bots, and HTTP Flood).'
        : 'Anti-DDoS Volume-Based tập trung xử lý các cuộc tấn công làm nghẽn băng thông ở tầng mạng (Layer 4 như UDP/ICMP/SYN Flood), trong khi Cloud WAF chuyên sâu bảo vệ ứng dụng ở tầng 7 (chống SQLi, XSS, Bot độc hại và HTTP Flood).',
    },
  ];

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-111827)] border-b border-slate-200"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="border-t border-b border-slate-200 divide-y divide-slate-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <VIDCNativeButton
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 sm:py-6 text-left flex items-center justify-between gap-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--vidc-color-brand-red)] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-slate-800 group-hover:text-slate-900 transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-slate-400 group-hover:text-slate-600 transition-colors">
                    {isOpen ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                    )}
                  </span>
                </VIDCNativeButton>
                {isOpen && (
                  <div className="pb-6 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed animate-in fade-in duration-200">
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
