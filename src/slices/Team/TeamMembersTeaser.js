import React from 'preact'
import { connect } from 'react-redux'
import { 
	setActiveTeam,
	setInactiveTeam
 } from '../../redux/actions'
import { css } from '@emotion/react'
import Img from 'gatsby-image'
import Helpers from '../../utils/Helpers'

let white = new Helpers('white')
let inOutQuart = new Helpers('in-out-quart')

const TeamMembersTeaser = props => {

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
			if (index === 0 && props.activeTeam === 0 ) {
				props.setInactiveTeam(4)
				props.setActiveTeam(index)
			} else {
				props.setInactiveTeam(props.activeTeam)
				props.setActiveTeam(index)
			}
		}
	}

	return (
		<div
			className={classBuilder(0)}
			css={css`
				display: flex;
				flex: 0 0 100%;
				flex-wrap: wrap;
				margin-top: 5%;
				transform: translateX(120%);
				@media (min-width: 768px) {
					flex-wrap: nowrap;
				}
				@media (min-width: 1024px) {
					margin-top: 2%;
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
			id="team-0"
		>
		{
			props.teamData.map((member, index) => {
				const name = `${member.team_member_first_name.text} ${member.team_member_last_name.text}`
				return(
					<div 
						css={css`
							align-items: center;
							display: flex;
							flex: 1 1 100%;
							flex-wrap: wrap;
							padding: 0 2rem;
							@media (min-width: 768px) {
								flex: 1 1 33.33%;
								padding: 0 1rem;
							}
						
							.gatsby-image-wrapper {
								cursor: pointer;
								height:13vh;
								width: 100% !important;
								@media (min-width: 768px) {
									height: auto;
								}
								@media (min-width: 1024px) {
									margin-bottom: 15px;
								}
							}
						
							button {
								background-color: transparent;
								border: 0;
							}
						
							.team-image {
								flex: 0 0 30%;
								@media (min-width: 768px) {
									flex: 0 0 100%;
								}
								button {
									padding: 0;
									width: 100%;
								}
							}
						
							.team-bio-block {
								flex: 0 0 70%;
								padding: 5px 10px;
								@media (min-width: 768px) {
									flex: 0 0 100%;
								}
						
								button {
									color: rgb(${white.defaultColors()});
									cursor: pointer;
									font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
									font-size: 13px;
									margin-left: 0;
									padding: 10px 0;
									text-align: left;
								}
							}
						
							h3,
							h4 {
								font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
								font-size: 13px;
								line-height: 16px;
								margin: 0;
								@media (min-width: 1920px) {
									font-size: 18px;
									line-height: 26px;
								}
							}
						
							h3 {
								font-weight: 600
							}
						
							h4 {
								font-weight: 400
							}
						
							.linkedin {
								font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
								margin: 0;
						
								a {
								color: rgb(${white.defaultColors()});
								font-weight: 800;
								text-decoration: none;
						
									&:hover {
										text-decoration: underline;
									}
								}
							}
						`}
						key={index}
					>
						<div className="team-image">
							<button onClick={() => {clickHandler(index + 1)}}>
								<Img
									alt="" 
									fluid={member.team_member_photo.localFile.childImageSharp.fluid}
									imgStyle={{
										height: "auto",
										width: "100%"
									}}
								/>
							</button>
						</div>
						<div className="team-bio-block">
							<h3 dangerouslySetInnerHTML={{ __html: name }} />
							<div dangerouslySetInnerHTML={{ __html: member.team_member_position.html }} />
							<button onClick={() => {clickHandler(index + 1)}}>&#47;&#47; See {member.team_member_first_name.text}'s Bio</button>
						</div>
					</div>
				)
			})
		}
		</div>
	)
}

const mapStateToProps = state => ({
	activeTeam: state.app.activeTeam,
	inactiveTeam: state.app.inactiveTeam
})

export default connect(mapStateToProps, {setActiveTeam, setInactiveTeam})(TeamMembersTeaser)