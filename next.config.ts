import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/servi%C3%A7os',
        destination: '/servicos',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
