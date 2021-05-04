import React, {useEffect} from 'react'
import BackgroundImage from 'gatsby-background-image'
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Helpers from '../../utils/Helpers'

let yellow = new Helpers('yellow')
let white = new Helpers('white')

const TweenerEl = styled.section`
	background-color: rgb(${yellow.defaultColors()});
	color: #fff;
	font-family: 'ADLMounTiane', Helvetica, Arial, sans-seriff;
	font-size: 12vw;
	height: 100vh;
	line-height: 6vh;
	position: relative; 
	z-index: 1;
	@media (min-width: 768px) {
		font-size: 5.3vw;
	}
	@media (min-width: 1440px) {
		font-size: 5.436rem;
		line-height: 1.864rem;
	}

	.Break {
		display: block;

		&:last-child {
			text-align: right;
		}
	}

	.Large {
		color: rgb(${white.defaultColors()});
		display: block;
		font-family: 'Axis', Helvetica, Arial, sans-seriff;
		@media (min-width: 768px) {
			display: inline;
			font-size: 10.3vw;
			letter-spacing: -5px;
			line-height: 7vh;
		}
		@media (min-width: 1440px) {
			font-size: 10.25rem;
			line-height: 6.25rem;
		}
	}

	p {
		position: relative;
		@media (min-width: 1024px) {
			line-height: 10vh;
		}
		@media (min-width: 1440px) {
			line-height: 4.351rem;
		}
	}
`

const Tweener = props => {
	const compoData = props.input

	useEffect(() => {
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
			window.addEventListener('scroll', scrollIn, false)
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
							background-color: #FFDC32;
  							background-blend-mode: multiply;
							height: 100vh;
							left: 150%;
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
						css={css`
							background: radial-gradient(at bottom left, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 60%),
										radial-gradient(at top right, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 60%);
							height: 100vh;
						`}
					>
						<div 
							className="container-inner" 
							css={
								css`
									align-items: center;
									display: flex;
									height: 100vh;
									margin: 0 auto;
									max-width: 1440px;
									padding: 0 2rem; 
									position: relative;
								`
							}
						>
							<div 
								dangerouslySetInnerHTML={{ __html: compoData.primary.tweener_body.html }} 
							/>
						</div>
					</div>
				</BackgroundImage>
			</div>
		</TweenerEl>
	)
}

export default Tweener