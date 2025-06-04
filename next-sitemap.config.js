module.exports = {
  siteUrl: 'https://paixaomed.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://paixaomed.com/server-sitemap-index.xml'],
  },
};
