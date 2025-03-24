/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.istockphoto.com', 'www.shutterstock.com'],
  },
};

module.exports = nextConfig; 