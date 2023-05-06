/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  }, eslint: {
    ignoreDuringBuilds: true,
  },

  env: {
    CONTENTFUL_SPACE_ID: 'zlug9c53a7am',
    CONTENTFUL_ENVIRONMENT: 'master',
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '',
  //       port: '3000',
  //       pathname: '',
  //     },
  //   ],
  // },
}

module.exports = nextConfig
