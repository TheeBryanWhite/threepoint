module.exports = {
  siteMetadata: {
    author: `Bryan White`,
    description: `An agency for brand strategy, product design, and marketing, `,
    menuLinks: [
      {
        class: 'start-here',
        name: 'Start here',
        link: 'contact-us'
      }
    ],
    phone: `(978) 238-9797`,
    title: `ThreePoint Collective`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic-graphql',
        options: {
          accessToken: 'MC5Yc2g3WkJFQUFDUUFDV3pS.PBnvv70rBUpM77-977-9Tu-_ve-_vVjvv73vv70jSmpw77-9U--_ve-_vTbvv703CO-_vTTvv70C77-9',
          repositoryName: 'threepoint', // (REQUIRED, replace with your own)
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PPLHFNL",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        routeChangeEventName: "gatsby-route-change",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/triangle.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`
  ],
}
