export interface ServiceEnglishTranslation {
  name: string;
  tagline: string;
  cardDescription: string;
  subgroupLabel?: string;
  ctaText?: string;
}

export const SERVICE_EN_TRANSLATIONS: Record<string, ServiceEnglishTranslation> = {
  // 1. Cloud Compute
  'viettel-cloud-server': {
    name: 'Viettel Cloud Server',
    tagline: 'Virtual Server • Highly Elastic • Multipurpose Workloads',
    cardDescription: 'Virtual servers on Viettel IDC\'s cloud platform, perfect for deploying websites, enterprise applications, internal systems, and workloads requiring flexible scaling.',
    subgroupLabel: 'Cloud Compute',
    ctaText: 'View details →'
  },
  'viettel-cloud-server-vmware': {
    name: 'Viettel Cloud Server (VMware)',
    tagline: 'VMware vSphere • Enterprise Grade • 100% Legacy Compatible',
    cardDescription: 'Dedicated virtual servers on VMware vSphere & vCloud Director, ensuring 99.99% SLA availability, NSX-T security, and easy enterprise application migration.',
    subgroupLabel: 'Cloud Compute',
    ctaText: 'View details →'
  },
  'viettel-virtual-private-cloud': {
    name: 'Viettel Virtual Private Cloud',
    tagline: 'Virtual Private Network • Logical Isolation • Resource Control',
    cardDescription: 'Virtual private cloud environment helping enterprises design networks, partition resources, and control access according to their own infrastructure architecture.',
    subgroupLabel: 'Cloud Compute',
    ctaText: 'View details →'
  },
  'viettel-private-cloud-vmware': {
    name: 'Viettel Private Cloud (VMware)',
    tagline: 'VMware Stack • Private Cloud • Familiar Legacy Integration',
    cardDescription: 'VMware-based Private Cloud platform, ideal for enterprises requiring a familiar operating environment, high control, and integration with existing systems.',
    subgroupLabel: 'Cloud Compute',
    ctaText: 'View details →'
  },
  'viettel-managed-private-cloud': {
    name: 'Viettel Managed Private Cloud',
    tagline: 'Turnkey Private Cloud • 24/7 Management • Peak Performance & Security',
    cardDescription: 'Dedicated private cloud platform architected, deployed, and 24/7/365 managed by Viettel IDC experts, ensuring 100% hardware isolation, 99.99% SLA, and multilayer security.',
    subgroupLabel: 'Cloud Compute',
    ctaText: 'View details →'
  },
  'viettel-dedicated-compute': {
    name: 'Viettel Dedicated Compute',
    tagline: 'Dedicated Servers • 100% Hardware Isolation • High Performance',
    cardDescription: 'Specialized dedicated server infrastructure for enterprises, ensuring 100% isolated physical resources with no noisy neighbors, TIA-942 Rated 3 standard.',
    subgroupLabel: 'Cloud Compute',
    ctaText: 'View details →'
  },
  'viettel-dedicated-private-cloud': {
    name: 'Viettel Dedicated Private Cloud (HPC)',
    tagline: 'High Performance Computing • 100% Hardware Isolation • GPU AI Acceleration',
    cardDescription: 'High-performance dedicated cloud infrastructure (HPC) with 100% dedicated hardware, ultra-low latency NVMe SAN storage, and NVIDIA GPU accelerators for AI and Core Workloads.',
    subgroupLabel: 'Cloud Compute',
    ctaText: 'View details →'
  },
  'viettel-open-dedicated-private-cloud': {
    name: 'Viettel Open Dedicated Private Cloud',
    tagline: 'OpenStack Hardened • Single-Tenant 100% • TCO Optimized',
    cardDescription: 'Open-source dedicated cloud combining bare-metal single-tenant servers with OpenStack Enterprise, optimizing total cost of ownership (TCO) and complete infrastructure autonomy.',
    subgroupLabel: 'Cloud Compute',
    ctaText: 'View details →'
  },
  'viettel-open-private-cloud': {
    name: 'Viettel Open Private Cloud',
    tagline: 'Open Private Cloud • Flexible Architecture • Optimized Customization',
    cardDescription: 'Open Private Cloud platform on OpenStack Enterprise, empowering enterprises to build agile infrastructure, optimize customization, and maintain full internal control.',
    subgroupLabel: 'Cloud Compute',
    ctaText: 'View details →'
  },
  'viettel-cloud-gpu': {
    name: 'Viettel Cloud GPU',
    tagline: 'GPU Cloud • AI/ML • High Performance Workloads',
    cardDescription: 'GPU resources on the cloud for workloads needing massive parallel compute like AI/ML, deep learning, big data analytics, 3D rendering, and computer vision.',
    subgroupLabel: 'Cloud Compute',
    ctaText: 'View details →'
  },
  'viettel-cloud-npu': {
    name: 'Viettel Cloud NPU (vCNPU)',
    tagline: 'Qualcomm AI 100 • AI Inference • Superior Price-Performance (P/P)',
    cardDescription: 'Virtual servers powered by Qualcomm Cloud AI 100 NPUs specialized for ultra-efficient AI inference, Computer Vision (CV), NLP, and Generative AI at maximum energy efficiency.',
    subgroupLabel: 'Cloud Compute',
    ctaText: 'View details →'
  },
  'viettel-model-as-a-service': {
    name: 'Viettel Model as a Service (vMaaS)',
    tagline: 'Foundation AI Models • Unified OpenAI API • Vietnamese Optimized & PAYG',
    cardDescription: 'AI foundation model platform (LLM, Vision, Audio, RAG) served via OpenAI-compatible APIs, with instant deployment and absolute data privacy inside Viettel IDC data centers.',
    subgroupLabel: 'Cloud Compute',
    ctaText: 'View details →'
  },

  // 2. Containers & Kubernetes
  'viettel-open-kubernetes-service-voks': {
    name: 'Viettel Kubernetes Service (vKS)',
    tagline: 'CNCF-Certified Kubernetes • Cloud-native • Automated Microservices',
    cardDescription: 'CNCF-certified managed Kubernetes platform allowing enterprises to easily package, deploy, auto-scale, and manage the full lifecycle of containerized applications.',
    subgroupLabel: 'Containers & Kubernetes',
    ctaText: 'View details →'
  },
  'viettel-dedicated-kubernetes-service': {
    name: 'Viettel Dedicated Kubernetes Service',
    tagline: 'Dedicated Kubernetes • Resource Isolation • Operation Control',
    cardDescription: 'Dedicated Kubernetes clusters for enterprises needing a specialized container environment, granular resource control, and clear operational isolation.',
    subgroupLabel: 'Containers & Kubernetes',
    ctaText: 'View details →'
  },
  'viettel-container-registry': {
    name: 'Viettel Container Registry (vCR)',
    tagline: 'Container Images • CI/CD Integration • Version & Vulnerability Management',
    cardDescription: 'Secure container image registry enabling DevOps teams to store, distribute, scan vulnerabilities, and manage image versions across CI/CD pipelines.',
    subgroupLabel: 'Containers & Kubernetes',
    ctaText: 'View details →'
  },

  // 3. Data Center
  'viettel-data-center-colocation': {
    name: 'Viettel Colocation',
    tagline: 'Colocation • Rack Space • TIA-942 Rated 3 Data Centers',
    cardDescription: 'Server colocation services at Viettel IDC world-class data centers, designed for enterprises requiring reliable physical infrastructure, redundant power, and 24/7 operations.',
    subgroupLabel: 'Physical Infrastructure',
    ctaText: 'View details →'
  },
  'viettel-dedicated-server-leasing': {
    name: 'Dedicated Server Leasing',
    tagline: 'Bare Metal • Dedicated Resources • Consistent Performance',
    cardDescription: 'High-performance dedicated bare-metal servers for workloads requiring sustained computational power, zero sharing, and physical-level BIOS/hardware control.',
    subgroupLabel: 'Physical Infrastructure',
    ctaText: 'View details →'
  },
  'viettel-data-center-consulting': {
    name: 'Data Center Consulting & Design',
    tagline: 'DC Consulting • Infrastructure Design • Operational Optimization',
    cardDescription: 'End-to-end consulting, engineering design, and auditing services for enterprises building, retrofitting, or certifying mission-critical server rooms.',
    subgroupLabel: 'DC Consulting & Design',
    ctaText: 'View details →'
  },

  // 4. Storage & Data Protection
  'viettel-cloud-object-storage': {
    name: 'Viettel Cloud Object Storage (vOS)',
    tagline: 'Object Storage • Unstructured Data • S3 Compatible API',
    cardDescription: 'Highly scalable S3-compatible object storage designed for unstructured data, multimedia assets, logs, backups, and modern cloud-native applications.',
    subgroupLabel: 'Cloud Storage',
    ctaText: 'View details →'
  },
  'viettel-cloud-file-storage': {
    name: 'Viettel Cloud File Storage (vFS)',
    tagline: 'Shared File Storage • NFS/CIFS Protocols • Seamless App Integration',
    cardDescription: 'Fully managed elastic cloud file storage supporting NFS and SMB protocols, enabling simultaneous multi-server shared access and high-throughput file workloads.',
    subgroupLabel: 'Cloud Storage',
    ctaText: 'View details →'
  },
  'viettel-cloud-backup-baas': {
    name: 'Viettel Cloud Backup (BaaS)',
    tagline: 'Automated Backup • Multi-Platform Protection • Ransomware Defense',
    cardDescription: 'Enterprise Backup-as-a-Service solution protecting virtual machines, databases, and physical servers with automated immutability and instant restore capabilities.',
    subgroupLabel: 'Backup & Disaster Recovery',
    ctaText: 'View details →'
  },
  'viettel-cloud-disaster-recovery': {
    name: 'Viettel Cloud Disaster Recovery (DRaaS)',
    tagline: 'DRaaS • Business Continuity • Near-Zero RPO / Low RTO',
    cardDescription: 'Comprehensive Disaster Recovery as a Service solution ensuring business continuity by replicating primary systems to secondary cloud disaster sites with rapid failover.',
    subgroupLabel: 'Backup & Disaster Recovery',
    ctaText: 'View details →'
  },
  'viettel-cloud-data-archiving': {
    name: 'Viettel Cloud Data Archiving',
    tagline: 'Data Archiving • Long-term Retention • Lifecycle Policy Management',
    cardDescription: 'Cost-effective cold storage and archiving for compliance data, legal audit records, and historical datasets requiring decade-long durability.',
    subgroupLabel: 'Backup & Disaster Recovery',
    ctaText: 'View details →'
  },

  // 5. Data Platform & Integration
  'viettel-database-service-vdbs': {
    name: 'Viettel Database Service (vDBS)',
    tagline: 'Managed Databases • MySQL, PostgreSQL, MongoDB • Auto Backup & Scaling',
    cardDescription: 'Fully managed cloud database service delivering high availability, automated patching, continuous backups, and vertical/horizontal scaling without DBA overhead.',
    subgroupLabel: 'Database & Cache',
    ctaText: 'View details →'
  },
  'viettel-caching-service-vcas': {
    name: 'Viettel Caching Service (vCAS)',
    tagline: 'Redis / Memcached • Application Acceleration • Database Offloading',
    cardDescription: 'In-memory caching service delivering sub-millisecond response times to accelerate application throughput and dramatically reduce primary database query loads.',
    subgroupLabel: 'Database & Cache',
    ctaText: 'View details →'
  },
  'viettel-search-engine-service-vse': {
    name: 'Viettel Search Engine Service (vSE)',
    tagline: 'OpenSearch / Elasticsearch • Fast Full-Text Query • Log Analytics',
    cardDescription: 'Managed search and analytics engine for real-time full-text search, observability log indexing, and big data visualization dashboards.',
    subgroupLabel: 'Database & Cache',
    ctaText: 'View details →'
  },
  'viettel-api-gateway': {
    name: 'Viettel API Gateway (vAPIGW)',
    tagline: 'API Management • Traffic Throttling • Unified Routing & Security',
    cardDescription: 'High-throughput API gateway enabling organizations to publish, secure, monitor, and throttle APIs connecting client applications with backend microservices.',
    subgroupLabel: 'Integration & Messaging',
    ctaText: 'View details →'
  },
  'viettel-queue-messaging-service-vkqs': {
    name: 'Viettel Queue & Messaging Service (vKQS)',
    tagline: 'Apache Kafka / RabbitMQ • Asynchronous Architecture • Fault-Tolerant Streaming',
    cardDescription: 'Distributed message broker and event streaming service decoupling microservices, buffering peak traffic bursts, and ensuring reliable asynchronous data pipelines.',
    subgroupLabel: 'Integration & Messaging',
    ctaText: 'View details →'
  },

  // 6. Networking & CDN
  'viettel-interconnection': {
    name: 'Viettel Interconnection (vIX)',
    tagline: 'Data Center Cross-Connect • Dedicated Meet-Me-Room • High Bandwidth',
    cardDescription: 'Physical and virtual interconnection services linking enterprises across data center suites, cloud providers, and domestic/international telecommunications carriers.',
    subgroupLabel: 'Networking & WAN',
    ctaText: 'View details →'
  },
  'viettel-cloud-connect': {
    name: 'Viettel Cloud Connect (vCC)',
    tagline: 'Private Cloud Link • Low Latency & High Security • Direct Carrier Routing',
    cardDescription: 'Dedicated private network connection between enterprise on-premises headquarters and Viettel IDC cloud nodes, bypassing the public internet for maximum security.',
    subgroupLabel: 'Networking & WAN',
    ctaText: 'View details →'
  },
  'viettel-hybrid-connect': {
    name: 'Viettel Hybrid Connect (vHC)',
    tagline: 'Hybrid Cloud Network • Multi-Environment Mesh • Unified Topology',
    cardDescription: 'Integrated hybrid connectivity fabric linking on-premises data centers, private clouds, and public cloud regions into a seamless, high-bandwidth corporate network.',
    subgroupLabel: 'Networking & WAN',
    ctaText: 'View details →'
  },
  'viettel-sd-wan': {
    name: 'Viettel SD-WAN',
    tagline: 'Software-Defined WAN • Centralized Orchestration • Multi-Branch Optimization',
    cardDescription: 'Intelligent software-defined WAN solution optimizing application traffic steering across broadband, MPLS, and 4G/5G links for geographically distributed branches.',
    subgroupLabel: 'Networking & WAN',
    ctaText: 'View details →'
  },
  'viettel-media-cdn': {
    name: 'Viettel Media CDN (vCDN)',
    tagline: 'Content Delivery Network • Video On Demand & Live Streaming • 100% Vietnam Edge',
    cardDescription: 'Next-generation Content Delivery Network with edge servers nationwide, optimizing static asset caching, HD video delivery, and ultra-fast web response times.',
    subgroupLabel: 'Content Delivery (CDN)',
    ctaText: 'View details →'
  },
  'viettel-multi-cdn': {
    name: 'Viettel Multi-CDN',
    tagline: 'Multi-CDN Routing • Global Edge Distribution • Maximum High Availability',
    cardDescription: 'Intelligent multi-CDN orchestration platform aggregating global CDN networks to guarantee 100% uptime and lowest latency routing for international audiences.',
    subgroupLabel: 'Content Delivery (CDN)',
    ctaText: 'View details →'
  },

  // 7. Security & Cybersecurity
  'viettel-cloud-firewall': {
    name: 'Viettel Cloud Firewall (vCF)',
    tagline: 'Next-Gen Cloud Firewall • Granular Access Control • Deep Threat Prevention',
    cardDescription: 'Virtual next-generation firewall protecting cloud VPC perimeters with Layer 3-7 inspection, intrusion prevention (IPS), and micro-segmentation capabilities.',
    subgroupLabel: 'Cloud Security',
    ctaText: 'View details →'
  },
  'viettel-cwaf': {
    name: 'Viettel Cloud WAF (vWAF)',
    tagline: 'Web App Firewall • OWASP Top 10 Protection • Bot & API Defense',
    cardDescription: 'Cloud-native Web Application Firewall filtering malicious HTTP/HTTPS requests, mitigating SQLi/XSS attacks, and safeguarding critical enterprise web APIs.',
    subgroupLabel: 'Cloud Security',
    ctaText: 'View details →'
  },
  'viettel-anti-ddos': {
    name: 'Viettel Anti-DDoS (vDDoS)',
    tagline: 'Multi-Terabit Scrubbing • Layer 3/4 & Layer 7 Defense • Always-On Protection',
    cardDescription: 'Carrier-grade distributed DDoS mitigation scrubbing multi-hundred gigabit volumetric attacks in real time, preventing service downtime and latency degradation.',
    subgroupLabel: 'Cloud Security',
    ctaText: 'View details →'
  },
  'viettel-endpoint-security': {
    name: 'Viettel Endpoint Security (vES)',
    tagline: 'Endpoint Protection & EDR • Ransomware Neutralization • Centralized Console',
    cardDescription: 'Next-generation Endpoint Detection and Response (EDR) safeguarding corporate laptops, desktops, and servers against zero-day malware and unauthorized intrusion.',
    subgroupLabel: 'Cloud Security',
    ctaText: 'View details →'
  },
  'viettel-ssl-pki': {
    name: 'Viettel SSL / PKI Certificates',
    tagline: 'Digital Certificates • TLS/SSL Encryption • Trusted Root Identity',
    cardDescription: 'Enterprise SSL/TLS certificates and Public Key Infrastructure (PKI) management ensuring encrypted communications, trust badges, and compliance with data privacy regulations.',
    subgroupLabel: 'Cloud Security',
    ctaText: 'View details →'
  },
  'viettel-vcloudrity': {
    name: 'Viettel vCloudrity (CSPM)',
    tagline: 'Cloud Security Posture Management • Misconfiguration Auditing • Compliance Scoring',
    cardDescription: 'Comprehensive Cloud Security Posture Management (CSPM) tool continuously scanning cloud assets for vulnerabilities, permission leaks, and security compliance gaps.',
    subgroupLabel: 'Cloud Security',
    ctaText: 'View details →'
  },
  'viettel-virtual-soc': {
    name: 'Viettel Virtual SOC (vSOC)',
    tagline: '24/7 Security Operations Center • SIEM & AI Analytics • Rapid Incident Triage',
    cardDescription: 'Managed Security Operations Center (SOC) offering 24/7 continuous threat monitoring, AI-powered behavioral analytics, and immediate incident response escalation.',
    subgroupLabel: 'Security Operations',
    ctaText: 'View details →'
  },
  'viettel-threat-intelligence': {
    name: 'Viettel Threat Intelligence (vTI)',
    tagline: 'Threat Intelligence • Proactive Cyber Defense • Actionable IOC Feeds',
    cardDescription: 'Proactive cyber threat intelligence platform delivering actionable threat actor feeds, compromised credential alerts, and tactical vulnerability insights.',
    subgroupLabel: 'Security Operations',
    ctaText: 'View details →'
  },
  'viettel-threat-hunting': {
    name: 'Viettel Threat Hunting (vTH)',
    tagline: 'Proactive Threat Hunting • Deep Forensic Investigation • Stealth Anomaly Detection',
    cardDescription: 'Specialized cybersecurity investigation service uncovering latent advanced persistent threats (APTs), hidden backdoors, and stealthy lateral network movements.',
    subgroupLabel: 'Security Operations',
    ctaText: 'View details →'
  },
  'viettel-cyber-security-maturity-program': {
    name: 'Viettel Cyber Security Maturity Program (CSMP)',
    tagline: 'Security Maturity Assessment • NIST / ISO Frameworks • Strategic Roadmap',
    cardDescription: 'Holistic assessment and strategic advisory program evaluating organizational security posture against international standards (NIST, ISO 27001, PCI DSS).',
    subgroupLabel: 'Security Operations',
    ctaText: 'View details →'
  },

  // 8. Cloud Operations & Monitoring
  'viettel-application-performance-monitoring': {
    name: 'Application Performance Monitoring (APM)',
    tagline: 'Full-Stack APM • Code-Level Tracing • Bottleneck Identification',
    cardDescription: 'End-to-end application monitoring tracking user journeys, microservice dependencies, database latency, and code-level bottlenecks in real time.',
    subgroupLabel: 'Performance Monitoring',
    ctaText: 'View details →'
  },
  'viettel-cloudwatch': {
    name: 'Viettel CloudWatch (vWatch)',
    tagline: 'Cloud Infrastructure Monitoring • Threshold Alerts • Resource Dashboards',
    cardDescription: 'Unified cloud monitoring platform collecting operational metrics, tracking resource utilization (CPU, RAM, Disk I/O), and dispatching instant alert notifications.',
    subgroupLabel: 'Performance Monitoring',
    ctaText: 'View details →'
  },
  'viettel-cloud-management-platform': {
    name: 'Viettel Cloud Management Platform (VCMP)',
    tagline: 'Unified Cloud Orchestration • FinOps Cost Control • Multi-Tenant RBAC',
    cardDescription: 'Centralized hybrid/multi-cloud management portal providing automated provisioning, FinOps cost optimization, self-service catalog, and granular governance.',
    subgroupLabel: 'Cloud Management',
    ctaText: 'View details →'
  },

  // 9. Digital Services & Apps
  'microsoft-365': {
    name: 'Microsoft 365 for Business',
    tagline: 'Productivity Suite • Teams & Outlook • Secure Cloud Collaboration',
    cardDescription: 'Complete modern workplace productivity suite with Word, Excel, PowerPoint, Teams collaboration, SharePoint, and enterprise-grade cloud email.',
    subgroupLabel: 'Digital Workspace',
    ctaText: 'View details →'
  },
  'viettel-drive': {
    name: 'Viettel Drive (vDrive)',
    tagline: 'Enterprise Cloud Storage • Secure File Sync & Share • Granular Permissions',
    cardDescription: 'Secure corporate cloud drive allowing employees to store, synchronize, collaborate on documents, and share files with enterprise access control policies.',
    subgroupLabel: 'Digital Workspace',
    ctaText: 'View details →'
  },
  'viettel-workspace': {
    name: 'Viettel Workspace',
    tagline: 'All-in-One Digital Workplace • Web Hosting, Email, Drive & Office • Tier III DC',
    cardDescription: 'Integrated all-in-one digital productivity suite combining business email, web hosting, cloud drive, online office editors, and task management on Viettel IDC infrastructure.',
    subgroupLabel: 'Digital Workspace',
    ctaText: 'View details →'
  },
  'viettel-cloud-pc': {
    name: 'Viettel Cloud PC (vCPC)',
    tagline: 'Cloud PC • Secure Remote Work • Centralized IT Administration',
    cardDescription: 'Personal virtual computers in the cloud providing flexible remote work experiences with centralized data security and instant desktop provisioning.',
    subgroupLabel: 'Digital Workspace',
    ctaText: 'View details →'
  },
  'viettel-cloud-desktop': {
    name: 'Viettel Cloud Desktop (DaaS / VDI)',
    tagline: 'Desktop as a Service • High-Performance VDI • Any Device Anywhere Access',
    cardDescription: 'Enterprise Virtual Desktop Infrastructure (VDI) delivering secure Windows/Linux desktop environments to distributed workforces across any device.',
    subgroupLabel: 'Digital Workspace',
    ctaText: 'View details →'
  },
  'viettel-license-leasing': {
    name: 'Software License Leasing (vLic)',
    tagline: 'Official Microsoft & VMware SPLA • OPEX Billing • Compliance Guaranteed',
    cardDescription: 'Official software licensing rental (Microsoft SPLA, VMware, RedHat, Oracle) allowing businesses to pay monthly per usage and eliminate heavy upfront CAPEX investments.',
    subgroupLabel: 'Digital Workspace',
    ctaText: 'View details →'
  },
  'viettel-voice-brandname': {
    name: 'Viettel Voice Brandname (CPaaS)',
    tagline: 'Branded Caller ID • High Call Pickup Rates • Enterprise CPaaS',
    cardDescription: 'Voice communication service displaying company brand name on customer mobile screens during outbound calls, boosting answer rates and customer trust.',
    subgroupLabel: 'Enterprise Communications',
    ctaText: 'View details →'
  },
  'viettel-cloud-camera': {
    name: 'Viettel Cloud Camera (VSaaS)',
    tagline: 'Cloud Video Surveillance • AI Analytics • Multi-Branch Monitoring',
    cardDescription: 'Cloud video surveillance platform offering encrypted video storage, live streaming, AI motion detection, and centralized multi-site management.',
    subgroupLabel: 'IoT & Smart Services',
    ctaText: 'View details →'
  },

  // 10. Managed & Consulting Services
  'viettel-managed-services-msp': {
    name: 'Viettel Managed Services (MSP)',
    tagline: 'Expert Managed IT • 24/7 Cloud Operations • Guaranteed SLA & Incident Triage',
    cardDescription: 'Comprehensive managed IT and cloud administration by Viettel IDC engineers, maintaining peak system uptime and relieving internal IT teams from routine operations.',
    subgroupLabel: 'Cloud Management & Operations',
    ctaText: 'View details →'
  },
  'viettel-multi-cloud-management': {
    name: 'Viettel Multi-Cloud Management (MCM)',
    tagline: 'Multi-Cloud Governance • AWS, Azure, GCP & Viettel Cloud • Unified Operations',
    cardDescription: 'End-to-end multi-cloud management service orchestrating workloads across AWS, Azure, Google Cloud, and Viettel Cloud with unified billing and governance.',
    subgroupLabel: 'Cloud Management & Operations',
    ctaText: 'View details →'
  },
  'viettel-cloud-migration': {
    name: 'Viettel Cloud Migration Service (vCM)',
    tagline: 'Cloud Migration Advisory • Zero-Downtime Transition • Risk-Free Execution',
    cardDescription: 'Professional cloud migration service providing workload assessment, architecture planning, automated data migration, and cutover testing with minimal business disruption.',
    subgroupLabel: 'Cloud Migration & Transition',
    ctaText: 'View details →'
  },

  // 11. Domain, Hosting & Email
  'viettel-domain-dns': {
    name: 'Viettel Domain & DNS',
    tagline: '.VN & International Domains • Anycast DNS • Brand Identity',
    cardDescription: 'Official Vietnamese (.vn) and top-level generic international domain registration with fast Anycast DNS resolution, DNSSEC security, and automated renewal management.',
    subgroupLabel: 'Domain & DNS',
    ctaText: 'View details →'
  },
  'viettel-web-hosting': {
    name: 'Viettel Web Hosting',
    tagline: 'High-Speed NVMe Web Hosting • cPanel & DirectAdmin • Free SSL & Auto Backup',
    cardDescription: 'Ultra-fast NVMe web hosting optimized for corporate websites, e-commerce, and WordPress, featuring daily automated backups, free SSL certificates, and malware scanning.',
    subgroupLabel: 'Hosting & Email',
    ctaText: 'View details →'
  },
  'viettel-email-hosting': {
    name: 'Viettel Business Email Hosting',
    tagline: 'Custom Domain Email • SpamAssassin & Anti-Virus • 99.9% Deliverability',
    cardDescription: 'Professional corporate email hosting matching enterprise domain names, equipped with anti-spam filtering, encrypted webmail, and high inbox deliverability.',
    subgroupLabel: 'Hosting & Email',
    ctaText: 'View details →'
  }
};

export const CATEGORY_EN_TRANSLATIONS: Record<string, { menuLabel: string; description: string }> = {
  'cloud-compute': {
    menuLabel: 'Cloud Compute',
    description: 'Virtual server infrastructure, high-performance GPU/NPU, and isolated private cloud.'
  },
  'container-kubernetes': {
    menuLabel: 'Containers & Kubernetes',
    description: 'Automated Kubernetes clusters, containerized microservices orchestration, and Container Registry.'
  },
  'data-center': {
    menuLabel: 'Data Center',
    description: 'Server colocation leasing and bare metal servers meeting TIA-942 Rated 3 standards.'
  },
  'storage': {
    menuLabel: 'Storage & Data Protection',
    description: 'Object Storage S3 solutions, shared file storage, BaaS backup, and DRaaS disaster recovery.'
  },
  'data-platform': {
    menuLabel: 'Data Platform & Integration',
    description: 'vDBS managed databases, Redis cache, search engines, and Kafka message streaming.'
  },
  'networking': {
    menuLabel: 'Networking & CDN',
    description: 'Media CDN, private cloud links, SD-WAN, and high-speed data center cross-connect.'
  },
  'security': {
    menuLabel: 'Security & Cybersecurity',
    description: 'Anti-DDoS defense systems, Cloud WAF, Cloud Firewall, and 24/7 Virtual SOC operations.'
  },
  'cloud-operations': {
    menuLabel: 'Cloud Operations & Monitoring',
    description: 'Performance monitoring tools (APM), CloudWatch metrics, and multi-cloud CMP management.'
  },
  'digital-services': {
    menuLabel: 'Digital Services & Apps',
    description: 'Microsoft 365, enterprise Cloud Drive, Cloud PC, Cloud Desktop (DaaS/VDI), and CPaaS.'
  },
  'managed-services': {
    menuLabel: 'Managed & Consulting Services',
    description: '24/7 Cloud Operations Managed Services (MSP), Multi-Cloud management, and cloud migration.'
  },
  'hosting': {
    menuLabel: 'Domain, Hosting & Email',
    description: 'Official .VN and global domain registration, high-speed NVMe web hosting, and business email.'
  }
};

export const SUBGROUP_EN_TRANSLATIONS: Record<string, string> = {
  'cloud-compute': 'Cloud Compute',
  'container-kubernetes': 'Containers & Kubernetes',
  'physical-infra': 'Physical Infrastructure',
  'dc-consulting': 'DC Consulting & Design',
  'cloud-storage': 'Cloud Storage',
  'backup-dr': 'Backup & Disaster Recovery',
  'managed-db-cache': 'Database & Cache',
  'integration-messaging': 'Integration & Messaging',
  'broadband-connect': 'Networking & WAN',
  'cdn-delivery': 'Content Delivery (CDN)',
  'cloud-security': 'Cloud Security',
  'security-operations': 'Security Operations',
  'performance-monitoring': 'Performance Monitoring',
  'cloud-management': 'Cloud Management',
  'digital-workspace': 'Digital Workspace',
  'enterprise-comm': 'Enterprise Communications',
  'iot-smart': 'IoT & Smart Services',
  'cloud-management-ops': 'Cloud Management & Operations',
  'cloud-migration-trans': 'Cloud Migration & Transition',
  'domain-dns': 'Domain & DNS',
  'hosting-email': 'Hosting & Email'
};

export interface SolutionEnglishTranslation {
  title: string;
  description: string;
  categoryTitle?: string;
  highlights?: string;
}

export const SOLUTION_EN_TRANSLATIONS: Record<string, SolutionEnglishTranslation> = {
  // Infrastructure & Cloud
  'backup-disaster-recovery': {
    title: 'Backup & Disaster Recovery',
    description: 'Protect mission-critical data with automated backups (BaaS) and rapid disaster recovery (DRaaS) with minimal RPO/RTO.'
  },
  'cloud-migration': {
    title: 'Cloud Migration & Modernization',
    description: 'Seamless workload transition from on-premises to Viettel Cloud with zero downtime and optimized operational TCO.'
  },
  'multi-az': {
    title: 'Multi-Availability Zone (Multi-AZ)',
    description: 'High availability multi-zone architecture spanning TIA-942 Rated 3 data centers with instant automated failover.'
  },
  'iac-hub': {
    title: 'Viettel IaC Hub',
    description: 'Automated Infrastructure as Code (IaC) management with Terraform and Ansible for standardized provisioning.'
  },

  // Dev, Ops & AI
  'container-kubernetes': {
    title: 'Container & Kubernetes',
    description: 'Enterprise Kubernetes orchestration with vOKS, vDKS, and Container Registry (vCR) for cloud-native microservices.'
  },
  'devsecops': {
    title: 'DevSecOps Automation',
    description: 'Automated security scanning integrated into CI/CD pipelines with shift-left vulnerability mitigation.'
  },
  'monitoring-ai': {
    title: 'Full-Stack Monitoring & AI',
    description: 'Real-time application performance monitoring (APM), CloudWatch, and AI analytics for proactive anomaly detection.'
  },
  'high-performance-cloud': {
    title: 'High-Performance Cloud & AI',
    description: 'High-speed compute powered by Cloud GPU & Cloud NPU for AI/LLM training, deep learning, and big data workloads.'
  },

  // Connectivity & Workspace
  'cdn': {
    title: 'Content Delivery Network (CDN)',
    description: 'Accelerate digital media delivery, HD video streaming, and web apps with widespread Edge caching and ultra-low latency.'
  },
  'remote-workspace': {
    title: 'Digital Workplace & Remote Work',
    description: 'Secure cloud workspace uniting Cloud PC, Cloud Desktop (DaaS), Viettel Drive, and Microsoft 365 for hybrid teams.'
  },
  'website-builder': {
    title: 'Enterprise Web Infrastructure',
    description: 'Turnkey web hosting, domain, SSL certificates, and cloud servers optimized for high-speed e-commerce.'
  },

  // Industries
  'finance-banking': {
    title: 'Banking & Financial Services (BFSI)',
    description: 'Physically isolated Private Cloud, 24/7 Virtual SOC, and full regulatory compliance for core banking workloads.'
  },
  'ecommerce-fintech': {
    title: 'E-Commerce & FinTech',
    description: 'Elastic auto-scaling cloud, multi-layer Anti-DDoS, and low-latency transaction processing for peak flash sales.'
  },
  'government': {
    title: 'Digital Government & Public Sector',
    description: 'Sovereign cloud infrastructure stored 100% domestically with Rated 3 compliance and national data security.'
  },
  'healthcare': {
    title: 'Digital Healthcare & Smart Hospital',
    description: 'Reliable medical image archiving (PACS), Electronic Medical Records (EMR), and 99.99% uptime healthcare platforms.'
  },
  'education-edtech': {
    title: 'Digital Education & EdTech',
    description: 'High-concurrency online examination infrastructure and bufferless live video streaming for digital classrooms.'
  }
};

