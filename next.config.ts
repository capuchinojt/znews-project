/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
  },
  images: {
    domains: ['example.com', 'images.unsplash.com', 'photo.znews.vn'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60, // Cache images for 1 minute minimum
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  swcMinify: true, // Use SWC for faster builds
  // Enable static optimization
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;