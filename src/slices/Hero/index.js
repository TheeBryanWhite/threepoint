import React, {useEffect} from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import BackgroundImage from 'gatsby-background-image'
import Scroller from './Scroller'
import Helpers from '../../utils/Helpers'

import Slides from './Slides'

let white = new Helpers('white')
let black = new Helpers('black')
let yellow = new Helpers('yellow')
let bpMedium = new Helpers('medium')
let bpLarge = new Helpers('large')
let inOutQuart = new Helpers('in-out-quart')
let outQuart = new Helpers('out-quart')

const heroReveal = css`
	animation: fadeIn 1s linear forwards;
	background-color: rgb(${black.defaultColors()});
	height: 100vh;
	opacity: 0;

	&.reveal {
		&:after {
			animation: fadeOut 0.5s linear forwards;
			animation-delay: 8s;
		}

		video {
			animation: fadeOut 0.5s linear forwards;
			animation-delay: 8s;
		}
		
		#slide-1 {
			h1 {
				animation: foldOut 0.5s forwards;
				animation-delay: 1.5s;

				&:after {
					animation: glowFade 0.7s forwards;
				}
			}
		}

		#slide-2 {
			animation: fadeOut 0.5s linear forwards;
			animation-delay: 8s;
		}

		.bubbles path {
			animation: fillIn 4s cubic-bezier(${inOutQuart.ease()}) forwards;
			animation-delay: 2s;
		}

		#slide-3 .logo-container {
			animation-name: fadeIn, zoom;
			animation-duration: 2s, 10s;
			animation-delay: 8s, 8s;
			animation-timing-function: linear, cubic-bezier(${outQuart.ease()});
			animation-fill-mode: forwards, forwards;
		}
	}

	@keyframes fadeOut {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes fillIn {
		0% { 
			transform: scale(0) rotate(33deg); 
		}

		35%, 
		65% { 
			transform: scale(10) rotate(0deg); 
		}

		100% {
			transform: scale(10);
		}
	}

	@keyframes foldOut {
		0% {
			clip-path: inset(0px 0 0 0);
		}
		100% {
			clip-path: inset(100% 0 0 0);
		}
	}

	@keyframes glowFade {
		0% {
			opacity: 0;
			text-shadow: 0 0 5px rgb(${white.defaultColors()}),
						 0 0 10px rgb(${white.defaultColors()}),
						 0 0 15px rgb(${white.defaultColors()}),
						 0 0 20px rgb(${yellow.defaultColors()}),
						 0 0 30px rgb(${yellow.defaultColors()}), 
						 0 0 40px rgb(${yellow.defaultColors()}), 
						 0 0 55px rgb(${yellow.defaultColors()}), 
						 0 0 75px rgb(${yellow.defaultColors()});
		}
		100% {
			opacity: 1;
			text-shadow: none;
		}
	}

	@keyframes zoom {
		0% {
			transform: scale(0.8);
		}

		100% {
			transform: scale(1);
		}
	}
`

const containerMargin = new Helpers(32)
const Container = styled.div`
	align-items: center;
	color: rgb(${white.defaultColors()});
	display: flex;
	font-family: 'Axis', Helvetica, Arial, sans-seriff;
	height: 100vh;
	margin: 0 auto;
	max-width: 1440px;
	padding: 0 ${containerMargin.toRem};
	text-transform: uppercase;

	p {
		font-size: 7vw;
		line-height: 10vw;

		${bpLarge.respondTo()} {
			font-size: 4vw;
			line-height: 6vw;
		}
	}

	#slide-1 {

		h1 {
			color: rgb(${yellow.defaultColors()});

			&:before {
				bottom: 3px;
				color: rgb(${white.defaultColors()});
				content: '//';
				display: inline-block;
				font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
				font-size: 3.6vw;
				transform: translateY(-10%);
			}
	
			&:after {
				color: rgb(${white.defaultColors()});
				content: '3';
				display: inline-block;
				font-size: 5vw;
				opacity: 0;
				text-shadow: none;
				transform: translateY(-60%);
				transition: all 0.1s linear;
	
				${bpLarge.respondTo()} {
					transform: translateY(-37%);
				}
			}
		}
	}

	#slide-2 {
		
		p {
			clip-path: inset(100% 0 0 0);
		}
	}

	#sm-bubbleswhite path,
	#lg-bubbleswhite path {
		animation-delay: 2s;
		transform: scale(0);
		transform-origin: 50% 50%;
		transform-box: fill-box;
	}
	  
	#sm-bubblesbrandstrategy path,
	#lg-bubblesbrandstrategy path {
		animation-delay: 3s;
		transform: scale(0);
		transform-origin: 50% 50%;
		transform-box: fill-box;
	}
	 
	#sm-bubblesdesign path,
	#lg-bubblesdesign path {
		animation-delay: 4s;
		transform: scale(0);
		transform-origin: 50% 50%;
		transform-box: fill-box;
	}
	
	#sm-bubblesproduct path,
	#lg-bubblesproduct path {
		animation-delay: 5s;
		transform: scale(0);
		transform-origin: 50% 50%;
		transform-box: fill-box;
	}

	#slide-3 {
		text-align: center;

		.logo-container {
			opacity: 0;
			transform: scale(0.8);
		}

		svg {
			margin-bottom: 10px;
			max-width: 235px;
		}

		h1 {
			font-size: 9vw;
			@media (min-width: 768px) {
				font-size: 5vw;
			}

			&:after,
			&:before {
				content: none;
			}
		}
	}

	.highlight {
		color: rgb(${yellow.defaultColors()});
	}
`

const Overlay = styled.div`
	background-color: rgba(${black.defaultColors()}, 0.5);
	bottom: 0;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
`

const Video = styled.video`
	display: none;
	object-fit: cover;
	position: absolute;
	width: 100%;
	height: 100%;

	${bpMedium.respondTo()} {
		display: block;
	}
`

const Hero = props => {
	const compoData = props.input

	useEffect(() => {
		const theVideo = document.getElementById('hero-video')
		theVideo.playbackRate = 0.5
	}, [])
	console.log(compoData.primary.section_id)
	return (
		<section
			className="hero"
			css={heroReveal}
			id= {compoData.primary.section_id}
		>
			<BackgroundImage
				fluid={compoData.primary.hero_background_image.localFile.childImageSharp.fluid}
				Tag="div"
			>
				<div css={css`position: absolute; width: 100%;`}>
					<Video 
						autoPlay
						loop
						muted
						preload="auto"
						id="hero-video"
					>
						<source src={compoData.primary.hero_video_mp4.url} type="video/mp4" />
						<source src={compoData.primary.hero_video_ogv.url} type="video/ogv" />
					</Video>
					<Overlay />
					<Container>
						<Slides />
						<Scroller />
					</Container>
				</div>
			</BackgroundImage>
		</section>
	)
}

export default Hero