import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface VCMPFaqProps {
  currentMarket?: SEAMarket;
}

export const VCMPFaq: React.FC<VCMPFaqProps> = ({ currentMarket }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    headline: isLaos ? 'Frequently Asked Questions' : 'Câu hỏi thường gặp',
    subtitle: isLaos 
      ? 'Detailed answers to common questions about Viettel Cloud Management Platform (vCMP)'
      : 'Giải đáp chi tiết những thắc mắc phổ biến về nền tảng quản trị đa đám mây Viettel vCMP',
  };

  const faqs = [
    {
      q: isLaos 
        ? 'What cloud platforms and infrastructure environments can vCMP connect to?' 
        : 'vCMP có thể kết nối với những loại nền tảng đám mây và hạ tầng nào?',
      a: isLaos
        ? 'The cloud paradigm in vCMP encompasses Public Clouds, Private Clouds, Hypervisors, and Bare Metal servers. Currently, vCMP natively connects to nearly 20 leading cloud platforms including AWS, Microsoft Azure, Google Cloud (GCP), Alibaba Cloud, Viettel IDC Cloud, alongside VMware vSphere, OpenStack, and KVM environments.'
        : 'Khái niệm Cloud trên vCMP bao gồm cả Public Cloud, Private Cloud, Hypervisor và Server vật lý. Nền tảng hiện kết nối tới hơn 20 loại Cloud phổ biến nhất hiện nay như AWS, Microsoft Azure, Google Cloud (GCP), Alibaba Cloud, Viettel IDC Cloud cũng như các môi trường VMware, OpenStack, KVM.',
    },
    {
      q: isLaos 
        ? 'What types of infrastructure resources can customers provision and manage on vCMP?' 
        : 'Sử dụng vCMP khách hàng có thể chủ động tạo và quản trị những loại tài nguyên nào?',
      a: isLaos
        ? 'Users can self-provision and manage comprehensive resources across the full IT stack: Virtual Machines (VMs), Storage (Object, Block, File), Networking (VPC, Subnet, Load Balancers, Cloud Firewall, VPN), Managed Databases (MySQL, PostgreSQL, SQL Server, MongoDB...), Containers (CNCF Kubernetes), and Automation scripts (Terraform, Ansible).'
        : 'Khách hàng có thể tạo và quản lý đa dạng tài nguyên gồm: Virtual Machines (VMs), Storage (Object, Block, File), Networking (VPC, Subnet, Load Balancer, Firewall, VPN), Databases (MySQL, PostgreSQL, SQL Server, MongoDB...), Containers (K8s) và Automation scripts (Terraform, Ansible).',
    },
    {
      q: isLaos 
        ? 'How does vCMP help enterprises manage and optimize multi-cloud expenditures?' 
        : 'vCMP giúp quản lý và tối ưu hóa chi phí đám mây như thế nào?',
      a: isLaos
        ? 'vCMP provides centralized cross-provider billing visibility, allows IT leaders to enforce spending quota ceilings per Tenant/Department, and continuously analyzes workload utilization to deliver automated alerts and recommendations for eliminating idle or over-provisioned resources.'
        : 'vCMP cung cấp khả năng hiển thị tập trung chi tiêu giữa các nhà cung cấp, thiết lập chính sách kiểm soát ngân sách theo Tenant/phòng ban và liên tục rà soát để đưa ra cảnh báo loại bỏ các tài nguyên nhàn rỗi không sử dụng.',
    },
    {
      q: isLaos 
        ? 'Can vCMP integrate with an enterprise’s existing IT infrastructure and ITSM tools?' 
        : 'vCMP có thể tích hợp với cơ sở hạ tầng và công cụ CNTT sẵn có của doanh nghiệp không?',
      a: isLaos
        ? 'Yes. The platform provides a rich ecosystem of Open RESTful APIs and pre-built plugins, guaranteeing seamless integration with existing systems including ITSM (ServiceNow, Jira), CMDB, central monitoring solutions, enterprise IAM / Single Sign-On, and over 100 3rd-party DevOps tools.'
        : 'Có. Nền tảng cung cấp hệ thống Open API và Plugin phong phú, đảm bảo tương thích hoàn hảo với các hệ thống hiện có như ITSM, CMDB, giải pháp giám sát tập trung, hệ thống IAM và hơn 100 công cụ DevOps bên thứ ba.',
    },
    {
      q: isLaos 
        ? 'How does the Self-Service Portal and Template Marketplace work in vCMP?' 
        : 'Giao diện Self-Service Portal của vCMP hoạt động ra sao?',
      a: isLaos
        ? 'The interface allows IT administrators to standardize VMs, operating systems, and complete application stacks into cataloged PaaS services on a private Marketplace. End-users can provision, scale, or decommission resources automatically with a simple click on pre-configured templates.'
        : 'Giao diện cho phép chuẩn hóa VMs, OS và ứng dụng thành các dịch vụ đóng gói dạng PaaS trên Marketplace. Quá trình khởi tạo, co giãn hay thu hồi tài nguyên đều được thực hiện tự động chỉ với thao tác chọn template dựng sẵn.',
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

      </div>
    </section>
  );
};

