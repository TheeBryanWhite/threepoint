module.exports = {
  siteMetadata: {
    author: 'Bryan White',
    description: 'An agency for brand strategy, product design, and marketing',
    menuLinks: [
      {
        class: 'start-here',
        name: 'Start here',
        link: 'contact-us'
      }
    ],
    phone: '(978) 238-9797',
    siteUrl: 'https://3pt.design',
    title: 'ThreePoint Collective',
  },
  plugins: [
    'gatsby-background-image',
    {
      resolve: 'gatsby-source-prismic-graphql',
        options: {
          accessToken: 'MC5Yc2g3WkJFQUFDUUFDV3pS.PBnvv70rBUpM77-977-9Tu-_ve-_vVjvv73vv70jSmpw77-9U--_ve-_vTbvv703CO-_vTTvv70C77-9',
          omitPrismicScript: true,
          repositoryName: 'threepoint', // (REQUIRED, replace with your own)
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PPLHFNL',
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        routeChangeEventName: "gatsby-route-change",
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#000',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/triangle.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: [
          '/contact-us-success',
          '/preview',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://3pt.design',
        policy: [{
          userAgent: '*',
          allow: '/'
        }],
        output: '/robots.txt',
        sitemap: 'https://3pt.design/sitemap.xml'
      },
    },    
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-transition-link',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'source',
        path: `${__dirname}/src`,
      },
    },
    'gatsby-transformer-sharp'
  ],
}
