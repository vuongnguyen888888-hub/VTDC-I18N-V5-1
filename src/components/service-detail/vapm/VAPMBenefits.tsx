import React from 'react';
import { 
  Zap, 
  Search, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Activity 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface VAPMBenefitsProps {
  currentMarket?: SEAMarket;
}

export const VAPMBenefits: React.FC<VAPMBenefitsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'CORE VALUE' : 'LỢI ÍCH CỐT LÕI',
    headline: isLaos 
      ? 'Why Choose Viettel vAPM Solution?' 
      : 'Tại sao nên lựa chọn giải pháp Viettel vAPM?',
  };

  const benefits = [
    {
      icon: Zap,
      title: isLaos ? 'Slash MTTR by up to 80%' : 'Giảm 80% thời gian xử lý sự cố (MTTR)',
      desc: isLaos
        ? 'Automated root-cause diagnostics eliminates manual log inspection, helping DevOps and IT teams resolve incidents in minutes instead of hours.'
        : 'Tự động khoanh vùng nguyên nhân gốc rễ, loại bỏ hoàn toàn việc tra cứu log thủ công, giúp đội ngũ DevOps và IT xử lý sự cố chỉ trong vài phút.',
    },
    {
      icon: Search,
      title: isLaos ? 'Code-Level Root-Cause Pinpointing' : 'Định vị nguyên nhân gốc rễ mức dòng mã',
      desc: isLaos
        ? 'Identify exact slow functions, unhandled exceptions, and lock contentions in production environments without impacting end users.'
        : 'Chỉ điểm chính xác hàm xử lý bị nghẽn, ngoại lệ chưa bắt được và lỗi khóa tài nguyên ngay trên môi trường thực tế mà không gián đoạn người dùng.',
    },
    {
      icon: Cpu,
      title: isLaos ? 'Ultra-Lightweight Agent (<4% CPU)' : 'Agent siêu nhẹ – Tiêu thụ tài nguyên cực thấp',
      desc: isLaos
        ? 'Optimized kernel-friendly instrumentation consumes negligible CPU (<4%) and memory footprint, keeping production workloads agile.'
        : 'Cơ chế thu thập dữ liệu thông minh chiếm dưới 4% CPU và dung lượng RAM cực nhỏ, đảm bảo an toàn tuyệt đối cho hệ thống trọng yếu.',
    },
    {
      icon: Layers,
      title: isLaos ? 'Centralized Multi-Cloud & K8s Management' : 'Quản trị tập trung Multi-Cloud & Kubernetes',
      desc: isLaos
        ? 'Single-pane-of-glass dashboard providing end-to-end visibility across on-premises servers, Viettel Cloud, and hybrid architectures.'
        : 'Màn hình quan sát hợp nhất toàn diện từ máy chủ vật lý, hạ tầng ảo hóa Viettel Cloud tới cụm Kubernetes và kiến trúc Hybrid Cloud.',
    },
    {
      icon: ShieldCheck,
      title: isLaos ? '24/7/365 Dedicated Managed Support' : 'Đội ngũ kỹ sư Viettel IDC ủy thác 24/7/365',
      desc: isLaos
        ? 'Around-the-clock proactive monitoring, incident triage, and quarterly performance optimization advisory from Viettel IDC experts.'
        : 'Chuyên gia Viettel IDC đồng hành trực ca 24/7, chủ động cảnh báo sớm các nguy cơ quá tải và tư vấn giải pháp tối ưu hệ thống định kỳ.',
    },
    {
      icon: Activity,
      title: isLaos ? 'Elevate Digital End-User Experience' : 'Bảo vệ doanh thu & Nâng tầm trải nghiệm số',
      desc: isLaos
        ? 'Maintain high Apdex customer satisfaction scores, eliminate silent checkout failures, and guarantee business continuity.'
        : 'Duy trì chỉ số hài lòng Apdex ở mức xuất sắc, ngăn chặn các lỗi giao dịch ngầm làm mất khách hàng và bảo vệ uy tín thương hiệu số.',
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>

                <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
