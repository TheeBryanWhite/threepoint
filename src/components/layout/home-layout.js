/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import HomeHeader from "../header/home-header";
import Footer from "../footer/footer";
import "./layout.scss";
import "../../utils/normalize.css";

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
      }
    }
  `);

  return (
    <>
      <HomeHeader menuData={data.site.siteMetadata.menuLinks} />
      <main className="home">
        {children}
      </main>
      <Footer footerClass="home" siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout;
