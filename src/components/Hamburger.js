import React from 'preact'
import { connect } from 'react-redux'
import { setMenu } from '../redux/actions'
import styled from "@emotion/styled"
import GlobalStyles from '../utils/GlobalStyles'
import Helpers from '../utils/Helpers'

let white = new Helpers('white')

const hideThis = new GlobalStyles()
const ScreenReaderText = styled.span`${hideThis.screenReaderText()}`

const BurgerTime = styled.div`

	&.active-button {

		button {

			&:after,
			&:before,
			i {
				background-color: rgb(${white.defaultColors()});
			}

			&:after {
				bottom: 11px;
				transform: rotate(45deg);
			}

			&:before {
				top: 11px;
				transform: rotate(-45deg);
			}

			i {
				opacity: 0;
			}
		}
	}

	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;
		height: 25px;
		padding: 0;
		position: relative;
		width: 30px;

		&:after,
		&:before {
			background-color: rgb(${white.defaultColors()});
			content: '';
			height: 3px;
			left: 0;
			position: absolute;
			transition: all .2s linear;
			width: 100%;
		}

		&:after {
			bottom: 0;
		}

		&:before {
			top: 0;
		}

		&:focus {
			outline: 0;
		}

		i {
			background-color: rgb(${white.defaultColors()});
			display: block;
			height: 3px;
			opacity: 1;
			transition: opacity .2s linear;
			width: 100%;
		}
	}
`

const Hamburger = props => {

	const clickHandler = () => {
		props.setMenu(!props.menuOpen)
		return false
	}

	return (
		<BurgerTime className={(props.menuOpen ? 'active-button' : '')}>
        	<button onClick={() => { clickHandler() }}>
            	<i><ScreenReaderText>Menu</ScreenReaderText></i>
        	</button>
        </BurgerTime>
	)
}

const mapStateToProps = state => ({
    menuOpen: state.app.menuOpen
})

export default connect(mapStateToProps, { setMenu })(Hamburger)