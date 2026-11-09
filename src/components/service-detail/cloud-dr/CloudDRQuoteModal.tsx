import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Loader2, RefreshCw, ShieldCheck } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface CloudDRQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  customNotes?: string;
  currentMarket?: SEAMarket;
}

export const CloudDRQuoteModal: React.FC<CloudDRQuoteModalProps> = ({
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
    drModel: 'cloud-to-cloud',
    hypervisor: 'vmware',
    scaleVms: '1-5',
    storageEstimate: '2000',
    notes: customNotes,
    nd13Consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const isLaos = currentMarket?.code !== 'vn';

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
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                {isLaos ? 'Request Viettel Cloud DR (DRaaS) Quotation' : 'Đăng Ký Tư Vấn & Báo Giá Viettel Cloud DR (DRaaS)'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {isLaos ? 'Viettel IDC disaster recovery architects are available 24/7' : 'Đội ngũ chuyên gia Viettel IDC sẵn sàng khảo sát & hỗ trợ diễn tập 24/7'}
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
        {submittedSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-black text-slate-900">
              {isLaos ? 'Consultation Request Sent Successfully!' : 'Đã Tiếp Nhận Yêu Cầu Tư Vấn Viettel Cloud DR!'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              {isLaos 
                ? 'Thank you for your interest in Viettel Cloud DR (DRaaS). Our solution engineers will reach out within 15 minutes.' 
                : 'Cảm ơn Quý khách đã quan tâm đến giải pháp Viettel Cloud DR (DRaaS). Kỹ sư giải pháp Viettel IDC sẽ liên hệ trong vòng 15 phút để tư vấn kịch bản diễn tập và dự toán chi phí chi tiết.'}
            </p>
            <div className="pt-2">
              <VIDCNativeButton
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] text-white text-xs font-black hover:opacity-90 transition-opacity cursor-pointer"
              >
                {isLaos ? 'Close Window' : 'Đóng cửa sổ'}
              </VIDCNativeButton>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 text-xs">
            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-[var(--vidc-color-brand-red)] font-bold">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {isLaos ? 'Full Name *' : 'Họ và tên *'}
                </label>
                <VIDCNativeInput
                  type="text"
                  required
                  placeholder={isLaos ? 'Nguyen Van A' : 'Nguyễn Văn A'}
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-hidden text-slate-800"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {isLaos ? 'Phone Number *' : 'Số điện thoại *'}
                </label>
                <VIDCNativeInput
                  type="tel"
                  required
                  placeholder="0988xxxxxx"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-hidden text-slate-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {isLaos ? 'Work Email *' : 'Email công việc *'}
                </label>
                <VIDCNativeInput
                  type="email"
                  required
                  placeholder="name@company.vn"
                  value={formData.workEmail}
                  onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-hidden text-slate-800"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {isLaos ? 'Company / Organization' : 'Tên Doanh nghiệp / Tổ chức'}
                </label>
                <VIDCNativeInput
                  type="text"
                  placeholder={isLaos ? 'Viettel Corporation' : 'Công ty Cổ phần ABC'}
                  value={formData.companyName}
                  onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-hidden text-slate-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {isLaos ? 'DR Architecture' : 'Mô hình triển khai'}
                </label>
                <VIDCNativeSelect
                  value={formData.drModel}
                  onChange={e => setFormData({ ...formData, drModel: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[var(--vidc-color-brand-red)] outline-hidden text-slate-800 bg-white"
                >
                  <option value="cloud-to-cloud">Cloud to Cloud (Zone A - B)</option>
                  <option value="onprem-to-cloud">On-Premise to Cloud</option>
                  <option value="multi-cloud">Hybrid / Multi-Cloud</option>
                </VIDCNativeSelect>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {isLaos ? 'Virtualization' : 'Nền tảng ảo hóa'}
                </label>
                <VIDCNativeSelect
                  value={formData.hypervisor}
                  onChange={e => setFormData({ ...formData, hypervisor: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[var(--vidc-color-brand-red)] outline-hidden text-slate-800 bg-white"
                >
                  <option value="vmware">VMware vSphere</option>
                  <option value="hyperv">Microsoft Hyper-V</option>
                  <option value="mixed">Kết hợp cả hai / Khác</option>
                </VIDCNativeSelect>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {isLaos ? 'Estimated VMs' : 'Số lượng máy chủ VM'}
                </label>
                <VIDCNativeSelect
                  value={formData.scaleVms}
                  onChange={e => setFormData({ ...formData, scaleVms: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[var(--vidc-color-brand-red)] outline-hidden text-slate-800 bg-white"
                >
                  <option value="1-5">1 - 5 VMs</option>
                  <option value="5-10">5 - 10 VMs</option>
                  <option value="10-30">10 - 30 VMs</option>
                  <option value="30+">&gt; 30 VMs (Doanh nghiệp lớn)</option>
                </VIDCNativeSelect>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                {isLaos ? 'Notes & Specific DR Requirements' : 'Ghi chú nhu cầu hoặc kịch bản diễn tập cần hỗ trợ'}
              </label>
              <VIDCNativeTextarea
                rows={3}
                placeholder={isLaos ? 'E.g. We require RTO under 10 minutes for our Oracle DB...' : 'Ví dụ: Cần thiết lập dự phòng cho cụm ERP, yêu cầu RTO 10 phút, hỗ trợ diễn tập định kỳ...'}
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-hidden text-slate-800 resize-none"
              />
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <VIDCNativeInput
                type="checkbox"
                id="dr-nd13-consent"
                checked={formData.nd13Consent}
                onChange={e => setFormData({ ...formData, nd13Consent: e.target.checked })}
                className="mt-0.5 rounded border-slate-300 text-[var(--vidc-color-brand-red)] focus:ring-[var(--vidc-color-brand-red)] cursor-pointer"
              />
              <label htmlFor="dr-nd13-consent" className="text-[11px] text-slate-600 leading-tight cursor-pointer">
                {isLaos 
                  ? 'I agree to the Personal Data Protection terms (Decree 13/2023/ND-CP) and authorize Viettel IDC to contact me regarding DRaaS solutions.' 
                  : 'Tôi đồng ý với Điều khoản Bảo vệ dữ liệu cá nhân theo Nghị định 13/2023/NĐ-CP và cho phép Viettel IDC liên hệ tư vấn giải pháp DR.'}
              </label>
            </div>

            <div className="pt-2">
              <VIDCNativeButton
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Đang gửi thông tin...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{isLaos ? 'SUBMIT CONSULTATION REQUEST' : 'GỬI YÊU CẦU TƯ VẤN & BÁO GIÁ'}</span>
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
