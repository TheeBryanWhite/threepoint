import React from 'preact'
import { css } from "@emotion/react"

const Body = props => {
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

	const PageTitle = () => {
		if (props.pageTitle) {
			return <div 
				css={css`
					margin: 0 auto;
					max-width: 1440px;
					padding-top: 100px;
					text-transform: normal;
					@media (min-width: 1024px) {
						padding: 100px 2rem 0;
						padding-top: 100px;
					}
					@media (min-width: 1920px) {
						padding-top: 150px;
					}
					h2 {
						font-family: 'Core Sans', Helvetica, Arial, sans-seriff !important;
						font-size: 4vw;
						font-style: italic;
						font-weight: 300;
						margin-top: 0 !important;
						padding: 0 2rem;
						text-transform: none;
						@media (min-width: 1024px) {
							font-size: 1.25rem !important;
							line-height: 1.25rem !important;
						}
						@media (min-width: 1920px) {
							font-size: 2rem;
							line-height: 2.338rem;
						}
						&:before {
							color: #FFDC32;
							content: '//';
						}
					}
				`}
				dangerouslySetInnerHTML={{ __html: props.pageTitle }} 
			/>
		} else {
			return false
		}
	}

	if (!props.compoData.list_items.document) {
		return(
			<div
				className={classBuilder()}
				css={css`
					font-weight: 600;
					margin: 0 auto;
					max-width: 1440px;
					opacity: 0;
					pointer-events: none;
					z-index: 1;
					
					h1 {
						color: ${blackOrWhite(props.compoData.one_col_background_color)};
						font-family: 'Axis', Helvetica, Arial, sans-seriff;
						font-size: 9vw;
						// line-height: 5vh;
						margin: 0;
						position: relative;
						@media (min-width: 1024px) {
							font-size: 8.6rem;
							line-height: 7rem;
						}
						@media (min-width: 1440px) {
							font-size: 9.323rem;
							letter-spacing: -0.4rem;
							line-height: 8.341rem;
						}

						.Superscript {
							color: #ffffff;
							display: inline-block;
							font-size: 6vw;
							line-height: 1.4rem;
							position: absolute;
							top: 0;
							@media (min-width: 768px) {
								line-height: 2.1rem;
								transform: translateY(-17px);
							}
							@media (min-width: 1024px) {
								line-height: 3.8rem;
								transform: translateY(-10px);
							}
							@media (min-width: 1440px) {
								font-size: 4.688rem;
								line-height: 6.841rem;
								transform: translateY(-23px);
							}
						}
						.Title {
							font-size: 1.25rem;
							font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
							font-weight: 300;
							letter-spacing: 0;
							line-height: 2.938rem;

							&:before {
								color: #FFDC32;
								content: '//';
							}
						}
					}
					h2 {
						color: ${blackOrWhite(props.compoData.one_col_background_color)};
						font-family: 'Axis',Helvetica,Arial,sans-seriff;
						letter-spacing: 0;
						margin: 4% 0 2%;
						text-transform: uppercase;
						@media (min-width: 1440px) {
							font-size: 2.25rem;
							line-height: 2.938rem;
						}
						
						.Title {
							font-size: 5vw;
							letter-spacing: -0.05rem;
							line-height: 2.938rem;
							@media (min-width: 768px) {
								font-size: 5vw;
								line-height: 5vh;
								transform: translateY(-35%);
							}
							@media (min-width: 1440px) {
								font-size: 3.2rem;
								line-height: 4rem;
							}
							@media (min-width: 1920px) {
								font-size: 2rem;
								line-height: 2.338rem;
							}
						}
					}
					p {
						color: ${blackOrWhite(props.compoData.one_col_background_color)};
						font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
						font-size: 3.6vw;
						line-height: 2.8vh;
						margin-bottom: 2vh;
						@media (min-width: 768px) {
							font-size: 2.6vw;
							line-height: 4vh;
						}
						@media (min-width: 1024px) {
							font-size: 1.44rem;
							line-height: 2.48rem;
						}
						.Indent {
							margin-left: 2%;
						}

						strong,
						b {
							font-weight: 700;
						}

						em,
						i {
							font-style: italic;
						}
						.Title {
							font-family: 'Axis',Helvetica,Arial,sans-seriff;
							font-size: 3vw;
							line-height: 3.5vh;
							@media (min-width: 1024px) {
								font-size: 1.55rem;
								line-height: 2.338rem;
							}
							@media (min-width: 1280px) {
								font-size: 2.25rem;
								line-height: 2.938rem;
							}
							@media (min-width: 1440px) {
								font-size: 1.55rem;
								line-height: 2.338rem;
							}
							strong,
							b {
								color: #FFDC32;
							}
						}
					}
					&.scrolled {
						opacity: 1;
					}
					&.mask-this {
						left: 50%;
						position: fixed;
						top: 0;
						transform: translateX(-50%);
						width: 100%;
					}
					&.center-vertically {
						left: 50%;
						position: fixed;
						top: 50%;
						transform: translate(-50%, -50%);
						width: 100%;
					}
					.block-img {
						margin: 0 auto;
						width: 60vw;
						@media (min-width: 1024px) {
							width: auto;
						}
						@media (min-width: 1920px) {
							margin-top: 5vh;
						}
					}
				`}
			>
				<PageTitle />
				<div css={css`padding: 0 3rem;`} dangerouslySetInnerHTML={{ __html: props.compoData.one_column_body.html }} />
			</div>
		)
	} else {
		return false
	}
}

export default Body