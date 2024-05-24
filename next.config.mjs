/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "assets.website-files.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "mycoreradiance.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
