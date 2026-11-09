import React, { useState } from 'react';
import { CircleHelp, ChevronDown, ChevronUp, Layers, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudFileStorageFaqProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const CloudFileStorageFaq: React.FC<CloudFileStorageFaqProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code === 'la';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const t = {
    eyebrow: isLaos ? 'FREQUENTLY ASKED QUESTIONS' : 'CÂU HỎI THƯỜNG GẶP',
    headline: isLaos
      ? 'Frequently Asked Questions about Viettel Cloud File Storage'
      : 'Câu Hỏi Thường Gặp Về Viettel Cloud File Storage',
    desc: isLaos
      ? 'Clear answers regarding architecture, connectivity protocols, capacity scaling, and comparison with Object & Block Storage.'
      : 'Giải đáp chi tiết về giao thức kết nối, khả năng mở rộng dung lượng và so sánh định vị các giải pháp lưu trữ đám mây của Viettel IDC.',
    needMoreHelp: isLaos ? 'Need additional consultation?' : 'Quý khách vẫn còn thắc mắc cần giải đáp?',
    contactSupport: isLaos ? 'Contact a Solution Specialist' : 'Liên hệ chuyên gia tư vấn ngay',
  };

  const faqs = [
    {
      q: 'Dịch vụ Viettel Cloud File Storage phù hợp với mục đích gì?',
      a: 'Dịch vụ phù hợp cho các ứng dụng làm việc với dữ liệu ở mức file đặt trong các thư mục của File System (FS quản lý metadata của file, phân bổ theo cấu trúc hình cây thư mục). Sử dụng tối ưu để lưu trữ dữ liệu phi cấu trúc như: Thư mục cá nhân/người dùng (Home directories), Dữ liệu đa phương tiện (Media), Dữ liệu Camera giám sát, và Dữ liệu lưu trữ lịch sử (Archive).',
    },
    {
      q: 'Người dùng có thể tương tác với Viettel Cloud File Storage như thế nào?',
      a: 'Viettel Cloud File Storage sử dụng các giao thức chia sẻ file tiêu chuẩn công nghiệp là NFS (cho môi trường Linux/Unix) và CIFS/SMB (cho môi trường Windows) để kết nối, truy cập và sử dụng trực tiếp như một ổ cứng mạng nội bộ trên máy chủ ảo Cloud VM, Dedicated Server hoặc máy trạm tại chỗ (On-premises).',
    },
    {
      q: 'Tôi muốn thuê dung lượng lớn 1.000 TB (1 PB), liệu hệ thống có đáp ứng được không?',
      a: 'Hoàn toàn đáp ứng được. Viettel IDC có khả năng cung cấp không gian lưu trữ không giới hạn cho khách hàng, sẵn sàng mở rộng dung lượng từ 1.000 TB (1 Petabyte) trở lên theo nhu cầu thực tế của các doanh nghiệp lớn với chính sách chiết khấu và hỗ trợ thông lượng chuyên dụng riêng biệt.',
    },
    {
      q: 'Khi nào nên sử dụng Viettel Cloud File Storage, Viettel Cloud Block Storage hoặc Viettel Cloud Object Storage?',
      a: `Tùy thuộc vào kiến trúc và mục đích ứng dụng của doanh nghiệp:\n• Viettel Cloud File Storage: Dịch vụ lưu trữ tệp (Folder/File) dùng cho các máy chủ ảo (VM) và máy chủ tại chỗ cần chia sẻ dữ liệu chung đồng thời qua giao thức NFS/CIFS.\n• Viettel Cloud Block Storage: Dịch vụ lưu trữ mức khối để gắn trực tiếp vào máy chủ ảo VM. Đáp ứng hiệu năng cao cho các khối lượng công việc yêu cầu truy cập dữ liệu từ VM với độ trễ thấp nhất (như cài đặt Hệ điều hành, Cơ sở dữ liệu).\n• Viettel Cloud Object Storage: Dịch vụ lưu trữ đối tượng phi cấu trúc, cung cấp khả năng truy xuất dữ liệu thông qua Internet RESTful API (chuẩn S3) có thể truy cập linh hoạt từ bất cứ đâu.`,
    },
    {
      q: 'Tôi có thể nâng cấp thêm thông lượng (Throughput) hoặc dung lượng trong quá trình sử dụng không?',
      a: 'Có. Quý khách có thể chủ động nâng cấp dung lượng lưu trữ (theo block 50 GB) hoặc bổ sung thêm thông lượng từ 39 đến 500 MB/s bất kỳ lúc nào trực tiếp trên Web Portal quản trị mà không làm gián đoạn hoạt động của hệ thống (Zero Downtime).',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-slate-800 border-t border-slate-200">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[var(--vidc-color-brand-red)] text-xs font-bold uppercase tracking-wider mb-3">
            <CircleHelp className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-snug">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            {t.desc}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[var(--vidc-color-brand-red)]/40 shadow-md ring-1 ring-red-500/10'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <VIDCNativeButton
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[var(--vidc-legacy-hex-222225)] flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-50 text-[var(--vidc-color-brand-red)] text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[var(--vidc-color-brand-red)] bg-red-50' : 'bg-slate-100'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </VIDCNativeButton>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line animate-in fade-in">
                    <div className="pl-9 pt-3">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200/90 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold text-slate-800">{t.needMoreHelp}</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Đội ngũ chuyên gia Viettel IDC luôn sẵn sàng tư vấn và giải đáp 24/7.
            </p>
          </div>
          <VIDCNativeButton
            type="button"
            onClick={onOpenConsult}
            className="px-5 py-2.5 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>{t.contactSupport}</span>
            <ArrowRight className="w-4 h-4" />
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
