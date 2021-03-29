import React from 'preact'
import styled from "@emotion/styled"
import Helpers from '../../utils/Helpers'
import { css } from "@emotion/react"

let black = new Helpers('black')
let yellow = new Helpers('yellow')

const containerMargin = new Helpers(32)
const Container = styled.div`
    margin: 0 auto;
    max-width: 1440px;
	padding: 0 ${containerMargin.toRem};
	width: 100%;
`

const PageFooterEl = styled.section`
	background-color: rgb(${yellow.defaultColors()});
	font-size: 5vw;
	font-weight: 400;
	height: 100vh;
	line-height: 5vh;
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
		@media (min-width: 768px) {
			font-size: 2rem;
			line-height: 3.875rem;
		}
		@media (min-width: 1024px) {
			font-size: 1.8rem;
    		line-height: 3.075rem;
		}
		@media (min-width: 1440px) and (min-height: 821px) {
			font-size: 2rem;
			line-height: 3.875rem;
		}
	}

	strong {
		font-family: 'Axis', Helvetica, Arial, sans-seriff;
		font-size: 6vw;
		display: inline-block;
		margin-top: 10vh;
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
`

const FooterStripe = styled.div`
	background-color: rgb(${black.defaultColors()});
	bottom: 0;
	height: 110px;
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
`

const PageFooter = props => {
	return(
		<PageFooterEl
			css={css`padding-top: 150px;`}
			id={props.input.primary.section_id}
		>
			<div className="page-footer-body">
				<Container dangerouslySetInnerHTML={{ __html: props.input.primary.page_footer_body.html }} />
			</div>
			<FooterStripe />
		</PageFooterEl>
	)
}

export default PageFooter