import React from 'preact'
import { connect } from 'react-redux'
import { 
	setActiveTeam,
	setInactiveTeam
 } from '../../redux/actions'
import styled from "@emotion/styled"
import Img from 'gatsby-image'
import Helpers from '../../utils/Helpers'

let white = new Helpers('white')
let inOutQuart = new Helpers('in-out-quart')

const TeamMember = styled.div`
	display: flex;
	flex: 0 0 100%;
	transform: translateX(120%);

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
`

const TeamMemberTeaser = styled.div`
	flex: 1 1 33.333%;
	@media (min-width: 768px) {
		padding: 0 1rem;
	}

	.gatsby-image-wrapper {
		cursor: pointer;
		width: 100% !important;
		@media (min-width: 1024px) {
			height: 38vh;
			margin-bottom: 15px;
		}
		@media (min-width: 1440px) and (min-height: 821px) {
			height: auto;
		}
	}

	button {
		background-color: transparent;
		border: 0;
	}

	.team-image {
		button {
			padding: 0;
			width: 100%;
		}
	}

	.team-bio-block {
		padding: 5px 10px;

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
`

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
		<TeamMember
			className={classBuilder(0)}
			id="team-0"
		>
		{
			props.teamData.map((member, index) => {
				const name = `${member.team_member_first_name.text} ${member.team_member_last_name.text}`
				return(
					<TeamMemberTeaser key={index}>
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
							<p className="linkedin"><a href={member.team_member_linkedin.url} target="_blank" rel="noreferrer">LI</a></p>
						</div>
					</TeamMemberTeaser>
				)
			})
		}
		</TeamMember>
	)
}

const mapStateToProps = state => ({
	activeTeam: state.app.activeTeam,
	inactiveTeam: state.app.inactiveTeam
})

export default connect(mapStateToProps, {setActiveTeam, setInactiveTeam})(TeamMembersTeaser)