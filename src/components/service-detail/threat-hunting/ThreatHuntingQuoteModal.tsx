import React, { useState } from 'react';
import { X, CheckCircle, Send, ShieldAlert, Crosshair } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface ThreatHuntingQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  customNotes?: string;
  currentMarket?: SEAMarket;
}

export const ThreatHuntingQuoteModal: React.FC<ThreatHuntingQuoteModalProps> = ({
  isOpen,
  onClose,
  customNotes = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedPlan, setSelectedPlan] = useState<'periodic' | 'continuous' | 'incident' | 'custom'>('continuous');
  const [endpointScale, setEndpointScale] = useState<'tier-50' | 'tier-150' | 'tier-300' | 'tier-enterprise'>('tier-150');
  const [message, setMessage] = useState(customNotes);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[var(--vidc-legacy-hex-18181a)] text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-red-500/20 text-[color:var(--vidc-color-brand-red)]">
              <Crosshair className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Đăng Ký Khảo Sát & Tư Vấn Viettel Threat Hunting</h3>
              <p className="text-xs text-slate-400">Rà soát và săn lùng mối nguy an ninh mạng nâng cao</p>
            </div>
          </div>
          <VIDCNativeButton
            onClick={handleResetAndClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-red-50 text-[var(--vidc-color-brand-red)] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                Tiếp Nhận Thông Tin Thành Công!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Đội ngũ chuyên gia an ninh mạng Viettel IDC sẽ liên hệ trực tiếp với quý khách trong vòng <strong>15 - 30 phút</strong> để trao đổi hiện trạng và hỗ trợ khảo sát hệ thống.
              </p>
              <div className="pt-4">
                <VIDCNativeButton
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002b)] text-white font-bold text-sm transition-all"
                >
                  Đóng cửa sổ
                </VIDCNativeButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Plan selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Gói dịch vụ quan tâm
                </label>
                <VIDCNativeSelect
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value as any)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                >
                  <option value="periodic">Rà Soát Định Kỳ (Periodic Threat Hunting)</option>
                  <option value="continuous">Săn Lùng Liên Tục 24/7 (Continuous Managed Hunting - Khuyên Dùng)</option>
                  <option value="incident">Chiến Dịch Khẩn Cấp / Sau Sự Cố (Incident Hunting)</option>
                  <option value="custom">May Đo Riêng Cho Tập Đoàn / Hybrid-Cloud</option>
                </VIDCNativeSelect>
              </div>

              {/* Endpoint scale */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Quy mô máy chủ / thiết bị đầu cuối (Endpoints)
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'tier-50', label: 'Dưới 50 máy chủ' },
                    { id: 'tier-150', label: '50 - 150 máy chủ' },
                    { id: 'tier-300', label: '150 - 300 máy chủ' },
                    { id: 'tier-enterprise', label: '> 300 máy chủ / Đa đám mây' },
                  ].map((item) => (
                    <VIDCNativeButton
                      key={item.id}
                      type="button"
                      onClick={() => setEndpointScale(item.id as any)}
                      className={`py-2 px-3 rounded-lg border text-left font-medium transition-all ${
                        endpointScale === item.id
                          ? 'border-[var(--vidc-color-brand-red)] bg-red-50 text-[var(--vidc-color-brand-red)] font-bold'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                    </VIDCNativeButton>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Họ và tên *
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Số điện thoại *
                  </label>
                  <VIDCNativeInput
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0912 345 678"
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email doanh nghiệp *
                  </label>
                  <VIDCNativeInput
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tên doanh nghiệp / Tổ chức
                  </label>
                  <VIDCNativeInput
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Công ty Cổ phần ABC"
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nhu cầu rà soát hoặc ghi chú thêm
                </label>
                <VIDCNativeTextarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ví dụ: Cần rà soát gấp sau khi nghi ngờ có lưu lượng C2 bất thường..."
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] resize-none"
                />
              </div>

              <VIDCNativeButton
                type="submit"
                className="w-full py-3 rounded-lg bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-cc002b)] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-red-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Gửi Yêu Cầu Khảo Sát Ngay</span>
              </VIDCNativeButton>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
