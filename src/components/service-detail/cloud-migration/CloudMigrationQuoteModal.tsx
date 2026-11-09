import React, { useState, useEffect, useId } from 'react';
import { X, Send, CheckCircle2, Loader2, ArrowRight, ShieldCheck, Database, Server, Cloud } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface CloudMigrationQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  customNotes?: string;
  currentMarket?: SEAMarket;
}

export const CloudMigrationQuoteModal: React.FC<CloudMigrationQuoteModalProps> = ({
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
    migrationSource: 'public-cloud',
    estimatedScale: '1-10-vm',
    notes: customNotes,
    nd13Consent: false,
  });

  const fullNameId = useId();
  const phoneId = useId();
  const workEmailId = useId();
  const companyNameId = useId();
  const migrationSourceId = useId();
  const estimatedScaleId = useId();
  const notesId = useId();
  const nd13ConsentId = useId();

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
      setErrorMsg(isLaos 
        ? 'Please fill in required fields (*): Full Name, Phone, and Work Email.' 
        : 'Vui lòng nhập đầy đủ thông tin bắt buộc (*): Họ tên, Số điện thoại và Email công việc.');
      return;
    }

    if (!formData.nd13Consent) {
      setErrorMsg(isLaos 
        ? 'Please agree to the Personal Data Protection terms (Decree 13/2023/ND-CP).' 
        : 'Vui lòng xác nhận đồng ý với Điều khoản Bảo vệ dữ liệu cá nhân (Nghị định 13/2023/NĐ-CP).');
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
      className="fixed inset-0 z-[var(--vidc-z-modal)] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] border border-red-200">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                {isLaos ? 'Request Cloud Migration Consultation' : 'Đăng Ký Nhận Tư Vấn Viettel Cloud Migration'}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {isLaos ? 'Free survey, architecture blueprint & migration runbook' : 'Khảo sát hiện trạng, thiết kế kiến trúc & xây dựng kịch bản di chuyển'}
              </p>
            </div>
          </div>
          <VIDCNativeButton
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Content */}
        {submittedSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-extrabold text-slate-900">
              {isLaos ? 'Consultation Request Sent Successfully!' : 'Đăng Ký Tư Vấn Thành Công!'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              {isLaos
                ? 'Thank you! A Viettel IDC Senior Cloud Architect will contact you within 15 minutes to initiate the infrastructure assessment and discuss your migration timeline.'
                : 'Cảm ơn Quý khách! Đội ngũ chuyên gia Cloud Migration của Viettel IDC sẽ liên hệ trong vòng 15 phút để hỗ trợ khảo sát hiện trạng và tư vấn lộ trình chuyển đổi chi tiết.'}
            </p>
            <div className="pt-4">
              <VIDCNativeButton
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer"
              >
                {isLaos ? 'Close Window' : 'Đóng cửa sổ'}
              </VIDCNativeButton>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-red-600">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor={fullNameId} className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Full Name *' : 'Họ và tên *'}
                </label>
                <VIDCNativeInput
                  id={fullNameId}
                  type="text"
                  required
                  placeholder={isLaos ? 'e.g. John Doe' : 'Ví dụ: Nguyễn Văn A'}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                />
              </div>

              <div>
                <label htmlFor={phoneId} className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Phone Number *' : 'Số điện thoại *'}
                </label>
                <VIDCNativeInput
                  id={phoneId}
                  type="tel"
                  required
                  placeholder={isLaos ? 'e.g. 0901234567' : 'Ví dụ: 0988 888 888'}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor={workEmailId} className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Work Email *' : 'Email công việc *'}
                </label>
                <VIDCNativeInput
                  id={workEmailId}
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                />
              </div>

              <div>
                <label htmlFor={companyNameId} className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Company / Organization' : 'Tên doanh nghiệp / Đơn vị'}
                </label>
                <VIDCNativeInput
                  id={companyNameId}
                  type="text"
                  placeholder={isLaos ? 'Company Name' : 'Công ty Cổ phần ABC'}
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor={migrationSourceId} className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Source Environment' : 'Môi trường nguồn hiện tại'}
                </label>
                <VIDCNativeSelect
                  id={migrationSourceId}
                  value={formData.migrationSource}
                  onChange={(e) => setFormData({ ...formData, migrationSource: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                >
                  <option value="public-cloud">Public Cloud (AWS / Azure / GCP)</option>
                  <option value="on-premise-vm">Hệ thống ảo hóa On-Premise (VMware / Hyper-V)</option>
                  <option value="bare-metal">Máy chủ vật lý (Bare-Metal / Server vật lý)</option>
                  <option value="database-only">Dịch chuyển Cơ sở dữ liệu chuyên biệt (DB Migration)</option>
                  <option value="other">Nhà cung cấp Cloud khác</option>
                </VIDCNativeSelect>
              </div>

              <div>
                <label htmlFor={estimatedScaleId} className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Estimated Scale' : 'Quy mô dự kiến di chuyển'}
                </label>
                <VIDCNativeSelect
                  id={estimatedScaleId}
                  value={formData.estimatedScale}
                  onChange={(e) => setFormData({ ...formData, estimatedScale: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                >
                  <option value="1-5-vm">1 - 5 VMs / Máy chủ</option>
                  <option value="6-20-vm">6 - 20 VMs / Máy chủ</option>
                  <option value="21-50-vm">21 - 50 VMs / Máy chủ</option>
                  <option value="50-plus-vm">&gt; 50 VMs / Trung tâm dữ liệu toàn diện</option>
                </VIDCNativeSelect>
              </div>
            </div>

            <div>
              <label htmlFor={notesId} className="block text-xs font-bold text-slate-700 mb-1">
                {isLaos ? 'Project Notes / Specific Needs' : 'Yêu cầu kỹ thuật & Ghi chú bổ sung'}
              </label>
              <VIDCNativeTextarea
                id={notesId}
                rows={3}
                placeholder={isLaos ? 'Target cutover timeline, bandwidth requirements, database types...' : 'Mô tả cấu hình dự kiến, yêu cầu downtime, loại CSDL hoặc thời gian cần chuyển đổi...'}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
              />
            </div>

            {/* Decree 13 Consent */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
              <VIDCNativeInput
                id={nd13ConsentId}
                type="checkbox"
                checked={formData.nd13Consent}
                onChange={(e) => setFormData({ ...formData, nd13Consent: e.target.checked })}
                className="mt-0.5 accent-[var(--vidc-color-brand-red)] rounded cursor-pointer"
              />
              <label htmlFor={nd13ConsentId} className="text-[11px] text-slate-600 leading-snug cursor-pointer select-none">
                Tôi đồng ý cho Viettel IDC thu thập và xử lý thông tin liên hệ phục vụ tư vấn giải pháp kỹ thuật theo{' '}
                <strong className="text-slate-800">Nghị định 13/2023/NĐ-CP</strong> về bảo vệ dữ liệu cá nhân.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <VIDCNativeButton
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] disabled:opacity-60 text-white font-extrabold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{isLaos ? 'Submitting...' : 'Đang xử lý...'}</span>
                  </>
                ) : (
                  <>
                    <span>{isLaos ? 'Submit Consultation Request' : 'Gửi Yêu Cầu Nhận Tư Vấn Chuyển Đổi'}</span>
                    <Send className="w-4 h-4" />
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
