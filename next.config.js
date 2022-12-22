/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.metmuseum.org',
        port: '',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig
