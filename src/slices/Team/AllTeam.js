import React from 'preact'
import { connect } from 'react-redux'
import { 
	setActiveTeam,
	setInactiveTeam
 } from '../../redux/actions'
import Img from 'gatsby-image'
import styled from "@emotion/styled"
import Helpers from '../../utils/Helpers'

let white = new Helpers('white')
let inOutQuart = new Helpers('in-out-quart')

const TeamMember = styled.div`
	align-items: center;
	display: flex;
	left: 0;
	top: 0;
	transform: translateX(120%);
	position: absolute;
	width: 100%;

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
`

const TeamColumn = styled.div`

	&.team-member-photo {
		flex: 0 0 40%;
		height: 500px;
	}

	.team-member-photo-inner {
		padding-right: 100px;
	}

	&.team-member-meta {
		font-size: 20px;
	}

	&.team-member-bio {
		flex: 0 0 60%;
		font-size: 18px;

		a {
			color: rgb(${white.defaultColors()});
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}
`

const TeamMemberMeta = styled.div`
	margin-bottom: 25px;

	p {
		font-size: 20px;
		margin: 0;
	}

	.team-member-name {
		font-weight: 700;
	}
`

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
				<TeamMember 
					className={classBuilder(index + 1)}
					id={`team-${index + 1}`}
					key={index}
				>
					<TeamColumn className="team-member-photo">
						<div className="team-member-photo-inner">
							<Img fluid={dude.team_member_photo.localFile.childImageSharp.fluid} alt="" />
						</div>
					</TeamColumn>
					<TeamColumn className="team-member-bio">
						<TeamMemberMeta>
							<p className="team-member-name">{name}</p>
							<p className="team-member-position" dangerouslySetInnerHTML={{ __html: dude.team_member_position.text }} />
						</TeamMemberMeta>
						<div className="team-member-position" dangerouslySetInnerHTML={{ __html: dude.team_member_bio.html }} />
						<button className="back-button" onClick={() => {clickHandler(index + 1)}}>&#8249; Back</button>
					</TeamColumn>
				</TeamMember>
			)
		})
	)
}

const mapStateToProps = state => ({
	activeTeam: state.app.activeTeam,
	inactiveTeam: state.app.inactiveTeam
})

export default connect(mapStateToProps, {setActiveTeam, setInactiveTeam})(AllTeam)