import React from 'preact'
import { connect } from 'react-redux'
import Img from 'gatsby-image'
import styled from "@emotion/styled"
import { css } from '@emotion/react'
import Helpers from '../../utils/Helpers'

let inOutQuart = new Helpers('in-out-quart')

const ProductImageEl = styled.div`
	#productimg-1 {
		.gatsby-image-wrapper {
			@media (min-width: 1024px) {
				left: 25%;
				top: -310px;
			}
			@media (min-width: 1440px) and (min-height: 821px) {
				top: -180px;
			}
		}
	}

	#productimg-2 {
		.gatsby-image-wrapper {
			width: 100%;
			@media (min-width: 1024px) {
				left: -5%;
				top: -180px;
			}
			@media (min-width: 1440px) and (min-height: 821px) {
				top: -60px;
			}
		}
	}

	#productimg-3 {
		.gatsby-image-wrapper {
			@media (min-width: 1024px) {
				left: -15%;
				top: -245px;
			}
			@media (min-width: 1440px) and (min-height: 821px) {
				top: -125px;
			}
		}
	}

	#productimg-4 {
		left: 0;
		pointer-events: none;
		position: fixed;
		top: 0;
		.gatsby-image-wrapper {
			left: 0;
			top: 0;
		}

		img {
			object-fit: cover !important;
			object-position: left top !important;
		}
	}
`

const animations = css`
	&.active {
		animation: cyclein 1s cubic-bezier(${inOutQuart.ease()}) 1;
		opacity: 1;
		transform: translateX(0);
	}

	&.inactive {
		animation: cycleout 1.2s cubic-bezier(${inOutQuart.ease()}) 1;
		opacity: 0;
		transform: translateX(200%);
	}

	@keyframes cyclein {
		0% {
			opacity: 0;
			transform: translate(200%);
		}

		50% {
			opacity: 0;
		}

		100% {
			opacity: 1;
			transform: translate(0);
		}
	}

	@keyframes cycleout {
		0% {
			opacity: 1;
			transform: translate(0);
		}
	
		50% {
			opacity: 0;
			transform: translate(-200%);
		}
	
		100% {
			opacity: 0;
			transform: translate(200%);
		}
	}
`

const ProductImages = props => {
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
	
	return(
		<ProductImageEl>
			{
				props.imgData.items.map((img, index) => {
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
							id={`productimg-${index + 1}`}
							key={index}
						>
							<Img
								alt="" 
								fluid={img.our_work_image.localFile.childImageSharp.fluid}
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
		</ProductImageEl>
	)
}

const mapStateToProps = state => ({
	activeWork: state.app.activeWork,
	inactiveWork: state.app.inactiveWork
})

export default connect(mapStateToProps, null)(ProductImages)