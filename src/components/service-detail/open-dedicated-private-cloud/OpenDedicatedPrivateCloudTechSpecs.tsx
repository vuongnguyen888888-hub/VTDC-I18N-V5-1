import React from 'react';
import { Server, FileText } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface OpenDedicatedPrivateCloudTechSpecsProps {
  currentMarket?: SEAMarket;
}

export const OpenDedicatedPrivateCloudTechSpecs: React.FC<OpenDedicatedPrivateCloudTechSpecsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    badge: isLaos ? 'SECTION 4: TECHNICAL SPECIFICATIONS (SPECS TABLE)' : 'SECTION 4: BẢNG THÔNG SỐ KỸ THUẬT (SPECS TABLE)',
    headline: isLaos 
      ? 'Technical Specifications of Viettel Open Dedicated Private Cloud (oDPC)'
      : 'Thông Số Kỹ Thuật Viettel Open Dedicated Private Cloud (oDPC)',
    desc: isLaos
      ? 'Detailed Dedicated hardware configuration, OpenStack KVM architecture, 10Gbps SDN networking, Ceph SDS storage, and SLA commitments according to Viettel IDC enterprise standards.'
      : 'Chi tiết cấu hình phần cứng Dedicated dùng riêng, kiến trúc ảo hóa OpenStack KVM, mạng SDN 10Gbps, lưu trữ Ceph SDS và cam kết dịch vụ theo chuẩn kỹ thuật Viettel IDC.',
    thCategory: isLaos ? 'TECHNICAL CATEGORY' : 'HẠNG MỤC KỸ THUẬT',
    thSpecs: isLaos ? 'COMMITTED SPECIFICATION DETAILS' : 'CHI TIẾT THÔNG SỐ CAM KẾT',
    downloadTitle: isLaos 
      ? 'Full Technical Specifications Datasheet (SLA & Architecture Guide)'
      : 'Bản Đặc Tả Kỹ Thuật Đầy Đủ Dịch Vụ Viettel oDPC (SLA & Architecture Datasheet)',
    downloadDesc: isLaos
      ? 'Download the standard PDF datasheet and architecture specification for Viettel Open Dedicated Private Cloud.'
      : 'Tải tài liệu PDF đặc tả kỹ thuật tiêu chuẩn và kiến trúc dịch vụ Viettel Open Dedicated Private Cloud (oDPC).',
    downloadBtn: isLaos ? 'Download Datasheet PDF' : 'Tải Datasheet PDF',
  };

  const specGroups = [
    {
      groupName: isLaos ? 'Dedicated Physical Infrastructure (Single-Tenant Hardware)' : 'Hạ Tầng Phần Cứng Dùng Riêng (Single-Tenant Dedicated Hardware)',
      items: [
        { 
          label: isLaos ? 'Physical Servers (Host)' : 'Máy chủ vật lý chuyên dụng (Physical Host)', 
          value: isLaos 
            ? '100% Dedicated Dell EMC PowerEdge / HPE ProLiant Gen 10/11 Enterprise Servers'
            : '100% Máy chủ Dell EMC PowerEdge / HPE ProLiant Gen 10/11 dùng riêng hoàn toàn' 
        },
        { 
          label: isLaos ? 'Processor (CPU)' : 'Vi xử lý (Processor CPU)', 
          value: 'Intel® Xeon® Gold 6330 / 6430 / Platinum hoặc AMD EPYC™ Gen 3/4 Enterprise' 
        },
        { 
          label: isLaos ? 'RAM Memory' : 'Bộ nhớ RAM', 
          value: 'DDR4 / DDR5 ECC Registered 3200MHz/4800MHz Enterprise High-Speed Memory' 
        },
        { 
          label: isLaos ? 'Physical Network Interface (NIC)' : 'Card mạng máy chủ vật lý (NIC)', 
          value: 'Dual Redundant 25Gbps / 100Gbps SFP28/QSFP28 Network Interface Cards' 
        },
      ]
    },
    {
      groupName: isLaos ? 'Virtualization Platform & Distributed SDS Storage' : 'Nền Tảng Ảo Hóa & Lưu Trữ Phân Tán SDS (OpenStack & Ceph)',
      items: [
        { 
          label: isLaos ? 'Hypervisor Virtualization' : 'Nền tảng ảo hóa (Hypervisor)', 
          value: 'Enterprise Hardened OpenStack (KVM Engine / QEMU High Performance)' 
        },
        { 
          label: isLaos ? 'Storage Architecture (SDS)' : 'Hệ thống lưu trữ phân tán (SDS)', 
          value: 'Ceph Distributed Storage All-Flash NVMe SSD / SAS Enterprise SSD' 
        },
        { 
          label: isLaos ? 'Data Redundancy & Safety' : 'Cơ chế an toàn dữ liệu', 
          value: isLaos ? '3x Data Replication with automated self-healing' : 'Nhân bản 3 bản sao (3x Replication) & Tự động phục hồi khi lỗi (Self-Healing)' 
        },
        { 
          label: isLaos ? 'Storage IOPS Performance' : 'Hiệu năng truy xuất IOPS', 
          value: 'Lên tới 100,000+ IOPS toàn cụm / Băng thông đọc ghi lên tới hàng GB/s' 
        },
      ]
    },
    {
      groupName: isLaos ? 'Software-Defined Networking (SDN) & Edge Security' : 'Mạng Định Nghĩa Bằng Phần Mềm (SDN) & An Ninh Mạng',
      items: [
        { 
          label: isLaos ? 'Internal SDN Mesh Network' : 'Mạng nội bộ SDN Mesh', 
          value: '10 Gbps / 25 Gbps High-Speed SDN Mesh (OpenStack Neutron with OVN/OpenFlow)' 
        },
        { 
          label: isLaos ? 'Virtual Firewall & Security Groups' : 'Tường lửa ảo & Phân đoạn mạng', 
          value: isLaos ? 'Integrated vFirewall + 30 Security Groups + 20 Isolated Subnets' : 'Tích hợp sẵn vFirewall + 30 Security Groups + 20 Subnets phân vùng logic' 
        },
        { 
          label: isLaos ? 'Virtual Load Balancer (vLB)' : 'Cân bằng tải ảo (vLB)', 
          value: isLaos ? 'Built-in Octavia Load Balancer (Layer 4 & Layer 7 / SSL Offloading)' : 'Tích hợp sẵn vLB Octavia (Hỗ trợ Layer 4 & Layer 7 / SSL Offloading)' 
        },
        { 
          label: isLaos ? 'Internet & Hybrid Connectivity' : 'Kết nối Internet & Hybrid Cloud', 
          value: isLaos ? '10+ Public IPv4 addresses, Dual-Stack IPv6, IPsec VPN Site-to-Site / Direct Connect' : '10+ Địa chỉ IPv4 Public tĩnh, IPv6 Dual-Stack, IPsec VPN Site-to-Site & MegaPort' 
        },
      ]
    },
    {
      groupName: isLaos ? 'Integrated PaaS & Automation Ecosystem' : 'Hệ Sinh Thái Dịch Vụ Tích Hợp Sẵn & DevOps Automation',
      items: [
        { 
          label: isLaos ? 'Managed Kubernetes (VKS)' : 'Kubernetes as a Service (VKS)', 
          value: isLaos ? 'Built-in CNCF-certified VKS with auto-scaling node pools' : 'Tích hợp sẵn VKS chuẩn CNCF quốc tế, tự động co giãn Worker Nodes' 
        },
        { 
          label: isLaos ? 'Database as a Service (VDBS)' : 'Database as a Service (VDBS)', 
          value: 'Hỗ trợ khởi tạo Cluster MySQL, PostgreSQL, Redis, MongoDB 1-Click' 
        },
        { 
          label: isLaos ? 'Self-Service & API Integration' : 'Giao diện quản trị & API', 
          value: 'Self-Service Cloud Portal 24/7, OpenStack Horizon, RESTful API, Terraform Provider & CLI' 
        },
        { 
          label: isLaos ? 'OS & Template Support' : 'Hệ điều hành & Images', 
          value: 'RHEL, Ubuntu, CentOS, Rocky Linux, Debian, Windows Server 2019/2022, Custom ISOs' 
        },
      ]
    },
    {
      groupName: isLaos ? 'Quality SLA Commitments & Legal Compliance' : 'Cam Kết Chất Lượng Dịch Vụ (SLA) & Pháp Lý Tuân Thủ',
      items: [
        { 
          label: isLaos ? 'Uptime SLA Commitment' : 'Cam kết mức độ sẵn sàng (SLA Uptime)', 
          value: isLaos ? '99.99% Availability (Direct monetary compensation upon breach)' : '99.99% (Cam kết bồi thường chi phí dịch vụ minh bạch theo điều khoản hợp đồng)' 
        },
        { 
          label: isLaos ? 'Data Center Infrastructure' : 'Hạ tầng Trung tâm dữ liệu', 
          value: 'ANSI/TIA-942 Rated 3 Data Centers (Pháp Vân, Hòa Lạc, Bình Dương, Hoàng Hoa Thám)' 
        },
        { 
          label: isLaos ? 'Security Certifications' : 'Chứng chỉ An toàn thông tin', 
          value: 'ISO 27001, ISO 27017 (Cloud Security), ISO 27018, PCI-DSS v4.0 Level 1, SOC 2' 
        },
        { 
          label: isLaos ? 'Legal & Data Residency' : 'Tuân thủ Pháp lý & Dữ liệu', 
          value: isLaos ? 'Complies with National Cybersecurity Law & Enterprise Data Regulations' : 'Tuân thủ 100% Nghị định 13/2023/NĐ-CP & Luật An ninh mạng Việt Nam' 
        },
      ]
    }
  ];

  return (
    <section 
      id="tech-specs" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f8fafc)] text-[var(--vidc-color-text-primary)] border-b border-[var(--vidc-border-default)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--vidc-text-primary)] tracking-tight mb-3">
            {t.headline}
          </h2>
          <p className="text-base text-[var(--vidc-legacy-hex-475467)] leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Structured Spec Table Matrix (100% Identical to Cloud Server) */}
        <div className="overflow-hidden rounded-2xl bg-white border border-[var(--vidc-border-default)] shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--vidc-legacy-hex-1e232a)] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                <th scope="col" className="py-4 px-6 w-1/3 border-b border-[var(--vidc-text-secondary)]">{t.thCategory}</th>
                <th scope="col" className="py-4 px-6 w-2/3 border-b border-[var(--vidc-text-secondary)]">{t.thSpecs}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--vidc-border-default)]">
              {specGroups.map((group, gIdx) => (
                <React.Fragment key={gIdx}>
                  {/* Group Header Row */}
                  <tr className="bg-[var(--vidc-legacy-hex-f1f5f9)] text-[var(--vidc-legacy-hex-0f172a)]">
                    <td colSpan={2} className="py-3 px-6 text-sm font-bold tracking-wide uppercase">
                      {group.groupName}
                    </td>
                  </tr>

                  {/* Group Items Rows */}
                  {group.items.map((item, iIdx) => (
                    <tr key={iIdx} className="hover:bg-[var(--vidc-legacy-hex-f8fafc)] transition-colors">
                      <th scope="row" className="py-3.5 px-6 text-sm font-medium text-[var(--vidc-text-secondary)] align-top bg-white/50">
                        {item.label}
                      </th>
                      <td className="py-3.5 px-6 text-sm text-[var(--vidc-text-primary)] font-mono leading-relaxed">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Download Tech Specs PDF Banner */}
        <div className="mt-8 p-4 sm:p-6 rounded-xl bg-white border border-[var(--vidc-border-default)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-red-50 text-[var(--vidc-color-brand-red)]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[var(--vidc-text-primary)]">{t.downloadTitle}</h4>
              <p className="text-xs text-[var(--vidc-legacy-hex-475467)]">{t.downloadDesc}</p>
            </div>
          </div>
          <VIDCNativeButton 
            type="button"
            onClick={() => alert(isLaos ? 'Requested Viettel oDPC Architecture Datasheet PDF.' : 'Đã gửi yêu cầu tải tài liệu đặc tả kỹ thuật Viettel Open Dedicated Private Cloud (oDPC).')}
            className="px-5 py-2.5 rounded-lg bg-[var(--vidc-legacy-hex-1e232a)] hover:bg-[var(--vidc-legacy-hex-2d3748)] text-white text-xs font-semibold transition-colors shrink-0 min-h-[44px] cursor-pointer"
          >
            {t.downloadBtn}
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
