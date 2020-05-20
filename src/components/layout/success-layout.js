/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../header/header";
import Footer from "../footer/footer";
import "./layout.scss";
import "../../utils/normalize.css";

const SuccessLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SuccessTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header />
      <main className="footer">
        {children}
      </main>
      <Footer footerClass="success" siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

SuccessLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

export default SuccessLayout;
