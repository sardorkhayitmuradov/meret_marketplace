/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'kr'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

module.exports = nextConfig;
