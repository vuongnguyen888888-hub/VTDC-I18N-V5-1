import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface WorkspaceUseCasesProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: (context: string) => void;
}

export const WorkspaceUseCases: React.FC<WorkspaceUseCasesProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD SCENARIOS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Typical Workspace Application Scenarios' : 'Các kịch bản ứng dụng tiêu biểu của Viettel Workspace',
    subtitle: isLaos 
      ? 'Perfectly tailored from dynamic startups to multi-branch enterprises and public institutions.'
      : 'Đáp ứng toàn diện nhu cầu từ các doanh nghiệp khởi nghiệp đến các tập đoàn đa chi nhánh và cơ quan hành chính.',
    viewDetails: isLaos ? 'Request solution architecture' : 'Nhận tư vấn giải pháp',
  };

  const useCases = [
    {
      title: isLaos ? 'Startups & SMEs' : 'Doanh nghiệp Khởi nghiệp & Doanh nghiệp Vừa và Nhỏ (SME)',
      desc: isLaos 
        ? 'Establish credible corporate brand identity with custom domain emails, high-speed company website hosting and cloud storage at minimal cost.'
        : 'Thiết lập nhận diện chuyên nghiệp với Email tên miền riêng, lưu trữ Website công ty và cộng tác tài liệu tệp tin với chi phí ban đầu tối ưu nhất.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      tag: 'Tối ưu chi phí',
    },
    {
      title: isLaos ? 'Remote Teams & Hybrid Work' : 'Mô hình Doanh nghiệp Phân tán & Làm việc Từ xa (Hybrid Work)',
      desc: isLaos 
        ? 'Enable employees across branches and remote locations to co-edit spreadsheets, access synced drive folders and attend meetings securely.'
        : 'Cho phép nhân sự làm việc tại nhà, chi nhánh hoặc khi đi công tác cùng truy cập tài liệu, chỉnh sửa bảng tính thời gian thực và trao đổi bảo mật.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      tag: 'Cộng tác mọi nơi',
    },
    {
      title: isLaos ? 'Finance, Education & Healthcare' : 'Tổ chức Tài chính, Giáo dục & Y tế cần An toàn Dữ liệu',
      desc: isLaos 
        ? 'Strictly store sensitive customer records, student files, and medical data within Vietnam Tier 3 Data Centers complying with state data residency laws.'
        : 'Lưu trữ hồ sơ khách hàng, bệnh án số và dữ liệu nhạy cảm 100% tại Data Center Việt Nam, đáp ứng tuyệt đối yêu cầu thanh tra pháp lý.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      tag: 'Tuân thủ pháp lý',
    },
    {
      title: isLaos ? 'Enterprises & Public Institutions' : 'Tập đoàn Đa chi nhánh & Doanh nghiệp Chuẩn hóa Quản trị',
      desc: isLaos 
        ? 'Centralize user identity management, enforce strict access policies, monitor audit logs, and integrate seamlessly with existing Active Directory / LDAP.'
        : 'Chuẩn hóa cấu trúc phòng ban, phân quyền truy cập đa cấp, kiểm soát chặt chẽ nhật ký thao tác và ngăn chặn thất thoát bí mật kinh doanh.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      tag: 'Quản trị tập trung',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Grid 4 Card Ứng dụng */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((item, idx) => {
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Banner Image */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img alt={item.title} src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-slate-900 backdrop-blur-xs">
                      {item.tag}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-2.5">
                    <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0">
                  <VIDCNativeButton
                    type="button"
                    onClick={() => onOpenConsult?.(`Tư vấn giải pháp Viettel Workspace cho: ${item.title}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline pt-3 border-t border-slate-200/80 w-full"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </VIDCNativeButton>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
