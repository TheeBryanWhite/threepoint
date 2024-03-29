import React from "preact/compat"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/react"

import Header from "./header"
import Footer from "./Footer"
import Nav from './Navigation'
import "./layout.css"

const scrollContainer = css`
  height: 100vh;
`

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allPrismicMenu {
        nodes {
          data {
            menu_items {
              classes
              label
              link
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Nav navData={data.allPrismicMenu.nodes[0].data} />
      <main css={scrollContainer}>{props.children}</main>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
