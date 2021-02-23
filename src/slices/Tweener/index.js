import React, {useEffect} from 'preact/compat'
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
	font-size: 40px;
	line-height: 40px;
	position: relative; 
	z-index: 1;

	.Break {
		display: block;
	}

	.Large {
		color: rgb(${white.defaultColors()});
		font-size: 13.3vw;
		line-height: 19vh;
	}

	p {
		position: relative;
	}
`

const containerStyles = css`
	height: 100vh; 
	margin: 0 auto;
	padding: 0 2rem;
	position: fixed !important;
	top: 0;
	width: 100vw;
`

const Tweener = props => {
	const compoData = props.input

	useEffect(() => {
		const sideScroll = () => {
			const docWidth = document.body.clientWidth
			const target = document.getElementById(compoData.id)
			const targetOuter = target.querySelector('.container-outer')
			const targetChild = target.querySelector('.container')
			const targetCopy = target.querySelector('p')
			
			target.style.height = `${docWidth + 200}px`
			targetOuter.style.height = `${docWidth}px`
			targetChild.style.left = `${docWidth}px`
			targetCopy.style.left = `100%`
			
			const scrollThis = () => {
			  const targetRect = target.getBoundingClientRect()
			
			  let output = false
			  if (targetRect.top < window.innerHeight) {
				output = true
			  }
		  
			  return output
			}
		  
			const setHorizontalPosition = () => {
			  const targetRect = targetOuter.getBoundingClientRect()
			  const howMuchScrolled = targetRect.height - targetRect.bottom
			  const percentageScrolled = (howMuchScrolled / (targetRect.height - window.innerHeight)) * 100
		  
			  if (scrollThis() === true && percentageScrolled <= 100) { 
				targetChild.style.left = `${100 - percentageScrolled}%`
			  } else if (scrollThis() === true && percentageScrolled >= 100) {
				targetChild.style.left = 0
			  }

			  if (percentageScrolled <= 100 && targetCopy.style.left >= `0%`) {
				targetCopy.style.left = `${100 - (percentageScrolled * 1.3 )}%`
			  }
			}
			
			window.addEventListener('scroll', scrollThis, false)
			window.addEventListener('scroll', setHorizontalPosition, false)
		}

		sideScroll()
	}, [compoData.id])

	return(
		<TweenerEl 
			className="tweener"
			id={compoData.id}
		>
			<div class="container-outer">
				<BackgroundImage
					className="container"
					css={containerStyles}
					fluid={compoData.primary.tweener_background_image.localFile.childImageSharp.fluid}
					Tag="div"
				>
					<div 
						className="container-inner" 
						css={
							css`
							height: 100vh; 
							position: relative;
							`
						}
					>
						<div 
							css={
								css`
								position: absolute; 
								top: 50%; 
								transform: translateY(-50%);
								`
							} 
							dangerouslySetInnerHTML={{ __html: compoData.primary.tweener_body.html }} 
						/>
					</div>
				</BackgroundImage>
			</div>
		</TweenerEl>
	)
}

export default Tweener