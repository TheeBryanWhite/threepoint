import React from 'preact'
import { connect } from 'react-redux'
import { 
	setActiveWork,
	setInactiveWork,
	setSlideDirection
 } from '../../redux/actions'
import Img from 'gatsby-image'
import { css } from '@emotion/react'
import Helpers from '../../utils/Helpers'

let inOutQuart = new Helpers('in-out-quart')

const SlidesContainer = props => {
	const classBuilder = index => {
		let classArr = ['slide']

		if (props.activeWork === index) {
			classArr.push('active')
		}

		if (typeof props.activeWork !== 'undefined' && props.inactiveWork === index) {
			classArr.push('inactive')
		}

		const classes = classArr.join(' ')

		return classes
	}

	const clickHandler = index => {
		if (typeof props.activeWork !== 'undefined') {
			if (index === 0 && props.activeWork === 0 ) {
				props.setInactiveWork(4)
				props.setActiveWork(index)
				props.setSlideDirection('next')
			} else {
				props.setInactiveWork(props.activeWork)
				props.setActiveWork(index)
				props.setSlideDirection('next')
			}
		}
	}

	return(
		<div 
			className={`slider-container ${props.slideDirection}`}
			css={css`
				width: 100%;
				.slide {
					align-items: center;
					display: flex;
					height: 100vh;
					opacity: 0;
					position: absolute;
					top: 0;
					transform: translateX(-150%);
				}
				&.null,
				&.next {
					.active {
						animation: cycleinLeft 0.6s cubic-bezier(${inOutQuart.ease()}) 1;
						opacity: 1;
						transform: translateX(0);
					}
				
					.inactive {
						animation: cycleoutLeft 1.2s cubic-bezier(${inOutQuart.ease()}) 1;
						opacity: 0;
						transform: translateX(150%);
					}
				}

				&.prev {
					.active {
						animation: cycleinRight 0.6s cubic-bezier(${inOutQuart.ease()}) 1;
						opacity: 1;
						transform: translateX(0);
					}
				
					.inactive {
						animation: cycleoutRight 1.2s cubic-bezier(${inOutQuart.ease()}) 1;
						opacity: 0;
						transform: translateX(150%);
					}
				}
			
				@keyframes cycleinLeft {
					0% {
						opacity: 0;
						transform: translateX(150%);
					}
			
					50% {
						opacity: 0;
					}
				
					100% {
						opacity: 1;
						transform: translateX(0);
					}
				}
				
				@keyframes cycleoutLeft {
					0% {
						opacity: 1;
						transform: translateX(0);
					}
				
					50% {
						opacity: 0;
						transform: translateX(-150%);
					}
				
					100% {
						opacity: 0;
						transform: translateX(150%);
					}
				}
			
				@keyframes cycleinRight {
					0% {
						opacity: 0;
						transform: translateX(-150%);
					}
			
					50% {
						opacity: 0;
					}
				
					100% {
						opacity: 1;
						transform: translateX(0);
					}
				}
				
				@keyframes cycleoutRight {
					0% {
						opacity: 1;
						transform: translateX(0);
					}
				
					50% {
						opacity: 0;
						transform: translateX(150%);
					}
				
					100% {
						opacity: 0;
						transform: translateX(-150%);
					}
				}
			`}
		>
			<div
				css={css`
					height: 100vh;
					position: relative;
		
					#slide-0 {
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
				
						p {
							font-family: 'Axis', Helvetica, Arial, sans-seriff;
							font-size: 3vw;
							font-weight: 600;
							line-height: 3.5vh;
							text-transform: uppercase;
							@media (min-width: 768px) {
								font-size: 1rem;
								line-height: 1.5rem;
							}
							@media (min-width: 1024px) {
								font-size: 1.55rem;
    							line-height: 2.338rem;
							}
							@media (min-width: 1920px) {
								font-size: 2rem;
							}
						}

						.Highlight {
							color: #FFDC32;
						}
					}

					#slide-1 {
						height: 100vh;
						position: absolute;
						.slide-inner {
							bottom: 25%;
							left: 0;
							padding: 0 3rem;
							position: absolute;
							@media (min-width: 768px) {
								bottom: 7%;
							}
							@media (min-width: 1024px) {
								bottom: auto;
								position: relative;
								position: absolute;
								top: 50%;
								transform: translateY(-50%);
								width: 100%;
								.slide-content {
									width: 50%;
								}
							}
						}
					}

					#slide-2 {
						height: 100vh;
						position: absolute;
						.slide-inner {
							bottom: 25%;
							left: 0;
							padding: 0 3rem;
							position: absolute;
							@media (min-width: 768px) {
								bottom: 7%;
							}
							@media (min-width: 1024px) {
								bottom: auto;
								position: relative;
								position: absolute;
								top: 50%;
								transform: translateY(-50%);
								width: 100%;
								.slide-content {
									width: 40%;
								}
							}
						}
					}

					#slide-3 {
						height: 100vh;
						position: absolute;
						.slide-inner {
							bottom: 25%;
							left: 0;
							padding: 0 3rem;
							position: absolute;
							@media (min-width: 768px) {
								bottom: 7%;
							}
							@media (min-width: 1024px) {
								bottom: auto;
								position: relative;
								position: absolute;
								top: 50%;
								transform: translateY(-50%);
								width: 100%;
								.slide-content {
									width: 40%;
								}
							}
						}
					}

					#slide-4 {
						height: 100vh;
						position: absolute;
						.slide-inner {
							bottom: 25%;
							left: 0;
							padding: 0 3rem;
							position: absolute;
							@media (min-width: 768px) {
								bottom: 7%;
							}
							@media (min-width: 1024px) {
								bottom: auto;
								position: relative;
								position: absolute;
								top: 50%;
								transform: translateY(-50%);
								width: 100%;
								.slide-content {
									width: 40%;
								}
							}
						}
					}
				`}
			>
				<div 
					className={classBuilder(0)}
					css={css`
						flex: 0 0 100%;
						width: 100%;
						z-index: 1;
						@media (min-width: 1024px) {
							align-items: flex-start;
							display: flex;
						}	
					`}
					id="slide-0"
				>
					<div
						css={css`
							flex: 0 0 100%;
							transform: translateY(-5%);
						`}
					>
						<div 
							css={css`
								padding: 0 3rem;
								@media (min-width: 768px) {
									margin-bottom: 5vh;
									padding: 60px 3rem 0;
								}
							`} 
							dangerouslySetInnerHTML={{ __html: props.slidesData.primary.our_work_body.html }}
						/>

						<div
							css={css`
								align-items: stretch;
								display: grid;
								grid-template-columns: 1fr 1fr;
								grid-template-rows: 1fr 1fr;
								gap: 0px 0px;
								grid-template-areas:
									". ."
									". .";
								margin: 0 auto;
								max-height: 70%;
								max-width: 70%;
								@media (min-width: 1024px) {
									grid-template-columns: 20% 20% 20% 20% 20%;
									grid-template-rows: 50% 50%;
									max-height: 50vh;
									max-width: 100%;
									padding: 0 3rem;
								}
								@media (min-width: 1440px) and (min-height: 821px) {
									max-height: none;
									max-width: none;
								}
							`}
						>
							{
								props.slidesData.items.map((slide, index) => {
									return(
										<div
											css={css`
												background-color: #ffffff;
												overflow: hidden;
												position: relative;
												@media (min-width: 1024px) {
													grid-column: span 2;
													grid-row: span 2;
												}
											
												&:nth-of-type(1) {
													background-color: #0A7DF3;
												}
											
												&:nth-of-type(3) {
													background-color: #009D57;
												}
												
												@media (min-width: 1024px) {
													&:nth-of-type(3),
													&:nth-of-type(4) {
														grid-column: span 1;
														grid-row: span 1;
													}
												}
											
												&:hover {
													.slide-coverer {
														animation: covererIn 0.4s cubic-bezier(.61,.1,.56,1.49) forwards;
													}
													.client-teaser {
														animation: teaserIn 0.2s cubic-bezier(.5,.64,.61,.93) forwards;
														animation-delay: 0.3s;
													}
												}
												@keyframes covererIn {
													0% {
														opacity: 0;
														transform: scale(0);
													}
													100% {
														opacity: 1;
														transform: scale(0.95);
													}
												}
												@keyframes teaserIn {
													0% {
														opacity: 0;
														transform: translateY(-100%);
													}
													100% {
														opacity: 1;
														transform: translateY(0);
													}
												}
											`}
											key={index}
										>
											<button
												css={css`
													background: transparent;
													border: 0;
													cursor: pointer;
													display: block;
													height: 100%;
													padding: 0;
													position: relative;
													width: 100%;
												`}
												onClick={() => {clickHandler(index + 1)}}
											>
												<div
													className="client-teaser"
													css={css`
														animation: teaserOut 0.3s cubic-bezier(.5,.64,.61,.93) forwards;
														color: #000000;
														display: none;
														opacity: 0;
														padding: 4% 5%;
														position: absolute;
														text-align: left;
														width: 100%;
														z-index: 3;
														@media (min-width: 768px) {
															display: block;
														}
														@keyframes teaserOut {
															0% {
																opacity: 1;
																transform: translateY(0);
															}
															100% {
																opacity: 0;
																transform: translateY(-100%);
															}
														}
													`}
												>
													<div>
														<p 
															css={css`
																font-size: 1rem !important;
																font-style: italic;
																line-height: 1.2rem !important;
																margin-bottom: 0;
															`}
														>
															<b css={css`font-weight: 700;`}>{index + 1}</b>/4
														</p>
													</div>
													<div 
														css={css`
															h3 {
																font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
																font-size: 1rem !important;	
															}
														`}
														dangerouslySetInnerHTML={{__html: slide.client.html}}
													/>
												</div>
												<div
													className="slide-coverer"
													css={css`
														animation: covererOut 0.4s cubic-bezier(.5,.64,.61,.93) forwards;
														animation-delay: 0.2s;
														background-color: rgba(255, 255, 255, 0.5);
														height: 100%;
														opacity: 1;
														position: absolute;
														transform: scale(0.95);
														width: 100%;
														z-index: 2;
														@keyframes covererOut {
															0% {
																opacity: 0;
																transform: scale(0.95);
															}
															100% {
																opacity: 1;
																transform: scale(0);
															}
														}
													`}
												/>
												<Img
													alt=""
													css={css`z-index: 1;`}
													fluid={slide.our_work_teaser.localFile.childImageSharp.fluid}
												/>
											</button>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
				{
					props.slidesData.items.map((slide, index) => {
						return(
							<div
								className={classBuilder(index + 1)} 
								css={css`
									left: 0;
									padding: 0 3rem;
									position: absolute;
									transform: translateX(150%);
									width: 100%;
									z-index: 1;
								`}
								id={`slide-${index + 1}`}
								key={index}
							>
								<div className="slide-inner">
									<p
										css={css`
											font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
											font-size: 1rem;
											line-height: 1rem;
											margin-bottom: 0;
											@media (min-width: 768px) {
												font-size: 1.188rem;
												line-height: 1.188rem;
												margin-bottom: 3vh;
											}
										`}
									>
										<b css={css`font-weight: 700;`}>{index + 1}</b>/4
									</p>
									<div 
										className="slide-content"
										css={css`
											position: relative;
											h3 {
												font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
												font-size: 4vw;
												font-weight: 800;
												line-height: 4.5vh;
												margin-bottom: 0;
												text-transform: uppercase;
												@media (min-width: 768px) {
													margin-bottom: 3vh;
												}
												@media (min-width: 1024px) {
													font-size: 1.563rem;
													line-height: 1.734rem;
												}
												@media (min-width: 1280px) {
													margin-bottom: 4vh;
												}
												@media (min-width: 1920px) {
													margin-bottom: 65px;
												}
											}
											p,
											ul {
												font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
												font-size: 1rem;
												font-weight: 600;
											}

											p {
												@media (min-width: 1024px) {
													font-size: 1.25rem;
													line-height: 1.5rem;
												}
												@media (min-width: 1280px) {
													margin-bottom: 7vh;
												}
												@media (min-width: 1920px) {
													font-size: 1.5rem;
													line-height: 2rem;
												}
											}

											ul {
												margin: 0;
											}

											li {
												display: inline;
												font-size: 0.875rem;
												font-weight: 400;
												left: 0;
												list-style-type: none;
												margin: 0 5px 0 0;
												padding-left: 20px;
												position: relative;
												@media (min-width: 1024px) {
													display: block;
													font-size: 1rem;
													line-height: 1.5rem;
													padding-left: 30px;
												}
												@media (min-width: 1920px) {
													font-size: 1.5rem;
													line-height: 2rem;
												}

												&:before {
													content: '//';
													left: 0;
													position: absolute;
												}
											}
										`}
									>
										<div dangerouslySetInnerHTML={{__html: slide.client.html}} />
										<div dangerouslySetInnerHTML={{__html: slide.our_work_body.html}} />
										<div dangerouslySetInnerHTML={{__html: slide.services.html}} />
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	slideDirection: state.app.slideDirection
})

export default connect(mapStateToProps, {setActiveWork, setInactiveWork, setSlideDirection})(SlidesContainer)