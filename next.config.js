/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URI: process.env.BACKEND_URI,
  },
};

module.exports = nextConfig;
