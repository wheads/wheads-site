module.exports = {
  siteMetadata: {
    title: `EveryPeso.com`,
    description: `Learn to budget, beat debt, &amp; build a legacy`
  },
  plugins: [    
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
        spaceId: `m0h1s4dc3k8h`,
        accessToken: `25e4e3d157c7a39d430e3b540d7bce6be6a0267f5c005cbdf542755ba2df7804`
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ]
};