import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Loader2, Calculator, Database, ShieldCheck } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface CloudObjectStorageQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: string;
  capacityGB?: number;
  multiAz?: boolean;
  currentMarket?: SEAMarket;
}

export const CloudObjectStorageQuoteModal: React.FC<CloudObjectStorageQuoteModalProps> = ({
  isOpen,
  onClose,
  selectedTier = 'gold',
  capacityGB = 500,
  multiAz = false,
  currentMarket,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    workEmail: '',
    companyName: '',
    tier: selectedTier,
    capacity: capacityGB,
    multiAz: multiAz,
    notes: '',
    nd13Consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const isLaos = currentMarket?.code === 'la';

  useEffect(() => {
    if (isOpen) {
      setSubmittedSuccess(false);
      setErrorMsg('');
      setFormData(prev => ({
        ...prev,
        tier: selectedTier || 'gold',
        capacity: capacityGB || 500,
        multiAz: multiAz || false,
      }));
    }
  }, [isOpen, selectedTier, capacityGB, multiAz]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName || !formData.phone || !formData.workEmail) {
      setErrorMsg(isLaos ? 'Please enter Full Name, Phone, and Work Email.' : 'Vui lòng nhập đầy đủ Họ tên, Số điện thoại và Email công việc (*).');
      return;
    }

    if (!formData.nd13Consent) {
      setErrorMsg(isLaos ? 'Please agree to the Personal Data Protection terms.' : 'Vui lòng đồng ý với Điều khoản Bảo vệ dữ liệu cá nhân (Nghị định 13/2023/NĐ-CP).');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmittedSuccess(true);
    }, 600);
  };

  return (
    <div 
      className="fixed inset-0 z-[var(--vidc-z-modal)] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                {isLaos ? 'Request Viettel Cloud Object Storage Quotation' : 'Đăng Ký Tư Vấn & Báo Giá Viettel Cloud Object Storage'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {isLaos ? 'Viettel IDC cloud architects are available 24/7' : 'Đội ngũ chuyên gia Viettel IDC sẵn sàng hỗ trợ 24/7'}
              </p>
            </div>
          </div>
          <VIDCNativeButton
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Content Body */}
        {submittedSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-extrabold text-slate-900">
              {isLaos ? 'Request Received Successfully!' : 'Gửi Yêu Cầu Thành Công!'}
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              {isLaos
                ? 'Thank you for your interest. A Viettel IDC storage solution specialist will contact you within 15 minutes.'
                : 'Cảm ơn Quý khách. Chuyên viên giải pháp lưu trữ Viettel IDC sẽ liên hệ trực tiếp qua số điện thoại hoặc email trong vòng 15 phút để tư vấn chi tiết.'}
            </p>
            <VIDCNativeButton
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[var(--vidc-color-brand-red)] text-white font-bold text-sm cursor-pointer"
            >
              {isLaos ? 'Close' : 'Đóng cửa sổ'}
            </VIDCNativeButton>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs font-bold text-[var(--vidc-color-brand-red)]">
                {errorMsg}
              </div>
            )}

            {/* Selected Config Summary Chip */}
            <div className="p-3 rounded-xl bg-slate-100/80 border border-slate-200 text-xs flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-700">{isLaos ? 'Selected Configuration:' : 'Cấu hình quan tâm:'}</span>
                <span className="px-2 py-0.5 rounded font-extrabold bg-white border border-slate-300 text-[var(--vidc-color-brand-red)] uppercase">
                  {formData.tier.toUpperCase()} Tier
                </span>
                <span className="font-bold text-slate-900">
                  {formData.capacity} GB ({(formData.capacity / 1000).toFixed(1)} TB)
                </span>
              </div>
              {formData.multiAz && (
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-emerald-800">
                  Multi AZ Sync
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  {isLaos ? 'Full Name *' : 'Họ và tên *'}
                </label>
                <VIDCNativeInput
                  type="text"
                  required
                  placeholder={isLaos ? 'e.g. Nguyen Van A' : 'Ví dụ: Nguyễn Văn A'}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  {isLaos ? 'Phone Number *' : 'Số điện thoại liên hệ *'}
                </label>
                <VIDCNativeInput
                  type="tel"
                  required
                  placeholder={isLaos ? 'e.g. 0988 123 456' : 'Ví dụ: 0988 123 456'}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  {isLaos ? 'Work Email *' : 'Email doanh nghiệp *'}
                </label>
                <VIDCNativeInput
                  type="email"
                  required
                  placeholder={isLaos ? 'name@company.com' : 'name@company.com'}
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">
                  {isLaos ? 'Company / Organization' : 'Tên doanh nghiệp / Tổ chức'}
                </label>
                <VIDCNativeInput
                  type="text"
                  placeholder={isLaos ? 'Company ABC' : 'Công ty ABC'}
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">
                {isLaos ? 'Specific Requirements / Notes' : 'Nhu cầu cụ thể / Ghi chú thêm'}
              </label>
              <VIDCNativeTextarea
                rows={2}
                placeholder={isLaos ? 'e.g. S3 migration, CDN integration, backup archives...' : 'Ví dụ: Cần hỗ trợ chuyển đổi từ AWS S3, tích hợp CDN, lưu trữ sao lưu định kỳ...'}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] resize-none"
              />
            </div>

            {/* ND13 Consent */}
            <label className="flex items-start gap-2 text-[11px] text-slate-600 cursor-pointer pt-1">
              <VIDCNativeInput
                type="checkbox"
                checked={formData.nd13Consent}
                onChange={(e) => setFormData({ ...formData, nd13Consent: e.target.checked })}
                className="mt-0.5 rounded border-slate-300 text-[var(--vidc-color-brand-red)] focus:ring-[var(--vidc-color-brand-red)]"
              />
              <span>
                {isLaos
                  ? 'I agree that Viettel IDC may process my personal data in accordance with Decree 13/2023/ND-CP to provide service consultation.'
                  : 'Tôi đồng ý để Viettel IDC thu thập và xử lý thông tin liên hệ phục vụ công tác tư vấn báo giá theo Nghị định 13/2023/NĐ-CP.'}
              </span>
            </label>

            {/* Submit Button */}
            <div className="pt-2">
              <VIDCNativeButton
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002b)] text-white font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-98"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{isLaos ? 'Submit Consultation Request' : 'Gửi Yêu Cầu Tư Vấn & Nhận Báo Giá'}</span>
                  </>
                )}
              </VIDCNativeButton>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
