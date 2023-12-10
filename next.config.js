/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Not needed in Nextjs 14
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;
