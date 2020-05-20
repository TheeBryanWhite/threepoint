import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"

import './header.scss'

const Header = () => (
  <header>
    <div className="logo">
      <h1><AniLink cover direction="left" to="/" bg="#767676"><b>Three</b><i>Point</i> Collective</AniLink></h1>
    </div>
  </header>
)

export default Header