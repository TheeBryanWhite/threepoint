import React from 'preact'
import styled from "@emotion/styled"
import Helpers from '../../utils/Helpers'
import TeamMembersTeaser from './TeamMembersTeaser'
import AllTeam from './AllTeam'
import { css } from '@emotion/react'

let black = new Helpers('black')
let yellow = new Helpers('yellow')

const TeamEl = styled.section`
	background-color: rgb(${black.defaultColors()});
	color: #fff;
	height: 100vh;
	overflow-x: hidden;
	position: relative;
	z-index: 1;

	h1 {
		font-size: 4vw;
		font-style: italic;
		font-weight: 300;
		@media (min-width: 768px) {
			font-size: 1.25rem;	
		}
		@media (min-width: 1440px) {
			margin-bottom: 4vh;
		}

		&:before {
			color: rgb(${yellow.defaultColors()});
			content: '//';
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
			<div 
				css={css`
					margin: 100px auto 0;
					max-width: 1440px;
					@media (min-width: 1920px) {
						margin-top: 150px;
					}
				`}
			>
				<div 
					className="team-header"
					css={css`
						padding: 0 2rem;
						p {
							font-family: 'Axis', Helvetica, Arial, sans-seriff;
							font-size: 3vw;
							line-height: 3.5vh;
							margin: 0;
							text-transform: uppercase;
							@media (min-width: 1024px) {
								font-size: 1.55rem;
								line-height: 2.338rem;
								padding: 0 1rem;
							}
							@media (min-width: 1920px) {
								font-size: 2.25rem;	
								line-height: 2.938rem;
							}
						}
				
						em {
							color: rgb(${yellow.defaultColors()});
							font-style: normal;
						}
					`}
				>
					<div dangerouslySetInnerHTML={{ __html: props.input.primary.title.html }} />
					<div dangerouslySetInnerHTML={{ __html: props.input.primary.team_body.html }}  />
				</div>
				<TeamSlideContainer
					css={css`
						@media (min-width: 768px) {
							padding: 0 2rem;
						}
					`}
				>
					<TeamMembersTeaser teamData={props.input.items} />
					<AllTeam teamData={props.input.items} />
				</TeamSlideContainer>
			</div>
		</TeamEl>
	)
}

export default Team