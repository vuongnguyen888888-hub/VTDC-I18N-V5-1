import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, Loader2, User, Mail, PhoneCall, Building, Briefcase } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface WorkspaceQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceContext?: string;
  currentMarket?: SEAMarket;
}

export const WorkspaceQuoteModal: React.FC<WorkspaceQuoteModalProps> = ({
  isOpen,
  onClose,
  serviceContext = 'Viettel Workspace',
  currentMarket,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    workEmail: '',
    companyName: '',
    selectedPackage: 'ws-standard',
    estimatedUsers: '20-50',
    notes: '',
    nd13Consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSubmittedSuccess(false);
      setErrorMsg('');
      if (serviceContext) {
        setFormData(prev => ({
          ...prev,
          notes: serviceContext !== 'Viettel Workspace' ? `Ghi chú yêu cầu: ${serviceContext}` : '',
        }));
      }
    }
  }, [isOpen, serviceContext]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.workEmail.trim()) {
      setErrorMsg('Vui lòng nhập đầy đủ Họ tên, Số điện thoại và Email công việc (*).');
      return;
    }

    if (!formData.nd13Consent) {
      setErrorMsg('Vui lòng đồng ý với Điều khoản Bảo vệ dữ liệu cá nhân (Nghị định 13/2023/NĐ-CP).');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmittedSuccess(true);
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 z-[var(--vidc-z-modal)] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                Đăng Ký Tư Vấn &amp; Trải Nghiệm Viettel Workspace
              </h3>
              <p className="text-xs text-slate-500 font-medium">Chuyên gia giải pháp Viettel IDC sẵn sàng tư vấn &amp; hỗ trợ chuyển đổi 24/7</p>
            </div>
          </div>
          <VIDCNativeButton
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] cursor-pointer"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 max-h-[82vh] overflow-y-auto">
          {submittedSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">Gửi Yêu Cầu Thành Công!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Cảm ơn Quý khách <strong>{formData.fullName}</strong>. Chuyên viên giải pháp Viettel Workspace sẽ liên hệ trực tiếp qua số điện thoại <strong>{formData.phone}</strong> trong vòng 15 phút để hỗ trợ báo giá và hướng dẫn dùng thử.
              </p>
              <div className="pt-4">
                <VIDCNativeButton
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-sm transition-colors shadow-md cursor-pointer"
                >
                  Hoàn tất
                </VIDCNativeButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Họ và tên *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <VIDCNativeInput
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Số điện thoại *</label>
                  <div className="relative">
                    <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <VIDCNativeInput
                      type="tel"
                      required
                      placeholder="0988 123 456"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Email công việc *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <VIDCNativeInput
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.workEmail}
                      onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Tên Doanh nghiệp / Tổ chức</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <VIDCNativeInput
                      type="text"
                      placeholder="Công ty Cổ phần ABC"
                      value={formData.companyName}
                      onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Gói quan tâm</label>
                  <VIDCNativeSelect
                    value={formData.selectedPackage}
                    onChange={e => setFormData({ ...formData, selectedPackage: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] bg-white"
                  >
                    <option value="ws-starter">Workspace Starter (5-10 users)</option>
                    <option value="ws-standard">Workspace Standard (20-50 users - Bán chạy)</option>
                    <option value="ws-pro">Workspace Pro (50-150 users)</option>
                    <option value="ws-enterprise">Workspace Enterprise (Tùy chỉnh 200+ users)</option>
                  </VIDCNativeSelect>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Quy mô nhân sự</label>
                  <VIDCNativeSelect
                    value={formData.estimatedUsers}
                    onChange={e => setFormData({ ...formData, estimatedUsers: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] bg-white"
                  >
                    <option value="under-10">Dưới 10 nhân sự</option>
                    <option value="10-50">10 - 50 nhân sự</option>
                    <option value="50-200">50 - 200 nhân sự</option>
                    <option value="above-200">Trên 200 nhân sự</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Ghi chú yêu cầu đặc biệt</label>
                <VIDCNativeTextarea
                  rows={2}
                  placeholder="Ví dụ: Cần chuyển đổi dữ liệu từ Google Workspace sang, tên miền hiện có là company.vn..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] resize-none"
                />
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <VIDCNativeInput
                    type="checkbox"
                    required
                    checked={formData.nd13Consent}
                    onChange={e => setFormData({ ...formData, nd13Consent: e.target.checked })}
                    className="mt-0.5 rounded border-slate-300 text-[var(--vidc-color-brand-red)] focus:ring-[var(--vidc-color-brand-red)] shrink-0"
                  />
                  <span className="text-[11px] text-slate-600 leading-snug">
                    Tôi đồng ý để Viettel IDC thu thập và xử lý thông tin liên hệ phục vụ tư vấn giải pháp và báo giá dịch vụ theo <strong>Nghị định 13/2023/NĐ-CP</strong>.
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] active:bg-[var(--vidc-legacy-hex-a00022)] text-white font-bold text-sm transition-all shadow-lg shadow-red-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 min-h-[44px]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Đang xử lý yêu cầu...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Gửi Đăng Ký Tư Vấn Ngay</span>
                    </>
                  )}
                </VIDCNativeButton>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
