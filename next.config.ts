import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: { formats: ['image/avif', 'image/webp'], minimumCacheTTL: 2678400 },
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
  // The on-disk dev cache kept serving an outdated globals.css after edits and restarts.
  experimental: { turbopackFileSystemCacheForDev: false },
};

export default nextConfig;
