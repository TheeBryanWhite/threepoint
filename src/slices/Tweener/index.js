import React, {useEffect} from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Helpers from '../../utils/Helpers'

let yellow = new Helpers('yellow')
let white = new Helpers('white')

const TweenerEl = styled.section`
	background-color: rgb(${yellow.defaultColors()});
	color: rgb(${yellow.defaultColors()});
	font-family: 'Axis', Helvetica, Arial, sans-seriff;
	font-size: 9vw;
	height: 100vh;
	line-height: 6vh;
	position: relative; 
	z-index: 1;
	@media (min-width: 768px) {
		font-size: 5.3vw;
	}

	.Break {
		display: block;
	}

	.Large {
		color: rgb(${white.defaultColors()});
		display: block;
		font-size: 12vw;
		line-height: 10vh;
		@media (min-width: 768px) {
			display: inline;
			font-size: 13.3vw;
			line-height: 7vh;
		}
		@media (min-width: 1024px) {
			line-height: 18vh;
		}
	}

	p {
		position: relative;
	}
`

const Tweener = props => {
	const compoData = props.input

	useEffect(() => {
		const main = document.getElementsByTagName('main')
		const tweener = document.getElementById(compoData.id)
		const targetChild = tweener.querySelector('.container')
		const docHeight = document.body.clientHeight

		let tweenerRect = null

		const scrollIn = () => {
			tweenerRect = tweener.getBoundingClientRect()

			const tweenerTop = tweenerRect.top

			if (tweenerTop < docHeight) {
				setHorizontalPosition()
			}

			if (tweenerTop > docHeight) {
				targetChild.style.left = `100%`
			}
		}

		const setHorizontalPosition = () => {
			const howMuchScrolled = tweenerRect.height - tweenerRect.top
			const percentageScrolled = Math.abs((howMuchScrolled / tweenerRect.height) * 100)

			if (percentageScrolled <= 100) { 
				targetChild.style.left = `${100 - percentageScrolled}%`
			} else if (percentageScrolled >= 100) {
				targetChild.style.left = 0
			}
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('load', scrollIn, false)
			window.addEventListener('resize', scrollIn, false)
			main[0].addEventListener('scroll', scrollIn, false)
		}
	}, [compoData.id])

	return(
		<TweenerEl 
			className="tweener"
			id={compoData.id}
		>
			<div class="container-outer">
				<BackgroundImage
					className="container"
					css={
						css`
							height: 100vh;
							left: 100%;
							margin: 0 auto;
							padding: 0 2rem;
							pointer-events: none;
							position: fixed !important;
							top: 0;
							width: 100vw;
						`
					}
					fluid={compoData.primary.tweener_background_image.localFile.childImageSharp.fluid}
					Tag="div"
				>
					<div 
						className="container-inner" 
						css={
							css`
								align-items: center;
								display: flex;
								height: 100vh; 
								position: relative;
							`
						}
					>
						<div 
							dangerouslySetInnerHTML={{ __html: compoData.primary.tweener_body.html }} 
						/>
					</div>
				</BackgroundImage>
			</div>
		</TweenerEl>
	)
}

export default Tweener