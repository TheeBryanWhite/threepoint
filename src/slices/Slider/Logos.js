import React from 'preact'
import { connect } from 'react-redux'
import Img from 'gatsby-image'
import styled from "@emotion/styled"
import { css } from '@emotion/react'

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
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 1;
		@media (min-width: 768px) {
			display: block;
		}
		#logo-1 {
			.gatsby-image-wrapper {
				height: auto;
				left: 60%;
				top: 15%;
				width: 25%;
				@media (min-width: 1024px) {
					left: 70%;
					top: 25%;
					width: 20%;
				}
				@media (min-width: 1280px) {
					left: 75%;
				}
			}
		}
		#logo-2 {
			.gatsby-image-wrapper {
				height: auto;
				left: 60%;
				top: 15%;
				width: 30%;
				@media (min-width: 1024px) {
					left: 75%;
					top: 25%;
					width: 20%;
				}
				@media (min-width: 1920px) {
					left: 80%;
				}
			}
		}
		#logo-3 {
			.gatsby-image-wrapper {
				height: auto;
				left: 76%;
				top: -23%;
				width: 15%;
				@media (min-width: 768px) {
					left: 72%;
					top: -29%;				
				}
				@media (min-width: 1024px) {
					left: 76%;
					top: -23%;
				}
				@media (min-width: 1440px) {		
					left: 76%;
					top: 25%;
				}
				@media (min-width: 1920px) {		
					left: 80%;
					top: -27%;
				}
			}
		}
		#logo-4 {
			.gatsby-image-wrapper {
				height: auto;
				left: 70%;
				top: 25%;
				width: 15%;
			}
		}
	`
	
	return(
		<LogoEl
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
					width: 100%;
				}
				.active {
					animation: logofadein 1s linear forwards;
					animation-delay: 1s;
				}
			
				.inactive {
					opacity: 0;
				}

				@keyframes logofadein {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}
			`}
		>
			<div
				className="logo-images-container"
				css={css`
					height: 100vh;
					position: relative;
					width: 100%;
				`}
			>
				{
					props.logoData.items.map((img, index) => {
						return(
							<div
								className={classBuilder(index + 1)} 
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
			</div>
		</LogoEl>
	)
}

const mapStateToProps = state => ({
	activeWork: state.app.activeWork,
	inactiveWork: state.app.inactiveWork
})

export default connect(mapStateToProps, null)(Logos)