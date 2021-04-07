const linkResolver = require("./src/utils/linkResolver")

module.exports = {
  siteMetadata: {
    title: `ThreePoint Collective`,
    description: `ThreePoint Collective is a multi-dimensional brand strategy, design, and product studio.`,
    author: `Bryan White`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Axis', 'Core Sans'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'threepoint',
        accessToken: 'MC5Yc2g3WkJFQUFDUUFDV3pS.PBnvv70rBUpM77-977-9Tu-_ve-_vVjvv73vv70jSmpw77-9U--_ve-_vTbvv703CO-_vTTvv70C77-9',
        linkResolver: () => linkResolver,
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children,
        ) => {
          
        },
        // Remember, the schema names in the object have to match the API ID
        schemas: {
          page: require("./src/schemas/page.json"),
          community: require("./src/schemas/community.json"),
        },
        shouldDownloadImage: ({ node, key, value }) => {
          return true
        }
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
      `gatsby-background-image`,
      `gatsby-plugin-preact`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-smoothscroll`,
      `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
