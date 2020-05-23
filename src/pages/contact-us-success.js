import React from 'react';
import PropTypes from 'prop-types'
import SEO from '../components/seo'
import { RichText } from 'prismic-reactjs'
import { graphql } from 'gatsby'

import SuccessLayout from '../components/layout/success-layout'

const Success = ({data}) => {

    const doc = data.prismic.allPages.edges.slice(0,3).pop();

    if (!doc) return null;

    return (
        <SuccessLayout>
            <SEO title="You did it!" />

            <div id="main" className="main success">
                <RichText render={doc.node.page_content} />
            </div>
        </SuccessLayout>
    )
}

export const query = graphql`
query SuccessQuery($uid: String) {
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

Success.propTypes = {
  page_content: PropTypes.object,
}

Success.defaultProps = {
  page_content: {},
}

export default Success 
