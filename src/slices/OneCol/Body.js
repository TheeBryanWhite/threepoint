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

	if (!props.compoData.list_items.document) {
		return(
			<div
				className={props.compoData.mask_this ? 'mask-this' : ''}
				css={css`
					font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
					font-weight: 600;
					margin: 0 auto;
					max-width: 1440px;
					opacity: 0;
					padding: 0 2rem;
					pointer-events: none;
					position: fixed;
					top: 50%;
					transform: translateY(-50%);
					width: 100%;
					z-index: 1;
					
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
								line-height: 2.1rem;
								transform: translateY(-21px);
							}
							@media (min-width: 1440px) {
								font-size: 7.47rem;
								line-height: 9.841rem;
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
						font-family: 'Axis', Helvetica, Arial, sans-seriff;
						letter-spacing: 0;
						margin: 4% 0;
						text-transform: uppercase;
						@media (min-width: 768px) {
							margin: 95px 0 25px;
						}
						@media (min-width: 768px) {
							margin: 6vh 0;
						}
						@media (min-width: 1440px) and (min-height: 821px) {
							margin: 95px 0 25px;
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
							&:before {
								bottom: 0px;
								content: '//';
								display: inline-block;
								font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
								font-size: 0.8rem;
								font-weight: 500;
								line-height: 1rem;
								margin-right: 3px;
								transform: translateY(-10%);
							}
						}
					}
					p {
						color: ${blackOrWhite(props.compoData.one_col_background_color)};
						font-size: 3.6vw;
						line-height: 3vh;
						@media (min-width: 768px) {
							line-height: 4vh;
						}
						@media (min-width: 1024px) {
							font-size: 1.44rem;
							line-height: 2.48rem;
						}

						.Indent {
							margin-left: 2%;
						}
					}
					&.scrolled {
						opacity: 1;
					}
				`}
			>
				<div dangerouslySetInnerHTML={{ __html: props.compoData.one_column_body.html }} />
			</div>
		)
	} else {
		return false
	}
}

export default Body