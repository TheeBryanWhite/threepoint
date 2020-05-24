import React from 'react'
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import HomeHeader from "../header/home-header"
import Footer from "../footer/footer"
import "./layout.scss"
import "../../utils/normalize.css"

const HomeLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query HomeTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            class
            name
            link
          }
        }
      },
      desktop: file(relativePath: { eq: "components/layout/img/background.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <>
      <HomeHeader menuData={data.site.siteMetadata.menuLinks} />
      <BackgroundImage
          Tag="main"
          className="home"
          fluid={imageData}
          backgroundColor={`#000`}
        >
          {children}
        </BackgroundImage>
      <Footer footerClass="home" siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
