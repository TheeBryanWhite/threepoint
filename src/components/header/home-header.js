import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Nav from '../nav/nav'

import './header.scss'

const HomeHeader = ({ menuData }) => (
  <header className="home">
    <div className="logo">
      <h1><Link to="/"><b>Three</b><i>Point</i> Collective</Link></h1>
    </div>
    <Nav menu={menuData} />
  </header>
)

HomeHeader.propTypes = {
  menuData: PropTypes.object,
}

HomeHeader.defaultProps = {
  menuData: ``,
}

export default HomeHeader
