/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.nvidia.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '**.amd.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
