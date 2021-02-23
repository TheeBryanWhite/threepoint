import React, {Component} from 'preact'
import PropTypes from 'prop-types'
import { 
  Hero, 
  OneCol, 
  Tweener,
  Slider,
  TimedSlider,
  Team,
  PageFooter
} from '../../slices'

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props

    const slice = allSlices.map((slice) => {
      switch (slice.slice_type) {
        // These are the API IDs of the slices
        case 'hero':
        	return <Hero key={slice.id} input={slice} />
        case 'one_column':
          return <OneCol key={slice.id} input={slice} />
        case 'tweener':
          return <Tweener key={slice.id} input={slice} />
        case 'our_work':
          return <Slider key={slice.id} input={slice} />
        case 'team':
          return <Team key={slice.id} input={slice} />
        case 'timed_slider':
          return <TimedSlider key={slice.id} input={slice} />
        case 'page_footer':
          return <PageFooter key={slice.id} input={slice} />
        default:
        	return null
      }
    })
    return slice
  }
}

SliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
}
