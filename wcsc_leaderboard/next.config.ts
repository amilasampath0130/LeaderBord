import type { NextConfig } from "next";

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**', // Allows all paths under /u/
      },
      // Add other providers as needed:
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google
      },
    ],
  },
}

export default nextConfig
