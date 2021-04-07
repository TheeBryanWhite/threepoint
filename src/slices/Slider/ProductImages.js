import React from 'preact'
import { connect } from 'react-redux'
import Img from 'gatsby-image'
import styled from "@emotion/styled"
import { css } from '@emotion/react'
import Helpers from '../../utils/Helpers'

let inOutQuart = new Helpers('in-out-quart')

const ProductImageEl = styled.div`
	#productimg-1 {
		left: 40px;
		bottom: -50vh;
		top: auto;
		@media (min-width: 768px) {
			bottom: -70vh;
		}
		@media (min-width: 1024px) {
			bottom: -75vh;
			left: auto;
			right: 0;
			width: 50%;
		}
		@media (min-width: 1280px) {
			bottom: -97vh;
			right: -12%;
			width: 70%;
		}
		@media (min-width: 1440px) and (min-height: 821px) {
			right: -27%;
			width: 90%;
		}
	}

	#productimg-2 {
		padding: 15%;
		bottom: -58vh;
		top: auto;
		@media (min-width: 768px) {
			bottom: -72vh;
		}
		@media (min-width: 1024px) {
			bottom: -83vh;
			left: auto;
			padding: 0;
			right: 7%;
			width: 50%;
		}
		@media (min-width: 1280px) {
			bottom: -89vh;
		}
		@media (min-width: 1440px) and (min-height: 821px) {
			right: 1%;
    		width: 57%;
		}
	}

	#productimg-3 {
		padding: 29%;
		bottom: -54vh;
		top: auto;
		@media (min-width: 768px) {
			bottom: -80vh;
			padding: 25%;
		}
		@media (min-width: 1024px) {
			right: 15%;
			bottom: -83vh;
			padding: 0;
			width: 35%;
		}
		@media (min-width: 1280px) {
			bottom: -93vh;
		}
		@media (min-width: 1440px) and (min-height: 821px) {
			right: 6%;
			width: 45%;
		}
	}

	#productimg-4 {
		bottom: -37vh;
		position: absolute;
		top: auto;
		@media (min-width: 768px) {
			bottom: 0;
			top: 0;
			transform: translateY(-50%);
			.gatsby-image-wrapper {
				height: 100vh;
				object-fit: cover;
			}
		}
		@media (min-width: 1440px) and (min-height: 821px) {
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
			
				@keyframes cycleoutLeft {
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

				@keyframes cycleinRight {
					0% {
						opacity: 0;
						transform: translate(-200%);
					}
			
					50% {
						opacity: 0;
					}
			
					100% {
						opacity: 1;
						transform: translate(0);
					}
				}
			
				@keyframes cycleoutRight{
					0% {
						opacity: 1;
						transform: translate(0);
					}
				
					50% {
						opacity: 0;
						transform: translate(200%);
					}
				
					100% {
						opacity: 0;
						transform: translate(-200%);
					}
				}
			`}
		>
			<div
				className="product-images-container"
				css={css`
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
									position: absolute;
									top: 0;
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