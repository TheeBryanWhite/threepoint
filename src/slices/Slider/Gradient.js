import React from 'preact/compat'
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
					min-height: 120vh;
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
					left: 50%;
					max-width: 1440px;
					position: absolute;
					top: 50%;
					transform: translate(-50%, -50%);
					width: 100%;
				`}
				id="clients-wrapper"
			>
				<div 
					css={css`
						flex: 1 1 auto;
						position: relative
					`}
					id="clients-body"
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