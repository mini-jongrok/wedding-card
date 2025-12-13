import type { NextConfig } from "next";

const API_URL = process.env.API_URL || 'https://wedding-backend-1084988890491.asia-northeast3.run.app';

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
        destination: `${API_URL}/comments`,
      },
      {
        source: '/api/comments/:path*',
        destination: `${API_URL}/comments/:path*`,
      },
    ];
  },
};

export default nextConfig;
