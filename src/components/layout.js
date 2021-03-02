import React from "preact/compat"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/react"

import Header from "./header"
import Footer from "./Footer"
import "./layout.css"

const scrollSnapContainer = css`
  height: 100vh;
  overflow: scroll;
  scroll-snap-type: y mandatory;  

  section {
    scroll-snap-align: start;
    scroll-snap-stop: normal;
  }
`

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main css={scrollSnapContainer}>{props.children}</main>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
