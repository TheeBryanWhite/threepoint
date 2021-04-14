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
			height: auto;
			left: 10%;
			position: absolute;
			top: -20%;
			width: 100%;
			@media (min-width: 768px) {
				top: -10%;
			}
			@media (min-width: 1024px) {
				left: 43%;
				top: 0;
				width: 70%;
			}
			@media (min-width: 1440px) {
				left: 40%;
			}
		}
		@media (min-width: 1280px) {
			width: 100%;
		}
	}

	#productimg-2 {
		.gatsby-image-wrapper {
			height: auto;
			margin: 10%;
			top: -16%;
			width: 100%;
			@media (min-width: 768px) {
				top: -10%;
			}
			@media (min-width: 1024px) {
				left: 43%;
				margin: 0;
				top: 0;
				width: 50%;
			}
			@media (min-width: 1440px) {
				width: 50%;
			}
		}
	}

	#productimg-3 {
		.gatsby-image-wrapper {
			height: auto;
			margin: 0 29%;
			top: -25%;
			width: 100%;
			@media (min-width: 768px) {
				margin: 0px 19%;
				top: -12%;
			}
			@media (min-width: 1024px) {
				height: auto;
				left: 45%;
				margin: 0;
				top: 0;
				width: 35%;
			}
			@media (min-width: 1920px) {
				left: 39%;
				width: 45%
			}
		}
	}

	#productimg-4 {
		.gatsby-image-wrapper {
			left: 50%;
			top: -20%;
			transform: translateX(-50%);
			width: 120%;
			@media (min-width: 768px) {
				object-fit: cover;
				top: -10%;
				width: 100%;
			}
			@media (min-width: 1024px) {
				left: 70%;
				top: 0;
				width: 70%;
			}
			@media (min-width: 1920px) {
				left: 60%;
			}
		}
		@media (min-width: 1440px) {
			width: 100vw;
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
		<ProductImageEl
			className={props.slideDirection}
			css={css`
				position: absolute;
				top: 0;
				width: 100%;
				.slide {
					align-items: center;
					display: flex;
					height: 100vh;
					opacity: 0;
					position: absolute;
					top: 0;
					transform: translateX(-150%);
				}
				&.null,
				&.next {
					.active {
						animation: cycleinLeft 1s cubic-bezier(${inOutQuart.ease()}) 1;
						opacity: 1;
						transform: translateX(0);
					}
				
					.inactive {
						animation: cycleoutLeft 1.2s cubic-bezier(${inOutQuart.ease()}) 1;
						opacity: 0;
						transform: translateX(200%);
					}
				}

				&.prev {
					.active {
						animation: cycleinRight 1s cubic-bezier(${inOutQuart.ease()}) 1;
						opacity: 1;
						transform: translateX(0);
					}
				
					.inactive {
						animation: cycleoutRight 1.2s cubic-bezier(${inOutQuart.ease()}) 1;
						opacity: 0;
						transform: translateX(200%);
					}
				}
			
				@keyframes cycleinLeft {
					0% {
						opacity: 0;
						transform: translateX(200%);
					}
			
					50% {
						opacity: 0;
					}
			
					100% {
						opacity: 1;
						transform: translateX(0);
					}
				}
			
				@keyframes cycleoutLeft {
					0% {
						opacity: 1;
						transform: translateX(0);
					}
				
					50% {
						opacity: 0;
						transform: translateX(-200%);
					}
				
					100% {
						opacity: 0;
						transform: translateX(200%);
					}
				}

				@keyframes cycleinRight {
					0% {
						opacity: 0;
						transform: translateX(-200%);
					}
			
					50% {
						opacity: 0;
					}
			
					100% {
						opacity: 1;
						transform: translateX(0);
					}
				}
			
				@keyframes cycleoutRight{
					0% {
						opacity: 1;
						transform: translateX(0);
					}
				
					50% {
						opacity: 0;
						transform: translateX(200%);
					}
				
					100% {
						opacity: 0;
						transform: translateX(-200%);
					}
				}
			`}
		>
			<div
				className="product-images-container"
				css={css`
					height: 100vh;
					position: relative;
				`}
			>
				{
					props.imgData.items.map((img, index) => {
						return(
							<div
								className={classBuilder(index + 1)} 
								css={css`
									opacity: 0;
									transition: all 0.2s linear;
									width: 100%;
								`}
								id={`productimg-${index + 1}`}
								key={index}
							>
								<Img
									alt="" 
									fluid={img.our_work_image.localFile.childImageSharp.fluid}
									imgStyle={{
										zIndex: '-1'
									}}
								/>
							</div>
						)
					})
				}
			</div>
		</ProductImageEl>
	)
}

const mapStateToProps = state => ({
	activeWork: state.app.activeWork,
	inactiveWork: state.app.inactiveWork,
	slideDirection: state.app.slideDirection
})

export default connect(mapStateToProps, null)(ProductImages)