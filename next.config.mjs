/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kpit.com",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
  experimental: {
    turbo: {
      enabled: false,
    },
  },
};

export default nextConfig;