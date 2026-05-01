import { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows images from Contentful’s domain (images.ctfassets.net) instead of blocking them for security reasons
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net', // Contentful's image domain here
      },
    ],
  },
};

export default nextConfig;
