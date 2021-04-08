import React, { Component } from 'react'
import RatingButton from './RatingButton'

export default class RatingComponent extends Component {
  constructor(props) {
    super(props)
  }

  positivePercentageColor() {
    const percentage = this.props.positivePercentage
    let textColor = undefined
    if (percentage >= 70.0) {
      textColor = 'green'
    } else if (percentage >= 50.0 ) {
        textColor = 'yellow'
    } else {
        textColor = 'red'
    }
    return textColor
  }


  render() {
    const percentageColor = this.positivePercentageColor()
    return(
      <div>
        <RatingButton isPositive={ false }/>
          <span style={{ color: percentageColor }}>{this.props.positivePercentage}%</span>
        <RatingButton isPositive={ true }/>
      </div>
    );
  }
}
