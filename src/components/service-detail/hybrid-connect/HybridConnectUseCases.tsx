import React from 'react';
import { Server, CloudCog, Network, ArrowRight } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


interface HybridConnectUseCasesProps {
  currentMarket?: SEAMarket;
}

export const HybridConnectUseCases: React.FC<HybridConnectUseCasesProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'REAL-WORLD DEPLOYMENT SCENARIOS' : 'KỊCH BẢN ỨNG DỤNG THỰC TẾ',
    headline: isLaos 
      ? 'Viettel Hybrid Connect Implementation Scenarios' 
      : 'Kịch Bản Triển Khai Kênh Truyền Viettel Hybrid Connect',
    problem: isLaos ? 'Problem / Challenge:' : 'Bài toán:',
    solution: isLaos ? 'Viettel Hybrid Connect Solution:' : 'Giải pháp:',
  };

  const useCases = [
    {
      icon: Server,
      title: isLaos 
        ? '1. Connect Colocation Racks Directly into Cloud Ecosystem'
        : '1. Kết Nối Hạ Tầng Đặt Chỗ (Colocation) Vào Hệ Sinh Thái Cloud',
      problem: isLaos
        ? 'Enterprises hosting physical servers in Viettel Colocation need high-speed, ultra-secure connections to vCS virtual servers or VPC to scale compute elasticity.'
        : 'Doanh nghiệp đang đặt máy chủ vật lý tại Viettel Colocation cần kết nối bảo mật tốc độ cao vào hệ thống máy chủ ảo vCS hoặc VPC để mở rộng năng lực tính toán.',
      solution: isLaos
        ? 'Establish internal Data Center Cross-connect (L2/L3) via Viettel Hybrid Connect, transferring data instantly with sub-millisecond latency and total physical isolation.'
        : 'Thiết lập kênh Viettel Hybrid Connect đấu nối nội bộ Data Center (Cross-connect L2/L3), truyền tải dữ liệu tức thì với độ trễ cực thấp và bảo mật tuyệt đối.',
      tag: 'Intra-DC Cross-Connect',
      bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: CloudCog,
      title: isLaos 
        ? '2. Build Hybrid Cloud Architecture between On-Premises & Viettel IDC Cloud'
        : '2. Xây Dựng Kiến Trúc Hybrid Cloud Giữa On-Premises & Viettel IDC Cloud',
      problem: isLaos
        ? 'Enterprises running core business applications (ERP, CRM, Core Banking) in on-premises data centers require continuous real-time data sync to the Cloud for disaster recovery and bursting.'
        : 'Doanh nghiệp vận hành phần mềm nghiệp vụ lõi (ERP, CRM, Core Banking) tại văn phòng/Data Center riêng, cần đồng bộ dữ liệu liên tục lên Cloud để dự phòng và mở rộng.',
      solution: isLaos
        ? 'Deploy Hybrid Connect via Point-to-Point dedicated fiber or MPLS VPN (single or dual redundant paths), optimizing line quality and ensuring 24/7 application continuity.'
        : 'Sử dụng mô hình Hybrid Connect qua kênh truyền Point-to-Point hoặc MPLS VPN (đơn tuyến hoặc dự phòng kép), tối ưu đường truyền và đảm bảo tính liên tục cho ứng dụng.',
      tag: 'Hybrid Enterprise Cloud',
      bgImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: Network,
      title: isLaos 
        ? '3. Multi-Service Interconnect & Multi-Cloud Scaling'
        : '3. Liên Kết Đa Dịch Vụ & Mở Rộng Multi-Cloud',
      problem: isLaos
        ? 'High-throughput data transfers between multiple disparate cloud services (Compute, GPU AI nodes, Cloud Storage) across separate geographical zones without bandwidth degradation.'
        : 'Nhu cầu trao đổi dữ liệu dung lượng lớn giữa nhiều dịch vụ (Compute, GPU, Cloud Storage) đặt tại các vùng địa lý khác nhau mà không làm suy hao băng thông.',
      solution: isLaos
        ? 'Activate Multi-Service Private Network transmission, enforcing Anti-MAC Spoofing security, zero packet loss, and inter-region optimized routing.'
        : 'Kích hoạt luồng truyền Multi-Service Private Network, đảm bảo an toàn dữ liệu, chống giả mạo MAC và định tuyến tối ưu liên vùng.',
      tag: 'Multi-Service Backbone',
      bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section 
      id="use-cases" 
      className="py-16 md:py-20 bg-white text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header (Centered) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* Grid 3 Card Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img alt={item.title} src={item.bgImage} className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600/90 text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white text-[var(--vidc-color-brand-red)] flex items-center justify-center shadow-md">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-base font-extrabold text-[var(--vidc-legacy-hex-222225)] leading-snug">
                      {item.title}
                    </h3>

                    <div className="space-y-3 text-xs">
                      <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                        <span className="font-extrabold text-slate-900 block mb-1">
                          {t.problem}
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {item.problem}
                        </p>
                      </div>

                      <div className="p-3 bg-red-50/50 rounded-xl border border-[var(--vidc-color-brand-red)]/30">
                        <span className="font-extrabold text-[var(--vidc-color-brand-red)] block mb-1">
                          {t.solution}
                        </span>
                        <p className="text-slate-700 leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <VIDCAnchor
                    href="#pricing"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--vidc-color-brand-red)] hover:underline"
                  >
                    <span>{isLaos ? 'Explore topology model' : 'Khám phá mô hình đấu nối'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </VIDCAnchor>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
