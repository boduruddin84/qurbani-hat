/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "/**",
      },
      {
        protocol: 'https',
        hostname: 'www.pinterest.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
