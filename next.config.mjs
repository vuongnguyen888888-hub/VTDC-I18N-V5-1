/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Content-Security-Policy-Report-Only',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https://images.unsplash.com https://www.googletagmanager.com https://www.google-analytics.com https://c.clarity.ms https://*.google.com https://*.googleapis.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://*.clarity.ms https://*.firebaseio.com https://*.googleapis.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com; frame-src 'self' https://www.googletagmanager.com; frame-ancestors 'self'; object-src 'none'; base-uri 'self';",
  },
];

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ['lucide-react', 'motion', 'motion/react'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    const { readFile } = await import('node:fs/promises');
    const fileContent = await readFile(new URL('./src/data/redirectManifest.json', import.meta.url), 'utf8');
    const REDIRECT_MANIFEST = JSON.parse(fileContent);
    return REDIRECT_MANIFEST.map((entry) => ({
      source: entry.sourcePath,
      destination: entry.targetPath,
      permanent: entry.statusCode === 301 || entry.statusCode === 308,
    }));
  },
  webpack: (config) => {
    config.infrastructureLogging = { level: 'error' };
    return config;
  },
  devIndicators: false,
};

export default nextConfig;
