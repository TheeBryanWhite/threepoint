import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contact-form/ContactForm'

import '../components/sass/contact.scss'

const ContactPage = ({data}) => {

  const doc = data.prismic.allPages.edges.slice(0,2).pop();
  if (!doc) return null;

  return (
    <Layout>
      <SEO title="Contact Us" />

      <div className="contact-form">
          <RichText render={doc.node.page_title} />
          <RichText render={doc.node.page_content} />
          <ContactForm />
      </div>
    </Layout>
  )
}

export const query = graphql`
query ContactQuery($uid: String) {
  prismic {
    allPages(uid: $uid) {
      edges {
        node {
          ... on PRISMIC_Page {
            page_title
            page_content
          }
        }
      }
    }
  }
}
`

ContactPage.propTypes = {
  page_content: PropTypes.object,
  page_title: PropTypes.string,
}

ContactPage.defaultProps = {
  page_content: {},
  page_title: {},
}

export default ContactPage 