import React, { useState } from 'react';
import { 
  Server, 
  Cpu, 
  Layers, 
  HardDrive, 
  Network, 
  ShieldCheck, 
  Check, 
  Zap, 
  Award, 
  Sliders
} from 'lucide-react';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


export const DedicatedComputeTechSpecs: React.FC = () => {
  const [activeSpecCategory, setActiveSpecCategory] = useState<'hardware' | 'network' | 'datacenter'>('hardware');

  const hardwareSpecs = [
    { label: 'Hãng sản xuất Server', value: 'Dell PowerEdge (R660/R760), HPE ProLiant Gen11, Supermicro Enterprise' },
    { label: 'Bộ vi xử lý (Processor)', value: 'Intel® Xeon® Scalable Gen 4/5 (Silver/Gold/Platinum) hoặc AMD EPYC™ 9004 Series (Genoa)' },
    { label: 'Số lượng Core / Thread', value: 'Từ 16 Cores / 32 Threads đến 128 Cores / 256 Threads trên mỗi máy chủ vật lý' },
    { label: 'Bộ nhớ RAM', value: 'DDR5 ECC Registered 4800/5600 MHz, dung lượng từ 64 GB đến 1.5 TB mỗi Server' },
    { label: 'Chuẩn lưu trữ nội bộ', value: 'Enterprise NVMe PCIe Gen 4/5 SSD (U.2/U.3), SAS 12Gbps SSD với độ bền 3 DWPD' },
    { label: 'RAID Controller', value: 'Hardware RAID Card (Dell PERC / HPE Smart Array) với 4GB - 8GB Flash-Backed Cache' },
    { label: 'Lưu trữ SAN mở rộng', value: 'Hỗ trợ kết nối SAN All-Flash qua Fibre Channel 32Gbps hoặc iSCSI 25GbE Dedicated' },
    { label: 'Nguồn & Quạt làm mát', value: 'Nguồn đôi Redundant Hot-swap Titanium Efficiency (96%), quạt làm mát Hot-plug N+1' },
  ];

  const networkSpecs = [
    { label: 'Card mạng máy chủ (NIC)', value: 'Dual-port 10GbE / 25GbE / 100GbE Intel hoặc Mellanox ConnectX-6/7' },
    { label: 'Kiến trúc mạng', value: 'Spine-Leaf Non-blocking Fabric, Băng thông chuyển mạch cổng tới 12.8 Tbps' },
    { label: 'Công nghệ mạng tăng tốc', value: 'Hỗ trợ RDMA over Converged Ethernet (RoCE v2), SR-IOV, DPDK' },
    { label: 'Độ trễ mạng nội bộ', value: 'Độ trễ trung bình < 0.8 ms giữa các máy chủ trong cùng Data Center' },
    { label: 'Kết nối Internet', value: 'Đa hướng quốc tế (Tier 1 IP Transit) và trực tiếp qua các trạm trung chuyển VNIX' },
    { label: 'Kênh truyền riêng (Direct Connect)', value: 'Hỗ trợ kết nối MPLS / SD-WAN / Dark Fiber trực tiếp từ Data Center Viettel về trụ sở khách hàng' },
    { label: 'Địa chỉ IP', value: 'Cung cấp IP Public Static IPv4 & IPv6, hỗ trợ định tuyến dải IP riêng (BYOIP) qua BGP' },
  ];

  const datacenterSpecs = [
    { label: 'Tiêu chuẩn Data Center', value: 'ANSI/TIA-942 Rated 3 (Design & Facility) chứng nhận bởi tổ chức quốc tế EPI' },
    { label: 'Vị trí Data Center', value: 'Hà Nội (Hòa Lạc, Pháp Vân), TP. Hồ Chí Minh (Bình Dương, Quận 9, Hoàng Hoa Thám), Đà Nẵng' },
    { label: 'Hệ thống cấp nguồn điện', value: 'Hệ thống điện dự phòng 2N (Dual UPS + Máy phát điện Kohler/Cummins dự phòng dầu 72h)' },
    { label: 'Hệ thống làm mát (Cooling)', value: 'Hệ thống Chiller Inverter giải nhiệt nước N+1, luồng khí nóng/lạnh cô lập (Hot/Cold Aisle Containment)' },
    { label: 'Phòng cháy chữa cháy (PCCC)', value: 'Cảm biến khói cực sớm VESDA, hệ thống chữa cháy khí sạch FM200 / Novec 1230 không làm hỏng vi mạch' },
    { label: 'An ninh vật lý 6 lớp', value: 'Camera CCTV 360 AI, kiểm soát sinh trắc học vân tay / khuôn mặt, bảo vệ 24/7/365' },
    { label: 'Cam kết SLA tính sẵn sàng', value: '99.99% điện, mạng và điều hòa; cam kết bằng hợp đồng và chính sách phạt vi phạm rõ ràng' },
  ];

  return (
    <section id="specs" className="py-16 md:py-24 bg-white text-[var(--vidc-legacy-hex-0f172a)] border-b border-slate-200">
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-black bg-red-50 text-[color:var(--vidc-color-brand-red)] uppercase tracking-wider mb-3 border border-red-100">
            THÔNG SỐ KỸ THUẬT
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-0f172a)] tracking-tight">
            Thông số phần cứng &amp; hạ tầng chi tiết
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-3 leading-relaxed">
            Hạ tầng phần cứng máy chủ cao cấp từ các đối tác hàng đầu thế giới được lắp đặt tại Trung tâm dữ liệu chuẩn TIA-942 Rated 3
          </p>
        </div>

        {/* Spec Category Selector */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-100 p-1.5 rounded-2xl inline-flex flex-wrap gap-1">
            <VIDCNativeButton
              type="button"
              onClick={() => setActiveSpecCategory('hardware')}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeSpecCategory === 'hardware'
                  ? 'bg-white text-[color:var(--vidc-color-brand-red)] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>1. Phần Cứng Máy Chủ (Server Hardware)</span>
            </VIDCNativeButton>
            <VIDCNativeButton
              type="button"
              onClick={() => setActiveSpecCategory('network')}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeSpecCategory === 'network'
                  ? 'bg-white text-[color:var(--vidc-color-brand-red)] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Network className="w-4 h-4" />
              <span>2. Hạ Tầng Mạng (Network &amp; Fabric)</span>
            </VIDCNativeButton>
            <VIDCNativeButton
              type="button"
              onClick={() => setActiveSpecCategory('datacenter')}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                activeSpecCategory === 'datacenter'
                  ? 'bg-white text-[color:var(--vidc-color-brand-red)] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>3. Trung Tâm Dữ Liệu (DC TIA-942 Rated 3)</span>
            </VIDCNativeButton>
          </div>
        </div>

        {/* Specs Table List */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden animate-in fade-in duration-300">
          <div className="divide-y divide-slate-200">
            {(activeSpecCategory === 'hardware' 
              ? hardwareSpecs 
              : activeSpecCategory === 'network' 
                ? networkSpecs 
                : datacenterSpecs
            ).map((item, idx) => (
              <div 
                key={idx} 
                className="grid grid-cols-1 sm:grid-cols-12 p-4 sm:p-5 hover:bg-white transition-colors items-center gap-2 sm:gap-4 text-xs sm:text-sm"
              >
                <div className="sm:col-span-5 font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[color:var(--vidc-color-brand-red)] shrink-0" />
                  <span>{item.label}</span>
                </div>
                <div className="sm:col-span-7 font-medium text-slate-700">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
