import React, { useEffect, useState} from 'react'
import { css } from "@emotion/react"
import Helpers from '../../utils/Helpers'

let white = new Helpers('white')
let bpMedium = new Helpers('medium')
let bpLarge = new Helpers('large')
let inOutQuart = new Helpers('in-out-quart')
let outQuart = new Helpers('out-quart')

const scroller = css`
	animation-name: fadeIn, pull;
	animation-duration: 2s, 2s;
	animation-delay: 20s, 20s;
	animation-fill-mode: forwards, forwards;
	animation-iteration-count: 1, infinite;
	animation-timing-function: linear, cubic-bezier(${inOutQuart.ease()});
	bottom: 165px;
	fill: rgb(${white.defaultColors()});
	left: 50%;
	opacity: 0;
	position: absolute;
	transform: translateX(-50%);
	width: 7%;
	@media (min-width: 768px) {
		bottom: 60px;
		width: 5%;
	}
	@media (min-width: 1024px) {
		bottom: 70px;
		width: 3%;
	}
	@media (min-width: 1280px) {
		bottom: 30px;
		width: 3%;
	}

	#touch-icon {
		
		#touch {
			animation: push 2s cubic-bezier(${outQuart.ease()}) infinite;
			animation-delay: 20s;
		}
	}

	&.fade {
		animation: fadeOut 1s cubic-bezier(${outQuart.ease()}) forwards;
		opacity: 0;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
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

	@keyframes push {
		0% {
			transform: scale(1) translate(0, 0);
		}

		75%, 100% {
			transform: scale(0.8) translate(31px, 31px);
		}
	}

	@keyframes pull {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(-40px);
		}
	}
`

const Scroller = () => {	
	const [fade, setFade] = useState(false)

	useEffect(() => {
		document.addEventListener('scroll', () => {
			setFade(true)
		})
	}, [])

	return(
		<div css={scroller} className={fade ? 'fade' : ''}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 335.78 459.72">
				<g id="touch-icon">
					<path id="hand" d="M298.82,217.41h-.57a35.22,35.22,0,0,0-23,8.8A37,37,0,0,0,240.73,200,35.08,35.08,0,0,0,219,208a37.37,37.37,0,0,0-35.44-30.64,35.15,35.15,0,0,0-20.8,6.88V172.66a5,5,0,0,1-.26-1.65V146l-.06,0V107.8a39,39,0,0,0-78.08,0v9.62a5.53,5.53,0,0,1,.24,1.63V164.8l.08,0V249.4L66.41,224.84a38,38,0,0,0-53.12-7.44,38,38,0,0,0-4.8,52.8L79,408.76c22.16,43.6,57.52,49.68,72,50.24,12.48.56,25.28.72,37.52.72,38.56,0,72-2,72-2h.8c57.84,0,74-62.16,74.48-95.28v-106A38,38,0,0,0,298.82,217.41ZM259.21,441.72c-.56,0-57,3.52-108,1.28-11.36-.48-40-5.52-58.08-41.52L22.41,262.2a8.53,8.53,0,0,0-.88-1.36,22,22,0,0,1,2-31,21.93,21.93,0,0,1,30.4,4.72l32,44.08.48.4a10.34,10.34,0,0,0,2.4,1.92l1.36.48h4.64l1.44-.64h.8l.4-.4a7.51,7.51,0,0,0,1.12-1.2,7.59,7.59,0,0,0,.8-1.2,7.83,7.83,0,0,0,.48-1.36,8.55,8.55,0,0,0,0-1.6V107.8a23,23,0,0,1,46.08,0V249.4a8,8,0,0,0,16,0v-33a20.88,20.88,0,1,1,41.52,0v57.52a8,8,0,0,0,16,0V239A20.88,20.88,0,1,1,261,239v64a8,8,0,0,0,16,0V256.45a20.88,20.88,0,1,1,41.52,0L319,362.29C319,365.56,317.05,442.28,259.21,441.72Z"/>
					<path id="touch" d="M123.87,0C75.53,0,36.2,38.19,36.2,85.12c0,33.35,19.85,62.27,48.68,76.23V145.53c-20.86-12.6-34.77-35-34.77-60.41,0-39.26,33.09-71.2,73.76-71.2s73.75,31.94,73.75,71.2c0,25.77-14.24,48.38-35.52,60.88v15.72c29.24-13.82,49.44-43,49.44-76.6C211.54,38.19,172.21,0,123.87,0Z"/>
				</g>
			</svg>
		</div>
	)
}

export default Scroller