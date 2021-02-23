const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all Pages with their IDs and template data.
  const pages = await graphql(`
    {
      allPrismicPage {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const pageList = pages.data.allPrismicPage.edges

  const pageTemplate = require.resolve("./src/templates/Page.js")

  pageList.forEach(edge => {  
    const url = `/${edge.node.uid}`

    if (url === '/home') {
      createPage({
        path: '/',
        component: pageTemplate,
        context: {
          uid: edge.node.uid,
        },
      })
    } else {
      createPage({
        path: url,
        component: pageTemplate,
        context: {
          uid: edge.node.uid,
        },
      })
    }
  })
}