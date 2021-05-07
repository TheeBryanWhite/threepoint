import React from "preact"
import { connect } from 'react-redux'
import { setFooterStatus } from '../redux/actions'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Helpers from '../utils/Helpers'
import { ReactComponent as SVGLinkedIn } from '../svg/linkedin-logo.svg'
import { ReactComponent as SVGInstagram } from '../svg/instagram.svg'

let white = new Helpers('white')
let outQuart = new Helpers('out-quart')
let bpMedium = new Helpers('medium')
let bpLarge = new Helpers('large')

const Footer = props => {

	const FooterEl = styled.footer`
		animation: riseIn 1s cubic-bezier(${outQuart.ease()}) forwards;
		animation-delay: 4s;
		color: rgb(${white.defaultColors()});
		position: fixed;
		bottom: -100%;
		width: 100%;
		z-index: 2;
		@media (min-width: 1024px) {
			padding-bottom: 25px;
		}

		svg {
			height: 25px;
			@media (min-width: 1024px) {
				height: 43px;
			}
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
		padding: 0 3rem;
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

	const socialSpacing = new Helpers(50)
	const SocialList = styled.ul`
		align-items: center;
		display: flex;
		list-style-type: none;
		margin: 0;

		li {
			flex: 1;
			margin: 0;

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
				<div className="copyright">{`© ${theYear} // ${props.siteTitle} // All rights reserved`}</div>
				<div className="social">
					<SocialList>
						<li>
							<a 
								href="http://instagram.com"
								rel="noreferrer"
								target="_blank"
							>
								<SVGInstagram 
									css={css`
										fill: #ffffff;
										height: 20px;
										width: 20px;
									`} 
								/>
							</a>
						</li>
						<li>
							<a 
								href="http://linkedin.com" 
								rel="noreferrer"
								target="_blank"
							>
								<SVGLinkedIn 
									css={css`
										fill: #ffffff;
										height: 20px;
										width: 20px;
									`}
								/>
							</a>
						</li>
					</SocialList>
				</div>
			</Container>
		</FooterEl>
	)
}

export default connect(null, {setFooterStatus})(Footer)