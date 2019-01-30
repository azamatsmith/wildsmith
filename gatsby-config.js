require('dotenv').config({
  path: '.env',
});

const {ROLLBAR_ACCESS_TOKEN} = process.env;

module.exports = {
  siteMetadata: {
    title: 'Wildsmith Studio site',
    siteUrl: 'https://www.wildsmithstudio.com',
  },

  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Wildsmith Studio',
        short_name: 'Wildsmith',
        background_color: '#FFFFFF',
        theme_color: '#e6bf9d',
        display: 'fullscreen',
        start_url: '/',
        icon: 'static/wildsmith-icon.png',
      },
    },
    {
      resolve: 'wildsmith-source-instagram',
      options: {
        accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
        limit: 6,
      },
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-netlify-cache`,
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
      resolve: 'gatsby-plugin-rollbar',
      options: {
        accessToken: ROLLBAR_ACCESS_TOKEN,
        // For all configuration options, see https://docs.rollbar.com/docs/rollbarjs-configuration-reference
        captureUncaught: true,
        captureUnhandledRejections: true,
        payload: {
          environment: 'production',
        },
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
