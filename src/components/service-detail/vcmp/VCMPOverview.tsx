import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface VCMPOverviewProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const VCMPOverview: React.FC<VCMPOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos 
      ? 'Unified Multi-Cloud Management & Intelligent FinOps Platform' 
      : 'Hạ tầng quản trị đa đám mây tinh gọn, tự động hóa & kiểm soát tập trung',
    desc1: isLaos
      ? 'Viettel Cloud Management Platform (vCMP) empowers enterprises to orchestrate, monitor, automate, and optimize multi-cloud infrastructure across nearly 20 Public Cloud, Private Cloud, Hypervisor, and Bare Metal environments.'
      : 'Viettel Cloud Management Platform (vCMP) mang lại cho doanh nghiệp giải pháp hợp nhất quản trị đa đám mây (Single-Pane-of-Glass), cho phép khởi tạo, điều phối vòng đời tài nguyên, tự động hóa với các công cụ DevOps và cắt giảm lãng phí chi tiêu.',
    desc2: isLaos
      ? 'Operating natively with enterprise-grade standards, vCMP seamlessly unifies Private and Public Clouds (AWS, Azure, GCP, Viettel Cloud) and on-premises virtualization into one single pane of glass.'
      : 'Hệ thống tương thích hoàn hảo với gần 20 nền tảng đám mây lớn (AWS, Azure, GCP, Alibaba, Viettel Cloud), các hệ ảo hóa phổ biến (VMware, KVM, Hyper-V) và máy chủ vật lý, mang lại năng lực điều phối tập trung và khả năng co giãn linh hoạt.',
    highlight1Title: isLaos ? 'Unified Multi-Cloud Management' : 'Quản lý tập trung toàn diện',
    highlight1Desc: isLaos
      ? 'Operate, configure, and monitor multi-cloud resources and billing across all providers on a single unified console.'
      : 'Vận hành, cấu hình và giám sát tài nguyên cùng hóa đơn billing đa nền tảng trên một giao diện hợp nhất duy nhất.',
    highlight2Title: isLaos ? 'Self-Service Portal & Marketplace' : 'Self-Service Portal & Marketplace',
    highlight2Desc: isLaos
      ? 'Package applications into ready-to-deploy templates with 1-click provisioning, scaling, and lifecycle teardown.'
      : 'Đóng gói ứng dụng thành template PaaS, khởi tạo, co giãn và thu hồi tài nguyên tự động chỉ với 1 cú click chuột.',
    highlight3Title: isLaos ? 'DevOps Automation & Smart FinOps' : 'Tự động hóa DevOps & FinOps thông minh',
    highlight3Desc: isLaos
      ? 'Pre-integrated with Terraform, Ansible, Git, and Kubernetes alongside automated alerts for idle and oversized resources.'
      : 'Tích hợp mượt mà Terraform, Ansible, Git, Kubernetes và liên tục phân tích đưa ra cảnh báo tối ưu chi phí lãng phí.',
  };

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Eyebrow Badge & H2 Headline */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột Trái (Mô tả giải pháp) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 3 Key Highlights */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight1Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight1Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight2Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight2Desc}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight3Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight3Desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Cột Phải (Video YouTube nhúng hoặc Hình ảnh) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Cloud Management Platform Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

