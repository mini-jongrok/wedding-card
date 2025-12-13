import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/comments',
        destination: 'https://rmgpgab-wedding-backend-xyz.a.run.app/comments',
      },
      {
        source: '/api/comments/:path*',
        destination: 'https://rmgpgab-wedding-backend-xyz.a.run.app/comments/:path*',
      },
    ];
  },
};

export default nextConfig;
