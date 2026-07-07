/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Running on a real Node.js server (Hostinger Node.js hosting), so
    // Next's built-in image optimizer works normally here.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
