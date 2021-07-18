const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js');

const nextConfig = {
  i18n: {
    locales: ['en', 'el'],
    defaultLocale: 'en',
  },
};
module.exports = withNextra(nextConfig);
