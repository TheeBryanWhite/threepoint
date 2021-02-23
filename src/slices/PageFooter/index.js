import React from 'preact'
import styled from "@emotion/styled"
import Helpers from '../../utils/Helpers'

let black = new Helpers('black')
let yellow = new Helpers('yellow')

const containerMargin = new Helpers(32)
const Container = styled.div`
	font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
    margin: 0 auto;
    max-width: 1440px;
	padding: 0 ${containerMargin.toRem};
	width: 100%;
`

const PageFooterEl = styled.section`
	background-color: rgb(${yellow.defaultColors()});
	font-size: 36px;
	font-weight: 400;
	height: 100vh;
	line-height: 62px;
	position: relative;
	z-index: 1;

	.page-footer-body {
		padding-top: 15vh;
	}

	h2 {
		font-size: 20px;
		font-weight: 300;

		&:before {
			content: '//';
		}
	}

	p {
		margin-top: 60px;
	}

	strong {
		font-family: 'Axis', Helvetica, Arial, sans-seriff;
		font-size: 45px;
		display: inline-block;
		margin-top: 20px;
		text-transform: uppercase;
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
	height: 82px;
	position: absolute;
	width: 100%;
`

const PageFooter = props => {
	return(
		<PageFooterEl>
			<div className="page-footer-body">
				<Container dangerouslySetInnerHTML={{ __html: props.input.primary.page_footer_body.html }} />
			</div>
			<FooterStripe />
		</PageFooterEl>
	)
}

export default PageFooter