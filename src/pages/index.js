import React from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD
import { graphql } from "gatsby"
=======
import { graphql } from "gatsby";
>>>>>>> 0a0aa28532f2caa6ea02f5b4dde684611640f361

import HomeLayout from '../components/layout/home-layout'
import SEO from '../components/seo'
import { RichText } from 'prismic-reactjs'

import '../components/sass/home.scss'

const IndexPage = ({data}) => {

<<<<<<< HEAD
  const doc = data.prismic.allPages.edges.slice(0,1).pop()
  if (!doc) return null
=======
  const doc = data.prismic.allPages.edges.slice(0,1).pop();
  if (!doc) return null;
>>>>>>> 0a0aa28532f2caa6ea02f5b4dde684611640f361

  return (
    <HomeLayout>
      <SEO title="Home" />
      <RichText render={doc.node.page_content} />
    </HomeLayout>
  )
}

export const query = graphql`
<<<<<<< HEAD
query PageQuery($uid: String) {
=======
query HomeQuery($uid: String) {
>>>>>>> 0a0aa28532f2caa6ea02f5b4dde684611640f361
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
