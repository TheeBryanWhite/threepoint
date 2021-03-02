import React from "preact"
import { connect } from 'react-redux'
import { setFooterStatus } from '../redux/actions'
import styled from "@emotion/styled"
import Helpers from '../utils/Helpers'

let white = new Helpers('white')
let outQuart = new Helpers('out-quart')
let bpMedium = new Helpers('medium')
let bpLarge = new Helpers('large')

const Footer = props => {

	const FooterEl = styled.footer`
		animation: riseIn 1s cubic-bezier(${outQuart.ease()}) forwards;
		animation-delay: 4s;
		color: rgb(${white.defaultColors()});
		padding-bottom: 25px;
		position: fixed;
		bottom: -100%;
		width: 100%;
		z-index: 100;

		svg {
			height: 43px;
		}

		@keyframes riseIn {
			0% {
				bottom: -100%;
			}
			100% {
				bottom: 0;
			}
		}
	`

	const containerMargin = new Helpers(32)
	const footerFontS = new Helpers(12)
	const footerFontL = new Helpers(15)
	const Container = styled.div`
		align-items: center;
		font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
		font-size: ${footerFontS.toRem};
		font-weight: 600;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1440px;
		padding: 0 ${containerMargin.toRem};
		text-align: center;
		text-transform: uppercase;

		${bpMedium.respondTo()} {
			display: flex;
			text-align: left;
		}

		${bpLarge.respondTo()} {
			font-size: ${footerFontL.toRem};
		}
	`

	const socialSpacing = new Helpers(100)
	const SocialList = styled.ul`
		align-items: center;
		display: flex;
		list-style-type: none;
		margin: 0;

		li {
			flex: 1;

			${bpMedium.respondTo()} {
				margin: 0 0 0 ${socialSpacing.toRem};
			}
		}

		a {
			color: rgb(${white.defaultColors()});
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	`

	const theDate = new Date()
	const theYear = theDate.getFullYear()

	return (
		<FooterEl>
			<Container>
				<div className="copyright">&copy; {theYear} &#47;&#47; {props.siteTitle} &#47;&#47; All rights reserved</div>
				<div className="social">
					<SocialList>
						<li><a href="http://instagram.com" target="_blank" rel="noreferrer">IG</a></li>
						<li><a href="http://linkedin.com" target="_blank" rel="noreferrer">LI</a></li>
					</SocialList>
				</div>
			</Container>
		</FooterEl>
	)
}

export default connect(null, {setFooterStatus})(Footer)