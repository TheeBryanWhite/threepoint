import React from 'preact'
import Div100vh from 'react-div-100vh'
import Helpers from '../../utils/Helpers'
import TeamMembersTeaser from './TeamMembersTeaser'
import AllTeam from './AllTeam'
import { css } from '@emotion/react'

let black = new Helpers('black')
let yellow = new Helpers('yellow')

const Team = props => {
	return(
		<section
			css={css`
				background-color: rgb(${black.defaultColors()});
				color: #fff;
				overflow: hidden;
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
			`}
			id={props.input.primary.section_id}
		>
			<Div100vh>
				<div 
					css={css`
						margin: 0 auto;
						max-width: 1440px;
						@media (min-width: 1920px) {
							margin-top: 150px;
						}
					`}
				>
					<div 
						className="team-header"
						css={css`
							padding: 100px 2rem 0;
							@media (min-width: 1920px) {
								padding-top: 150px;
							}
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
									font-size: 2rem;	
									line-height: 2.338rem;
								}
							}
					
							em {
								color: rgb(${yellow.defaultColors()});
								font-style: normal;
							}
						`}
					>
						<div
							css={css`
								margin-bottom: 3.5vh;
								@media (min-width: 768px) {
									margin-bottom: 7vh;
								}
								@media (min-width: 1280px) {
									margin-bottom: 3.5vh;
								}
							`}
							dangerouslySetInnerHTML={{ __html: props.input.primary.title.html }} 
						/>
						<div dangerouslySetInnerHTML={{ __html: props.input.primary.team_body.html }}  />
					</div>
					<div
						css={css`
							position: relative;
							@media (min-width: 768px) {
								padding: 0 2rem;
							}
						`}
					>
						<TeamMembersTeaser teamData={props.input.items} />
						<AllTeam teamData={props.input.items} />
					</div>
				</div>
			</Div100vh>
		</section>
	)
}

export default Team