import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./nav.scss";

const Nav = ({ menu }) => {

  return (
    <nav>
        <ul>
        {
            menu.map((navItem)=> (
                <li key={navItem.name} className={navItem.class}>
                    <AniLink paintDrip to={navItem.link} hex="767676"><span>{navItem.name}</span></AniLink>
                </li>
            ))
        }
        </ul>
    </nav>
  )
}

Nav.propTypes = {
    menu: PropTypes.string,
}
  
Nav.defaultProps = {
    menu: ``,
}

export default Nav;