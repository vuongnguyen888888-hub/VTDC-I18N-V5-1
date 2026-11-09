import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Server, Building, Mail, PhoneCall, User, Calculator, ShieldCheck } from 'lucide-react';
import { ColoPackageItem, DATA_CENTERS } from './ColocationPricing';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface ColocationQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: ColoPackageItem | null;
  selectedDc?: string;
  selectedCycle?: number;
  isCustomSurvey?: boolean;
  currentMarket?: SEAMarket;
}

export const ColocationQuoteModal: React.FC<ColocationQuoteModalProps> = ({
  isOpen,
  onClose,
  selectedPackage,
  selectedDc = DATA_CENTERS[0].name,
  selectedCycle = 1,
  isCustomSurvey = false,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    workEmail: '',
    companyName: '',
    dcLocation: selectedDc,
    notes: '',
    nd13Consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Synchronize dcLocation when selectedDc changes
  useEffect(() => {
    if (selectedDc) {
      setFormData((prev) => ({ ...prev, dcLocation: selectedDc }));
    }
  }, [selectedDc]);

  // Reset states when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmittedSuccess(false);
      setErrorMsg('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName || !formData.phone || !formData.workEmail) {
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
    }, 600);
  };

  const handleClose = () => {
    setSubmittedSuccess(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[var(--vidc-z-modal)] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 id="quote-modal-title" className="text-lg font-extrabold text-slate-900 tracking-tight">
                {isCustomSurvey 
                  ? 'Đăng Ký Khảo Sát & Báo Giá Cage / Rack Riêng' 
                  : `Đăng Ký Tư Vấn & Báo Giá ${selectedPackage?.name || 'Viettel Colocation'}`}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Đội ngũ chuyên gia Data Center Viettel IDC sẵn sàng tư vấn và hỗ trợ 24/7
              </p>
            </div>
          </div>
          <VIDCNativeButton
            id="btn-close-modal"
            type="button"
            onClick={handleClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] cursor-pointer"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[82vh] overflow-y-auto">
          
          {submittedSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">
                Gửi Yêu Cầu Tư Vấn Thành Công!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Cảm ơn Quý khách <strong>{formData.fullName}</strong>. Chuyên viên giải pháp Data Center của Viettel IDC sẽ liên hệ trực tiếp qua số điện thoại <strong>{formData.phone}</strong> trong vòng 15 phút.
              </p>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-left space-y-1.5 text-slate-700 max-w-md mx-auto">
                <div className="font-bold text-slate-900">Thông tin đăng ký:</div>
                <div>• Gói cước: <span className="font-semibold text-slate-900">{selectedPackage?.name || 'Tùy biến Cage/Rack'}</span></div>
                <div>• Trung tâm dữ liệu: <span className="font-semibold text-slate-900">{formData.dcLocation}</span></div>
                {selectedPackage && (
                  <div>• Phí ước tính: <span className="font-bold text-[var(--vidc-color-brand-red)]">{selectedPackage.priceMonthly} đ/tháng</span> ({selectedCycle} tháng)</div>
                )}
              </div>

              <div className="pt-4">
                <VIDCNativeButton
                  type="button"
                  onClick={handleClose}
                  className="px-8 py-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-sm transition-colors shadow-md cursor-pointer uppercase tracking-wider"
                >
                  Hoàn thành
                </VIDCNativeButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Error Message */}
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              {/* Selected Package Summary Card */}
              {selectedPackage && !isCustomSurvey && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Cấu hình gói đã chọn:
                    </span>
                    <span className="text-xs font-extrabold text-[var(--vidc-color-brand-red)]">
                      {selectedPackage.priceMonthly} đ/tháng ({selectedCycle} tháng)
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div className="bg-white p-2 rounded-lg border border-slate-200/80">
                      <span className="text-slate-400 block text-[10px]">Không gian:</span>
                      <strong className="text-slate-800">{selectedPackage.space}</strong>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-slate-200/80">
                      <span className="text-slate-400 block text-[10px]">Công suất:</span>
                      <strong className="text-slate-800">{selectedPackage.power}</strong>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-slate-200/80">
                      <span className="text-slate-400 block text-[10px]">Băng thông:</span>
                      <strong className="text-slate-800">{selectedPackage.bandwidth}</strong>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-slate-200/80">
                      <span className="text-slate-400 block text-[10px]">IP Tĩnh:</span>
                      <strong className="text-slate-800">{selectedPackage.ip}</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Grid 2 Columns: User Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="input-fullname" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Họ và tên *</span>
                  </label>
                  <VIDCNativeInput
                    id="input-fullname"
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="input-phone" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
                    <span>Số điện thoại *</span>
                  </label>
                  <VIDCNativeInput
                    id="input-phone"
                    type="tel"
                    required
                    placeholder="0912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="input-email" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email công việc *</span>
                  </label>
                  <VIDCNativeInput
                    id="input-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent transition-all"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-1.5">
                  <label htmlFor="input-company" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>Tên Doanh nghiệp / Tổ chức</span>
                  </label>
                  <VIDCNativeInput
                    id="input-company"
                    type="text"
                    placeholder="Công ty Cổ phần ABC"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent transition-all"
                  />
                </div>

              </div>

              {/* Data Center Location */}
              <div className="space-y-1.5">
                <label htmlFor="select-dc" className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-slate-400" />
                  <span>Trung tâm dữ liệu mong muốn khảo sát / đặt máy chủ</span>
                </label>
                <VIDCNativeSelect
                  id="select-dc"
                  value={formData.dcLocation}
                  onChange={(e) => setFormData({ ...formData, dcLocation: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent transition-all bg-white"
                >
                  {DATA_CENTERS.map((dc) => (
                    <option key={dc.id} value={dc.name}>
                      {dc.name}
                    </option>
                  ))}
                </VIDCNativeSelect>
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label htmlFor="input-notes" className="text-xs font-bold text-slate-700">
                  Yêu cầu kỹ thuật chi tiết (Số lượng U, công suất điện kW, băng thông, kết nối đa ISP...)
                </label>
                <VIDCNativeTextarea
                  id="input-notes"
                  rows={3}
                  placeholder="Ví dụ: Cần đặt 2 máy chủ 2U và 1 switch mạng tại DC Hòa Lạc, công suất nguồn 1kW, cần 2 IP tĩnh..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Nghị định 13 Consent */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <VIDCNativeInput
                  id="colo-nd13-consent"
                  type="checkbox"
                  checked={formData.nd13Consent}
                  onChange={(e) => setFormData({ ...formData, nd13Consent: e.target.checked })}
                  className="mt-0.5 w-4 h-4 text-[var(--vidc-color-brand-red)] rounded border-slate-300 focus:ring-[var(--vidc-color-brand-red)]"
                />
                <label htmlFor="colo-nd13-consent" className="text-xs text-slate-600 leading-snug cursor-pointer">
                  Tôi đồng ý cho phép Viettel IDC xử lý dữ liệu cá nhân theo quy định tại <strong>Nghị định 13/2023/NĐ-CP</strong> nhằm mục đích tư vấn, báo giá và hỗ trợ dịch vụ kỹ thuật.
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <VIDCNativeButton
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 font-bold text-xs transition-colors cursor-pointer"
                >
                  Hủy bỏ
                </VIDCNativeButton>
                <VIDCNativeButton
                  id="btn-submit-colocation-quote"
                  type="submit"
                  disabled={loading}
                  className="px-7 py-2.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer uppercase tracking-wider disabled:opacity-50"
                >
                  {loading ? (
                    <span>Đang gửi thông tin...</span>
                  ) : (
                    <span>Gửi Yêu Cầu Tư Vấn</span>
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
