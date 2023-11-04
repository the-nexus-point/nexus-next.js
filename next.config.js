/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URI: process.env.BACKEND_URI,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
