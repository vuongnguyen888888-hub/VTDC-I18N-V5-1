import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, Loader2, User, Mail, PhoneCall, Building, Layers } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface VKSQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceContext?: string;
  currentMarket?: SEAMarket;
}

export const VKSQuoteModal: React.FC<VKSQuoteModalProps> = ({
  isOpen,
  onClose,
  serviceContext = 'Viettel Kubernetes Service (vKS)',
  currentMarket,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    workEmail: '',
    companyName: '',
    clusterType: 'saving_standard',
    region: 'north',
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
          notes: serviceContext !== 'Viettel Kubernetes Service (vKS)' ? `Yêu cầu: ${serviceContext}` : '',
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
        
        {/* Header - Exactly like CloudServerQuoteModal */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                Đăng Ký Tư Vấn &amp; Trải Nghiệm Viettel Kubernetes (vKS)
              </h3>
              <p className="text-xs text-slate-500 font-medium">Đội ngũ kỹ sư chuyên gia Kubernetes Viettel IDC sẵn sàng hỗ trợ 24/7</p>
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
              <h4 className="text-2xl font-extrabold text-slate-900">Gửi Yêu Cầu Tư Vấn Thành Công!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Cảm ơn Quý khách <strong>{formData.fullName}</strong>. Chuyên viên giải pháp Cloud Native Viettel IDC sẽ liên hệ trực tiếp qua số điện thoại <strong>{formData.phone}</strong> trong vòng 15 phút.
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
                      placeholder="ten.ban@doanhnghiep.vn"
                      value={formData.workEmail}
                      onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Tên doanh nghiệp / Đơn vị</label>
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

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Yêu cầu tư vấn chi tiết</label>
                <VIDCNativeTextarea
                  rows={3}
                  placeholder="Mô tả cụm Kubernetes mong muốn (số lượng Worker Nodes, cấu hình vCPU/RAM, nhu cầu Ingress, CI/CD...)"
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                />
              </div>

              {/* Tuân thủ Nghị định 13/2023/NĐ-CP */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                <VIDCNativeInput
                  type="checkbox"
                  id="vks-nd13"
                  checked={formData.nd13Consent}
                  onChange={e => setFormData({ ...formData, nd13Consent: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded text-[var(--vidc-color-brand-red)] focus:ring-[var(--vidc-color-brand-red)] border-slate-300 cursor-pointer"
                />
                <label htmlFor="vks-nd13" className="text-[11px] text-slate-600 leading-relaxed cursor-pointer">
                  Tôi đồng ý cho phép Viettel IDC thu thập và xử lý thông tin cá nhân để phục vụ mục đích liên hệ tư vấn dịch vụ, tuân thủ Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân.
                </label>
              </div>

              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Đang gửi thông tin...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>GỬI YÊU CẦU TƯ VẤN</span>
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
