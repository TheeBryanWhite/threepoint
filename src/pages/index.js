import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import HomeLayout from '../components/layout/home-layout'
import SEO from '../components/seo'
import { RichText } from 'prismic-reactjs'

import '../components/sass/home.scss'

const IndexPage = ({data}) => {

  const doc = data.prismic.allPages.edges.slice(0,1).pop()
  if (!doc) return null

  return (
    <HomeLayout>
      <SEO title="Home" />
      <RichText render={doc.node.page_content} />
    </HomeLayout>
  )
}

export const query = graphql`
query PageQuery($uid: String) {
  prismic {
    allPages(uid: $uid) {
      edges {
        node {
          ... on PRISMIC_Page {
            page_content
          }
        }
      }
    }
  }
}
`

IndexPage.propTypes = {
  page_content: PropTypes.object,
}

IndexPage.defaultProps = {
  page_content: {},
}

export default IndexPage
