import React from 'react'

import HomeLayout from '../components/layout/home-layout'
import SEO from '../components/seo'

import '../components/sass/home.scss'

const IndexPage = () => (
  <HomeLayout>
    <SEO title="Home" />
    <ul style={{
      listStyle: `none`
    }}>
      <li>Brand Strategy</li>
      <li>Design</li>
      <li>Product</li>
    </ul>
  </HomeLayout>
)

export default IndexPage
