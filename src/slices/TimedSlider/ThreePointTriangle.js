import React from 'preact'
import styled from '@emotion/styled'
import { ReactComponent as SVGThreePtFrame } from '../../svg/threepoint-frame.svg'

const TimedSlideImage = styled.div`
	left: 50%;
	opacity: 0.3;
	padding: 0 2rem;
	pointer-events: none;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	@media (min-width: 1024px) {
		left: 0;
		opacity: 1;
		position: absolute;
		top: 130px;
		transform: none;
		width: 40%;
	}
	@media (min-width: 1024px) {
		padding: 5%;
		top: 5vh;
	}
	@media (min-width: 1440px) and (min-height: 821px) {
		top: 17vh;
	}

	svg {
		height: 100%;
		width: 100%;
	}

	#threepoint-frame_svg__middle_full,
	#threepoint-frame_svg__top_full,
	#threepoint-frame_svg__right_full,
	#threepoint-frame_svg__left_full {
		cursor: pointer;
		opacity: 0;
		pointer-events: all;
		transition: opacity 0.2s linear;

		&.ghost {
			opacity: 0.4;
		}
	}

	#threepoint-frame_svg__middle_full.ghost {
		fill: #F7931E;
		opacity: 0.4;
	}

	&.go-0 {
		#threepoint-frame_svg__middle_full {
			fill: #F7931E;
			opacity: 0.8;
		}
	}


	&.go-1 {
		#threepoint-frame_svg__top_full {
			opacity: 0.8;
		}
	}

	&.go-2 {
		#threepoint-frame_svg__right_full {
			opacity: 0.8;
		}
	}

	&.go-3 {
		#threepoint-frame_svg__left_full {
			opacity: 0.8;
		}
	}
`

const ThreePointTriangle = props => {
	let imgArr = []

	const imgBuilder = () => {
		imgArr = [`triangle go-${props.activeSlide}`]

		const classes = imgArr.join(' ')

		return classes
	}
	
	return(
		<TimedSlideImage className={imgBuilder(props.activeSlide)}>
			<SVGThreePtFrame />
		</TimedSlideImage>
	)
}

export default ThreePointTriangle