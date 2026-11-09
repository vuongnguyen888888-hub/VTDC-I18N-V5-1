import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Loader2, HardDrive, ShieldCheck } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface CloudFileStorageQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  customNotes?: string;
  currentMarket?: SEAMarket;
}

export const CloudFileStorageQuoteModal: React.FC<CloudFileStorageQuoteModalProps> = ({
  isOpen,
  onClose,
  customNotes = '',
  currentMarket,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    workEmail: '',
    companyName: '',
    storageTier: 'ssd',
    capacity: '500',
    protocol: 'both',
    notes: customNotes,
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
        notes: customNotes || prev.notes,
      }));
    }
  }, [isOpen, customNotes]);

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
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                {isLaos ? 'Request Viettel Cloud File Storage Quotation' : 'Đăng Ký Tư Vấn & Báo Giá Viettel Cloud File Storage'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {isLaos ? 'Viettel IDC cloud architects are available 24/7' : 'Đội ngũ chuyên gia Viettel IDC sẵn sàng hỗ trợ 24/7'}
              </p>
            </div>
          </div>
          <VIDCNativeButton
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {submittedSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                {isLaos ? 'Request Received Successfully!' : 'Đã Gửi Yêu Cầu Thành Công!'}
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {isLaos
                  ? 'Thank you for your interest in Viettel Cloud File Storage. A specialist from Viettel IDC will contact you within 15 minutes.'
                  : 'Cảm ơn Quý khách đã quan tâm đến dịch vụ Viettel Cloud File Storage. Chuyên viên tư vấn Viettel IDC sẽ liên hệ lại qua số điện thoại hoặc email trong vòng 15 phút.'}
              </p>
              <div className="pt-4">
                <VIDCNativeButton
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-lg bg-[var(--vidc-color-brand-red)] text-white font-bold text-sm cursor-pointer"
                >
                  {isLaos ? 'Close Window' : 'Đóng cửa sổ'}
                </VIDCNativeButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 font-medium text-xs">
                  {errorMsg}
                </div>
              )}

              {/* 2-Col: Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <VIDCNativeInput
                    type="tel"
                    required
                    placeholder="0988xxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* 2-Col: Email & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">
                    Email công việc <span className="text-red-500">*</span>
                  </label>
                  <VIDCNativeInput
                    type="email"
                    required
                    placeholder="contact@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">
                    Tên cơ quan / Doanh nghiệp
                  </label>
                  <VIDCNativeInput
                    type="text"
                    placeholder="Công ty Cổ phần ABC"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Hardware Tier & Protocol */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">
                    Phân lớp ổ đĩa mong muốn
                  </label>
                  <VIDCNativeSelect
                    value={formData.storageTier}
                    onChange={(e) => setFormData({ ...formData, storageTier: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white"
                  >
                    <option value="ssd">Lưu trữ Enterprise SSD (Hiệu năng cao)</option>
                    <option value="hdd">Lưu trữ HDD (Dung lượng lớn / Tiết kiệm)</option>
                  </VIDCNativeSelect>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">
                    Giao thức kết nối
                  </label>
                  <VIDCNativeSelect
                    value={formData.protocol}
                    onChange={(e) => setFormData({ ...formData, protocol: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500 bg-white"
                  >
                    <option value="both">Cả hai (NFS cho Linux &amp; CIFS cho Windows)</option>
                    <option value="nfs">Chỉ NFS (Môi trường Linux/Unix)</option>
                    <option value="cifs">Chỉ CIFS/SMB (Môi trường Windows Server)</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              {/* Notes or Configuration details */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700">
                  Nhu cầu chi tiết / Cấu hình mong muốn
                </label>
                <VIDCNativeTextarea
                  rows={3}
                  placeholder="Ví dụ: Cần không gian chia sẻ cho 10 máy chủ, dung lượng 2 TB SSD, thông lượng cao..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500 text-xs sm:text-sm"
                ></VIDCNativeTextarea>
              </div>

              {/* Decree 13 Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                  <VIDCNativeInput
                    type="checkbox"
                    checked={formData.nd13Consent}
                    onChange={(e) => setFormData({ ...formData, nd13Consent: e.target.checked })}
                    className="mt-0.5 rounded border-slate-300 text-[var(--vidc-color-brand-red)] focus:ring-red-500"
                  />
                  <span>
                    Tôi đồng ý cho phép Viettel IDC xử lý dữ liệu cá nhân theo quy định tại Nghị định 13/2023/NĐ-CP để nhận thông tin tư vấn và báo giá dịch vụ.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-sm transition-all shadow-md shadow-red-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Đang gửi thông tin...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{isLaos ? 'Submit Request' : 'Gửi Yêu Cầu Tư Vấn Ngay'}</span>
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
