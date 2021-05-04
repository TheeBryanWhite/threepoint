import React from 'preact'
import { connect } from 'react-redux'
import { 
	setActiveWork,
	setInactiveWork
 } from '../../redux/actions'
import { css } from '@emotion/react'
import SlidesContainer from './SlidesContainer'
import ProductImages from './ProductImages'
import Logos from './Logos'

const Gradient = props => {
	return(
		<div
			className="gradient"
			css={
				css`
					background: radial-gradient(at bottom left, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 60%),
              		            radial-gradient(at top right, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 60%);
					min-height: 150vh;
					position: relative;
				`
			}
		>
			<div
				css={css`
					display: flex;
					flex: 1;
					flex-direction: column;
					height: 100vh;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					width: 100%;
				`}
			>
				<div 
					className="slides-header"
					css={css`
						flex: 0 0 20px;
						z-index: 1;
					`}
					id="slide-header"
				>
					<h2
						css={css`
							font-family: 'Core Sans', Helvetica, Arial, sans-seriff;
							font-size: 3.5vw;
							font-style: italic;
							font-weight: 400;
							line-height: 3vh;
							padding: 0 2rem;
							text-transform: capitalize;
							@media (min-width: 768px) {
								font-size: 1.25rem;
								line-height: 1.45rem;
								padding: 0 2rem;
							}
						`}
					>
						<span css={css`color: #FFDC32;`}>&#x2F;&#x2F;</span>What we do
					</h2>
				</div>
				<div 
					css={css`
						flex: 1 1 auto;
						position: relative
					`}
				>
					<SlidesContainer 
						activeWork={props.activeWork}
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
		</div>
	)
}

const mapStateToProps = state => ({
	activeWork: state.app.activeWork,
	inactiveWork: state.app.inactiveWork
})
	
  export default connect(mapStateToProps, {setActiveWork, setInactiveWork})(Gradient)