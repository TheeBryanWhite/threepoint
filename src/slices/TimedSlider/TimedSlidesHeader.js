import React from 'react'
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
		<div className="page-slide-headers">
			{
				props.slideData.map((slide, index) => {
					return(
						<div 
							className={classBuilder(index)}
							css={css`
								opacity: 0;
								padding: 0 2rem;
								position: absolute;
								top: 0;
								width: 100%;
								&.active {
									opacity: 1;
								}
			
								p {
									font-size: 4vw;
									line-height: 4vh;
									@media (min-width: 1024px) {
										font-size: 1.55rem;
										line-height: 2.338rem;
									}
									@media (min-width: 1440px) and (min-height: 821px) {
										font-size: 2.25rem;
										line-height: 2.938rem;
									}
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