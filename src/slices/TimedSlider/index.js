import React, {useEffect} from 'react'
import { css } from "@emotion/react"
import { connect } from 'react-redux'
import { 
	setInactiveSlide,
	setActiveSlide
} from '../../redux/actions/'
import Helpers from '../../utils/Helpers'
import intervalHandler from '../../utils/intervalHandler'

import TimedSlidesHeader from './TimedSlidesHeader'
import ThreePointTriangle from './ThreePointTriangle'
import TimedSlidesBody from './TimedSlidesBody'

const yellow = new Helpers('yellow')

const TimedSlider = props => {

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

	useEffect(() => {
		let clickThis = document.getElementsByClassName('threepoint-frame_svg__st1')
		
		const ghostThis = target => {
			target.classList.add('ghost')
		}
		const dontGhostThis = target => {
			target.classList.remove('ghost')
		}

		const activateThis = target => {
			props.setInactiveSlide(target.getAttribute("data-slide") - 1)
			props.setActiveSlide(target.getAttribute("data-slide"))
			stopAutoSlide()
		}

		clickThis = Array.from(clickThis)
		clickThis.forEach(element => {
			element.addEventListener("mouseenter", event => {
				ghostThis(event.currentTarget)
			})
			element.addEventListener("mouseleave", event => {
				dontGhostThis(event.currentTarget)
			})
			element.addEventListener("click", event => {
				activateThis(event.currentTarget)
			})
		});
	}, [props, stopAutoSlide])

	return(
		<section
			css={css`
				align-items: center;
				background-color: #000000;
				color: #ffffff;
				display: flex;
				height: 120vh;
				position: relative;
				z-index: 1;

				h2 {
					font-size: 4vw;
					font-style: italic;
					font-weight: 300;
					line-height: 4vh;
					@media (min-width: 768px) {
						font-size: 1.25rem;
						line-height: 1.25rem;
					}
					@media (min-width: 1440px) {
						margin-bottom: 5vh;
					}
			
					&:before {
						color: rgb(${yellow.defaultColors()});
						content: '//';
					}
				}
			
				#slide-body-0 h3 {
					color: #F7931E;
				}
			`}
			id={props.input.primary.section_id}
		>
			<div
				css={css`
					flex: 0 0 100%;
					height: 100vh;
					margin: 0 auto;
					max-width: 1440px;
					position: relative;
				`}
				>
				<div 
					css={css`
						padding: 0 2rem;
						position: absolute;
						top: 11%;
						width: 100%;
					`}
					className="timed-slider-header"
				>
					<div dangerouslySetInnerHTML={{ __html: props.input.primary.timed_slider_title.html }} />
				</div>
				<div
					className="timed-slides"
					css={css`
						font-family: 'Axis', Helvetica, Arial, sans-seriff;
						height: 100%;
						position: absolute;
						top: 0;
						width: 100%;
					`}
				>
					<TimedSlidesHeader
						activeSlide={props.activeSlide}
						inactiveSlide={props.inactiveSlide}
						slideData={props.input.items}
					/>

					<ThreePointTriangle
						activeSlide={props.activeSlide}
						inactiveSlide={props.inactiveSlide}
					/>

					<TimedSlidesBody
						activeSlide={props.activeSlide}
						inactiveSlide={props.inactiveSlide}
						slideData={props.input.items}
					/>
				</div>
			</div>
		</section>
	)
}

const mapStateToProps = state => ({
	activeSlide: state.app.activeSlide,
	inactiveSlide: state.app.inactiveSlide
})

export default connect(mapStateToProps,{ setInactiveSlide,setActiveSlide })(TimedSlider)