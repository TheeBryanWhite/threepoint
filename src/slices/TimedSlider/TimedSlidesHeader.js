import React from 'preact'
import { css } from '@emotion/react'

const TimedSlidesHeader = props => {
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
			className="page-slide-headers"
			css={css`
				position: relative;
			`}
		>
			{
				props.slideData.map((slide, index) => {
					return(
						<div 
							className={classBuilder(index)}
							css={css`
								opacity: 0;
								padding: 0 2rem;
								position: absolute;
								top: 20vh;
								width: 100%;
								@media (min-width: 768px) {
									top: 15vh;
								}
								@media (min-width: 1024px) {
									padding: 0 3rem;
									top: 20vh;
								}
								&.active {
									opacity: 1;
								}
			
								p {
									font-size: 4vw;
									line-height: 5vh;
									@media (min-width: 768px) {
										font-size: 1.55rem;
										line-height: 2.338rem;
									}
									@media (min-width: 1440px) {
										font-size: 2rem;
									}
								}

								.Highlight {
									color: rgb(255,220,50);
								}

								.Superscript {
									display: inline-block;
									margin-left: -10px;
									transform: translateY(-18px);
									font-size: 20px;
								}
							`}
							dangerouslySetInnerHTML={{ __html: slide.timed_slider_page_header.html }} 
							key={index}
						/>
					)
				})
			}
		</div>
	)
}

export default TimedSlidesHeader