import React from 'react';
import { 
  FileCheck2, 
  Activity, 
  Radar, 
  ShieldAlert, 
  LifeBuoy, 
  GraduationCap 
} from 'lucide-react';
import { SEAMarket } from '../../layout/UtilityBar';

interface CsmpFeaturesProps {
  currentMarket?: SEAMarket;
}

export const CsmpFeatures: React.FC<CsmpFeaturesProps> = () => {
  const capabilities = [
    {
      id: 'nist-assessment',
      title: 'Tư Vấn & Đánh Giá Trưởng Thành ATTT',
      description: 'Đánh giá mức độ trưởng thành ATTT theo chuẩn NIST Cyber Security Framework, đề xuất lộ trình nâng cấp và cải thiện dài hạn.',
      icon: FileCheck2,
      badge: 'NIST-CSF 2.0',
    },
    {
      id: 'soc-monitoring',
      title: 'Giám Sát ATTT 24/7 Chuyên Nghiệp',
      description: 'Giám sát, quản trị và cảnh báo nguy cơ theo thời gian thực 24/7 bởi đội ngũ chuyên gia giàu kinh nghiệm của Viettel.',
      icon: Activity,
      badge: '24/7/365 Real-time',
    },
    {
      id: 'threat-intelligence',
      title: 'Tình Báo Mối Đe Dọa (Threat Intelligence)',
      description: 'Theo dõi thông tin tình báo liên quan đến tổ chức, cung cấp cảnh báo sớm về các chiến dịch tấn công, mã độc và lỗ hổng đang bị khai thác.',
      icon: Radar,
      badge: 'CTI Viettel Cyber Security',
    },
    {
      id: 'pentest-assessment',
      title: 'Đánh Giá Xâm Nhập Hệ Thống (Pentest)',
      description: 'Định kỳ rà soát, kiểm thử xâm nhập thực tế để phát hiện sớm dấu vết tin tặc và triệt tiêu các nguy cơ tiềm ẩn bị bỏ sót.',
      icon: ShieldAlert,
      badge: 'Red Teaming & Pentest',
    },
    {
      id: 'incident-response',
      title: 'Ứng Cứu Sự Cố Khẩn Cấp',
      description: 'Đội ngũ chuyên gia sẵn sàng ứng cứu và xử lý sự cố 24/7, cô lập rủi ro và giảm thiểu tối đa thời gian gián đoạn sản xuất kinh doanh.',
      icon: LifeBuoy,
      badge: 'Hotline Phản Ứng Tức Thì',
    },
    {
      id: 'practical-training',
      title: 'Đào Tạo Nhân Sự Thực Chiến',
      description: 'Đào tạo nhận thức ATTT cho toàn bộ nhân viên và đào tạo chuyên sâu cho đội ngũ kỹ thuật thao tác trực tiếp trên hệ thống thực.',
      icon: GraduationCap,
      badge: 'Nhận Thức & Kỹ Thuật Chuyên Sâu',
    },
  ];

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs font-semibold text-[color:var(--vidc-color-brand-red)] uppercase tracking-wider mb-2">
            Trụ cột năng lực
          </div>
          <h2 
            id="csmp-features-h2"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--vidc-legacy-hex-222225)] mb-4"
          >
            Hệ Thống Năng Lực Bảo Vệ Phân Lớp Toàn Diện
          </h2>
          <p className="text-sm text-gray-600">
            6 năng lực cốt lõi được tích hợp đồng bộ trong một chương trình duy nhất, 
            giúp doanh nghiệp từng bước hoàn thiện năng lực bảo mật theo chuẩn quốc tế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="group p-6 rounded-xl bg-gray-50/70 border border-gray-100 hover:border-red-200 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-red-50 text-[color:var(--vidc-color-brand-red)] flex items-center justify-center group-hover:bg-[color:var(--vidc-color-brand-red)] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 group-hover:bg-red-50 group-hover:text-[color:var(--vidc-color-brand-red)] px-2.5 py-1 rounded-md transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--vidc-legacy-hex-222225)] mb-3 group-hover:text-[color:var(--vidc-color-brand-red)] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-[color:var(--vidc-color-brand-red)] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Quy chuẩn hội viên CSMP</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
