import PropTypes from "prop-types"
import React from "react"

import "./footer.scss"

const theDate = new Date()
const theYear = theDate.getFullYear();

const Footer = ({ siteTitle, footerClass }) => (
    <footer className={footerClass}>
      <div className="copyright">
        <p>&copy; {theYear} &#47;&#47; {siteTitle} &#47;&#47; All rights reserved</p>
      </div>

      <div className="stinger">
        <p>www.<span>3pt</span>.design &#47;&#47; {theYear}</p>
      </div>
    </footer>
  )
  
  Footer.propTypes = {
    footerClass: PropTypes.string,
    siteTitle: PropTypes.string
  }
  
  Footer.defaultProps = {
    footerClass: ``,
    siteTitle: ``
  }
  
  export default Footer