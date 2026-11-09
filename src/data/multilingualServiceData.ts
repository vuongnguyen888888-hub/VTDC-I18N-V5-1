/**
 * Multilingual Translation & Localization Dictionary
 * Viettel IDC Portal — Comprehensive SEA Localization:
 * - 'vn' / 'vi': Tiếng Việt
 * - 'en': English
 * - 'la' / 'lo': ພາສາລາວ (Lao)
 * - 'ph' / 'fil' / 'tl': Filipino / Tagalog
 * - 'mm' / 'my': မြန်မာဘာသာ (Burmese)
 * - 'kh' / 'km': ភាសាខ្មែរ (Khmer)
 */

export type LangCode = 'vn' | 'en' | 'la' | 'ph' | 'mm' | 'kh';

import { SERVICE_EN_TRANSLATIONS } from './serviceEnglishTranslations';

export function normalizeLang(lang: string = 'vn'): LangCode {
  const n = (lang || 'vn').toLowerCase().trim();
  if (n.startsWith('en')) return 'en';
  if (n.startsWith('la') || n.startsWith('lo')) return 'la';
  if (n.startsWith('ph') || n.startsWith('fil') || n.startsWith('tl')) return 'ph';
  if (n.startsWith('mm') || n.startsWith('my')) return 'mm';
  if (n.startsWith('kh') || n.startsWith('km')) return 'kh';
  return 'vn';
}

// =========================================================================
// 1. SERVICE CATEGORIES (11 Canonical Categories)
// =========================================================================
export interface CategoryI18n {
  menuLabel: string;
  description: string;
}

export const CATEGORY_I18N: Record<string, Record<LangCode, CategoryI18n>> = {
  'cloud-compute': {
    vn: {
      menuLabel: 'Điện toán đám mây',
      description: 'Hạ tầng máy chủ ảo, GPU hiệu năng cao và tài nguyên tính toán tùy biến đa mục đích.'
    },
    en: {
      menuLabel: 'Cloud Compute',
      description: 'Virtual server infrastructure, high-performance GPU, and custom multipurpose compute resources.'
    },
    la: {
      menuLabel: 'ຄລາວຄອມພິວເຕີ',
      description: 'ໂຄງສ້າງພື້ນຖານເຊີບເວີສະເໝືອນ, GPU ປະສິດທິພາບສູງ ແລະ ຊັບພະຍາກອນຄອມພິວເຕີທີ່ປັບແຕ່ງໄດ້.'
    },
    ph: {
      menuLabel: 'Cloud Compute',
      description: 'Virtual server infrastructure, high-performance GPU, at mga napapasadyang compute resources.'
    },
    mm: {
      menuLabel: 'Cloud ကွန်ပျူတာစနစ်',
      description: 'Virtual server အခြေခံအဆောက်အအုံ၊ စွမ်းဆောင်ရည်မြင့် GPU နှင့် လိုအပ်သလို စိတ်ကြိုက်ပြင်ဆင်နိုင်သော ကွန်ပျူတာ အရင်းအမြစ်များ။'
    },
    kh: {
      menuLabel: 'Cloud Compute',
      description: 'ហេដ្ឋារចនាសម្ព័ន្ធម៉ាស៊ីនមេនិម្មិត GPU កម្រិតខ្ពស់ និងធនធានគណនាដែលអាចបត់បែនបាន។'
    }
  },
  'container-kubernetes': {
    vn: {
      menuLabel: 'Containers & Kubernetes',
      description: 'Cụm Kubernetes tự động, điều phối microservices dạng container và Container Registry.'
    },
    en: {
      menuLabel: 'Containers & Kubernetes',
      description: 'Automated Kubernetes clusters, containerized microservices orchestration, and Container Registry.'
    },
    la: {
      menuLabel: 'Containers & Kubernetes',
      description: 'ລະບົບ Kubernetes ອັດຕະໂນມັດ, ການຈັດການ microservices ແບບ container ແລະ Container Registry.'
    },
    ph: {
      menuLabel: 'Containers at Kubernetes',
      description: 'Mga automated na Kubernetes cluster, orkestrasyon ng containerized microservices, at Container Registry.'
    },
    mm: {
      menuLabel: 'Containers နှင့် Kubernetes',
      description: 'အလိုအလျောက် Kubernetes clusters၊ containerized microservices စီမံခန့်ခွဲမှုစနစ်နှင့် Container Registry။'
    },
    kh: {
      menuLabel: 'Containers & Kubernetes',
      description: 'ចង្កោម Kubernetes ស្វ័យប្រវត្តិ ការគ្រប់គ្រង microservices និង Container Registry។'
    }
  },
  'data-center': {
    vn: {
      menuLabel: 'Trung tâm dữ liệu',
      description: 'Cho thuê chỗ đặt máy chủ chuẩn quốc tế TIA-942 Rated 3 phủ sóng toàn quốc.'
    },
    en: {
      menuLabel: 'Data Center Colocation',
      description: 'World-class server colocation leasing meeting TIA-942 Rated 3 standards nationwide.'
    },
    la: {
      menuLabel: 'ສູນຂໍ້ມູນ (Data Center)',
      description: 'ບໍລິການຝາກເຊີບເວີມາດຕະຖານສາກົນ TIA-942 Rated 3 ຄອບຄຸມທົ່ວປະເທດ.'
    },
    ph: {
      menuLabel: 'Data Center Colocation',
      description: 'Pagpapaupa ng server colocation na may pamantayang TIA-942 Rated 3 sa buong bansa.'
    },
    mm: {
      menuLabel: 'Data Center ဝန်ဆောင်မှု',
      description: 'နိုင်ငံတကာ TIA-942 Rated 3 စံချိန်မီ ဆာဗာနေရာငှားရမ်းခြင်း ဝန်ဆောင်မှုများ။'
    },
    kh: {
      menuLabel: 'មជ្ឈមណ្ឌលទិន្នន័យ (Data Center)',
      description: 'សេវាកម្មដាក់ម៉ាស៊ីនមេស្តង់ដារអន្តរជាតិ TIA-942 Rated 3 ទូទាំងប្រទេស។'
    }
  },
  'storage': {
    vn: {
      menuLabel: 'Lưu trữ & Bảo vệ dữ liệu',
      description: 'Giải pháp Object Storage S3, sao lưu dữ liệu BaaS và khôi phục sau thảm họa DRaaS.'
    },
    en: {
      menuLabel: 'Storage & Data Protection',
      description: 'S3-compatible Object Storage, Cloud Backup (BaaS), and Disaster Recovery (DRaaS) solutions.'
    },
    la: {
      menuLabel: 'ການເກັບຮັກສາ & ປົກປ້ອງຂໍ້ມູນ',
      description: 'ວິທີແກ້ໄຂ Object Storage S3, ການສຳຮອງຂໍ້ມູນ BaaS ແລະ ການກູ້ຄືນຂໍ້ມູນ DRaaS.'
    },
    ph: {
      menuLabel: 'Imbakan at Proteksyon ng Datos',
      description: 'Mga solusyon sa S3 Object Storage, cloud backup (BaaS), at disaster recovery (DRaaS).'
    },
    mm: {
      menuLabel: 'သိုလှောင်မှုနှင့် အချက်အလက် ကာကွယ်ရေး',
      description: 'S3-သဟဇာတဖြစ်သော Object Storage၊ Cloud Backup (BaaS) နှင့် Disaster Recovery (DRaaS) စနစ်များ။'
    },
    kh: {
      menuLabel: 'ការផ្ទុក & ការពារទិន្នន័យ',
      description: 'ដំណោះស្រាយ Object Storage S3, ការបម្រុងទុកទិន្នន័យ BaaS និងការស្តារឡើងវិញ DRaaS។'
    }
  },
  'data-platform': {
    vn: {
      menuLabel: 'Nền tảng dữ liệu & Tích hợp',
      description: 'Cơ sở dữ liệu quản trị vDBS, nền tảng streaming Kafka và phân tích Big Data.'
    },
    en: {
      menuLabel: 'Data Platform & Integration',
      description: 'Managed databases (vDBS), real-time Kafka streaming, and Big Data analytics.'
    },
    la: {
      menuLabel: 'ແພລດຟອມຂໍ້ມູນ & ການເຊື່ອມໂຍງ',
      description: 'ຖານຂໍ້ມູນຄຸ້ມຄອງ vDBS, ການສະຕຣີມຂໍ້ມູນ Kafka ແລະ ການວິເຄາະ Big Data.'
    },
    ph: {
      menuLabel: 'Data Platform at Integrasyon',
      description: 'Pinamamahalaang database (vDBS), real-time Kafka streaming, at Big Data analytics.'
    },
    mm: {
      menuLabel: 'ဒေတာ ပလက်ဖောင်းနှင့် ပေါင်းစပ်မှု',
      description: 'စီမံခန့်ခွဲထားသော ဒေတာဘေ့စ်များ (vDBS)၊ အချိန်နှင့်တပြေးညီ Kafka streaming နှင့် Big Data ပိုင်းခြားစိတ်ဖြာမှု။'
    },
    kh: {
      menuLabel: 'វេទិកាទិន្នន័យ & ការរួមបញ្ចូល',
      description: 'មូលដ្ឋានទិន្នន័យគ្រប់គ្រង vDBS, ការបញ្ជូនទិន្នន័យ Kafka និងការវិភាគ Big Data។'
    }
  },
  'networking': {
    vn: {
      menuLabel: 'Mạng & CDN',
      description: 'Mạng phân phối nội dung Media CDN, cân bằng tải Load Balancer và kênh truyền riêng.'
    },
    en: {
      menuLabel: 'Networking & CDN',
      description: 'Media CDN, high-availability Load Balancer, and dedicated private cloud connectivity.'
    },
    la: {
      menuLabel: 'ເຄືອຂ່າຍ & CDN',
      description: 'ເຄືອຂ່າຍສົ່ງເນື້ອຫາ Media CDN, ລະບົບແບ່ງເບົາພາລະ Load Balancer ແລະ ຊ່ອງທາງເຊື່ອມຕໍ່ສະເພາະ.'
    },
    ph: {
      menuLabel: 'Networking at CDN',
      description: 'Media CDN, Load Balancer para sa mataas na availability, at nakalaang private cloud connection.'
    },
    mm: {
      menuLabel: 'ကွန်ရက်နှင့် CDN',
      description: 'Media CDN၊ စွမ်းဆောင်ရည်မြင့် Load Balancer နှင့် သီးသန့် ချိတ်ဆက်မှု ကွန်ရက်လိုင်းများ။'
    },
    kh: {
      menuLabel: 'បណ្តាញ & CDN',
      description: 'បណ្តាញចែកចាយមាតិកា Media CDN, Load Balancer និងខ្សែតភ្ជាប់ផ្ទាល់ខ្លួន។'
    }
  },
  'security': {
    vn: {
      menuLabel: 'An toàn thông tin',
      description: 'Hệ thống phòng chống Anti-DDoS, tường lửa WAF và trung tâm giám sát an ninh SOC.'
    },
    en: {
      menuLabel: 'Security & Cybersecurity',
      description: 'Multi-layer Anti-DDoS defense, Cloud WAF firewall, and 24/7 Virtual SOC operations.'
    },
    la: {
      menuLabel: 'ຄວາມປອດໄພ & ໄຊເບີ',
      description: 'ລະບົບປ້ອງກັນ Anti-DDoS, ໄຟວໍ WAF ແລະ ສູນກວດສອບຄວາມປອດໄພ SOC ຕະຫຼອດ 24/7.'
    },
    ph: {
      menuLabel: 'Seguridad at Cybersecurity',
      description: 'Sistemang proteksyon laban sa Anti-DDoS, Cloud WAF firewall, at 24/7 Virtual SOC operations.'
    },
    mm: {
      menuLabel: 'လုံခြုံရေးနှင့် ဆိုက်ဘာလုံခြုံရေး',
      description: 'Anti-DDoS ကာကွယ်ရေးစနစ်၊ Cloud WAF firewall နှင့် ၂၄/၇ Virtual SOC စောင့်ကြည့်ရေး စင်တာ။'
    },
    kh: {
      menuLabel: 'សន្តិសុខ & សុវត្ថិភាពតាមអ៊ីនធឺណិត',
      description: 'ប្រព័ន្ធការពារ Anti-DDoS, ជញ្ជាំងភ្លើង Cloud WAF និងមជ្ឈមណ្ឌលត្រួតពិនិត្យ SOC ២៤/៧។'
    }
  },
  'cloud-operations': {
    vn: {
      menuLabel: 'Quản trị & Giám sát Cloud',
      description: 'Công cụ giám sát hiệu năng APM, phân tích nhật ký Log Analytics và tối ưu chi phí.'
    },
    en: {
      menuLabel: 'Cloud Operations & Monitoring',
      description: 'Performance monitoring (APM), Log Analytics, CloudWatch, and multi-cloud CMP.'
    },
    la: {
      menuLabel: 'ການຄຸ້ມຄອງ & ຕິດຕາມ Cloud',
      description: 'ເຄື່ອງມືຕິດຕາມປະສິດທິພາບ APM, ການວິເຄາະ Log ແລະ ການປັບປຸງຕົ້ນທຶນໃຫ້ເໝາະສົມ.'
    },
    ph: {
      menuLabel: 'Cloud Operations at Pagsubaybay',
      description: 'Mga tool sa pagsubaybay sa pagganap (APM), Log Analytics, at pag-optimize ng gastos.'
    },
    mm: {
      menuLabel: 'Cloud လည်ပတ်မှုနှင့် စောင့်ကြည့်ခြင်း',
      description: 'စွမ်းဆောင်ရည် စောင့်ကြည့်ရေး ကိရိယာများ (APM)၊ Log Analytics နှင့် ကုန်ကျစရိတ် သက်သာစေမည့် CMP စနစ်။'
    },
    kh: {
      menuLabel: 'ប្រតិបត្តិការ & ការត្រួតពិនិត្យ Cloud',
      description: 'ឧបករណ៍ត្រួតពិនិត្យដំណើរការ (APM), ការវិភាគកំណត់ហេតុ Log Analytics និងការបង្កើនប្រសិទ្ធភាពថ្លៃដើម។'
    }
  },
  'digital-services': {
    vn: {
      menuLabel: 'Dịch vụ số & Ứng dụng',
      description: 'Microsoft 365, Cloud PC, Cloud Desktop (DaaS/VDI), Cloud Drive và Voice Brandname.'
    },
    en: {
      menuLabel: 'Digital Services & Apps',
      description: 'Microsoft 365, enterprise Cloud Drive, Cloud PC, Cloud Desktop (DaaS), and CPaaS.'
    },
    la: {
      menuLabel: 'ບໍລິການດິຈິຕອນ & ແອັບພລິເຄຊັນ',
      description: 'Microsoft 365, Cloud PC, Cloud Desktop (DaaS/VDI), Cloud Drive ແລະ Voice Brandname.'
    },
    ph: {
      menuLabel: 'Digital Services at Apps',
      description: 'Microsoft 365, enterprise Cloud Drive, Cloud PC, Cloud Desktop (DaaS), at Voice Brandname.'
    },
    mm: {
      menuLabel: 'ဒစ်ဂျစ်တယ် ဝန်ဆောင်မှုများနှင့် အက်ပ်များ',
      description: 'Microsoft 365၊ လုပ်ငန်းသုံး Cloud Drive၊ Cloud PC၊ Cloud Desktop (DaaS) နှင့် CPaaS ဆက်သွယ်ရေး။'
    },
    kh: {
      menuLabel: 'សេវាកម្មឌីជីថល & កម្មវិធី',
      description: 'Microsoft 365, Cloud PC, Cloud Desktop (DaaS), Cloud Drive និង Voice Brandname។'
    }
  },
  'managed-services': {
    vn: {
      menuLabel: 'Dịch vụ Vận hành & Tư vấn',
      description: 'Dịch vụ quản trị hệ thống Cloud MSP 24/7, tư vấn kiến trúc và chuyển đổi đám mây.'
    },
    en: {
      menuLabel: 'Managed & Consulting Services',
      description: '24/7 Cloud Managed Services (MSP), architectural advisory, and migration support.'
    },
    la: {
      menuLabel: 'ບໍລິການຄຸ້ມຄອງ & ໃຫ້ຄຳປຶກສາ',
      description: 'ບໍລິການຄຸ້ມຄອງລະບົບ Cloud MSP 24/7, ໃຫ້ຄຳປຶກສາສະຖາປັດຕະຍະກຳ ແລະ ການຍ້າຍລະບົບ.'
    },
    ph: {
      menuLabel: 'Managed at Consulting Services',
      description: '24/7 Cloud Managed Services (MSP), payo sa arkitektura, at suporta sa paglipat ng cloud.'
    },
    mm: {
      menuLabel: 'စီမံခန့်ခွဲမှုနှင့် အကြံပေး ဝန်ဆောင်မှုများ',
      description: '၂၄/၇ Cloud Managed Services (MSP)၊ ဗိသုကာဆိုင်ရာ အကြံပေးမှုနှင့် Cloud သို့ ပြောင်းရွှေ့မှု ပံ့ပိုးမှု။'
    },
    kh: {
      menuLabel: 'សេវាកម្មគ្រប់គ្រង & ប្រឹក្សា',
      description: 'សេវាកម្មគ្រប់គ្រង Cloud MSP ២៤/៧, ការប្រឹក្សាស្ថាបត្យកម្ម និងការផ្ទេរ Cloud។'
    }
  },
  'hosting': {
    vn: {
      menuLabel: 'Tên miền, Hosting & Email',
      description: 'Đăng ký tên miền quốc tế và .VN, Web Hosting NVMe tốc độ cao và Email doanh nghiệp.'
    },
    en: {
      menuLabel: 'Domain, Hosting & Email',
      description: 'Official domain registration, ultra-fast NVMe Web Hosting, and secure business email.'
    },
    la: {
      menuLabel: 'ຊື່ໂດເມນ, Hosting & Email',
      description: 'ຈົດທະບຽນໂດເມນສາກົນ, Web Hosting ຄວາມໄວສູງ NVMe ແລະ ອີເມວທຸລະກິດ.'
    },
    ph: {
      menuLabel: 'Domain, Hosting at Email',
      description: 'Pagpaparehistro ng domain, napakabilis na NVMe Web Hosting, at secure na business email.'
    },
    mm: {
      menuLabel: 'ဒိုမိန်း၊ Hosting နှင့် Email',
      description: 'ဒိုမိန်း မှတ်ပုံတင်ခြင်း၊ မြန်နှုန်းမြင့် NVMe Web Hosting နှင့် စီးပွားရေးလုပ်ငန်းသုံး အီးမေးလ်။'
    },
    kh: {
      menuLabel: 'ឈ្មោះដែន, Hosting & Email',
      description: 'ការចុះឈ្មោះឈ្មោះដែន, Web Hosting NVMe ល្បឿនលឿន និងអ៊ីមែលអាជីវកម្ម។'
    }
  }
};

// =========================================================================
// 2. SUBGROUPS (21 Subgroups)
// =========================================================================
export const SUBGROUP_I18N: Record<string, Record<LangCode, string>> = {
  'cloud-compute': {
    vn: 'Điện toán máy chủ',
    en: 'Cloud Compute',
    la: 'ຄລາວຄອມພິວເຕີ',
    ph: 'Cloud Compute',
    mm: 'Cloud ကွန်ပျူတာစနစ်',
    kh: 'Cloud Compute'
  },
  'container-kubernetes': {
    vn: 'Container & Kubernetes',
    en: 'Containers & Kubernetes',
    la: 'Containers & Kubernetes',
    ph: 'Containers at Kubernetes',
    mm: 'Containers နှင့် Kubernetes',
    kh: 'Containers & Kubernetes'
  },
  'physical-infra': {
    vn: 'Hạ tầng vật lý & Chỗ đặt',
    en: 'Physical Infrastructure',
    la: 'ໂຄງສ້າງພື້ນຖານຕົວຈິງ',
    ph: 'Pisikal na Imprastraktura',
    mm: 'ရုပ်ပိုင်းဆိုင်ရာ အခြေခံအဆောက်အအုံ',
    kh: 'ហេដ្ឋារចនាសម្ព័ន្ធរូបវន្ត'
  },
  'dc-consulting': {
    vn: 'Tư vấn & Thiết kế DC',
    en: 'DC Consulting & Design',
    la: 'ທີ່ປຶກສາ & ອອກແບບ DC',
    ph: 'Konsultasyon at Disenyo ng DC',
    mm: 'DC အကြံပေးခြင်းနှင့် ဒီဇိုင်း',
    kh: 'ការប្រឹក្សា & រចនា DC'
  },
  'cloud-storage': {
    vn: 'Lưu trữ đám mây',
    en: 'Cloud Storage',
    la: 'ການເກັບຮັກສາຄລາວ',
    ph: 'Cloud Storage',
    mm: 'Cloud သိုလှောင်မှု',
    kh: 'ការផ្ទុក Cloud'
  },
  'backup-dr': {
    vn: 'Sao lưu & Dự phòng thảm họa',
    en: 'Backup & Disaster Recovery',
    la: 'ການສຳຮອງ & ກູ້ຄືນຂໍ້ມູນ',
    ph: 'Backup at Disaster Recovery',
    mm: 'အရန်ကူးယူခြင်းနှင့် သဘာဝဘေးအန္တရာယ် ပြန်လည်ထူထောင်ရေး',
    kh: 'ការបម្រុងទុក & ការស្តារឡើងវិញ'
  },
  'managed-db-cache': {
    vn: 'Cơ sở dữ liệu & Bộ nhớ đệm',
    en: 'Database & Cache',
    la: 'ຖານຂໍ້ມູນ & Cache',
    ph: 'Database at Cache',
    mm: 'ဒေတာဘေ့စ်နှင့် Cache',
    kh: 'មូលដ្ឋានទិន្នន័យ & Cache'
  },
  'integration-messaging': {
    vn: 'Tích hợp & Truyền thông điệp',
    en: 'Integration & Messaging',
    la: 'ການເຊື່ອມໂຍງ & ສົ່ງຂໍ້ຄວາມ',
    ph: 'Integrasyon at Pagmemensahe',
    mm: 'ပေါင်းစပ်မှုနှင့် မက်ဆေ့ခ်ျပေးပို့မှုစနစ်',
    kh: 'ការរួមបញ្ចូល & ការផ្ញើសារ'
  },
  'broadband-connect': {
    vn: 'Kết nối mạng & Kênh truyền',
    en: 'Networking & WAN',
    la: 'ເຄືອຂ່າຍ & WAN',
    ph: 'Networking at WAN',
    mm: 'ကွန်ရက်နှင့် WAN ချိတ်ဆက်မှု',
    kh: 'បណ្តាញ & WAN'
  },
  'cdn-delivery': {
    vn: 'Mạng phân phối nội dung (CDN)',
    en: 'Content Delivery (CDN)',
    la: 'ການແຈກຢາຍເນື້ອຫາ (CDN)',
    ph: 'Content Delivery (CDN)',
    mm: 'အကြောင်းအရာ ဖြန့်ဝေရေးကွန်ရက် (CDN)',
    kh: 'ការចែកចាយមាតិកា (CDN)'
  },
  'cloud-security': {
    vn: 'Bảo mật đám mây',
    en: 'Cloud Security',
    la: 'ຄວາມປອດໄພຄລາວ',
    ph: 'Seguridad sa Cloud',
    mm: 'Cloud လုံခြုံရေး',
    kh: 'សុវត្ថិភាព Cloud'
  },
  'security-operations': {
    vn: 'Vận hành giám sát an ninh',
    en: 'Security Operations',
    la: 'ການດຳເນີນງານດ້ານຄວາມປອດໄພ',
    ph: 'Operasyon sa Seguridad',
    mm: 'လုံခြုံရေး လည်ပတ်မှုစနစ်',
    kh: 'ប្រតិបត្តិការសន្តិសុខ'
  },
  'performance-monitoring': {
    vn: 'Giám sát & Đo lường hiệu năng',
    en: 'Performance Monitoring',
    la: 'ການຕິດຕາມປະສິດທິພາບ',
    ph: 'Pagsubaybay sa Pagganap',
    mm: 'စွမ်းဆောင်ရည် စောင့်ကြည့်ခြင်း',
    kh: 'ការត្រួតពិនិត្យដំណើរការ'
  },
  'cloud-management': {
    vn: 'Quản trị đa đám mây (CMP)',
    en: 'Cloud Management',
    la: 'ການຄຸ້ມຄອງຄລາວ',
    ph: 'Pamamahala ng Cloud',
    mm: 'Cloud စီမံခန့်ခွဲမှုစနစ်',
    kh: 'ការគ្រប់គ្រង Cloud'
  },
  'digital-workspace': {
    vn: 'Không gian làm việc số',
    en: 'Digital Workspace',
    la: 'ພື້ນທີ່ເຮັດວຽກດິຈິຕອນ',
    ph: 'Digital Workspace',
    mm: 'ဒစ်ဂျစ်တယ် လုပ်ငန်းခွင်',
    kh: 'កន្លែងធ្វើការឌីជីថល'
  },
  'enterprise-comm': {
    vn: 'Truyền thông doanh nghiệp',
    en: 'Enterprise Communications',
    la: 'ການສື່ສານວິສາຫະກິດ',
    ph: 'Komunikasyon sa Negosyo',
    mm: 'လုပ်ငန်းသုံး ဆက်သွယ်ရေး',
    kh: 'ទំនាក់ទំនងសហគ្រាស'
  },
  'iot-smart': {
    vn: 'IoT & Dịch vụ thông minh',
    en: 'IoT & Smart Services',
    la: 'IoT & ບໍລິການອັດສະລິຍະ',
    ph: 'IoT at Smart Services',
    mm: 'IoT နှင့် စမတ်ဝန်ဆောင်မှုများ',
    kh: 'IoT & សេវាកម្មឆ្លាតវៃ'
  },
  'cloud-management-ops': {
    vn: 'Quản trị vận hành đám mây',
    en: 'Cloud Management & Operations',
    la: 'ການຄຸ້ມຄອງ & ດຳເນີນງານ Cloud',
    ph: 'Cloud Operations at Pamamahala',
    mm: 'Cloud စီမံခန့်ခွဲမှုနှင့် လည်ပတ်မှု',
    kh: 'ការគ្រប់គ្រង & ប្រតិបត្តិការ Cloud'
  },
  'cloud-migration-trans': {
    vn: 'Chuyển dịch hạ tầng đám mây',
    en: 'Cloud Migration & Transition',
    la: 'ການຍ້າຍລະບົບສູ່ Cloud',
    ph: 'Paglipat sa Cloud',
    mm: 'Cloud သို့ ပြောင်းရွှေ့ခြင်း',
    kh: 'ការផ្ទេរទៅកាន់ Cloud'
  },
  'domain-dns': {
    vn: 'Tên miền & Hệ thống DNS',
    en: 'Domain & DNS',
    la: 'ຊື່ໂດເມນ & DNS',
    ph: 'Domain at DNS',
    mm: 'ဒိုမိန်းနှင့် DNS စနစ်',
    kh: 'ឈ្មោះដែន & DNS'
  },
  'hosting-email': {
    vn: 'Web Hosting & Email Doanh nghiệp',
    en: 'Hosting & Email',
    la: 'Hosting & ອີເມວທຸລະກິດ',
    ph: 'Hosting at Business Email',
    mm: 'Hosting နှင့် စီးပွားရေး အီးမေးလ်',
    kh: 'Hosting & អ៊ីមែលអាជីវកម្ម'
  }
};

// =========================================================================
// 3. ARCHITECTURE & TECH SOLUTIONS (Homepage & Solutions Hub)
// =========================================================================
export interface SolutionI18n {
  title: string;
  description: string;
  highlights: string;
  ctaText: string;
}

export const SOLUTION_I18N: Record<string, Record<LangCode, SolutionI18n>> = {
  'backup-disaster-recovery': {
    vn: {
      title: 'Sao lưu & Phục hồi thảm họa',
      description: 'Bảo vệ dữ liệu trọng yếu với dịch vụ sao lưu đám mây (BaaS) và trung tâm khôi phục thảm họa (DRaaS) đạt RPO/RTO tối thiểu.',
      highlights: 'Sao lưu tự động BaaS · Điểm DRaaS dự phòng · An toàn Ransomware · SLA 99.99%',
      ctaText: 'Tư vấn giải pháp'
    },
    en: {
      title: 'Backup & Disaster Recovery',
      description: 'Protect mission-critical enterprise data with automated Cloud Backup (BaaS) and Disaster Recovery (DRaaS) with minimal RPO/RTO.',
      highlights: 'BaaS Cloud Backup · DRaaS Recovery Site · Automated Schedule · Ransomware Safe',
      ctaText: 'Consult Now'
    },
    la: {
      title: 'ການສຳຮອງ & ກູ້ຄືນຂໍ້ມູນຈາກໄພພິບັດ',
      description: 'ປົກປ້ອງຂໍ້ມູນສຳຄັນຂອງວິສາຫະກິດດ້ວຍການສຳຮອງຂໍ້ມູນເທິງຄລາວ (BaaS) ແລະ ສູນກູ້ຄືນຂໍ້ມູນ (DRaaS) ທີ່ໄວທີ່ສຸດ.',
      highlights: 'ສຳຮອງຂໍ້ມູນອັດຕະໂນມັດ BaaS · ສູນສຳຮອງ DRaaS · ປອດໄພຈາກ Ransomware · SLA 99.99%',
      ctaText: 'ປຶກສາຕອນນີ້'
    },
    ph: {
      title: 'Backup at Disaster Recovery',
      description: 'Protektahan ang mahalagang datos gamit ang automated cloud backup (BaaS) at mabilis na disaster recovery (DRaaS).',
      highlights: 'BaaS Cloud Backup · DRaaS Recovery Site · Ligtas sa Ransomware · SLA 99.99%',
      ctaText: 'Humingi ng Payo'
    },
    mm: {
      title: 'အရန်ကူးယူခြင်းနှင့် သဘာဝဘေးအန္တရာယ် ပြန်လည်ထူထောင်ရေး',
      description: 'အရေးကြီးသော ဒေတာများကို အလိုအလျောက် Cloud Backup (BaaS) နှင့် အမြန်ဆုံး Disaster Recovery (DRaaS) ဖြင့် ကာကွယ်ပါ။',
      highlights: 'BaaS အလိုအလျောက် အရန်ကူးယူခြင်း · DRaaS အရန်စင်တာ · Ransomware ကာကွယ်မှု · SLA 99.99%',
      ctaText: 'အကြံဉာဏ်ရယူရန်'
    },
    kh: {
      title: 'ការបម្រុងទុក & ការស្តារឡើងវិញពេលមានអាសន្ន',
      description: 'ការពារទិន្នន័យសំខាន់ៗជាមួយសេវាកម្ម Cloud Backup (BaaS) និង Disaster Recovery (DRaaS) ជាមួយនឹង RPO/RTO អប្បបរមា។',
      highlights: 'បម្រុងទុកស្វ័យប្រវត្តិ BaaS · មជ្ឈមណ្ឌល DRaaS · សុវត្ថិភាពពី Ransomware · SLA ៩៩.៩៩%',
      ctaText: 'ប្រឹក្សាឥឡូវនេះ'
    }
  },
  'cloud-migration': {
    vn: {
      title: 'Chuyển dịch lên Đám mây không gián đoạn',
      description: 'Di chuyển toàn bộ hạ tầng và ứng dụng từ On-Premises lên Viettel IDC Cloud mượt mà với cam kết không gián đoạn kinh doanh.',
      highlights: 'Đồng bộ dữ liệu liên tục · Không mất traffic · Kiến trúc sư giàu kinh nghiệm · Tối ưu TCO',
      ctaText: 'Khám phá quy trình'
    },
    en: {
      title: 'Zero-Downtime Cloud Migration',
      description: 'Migrate complex workloads to Viettel IDC Cloud seamlessly with zero business interruption and optimized operational TCO.',
      highlights: 'Continuous Replication · Zero Traffic Loss · Experienced Architects · SLA 99.99%',
      ctaText: 'Migrate Now'
    },
    la: {
      title: 'ການຍ້າຍລະບົບສູ່ Cloud ໂດຍບໍ່ມີການຢຸດສະງັກ',
      description: 'ຍ້າຍລະບົບທັງໝົດຈາກ On-Premises ໄປສູ່ Viettel IDC Cloud ຢ່າງສະດວກ ໂດຍບໍ່ກະທົບຕໍ່ທຸລະກິດຂອງທ່ານ.',
      highlights: 'ການເຊື່ອມຂໍ້ມູນຕໍ່ເນື່ອງ · ບໍ່ມີຂໍ້ມູນສູນເສຍ · ຜູ້ຊ່ຽວຊານທີ່ມີປະສົບການ · ປະຢັດຕົ້ນທຶນ',
      ctaText: 'ຍ້າຍລະບົບຕອນນີ້'
    },
    ph: {
      title: 'Zero-Downtime Cloud Migration',
      description: 'Ilipat ang mga kumplikadong workload sa Viettel IDC Cloud nang walang abala sa operasyon at may mababang TCO.',
      highlights: 'Continuous Replication · Walang Traffic Loss · Mga Ekspertong Arkitekto · SLA 99.99%',
      ctaText: 'Maglipat Ngayon'
    },
    mm: {
      title: 'လုပ်ငန်းမပြတ်တောက်ဘဲ Cloud သို့ ပြောင်းရွှေ့ခြင်း',
      description: 'လုပ်ငန်းလည်ပတ်မှု မပြတ်တောက်စေဘဲ On-Premises မှ Viettel IDC Cloud သို့ အဆင်ပြေချောမွေ့စွာ ပြောင်းရွှေ့ပါ။',
      highlights: 'အချက်အလက် အဆက်မပြတ် ကူးယူခြင်း · ဒေတာဆုံးရှုံးမှုမရှိခြင်း · ကျွမ်းကျင်သော ဗိသုကာပညာရှင်များ · ကုန်ကျစရိတ် သက်သာစေခြင်း',
      ctaText: 'ယခု ပြောင်းရွှေ့ရန်'
    },
    kh: {
      title: 'ការផ្ទេរទៅកាន់ Cloud ដោយគ្មានការរំខាន',
      description: 'ផ្ទេរហេដ្ឋារចនាសម្ព័ន្ធពី On-Premises ទៅកាន់ Viettel IDC Cloud ដោយរលូន និងមិនមានការផ្អាកប្រតិបត្តិការអាជីវកម្ម។',
      highlights: 'ការចម្លងទិន្នន័យជាបន្តបន្ទាប់ · គ្មានការបាត់បង់ទិន្នន័យ · វិស្វករជំនាញ · សន្សំការចំណាយ',
      ctaText: 'ផ្ទេរឥឡូវនេះ'
    }
  },
  'multi-az': {
    vn: {
      title: 'Kiến trúc Sẵn sàng cao Đa vùng (Multi-AZ)',
      description: 'Thiết kế kiến trúc Active-Active hoặc Active-Passive liên trung tâm dữ liệu chuẩn Rated 3 với khả năng dự phòng và chịu lỗi vượt trội.',
      highlights: 'Dự phòng liên Data Center · Cân bằng tải địa lý Geo-LB · Độ trễ cực thấp · Tự động Failover',
      ctaText: 'Xem mô hình'
    },
    en: {
      title: 'Multi-AZ High Availability Architecture',
      description: 'Design active-active or active-passive architectures across multiple Rated 3 data centers with automated failover.',
      highlights: 'Multi-DC Redundancy · Geo-Load Balancing · Low Latency Channels · Disaster Resilient',
      ctaText: 'Explore Design'
    },
    la: {
      title: 'ສະຖາປັດຕະຍະກຳພ້ອມໃຊ້ງານສູງ Multi-AZ',
      description: 'ອອກແບບລະບົບ Active-Active ຫຼື Active-Passive ຂ້າມຫຼາຍສູນຂໍ້ມູນມາດຕະຖານ Rated 3 ພ້ອມລະບົບປ່ຽນເສັ້ນທາງອັດຕະໂນມັດ.',
      highlights: 'ລະບົບສຳຮອງຂ້າມສູນຂໍ້ມູນ · Geo-Load Balancing · ຄວາມໄວສູງ ຄວາມໜ່ວງຕ່ຳ · ປອດໄພສູງສຸດ',
      ctaText: 'ເບິ່ງຮູບແບບ'
    },
    ph: {
      title: 'Multi-AZ High Availability Architecture',
      description: 'Magdisenyo ng active-active o active-passive architectures sa maraming Rated 3 data centers na may instant automated failover.',
      highlights: 'Multi-DC Redundancy · Geo-Load Balancing · Low Latency Channels · Disaster Resilient',
      ctaText: 'Tuklasin ang Disenyo'
    },
    mm: {
      title: 'Multi-AZ စွမ်းဆောင်ရည်မြင့် ဗိသုကာပုံစံ',
      description: 'Rated 3 Data Center အများအပြားတွင် အလိုအလျောက် ချိတ်ဆက်ပြောင်းလဲနိုင်သော Active-Active ဗိသုကာပုံစံကို ဒီဇိုင်းဆွဲပါ။',
      highlights: 'Data Center အချင်းချင်း အရန်သင့်ထားရှိမှု · Geo-Load Balancing · အလွန်နည်းသော latency · အပြည့်အဝ စိတ်ချရမှု',
      ctaText: 'ဒီဇိုင်းကို လေ့လာရန်'
    },
    kh: {
      title: 'ស្ថាបត្យកម្មដំណើរការខ្ពស់ Multi-AZ',
      description: 'រចនាស្ថាបត្យកម្ម Active-Active ឬ Active-Passive ឆ្លងកាត់មជ្ឈមណ្ឌលទិន្នន័យ Rated 3 ជាច្រើនជាមួយនឹងការប្តូរស្វ័យប្រវត្តិ។',
      highlights: 'ការបម្រុងទុកឆ្លងកាត់ DC · Geo-Load Balancing · កម្រិត Latency ទាប · សុវត្ថិភាពខ្ពស់',
      ctaText: 'ស្វែងយល់ពីម៉ូដែល'
    }
  },
  'iac-hub': {
    vn: {
      title: 'Tự động hóa Hạ tầng bằng Mã lệnh (IaC Hub)',
      description: 'Khởi tạo và quản lý toàn bộ tài nguyên hạ tầng đám mây tự động thông qua các mẫu Terraform và Ansible chuẩn hóa.',
      highlights: 'Quy trình GitOps tự động · Triển khai hạ tầng tính bằng phút · An toàn cấu hình · Tự phục hồi',
      ctaText: 'Khám phá IaC'
    },
    en: {
      title: 'Infrastructure as Code (IaC Hub)',
      description: 'Automate system provisioning and scaling using standardized Terraform and Ansible blueprints.',
      highlights: 'GitOps Workflows · Faster Deployment · Configuration Safety · Self-healing Nodes',
      ctaText: 'Automate Now'
    },
    la: {
      title: 'ການສ້າງໂຄງສ້າງພື້ນຖານດ້ວຍລະຫັດ (IaC Hub)',
      description: 'ຈັດການ ແລະ ສ້າງຊັບພະຍາກອນຄລາວອັດຕະໂນມັດຜ່ານແມ່ແບບ Terraform ແລະ Ansible ມາດຕະຖານ.',
      highlights: 'ຂະບວນການ GitOps · ຕິດຕັ້ງໄວພາຍໃນບໍ່ເທົ່າໃດນາທີ · ປອດໄພ · ຟື້ນຟູອັດຕະໂນມັດ',
      ctaText: 'ສຳຫຼວດ IaC'
    },
    ph: {
      title: 'Infrastructure as Code (IaC Hub)',
      description: 'I-automate ang pag-provision at pagpapalawak ng system gamit ang standard na Terraform at Ansible templates.',
      highlights: 'GitOps Workflows · Mabilis na Pag-deploy · Ligtas na Configuration · Self-healing Nodes',
      ctaText: 'I-automate Ngayon'
    },
    mm: {
      title: 'ကုဒ်ဖြင့် အခြေခံအဆောက်အအုံ တည်ဆောက်ခြင်း (IaC Hub)',
      description: 'စံသတ်မှတ်ထားသော Terraform နှင့် Ansible ပုံစံများကို အသုံးပြု၍ cloud အရင်းအမြစ်များကို အလိုအလျောက် စီမံခန့်ခွဲပါ။',
      highlights: 'GitOps အလိုအလျောက် လုပ်ငန်းစဉ် · မိနစ်ပိုင်းအတွင်း စတင်လည်ပတ်နိုင်ခြင်း · စိတ်ချရသော စနစ်ပြင်ဆင်မှု',
      ctaText: 'IaC ကို လေ့လာရန်'
    },
    kh: {
      title: 'ស្វ័យប្រវត្តិកម្មហេដ្ឋារចនាសម្ព័ន្ធ (IaC Hub)',
      description: 'គ្រប់គ្រង និងបង្កើតធនធាន Cloud ស្វ័យប្រវត្តិតាមរយៈគំរូ Terraform និង Ansible ស្តង់ដារ។',
      highlights: 'លំហូរការងារ GitOps · ការដាក់ពង្រាយរហ័ស · សុវត្ថិភាពកំណត់រចនាសម្ព័ន្ធ · ការស្តារស្វ័យប្រវត្តិ',
      ctaText: 'ស្វែងយល់ពី IaC'
    }
  },
  'container-kubernetes': {
    vn: {
      title: 'Cụm Container & Kubernetes Quản trị',
      description: 'Chạy các ứng dụng dạng container trên nền tảng Kubernetes tự động mở rộng (vOKS/vDKS) cùng kho chứa ảnh container bảo mật.',
      highlights: 'Tự động co giãn theo tải · Pipeline DevOps mượt mà · Tích hợp vCR Registry · Sẵn sàng Microservices',
      ctaText: 'Triển khai Kubernetes'
    },
    en: {
      title: 'Cloud-Native Containers & Kubernetes',
      description: 'Run containerized applications on managed Kubernetes (vOKS/vDKS) with auto-scaling and integrated container registries.',
      highlights: 'Auto-scaling Clusters · DevOps Pipelines · Integrated Registry · Microservices Ready',
      ctaText: 'Deploy Containers'
    },
    la: {
      title: 'ລະບົບ Container & Kubernetes ຄຸ້ມຄອງ',
      description: 'ດຳເນີນການແອັບພລິເຄຊັນ container ເທິງແພລດຟອມ Kubernetes ທີ່ຂະຫຍາຍຕົວອັດຕະໂນມັດ (vOKS/vDKS) ພ້ອມບ່ອນເກັບຮັກສາທີ່ປອດໄພ.',
      highlights: 'ຂະຫຍາຍອັດຕະໂນມັດຕາມການໂຫຼດ · DevOps Pipelines · vCR Registry · ພ້ອມສຳລັບ Microservices',
      ctaText: 'ຕິດຕັ້ງ Kubernetes'
    },
    ph: {
      title: 'Cloud-Native Containers at Kubernetes',
      description: 'Patakbuhin ang mga containerized application sa pinamamahalaang Kubernetes na may auto-scaling at integrated registry.',
      highlights: 'Auto-scaling Clusters · DevOps Pipelines · Integrated Registry · Handa sa Microservices',
      ctaText: 'I-deploy ang Containers'
    },
    mm: {
      title: 'Cloud-Native Containers နှင့် Kubernetes',
      description: 'အလိုအလျောက် တိုးချဲ့နိုင်သော Kubernetes (vOKS/vDKS) ပေါ်တွင် containerized application များကို လုံခြုံစွာ လည်ပတ်ပါ။',
      highlights: 'Auto-scaling Clusters · DevOps Pipelines · ပေါင်းစပ်ထားသော Registry · Microservices အသင့်သုံး',
      ctaText: 'Kubernetes စတင်သုံးစွဲရန်'
    },
    kh: {
      title: 'Containers & Kubernetes គ្រប់គ្រង',
      description: 'ដំណើរការកម្មវិធី containerized លើ Kubernetes (vOKS/vDKS) ជាមួយនឹងការធ្វើមាត្រដ្ឋានស្វ័យប្រវត្តិ។',
      highlights: 'Auto-scaling Clusters · DevOps Pipelines · Integrated Registry · រួចរាល់សម្រាប់ Microservices',
      ctaText: 'ដាក់ពង្រាយ Kubernetes'
    }
  },
  'devsecops': {
    vn: {
      title: 'Quy trình DevSecOps Tự động hóa',
      description: 'Tích hợp tự động kiểm thử an ninh, quét lỗ hổng mã nguồn và thực thi chính sách bảo mật xuyên suốt chu trình CI/CD.',
      highlights: 'Bảo mật Shift-Left · Quét ảnh Container · Phát hiện lộ bí mật · Cổng duyệt tự động',
      ctaText: 'Bảo vệ Pipeline'
    },
    en: {
      title: 'Shift-Left DevSecOps Automation',
      description: 'Integrate security scanning, policy enforcement, and vulnerability tracking into continuous CI/CD pipelines.',
      highlights: 'Continuous Security · Secret Detection · Image Scanning · Compliance Gates',
      ctaText: 'Secure Pipeline'
    },
    la: {
      title: 'ຂະບວນການ DevSecOps ອັດຕະໂນມັດ',
      description: 'ລວມການກວດສອບຄວາມປອດໄພ ແລະ ການກວດຫາຊ່ອງໂຫວ່ເຂົ້າໃນຂະບວນການ CI/CD ຢ່າງຕໍ່ເນື່ອງ.',
      highlights: 'ຄວາມປອດໄພ Shift-Left · ກວດສອບ Container Image · ກວດຫາລະຫັດລັບຮົ່ວໄຫຼ · ມາດຕະຖານສູງ',
      ctaText: 'ປົກປ້ອງ Pipeline'
    },
    ph: {
      title: 'Shift-Left DevSecOps Automation',
      description: 'Isama ang pag-scan ng seguridad, pagpapatupad ng patakaran, at pagsubaybay sa kahinaan sa mga pipeline ng CI/CD.',
      highlights: 'Patuloy na Seguridad · Secret Detection · Image Scanning · Compliance Gates',
      ctaText: 'I-secure ang Pipeline'
    },
    mm: {
      title: 'Shift-Left DevSecOps အလိုအလျောက် စနစ်',
      description: 'CI/CD လုပ်ငန်းစဉ်များအတွင်း လုံခြုံရေးစစ်ဆေးမှုများနှင့် အားနည်းချက် ရှာဖွေမှုများကို အလိုအလျောက် ပေါင်းစပ်ပါ။',
      highlights: 'စဉ်ဆက်မပြတ် လုံခြုံရေး · လျှို့ဝှက်ချက် ရှာဖွေဖော်ထုတ်မှု · Image စစ်ဆေးခြင်း · စံနှုန်းလိုက်နာမှု',
      ctaText: 'Pipeline ကို ကာကွယ်ရန်'
    },
    kh: {
      title: 'ស្វ័យប្រវត្តិកម្ម DevSecOps',
      description: 'រួមបញ្ចូលការស្កេនសុវត្ថិភាព និងការត្រួតពិនិត្យភាពងាយរងគ្រោះទៅក្នុងបំពង់ CI/CD ជាបន្តបន្ទាប់។',
      highlights: 'សុវត្ថិភាព Shift-Left · ការស្កេនរូបភាព Container · ការរកឃើញការលេចធ្លាយ · ស្តង់ដារខ្ពស់',
      ctaText: 'ការពារ Pipeline'
    }
  },
  'monitoring-ai': {
    vn: {
      title: 'Giám sát Hiệu năng Toàn diện (APM & AI)',
      description: 'Giám sát hiệu năng ứng dụng, máy chủ và nhật ký hệ thống theo thời gian thực với sự hỗ trợ phân tích thông minh từ AI.',
      highlights: 'Cảnh báo thời gian thực · Gom log tập trung · Dự báo sự cố AI · Phân tích phân tán Tracing',
      ctaText: 'Bắt đầu giám sát'
    },
    en: {
      title: 'Full-Stack APM & AI Monitoring',
      description: 'Monitor application performance, system logs, and resource usage with proactive AI-driven predictive insights.',
      highlights: 'Real-time Alerts · Log Aggregation · Predictive Analytics · Distributed Tracing',
      ctaText: 'Start Monitoring'
    },
    la: {
      title: 'ການຕິດຕາມປະສິດທິພາບຄົບວົງຈອນ (APM & AI)',
      description: 'ຕິດຕາມປະສິດທິພາບແອັບພລິເຄຊັນ ແລະ ບັນທຶກລະບົບແບບ Real-time ດ້ວຍການວິເຄາະອັດສະລິຍະຈາກ AI.',
      highlights: 'ແຈ້ງເຕືອນ Real-time · ລວມ Log ສູນກາງ · ຄາດຄະເນເຫດການ AI · Distributed Tracing',
      ctaText: 'ເລີ່ມຕົ້ນຕິດຕາມ'
    },
    ph: {
      title: 'Full-Stack APM at AI Monitoring',
      description: 'Subaybayan ang pagganap ng app, system logs, at paggamit ng resources gamit ang proactive AI insights.',
      highlights: 'Real-time Alerts · Log Aggregation · Predictive Analytics · Distributed Tracing',
      ctaText: 'Simulan ang Pagsubaybay'
    },
    mm: {
      title: 'Full-Stack APM နှင့် AI စောင့်ကြည့်လေ့လာရေး',
      description: 'AI ၏ ခန့်မှန်းချက်များဖြင့် အပလီကေးရှင်း စွမ်းဆောင်ရည်၊ စနစ်မှတ်တမ်းများနှင့် အရင်းအမြစ် အသုံးပြုမှုကို အချိန်နှင့်တပြေးညီ စောင့်ကြည့်ပါ။',
      highlights: 'အချိန်နှင့်တပြေးညီ သတိပေးချက်များ · ဗဟိုချုပ်ကိုင် Log စနစ် · AI ခန့်မှန်းချက်များ · Distributed Tracing',
      ctaText: 'စတင် စောင့်ကြည့်ရန်'
    },
    kh: {
      title: 'ការត្រួតពិនិត្យដំណើរការពេញលេញ (APM & AI)',
      description: 'ត្រួតពិនិត្យដំណើរការកម្មវិធី កំណត់ហេតុប្រព័ន្ធ និងការប្រើប្រាស់ធនធានក្នុងពេលជាក់ស្តែងជាមួយការវិភាគ AI ឆ្លាតវៃ។',
      highlights: 'ការជូនដំណឹងពេលជាក់ស្តែង · ការប្រមូល Log · ការព្យាករណ៍ AI · Distributed Tracing',
      ctaText: 'ចាប់ផ្តើមត្រួតពិនិត្យ'
    }
  },
  'high-performance-cloud': {
    vn: {
      title: 'Đám mây Tính toán Hiệu năng cao (AI & HPC)',
      description: 'Tăng tốc các bài toán huấn luyện mô hình AI/LLM, học sâu và xử lý dữ liệu lớn với hạ tầng GPU NVIDIA và chip tăng tốc chuyên biệt.',
      highlights: 'Cụm GPU NVIDIA tiên tiến · Chip Qualcomm NPU · Lưu trữ NVMe cực nhanh · Tính toán quy mô lớn',
      ctaText: 'Nhận tư vấn GPU'
    },
    en: {
      title: 'High Performance AI Cloud (HPC)',
      description: 'Accelerate heavy parallel processing workloads with cloud GPU and Qualcomm NPU accelerators for AI/LLM models.',
      highlights: 'NVIDIA GPU Clusters · Qualcomm NPU · Ultra-fast NVMe Storage · High-Throughput Compute',
      ctaText: 'Inquire GPU'
    },
    la: {
      title: 'ຄລາວປະສິດທິພາບສູງສຳລັບ AI (HPC)',
      description: 'ເລັ່ງການປະມວນຜົນຂະໜານຂະໜາດໃຫຍ່ດ້ວຍ GPU NVIDIA ແລະ ຊິບເລັ່ງຄວາມໄວ Qualcomm NPU ສຳລັບລະບົບ AI.',
      highlights: 'ກຸ່ມ GPU NVIDIA · Qualcomm NPU · ການເກັບຮັກສາ NVMe ຄວາມໄວສູງ · ປະມວນຜົນຂະໜາດໃຫຍ່',
      ctaText: 'ສອບຖາມ GPU'
    },
    ph: {
      title: 'High Performance AI Cloud (HPC)',
      description: 'Pabilisin ang mga kumplikadong workload gamit ang cloud GPU at Qualcomm NPU accelerators para sa AI at LLM.',
      highlights: 'NVIDIA GPU Clusters · Qualcomm NPU · Mabilis na NVMe Storage · Scalable Compute',
      ctaText: 'Magtanong Ukol sa GPU'
    },
    mm: {
      title: 'စွမ်းဆောင်ရည်မြင့် AI Cloud (HPC)',
      description: 'AI/LLM မော်ဒယ်များအတွက် NVIDIA GPU နှင့် Qualcomm NPU အရှိန်မြှင့် စနစ်များဖြင့် ကြီးမားသော ဒေတာတွက်ချက်မှုများကို အရှိန်မြှင့်ပါ။',
      highlights: 'NVIDIA GPU Clusters · Qualcomm NPU · အလွန်မြန်သော NVMe သိုလှောင်မှု · ကြီးမားသော တွက်ချက်မှုစနစ်',
      ctaText: 'GPU အကြောင်း မေးမြန်းရန်'
    },
    kh: {
      title: 'Cloud គណនាដំណើរការខ្ពស់ (AI & HPC)',
      description: 'បង្កើនល្បឿនការបណ្តុះបណ្តាលគំរូ AI/LLM និងការដំណើរការទិន្នន័យធំជាមួយ GPU NVIDIA និងបន្ទះឈីប Qualcomm NPU។',
      highlights: 'ចង្កោម NVIDIA GPU · Qualcomm NPU · ឧបករណ៍ផ្ទុក NVMe ល្បឿនលឿន · ដំណើរការទំហំធំ',
      ctaText: 'សាកសួរអំពី GPU'
    }
  },
  'cdn': {
    vn: {
      title: 'Mạng Phân phối Nội dung Toàn cầu (Multi-CDN)',
      description: 'Tăng tốc truyền tải nội dung số, phát trực tiếp video HD và bảo vệ website với mạng lưới Edge PoP rộng khắp khu vực và thế giới.',
      highlights: 'Phủ sóng Edge PoP toàn cầu · Giảm 80% tải gốc · Tối ưu Video Streaming · Chống tấn công Layer 7',
      ctaText: 'Tăng tốc ngay'
    },
    en: {
      title: 'Multi-CDN Global Delivery',
      description: 'Deliver media, APIs, and static web pages with low latency globally via widespread Multi-CDN Edge nodes.',
      highlights: 'Global Edge PoPs · 80% Origin Offload · Optimized Streaming · Built-in DDoS Protection',
      ctaText: 'Accelerate Now'
    },
    la: {
      title: 'ເຄືອຂ່າຍສົ່ງເນື້ອຫາລະດັບໂລກ (Multi-CDN)',
      description: 'ສົ່ງເນື້ອຫາດິຈິຕອນ, ວິດີໂອ HD ແລະ ເວັບໄຊທ໌ດ້ວຍຄວາມໄວສູງຜ່ານເຄືອຂ່າຍ Edge PoP ທົ່ວໂລກ.',
      highlights: 'Edge PoP ທົ່ວໂລກ · ຫຼຸດການໂຫຼດຕົ້ນທາງ 80% · ເໝາະສຳລັບ Streaming · ປ້ອງກັນ DDoS ໃນຕົວ',
      ctaText: 'ເລັ່ງຄວາມໄວຕອນນີ້'
    },
    ph: {
      title: 'Multi-CDN Global Delivery',
      description: 'Ihatid ang media, mga API, at mga website nang may mababang latency sa buong mundo sa pamamagitan ng Multi-CDN.',
      highlights: 'Pandaigdigang Edge PoPs · 80% Bawas sa Origin Load · Optimized Streaming · Built-in DDoS Protection',
      ctaText: 'Pabilisin Ngayon'
    },
    mm: {
      title: 'ကမ္ဘာလုံးဆိုင်ရာ အကြောင်းအရာ ဖြန့်ဝေရေး (Multi-CDN)',
      description: 'ကျယ်ပြန့်သော Edge node များမှတစ်ဆင့် မီဒီယာ၊ API များနှင့် ဝဘ်ဆိုက်များကို အလွန်မြန်ဆန်စွာ ပေးပို့ပါ။',
      highlights: 'ကမ္ဘာလုံးဆိုင်ရာ Edge PoPs · မူရင်း Server ဝန်ထုပ်ဝန်ပိုး ၈၀% လျှော့ချခြင်း · Streaming အထူးကောင်းမွန်မှု · DDoS ကာကွယ်မှုပါရှိခြင်း',
      ctaText: 'ယခု အရှိန်မြှင့်ရန်'
    },
    kh: {
      title: 'បណ្តាញចែកចាយមាតិកាសកល (Multi-CDN)',
      description: 'បង្កើនល្បឿនការបញ្ជូនមាតិកាឌីជីថល វីដេអូ HD និងគេហទំព័រជាមួយនឹងបណ្តាញ Edge PoP ទូទាំងពិភពលោក។',
      highlights: 'Edge PoPs ទូទាំងពិភពលោក · កាត់បន្ថយការផ្ទុក ៨០% · ដំណើរការ Streaming ល្អឥតខ្ចោះ · ការពារ DDoS',
      ctaText: 'បង្កើនល្បឿនឥឡូវនេះ'
    }
  },
  'remote-workspace': {
    vn: {
      title: 'Không gian làm việc số Từ xa',
      description: 'Hạ tầng máy ảo Cloud PC, Cloud Desktop DaaS kết hợp Microsoft 365 phục vụ làm việc linh hoạt, an toàn tuyệt đối cho doanh nghiệp.',
      highlights: 'Truy cập Zero-Trust · Cloud PC & Microsoft 365 · Quản trị tập trung · Tiết kiệm chi phí phần cứng',
      ctaText: 'Tạo không gian làm việc'
    },
    en: {
      title: 'Digital Remote Workspace',
      description: 'Enable highly secure hybrid working models with virtual desktops (DaaS), Cloud PC, and integrated Microsoft 365 collaboration tools.',
      highlights: 'Secure VDI Cloud PC · Microsoft 365 Suite · Zero-Trust Access · Central Management',
      ctaText: 'Set Up Workspace'
    },
    la: {
      title: 'ພື້ນທີ່ເຮັດວຽກດິຈິຕອນທາງໄກ',
      description: 'ລະບົບ Cloud PC ແລະ Cloud Desktop DaaS ຮ່ວມກັບ Microsoft 365 ເພື່ອການເຮັດວຽກແບບຍືດຍຸ່ນ ແລະ ປອດໄພ.',
      highlights: 'Zero-Trust Access · Cloud PC & Microsoft 365 · ຄຸ້ມຄອງສູນກາງ · ປະຢັດຕົ້ນທຶນ',
      ctaText: 'ສ້າງພື້ນທີ່ເຮັດວຽກ'
    },
    ph: {
      title: 'Digital Remote Workspace',
      description: 'Paganahin ang ligtas na hybrid working gamit ang virtual desktops (DaaS), Cloud PC, at Microsoft 365 collaboration tools.',
      highlights: 'Secure VDI Cloud PC · Microsoft 365 Suite · Zero-Trust Access · Central Management',
      ctaText: 'I-set up ang Workspace'
    },
    mm: {
      title: 'ဒစ်ဂျစ်တယ် အဝေးရောက် လုပ်ငန်းခွင်',
      description: 'Cloud PC၊ Cloud Desktop (DaaS) နှင့် Microsoft 365 တို့ဖြင့် လုံခြုံစိတ်ချရသော hybrid အလုပ်လုပ်နည်းစနစ်ကို ဖန်တီးပါ။',
      highlights: 'Zero-Trust လုံခြုံရေး · Cloud PC & Microsoft 365 · ဗဟိုချုပ်ကိုင် စီမံခန့်ခွဲမှု · ကုန်ကျစရိတ် သက်သာစေခြင်း',
      ctaText: 'လုပ်ငန်းခွင် စတင်ရန်'
    },
    kh: {
      title: 'កន្លែងធ្វើការឌីជីថលពីចម្ងាយ',
      description: 'ហេដ្ឋារចនាសម្ព័ន្ធ Cloud PC និង Cloud Desktop DaaS រួមជាមួយ Microsoft 365 សម្រាប់ការងារបត់បែន និងសុវត្ថិភាព។',
      highlights: 'Zero-Trust Access · Cloud PC & Microsoft 365 · ការគ្រប់គ្រងកណ្តាល · សន្សំការចំណាយ',
      ctaText: 'បង្កើតកន្លែងធ្វើការ'
    }
  },
  'website-builder': {
    vn: {
      title: 'Hạ tầng Website & Cổng thông tin Doanh nghiệp',
      description: 'Trọn gói tên miền, Hosting SSD NVMe tốc độ cao và chứng chỉ SSL bảo mật cho website doanh nghiệp và thương mại điện tử.',
      highlights: 'SLA máy chủ 99.9% · Tường lửa Cloud WAF · Sao lưu hàng ngày · Hỗ trợ kỹ thuật 24/7',
      ctaText: 'Xây dựng website'
    },
    en: {
      title: 'Corporate Web Infrastructure',
      description: 'Reliable high-speed NVMe hosting, custom domain registration, and secure SSL management for enterprise websites.',
      highlights: '99.9% Server SLA · Cloud WAF Protection · Daily Backups · 24/7 Expert Support',
      ctaText: 'Host Website'
    },
    la: {
      title: 'ໂຄງສ້າງພື້ນຖານເວັບໄຊທ໌ທຸລະກິດ',
      description: 'ຊຸດໂຮສຕິ້ງ SSD NVMe ຄວາມໄວສູງ, ຈົດທະບຽນໂດເມນ ແລະ ໃບຢັ້ງຢືນ SSL ສຳລັບເວັບໄຊທ໌ວິສາຫະກິດ.',
      highlights: 'SLA ເຊີບເວີ 99.9% · ໄຟວໍ Cloud WAF · ສຳຮອງຂໍ້ມູນປະຈຳວັນ · ຊ່ວຍເຫຼືອ 24/7',
      ctaText: 'ສ້າງເວັບໄຊທ໌'
    },
    ph: {
      title: 'Corporate Web Infrastructure',
      description: 'Maaasahang high-speed NVMe hosting, pagpaparehistro ng domain, at SSL para sa mga website ng kumpanya.',
      highlights: '99.9% Server SLA · Cloud WAF Protection · Araw-araw na Backup · 24/7 Suporta',
      ctaText: 'I-host ang Website'
    },
    mm: {
      title: 'လုပ်ငန်းသုံး ဝဘ်ဆိုက် အခြေခံအဆောက်အအုံ',
      description: 'မြန်နှုန်းမြင့် NVMe hosting၊ ဒိုမိန်း မှတ်ပုံတင်ခြင်းနှင့် စီးပွားရေး ဝဘ်ဆိုက်များအတွက် လုံခြုံသော SSL လက်မှတ်များ။',
      highlights: '99.9% Server SLA · Cloud WAF ကာကွယ်မှု · နေ့စဉ် အရန်ကူးယူမှု · ၂၄/၇ နည်းပညာ အကူအညီ',
      ctaText: 'ဝဘ်ဆိုက် တည်ဆောက်ရန်'
    },
    kh: {
      title: 'ហេដ្ឋារចនាសម្ព័ន្ធគេហទំព័រសហគ្រាស',
      description: 'កញ្ចប់ឈ្មោះដែន, NVMe Web Hosting ល្បឿនលឿន និងវិញ្ញាបនប័ត្រ SSL សុវត្ថិភាពសម្រាប់គេហទំព័រអាជីវកម្ម។',
      highlights: 'SLA ម៉ាស៊ីនមេ ៩៩.៩% · ការពារ Cloud WAF · បម្រុងទុកប្រចាំថ្ងៃ · ជំនួយ ២៤/៧',
      ctaText: 'បង្កើតគេហទំព័រ'
    }
  }
};

// =========================================================================
// 4. INDUSTRY SOLUTIONS (Homepage & Industries Hub)
// =========================================================================
export interface IndustryI18n {
  title: string;
  description: string;
}

export const INDUSTRY_I18N: Record<string, Record<LangCode, IndustryI18n>> = {
  'finance-banking': {
    vn: {
      title: 'Tài chính & Ngân hàng',
      description: 'Hạ tầng Private Cloud cô lập vật lý, tuân thủ PCI DSS, sẵn sàng cho Core Banking và trung tâm dữ liệu dự phòng chuẩn quốc tế.'
    },
    en: {
      title: 'Finance & Banking',
      description: 'Physically isolated Private Cloud, PCI DSS compliant, built for high-frequency transactions, core banking migration, and robust disaster recovery.'
    },
    la: {
      title: 'ການເງິນ & ການທະນາຄານ',
      description: 'ໂຄງສ້າງພື້ນຖານ Private Cloud ແຍກສະເພາະ, ມາດຕະຖານ PCI DSS, ຮອງຮັບ Core Banking ແລະ ສູນກູ້ຄືນຂໍ້ມູນມາດຕະຖານສາກົນ.'
    },
    ph: {
      title: 'Pananalapi at Pagbabangko',
      description: 'Physically isolated Private Cloud, sumusunod sa PCI DSS, idinisenyo para sa core banking migration at matatag na disaster recovery.'
    },
    mm: {
      title: 'ဘဏ္ဍာရေးနှင့် ဘဏ်လုပ်ငန်း',
      description: 'သီးသန့်ခွဲထုတ်ထားသော Private Cloud၊ PCI DSS လိုက်နာမှု၊ Core Banking စနစ်နှင့် နိုင်ငံတကာအဆင့်မီ သဘာဝဘေးအန္တရာယ် ပြန်လည်ထူထောင်ရေး စနစ်များ။'
    },
    kh: {
      title: 'ហិរញ្ញវត្ថុ & ធនាគារ',
      description: 'ហេដ្ឋារចនាសម្ព័ន្ធ Private Cloud ដាច់ដោយឡែក អនុលោមតាម PCI DSS ត្រៀមខ្លួនសម្រាប់ Core Banking និងមជ្ឈមណ្ឌលស្តារទិន្នន័យស្តង់ដារអន្តរជាតិ។'
    }
  },
  'retail-ecommerce': {
    vn: {
      title: 'Bán lẻ & Thương mại điện tử',
      description: 'Nền tảng co giãn tức thì theo tải đỉnh điểm Flash Sale, phân phối nội dung tốc độ cao Multi-CDN và bảo mật thanh toán nhiều lớp.'
    },
    en: {
      title: 'Retail & E-commerce',
      description: 'Elastic digital platforms capable of auto-scaling through intensive flash sales, sub-second latency via Multi-CDN, and secure payments.'
    },
    la: {
      title: 'ການຄ້າຂາຍຍ່ອຍ & ອີຄອມເມີຊ',
      description: 'ແພລດຟອມດິຈິຕອນທີ່ຂະຫຍາຍຕົວອັດຕະໂນມັດໃນຊ່ວງ Flash Sale, ສົ່ງເນື້ອຫາຄວາມໄວສູງ Multi-CDN ແລະ ລະບົບຊຳລະເງິນທີ່ປອດໄພ.'
    },
    ph: {
      title: 'Tingi at E-commerce',
      description: 'Mga elastic na platform na may auto-scaling sa mga flash sale, napakabilis na bilis gamit ang Multi-CDN, at ligtas na pagbabayad.'
    },
    mm: {
      title: 'လက်လီအရောင်းနှင့် E-commerce',
      description: 'Flash Sale ရောင်းအား အမြင့်ဆုံးအချိန်များတွင် အလိုအလျောက် တိုးချဲ့နိုင်သော စနစ်၊ Multi-CDN ဖြင့် အလွန်မြန်ဆန်သော ဝဘ်ဆိုက်နှင့် လုံခြုံသော ငွေပေးချေမှုစနစ်။'
    },
    kh: {
      title: 'ការលក់រាយ & ពាណិជ្ជកម្មអេឡិចត្រូនិក',
      description: 'វេទិកាឌីជីថលដែលអាចពង្រីកស្វ័យប្រវត្តិកំឡុងពេល Flash Sale, ការចែកចាយមាតិកាល្បឿនលឿន Multi-CDN និងការទូទាត់ប្រកបដោយសុវត្ថិភាព។'
    }
  },
  'healthcare': {
    vn: {
      title: 'Y tế & Chăm sóc sức khỏe số',
      description: 'Lưu trữ hồ sơ bệnh án điện tử (EMR) và hình ảnh y khoa (PACS) an toàn tuyệt đối, độ sẵn sàng 99.99% cho bệnh viện thông minh.'
    },
    en: {
      title: 'Healthcare & Healthtech',
      description: 'HIPAA-aligned secure cloud spaces for Electronic Medical Records (EMR), PACS diagnostic imaging, and 24/7 smart hospital connectivity.'
    },
    la: {
      title: 'ສາທາລະນະສຸກ & ການແພດດິຈິຕອນ',
      description: 'ການເກັບຮັກສາບັນທຶກການແພດເອເລັກໂຕຣນິກ (EMR) ແລະ ຮູບພາບ PACS ທີ່ປອດໄພສູງສຸດ, ພ້ອມໃຊ້ງານ 99.99% ສຳລັບໂຮງໝໍອັດສະລິຍະ.'
    },
    ph: {
      title: 'Pangangalagang Pangkalusugan at Healthtech',
      description: 'Ligtas na imbakan para sa Electronic Medical Records (EMR), PACS imaging, at 99.99% uptime para sa mga modernong ospital.'
    },
    mm: {
      title: 'ကျန်းမာရေးနှင့် ဆေးဘက်ဆိုင်ရာ နည်းပညာ',
      description: 'အီလက်ထရွန်းနစ် ဆေးမှတ်တမ်းများ (EMR) နှင့် PACS ဆေးဘက်ဆိုင်ရာ ပုံရိပ်များကို လုံခြုံစွာ သိမ်းဆည်းနိုင်ပြီး စမတ်ဆေးရုံများအတွက် 99.99% အသင့်ရှိမှု။'
    },
    kh: {
      title: 'សុខាភិបាល & បច្ចេកវិទ្យាសុខភាព',
      description: 'ការផ្ទុកកំណត់ត្រាវេជ្ជសាស្ត្រអេឡិចត្រូនិក (EMR) និងរូបភាពវេជ្ជសាស្ត្រ (PACS) ប្រកបដោយសុវត្ថិភាពដាច់ខាតសម្រាប់មន្ទីរពេទ្យឆ្លាតវៃ។'
    }
  },
  'education-edtech': {
    vn: {
      title: 'Giáo dục & Đào tạo trực tuyến',
      description: 'Hạ tầng băng thông lớn phục vụ đào tạo từ xa, nền tảng LMS và tổ chức thi trực tuyến với hàng trăm nghìn thí sinh đồng thời.'
    },
    en: {
      title: 'Education & EdTech',
      description: 'High-bandwidth, ultra-low latency infrastructure for online classrooms, learning management systems (LMS), and concurrent exam portals.'
    },
    la: {
      title: 'ການສຶກສາ & EdTech',
      description: 'ໂຄງສ້າງພື້ນຖານແບນວິດສູງສຳລັບຫ້ອງຮຽນອອນລາຍ, ລະບົບ LMS ແລະ ການສອບເສັງອອນລາຍພ້ອມກັນຫຼາຍພັນຄົນ.'
    },
    ph: {
      title: 'Edukasyon at EdTech',
      description: 'Mataas na bandwidth at mababang latency para sa mga online classroom, Learning Management Systems (LMS), at sabay-sabay na online exams.'
    },
    mm: {
      title: 'ပညာရေးနှင့် EdTech',
      description: 'အွန်လိုင်း စာသင်ခန်းများ၊ LMS ပလက်ဖောင်းများနှင့် တစ်ပြိုင်နက်တည်း ဖြေဆိုနိုင်သော စာမေးပွဲစနစ်များအတွက် လှိုင်းကျယ် အခြေခံအဆောက်အအုံ။'
    },
    kh: {
      title: 'ការអប់រំ & EdTech',
      description: 'ហេដ្ឋារចនាសម្ព័ន្ធកម្រិតបញ្ជូនខ្ពស់សម្រាប់ថ្នាក់រៀនអនឡាញ ប្រព័ន្ធគ្រប់គ្រងការរៀនសូត្រ (LMS) និងការប្រឡងអនឡាញដំណាលគ្នា។'
    }
  },
  'government': {
    vn: {
      title: 'Chính phủ số & Cơ quan nhà nước',
      description: 'Hạ tầng đám mây dùng riêng đạt cấp độ an toàn thông tin quốc gia, lưu trữ dữ liệu 100% trong nước và bảo mật tối mật.'
    },
    en: {
      title: 'Public Sector & Digital Government',
      description: 'Sovereign cloud infrastructure stored 100% domestically, meeting national information security frameworks and maximum public trust.'
    },
    la: {
      title: 'ລັດຖະບານດິຈິຕອນ & ອົງການລັດ',
      description: 'ໂຄງສ້າງພື້ນຖານຄລາວສະເພາະ ມາດຕະຖານຄວາມປອດໄພລະດັບຊາດ, ເກັບຮັກສາຂໍ້ມູນ 100% ພາຍໃນປະເທດ.'
    },
    ph: {
      title: 'Pampublikong Sektor at Pamahalaan',
      description: 'Sovereign cloud infrastructure na 100% nakaimbak sa bansa, sumusunod sa pambansang pamantayan sa seguridad ng datos.'
    },
    mm: {
      title: 'ဒစ်ဂျစ်တယ် အစိုးရနှင့် ပြည်သူ့ကဏ္ဍ',
      description: 'နိုင်ငံတော် လုံခြုံရေး စံနှုန်းများနှင့် ကိုက်ညီသော သီးသန့် cloud အခြေခံအဆောက်အအုံ၊ ဒေတာအားလုံးကို ပြည်တွင်း၌ ၁၀၀% လုံခြုံစွာ သိမ်းဆည်းထားခြင်း။'
    },
    kh: {
      title: 'រដ្ឋាភិបាលឌីជីថល & វិស័យសាធារណៈ',
      description: 'ហេដ្ឋារចនាសម្ព័ន្ធ Cloud ផ្ទាល់ខ្លួនស្តង់ដារសន្តិសុខជាតិ រក្សាទុកទិន្នន័យ ១០០% ក្នុងស្រុក និងសុវត្ថិភាពខ្ពស់បំផុត។'
    }
  }
};

// =========================================================================
// 5. COMMON UI & PAGE LABELS (Pricing, Resources, Promotions, Hubs)
// =========================================================================
export interface CommonUII18n {
  home: string;
  services: string;
  solutions: string;
  pricing: string;
  resources: string;
  promotions: string;
  about: string;
  partners: string;
  contact: string;
  requestQuote: string;
  freeTrial: string;
  viewDetails: string;
  searchPlaceholder: string;
  categoryFilter: string;
  all: string;
  clear: string;
  subscribe: string;
  subscribing: string;
  subscribedSuccess: string;
  emailPlaceholder: string;
  pricingStartsFrom: string;
  contactForPricing: string;
  perMonth: string;
  month: string;
  vat: string;
  totalEstimated: string;
  subtotal: string;
  addToEstimate: string;
  removeFromEstimate: string;
  viewEstimate: string;
  estimateEmpty: string;
  estimateEmptyDesc: string;
  copied: string;
  copySummary: string;
  officialQuotation: string;
  specialOffers: string;
  specialOffersDesc: string;
  exploreDeals: string;
  newest: string;
  highestDiscount: string;
  endingSoon: string;
  searchResourcesPlaceholder: string;
  searchPromotionsPlaceholder: string;
  tags: string;
  readMore: string;
  noResultsFound: string;
  // MegaMenu and General Navigation
  specialOffersBadge: string;
  promoDescription: string;
  dedicatedComputePromo: string;
  dedicatedComputeDesc: string;
  viewServiceDetails: string;
  searchInFilter: string;
  clearSearch: string;
  searchResultsCount: string;
  filterLabel: string;
  allCategoriesLabel: string;
  multiIndustryBadge: string;
  ecoSystemBadge: string;
  ecoSystemTitle: string;
  ecoSystemSubtitle: string;
  operationsOptimizationBadge: string;
  operationsOptimizationTitle: string;
  operationsOptimizationSubtitle: string;
  partnerNetworkTitle: string;
  partnerNetworkSubtitle: string;
  resellerProgram: string;
  resellerDesc: string;
  techPartnerProgram: string;
  techPartnerDesc: string;
  affiliateProgram: string;
  affiliateDesc: string;
  distributorProgram: string;
  distributorDesc: string;
  pricingCalculatorTitle: string;
  pricingCalculatorSubtitle: string;
  instantPricingTitle: string;
  instantPricingSubtitle: string;
  transparentTitle: string;
  transparentSubtitle: string;
  customSpecsTitle: string;
  automatedQuotationTitle: string;
  automatedQuotationSubtitle: string;
}

export const COMMON_UI_I18N: Record<LangCode, CommonUII18n> = {
  vn: {
    home: 'Trang chủ',
    services: 'Dịch vụ',
    solutions: 'Giải pháp',
    pricing: 'Bảng giá',
    resources: 'Tài nguyên',
    promotions: 'Khuyến mại',
    about: 'Giới thiệu',
    partners: 'Đối tác',
    contact: 'Liên hệ',
    requestQuote: 'Nhận báo giá',
    freeTrial: 'Dùng thử miễn phí',
    viewDetails: 'Xem chi tiết',
    searchPlaceholder: 'Tìm kiếm dịch vụ, giải pháp...',
    categoryFilter: 'Bộ lọc danh mục',
    all: 'Tất cả',
    clear: 'Xóa',
    subscribe: 'Đăng Ký',
    subscribing: 'Đang gửi...',
    subscribedSuccess: 'Đã đăng ký nhận tài liệu thành công!',
    emailPlaceholder: 'email@doanhnghiep.vn',
    pricingStartsFrom: 'Chỉ từ',
    contactForPricing: 'Liên hệ báo giá',
    perMonth: '/ tháng',
    month: 'tháng',
    vat: 'Thuế VAT (8%)',
    totalEstimated: 'Tổng dự toán hàng tháng:',
    subtotal: 'Tổng tiền chưa VAT:',
    addToEstimate: 'Thêm vào bảng dự toán',
    removeFromEstimate: 'Xóa khỏi dự toán',
    viewEstimate: 'Xem chi tiết bảng dự toán',
    estimateEmpty: 'Bảng dự toán của bạn đang trống',
    estimateEmptyDesc: 'Hãy chọn thông số ở bất kỳ dịch vụ nào để bắt đầu tính toán chi phí.',
    copied: 'Đã sao chép!',
    copySummary: 'Sao chép nội dung',
    officialQuotation: 'Gửi yêu cầu báo giá chính thức',
    specialOffers: 'Khuyến mại đặc biệt',
    specialOffersDesc: 'Ưu đãi lên tới 30% cho các gói hạ tầng đám mây doanh nghiệp.',
    exploreDeals: 'Xem ưu đãi',
    newest: 'Mới nhất',
    highestDiscount: 'Giảm giá cao nhất',
    endingSoon: 'Sắp hết hạn',
    searchResourcesPlaceholder: 'Tìm kiếm tài liệu, báo cáo, bài viết công nghệ...',
    searchPromotionsPlaceholder: 'Tìm kiếm chương trình ưu đãi, mã khuyến mại...',
    tags: 'Chủ đề:',
    readMore: 'Đọc tiếp',
    noResultsFound: 'Không tìm thấy kết quả phù hợp.',
    specialOffersBadge: 'Khuyến mãi đặc biệt',
    promoDescription: 'Giảm 30% Cloud Server cho mọi khách hàng mới trong tháng này.',
    dedicatedComputePromo: 'Viettel Dedicated Compute',
    dedicatedComputeDesc: 'Máy chủ dùng riêng với 100% tài nguyên vật lý cô lập, hiệu năng đỉnh cao & chuẩn TIA-942 Rated 3.',
    viewServiceDetails: 'Xem chi tiết dịch vụ',
    searchInFilter: 'Tìm kiếm trong bộ lọc',
    clearSearch: 'Xóa tìm kiếm',
    searchResultsCount: 'Kết quả tìm kiếm',
    filterLabel: 'Bộ lọc',
    allCategoriesLabel: 'Tất cả danh mục',
    multiIndustryBadge: 'GIẢI PHÁP ĐA LĨNH VỰC',
    ecoSystemBadge: 'HỆ SINH THÁI DỊCH VỤ VIETTEL IDC',
    ecoSystemTitle: 'Hạ tầng số & đám mây toàn diện cho mọi nhu cầu doanh nghiệp',
    ecoSystemSubtitle: '60+ dịch vụ chuẩn hóa quốc tế, đáp ứng các tiêu chuẩn khắt khe nhất về An toàn thông tin & Vận hành liên tục.',
    operationsOptimizationBadge: 'GIẢI PHÁP TỐI ƯU VẬN HÀNH DOANH NGHIỆP',
    operationsOptimizationTitle: 'Giải pháp chuyên sâu giúp tối ưu vận hành Doanh nghiệp',
    operationsOptimizationSubtitle: 'Thiết kế hạ tầng số chuyên sâu theo 3 nhóm dịch vụ: Hạ tầng & Cloud, Dev/Ops & AI, Kết nối & Workspace',
    partnerNetworkTitle: 'Mạng lưới Đối tác & Chương trình Hợp tác',
    partnerNetworkSubtitle: 'Cùng phát triển hệ sinh thái Đám mây và mở rộng thị trường khu vực Đông Nam Á',
    resellerProgram: 'Chương trình Đại lý',
    resellerDesc: 'Mức chiết khấu hấp dẫn và hỗ trợ kỹ thuật chuyên biệt cho đối tác bán hàng.',
    techPartnerProgram: 'Đối tác Công nghệ Chiến lược',
    techPartnerDesc: 'Hợp tác phát triển giải pháp cùng các tập đoàn hàng đầu thế giới (Qualcomm, VMware, Cisco).',
    affiliateProgram: 'Chương trình Tiếp thị Liên kết',
    affiliateDesc: 'Nhận hoa hồng định kỳ khi giới thiệu khách hàng sử dụng dịch vụ Viettel IDC.',
    distributorProgram: 'Chương trình Nhà Phân phối',
    distributorDesc: 'Chính sách ưu đãi và cơ chế bảo vệ giao dịch hàng đầu cho các nhà tích hợp hệ thống lớn.',
    pricingCalculatorTitle: 'Tính Giá & Dự Toán Chi Phí Viettel Cloud',
    pricingCalculatorSubtitle: 'Tự động tính toán chi phí hạ tầng số, Cloud Server, Storage và ứng dụng Doanh nghiệp theo đúng cấu hình thực tế.',
    instantPricingTitle: 'Tính Giá Tức Thì',
    instantPricingSubtitle: 'Cập nhật theo cấu hình',
    transparentTitle: '100% Minh Bạch',
    transparentSubtitle: 'Không chi phí ẩn',
    customSpecsTitle: 'Tùy Chỉnh Cấu Hình',
    automatedQuotationTitle: 'Xuất Báo Giá Tự Động',
    automatedQuotationSubtitle: 'Tải về hoặc gửi tư vấn'
  },
  en: {
    home: 'Home',
    services: 'Services',
    solutions: 'Solutions',
    pricing: 'Pricing',
    resources: 'Resources',
    promotions: 'Promotions',
    about: 'About Us',
    partners: 'Partners',
    contact: 'Contact',
    requestQuote: 'Request Quote',
    freeTrial: 'Free Trial',
    viewDetails: 'View Details',
    searchPlaceholder: 'Search services, solutions, docs...',
    categoryFilter: 'Category Filter',
    all: 'All',
    clear: 'Clear',
    subscribe: 'Subscribe',
    subscribing: 'Subscribing...',
    subscribedSuccess: 'Successfully subscribed for updates!',
    emailPlaceholder: 'work-email@company.com',
    pricingStartsFrom: 'Starting from',
    contactForPricing: 'Contact for pricing',
    perMonth: '/ month',
    month: 'month',
    vat: 'VAT (8%)',
    totalEstimated: 'Total estimated monthly:',
    subtotal: 'Subtotal (excl. VAT):',
    addToEstimate: 'Add to Estimate',
    removeFromEstimate: 'Remove from estimate',
    viewEstimate: 'View Detailed Estimate',
    estimateEmpty: 'Your estimate is empty',
    estimateEmptyDesc: 'Select specifications in any service above to add it to your estimate.',
    copied: 'Copied!',
    copySummary: 'Copy Summary',
    officialQuotation: 'Request Official Quotation',
    specialOffers: 'Special Offers',
    specialOffersDesc: 'Save up to 30% on enterprise Cloud Server deployments for new accounts.',
    exploreDeals: 'Explore deals',
    newest: 'Newest',
    highestDiscount: 'Highest Discount',
    endingSoon: 'Ending Soon',
    searchResourcesPlaceholder: 'Search whitepapers, reports, expert insights...',
    searchPromotionsPlaceholder: 'Search special offers, discount programs...',
    tags: 'Topic:',
    readMore: 'Read more',
    noResultsFound: 'No results found matching your search.',
    specialOffersBadge: 'Special Offers',
    promoDescription: 'Save up to 30% on Cloud Server deployments for new enterprise accounts.',
    dedicatedComputePromo: 'Viettel Dedicated Compute',
    dedicatedComputeDesc: 'Dedicated physical servers with 100% isolated resources and TIA-942 Rated 3 standard.',
    viewServiceDetails: 'View service details',
    searchInFilter: 'Search in filter',
    clearSearch: 'Clear search',
    searchResultsCount: 'Search results',
    filterLabel: 'Filter',
    allCategoriesLabel: 'All Categories',
    multiIndustryBadge: 'MULTI-INDUSTRY SOLUTIONS',
    ecoSystemBadge: 'VIETTEL IDC SERVICE ECOSYSTEM',
    ecoSystemTitle: 'Comprehensive Digital & Cloud Infrastructure for All Business Needs',
    ecoSystemSubtitle: '60+ internationally standardized services, meeting the most rigorous standards for Information Security & Business Continuity.',
    operationsOptimizationBadge: 'ENTERPRISE OPERATIONS OPTIMIZATION',
    operationsOptimizationTitle: 'Specialized Solutions for Optimizing Enterprise Operations',
    operationsOptimizationSubtitle: 'Advanced digital infrastructure customized across 3 categories: Infrastructure & Cloud, Dev/Ops & AI, Connectivity & Workspace',
    partnerNetworkTitle: 'Partner Network & Ecosystem Programs',
    partnerNetworkSubtitle: 'Co-developing Southeast Asia cloud ecosystems and regional market expansions',
    resellerProgram: 'Reseller Partner Program',
    resellerDesc: 'Attractive margins, dedicated technical enablement, and deal protection for channel partners.',
    techPartnerProgram: 'Strategic Technology Alliances',
    techPartnerDesc: 'Joint solution engineering with global leaders (Qualcomm, VMware, Cisco).',
    affiliateProgram: 'Affiliate Marketing Program',
    affiliateDesc: 'Recurring commission rewards for referring clients to Viettel IDC digital services.',
    distributorProgram: 'Distributor & SI Program',
    distributorDesc: 'Premium volume incentives and priority engineering support for system integrators.',
    pricingCalculatorTitle: 'Viettel Cloud Pricing & Cost Calculator',
    pricingCalculatorSubtitle: 'Automatically calculate digital infrastructure, Cloud Server, Storage and Enterprise application costs according to real specs.',
    instantPricingTitle: 'Instant Pricing',
    instantPricingSubtitle: 'Real-time updates',
    transparentTitle: '100% Transparent',
    transparentSubtitle: 'No hidden costs',
    customSpecsTitle: 'Custom Specs',
    automatedQuotationTitle: 'Automated Quotation',
    automatedQuotationSubtitle: 'Export or request quote'
  },
  la: {
    home: 'ໜ້າຫຼັກ',
    services: 'ບໍລິການ',
    solutions: 'ວິທີແກ້ໄຂ',
    pricing: 'ລາຄາ',
    resources: 'ຊັບພະຍາກອນ',
    promotions: 'ໂປຣໂມຊັນ',
    about: 'ກ່ຽວກັບພວກເຮົາ',
    partners: 'ຄູ່ຮ່ວມງານ',
    contact: 'ຕິດຕໍ່',
    requestQuote: 'ຂໍໃບສະເໜີລາຄາ',
    freeTrial: 'ທົດລອງໃຊ້ຟຣີ',
    viewDetails: 'ເບິ່ງລາຍລະອຽດ',
    searchPlaceholder: 'ຄົ້ນຫາບໍລິການ, ວິທີແກ້ໄຂ, ເອກະສານ...',
    categoryFilter: 'ກັ່ນຕອງໝວດໝູ່',
    all: 'ທັງໝົດ',
    clear: 'ລຶບ',
    subscribe: 'ລົງທະບຽນ',
    subscribing: 'ກຳລັງສົ່ງ...',
    subscribedSuccess: 'ລົງທະບຽນຮັບເອກະສານສຳເລັດແລ້ວ!',
    emailPlaceholder: 'email@company.com',
    pricingStartsFrom: 'ເລີ່ມຕົ້ນພຽງ',
    contactForPricing: 'ຕິດຕໍ່ເພື່ອຂໍລາຄາ',
    perMonth: '/ ເດືອນ',
    month: 'ເດືອນ',
    vat: 'ອາກອນມູນຄ່າເພີ່ມ (VAT 8%)',
    totalEstimated: 'ຍອດລວມຄາດຄະເນລາຍເດືອນ:',
    subtotal: 'ຍອດລວມກ່ອນ VAT:',
    addToEstimate: 'ເພີ່ມເຂົ້າໃນການຄິດໄລ່',
    removeFromEstimate: 'ລຶບອອກຈາກການຄິດໄລ່',
    viewEstimate: 'ເບິ່ງລາຍລະອຽດການຄິດໄລ່',
    estimateEmpty: 'ລາຍການຄິດໄລ່ຂອງທ່ານຍັງຫວ່າງຢູ່',
    estimateEmptyDesc: 'ກະລຸນາເລືອກລັກສະນະສະເພາະຂອງບໍລິການເພື່ອເລີ່ມຄິດໄລ່ຕົ້ນທຶນ.',
    copied: 'ສຳເນົາແລ້ວ!',
    copySummary: 'ສຳເນົາເນື້ອຫາ',
    officialQuotation: 'ສົ່ງຄຳຮ້ອງຂໍໃບສະເໜີລາຄາທາງການ',
    specialOffers: 'ຂໍ້ສະເໜີພິເສດ',
    specialOffersDesc: 'ຫຼຸດສູງສຸດ 30% ສຳລັບການນຳໃຊ້ Cloud Server ໃໝ່.',
    exploreDeals: 'ເບິ່ງໂປຣໂມຊັນ',
    newest: 'ໃໝ່ລ່າສຸດ',
    highestDiscount: 'ຫຼຸດສູງສຸດ',
    endingSoon: 'ໃກ້ຈະໝົດເວລາ',
    searchResourcesPlaceholder: 'ຄົ້ນຫາເອກະສານ, ບົດລາຍງານ, ບົດຄວາມເຕັກໂນໂລຢີ...',
    searchPromotionsPlaceholder: 'ຄົ້ນຫາໂປຣໂມຊັນ ແລະ ສ່ວນຫຼຸດ...',
    tags: 'ຫົວຂໍ້:',
    readMore: 'ອ່ານຕໍ່',
    noResultsFound: 'ບໍ່ພົບຜົນການຄົ້ນຫາ.',
    specialOffersBadge: 'ຂໍ້ສະເໜີພິເສດ',
    promoDescription: 'ຫຼຸດ 30% Cloud Server ສຳລັບລູກຄ້າໃໝ່ທັງໝົດໃນເດືອນນີ້.',
    dedicatedComputePromo: 'Viettel Dedicated Compute',
    dedicatedComputeDesc: 'ເຊີບເວີສະເພາະ 100% ຊັບພະຍາກອນແຍກຕ່າງຫາກ, ປະສິດທິພາບສູງສຸດ & ມາດຕະຖານ TIA-942 Rated 3.',
    viewServiceDetails: 'ເບິ່ງລາຍລະອຽດບໍລິການ',
    searchInFilter: 'ຄົ້ນຫາໃນຕົວກັ່ນຕອງ',
    clearSearch: 'ລຶບການຄົ້ນຫາ',
    searchResultsCount: 'ຜົນການຄົ້ນຫາ',
    filterLabel: 'ຕົວກັ່ນຕອງ',
    allCategoriesLabel: 'ທຸກໝວດໝູ່',
    multiIndustryBadge: 'ວິທີແກ້ໄຂຫຼາຍຂະແໜງການ',
    ecoSystemBadge: 'ລະບົບນິເວດບໍລິການ VIETTEL IDC',
    ecoSystemTitle: 'ໂຄງສ້າງພື້ນຖານດິຈິຕອນ ແລະ ຄລາວຄົບວົງຈອນສຳລັບທຸກທຸລະກິດ',
    ecoSystemSubtitle: 'ຫຼາຍກວ່າ 60+ ບໍລິການມາດຕະຖານສາກົນ, ຕອບສະໜອງມາດຕະຖານຄວາມປອດໄພ ແລະ ການດຳເນີນງານຕໍ່ເນື່ອງ.',
    operationsOptimizationBadge: 'ວິທີແກ້ໄຂການເພີ່ມປະສິດທິພາບການດຳເນີນງານ',
    operationsOptimizationTitle: 'ວິທີແກ້ໄຂສະເພາະດ້ານເພື່ອເພີ່ມປະສິດທິພາບວິສາຫະກິດ',
    operationsOptimizationSubtitle: 'ອອກແບບໂຄງສ້າງພື້ນຖານດິຈິຕອນຕາມ 3 ກຸ່ມ: ໂຄງສ້າງ & ຄລາວ, Dev/Ops & AI, ການເຊື່ອມຕໍ່ & ບ່ອນເຮັດວຽກ',
    partnerNetworkTitle: 'ເຄືອຂ່າຍຄູ່ຮ່ວມງານ & ໂຄງການຮ່ວມມື',
    partnerNetworkSubtitle: 'ຮ່ວມກັນພັດທະນາລະບົບນິເວດຄລາວ ແລະ ຂະຫຍາຍຕະຫຼາດໃນອາຊີຕາເວັນອອກສຽງໃຕ້',
    resellerProgram: 'ໂຄງການຕົວແທນຈຳໜ່າຍ',
    resellerDesc: 'ສ່ວນຫຼຸດທີ່ໜ້າສົນໃຈ ແລະ ການສະໜັບສະໜູນດ້ານເຕັກນິກສຳລັບຄູ່ຮ່ວມງານ.',
    techPartnerProgram: 'ຄູ່ຮ່ວມງານເຕັກໂນໂລຢີຍຸດທະສາດ',
    techPartnerDesc: 'ຮ່ວມມືພັດທະນາວິທີແກ້ໄຂກັບບັນດາກຸ່ມບໍລິສັດຊັ້ນນໍາຂອງໂລກ (Qualcomm, VMware, Cisco).',
    affiliateProgram: 'ໂຄງການ Affiliate Marketing',
    affiliateDesc: 'ຮັບຄ່ານາຍໜ້າປະຈຳເມື່ອແນະນຳລູກຄ້ານຳໃຊ້ບໍລິການ Viettel IDC.',
    distributorProgram: 'ໂຄງການຜູ້ຈັດຈຳໜ່າຍ',
    distributorDesc: 'ນະໂຍບາຍພິເສດ ແລະ ການປົກປ້ອງທຸລະກຳສຳລັບຜູ້ລວມລະບົບຂະໜາດໃຫຍ່.',
    pricingCalculatorTitle: 'ການຄິດໄລ່ລາຄາ & ຕົ້ນທຶນ Viettel Cloud',
    pricingCalculatorSubtitle: 'ຄິດໄລ່ຕົ້ນທຶນໂຄງສ້າງພື້ນຖານດິຈິຕອນ, Cloud Server, Storage ແລະ ແອັບພລິເຄຊັນອັດຕະໂນມັດ.',
    instantPricingTitle: 'ຄິດໄລ່ລາຄາທັນທີ',
    instantPricingSubtitle: 'ອັບເດດຕາມການຕັ້ງຄ່າ',
    transparentTitle: '100% ໂປ່ງໃສ',
    transparentSubtitle: 'ບໍ່ມີຕົ້ນທຶນແອບແຝງ',
    customSpecsTitle: 'ປັບແຕ່ງຕາມໃຈ',
    automatedQuotationTitle: 'ສົ່ງໃບສະເໜີລາຄາອັດຕະໂນມັດ',
    automatedQuotationSubtitle: 'ດາວໂຫຼດ ຫຼື ສົ່ງຄຳຮ້ອງຂໍ'
  },
  ph: {
    home: 'Tahanan',
    services: 'Mga Serbisyo',
    solutions: 'Mga Solusyon',
    pricing: 'Presyo',
    resources: 'Mga Mapagkukunan',
    promotions: 'Mga Promosyon',
    about: 'Tungkol sa Amin',
    partners: 'Mga Kasosyo',
    contact: 'Makipag-ugnayan',
    requestQuote: 'Humingi ng Presyo',
    freeTrial: 'Libreng Pagsubok',
    viewDetails: 'Tingnan ang Detalye',
    searchPlaceholder: 'Maghanap ng mga serbisyo, solusyon...',
    categoryFilter: 'I-filter ayon sa Kategorya',
    all: 'Lahat',
    clear: 'Burahin',
    subscribe: 'Mag-subscribe',
    subscribing: 'Ipinapadala...',
    subscribedSuccess: 'Matagumpay na nag-subscribe sa mga ulat!',
    emailPlaceholder: 'email@company.com',
    pricingStartsFrom: 'Nagsisimula sa',
    contactForPricing: 'Makipag-ugnayan para sa presyo',
    perMonth: '/ buwan',
    month: 'buwan',
    vat: 'VAT (8%)',
    totalEstimated: 'Kabuuang tinatayang buwanan:',
    subtotal: 'Subtotal (hindi kasama ang VAT):',
    addToEstimate: 'Idagdag sa Pagtataya',
    removeFromEstimate: 'Alisin sa pagtataya',
    viewEstimate: 'Tingnan ang Detalyadong Pagtataya',
    estimateEmpty: 'Walang laman ang iyong pagtataya',
    estimateEmptyDesc: 'Pumili ng mga detalye sa anumang serbisyo upang simulan ang pagtataya ng gastos.',
    copied: 'Nakopya na!',
    copySummary: 'Kopyahin ang Buod',
    officialQuotation: 'Humingi ng Opisyal na Presyo',
    specialOffers: 'Espesyal na Alok',
    specialOffersDesc: 'Makatipid ng hanggang 30% sa Cloud Server para sa mga bagong account.',
    exploreDeals: 'Tingnan ang mga alok',
    newest: 'Pinakabago',
    highestDiscount: 'Pinakamalaking Diskwento',
    endingSoon: 'Malapit nang Matapos',
    searchResourcesPlaceholder: 'Maghanap ng mga ulat, gabay, at artikulo...',
    searchPromotionsPlaceholder: 'Maghanap ng mga promo at diskwento...',
    tags: 'Paksa:',
    readMore: 'Magbasa Pa',
    noResultsFound: 'Walang nahanap na resulta para sa iyong paghahanap.',
    specialOffersBadge: 'Espesyal na Alok',
    promoDescription: 'Makatipid ng 30% sa Cloud Server para sa lahat ng bagong enterprise customer.',
    dedicatedComputePromo: 'Viettel Dedicated Compute',
    dedicatedComputeDesc: 'Dedikadong pisikal na server na may 100% nakahiwalay na resources at TIA-942 Rated 3 standard.',
    viewServiceDetails: 'Tingnan ang detalye ng serbisyo',
    searchInFilter: 'Maghanap sa filter',
    clearSearch: 'Burahin ang paghahanap',
    searchResultsCount: 'Mga resulta ng paghahanap',
    filterLabel: 'Filter',
    allCategoriesLabel: 'Lahat ng Kategorya',
    multiIndustryBadge: 'MGA SOLUSYON SA IBA\'T IBANG INDUSTRIYA',
    ecoSystemBadge: 'VIETTEL IDC SERVICE ECOSYSTEM',
    ecoSystemTitle: 'Komprehensibong Imprastraktura ng Digital at Cloud para sa Lahat ng Negosyo',
    ecoSystemSubtitle: 'Higit sa 60+ internasyonal na standardized na serbisyo, sumusunod sa pinakamahigpit na pamantayan ng seguridad.',
    operationsOptimizationBadge: 'PAGPAPAHUSAY SA OPERASYON NG NEGOSYO',
    operationsOptimizationTitle: 'Mga Dalubhasang Solusyon para sa Pag-optimize ng Negosyo',
    operationsOptimizationSubtitle: 'Idinisenyong digital infrastructure ayon sa 3 grupo: Imprastraktura & Cloud, Dev/Ops & AI, Koneksyon & Workspace',
    partnerNetworkTitle: 'Network ng Kasosyo at Mga Programa ng Pakikipagtulungan',
    partnerNetworkSubtitle: 'Sama-samang pagbuo ng Southeast Asia cloud ecosystem at pagpapalawak sa rehiyon',
    resellerProgram: 'Programa ng Reseller',
    resellerDesc: 'Kaakit-akit na diskwento at dedikadong teknikal na suporta para sa mga kasosyo.',
    techPartnerProgram: 'Madiskarteng Kasosyo sa Teknolohiya',
    techPartnerDesc: 'Pakikipagtulungan sa mga pandaigdigang pinuno (Qualcomm, VMware, Cisco).',
    affiliateProgram: 'Affiliate Marketing Program',
    affiliateDesc: 'Tumanggap ng regular na komisyon kapag nagrekomenda ng mga customer sa Viettel IDC.',
    distributorProgram: 'Programa ng Distributor',
    distributorDesc: 'Nangungunang insentibo at proteksyon sa deal para sa mga malalaking system integrator.',
    pricingCalculatorTitle: 'Pagkalkula ng Presyo at Gastos sa Viettel Cloud',
    pricingCalculatorSubtitle: 'Awtomatikong kalkulahin ang digital infrastructure, Cloud Server, Storage at application costs.',
    instantPricingTitle: 'Mabilis na Pagpepresyo',
    instantPricingSubtitle: 'Real-time na updates',
    transparentTitle: '100% Transparent',
    transparentSubtitle: 'Walang nakatagong bayarin',
    customSpecsTitle: 'Custom na Configuration',
    automatedQuotationTitle: 'Awtomatikong Boses ng Presyo',
    automatedQuotationSubtitle: 'I-download o humiling ng payo'
  },
  mm: {
    home: 'ပင်မစာမျက်နှာ',
    services: 'ဝန်ဆောင်မှုများ',
    solutions: 'ဖြေရှင်းချက်များ',
    pricing: 'စျေးနှုန်း',
    resources: 'အရင်းအမြစ်များ',
    promotions: 'ပရိုမိုးရှင်းများ',
    about: 'ကျွန်ုပ်တို့အကြောင်း',
    partners: 'မိတ်ဖက်များ',
    contact: 'ဆက်သွယ်ရန်',
    requestQuote: 'စျေးနှုန်းတောင်းဆိုရန်',
    freeTrial: 'အခမဲ့ စမ်းသပ်သုံးစွဲရန်',
    viewDetails: 'အသေးစိတ် ကြည့်ရှုရန်',
    searchPlaceholder: 'ဝန်ဆောင်မှုများ၊ ဖြေရှင်းချက်များကို ရှာဖွေပါ...',
    categoryFilter: 'အမျိုးအစား စစ်ထုတ်မှု',
    all: 'အားလုံး',
    clear: 'ရှင်းလင်းရန်',
    subscribe: 'စာရင်းသွင်းပါ',
    subscribing: 'ပေးပို့နေပါသည်...',
    subscribedSuccess: 'အစီရင်ခံစာများ ရယူရန် အောင်မြင်စွာ စာရင်းသွင်းပြီးပါပြီ။',
    emailPlaceholder: 'work-email@company.com',
    pricingStartsFrom: 'အနည်းဆုံး',
    contactForPricing: 'စျေးနှုန်းအတွက် ဆက်သွယ်ရန်',
    perMonth: '/ လ',
    month: 'လ',
    vat: 'ကုန်သွယ်လုပ်ငန်းခွန် (VAT 8%)',
    totalEstimated: 'လစဉ် ခန့်မှန်းကုန်ကျစရိတ် စုစုပေါင်း:',
    subtotal: 'VAT မပါဝင်သော စုစုပေါင်း:',
    addToEstimate: 'ကုန်ကျစရိတ် တွက်ချက်မှုတွင် ထည့်သွင်းပါ',
    removeFromEstimate: 'တွက်ချက်မှုမှ ဖယ်ရှားပါ',
    viewEstimate: 'အသေးစိတ် ကုန်ကျစရိတ် ကြည့်ရှုရန်',
    estimateEmpty: 'သင်၏ တွက်ချက်မှုဇယားတွင် အချက်အလက် မရှိသေးပါ',
    estimateEmptyDesc: 'ကုန်ကျစရိတ် စတင်တွက်ချက်ရန် အထက်ပါ ဝန်ဆောင်မှုတစ်ခုခု၏ အသေးစိတ်ကို ရွေးချယ်ပါ။',
    copied: 'ကူးယူပြီးပါပြီ။',
    copySummary: 'အကျဉ်းချုပ်ကို ကူးယူပါ',
    officialQuotation: 'တရားဝင် စျေးနှုန်းလွှာ တောင်းဆိုရန်',
    specialOffers: 'အထူးပရိုမိုးရှင်းများ',
    specialOffersDesc: 'လုပ်ငန်းသုံး Cloud Server အကောင့်သစ်များအတွက် ၃၀% အထိ လျှော့စျေး။',
    exploreDeals: 'ပရိုမိုးရှင်းများ ကြည့်ရှုရန်',
    newest: 'အသစ်ဆုံး',
    highestDiscount: 'လျှော့စျေး အများဆုံး',
    endingSoon: 'မကြာမီ ကုန်ဆုံးမည်',
    searchResourcesPlaceholder: 'စာတမ်းများ၊ အစီရင်ခံစာများ၊ ဆောင်းပါးများကို ရှာဖွေပါ...',
    searchPromotionsPlaceholder: 'အထူးပရိုမိုးရှင်းများနှင့် လျှော့စျေးများကို ရှာဖွေပါ...',
    tags: 'ခေါင်းစဉ်:',
    readMore: 'ဆက်လက်ဖတ်ရှုရန်',
    noResultsFound: 'ရှာဖွေမှုနှင့် ကိုက်ညီသော ရလဒ် မတွေ့ပါ။',
    specialOffersBadge: 'အထူးပရိုမိုးရှင်း',
    promoDescription: 'ဤလအတွင်း လုပ်ငန်းသုံး အကောင့်သစ်များအားလုံးအတွက် Cloud Server ၃၀% လျှော့စျေး။',
    dedicatedComputePromo: 'Viettel Dedicated Compute',
    dedicatedComputeDesc: '၁၀၀% သီးသန့်ခွဲထုတ်ထားသော အရင်းအမြစ်များနှင့် TIA-942 Rated 3 စံချိန်မီ server များ။',
    viewServiceDetails: 'ဝန်ဆောင်မှု အသေးစိတ် ကြည့်ရှုရန်',
    searchInFilter: 'စစ်ထုတ်မှုတွင် ရှာဖွေပါ',
    clearSearch: 'ရှာဖွေမှု ရှင်းလင်းရန်',
    searchResultsCount: 'ရှာဖွေမှု ရလဒ်များ',
    filterLabel: 'စစ်ထုတ်မှု',
    allCategoriesLabel: 'အမျိုးအစား အားလုံး',
    multiIndustryBadge: 'ကဏ္ဍစုံ ဖြေရှင်းချက်များ',
    ecoSystemBadge: 'VIETTEL IDC ဝန်ဆောင်မှု ဂေဟစနစ်',
    ecoSystemTitle: 'စီးပွားရေးလုပ်ငန်း အားလုံးအတွက် ပြည့်စုံသော ဒစ်ဂျစ်တယ်နှင့် Cloud အခြေခံအဆောက်အအုံ',
    ecoSystemSubtitle: 'သတင်းအချက်အလက် လုံခြုံရေးနှင့် စဉ်ဆက်မပြတ် လည်ပတ်မှုအတွက် နိုင်ငံတကာ စံချိန်မီ ဝန်ဆောင်မှု ၆၀ ကျော်။',
    operationsOptimizationBadge: 'လုပ်ငန်းလည်ပတ်မှု အကောင်းဆုံးဖြစ်စေရေး ဖြေရှင်းချက်များ',
    operationsOptimizationTitle: 'လုပ်ငန်းလည်ပတ်မှု ပိုမိုကောင်းမွန်စေမည့် သီးသန့်ဖြေရှင်းချက်များ',
    operationsOptimizationSubtitle: 'ဝန်ဆောင်မှု အုပ်စု ၃ ခုအရ အဆင့်မြင့် ဒစ်ဂျစ်တယ် အခြေခံအဆောက်အအုံ ဒီဇိုင်း: Cloud၊ AI & Dev/Ops၊ ချိတ်ဆက်မှု & Workspace',
    partnerNetworkTitle: 'မိတ်ဖက်ကွန်ရက်နှင့် ပူးပေါင်းဆောင်ရွက်မှု အစီအစဉ်များ',
    partnerNetworkSubtitle: 'အရှေ့တောင်အာရှ Cloud ဂေဟစနစ်ကို အတူတကွ တည်ဆောက်ပြီး ဒေသတွင်း စျေးကွက်ကို ချဲ့ထွင်ခြင်း',
    resellerProgram: 'အရောင်းကိုယ်စားလှယ် အစီအစဉ်',
    resellerDesc: 'အရောင်းမိတ်ဖက်များအတွက် ဆွဲဆောင်မှုရှိသော ကော်မရှင်နှင့် သီးသန့် နည်းပညာ ပံ့ပိုးမှု။',
    techPartnerProgram: 'မဟာဗျူဟာမြောက် နည်းပညာမိတ်ဖက်များ',
    techPartnerDesc: 'ကမ္ဘာ့ထိပ်တန်း ကုမ္ပဏီကြီးများနှင့် ပူးပေါင်း၍ ဖြေရှင်းချက်များ ရေးဆွဲခြင်း (Qualcomm, VMware, Cisco)။',
    affiliateProgram: 'Affiliate Marketing အစီအစဉ်',
    affiliateDesc: 'Viettel IDC သို့ ဖောက်သည်များ ညွှန်းပို့ပေးခြင်းဖြင့် ပုံမှန် ကော်မရှင် ရယူပါ။',
    distributorProgram: 'ဖြန့်ချိရေးကိုယ်စားလှယ် အစီအစဉ်',
    distributorDesc: 'စနစ်ပေါင်းစပ်သူကြီးများအတွက် ထိပ်တန်း အခွင့်အရေးများနှင့် ဦးစားပေး အင်ဂျင်နီယာ အကူအညီ။',
    pricingCalculatorTitle: 'Viettel Cloud စျေးနှုန်းနှင့် ကုန်ကျစရိတ် တွက်ချက်မှု',
    pricingCalculatorSubtitle: 'Cloud Server, Storage နှင့် လုပ်ငန်းသုံး အက်ပ်များအတွက် ကုန်ကျစရိတ်ကို အလိုအလျောက် တွက်ချက်ပါ။',
    instantPricingTitle: 'ချက်ချင်း စျေးနှုန်းတွက်ချက်မှု',
    instantPricingSubtitle: 'စနစ်ပြင်ဆင်မှုအရ အချိန်နှင့်တပြေးညီ ပြောင်းလဲမှု',
    transparentTitle: '၁၀၀% ပွင့်လင်းမြင်သာမှု',
    transparentSubtitle: 'လျှို့ဝှက် ကုန်ကျစရိတ် မရှိခြင်း',
    customSpecsTitle: 'စိတ်ကြိုက် ပြင်ဆင်မှု',
    automatedQuotationTitle: 'အလိုအလျောက် စျေးနှုန်းလွှာ ထုတ်ပေးခြင်း',
    automatedQuotationSubtitle: 'ဒေါင်းလုဒ်လုပ်ပါ သို့မဟုတ် အကြံဉာဏ် တောင်းဆိုပါ'
  },
  kh: {
    home: 'ទំព័រដើម',
    services: 'សេវាកម្ម',
    solutions: 'ដំណោះស្រាយ',
    pricing: 'តារាងតម្លៃ',
    resources: 'ធនធាន',
    promotions: 'ការផ្តល់ជូនពិសេស',
    about: 'អំពីយើង',
    partners: 'ដៃគូ',
    contact: 'ទំនាក់ទំនង',
    requestQuote: 'ស្នើសុំតម្លៃ',
    freeTrial: 'សាកល្បងឥតគិតថ្លៃ',
    viewDetails: 'មើលព័ត៌មានលម្អិត',
    searchPlaceholder: 'ស្វែងរកសេវាកម្ម ដំណោះស្រាយ...',
    categoryFilter: 'តម្រងប្រភេទ',
    all: 'ទាំងអស់',
    clear: 'សម្អាត',
    subscribe: 'ចុះឈ្មោះ',
    subscribing: 'កំពុងផ្ញើ...',
    subscribedSuccess: 'បានចុះឈ្មោះទទួលឯកសារដោយជោគជ័យ!',
    emailPlaceholder: 'email@company.com',
    pricingStartsFrom: 'ចាប់ពី',
    contactForPricing: 'ទាក់ទងសម្រាប់តម្លៃ',
    perMonth: '/ ខែ',
    month: 'ខែ',
    vat: 'ពន្ធអាករ (VAT 8%)',
    totalEstimated: 'ការប៉ាន់ស្មានសរុបប្រចាំខែ:',
    subtotal: 'តម្លៃសរុបមុនគិត VAT:',
    addToEstimate: 'បន្ថែមទៅក្នុងតារាងប៉ាន់ស្មាន',
    removeFromEstimate: 'លុបចេញពីការប៉ាន់ស្មាន',
    viewEstimate: 'មើលតារាងប៉ាន់ស្មានលម្អិត',
    estimateEmpty: 'តារាងប៉ាន់ស្មានរបស់អ្នកទទេ',
    estimateEmptyDesc: 'សូមជ្រើសរើសលក្ខណៈបច្ចេកទេសនៃសេវាកម្មណាមួយដើម្បីចាប់ផ្តើមគណនាថ្លៃដើម។',
    copied: 'បានចម្លង!',
    copySummary: 'ចម្លងសេចក្តីសង្ខេប',
    officialQuotation: 'ស្នើសុំសម្រង់តម្លៃផ្លូវការ',
    specialOffers: 'ការផ្តល់ជូនពិសេស',
    specialOffersDesc: 'ការបញ្ចុះតម្លៃរហូតដល់ ៣០% លើ Cloud Server សម្រាប់គណនីថ្មី។',
    exploreDeals: 'មើលការផ្តល់ជូន',
    newest: 'ថ្មីបំផុត',
    highestDiscount: 'ការបញ្ចុះតម្លៃខ្ពស់បំផុត',
    endingSoon: 'ជិតផុតកំណត់',
    searchResourcesPlaceholder: 'ស្វែងរកឯកសារ បាយការណ៍ អត្ថបទបច្ចេកវិទ្យា...',
    searchPromotionsPlaceholder: 'ស្វែងរកកម្មវិធីបញ្ចុះតម្លៃ...',
    tags: 'ប្រធានបទ:',
    readMore: 'អានបន្ថែម',
    noResultsFound: 'រកមិនឃើញលទ្ធផលដែលត្រូវគ្នា។',
    specialOffersBadge: 'ការផ្តល់ជូនពិសេស',
    promoDescription: 'បញ្ចុះតម្លៃ ៣០% Cloud Server សម្រាប់អតិថិជនថ្មីទាំងអស់ក្នុងខែនេះ។',
    dedicatedComputePromo: 'Viettel Dedicated Compute',
    dedicatedComputeDesc: 'ម៉ាស៊ីនមេផ្ទាល់ខ្លួន ១០០% ធនធានដាច់ដោយឡែក ប្រសិទ្ធភាពខ្ពស់ & ស្តង់ដារ TIA-942 Rated 3។',
    viewServiceDetails: 'មើលព័ត៌មានលម្អិតសេវាកម្ម',
    searchInFilter: 'ស្វែងរកក្នុងតម្រង',
    clearSearch: 'សម្អាតការស្វែងរក',
    searchResultsCount: 'លទ្ធផលស្វែងរក',
    filterLabel: 'តម្រង',
    allCategoriesLabel: 'ប្រភេទទាំងអស់',
    multiIndustryBadge: 'ដំណោះស្រាយពហុឧស្សាហកម្ម',
    ecoSystemBadge: 'ប្រព័ន្ធអេកូឡូស៊ីសេវាកម្ម VIETTEL IDC',
    ecoSystemTitle: 'ហេដ្ឋារចនាសម្ព័ន្ធឌីជីថល & Cloud គ្រប់ជ្រុងជ្រោយសម្រាប់គ្រប់អាជីវកម្ម',
    ecoSystemSubtitle: 'សេវាកម្មស្តង់ដារអន្តរជាតិជាង ៦០+ ឆ្លើយតបតាមស្តង់ដារសន្តិសុខ និងប្រតិបត្តិការជាបន្តបន្ទាប់។',
    operationsOptimizationBadge: 'ដំណោះស្រាយបង្កើនប្រសិទ្ធភាពប្រតិបត្តិការ',
    operationsOptimizationTitle: 'ដំណោះស្រាយឯកទេសដើម្បីបង្កើនប្រសិទ្ធភាពប្រតិបត្តិការសហគ្រាស',
    operationsOptimizationSubtitle: 'រចនាហេដ្ឋារចនាសម្ព័ន្ធឌីជីថលតាម ៣ ក្រុម: ហេដ្ឋារចនាសម្ព័ន្ធ & Cloud, Dev/Ops & AI, ការតភ្ជាប់ & Workspace',
    partnerNetworkTitle: 'បណ្តាញដៃគូ & កម្មវិធីសហប្រតិបត្តិការ',
    partnerNetworkSubtitle: 'រួមគ្នាអភិវឌ្ឍប្រព័ន្ធអេកូឡូស៊ី Cloud និងពង្រីកទីផ្សារនៅអាស៊ីអាគ្នេយ៍',
    resellerProgram: 'កម្មវិធីតំណាងចែកចាយ',
    resellerDesc: 'ការបញ្ចុះតម្លៃទាក់ទាញ និងការគាំទ្របច្ចេកទេសពិសេសសម្រាប់ដៃគូលក់។',
    techPartnerProgram: 'ដៃគូបច្ចេកវិទ្យាយុទ្ធសាស្ត្រ',
    techPartnerDesc: 'សហការបង្កើតដំណោះស្រាយជាមួយក្រុមហ៊ុនឈានមុខគេលើពិភពលោក (Qualcomm, VMware, Cisco)។',
    affiliateProgram: 'កម្មវិធី Affiliate Marketing',
    affiliateDesc: 'ទទួលបានកម្រៃជើងសារទៀងទាត់នៅពេលណែនាំអតិថិជនប្រើប្រាស់សេវាកម្ម Viettel IDC។',
    distributorProgram: 'កម្មវិធីអ្នកចែកចាយ',
    distributorDesc: 'គោលនយោបាយអនុគ្រោះ និងការការពារប្រតិបត្តិការសម្រាប់អ្នករួមបញ្ចូលប្រព័ន្ធធំៗ។',
    pricingCalculatorTitle: 'ការគណនាតម្លៃ & ថ្លៃដើម Viettel Cloud',
    pricingCalculatorSubtitle: 'គណនាថ្លៃដើមហេដ្ឋារចនាសម្ព័ន្ធឌីជីថល Cloud Server, Storage និងកម្មវិធីសហគ្រាសដោយស្វ័យប្រវត្តិ។',
    instantPricingTitle: 'គណនាតម្លៃភ្លាមៗ',
    instantPricingSubtitle: 'ធ្វើបច្ចុប្បន្នភាពតាមការកំណត់',
    transparentTitle: 'តម្លាភាព ១០០%',
    transparentSubtitle: 'គ្មានការចំណាយលាក់កំបាំង',
    customSpecsTitle: 'ការកំណត់តាមបំណង',
    automatedQuotationTitle: 'ការបង្កើតសម្រង់តម្លៃស្វ័យប្រវត្តិ',
    automatedQuotationSubtitle: 'ទាញយក ឬផ្ញើសំណើ'
  }
};

// =========================================================================
// Helper Getter Functions
// =========================================================================
export function getCategoryI18n(categoryId: string, lang: string): CategoryI18n {
  const norm = normalizeLang(lang);
  const cat = CATEGORY_I18N[categoryId];
  if (cat && cat[norm]) return cat[norm];
  if (norm === 'vn' && cat && cat.vn) return cat.vn;
  if (cat && cat.en) return cat.en;
  return { menuLabel: categoryId, description: '' };
}

export function getSubgroupI18n(subgroupId: string, lang: string): string {
  const norm = normalizeLang(lang);
  const sub = SUBGROUP_I18N[subgroupId];
  if (sub && sub[norm]) return sub[norm];
  if (norm === 'vn' && sub && sub.vn) return sub.vn;
  if (sub && sub.en) return sub.en;
  return subgroupId;
}

export function getSolutionI18n(solutionId: string, lang: string): SolutionI18n | null {
  const norm = normalizeLang(lang);
  const sol = SOLUTION_I18N[solutionId];
  if (sol && sol[norm]) return sol[norm];
  if (norm === 'vn') return null;
  if (sol && sol.en) return sol.en;
  return null;
}

export function getIndustryI18n(industryId: string, lang: string): IndustryI18n | null {
  const norm = normalizeLang(lang);
  const ind = INDUSTRY_I18N[industryId];
  if (ind && ind[norm]) return ind[norm];
  if (norm === 'vn') return null;
  if (ind && ind.en) return ind.en;
  return null;
}

export interface ServiceI18n {
  name: string;
  tagline: string;
  cardDescription: string;
  subgroupLabel?: string;
  ctaText?: string;
}

export const SERVICE_I18N: Record<string, Record<LangCode, ServiceI18n>> = {
  'viettel-cloud-server': {
    vn: { name: 'Viettel Cloud Server', tagline: 'Máy chủ ảo • Đàn hồi cao • Đa nhiệm', cardDescription: 'Máy chủ ảo trên nền tảng đám mây của Viettel IDC, tối ưu cho triển khai website, ứng dụng doanh nghiệp.', subgroupLabel: 'Cloud Compute', ctaText: 'Xem chi tiết →' },
    en: { name: 'Viettel Cloud Server', tagline: 'Virtual Server • Highly Elastic • Multipurpose Workloads', cardDescription: 'Virtual servers on Viettel IDC\'s cloud platform, perfect for deploying websites and enterprise apps.', subgroupLabel: 'Cloud Compute', ctaText: 'View details →' },
    la: { name: 'Viettel Cloud Server', tagline: 'ເຊີບເວີສະເໝືອນ • ຍືດຍຸ່ນສູງ • ຫຼາກຫຼາຍໜ້າທີ່', cardDescription: 'ເຊີບເວີສະເໝືອນເທິງຄລາວ Viettel IDC, ເໝາະສຳລັບການຕິດຕັ້ງເວັບໄຊ ແລະ ແອັບພລິເຄຊັນວິສາຫະກິດ.', subgroupLabel: 'Cloud Compute', ctaText: 'ເບິ່ງລາຍລະອຽດ →' },
    ph: { name: 'Viettel Cloud Server', tagline: 'Virtual Server • Elastic • Multipurpose', cardDescription: 'Virtual servers sa Viettel IDC cloud, perpekto para sa pag-deploy ng mga website at app.', subgroupLabel: 'Cloud Compute', ctaText: 'Tignan ang Detalye →' },
    mm: { name: 'Viettel Cloud Server', tagline: 'Virtual Server • လိုသလိုတိုးချဲ့နိုင်မှု • အမျိုးမျိုးသော လုပ်ငန်းဆောင်တာများ', cardDescription: 'Viettel IDC cloud ပေါ်ရှိ virtual servers များ၊ ဝဘ်ဆိုက်နှင့် လုပ်ငန်းသုံး အက်ပ်များအတွက် သင့်လျော်သည်။', subgroupLabel: 'Cloud Compute', ctaText: 'အသေးစိတ်ကြည့်ရန် →' },
    kh: { name: 'Viettel Cloud Server', tagline: 'ម៉ាស៊ីនមេនិម្មិត • អាចបត់បែនបានខ្ពស់ • សម្រាប់គ្រប់កិច្ចការ', cardDescription: 'ម៉ាស៊ីនមេនិម្មិតលើវេទិកា Cloud របស់ Viettel IDC ល្អឥតខ្ចោះសម្រាប់ការដាក់ពង្រាយគេហទំព័រ និងកម្មវិធីសហគ្រាស។', subgroupLabel: 'Cloud Compute', ctaText: 'មើលព័ត៌មានលម្អិត →' }
  },
  'viettel-cloud-gpu': {
    vn: { name: 'Viettel Cloud GPU', tagline: 'GPU Cloud • AI/ML • Xử lý hiệu năng cao', cardDescription: 'Tài nguyên GPU trên đám mây cho các tác vụ tính toán song song lớn như AI/ML, Deep Learning, phân tích Big Data.', subgroupLabel: 'Cloud Compute', ctaText: 'Xem chi tiết →' },
    en: { name: 'Viettel Cloud GPU', tagline: 'GPU Cloud • AI/ML • High Performance Workloads', cardDescription: 'GPU resources on the cloud for workloads needing massive parallel compute like AI/ML, deep learning, big data analytics.', subgroupLabel: 'Cloud Compute', ctaText: 'View details →' },
    la: { name: 'Viettel Cloud GPU', tagline: 'GPU Cloud • AI/ML • ປະສິດທິພາບສູງ', cardDescription: 'ຊັບພະຍາກອນ GPU ເທິງຄລາວສຳລັບວຽກງານທີ່ຕ້ອງການການປະມວນຜົນສູງ ເຊັ່ນ AI/ML, Deep Learning.', subgroupLabel: 'Cloud Compute', ctaText: 'ເບິ່ງລາຍລະອຽດ →' },
    ph: { name: 'Viettel Cloud GPU', tagline: 'GPU Cloud • AI/ML • High Performance', cardDescription: 'GPU resources para sa AI/ML, deep learning, at big data analytics.', subgroupLabel: 'Cloud Compute', ctaText: 'Tignan ang Detalye →' },
    mm: { name: 'Viettel Cloud GPU', tagline: 'GPU Cloud • AI/ML • စွမ်းဆောင်ရည်မြင့်', cardDescription: 'AI/ML, Deep learning နှင့် Big Data ကဲ့သို့သော တွက်ချက်မှုများအတွက် Cloud ပေါ်ရှိ GPU အရင်းအမြစ်များ။', subgroupLabel: 'Cloud Compute', ctaText: 'အသေးစိတ်ကြည့်ရန် →' },
    kh: { name: 'Viettel Cloud GPU', tagline: 'Viettel Cloud GPU • AI/ML • ការគណនាកម្រិតខ្ពស់', cardDescription: 'ធនធាន GPU លើ Cloud សម្រាប់កិច្ចការទាមទារការគណនាខ្លាំងដូចជា AI/ML, Deep Learning និង Big Data analytics។', subgroupLabel: 'Cloud Compute', ctaText: 'មើលព័ត៌មានលម្អិត →' }
  },
  'viettel-cloud-npu': {
    vn: { name: 'Viettel Cloud NPU (vCNPU)', tagline: 'Qualcomm AI 100 • AI Inference • Tối ưu năng lượng', cardDescription: 'Máy chủ ảo trang bị NPU Qualcomm Cloud AI 100 chuyên tối ưu inference AI, Computer Vision, Generative AI.', subgroupLabel: 'Cloud Compute', ctaText: 'Xem chi tiết →' },
    en: { name: 'Viettel Cloud NPU (vCNPU)', tagline: 'Qualcomm AI 100 • AI Inference • Superior Price-Performance', cardDescription: 'Virtual servers powered by Qualcomm Cloud AI 100 NPUs specialized for ultra-efficient AI inference and Computer Vision.', subgroupLabel: 'Cloud Compute', ctaText: 'View details →' },
    la: { name: 'Viettel Cloud NPU (vCNPU)', tagline: 'Qualcomm AI 100 • AI Inference • ປະສິດທິພາບສູງ', cardDescription: 'ເຊີບເວີສະເໝືອນຕິດຕັ້ງ NPU Qualcomm Cloud AI 100 ສຳລັບ AI Inference ແລະ Computer Vision.', subgroupLabel: 'Cloud Compute', ctaText: 'ເບິ່ງລາຍລະອຽດ →' },
    ph: { name: 'Viettel Cloud NPU (vCNPU)', tagline: 'Qualcomm AI 100 • AI Inference', cardDescription: 'Virtual servers na pinapagana ng Qualcomm Cloud AI 100 NPUs para sa AI inference.', subgroupLabel: 'Cloud Compute', ctaText: 'Tignan ang Detalye →' },
    mm: { name: 'Viettel Cloud NPU (vCNPU)', tagline: 'Qualcomm AI 100 • AI Inference • စွမ်းအင်သက်သာ', cardDescription: 'AI inference နှင့် Computer Vision အတွက် Qualcomm Cloud AI 100 NPUs များပါရှိသော virtual servers များ။', subgroupLabel: 'Cloud Compute', ctaText: 'အသေးစိတ်ကြည့်ရန် →' },
    kh: { name: 'Viettel Cloud NPU (vCNPU)', tagline: 'Qualcomm AI 100 • AI Inference • ប្រសិទ្ធភាពថាមពលខ្ពស់', cardDescription: 'ម៉ាស៊ីនមេនិម្មិតបំពាក់ NPU Qualcomm Cloud AI 100 សម្រាប់ AI Inference, Computer Vision និង Generative AI។', subgroupLabel: 'Cloud Compute', ctaText: 'មើលព័ត៌មានលម្អិត →' }
  },
  'viettel-open-kubernetes-service-voks': {
    vn: { name: 'Viettel Kubernetes Service (vKS)', tagline: 'Kubernetes chuẩn CNCF • Cloud-native • Microservices', cardDescription: 'Nền tảng Kubernetes quản lý sẵn sàng giúp doanh nghiệp đóng gói, triển khai và tự động hóa microservices.', subgroupLabel: 'Containers & Kubernetes', ctaText: 'Xem chi tiết →' },
    en: { name: 'Viettel Kubernetes Service (vKS)', tagline: 'CNCF-Certified Kubernetes • Cloud-native • Automated Microservices', cardDescription: 'CNCF-certified managed Kubernetes platform allowing enterprises to deploy and auto-scale container apps.', subgroupLabel: 'Containers & Kubernetes', ctaText: 'View details →' },
    la: { name: 'Viettel Kubernetes Service (vKS)', tagline: 'Kubernetes ມາດຕະຖານ CNCF • Microservices ອັດຕະໂນມັດ', cardDescription: 'ລະບົບ Kubernetes ຄຸ້ມຄອງພ້ອມໃຊ້ງານ ສຳລັບການຕິດຕັ້ງ ແລະ ຂະຫຍາຍແອັບພລິເຄຊັນ.', subgroupLabel: 'Containers & Kubernetes', ctaText: 'ເບິ່ງລາຍລະອຽດ →' },
    ph: { name: 'Viettel Kubernetes Service (vKS)', tagline: 'CNCF-Certified Kubernetes • Microservices', cardDescription: 'Managed Kubernetes platform para sa mabilis na pag-deploy ng containerized applications.', subgroupLabel: 'Containers & Kubernetes', ctaText: 'Tignan ang Detalye →' },
    mm: { name: 'Viettel Kubernetes Service (vKS)', tagline: 'CNCF-Certified Kubernetes • Microservices စီမံခန့်ခွဲမှု', cardDescription: 'လုပ်ငန်းများအတွက် containerized အက်ပ်များကို အလိုအလျောက် ဖြန့်ကျက်နိုင်သော Kubernetes စနစ်။', subgroupLabel: 'Containers & Kubernetes', ctaText: 'အသေးစိတ်ကြည့်ရန် →' },
    kh: { name: 'Viettel Kubernetes Service (vKS)', tagline: 'Kubernetes បញ្ជាក់ដោយ CNCF • Cloud-native • Microservices', cardDescription: 'វេទិកា Kubernetes គ្រប់គ្រងរួចជាស្រេច ជួយសហគ្រាសដាក់ពង្រាយ និងគ្រប់គ្រង microservices ដោយស្វ័យប្រវត្តិ។', subgroupLabel: 'Containers & Kubernetes', ctaText: 'មើលព័ត៌មានលម្អិត →' }
  },
  'viettel-data-center-colocation': {
    vn: { name: 'Viettel Colocation', tagline: 'Thuê chỗ đặt máy chủ • Chuẩn TIA-942 Rated 3', cardDescription: 'Dịch vụ cho thuê chỗ đặt máy chủ tại các trung tâm dữ liệu tiêu chuẩn quốc tế của Viettel IDC, đảm bảo điện nguồn và vận hành 24/7.', subgroupLabel: 'Physical Infrastructure', ctaText: 'Xem chi tiết →' },
    en: { name: 'Viettel Colocation', tagline: 'Colocation • Rack Space • TIA-942 Rated 3 Data Centers', cardDescription: 'Server colocation services at Viettel IDC world-class data centers, designed for reliable physical infrastructure.', subgroupLabel: 'Physical Infrastructure', ctaText: 'View details →' },
    la: { name: 'Viettel Colocation', tagline: 'ບໍລິການຝາກເຊີບເວີ • ມາດຕະຖານ TIA-942 Rated 3', cardDescription: 'ບໍລິການຝາກເຊີບເວີທີ່ສູນຂໍ້ມູນມາດຕະຖານສາກົນຂອງ Viettel IDC, ຮັບປະກັນໄຟຟ້າ ແລະ ລະບົບປະຕິບັດການ 24/7.', subgroupLabel: 'Physical Infrastructure', ctaText: 'ເບິ່ງລາຍລະອຽດ →' },
    ph: { name: 'Viettel Colocation', tagline: 'Colocation • TIA-942 Rated 3 Data Centers', cardDescription: 'Server colocation services sa Viettel IDC world-class data centers.', subgroupLabel: 'Physical Infrastructure', ctaText: 'Tignan ang Detalye →' },
    mm: { name: 'Viettel Colocation', tagline: 'ဆာဗာနေရာငှားရမ်းခြင်း • TIA-942 Rated 3 စံချိန်မီ', cardDescription: 'Viettel IDC ၏ နိုင်ငံတကာစံချိန်မီ Data Center များတွင် ဆာဗာနေရာငှားရမ်းခြင်း ဝန်ဆောင်မှု။', subgroupLabel: 'Physical Infrastructure', ctaText: 'အသေးစိတ်ကြည့်ရန် →' },
    kh: { name: 'Viettel Colocation', tagline: 'សេវាកម្មដាក់ម៉ាស៊ីនមេ • ស្តង់ដារ TIA-942 Rated 3', cardDescription: 'សេវាកម្មដាក់ម៉ាស៊ីនមេនៅមជ្ឈមណ្ឌលទិន្នន័យកម្រិតពិភពលោករបស់ Viettel IDC ធានាថាមពលនិងប្រតិបត្តិការ ២៤/៧។', subgroupLabel: 'Physical Infrastructure', ctaText: 'មើលព័ត៌មានលម្អិត →' }
  },
  'viettel-cloud-object-storage': {
    vn: { name: 'Viettel Cloud Object Storage (vOS)', tagline: 'Lưu trữ Object • Dữ liệu phi cấu trúc • Tương thích S3 API', cardDescription: 'Kho lưu trữ object tương thích S3 khả năng mở rộng cao cho dữ liệu phi cấu trúc, tệp đa phương tiện, bản ghi log.', subgroupLabel: 'Cloud Storage', ctaText: 'Xem chi tiết →' },
    en: { name: 'Viettel Cloud Object Storage (vOS)', tagline: 'Object Storage • Unstructured Data • S3 Compatible API', cardDescription: 'Highly scalable S3-compatible object storage designed for unstructured data, multimedia assets, and logs.', subgroupLabel: 'Cloud Storage', ctaText: 'View details →' },
    la: { name: 'Viettel Cloud Object Storage (vOS)', tagline: 'Object Storage • ຂໍ້ມູນແບບບໍ່ມີໂຄງສ້າງ • S3 Compatible API', cardDescription: 'ບ່ອນຈັດເກັບ Object Storage ທີ່ຂະຫຍາຍໄດ້ສູງ ປະສານງານຜ່ານ S3 API ສຳລັບຂໍ້ມູນມັລຕິມີເດຍ ແລະ ບັນທຶກ.', subgroupLabel: 'Cloud Storage', ctaText: 'ເບິ່ງລາຍລະອຽດ →' },
    ph: { name: 'Viettel Cloud Object Storage (vOS)', tagline: 'Object Storage • Unstructured Data • S3 API', cardDescription: 'Scalable S3-compatible object storage para sa unstructured data at multimedia assets.', subgroupLabel: 'Cloud Storage', ctaText: 'Tignan ang Detalye →' },
    mm: { name: 'Viettel Cloud Object Storage (vOS)', tagline: 'Object Storage • S3 API သဟဇာတဖြစ်သော', cardDescription: 'ဒေတာအမျိုးအစားမရွေး၊ မာလ်တီမီဒီယာဖိုင်များနှင့် လော့ဂ်များအတွက် S3-သဟဇာတဖြစ်သော object storage။', subgroupLabel: 'Cloud Storage', ctaText: 'အသေးစိတ်ကြည့်ရန် →' },
    kh: { name: 'Viettel Cloud Object Storage (vOS)', tagline: 'ទំហំផ្ទុក Object • ទិន្នន័យគ្មានរចនាសម្ព័ន្ធ • S3 Compatible API', cardDescription: 'ឃ្លាំងផ្ទុក object ស្របតាម S3 API ដែលអាចពង្រីកបានខ្ពស់សម្រាប់ទិន្នន័យវីដេអូ រូបភាព និងឯកសារផ្សេងៗ។', subgroupLabel: 'Cloud Storage', ctaText: 'មើលព័ត៌មានលម្អិត →' }
  },
  'viettel-cloud-backup-baas': {
    vn: { name: 'Viettel Cloud Backup (BaaS)', tagline: 'Sao lưu đám mây • An toàn dữ liệu • Phục hồi nhanh', cardDescription: 'Dịch vụ sao lưu dữ liệu tự động lên đám mây, bảo vệ doanh nghiệp khỏi mất mát dữ liệu và mã độc Ransomware.', subgroupLabel: 'Data Protection', ctaText: 'Xem chi tiết →' },
    en: { name: 'Viettel Cloud Backup (BaaS)', tagline: 'Cloud Backup • Data Protection • Fast Recovery', cardDescription: 'Automated cloud backup service protecting enterprise data against accidental loss and ransomware.', subgroupLabel: 'Data Protection', ctaText: 'View details →' },
    la: { name: 'Viettel Cloud Backup (BaaS)', tagline: 'ສຳຮອງຂໍ້ມູນຄລາວ • ປົກປ້ອງຂໍ້ມູນ • ກູ້ຄືນໄວ', cardDescription: 'ບໍລິການສຳຮອງຂໍ້ມູນອັດຕະໂນມັດເທິງຄລາວ ປົກປ້ອງທຸລະກິດຈາກการสูญหาย ແລະ Ransomware.', subgroupLabel: 'Data Protection', ctaText: 'ເບິ່ງລາຍລະອຽດ →' },
    ph: { name: 'Viettel Cloud Backup (BaaS)', tagline: 'Cloud Backup • Data Protection • Fast Recovery', cardDescription: 'Automated cloud backup service protecting enterprise data from loss and ransomware.', subgroupLabel: 'Data Protection', ctaText: 'Tignan ang Detalye →' },
    mm: { name: 'Viettel Cloud Backup (BaaS)', tagline: 'Cloud Backup • ဒေတာကာကွယ်ရေး • အမြန်ပြန်လည်ရယူခြင်း', cardDescription: 'လုပ်ငန်းသုံး ဒေတာများကို ဆုံးရှုံးမှုနှင့် Ransomware မှ ကာကွယ်ပေးသော အလိုအလျောက် Cloud backup ဝန်ဆောင်မှု။', subgroupLabel: 'Data Protection', ctaText: 'အသေးစိတ်ကြည့်ရန် →' },
    kh: { name: 'Viettel Cloud Backup (BaaS)', tagline: 'បម្រុងទុកលើ Cloud • សុវត្ថិភាពទិន្នន័យ • ស្តារឡើងវិញរហ័ស', cardDescription: 'សេវាកម្មបម្រុងទុកទិន្នន័យដោយស្វ័យប្រវត្តិលើ Cloud ការពារទិន្នន័យពីការបាត់បង់ និងការវាយប្រហារ Ransomware។', subgroupLabel: 'Data Protection', ctaText: 'មើលព័ត៌មានលម្អិត →' }
  },
  'viettel-cloud-disaster-recovery': {
    vn: { name: 'Viettel Disaster Recovery (DRaaS)', tagline: 'DRaaS • Đảm bảo kinh doanh liên tục • Phục hồi thảm họa', cardDescription: 'Giải pháp khôi phục dữ liệu và ứng dụng tức thì khi có sự cố thảm họa lớn, đảm bảo vận hành liên tục 24/7.', subgroupLabel: 'Data Protection', ctaText: 'Xem chi tiết →' },
    en: { name: 'Viettel Disaster Recovery (DRaaS)', tagline: 'DRaaS • Business Continuity • Disaster Recovery', cardDescription: 'Instant data and application recovery solutions during major outages, ensuring 24/7 business continuity.', subgroupLabel: 'Data Protection', ctaText: 'View details →' },
    la: { name: 'Viettel Disaster Recovery (DRaaS)', tagline: 'DRaaS • ຄວາມຕໍ່ເນື່ອງທາງທຸລະກິດ • ກູ້ຄືນໄພພິບັດ', cardDescription: 'ວິທີແກ້ໄຂກູ້ຄືນລະບົບ ແລະ ແອັບພລິເຄຊັນທັນທີເມື່ອເກີດເຫດສຸກເສີນ.', subgroupLabel: 'Data Protection', ctaText: 'ເບິ່ງລາຍລະອຽດ →' },
    ph: { name: 'Viettel Disaster Recovery (DRaaS)', tagline: 'DRaaS • Business Continuity', cardDescription: 'Instant disaster recovery solutions ensuring 24/7 business continuity during outages.', subgroupLabel: 'Data Protection', ctaText: 'Tignan ang Detalye →' },
    mm: { name: 'Viettel Disaster Recovery (DRaaS)', tagline: 'DRaaS • လုပ်ငန်းစဉ်များ မပြတ်တောက်စေရေး', cardDescription: 'ပြဿနာကြီးများပေါ်ပေါက်လာသည့်အခါ အချက်အလက်နှင့် အက်ပ်များကို ချက်ချင်းပြန်လည်ရယူနိုင်သော စနစ်။', subgroupLabel: 'Data Protection', ctaText: 'အသေးစိတ်ကြည့်ရန် →' },
    kh: { name: 'Viettel Cloud Disaster Recovery (DRaaS)', tagline: 'DRaaS • ធានាដំណើរការអាជីវកម្មបន្ត • ស្តារប្រព័ន្ធពេលមានអាសន្ន', cardDescription: 'ដំណោះស្រាយស្តារប្រព័ន្ធ និងកម្មវិធីឡើងវិញភ្លាមៗពេលមានអគ្គិភ័យ ឬគ្រោះមហន្តរាយធំ។', subgroupLabel: 'Data Protection', ctaText: 'មើលព័ត៌មានលម្អិត →' }
  },
  'viettel-database-service-vdbs': {
    vn: { name: 'Viettel Database Service (vDBS)', tagline: 'Managed DB • PostgreSQL, MySQL, SQL Server • Hiệu năng cao', cardDescription: 'Cơ sở dữ liệu quản trị tự động, hiệu năng cao và bảo mật tuyệt đối cho các ứng dụng doanh nghiệp.', subgroupLabel: 'Data Platform', ctaText: 'Xem chi tiết →' },
    en: { name: 'Viettel Database Service (vDBS)', tagline: 'Managed DB • PostgreSQL, MySQL, SQL Server • High Performance', cardDescription: 'Fully managed relational database service ensuring high performance, automated backups, and security.', subgroupLabel: 'Data Platform', ctaText: 'View details →' },
    la: { name: 'Viettel Database Service (vDBS)', tagline: 'Managed DB • PostgreSQL, MySQL, SQL Server • ປະສິດທິພາບສູງ', cardDescription: 'ຖານຂໍ້ມູນທີ່ຄຸ້ມຄອງອັດຕະໂນມັດ ປະສິດທິພາບສູງ ແລະ ປອດໄພສຳລັບແອັບພລິເຄຊັນວິສາຫະກິດ.', subgroupLabel: 'Data Platform', ctaText: 'ເບິ່ງລາຍລະອຽດ →' },
    ph: { name: 'Viettel Database Service (vDBS)', tagline: 'Managed DB • PostgreSQL, MySQL • High Performance', cardDescription: 'Fully managed relational database service for enterprise applications.', subgroupLabel: 'Data Platform', ctaText: 'Tignan ang Detalye →' },
    mm: { name: 'Viettel Database Service (vDBS)', tagline: 'Managed DB • PostgreSQL, MySQL • စွမ်းဆောင်ရည်မြင့်', cardDescription: 'လုပ်ငန်းသုံး အက်ပ်များအတွက် အပြည့်အဝ စီမံခန့်ခွဲပေးသော ဒေတာဘေ့စ် ဝန်ဆောင်မှု။', subgroupLabel: 'Data Platform', ctaText: 'အသေးစိတ်ကြည့်ရန် →' },
    kh: { name: 'Viettel Database Service (vDBS)', tagline: 'Managed DB • PostgreSQL, MySQL, SQL Server • ប្រសិទ្ធភាពខ្ពស់', cardDescription: 'មូលដ្ឋានទិន្នន័យគ្រប់គ្រងដោយស្វ័យប្រវត្តិ ប្រសិទ្ធភាពខ្ពស់ និងសុវត្ថិភាពដាច់ខាតសម្រាប់កម្មវិធីសហគ្រាស។', subgroupLabel: 'Data Platform', ctaText: 'មើលព័ត៌មានលម្អិត →' }
  }
};

export function getServiceI18n(serviceId: string, lang: string): ServiceI18n | null {
  const norm = normalizeLang(lang);
  const svc = SERVICE_I18N[serviceId];
  if (svc && svc[norm]) return svc[norm];
  if (norm === 'vn') return null;
  if (svc && svc.en) return svc.en;
  const enFallback = SERVICE_EN_TRANSLATIONS[serviceId];
  if (enFallback) return enFallback;
  return null;
}

export function getCommonUII18n(lang: string): CommonUII18n {
  const norm = normalizeLang(lang);
  return COMMON_UI_I18N[norm] || COMMON_UI_I18N.vn;
}

