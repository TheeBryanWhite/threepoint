import React from 'preact/compat'
import { connect } from 'react-redux'
import { 
	setActiveWork,
	setInactiveWork
 } from '../../redux/actions'
import Img from 'gatsby-image'
import styled from "@emotion/styled"
import Helpers from '../../utils/Helpers'

let white = new Helpers('white')
let blue = new Helpers('blue')
let yellow = new Helpers('yellow')
let green = new Helpers('green')
let inOutQuart = new Helpers('in-out-quart')

const containerMargin = new Helpers(32)
const Container = styled.div`
	font-family: 'Axis', Helvetica, Arial, sans-seriff;
    margin: 0 auto;
    max-width: 1440px;
	padding: 0 ${containerMargin.toRem};	
	width: 100%;

	em {
		color: rgb(${yellow.defaultColors()});
		font-style: normal;
	}
`

const SlidesBody = styled.div`
	position: relative;

	#slide-0 {
		display: block;

		p {
			font-family: 'Axis', Helvetica, Arial, sans-seriff;
			font-size: 2.5vw;
			font-weight: 600;
			line-height: 5vh;
			text-transform: uppercase;
		}
	}
`

const SlideBody = styled.div`
	align-items: center;
	display: flex;
	left: 0;
	opacity: 0;
	position: absolute;
	top: 0;
	transform: translateX(120%);
	width: 100%;

	.container {
		display: flex;
		font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
		font-size: 24px;
		text-transform: none;

		p {
			font-weight: 500;
		}
	}

	.slide-content,
	.slide-image {
		flex: 0 0 50%;
	}

	h3 {
		font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
		font-size: 25px;
		font-weight: 800;
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
		transform: translateX(0);
	}

	@keyframes cyclein {
		0% {
			opacity: 0;
			transform: translate(120%);
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
	grid-template-columns: 20% 20% 20% 20% 20%;
	grid-template-rows: 50% 50%;
	height: 50vh;
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
	grid-column: span 2;
	grid-row: span 2;
	position: relative;

	&:nth-of-type(1) {
		background-color: rgb(${blue.defaultColors()});
	}

	&:nth-of-type(3) {
		background-color: rgb(${green.defaultColors()});
	}
	
	&:nth-of-type(3),
	&:nth-of-type(4) {
		grid-column: span 1;
		grid-row: span 1;
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
			<Container>
				<SlidesBody>
					<SlideBody 
						className={classBuilder(0)}
						id="slide-0"
					>
							<div dangerouslySetInnerHTML={{ __html: props.slidesData.primary.our_work_body.html }} />

							<SlideThumbs>
								{
									props.slidesData.items.map((slide, index) => {
										return(
											<SlideThumb
												key={index}
												onClick={() => {clickHandler(index + 1)}}
											>
												<SlideCoverer />
												<Img fluid={slide.our_work_teaser.localFile.childImageSharp.fluid} alt="" />
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
											<Img fixed={slide.our_work_image.localFile.childImageSharp.fluid} alt="" />
										</div>
								</SlideBody>
							)
						})
					}
				</SlidesBody>
			</Container>
		</div>
	)
}

export default connect(null, {setActiveWork, setInactiveWork})(SlidesContainer)