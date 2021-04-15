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

	const PageTitle = () => {
		if (props.pageTitle) {
			return <div 
				css={css`
					margin: 0 auto;
					max-width: 1440px;
					padding-top: 100px;
					@media (min-width: 1024px) {
						padding-top: 100px;
						@media (min-width: 1920px) {
							padding-top: 150px;
						}
					}
					h2 {
						font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
						font-size: 4vw;
						font-style: italic;
						font-weight: 300;
						margin-top: 0;
						@media (min-width: 1024px) {
							font-size: 1.25rem;
							line-height: 1.25rem;
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
						color: #ffffff;
						font-size: 0.875rem;
						line-height: 1rem;
						margin-bottom: 2vh;
						&:last-child {
							margin: 0;
						}

						strong,
						b {
							font-size: 1.125rem;
						}
					}

					a {
						color: #FFF203;
						font-weight: 600;
						text-decoration: none;
					}
					&.mask-this {
						left: 50%;
						position: fixed;
						top: 0;
						transform: translateX(-50%);
						width: 100%;
						z-index: -1;
					}
				`}
			>
				{
					props.compoData.list_items.document.data.organization.map((org, index) => {
						return(
							<div>
								<PageTitle />
								<div
									css={css`
										@media (min-width: 768px) {
											align-items: flex-start;
											display: flex;
										}
									`}
								>
									<div
										className="organization"
										css={css`
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
												margin-bottom: 35px;
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
														display: block !important;
														height: 25vh;
														@media (min-width:768px) {
															height: 20vh;
														}
														@media (min-width:1024px) {
															height: 35vh;
														}
													`}
													fluid={org.image.localFile.childImageSharp.fluid}
												/>
											</a>
										</div>
										<div className="org-body" dangerouslySetInnerHTML={{ __html: org.body.html }} />
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	} else {
		return false
	}
}

export default LinkedContent