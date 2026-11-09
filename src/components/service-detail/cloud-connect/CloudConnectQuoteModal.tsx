import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Network, ShieldCheck } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface CloudConnectQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  customNotes?: string;
  currentMarket?: SEAMarket;
}

export const CloudConnectQuoteModal: React.FC<CloudConnectQuoteModalProps> = ({
  isOpen,
  onClose,
  customNotes = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [cloudTarget, setCloudTarget] = useState<'aws' | 'azure' | 'gcp' | 'alibaba' | 'multicloud'>('aws');
  const [bandwidthScale, setBandwidthScale] = useState<'100m' | '500m' | '1g' | '2g' | '10g+'>('1g');
  const [message, setMessage] = useState(customNotes);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (customNotes) {
      setMessage(customNotes);
    }
  }, [customNotes]);

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
        className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden text-[var(--vidc-legacy-hex-222225)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-[var(--vidc-legacy-hex-18181a)] to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[var(--vidc-color-brand-red)] flex items-center justify-center text-white">
              <Network className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">Đăng Ký Tư Vấn Viettel Cloud Connect</h3>
              <p className="text-xs text-slate-300">Khảo sát &amp; thiết kế kênh truyền Hybrid Cloud chuyên dụng</p>
            </div>
          </div>
          <VIDCNativeButton
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">Yêu Cầu Đã Được Tiếp Nhận!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Cảm ơn Quý khách. Đội ngũ chuyên gia kiến trúc mạng Viettel IDC sẽ liên hệ trong vòng 15 – 30 phút để khảo sát điểm kết nối và gửi phương án kỹ thuật chi tiết.
              </p>
              <div className="pt-4">
                <VIDCNativeButton
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-[var(--vidc-color-brand-red)] text-white text-xs font-bold hover:bg-[var(--vidc-legacy-hex-d4002d)] transition-colors"
                >
                  Đóng cửa sổ
                </VIDCNativeButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Cloud Target & Bandwidth quick options */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Đám mây kết nối
                  </label>
                  <VIDCNativeSelect
                    value={cloudTarget}
                    onChange={(e) => setCloudTarget(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:bg-white"
                  >
                    <option value="aws">AWS Direct Connect</option>
                    <option value="azure">Azure ExpressRoute</option>
                    <option value="gcp">Google Cloud Interconnect</option>
                    <option value="alibaba">Alibaba Cloud</option>
                    <option value="multicloud">Đa đám mây (Multi-Cloud)</option>
                  </VIDCNativeSelect>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Băng thông dự kiến
                  </label>
                  <VIDCNativeSelect
                    value={bandwidthScale}
                    onChange={(e) => setBandwidthScale(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:bg-white"
                  >
                    <option value="100m">50 Mbps – 100 Mbps</option>
                    <option value="500m">200 Mbps – 500 Mbps</option>
                    <option value="1g">1 Gbps (Phổ biến)</option>
                    <option value="2g">2 Gbps</option>
                    <option value="10g+">10 Gbps – 100 Gbps+</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              {/* Personal Info */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeInput
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0988xxxxxx"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email doanh nghiệp <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeInput
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contact@company.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tên tổ chức / Doanh nghiệp
                  </label>
                  <VIDCNativeInput
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Tập đoàn / Công ty..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Yêu cầu kỹ thuật hoặc ghi chú vị trí Data Center
                  </label>
                  <VIDCNativeTextarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ví dụ: Cần kết nối từ Viettel DC Pháp Vân tới AWS Singapore..."
                    className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bảo mật tuyệt đối thông tin theo chính sách quyền riêng tư Viettel IDC.</span>
              </div>

              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d4002d)] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-red-900/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Yêu Cầu Tư Vấn &amp; Khảo Sát</span>
                </VIDCNativeButton>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
