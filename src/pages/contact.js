import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contact-form/ContactForm'

import '../components/sass/contact.scss'

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="ThreePoint Collective | Contact Us" />

    <div className="contact-form">
        <h2>Let's join forces!</h2>
        <p>You have questions. We have answers. We can't wait to hear from you.</p>
        <p>Call us at <b>{data.site.siteMetadata.phone}</b></p>
        <ContactForm />
    </div>
  </Layout>
)

// eslint-disable-next-line no-unused-vars
export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        phone
      }
    }
  }
`

ContactPage.propTypes = {
  phone: PropTypes.string,
}

ContactPage.defaultProps = {
  phone: ``,
}

export default ContactPage