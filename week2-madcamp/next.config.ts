import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["ggred0198.s3.ap-northeast-2.amazonaws.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
