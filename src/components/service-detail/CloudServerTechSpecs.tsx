import React from 'react';
import { Server, Cpu, HardDrive, ShieldCheck, Activity, Globe, Check, FileText } from 'lucide-react';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


export const CloudServerTechSpecs: React.FC = () => {
  const specGroups = [
    {
      groupName: 'Hạ Tầng Phần Cứng (Hardware)',
      items: [
        { label: 'Vi xử lý (Processor)', value: 'Intel® Xeon® Gold / Platinum (Ice Lake) hoặc AMD EPYC™ Gen 3' },
        { label: 'Xung nhịp CPU', value: '2.4 GHz - 3.2 GHz Turbo Boost' },
        { label: 'Bộ nhớ RAM', value: 'DDR4 / DDR5 ECC Registered Enterprise Memory' },
        { label: 'Card Mạng Physical', value: 'Dual 10Gbps / 25Gbps Redundant Network Interface Card (NIC)' },
      ]
    },
    {
      groupName: 'Nền Tảng Ảo Hóa & Lưu Trữ',
      items: [
        { label: 'Nền tảng Ảo hóa (Hypervisor)', value: 'VMware vSphere Enterprise Plus / OpenStack KVM Enterprise' },
        { label: 'Loại Ổ Cứng Lưu Trữ', value: 'NVMe Enterprise SSD / SAS SSD Tier 1' },
        { label: 'Hiệu năng IOPS', value: 'Lên tới 50,000 IOPS / Volume (NVMe High-Performance)' },
        { label: 'Cơ chế Nhân bản Dữ liệu', value: 'Replication x3 copies (SAN All-Flash Cluster)' },
      ]
    },
    {
      groupName: 'Mạng & Băng Thông (Networking)',
      items: [
        { label: 'Băng thông Trong nước', value: '100 Mbps Shared (Miễn phí) / Tùy chọn Dedicated lên tới 10 Gbps' },
        { label: 'Băng thông Quốc tế', value: 'Tùy chọn Cam kết Băng thông Quốc tế (Dedicated IP Transit)' },
        { label: 'Địa chỉ IP', value: '01 IPv4 Tĩnh (Public) kèm theo / Hỗ trợ IPv6 Dual-Stack native' },
        { label: 'Bảo vệ Đường biên', value: 'Hệ thống Anti-DDoS Layer 3/4 băng thông lọc 100Gbps+' },
      ]
    },
    {
      groupName: 'Cam Kết Chất Lượng & Tuân Thủ',
      items: [
        { label: 'Cam kết SLA Uptime', value: '99.99% (Bồi thường chi phí theo hợp đồng khi vi phạm SLA)' },
        { label: 'Hạ tầng Data Center', value: '9 Data Center đạt chứng chỉ ANSI/TIA-942 Rated 3 toàn quốc' },
        { label: 'Chứng chỉ Bảo mật', value: 'ISO 27001, ISO 27017, PCI-DSS v4.0, SOC 2 Type II' },
        { label: 'Tuân thủ Pháp lý', value: 'Nghị định 13/2023/NĐ-CP & Luật An ninh mạng Việt Nam' },
      ]
    },
    {
      groupName: 'Quản Trị & Hỗ Trợ Kỹ Thuật',
      items: [
        { label: 'Giao diện Quản trị', value: 'Cloud Portal Self-Service 24/7 (Khởi tạo, Reboot, Console, Reinstall)' },
        { label: 'Tích hợp Automation', value: 'RESTful API, Terraform Provider, Ansible Module' },
        { label: 'Thời gian Hỗ trợ Kỹ thuật', value: '24/7/365 qua Hotline, Email, Ticket Portal (SLA phản hồi < 15 phút)' },
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
            SECTION 4: BẢNG THÔNG SỐ KỸ THUẬT (SPECS TABLE)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--vidc-text-primary)] tracking-tight mb-3">
            Thông Số Kỹ Thuật Viettel Cloud Server (vCS)
          </h2>
          <p className="text-base text-[var(--vidc-legacy-hex-475467)] leading-relaxed">
            Chi tiết cấu hình phần cứng, kiến trúc ảo hóa, mạng và cam kết dịch vụ theo chuẩn kỹ thuật VIDC-TPL-561 V6.1.
          </p>
        </div>

        {/* Structured Spec Table Matrix */}
        <div className="overflow-hidden rounded-2xl bg-white border border-[var(--vidc-border-default)] shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--vidc-legacy-hex-1e232a)] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                <th scope="col" className="py-4 px-6 w-1/3 border-b border-[var(--vidc-text-secondary)]">Hạng Mục Kỹ Thuật</th>
                <th scope="col" className="py-4 px-6 w-2/3 border-b border-[var(--vidc-text-secondary)]">Chi Tiết Thông Số Cam Kết</th>
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
                      <td className="py-3.5 px-6 text-sm text-[var(--vidc-text-primary)] font-normal leading-relaxed">
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
              <h4 className="text-sm font-bold text-[var(--vidc-text-primary)]">Bản Đặc Tả Kỹ Thuật Đầy Đủ (SLA &amp; Specs Datasheet)</h4>
              <p className="text-xs text-[var(--vidc-legacy-hex-475467)]">Tải tài liệu PDF đặc tả kỹ thuật tiêu chuẩn dịch vụ Viettel Cloud Server vCS.</p>
            </div>
          </div>
          <VIDCNativeButton 
            type="button"
            onClick={() => alert('Đã gửi yêu cầu tải tài liệu đặc tả kỹ thuật Viettel Cloud Server (vCS).')}
            className="px-5 py-2.5 rounded-lg bg-[var(--vidc-legacy-hex-1e232a)] hover:bg-[var(--vidc-legacy-hex-2d3748)] text-white text-xs font-semibold transition-colors shrink-0 min-h-[44px]"
          >
            Tải Datasheet PDF
          </VIDCNativeButton>
        </div>

      </div>
    </section>
  );
};
