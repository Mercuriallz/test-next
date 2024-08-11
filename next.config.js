/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mui/x-charts'],
  env: {
    COIN_MARKET_CAP: 'ab392e2a-9608-47c0-8bae-02a9784e1d41',
  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.pokemondb.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.artic.edu',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
