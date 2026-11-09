import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface TechPartner {
  name: string;
  code: string;
  logoUrl: string;
}

export const TechPartnersMarquee: React.FC = () => {
  const { t } = useLanguage();
  const techPartners: TechPartner[] = [
    {
      name: 'Microsoft',
      code: 'MSFT',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    },
    {
      name: 'VMware',
      code: 'VMW',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/VMware_logo.svg',
    },
    {
      name: 'Amazon Web Services',
      code: 'AWS',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    },
    {
      name: 'Cisco Systems',
      code: 'CSCO',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg',
    },
    {
      name: 'Intel',
      code: 'INTC',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg',
    },
    {
      name: 'Dell Technologies',
      code: 'DELL',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.svg',
    },
    {
      name: 'NVIDIA',
      code: 'NVDA',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg',
    },
    {
      name: 'Red Hat',
      code: 'RHT',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg',
    },
    {
      name: 'Fortinet',
      code: 'FTNT',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Fortinet_logo.svg',
    },
    {
      name: 'Veeam',
      code: 'VEEM',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Veeam_logo.svg',
    },
    {
      name: 'Oracle',
      code: 'ORCL',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    },
    {
      name: 'SAP',
      code: 'SAP',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
    },
  ];

  // Duplicate list for infinite continuous marquee loop
  const marqueeItems = [...techPartners, ...techPartners];

  return (
    <section className="bg-slate-50 border-b border-[var(--vidc-color-border-default)] py-8 overflow-hidden">
      <div className="vidc-container">
        <p className="text-[var(--vidc-type-overline-size)] font-bold uppercase tracking-[var(--vidc-type-overline-spacing)] text-[var(--vidc-color-text-muted)] text-center mb-4">
          {t.techPartnersSection.title}
        </p>

        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 sm:before:w-20 before:bg-gradient-to-r before:from-slate-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-10 sm:after:w-20 after:bg-gradient-to-l after:from-slate-50 after:to-transparent">
          <div className="animate-marquee-smooth flex items-center gap-6 py-1">
            {marqueeItems.map((item, idx) => (
              <TechPartnerCard key={`${item.code}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechPartnerCard: React.FC<{ item: TechPartner }> = ({ item }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="group flex items-center justify-center gap-3 px-4 sm:px-6 py-2 shrink-0 h-12 min-w-[130px] cursor-pointer"
      title={item.name}
    >
      {!imgError ? (
        <img alt={item.name} src={item.logoUrl} referrerPolicy="no-referrer" onError={() => setImgError(true)}
          className="h-6 sm:h-7 w-auto max-w-[120px] object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        />
      ) : (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
            {item.code}
          </div>
          <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 whitespace-nowrap transition-colors duration-300">{item.name}</span>
        </div>
      )}
    </div>
  );
};
