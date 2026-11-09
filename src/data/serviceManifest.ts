import { ServiceDetailConfig } from '../types/serviceDetail';

export type ServicePartition = 'part1' | 'part2' | 'part2b' | 'part3' | 'part4' | 'part5' | 'workspace';

export interface ServiceManifestEntry {
  serviceId: string;
  partition: ServicePartition;
  pillar: string;
  nameVi: string;
  nameEn: string;
}

export const SERVICE_MANIFEST: Record<string, ServiceManifestEntry> = {
  // Part 1
  'vks': { serviceId: 'vks', partition: 'part1', pillar: 'compute', nameVi: 'Viettel Kubernetes Service', nameEn: 'Viettel Kubernetes Service' },
  'vcr': { serviceId: 'vcr', partition: 'part1', pillar: 'compute', nameVi: 'Viettel Container Registry', nameEn: 'Viettel Container Registry' },
  'vmks': { serviceId: 'vmks', partition: 'part1', pillar: 'compute', nameVi: 'Viettel Managed Kubernetes Service', nameEn: 'Viettel Managed Kubernetes Service' },
  'vdbs': { serviceId: 'vdbs', partition: 'part1', pillar: 'database', nameVi: 'Viettel Database Service', nameEn: 'Viettel Database Service' },
  'domain': { serviceId: 'domain', partition: 'part1', pillar: 'hosting', nameVi: 'Tên miền', nameEn: 'Domain Name' },
  'web-hosting': { serviceId: 'web-hosting', partition: 'part1', pillar: 'hosting', nameVi: 'Web Hosting', nameEn: 'Web Hosting' },

  // Part 2
  'email-hosting': { serviceId: 'email-hosting', partition: 'part2', pillar: 'hosting', nameVi: 'Email Hosting', nameEn: 'Email Hosting' },
  'ssl': { serviceId: 'ssl', partition: 'part2', pillar: 'security', nameVi: 'Chứng chỉ SSL', nameEn: 'SSL Certificate' },
  'microsoft-365': { serviceId: 'microsoft-365', partition: 'part2', pillar: 'digital-workplace', nameVi: 'Microsoft 365', nameEn: 'Microsoft 365' },

  // Part 2B
  'license-leasing': { serviceId: 'license-leasing', partition: 'part2b', pillar: 'digital-workplace', nameVi: 'Bản quyền phần mềm', nameEn: 'Software License Leasing' },
  'drive': { serviceId: 'drive', partition: 'part2b', pillar: 'digital-workplace', nameVi: 'Viettel Drive', nameEn: 'Viettel Drive' },
  'cloud-pc': { serviceId: 'cloud-pc', partition: 'part2b', pillar: 'digital-workplace', nameVi: 'Viettel Cloud PC', nameEn: 'Viettel Cloud PC' },

  // Part 3
  'cloud-desktop': { serviceId: 'cloud-desktop', partition: 'part3', pillar: 'compute', nameVi: 'Viettel Cloud Desktop', nameEn: 'Viettel Cloud Desktop' },
  'vapig': { serviceId: 'vapig', partition: 'part3', pillar: 'compute', nameVi: 'Viettel API Gateway', nameEn: 'Viettel API Gateway' },
  'cloudwatch': { serviceId: 'cloudwatch', partition: 'part3', pillar: 'management', nameVi: 'Viettel CloudWatch', nameEn: 'Viettel CloudWatch' },

  // Part 4
  'vkqs': { serviceId: 'vkqs', partition: 'part4', pillar: 'database', nameVi: 'Viettel Queue Service', nameEn: 'Viettel Queue Service' },
  'vse': { serviceId: 'vse', partition: 'part4', pillar: 'ai-data', nameVi: 'Viettel Search Engine', nameEn: 'Viettel Search Engine' },
  'vcas': { serviceId: 'vcas', partition: 'part4', pillar: 'database', nameVi: 'Viettel Caching Service', nameEn: 'Viettel Caching Service' },

  // Part 5
  'data-center-consulting': { serviceId: 'data-center-consulting', partition: 'part5', pillar: 'data-center', nameVi: 'Tư vấn Data Center', nameEn: 'Data Center Consulting' },
  'data-archiving': { serviceId: 'data-archiving', partition: 'part5', pillar: 'storage', nameVi: 'Viettel Cloud Data Archiving', nameEn: 'Viettel Cloud Data Archiving' },
  'media-cdn': { serviceId: 'media-cdn', partition: 'part5', pillar: 'networking', nameVi: 'Viettel Media CDN', nameEn: 'Viettel Media CDN' },
  'multi-cdn': { serviceId: 'multi-cdn', partition: 'part5', pillar: 'networking', nameVi: 'Viettel Multi-CDN', nameEn: 'Viettel Multi-CDN' },
  'cloud-camera': { serviceId: 'cloud-camera', partition: 'part5', pillar: 'digital-services', nameVi: 'Viettel Cloud Camera', nameEn: 'Viettel Cloud Camera' },

  // Workspace
  'workspace': { serviceId: 'workspace', partition: 'workspace', pillar: 'digital-workplace', nameVi: 'Viettel Workspace', nameEn: 'Viettel Workspace' },
  'viettel-workspace': { serviceId: 'workspace', partition: 'workspace', pillar: 'digital-workplace', nameVi: 'Viettel Workspace', nameEn: 'Viettel Workspace' },
};

// Aliases mapping to serviceId
export const SERVICE_PATH_ALIASES: Record<string, string> = {
  // VKS
  '/services/compute/vks': 'vks',
  '/services/compute/kubernetes': 'vks',
  '/services/compute/kubernetes-service': 'vks',
  '/services/compute/viettel-kubernetes-service': 'vks',
  '/services/container-kubernetes/vks': 'vks',
  '/services/container-kubernetes/kubernetes-service': 'vks',
  '/services/container-kubernetes/viettel-kubernetes-service': 'vks',
  '/services/containers/vks': 'vks',
  '/services/containers/kubernetes': 'vks',
  '/services/containers/kubernetes-service': 'vks',
  '/services/vks': 'vks',
  '/services/kubernetes': 'vks',
  '/services/kubernetes-service': 'vks',
  '/dich-vu/kubernetes': 'vks',
  '/dich-vu/vks': 'vks',

  // VCR
  '/services/compute/vcr': 'vcr',
  '/services/compute/container-registry': 'vcr',
  '/services/compute/viettel-container-registry': 'vcr',
  '/services/container-kubernetes/vcr': 'vcr',
  '/services/container-kubernetes/container-registry': 'vcr',
  '/services/container-kubernetes/viettel-container-registry': 'vcr',
  '/services/containers/vcr': 'vcr',
  '/services/containers/container-registry': 'vcr',
  '/services/vcr': 'vcr',
  '/services/container-registry': 'vcr',
  '/dich-vu/container-registry': 'vcr',
  '/dich-vu/vcr': 'vcr',

  // VMKS
  '/services/compute/vmks': 'vmks',
  '/services/compute/managed-kubernetes': 'vmks',
  '/services/compute/viettel-managed-kubernetes-service': 'vmks',
  '/services/container-kubernetes/vmks': 'vmks',
  '/services/container-kubernetes/managed-kubernetes': 'vmks',
  '/services/containers/vmks': 'vmks',
  '/services/containers/managed-kubernetes': 'vmks',
  '/services/vmks': 'vmks',
  '/services/managed-kubernetes': 'vmks',
  '/dich-vu/managed-kubernetes': 'vmks',
  '/dich-vu/vmks': 'vmks',

  // vDBS
  '/services/database/vdbs': 'vdbs',
  '/services/database/database-service': 'vdbs',
  '/services/database/viettel-database-service': 'vdbs',
  '/services/data-platform/vdbs': 'vdbs',
  '/services/data-platform/database-service': 'vdbs',
  '/services/data-platform/viettel-database-service': 'vdbs',
  '/services/vdbs': 'vdbs',
  '/services/database': 'vdbs',
  '/dich-vu/co-so-du-lieu': 'vdbs',
  '/dich-vu/vdbs': 'vdbs',

  // Domain
  '/services/domain-hosting/domain': 'domain',
  '/services/domain-hosting/ten-mien': 'domain',
  '/services/hosting/domain': 'domain',
  '/services/hosting/ten-mien': 'domain',
  '/services/web/domain': 'domain',
  '/services/domain': 'domain',
  '/services/ten-mien': 'domain',
  '/dich-vu/ten-mien': 'domain',
  '/dich-vu/domain': 'domain',

  // Web Hosting
  '/services/domain-hosting/web-hosting': 'web-hosting',
  '/services/hosting/web-hosting': 'web-hosting',
  '/services/hosting/hosting': 'web-hosting',
  '/services/web-hosting': 'web-hosting',
  '/services/web/web-hosting': 'web-hosting',
  '/dich-vu/web-hosting': 'web-hosting',

  // Email Hosting
  '/services/domain-hosting/email-hosting': 'email-hosting',
  '/services/hosting/email-hosting': 'email-hosting',
  '/services/hosting/email': 'email-hosting',
  '/services/email-hosting': 'email-hosting',
  '/services/web/email-hosting': 'email-hosting',
  '/dich-vu/email-hosting': 'email-hosting',

  // SSL
  '/services/security/ssl': 'ssl',
  '/services/security/ssl-certificate': 'ssl',
  '/services/security/chung-chi-ssl': 'ssl',
  '/services/ssl': 'ssl',
  '/services/ssl-certificate': 'ssl',
  '/services/chung-chi-ssl': 'ssl',
  '/dich-vu/chung-chi-ssl': 'ssl',
  '/dich-vu/ssl': 'ssl',

  // Microsoft 365
  '/services/digital-workplace/microsoft-365': 'microsoft-365',
  '/services/digital-workplace/m365': 'microsoft-365',
  '/services/digital-services/microsoft-365': 'microsoft-365',
  '/services/digital-services/m365': 'microsoft-365',
  '/services/digital-workspace/microsoft-365': 'microsoft-365',
  '/services/digital-workspace/m365': 'microsoft-365',
  '/services/microsoft-365': 'microsoft-365',
  '/services/m365': 'microsoft-365',
  '/services/office-365': 'microsoft-365',
  '/services/office365': 'microsoft-365',
  '/dich-vu/microsoft-365': 'microsoft-365',
  '/dich-vu/m365': 'microsoft-365',

  // License Leasing
  '/services/digital-workplace/license-leasing': 'license-leasing',
  '/services/digital-services/license-leasing': 'license-leasing',
  '/services/digital-workspace/license-leasing': 'license-leasing',
  '/services/license-leasing': 'license-leasing',
  '/services/license': 'license-leasing',
  '/services/ban-quyen-phan-mem': 'license-leasing',
  '/dich-vu/ban-quyen-phan-mem': 'license-leasing',

  // Workspace
  '/services/digital-workplace/workspace': 'workspace',
  '/services/digital-workplace/viettel-workspace': 'workspace',
  '/services/digital-services/workspace': 'workspace',
  '/services/digital-services/viettel-workspace': 'workspace',
  '/services/digital-workspace/workspace': 'workspace',
  '/services/digital-workspace/viettel-workspace': 'workspace',
  '/services/enterprise-apps/workspace': 'workspace',
  '/services/enterprise-apps/viettel-workspace': 'workspace',
  '/services/ung-dung-doanh-nghiep/viettel-workspace': 'workspace',
  '/services/ung-dung-doanh-nghiep/workspace': 'workspace',
  '/services/workspace': 'workspace',
  '/services/viettel-workspace': 'workspace',
  '/dich-vu/viettel-workspace': 'workspace',
  '/dich-vu/workspace': 'workspace',

  // Drive
  '/services/digital-workplace/drive': 'drive',
  '/services/digital-workplace/viettel-drive': 'drive',
  '/services/digital-services/drive': 'drive',
  '/services/digital-services/viettel-drive': 'drive',
  '/services/digital-workspace/drive': 'drive',
  '/services/digital-workspace/viettel-drive': 'drive',
  '/services/storage/drive': 'drive',
  '/services/drive': 'drive',
  '/services/viettel-drive': 'drive',
  '/dich-vu/viettel-drive': 'drive',
  '/dich-vu/drive': 'drive',

  // Cloud PC
  '/services/digital-workplace/cloud-pc': 'cloud-pc',
  '/services/digital-services/cloud-pc': 'cloud-pc',
  '/services/digital-workspace/cloud-pc': 'cloud-pc',
  '/services/compute/cloud-pc': 'cloud-pc',
  '/services/cloud-pc': 'cloud-pc',
  '/services/vdi': 'cloud-pc',
  '/dich-vu/cloud-pc': 'cloud-pc',

  // Cloud Desktop
  '/services/compute/cloud-desktop': 'cloud-desktop',
  '/services/compute/daas': 'cloud-desktop',
  '/services/digital-services/cloud-desktop': 'cloud-desktop',
  '/services/digital-workspace/cloud-desktop': 'cloud-desktop',
  '/services/cloud-desktop': 'cloud-desktop',
  '/services/daas': 'cloud-desktop',
  '/services/compute/desktop-as-a-service': 'cloud-desktop',
  '/services/desktop-as-a-service': 'cloud-desktop',
  '/dich-vu/cloud-desktop': 'cloud-desktop',

  // vAPIG
  '/services/compute/vapig': 'vapig',
  '/services/vapig': 'vapig',
  '/services/paas/api-gateway': 'vapig',
  '/services/api-gateway': 'vapig',
  '/services/paas/vapig': 'vapig',
  '/services/data-platform/vapig': 'vapig',
  '/services/data-platform/api-gateway': 'vapig',
  '/dich-vu/vapig': 'vapig',

  // CloudWatch
  '/services/compute/cloudwatch': 'cloudwatch',
  '/services/cloudwatch': 'cloudwatch',
  '/services/management/cloudwatch': 'cloudwatch',
  '/services/monitoring/cloudwatch': 'cloudwatch',
  '/services/cloud-operations/cloudwatch': 'cloudwatch',
  '/services/cloud-operations/giam-sat': 'cloudwatch',
  '/dich-vu/cloudwatch': 'cloudwatch',

  // vKQS
  '/services/compute/vkqs': 'vkqs',
  '/services/vkqs': 'vkqs',
  '/services/database/vkqs': 'vkqs',
  '/services/paas/queue-service': 'vkqs',
  '/services/queue-service': 'vkqs',
  '/services/paas/vkqs': 'vkqs',
  '/services/data-platform/vkqs': 'vkqs',
  '/services/data-platform/queue-service': 'vkqs',
  '/services/data-platform/kafka': 'vkqs',
  '/dich-vu/vkqs': 'vkqs',

  // vSE
  '/services/compute/vse': 'vse',
  '/services/vse': 'vse',
  '/services/database/vse': 'vse',
  '/services/ai-data/search-engine': 'vse',
  '/services/search-engine': 'vse',
  '/services/ai-data/vse': 'vse',
  '/services/data-platform/vse': 'vse',
  '/services/data-platform/search-engine': 'vse',
  '/services/data-platform/opensearch': 'vse',
  '/dich-vu/vse': 'vse',

  // vCAS
  '/services/compute/vcas': 'vcas',
  '/services/vcas': 'vcas',
  '/services/database/vcas': 'vcas',
  '/services/database/caching-service': 'vcas',
  '/services/paas/caching-service': 'vcas',
  '/services/caching-service': 'vcas',
  '/services/paas/vcas': 'vcas',
  '/services/data-platform/vcas': 'vcas',
  '/services/data-platform/caching-service': 'vcas',
  '/services/data-platform/memcached': 'vcas',
  '/dich-vu/vcas': 'vcas',

  // vSE
  '/services/database/search-engine': 'vse',

  // vAPIG
  '/services/database/api-gateway': 'vapig',
  '/services/database/vapig': 'vapig',
  '/services/compute/api-gateway': 'vapig',

  // vKQS
  '/services/database/queue-service': 'vkqs',

  // Data Center Consulting
  '/services/data-center/data-center-consulting': 'data-center-consulting',
  '/services/data-center-consulting': 'data-center-consulting',
  '/dich-vu/data-center-consulting': 'data-center-consulting',

  // Data Archiving
  '/services/storage/data-archiving': 'data-archiving',
  '/services/data-archiving': 'data-archiving',
  '/services/storage/varchive': 'data-archiving',
  '/services/varchive': 'data-archiving',
  '/dich-vu/data-archiving': 'data-archiving',

  // Media CDN
  '/services/networking/media-cdn': 'media-cdn',
  '/services/media-cdn': 'media-cdn',
  '/services/cdn/media-cdn': 'media-cdn',
  '/services/networking/cdn': 'media-cdn',
  '/dich-vu/media-cdn': 'media-cdn',

  // Multi-CDN
  '/services/networking/multi-cdn': 'multi-cdn',
  '/services/multi-cdn': 'multi-cdn',
  '/services/cdn/multi-cdn': 'multi-cdn',
  '/dich-vu/multi-cdn': 'multi-cdn',

  // Cloud Camera
  '/services/digital-workplace/cloud-camera': 'cloud-camera',
  '/services/digital-services/cloud-camera': 'cloud-camera',
  '/services/cloud-camera': 'cloud-camera',
  '/services/vsaas': 'cloud-camera',
  '/dich-vu/cloud-camera': 'cloud-camera',
};

export function resolveServiceIdFromPath(pathname: string): string | null {
  const clean = pathname.toLowerCase().replace(/\/+$/, '');
  
  if (SERVICE_PATH_ALIASES[clean]) {
    return SERVICE_PATH_ALIASES[clean];
  }

  // Direct check /services/:pillar/:id or /services/:id or /dich-vu/:id
  const segments = clean.split('/').filter(Boolean);
  const lastSeg = segments[segments.length - 1];
  if (lastSeg && SERVICE_MANIFEST[lastSeg]) {
    return lastSeg;
  }

  return null;
}

export async function loadStandardServiceConfig(serviceId: string): Promise<ServiceDetailConfig | null> {
  const meta = SERVICE_MANIFEST[serviceId];
  if (!meta) return null;

  switch (meta.partition) {
    case 'part1': {
      const mod = await import('./standardServicesData');
      return mod.STANDARD_SERVICES_DATA[serviceId] ?? null;
    }
    case 'part2': {
      const mod = await import('./standardServicesDataPart2');
      return mod.STANDARD_SERVICES_DATA_PART2[serviceId] ?? null;
    }
    case 'part2b': {
      const mod = await import('./standardServicesDataPart2B');
      return mod.STANDARD_SERVICES_DATA_PART2B[serviceId] ?? null;
    }
    case 'part3': {
      const mod = await import('./standardServicesDataPart3');
      return mod.STANDARD_SERVICES_DATA_PART3[serviceId] ?? null;
    }
    case 'part4': {
      const mod = await import('./standardServicesDataPart4');
      return mod.STANDARD_SERVICES_DATA_PART4[serviceId] ?? null;
    }
    case 'part5': {
      const mod = await import('./standardServicesDataPart5');
      return mod.STANDARD_SERVICES_DATA_PART5[serviceId] ?? null;
    }
    case 'workspace': {
      const mod = await import('./workspaceServiceData');
      return mod.VIETTEL_WORKSPACE_SERVICE_DATA;
    }
    default:
      return null;
  }
}
