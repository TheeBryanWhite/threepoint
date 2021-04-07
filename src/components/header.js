import scrollTo from 'gatsby-plugin-smoothscroll'
import PropTypes from "prop-types"
import React  from "preact"
import { connect } from 'react-redux'
import { setHeaderStatus } from '../redux/actions'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Helpers from '../utils/Helpers'
import GlobalStyles from '../utils/GlobalStyles'
import Hamburger from './Hamburger'
import { ReactComponent as SVGThreePt } from '../svg/threepoint-logo.svg'

const outQuart = new Helpers('out-quart')
const hideThis = new GlobalStyles()
const ScreenReaderText = styled.span`${hideThis.screenReaderText()}`

const Header = props => {

  return(
    <header
      css={css`
        animation: dropIn 1s cubic-bezier(${outQuart.ease()}) forwards;
        animation-delay: 4s;
        position: fixed;
        top: -100%;
        width: 100%;
        z-index: 100;
    
        svg {
          height: 43px;
        }
    
        @keyframes dropIn {
          0% {
            top: -100%;
          }
          100% {
            top: 0;
          }
        }
      `}
    >
      <div
        css={css`
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 1440px;
          padding: 0 0.438rem;
        `}
      >
        <h1 
          css={css`
            line-height: auto;
            margin: 0;
          `}
        >
          <button 
            css={css`
              background-color: transparent;
              border: 0;
              outline: none;
              padding: 25px;
            `}
            onClick={() => {scrollTo('#hero')}}
          >
            <SVGThreePt />
            <ScreenReaderText>{props.siteTitle}</ScreenReaderText>
          </button>
        </h1>
        <Hamburger />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default connect(null, {setHeaderStatus})(Header)
