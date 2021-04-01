import React from 'preact'
import { connect } from 'react-redux'
import { 
	setActiveWork,
	setInactiveWork
 } from '../../redux/actions'
import Img from 'gatsby-image'
import styled from "@emotion/styled"
import { css } from '@emotion/react'
import Helpers from '../../utils/Helpers'

let inOutQuart = new Helpers('in-out-quart')

const SlideBody = styled.div`
	flex: 0 0 100%;
	left: 0;
	position: absolute;
	top: 0;
	transform: translateX(120%);
	width: 100%;
	z-index: 1;
	@media (min-width: 1024px) {
		align-items: flex-start;
		display: flex;
	}	

	h3 {
		font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
		font-size: 5vw;
		font-weight: 800;
		line-height: 4.5vh;
		text-transform: uppercase;
		@media (min-width: 1024px) {
			font-size: 1.563rem;
			line-height: 1.734rem;
		}
	}

	&.active {
		animation: cyclein 0.6s cubic-bezier(${inOutQuart.ease()}) 1;
		opacity: 1;
		transform: translateX(0);
	}

	&.inactive {
		animation: cycleout 1.2s cubic-bezier(${inOutQuart.ease()}) 1;
		opacity: 0;
		transform: translateX(120%);
	}

	@keyframes cyclein {
		0% {
			opacity: 0;
			transform: translate(120%);
		}

		50% {
			opacity: 0;
		}
	
		100% {
			opacity: 1;
			transform: translate(0);
		}
	}
	
	@keyframes cycleout {
		0% {
			opacity: 1;
			transform: translate(0);
		}
	
		50% {
			opacity: 0;
			transform: translate(-120%);
		}
	
		100% {
			opacity: 0;
			transform: translate(120%);
		}
	}
`

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
			} else {
				props.setInactiveWork(props.activeWork)
				props.setActiveWork(index)
			}
		}
	}

	return(
		<div className="slides-container">
			<div
				css={css`
					position: relative;
		
					#slide-0 {
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
				
						&> div {
							flex: 0 0 100%;
						}
				
						p {
							font-family: 'Axis', Helvetica, Arial, sans-seriff;
							font-size: 4.5vw;
							font-weight: 600;
							line-height: 4vh;
							text-transform: uppercase;
							@media (min-width: 768px) {
								font-size: 1.75rem;
								line-height: 2.938rem;
							}
							@media (min-width: 1024px) {
								font-size: 1.55rem;
    							line-height: 2.338rem;
							}
							@media (min-width: 1440px) and (min-height: 821px) {
								font-size: 2.25rem;
								line-height: 2.938rem;
							}
						}
					}

					#slide-1 {
						.slide-content {
							width: 50%;
						}
					}

					#slide-2 {
						.slide-content {
							width: 40%;
						}
					}

					#slide-3 {
						.slide-content {
							width: 50%;
						}
					}

					#slide-4 {
						.slide-content {
							width: 50%;
						}
					}
				`}
			>
				<SlideBody 
					className={classBuilder(0)}
					id="slide-0"
				>
						<div 
							css={css`
								padding: 0 2rem;
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
								max-height: 75%;
								max-width: 75%;
								@media (min-width: 1024px) {
									grid-template-columns: 20% 20% 20% 20% 20%;
									grid-template-rows: 50% 50%;
									max-height: 50vh;
									max-width: 100%;
									padding: 0 2rem;
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
												cursor: pointer;
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
														opacity: 0;
													}
												}
											`}
											key={index}
											onClick={() => {clickHandler(index + 1)}}
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
													top: 50%;
    												transform: translateY(-50%);
												
													img {
														display: block;
														margin: 0;
													}
												`}
												fluid={slide.our_work_teaser.localFile.childImageSharp.fluid}
											/>
										</div>
									)
								})
							}
						</div>
				</SlideBody>
				{
					props.slidesData.items.map((slide, index) => {
						return(
							<SlideBody
								className={classBuilder(index + 1)} 
								css={css`
									padding: 0 2rem;
								`}
								id={`slide-${index + 1}`}
								key={index}
							>
								<div
									css={css`
										position: relative;
									`}
								>
									<p
										css={css`
											font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
											font-size: 1.188rem;
											line-height: 4.054rem;
											margin-top: 100px;
											@media (min-width: 1024px) {
												margin-top: 0;
											}
											@media (min-width: 1440px) and (min-height: 821px) {
												margin-top: 100px;
											}
										`}
									>
										<b css={css`font-weight: 700;`}>{index + 1}</b>/4
									</p>
									<div 
										className="slide-content"
										css={css`
											flex: 0 0 50%;
											position: relative;
											p,
											ul {
												font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
												font-weight: 600;
											}

											p {
												@media (min-width: 1024px) {
													font-size: 1.5rem;
													line-height: 2rem;
												}
											}

											ul {
												margin: 0;
											}

											li {
												left: 0;
												list-style-type: none;
												margin: 0;
												padding-left: 35px;
												position: relative;
												@media (min-width: 1024px) {
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
										dangerouslySetInnerHTML={
											{ 
												__html: slide.our_work_body.html
											}
										}
									/>
								</div>
							</SlideBody>
						)
					})
				}
			</div>
		</div>
	)
}

export default connect(null, {setActiveWork, setInactiveWork})(SlidesContainer)