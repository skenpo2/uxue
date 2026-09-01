import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: { formats: ['image/avif', 'image/webp'], minimumCacheTTL: 2678400 },
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
};

export default nextConfig;
