import { Link } from "gatsby"
import PropTypes from "prop-types"
import React  from "preact"
import { connect } from 'react-redux'
import { setHeaderStatus } from '../redux/actions'
import styled from "@emotion/styled"
import Helpers from '../utils/Helpers'
import GlobalStyles from '../utils/GlobalStyles'
import Hamburger from './Hamburger'
import { ReactComponent as SVGThreePt } from '../svg/threepoint-logo.svg'

let outQuart = new Helpers('out-quart')
const hideThis = new GlobalStyles()

const Header = props => {

  const HeaderEl = styled.header`
    animation: dropIn 1s cubic-bezier(${outQuart.ease()}) forwards;
    animation-delay: 4s;
    padding: 25px 0;
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
  `

  const containerMargin = new Helpers(32)
  const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 ${containerMargin.toRem};
  `

  const ScreenReaderText = styled.span`${hideThis.screenReaderText()}`

  return(
    <HeaderEl>
      <Container>
        <h1 style={{ margin: 0 }}>
          <Link to="/">
            <SVGThreePt />
            <ScreenReaderText>{props.siteTitle}</ScreenReaderText>
          </Link>
        </h1>
        <Hamburger />
      </Container>
    </HeaderEl>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default connect(null, {setHeaderStatus})(Header)
