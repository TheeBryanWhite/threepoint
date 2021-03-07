import React from 'preact'
import styled from "@emotion/styled"
import Helpers from '../../utils/Helpers'
import TeamMembersTeaser from './TeamMembersTeaser'
import AllTeam from './AllTeam'
import { css } from "@emotion/react"

let black = new Helpers('black')
let yellow = new Helpers('yellow')

const TeamEl = styled.section`
	background-color: rgb(${black.defaultColors()});
	color: #fff;
	height: 100vh;
	overflow-x: hidden;
	padding-top: 85px;
	position: relative;
	z-index: 1;

	h2 {
		font-size: 4vw;
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
			font-size: 4vw;
			line-height: 4vh;
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
		<TeamEl
			id={props.input.primary.section_id}
		>
			<div>
				<div 
					className="team-header"
					css={css`
						padding: 0 2rem;
					`}
				>
					<div dangerouslySetInnerHTML={{ __html: props.input.primary.team_body.html }} />
				</div>
				<TeamSlideContainer>
					<TeamMembersTeaser teamData={props.input.items} />
					<AllTeam teamData={props.input.items} />
				</TeamSlideContainer>
			</div>
		</TeamEl>
	)
}

export default Team