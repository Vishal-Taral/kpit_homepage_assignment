/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.kpit.com'
      },
    ],
  },
  experimental: {
    turbo: {
      enabled: false, // ✅ Correct way to disable Turbopack
    },
  },
};

// export default nextConfig;
