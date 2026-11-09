import React, { useState } from 'react';
import { X, CheckCircle2, Building, Mail, Phone, User, MessageSquare, Cpu, ShieldCheck } from 'lucide-react';
import { NPUConfigItem } from './CloudNPUPricing';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface CloudNPUQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedConfig?: NPUConfigItem | null;
  selectedDc?: string;
  currentMarket?: SEAMarket;
}

export const CloudNPUQuoteModal: React.FC<CloudNPUQuoteModalProps> = ({
  isOpen,
  onClose,
  selectedConfig,
  selectedDc = 'TTDL Hòa Lạc',
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
    }, 600);
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
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
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
              {isLaos ? 'Consultation Request Sent Successfully!' : 'Đăng Ký Nhận Tư Vấn Thành Công!'}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              {isLaos
                ? `Thank you. Viettel Cloud NPU solution architects will contact you via ${formData.phone} and ${formData.email} within 15-30 working minutes.`
                : `Cảm ơn Quý khách. Đội ngũ chuyên gia kiến trúc giải pháp Viettel Cloud NPU (vCNPU) & Qualcomm sẽ liên hệ qua số điện thoại ${formData.phone} và email ${formData.email} trong vòng 15-30 phút làm việc.`}
            </p>
            <div className="pt-4">
              <VIDCNativeButton
                onClick={handleClose}
                className="px-6 py-2.5 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
              >
                {isLaos ? 'Close Window' : 'Hoàn tất & Đóng'}
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
                {isLaos ? 'Viettel Cloud NPU Consultation & Trial' : 'Đăng Ký Tư Vấn & Trải Nghiệm Viettel Cloud NPU'}
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-5">
              Hạ tầng điện toán tăng tốc AI Inference độc quyền chip Qualcomm Cloud AI 100
            </p>

            {/* Selected Package Banner */}
            {selectedConfig && (
              <div className="mb-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                <div>
                  <div className="font-extrabold text-slate-900 flex items-center gap-2">
                    <span>{selectedConfig.name}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-[var(--vidc-color-brand-red)]">{selectedConfig.npuCard}</span>
                  </div>
                  <div className="text-slate-500 mt-0.5">
                    {selectedConfig.vCpu} / {selectedConfig.ram} / {selectedConfig.ssd} | {selectedDc}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-extrabold text-[var(--vidc-color-brand-red)] text-sm">
                    {isLaos ? `$${selectedConfig.priceMonthly}` : `${selectedConfig.priceMonthly} đ`}
                  </div>
                  <div className="text-[10px] text-slate-500">/ Tháng</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <VIDCNativeInput
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]/20 focus:border-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tên tổ chức / Doanh nghiệp <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <VIDCNativeInput
                      type="text"
                      required
                      placeholder="Công ty Cổ phần Công nghệ..."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]/20 focus:border-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email công việc <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <VIDCNativeInput
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]/20 focus:border-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Số điện thoại liên hệ <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <VIDCNativeInput
                      type="tel"
                      required
                      placeholder="0912 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]/20 focus:border-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nhu cầu bài toán AI hoặc ghi chú cấu hình
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <VIDCNativeTextarea
                    rows={3}
                    placeholder="Mô tả bài toán (CV, NLP, GenAI...), số lượng card NPU mong muốn hoặc nhu cầu thử nghiệm PoC..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]/20 focus:border-[var(--vidc-color-brand-red)] resize-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[color:var(--vidc-color-brand-red-hover)] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>Gửi Yêu Cầu Tư Vấn &amp; Dùng Thử Ngay</span>
                  )}
                </VIDCNativeButton>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Bảo mật thông tin 100% theo tiêu chuẩn ISO 27001 của Viettel IDC</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
