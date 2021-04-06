import React from 'preact'
import { connect } from 'react-redux'
import Img from 'gatsby-image'
import styled from "@emotion/styled"
import { css } from '@emotion/react'
import Helpers from '../../utils/Helpers'

let inOutQuart = new Helpers('in-out-quart')

const animations = css`
	&.active {
		animation: logoin 1s cubic-bezier(${inOutQuart.ease()}) forwards;
		animation-delay: 1s;
	}

	&.inactive {
		animation: logoout 1.2s cubic-bezier(${inOutQuart.ease()}) forwards;
	}

	@keyframes logoin {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes logoout {
		0% {
			opacity: 1;
			transform: translate(0);
		}

		10% {
			opacity: 0;
		}
	
		50% {
			transform: translate(-200%);
		}
	
		100% {
			transform: translate(200%);
		}
	}
`

const Logos = props => {
	const classBuilder = index => {

		let classArr = ['slide']

		if (props.activeWork === index) {
			classArr.push('active')
		}

		if (typeof props.activeWork !== 'undefined' && props.inactiveWork === index) {
			classArr.push('inactive')
		}

		const classes = classArr.join(' ')

		return classes
	}

	const LogoEl = styled.div`
		display: none;
		height: 100vh;
		position: relative;
		@media (min-width: 768px) {
			display: block;
		}

		#logo-1 {
			bottom: 41%;
			height: auto;
			right: 13%;
			width: 237px;
			@media (min-width: 1024px) {
				right: 7%;
				top: 70%;
			}
			@media (min-width: 1440px) and (min-height: 821px) {
				bottom: 47%;
				right: 3%;
			}

			svg {
				fill: #ffffff;
			}
		}

		#logo-2 {
			bottom: 35%;
			height: auto;
			right: 13%;
			width: 205px;
			@media (min-width: 1024px) {
				bottom: 15%;
				right: 6%;
			}
			@media (min-width: 1440px) and (min-height: 821px) {
				right: 3%;
			}

			svg {
				fill: #ffffff;
			}
		}

		#logo-3 {
			bottom: 74%;
			height: auto;
			right: 13%;
			width: 155px;
			// width: 315px;
			@media (min-width: 1024px) {
				bottom: 61%;
    			right: 7%;
			}
			@media (min-width: 1024px) {
				width: 215px;
			}
			@media (min-width: 1440px) and (min-height: 821px) {
				bottom: 62%;
				right: 1%;
			}
		}

		#logo-4 {
			bottom: 28%;
			height: auto;
			right: 13%;
			width: 155px;
			@media (min-width: 1024px) {
				bottom: 15%;
			}
			@media (min-width: 1440px) and (min-height: 821px) {
				bottom: 15%;
			}
		}
	`
	
	return(
		<LogoEl>
			{
				props.logoData.items.map((img, index) => {
					return(
						<div
							className={classBuilder(index + 1)} 
							css={css`
								opacity: 0;
								position: absolute;
								transition: all 0.2s linear;
								${animations}
							`}
							id={`logo-${index + 1}`}
							key={index}
						>
							<Img
								alt="" 
								fluid={img.our_work_logo.localFile.childImageSharp.fluid}
								imgStyle={{
									zIndex: '-1'
								}}
							/>
						</div>
					)
				})
			}
		</LogoEl>
	)
}

const mapStateToProps = state => ({
	activeWork: state.app.activeWork,
	inactiveWork: state.app.inactiveWork
})

export default connect(mapStateToProps, null)(Logos)