import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Send, Server, Cpu, Layers } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface ManagedServicesQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
  currentMarket?: SEAMarket;
}

export const ManagedServicesQuoteModal: React.FC<ManagedServicesQuoteModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const [infraType, setInfraType] = useState<string>('Cloud Server');
  const [deviceCount, setDeviceCount] = useState<string>('01 – 03 máy chủ');
  const [primaryOs, setPrimaryOs] = useState<string>('Linux (Ubuntu, CentOS, RedHat...)');
  const [addons, setAddons] = useState<string[]>([
    'Sao lưu tự động Cloud Backup',
    'Quét lỗ hổng định kỳ',
  ]);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [agreeTerms, setAgreeTerms] = useState<boolean>(true);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleToggleAddon = (addon: string) => {
    setAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-7 relative">
          <VIDCNativeButton
            type="button"
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>

          <div className="flex items-center gap-2 text-xs font-mono text-[var(--vidc-color-brand-red)] mb-2 font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[var(--vidc-color-brand-red)] animate-pulse" />
            <span>Viettel Managed Services • NOC 24/7/365</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {isLaos ? 'Request Managed Services Consultation' : 'Đăng Ký Tư Vấn Dịch Vụ Viettel Managed Services'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
            {selectedPlan
              ? `Gói dịch vụ đang quan tâm: ${selectedPlan}`
              : 'Đội ngũ chuyên gia kỹ sư quản trị sẽ liên hệ và phân tích hiện trạng hệ thống của bạn trong vòng 15 phút.'}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 max-h-[75vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">
                Gửi Yêu Cầu Thành Công!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Cảm ơn Quý khách <strong className="text-slate-900">{fullName || 'Quý khách'}</strong> ({companyName || 'Doanh nghiệp'}). Kỹ sư chuyên trách Viettel IDC sẽ liên hệ trực tiếp qua số điện thoại <strong className="text-slate-900">{phone}</strong> để khảo sát và báo giá may đo.
              </p>
              <div className="pt-4">
                <VIDCNativeButton
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs font-bold transition-all cursor-pointer"
                >
                  Đóng cửa sổ
                </VIDCNativeButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
              
              {/* Hạ tầng & Quy mô */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-900 mb-1.5">
                    Loại thiết bị / hạ tầng cần quản trị <span className="text-red-500">*</span>
                  </label>
                  <VIDCNativeSelect
                    value={infraType}
                    onChange={(e) => setInfraType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent text-xs sm:text-sm"
                  >
                    <option value="Cloud Server">Cloud Server (Máy chủ ảo)</option>
                    <option value="Máy chủ vật lý (Dedicated)">Máy chủ vật lý (Dedicated Server)</option>
                    <option value="Thiết bị mạng Router & Firewall">Thiết bị mạng Router & Firewall</option>
                    <option value="Cụm Database chuyên biệt">Cụm Database chuyên biệt (MySQL, PostgreSQL)</option>
                    <option value="Hạ tầng Hybrid kết hợp">Hạ tầng Hybrid kết hợp</option>
                  </VIDCNativeSelect>
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1.5">
                    Số lượng máy chủ / thiết bị <span className="text-red-500">*</span>
                  </label>
                  <VIDCNativeSelect
                    value={deviceCount}
                    onChange={(e) => setDeviceCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent text-xs sm:text-sm"
                  >
                    <option value="01 – 03 máy chủ">01 – 03 máy chủ / thiết bị</option>
                    <option value="04 – 10 máy chủ">04 – 10 máy chủ (Cụm VM)</option>
                    <option value="Trên 10 máy chủ">Trên 10 máy chủ / Thiết bị lớn</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              {/* Hệ điều hành chính */}
              <div>
                <label className="block font-bold text-slate-900 mb-1.5">
                  Hệ điều hành chính <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Linux (Ubuntu, CentOS, RedHat...)', 'Windows Server'].map((os) => (
                    <VIDCNativeButton
                      key={os}
                      type="button"
                      onClick={() => setPrimaryOs(os)}
                      className={`p-3 rounded-xl border text-left font-semibold text-xs transition-all flex items-center justify-between cursor-pointer ${
                        primaryOs === os
                          ? 'border-[var(--vidc-color-brand-red)] bg-red-50/50 text-[var(--vidc-color-brand-red)] font-bold'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span>{os}</span>
                      {primaryOs === os && <CheckCircle2 className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />}
                    </VIDCNativeButton>
                  ))}
                </div>
              </div>

              {/* Dịch vụ bổ trợ cần tích hợp */}
              <div>
                <label className="block font-bold text-slate-900 mb-1.5">
                  Dịch vụ bổ trợ cần tích hợp (Tùy chọn)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Sao lưu tự động Cloud Backup',
                    'Quét lỗ hổng định kỳ',
                    'Cấu hình Web & Mail Server',
                  ].map((addon) => {
                    const isChecked = addons.includes(addon);
                    return (
                      <VIDCNativeButton
                        key={addon}
                        type="button"
                        onClick={() => handleToggleAddon(addon)}
                        className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-center gap-2 cursor-pointer ${
                          isChecked
                            ? 'border-[var(--vidc-color-brand-red)] bg-red-50/30 text-slate-900 font-bold'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            isChecked
                              ? 'bg-[var(--vidc-color-brand-red)] border-[var(--vidc-color-brand-red)] text-white'
                              : 'border-slate-300'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                        <span className="leading-tight">{addon}</span>
                      </VIDCNativeButton>
                    );
                  })}
                </div>
              </div>

              {/* Thông tin liên hệ */}
              <div className="pt-2 border-t border-slate-200 space-y-4">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Thông Tin Người Liên Hệ & Doanh Nghiệp
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeInput
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Email doanh nghiệp <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeInput
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeInput
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0988 888 888"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">
                      Tên Doanh nghiệp / Đơn vị <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeInput
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Công ty Cổ phần ABC"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Ghi chú bài toán vận hành & Yêu cầu đặc thù
                  </label>
                  <VIDCNativeTextarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mô tả sự cố đang gặp phải, mô hình ứng dụng hoặc thời gian mong muốn triển khai..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] text-xs sm:text-sm resize-none"
                  />
                </div>
              </div>

              {/* Cam kết bảo mật Nghị định 13 */}
              <div className="flex items-start gap-2.5 pt-1">
                <VIDCNativeInput
                  type="checkbox"
                  id="agreeManagedTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-[var(--vidc-color-brand-red)] focus:ring-[var(--vidc-color-brand-red)] cursor-pointer"
                />
                <label htmlFor="agreeManagedTerms" className="text-[11px] text-slate-600 leading-snug cursor-pointer">
                  Tôi đồng ý cho phép Viettel IDC xử lý dữ liệu liên hệ theo quy định tại <strong>Nghị định 13/2023/NĐ-CP</strong> về bảo vệ dữ liệu cá nhân nhằm mục đích tư vấn kỹ thuật.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  disabled={isSubmitting || !agreeTerms}
                  className="w-full py-3.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] disabled:bg-slate-300 text-white font-extrabold text-sm transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Đang gửi thông tin...</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>GỬI YÊU CẦU & NHẬN TƯ VẤN CHUYÊN GIA</span>
                    </span>
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
