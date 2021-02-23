import React from 'preact'
import { connect } from 'react-redux'
import { 
	setActiveWork,
	setInactiveWork
 } from '../../redux/actions'
import styled from "@emotion/styled"
import BackgroundImage from 'gatsby-background-image'
import Helpers from '../../utils/Helpers'
import SlidesContainer from './SlidesContainer'

import { ReactComponent as SVGLeft } from '../../svg/left-chevron.svg'
import { ReactComponent as SVGRight } from '../../svg/right-chevron.svg'

let white = new Helpers('white')
let gray = new Helpers('gray')
let yellow = new Helpers('yellow')
let blue = new Helpers('blue')
let green = new Helpers('green')

const SliderEl = styled.section`
	color: rgb(${white.defaultColors()});
	height: 120vh;
	overflow: hidden;
	position: relative;
	transition: all 0.5s linear;
	z-index: 1;

	&.slide0 {
		background-color: rgb(${gray.defaultColors()})
	}

	&.slide1 {
		background-color: rgb(${blue.defaultColors()})
	}

	&.slide2 {
		background-color: rgb(${white.defaultColors()})
	}

	&.slide3 {
		background-color: rgb(${green.defaultColors()})
	}

	&.slide4 {
		background-color: rgb(${white.defaultColors()})
	}

	.gradient {
		height: 120vh;
		padding: 180px 0;
	}
`

const containerMargin = new Helpers(32)
const Container = styled.div`
	font-family: 'Axis', Helvetica, Arial, sans-seriff;
	font-size: 2.5vw;
	font-weight: 600;
	line-height: 5vh;
    margin: 0 auto;
    max-width: 1440px;
	padding: 0 ${containerMargin.toRem};
	text-transform: uppercase;
	width: 100%;

	em {
		color: rgb(${yellow.defaultColors()});
		font-style: normal;
	}
`

const SlidesHeader = styled.div`
	h2 {
		font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
		font-size: 1.5vw;
		font-weight: 400;
		line-height: 3vh;
		text-transform: capitalize;
	}
`

const SlidesNav = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 100%;

	#button-prev {
		left: 0;
		position: absolute;
	}

	#button-next {
		right: 0;
		position: absolute;
	}

	button {
		background-color: transparent;
		border: 0;

		&:focus {
			outline: none;
		}
	}

	svg {
		fill: rgb(${yellow.defaultColors()});
		width: 40px;
	}
`

const Slider = props => {

	const workSlides = () => {
		const slide = `slide${props.activeWork}`
		return slide
	}

	const clickHandler = direction => {
		if (direction === 'next') {
			if (props.activeWork <= 3) {
				props.setActiveWork(props.activeWork + 1)
				props.setInactiveWork(props.activeWork)
			} else {
				props.setActiveWork(0)
				props.setInactiveWork(4)
			}
		}

		if (direction === 'prev') {
			console.log(props.activeWork)
			if (props.activeWork <= 0) {
				props.setActiveWork(4)
				props.setInactiveWork(0)
			} else {
				props.setActiveWork(props.activeWork - 1)
				props.setInactiveWork(props.activeWork)
			}
		}
	}

	const gradientData = props.input.primary.our_work_gradient.localFile.childImageSharp.fluid

	return (
		<SliderEl className={workSlides()}>
			<BackgroundImage
				className="gradient"
				fluid={gradientData}
				Tag="div"
			>
					<SlidesHeader>
						<Container>
							<h2><em>&#x2F;&#x2F;</em>What we do</h2>
						</Container>
					</SlidesHeader>

					<SlidesContainer 
						activeWork={props.activeWork} 
						inactiveWork={props.inactiveWork} 
						slidesData={props.input}
					/>
			</BackgroundImage>
			<SlidesNav>
				<button 
					id="button-prev" 
					onClick={() => {clickHandler('prev')}}
				>
					<SVGLeft />
				</button>
				<button
					id="button-next" 
					onClick={() => {clickHandler('next')}}
				>
					<SVGRight />
				</button>
			</SlidesNav>
		</SliderEl>
	)
}

const mapStateToProps = state => ({
	activeWork: state.app.activeWork,
	inactiveWork: state.app.inactiveWork
})
	
  export default connect(mapStateToProps, {setActiveWork, setInactiveWork})(Slider)