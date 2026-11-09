import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  FileText,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { VIDCNativeButton, VIDCNativeInput } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AccountType = 'business' | 'personal';

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [accountType, setAccountType] = useState<AccountType>('business');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Form State
  const [companyName, setCompanyName] = useState('');
  const [taxId, setTaxId] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(true);
  
  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  // Simple Password Strength Indicator
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { level: 0, label: '', color: '' };
    if (pass.length < 6) return { level: 1, label: 'Yếu', color: 'bg-red-500' };
    if (pass.length < 10 || !/[A-Z]/.test(pass) || !/[0-9]/.test(pass)) {
      return { level: 2, label: 'Trung bình', color: 'bg-amber-500' };
    }
    return { level: 3, label: 'Mạnh', color: 'bg-emerald-500' };
  };

  const strength = getPasswordStrength(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!agreeTerms) {
      setErrorMessage('Vui lòng đồng ý với Điều khoản dịch vụ và Chính sách bảo mật.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu nhập lại không khớp.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API registration call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMessage('');
    setPassword('');
    setConfirmPassword('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[var(--vidc-z-modal)] flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 pt-20 overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-xl w-full my-auto max-h-[85vh] flex flex-col overflow-y-auto text-slate-800 animate-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <VIDCNativeButton
          onClick={onClose}
          className="absolute top-3 right-3 z-20 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-1.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-300 cursor-pointer"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-4 h-4" />
        </VIDCNativeButton>

        {/* Modal Content */}
        <div className="p-6 pt-12">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900">Đăng ký thành công!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Tài khoản <span className="font-bold text-slate-900">{email}</span> đã được khởi tạo thành công trên hệ thống Viettel IDC vConsole.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left max-w-md mx-auto space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Các bước tiếp theo:</span>
                </div>
                <p>• Vui lòng kiểm tra hộp thư điện tử để kích hoạt tài khoản.</p>
                <p>• Bạn có thể dùng tài khoản này để đăng nhập vConsole, khởi tạo máy chủ Cloud Server và dùng thử 14 ngày miễn phí.</p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <VIDCAnchor
                  href="https://auth.vtidc-test.com/?redirect_uri=https://vconsole.vtidc-test.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Chuyển tới vConsole ngay</span>
                  <ArrowRight className="w-4 h-4" />
                </VIDCAnchor>

                <VIDCNativeButton
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
                >
                  Đóng cửa sổ
                </VIDCNativeButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Account Type Selector Tabs */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200/80">
                <VIDCNativeButton
                  type="button"
                  onClick={() => setAccountType('business')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${
                    accountType === 'business'
                      ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>Doanh nghiệp / Tổ chức</span>
                </VIDCNativeButton>

                <VIDCNativeButton
                  type="button"
                  onClick={() => setAccountType('personal')}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${
                    accountType === 'personal'
                      ? 'bg-white text-[var(--vidc-color-brand-red)] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>Khách hàng Cá nhân</span>
                </VIDCNativeButton>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Dynamic Fields by Account Type */}
              {accountType === 'business' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Tên Doanh nghiệp / Tổ chức <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <VIDCNativeInput
                        type="text"
                        required
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
                        placeholder="VD: CÔNG TY CỔ PHẦN VIETTEL CHT"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none focus:border-slate-400 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mã số thuế (MST) <span className="text-slate-400">*</span>
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <VIDCNativeInput
                        type="text"
                        required
                        value={taxId}
                        onChange={e => setTaxId(e.target.value)}
                        placeholder="VD: 0500589150"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none focus:border-slate-400 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Người đại diện / Người liên hệ <span className="text-slate-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <VIDCNativeInput
                        type="text"
                        required
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        placeholder="Họ và tên"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none focus:border-slate-400 focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Họ và tên <span className="text-slate-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <VIDCNativeInput
                      type="text"
                      required
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      placeholder="Nhập họ và tên đầy đủ"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none focus:border-slate-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Contact Info: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email công việc / đăng nhập <span className="text-slate-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <VIDCNativeInput
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none focus:border-slate-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Số điện thoại <span className="text-slate-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <VIDCNativeInput
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="09xx xxx xxx"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none focus:border-slate-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Passwords */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mật khẩu <span className="text-slate-400">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <VIDCNativeInput
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="Tối thiểu 8 ký tự"
                      className="w-full pl-9 pr-9 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none focus:border-slate-400 focus:bg-white transition-all"
                    />
                    <VIDCNativeButton
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </VIDCNativeButton>
                  </div>
                  {password && (
                    <div className="mt-1 flex items-center gap-1.5 text-[11px]">
                      <span className="text-slate-400">Độ mạnh:</span>
                      <div className="flex gap-1 items-center flex-1">
                        <div className={`h-1.5 flex-1 rounded-full ${strength.level >= 1 ? strength.color : 'bg-slate-200'}`} />
                        <div className={`h-1.5 flex-1 rounded-full ${strength.level >= 2 ? strength.color : 'bg-slate-200'}`} />
                        <div className={`h-1.5 flex-1 rounded-full ${strength.level >= 3 ? strength.color : 'bg-slate-200'}`} />
                      </div>
                      <span className="font-bold text-slate-600">{strength.label}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nhập lại mật khẩu <span className="text-slate-400">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <VIDCNativeInput
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                      placeholder="Xác nhận lại mật khẩu"
                      className="w-full pl-9 pr-9 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium text-slate-900 placeholder:text-slate-400 outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none focus:border-slate-400 focus:bg-white transition-all"
                    />
                    <VIDCNativeButton
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </VIDCNativeButton>
                  </div>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <VIDCNativeInput
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={e => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-[var(--vidc-color-brand-red)] focus:ring-slate-400"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    Tôi xác nhận thông tin trên là chính xác và hoàn toàn đồng ý với{' '}
                    <VIDCAnchor href="/legal/terms-of-service/" target="_blank" className="text-[var(--vidc-color-text-brand)] font-bold hover:underline">
                      Điều khoản sử dụng
                    </VIDCAnchor>{' '}
                    &amp;{' '}
                    <VIDCAnchor href="/legal/privacy-policy/" target="_blank" className="text-[var(--vidc-color-text-brand)] font-bold hover:underline">
                      Chính sách bảo mật
                    </VIDCAnchor>{' '}
                    của Viettel IDC.
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <VIDCNativeButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] active:bg-[var(--vidc-button-primary-background-active)] text-white text-sm font-extrabold shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Đang xử lý tạo tài khoản...</span>
                    </>
                  ) : (
                    <>
                      <span>ĐĂNG KÝ TÀI KHOẢN NGAY</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </VIDCNativeButton>

                <div className="text-center pt-1">
                  <VIDCAnchor
                    href="https://auth.vtidc-test.com/?redirect_uri=https://vconsole.vtidc-test.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-600 hover:text-[var(--vidc-color-text-brand)] transition-colors inline-flex items-center gap-1 font-semibold"
                  >
                    <span>Đã có tài khoản?</span>
                    <span className="text-[var(--vidc-color-text-brand)] underline font-bold">Đăng nhập vConsole</span>
                  </VIDCAnchor>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
