import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:"export",
  allowedDevOrigins: [
    "*.trycloudflare.com",
    "*.loca.lt",
  ],

  // WordPress /blogs ko bypass karo
  async rewrites() {
    return {
      fallback: [
        {
          source: '/blogs/:path*',
          destination: '/blogs/:path*',
        },
      ],
    };
  },
};

export default nextConfig;

