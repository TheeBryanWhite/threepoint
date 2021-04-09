import React from 'preact'
import { connect } from 'react-redux'
import { 
	setActiveWork,
	setInactiveWork,
	setSlideDirection
 } from '../../redux/actions'
import { css } from '@emotion/react'

import { ReactComponent as SVGLeft } from '../../svg/left-chevron.svg'
import { ReactComponent as SVGRight } from '../../svg/right-chevron.svg'

const SlideNav = props => {

	const clickHandler = direction => {
		if (direction === 'next') {
			if (props.activeWork <= 3) {
				props.setActiveWork(props.activeWork + 1)
				props.setInactiveWork(props.activeWork)
				props.setSlideDirection('next')
			} else {
				props.setActiveWork(0)
				props.setInactiveWork(4)
				props.setSlideDirection('next')
			}
		}

		if (direction === 'prev') {
			if (props.activeWork <= 0) {
				props.setActiveWork(4)
				props.setInactiveWork(0)
				props.setSlideDirection('prev')
			} else {
				props.setActiveWork(props.activeWork - 1)
				props.setInactiveWork(props.activeWork)
				props.setSlideDirection('prev')
			}
		}
	}

	return(
		<div
			css={css`
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				width: 100%;
				z-index: 10;
			`}
		>
			<button 
				css={css`
					background-color: transparent;
					border: 0;
					cursor: pointer;
					left: 0;
					position: absolute;
					@media (min-width: 1920px) {
						left: 2%;
					}
					&:focus {
						outline: none;
					}
				`}
				id="button-prev" 
				onClick={() => {clickHandler('prev')}}
			>
				<SVGLeft
					css={css`
						fill: #FFDC32;
						width: 30px;
					`}
				/>
			</button>
			<button
				css={css`
					background-color: transparent;
					border: 0;
					cursor: pointer;
					right: 0;
					position: absolute;
					@media (min-width: 1920px) {
						right: 2%;
					}
					&:focus {
						outline: none;
					}
				`}
				id="button-next" 
				onClick={() => {clickHandler('next')}}
			>
				<SVGRight
					css={css`
						fill: #FFDC32;
						width: 30px;
					`}
				/>
			</button>
		</div>
	)
}

const mapStateToProps = state => ({
	activeWork: state.app.activeWork,
	inactiveWork: state.app.inactiveWork
})
	
  export default connect(mapStateToProps, {setActiveWork, setInactiveWork, setSlideDirection})(SlideNav)