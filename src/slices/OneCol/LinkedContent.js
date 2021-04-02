import React from 'preact'
import { css } from "@emotion/react"
import Img from 'gatsby-image'

const LinkedContent = props => {
	const blackOrWhite = colorObj => {
		const rgb = hexToRgb(colorObj)

		let Luminance = null

		for (const color in rgb) {
			let calcColor = color / 255.0

			if (calcColor <= 0.03928) {
				calcColor = calcColor/12.92
			} else {
				calcColor = ((calcColor+0.055)/1.055) ^ 2.4
			}
			Luminance = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b
		}

		if ((Luminance + 0.05) / (0.0 + 0.05) > (1.0 + 0.05) / (Luminance + 0.05)) {
			return '#000000'
		} else {
			return '#ffffff'
		}
	}

	const hexToRgb = hex => {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		}
	}

	const classBuilder = () => {
		let classArr = []

		if (props.compoData.mask_this) {
			classArr.push('mask-this')
		}

		if (props.compoData.center_vertically) {
			classArr.push('center-vertically')
		}

		const classes = classArr.join(' ')

		return classes
	}

	if (props.compoData.list_items.document) {
		return(
			<div
				className={classBuilder()}
				css={css`
					font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
					font-weight: 600;
					margin: 0 auto;
					max-width: 1440px;
					opacity: 0;
					padding: 0 2rem;
					position: fixed;
					top: 0;
					width: 100%;
					z-index: -1;
					&.scrolled {
						opacity: 1;
					}
					&.center-vertically {
						top: 50%;
						transform: translateY(-50%);
					}
				`}
			>
				<div 
					css={css`
						margin-bottom: 10vh;

						h1 {
							color: ${blackOrWhite(props.compoData.one_col_background_color)};
							font-family: 'Axis', Helvetica, Arial, sans-seriff;
							font-size: 9vw;
							line-height: 5vh;
							margin: 0;
							position: relative;
							@media (min-width: 1024px) {
								font-size: 11vw;
								line-height: 3vh;
							}
							@media (min-width: 1440px) {
								font-size: 9.323rem;
								letter-spacing: -0.4rem;
								line-height: 8.341rem;
							}
							.Title {
								font-size: 1.25rem;
								font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
								font-weight: 300;
								letter-spacing: 0;
								line-height: 2.938rem;
	
								&:before {
									content: '//';
								}
							}
						}
					`}
					dangerouslySetInnerHTML={{ __html: props.compoData.list_items.document.data.title.html }}
				/>
				<div
					css={css`
						@media (min-width: 768px) {
							align-items: flex-start;
							display: flex;
						}
					`}
				>
					{
						props.compoData.list_items.document.data.organization.map((org, index) => {
							return(
								<div
									className="organization"
									css={css`
										@media (min-width: 768px) {
											flex: 1;
											padding: 0 1rem;
										}
									`}
									key={index}
								>
									<div 
										className="org-logo"
										css={css`margin-bottom: 15px;`}
									>
										<a
											css={css`
												background-color: #ffffff;
												display: block;
												position: relative;
												&:hover {
													.slide-coverer {
														opacity: 0;
													}
												}
											`}
											href={org.link.url}
											rel="noreferrer"
											target="_blank"
										>
											<div
												className="slide-coverer"
												css={css`
													background-color: rgba(255, 255, 255, 0.5);
													clip-path: polygon(0 0, 0% 100%, 100% 100%);
													height: 100%;
													opacity: 1;
													position: absolute;
													transition: opacity 0.3s linear;
													width: 100%;
													z-index: 1;
												`}
											/>
											<Img
												alt=""
												css={css`
													height: 250px;
												`}
												fluid={org.image.localFile.childImageSharp.fluid}
											/>
										</a>
									</div>
									<div className="org-body" dangerouslySetInnerHTML={{ __html: org.body.html }} />
								</div>
							)
						})
					}
				</div>
			</div>
		)
	} else {
		return false
	}
}

export default LinkedContent