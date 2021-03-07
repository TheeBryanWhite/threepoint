import React from 'preact/compat'
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { connect } from 'react-redux'
import { 
	setInactiveSlide,
	setActiveSlide
} from '../../redux/actions/'
import Helpers from '../../utils/Helpers'
import intervalHandler from '../../utils/intervalHandler'

import { ReactComponent as SVGThreePtFrame } from '../../svg/threepoint-frame.svg'

const black = new Helpers('black')
const white = new Helpers('white')
const yellow = new Helpers('yellow')

const TimedSliderEl = styled.section`
	background-color: rgb(${black.defaultColors()});
	height: 100vh;
	padding-top: 85px;
	position: relative;
	z-index: 1;
`

const Container = styled.div`
	color: rgb(${white.defaultColors()});
    margin: 0 auto;

	h2 {
		font-size: 4vw;
		font-style: italic;
		font-weight: 300;
		line-height: 4vh;

		&:before {
			color: rgb(${yellow.defaultColors()});
			content: '//';
		}
	}
`

const TimedSlideImage = styled.div`
	opacity: 0.3;
	padding: 2rem;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);

	svg {
		height: 100%;
		width: 100%;
	}

	#threepoint-frame_svg__top_full,
	#threepoint-frame_svg__right_full,
	#threepoint-frame_svg__left_full {
		opacity: 0;
		transition: opacity 0.2s linear;
	}

	&.go-1 {
		#threepoint-frame_svg__top_full {
			opacity: 0.8;
		}
	}

	&.go-2 {
		#threepoint-frame_svg__right_full {
			opacity: 0.8;
		}
	}

	&.go-3 {
		#threepoint-frame_svg__left_full {
			opacity: 0.8;
		}
	}
`

const TimedSlide = styled.div`
	opacity: 0;
	position: absolute;
	top: 130px;

	h3 {
		color: rgb(${yellow.defaultColors()});
		font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
		font-size: 4vw;
		font-weight: 800;
		line-height: 4vh;
		text-transform: uppercase;
	}

	&.active {
		opacity: 1;
	}

	&.inactive {
		opacity: 0;
	}
`

const TimedSliderPageHeader = styled.div`
	opacity: 0;

	&.active {
		opacity: 1;
	}

	p {
		font-size: 4vw;
		line-height: 4vh;
	}
`

const TimedSlideBody = styled.div`
	p {
		font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
		font-size: 4vw;
		font-weight: 800;
		line-height: 6vw;
	}

	ul {
		margin: 0;
		text-transform: uppercase;
	}

	li {
		font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
		font-size: 3vw;
		font-weight: 500;
		line-height: 3vh;
		list-style-type: none;
		margin: 0;
	}
`

let imgArr = []

const TimedSlider = props => {

	const classBuilder = index => {
		let classArr = []

		if (props.activeSlide === index) {
			classArr.push('active')
		}

		if (typeof props.inactiveSlide !== 'undefined' && props.inactiveSlide === index) {
			classArr.push('inactive')
		}

		const classes = classArr.join(' ')

		return classes
	}

	const imgBuilder = () => {
		if (props.activeSlide === 0) {
			imgArr = []
			imgArr = ['go-0']
		} else {
			imgArr.push(`go-${props.activeSlide}`)
		}

		const classes = imgArr.join(' ')

		return classes
	}

	let index = 0

	const autoSlide = () => {		
		if (index < 3) {
			index += 1
			props.setInactiveSlide(index - 1)
			props.setActiveSlide(index)
		} else {
			index = 0
			props.setInactiveSlide(3)
			props.setActiveSlide(index)
		}
	}

	const stopAutoSlide = intervalHandler(autoSlide, 8000)

	return(
		<TimedSliderEl
			id={props.input.primary.section_id}
		>
			<Container>
				<div 
					css={css`
						padding: 0 2rem;
					`}
					className="timed-slider-header"
				>
					<div dangerouslySetInnerHTML={{ __html: props.input.primary.timed_slider_title.html }} />
				</div>
				<div
					className="timed-slides"
					css={css`
					font-family: 'Axis', Helvetica, Arial, sans-seriff;
					height: 60vh;
					position: relative;
					`}
				>
					{
						props.input.items.map((slide, index) => {
							return(
								<TimedSliderPageHeader 
									className={classBuilder(index)}
									css={css`
										padding: 0 2rem;
										position: absolute;
										top: 0;
										width: 100%;
									`}
									dangerouslySetInnerHTML={{ __html: slide.timed_slider_page_header.html }} 
									key={index}
								/>
							)
						})
					}

					<TimedSlideImage className={imgBuilder(index)}>
						<SVGThreePtFrame />
					</TimedSlideImage>

					<div className="timed-slider-container">
					{
						props.input.items.map((slide, index) => {
							return(
								<TimedSlide
									className={classBuilder(index)}
									key={index}
								>
									<div
										css={css`
											padding: 0 2rem;
										`}
										className="timed-slider-body"
									>
										<div className="timed-slide-title" dangerouslySetInnerHTML={{ __html: slide.timed_slide_title.html }} />
										<TimedSlideBody dangerouslySetInnerHTML={{ __html: slide.timed_slide_body.html }} />
									</div>
								</TimedSlide>
							)
						})
					}
					</div>
				</div>
			</Container>
		</TimedSliderEl>
	)
}

const mapStateToProps = state => ({
	activeSlide: state.app.activeSlide,
	inactiveSlide: state.app.inactiveSlide
})

export default connect(mapStateToProps,{ setInactiveSlide,setActiveSlide })(TimedSlider)