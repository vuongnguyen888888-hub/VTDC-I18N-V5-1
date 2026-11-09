import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CloudObjectStorageFaqProps {
  currentMarket?: SEAMarket;
}

export const CloudObjectStorageFaq: React.FC<CloudObjectStorageFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'FREQUENTLY ASKED QUESTIONS' : 'HỎI ĐÁP THƯỜNG GẶP',
    headline: isLaos
      ? 'Frequently Asked Questions about Viettel Cloud Object Storage'
      : 'Câu Hỏi Thường Gặp Về Viettel Cloud Object Storage',
    subtitle: isLaos
      ? 'Comprehensive answers to common technical, architectural, and billing questions about Viettel Cloud Object Storage.'
      : 'Giải đáp chi tiết các thắc mắc về tính năng, kiến trúc bảo mật và quy chuẩn tính cước dịch vụ Viettel Cloud Object Storage.',
  };

  const faqs = [
    {
      q: isLaos
        ? 'What is Viettel Cloud Object Storage best suited for?'
        : 'Dịch vụ Viettel Cloud Object Storage phù hợp với mục đích gì?',
      a: isLaos
        ? 'Viettel Cloud Object Storage provides scalable unstructured data storage. It is especially suited for hosting digital media assets (images, video, audio) for high-speed streaming to end-users, serving as an Origin Storage repository for CDN networks, and maintaining Big Data lakes, compliance backups, and long-term archives.'
        : 'Viettel Cloud Object Storage là dịch vụ cho thuê không gian lưu trữ dữ liệu dạng phi cấu trúc. Dịch vụ đặc biệt phù hợp để lưu trữ nội dung số (content media, hình ảnh, video) phục vụ truyền tải trực tuyến tới người dùng cuối (streaming), làm kho nội dung gốc (Origin Storage) cho hệ thống CDN, và lưu trữ dữ liệu lớn (Big Data / Backup / Archive).',
    },
    {
      q: isLaos
        ? 'How can developers and users interact with Viettel Cloud Object Storage?'
        : 'Người dùng có thể tương tác với Viettel Cloud Object Storage như thế nào?',
      a: isLaos
        ? 'The service uses standard S3 protocols and provides extensive RESTful APIs. Users can manage resources directly via the intuitive Web Portal interface or leverage standard open-source SDK libraries (Python, Java, PHP, NodeJS, Go...) to build custom applications that ingest and query data effortlessly.'
        : 'Dịch vụ sử dụng giao thức chuẩn S3 và cung cấp đầy đủ bộ API mở rộng. Người dùng có thể quản trị trực tiếp thông qua giao diện Web Portal hoặc sử dụng các công cụ, thư viện mã nguồn mở (Python, Java, PHP, Go...) để tự phát triển các ứng dụng kết nối và giao tiếp dữ liệu.',
    },
    {
      q: isLaos
        ? 'I need massive storage capacity from 1,000 TB (1 Petabyte) or more, can the system handle it?'
        : 'Tôi muốn thuê dung lượng lớn từ 1.000 TB (1 Petabyte) trở lên, liệu hệ thống có đáp ứng được không?',
      a: isLaos
        ? 'Yes, absolutely. Viettel Cloud Object Storage is engineered on a hyper-scale distributed cloud infrastructure with virtually unlimited scaling capacity, ready to provision storage pools from hundreds of Terabytes to Petabytes seamlessly without interrupting enterprise operations.'
        : 'Hoàn toàn đáp ứng được. Nền tảng Viettel Cloud Object Storage được xây dựng trên cụm hạ tầng điện toán đám mây quy mô lớn với khả năng mở rộng không giới hạn, sẵn sàng cung cấp ngay không gian lưu trữ từ hàng trăm Terabyte đến hàng Petabyte mà không làm gián đoạn hoạt động của doanh nghiệp.',
    },
    {
      q: isLaos
        ? 'How is data access security and permission authorization handled?'
        : 'Cơ chế bảo mật và phân quyền truy cập dữ liệu được thực hiện như thế nào?',
      a: isLaos
        ? 'Data is protected through Access Key / Secret Key pairs with granular permissions configured per Bucket and Object. Additionally, the service integrates Security Token Service (STS) to issue temporary, time-restricted access tokens for designated applications or users.'
        : 'Dữ liệu được bảo vệ qua hệ thống khóa Access Key/Secret Key, hỗ trợ cấu hình quyền truy cập theo từng Bucket/Object. Ngoài ra, dịch vụ tích hợp Security Token Service (STS) cho phép cấp quyền truy cập tạm thời, giới hạn thời gian cho các ứng dụng hoặc người dùng chỉ định.',
    },
    {
      q: isLaos
        ? 'What benefits does the Multi-AZ (Multi-Availability Zone) synchronization option provide?'
        : 'Tùy chọn Multi AZ (Đồng bộ đa vùng) mang lại lợi ích gì cho dữ liệu của tôi?',
      a: isLaos
        ? 'Multi-AZ automatically replicates and synchronizes data across physically isolated availability zones at different data centers. As a result, data integrity and instant access availability are guaranteed even in the event of localized physical disaster at a data center.'
        : 'Multi AZ cho phép dữ liệu được tự động sao chép và đồng bộ trên các phân vùng vật lý độc lập tại các trung tâm dữ liệu khác nhau. Nhờ đó, tính toàn vẹn và khả năng truy xuất dữ liệu luôn được đảm bảo an toàn tuyệt đối ngay cả khi xảy ra sự cố thảm họa cục bộ tại một trung tâm dữ liệu.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-111827)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Minimal Accordion List with horizontal line dividers */}
        <div className="border-t border-b border-slate-300 divide-y divide-slate-200 bg-white rounded-2xl shadow-sm px-6 sm:px-8">
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
                  <span className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-slate-400 group-hover:text-slate-600 transition-colors">
                    {isOpen ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2] text-[var(--vidc-color-brand-red)]" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                    )}
                  </span>
                </VIDCNativeButton>

                {isOpen && (
                  <div className="pb-6 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
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
