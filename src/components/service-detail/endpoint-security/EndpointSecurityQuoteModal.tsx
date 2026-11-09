import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Send, Sparkles } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { trackGenerateLead } from '../../../lib/analytics';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface EndpointSecurityQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  customNotes?: string;
  currentMarket?: SEAMarket;
}

export const EndpointSecurityQuoteModal: React.FC<EndpointSecurityQuoteModalProps> = ({
  isOpen,
  onClose,
  customNotes = '',
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('vm-gold');
  const [endpointCount, setEndpointCount] = useState('25');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (customNotes) {
      setNotes(customNotes);
      if (customNotes.toLowerCase().includes('basic')) setSelectedPlan('vm-basic');
      else if (customNotes.toLowerCase().includes('gold')) setSelectedPlan('vm-gold');
      else if (customNotes.toLowerCase().includes('platinum')) setSelectedPlan('vm-platinum');
      else if (customNotes.toLowerCase().includes('business')) setSelectedPlan('business');
      else if (customNotes.toLowerCase().includes('premium')) setSelectedPlan('premium');
    }
  }, [customNotes, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      trackGenerateLead('enterprise', 'viettel-endpoint-security', 'endpoint_security_quote_modal');
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[var(--vidc-legacy-hex-222225)]">
                {isLaos ? 'Endpoint Security Trial & Consultation' : 'Đăng Ký Dùng Thử & Tư Vấn Viettel Endpoint Security'}
              </h3>
              <p className="text-[11px] text-slate-500">
                GravityZone • SVA Scan Offload • Multi-OS Protection
              </p>
            </div>
          </div>

          <VIDCNativeButton
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">
                {isLaos ? 'Request Received Successfully!' : 'Đã Tiếp Nhận Thông Tin Thành Công!'}
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                {isLaos 
                  ? 'Viettel IDC cybersecurity specialists will contact you within 15 minutes to provision the trial tenant.'
                  : 'Chuyên viên an toàn thông tin Viettel IDC sẽ liên hệ qua điện thoại hoặc email trong vòng 15 phút để hỗ trợ khởi tạo tenant dùng thử.'}
              </p>
              <div className="pt-4">
                <VIDCNativeButton
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all cursor-pointer"
                >
                  {isLaos ? 'Close Window' : 'Đóng cửa sổ'}
                </VIDCNativeButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Plan Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {isLaos ? 'Select Service Package' : 'Chọn gói dịch vụ quan tâm'}
                </label>
                <VIDCNativeSelect
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                >
                  <option value="vm-basic">Viettel Endpoint Security for VM - Basic (120k/tháng)</option>
                  <option value="vm-gold">Viettel Endpoint Security for VM Gold (420k/tháng) - SVA Ready</option>
                  <option value="vm-platinum">Viettel Endpoint Security for VM Platinum (480k/tháng) - EDR</option>
                  <option value="business">Viettel Endpoint Security Business (420k/năm) - Vật lý</option>
                  <option value="premium">Viettel Endpoint Security Premium (900k/năm) - Đầy đủ</option>
                </VIDCNativeSelect>
              </div>

              {/* Endpoint Quantity */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {isLaos ? 'Estimated Number of Endpoints' : 'Số lượng Endpoint / Máy chủ dự kiến'}
                </label>
                <VIDCNativeSelect
                  value={endpointCount}
                  onChange={(e) => setEndpointCount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent"
                >
                  <option value="5-10">5 – 10 Endpoints (Thử nghiệm)</option>
                  <option value="11-50">11 – 50 Endpoints (Doanh nghiệp vừa)</option>
                  <option value="51-200">51 – 200 Endpoints (Doanh nghiệp lớn)</option>
                  <option value=">200">&gt; 200 Endpoints (Cụm Cloud / Data Center)</option>
                </VIDCNativeSelect>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Full Name' : 'Họ và tên *'}
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Phone Number' : 'Số điện thoại *'}
                  </label>
                  <VIDCNativeInput
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0912 345 678"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Corporate Email' : 'Email doanh nghiệp *'}
                  </label>
                  <VIDCNativeInput
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isLaos ? 'Organization' : 'Tên doanh nghiệp / Đơn vị'}
                  </label>
                  <VIDCNativeInput
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Công ty ABC"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isLaos ? 'Requirements / Notes' : 'Yêu cầu kỹ thuật / Hạ tầng hiện tại'}
                </label>
                <VIDCNativeTextarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ví dụ: Đang dùng 30 máy ảo VMware vCS và 50 máy trạm Windows..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002b)] text-white font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Đang gửi thông tin...</span>
                  ) : (
                    <>
                      <span>{isLaos ? 'SUBMIT TRIAL REQUEST' : 'GỬI ĐĂNG KÝ DÙNG THỬ & TƯ VẤN'}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </VIDCNativeButton>
              </div>

              <div className="text-center">
                <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Cam kết bảo mật thông tin & triển khai thử nghiệm miễn phí</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
