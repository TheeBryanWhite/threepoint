import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Helpers from '../../utils/Helpers'

const yellow = new Helpers('yellow')

const TimedSlideBody = styled.div`
	p {
		font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
		font-size: 4vw;
		font-weight: 800;
		line-height: 6vw;
		@media (min-width: 1024px) {
			font-size: 2.5vw;
			line-height: 4vw;
		}
		@media (min-width: 1440px) and (min-height: 821px) {
			font-size: 4vw;
			line-height: 6vw;
		}
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
		@media (min-width: 1024px) {
			font-size: 1.25vw;
			line-height: 2.5vh;
		}
	}
`

const TimedSlide = styled.div`
	opacity: 0;
	position: absolute;
	top: 165px;
	@media (min-width: 768px) {
		top: 190px;
	}
	@media (min-width: 1024px) {
		top: 7vh;
	}
	@media (min-width: 1440px) and (min-height: 821px) {
		top: 175px;
	}

	h3 {
		color: rgb(${yellow.defaultColors()});
		font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
		font-size: 4vw;
		font-weight: 800;
		line-height: 4vh;
		text-transform: uppercase;
		@media (min-width: 1024px) {
			font-size: 2vw;
			line-height: 3vh;
		}
		@media (min-width: 1440px) {
			font-size: 1.563rem;
			line-height: 1.734rem;
		}
	}

	&.active {
		opacity: 1;
	}

	&.inactive {
		opacity: 0;
	}
`

const TimedSlidesBody = props => {
	const classBuilder = index => {
		let classArr = []

		if (parseInt(props.activeSlide) === index) {
			classArr.push('active')
		}

		if (typeof parseInt(props.inactiveSlide) !== 'undefined' && parseInt(props.inactiveSlide) === index) {
			classArr.push('inactive')
		}

		const classes = classArr.join(' ')

		return classes
	}

	return(
		<div
			className="timed-slider-container"
			css={css`
				position: absolute;
				right: 0;
				top: 10px;
				width: 100%;
				@media (min-width: 1024px) {
					width: 60%;
				}
			`}
		>
		{
			props.slideData.map((slide, index) => {
				return(
					<TimedSlide
						className={classBuilder(index)}
						id={`slide-body-${index}`}
						key={index}
					>
						<div
							css={css`
								padding: 0 2rem;
								@media (min-width: 1440px) {
									padding-top: 7vh;
								}
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
	)
}

export default TimedSlidesBody