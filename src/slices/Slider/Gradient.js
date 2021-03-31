import React from 'preact'
import { connect } from 'react-redux'
import { 
	setActiveWork,
	setInactiveWork
 } from '../../redux/actions'
import { css } from '@emotion/react'
import BackgroundImage from 'gatsby-background-image'
import SlidesContainer from './SlidesContainer'
import ProductImages from './ProductImages'
import Logos from './Logos'

const Gradient = props => {
	return(
		<BackgroundImage
				className="gradient"
				css={
					css`
						height: 100vh;
						padding-top: 150px;
						@media (min-width: 1024px) {
							padding-top: 15vh;
						}
						@media (min-width: 1440px) and (min-height: 821px) {
							padding-top: 150px;
						}
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
						id="slide-header"
					>
						<h2
							css={css`
								font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
								font-size: 3.5vw;
								font-weight: 400;
								line-height: 3vh;
								padding: 0 2rem;
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
					<div css={css`position: relative`}>
						<SlidesContainer 
							activeWork={props.activeWork}
							css={css`flex: 0 0 100%;`}
							inactiveWork={props.inactiveWork} 
							slidesData={props.compoData.input}
						/>
						<ProductImages
							activeWork={props.activeWork}
							imgData={props.compoData.input}
							inactiveWork={props.inactiveWork}
						/>
						<Logos
							activeWork={props.activeWork}
							logoData={props.compoData.input}
							inactiveWork={props.inactiveWork}
						/>
					</div>
				</div>
			</BackgroundImage>
	)
}

const mapStateToProps = state => ({
	activeWork: state.app.activeWork,
	inactiveWork: state.app.inactiveWork
})
	
  export default connect(mapStateToProps, {setActiveWork, setInactiveWork})(Gradient)