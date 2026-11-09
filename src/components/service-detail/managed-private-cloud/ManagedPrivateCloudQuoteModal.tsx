import React, { useState } from 'react';
import { X, CheckCircle2, Building, Mail, Phone, User, MessageSquare, ShieldCheck, Server } from 'lucide-react';
import { ManagedCloudConfig } from './ManagedPrivateCloudEstimator';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface ManagedPrivateCloudQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedConfig?: ManagedCloudConfig | null;
  estimatedTotal?: number;
  currency?: string;
  currentMarket?: SEAMarket;
}

export const ManagedPrivateCloudQuoteModal: React.FC<ManagedPrivateCloudQuoteModalProps> = ({
  isOpen,
  onClose,
  selectedConfig,
  estimatedTotal = 0,
  currency = 'VND',
  currentMarket,
}) => {
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
    }, 800);
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
              Đăng Ký Tư Vấn Thành Công!
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Cảm ơn Quý khách. Đội ngũ chuyên gia kiến trúc giải pháp Viettel Managed Private Cloud sẽ liên hệ qua số điện thoại <strong>{formData.phone}</strong> và email <strong>{formData.email}</strong> trong vòng 15-30 phút làm việc.
            </p>
            <div className="pt-4">
              <VIDCNativeButton
                onClick={handleClose}
                className="px-6 py-2.5 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-red)]/90 text-white text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                Hoàn tất &amp; Đóng
              </VIDCNativeButton>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <Server className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--vidc-text-primary)]">
                Đăng Ký Tư Vấn &amp; Báo Giá Giải Pháp
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-5">
              Viettel Managed Private Cloud — Đám mây dùng riêng quản trị toàn diện 24/7/365
            </p>

            {/* Selected Package Banner */}
            {selectedConfig && (
              <div className="mb-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-[var(--vidc-text-primary)] flex items-center justify-between">
                  <span>{selectedConfig.packageName}</span>
                  <span className="text-[var(--vidc-color-brand-red)] font-bold">
                    {selectedConfig.hypervisor === 'vmware' ? 'VMware vSphere' : 'OpenStack'} · {selectedConfig.datacenter}
                  </span>
                </div>
                <div className="text-slate-500 text-[11px]">
                  {selectedConfig.nodeCount} Nodes | {selectedConfig.cpuPerNode} | {selectedConfig.ramPerNode}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Họ và tên người đại diện *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <VIDCNativeInput
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Số điện thoại liên hệ *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <VIDCNativeInput
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0988xxxxxx"
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email doanh nghiệp *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <VIDCNativeInput
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tên tổ chức / Doanh nghiệp
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <VIDCNativeInput
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Công ty Cổ phần Công nghệ XYZ"
                    className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Yêu cầu kỹ thuật hoặc ghi chú thêm
                </label>
                <div className="relative">
                  <VIDCNativeTextarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Nêu rõ yêu cầu số lượng VM, dung lượng SAN, yêu cầu di trú từ on-premise hoặc thời gian dự kiến PoC..."
                    className="w-full p-2.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-color-brand-red)]/90 text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Đang gửi thông tin...' : 'Gửi Yêu Cầu Tư Vấn & Nhận Báo Giá'}
                </VIDCNativeButton>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                Viettel IDC cam kết bảo mật 100% thông tin theo tiêu chuẩn ISO 27001 &amp; Nghị định 13/2023/NĐ-CP.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
