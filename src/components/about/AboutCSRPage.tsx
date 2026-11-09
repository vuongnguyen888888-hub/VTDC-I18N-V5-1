import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  HeartHandshake, 
  GraduationCap, 
  Activity, 
  Sparkles, 
  Users, 
  Building2, 
  Heart, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  FileCheck,
  Send
} from 'lucide-react';
import { SEAMarket } from '../layout/UtilityBar';
import { AboutSubNav } from './AboutSubNav';
import { VIDCNativeButton, VIDCNativeInput, VIDCNativeSelect, VIDCNativeTextarea } from '@/components/ui/VIDCNativeControls';


interface AboutCSRPageProps {
  currentMarket?: SEAMarket;
  onNavigateHome?: () => void;
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const AboutCSRPage: React.FC<AboutCSRPageProps> = ({
  currentMarket,
  onNavigateHome,
  currentPath = '/about/csr/',
  onNavigate,
}) => {
  const [proposalSubmitted, setProposalSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    programType: 'Tài trợ Hạ tầng Cloud cho Nghiên cứu Giáo dục',
    description: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProposalSubmitted(true);
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* 4 Core CSR Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
            <span className="text-xs font-black uppercase tracking-wider text-red-700">
              4 TRỌNG TÂM PHỤNG SỰ
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Các Chương Trình Hoạt Động Xã Hội Trọng Điểm
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            Chúng tôi tin rằng sức mạnh lớn nhất của công nghệ chính là mang lại cơ hội bình đẳng, nâng cao chất lượng cuộc sống và bảo vệ con người.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Program 1: Y Tế Số */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-xs font-black uppercase text-[var(--vidc-text-brand)] tracking-wider block">
                Y TẾ VÌ CỘNG ĐỒNG
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                Bảo Trợ Hạ Tầng Số Y Tế Tuyến Đầu
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Viettel IDC cung cấp nền tảng Cloud an toàn, hỗ trợ kết nối hồ sơ bệnh án điện tử (EMR) và hệ thống khám chữa bệnh từ xa (Telehealth) cho hàng ngàn bệnh viện vùng sâu vùng xa, giúp người dân được tiếp cận dịch vụ y tế chất lượng cao.
              </p>
              <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--vidc-text-brand)] shrink-0" />
                  <span>Miễn phí tài nguyên Cloud phục vụ hệ thống tiêm chủng &amp; y tế cơ sở</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--vidc-text-brand)] shrink-0" />
                  <span>Bảo mật an toàn thông tin theo chuẩn y khoa quốc tế</span>
                </div>
              </div>
            </div>
          </div>

          {/* Program 2: Giáo dục & Nhân tài */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-black uppercase text-[var(--vidc-text-brand)] tracking-wider block">
                ƯƠM MẦM TÀI NĂNG TRẺ
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                Tài Trợ Hạ Tầng Nghiên Cứu &amp; Học Bổng Công Nghệ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Chương trình "Viettel Cloud for Education" tài trợ miễn phí tài nguyên máy chủ ảo, GPU AI và các khóa đào tạo chứng chỉ quốc tế cho sinh viên và giảng viên các trường đại học công nghệ hàng đầu tại Việt Nam.
              </p>
              <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--vidc-text-brand)] shrink-0" />
                  <span>Cấp 500+ tài khoản Cloud Server phục vụ các đề tài nghiên cứu tốt nghiệp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--vidc-text-brand)] shrink-0" />
                  <span>Học bổng thực tập sinh và cơ hội làm việc chính thức tại Viettel IDC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Program 3: Đồng hành cùng SME */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-black uppercase text-[var(--vidc-text-brand)] tracking-wider block">
                CHUYỂN ĐỔI SỐ BÌNH ĐẲNG
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                Hỗ Trợ Doanh Nghiệp Nhỏ &amp; Hộ Kinh Doanh Số Hóa
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Cung cấp các gói giải pháp Cloud, lưu trữ và email doanh nghiệp ưu đãi đặc biệt nhằm giảm thiểu rào cản chi phí công nghệ, giúp hàng vạn doanh nghiệp SME và hộ kinh doanh truyền thống chuyển đổi số thành công.
              </p>
              <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--vidc-text-brand)] shrink-0" />
                  <span>Gói hỗ trợ hạ tầng miễn phí 6 tháng cho Startup công nghệ Việt</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--vidc-text-brand)] shrink-0" />
                  <span>Hội thảo đào tạo kỹ năng bảo mật dữ liệu định kỳ cho doanh nghiệp</span>
                </div>
              </div>
            </div>
          </div>

          {/* Program 4: Thiện nguyện & Ứng phó thiên tai */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-[var(--vidc-text-brand)] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xs font-black uppercase text-[var(--vidc-text-brand)] tracking-wider block">
                CỨU TRỢ &amp; AN SINH
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                Ứng Phó Thiên Tai &amp; Chương Trình "Trái Tim Cho Em"
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Toàn thể cán bộ nhân viên Viettel IDC hằng năm đều đóng góp ngày lương vào quỹ cứu trợ bão lũ miền Trung, tài trợ chi phí phẫu thuật tim bẩm sinh cho trẻ em có hoàn cảnh khó khăn và xây dựng điểm trường vùng cao.
              </p>
              <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--vidc-text-brand)] shrink-0" />
                  <span>Duy trì đường truyền và hạ tầng cứu nạn khẩn cấp mùa mưa bão</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--vidc-text-brand)] shrink-0" />
                  <span>Tặng quà, trang thiết bị học tập cho các điểm trường khó khăn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section: Đề xuất Hợp tác Hoạt động Xã hội */}
      <section id="propose-program" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl mx-auto text-center mb-8 space-y-3.5">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-red-700">
                KẾT NỐI HỢP TÁC CSR
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
              Đề Xuất Dự Án Phụng Sự Cộng Đồng Cùng Viettel IDC
            </h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
              Nếu Quý Trường Đại học, Bệnh viện, Viện Nghiên cứu hoặc Tổ chức Xã hội có chương trình cần tài trợ hạ tầng số, hãy gửi thông tin cho chúng tôi.
            </p>
          </div>

          {proposalSubmitted ? (
            <div className="max-w-lg mx-auto p-8 rounded-2xl bg-red-50 border border-red-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-100 text-[var(--vidc-text-brand)] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Tiếp Nhận Đề Xuất Thành Công!</h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Ban Trách Nhiệm Xã Hội &amp; Truyền Thông của Viettel IDC đã nhận được hồ sơ đề xuất. Chúng tôi sẽ phản hồi Quý Đơn vị trong vòng 3 ngày làm việc.
              </p>
              <VIDCNativeButton
                onClick={() => setProposalSubmitted(false)}
                className="text-xs sm:text-sm text-[var(--vidc-text-brand)] font-bold underline hover:no-underline pt-2 block mx-auto"
              >
                Gửi thêm đề xuất khác
              </VIDCNativeButton>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Tên Đơn vị / Trường / Tổ chức *
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    placeholder="Đại học / Bệnh viện / Tổ chức..."
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Người đại diện liên hệ *
                  </label>
                  <VIDCNativeInput
                    type="text"
                    required
                    placeholder="Họ và tên đại diện"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Email liên hệ *
                  </label>
                  <VIDCNativeInput
                    type="email"
                    required
                    placeholder="contact@org.vn"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Số điện thoại liên hệ *
                  </label>
                  <VIDCNativeInput
                    type="tel"
                    required
                    placeholder="0912xxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Chương trình / Lĩnh vực đề xuất tài trợ
                </label>
                <VIDCNativeSelect
                  value={formData.programType}
                  onChange={(e) => setFormData({ ...formData, programType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-white"
                >
                  <option value="Tài trợ Hạ tầng Cloud cho Nghiên cứu Giáo dục">Tài trợ Hạ tầng Cloud cho Nghiên cứu Giáo dục (Đại học/Viện)</option>
                  <option value="Bảo trợ Hạ tầng Số Y tế &amp; Telehealth">Bảo trợ Hạ tầng Số Y tế &amp; Bệnh viện vùng cao</option>
                  <option value="Chương trình Học bổng &amp; Đào tạo Kỹ sư Trẻ">Chương trình Học bổng &amp; Đào tạo Kỹ sư Trẻ</option>
                  <option value="Hỗ trợ Startup &amp; Doanh nghiệp Xã hội">Hỗ trợ Startup &amp; Doanh nghiệp Xã hội</option>
                  <option value="Hoạt động Thiện nguyện &amp; Cứu trợ Cộng đồng">Hoạt động Thiện nguyện &amp; Cứu trợ Cộng đồng</option>
                </VIDCNativeSelect>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Mô tả vắn tắt mục tiêu và quy mô dự án *
                </label>
                <VIDCNativeTextarea
                  rows={3}
                  required
                  placeholder="Mô tả mục tiêu, đối tượng thụ hưởng và nhu cầu tài nguyên công nghệ..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[var(--vidc-text-brand)] bg-white"
                />
              </div>

              <VIDCNativeButton
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[var(--vidc-text-brand)] hover:bg-[var(--vidc-legacy-hex-a00022)] text-white text-xs sm:text-sm font-bold shadow-md shadow-red-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Gửi đề xuất tới Ban CSR Viettel IDC</span>
                <ArrowRight className="w-4 h-4" />
              </VIDCNativeButton>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
