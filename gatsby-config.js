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
    // {
    //   resolve: "gatsby-plugin-guess-js",
    //   options: {
    //     GAViewID: `230022083`,
    //     jwt: {
    //       client_email: "safercontact@safercontact-guess-js.iam.gserviceaccount.com",
    //       private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQClBjuTIbUXOeWt\nXEJTAfHY7APVzi5IIzMGKcJKfU3KB4+xjrdcBrV0zxAILOjZrCYKMa9yy9ZJqwyH\nho9uBqkO7Zr2OY+RgTlXNu0quCIeErB+8jbVHGwwox6oG4E5vo+Z3Lx2J3t3HO+T\nxFEFXjNDM+KTeajlzNKHFdpOMdCnVAM1cny8ndNPXud6chQ/AHxJqjYuu1aMPX0s\nFu+Ogxstzr58ErOH509mOIOKuoz9ta2HcyDh/o3ZQzDo2gCeJ0DEYiFlmSD7cYU0\nuV65NbJW31wlOijlHdX3Xf+ZOGmSP70kiuqZuUewu6xg8aiES3TqRFu4pzmeURWD\nyEcBXXhbAgMBAAECggEADB5IDUbomHSjXbasfCuXyfLGJh/TUDxqSJj6cCPn3965\nE5qqWYyrxV2LQAs90ilzf0SLLYyzoL2tC6q69gmkX1J3En72ZwLGGWLdya+ARq5F\n3bY47Pwx8BeaboSoJnuZUGNgR426SFK/2R10FOCh0ENYIrV7zKkQCksPHxzgK9lZ\nbD5b34alcWjJxYsqoMa4Rh/zlpyYTQ52AsW+1iWJFkOy7+eOlWoHrRMq0bNCmhJ4\nWOaTbrKDBDDC4jFN55brhoS12BJ+qTZoO0hjiBluOHXhBfxVd0VRD/2IXjEck86S\nagZMIwHnS3F8UGH7KdL8+tHUUaXgCkmKeEtA1B9MKQKBgQDf7YeQ8sVLOB0mAr0u\nbCslgtqY/9XwCEhVxFjqqdG4zDRT9dcLNcCV4iJpQAPJZzXiGjgIpKGadh6twujR\nTSCo8AIctWteXgXAtXAYHOX2s47L4Uoy2BVMcY0w3j3a9VfCPLG+i5OS/C6qBpvw\nj0ml60NRpDsCmyNCtH9Z3/A+5QKBgQC8qPcYoFEEWS73/qmO8KVYTmPGEd/feaaV\nT/IbHN3wA8qhe+BkyafPco0n5SxvBi5NBMtexUlekTAzSSAFo7rhtq4xmxtOOK3a\nYw+Btvlh8BmOidjGzdRblDXK7Py6oTT4ttna4wFLcBH+5vwMKZNeG6dY8M31fYv6\nhbNnJcgmPwKBgBeulD7FHg51cce6VG2bbPi7nQi/Tc3j4lqHuGug6BgmKIaUoliC\nJ8ryLnd5GK1tJ+qwoSpw1tJyGY6A5YR1JrYXI/ILUb6aLPuTdLZoH/32QWzYd7Nm\n3OHHxIndhycn+U8GgjnHoyTRXNIIfudzD/PnLKhuuPruk00Tr8A+ibbtAoGAV14w\nQDlOC6N5euN2hnmvOLvkvL9eW9GscY06Y4/0v8ghuLLzcflpO0qjUAxzjV7hZk2I\nGPVoSuEV30pICBSQ4SKGfPaFqK3a5T3m2n1v9AkK7NWtjDOZ2mdCmh0x1QP+0gdr\n0FA8M0FNNCyoIMHIO1a3IxsxZjSj9HqiYGxAymUCgYA9YvA4U4cG6P7h8vmhQC80\nIOJcJQUVC1EML63i+EyzKZ4on4iUD2WH7rHa03Z7h1QSF9mZNzRTLN+Nkkl85P1Y\nxX952i1LQANCn4iPBHrxseKh9j33YjbmWiXkVLEMLu5SL+Z6fFfPwQqXPGNJoXwh\nANK1gCCwt8kfW/bv80vxVA==\n-----END PRIVATE KEY-----\n",
    //     },
    //     minimumThreshold: 0.03,
    //     period: {
    //       startDate: new Date("2018-1-1"),
    //       endDate: new Date(),
    //     },
    //   },
    // },
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
    `gatsby-plugin-svgr`,
    {
      resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: '',
          policy: [{
            userAgent: '*',
            allow: '/',
          }],
          output: '/robots.txt',
          sitemap: ''
        },
      },
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
        name: `ThreePoint Website`,
        short_name: `ThreePoint`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
