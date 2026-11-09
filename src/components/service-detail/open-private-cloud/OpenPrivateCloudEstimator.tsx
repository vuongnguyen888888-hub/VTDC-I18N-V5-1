import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, PhoneCall, Server, HardDrive, Network, Box } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';



export interface EstimatorConfig {
  vcpu: number;
  ram: number;
  storage: number;
  ipCount: number;
  bandwidthMbps: number;
  osType: 'linux' | 'windows';
  billingCycleMonths: number;
  packageName?: string;
}

interface OpenPrivateCloudEstimatorProps {
  currentMarket: SEAMarket;
  onSelectConfigForQuote: (config: EstimatorConfig, estimatedTotal: number, currency: string) => void;
}

export const OpenPrivateCloudEstimator: React.FC<OpenPrivateCloudEstimatorProps> = ({
  currentMarket,
  onSelectConfigForQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'table' | 'quote_form'>('table');

  const termsData = [
    {
      icon: Server,
      component: 'Hạ tầng Tính toán (Compute)',
      specs: 'Cụm máy chủ vật lý chuyên dụng (CPU/RAM cấp phát riêng dưới dạng máy ảo VM)',
      privilege: 'Khởi tạo không giới hạn VM, toàn quyền phân bổ tài nguyên nội bộ',
      payment: 'Cam kết tối thiểu 12 tháng. Trả trước toàn bộ hợp đồng hoặc thanh toán định kỳ 3 tháng/lần',
    },
    {
      icon: HardDrive,
      component: 'Hệ thống Lưu trữ (Storage)',
      specs: 'Công nghệ SDS hiện đại, 100% ổ cứng SSD Gold (NVMe) hiệu năng cao',
      privilege: 'Quản trị Backup linh hoạt, tự động cân bằng tải trên toàn cụm',
      payment: 'Tích hợp theo gói cấu hình',
    },
    {
      icon: Network,
      component: 'Mạng ảo hóa (SDN Networking)',
      specs: 'Switching Layer 2, Internet Gateway, Subnet, Router, Public IP, Security Group',
      privilege: 'Tích hợp sẵn vFirewall & vLoad Balancer không tính thêm phí',
      payment: 'Tích hợp theo gói cấu hình',
    },
    {
      icon: Box,
      component: 'Nền tảng Mở rộng (PaaS)',
      specs: 'Hỗ trợ Container & Cơ sở dữ liệu phân tán',
      privilege: 'Tích hợp trực tiếp Kubernetes (VKS) và Database (VDBS) trên cụm',
      payment: 'Tính năng đi kèm dịch vụ',
    },
  ];

  const handleRequestQuote = (packageName: string) => {
    onSelectConfigForQuote({
      vcpu: 32,
      ram: 128,
      storage: 1000,
      ipCount: 4,
      bandwidthMbps: 500,
      osType: 'linux',
      billingCycleMonths: 12,
      packageName: packageName,
    }, 0, 'VND');
  };

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            BẢNG GIÁ &amp; DỰ TOÁN CHI PHÍ
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-3">
            Phương Thức Cung Cấp &amp; Dự Toán Ngân Sách Linh Hoạt
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Dịch vụ Viettel Open Private Cloud được thiết kế chuyên biệt và tùy biến theo quy mô phần cứng và kiến trúc riêng của từng doanh nghiệp. Hệ thống được bàn giao trọn gói trong vòng 24 giờ sau khi hoàn tất thỏa thuận.
          </p>
        </div>

        {/* BẢNG MÔ HÌNH CUNG CẤP & ĐIỀU KHOẢN */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-slate-100/90 text-xs font-black uppercase text-slate-800 tracking-wider border-b border-slate-200">
                  <th className="py-4 px-6 w-1/4">Thành Phần Cấu Hình</th>
                  <th className="py-4 px-6 w-1/4">Thông Số Kỹ Thuật Tiêu Chuẩn</th>
                  <th className="py-4 px-6 w-1/4">Đặc Quyền Tích Hợp Sẵn</th>
                  <th className="py-4 px-6 w-1/4">Phương Thức Thanh Toán</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {termsData.map((row, idx) => {
                  const IconComp = row.icon;
                  return (
                    <tr key={idx} className="hover:bg-slate-50/90 transition-colors">
                      <td className="py-5 px-6 font-bold text-[var(--vidc-legacy-hex-222225)] align-top bg-slate-50/30">
                        <div className="flex items-start gap-3">
                          <div className="p-1.5 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)] shrink-0 mt-0.5">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="font-extrabold text-[var(--vidc-legacy-hex-222225)]">{row.component}</span>
                        </div>
                      </td>
                      <td className="py-5 px-6 font-medium text-slate-800 align-top leading-relaxed">
                        {row.specs}
                      </td>
                      <td className="py-5 px-6 font-medium text-slate-800 align-top leading-relaxed">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{row.privilege}</span>
                        </div>
                      </td>
                      <td className="py-5 px-6 font-semibold text-slate-900 align-top leading-relaxed">
                        {row.payment}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* KHUNG YÊU CẦU BÁO GIÁ TÙY CHỈNH */}
        <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)]">
                KHUNG YÊU CẦU BÁO GIÁ TÙY CHỈNH
              </div>
              <h4 className="text-lg sm:text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                Hỗ trợ cấu hình theo yêu cầu doanh nghiệp
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Doanh nghiệp có yêu cầu đặc thù về dòng máy chủ, cấu hình CPU, RAM chuyên biệt hoặc mô hình kiến trúc riêng biệt vui lòng liên hệ bộ phận kinh doanh để nhận phương án kỹ thuật và báo giá chi tiết trong ngày.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full md:w-auto">
              <VIDCNativeButton
                type="button"
                onClick={() => handleRequestQuote('Yêu Cầu Thiết Kế Cấu Hình Open Private Cloud Theo Yêu Cầu')}
                className="px-6 py-3.5 rounded-xl bg-[color:var(--vidc-color-brand-red)] hover:bg-[var(--vidc-legacy-hex-d0002d)] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Nhận Báo Giá Trong Ngày</span>
                <ArrowRight className="w-4 h-4" />
              </VIDCNativeButton>

              <VIDCAnchor
                href="tel:18008088"
                className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-slate-300"
              >
                <PhoneCall className="w-4 h-4 text-slate-700" />
                <span>1800 8088</span>
              </VIDCAnchor>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
