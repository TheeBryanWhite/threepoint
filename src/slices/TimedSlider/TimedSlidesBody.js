import React from 'preact'
import { css } from '@emotion/react'
import Helpers from '../../utils/Helpers'

const yellow = new Helpers('yellow')

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
				height: 100vh;
				position: absolute;
				top: 0;
				width: 100%;
				@media (min-width: 1024px) {
					bottom: auto;
					right: 0;
					top: 10px;
					width: 60%;
				}
			`}
		>
		{
			props.slideData.map((slide, index) => {
				return(
					<div
						className={classBuilder(index)}
						css={css`
							bottom: 25%;
							opacity: 0;
							position: absolute;
							@media (min-width: 768px) {
								bottom: 6%;
							}
							@media (min-width: 1024px) {
								bottom: auto;
								top: 40vh;
							}
							@media (min-width: 1440px) {
								bottom: auto;
								top: 35vh;
							}
							@media (min-width: 1920px) {
								top: 40%;
							}
						
							h3 {
								color: rgb(${yellow.defaultColors()});
								font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
								font-size: 4vw;
								font-weight: 800;
								line-height: 4vh;
								margin-bottom: 0;
								text-transform: uppercase;
								@media (min-width: 768px) {
									font-size: 1.2rem;
									line-height: 2.234rem;
								}
								@media (min-width: 1440px) and (min-height: 821px) {
									margin-bottom: 60px;
								}
							}
						
							&.active {
								opacity: 1;
							}
						
							&.inactive {
								opacity: 0;
							}
						`}
						id={`slide-body-${index}`}
						key={index}
					>
						<div
							css={css`
								padding: 0 2rem;
								@media (min-width: 1440px) {
									padding-top: 3vh;
								}
								@media (min-width: 1536px) {
									padding-top: 0;
								}
							`}
							className="timed-slider-body"
						>
							<div 
								className="timed-slide-title"
								dangerouslySetInnerHTML={{ __html: slide.timed_slide_title.html }}
							/>
							<div 
								css={css`
									p {
										font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
										font-size: 4vw;
										font-weight: 600;
										line-height: 6vw;
										margin-bottom: 0;
										@media (min-width: 768px) {
											font-size: 1.563rem;
											line-height: 1.734rem;
											margin: 15px 0;
										}
									}

									.Superscript {
										display: inline-block;
										margin-left: 2px;
										transform: translateY(-13px);
										font-size: 20px;
									}
								
									ul {
										column-count: 2;
    									column-gap: 20px;
										margin: 0;

										@media (min-width: 1440px) and (min-height: 821px) {
											margin-top: 65px;
										}
									}
								
									li {
										display: inline;
										font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
										font-size: 3vw;
										font-weight: 500;
										line-height: 3vh;
										list-style-type: none;
										&:first-of-type:before {
											content: none;
										}
										&:before {
											background-color: #ffffff;
											border-radius: 50%;
											content: '';
											display: inline-block;
											height: 5px;
											margin: 0 5px;
											transform: translateY(-2px);
											width: 5px;
											@media (min-width: 1440px) and (min-height: 821px) {
												transform: translateY(-5px);
											}
											@media (min-width: 1440px) {
												content: none;
											}
										}
										@media (min-width: 768px) {
											content: none;
											font-size: 1rem;
											line-height: 1.25rem;
										}
										@media (min-width: 1440px) {
											display: block;
											margin-bottom: 15px;
										}
									}
								`}
								dangerouslySetInnerHTML={{ __html: slide.timed_slide_body.html }} 
							/>
						</div>
					</div>
				)
			})
		}
		</div>
	)
}

export default TimedSlidesBody