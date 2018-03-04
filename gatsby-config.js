module.exports = {
  siteMetadata: {
    title: 'Wildsmith Studio site',
    siteUrl: 'https://www.wildsmithstudio.com',
  },

  plugins: [
    'gatsby-wildsmith-instafeed',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
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
