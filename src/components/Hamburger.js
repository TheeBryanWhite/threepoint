import React from 'preact'
import { connect } from 'react-redux'
import { setMenu } from '../redux/actions'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import GlobalStyles from '../utils/GlobalStyles'

const hideThis = new GlobalStyles()
const ScreenReaderText = styled.span`${hideThis.screenReaderText()}`

const Hamburger = props => {

	const clickHandler = () => {
		props.setMenu(!props.menuOpen)
		return false
	}

	return (
		<div 
			className={(props.menuOpen ? 'active-button' : '')}
			css={css`
				&.active-button {

					button {
			
						&:after,
						&:before,
						i {
							background-color: #ffffff);
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
			`}
		>
        	<button
				css={css`
					background-color: transparent;
					border: 0;
					cursor: pointer;
					height: 25px;
					margin: 25px;
					padding: 0;
					position: relative;
					width: 30px;
			
					&:after,
					&:before {
						background-color: #ffffff;
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
				`}
				onClick={() => { clickHandler() }}
			>
            	<i
					css={css`
						background-color: #ffffff;
						display: block;
						height: 3px;
						opacity: 1;
						transition: opacity .2s linear;
						width: 100%;
					`}
				>
					<ScreenReaderText>Menu</ScreenReaderText>
				</i>
        	</button>
        </div>
	)
}

const mapStateToProps = state => ({
    menuOpen: state.app.menuOpen
})

export default connect(mapStateToProps, { setMenu })(Hamburger)