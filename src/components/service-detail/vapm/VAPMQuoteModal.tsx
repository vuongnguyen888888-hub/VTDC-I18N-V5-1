import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, Activity } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface VAPMQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMarket?: SEAMarket;
}

export const VAPMQuoteModal: React.FC<VAPMQuoteModalProps> = ({
  isOpen,
  onClose,
  currentMarket,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    nodesCount: '1 - 5 nodes',
    environment: 'Cloud Server / VPC',
    servicePlan: 'vAPM Business',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <VIDCNativeButton
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </VIDCNativeButton>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-9 h-9 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                  Đăng Ký Tư Vấn &amp; Báo Giá vAPM
                </h3>
                <p className="text-xs text-slate-500">
                  Chuyên gia Viettel IDC sẽ phản hồi trong vòng 15 phút
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 mt-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-red-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <VIDCNativeInput
                    type="tel"
                    required
                    placeholder="0987 654 321"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-red-500/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email doanh nghiệp <span className="text-red-500">*</span>
                  </label>
                  <VIDCNativeInput
                    type="email"
                    required
                    placeholder="contact@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-red-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tên doanh nghiệp / Đơn vị
                  </label>
                  <VIDCNativeInput
                    type="text"
                    placeholder="Công ty Cổ phần ABC"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-red-500/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Gói dịch vụ quan tâm
                  </label>
                  <VIDCNativeSelect
                    value={formData.servicePlan}
                    onChange={(e) => setFormData({ ...formData, servicePlan: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[var(--vidc-color-brand-red)]"
                  >
                    <option value="vAPM Starter">vAPM Starter (1 - 5 nodes)</option>
                    <option value="vAPM Business">vAPM Business (6 - 20 nodes)</option>
                    <option value="vAPM Enterprise">vAPM Enterprise (May đo riêng)</option>
                  </VIDCNativeSelect>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Môi trường hạ tầng
                  </label>
                  <VIDCNativeSelect
                    value={formData.environment}
                    onChange={(e) => setFormData({ ...formData, environment: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[var(--vidc-color-brand-red)]"
                  >
                    <option value="Cloud Server / VPC">Cloud Server / VPC / Dedicated</option>
                    <option value="Kubernetes Cluster">Kubernetes / Microservices</option>
                    <option value="On-Premises Data Center">On-Premises Data Center</option>
                    <option value="Hybrid / Multi-Cloud">Hybrid / Multi-Cloud</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Yêu cầu kỹ thuật hoặc câu hỏi chi tiết
                </label>
                <VIDCNativeTextarea
                  rows={2}
                  placeholder="Mô tả ngôn ngữ lập trình (Java, Node, Python...), số lượng container hoặc bài toán hiệu năng đang gặp phải..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[var(--vidc-color-brand-red)] resize-none"
                />
              </div>

              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-[var(--vidc-color-brand-red)] text-white hover:bg-[var(--vidc-legacy-hex-d4002d)] font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Đang gửi thông tin...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Gửi Yêu Cầu Tư Vấn Ngay</span>
                    </>
                  )}
                </VIDCNativeButton>
              </div>

              <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bảo mật 100% thông tin theo tiêu chuẩn Viettel IDC</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-[var(--vidc-legacy-hex-222225)]">
              Yêu Cầu Đã Được Tiếp Nhận Thành Công!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Cảm ơn Quý khách. Đội ngũ chuyên gia kiến trúc giải pháp vAPM của Viettel IDC sẽ liên hệ lại qua số điện thoại <strong>{formData.phone}</strong> trong vòng 15 phút.
            </p>
            <div className="pt-4">
              <VIDCNativeButton
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Đóng Cửa Sổ
              </VIDCNativeButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
