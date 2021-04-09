import React from 'preact'
import { css } from "@emotion/react"
import Img from 'gatsby-image'

const LinkedContent = props => {

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
					width: 100%;
					&.scrolled {
						opacity: 1;
					}
					p {
						font-size: 0.875rem;
						line-height: 1rem;
						margin-bottom: 2vh;
						&:last-child {
							margin: 0;
						}
					}

					a {
						color: #FFF203;
						font-weight: 600;
						text-decoration: none;
					}
				`}
			>
				<div
					css={css`
						@media (min-width: 768px) {
							align-items: flex-start;
							display: flex;
							justify-content: center;
						}
					`}
				>
					{
						props.compoData.list_items.document.data.organization.map((org, index) => {
							return(
								<div
									className="organization"
									css={css`
										background-color: #C0C2C4;
										flex: 1;
										padding: 10px;
										@media (min-width: 768px) {
											flex: 0 0 33.33%;
										}
									`}
									key={index}
								>
									<div 
										className="org-logo"
										css={css`
											border: 3px solid #FFF203;
											margin-bottom: 15px;
										`}
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
											<Img
												alt=""
												css={css`
													height: 175px;
													@media (min-width: 768px) {
														height: 250px;
													}
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