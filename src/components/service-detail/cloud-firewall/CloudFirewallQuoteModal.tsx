import React, { useState, useMemo } from 'react';
import { X, CheckCircle2, Shield, Send, Calculator, Cpu, Layers } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface CloudFirewallQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
  currentMarket?: SEAMarket;
}

export const CloudFirewallQuoteModal: React.FC<CloudFirewallQuoteModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const [vendor, setVendor] = useState<'Palo Alto Networks' | 'Fortinet' | 'VMware Native'>('Palo Alto Networks');
  const [hardware, setHardware] = useState<'VCF1' | 'VCF2' | 'VCF3' | 'Custom'>('VCF1');
  const [featureTier, setFeatureTier] = useState<'BASIC' | 'GOLD' | 'PLATINUM'>('BASIC');
  const [topology, setTopology] = useState<'Standalone' | 'High-Availability'>('Standalone');
  const [targetInfra, setTargetInfra] = useState<string>('Viettel Cloud Server');

  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [agreeTerms, setAgreeTerms] = useState<boolean>(true);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Calculate estimated monthly price
  const estimatedPrice = useMemo(() => {
    if (hardware === 'Custom' || vendor !== 'Palo Alto Networks') {
      return 'Liên hệ khảo sát';
    }

    const priceTable: Record<string, Record<string, number>> = {
      VCF1: { BASIC: 6600000, GOLD: 7700000, PLATINUM: 20800000 },
      VCF2: { BASIC: 9350000, GOLD: 12100000, PLATINUM: 15950000 },
      VCF3: { BASIC: 12100000, GOLD: 14575000, PLATINUM: 21175000 },
    };

    let base = priceTable[hardware]?.[featureTier] || 6600000;
    if (topology === 'High-Availability') {
      // 2 nodes multiplier with bundled license discount
      base = base * 1.85;
    }

    return base.toLocaleString('vi-VN') + ' VNĐ / Tháng';
  }, [vendor, hardware, featureTier, topology]);

  if (!isOpen) return null;

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
            <span>Viettel Cloud Firewall • ML-Powered NGFW</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {isLaos ? 'Request Cloud Firewall Consultation' : 'Đăng Ký Tư Vấn & Nhận Dự Toán Viettel Cloud Firewall'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
            {selectedPlan
              ? `Gói dịch vụ đang quan tâm: ${selectedPlan}`
              : 'Đội ngũ chuyên gia an ninh mạng Viettel IDC sẽ liên hệ và tư vấn mô hình bảo mật tối ưu trong vòng 15 phút.'}
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
                Cảm ơn Quý khách <strong className="text-slate-900">{fullName || 'Quý khách'}</strong> ({companyName || 'Doanh nghiệp'}). Đội ngũ kỹ sư an ninh mạng Viettel IDC sẽ liên hệ ngay qua số <strong className="text-slate-900">{phone}</strong> để tư vấn chi tiết cấu hình tường lửa.
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
              
              {/* Option 1: Hãng công nghệ */}
              <div>
                <label className="block font-bold text-slate-900 mb-1.5">
                  Hãng công nghệ lựa chọn <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {(['Palo Alto Networks', 'Fortinet', 'VMware Native'] as const).map((v) => (
                    <VIDCNativeButton
                      key={v}
                      type="button"
                      onClick={() => setVendor(v)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer font-bold text-xs ${
                        vendor === v
                          ? 'border-[var(--vidc-color-brand-red)] bg-red-50 text-[var(--vidc-color-brand-red)] shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {v}
                    </VIDCNativeButton>
                  ))}
                </div>
              </div>

              {/* Option 2 & 3: Cấu hình phần cứng & Gói tính năng */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-900 mb-1.5">
                    Cấu hình phần cứng dự kiến
                  </label>
                  <VIDCNativeSelect
                    value={hardware}
                    onChange={(e) => setHardware(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent text-xs"
                  >
                    <option value="VCF1">VCF1 (2 vCPU / 7 GB RAM / 60 GB SSD)</option>
                    <option value="VCF2">VCF2 (3 vCPU / 7 GB RAM / 60 GB SSD)</option>
                    <option value="VCF3">VCF3 (4 vCPU / 9 GB RAM / 60 GB SSD)</option>
                    <option value="Custom">Tùy chỉnh riêng (Enterprise / Telco)</option>
                  </VIDCNativeSelect>
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1.5">
                    Gói tính năng bảo mật
                  </label>
                  <VIDCNativeSelect
                    value={featureTier}
                    onChange={(e) => setFeatureTier(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent text-xs"
                  >
                    <option value="BASIC">Gói BASIC (App-ID, User-ID, VPN)</option>
                    <option value="GOLD">Gói GOLD (+ Anti-Virus, Anti-Spyware, IPS)</option>
                    <option value="PLATINUM">Gói PLATINUM (+ WildFire APT, URL, DNS)</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              {/* Option 4 & 5: Mô hình & Hạ tầng */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-900 mb-1.5">
                    Mô hình kiến trúc triển khai
                  </label>
                  <VIDCNativeSelect
                    value={topology}
                    onChange={(e) => setTopology(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent text-xs"
                  >
                    <option value="Standalone">Standalone (01 thiết bị đơn lẻ)</option>
                    <option value="High-Availability">High-Availability (Active-Passive HA)</option>
                  </VIDCNativeSelect>
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1.5">
                    Hạ tầng đám mây áp dụng
                  </label>
                  <VIDCNativeSelect
                    value={targetInfra}
                    onChange={(e) => setTargetInfra(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:border-transparent text-xs"
                  >
                    <option value="Viettel Cloud Server">Viettel Cloud Server</option>
                    <option value="Viettel vVPC / vDPC">Viettel vVPC / vDPC (Đám mây riêng)</option>
                    <option value="On-Premises Hybrid">Mô hình Hybrid On-Premises & Cloud</option>
                    <option value="Khác">Khác / Chưa có hạ tầng</option>
                  </VIDCNativeSelect>
                </div>
              </div>

              {/* Cost Estimator Box */}
              <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between border border-slate-800">
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Ước tính ngân sách license:</div>
                    <div className="font-extrabold text-sm text-emerald-400 font-mono">
                      {estimatedPrice}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400">Chưa VAT</span>
              </div>

              {/* Contact Information */}
              <div className="pt-2 space-y-3">
                <div className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-500">
                  Thông Tin Liên Hệ Doanh Nghiệp
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-medium mb-1 text-xs">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeInput
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-medium mb-1 text-xs">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeInput
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0912 345 678"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-medium mb-1 text-xs">
                      Email doanh nghiệp <span className="text-red-500">*</span>
                    </label>
                    <VIDCNativeInput
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-medium mb-1 text-xs">
                      Tên Doanh nghiệp / Tổ chức
                    </label>
                    <VIDCNativeInput
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Công ty Cổ phần ABC"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1 text-xs">
                    Ghi chú yêu cầu kiến trúc bảo mật
                  </label>
                  <VIDCNativeTextarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mô tả số lượng kết nối VPN, lưu lượng mong muốn hoặc mô hình hệ thống..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[var(--vidc-color-brand-red)] focus:outline-none text-xs"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <VIDCNativeButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[var(--vidc-button-primary-background-default)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Đang xử lý yêu cầu...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>GỬI YÊU CẦU & NHẬN BÁO GIÁ CHÍNH THỨC</span>
                    </>
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
