import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    dangerouslyAllowSVG: true,
    remotePatterns:[
      {
        protocol: "https",
        hostname: "*",
      }
    ]
  },
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'redesigned-meme-r4g57q77g4jp2p5v-3000.app.github.dev'
      ]
    }
  }

};

export default nextConfig;
