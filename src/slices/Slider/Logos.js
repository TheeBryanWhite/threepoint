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
		height: 100vh;
		position: relative;

		#logo-1 {
			top: 47%;
			@media (min-width: 1024px) {
				top: 37%;
			}
			@media (min-width: 1440px) and (min-height: 821px) {
				top: 47%;
			}

			svg {
				fill: #ffffff;
			}
		}

		#logo-2 {
			@media (min-width: 1024px) {
				top: 33%;
			}
			@media (min-width: 1440px) and (min-height: 821px) {
				top: 43%;
			}

			svg {
				fill: #ffffff;
			}
		}

		#logo-3 {
			@media (min-width: 1024px) {
				top:-27%;
			}
			@media (min-width: 1440px) and (min-height: 821px) {
				top:-11%;
			}
		}

		#logo-4 {
			@media (min-width: 1024px) {
				top: 15%;
			}
			@media (min-width: 1440px) and (min-height: 821px) {
				top: 25%;
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
								width: 100%;
								${animations}
							`}
							id={`logo-${index + 1}`}
							key={index}
						>
							<Img
								alt="" 
								fluid={img.our_work_logo.localFile.childImageSharp.fluid}
								imgStyle={{
									objectPosition: 'right 150px',
									objectFit: 'none',
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