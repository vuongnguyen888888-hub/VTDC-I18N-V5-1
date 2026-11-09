import React, { useState } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, Layers } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface VCMPQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMarket?: SEAMarket;
  initialDetails?: {
    packageName?: string;
    deploymentModel?: string;
    useCase?: string;
  };
}

export const VCMPQuoteModal: React.FC<VCMPQuoteModalProps> = ({
  isOpen,
  onClose,
  currentMarket,
  initialDetails,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    cloudsConnected: '2 - 3 Cloud Providers',
    deploymentModel: initialDetails?.deploymentModel === 'onprem' ? 'On-Premises Dedicated' : 'SaaS trên Viettel Cloud',
    servicePlan: initialDetails?.packageName || 'vCMP Professional (Phổ biến nhất)',
    notes: initialDetails?.useCase ? `Quan tâm kịch bản: ${initialDetails.useCase}` : '',
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
    }, 700);
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
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                  {isLaos ? 'Register for vCMP Solution Consultation' : 'Đăng Ký Tư Vấn & Báo Giá vCMP'}
                </h3>
                <p className="text-xs text-slate-500">
                  {isLaos 
                    ? 'Viettel IDC Cloud Architects will respond within 15 minutes'
                    : 'Chuyên gia Viettel IDC sẽ phản hồi trong vòng 15 phút'}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 mt-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Full Name' : 'Họ và tên'} <span className="text-red-500">*</span>
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
                    {isLaos ? 'Phone Number' : 'Số điện thoại'} <span className="text-red-500">*</span>
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
                    {isLaos ? 'Corporate Email' : 'Email doanh nghiệp'} <span className="text-red-500">*</span>
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
                    {isLaos ? 'Company / Organization' : 'Tên doanh nghiệp / Đơn vị'}
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
                    {isLaos ? 'Deployment Model' : 'Mô hình triển khai'}
                  </label>
                  <VIDCNativeSelect
                    value={formData.deploymentModel}
                    onChange={(e) => setFormData({ ...formData, deploymentModel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-red-500/20"
                  >
                    <option value="SaaS trên Viettel Cloud">SaaS trên Viettel Cloud</option>
                    <option value="On-Premises Dedicated">Triển khai On-Premises Dedicated</option>
                  </VIDCNativeSelect>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Number of Cloud Providers' : 'Số lượng Cloud Providers'}
                  </label>
                  <VIDCNativeSelect
                    value={formData.cloudsConnected}
                    onChange={(e) => setFormData({ ...formData, cloudsConnected: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-red-500/20"
                  >
                    <option value="1 - 2 Cloud Providers">1 - 2 Cloud Providers</option>
                    <option value="3 - 5 Cloud Providers">3 - 5 Cloud Providers</option>
                    <option value="6+ Clouds & Bare Metal">6+ Clouds & Bare Metal</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Specific Requirements / Notes' : 'Yêu cầu kiến trúc / Ghi chú thêm'}
                </label>
                <VIDCNativeTextarea
                  rows={2}
                  placeholder={isLaos ? 'Describe your multi-cloud environment or tools needed...' : 'Mô tả số lượng nodes, công cụ CI/CD, hoặc hệ thống CMDB cần tích hợp...'}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-red-500/20 resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{isLaos ? 'Information is securely protected under ISO 27001' : 'Thông tin được bảo mật tuyệt đối theo tiêu chuẩn ISO 27001'}</span>
              </div>

              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 disabled:opacity-70 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? (isLaos ? 'Submitting...' : 'Đang gửi thông tin...') : (isLaos ? 'Submit Request' : 'Gửi Yêu Cầu Tư Vấn')}</span>
                </VIDCNativeButton>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
              {isLaos ? 'Request Received Successfully!' : 'Gửi Yêu Cầu Thành Công!'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              {isLaos
                ? 'Thank you for your interest in Viettel vCMP. Our multi-cloud solution architect team will contact you shortly.'
                : 'Cảm ơn quý khách đã quan tâm đến giải pháp Viettel vCMP. Chuyên gia tư vấn kiến trúc Multi-Cloud của Viettel IDC sẽ liên hệ trong ít phút.'}
            </p>
            <div className="pt-4">
              <VIDCNativeButton
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold cursor-pointer"
              >
                {isLaos ? 'Close Window' : 'Đóng cửa sổ'}
              </VIDCNativeButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
