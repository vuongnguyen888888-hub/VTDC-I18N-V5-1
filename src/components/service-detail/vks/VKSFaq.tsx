import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface VKSFaqProps {
  currentMarket?: SEAMarket;
}

export const VKSFaq: React.FC<VKSFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    desc: isLaos
      ? 'Clear and detailed answers to common inquiries about Viettel Kubernetes Service (vKS)'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về dịch vụ Viettel Kubernetes Service (vKS)',
    stillHaveQuestions: isLaos 
      ? 'Still have questions or need a tailored architecture?' 
      : 'Vẫn còn thắc mắc hoặc cần tư vấn kiến trúc riêng?',
    contactSupport: isLaos ? 'Contact our technical consulting team' : 'Liên hệ đội ngũ chuyên gia Viettel IDC',
  };

  const faqs = [
    {
      q: 'Viettel Kubernetes Service (vKS) là gì và khác gì so với tự cài đặt Kubernetes trên VM?',
      a: 'Viettel Kubernetes Service (vKS) là dịch vụ PaaS được quản trị hoàn toàn (Fully Managed Kubernetes). Khác với việc doanh nghiệp tự cài đặt Kubernetes (phải tự cấu hình hệ điều hành, etcd cluster, mạng CNI, chứng chỉ bảo mật và trực ca vận hành khi Master Node gặp sự cố), vKS tự động hóa 100% việc khởi tạo, bảo trì, giám sát và sao lưu cụm. Doanh nghiệp chỉ cần quản lý ứng dụng của mình thông qua tệp Kubeconfig được cấp sẵn.',
    },
    {
      q: 'Dịch vụ vKS hỗ trợ các cơ chế tự động mở rộng (Autoscaling) nào?',
      a: 'vKS hỗ trợ đầy đủ cả 3 cơ chế mở rộng phổ biến nhất của hệ sinh thái Kubernetes: (1) Horizontal Pod Autoscaler (HPA) – tự động tăng/giảm số lượng Pod theo tải CPU/RAM hoặc custom metrics; (2) Vertical Pod Autoscaler (VPA) – tự động điều chỉnh requests/limits tài nguyên cho Pod; và (3) Cluster Autoscaler – tự động thêm mới hoặc thu hồi Worker Nodes ảo hóa khi cụm hết hoặc dư thừa tài nguyên.',
    },
    {
      q: 'Dữ liệu của ứng dụng có bị mất khi Pod hoặc Container bị khởi động lại không?',
      a: 'Không. vKS trang bị sẵn hệ thống lưu trữ bền vững (Persistent Volume) thông qua NFS Node chuyên dụng và hệ thống Block Storage với CSI Driver tiêu chuẩn. Dữ liệu ghi vào Persistent Volume Claims (PVC) được lưu trữ độc lập hoàn toàn với vòng đời của Container/Pod.',
    },
    {
      q: 'Tôi có thể sử dụng các công cụ DevOps quen thuộc như kubectl, Helm, Lens, ArgoCD không?',
      a: 'Hoàn toàn có thể. vKS tuân thủ 100% chuẩn mã nguồn mở của CNCF (Cloud Native Computing Foundation). Ngay sau khi khởi tạo cụm thành công trên Portal, bạn tải file Kubeconfig về máy và có thể kết nối ngay lập tức bằng mọi công cụ quản trị chuẩn Kubernetes như kubectl, Helm, k9s, Lens, ArgoCD hay GitLab CI/CD.',
    },
    {
      q: 'Hạ tầng vKS của Viettel IDC có đảm bảo an toàn thông tin và cam kết SLA như thế nào?',
      a: 'Hạ tầng vKS được đặt tại hệ thống Trung tâm dữ liệu Viettel IDC đạt chuẩn ANSI/TIA-942 Rated 3, đáp ứng tiêu chuẩn An toàn thông tin Cấp độ 3 theo Nghị định 85/2016/NĐ-CP, đồng thời sở hữu các chứng chỉ ISO 27001, ISO 27017, ISO 9001 và PCI-DSS. Viettel IDC cam kết SLA độ sẵn sàng dịch vụ lên tới 99.99% với chính sách đền bù minh bạch.',
    },
    {
      q: 'Doanh nghiệp có được hỗ trợ kỹ thuật và dùng thử trước khi ký hợp đồng không?',
      a: 'Có. Viettel IDC cung cấp chương trình dùng thử miễn phí đầy đủ tính năng cho doanh nghiệp. Đội ngũ kỹ sư giải pháp Cloud & DevOps của Viettel IDC luôn sẵn sàng đồng hành 24/7 để tư vấn thiết kế kiến trúc, đánh giá khối lượng công việc và hỗ trợ migrate ứng dụng từ hạ tầng cũ sang vKS.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-111827)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header - Exactly like CloudServerFaq */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-111827)] tracking-tight">
            {t.headline}
          </h2>
          <p className="mt-4 text-base text-slate-600">
            {t.desc}
          </p>
        </div>

        {/* Minimal Accordion List with Horizontal Dividers - Exactly like CloudServerFaq */}
        <div className="max-w-3xl mx-auto border-t border-b border-slate-200 divide-y divide-slate-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-2">
                <VIDCNativeButton
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 sm:py-6 text-left flex items-center justify-between gap-6 group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-slate-800 group-hover:text-slate-900 transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-slate-800 group-hover:text-slate-900 transition-colors">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-slate-800" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-800" />
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

        {/* Bottom Contact - Exactly like CloudServerFaq */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-600">
            {t.stillHaveQuestions}{' '}
            <VIDCAnchor href="tel:18008088" className="font-semibold text-[color:var(--vidc-color-brand-red)] hover:underline">
              {t.contactSupport}
            </VIDCAnchor>
          </p>
        </div>

      </div>
    </section>
  );
};
