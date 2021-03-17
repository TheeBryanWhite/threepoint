import React from 'preact'
import { connect } from 'react-redux'
import { 
	setActiveWork,
	setInactiveWork
 } from '../../redux/actions'
import Img from 'gatsby-image'
import styled from "@emotion/styled"
import { css } from '@emotion/react'
import Helpers from '../../utils/Helpers'

let white = new Helpers('white')
let blue = new Helpers('blue')
let green = new Helpers('green')
let inOutQuart = new Helpers('in-out-quart')

const SlidesBody = styled.div`
	position: relative;
	
	#slide-0 {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		&> div {
			flex: 0 0 100%;
		}

		p {
			font-family: 'Axis', Helvetica, Arial, sans-seriff;
			font-size: 4.5vw;
			font-weight: 600;
			line-height: 4vh;
			text-transform: uppercase;
			@media (min-width: 768px) {
				font-size: 1.75rem;
				line-height: 2.938rem;
			}
			@media (min-width: 1024px) {
				font-size: 2.25rem;
				line-height: 2.938rem;
			}
		}
	}
`

const SlideBody = styled.div`
	flex: 0 0 100%;
	position: absolute;
	transform: translateX(120%);
	@media (min-width: 1024px) {
		align-items: flex-start;
		display: flex;
	}	

	.container {
		display: flex;
		font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
		font-size: 24px;
		text-transform: none;

		p {
			font-weight: 500;
		}
	}

	.slide-content {
		flex: 0 0 50%;
		position: relative;
		z-index: 1;
	}

	.slide-image {
		opacity: 0.2;
		position: absolute;
		top: 0;
		width: 100%;
	}

	.slide-content {
		padding: 0 2rem;

		p,
		ul {
			font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
		}

		ul {
			margin: 0;
		}

		li {
			left: 0;
			list-style-type: none;
			margin: 0;
			padding-left: 20px;
			position: relative;
			text-transform: uppercase;

			&:before {
				content: '//';
				left: 0;
				position: absolute;
			}
		}
	}

	h3 {
		font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
		font-size: 5vw;
		font-weight: 800;
		line-height: 4.5vh;
		text-transform: uppercase;
	}

	&.active {
		animation: cyclein 0.6s cubic-bezier(${inOutQuart.ease()}) 1;
		opacity: 1;
		transform: translateX(0);
	}

	&.inactive {
		animation: cycleout 1.2s cubic-bezier(${inOutQuart.ease()}) 1;
		opacity: 0;
		transform: translateX(120%);
	}

	@keyframes cyclein {
		0% {
			opacity: 0;
			transform: translate(120%);
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
			transform: translate(-120%);
		}
	
		100% {
			opacity: 0;
			transform: translate(120%);
		}
	}
`

const SlideThumbs = styled.div`
	align-items: stretch;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 0px 0px;
	grid-template-areas:
		". ."
		". .";
	max-height: 75%;
	max-width: 75%;
	@media (min-width: 1024px) {
		grid-template-columns: 20% 20% 20% 20% 20%;
		grid-template-rows: 50% 50%;
	}
	@media (min-width: 1440px) {
		max-height: none;
		max-width: none;
		padding: 0 2rem;
	}
`

const SlideCoverer = styled.div`
	background-color: rgba(${white.defaultColors()}, 0.5);
	clip-path: polygon(0 0, 0% 100%, 100% 100%);
	height: 100%;
	opacity: 1;
	position: absolute;
	transition: opacity 0.3s linear;
	width: 100%;
	z-index: 1;
`

const SlideThumb = styled.div`
	background-color: rgb(${white.defaultColors()});
	cursor: pointer;
	position: relative;
	@media (min-width: 1024px) {
		grid-column: span 2;
		grid-row: span 2;
	}

	&:nth-of-type(1) {
		background-color: rgb(${blue.defaultColors()});
	}

	&:nth-of-type(3) {
		background-color: rgb(${green.defaultColors()});
	}
	
	@media (min-width: 1024px) {
		&:nth-of-type(3),
		&:nth-of-type(4) {
			grid-column: span 1;
			grid-row: span 1;
		}
	}

	&:hover {

		${SlideCoverer} {
			opacity: 0;
		}
	}

	.gatsby-image-wrapper {
		height: 100%;
		object-fit: cover;
	}

	img {
		display: block;
		margin: 0;
	}
`

const SlidesContainer = props => {
	console.log(props)
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

	const clickHandler = index => {
		if (typeof props.activeWork !== 'undefined') {
			if (index === 0 && props.activeWork === 0 ) {
				props.setInactiveWork(4)
				props.setActiveWork(index)
			} else {
				props.setInactiveWork(props.activeWork)
				props.setActiveWork(index)
			}
		}
	}

	return(
		<div className="slides-container">
			<SlidesBody>
				<SlideBody 
					className={classBuilder(0)}
					id="slide-0"
				>
						<div 
							css={css`
								padding: 0 2rem;
							`} 
							dangerouslySetInnerHTML={{ __html: props.slidesData.primary.our_work_body.html }}
						/>

						<SlideThumbs>
							{
								props.slidesData.items.map((slide, index) => {
									return(
										<SlideThumb
											key={index}
											onClick={() => {clickHandler(index + 1)}}
										>
											<SlideCoverer />
											<Img
												alt=""
												fluid={slide.our_work_teaser.localFile.childImageSharp.fluid}
											/>
										</SlideThumb>
									)
								})
							}
						</SlideThumbs>
				</SlideBody>
				{
					props.slidesData.items.map((slide, index) => {
						return(
							<SlideBody
								className={classBuilder(index + 1)} 
								id={`slide-${index + 1}`}
								key={index}
							>
									<div 
										className="slide-content" 
										dangerouslySetInnerHTML={
											{ 
												__html: slide.our_work_body.html
											}
										}
									/>
									<div className="slide-image">
										<Img fluid={slide.our_work_image.localFile.childImageSharp.fluid} alt="" />
									</div>
							</SlideBody>
						)
					})
				}
			</SlidesBody>
		</div>
	)
}

export default connect(null, {setActiveWork, setInactiveWork})(SlidesContainer)