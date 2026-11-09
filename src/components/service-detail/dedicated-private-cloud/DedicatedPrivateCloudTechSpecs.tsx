import React from 'react';
import { Server, FileText } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface DedicatedPrivateCloudTechSpecsProps {
  currentMarket?: SEAMarket;
}

export const DedicatedPrivateCloudTechSpecs: React.FC<DedicatedPrivateCloudTechSpecsProps> = ({ currentMarket }) => {
  const isLaos = currentMarket?.code === 'la';

  const t = {
    badge: isLaos ? 'SECTION 4: TECHNICAL SPECIFICATIONS (SPECS TABLE)' : 'SECTION 4: BẢNG THÔNG SỐ KỸ THUẬT (SPECS TABLE)',
    headline: isLaos 
      ? 'Technical Specifications of Viettel Dedicated Private Cloud (HPC)'
      : 'Thông Số Kỹ Thuật Viettel Dedicated Private Cloud (HPC)',
    desc: isLaos
      ? 'Detailed Dedicated physical hardware, high-performance NVMe SAN storage, enterprise hypervisor options, low-latency interconnects, and SLA commitments according to Viettel IDC enterprise standards.'
      : 'Chi tiết cấu hình phần cứng vật lý dùng riêng, hệ thống lưu trữ All-Flash NVMe SAN, tùy chọn nền tảng ảo hóa VMware/OpenStack, mạng 100Gbps và cam kết SLA theo chuẩn kỹ thuật Viettel IDC.',
    thCategory: isLaos ? 'TECHNICAL CATEGORY' : 'HẠNG MỤC KỸ THUẬT',
    thSpecs: isLaos ? 'COMMITTED SPECIFICATION DETAILS' : 'CHI TIẾT THÔNG SỐ CAM KẾT',
    downloadTitle: isLaos 
      ? 'Full Technical Specifications Datasheet (HPC Architecture Guide)'
      : 'Bản Đặc Tả Kỹ Thuật Đầy Đủ Dịch Vụ Viettel Dedicated Private Cloud HPC (Datasheet PDF)',
    downloadDesc: isLaos
      ? 'Download the standard PDF datasheet and architecture specification for Viettel Dedicated Private Cloud (HPC).'
      : 'Tải tài liệu PDF đặc tả kỹ thuật tiêu chuẩn và sơ đồ kiến trúc chi tiết Viettel Dedicated Private Cloud (HPC).',
    downloadBtn: isLaos ? 'Download Datasheet PDF' : 'Tải Datasheet PDF',
  };

  const specGroups = [
    {
      groupName: isLaos ? 'Dedicated Physical Infrastructure (Single-Tenant Hardware)' : 'Hạ Tầng Phần Cứng Vật Lý Dùng Riêng (100% Single-Tenant Dedicated)',
      items: [
        { 
          label: isLaos ? 'Physical Servers (Dedicated Hosts)' : 'Máy chủ vật lý chuyên dụng (Physical Host)', 
          value: isLaos 
            ? '100% Dedicated Dell PowerEdge / HPE ProLiant Gen 10/11 Enterprise Servers'
            : '100% Máy chủ Dell EMC PowerEdge / HPE ProLiant Gen 10/11 dùng riêng hoàn toàn' 
        },
        { 
          label: isLaos ? 'Processors (CPU)' : 'Vi xử lý trung tâm (Processor CPU)', 
          value: 'Intel® Xeon® Gold 6330 / 6430 / Platinum hoặc AMD EPYC™ Gen 3/4 (Lên tới 128 Cores/Node)' 
        },
        { 
          label: isLaos ? 'RAM Memory Subsystem' : 'Bộ nhớ RAM hệ thống', 
          value: 'DDR4 / DDR5 ECC Registered 3200MHz / 4800MHz (Lên tới 2TB - 4TB RAM / Host)' 
        },
        { 
          label: isLaos ? 'Hardware Acceleration (GPU)' : 'Bộ tăng tốc tính toán (GPU Accelerator)', 
          value: 'Tùy chọn NVIDIA H100 SXM5 / A100 80GB Tensor Core / NVIDIA L40S PCIe' 
        },
      ]
    },
    {
      groupName: isLaos ? 'Virtualization Hypervisor & Cloud Management' : 'Nền Tảng Ảo Hóa & Quản Trị Đám Mây Doanh Nghiệp',
      items: [
        { 
          label: isLaos ? 'Supported Hypervisors' : 'Nền tảng ảo hóa hỗ trợ', 
          value: 'VMware vSphere Enterprise Plus & vCloud Director HOẶC OpenStack Enterprise Hardened (KVM)' 
        },
        { 
          label: isLaos ? 'Multi-Tenant / Resource Slicing' : 'Quản lý tài nguyên & Phân vùng', 
          value: isLaos ? 'Dedicated Tenant Isolation with custom resource pools' : 'Cô lập hoàn toàn cấp độ phần cứng, toàn quyền quản trị vCenter / Horizon Portal' 
        },
        { 
          label: isLaos ? 'Automation & Infrastructure as Code' : 'Tự động hóa & IaC', 
          value: 'Hỗ trợ đầy đủ RESTful API, Terraform Provider, Ansible Modules, VMware vRO/vRA' 
        },
        { 
          label: isLaos ? 'Operating System Support' : 'Hệ điều hành tương thích', 
          value: 'RHEL, Ubuntu Server, Rocky Linux, CentOS, Debian, Windows Server 2019/2022, Custom ISOs' 
        },
      ]
    },
    {
      groupName: isLaos ? 'High-Performance Storage Subsystem (All-Flash NVMe SAN)' : 'Hệ Thống Lưu Trữ Tốc Độ Cao (All-Flash NVMe SAN)',
      items: [
        { 
          label: isLaos ? 'Storage Array Architecture' : 'Kiến trúc khối lưu trữ (SAN)', 
          value: 'Dedicated Enterprise All-Flash NVMe SAN / Distributed Ceph NVMe-oF Array' 
        },
        { 
          label: isLaos ? 'Data Redundancy & Protection' : 'Cơ chế an toàn & Dự phòng', 
          value: isLaos ? '3x Synchronous Replication with sub-second failover' : 'Nhân bản 3 bản sao đồng bộ (3x Replicas) & Chuyển đổi dự phòng tức thời' 
        },
        { 
          label: isLaos ? 'IOPS Performance SLA' : 'Hiệu năng truy xuất cam kết', 
          value: '100,000 - 500,000+ IOPS toàn cụm / Băng thông đọc ghi lên tới hàng chục GB/s' 
        },
        { 
          label: isLaos ? 'Tiering & Object Storage S3' : 'Phân tầng lưu trữ & S3 Object', 
          value: 'Tích hợp phân tầng dữ liệu nóng NVMe và kho lưu trữ đối tượng S3 tương thích AWS S3 API' 
        },
      ]
    },
    {
      groupName: isLaos ? 'Low-Latency Interconnect & Network Security' : 'Mạng Liên Kết Tốc Độ Cao & An Ninh Mạng Chuyên Sâu',
      items: [
        { 
          label: isLaos ? 'Internal Fabric & RoCE' : 'Hạ tầng mạng nội bộ', 
          value: '25 Gbps / 100 Gbps RoCE (RDMA over Converged Ethernet) / 200 Gbps InfiniBand Quantum' 
        },
        { 
          label: isLaos ? 'Dedicated Firewall & NSX' : 'Tường lửa bảo mật & NSX-T', 
          value: isLaos ? 'Dedicated Virtual Firewall (vFW) + VMware NSX-T Micro-segmentation' : 'Tích hợp tường lửa ảo dùng riêng vFW + Phân đoạn mạng vi mô NSX-T & WAF chuyên sâu' 
        },
        { 
          label: isLaos ? 'Internet Bandwidth & Connectivity' : 'Băng thông Internet & Kênh truyền', 
          value: isLaos ? '1 - 10 Gbps Dedicated Internet, 32+ Static Public IPv4, Direct Connect L2/L3' : '1 - 10 Gbps Băng thông Internet Dedicated không giới hạn, 32+ IPv4 Public tĩnh, Direct Connect' 
        },
      ]
    },
    {
      groupName: isLaos ? 'Quality SLA Commitments & Enterprise Compliance' : 'Cam Kết Chất Lượng Dịch Vụ (SLA) & Pháp Lý Tuân Thủ',
      items: [
        { 
          label: isLaos ? 'Uptime Availability SLA' : 'Cam kết mức độ sẵn sàng (SLA Uptime)', 
          value: isLaos ? '99.99% Availability (Direct contractual financial compensation)' : '99.99% (Cam kết bồi thường chi phí dịch vụ minh bạch theo điều khoản hợp đồng SLA)' 
        },
        { 
          label: isLaos ? 'Data Center Facilities' : 'Hạ tầng Trung tâm dữ liệu', 
          value: 'Đạt chuẩn ANSI/TIA-942 Rated 3 (Pháp Vân, Hòa Lạc, Bình Dương, Hoàng Hoa Thám)' 
        },
        { 
          label: isLaos ? 'Information Security Certifications' : 'Chứng chỉ An toàn thông tin quốc tế', 
          value: 'ISO 27001:2013, ISO 27017 (Cloud Security), ISO 27018, PCI-DSS v4.0 Level 1, SOC 1/2/3' 
        },
        { 
          label: isLaos ? 'Data Residency & Compliance' : 'Tuân thủ Pháp lý & Dữ liệu', 
          value: isLaos ? 'Compliant with Enterprise Data Governance & Cybersecurity Laws' : 'Tuân thủ 100% Nghị định 13/2023/NĐ-CP & Luật An ninh mạng Việt Nam' 
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
            onClick={() => alert(isLaos ? 'Requested Viettel Dedicated Private Cloud HPC Datasheet PDF.' : 'Đã gửi yêu cầu tải tài liệu đặc tả kỹ thuật Viettel Dedicated Private Cloud (HPC).')}
            className="px-5 py-2.5 rounded-lg bg-[var(--vidc-legacy-hex-1e232a)] hover:bg-[var(--vidc-legacy-hex-2d3748)] text-white text-xs font-semibold transition-colors shrink-0 min-h-[44px] cursor-pointer"
          >
            {t.downloadBtn}
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
