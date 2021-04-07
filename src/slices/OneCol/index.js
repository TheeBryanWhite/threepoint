import React, {useEffect} from 'react'
import { css } from "@emotion/react"
import Body from './Body'
import LinkedContent from './LinkedContent'

const OneCol = props => {
	const compoData = props.input

	useEffect(() => {
		const main = document.getElementsByTagName('main')
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
			main[0].addEventListener('scroll', clipMask, false)
		}
	}, [])

	return (
		compoData.items.map((item, index) => {
			return(
				<section
					className="one-col"
					css={css`
						align-items: center;
						animation: fadeIn 1s linear forwards;
						animation-delay: 1s;
						background-color: ${item.one_col_background_color};
						display: flex;
						justify-content: center;
						opacity: 0;
						height: 100vh;
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
					`}
					id={index === 0 ? compoData.primary.section_id : `${compoData.primary.section_id}-${index}`}
					key={index}
				>
					<Body compoData={item} />
					<LinkedContent compoData={item} />
					
				</section>
			)
		})
	)
}

export default OneCol