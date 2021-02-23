import React, {useEffect} from 'react'
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Helpers from '../../utils/Helpers'

const containerMargin = new Helpers(32)
  const Container = styled.div`
    align-items: center;
	display: flex;
	font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
	font-weight: 600;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1440px;
	padding: 0 ${containerMargin.toRem};
	width: 100%;
	
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
	}
  `

const OneColEl = styled.section`
	animation: fadeIn 1s linear forwards;
	animation-delay: 1s;
	opacity: 0;

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`

const OneCol = props => {
	const compoData = props.input

	useEffect(() => {
		const clipMask = () => {
			const target = document.querySelector('.mask-this')
			const layerOffset = target.parentNode.offsetTop
			const containerOffset = layerOffset - window.scrollY
			const mask = (containerOffset - target.offsetTop / 2) + 1;
			target.style.clip = `rect(${mask}px, auto, auto, auto)`
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('load', clipMask, false)
			window.addEventListener('resize', clipMask, false)
			window.addEventListener('scroll', clipMask, false)
		}
	}, [])

	return(
		<OneColEl 
			css={
				css`
				height: 100vh; 
				position: relative;
				z-index: 1;
				`
			} 
			className="one-col"
		>
			<figure 
				css={
					css`
					background-color: ${compoData.primary.one_col_background_color}; 
					height: 100%;
					margin: 0; 
					position: absolute; 
					width: 100%;
					`
				}
			/>
			<Container
				className="mask-this"
				css={
					css`
					position: fixed;
					top: 50%; 
					transform: translateY(-50%); 
					width: 100%;
					`
				} 
			>
				<div dangerouslySetInnerHTML={{ __html: compoData.primary.one_column_body.html }} />
			</Container>
		</OneColEl>
	)
}

export default OneCol