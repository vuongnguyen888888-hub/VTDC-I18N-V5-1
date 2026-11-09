import React, { useState } from 'react';
import { X, CheckCircle2, Building, Mail, Phone, User, MessageSquare, Cpu, ShieldCheck } from 'lucide-react';
import { GPUConfigItem } from './CloudGPUPricing';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface CloudGPUQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedConfig?: GPUConfigItem | null;
  selectedDc?: string;
  currentMarket?: SEAMarket;
}

export const CloudGPUQuoteModal: React.FC<CloudGPUQuoteModalProps> = ({
  isOpen,
  onClose,
  selectedConfig,
  selectedDc = 'Hòa Lạc',
  currentMarket,
}) => {
  const isLaos = currentMarket?.code === 'la';

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <VIDCNativeButton
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </VIDCNativeButton>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--vidc-text-primary)]">
              Đăng Ký Nhận Tư Vấn Thành Công!
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Cảm ơn Quý khách. Đội ngũ chuyên gia kiến trúc giải pháp Viettel Cloud GPU (vCGPU) sẽ liên hệ qua số điện thoại <strong>{formData.phone}</strong> và email <strong>{formData.email}</strong> trong vòng 15-30 phút làm việc.
            </p>
            <div className="pt-4">
              <VIDCNativeButton
                onClick={handleClose}
                className="px-6 py-2.5 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                Hoàn tất &amp; Đóng
              </VIDCNativeButton>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--vidc-text-primary)]">
                Đăng Ký Tư Vấn &amp; Báo Giá Viettel Cloud GPU
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-5">
              Hạ tầng điện toán tăng tốc AI &amp; HPC chuyên dụng chuẩn quốc tế ANSI/TIA-942 Rated 3
            </p>

            {/* Selected Package Banner */}
            {selectedConfig && (
              <div className="mb-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>{selectedConfig.name}</span>
                  {selectedConfig.priceMonthVnd > 0 ? (
                    <span className="text-[var(--vidc-color-brand-red)] font-extrabold">
                      {selectedConfig.priceMonthVnd.toLocaleString('vi-VN')} đ/tháng
                    </span>
                  ) : (
                    <span className="text-amber-600 font-extrabold">Báo giá theo dự án</span>
                  )}
                </div>
                <div className="text-slate-600 flex flex-wrap gap-x-3 gap-y-1">
                  <span>GPU: <strong className="text-slate-800">{selectedConfig.gpuCard}</strong></span>
                  <span>vCPU: <strong className="text-slate-800">{selectedConfig.vCpu}</strong></span>
                  <span>RAM: <strong className="text-slate-800">{selectedConfig.ram}</strong></span>
                  <span>DC: <strong className="text-slate-800">{selectedDc}</strong></span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Họ và tên *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <VIDCNativeInput
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tên Doanh nghiệp / Tổ chức *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <VIDCNativeInput
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Công ty Cổ phần ABC"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Số điện thoại liên hệ *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <VIDCNativeInput
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0988 123 456"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email công việc *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <VIDCNativeInput
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@company.com"
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Yêu cầu cụ thể về tác vụ AI / Khối lượng tính toán (Tùy chọn)
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <VIDCNativeTextarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mô tả tác vụ: LLM Fine-tuning, Computer Vision, 3D Rendering, số lượng node cần liên kết..."
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bảo mật thông tin doanh nghiệp theo tiêu chuẩn ISO 27001 &amp; Nghị định 13/2023/NĐ-CP.</span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <VIDCNativeButton
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Hủy bỏ
                </VIDCNativeButton>
                <VIDCNativeButton
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] text-white text-xs sm:text-sm font-bold shadow-md transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Đang gửi thông tin...' : 'Gửi Yêu Cầu Tư Vấn Ngay'}
                </VIDCNativeButton>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
