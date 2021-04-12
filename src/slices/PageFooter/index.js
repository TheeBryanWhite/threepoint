import React from 'preact'
import Helpers from '../../utils/Helpers'
import { css } from "@emotion/react"

let black = new Helpers('black')
let yellow = new Helpers('yellow')

const PageFooter = props => {
	return(
		<section
			css={css`
				background-color: rgb(${yellow.defaultColors()});
				font-size: 5vw;
				font-weight: 400;
				height: 100vh;
				line-height: 5vh;
				padding-top: 100px;
				position: relative;
				z-index: 1;
			
				h2 {
					font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
					font-size: 4vw;
					font-weight: 300;
					@media (min-width: 768px) {
						font-size: 1.25rem;
					}
					@media (min-width: 1440px) {
						margin-bottom: 7vh;
					}
			
					&:before {
						content: '//';
					}
				}
			
				p {
					font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
					font-size: 1rem;
					line-height: 1.5rem;
					@media (min-width: 768px) {
						font-size: 2rem;
						line-height: 2.938rem;
					}
					@media (min-width: 1024px) {
						font-size: 1.8rem;
						line-height: 3.075rem;
					}
					@media (min-width: 1440px){
						font-size: 2.25rem;
						line-height: 2.938rem;
					}
				}
			
				strong {
					font-family: 'Axis', Helvetica, Arial, sans-seriff;
					font-size: 4vw;
					display: inline-block;
					margin-top: 7vh;
					text-transform: uppercase;
					@media (min-width: 768px) {
						font-size: 2.813rem;
						line-height: 2.938rem;
					}
					@media (min-width: 1024px) {
						font-size: 2.213rem;
						line-height: 2.938rem;
						margin-top: 7vh;
					}
					@media (min-width: 1440px) and (min-height: 821px) {
						font-size: 2.813rem;
						line-height: 2.938rem;
					}
				}
			
				a {
					color: rgb(${black.defaultColors()});
					text-decoration: none;
			
					&:hover {
						text-decoration: underline;
					}
				}
			`}
			id={props.input.primary.section_id}
		>
			<div
			>
				<div
					css={css`
						margin: 0 auto;
						max-width: 1440px;
						padding: 0 2rem;
						width: 100%;
					`}
					dangerouslySetInnerHTML={{ __html: props.input.primary.page_footer_body.html }}
				/>
			</div>
			<div
				css={css`
					background-color: rgb(${black.defaultColors()});
					bottom: 0;
					height: 175px;
					position: absolute;
					width: 100%;
					@media (min-width: 768px) {
						height: 35px;
					}
					@media (min-width: 1024px) {
						height: 80px;
					}
					@media (min-width: 1024px) {
						height: 18vh;
					}
				`}
			/>
		</section>
	)
}

export default PageFooter