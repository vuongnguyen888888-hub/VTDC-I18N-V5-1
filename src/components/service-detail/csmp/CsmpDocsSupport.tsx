import React, { useState } from 'react';
import { FileText, Headphones, ArrowRight, Download, CheckCircle } from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';
import { VIDCNativeButton } from '@/components/ui/VIDCNativeControls';


interface CsmpDocsSupportProps {
  currentMarket?: SEAMarket;
  onOpenConsult: () => void;
}

export const CsmpDocsSupport: React.FC<CsmpDocsSupportProps> = ({ onOpenConsult }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadDatasheet = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  return (
    <section 
      id="docs-support" 
      className="py-16 md:py-20 bg-[var(--vidc-legacy-hex-f4f4f4)] border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block text-xs font-semibold text-[color:var(--vidc-color-brand-red)] uppercase tracking-wider mb-2">
            Tài liệu & Kênh liên lạc
          </div>
          <h2 
            id="csmp-docs-support-h2"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--vidc-legacy-hex-222225)] mb-4"
          >
            Tài Nguyên Thông Tin & Kênh Hỗ Trợ
          </h2>
          <p className="text-sm text-gray-600">
            Truy cập đầy đủ tài liệu giới thiệu chương trình và cổng tiếp nhận yêu cầu từ chuyên gia an ninh mạng Viettel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Tài liệu & Datasheet */}
          <div className="bg-white p-7 rounded-xl border border-gray-200 shadow-sm hover:border-red-200 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-red-50 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[var(--vidc-legacy-hex-222225)] mb-3">
                Tài Liệu Giới Thiệu & Datasheet
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Cung cấp thông tin chi tiết về các điều khoản, quyền lợi hội viên và lộ trình chuẩn hóa NIST-CSF.
              </p>
            </div>

            <div>
              {downloadSuccess ? (
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-4 py-2.5 rounded-md border border-emerald-200">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Đã chuẩn bị Datasheet Viettel CSMP (PDF). Đang tải xuống...</span>
                </div>
              ) : (
                <VIDCNativeButton
                  id="csmp-download-datasheet-btn"
                  onClick={handleDownloadDatasheet}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[color:var(--vidc-color-brand-red)] hover:text-[var(--vidc-legacy-hex-cc002b)] group cursor-pointer"
                >
                  <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  <span>Tải Datasheet Viettel CSMP (PDF) →</span>
                </VIDCNativeButton>
              )}
            </div>
          </div>

          {/* Card 2: Kênh hỗ trợ 24/7 */}
          <div className="bg-white p-7 rounded-xl border border-gray-200 shadow-sm hover:border-red-200 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-red-50 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center mb-5">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[var(--vidc-legacy-hex-222225)] mb-3">
                Kênh Tiếp Nhận Hỗ Trợ 24/7
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Tổng đài 1800 8088 và đội ngũ chuyên gia an ninh mạng đồng hành thường trực sẵn sàng tư vấn, giải đáp thắc mắc và ứng cứu sự cố.
              </p>
            </div>

            <div>
              <VIDCNativeButton
                id="csmp-support-request-btn"
                onClick={onOpenConsult}
                className="inline-flex items-center gap-2 text-xs font-bold text-[color:var(--vidc-color-brand-red)] hover:text-[var(--vidc-legacy-hex-cc002b)] group cursor-pointer"
              >
                <span>Gửi Yêu Cầu Hỗ Trợ →</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </VIDCNativeButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
