import React from 'react';
import { ArrowUpRight, Users, UserCheck, ShieldAlert } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface VirtualSocUseCasesProps {
  currentMarket?: SEAMarket;
}

export const VirtualSocUseCases: React.FC<VirtualSocUseCasesProps> = ({
  currentMarket,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD APPLICATIONS' : 'ỨNG DỤNG THỰC TẾ',
    headline: isLaos ? 'Typical Application Scenarios' : 'Các kịch bản ứng dụng tiêu biểu',
    subtitle: isLaos 
      ? 'Specialized cybersecurity architecture fulfilling stringent regulatory compliances across key enterprise sectors.'
      : 'Giải pháp an toàn thông tin chuyên biệt đáp ứng quy chuẩn khắt khe cho từng lĩnh vực hoạt động.',
    viewDetails: isLaos ? 'View details' : 'Xem chi tiết giải pháp',
    opsTitle: isLaos ? '3-Tier Operational Coordination Framework' : 'Cơ chế phối hợp vận hành 3 cấp độ (Tier 1 – Tier 2 – Tier 3)',
    opsSubtitle: isLaos
      ? 'A collaborative operational mechanism orchestrating certified Viettel cybersecurity engineers and enterprise IT personnel.'
      : 'Phân công trách nhiệm minh bạch giữa chuyên gia Viettel Cyber Security và đội ngũ quản trị CNTT doanh nghiệp.',
  };

  const useCases = [
    {
      title: isLaos ? 'Banking & Financial Institutions' : 'Ngân hàng & Tổ chức Tài chính',
      desc: isLaos 
        ? 'Real-time transaction anomaly monitoring, State Bank circular compliance, Core Banking defense, and PCI-DSS data protection.'
        : 'Giám sát giao dịch trực tuyến, đáp ứng quy định Thông tư NHNN, bảo vệ Core Banking và phòng chống rò rỉ dữ liệu thẻ thanh toán.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Government & Public Sector' : 'Cơ quan Nhà nước & Khối Công',
      desc: isLaos 
        ? 'Safeguarding multi-level information systems under Decree 85/2016/ND-CP, protecting public portals against advanced APT campaigns.'
        : 'Bảo đảm an toàn hệ thống thông tin theo cấp độ (Nghị định 85/2016/NĐ-CP), bảo vệ dịch vụ công trước các chiến dịch APT nguy hiểm.',
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'E-Commerce & Retail' : 'Thương mại Điện tử & Bán lẻ',
      desc: isLaos 
        ? 'Shielding checkout payment gateways, mitigating volumetric holiday DDoS traffic, detecting automated fraud, and securing customer PII.'
        : 'Bảo vệ cổng thanh toán, chống tấn công DDoS mùa cao điểm mua sắm, phát hiện gian lận và tuân thủ chuẩn an toàn dữ liệu thẻ.',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: isLaos ? 'Corporates & Multi-branch Enterprises' : 'Tập đoàn & Đa Chi nhánh',
      desc: isLaos 
        ? 'Centralized security monitoring across distributed hybrid servers and office endpoints, stopping lateral ransomware immediately.'
        : 'Quản trị an ninh tập trung cho hàng nghìn máy chủ và máy trạm phân tán, ngăn chặn mã độc tống tiền Ransomware tức thì.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const operationalTiers = [
    {
      role: 'Tier 1',
      provider: 'Viettel VCS',
      icon: Users,
      title: isLaos ? '24/7/365 Initial Triage & Surveillance' : 'Giám sát 24/7/365 & Sơ bộ cảnh báo',
      desc: isLaos
        ? 'Conducts continuous monitoring, analyzes baseline SIEM alerts, filters noise, and triggers initial containment per playbook.'
        : 'Thực hiện giám sát 24/7/365 và xử lý cảnh báo sơ bộ theo kịch bản chuẩn, lọc nhiễu và phát hiện sớm bất thường.',
    },
    {
      role: 'Tier 2',
      provider: isLaos ? 'Enterprise IT' : 'Khách hàng',
      icon: UserCheck,
      title: isLaos ? 'Internal Business Triage & Execution' : 'Tiếp nhận & Xử lý nghiệp vụ nội bộ',
      desc: isLaos
        ? 'Receives escalated incidents from Tier 1, validates legitimate internal traffic, executes local fixes, or escalates to Tier 3.'
        : 'Tiếp nhận sự cố từ Tier 1, trực tiếp xử lý các nghiệp vụ nội bộ thông thường và leo thang lên Tier 3 nếu cần can thiệp sâu.',
    },
    {
      role: 'Tier 3',
      provider: 'Viettel VCS',
      icon: ShieldAlert,
      title: isLaos ? 'Deep Forensics & Incident Response' : 'Xử lý chuyên sâu & Điều tra số (DFIR)',
      desc: isLaos
        ? 'Engages top cyber experts for forensic memory dump analysis, reverse engineering zero-days, and neutralizing threats.'
        : 'Chuyên gia an ninh mạng hàng đầu tiến hành bóc tách mã độc, điều tra nguyên nhân gốc rễ (Root Cause) và triệt tiêu nguy cơ.',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight mb-2">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Grid 4 Card Ứng dụng (Matching CloudServerUseCases) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {useCases.map((item, idx) => {
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden hover:border-[var(--vidc-color-brand-red)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Banner Image */}
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img alt={item.title} src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" loading="lazy" onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-2.5">
                    <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] group-hover:text-[var(--vidc-color-brand-red)] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <VIDCAnchor
                    href="#pricing"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </VIDCAnchor>
                </div>

              </div>
            );
          })}
        </div>

        {/* 3-Tier Operational Coordination Box */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-lg sm:text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight">
              {t.opsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {t.opsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {operationalTiers.map((tier, idx) => {
              const IconComp = tier.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-xs font-black bg-red-50 text-[var(--vidc-color-brand-red)]">
                      {tier.role}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      Phụ trách: <strong className="text-slate-700">{tier.provider}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <IconComp className="w-5 h-5 text-[var(--vidc-color-brand-red)]" />
                    <h4 className="text-sm font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                      {tier.title}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
