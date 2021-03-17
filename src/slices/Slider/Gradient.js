import React from 'preact'
import { connect } from 'react-redux'
import { 
	setActiveWork,
	setInactiveWork
 } from '../../redux/actions'
import { css } from '@emotion/react'
import BackgroundImage from 'gatsby-background-image'
import SlidesContainer from './SlidesContainer'

const Gradient = props => {
	return(
		<BackgroundImage
				className="gradient"
				css={
					css`
						height: 100vh;
						padding-top: 90px;
					`
				}
				fluid={props.gradientData}
				Tag="div"
			>
				<div 
					css={css`
						flex: 1;
						margin: 0 auto;
						max-width: 1440px;
					`}
					id="factor-this"
				>
					<div 
						className="slides-header"
						css={css`padding: 0 1rem;`}
						id="slide-header"
					>
						<h2
							css={css`
								font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
								font-size: 3.5vw;
								font-weight: 400;
								line-height: 3vh;
								text-transform: capitalize;
								@media (min-width: 768px) {
									font-size: 1.25rem;
									line-height: 1.45rem;
								}
							`}
						>
							<em>&#x2F;&#x2F;</em>What we do
						</h2>
					</div>

					<SlidesContainer 
						activeWork={props.activeWork} 
						css={css`flex: 0 0 100%;`}
						inactiveWork={props.inactiveWork} 
						slidesData={props.compoData.input}
					/>
				</div>
			</BackgroundImage>
	)
}

const mapStateToProps = state => ({
	activeWork: state.app.activeWork,
	inactiveWork: state.app.inactiveWork
})
	
  export default connect(mapStateToProps, {setActiveWork, setInactiveWork})(Gradient)