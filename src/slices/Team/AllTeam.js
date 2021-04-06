import React from 'preact'
import { connect } from 'react-redux'
import { 
	setActiveTeam,
	setInactiveTeam
 } from '../../redux/actions'
import Img from 'gatsby-image'
import Helpers from '../../utils/Helpers'
import { css } from '@emotion/react'

let white = new Helpers('white')
let inOutQuart = new Helpers('in-out-quart')

const AllTeam = props => {

	const classBuilder = index => {
		let classArr = []

		if (props.activeTeam === index) {
			classArr.push('active')
		}

		if (typeof props.activeTeam !== 'undefined' && props.inactiveTeam === index) {
			classArr.push('inactive')
		}

		const classes = classArr.join(' ')

		return classes
	}

	const clickHandler = index => {
		if (typeof props.activeTeam !== 'undefined') {
			props.setInactiveTeam(index)
			props.setActiveTeam(0)
		}
	}

	return(
		props.teamData.map((dude, index) => {
			const name = `${dude.team_member_first_name.text} ${dude.team_member_last_name.text}`
			return (
				<div 
					className={classBuilder(index + 1)}
					css={css`
						background-color: #000000;
						font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
						left: 0;
						position: fixed;
						top: 0;
						transform: translateX(120%);
						width: 100%;
						z-index: 89;
						@media (min-width: 1024px) {
							background-color: transparent;
							display: flex;
							position: absolute;
						}
						@media (min-width: 1440px) and (min-height: 821px) {
							margin-top: 4vh;
						}
					
						button {
							background-color: transparent;
							border: 0;
							color: rgb(${white.defaultColors()});
							cursor: pointer;
					
							&:hover {
								text-decoration: underline;
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
					`}
					id={`team-${index + 1}`}
					key={index}
				>
					<div className="team-member-photo" css={css`flex: 0 0 40%`}>
						<div 
							className="team-member-photo-inner"
							css={css`
								// padding-right: 60px;
							`}
						>
							<Img
								alt={dude.team_member_photo.alt}
								css={css`
									height: 200px;
									@media (min-width: 414px) {
										height: 250px;
									}
									@media (min-width: 768px) {
										height: 500px;
									}
									@media (min-width: 1024px) {
										height: auto;
										padding-right: 60px;
									}
								`}
								fluid={dude.team_member_photo.localFile.childImageSharp.fluid}
							/>
						</div>
					</div>
					<div
						className="team-member-bio"
						css={css`
							// flex: 0 0 60%;
							// padding-left: 60px;
						`}
					>
						<div
							css={css`
								margin: 25px 0;
								padding: 0 1rem;
								@media (min-width: 1024px) {
									margin-top: 0;
								}
								p {
									margin: 0;
								}
							
								.team-member-name {
									font-weight: 700;
								}
							`}
						>
							<p
								className="team-member-name"
								css={css`
									margin: 0;
								`}
							>
								{name}
							</p>
							<p
								className="team-member-position" 
								css={css`
									margin: 0;
								`}
								dangerouslySetInnerHTML={{ __html: dude.team_member_position.text }} 
							/>
						</div>
						<div css={css`
							padding: 0 1rem;

							a {
								color: #fff;
								text-decoration: none;

								&:hover {
									text-decoration: underline;
								}
							}
						`}>
							<div className="team-member-bio" dangerouslySetInnerHTML={{ __html: dude.team_member_bio.html }} />
							<button className="back-button" onClick={() => {clickHandler(index + 1)}}>&#8249; Back</button>
						</div>
					</div>
				</div>
			)
		})
	)
}

const mapStateToProps = state => ({
	activeTeam: state.app.activeTeam,
	inactiveTeam: state.app.inactiveTeam
})

export default connect(mapStateToProps, {setActiveTeam, setInactiveTeam})(AllTeam)