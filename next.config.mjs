/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "uhdtv.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/**",
      },
      {
        protocol: "https",
        hostname: "mango.blender.org",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "download.blender.org",
        port: "",
        pathname: "/ED/**",
      },
      {
        protocol: "https",
        hostname: "wallpapercave.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
