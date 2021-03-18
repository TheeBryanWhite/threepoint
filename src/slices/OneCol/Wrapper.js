import React from 'preact'
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const Container = styled.div`
	font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
	font-weight: 600;
    margin: 0 auto;
	max-width: 1440px;
	opacity: 0;
	padding: 0 2rem;
	position: fixed;
	top: 50%;
	transform: translateY(-50%);
	width: 100%;
	z-index: 1;
	
	h1 {
		font-family: 'Axis', Helvetica, Arial, sans-seriff;
		font-size: 5.8vw;
		margin-left: -25px;
		@media (min-width: 1024px) {
			font-size: 5rem;
			line-height: 6.25rem;
		}

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
			font-size: 2.25rem;
			line-height: 3.875rem;
		}
	}

	p {
		font-size: 3vw;
		line-height: 3vh;
		@media (min-width: 1024px) {
			font-size: 1.375rem;
			line-height: 1.65rem;
		}
	}

	&.scrolled {
		opacity: 1;
	}
  `

const Wrapper = props => {
	return(
		<section
			className="one-col"
			css={css`
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
			`}
		>
			<figure 
				css={
					css`
					height: 100%;
					margin: 0; 
					position: absolute;
					top: 0;
					width: 100%;
					`
				}
			/>
			<Container css={css`pointer-events: none;`} className="mask-this">
				<h1>Hello World</h1>
			</Container>
		</section>
	)
}

export default Wrapper