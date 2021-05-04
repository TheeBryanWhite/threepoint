import React, {useEffect} from 'react'
import { css } from "@emotion/react"
import Body from './Body'
import LinkedContent from './LinkedContent'

const OneCol = props => {
	const compoData = props.input

	const blackOrWhite = colorObj => {
		const rgb = hexToRgb(colorObj)

		let Luminance = null

		for (const color in rgb) {
			let calcColor = color / 255.0

			if (calcColor <= 0.03928) {
				calcColor = calcColor/12.92
			} else {
				calcColor = ((calcColor+0.055)/1.055) ^ 2.4
			}
			Luminance = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b
		}

		if ((Luminance + 0.05) / (0.0 + 0.05) > (1.0 + 0.05) / (Luminance + 0.05)) {
			return '#000000'
		} else {
			return '#ffffff'
		}
	}

	const hexToRgb = hex => {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		}
	}

	useEffect(() => {
		const target = document.querySelectorAll('.mask-this')
		const clipMask = () => {
			[...target].forEach(element => {
				element.style.opacity = 1
				const targetRect = element.getBoundingClientRect()
				const targetParent = element.parentNode
				const parentRect = targetParent.getBoundingClientRect()
				const mask = parentRect.top - targetRect.top;
				element.style.clip = `rect(${mask}px, auto, auto, auto)`
			})
		}

		const makeVisible = () => {
			[...target].forEach(element => {
				element.style.opacity = 1
			})
			return false
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('load', () => {
				clipMask()
				makeVisible()
			}
			, false)
			window.addEventListener('resize', clipMask, false)
			window.addEventListener('scroll', clipMask, false)
		}
	}, [])

	return (
		compoData.items.map((item, index) => {
			return(
				<section
					className="one-col"
					css={css`
						animation: fadeIn 1s linear forwards;
						animation-delay: 1s;
						background-color: ${item.one_col_background_color};
						height: 100vh;
						opacity: 0;
						position: relative;
						z-index: 1;
						@keyframes fadeIn {
							0% {
								opacity: 0;
							}
							100% {
								opacity: 1;
							}
						}
						h2 {
							color: ${blackOrWhite(item.one_col_background_color)};
							font-family: 'Core Sans',Helvetica,Arial,sans-seriff;
							font-size: 0;
							font-weight: 300;
							margin: 0 auto 1.45rem;
							max-width: 1440px;
							text-transform: none;
							@media (min-width: 768px) {
								font-size: 1.25rem;	
							}
							@media (min-width: 1440px) {
								margin-bottom: 4vh;
							}
						}
					`}
					id={index === 0 ? compoData.primary.section_id : `${compoData.primary.section_id}-${index}`}
					key={index}
				>
					<Body
						compoData={item}
						pageTitle={compoData.primary.title.html} 
					/>
					<LinkedContent
						compoData={item}
						pageTitle={compoData.primary.title.html} 
					/>
					
				</section>
			)
		})
	)
}

export default OneCol