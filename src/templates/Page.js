import React from 'preact'
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import usePreviewData from '../utils/UsePreviewData'
import Layout from '../components/layout'
import SEO from "../components/seo"
import SliceZone from '../components/SliceZone/SliceZone'

const Page = (props, isLoaded) => {
  const { data } = props.data.prismicPage
  const liveData = usePreviewData(data)

  return (
    <Layout>
      <SEO title={props.data.prismicPage.uid} />
      <Helmet>
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=bryanjsite"></script>
      </Helmet>
      <SliceZone allSlices={liveData.body} />
    </Layout>
  )
}

export default withPreview(Page)

export const pageQuery = graphql`
  query MyQuery($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      data {
        body {
          ... on PrismicPageBodyHero {
            id
            primary {
              hero_section_id
              hero_background_image {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              hero_video_mp4 {
                url
              }
              hero_video_ogv {
                url
              }
            }
            slice_type
          }
          ... on PrismicPageBodyOneColumn {
            id
            primary {
              one_col_background_color
              one_column_body {
                html
              }
            }
            slice_type
          }
          ... on PrismicPageBodyTweener {
            id
            slice_type
            primary {
              tweener_body {
                html
              }
              tweener_transition_direction
              tweener_background_color
              tweener_background_image {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          ... on PrismicPageBodyOurWork {
            id
            slice_type
            items {
              our_work_bg_color
              our_work_body {
                html
              }
              our_work_image {
                alt
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              our_work_logo {
                alt
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              our_work_teaser {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          ... on PrismicPageBodyOurWork {
            id
            slice_type
            primary {
              our_work_body {
                html
              }
              our_work_gradient {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            items {
              our_work_bg_color
              our_work_body {
                html
              }
              our_work_logo {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              our_work_image {
                localFile {
                  childImageSharp {
                    fixed {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              our_work_teaser {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          ... on PrismicPageBodyPageFooter {
            id
            slice_type
            primary {
              page_footer_body {
                html
              }
            }
          }
          ... on PrismicPageBodyTimedSlider {
            id
            slice_type
            primary {
              timed_slider_title {
                html
              }
            }
            items {
              timed_slide_body {
                html
              }
              timed_slide_image {
                localFile {
                  url
                }
              }
              timed_slide_title {
                html
              }
              timed_slider_page_header {
                html
              }
            }
          }
          ... on PrismicPageBodyTeam {
            id
            id
            slice_type
            items {
              team_member_bio {
                html
              }
              team_member_position {
                html
                text
              }
              team_member_photo {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              team_member_first_name {
                html
                text
              }
              team_member_last_name {
                html
                text
              }
              team_member_linkedin {
                url
                target
              }
            }
            primary {
              team_body {
                html
              }
            }
          }
        }
      }
      uid
      id
    }
  }
`