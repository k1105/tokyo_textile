/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //default: true
  swcMinify: true,
};

module.exports = {
  env: {
    NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
