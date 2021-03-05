import React, {useEffect} from 'react'
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Helpers from '../../utils/Helpers'

const containerMargin = new Helpers(32)

const OneColEl = styled.section`
	align-items: center;
	animation: fadeIn 1s linear forwards;
	animation-delay: 1s;
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
`

const Container = styled.div`
	font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
	font-weight: 600;
    margin: 0 auto;
    max-width: 1440px;
	padding: 0 ${containerMargin.toRem};
	position: fixed;
	top: 50%;
	transform: translateY(-50%);
	width: 100%;
	z-index: 1;
	
	h1 {
		font-family: 'Axis', Helvetica, Arial, sans-seriff;
		font-size: 5.8vw;
		margin-left: -25px;

		&:before {
			bottom: 3px;
			content: '//';
			display: inline-block;
			font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
			font-size: 2.5vw;
			font-weight: 500;
			margin-right: 10px;
			transform: translateY(-10%);
		}
	}

	h2 {
		font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
		font-size: 4vw;
		@media (min-width: 1024px) {
			font-size: 2.5vw;
			line-height: 7.5vh;
		}
	}

	p {
		font-size: 3vw;
		line-height: 3vh;
		@media (min-width: 1024px) {
			font-size: 1.5vw;
			line-height: 3.2vh;
		}
	}
  `

const OneCol = props => {
	const compoData = props.input

	// Needs some kind of function to hide the copy until the mask is loaded

	useEffect(() => {
		const main = document.getElementsByTagName('main')
		const clipMask = () => {
			const target = document.querySelector('.mask-this')
			const targetRect = target.getBoundingClientRect()
			const targetParent = target.parentNode
			const parentRect = targetParent.getBoundingClientRect()
			const mask = parentRect.top - targetRect.top;
			target.style.clip = `rect(${mask}px, auto, auto, auto)`
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('load', clipMask, false)
			window.addEventListener('resize', clipMask, false)
			main[0].addEventListener('scroll', clipMask, false)
		}
	}, [])

	return(
		<OneColEl
			className="one-col"
			id={compoData.primary.section_id}
		>
			<figure 
				css={
					css`
					background-color: ${compoData.primary.one_col_background_color}; 
					height: 100%;
					margin: 0; 
					position: absolute;
					top: 0;
					width: 100%;
					`
				}
			/>
			<Container css={css`pointer-events: none;`} className="mask-this">
				<div dangerouslySetInnerHTML={{ __html: compoData.primary.one_column_body.html }} />
			</Container>
		</OneColEl>
	)
}

export default OneCol