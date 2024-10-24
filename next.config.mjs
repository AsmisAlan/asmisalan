/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: basePath,
};

export default nextConfig;
