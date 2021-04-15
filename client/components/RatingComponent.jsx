import React, { Component } from 'react'
import RatingButton from './RatingButton'

export default class RatingComponent extends Component {
  constructor(props) {
    super(props)
  }

  positivePercentageColor () {
    const percentage = this.props.positivePercentage
    let textColor
    if (percentage >= 70.0) {
      textColor = 'green'
    } else if (percentage >= 50.0) {
      textColor = 'yellow'
    } else {
      textColor = 'red'
    }
    return textColor
  }

  ratingValue () {
    if (this.props.positivePercentage) {
      return `  ${this.props.positivePercentage.toFixed(1)}%  `
    } else {
      return '  No Ratings!  '
    }
  }

  render () {
    const percentageColor = this.positivePercentageColor()
    const percentage = this.ratingValue()

    return (
      <div>
        <RatingButton isPositive={false} />
        <span className='ml-2 mr-2' style={{ color: percentageColor }}>{percentage}</span>
        <RatingButton isPositive={true} />
      </div>
    );
  }
}
