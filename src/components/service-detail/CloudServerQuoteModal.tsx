import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, Loader2, Building, User, Mail, PhoneCall, Calculator } from 'lucide-react';
import { EstimatorConfig } from './CloudServerEstimator';
import { SEAMarket } from '../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface CloudServerQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedConfig: EstimatorConfig | null;
  estimatedTotal?: number;
  currency?: string;
  currentMarket?: SEAMarket;
  customNotes?: string;
}

export const CloudServerQuoteModal: React.FC<CloudServerQuoteModalProps> = ({
  isOpen,
  onClose,
  selectedConfig,
  estimatedTotal = 0,
  currency = 'VND',
  currentMarket,
  customNotes,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    workEmail: '',
    companyName: '',
    region: 'north',
    useCase: 'web_app',
    notes: customNotes || '',
    nd13Consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Reset states when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmittedSuccess(false);
      setErrorMsg('');
      if (customNotes) {
        setFormData(prev => ({ ...prev, notes: customNotes }));
      }
    }
  }, [isOpen, customNotes]);

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

    // Simulate API call to POST /api/leads
    setTimeout(() => {
      setLoading(false);
      setSubmittedSuccess(true);
    }, 600);
  };

  const formatCurrency = (val: number) => {
    if (currency === 'VND') {
      return new Intl.NumberFormat('vi-VN').format(val) + ' VNĐ';
    }
    return '$' + new Intl.NumberFormat('en-US', { minimumFractionDigits: 0 }).format(val) + ' USD';
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
                Đăng Ký Tư Vấn &amp; Báo Giá Viettel Cloud Server
              </h3>
              <p className="text-xs text-slate-500 font-medium">Đội ngũ chuyên gia Viettel IDC sẵn sàng tư vấn giải pháp 24/7</p>
            </div>
          </div>
          <VIDCNativeButton
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
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
              <h4 className="text-2xl font-extrabold text-slate-900">Gửi Yêu Cầu Tư Vấn Thành Công!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Cảm ơn Quý khách <strong>{formData.fullName}</strong>. Chuyên viên giải pháp Viettel IDC sẽ liên hệ trực tiếp qua số điện thoại <strong>{formData.phone}</strong> trong vòng 15 phút.
              </p>
              <div className="pt-4">
                <VIDCNativeButton
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-sm transition-colors shadow-md"
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

              {/* Input Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Họ và tên người liên hệ <span className="text-[var(--vidc-color-brand-red)]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3 inset-y-0 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <VIDCNativeInput
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full pl-9 pr-3 py-2.5 bg-white text-slate-900 placeholder:text-slate-400 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Số điện thoại di động / Zalo <span className="text-[var(--vidc-color-brand-red)]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3 inset-y-0 flex items-center pointer-events-none text-slate-400">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <VIDCNativeInput
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="098x xxx xxx"
                      className="w-full pl-9 pr-3 py-2.5 bg-white text-slate-900 placeholder:text-slate-400 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email công việc <span className="text-[var(--vidc-color-brand-red)]">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3 inset-y-0 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <VIDCNativeInput
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-white text-slate-900 placeholder:text-slate-400 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Tên Doanh nghiệp / Tổ chức
                  </label>
                  <div className="relative flex items-center">
                    <div className="absolute left-3 inset-y-0 flex items-center pointer-events-none text-slate-400">
                      <Building className="w-4 h-4" />
                    </div>
                    <VIDCNativeInput
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Công ty TNHH ABC"
                      className="w-full pl-9 pr-3 py-2.5 bg-white text-slate-900 placeholder:text-slate-400 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Khu vực đặt máy chủ (Data Center)
                  </label>
                  <VIDCNativeSelect
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white text-slate-900 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  >
                    <option value="north">Miền Bắc — Data Center Hà Nội</option>
                    <option value="central">Miền Trung — Data Center Đà Nẵng</option>
                    <option value="south">Miền Nam — Data Center TP. Hồ Chí Minh</option>
                  </VIDCNativeSelect>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Mục đích sử dụng chính
                  </label>
                  <VIDCNativeSelect
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white text-slate-900 text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  >
                    <option value="web_app">Ứng dụng Web / Cổng thông tin</option>
                    <option value="erp_crm">Hệ thống Quản trị ERP / CRM / SAP</option>
                    <option value="database">Cơ sở dữ liệu lớn (Database Server)</option>
                    <option value="e-commerce">Sàn Thương mại điện tử / Bán hàng</option>
                    <option value="backup_storage">Lưu trữ / Sao lưu / Disaster Recovery</option>
                    <option value="custom">Giải pháp tùy chỉnh đặc thù khác</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Ghi chú thông số &amp; Yêu cầu kỹ thuật chi tiết
                </label>
                <VIDCNativeTextarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Nhập thông tin tại đây..."
                  className="w-full p-3 bg-white text-slate-900 placeholder:text-slate-400 placeholder:font-normal text-sm border border-slate-300 rounded-lg focus:outline-none focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                />
              </div>

              {/* NĐ 13 Consent Checkbox */}
              <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <VIDCNativeInput
                  id="nd13-consent-modal"
                  type="checkbox"
                  checked={formData.nd13Consent}
                  onChange={(e) => setFormData({ ...formData, nd13Consent: e.target.checked })}
                  className="mt-1 w-4 h-4 text-[var(--vidc-color-brand-red)] bg-white border-slate-300 rounded focus:ring-[var(--vidc-color-brand-red)]"
                />
                <label htmlFor="nd13-consent-modal" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                  Tôi đồng ý cho phép Viettel IDC thu thập và xử lý thông tin cá nhân trên theo quy định của <strong>Nghị định 13/2023/NĐ-CP</strong> về Bảo vệ dữ liệu cá nhân.
                </label>
              </div>

              {/* Submit Button */}
              <VIDCNativeButton
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] min-h-[46px]"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>ĐANG GỬI THÔNG TIN...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>GỬI YÊU CẦU ĐĂNG KÝ TƯ VẤN</span>
                  </>
                )}
              </VIDCNativeButton>

              {/* Trust Badges Footer */}
              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Bảo mật thông tin
                </span>
                <span>•</span>
                <span>Phản hồi trong 15 phút</span>
                <span>•</span>
                <span>Tư vấn hoàn toàn miễn phí</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
