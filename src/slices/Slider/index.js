import React from 'react'
import { connect } from 'react-redux'
import Helpers from '../../utils/Helpers'
import Gradient from './Gradient'
import SlideNav from './SlideNav'

import { css } from '@emotion/react'

let white = new Helpers('white')
let gray = new Helpers('gray')
let blue = new Helpers('blue')
let green = new Helpers('green')

const Slider = props => {

	const workSlides = () => {
		return `slide${props.activeWork}`
	}

	return (
		<section
			className={workSlides()}
			css={css`
				color: rgb(${white.defaultColors()});
				overflow: hidden;
				position: relative;
				transition: all 0.5s linear;
				z-index: 1;
			
				&.slide0 {
					background-color: rgb(${gray.defaultColors()});
				}
			
				&.slide1 {
					background-color: rgb(${blue.defaultColors()});
				}
			
				&.slide2 {
					background-color: #CBCBCF;
				}
			
				&.slide3 {
					background-color: rgb(${green.defaultColors()});
				}
			
				&.slide4 {
					background-color: #CBCBCF;
				}
			`}
			id={props.input.primary.section_id}
		>
			<Gradient compoData={props} />
			<SlideNav />
		</section>
	)
}
	
const mapStateToProps = state => ({
	activeWork: state.app.activeWork,
	inactiveWork: state.app.inactiveWork
})
	
export default connect(mapStateToProps, null)(Slider)