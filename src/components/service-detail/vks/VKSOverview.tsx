import React from 'react';
import { CheckCircle2, ShieldCheck, Play } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface VKSOverviewProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const VKSOverview: React.FC<VKSOverviewProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos 
      ? 'Comprehensive Container Platform – Accelerating Enterprise Digital Transformation'
      : 'Nền Tảng Container Hóa Toàn Diện – Tăng Tốc Chuyển Đổi Số Doanh Nghiệp',
    desc1: isLaos
      ? 'Viettel Kubernetes Service (vKS) delivers a fully managed Kubernetes runtime on top of Viettel IDC enterprise cloud infrastructure, cutting management overhead and operational complexity.'
      : 'Viettel Kubernetes Service (vKS) là giải pháp dịch vụ nền tảng (PaaS) phát triển trên mã nguồn mở Kubernetes tiêu chuẩn CNCF, cung cấp môi trường ảo hóa lớp OS hoàn chỉnh giúp đóng gói, tự động triển khai, mở rộng và quản lý vòng đời ứng dụng container ở quy mô lớn.',
    desc2: isLaos
      ? 'Compliant with G-Cloud standards, ISO 9001, ISO 27001, ISO 27017, ISO 27701 and Level 3 Information Security standards, satisfying the strict requirements of state administrative agencies, financial organizations, and digital enterprises.'
      : 'Hệ thống đạt chứng nhận G-Cloud, ISO 9001, ISO 27001, ISO 27017, ISO 27701 và tiêu chuẩn An toàn thông tin Cấp độ 3 của Bộ Thông tin & Truyền thông, đáp ứng trọn vẹn yêu cầu khắt khe của cơ quan quản lý nhà nước, khối tài chính - ngân hàng và doanh nghiệp số.',
    highlight1Title: isLaos ? 'Multi-Tier Automated Autoscaling' : 'Tự động mở rộng đa tầng (Autoscaling)',
    highlight1Desc: isLaos
      ? 'Seamless horizontal and vertical pod autoscaling (HPA/VPA) combined with dynamic Cluster Autoscaler adding/removing nodes instantly.'
      : 'Hỗ trợ linh hoạt cả 3 cơ chế: Horizontal Pod Autoscaler (HPA), Vertical Pod Autoscaler (VPA) và Cluster Autoscaler tự động tăng giảm worker nodes theo nhu cầu lưu lượng.',
    highlight2Title: isLaos ? 'Automated Self-Healing' : 'Tự phục hồi và tự chữa lành (Self-healing)',
    highlight2Desc: isLaos
      ? 'Continuously checks node and pod health states, automatically replacing failed containers and restarting services without human intervention.'
      : 'Liên tục giám sát sức khỏe container và worker node; tự động khởi động lại container bị lỗi, điều phối lại Pod sang node an toàn mà không làm gián đoạn người dùng.',
    highlight3Title: isLaos ? 'Instant Cluster Provisioning' : 'Khởi tạo và cấu hình tức thì',
    highlight3Desc: isLaos
      ? 'Provision production-grade clusters in minutes with pre-configured Ingress Controllers, CSI Storage, Kubeconfig, and Calico CNI.'
      : 'Cung cấp cụm Kubernetes sẵn sàng sản xuất chỉ sau vài phút với Ingress Controller, StorageClass NFS PV, Kubeconfig và mạng Calico CNI thiết lập tự động.',
    highlight4Title: isLaos ? 'Multi-Layer Enterprise Security' : 'Bảo mật đa lớp theo chuẩn Enterprise',
    highlight4Desc: isLaos
      ? 'RBAC role-based access control, isolated VPC networks, automated CVE vulnerability image scanning, and full data sovereignty in Vietnam.'
      : 'Phân quyền kiểm soát truy cập RBAC, cô lập mạng trong mạng ảo riêng (vVPC), tích hợp quét lỗ hổng ảnh container và cam kết 100% chủ quyền dữ liệu trong nước.',
  };

  return (
    <section 
      id="overview" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Eyebrow Badge & H2 Headline - Exactly like CloudServerOverview */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Cột Trái (Mô tả giải pháp & Key Highlights) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {t.desc1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.desc2}
            </p>

            {/* 4 Key Highlights - Exactly formatted like CloudServerOverview */}
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

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--vidc-legacy-hex-222225)]">{t.highlight4Title}</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {t.highlight4Desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Cột Phải (Khung Video / Mô phỏng kiến trúc 16:9) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/9] w-full rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group">
              {/* Architecture Diagram Visualization with live interactive badge */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono text-slate-400 ml-2">vks-cluster-architecture.k8s</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    CNCF Certified v1.31
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 my-auto text-center">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Control Plane</div>
                    <div className="text-xs font-bold text-white">Master Nodes (HA)</div>
                    <div className="text-[10px] text-emerald-400 mt-1">etcd Auto-sync</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20">
                    <div className="text-[10px] text-red-400 uppercase font-bold tracking-wider mb-1">Core Network</div>
                    <div className="text-xs font-bold text-white">Calico CNI + Ingress</div>
                    <div className="text-[10px] text-slate-300 mt-1">2 Public IP + L4/L7</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Persistent Storage</div>
                    <div className="text-xs font-bold text-white">NFS / CSI Driver</div>
                    <div className="text-[10px] text-emerald-400 mt-1">NVMe/SSD Cache</div>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>kubectl get nodes -o wide</span>
                  <span className="text-emerald-400">Status: Ready (SLA 99.99%)</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
