import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import HomeLayout from '../components/layout/home-layout'
import SEO from '../components/seo'
import { RichText } from 'prismic-reactjs'

import '../components/sass/home.scss'

const IndexPage = ({data}) => {

  const doc = data.prismic.allPages.edges.slice(0,3).pop()
  if (!doc) return null

  return (
    <HomeLayout>
      <SEO title={doc.node.seo_title} description={doc.node.seo_description} />
      <RichText render={doc.node.page_content} />
    </HomeLayout>
  )
}

export const query = graphql`
query homeQuery {
  prismic {
    allPages(uid: "home") {
      edges {
        node {
          page_content
          seo_title
          seo_description
        }
      }
    }
  }
}
`

IndexPage.propTypes = {
  page_content: PropTypes.object,
  seo_description: PropTypes.string,
  seo_title: PropTypes.string
}

IndexPage.defaultProps = {
  page_content: {},
  seo_description: ``,
  seo_title: ``
}

export default IndexPage
