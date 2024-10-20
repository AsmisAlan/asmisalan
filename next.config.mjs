/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/<repository-name>" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/<repository-name>" : "",
};

export default nextConfig;
