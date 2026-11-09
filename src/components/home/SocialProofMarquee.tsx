import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface ClientBrand {
  name: string;
  code: string;
  logoUrl: string;
}

export const SocialProofMarquee: React.FC = () => {
  const { t } = useLanguage();
  const clientLogos: ClientBrand[] = [
    {
      name: 'VTVcab',
      code: 'VTVcab',
      logoUrl: 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1787055795/VTVcab_qfuoox.svg',
    },
    {
      name: 'VIB',
      code: 'VIB',
      logoUrl: 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1787055794/VIB_gpba8j.svg',
    },
    {
      name: 'MBBank',
      code: 'MBBank',
      logoUrl: 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1787055794/MBBank_qp016g.svg',
    },
    {
      name: 'VTV',
      code: 'VTV',
      logoUrl: 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1787055794/VTV_jtvzbu.svg',
    },
    {
      name: 'Bộ Y Tế',
      code: 'MOH',
      logoUrl: 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1787055794/Ministry_of_Health__Vietnam__Logo_1_rnuktz.svg',
    },
    {
      name: 'BIDV',
      code: 'BIDV',
      logoUrl: 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1787055794/Logo_Bidv_mo%CC%9B%CC%81i_1_iichdg.svg',
    },
    {
      name: 'Đối tác 1',
      code: 'Layer1',
      logoUrl: 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1787055793/layer1_iwvf52.svg',
    },
    {
      name: 'Đối tác 2',
      code: 'Group10',
      logoUrl: 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1787055793/Group_10_xltoku.svg',
    },
    {
      name: 'Đối tác 3',
      code: 'Group12',
      logoUrl: 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1787055792/Group_12_f1dmaj.svg',
    },
    {
      name: 'Đối tác 4',
      code: 'Group13',
      logoUrl: 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1787055792/Group_13_xj2qfc.svg',
    },
    {
      name: 'Đối tác 5',
      code: 'Group9',
      logoUrl: 'https://res.cloudinary.com/dpyizq1m2/image/upload/v1787055792/Group_9_ct4dy3.svg',
    },
  ];

  // Duplicate items array for a perfectly smooth 100% infinite continuous loop
  const marqueeItems = [...clientLogos, ...clientLogos];

  return (
    <section className="bg-white border-y border-slate-200/80 py-4 sm:py-5 overflow-hidden">
      <div className="vidc-container">
        <p className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-slate-500 text-center mb-3 px-4">
          {t.socialProof.title}
        </p>

        {/* Marquee Track Container bounded by vidc-container with gradient edge fades */}
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 sm:before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-10 sm:after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
          <div className="animate-marquee-smooth flex items-center gap-8 sm:gap-12 py-1">
            {marqueeItems.map((item, idx) => (
              <LogoCard key={`${item.code}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LogoCard: React.FC<{ item: ClientBrand }> = ({ item }) => {
  return (
    <div
      className="group flex items-center justify-center px-3.5 sm:px-5 py-1 shrink-0 h-10 sm:h-12 min-w-[120px] max-w-[180px] cursor-pointer"
      title={item.name}
    >
      <img alt={item.name} src={item.logoUrl} referrerPolicy="no-referrer" className="h-8 sm:h-9 w-auto max-w-[160px] object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" />
    </div>
  );
};

