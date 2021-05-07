import React from 'preact'
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
				align-items: center;
				background-color: rgb(${black.defaultColors()});
				color: #fff;
				display: flex;
				height: 120vh;
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
			<div 
				css={css`
					flex: 0 0 100%;
					margin: 0 auto;
					min-height: 100vh;
					max-width: 1440px;
					position: relative;
				`}
			>
				<div
					css={css`
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						width: 100%;
					`}
				>
					<div className="team-header">
						<div
							css={css`
								padding: 0 2rem;
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
					</div>
					<div
						css={css`
							position: relative;
							@media (min-width: 768px) {
								padding: 0 2rem;
							}
						`}
					>
						<div 
							css={css`
							padding: 0 1rem;
							p {
								font-family: 'Axis', Helvetica, Arial, sans-seriff;
								font-size: 3vw;
								line-height: 3.5vh;
								margin: 0;
								text-transform: uppercase;
								@media (min-width: 1024px) {
									font-size: 1.55rem;
									line-height: 2.338rem;
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
							dangerouslySetInnerHTML={{ __html: props.input.primary.team_body.html }} 
						/>
						<div
							css={css`
								position: relative;
							`}
						>
							<TeamMembersTeaser teamData={props.input.items} />
							<AllTeam teamData={props.input.items} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Team