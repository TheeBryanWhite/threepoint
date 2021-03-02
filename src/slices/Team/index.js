import React from 'preact'
import styled from "@emotion/styled"
import Helpers from '../../utils/Helpers'
import TeamMembersTeaser from './TeamMembersTeaser'
import AllTeam from './AllTeam'

let black = new Helpers('black')
let white = new Helpers('white')
let yellow = new Helpers('yellow')

const TeamEl = styled.section`
	background-color: rgb(${black.defaultColors()});
	height: 100vh;
	overflow-x: hidden;
	position: relative;
	z-index: 1;
`

const containerMargin = new Helpers(81.5)
const Container = styled.div`
	color: rgb(${white.defaultColors()});
	font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
    margin: 0 auto;
	padding: 0 ${containerMargin.toRem};
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 100%;

	h2 {
		font-size: 20px;
		font-style: italic;
		font-weight: 300;

		&:before {
			color: rgb(${yellow.defaultColors()});
			content: '//';
		}
	}

	.team-header {
		p {
			font-family: 'Axis', Helvetica, Arial, sans-seriff;
			font-size: 36px;
			line-height: 47px;
			text-transform: uppercase;
		}

		em {
			color: rgb(${yellow.defaultColors()});
		}
	}
`

const TeamSlideContainer = styled.div`
	position: relative;
`

const Team = props => {
	return(
		<TeamEl>
			<Container>
				<div className="team-header">
					<div dangerouslySetInnerHTML={{ __html: props.input.primary.team_body.html }} />
				</div>
				<TeamSlideContainer>
					<TeamMembersTeaser teamData={props.input.items} />
					<AllTeam teamData={props.input.items} />
				</TeamSlideContainer>
			</Container>
		</TeamEl>
	)
}

export default Team