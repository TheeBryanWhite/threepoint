import React from 'preact'
import { connect } from 'react-redux'
import Img from 'gatsby-image'
import { css } from '@emotion/react'
import Helpers from '../../utils/Helpers'

let inOutQuart = new Helpers('in-out-quart')

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
		<div
			className={props.slideDirection}
			css={css`
				position: absolute;
				top: -45px;
				width: 100%;
				#productimg-1 {
					position: absolute;
					top: 0;
					@media (min-width: 1024px) {
						height: 100vh;
					}
					.gatsby-image-wrapper {
						left: 13%;
						@media (min-width: 1024px) {
							left: 50%;
							top: 50%;
							transform: translateY(-50%);
							width: 50%;
						}
					}
				}
			
				#productimg-2 {
					padding: 15%;
					position: absolute;
					top: 0;
					@media (min-width: 1024px) {
						height: 100vh;
					}
					@media (min-width: 1024px) {
						.gatsby-image-wrapper {
							left: 50%;
							top: 50%;
							transform: translateY(-50%);
							width: 50%;
						}
					}
				}
			
				#productimg-3 {
					padding: 30%;
					position: absolute;
					top: 0;
					@media (min-width: 768px) {
						padding: 20%;
					}
					@media (min-width: 1024px) {
						height: 100vh;
					}
					.gatsby-image-wrapper {
						top: -130px;
						@media (min-width: 768px) {
							top: -210px;
						}
						@media (min-width: 1024px) {
							left: 50%;
							top: 50%;
							transform: translateY(-50%);
							width: 50%;
						}
					}
				}
			
				@media (min-width: 1024px) {
					#productimg-4 {
						height: 100vh;
						.gatsby-image-wrapper {
							left: 45%;
							top: 50%;
							transform: translateY(-50%);
							width: 50%;
						}
					}
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
		</div>
	)
}

const mapStateToProps = state => ({
	activeWork: state.app.activeWork,
	inactiveWork: state.app.inactiveWork,
	slideDirection: state.app.slideDirection
})

export default connect(mapStateToProps, null)(ProductImages)