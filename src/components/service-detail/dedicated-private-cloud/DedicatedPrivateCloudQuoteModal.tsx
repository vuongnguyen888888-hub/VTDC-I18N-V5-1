import React, { useState } from 'react';
import { X, Server, CheckCircle2, ShieldCheck, Mail, Phone, User, Building, Send, Zap } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


export interface DedicatedHpcConfigModalData {
  packageName?: string;
  clusterType?: string;
  region?: string;
}

interface DedicatedPrivateCloudQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedConfig?: DedicatedHpcConfigModalData | null;
  currency: string;
  currentMarket: SEAMarket;
}

export const DedicatedPrivateCloudQuoteModal: React.FC<DedicatedPrivateCloudQuoteModalProps> = ({
  isOpen,
  onClose,
  selectedConfig,
  currency,
  currentMarket,
}) => {
  const isLaos = currentMarket.code === 'la';

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[var(--vidc-legacy-hex-18181a)] via-[var(--vidc-legacy-hex-242730)] to-[var(--vidc-legacy-hex-18181a)] text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                {isLaos ? 'Request HPC Consultation & Quotation' : 'Đăng Ký Tư Vấn & Báo Giá Viettel HPC'}
              </h3>
              <p className="text-xs text-slate-300">
                {isLaos 
                  ? 'Viettel Dedicated Private Cloud (HPC) Solutions'
                  : 'Giải pháp Đám mây dùng riêng & Điện toán hiệu năng cao Viettel IDC'}
              </p>
            </div>
          </div>
          <VIDCNativeButton
            type="button"
            onClick={onClose}
            aria-label="Đóng"
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </VIDCNativeButton>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                {isLaos ? 'Request Received Successfully!' : 'Gửi Yêu Cầu Tư Vấn Thành Công!'}
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                {isLaos
                  ? 'Our enterprise cloud architect will contact you within 15 minutes to discuss customized sizing and POC deployment.'
                  : 'Chuyên gia giải pháp Viettel IDC sẽ liên hệ trực tiếp với Quý khách trong vòng 15 phút để tư vấn chi tiết cấu hình và hỗ trợ triển khai thử nghiệm POC.'}
              </p>
              <div className="pt-4">
                <VIDCNativeButton
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer min-h-[44px]"
                >
                  {isLaos ? 'Close Window' : 'Đóng cửa sổ'}
                </VIDCNativeButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Context Summary */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
                  <span className="font-bold text-slate-800">
                    {selectedConfig?.packageName || 'Cụm Điện Toán Hiệu Năng Cao Dedicated Private Cloud (HPC)'}
                  </span>
                </div>
                <span className="text-slate-500 font-mono text-[11px]">SLA 99.99%</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {isLaos ? 'Full Name *' : 'Họ và tên *'}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <VIDCNativeInput
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={isLaos ? 'Enter your name' : 'Nguyễn Văn A'}
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {isLaos ? 'Company / Organization *' : 'Tên doanh nghiệp / Đơn vị *'}
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <VIDCNativeInput
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder={isLaos ? 'Enterprise name' : 'Công ty Cổ phần / Viện nghiên cứu ABC'}
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {isLaos ? 'Work Email *' : 'Email công việc *'}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <VIDCNativeInput
                      type="email"
                      required
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {isLaos ? 'Phone Number *' : 'Số điện thoại liên hệ *'}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <VIDCNativeInput
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="09xx xxx xxx"
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-white border border-slate-300 rounded-xl focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {isLaos ? 'Workload Details / Special Requirements' : 'Mô tả bài toán tính toán / Yêu cầu cấu hình riêng'}
                </label>
                <VIDCNativeTextarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ví dụ: Cần cụm 4-8 Node chạy MPI/Slurm cho mô phỏng CFD, hoặc cụm GPU H100 cho huấn luyện LLM..."
                  className="w-full p-3 text-xs bg-white border border-slate-300 rounded-xl focus:border-[var(--vidc-color-brand-red)] focus:ring-1 focus:ring-[var(--vidc-color-brand-red)] outline-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bảo mật thông tin doanh nghiệp 100%</span>
                </div>

                <VIDCNativeButton
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isLaos ? 'Submit Request' : 'Gửi Yêu Cầu Tư Vấn'}</span>
                </VIDCNativeButton>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
