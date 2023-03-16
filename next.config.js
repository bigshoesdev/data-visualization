/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    server: process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://hellometer-eyes.vercel.app'
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
