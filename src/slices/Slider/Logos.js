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
		@media (min-width: 1024px) {
			display: block;
		}
		.slide {
			height: 100vh;
			opacity: 0;
			position: absolute;
			top: 0;
			width: 100%;

		}
		.gatsby-image-wrapper {
			position: absolute !important;
			right: 10%;
			top: 65%;
			transform: translateY(-50%);
			width: 15%;
		}
	`
	
	return(
		<LogoEl
			css={css`
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