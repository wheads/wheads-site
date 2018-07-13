require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `EveryPeso.com`,
    description: `Learn to budget, beat debt, &amp; build a legacy`
  },
  plugins: [    
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-PJVX6RP"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || ``,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ``
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ]
};