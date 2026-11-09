'use client';

import React, { useState, useEffect, lazy, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import { parsePathToMarketAndLanguage, buildLocalizedHref } from '../../utils/routingMatrix';
import { ServiceNotFound } from '../common/ServiceNotFound';
import { ALL_SERVICES } from '../../data/sitemapData';

// Lazy-load bespoke detail components strictly on demand
const CloudServerDetailPage = lazy(() => import('../service-detail/CloudServerDetailPage').then(m => ({ default: m.CloudServerDetailPage })));
const CloudGPUDetailPage = lazy(() => import('../service-detail/CloudGPUDetailPage').then(m => ({ default: m.CloudGPUDetailPage })));
const CloudObjectStorageDetailPage = lazy(() => import('../service-detail/CloudObjectStorageDetailPage').then(m => ({ default: m.CloudObjectStorageDetailPage })));
const ColocationDetailPage = lazy(() => import('../service-detail/ColocationDetailPage').then(m => ({ default: m.ColocationDetailPage })));
const VirtualSocDetailPage = lazy(() => import('../service-detail/VirtualSocDetailPage').then(m => ({ default: m.VirtualSocDetailPage })));

const CloudWafDetailPage = lazy(() => import('../service-detail/CloudWafDetailPage').then(m => ({ default: m.CloudWafDetailPage })));
const AntiDdosDetailPage = lazy(() => import('../service-detail/AntiDdosDetailPage').then(m => ({ default: m.AntiDdosDetailPage })));
const CloudBackupDetailPage = lazy(() => import('../service-detail/CloudBackupDetailPage').then(m => ({ default: m.CloudBackupDetailPage })));
const CloudDRDetailPage = lazy(() => import('../service-detail/CloudDRDetailPage').then(m => ({ default: m.CloudDRDetailPage })));
const CloudMigrationDetailPage = lazy(() => import('../service-detail/CloudMigrationDetailPage').then(m => ({ default: m.CloudMigrationDetailPage })));
const CloudFileStorageDetailPage = lazy(() => import('../service-detail/CloudFileStorageDetailPage').then(m => ({ default: m.CloudFileStorageDetailPage })));
const CloudServerVMwareDetailPage = lazy(() => import('../service-detail/CloudServerVMwareDetailPage').then(m => ({ default: m.CloudServerVMwareDetailPage })));
const VirtualPrivateCloudDetailPage = lazy(() => import('../service-detail/VirtualPrivateCloudDetailPage').then(m => ({ default: m.VirtualPrivateCloudDetailPage })));
const DedicatedComputeDetailPage = lazy(() => import('../service-detail/DedicatedComputeDetailPage').then(m => ({ default: m.DedicatedComputeDetailPage })));
const DedicatedPrivateCloudDetailPage = lazy(() => import('../service-detail/DedicatedPrivateCloudDetailPage').then(m => ({ default: m.DedicatedPrivateCloudDetailPage })));
const ManagedPrivateCloudDetailPage = lazy(() => import('../service-detail/ManagedPrivateCloudDetailPage').then(m => ({ default: m.ManagedPrivateCloudDetailPage })));
const OpenPrivateCloudDetailPage = lazy(() => import('../service-detail/OpenPrivateCloudDetailPage').then(m => ({ default: m.OpenPrivateCloudDetailPage })));
const OpenDedicatedPrivateCloudDetailPage = lazy(() => import('../service-detail/OpenDedicatedPrivateCloudDetailPage').then(m => ({ default: m.OpenDedicatedPrivateCloudDetailPage })));
const CloudNPUDetailPage = lazy(() => import('../service-detail/CloudNPUDetailPage').then(m => ({ default: m.CloudNPUDetailPage })));
const VMaaSDetailPage = lazy(() => import('../service-detail/VMaaSDetailPage').then(m => ({ default: m.VMaaSDetailPage })));
const EndpointSecurityDetailPage = lazy(() => import('../service-detail/EndpointSecurityDetailPage').then(m => ({ default: m.EndpointSecurityDetailPage })));
const ThreatIntelligenceDetailPage = lazy(() => import('../service-detail/ThreatIntelligenceDetailPage').then(m => ({ default: m.ThreatIntelligenceDetailPage })));
const ThreatHuntingDetailPage = lazy(() => import('../service-detail/ThreatHuntingDetailPage').then(m => ({ default: m.ThreatHuntingDetailPage })));
const CsmpDetailPage = lazy(() => import('../service-detail/CsmpDetailPage').then(m => ({ default: m.CsmpDetailPage })));
const KubernetesServiceDetailPage = lazy(() => import('../service-detail/KubernetesServiceDetailPage').then(m => ({ default: m.KubernetesServiceDetailPage })));
const CloudConnectDetailPage = lazy(() => import('../service-detail/CloudConnectDetailPage').then(m => ({ default: m.CloudConnectDetailPage })));
const HybridConnectDetailPage = lazy(() => import('../service-detail/HybridConnectDetailPage').then(m => ({ default: m.HybridConnectDetailPage })));
const SdWanDetailPage = lazy(() => import('../service-detail/SdWanDetailPage').then(m => ({ default: m.SdWanDetailPage })));
const VoiceBrandnameDetailPage = lazy(() => import('../service-detail/VoiceBrandnameDetailPage').then(m => ({ default: m.VoiceBrandnameDetailPage })));
const VAPMDetailPage = lazy(() => import('../service-detail/VAPMDetailPage').then(m => ({ default: m.VAPMDetailPage })));
const VCMPDetailPage = lazy(() => import('../service-detail/VCMPDetailPage').then(m => ({ default: m.VCMPDetailPage })));
const InterconnectionDetailPage = lazy(() => import('../service-detail/InterconnectionDetailPage').then(m => ({ default: m.InterconnectionDetailPage })));
const WorkspaceDetailPage = lazy(() => import('../service-detail/WorkspaceDetailPage').then(m => ({ default: m.WorkspaceDetailPage })));
const ManagedServicesDetailPage = lazy(() => import('../service-detail/ManagedServicesDetailPage').then(m => ({ default: m.ManagedServicesDetailPage })));
const CloudFirewallDetailPage = lazy(() => import('../service-detail/CloudFirewallDetailPage').then(m => ({ default: m.CloudFirewallDetailPage })));

const SolutionsHubPage = lazy(() => import('../service-detail/SolutionsHubPage').then(m => ({ default: m.SolutionsHubPage })));
const SolutionDetailPage = lazy(() => import('../service-detail/SolutionDetailPage').then(m => ({ default: m.SolutionDetailPage })));
const ServicesHubPage = lazy(() => import('../service-detail/ServicesHubPage').then(m => ({ default: m.ServicesHubPage })));

const StandardServiceDetailPage = lazy(() => import('../service-detail/StandardServiceDetailPage').then(m => ({ default: m.StandardServiceDetailPage })));
const CatalogServiceDetailPage = lazy(() => import('../service-detail/CatalogServiceDetailPage').then(m => ({ default: m.CatalogServiceDetailPage })));
const AboutPage = lazy(() => import('../about/AboutPage').then(m => ({ default: m.AboutPage })));
const PartnersRouter = lazy(() => import('../partners/PartnersRouter').then(m => ({ default: m.PartnersRouter })));
const PricingCalculatorPage = lazy(() => import('../pricing/PricingCalculatorPage').then(m => ({ default: m.PricingCalculatorPage })));
const PromotionsPage = lazy(() => import('../promotions/PromotionsPage').then(m => ({ default: m.PromotionsPage })));
const ResourcesPage = lazy(() => import('../resources/ResourcesPage').then(m => ({ default: m.ResourcesPage })));
const HomePage = lazy(() => import('../home/HomePage').then(m => ({ default: m.HomePage })));

const LoadingSpinner = () => (
  <div className="min-h-[60vh] flex items-center justify-center py-24">
    <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
  </div>
);

interface DynamicSlugRouterProps {
  fullPath: string;
}

export const DynamicSlugRouter: React.FC<DynamicSlugRouterProps> = ({ fullPath: initialFullPath }) => {
  const pathname = usePathname() || initialFullPath;
  const { currentMarket, currentLanguage } = useLanguage();
  const parsed = parsePathToMarketAndLanguage(pathname);
  const pureSlug = parsed.pureSlug.toLowerCase().replace(/\/+$/, '') || '/';
  
  const [standardConfig, setStandardConfig] = useState<any>(null);
  const [isResolving, setIsResolving] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsResolving(true);

    import('../../data/serviceManifest').then(async ({ resolveServiceIdFromPath, loadStandardServiceConfig }) => {
      if (!isMounted) return;
      const serviceId = resolveServiceIdFromPath(pureSlug);
      if (serviceId) {
        const config = await loadStandardServiceConfig(serviceId);
        if (isMounted) {
          setStandardConfig(config);
          setIsResolving(false);
        }
      } else {
        if (isMounted) {
          setStandardConfig(null);
          setIsResolving(false);
        }
      }
    }).catch(() => {
      if (isMounted) {
        setStandardConfig(null);
        setIsResolving(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [pureSlug]);

  const handleNavigateHome = () => {
    window.location.href = parsed.routePrefix || '/';
  };

  const handleNavigatePath = (path: string) => {
    window.location.href = buildLocalizedHref(path, currentMarket.code, currentLanguage);
  };

  // 1. Market home page (e.g. /en-vn, /la, etc.)
  if (pureSlug === '/' || pureSlug === '') {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <HomePage />
      </Suspense>
    );
  }

  // 2. Bespoke Hub Routes
  if (pureSlug === '/pricing' || pureSlug === '/bang-gia' || pureSlug === '/pricing-calculator' || pureSlug === '/tinh-gia') {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <PricingCalculatorPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} />
      </Suspense>
    );
  }

  if (pureSlug.startsWith('/about') || pureSlug.startsWith('/gioi-thieu')) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <AboutPage currentMarket={currentMarket} currentPath={pureSlug} onNavigateHome={handleNavigateHome} onNavigate={handleNavigatePath} />
      </Suspense>
    );
  }

  if (pureSlug.startsWith('/partners') || pureSlug.startsWith('/doi-tac')) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <PartnersRouter normalizedPath={pureSlug} currentMarket={currentMarket} currentPath={pureSlug} onNavigateHome={handleNavigateHome} onNavigate={handleNavigatePath} />
      </Suspense>
    );
  }

  if (pureSlug.startsWith('/promotions') || pureSlug.startsWith('/khuyen-mai')) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <PromotionsPage />
      </Suspense>
    );
  }

  if (pureSlug.startsWith('/resources') || pureSlug.startsWith('/tai-nguyen')) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <ResourcesPage />
      </Suspense>
    );
  }

  // 3. Solutions Routes
  if (pureSlug === '/solutions' || pureSlug === '/giai-phap') {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <SolutionsHubPage />
      </Suspense>
    );
  }

  if (pureSlug.startsWith('/solutions/') || pureSlug.startsWith('/giai-phap/')) {
    const parts = pureSlug.split('/').filter(Boolean);
    const solutionId = parts[parts.length - 1];
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <SolutionDetailPage
          solutionId={solutionId}
          currentMarket={currentMarket}
          onNavigateHome={handleNavigateHome}
          onNavigatePath={handleNavigatePath}
        />
      </Suspense>
    );
  }

  // 3b. Services Catalog Hub & Category Pillar Routes
  const servicePillars: Record<string, string> = {
    '/services': 'all',
    '/dich-vu': 'all',
    '/services/compute': 'compute',
    '/services/dien-toan-dam-may': 'compute',
    '/dich-vu/compute': 'compute',
    '/services/data-center': 'data-center',
    '/services/trung-tam-du-lieu': 'data-center',
    '/dich-vu/data-center': 'data-center',
    '/services/storage': 'storage',
    '/services/luu-tru': 'storage',
    '/dich-vu/storage': 'storage',
    '/services/database': 'database',
    '/services/co-so-du-lieu': 'database',
    '/dich-vu/database': 'database',
    '/services/containers': 'containers',
    '/services/paas-containers': 'containers',
    '/dich-vu/containers': 'containers',
    '/services/networking': 'networking',
    '/services/mang-ket-noi': 'networking',
    '/dich-vu/networking': 'networking',
    '/services/security': 'security',
    '/services/an-ninh-mang': 'security',
    '/dich-vu/security': 'security',
    '/services/cloud-operations': 'cloud-operations',
    '/services/van-hanh-dam-may': 'cloud-operations',
    '/dich-vu/cloud-operations': 'cloud-operations',
    '/services/digital-services': 'digital-services',
    '/services/digital-workplace': 'digital-services',
    '/services/khong-gian-lam-viec-so': 'digital-services',
    '/dich-vu/digital-services': 'digital-services',
  };

  if (servicePillars[pureSlug]) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <ServicesHubPage initialCategory={servicePillars[pureSlug]} />
      </Suspense>
    );
  }

  // 4. Bespoke Service Detail Page Matches
  if (pureSlug.includes('cloud-server-vmware') || pureSlug.includes('vmware')) {
    return <Suspense fallback={<LoadingSpinner />}><CloudServerVMwareDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} /></Suspense>;
  }
  if (pureSlug.includes('cloud-server') || pureSlug.includes('viettel-cloud-server')) {
    return <Suspense fallback={<LoadingSpinner />}><CloudServerDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} /></Suspense>;
  }
  if (pureSlug.includes('cloud-gpu') || pureSlug.includes('viettel-cloud-gpu')) {
    return <Suspense fallback={<LoadingSpinner />}><CloudGPUDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} /></Suspense>;
  }
  if (pureSlug.includes('cloud-object-storage') || pureSlug.includes('object-storage')) {
    return <Suspense fallback={<LoadingSpinner />}><CloudObjectStorageDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} /></Suspense>;
  }
  if (pureSlug.includes('colocation') || pureSlug.includes('cho-thue-cho-dat')) {
    return <Suspense fallback={<LoadingSpinner />}><ColocationDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} /></Suspense>;
  }
  if (pureSlug.includes('virtual-soc') || pureSlug.includes('trung-tam-dieu-hanh-an-ninh-mang') || pureSlug.endsWith('/soc') || pureSlug.includes('/soc/')) {
    return <Suspense fallback={<LoadingSpinner />}><VirtualSocDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} /></Suspense>;
  }
  if (pureSlug.includes('managed-service') || pureSlug.includes('dich-vu-quan-tri') || pureSlug.includes('it-outsourcing')) {
    return <Suspense fallback={<LoadingSpinner />}><ManagedServicesDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('cloud-firewall') || pureSlug.includes('ngfw')) {
    return <Suspense fallback={<LoadingSpinner />}><CloudFirewallDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('voice-brandname') || pureSlug.includes('tong-dai-thuong-hieu') || pureSlug.includes('cuoc-goi-thuong-hieu')) {
    return <Suspense fallback={<LoadingSpinner />}><VoiceBrandnameDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('vapm') || pureSlug.includes('application-performance-monitoring') || pureSlug.includes('giam-sat-hieu-nang')) {
    return <Suspense fallback={<LoadingSpinner />}><VAPMDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('vcmp') || pureSlug.includes('cloud-management-platform') || pureSlug.includes('nen-tang-quan-tri')) {
    return <Suspense fallback={<LoadingSpinner />}><VCMPDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('sd-wan') || pureSlug.includes('sdwan')) {
    return <Suspense fallback={<LoadingSpinner />}><SdWanDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('hybrid-connect') || pureSlug.includes('ket-noi-hybrid')) {
    return <Suspense fallback={<LoadingSpinner />}><HybridConnectDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('cloud-connect') || pureSlug.includes('direct-connect')) {
    return <Suspense fallback={<LoadingSpinner />}><CloudConnectDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('interconnection') || pureSlug.includes('cross-connect') || pureSlug.includes('internet-exchange')) {
    return <Suspense fallback={<LoadingSpinner />}><InterconnectionDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('cloud-file-storage') || pureSlug.includes('file-storage') || pureSlug.includes('vcfs')) {
    return <Suspense fallback={<LoadingSpinner />}><CloudFileStorageDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('cloud-dr') || pureSlug.includes('disaster-recovery') || pureSlug.includes('khoi-phuc-tham-hoa')) {
    return <Suspense fallback={<LoadingSpinner />}><CloudDRDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('cloud-migration') || pureSlug.includes('dich-chuyen-dam-may')) {
    return <Suspense fallback={<LoadingSpinner />}><CloudMigrationDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('cloud-waf') || pureSlug.includes('cwaf') || pureSlug.includes('tuong-lua-ung-dung-web')) {
    return <Suspense fallback={<LoadingSpinner />}><CloudWafDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('anti-ddos') || pureSlug.includes('antiddos') || pureSlug.includes('chong-tan-cong-ddos')) {
    return <Suspense fallback={<LoadingSpinner />}><AntiDdosDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('endpoint-security') || pureSlug.includes('edr') || pureSlug.includes('bao-ve-diem-cuoi')) {
    return <Suspense fallback={<LoadingSpinner />}><EndpointSecurityDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('threat-intelligence') || pureSlug.includes('tinh-bao-moi-de-doa')) {
    return <Suspense fallback={<LoadingSpinner />}><ThreatIntelligenceDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('threat-hunting') || pureSlug.includes('san-lung-moi-de-doa')) {
    return <Suspense fallback={<LoadingSpinner />}><ThreatHuntingDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('csmp') || pureSlug.includes('cloud-security-management') || pureSlug.includes('cloudrity') || pureSlug.includes('vcloudrity')) {
    return <Suspense fallback={<LoadingSpinner />}><CsmpDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('cloud-backup') || pureSlug.includes('sao-luu-dam-may')) {
    return <Suspense fallback={<LoadingSpinner />}><CloudBackupDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('cloud-npu') || pureSlug.includes('npu')) {
    return <Suspense fallback={<LoadingSpinner />}><CloudNPUDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('vmaas') || pureSlug.includes('vmware-as-a-service') || pureSlug.includes('model-as-a-service')) {
    return <Suspense fallback={<LoadingSpinner />}><VMaaSDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} onNavigateService={handleNavigatePath} /></Suspense>;
  }
  if (pureSlug.includes('virtual-private-cloud') || pureSlug.includes('vpc')) {
    return <Suspense fallback={<LoadingSpinner />}><VirtualPrivateCloudDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} /></Suspense>;
  }
  if (pureSlug.includes('dedicated-compute') || pureSlug.includes('may-chu-dung-rieng') || pureSlug.includes('server-leasing') || pureSlug.includes('bare-metal') || pureSlug.includes('cho-thue-may-chu')) {
    return <Suspense fallback={<LoadingSpinner />}><DedicatedComputeDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} /></Suspense>;
  }
  if (pureSlug.includes('open-dedicated-private-cloud')) {
    return <Suspense fallback={<LoadingSpinner />}><OpenDedicatedPrivateCloudDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} /></Suspense>;
  }
  if (pureSlug.includes('managed-private-cloud')) {
    return <Suspense fallback={<LoadingSpinner />}><ManagedPrivateCloudDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} /></Suspense>;
  }
  if (pureSlug.includes('open-private-cloud')) {
    return <Suspense fallback={<LoadingSpinner />}><OpenPrivateCloudDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} /></Suspense>;
  }
  if (pureSlug.includes('dedicated-private-cloud') || pureSlug.includes('private-cloud')) {
    return <Suspense fallback={<LoadingSpinner />}><DedicatedPrivateCloudDetailPage currentMarket={currentMarket} onNavigateHome={handleNavigateHome} /></Suspense>;
  }

  // 5. Standard Service Fallback
  if (isResolving) {
    return <LoadingSpinner />;
  }

  if (standardConfig) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <StandardServiceDetailPage
          config={standardConfig}
          currentMarket={currentMarket}
          onNavigateHome={handleNavigateHome}
          onNavigatePath={handleNavigatePath}
        />
      </Suspense>
    );
  }

  // 6. Catalog fallback — keep canonical published routes usable even without bespoke UI.
  const catalogService = ALL_SERVICES.find(
    (service) => (service.canonicalPath.toLowerCase().replace(/\/+$/, '') || '/') === pureSlug
  );
  if (catalogService) {
    return <Suspense fallback={<LoadingSpinner />}><CatalogServiceDetailPage service={catalogService} /></Suspense>;
  }

  // 7. Unmatched 404
  return <ServiceNotFound onNavigateHome={handleNavigateHome} />;
};
