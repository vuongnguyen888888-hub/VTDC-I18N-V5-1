import React, { useState } from 'react';
import { Plus, Minus, MessageSquare } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface DedicatedPrivateCloudFaqProps {
  currentMarket?: SEAMarket;
  onOpenQuote?: () => void;
}

export const DedicatedPrivateCloudFaq: React.FC<DedicatedPrivateCloudFaqProps> = ({
  currentMarket,
  onOpenQuote,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code === 'la';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Dedicated Private Cloud (HPC) solutions'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về giải pháp cụm điện toán hiệu năng cao Viettel Dedicated Private Cloud (HPC)',
  };

  const faqs = [
    {
      q: 'HPC (High Performance Computing) là gì và tại sao nó lại quan trọng đối với tổ chức?',
      a: 'HPC là khả năng tập hợp sức mạnh xử lý của nhiều máy chủ nhằm phân tích dữ liệu lớn và thực hiện các phép toán phức tạp ở tốc độ cực cao, giúp doanh nghiệp giải quyết các bài toán khoa học, kỹ thuật và tối ưu mô hình kinh doanh mà máy tính thông thường không thể xử lý được.',
    },
    {
      q: 'Hạ tầng Viettel Dedicated Private Cloud (HPC) gồm những thành phần phần cứng cốt lõi nào?',
      a: 'Hệ thống bao gồm: Cụm máy chủ chuyên biệt từ 2–4 CPU AMD/Intel Platinum, RAM DDR5 dung lượng lên đến 3–6 TB/máy chủ; Mạng nội bộ chuyên dụng InfiniBand 200 Gbps; Mạng ngoài 25 Gbps; và hệ thống lưu trữ Enterprise NVMe All-Flash tốc độ cao.',
    },
    {
      q: 'Lợi ích lớn nhất khi sử dụng HPC trên nền tảng Private Cloud so với tự đầu tư vật lý là gì?',
      a: 'Dịch vụ cho phép doanh nghiệp khai thác ngay tài nguyên siêu tính toán mà không cần bỏ vốn đầu tư CAPEX phần cứng ban đầu khổng lồ, rút ngắn thời gian triển khai, loại bỏ chi phí bảo trì phòng máy, đồng thời dễ dàng nâng cấp nóng (Hot-add) CPU/RAM/Storage khi cần.',
    },
    {
      q: 'Hệ thống có hỗ trợ kết nối Multi-AZ và dự phòng thảm họa không?',
      a: 'Có. Dịch vụ hỗ trợ giải pháp Cloud Multi-AZ kết nối Layer 2/Layer 3 giữa nhiều Trung tâm Dữ liệu với độ trễ < 5ms, băng thông liên AZ 10 Gbps, tự động chuyển đổi dự phòng (Failover Networking) giúp triệt tiêu downtime.',
    },
    {
      q: 'Cơ chế bảo mật trên cụm HPC được thiết lập ra sao?',
      a: 'Cụm máy chủ được cô lập vật lý hoàn toàn (Single Tenant). Hệ thống mạng được bảo vệ bởi tường lửa ứng dụng công nghệ Inline Machine Learning ngăn chặn mã độc Zero-day, kết hợp phân đoạn mạng Micro Segmentation (Distributed Firewall) và VPN IPSec Site-to-Site bảo mật cao.',
    },
    {
      q: 'Những công cụ, framework nào phổ biến trên môi trường HPC của Viettel IDC?',
      a: 'Hạ tầng tương thích hoàn hảo với các trình quản lý cụm và điều phối công việc phổ biến như Slurm, OpenMPI, Kubernetes, cùng các framework AI/Data Science hàng đầu như PyTorch, TensorFlow, Spark, Hadoop...',
    },
    {
      q: 'Doanh nghiệp có thể tối ưu hiệu năng cụm HPC bằng những cách nào?',
      a: 'Đội ngũ kiến trúc sư của Viettel IDC sẽ phối hợp tư vấn tối ưu mã nguồn tính toán song song, cấu hình phân bổ tài nguyên CPU/GPU tương thích với bộ nhớ DDR5 và tối ưu thông lượng I/O trên ổ đĩa All-Flash NVMe.',
    },
    {
      q: 'Điều khoản hợp đồng và hình thức thanh toán của dịch vụ HPC như thế nào?',
      a: 'Khách hàng có thể linh hoạt lựa chọn gói thuê 1 máy chủ hoặc gói combo cụm 3 máy chủ với thời hạn hợp đồng tối thiểu từ 12 tháng trở lên. Thanh toán trả trước định kỳ theo hợp đồng dịch vụ.',
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
        
        {/* Section Title */}
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
                  onClick={() => toggleFaq(idx)}
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

        {/* Help footer */}
        {onOpenQuote && (
          <div className="mt-10 text-center">
            <p className="text-sm text-slate-600">
              Bạn vẫn còn câu hỏi chưa được giải đáp?{' '}
              <VIDCNativeButton
                type="button"
                onClick={onOpenQuote}
                className="text-[var(--vidc-color-brand-red)] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Gửi câu hỏi cho chuyên gia HPC</span>
              </VIDCNativeButton>
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
