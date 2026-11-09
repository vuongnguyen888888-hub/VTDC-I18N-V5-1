import React, { useState } from 'react';
import { CheckCircle2, Globe, Mail, HardDrive, FileText, Lock, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface WorkspaceOverviewProps {
  currentMarket?: SEAMarket;
  onOpenConsult?: () => void;
}

export const WorkspaceOverview: React.FC<WorkspaceOverviewProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';
  const [activeModule, setActiveModule] = useState<number>(0);

  const t = {
    eyebrow: isLaos ? 'SERVICE OVERVIEW' : 'TỔNG QUAN DỊCH VỤ',
    headline: isLaos 
      ? 'Unified Digital Workspace & Workplace Automation Platform'
      : 'Không gian làm việc số hợp nhất & Tối ưu vận hành doanh nghiệp',
    desc1: isLaos
      ? 'Viettel Workspace is an all-in-one digital office platform researched and built by Viettel IDC specifically for enterprises and public organizations, eliminating disjointed software and expensive cross-border licensing fees.'
      : 'Viettel Workspace là nền tảng văn phòng số hợp nhất All-in-One do Viettel IDC nghiên cứu và phát triển dành riêng cho các doanh nghiệp và tổ chức, giúp loại bỏ triệt để tình trạng sử dụng phần mềm phân mảnh và cắt giảm đáng kể chi phí bản quyền ngoại tệ.',
    desc2: isLaos
      ? '100% operated on Viettel IDC Tier 3 (TIA-942 Rated 3) Data Center infrastructure located in Vietnam, ensuring full compliance with national data privacy regulations (Decree 13/2023/ND-CP) and ISO 27001 cybersecurity certifications.'
      : 'Hệ thống vận hành 100% trên hạ tầng Trung tâm Dữ liệu đạt chuẩn quốc tế TIA-942 Rated 3 của Viettel IDC tại Việt Nam, đảm bảo tuân thủ nghiêm ngặt quy định về an toàn thông tin, Nghị định 13/2023/NĐ-CP và chứng nhận ISO 27001.',
    highlight1Title: isLaos ? 'Comprehensive 5-in-1 Suite' : 'Trọn bộ 5 công cụ thiết yếu hợp nhất',
    highlight1Desc: isLaos
      ? 'Integrates Web Hosting, Domain Email, Cloud Drive, Online Docs & Centralized IAM in one unified dashboard.'
      : 'Tích hợp toàn diện Web Hosting, Email doanh nghiệp tên miền riêng, Cloud Drive, Office Online và IAM trong một tài khoản duy nhất.',
    highlight2Title: isLaos ? '100% In-Country Data Sovereignty' : 'Bảo mật chuẩn Quốc tế & Chủ quyền số',
    highlight2Desc: isLaos
      ? 'Data is stored securely in Vietnam with automated snapshots, daily backups, and end-to-end encryption.'
      : 'Dữ liệu lưu trữ an toàn tuyệt đối tại Việt Nam, sao lưu dự phòng tự động hàng ngày và mã hóa đường truyền theo chuẩn quốc tế.',
    highlight3Title: isLaos ? 'Save up to 40% Operational Costs' : 'Tiết kiệm tới 40% chi phí vận hành',
    highlight3Desc: isLaos
      ? 'Transparent pricing in local currency, pay only for active accounts, zero hidden deployment costs.'
      : 'Thanh toán linh hoạt bằng nội tệ, không chịu rủi ro tỷ giá, chỉ trả tiền theo số lượng người dùng thực tế.',
  };

  const modules = [
    {
      id: 'email',
      name: 'Email Doanh nghiệp',
      icon: Mail,
      desc: 'Hộp thư theo tên miền riêng (@doanhnghiep.vn), tích hợp chống Spam/Phishing AI, tương thích Outlook, Webmail & Mobile App.',
      tag: 'Mail Server Riêng',
    },
    {
      id: 'drive',
      name: 'Viettel Drive',
      icon: HardDrive,
      desc: 'Lưu trữ đám mây tốc độ cao NVMe SSD, chia sẻ tệp bảo mật đa cấp độ, kiểm soát quyền truy cập và đồng bộ thời gian thực.',
      tag: 'Lưu trữ an toàn',
    },
    {
      id: 'web',
      name: 'Web Hosting & SSL',
      icon: Globe,
      desc: 'Không gian lưu trữ Website ổn định, bảo mật với chứng chỉ SSL miễn phí trọn đời, hỗ trợ WordPress, Laravel, NodeJS.',
      tag: 'SLA 99.99%',
    },
    {
      id: 'office',
      name: 'Văn phòng Trực tuyến',
      icon: FileText,
      desc: 'Soạn thảo văn bản, bảng tính, trình chiếu trực tiếp trên trình duyệt, hỗ trợ nhiều người cùng chỉnh sửa đồng thời.',
      tag: 'Cộng tác Realtime',
    },
    {
      id: 'iam',
      name: 'Quản trị & Phân quyền IAM',
      icon: Lock,
      desc: 'Bảng điều khiển tập trung cho phòng IT, phân quyền theo cấu trúc phòng ban, tạo/khóa tài khoản nhân viên tức thì.',
      tag: 'Quản trị tập trung',
    },
  ];

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
          
          {/* Cột Trái: Mô tả giải pháp & 3 Điểm nhấn */}
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

            {onOpenConsult && (
              <div className="pt-2">
                <VIDCNativeButton
                  type="button"
                  onClick={onOpenConsult}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--vidc-color-brand-red)] hover:underline"
                >
                  <span>{isLaos ? 'Explore architecture & deployment options' : 'Tìm hiểu mô hình triển khai & tư vấn kiến trúc'}</span>
                  <ArrowRight className="w-4 h-4" />
                </VIDCNativeButton>
              </div>
            )}

          </div>

          {/* Cột Phải: Kiến trúc & Khối Demo Interactive Workspace Suite */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 text-white space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-slate-400 font-mono ml-2">Viettel Workspace Unified Suite</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  TIA-942 Rated 3 Ready
                </span>
              </div>

              {/* Interactive Module Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {modules.map((mod, idx) => {
                  const Icon = mod.icon;
                  const isSelected = activeModule === idx;
                  return (
                    <VIDCNativeButton
                      key={mod.id}
                      type="button"
                      onClick={() => setActiveModule(idx)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-[var(--vidc-color-brand-red)]/15 border-[var(--vidc-color-brand-red)] text-white shadow-sm'
                          : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-[var(--vidc-color-brand-red)]' : 'text-slate-400'}`} />
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-950/60 text-slate-400">
                          {mod.tag}
                        </span>
                      </div>
                      <div className="text-xs font-bold truncate">{mod.name}</div>
                    </VIDCNativeButton>
                  );
                })}
              </div>

              {/* Active Module Detail Preview Box */}
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    {React.createElement(modules[activeModule].icon, { className: 'w-4 h-4 text-[var(--vidc-color-brand-red)]' })}
                    <span>{modules[activeModule].name}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400">
                    Kích hoạt sẵn trong gói
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {modules[activeModule].desc}
                </p>
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Hạ tầng: Viettel IDC Cloud Infrastructure</span>
                  <span className="text-slate-300 font-mono">SLA 99.99%</span>
                </div>
              </div>

              {/* Bottom Assurance Note */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>✓ Đồng bộ thời gian thực Web & Mobile</span>
                <span>✓ Miễn phí chuyển đổi dữ liệu</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
