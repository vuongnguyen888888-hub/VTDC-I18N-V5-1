import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface EndpointSecurityFaqProps {
  currentMarket?: SEAMarket;
}

export const EndpointSecurityFaq: React.FC<EndpointSecurityFaqProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const t = {
    headline: isLaos 
      ? 'Frequently Asked Questions' 
      : 'Câu hỏi thường gặp về Viettel Endpoint Security',
    subtitle: isLaos
      ? 'Answers to common questions about deployment, performance impact, and trial onboarding.'
      : 'Giải đáp nhanh các thắc mắc phổ biến về triển khai, hiệu năng và quy trình dùng thử dịch vụ.',
  };

  const faqs = [
    {
      q: isLaos 
        ? 'What is the biggest competitive advantage of Viettel Endpoint Security compared to legacy alternatives?' 
        : 'Lợi thế lớn nhất của Viettel Endpoint Security so với các giải pháp khác trên thị trường là gì?',
      a: isLaos
        ? 'Viettel Endpoint Security provides a unified, ultra-lightweight agent compatible across all major operating systems (Windows, Linux, macOS, Solaris), seamlessly protecting both on-premise physical infrastructure and public/private clouds with centralized GravityZone management.'
        : 'Viettel Endpoint Security cung cấp giải pháp đồng bộ chỉ với duy nhất một Agent điều khiển nhẹ nhàng, tương thích mọi hệ điều hành (Windows, Linux, macOS, Solaris) và bảo vệ toàn diện cả hạ tầng On-Premise lẫn Đám mây (Public/Private Cloud).',
    },
    {
      q: isLaos 
        ? 'Our enterprise has a diverse fleet of devices and multiple OS platforms; is deployment complex?' 
        : 'Tổ chức của tôi có rất nhiều thiết bị và hệ điều hành khác nhau, việc triển khai cài đặt có phức tạp không?',
      a: isLaos
        ? 'Not at all. Enterprises only need to distribute a single unified installer package. Once installed, the BEST agent automatically links to the central GravityZone portal to inherit organizational security policies within minutes.'
        : 'Hoàn toàn không phức tạp. Doanh nghiệp chỉ cần tải một gói cài đặt duy nhất; sau khi hoàn tất cài đặt, Agent sẽ tự động kết nối về trung tâm quản trị GravityZone để nhận chính sách bảo vệ trong vài phút.',
    },
    {
      q: isLaos 
        ? 'Does background antivirus scanning slow down or disrupt virtual machine computing performance?' 
        : 'Hiệu năng các máy chủ ảo hóa có bị chậm hay gián đoạn khi quét virus không?',
      a: isLaos
        ? 'No. The solution offloads scan overhead to dedicated Security Virtual Appliances (SVA), requiring merely 10–20 MB of static RAM and 1–2% of a single vCPU, completely eliminating Antivirus Storms and storage I/O bottlenecks.'
        : 'Không. Giải pháp sử dụng công nghệ chia sẻ tải thông qua máy chủ quét tập trung SVA, chỉ chiếm từ 10–20 MB RAM và 1–2% hoạt động của 1 vCPU, triệt tiêu hoàn toàn hiện tượng nghẽn tài nguyên trên máy chủ của bạn.',
    },
    {
      q: isLaos 
        ? 'Does our IT team need to manually download and patch daily virus definition updates?' 
        : 'Hệ thống của tôi có cần phải cập nhật thủ công các mẫu virus mới hàng ngày không?',
      a: isLaos
        ? 'No manual intervention is required. The service autonomously syncs up-to-the-minute virus signatures and threat intelligence models from Bitdefender Cloud directly to SVA appliances and distributed endpoints with zero operational disruption.'
        : 'Không cần. Dịch vụ sẽ tự động cập nhật liên tục các mẫu virus, mã độc mới nhất từ Bitdefender Cloud xuống máy chủ SVA và các Endpoint mà không làm gián đoạn công việc của người dùng.',
    },
    {
      q: isLaos 
        ? 'Can we test and trial Viettel Endpoint Security before committing to an enterprise purchase?' 
        : 'Tôi có thể đăng ký dùng thử dịch vụ trước khi mua chính thức không?',
      a: isLaos
        ? 'Yes. Viettel IDC provides full-featured proof-of-concept trial accounts, allowing your security engineers to evaluate compatibility, detection rates, and resource consumption directly on your production or staging infrastructure.'
        : 'Có. Viettel IDC hỗ trợ chương trình dùng thử (Trial) đầy đủ tính năng để doanh nghiệp đánh giá độ tương thích và năng lực bảo vệ trực tiếp trên hệ thống.',
    },
  ];

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-111827)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Minimal Accordion List with horizontal line dividers */}
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
                  <span className="shrink-0 text-slate-800 group-hover:text-slate-900 transition-colors">
                    {isOpen ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                    )}
                  </span>
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
