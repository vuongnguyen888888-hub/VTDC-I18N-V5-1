import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface OpenDedicatedPrivateCloudOverviewProps {
  currentMarket?: SEAMarket;
}

export const OpenDedicatedPrivateCloudOverview: React.FC<OpenDedicatedPrivateCloudOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos 
      ? 'Dedicated OpenStack cloud infrastructure with complete hardware isolation'
      : 'Hạ tầng đám mây mã nguồn mở OpenStack dùng riêng chuyên biệt',
    desc1: isLaos
      ? 'Viettel Open Dedicated Private Cloud (oDPC) is a dedicated cloud solution built on international standardized OpenStack Enterprise platform, providing 100% isolated compute, network, and storage resources with zero licensing cost.'
      : 'Viettel Open Dedicated Private Cloud (oDPC) là dịch vụ điện toán đám mây chuyên dụng được thiết lập riêng cho từng khách hàng trên nền tảng OpenStack Enterprise Hardened, mang đến môi trường hạ tầng tách biệt tuyệt đối về tài nguyên tính toán, mạng và lưu trữ.',
    desc2: isLaos
      ? 'Operated on Tier 3 standard (ANSI/TIA-942) Data Centers of Viettel IDC, combined with 10 Gbps SDN Mesh network and Distributed Ceph Storage, delivering outstanding data processing power and high availability with 99.99% SLA.'
      : 'Hệ thống vận hành trên hạ tầng Data Center đạt chuẩn Tier 3 (ANSI/TIA-942 Rated 3) của Viettel IDC, kết hợp cùng mạng định nghĩa phần mềm SDN 10 Gbps và lưu trữ phân tán Ceph Storage SDS, mang lại năng lực xử lý vượt trội, an toàn thông tin tuyệt đối và cam kết SLA 99.99%.',
    highlight1Title: isLaos ? '100% Dedicated Single-Tenant' : 'Hạ tầng Single-Tenant chuyên biệt 100%',
    highlight1Desc: isLaos
      ? '100% dedicated physical host, CPU, RAM, and SSD storage, completely eliminating resource contention (Noisy Neighbour).'
      : '100% tài nguyên phần cứng máy chủ, CPU, RAM và SSD lưu trữ dùng riêng, loại bỏ hoàn toàn hiện tượng tranh chấp tài nguyên (Noisy Neighbour).',
    highlight2Title: isLaos ? 'Free Integrated PaaS Ecosystem' : 'Hệ sinh thái PaaS tích hợp sẵn miễn phí',
    highlight2Desc: isLaos
      ? 'Fully integrated vLB (Load Balancer), vFW (Firewall), VKS (Kubernetes), and VDBS (Database) on the cluster with no additional license fees.'
      : 'Tích hợp trọn vẹn vLB (Cân bằng tải), vFW (Tường lửa), VKS (Kubernetes) và VDBS (Database) trên cụm mà không tốn chi phí bản quyền.',
    highlight3Title: isLaos ? 'Standard OpenStack & No Vendor Lock-in' : 'Chuẩn mở OpenStack quốc tế & No Vendor Lock-in',
    highlight3Desc: isLaos
      ? 'Customize VM flavors freely, manage via Self-Service Portal or automate with OpenStack RESTful API, Terraform, and Ansible.'
      : 'Tự do tùy biến cấu hình VM (Flavors), điều phối qua Self-Service Portal hoặc tự động hóa hạ tầng qua OpenStack RESTful API & Terraform.',
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
          
          {/* Cột Trái (Mô tả giải pháp & 3 Key Highlights chuẩn Cloud Server) */}
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

          {/* Cột Phải (Video YouTube nhúng chuẩn Cloud Server) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/8kL9kM3M2W4?autoplay=0&rel=0"
                title="Viettel Open Dedicated Private Cloud Overview"
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
