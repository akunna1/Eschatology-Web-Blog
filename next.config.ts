import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows images from Contentful’s domain instead of blocking them for security reasons
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
    ],
  },
};

export default nextConfig;
