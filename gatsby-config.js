module.exports = {
  siteMetadata: {
    title: 'Wildsmith Studio site',
    siteUrl: 'https://www.wildsmithstudio.com',
  },

  plugins: [
    // 'gatsby-wildsmith-instafeed',
    {
      resolve: 'gatsby-source-instagram',
      options: {
        accessToken: '6943356364.18e5e2e.d8d491ac55f34a3ba1f85e6a3c763c9c',
        limit: 6,
      },
    },
    'wildsmith-blog',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-images',
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-115047842-1',
      },
    },
  ],
};
