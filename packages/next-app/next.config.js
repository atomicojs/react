/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ["@atomico/react"],
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
