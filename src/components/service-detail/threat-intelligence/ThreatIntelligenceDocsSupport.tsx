import React from 'react';
import { FileText, Headphones, ArrowRight, Download, ExternalLink } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface ThreatIntelligenceDocsSupportProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
}

export const ThreatIntelligenceDocsSupport: React.FC<ThreatIntelligenceDocsSupportProps> = ({
  currentMarket,
  onOpenConsult,
}) => {
  const isLaos = currentMarket?.code !== 'vn';

  const t = {
    eyebrow: isLaos ? 'DEVELOPER SPECS & SUPPORT' : 'TÀI LIỆU & KÊNH HỖ TRỢ',
    headline: isLaos
      ? 'Technical Resources & In-Depth Help Channels'
      : 'Tài Nguyên Kỹ Thuật & Kênh Trợ Giúp Chuyên Sâu',
    docsTitle: isLaos ? 'Documentation & Datasheet' : 'Trung Tâm Tài Liệu & Datasheet',
    docsDesc: isLaos
      ? 'Explore STIX/TAXII API connection guides, SIEM/SOC ingestion standards, and download the official technical product datasheet.'
      : 'Cung cấp tài liệu hướng dẫn kết nối STIX/TAXII API, tài liệu quy chuẩn tích hợp SIEM/SOC và tải Datasheet Viettel Threat Intelligence (PDF).',
    downloadPdf: isLaos ? 'Download Datasheet (PDF)' : 'Tải Datasheet Viettel Threat Intelligence (PDF)',
    apiDocs: isLaos ? 'STIX/TAXII API Guide' : 'Tài liệu tích hợp STIX/TAXII API',
    supportTitle: isLaos ? '24/7 Threat Helpdesk' : 'Kênh Tiếp Nhận Hỗ Trợ 24/7',
    supportDesc: isLaos
      ? 'Direct hotline 1800 8088, customer ticketing portal, and real-time incident consultation powered by our certified cyber intelligence team.'
      : 'Tổng đài tiếp nhận kỹ thuật 1800 8088, cổng Portal Ticket và đội ngũ chuyên gia phân tích tình báo an ninh mạng hỗ trợ liên tục.',
    sendRequest: isLaos ? 'Submit Support Request' : 'Gửi Yêu Cầu Hỗ Trợ',
  };

  return (
    <section 
      id="docs-support" 
      className="py-16 md:py-24 bg-[var(--vidc-legacy-hex-f4f4f4)] text-[var(--vidc-legacy-hex-222225)]"
    >
      <div className="vidc-container mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold bg-red-50 text-[var(--vidc-color-brand-red)] mb-3">
            {t.eyebrow}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--vidc-legacy-hex-222225)] tracking-tight leading-tight">
            {t.headline}
          </h2>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Documentation */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                {t.docsTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.docsDesc}
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <VIDCNativeButton
                type="button"
                onClick={onOpenConsult}
                className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200/80 flex items-center justify-between transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
                  <span>{t.downloadPdf}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </VIDCNativeButton>

              <VIDCNativeButton
                type="button"
                onClick={onOpenConsult}
                className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200/80 flex items-center justify-between transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[var(--vidc-color-brand-red)]" />
                  <span>{t.apiDocs}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </VIDCNativeButton>
            </div>
          </div>

          {/* Card 2: Support Channels */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[var(--vidc-color-brand-red)] flex items-center justify-center">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--vidc-legacy-hex-222225)]">
                {t.supportTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.supportDesc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <VIDCNativeButton
                type="button"
                onClick={onOpenConsult}
                className="w-full py-3.5 px-4 rounded-xl bg-[var(--vidc-color-brand-red)] hover:bg-[var(--vidc-button-primary-background-hover)] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{t.sendRequest}</span>
                <ArrowRight className="w-4 h-4" />
              </VIDCNativeButton>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
