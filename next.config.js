/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
  trailingSlash: true,
  // Enable automatic image optimization for better performance
  images: {
    // Removed unoptimized: true to enable Next.js Image optimization
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for 1 year
    minimumCacheTTL: 31536000,
  },
  // Enable compression and modern JS targeting
  compress: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
  // Target modern browsers to reduce JS payload
  target: 'serverless',
  // Optimize for modern browser baseline
  experimental: {
    // Modern JS output without unnecessary polyfills
    optimizePackageImports: ['@material-ui/core', 'react-bootstrap'],
  },
  async redirects() {
    // /HomePage was a byte-identical duplicate of /. Preserve any existing
    // inbound links with a permanent redirect so we don't drop link equity.
    // Everything else intentionally 404s (no blanket redirect-to-home).
    return [
      {
        source: '/HomePage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/HomePage/',
        destination: '/',
        permanent: true,
      },
    ];
  },
  // Enable gzip compression in production
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  // Optimize webpack bundle
  webpack: (config, { isServer }) => {
    // Optimize dependencies
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
      };
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(config);
