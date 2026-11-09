import React from 'react';
import { BookOpen, Headset, ArrowRight } from 'lucide-react';
import { VIDCAnchor } from '@/components/ui/VIDCAnchor';


export const OpenPrivateCloudDocsSupport: React.FC = () => {
  return (
    <section 
      id="docs-support" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)] border-b border-[var(--vidc-legacy-hex-e8eaed)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            TÀI LIỆU KỸ THUẬT &amp; HỖ TRỢ
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            Tài Nguyên Kỹ Thuật &amp; Kênh Hỗ Trợ
          </h2>
        </div>

        {/* Grid 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Trung Tâm Tài Liệu & API */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                Trung Tâm Tài Liệu &amp; API (Technical Documentation)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Cung cấp hướng dẫn sử dụng OpenStack Self-Service Portal, tài liệu cấu hình SDN Switching L2/L3, tài liệu tích hợp Kubernetes và Database.
              </p>
            </div>

            <div>
              <VIDCAnchor
                href="#docs"
                onClick={(e) => { e.preventDefault(); alert('Trang Tài liệu Kỹ thuật OpenStack đang được cập nhật.'); }}
                className="inline-flex items-center gap-2 font-extrabold text-sm text-[var(--vidc-color-brand-red)] hover:underline group"
              >
                <span>Truy cập Tài liệu Kỹ thuật</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </VIDCAnchor>
            </div>
          </div>

          {/* Card 2: Trung Tâm Hỗ Trợ Kỹ Thuật */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                Trung Tâm Hỗ Trợ Kỹ Thuật (Support Center 24/7)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Hỗ trợ kỹ thuật chuyên sâu 24/7/365 qua hệ thống tiếp nhận Ticket, Email chuyên trách và Hotline 1800 8088.
              </p>
            </div>

            <div>
              <VIDCAnchor
                href="tel:18008088"
                className="inline-flex items-center gap-2 font-extrabold text-sm text-[var(--vidc-color-brand-red)] hover:underline group"
              >
                <span>Gửi Yêu Cầu Hỗ Trợ Kỹ Thuật</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </VIDCAnchor>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
